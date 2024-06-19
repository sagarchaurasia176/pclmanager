import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// redux apply here
import { store } from "./redux/Store/Store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* provider store apply here */}
    <Provider store={store}>
      {/* browser Router */}
      <BrowserRouter>
        {/* app main part */}
        <App />
        {/* toaster */}
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
