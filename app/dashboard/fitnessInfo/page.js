 //and expose our data out here.
 'use client'
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((r) => r.json())

export default   function Analytics() {

  const { data, error, isLoading } = useSWR(
    '/api/fitnessAnalytics',
    fetcher
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if(!data) return <div>Please see Fitness Intake age</div>
  console.log(data)
  return (

  <div className='plan'>
<div>
{data.map((plan) => (
  
  <div key={plan.id}>Bodyweight{` ${plan.body_weight}' IBS`}</div>
))}
<div>
    {data.map((plan) => (
        <div key={plan.id}>{`Your estimated/raw one rep max on ${plan.exercise_name} is  ${plan.one_rep_max} `}</div> ))}
</div>
<div>
    {data.map((plan) => (
        <div key={plan.id}>{`Your strength to bodyweight ratio is:${plan.body_ratio} `}</div> ))}
</div>
</div>
</div>
    );
}