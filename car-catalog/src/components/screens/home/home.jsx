import axios from 'axios';
import { useEffect, useState } from 'react';
import CarItem from './car-item/CarItem';
import {cars as carsData} from './cars.data.js';
import CreateCarForm from './create-car-form/CreateCarForm.jsx';
import { CarService } from '../../../services/car.service';

function Home() {

const [cars, setCars] = useState()

useEffect(() => {
    const fetchData = async () => {
        const data = await CarService.getAll()

        setCars(data)
    }
    fetchData()
}, [])

   return (
        <div>
          <h1>Cars Catalog </h1>
          <CreateCarForm setCars={setCars}/>
          <div>
            {cars.length ? (
                cars.map(car => (<CarItem key={car.id} 
                car={car}/>)
            ))
             : <p>There are no cars</p>
        }
           </div>
        </div>  
    )
  }
  
  export default Home
  