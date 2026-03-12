import Image from "next/image";

export  function Footer() {
    return (
       
        <div className='footer'>
            <div>
            </div>
            <div className='footer-image'>
      <Image
      src="/LI-In-Bug.png"
      width={45}
      height={70}
      alt=""
    />
    </div>
    <div className='tiktok-image' >
     <Image
      src="/10464230.png"
      width={55}
      height={60}
    
      alt=""
    />
</div>

  
  
    </div>

    );
}