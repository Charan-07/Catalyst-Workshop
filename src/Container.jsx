/* istanbul ignore file */
import { Header } from "./components/header/Header";
import { Hero } from "./components/main/hero/HeroSection";
import { Footer } from "./components/footer/Footer";
import { BestRecipes} from "./components/main/ourBestRecipes/BestRecipes";


import "./Container.css";

import { Contact } from "./components/main/contact/Contact";


function Container() {
  return (
    <>
      <Header />
       <Hero />
       <BestRecipes />
      <Contact />
      <Footer />
    </>
  );
}

export default Container;
