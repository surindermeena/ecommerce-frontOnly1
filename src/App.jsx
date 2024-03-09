import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homePage";
import Navbar from "./components/navbar";
import RecipeReviewCard from "./components/productPage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>

      
    <HomePage/>
    {/* <RecipeReviewCard/> */}
    </>
  );
}

export default App;
