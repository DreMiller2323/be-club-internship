'use client'
import { redirect } from 'next/navigation'
import Image from "next/image";

// import { useRouter } from "next/navigation"
export default  function Signup() {
  //  const router = useRouter()


const handleSubmit = async (e) => {
     e.preventDefault()
  const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
   const email = formData.get("email");
  const password= formData.get("password");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
try{
  'use server'
   const res = await fetch("/api/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name,
    email,
    password
  }),
});

      if (!res.ok) {
       

        console.log("API call failed", res.status);
       
       
        return;
      }

     redirect('/login')

    }catch(error){
      console.log(error)
    }
  redirect('/login')
}
      
  return (
    <main  className="sign-login-container ">
    <div className="awesome-photo">
      <Image
      src="/7.png"
      width={150}
      height={100}
      alt="Picture of the author"
    />
   <article className ="signup">
        <h1>Sign up to join Be-Club site</h1>
        <h1>Become a speaker - Get early access to apps - Join the entrepreneurship team - And much more. </h1>
        </article>
        </div>

    <form className="form"onSubmit ={handleSubmit}>
         <label htmlFor = "name">Name:</label>
      <input
        type="name"
        placeholder="Name"
        name= "name"
    /><br/>
        <label htmlFor = "email">Email:</label>
      <input
        type="email"
        placeholder="Email"
        name= "email"
    /><br/>
    <label htmlFor = "password">Password:</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
 /><br/>
 <div>
<button className ="button"type='submit'>Sign up</button>
</div>
 </form>

</main>
  )
}
