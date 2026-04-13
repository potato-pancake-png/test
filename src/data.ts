export const DATA: Record<string, Record<string, Question[]>> = {
  "2024": {
    "1회": [
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`class Connection {
    private static Connection _inst = null;
    private int count = 0;

    static public Connection get() {
        if (_inst == null) {
            _inst = new Connection();
            return _inst;
        }
        return _inst;
    }
    public void count() { count++; }
    public int getCount() { return count; }
}

public class main {
    public static void main(String[] args) {
        Connection conn1 = Connection.get();
        conn1.count();
        Connection conn2 = Connection.get();
        conn2.count();
        Connection conn3 = Connection.get();
        conn3.count();
        conn1.count();
        System.out.print(conn1.getCount());
    }
}`,lang:"java",a:"4"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
int main() {
    int v1 = 0, v2 = 35, v3 = 29;
    if (v1 > v2 ? v2 : v1) {
        v2 = v2 << 2;
    } else {
        v3 = v3 << 2;
    }
    printf("%d", v2 + v3);
}`,lang:"c",a:"151"},
      {type:"concept",q:"다음은 응집도와 관련된 문제입니다. 보기에서 응집도가 높은 순으로 나열하시오.\n-ㄱ. 기능\n-ㄴ. 교환\n-ㄷ. 우연\n-ㄹ. 시간",a:"ㄱ → ㄴ → ㄹ → ㄷ"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
#include <string.h>

void reverse(char* str) {
    int len = strlen(str);
    char temp;
    char* p1 = str;
    char* p2 = str + len - 1;
    while (p1 < p2) {
        temp = *p1; *p1 = *p2; *p2 = temp;
        p1++; p2--;
    }
}

int main(int argc, char* argv[]) {
    char str[100] = "ABCDEFGH";
    reverse(str);
    int len = strlen(str);
    for (int i = 1; i < len; i += 2)
        printf("%c", str[i]);
    printf("\n");
    return 0;
}`,lang:"c",a:"GECA"},
      {type:"network",q:"아래 네트워크에서 라우터를 통한 할당 가능한 2번, 4번, 5번의 IP를 작성하시오.\n-1) 192.168.35.3/24\n-3) 129.200.10.16/22\n-6) 192.168.36.24/24",a:"2) 192.168.35.72 / 4) 129.200.8.249 / 5) 192.168.36.249"},
      {type:"db",q:"아래 표에서 나타나고 있는 정규형을 작성하시오.\n(고객아이디 | 강좌명 | 강사번호)\n- 부분 함수 종속 없음\n- 이행 함수 종속 없음",a:"제3정규형 (3NF)"},
      {type:"network",q:"아래 내용에서 설명하는 네트워크 용어를 영문 약자로 작성하시오.\n- 링크 상태 라우팅 프로토콜\n- 단일 자율 시스템 내 내부 게이트웨이 프로토콜\n- Dijkstra 알고리즘으로 최단 경로 계산",a:"OSPF"},
      {type:"db",q:"아래 각 설명에 대한 조인 종류를 작성하시오.\n(1) 조건 만족 튜플만 반환\n(2) '='(등호)로 일치하는 결과 반환\n(3) (2)에서 중복 속성 제거",a:"(1) 세타 조인  (2) 동등 조인  (3) 자연 조인"},
      {type:"concept",q:"페이지 참조 순서: 1 2 3 1 2 4 1 2 5 7. \n- 할당된 프레임 수가 3개일 때 LRU와 LFU 알고리즘의 페이지 부재 횟수를 각각 작성하시오.",a:"(1) LRU: 6회  (2) LFU: 6회"},
      {type:"code",q:"아래 Java 코드의 실행 순서를 작성하시오. (중복 번호 없이)",code:`class Parent {
    int x, y;
    Parent(int x, int y) { /* ① */
        this.x = x; this.y = y;
    }
    int getT() { /* ② */
        return x * y;
    }
}
class Child extends Parent {
    int x;
    Child(int x) { /* ③ */
        super(x + 1, x);
        this.x = x;
    }
    int getT(int n) { /* ④ */
        return super.getT() + n;
    }
}
class Main {
    public static void main(String[] args) { /* ⑤ */
        Parent parent = new Child(3); /* ⑥ */
        System.out.println(parent.getT()); /* ⑦ */
    }
}`,lang:"java",a:"실행 순서: ⑤ → ⑥ → ③ → ① → ⑦ → ②"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
typedef struct { int accNum; double bal; } BankAcc;

double sim_pow(double base, int year) {
    double r = 1.0;
    for (int i = 0; i < year; i++) r *= base;
    return r;
}
void initAcc(BankAcc* acc, int x, double y) { acc->accNum=x; acc->bal=y; }
void xxx(BankAcc* acc, double* en) {
    if (*en > 0 && *en < acc->bal) acc->bal -= *en;
    else acc->bal += *en;
}
void yyy(BankAcc* acc) { acc->bal *= sim_pow(1.1, 3); }

int main() {
    BankAcc myAcc;
    initAcc(&myAcc, 9981, 2200.0);
    double amount = 100.0;
    xxx(&myAcc, &amount);
    yyy(&myAcc);
    printf("%d and %.2f", myAcc.accNum, myAcc.bal);
    return 0;
}`,lang:"c",a:"9981 and 2795.10"},
      {type:"code",q:"다음 Python 코드의 출력 값을 작성하시오.",code:`a = ["Seoul", "Kyeonggi", "Incheon", "Daejun", "Daegu", "Pusan"]
str = "S"
for i in a:
    str = str + i[1]
print(str)`,lang:"python",a:"Seynaau"},
      {type:"sql",q:"아래 SQL 문장과 테이블(R1, R2)을 참고하여 출력 값을 작성하시오.\n[R1]\nB | C\na | 1\nb | 1\nc | 2\n[R2]\nC | D\n1 | k\n2 | m",code:`SELECT B
FROM R1
WHERE C IN (
    SELECT C FROM R2 WHERE D = 'k'
);`,lang:"sql",a:"B\n─\na\nb"},
      {type:"concept",q:"아래 설명에 맞는 테스트 커버리지를 보기에서 골라 작성하시오.\n- 모든 조합을 테스트하지 않고 중요한 조합에 중점\n- 특정 조건이 전체 결과에 영향을 미치는 조건만 테스트\n- 각 파라미터가 최소한 한 번 결과에 영향을 주어야 함\n[보기: ㄱ.구문  ㄴ.결정  ㄷ.조건  ㄹ.변경조건/결정  ㅁ.다중조건  ㅂ.경로  ㅅ.조건/결정]",a:"ㄹ. 변경 조건/결정 커버리지 (MC/DC)"},
      {type:"concept",q:"아래 내용에서 설명하는 악성 프로그램을 작성하시오.\n- 공격자의 존재를 숨기며 무제한 접근 권한 부여\n- 운영체제의 시스템콜을 해킹하여 안티바이러스 탐지 우회",a:"Rootkit"},
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`class classOne {
    int a, b;
    public classOne(int a, int b) { this.a=a; this.b=b; }
    public void print() { System.out.println(a + b); }
}
class classTwo extends classOne {
    int po = 3;
    public classTwo(int i) { super(i, i+1); }
    public void print() { System.out.println(po * po); }
}
public class main {
    public static void main(String[] args) {
        classOne one = new classTwo(10);
        one.print();
    }
}`,lang:"java",a:"9"},
      {type:"concept",q:"아래 내용에서 설명하는 공격 기법을 보기에서 골라 작성하시오.\n- 명확한 표적 대상으로 지속적인 정보수집 후 공격\n- Zero-day 취약점, 악성코드 등 다양한 기술 사용\n- 침투 → 검색 → 수집 → 유출의 4단계",a:"APT (Advanced Persistent Threat)"},
      {type:"sql",q:"아래 SQL 코드와 테이블을 참고하여 결과 값을 작성하시오.\n[TABLE]\nEMPNO | ENAME | SAL\n  100 | SMITH | 3000\n  200 | ALLEN | 2500\n  300 | KING  | 2000",code:`SELECT COUNT(*)
FROM TABLE
WHERE EMPNO > 100
  AND SAL >= 3000
   OR EMPNO = 200;`,lang:"sql",a:"1"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
#include <ctype.h>
int main() {
    char* p = "It is 8";
    char result[100];
    int i;
    for (i = 0; p[i] != '\0'; i++) {
        if (isupper(p[i]))       result[i] = (p[i]-'A'+5)%25+'A';
        else if (islower(p[i]))  result[i] = (p[i]-'a'+10)%26+'a';
        else if (isdigit(p[i]))  result[i] = (p[i]-'0'+3)%10+'0';
        else                     result[i] = p[i];
    }
    result[i] = '\0';
    printf("%s\n", result);
    return 0;
}`,lang:"c",a:"Nd sc 1"},
      {type:"concept",q:"다음 아래의 내용을 보고 알맞는 디자인 패턴을 작성하시오.\n- 구체적인 클래스에 의존하지 않고 연관 객체들의 조합을 만드는 인터페이스 제공\n- 관련성 있는 여러 종류의 객체를 일관된 방식으로 생성\n- kit라고도 불림",a:"Abstract Factory"},
    ],
    "2회": [
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`class Main {
    public static void main(String[] args) {
        int[] a = new int[]{1,2,3,4};
        int[] b = new int[]{1,2,3,4};
        int[] c = new int[]{1,2,3};
        check(a,b); check(a,c); check(b,c);
    }
    public static void check(int[] a, int[] b) {
        System.out.print(a==b ? "O" : "N");
    }
}`,lang:"java",a:"NNN"},
      {type:"db",q:"다음에서 설명하는 용어를 작성하시오.\n- 데이터를 중복시켜 성능을 향상시키는 기법\n- 테이블 합치기, 중복 저장 등으로 성능 향상\n- 데이터 무결성 저하 가능",a:"반정규화"},
      {type:"sql",q:"아래 SQL 구문의 빈칸 ①~④를 작성하시오.\n① INSERT INTO 사원 (사원번호, 이름, 주소, 부서) [ ① ] (32431, '정실기', '서울', '영업');\n② INSERT INTO 부서 (사원번호, 이름, 나이, 부서) [ ② ] 사원번호, 이름, 나이, 23 FROM 사원 WHERE 이름 = '정실기';\n③ SELECT * [ ③ ] 사원;\n④ UPDATE 사원 [ ④ ] 부서 = '퇴사' WHERE 사원번호 = 32431;",lang:"sql",a:"① VALUES  ② SELECT  ③ FROM  ④ SET"},
      {type:"db",q:"다음 릴레이션의 Cardinality와 Degree를 작성하시오.\n- 5개 행으로 구성\n- 4개 속성으로 구성",a:"Cardinality: 5  /  Degree: 4"},
      {type:"network",q:"아래 프로토콜에 대한 내용을 읽고 알맞는 답을 작성하시오.\n- Network layer에서 IP패킷을 암호화하고 인증\n- VPN 구현에 사용\n- AH(Authentication Header)와 ESP(Encapsulating Security Payload) 사용",a:"IPSec"},
      {type:"code",q:"다음 Python 코드의 출력 값을 작성하시오.",code:`def fnCalculation(x, y):
    result = 0
    for i in range(len(x)):
        temp = x[i:i+len(y)]
        if temp == y: result += 1
    return result

a = "abdcabcabca"
p1, p2 = "ab", "ca"
out = f"ab{fnCalculation(a,p1)}ca{fnCalculation(a,p2)}"
print(out)`,lang:"python",a:"ab3ca3"},
      {type:"concept",q:"아래 설명하는 암호화 알고리즘을 작성하시오.\n- 대칭키 알고리즘, 1997년 NIST에서 DES 대체를 위해 선정\n- 128/192/256비트 가변 키, 128비트 고정 블록",a:"AES"},
      {type:"network",q:"패킷 교환 방식 중 연결형과 비연결형에 해당하는 방식을 각각 작성하시오.\n① 연결형 교환 방식\n② 비연결형 교환 방식",a:"① 가상회선  ② 데이터그램"},
      {type:"concept",q:"실행 순서가 밀접한 기능을 모아 구성하며, 한 기능의 출력이 다음 기능의 입력으로 제공되는 응집도를 보기에서 골라 작성하시오.",a:"ㅂ. 순차적(sequential) 응집도"},
      {type:"concept",q:"컬렉션 객체의 내부 구조를 노출하지 않고 순차적으로 접근할 수 있게 하는 디자인 패턴을 작성하시오.",a:"Iterator 패턴"},
      {type:"network",q:"아래 그림을 바탕으로 RIP 최단 경로 비용을 계산하여 A에서 출발하는 경로를 작성하시오.",a:"A → D → C → F"},
      {type:"concept",q:"SRT 스케줄링의 평균 대기시간을 계산하시오.\n- A: 도착0/서비스8\n- B: 도착1/서비스4\n- C: 도착2/서비스9\n- D: 도착3/서비스5",a:"6.5ms"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
int main() {
    int arr[3][3] = {1,2,3,4,5,6,7,8,9};
    int* parr[2] = {arr[1], arr[2]};
    printf("%d", parr[1][1] + *(parr[1]+2) + **parr);
    return 0;
}`,lang:"c",a:"21"},
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`class Main {
    public static void main(String[] args) {
        int a[] = {1,2,3,4,5,6,7,8,9};
        ODDNumber OE = new ODDNumber();
        System.out.print(OE.sum(a,true)+", "+OE.sum(a,false));
    }
}
interface Number { int sum(int[] a, boolean odd); }
class ODDNumber implements Number {
    public int sum(int[] a, boolean odd) {
        int result = 0;
        for (int i=0; i<a.length; i++)
            if ((odd && a[i]%2!=0)||(!odd && a[i]%2==0)) result+=a[i];
        return result;
    }
}`,lang:"java",a:"25, 20"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
#include <string.h>
void sumFn(char* d, const char* s) {
    while (*s) { *d=*s; d++; s++; }
    *d='\0';
}
int main() {
    const char* str1 = "first";
    char str2[50] = "teststring";
    int result = 0;
    sumFn(str2, str1);
    for (int i=0; str2[i]!='\0'; i++) result += i;
    printf("%d", result);
    return 0;
}`,lang:"c",a:"10"},
      {type:"concept",q:"어떤 모듈이 다른 모듈 내부의 논리적인 흐름을 제어하기 위해 제어 요소를 전달하는 결합도를 작성하시오.",a:"제어(Control) 결합도"},
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`class Main {
    public static void main(String[] args) {
        String str = "abacabcd";
        boolean[] seen = new boolean[256];
        System.out.print(calculFn(str, str.length()-1, seen));
    }
    public static String calculFn(String str, int index, boolean[] seen) {
        if (index < 0) return "";
        char c = str.charAt(index);
        String result = calculFn(str, index-1, seen);
        if (!seen[c]) { seen[c]=true; return c+result; }
        return result;
    }
}`,lang:"java",a:"dcba"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
void swap(int a, int b) { int t=a; a=b; b=t; }
int main() {
    int a=11, b=19;
    swap(a,b);
    switch(a) {
        case 1:  b+=1;
        case 11: b+=2;
        default: b+=3; break;
    }
    printf("%d", a-b);
}`,lang:"c",a:"-13"},
      {type:"code",q:"다음 C언어 구조체 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
struct node { int n1; struct node* n2; };
int main() {
    struct node a={10,NULL}, b={20,NULL}, c={30,NULL};
    struct node* head=&a;
    a.n2=&b; b.n2=&c;
    printf("%d\n", head->n2->n1);
    return 0;
}`,lang:"c",a:"20"},
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`class Main {
    public static void main(String[] args) {
        String str = "ITISTESTSTRING";
        String[] result = str.split("T");
        System.out.print(result[3]);
    }
}`,lang:"java",a:"S"},
    ],
    "3회": [
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`public class Main {
    static String[] s = new String[3];
    static void func(String[] s, int size) {
        for (int i=1; i<size; i++)
            System.out.print(s[i-1].equals(s[i]) ? "O" : "N");
        for (String m : s) System.out.print(m);
    }
    public static void main(String[] args) {
        s[0]="A"; s[1]="A"; s[2]=new String("A");
        func(s, 3);
    }
}`,lang:"java",a:"OOAAA"},
      {type:"code",q:"다음 Python 코드의 출력 값을 작성하시오.",code:`def func(lst):
    for i in range(len(lst)//2):
        lst[i], lst[-i-1] = lst[-i-1], lst[i]

lst = [1,2,3,4,5,6]
func(lst)
print(sum(lst[::2]) - sum(lst[1::2]))`,lang:"python",a:"3"},
      {type:"sql",q:"아래 employee·project 테이블을 참고하여 SQL 쿼리의 출력 값을 작성하시오.\n[employee]\nid | name | project_id\n 1 | Kim  |     1\n 2 | Lee  |     1\n 3 | Park |     2\n[project]\nproject_id | name\n     1     | Alpha\n     2     | Beta",code:`SELECT count(*)
FROM employee AS e
JOIN project AS p ON e.project_id = p.project_id
WHERE p.name IN (
    SELECT name FROM project p
    WHERE p.project_id IN (
        SELECT project_id FROM employee
        GROUP BY project_id HAVING count(*) < 2
    )
);`,lang:"sql",a:"1"},
      {type:"concept",q:"페이지 참조 순서: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 \n- 프레임 수 3개일 때 LRU 알고리즘의 페이지 부재 횟수를 작성하시오.",a:"12회"},
      {type:"network",q:"다음 네트워크 취약점 설명을 읽고 알맞는 공격 기법 이름을 작성하시오.\n- IP/ICMP 특성 악용, 대량 ICMP Echo Reply 전송\n- 여러 호스트가 특정 대상에 패킷 집중 전송\n- 서비스거부(DoS) 유발",a:"스머프(Smurf) 공격"},
      {type:"concept",q:"아래 GoF 디자인 패턴의 괄호 안에 알맞는 용어를 작성하시오.\n- 클래스나 객체들이 상호작용하는 방법이나 책임 분배 방법을 정의\n- Chain of Responsibility, Command, Observer 패턴 포함",a:"행위(Behavioral) 패턴"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
int func() { static int x=0; x+=2; return x; }
int main() {
    int x=1, sum=0;
    for (int i=0; i<4; i++) { x++; sum+=func(); }
    printf("%d", sum);
    return 0;
}`,lang:"c",a:"20"},
      {type:"db",q:"아래 표에서 어떠한 무결성을 위반하였는지 작성하시오.\n- 기본키에 NULL 또는 중복 값이 존재하는 경우",a:"개체 무결성"},
      {type:"network",q:"아래 URL 구조에서 각 구성요소 번호를 순서대로 작성하시오.\n- 1.path  2.query  3.authority  4.scheme  5.fragment",a:"43125"},
      {type:"code",q:"다음 Python 코드의 출력 값을 작성하시오.",code:`def func(value):
    if type(value) == type(100): return 100
    elif type(value) == type(""): return len(value)
    else: return 20

a='100.0'; b=100.0; c=(100,200)
print(func(a)+func(b)+func(c))`,lang:"python",a:"45"},
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`public class Main {
    public static void main(String[] args) {
        Base a = new Derivate();
        Derivate b = new Derivate();
        System.out.print(a.getX()+a.x+b.getX()+b.x);
    }
}
class Base { int x=3; int getX(){return x*2;} }
class Derivate extends Base {
    int x=7;
    int getX(){return x*3;}
}`,lang:"java",a:"52"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
struct Node { int value; struct Node* next; };
void func(struct Node* node) {
    while (node!=NULL && node->next!=NULL) {
        int t=node->value; node->value=node->next->value; node->next->value=t;
        node=node->next->next;
    }
}
int main() {
    struct Node n1={1,NULL}, n2={2,NULL}, n3={3,NULL};
    n1.next=&n3; n3.next=&n2;
    func(&n1);
    struct Node* cur=&n1;
    while(cur){printf("%d",cur->value);cur=cur->next;}
    return 0;
}`,lang:"c",a:"312"},
      {type:"concept",q:"아래 테스트 커버리지 3가지를 설명에 맞게 작성하시오.\n1. 모든 문장을 최소 한 번씩 실행했는지 측정\n2. 모든 분기의 각 분기를 최소 한 번씩 실행했는지 측정\n3. 복합 조건 내 개별 조건이 참/거짓으로 평가되는 경우를 모두 테스트했는지 측정",a:"1. 문장 커버리지  2. 분기 커버리지  3. 조건 커버리지"},
      {type:"concept",q:"아래 UML 클래스 관계도를 보고 각 관계명을 작성하시오.\n(1) 실선+화살표\n(2) 삼각형 화살표(상속)\n(3) 점선+화살표",a:"(1) 연관  (2) 일반화  (3) 의존"},
      {type:"db",q:"아래 데이터베이스 키 종류를 설명에 맞게 작성하시오.\n(1) 다른 테이블의 기본 키를 참조하는 속성\n(2) 행을 유일하게 식별하는 최소 속성 집합\n(3) 후보 키 중 기본 키를 제외한 나머지\n(4) 행을 유일하게 식별하는 속성 집합",a:"(1) 외래키  (2) 후보키  (3) 대체키  (4) 슈퍼키"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
void func(int** arr, int size) {
    for (int i=0; i<size; i++)
        *(*arr+i)=(*(*arr+i)+i)%size;
}
int main() {
    int arr[]={3,1,4,1,5};
    int* p=arr; int** pp=&p;
    func(pp,5);
    printf("%d", arr[2]);
    return 0;
}`,lang:"c",a:"1"},
      {type:"network",q:"아래 내용을 보고 알맞는 용어를 3글자로 작성하시오.\n- 공용 네트워크를 통해 사설 네트워크를 확장하는 기술\n- IPSec, SSL, L2TP 등의 종류가 있음",a:"VPN"},
      {type:"code",q:"다음 Java 예외처리 코드의 출력 값을 작성하시오.",code:`public class ExceptionHandling {
    public static void main(String[] args) {
        int sum=0;
        try { func(); }
        catch (NullPointerException e) { sum+=1; }
        catch (Exception e) { sum+=10; }
        finally { sum+=100; }
        System.out.print(sum);
    }
    static void func() throws Exception { throw new NullPointerException(); }
}`,lang:"java",a:"101"},
      {type:"code",q:"다음 Java 제네릭 코드의 출력 값을 작성하시오.",code:`class Main {
    public static class Collection<T> {
        T value;
        public Collection(T t){value=t;}
        public void print(){ new Printer().print(value); }
        class Printer {
            void print(Integer a){System.out.print("A"+a);}
            void print(Object a) {System.out.print("B"+a);}
            void print(Number a) {System.out.print("C"+a);}
        }
    }
    public static void main(String[] args){new Collection<>(0).print();}
}`,lang:"java",a:"B0"},
      {type:"network",q:"아래 내용을 보고 알맞는 네트워크를 작성하시오.\n- 중앙 관리나 고정 인프라 없이 임시로 구성\n- 무선 통신으로 노드들이 직접 연결\n- 긴급 구조, 군사 상황 등에서 활용",a:"Ad-hoc Network"},
    ],
  },
  "2025": {
    "1회": [
      {type:"concept",q:"아래 네트워크 보안 관련 설명에서 해킹 기법을 작성하시오.\n- '세션을 가로채다'라는 의미\n- TCP의 3-way 핸드셰이크 완료 후 시퀀스 번호 조작\n- 정상 세션 탈취, 인증 없이 통신",a:"세션 하이재킹 (Session Hijacking)"},
      {type:"db",q:"다음 제약조건 관련 문제에서 보기(개체, 참조, 도메인)를 ㄱ, ㄴ, ㄷ에 알맞게 작성하시오.\nㄱ. 특정 속성에 입력될 수 있는 값의 유형/범위\nㄴ. 릴레이션의 모든 튜플은 기본키를 가져야 함\nㄷ. 외래키는 참조 릴레이션의 기본키 또는 NULL이어야 함",a:"ㄱ. 도메인  ㄴ. 개체  ㄷ. 참조"},
      {type:"concept",q:"아래 내용에서 설명하는 3글자 영문 약자를 작성하시오.\n- 데이터 전송/저장 시 오류 감지에 사용되는 오류 검출 코드\n- 정해진 다항식(예: x³+x+1) 기반 2진수 나눗셈, 나머지를 검출 코드로 사용",a:"CRC"},
      {type:"concept",q:"악성코드 보기에서 '공포를 이용해 피해자를 속여 소프트웨어를 구매하게 만드는 랜섬웨어'를 골라 작성하시오.\n[보기: ㄱ.컴포넌트웨어  ㄴ.유즈웨어  ㄷ.셔블웨어  ㄹ.스캐어웨어  ㅁ.안티스파이웨어  ㅂ.네트웨어  ㅅ.그룹웨어  ㅇ.애드웨어]",a:"ㄹ. 스캐어웨어(Scareware)"},
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`public class Main {
    public static void main(String[] args) {
        int a=5, b=0;
        try {
            System.out.print(a/b);
        } catch (ArithmeticException e) {
            System.out.print("출력1");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.print("출력2");
        } catch (NumberFormatException e) {
            System.out.print("출력3");
        } catch (Exception e) {
            System.out.print("출력4");
        } finally {
            System.out.print("출력5");
        }
    }
}`,lang:"java",a:"출력1출력5"},
      {type:"network",q:"아래 내용에서 ARP와 RARP를 설명에 맞게 작성하시오.\n(1) 네트워크상에서 IP 주소를 MAC 주소로 변환하는 프로토콜\n(2) MAC 주소를 IP 주소로 변환하는 프로토콜",a:"(1) ARP  (2) RARP"},
      {type:"sql",q:"아래 두 테이블(emp, sal)을 참고하여 SQL 쿼리의 결과를 작성하시오.\n[emp]\nid | name\n 1 | 이순신\n 2 | 강감찬\n[sal]\nid | incentives\n 1 |    1000\n 2 |     400",code:`SELECT name, incentives
FROM emp, sal
WHERE emp.id = sal.id
  AND incentives >= 500;`,lang:"sql",a:"이순신 | 1000"},
      {type:"db",q:"데이터베이스 용어 4가지를 보기에서 골라 작성하시오.\n1. 릴레이션에서 속성의 개수\n2. 릴레이션에서 튜플의 개수\n3. 다른 릴레이션의 기본 키를 참조하는 속성\n4. 특정 속성에 입력될 수 있는 값의 유형/범위\n[보기: ㄱ.domain  ㄷ.degree  ㅁ.cardinality  ㅅ.foreign]",a:"1.ㄷ degree  2.ㅁ cardinality  3.ㅅ foreign  4.ㄱ domain"},
      {type:"network",q:"IP 192.168.35.10, 서브넷 255.255.252.0인 PC가 브로드캐스팅할 때 수신할 수 있는 IP를 보기에서 모두 골라 작성하시오.\n[보기: ㄱ.192.168.34.1  ㄴ.192.168.32.19  ㄷ.192.168.35.200  ㄹ.192.168.33.138  ㅁ.192.168.35.50]",a:"ㄱ, ㄴ, ㄷ, ㄹ, ㅁ (모두 같은 /22 네트워크)"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
char Data[5] = {'B','A','D','E'};
char c;
int main() {
    int i, temp, temp2;
    c = 'C';
    printf("%d\n", Data[3]-Data[1]);
    for (i=0; i<5; ++i) if(Data[i]>c) break;
    temp=Data[i]; Data[i]=c; i++;
    for (; i<5; ++i) { temp2=Data[i]; Data[i]=temp; temp=temp2; }
    for (i=0; i<5; i++) printf("%c", Data[i]);
}`,lang:"c",a:"4\nBACDE"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
#include <stdlib.h>
void set(int** arr, int* data, int rows, int cols) {
    for (int i=0; i<rows*cols; ++i)
        arr[((i+1)/rows)%rows][(i+1)%cols]=data[i];
}
int main() {
    int rows=3, cols=3, sum=0;
    int data[]={5,2,7,4,1,8,3,6,9};
    int** arr=(int**)malloc(sizeof(int*)*rows);
    for (int i=0; i<cols; i++) arr[i]=(int*)malloc(sizeof(int)*cols);
    set(arr,data,rows,cols);
    for (int i=0; i<rows*cols; i++)
        sum+=arr[i/rows][i%cols]*(i%2==0?1:-1);
    for (int i=0; i<rows; i++) free(arr[i]);
    free(arr);
    printf("%d", sum);
}`,lang:"c",a:"13"},
      {type:"concept",q:"다음 결합도 3가지를 보기에서 골라 작성하시오.\n(1) 다른 모듈 내부 변수나 기능을 직접 사용하는 경우\n(2) 인터페이스로 배열·오브젝트·자료구조 등이 전달되는 경우\n(3) 모듈 밖에 선언된 전역 변수를 참조·갱신하며 상호작용하는 경우\n[보기: ㄱ.자료  ㄴ.스탬프  ㄷ.제어  ㄹ.공통  ㅁ.내용  ㅂ.외부]",a:"(1) ㅁ 내용 결합도  (2) ㄴ 스탬프 결합도  (3) ㄹ 공통 결합도"},
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`public class Main {
    public static void main(String[] args) {
        new Child();
        System.out.println(Parent.total);
    }
}
class Parent {
    static int total=0; int v=1;
    public Parent() { total+=(++v); show(); }
    public void show() { total+=total; }
}
class Child extends Parent {
    int v=10;
    public Child() { v+=2; total+=v++; show(); }
    @Override
    public void show() { total+=total*2; }
}`,lang:"java",a:"54"},
      {type:"concept",q:"다음 설명에 해당하는 디자인 패턴을 작성하시오.\n- 서로 다른 인터페이스를 가진 클래스들을 연결해 사용 가능하게 함\n- 기존 클래스를 감싸서(wrapper) 인터페이스를 변환해주는 역할",a:"Adapter 패턴"},
      {type:"concept",q:"문장 커버리지 테스트를 위한 제어 흐름도 빈칸과 순서를 작성하시오.\n- 코드: int a=0; while(a<m||b[a]<x){ if(b[a]<0) b[a]=-b[a]; a++; } return 1;\n- ① int a=0  ② a<m||b[a]<x  ③ b[a]<0  ④ b[a]=-b[a]  ⑤ a++  ⑥ return 1",a:"1→2→③→④→⑤→②→⑥"},
      {type:"code",q:"다음 Java 재귀 코드의 출력 값을 작성하시오.",code:`public class Main {
    public static void main(String[] args) {
        int[] data={3,5,8,12,17};
        System.out.println(func(data,0,data.length-1));
    }
    static int func(int[] a, int st, int end) {
        if (st>=end) return 0;
        int mid=(st+end)/2;
        return a[mid]+Math.max(func(a,st,mid),func(a,mid+1,end));
    }
}`,lang:"java",a:"20"},
      {type:"code",q:"다음 Python 트리 코드의 출력 값을 작성하시오.",code:`class Node:
    def __init__(self, value):
        self.value=value; self.children=[]

def tree(li):
    nodes=[Node(i) for i in li]
    for i in range(1,len(li)):
        nodes[(i-1)//2].children.append(nodes[i])
    return nodes[0]

def calc(node, level=0):
    if node is None: return 0
    return (node.value if level%2==1 else 0)+\
           sum(calc(n,level+1) for n in node.children)

li=[3,5,8,12,15,18,21]
root=tree(li)
print(calc(root))`,lang:"python",a:"13"},
      {type:"code",q:"다음 C언어 연결 리스트 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
#include <stdlib.h>
typedef struct Data { int value; struct Data* next; } Data;

Data* insert(Data* head, int value) {
    Data* n=(Data*)malloc(sizeof(Data));
    n->value=value; n->next=head; return n;
}
Data* reconnect(Data* head, int value) {
    if (!head||head->value==value) return head;
    Data *prev=NULL,*curr=head;
    while (curr&&curr->value!=value){prev=curr;curr=curr->next;}
    if (curr&&prev){prev->next=curr->next;curr->next=head;head=curr;}
    return head;
}
int main() {
    Data *head=NULL,*curr;
    for (int i=1;i<=5;i++) head=insert(head,i);
    head=reconnect(head,3);
    for (curr=head;curr;curr=curr->next) printf("%d",curr->value);
    return 0;
}`,lang:"c",a:"35421"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
typedef struct student { char* name; int score[3]; } Student;
int dec(int enc){ return enc & 0xA5; }
int sum(Student* p){
    return dec(p->score[0])+dec(p->score[1])+dec(p->score[2]);
}
int main(){
    Student s[2]={{"Kim",{0xA0,0xA5,0xDB}},{"Lee",{0xA0,0xED,0x81}}};
    int result=0;
    for(int i=0;i<2;i++) result+=sum(&s[i]);
    printf("%d",result);
    return 0;
}`,lang:"c",a:"908"},
      {type:"code",q:"다음 Java 메서드 오버로딩 재귀 코드의 출력 값을 작성하시오.",code:`public class Main {
    public static void main(String[] args){ System.out.println(calc("5")); }
    static int calc(int value){
        if(value<=1) return value;
        return calc(value-1)+calc(value-2);
    }
    static int calc(String str){
        int value=Integer.valueOf(str);
        if(value<=1) return value;
        return calc(value-1)+calc(value-3);
    }
}`,lang:"java",a:"4"},
    ],
    "2회": [
      {type:"db",q:"데이터베이스 물리 설계 시 키 값과 포인터를 쌍으로 저장하여 빠르게 탐색하는 접근 방법을 작성하시오.",a:"인덱스(색인) 접근"},
      {type:"db",q:"릴레이션에서 열(Column)을 의미하며 파일 구조의 필드(Field)에 해당하는 구성 요소를 보기에서 골라 작성하시오.\n- [보기: ㄱ.Cardinality  ㄴ.Domain  ㄷ.Attribute  ㅁ.Degree  ㅂ.Schema  ㅅ.Tuple]",a:"ㄷ. Attribute"},
      {type:"network",q:"아래 내용을 보고 알맞는 보안 프로토콜을 작성하시오.\n- 암호화된 통신을 제공하는 원격 접속용 보안 프로토콜\n- 공개키 기반 인증, 기본 포트 22번\n- Telnet의 보안 취약점을 보완한 대안",a:"SSH"},
      {type:"concept",q:"스케줄링 알고리즘 (1)과 (2)를 작성하시오.\n- (1) CPU burst 시간이 짧은 프로세스를 우선 처리하는 비선점형 방식\n- (2) (1)을 선점형으로 구현한 형태",a:"(1) SJF  (2) SRT"},
      {type:"code",q:"다음 Java 코드의 출력 값을 작성하시오.",code:`public class Main {
    public static void change(String[] data, String s){
        data[0]=s; s="Z";
    }
    public static void main(String[] args){
        String data[]={"A"}; String s="B";
        change(data,s);
        System.out.print(data[0]+s);
    }
}`,lang:"java",a:"BB"},
      {type:"network",q:"IP 223.13.234.132, 서브넷 255.255.255.192일 때 다음을 작성하시오.\n① 이 호스트가 속한 네트워크 주소의 마지막 옥텟\n② 사용 가능한 호스트 수 (네트워크·브로드캐스트 주소 제외)",a:"① 128  ② 62개"},
      {type:"concept",q:"실제 객체에 대한 접근을 제어하거나 추가 기능을 부여하기 위해 해당 객체의 대리 객체를 사용하는 디자인 패턴을 작성하시오.",a:"Proxy 패턴"},
      {type:"concept",q:"웹 페이지 전체를 다시 불러오지 않고 JavaScript와 XML(또는 JSON)을 이용하여 일부 콘텐츠만 비동기적으로 갱신하는 기술을 작성하시오.",a:"AJAX"},
      {type:"code",q:"다음 Java 람다/인터페이스 코드의 출력 값을 작성하시오.",code:`public class Main {
    static interface F { int apply(int x) throws Exception; }
    public static int run(F f){
        try{return f.apply(3);}catch(Exception e){return 7;}
    }
    public static void main(String[] args){
        F f=(x)->{if(x>2)throw new Exception();return x*2;};
        System.out.print(run(f)+run((int n)->n+9));
    }
}`,lang:"java",a:"19"},
      {type:"code",q:"다음 Java 정적 메서드 / 동적 바인딩 코드의 출력 값을 작성하시오.",code:`public class Main {
    public static class Parent {
        public int x(int i){return i+2;}
        public static String id(){return "P";}
    }
    public static class Child extends Parent {
        public int x(int i){return i+3;}
        public String x(String s){return s+"R";}
        public static String id(){return "C";}
    }
    public static void main(String[] args){
        Parent ref=new Child();
        System.out.println(ref.x(2)+ref.id());
    }
}`,lang:"java",a:"5P"},
      {type:"concept",q:"다음 제어 흐름 그래프에서 분기 커버리지를 만족하기 위한 테스팅 경로를 작성하시오. (노드: 1-2-3-4-5-6-7)",a:"1234561 과 124567 (또는 1234567 과 124561)"},
      {type:"code",q:"다음 C언어 원형 큐 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
#define SIZE 3
typedef struct{int a[SIZE];int front,rear;}Queue;
void enq(Queue*q,int val){q->a[q->rear]=val;q->rear=(q->rear+1)%SIZE;}
int deq(Queue*q){int val=q->a[q->front];q->front=(q->front+1)%SIZE;return val;}
int main(){
    Queue q={{0},0,0};
    enq(&q,1);enq(&q,2);deq(&q);enq(&q,3);
    printf("%d 그리고 %d",deq(&q),deq(&q));
    return 0;
}`,lang:"c",a:"2 그리고 3"},
      {type:"concept",q:"라운드로빈(RR) 스케줄링, 타임퀀텀 4ms일 때 평균 대기시간을 구하시오.\n- P1: 도착0/실행8\n- P2: 도착1/실행4\n- P3: 도착2/실행9\n- P4: 도착3/실행5",a:"11.75ms"},
      {type:"code",q:"다음 C언어 구조체 이중 포인터 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
struct dat{int x;int y;};
int main(){
    struct dat a[]={{1,2},{3,4},{5,6}};
    struct dat*ptr=a; struct dat**pptr=&ptr;
    (*pptr)[1]=(*pptr)[2];
    printf("%d 그리고 %d",a[1].x,a[1].y);
    return 0;
}`,lang:"c",a:"5 그리고 6"},
      {type:"code",q:"다음 Java 객체 배열 참조 코드의 출력 값을 작성하시오.",code:`public class Main {
    public static class BO{public int v;public BO(int v){this.v=v;}}
    public static void main(String[] args){
        BO a=new BO(1),b=new BO(2),c=new BO(3);
        BO[]arr={a,b,c}; BO t=arr[0]; arr[0]=arr[2]; arr[2]=t;
        arr[1].v=arr[0].v;
        System.out.println(a.v+"a"+b.v+"b"+c.v);
    }
}`,lang:"java",a:"1a3b3"},
      {type:"code",q:"다음 C언어 연결 리스트(역방향) 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
#include <stdlib.h>
struct node{char c;struct node*p;};
struct node*func(char*s){
    struct node*h=NULL,*n;
    while(*s){n=malloc(sizeof(struct node));n->c=*s++;n->p=h;h=n;}
    return h;
}
int main(){
    struct node*n=func("BEST");
    while(n){putchar(n->c);struct node*t=n;n=n->p;free(t);}
    return 0;
}`,lang:"c",a:"TSEB"},
      {type:"network",q:"다음 TCP 공격 기법 설명을 읽고 알맞는 공격 이름을 작성하시오.\n- 클라이언트가 SYN 패킷만 대량 전송, 마지막 ACK는 보내지 않음\n- 서버의 연결 대기 큐가 가득 차 정상 접속 불가",a:"SYN Flooding"},
      {type:"code",q:"다음 Python 코드의 출력 값을 작성하시오.",code:`lst=[1,2,3]
dst={i:i*2 for i in lst}
s=set(dst.values())
lst[0]=99; dst[2]=7; s.add(99)
print(len(s & set(dst.values())))`,lang:"python",a:"2"},
      {type:"db",q:"아래 employee 테이블에서 πTTL(employee) 관계대수 연산 결과를 작성하시오.\n- TTL: 부장, 대리, 과장, 차장",a:"TTL: 부장, 대리, 과장, 차장"},
    ],
    "3회": [
      {type:"concept",q:"시스템을 폴더 모양 단위로 구분하여 구성 요소 간 관계를 표현하는 UML 구조 다이어그램의 명칭을 작성하시오.\n- («import», «access», «merge» 관계 표현 가능)",a:"패키지(Package) 다이어그램"},
      {type:"concept",q:"소프트웨어 테스트에서 결정 포인트 내 모든 개별 조건식이 True/False 두 가지를 모두 만족하도록 테스트 케이스를 설계하는 커버리지를 보기에서 골라 작성하시오.",a:"ㅇ. 조건(Condition) 커버리지"},
      {type:"concept",q:"유닉스/리눅스 기본 명령어 4가지를 설명에 맞게 작성하시오.\n- 1. 현재 작업 중인 디렉터리의 경로를 출력\n- 2. 디렉터리의 내용을 목록으로 표시\n- 3. 다른 디렉터리로 이동\n- 4. 파일을 복사",a:"1. pwd  2. ls  3. cd  4. cp"},
      {type:"concept",q:"오류검출 방식 빈칸 ①~⑤를 보기에서 골라 작성하시오.\n- ① 재전송 없이 수신 측에서 자체 수정 가능한 코드\n- ② 자체 수정 방식\n- ③ 재전송 요구 방식\n- ④ 1비트 검사 비트 추가 오류 검출\n- ⑤ 특정 다항식 기반 오류 검출\n- [보기: ㉠CRC  ㉡FEC  ㉢BEC  ㉤Parity  ㉧Hamming]",a:"① Hamming  ② FEC  ③ BEC  ④ Parity  ⑤ CRC"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
struct Test{int i;const char*g;};
int main(){
    struct Test test[]={{1,"AB"},{2,"DC"},{3,"EB"}};
    struct Test*p=&test[1];
    printf("%s",p->g+(p->i-1));
    return 0;
}`,lang:"c",a:"C"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
int main(void){
    char str[]="REPUBLICOFKOREA";
    int a=0;
    while(str[a]!='\0') ++a;
    putchar(str[a-2]);
    return 0;
}`,lang:"c",a:"E"},
      {type:"code",q:"다음 C언어 연결 리스트 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
struct Node{struct Node*next;unsigned int x;};
int main(){
    struct Node t1={0,5u},t2={0,7u},t3={0,11u};
    t3.next=&t2; t2.next=&t1;
    struct Node*curr=&t3; int sum=0;
    while(curr){sum=sum*3+curr->x;curr=curr->next;}
    sum=(sum^42u)+100u;
    printf("%u\n",sum);
}`,lang:"c",a:"187"},
      {type:"code",q:"Java에서 인터페이스를 구현할 때 빈칸에 들어갈 키워드를 작성하시오.",code:`interface Machine { void run(); }

class WashingMachine [___빈칸___] Machine {
    private String name;
    public WashingMachine(){ this.name="LG Washer"; }
    public void run(){ System.out.println("Washing machine running"); }
}

public class Main {
    public static void main(String[] args){
        WashingMachine wm=new WashingMachine();
        wm.run();
    }
}`,lang:"java",a:"implements"},
      {type:"code",q:"다음 Python 코드의 출력 값을 작성하시오.",code:`data=[
    [3,5,2,4,1],
    [4,5,1],
    [4,4,1,5,4],
    [4,5]
]
result={}
for index,lis in enumerate(data):
    result[index]=(sum(lis),len(lis))
print(result)`,lang:"python",a:"{0:(15,5), 1:(10,3), 2:(18,5), 3:(9,2)}"},
      {type:"sql",q:"아래 테이블(A)에서 SQL 조건값을 실행한 결과 값을 작성하시오.\n[A]\ncol1 | col2\n   1 |    3\n   2 |    1\n   3 |    5\n   4 |    5\n   5 |    2",code:`SELECT count(col2)
FROM A
WHERE col1 IN (2,3) OR col2 IN (3,5);`,lang:"sql",a:"4"},
      {type:"concept",q:"다음 설명에 해당하는 인증 기술을 작성하시오.\n- 한 번 사용하면 즉시 폐기되어 재사용 불가\n- 시간 동기화 또는 카운터 기반으로 매번 새로운 값 생성\n- 재전송 공격 방지, 은행 인증 등 고보안 영역에서 사용",a:"OTP (One-Time Password)"},
      {type:"code",q:"다음 Java 상속/생성자 코드의 빈칸 키워드를 작성하시오.",code:`class Rectangle{
    int width,height;
    Rectangle(int width,int height){this.width=width;this.height=height;}
}
class Square extends Rectangle{
    Square(int a){ super(a,a); }
    int getSquareArea(){ return width*height; }
}
public class Main{
    public static void main(String[]args){
        Square sq=new Square(10);
        System.out.println(sq.getSquareArea());
    }
}`,lang:"java",a:"super"},
      {type:"concept",q:"다음 설명에 해당하는 인증 및 자원 접근 방식을 작성하시오.\n- 비밀번호 없이 Access Token으로 API 접근 권한 위임\n- '인가(Authorization)' 절차를 통해 제3자에게 접근 권한 부여\n- 대표적 예: 소셜 로그인",a:"OAuth"},
      {type:"db",q:"아래 두 릴레이션 R, S에서 R÷S(나누기 연산)의 결과를 테이블 형태로 작성하시오.",a:"A\n─\na1"},
      {type:"code",q:"다음 C언어 코드의 출력 값을 작성하시오.",code:`#include <stdio.h>
int main(){
    int x=7,y=4,z;
    z=y%3<3?2:1;
    z=z&z>>1;
    z=x>5&&z<=3?z*x:z/x;
    printf("%d",z);
    return 0;
}`,lang:"c",a:"0"},
      {type:"db",q:"관계형 데이터베이스 개념 용어를 보기에서 골라 작성하시오.\n- ㄱ. 테이블에서 한 행(Row)을 의미하는 요소\n- ㄴ. 실제 데이터가 저장되어 있는 테이블의 내용 전체\n- ㄷ. 테이블에 저장된 행(Row)의 총 개수\n- [보기: 스키마  속성  튜플  차수  인스턴스  카디널리티]",a:"ㄱ. 튜플  ㄴ. 인스턴스  ㄷ. 카디널리티"},
      {type:"code",q:"다음 Java enum 코드의 출력 값을 작성하시오.",code:`enum Tri{
    A("A"),B("AB"),C("ABC");
    private String code;
    Tri(String code){this.code=code;}
    public String code(){return code;}
}
public class Main{
    public static void main(String[]args){
        Tri t=Tri.values()[Tri.A.name().length()];
        System.out.print(t.code());
    }
}`,lang:"java",a:"AB"},
      {type:"concept",q:"접근통제 모델 3가지를 설명에 맞게 작성하시오.\n- ㄱ. 중앙에서 보안 정책을 일괄 설정, 보안 등급으로 접근 결정\n- ㄴ. 조직 내 직무·역할에 따라 접근 권한 부여\n- ㄷ. 자원의 소유자가 접근 권한을 자유롭게 부여/회수",a:"ㄱ. MAC  ㄴ. RBAC  ㄷ. DAC"},
      {type:"concept",q:"테스트케이스 구성요소 빈칸을 보기에서 골라 작성하시오.\n- (테스트 대상 / 입력 값 / 기대 출력 결과 순서)\n- [보기: ㄱ.테스트조건  ㄹ.테스트데이터  ㅁ.예상결과]",a:"ㄱ 테스트 조건, ㄹ 테스트 데이터, ㅁ 예상 결과"},
    ],
  },
};

export type QuestionType = 'code' | 'sql' | 'concept' | 'network' | 'db';
export interface Question {
  type: QuestionType;
  q: string;
  code?: string;
  lang?: string;
  a: string;
}
