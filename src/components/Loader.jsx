import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 z-50">
        <div className="w-[80px] h-[80px] border-[6px] border-t-transparent border-white rounded-full animate-spin" />
      </div>
    </Html>
  );
};

export default Loader;
