import Carousel from "./Carousel";
import "./index.css";

function Hero() {
  return (
    <div className="hero mt-20 mb-20 bg-orange-300 ">
      <div className="pt-12 pb-12 w-2/3  float-left">
        <img
          className="max-h-full max-w-full rounded-md"
          src="https://cocco.qodeinteractive.com/wp-content/uploads/2018/06/h2-img-3.jpg"
          alt=""
        />
      </div>
      {/* 
        <div className="rightPannel pt-12 w-1/3  float-left flex flex-col">
            <div className="w-full  h-2/5 rounded-md pl-2">
            <img className="max-h-full max-w-full rounded-md" src="https://cocco.qodeinteractive.com/wp-content/uploads/2018/06/h2-img-6.jpg" alt=""/>
                 </div>
            <div className="w-full  h-2/5 rounded-md pl-2 pt-2 ">
            <img className="max-h-full max-w-full rounded-md" src="https://cocco.qodeinteractive.com/wp-content/uploads/2018/06/h2-img-4.jpg" alt=""/>
                 </div>
        </div> */}
    </div>
  );
}

export default Hero;
