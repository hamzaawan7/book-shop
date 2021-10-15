import { createBrowserHistory, createHashHistory } from 'history'

export default class Intercept {
  static historyObject = null;

  static getHistoryObject() {

    if(Intercept.historyObject != null) {
      return Intercept.historyObject;
    }

    Intercept.historyObject = Intercept.hashHistory === true ? 
      createHashHistory({
        /* pass a configuration object here if needed */
      }) :
      createBrowserHistory({
        basename: process.env.PUBLIC_URL
      });

    return Intercept.historyObject;
  }
}
