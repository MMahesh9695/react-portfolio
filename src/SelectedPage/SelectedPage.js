import { useState } from "react";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

export default function SelectedPage() {
  const [currentPage, setCurrentPage] = useState();
  const PageList = {
    home: <Home></Home>,
    portfolio: <Portfolio></Portfolio>,
    contact: <Contact></Contact>,
  };
  return (
    <>
      <header></header>
      <main></main>
      <footer></footer>
    </>
  );
}
