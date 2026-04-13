import { useState, useMemo } from 'react';
import { DATA } from './data';
import type { Question } from './data';
import { Search, Code2, Database, Globe, BookOpen, TerminalSquare, Copy, CheckCircle, Eye, EyeOff } from 'lucide-react';
import './index.css';

const parseQuestion = (qText: string) => {
  const patterns = [
    /^(.*?(?:작성하시오|쓰시오|구하시오|나열하시오|설명하시오|답하시오|고르시오|찾으시오|서술하시오|출력하시오|계산하시오|표시하시오)\.?)\s*\n([\s\S]+)/,
    /^(.*?(?:\?|？|：))\s*\n([\s\S]+)/,
    /^([^\n]{10,120})\n((?:\[보기|보기:|설명:|조건:|\-|•|①|②|③|④|⑤|1\)|2\)|ㄱ\.|ㄴ\.)[\s\S]+)/,
    /^(다음.*?(?:문제|내용|코드|표|그림).*?)\n([\s\S]+)/,
  ];
  for (let pattern of patterns) {
    const match = qText.match(pattern);
    if (match && match[2].trim().length > 0) {
      return { question: match[1].trim(), description: match[2].trim() };
    }
  }
  const lines = qText.split('\n');
  if (lines.length >= 2) {
    const firstLine = lines[0].trim();
    const rest = lines.slice(1).join('\n').trim();
    if (rest.length > 15 && (rest.includes('-') || rest.includes('•') || rest.includes('①') || rest.includes('1)') || rest.includes('[') || rest.includes('(') || rest.includes(':') || /^[ㄱ-ㅎ]\./.test(rest))) {
      return { question: firstLine, description: rest };
    }
  }
  return { question: qText, description: null };
};

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type DescSeg =
  | { kind: 'label'; text: string }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'list'; marker: string; content: string }
  | { kind: 'line'; text: string };

const parseDescSegments = (description: string): DescSeg[] => {
  const markerPattern = /([^\n])\s+(?=[\-•*]\s|[①②③④⑤⑥⑦⑧⑨⑩]|(?:\d+[\.\)]\s)|[ㄱ-ㅎ]\.\s)/g;
  const normalized = description.replace(markerPattern, '$1\n');
  const lines = normalized.split('\n').filter(l => l.trim());

  const listPattern = /^[\-•*]\s*|^[①②③④⑤⑥⑦⑧⑨⑩]\s*|^\([1-9]\)\s*|^\d+[\.\)]\s*|^[ㄱ-ㅎ]\.\s+/;
  const sectionPattern = /^\[(.+)\]$/;
  const isTableRow = (line: string) => line.includes('|');
  const parseCells = (row: string) => row.split('|').map(c => c.trim()).filter(c => c !== '');

  const segs: DescSeg[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    const labelMatch = line.match(sectionPattern);
    if (labelMatch) {
      segs.push({ kind: 'label', text: labelMatch[1] });
      i++;
      continue;
    }

    if (isTableRow(line)) {
      const tableLines: string[] = [];
      while (i < lines.length && isTableRow(lines[i].trim())) {
        tableLines.push(lines[i].trim());
        i++;
      }
      segs.push({
        kind: 'table',
        headers: parseCells(tableLines[0]),
        rows: tableLines.slice(1).map(parseCells),
      });
      continue;
    }

    const isListItem = listPattern.test(line);
    if (isListItem) {
      const markerMatch = line.match(listPattern);
      const marker = markerMatch ? markerMatch[0] : '';
      segs.push({ kind: 'list', marker, content: line.replace(listPattern, '') });
    } else {
      segs.push({ kind: 'line', text: line });
    }
    i++;
  }

  return segs;
};

const DescriptionBox = ({ description, highlightText }: { description: string, highlightText: (t: string) => React.ReactNode }) => {
  const segs = parseDescSegments(description);

  return (
    <div className="q-desc-container">
      <div className="q-desc-label">보기</div>
      <div className="q-desc-content">
        {segs.map((seg, idx) => {
          if (seg.kind === 'label')
            return <div key={idx} className="q-desc-section-label">{seg.text}</div>;

          if (seg.kind === 'table')
            return (
              <div key={idx} className="q-desc-table-wrap">
                <table className="q-desc-table">
                  <thead>
                    <tr>{seg.headers.map((h, j) => <th key={j}>{highlightText(h)}</th>)}</tr>
                  </thead>
                  <tbody>
                    {seg.rows.map((row, j) => (
                      <tr key={j}>{row.map((cell, k) => <td key={k}>{highlightText(cell)}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          if (seg.kind === 'list')
            return (
              <div key={idx} className="q-desc-item">
                <span className="q-desc-marker">{seg.marker}</span>
                <span className="q-desc-text">{highlightText(seg.content)}</span>
              </div>
            );

          return <div key={idx} className="q-desc-line">{highlightText(seg.text)}</div>;
        })}
      </div>
    </div>
  );
};

const QuestionCard = ({ q, index, year, round, kw }: { q: Question, index: number, year: string, round: string, kw: string }) => {
  const [showCode, setShowCode] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (q.code) {
      navigator.clipboard.writeText(q.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const highlightText = (text: string) => {
    if (!kw) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${kw})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === kw.toLowerCase() ? <span key={i} className="highlight">{part}</span> : part
        )}
      </>
    );
  };

  const badgeIcons = {
    code: <Code2 size={14} />,
    sql: <Database size={14} />,
    concept: <BookOpen size={14} />,
    network: <Globe size={14} />,
    db: <Database size={14} />
  };

  const badgeLabels = { code: '코드', sql: 'SQL', concept: '개념', network: '네트워크', db: 'DB' };
  const { question, description } = parseQuestion(q.q);

  return (
    <div className="q-card" data-testid="question-card">
      <div className="q-header">
        <div className="q-num">Q{index.toString().padStart(2, '0')}</div>
        <div className="q-badge">
          {badgeIcons[q.type]} {badgeLabels[q.type]}
        </div>
        <div className="q-meta">{year} {round}</div>
      </div>

      <div className="q-text">{highlightText(question)}</div>

      {description && <DescriptionBox description={description} highlightText={highlightText} />}

      {q.img && (
        <div className="q-img-wrap">
          <img src={q.img} alt="diagram" style={{maxWidth:'100%',borderRadius:'6px',marginTop:'0.75rem'}} />
        </div>
      )}

      {showCode && q.code && (
        <div className="code-area">
          <div className="code-header">
            <span>{q.lang || 'text'}</span>
            <button className="btn-copy" onClick={handleCopy}>
              {copied ? <><CheckCircle size={12} /> 복사됨</> : <><Copy size={12} /> 복사</>}
            </button>
          </div>
          <div className="code-content">
            <SyntaxHighlighter 
              language={q.lang || 'text'} 
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1.25rem',
                fontSize: '0.9rem',
                backgroundColor: 'transparent'
              }}
            >
              {q.code}
            </SyntaxHighlighter>
          </div>
        </div>
      )}

      {showAnswer && (
        <div className="answer-area">
          <div className="answer-label">정답 및 해설</div>
          <div className="answer-text">{highlightText(q.a)}</div>
        </div>
      )}

      <div className="q-actions">
        {q.code && (
          <button className={`action-btn ${showCode ? 'active' : ''}`} onClick={() => setShowCode(!showCode)}>
            <TerminalSquare size={16} /> {showCode ? '코드 닫기' : '코드 보기'}
          </button>
        )}
        <button className={`action-btn ${showAnswer ? 'active' : ''}`} onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <EyeOff size={16} /> : <Eye size={16} />} {showAnswer ? '정답 닫기' : '정답 보기'}
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const years = Object.keys(DATA);
  const [curYear, setCurYear] = useState(years[0]);
  const rounds = Object.keys(DATA[curYear]);
  const [curRound, setCurRound] = useState(rounds[0]);

  const [curFilter, setCurFilter] = useState('all');
  const [search, setSearch] = useState('');

  const handleYearChange = (year: string) => {
    setCurYear(year);
    setCurRound(Object.keys(DATA[year])[0]);
  };

  const questions = DATA[curYear]?.[curRound] || [];

  const filteredQuestions = useMemo(() => {
    return questions.filter((q: Question) => {
      if (curFilter !== 'all' && q.type !== curFilter) return false;
      const kw = search.trim().toLowerCase();
      if (kw) {
        const matchQ = q.q.toLowerCase().includes(kw);
        const matchC = (q.code || '').toLowerCase().includes(kw);
        const matchA = q.a.toLowerCase().includes(kw);
        if (!matchQ && !matchC && !matchA) return false;
      }
      return true;
    });
  }, [questions, curFilter, search]);

  const filters = [
    { id: 'all', label: '전체' },
    { id: 'code', label: '코드' },
    { id: 'sql', label: 'SQL' },
    { id: 'concept', label: '개념' },
    { id: 'network', label: '네트워크' },
    { id: 'db', label: 'DB' }
  ];

  return (
    <div className="app-container">
      <header className="header">
        <h1>정보처리기사 기출문제</h1>
        <p>복잡함은 비우고, 학습에만 집중하는 편안한 모노톤 환경</p>
      </header>

      <div className="controls-section">
        <div className="nav-row">
          <div className="tab-group">
            {years.map(y => (
              <button key={y} className={`tab-btn ${curYear === y ? 'active' : ''}`} onClick={() => handleYearChange(y)}>
                {y}년
              </button>
            ))}
          </div>
          <div className="tab-group">
            {rounds.map(r => (
              <button key={r} className={`tab-btn ${curRound === r ? 'active' : ''}`} onClick={() => setCurRound(r)}>
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="toolbar">
          <div className="filters">
            {filters.map(f => (
              <button
                key={f.id}
                className={`filter-btn ${curFilter === f.id ? 'active' : ''}`}
                onClick={() => setCurFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="문제나 개념을 검색하세요..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="q-list">
        {filteredQuestions.length === 0 ? (
          <div className="no-results">검색 결과가 없습니다.</div>
        ) : (
          filteredQuestions.map((q: Question, idx: number) => (
            <QuestionCard
              key={idx}
              q={q}
              index={questions.indexOf(q) + 1}
              year={curYear}
              round={curRound}
              kw={search.trim()}
            />
          ))
        )}
      </div>
    </div>
  );
}
