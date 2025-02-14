import { useEffect, useState } from "react";
import PageHeader from "../header/PageHeader";
import axios from 'axios';

function CoffeeList() {
    const [coffees, setCoffees] = useState([]);

    const readAllCoffees = async () => {
        try {
            const baseUrl = 'http://localhost:8080';
            const response = await axios.get(`${baseUrl}/coffees`);
            setCoffees(response.data);
        } catch (error) {
            alert('Server Error');
        }
    };

    useEffect(() => { 
        readAllCoffees(); 
    }, []);

    const OnDelete = async (id) => {
        if (!confirm("Are you sure you want to delete?")) return;

        try {
            const baseUrl = 'http://localhost:8080';
            const response = await axios.delete(`${baseUrl}/coffees/${id}`);
            alert(response.data.message);
            readAllCoffees();
        } catch (error) {
            alert('Server Error');
        }
    };

    return (
        <>
            <PageHeader PageNumber={1} />
            <h3>List of Coffee</h3>
            <div className="container">
                <table className="table table-info table-striped-columns table-bordered border-primary">
                    <thead className="table-success">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Type</th>
                            <th scope="col">Category</th>
                            <th scope="col">Sugar Level</th>
                            <th scope="col">Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coffees.map((coffee) => (
                            <tr key={coffee.id}> {/* Added a unique key */}
                                <th scope="row">{coffee.name}</th>
                                <td>{coffee.type}</td>
                                <td>{coffee.category}</td> {/* Fixed property name */}
                                <td>{coffee.sugar_level}</td> {/* Fixed property name */}
                                <td>{coffee.price}</td>
                                <td>
                                    <a href={`/coffees/edit/${coffee.id}`} className="btn btn-warning">Edit Price</a>
                                    <button className="btn btn-danger" onClick={() => OnDelete(coffee.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CoffeeList;
