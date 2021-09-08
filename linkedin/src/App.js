import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './components/IndexLayout/Index'
import HomePage from './components/HomePageLayout/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Experience from './components/Experience'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/user/" component={Index} />
          <Route exact path="/user/:id" children={Index} />






        </Switch>
      </Router>
    </div>
  );
}
export default App;
