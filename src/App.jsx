import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
import Header from './Header';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <Header></Header>
      <h2 className='text-center font-bold text-3xl mt-2'>Here is a list of coffee: {coffees.length} coffees</h2>
      <div className='grid md:grid-cols-2 gap-4 mx-20 mt-5'>
        {coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)}
      </div>
    </div>
  )
}

export default App
