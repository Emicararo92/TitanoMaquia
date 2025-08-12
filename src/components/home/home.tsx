import Banner from "@/utils/Banner/Banner";
import DivLine from "../../utils/DivLine/DivLineBig";
import DivLineSmall from "../../utils/DivLine/DivLineSmall";
import Hero from "./Hero/Hero";
import HomeInfo from "./HomeInfo/HomeInfo";
import InfPat from "../InfPat/HomePat/InfPat";
import ModelGallery3D from "../InfPat/Skins/ModelGallery3D/ModelGallery3D";

function Home() {
  return (
    <div>
      <Hero />
      <DivLineSmall />
      <HomeInfo />
      <Banner
        backgroundImage={
          "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/BannerB_hebblh.jpg"
        }
        slogan={"Infinite Pathways"}
      />
      <DivLineSmall />
      <InfPat />
      <DivLineSmall />
      <ModelGallery3D />
      <DivLineSmall />
      <Banner
        backgroundImage={
          "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/BannerA_rxexph.jpg"
        }
        slogan={"Quienes Somos"}
      />
      <DivLine logoSrc={"/Icon.png"} />
      <DivLineSmall />
    </div>
  );
}

export default Home;
