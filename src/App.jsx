import "./App.css";
import HomePage from './pages/HomePage'
import Contacts from './pages/Contacts'
import Design from './pages/Design'
import Interview from './pages/Interview'
import Product from './pages/Product'
import Property from './pages/Property'
import Rest from './pages/Rest'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import PageTitle from "./PageTitle";
import Article from "./components/Article/Article";

function App() {
  return (
    <BrowserRouter>
    <PageTitle/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/property" element={<Property/>}/>
        <Route path="/rest" element={<Rest/>}/>
        <Route path="/rest/:type?" element={<Rest/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/interview" element={<Interview/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/article" element={<Article/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
