import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent'

import { BrowserRouter as Router, Route,Switch} from 'react-router-dom/cjs/react-router-dom.min';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
        
            <HeaderComponent/>
                 <div className="container">
                 <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" exact component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" exact component = {ViewEmployeeComponent}></Route>

                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}

                          {/* <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
        </div>
            <FooterComponent/>
       
      </Router>
    </div>
    
    
  );
}

export default App;
