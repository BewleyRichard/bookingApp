
/*This component creates the footer section of the website. The links are just examples in this project. */

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
          <li className="fListItem">Places of interest</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">B&Bs</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Discover monthly stays </li>
          <li className="fListItem">Unpacked: Travel articles </li>
          <li className="fListItem">Travel communities </li>
          <li className="fListItem">Seasonal and holiday deals </li>
          <li className="fListItem">Traveller Review Awards </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car hire </li>
          <li className="fListItem">Flight Finder</li>
          <li className="fListItem">Restaurant reservations </li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Coronavirus (COVID 19) FAQS</li>
          <li className="fListItem">Curtomer Service help</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
          <li className="fListItem">Partner dispute</li>
          <li className="fListItem">How we work</li>
          <li className="fListItem">Privacy & Cookie Statement</li>
          <li className="fListItem">Manage Cookie settings</li>
          <li className="fListItem">MSA Statement</li>
          <li className="fListItem">Corporate contact</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 NOMADIA. All rights reserved.</div>
    </div>
  );
};

export default Footer;