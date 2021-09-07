import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './components/IndexLayout/Index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return ( 
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/user/:id" children={Index} />
        </Switch>
      </Router>
    </div>
     );
  }
export default App;
