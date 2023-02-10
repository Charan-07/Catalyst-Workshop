import "./styles.css";
import "./ResponsiveHero.css";
import bakery from "./bakery.png"

export const Hero = () => {
  return (
    <section className="HeroSec">
      <div className="contentWrapper">
        <div className="leftContent">
          <h2>Ready for Trying some baked item?</h2>

        </div>

        <div className="rigthContent">
          <div className="heroImg">
            <img src={bakery} className={"img1"}alt="draw with healthy calcule" />
          </div>
        </div>
      </div>
    </section>
  );
};
