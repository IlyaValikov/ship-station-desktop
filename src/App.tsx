import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/BaggageListPage";
import BaggagePage from "./pages/BaggageDetailsPage";
import HomePage from "./pages/HomePage";

// const router = createBrowserHashRouter([
//   {
//     path: "/",
//     element: <HomePage></HomePage>,
//   },
//   {
//     path: "/baggage",
//     element: <MainPage></MainPage>,
//   },
//   {
//     path: "/baggage/:id",
//     element: <BaggagePage></BaggagePage>,
//   },
// ]);
const { invoke } = (window as any).__TAURI__.tauri;
const App: React.FC = () => {
  useEffect(() => {
    invoke("tauri", { cmd: "create" })
      .then((response: any) => console.log(response))
      .catch((error: any) => console.log(error));
    return () => {
      invoke("tauri", { cmd: "close" })
        .then((response: any) => console.log(response))
        .catch((error: any) => console.log(error));
    };
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/baggage" element={<MainPage></MainPage>}></Route>
        <Route
          path="/baggage/:id"
          element={<BaggagePage></BaggagePage>}
        ></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
