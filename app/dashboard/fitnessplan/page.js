
//imported client component fitness page so we can use a server component and secure the route all data from fitness will be rendered here. 

import Plan from '../fitness/page'
import {auth} from '../../../lib/auth';
import {Suspense} from 'react'
import Image from "next/image";
import Analytics from '../fitnessInfo/page'
import { redirect } from 'next/navigation'

  const session =  await auth()
 if (!session)   redirect('/login')
 return <div>Not authenticated</div>
export default  function Page() {
    return (
    <main className='plan'>
   
        <div>
        <Plan/>
        </div>
        <div>
        <Analytics/>
        </div>
        <div>
             <Image
      src="/DreFit.JPG"
      width={150}
      height={100}
      alt=""
    />
    <div>
    App Created by Coach Dre Miller
    Personal Trainer and Software Engineer. 
    </div>
    
        </div>
        <div>
            
        </div>
      
</main>
 
    );
}
