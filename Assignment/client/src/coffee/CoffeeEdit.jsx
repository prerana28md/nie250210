import PageHeader from "../header/PageHeader"
function CoffeeEdit(){
    return(
        <>
        <PageHeader/>
        <h3><a href="/coffee/list" className="btn btn-light">Go Back</a>Flight</h3>
                <div className="container">
                    <div className="form-group mb-3">
                        <label for="number" className="form-label">ID</label>
                        <div type="text" className="form-control" id="number">???</div>
                    </div>
                    <div className="form-group mb-3">
                        <label for="airline_name" className="form-label">Type</label>
                        <input type="text" className="form-control" id="number"
                            placeholder="Please enter changed type of coffee"/>
                    </div>
                    <div className="form-group mb-3">
                        <label for="source" className="form-label">Catergory</label>
                        <input type="text" className="form-control" id="number"
                            placeholder="Please enter changed Catergory(Small/Medium/Large)"/>
                    </div>
                    <div className="form-group mb-3">
                        <label for="destination" className="form-label">Sugar Level</label>
                        <input type="text" className="form-control" id="number"
                            placeholder="Please enter changed sugar level"/>
                    </div>
                    <div className="form-group mb-3">
                        <label for="capacity" className="form-label">Coffee Price</label>
                        <input type="text" className="form-control" id="number"
                            placeholder="Please enter total price of coffee"/>
                    </div>
                    <button className="btn btn-info">Change Order</button>
                </div>
        </>
    );
}
export default CoffeeEdit;