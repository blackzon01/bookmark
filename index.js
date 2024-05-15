// 기본 설정
const express = require('express');
const path = require('path'); // path 모듈을 가져옵니다.
const app = express();

let config;

if (process.env.NODE_ENV === 'production') {
    config = require('./lib/config.prod.js'); // 서버 환경 설정 파일을 사용합니다.
} else {
    config = require('./lib/config.local.js'); // 로컬 환경 설정 파일을 사용합니다.
}

app.use(express.static('public', { 'Content-Type': 'text/css' }), express.static(__dirname));

// EJS를 템플릿 엔진으로 사용하도록 설정
// app.set('view engine', 'ejs');

// 기본 뷰 디렉토리 설정
app.set('views', path.join(__dirname, 'views'));

// 추가적인 뷰 디렉토리 설정
app.set('views', path.join(__dirname, '/views/stockSimul'));


// HTML 파일을 렌더링하여 클라이언트에 전송
app.get('/', function(req, res) {
    res.redirect('/main'); // '/' 경로에 대한 요청을 '/main'으로 리디렉션
});

app.get('/main', function(req, res) {
    res.render(__dirname + '/views/main.ejs');
});

// app.get('/', function(req, res) {
//     // EJS 템플릿 렌더링
//     res.render(__dirname + '/views/main.ejs', 
//                     { title: 'My EJS App'
//                     , filePath: __dirname
//                     }
//               );
// });

app.get('/stockList', function(req, res) {
    res.render(__dirname + '/views/stock/stockList.ejs');
});

app.get('/stockSimul', function(req, res) {
    res.render(__dirname + '/views/stock/stockSimul.ejs');
});

// 서버 실행
app.listen(config.port, () => {
  console.log(`Listen : ` + config.port);
//   console.log(__dirname);
  console.log(config.name);
  console.log(`TEST URL : localhost:` + config.port);
});

