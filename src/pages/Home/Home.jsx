
import AppStore from "../AppStore/AppStore";
import Banner from "../Banner/Banner";
import Coffes from "../Coffes/Coffes";
import Hero from "../Hero/Hero";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Coffes />
      <Banner/>
      <AppStore/>
      <Testimonial/>
     
    </div>
  );
};

export default Home;
