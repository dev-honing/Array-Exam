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

// Q. 임의의 학생(본인이름) 명단에서 몇 번째에 있는지 찾아서 그 위치를 출력하는 코드를 작성하세요.

// A. studentList.indexOf("변호녕");

console.log(studentList.indexOf("변호녕")); // 3
// 인덱스 3번에 있으므로 배열에서의 위치로는 4번이다.