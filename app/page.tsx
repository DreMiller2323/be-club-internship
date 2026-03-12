import Image from "next/image";
import { redirect } from 'next/navigation'

export default function Home() {
  const sendToSignUp=()=>{
          redirect('/signup')

  }
  return (
 <div className="image-container">
<div className="header-image">

   <Image
  
      src="/promo.jpg"
      width={900}
      height={400}
      className="beclub-logo"
      alt="Picture of the author"
    />
{/* 
  <div className="top-logo">
      <Image
   src="/beclub.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
    </div> */}

  <div className='Berea '>

      <Image
   src="/beclub.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
   
<p>Entrepreneurship is a <span className='mindset'>mindset  </span>

Berea Entrepreneurship Club empowers students through talks, 
workshops, and real-world innovation experiences</p>
</div>
    </div>


<div className='first-photo'>
  
    <Image
      src="/collab.JPG"
      width={350}
      height={350}
      alt=""
    />
     <div className="what-we-do">
      <span className="mindset">What we do:</span>

      <p className='details'>
  The Berea Entrepreneurship Club is a student-led community dedicated to fostering an entrepreneurial mindset across campus. We host guest speakers, hands-on workshops, and conferences that expose students to real-world innovation and leadership. 
Our goal is to make entrepreneurship accessible — not just as a career path, but as a way of thinking. Through collaboration and action, we empower students to turn ideas into impact.
      </p>
</div>

</div>

<div className='third-photo'>
  
 <div className="item-photo">

    <Image
      src="/learn.jpg"
      width={1000}
      height={1000}
      alt=""
    />
    <h1>Startup Speaker Series</h1>
      <p className='about-info'>
         Multi-session events featuring founders and industry professionals
        who shared real-world insights on launching and scaling ventures.
      </p>
</div>
 <div className="item-photo">

        <Image
      src="/lady.jpg"
      width={800}
      height={500}
      alt=""
    />
        <h1>Entrepreneurship Bootcamp</h1>
      <p className='about-info'>
     A hands-on workshop series where students developed business ideas, 
     refined pitches, and presented final concepts to peers.
      </p>
    </div>
    <div className="item-photo">
          <Image
      src="/IMG_4092.JPG"
      width={1000}
      height={1000}
      alt=""
    />
       <h1>Student Venture Incubator</h1>
      <p className='about-info'>
    An initiative supporting student-led ideas through mentorship, 
    collaboration, and structured feedback sessions.
   </p>
    </div>
</div>
<div className='speaker-container'>

    <Image
      src="/IMG_6799.jpg"
      width={400}
      height={350}
      alt=""
    />

<div>
<h1>Sign up to be a speaker today!</h1>
<p>We’re always looking for entrepreneurs and industry leaders willing to share real-world insights with our student community. 
  Join us in shaping the next generation of innovators.We’re always looking for entrepreneurs and industry leaders willing to share real-world insights with our student community. Join us in shaping the next generation of innovators.</p>
<button className="speaker-button">sign-up</button>
</div>

</div>
<div className='almost-done'>
     {/* <Image
      src="/Allday.png"
      width={600}
      height={350}
      alt=""
    /> */}
    <div className='bottom-page'> 
  <h1>Join the Community. Support the Mission.</h1>
<p >Whether you’re a student looking to get involved or a supporter who believes in empowering young entrepreneurs, there are many ways to contribute to BEC. Join our events, collaborate on projects, or help us expand our impact through sponsorships and donations.</p>
  <h1> Join as a Member</h1>
  <p>  
 Become part of our student network and participate in workshops, talks, 
 and innovation challenges.
  Donate
 Contribute to funding events, speaker sessions, 
 and student-led  projects. </p>
 <button className="speaker-button">Join Now!</button>

</div>
</div>
<div className='contact-dets'>

     <Image
      src="/party.png"
      width={310}
      height={350}
      alt=""
    />
    <span>
  <ul className="contact-us" >
    <h1>Contact Us</h1>
    <li>Phone Number:(520)-555-2556 </li>
     <li>Email:getrich@fakeemail.com </li>
    <li>Phone Number:(520)-555-2556 </li>
 </ul>
</span>
</div>
</div>
  );
}
