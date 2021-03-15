import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App () {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          <div className="Container">
              <Switch> 
              <Route path="/" exact component={ListEmployeeComponent}/>
              <Route path="/employees" component={ListEmployeeComponent}/>
              <Route path="/add-employee" component={CreateEmployeeComponent}/>
              <Route path="/update-employee/:id" component={UpdateEmployeeComponent} />;

                <ListEmployeeComponent />
              </Switch>
          </div>
          <FooterComponent />        
      </Router>
    </div>
  );
}

export default App;
