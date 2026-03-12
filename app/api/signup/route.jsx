import db from '../../../lib/db';
import  bcrypt from 'bcrypt'
//post data int data base 
export async function POST(request) {
  try {
    
   const body = await request.json();

    const { name, email, password } = body;
 
    if (!name||!email || !password) {
      return new Respone(JSON.stringify({ error: 'Missing email or password' }), {
        status: 400,
      });
    }
const saltRounds = 10;
  const password_hash = await bcrypt.hash(password, saltRounds);
    const sql = 'INSERT INTO users (name,email, password_hash) VALUES (?, ?,?)';
    const [result] = await db.execute(sql, [name,email, password_hash]);

    return new Response(JSON.stringify({ message: 'User created', id: result.insertId }), {
      status: 201,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}