"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=1185&aff_id=44723&source=Sephora" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/4dcoZkP.png" 
        alt="Marshalls Logo" 
        className="h-8 sm:h-10 w-auto object-contain transition-all duration-700 hover:brightness-110"
      />
    </div>
  );
};

export default MainLogo;
