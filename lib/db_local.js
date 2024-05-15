const sql = require('mssql');

// MSSQL 연결 설정
const config = {
    user: 'chartexcel',
    password: 'hongmoon',
    server: '125.187.170.25',
    database: 'bot',
    port: 51433,
    options: {
        encrypt: true, // 필요한 경우 활성화
        trustServerCertificate: true // 필요한 경우 활성화
    }
};

// 연결 설정을 모듈로 내보냅니다.
module.exports = config;

// 연결 설정을 모듈로 내보냅니다.
// module.exports = async function connect() {
//     try {
//         await sql.connect(config);
//         console.log('MSSQL connected');
//     } catch (err) {
//         console.error('Error connecting to MSSQL:', err);
//     }
// };