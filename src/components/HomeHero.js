import { HeroTitle } from "../styles/Title";
import { HeroImg } from "../styles/Img";
import { Hero } from "../styles/Content";

export default function HomeHero() {
  return (
    <Hero>
      <HeroTitle>Check out our special brand G-SHOCK</HeroTitle>
      <HeroImg src="./assets/gshock-watch.png" alt="gshock watch" />
    </Hero>
  );
}
