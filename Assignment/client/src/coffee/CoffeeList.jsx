import PageHeader from "../header/PageHeader";
function CoffeeList(){
    return(
        <>
        <PageHeader PageNumber={1}/>
        <h3>List of Coffee</h3>
    <div className="container">
        <table className="table table-info table-striped-columns table-bordered border-primary">
            <thead className="table-success">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Type</th>
                    <th scope="col">Catergory</th>
                    <th scope="col">Sugar Level</th>
                    <th scope="col">Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">56</th>
                    <td>Filter</td>
                    <td>Medium</td>
                    <td>Less</td>
                    <td>$123</td>
                    <td><a href="/coffee/edit/1023459870" className="btn btn-success">Change Order</a>
                        <button className="btn btn-warning btn-outline-danger">Cancel Order</button>
                    </td>
                </tr>
                <tr>
                <th scope="row">57</th>
                    <td>Instant</td>
                    <td>Small</td>
                    <td>Normal</td>
                    <td>$234</td>
                    <td><a href="/coffee/edit/202111222" className="btn btn-success">Change Order</a>
                        <button className="btn btn-warning btn-outline-danger">Cancel Order</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    );
}

export default CoffeeList;