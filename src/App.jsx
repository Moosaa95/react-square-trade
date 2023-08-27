import React, { useEffect } from "react";
import styles from "./style";
import { Farmers, Footer, Hero, Nabar, Services, Stats, Values } from "./components";
import Announcement from "./components/annoucement/Accouncement";
import Who from "./components/who-we-are/Who";
import Swipers from "./components/swiper/Swiper";
import { Crops } from "./constants";
import Contact from "./components/Contact";


const App = () => (

  
 <>
   <div className="fixed justify-center items-center top-0">
   <Announcement/>
   </div>
  <div className="bg-primary w-full overflow-hidden py-5">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <Nabar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>

    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Farmers />
        <Services />
        <Values />  
        <Who />
        <Swipers title="Commodities" slider_image={Crops} />
        <Contact />
        <Footer />
      </div>

    </div>
  </div>
 </>
);

export default App;
