import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import MainPage from "./MainPage";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
