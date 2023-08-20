import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

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
            <span className="text-gradient">Square Trade</span>{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Are you a passionate farmer or skilled miner looking to trade
          exceptional products? Maybe you're a savvy entrepreneur seeking a
          cutting-edge platform for business operations. Look no further, your
          search ends here with us.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <img
            src="https://square-olive.vercel.app/assets/img/square-trade-Sisal-Agave-Plant-fibre.jpg"
            alt="billing"
            className="w-full h-full relative z-[5]"
          />
          <img
            src="https://square-olive.vercel.app/assets/img/square-trade-sesame.jpg"
            alt="flower"
            className="w-full h-full relative z-[5]"
          />
          <img
            src="https://square-olive.vercel.app/assets/img/squate-trade-dried-mangos.webp"
            alt="billing"
            className="w-full h-full relative z-[5]"
          />
          <img
            src="https://square-olive.vercel.app/assets/img/square-trade-Soya-beans.jpg"
            alt="billing"
            className="w-full h-full relative z-[5]"
          />
          <img
            src="https://square-olive.vercel.app/assets/img/square-trade-Zircon-Sand.webp"
            alt="billing"
            className="w-full h-full relative z-[5]"
          />
          <img
            src="https://square-olive.vercel.app/assets/img/square-trade-moringa.jpg"
            alt="billing"
            className="w-full h-full relative z-[5]"
          />
          {/* Add more images here */}
        </div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
