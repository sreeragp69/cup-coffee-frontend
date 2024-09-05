import React from "react";

import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  const backgroundStyle = {
    backgroundColor: "#F5F5F5",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div style={backgroundStyle} className="py-10 ">
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div data-aos="fade-up" className="space-y-6 max-w-xl mx-auto text-center ">
              {/* Text Content  */}
              <h1 className="text-2xl text-center md:text-left sm:text-4xl font-semibold  text-black  pl-3">
                 <span className="text-secondary playfair-display-cursive">Cup Coffe</span> available
                for <span className="text-secondary">Android</span> and{" "} IOS
               
              </h1>
            </div>
            <div>
              
              {/* Logo Section  */}
              <div className="flex  justify-center md:justify-start items-center" data-aos="fade-up">
                <a href="">
                  <img
                    src={AppStoreImg}
                    alt="App Store "
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="">
                  <img
                    src={PlayStoreImg}
                    alt="App Store "
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
