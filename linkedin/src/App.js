import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './components/IndexLayout/Index'
import HomePage from './components/HomePageLayout/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Experience from './components/Experience'
import Feeds from './components/Feeds'
import GetSinglePost from './components/GetSinglePost'



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/user/" component={Index} />
          <Route exact path="/user/:id" children={Index} />
          <Route exact path="/posts/" component={Feeds} />
          <Route exact path="/posts/:id" component={GetSinglePost} />
          {/* <Route exact path="/posts/user/:id" component={GetMyPosts} /> */}

          {/* <Route exact path="/posts/:id" component={EditPost} /> */}





        </Switch>
      </Router>
    </div>
  );
}
export default App;
