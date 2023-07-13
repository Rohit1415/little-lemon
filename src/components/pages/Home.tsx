import "../style/style.css";
import Header from "./Header";
import Carousels from "./Carousels";
import Topdises from "./Topdises";
import Menuouter from "./Menuouter";
import Visitus from "./Visitus";
import Map from "./Map";
import Shareyourexperience from "./Shareyourexperience";
import Gallry from "./Gallry";
import Footer from "./Footer";

const Enterlines = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="w-100">WE ARE FRIENDS & FAMILY</h2>
      <p>
        At Friends & Family, we are dedicated to all things seasonal with a
        market-driven day-time menu that also offers a variety of artisan breads
        and pastries made daily with locally-sourced, heirloom grains.
      </p>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <Carousels />
      <Enterlines />
      <h1 className="text-center">Top Dises</h1>
      <Menuouter />
      <Topdises />
      <Visitus />
      <Map />
      <Shareyourexperience />
      <Gallry />
      <Footer />
    </>
  );
};

export default Home;
