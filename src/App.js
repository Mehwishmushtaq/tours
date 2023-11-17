import React, { useEffect, useState } from 'react'
import Loader from './loader'
import Tours from './tours'
import { Button } from 'react-bootstrap'
const url = "https://course-api.com/react-tours-project"

const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [tours, setTours] = useState([])
    const getTours = async () =>{
        setIsLoading(true)
        const response =await fetch(url);
        const tours =await response.json();
        setTours(tours)
        setIsLoading(false)
        // console.log(tours);
    }
     const removeTour = (id)=>{
          const singleTour = tours.filter((tour)=>tour.id !== id)
           setTours(singleTour)
     }
    useEffect(()=>{
        getTours()
    }, [])
    
    //conditional rendering for return multiple components will use if-else condition
    if (isLoading) {
        return <Loader/>
    }
    if (tours.length === 0) {
       return <Button variant='success' onClick={()=>getTours()}>
         Fetch Again 
        </Button>
    }
  return (
    //<div>App</div>
    <div><Tours tours = {tours} removeTour = {removeTour}/></div>
    
  )

}
export default App