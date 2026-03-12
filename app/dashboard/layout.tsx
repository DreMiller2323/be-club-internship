import Link from 'next/link'
import'../globals.css'
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html >
      <body>
        <nav className='topnav'>
<Link href="/dashboard">Fitness Intake Form</Link>
<Link href="/dashboard/fitnessplan">Fitness Plan</Link>
<Link href="/dashboard/signout">Signout</Link>
           
         </nav>
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}