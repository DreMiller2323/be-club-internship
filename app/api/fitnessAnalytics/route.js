import db from '../../../lib/db';
import {auth} from '../../../lib/auth'
//Adanved Programs 
export async function GET(request) {
 try {
  //using top down auth on every page
  const session = await auth()
  const userId = session.user.id;

if(!session){
 Response(JSON.stringify({error: 'Not Authorized'},{status:401}))
}

//finding user data from the sql database we will send to the front end code---

const sql = ' SELECT fitness_level, exercise_name, one_rep_max , body_weight, body_ratio FROM client_details WHERE user_id=?'
const [rows] = await db.execute(sql, [userId]);
console.log(rows)

    return Response.json(rows)
    
  } catch (error) {
    console.error('Error creating data:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}