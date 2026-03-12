import { signOut } from "../../../lib/auth"
 import './signout.css';
import { redirect, RedirectType } from 'next/navigation'
const deleteAccount =()=>{

}
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
       const logout= await signOut()
        if(logout){
              redirect('/app/login')
             }
      }}
    >
      <h1>Thank you for visiting our site!</h1>
      <button className="signoutbutton" type="submit">Sign Out</button>
      <div>
        <form
      action={async () => {
        "use server"
       const logout=  deleteAccount();
        if(logout){
              redirect('/app/login')
             }
      }}
    />
      </div>
    </form>
  )
}