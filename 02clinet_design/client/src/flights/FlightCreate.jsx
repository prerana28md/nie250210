import PageHeader from "../header/PageHeader";
function FlightCreate() {
    return (
        <>
        <PageHeader PageNumber={2}/>
            <h3><a href="/flights/list" class="btn btn-light">Go Back</a>Flight</h3>
            <div class="container">
                <div class="form-group mb-3">
                    <label for="number" class="form-label">Flight Number</label>
                    <input type="text" class="form-control" id="number" placeholder="Please enter flight number" />
                </div>
                <div class="form-group mb-3">
                    <label for="airline_name" class="form-label">AirLine Name</label>
                    <input type="text" class="form-control" id="number" placeholder="Please enter airline name" />
                </div>
                <div class="form-group mb-3">
                    <label for="source" class="form-label">Source</label>
                    <input type="text" class="form-control" id="number" placeholder="Please enter source" />
                </div>
                <div class="form-group mb-3">
                    <label for="destination" class="form-label">Destination</label>
                    <input type="text" class="form-control" id="number" placeholder="Please enter destination" />
                </div>
                <div class="form-group mb-3">
                    <label for="capacity" class="form-label">Capacity(Number of Seats)</label>
                    <input type="text" class="form-control" id="number" placeholder="Please enter number of seat" />
                </div>
                <div class="form-group mb-3">
                    <label for="price" class="form-label">Ticket Price</label>
                    <input type="text" class="form-control" id="number" placeholder="Please enter Ticket Price" />
                    <button class="btn btn-success">Create Flight</button>
                </div>
            </div>
            </>
            );
}

            export default FlightCreate;