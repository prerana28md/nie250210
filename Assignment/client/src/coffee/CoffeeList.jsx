import PageHeader from "../header/PageHeader";
function CoffeeList(){
    retrun(
        <>
        <PageHeader/>
        <h3>List Of Coffee</h3>
    <div className="container">
        <table classNames="table table-info table-striped-columns table-bordered border-primary">
            <thead classNames="table-dark">
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
                    <td><a href="/coffee/edit/:1023459870" classNames="btn btn-info">Change Order</a>
                        <button classNames="btn btn-secondary">Cancel Order</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">57</th>
                    <td>Instant</td>
                    <td>Small</td>
                    <td>Normal</td>
                    <td>$234</td>
                    <td><a href="/coffee/edit/:202111222" classNames="btn btn-info">Change Order</a>
                        <button classNames="btn btn-secondary">Cancel Order</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}
export default CoffeeList;