import { Link } from "react-router-dom";

import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <div className="home content">
      <h1 className="content-title">Casio Watches</h1>
      <HomeHero />
      <button>
        <Link to="/shop">Shop Now</Link>
      </button>
    </div>
  );
}
