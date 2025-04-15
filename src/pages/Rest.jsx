import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RestInside from "../components/RestInside/RestInside";
import Article from "../components/Article/Article";
import { useParams, BrowserRouter, Routes, Route } from "react-router-dom";
function Rest() {
  const { type } = useParams();
  return (
    <>
      <Header />
      {!type && (
        <>
          <RestInside />
        </>
      )}
      <div>
        {type ? (
          type === "article" ? (
            <Article />
          ) : (
            <div>Неизвестный тип отдыха</div>
          )
        ) : (
          <Routes>
            <Route path="/article" element={<Article />} />
          </Routes>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Rest;
