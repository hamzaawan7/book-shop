import React,{Suspense} from 'react';
import Header from './assets/Header'
import Intercept from './assets/Intercept';
import Loading from "./Loading";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const history = Intercept.getHistoryObject();
  const Home = React.lazy(() => import('./Home'));
const Books = React.lazy(() => import('./Books'));
  return (
      <div className="body">
        <BrowserRouter
          history={history}
        >
          <Header />

          <div className="body-content" style={{
            minHeight: '600px'
          }}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/books/:id" component={Books} />
            </Switch>
          </Suspense>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App; 