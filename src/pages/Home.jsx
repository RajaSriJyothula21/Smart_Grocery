import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Offers from "../components/Offers";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import HighestSales from "./HighestSales";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Offers />
      <HighestSales/>
      <Reviews />
      <Footer />
    </>
  );
}