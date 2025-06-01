import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// import { useState } from "react";
// import Header from "./components/Header";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import HomePages from "./pages/HomePages";

// function App() {
//   return (
//     <>
//       <HomePages />
//       {/* <LoginPage /> */}
//       {/* <RegisterPage /> */}
//     </>
//   );
// }


// {

// }
