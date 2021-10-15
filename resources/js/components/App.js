import React from 'react';
import Header from './assets/Header'
import Intercept from './assets/Intercept';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const history = Intercept.getHistoryObject();
  const Home = React.lazy(() => import('./Home'));
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
                <Route exact path="/" component={Home} />
              </Switch>
          
          </div>
        </Router>
      </div>
  );
}

export default App;
//  <Route exact path="/book-page" component={SearchProfiles} />    