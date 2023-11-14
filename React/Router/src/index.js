import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Root from "./pages/Root";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorNotFound from "./pages/ErrorNotFound";
import About from "./pages/About";
import Home from "./pages/Home";

// array in object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // 404 경우 -> Error 컴포넌트 렌더링
    errorElement: <ErrorNotFound />,
    // 중첩
    children: [
      {
        // index: true == '/' (루트)경로 인 경우
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 성능 측정
reportWebVitals();
