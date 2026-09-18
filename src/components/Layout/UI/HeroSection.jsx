import { FaLongArrowAltDown } from "react-icons/fa";

export const HeroSection = () => {
      return (
            <main className="hero-section main">
                  <div className="container grid grid-two-cols">
                        <div className="hero-content">
                              <h1 className="heading-xl">Explore the workld, One country at a time</h1>
                              <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                                    voluptatibus, doloremque, voluptas, quisquam, quos, aspernatur
                                    doloribus, voluptatem, quia, dolores, quod, asperiores, repellat
                                    quibusdam, quidem, voluptatum, dolorem.
                              </p>
                              <button className="btn btn-darken btn-inline bg-white-box">
                                    Start Exploring <FaLongArrowAltDown />
                              </button>
                        </div>
                        <div className="hero-image">
                              <img src="/images/world.jpg" alt="World Map" className="banner-image" />
                        </div>
                  </div>
            </main>
      );
};