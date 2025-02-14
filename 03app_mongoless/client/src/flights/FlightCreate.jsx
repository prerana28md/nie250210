import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageHeader from "../header/PageHeader";
function FlightCreate() {
    const[flight,setflight] = useState({id:"1010", number:"AI 789", airline_name:"Air India", source:"Mysuru", destination:"Trichy", capacity:180, price:5000.0})
    const OnBoxChange =(event)=>{
        const newFlight ={...flight};
        newFlight[event.target.id]=event.target.value;
        setflight(newFlight);
    }
    const navigate = useNavigate();
    const OnCreate=async()=>{
            try{
              const baseurl = "http://localhost:8080"
              const response = await axios.post(`${baseurl}/flights`, { 
                ...flight,
                capacity: parseInt(flight.capacity),
                price: parseFloat(flight.price)
            });
              alert(response.data.message)
              navigate('/flights/list'); 
              //setFlights(response.data);
            } catch(error){
          alert('server error');
            }
    }
    return (
        <>
            <PageHeader PageNumber={2} />
            <h3><a href="/flights/list/" className="btn btn-light">Go Back</a>New flight</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label for="number" className="form-label">Flight number</label>
                    <input type="text" className="form-control" id="number" placeholder="please enter flight number" 
                    value={flight.number} onChange={OnBoxChange}/>
                </div>
                <div className="form-group mb-3">
                    <label for="airline name" className="form-label">Airline name</label>
                    <input type="text" className="form-control" id="airline_name" placeholder="please enter airline name"
                    value={flight.airline_name} onChange={OnBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label for="source" className="form-label">Source</label>
                    <input type="text" className="form-control" id="source" placeholder="please enter source" 
                    value={flight.source} onChange={OnBoxChange}/>
                </div>
                <div className="form-group mb-3">
                    <label for="destination " className="form-label">Destination</label>
                    <input type="text" className="form-control" id="destination" placeholder="please enter destination"
                    value={flight.destination} onChange={OnBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label for="capacity" className="form-label">Capacity(no of seats)</label>
                    <input type="text" className="form-control" id="capacity" placeholder="please enter capacity"
                    value={flight.capacity} onChange={OnBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label for="price" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" placeholder="please enter price"
                    value={flight.price} onChange={OnBoxChange} />
                </div>
                <button className="btn btn-success" onClick={OnCreate}>CreateFlight</button>
            </div>
        </>
    );
}

export default FlightCreate;