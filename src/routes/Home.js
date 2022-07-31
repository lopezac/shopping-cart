import HomeHero from "../components/HomeHero";
import { StyledLink, Button } from "../styles/Button";
import { ContentTitle } from "../styles/Title";
import { Content } from "../styles/Content";

export default function Home() {
  return (
    <Content>
      <ContentTitle>Casio Watches</ContentTitle>
      <HomeHero />
      <Button>
        <StyledLink to="/shop">Shop Now</StyledLink>
      </Button>
    </Content>
  );
}
