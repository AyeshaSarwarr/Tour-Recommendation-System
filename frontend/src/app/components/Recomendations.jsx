import "./CSS/Recomendations.css"
import Link from "next/link";

const Recomendations = () => {
    return (
      <div className="explore-section">
        {/* Nature Section */}
        <div className="explore-box nature">
          <div className="overlay"></div>
          <div className="content">
            <p className="category">Promotion</p>
            <h2>Explore Nature</h2>
            <Link href="/packages" passHref>
              <button className="btn">View Packages</button>
            </Link>
          </div>
        </div>

        {/* Cities Section */}
        <div className="explore-box cities">
          <div className="overlay"></div>
          <div className="content">
            <p className="category">Promotion</p>
            <h2>Explore Cities</h2>
            <Link href="/packages" passHref>
              <button className="btn">View Packages</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Recomendations;
  