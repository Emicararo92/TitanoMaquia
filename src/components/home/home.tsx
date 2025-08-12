import DivLine from "../../app/utils/DivLine/DivLineBig";
import DivLineSmall from "../../app/utils/DivLine/DivLineSmall";
import Hero from "./Hero/Hero";
import HomeInfo from "./HomeInfo/HomeInfo";

function Home() {
  return (
    <div>
      <Hero />
      <DivLineSmall />
      <HomeInfo />
      <DivLine logoSrc={"/Icon.png"} />
    </div>
  );
}

export default Home;
