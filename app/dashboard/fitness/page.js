'use client'
 //decided to use swr as this page is at an outer leaflet of the nextjs app therefore we dont want to use a server component 
 //and expose our data out here.
import useSWR from 'swr';
import Image from "next/image";



const fetcher = (url) => fetch(url).then((r) => r.json())

export default   function Plan() {

  const { data, error, isLoading } = useSWR(
    '/api/fitness',
    fetcher
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if(!data) return <div>Please see Fitness Intake page</div>
  return (

   
  <div className='plan'>
  <div className='week_One'>

{data.map((plan) => (

  <div key={plan.id}>{`Week1: ${plan.week_one} IBS`}</div>
))}
</div>
<div>
    {data.map((plan) => (
        <div key={plan.id}>Week2: {` ${plan.week_two} IBS`}</div> ))}
</div>
<div>
    {data.map((plan) => (
        <div key={plan.id}> Week3: {` ${plan.week_three} IBS`}</div>
 ))}
</div>
<div>
    {data.map((plan) => (
        <div key={plan.id}>Week4:{` ${plan.week_four} IBS`}</div>
                

      ))}
</div>
<div>
    {data.map((plan) => (
        <div key={plan.id}>Week5:{` ${plan.week_five} IBS`}</div>
                
  ))}
  </div>
  <div>
    {data.map((plan) => (
        <div key={plan.id}> Week6: {`${plan.week_six} IBS`}</div>
 ))}
 </div>
</div>
    

  )
}