
import {auth} from '../../lib/auth';
import db from '../../lib/db';
import Image from "next/image";

export  default async  function dashboard() {
  const session =  await auth()
 if (!session) return <div>Not authenticated</div>
const handleSubmit = async (formData) => {
  'use server'

 try{
const fitness_level = formData.get("fitness_level");
const exercise_name = formData.get("exercise_name");
const body_weight = formData.get("body_weight");
const weight = formData.get("weight");
const reps= formData.get("reps");
const goal= formData.get('goal');

const dataObject ={
fitness_level: fitness_level,
exercise_name: exercise_name,
weight: Number( weight),
reps: Number(reps),
goal: Number(goal)
}
console.log(dataObject);
//mapping each element 
  
const one_rep_max= Math.round(weight *(1+reps/30));
const body_ratio= Math.round(body_weight/one_rep_max);
const split1= "Sets:5 Reps:5"
const split2 ="Sets:5 Reps:5"
const split3= "Sets:5 Reps:5"
const split4 ="Sets:5 Reps:5"
const split5 ="Sets:3 Reps:3"

const phase1 = [0.65, 0.75, 0.80, 0.85, 0.75];
const phase2 = [0.75, 0.80, 0.85, 0.85, 0.80];
const phase3 = [0.85, 0.90, 0.75];
const phase4= [0.85,0.90,0.75];
const phase5 =[0.70, 0.75, 0.85];


// using the map method we will take the one rep max and multiply it by the percent as a decimal. 
//Math.round function is used to round to the nearest decimal place
// we will take feedback from powerlifters to adjust as some coaches might prefer kg vs pounds//
//The reason for 3 percantages as the lifter will train 3x per week. The powerlifter can pick any three days of the week to train at these numbers, 
const weekOne= phase1.map(a=> Math.round(a*one_rep_max))
const weekTwo= phase2.map(a=> Math.round(a*one_rep_max))
const weekThree= phase3.map(a=>Math.round(a*one_rep_max))
const weekFour = phase4.map(a=>Math.round(a*one_rep_max))
const weekFive=phase5.map(a=>Math.round(a*one_rep_max))
//using the fundamentals of javascript using ... spread operator to get all elements of the weeks and putting split1 and weekone in an an array wwith | for neatness when retreived on front end
const week_one= [split1, ...weekOne].join('|')
const week_two= [split2, ...weekTwo].join('|')
const week_three= [split3, ...weekThree].join('|')
const week_four= [split4, ...weekFour].join('|')
const week_five= [split5, ...weekFive].join('|')
const week_six= 'Test 1 rep max and resubmit calculator'

// changing the arrays into strings and then into numbers so my sql database can take in plans as VAR CHAR STRINGS 

const userId = session.user.id
    const sql = 'INSERT INTO client_details(user_id,exercise_name,week_one, week_two, week_three, week_four,week_five,week_six,one_rep_max,fitness_level,body_weight, body_ratio) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
    const [result] = await db.execute(sql, [ userId, exercise_name, week_one, week_two,week_three, week_four,week_five, week_six, one_rep_max,fitness_level, body_weight,body_ratio]);
 if (!result) {
        console.log('error getting into db ');
        return;
      }

    }catch(error){
      console.log(error)
    }
}
      
  return (
    <main className ="fitness-details">
  <h1>This is my first app-project- Powerlifter Plan generator</h1>
<div className="fitness-grid">
  <article className =" about-app" >
    <section>
        The plans created in this app, do not guarantee massive strength gains in a fast period of time, this app is designed to teach you delayed gratification. 
      Buiding strength in the gym takes time, we will layout a 5, 3, 1 set scheme over a 6 week period. 
      </section>
      <section>
        This app creates a powerlifting progression program for your three main compound movements Bench Press, Deadlift, and Squat and will get you on the right 
      path to increase strength, the correct way. Which is slow increases in strength over time,training on the  Bench Press, Squat or Deadlift around 90-100% of your 1 rep max too often does not increase strength. Because of the amount of pressure that 
      is put on the joints leading to inury, causing delays in training. 
       </section>
       <section>
        Therefore, it is critical that we peak and prime our muscles as our strength increases. By breaking your training down into segments it  
      primes the nervous system to handle increases in strength. It keeps your joints safe due to the lower-reps sets and it allows you to see small increases in strength. 
      Always consult a physician, and always use a spotter when training at the gym. 
      </section>
    
  </article>
  <article>
    <h1>Enter the information below, we recommend entering a rep range of greater than 3 for your safety, don't worry our system can predict your 1 rep max.</h1>
  </article>
</div>
    <form  className = "fitness-intake" prefetch ='true'action ={handleSubmit}>
        
      <div>
  
      <label htmlFor = "name">Exercise Name:</label>
      <input
        type="text"
        placeholder="Exercise that needs improvement "
        name= "exercise_name"
    /><br/>
         <label htmlFor = "name">Fitness Level:</label>
      <input
        type="text"
        placeholder="Fitness Level"
        name= "fitness_level"
    /><br/>
        <label htmlFor = "weight">Weight:</label>
      <input
        type="number"
        placeholder="Weight Lifted"
        name= "weight"
    /><br/>
    <label htmlFor = "reps">Reps:</label>
      <input
        type="reps"
        placeholder="Reps"
        name="reps"
 /><br/>
  <label htmlFor = "reps">Goal:</label>
      <input
        type="number"
        placeholder="Enter Goal Weight"
        name="goal"
 /><br/>
   <label htmlFor = "body_weight">Your current bodyweight in pounds please:</label>
      <input
        type="number"
        placeholder="Enter Your current bodyweight"
        name="body_weight"
 /><br/>
<button className ="button"type='submit'>Plan</button>
 </div>
 </form>
 <div>
  <h1></h1>
 </div>
</main>
  )
}

//     'use server';
// try{
//     const email = formData.get('email');
//     const password = formData.get('password');
//     const result = await signIn('credentials', {
//       email,
//       password,
//       redirect: false, // we handle redirect manually
//     });