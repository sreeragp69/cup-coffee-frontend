import HeroImg from "../../assets/coffe_cup.png";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px]  bg-[#F2F1EF] flex  justify-center items-center text-[#414040]">
        <div className="container pb-8 sm:pb-0">
          <main className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content section */}
            <div className="order-2 sm:order-1 flex flex-col gap-7 justify-center">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-4xl leading-[67px] sm:text-5xl lg:text-6xl playfair-display-cursive max-w-[38rem]"
              >
                A good
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="text-secondary "
                >
                  {" "}
                  Coffee
                </span>{" "}
                makes a
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="text-secondary  "
                >
                  {" "}
                  great{" "}
                </span>
                day
              </h1>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="300"
                className="text-gray-500 max-w-[20rem]"
              >
                Coffee is a brewed drink prepared from roasted coffee beans,
                which are the seeds plant.
              </p>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className=" bg-[#E4A361] rounded-ful py-2 px-4 text-white hover:scale-105 duration-200 ">
                  Coffee and Code
                </button>
              </div>
            </div>

            {/* Image section */}
            <div
              data-aos="zoom-in"
              className="min-h-[450px] flex  justify-center items-center order-1 sm:order-2 relative"
            >
              <img
                src={HeroImg}
                alt="Hero Image"
                className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto rounded-full flex  spin"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary   absolute top-10 left-10 py-2 px-4 text-white  "
              >
                <h1>Hey there</h1>
              </div>
              <div
                data-aos="fade-right"
                className="bg-gradient-to-r from-primary to-secondary  absolute bottom-10 right-10 py-2 px-4 text-white  "
              >
                <h1>Best Coffee</h1>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Hero;
