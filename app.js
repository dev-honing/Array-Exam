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

// delete를 사용해서 배열의 요소 삭제해보기
delete studentList[0];
console.log(studentList); // <1 empty item>으로 요소가 대체된 모습 확인
// 이 문제에는 적절한 방법은 아닌 것 같다!