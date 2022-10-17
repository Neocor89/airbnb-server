import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="md:mx-auto sm:flex flex-col ml-20 space-y-4 text-xs gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>Hox AIrbnb</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="md:mx-auto sm:flex flex-col ml-20  space-y-4 text-xs gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is a test website</p>
        <p>It's a pretty educational website clone</p>
        <p>Referrals accepted</p>
        <p>Bendevweb</p>
      </div>

      <div className="md:mx-auto sm:flex flex-col ml-20  space-y-4 text-xs gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Ben devweb</p>
        <p>Presents</p>
        <p>Server Rendering Website</p>
        <p>Hundreds of Visits</p>
        <p href="https://Neocor89.github.com">Vist me</p>
      </div>

      <div className="md:mx-auto sm:flex flex-col ml-20  space-y-4 text-xs gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help center</p>
        <p>Trust & Safty</p>
        <p>Say hi Airbnb</p>
        <p>Easter Egss</p>
        <p>Support center</p>
      </div>
    </div>
  );
};

export default Footer;
