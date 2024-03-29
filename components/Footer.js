import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> ABOUT </h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> COMMUNITY </h5>
        <p>Accessibility</p>
        <p>Disaster relief housing</p>
        <p>Support refugees</p>
        <p>Combating discrimination</p>
      </div>


      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> HOST </h5>
        <p>Become a host</p>
        <p>Perks</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> SUPPORT </h5>
        <p>Help Center</p>
        <p>Safty information</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 response</p>
        <p>Report a neighborhood concern</p>
      </div>

      <div></div>
    </div>
  );
}

export default Footer;
