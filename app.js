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

// Q. 전체 명단을 문자열로 출력하여, 모든 학생의 이름이 쉼표로 구분되게 코드를 작성하세요.

// A. studentList.join(",")을 사용하면 될 것으로 예상됨

const studentJoin = studentList.join(",");
console.log(studentJoin);