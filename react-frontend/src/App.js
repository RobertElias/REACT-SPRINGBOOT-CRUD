import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App () {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          <div className="Container">
              <Switch> 
              <Route path="/" component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent} />
                <ListEmployeeComponent />
              </Switch>
          </div>
          <FooterComponent />        
      </Router>
    </div>
  );
}

export default App;
