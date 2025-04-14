import Join from "../../components/Join";
import SwipesCounter from "../../components/SwipesCount";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import PremiumPlan from "../../components/PremiumPlan";
import ArtistsWeek from "../../components/ArtistsWeek";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <PremiumPlan />
      <ArtistsWeek />
      <Join />
      <SwipesCounter />
    </div>
  );
};

export default Home;
