import styles from "../style";
import GetStarted from "./GetStarted";
import Cycle from "./cycle/Cycle";
import moringa from "../assets/img/square-trade-moringa.jpg"
import Tin from "../assets/img/Square-trade-tin.jpg"
import TigerNuts from "../assets/img/square-trade-tiger-nuts.jpeg"
import StoneFlower from "../assets/img/square-trade-stone-flower.jpg"
import Habiscus from "../assets/img/square-trade-dried-habiscus.jpg"

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Welcome to <br className="sm:block hidden" />{" "}
            <span className="text-6xl font-bold bg-gradient-to-r from-black to-white bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, gray, white)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent"
            }}
            >Pro Trade</span>{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1> */}
        <h2 className="font-poppins font-semibold ss:text-[40px] text-[34px] text-white ss:leading-[60.8px] leading-[55px]">Sourcing Hub for Commodities</h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We facilitate the dependable sourcing of agricultural and mineral resource commodities for interested entities.
        </p>
      </div>

      <div
        className={`flex-1 flex md:my-0 my-10 relative `}
      >
        <Cycle image1={moringa}  image2={Tin} image3={TigerNuts} image4={StoneFlower} image5={Habiscus} />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      
    </section>
  );
};

export default Hero;
