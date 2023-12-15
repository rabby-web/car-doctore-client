import Banner from "../Banner/Banner";
import HomeAbout from "../HomeAbout/HomeAbout";
import MoreService from "../MoreService/MoreService";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeAbout></HomeAbout>
      <Services></Services>
      <MoreService></MoreService>
    </div>
  );
};

export default Home;
