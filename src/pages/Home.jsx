import hero from "../assets/hero.png";

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>

      <img src={hero} alt="Coding" className="home-image" />

      <p>Welcome to my React Router DOM project.</p>

      <p>
        This project demonstrates navigation between Home, Dashboard, Login and
        Signup pages using React Router.
      </p>
    </div>
  );
}

export default Home;