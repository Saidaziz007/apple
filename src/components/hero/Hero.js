import React from "react";
import Banner from "../banner/Banner.js";
import { PROPS, PROPS50 } from "../../static";
import Minibanner from "../minibanner/Minibanner.js";

function Hero() {
  let banner = PROPS?.map(({ id, title, info, bgimg, bg, color }) => (
    <Banner
      key={id}
      title={title}
      info={info}
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: bg,
      }}
      color={{ color: color }}
    />
  ));
  let minibanner = PROPS50?.map(({ id, title, info, bgimg, bg, color }) => (
    <Minibanner
      key={id}
      title={title}
      info={info}
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: bg,
      }}
      color={{ color: color }}
    />
  ));
  return (
    <>
      {banner}
      <div className="container-1500">
        <div className="minibannerni-otasi">{minibanner}</div>
      </div>
    </>
  );
}

export default Hero;
