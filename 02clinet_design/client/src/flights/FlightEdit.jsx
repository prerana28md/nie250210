import PageHeader from "../header/PageHeader";
function FlightEdit(){
    return(
        <>
        <PageHeader/>
        <h3><a href="/flights/list" className="btn btn-light">Go Back</a>Edit Flight Ticket Price</h3>
    <div className="container">
        <div classNameName="form-group mb-3">
            <label for="number" className="form-label">Flight Number</label>
            <div type="text" className="form-control" id="number">???</div>
        </div>
        <div className="form-group mb-3">
            <label for="airline_name" className="form-label">AirLine Name</label>
            <div type="text" className="form-control" id="number">???</div>
        </div>
        <div className="form-group mb-3">
            <label for="source" className="form-label">Source</label>
            <div className="form-control" id="number">???</div>
        </div>
        <div className="form-group mb-3">
            <label for="destination" className="form-label">Destination</label>
            <div className="form-control" id="number">???</div>
        </div>
        <div className="form-group mb-3">
            <label for="capacity" className="form-label">Capacity(Number of Seats)</label>
            <div className="form-control" id="number">???</div>
        </div>
        <div className="form-group mb-3">
            <label for="price" className="form-label">Ticket Price</label>
            <input type="text" className="form-control" id="number" placeholder="Please enter Ticket Price"/>
        </div>
        <button className="btn btn-warning">Update Price</button>
    </div>
        </>
    );
}

export default FlightEdit;