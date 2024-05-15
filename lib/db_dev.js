const sql = require('mssql');

// MSSQL 연결 설정
const config = {
    user: '사용자명',
    password: '비밀번호',
    server: '서버주소',
    database: '데이터베이스명',
    options: {
        encrypt: true, // 필요한 경우 활성화
        trustServerCertificate: true // 필요한 경우 활성화
    }
};

// 연결 설정을 모듈로 내보냅니다.
module.exports = async function connect() {
    try {
        await sql.connect(config);
        console.log('MSSQL connected');
    } catch (err) {
        console.error('Error connecting to MSSQL:', err);
    }
};