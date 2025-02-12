import CoffeeList from "./coffee/CoffeeList";
import CoffeeCreate from "./coffee/CoffeeCreate";
import CoffeeEdit from "./coffee/CoffeeEdit";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<CoffeeList/>}/>
            <Route path="/coffee/list" element={<CoffeeList/>}/>
            <Route path="/coffee/create" element={<CoffeeCreate/>}/>
            <Route path="/coffee/edit/:id" element={<CoffeeEdit/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
