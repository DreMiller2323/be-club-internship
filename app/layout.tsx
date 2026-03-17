import Link from 'next/link'
import './globals.css'
import {Footer} from '../components/footer'
import {Header} from '../components/header'

import { Roboto } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
    weight: ['400', '700'], // normal + bold

  subsets: ['latin'],
  display: 'swap',
})
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html  className={roboto.className}>
      <body>
        <nav className='topnav'>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/">Home</Link>
           <Link href="/signup">Signup</Link>
          <Link href="/login">Login</Link>
           <Link href="/dashboard">Dashboard</Link>
            </nav>
         <Header/>
     <main>  {children}</main> 
        <Footer/>
      </body>
    </html>
  )
}