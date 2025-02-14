import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../header/PageHeader";
import axios from "axios";

function CoffeeEdit() {
  const [coffee, setCoffee] = useState({
    id: "",
    number: "",
    type: "",
    category: "",
    sugar_level: "",
    price: 0.0
  });

  const params = useParams();
  const navigate = useNavigate();

  // Fetch coffee order details
  useEffect(() => {
    const readCoffeeById = async () => {
      try {
        const baseUrl = "http://localhost:8080";
        const response = await axios.get(`${baseUrl}/coffees/${params.id}`);
        setCoffee(response.data);
      } catch (error) {
        alert("Server Error");
      }
    };
    readCoffeeById();
  }, [params.id]);

  // Handle input changes
  const OnBoxChange = (event) => {
    const { id, value } = event.target;
    setCoffee((prevCoffee) => ({
      ...prevCoffee,
      [id]: id === "price" ? parseFloat(value) || 0 : value
    }));
  };

  // Update coffee order details
  const OnUpdate = async () => {
    try {
      const baseUrl = "http://localhost:8080";
      await axios.put(`${baseUrl}/coffees/${params.id}`, coffee);
      alert("Coffee order updated successfully");
      navigate("/coffee/list");
    } catch (error) {
      alert("Server Error");
    }
  };

  return (
    <>
      <PageHeader PageNumber={2} />
      <h3>
        <a href="/coffee/list" className="btn btn-light btn-outline-success">
          Go Back
        </a> Edit Order
      </h3>
      <div className="container">
        <div className="form-group mb-3">
          <label htmlFor="number" className="form-label">ID</label>
          <input type="text" className="form-control" id="number" value={coffee.number} readOnly />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <input type="text" className="form-control" id="type" placeholder="Enter coffee type" value={coffee.type} onChange={OnBoxChange} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" placeholder="Enter category (Small/Medium/Large)" value={coffee.category} onChange={OnBoxChange} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="sugar_level" className="form-label">Sugar Level</label>
          <input type="text" className="form-control" id="sugar_level" placeholder="Enter sugar level" value={coffee.sugar_level} onChange={OnBoxChange} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price" className="form-label">Coffee Price</label>
          <input type="number" className="form-control" id="price" placeholder="Enter total price" value={coffee.price} onChange={OnBoxChange} />
        </div>
        <button className="btn btn-info btn-outline-success" onClick={OnUpdate}>
          Change Order
        </button>
      </div>
    </>
  );
}

export default CoffeeEdit;
