import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Casio Watches</h1>

      <div>
        <h2>Check out our special brand G-SHOCK</h2>
        <img src="./assets/gshock-watch.png" alt="gshock watch" />
      </div>

      <Link to="/shop">Shop Now</Link>
    </div>
  );
}
