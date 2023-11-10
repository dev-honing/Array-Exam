const studentList = [ // studentList.length: 17
  "김우진",
  "김현",
  "방승희",
  "변호녕",
  "소사무엘",
  "송영준",
  "신동현",
  "오승민",
  "유승민",
  "윤준현",
  "이민구",
  "이유안",
  "이은정",
  "정영식",
  "최성민",
  "최은철",
  "홍문기"
];

const pokemonList = [ // pokemonList.length: 4
  "피카츄",
  "라이츄",
  "파이리",
  "꼬부기"
]

// Q. 명단 중 세 번째 학생이 전학을 갔고, 새 학생이 그 자리에 왔습니다. 기존 학생을 제거하고 새 학생을 추가하는 코드를 작성하세요.

// A. studentList.splice() 같은데 매개변수 등을 고려해서 작성하는 방법을 잘 모른다.

const newStudent = "새 학생";

// 일단 이건 무조건 틀렸다.
// 모르겠으니 메서드 사용하지 않고 절차를 생각해본다.

// 절차 구상
// 1. studentList[2]로 접근해서 지우고, 추가하기
// 2. studentList[2]로 접근해서 요소에 덮어쓰기(재할당?)

// 1번은 메서드 같으니 2번부터 시도해본다.
// 2-1. 변수 재할당처럼 요소 재할당이 가능한지 테스트 해보기
  console.log(studentList[2]); // 조회는 되는지 확인 -> 3번째 학생에 접근이 되었다.
  studentList[2] = newStudent;
  console.log(studentList[2]); // 이거 되는 것 같은데?
  console.log(studentList); // 2번으로 진행한 내용은 성공