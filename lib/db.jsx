export const runtime = "nodejs"
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'DollipDaisy23!',
  database: 'project_3',
  port: 3306,
});

export default db;