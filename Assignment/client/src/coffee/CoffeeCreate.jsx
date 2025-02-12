import PageHeader from "../header/PageHeader";
function CoffeeCreate(){
    return(
        <>
        <PageHeader PageNumber={2}/>
        <h3><a href="/coffee/list" className="btn btn-light">Go Back</a>Make Order</h3>
      <div className="container">
        <div className="form-group mb-3">
          <label for="number" className="form-label">ID</label>
          <input type="text" className="form-control" id="number" placeholder="Please enter id"/>
        </div>
        <div className="form-group mb-3">
          <label for="airline_name" className="form-label">Type</label>
          <input type="text" className="form-control" id="number" placeholder="Please enter type of coffee"/>
        </div>
        <div className="form-group mb-3">
          <label for="source" className="form-label">Catergory</label>
          <input type="text" className="form-control" id="number" placeholder="Please enter Catergory(Small/Medium/Large)"/>
        </div>
        <div className="form-group mb-3">
          <label for="destination" className="form-label">Sugar Level</label>
          <input type="text" className="form-control" id="number" placeholder="Please enter sugar level"/>
        </div>
        <div className="form-group mb-3">
          <label for="capacity" className="form-label">Coffee Price</label>
          <input type="text" className="form-control" id="number" placeholder="Please enter total price of coffee"/>
        </div>
        <button className="btn btn-primary">Make Order</button>
      </div>
        </>
    );
}
export default CoffeeCreate;