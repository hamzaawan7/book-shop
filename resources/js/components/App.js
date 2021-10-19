import React from 'react';
import Header from './assets/Header'
import Intercept from './assets/Intercept';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
const Home = React.lazy(() => import('./Home'));
const Books = React.lazy(() => import('./Books'));

function App() {
  const history = Intercept.getHistoryObject();
  return (
      <div className="body">
        <Router
          history={history}
        >
          <Header />

          <div className="body-content" style={{
            minHeight: '600px'
          }}>
       
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/books/:id" component={Books} />
              </Switch>
          
          </div>
        </Router>
      </div>
  );
}

export default App;
//  <Route exact path="/book-page" component={SearchProfiles} />    