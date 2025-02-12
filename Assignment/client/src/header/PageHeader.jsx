function PageHeader({PageNumber}){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/coffee/list">Cafe Coffee Day</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className={PageNumber== 1 ? "nav-link active":"nav-link"} aria-current="page" href="/coffee/list">Ordered List</a>
              </li>
              <li className="nav-item">
                <a className={PageNumber== 2 ? "nav-link active":"nav-link"} href="/coffee/create">Add Order</a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
        </>
    );
}
export default PageHeader;