import React, { Fragment } from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import MainPage from "./MainPage";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <MainPage />
      </Fragment>
    </Provider>
  );
}

export default App;
