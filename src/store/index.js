import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { createBrowserHistory } from "history";

const middleware = applyMiddleware(thunk);

function RunDevToolExtensionIfNotInProduction() {
  const shouldExposeState =
    (!process.env.NODE_ENV || process.env.NODE_ENV !== "production") &&
    window.devToolsExtension;

  return shouldExposeState ? window.devToolsExtension() : (f) => f;
}

// export const history =  createHashHistory();
export const history = createBrowserHistory();

export const store = createStore(
  rootReducer,
  compose(middleware, RunDevToolExtensionIfNotInProduction())
);
