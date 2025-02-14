import { useState } from "react";
import PageHeader from "../header/PageHeader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CoffeeCreate() {
  const [coffee, setCoffee] = useState({
    id: "",
    number: "",
    type: "",
    category: "",
    sugar_level: "",
    price: 0.0
  });

  const OnBoxChange = (event) => {
    const { id, value } = event.target;
    setCoffee((prevCoffee) => ({
      ...prevCoffee,
      [id]: id === "price" ? parseFloat(value) || 0 : value, // Ensure price is a number
    }));
  };

  const navigate = useNavigate();

  const OnCreate = async () => {
    try {
      const baseUrl = "http://localhost:8080";
      const response = await axios.post(`${baseUrl}/coffees`, coffee);
      alert(response.data.message);
      navigate("/coffee/list");
    } catch (error) {
      alert("Server Error");
    }
  };

  return (
    <>
      <PageHeader PageNumber={2} />
      <h3>
        <a href="/coffees/list" className="btn btn-light btn-outline-success">
          Go Back
        </a>
        Make Order
      </h3>
      <div className="container">
        <div className="form-group mb-3">
          <label htmlFor="number" className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="Please enter ID"
            value={coffee.number}
            onChange={OnBoxChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <input
            type="text"
            className="form-control"
            id="type"
            placeholder="Please enter type of coffee"
            value={coffee.type}
            onChange={OnBoxChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="Please enter Category (Small/Medium/Large)"
            value={coffee.category}
            onChange={OnBoxChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="sugar_level" className="form-label">Sugar Level</label>
          <input
            type="text"
            className="form-control"
            id="sugar_level"
            placeholder="Please enter sugar level"
            value={coffee.sugar_level}
            onChange={OnBoxChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price" className="form-label">Coffee Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Please enter total price of coffee"
            value={coffee.price}
            onChange={OnBoxChange}
          />
        </div>
        <button className="btn btn-primary btn-outline-light" onClick={OnCreate}>
          Make Order
        </button>
      </div>
    </>
  );
}

export default CoffeeCreate;
