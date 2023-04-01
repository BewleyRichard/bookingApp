/* Composes a home page for a website that displays different types of properties 
and a list of featured properties. */

import Navbar from "../../components/navbar/Navbar.js";
import Header from "../../components/header/Header.js";
import Featured from "../../components/featured/Featured.js";

import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList.js";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.js";
import MailList from "../../components/mailList/MailList.js";
import Footer from "../../components/footer/Footer.js";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>

    );
};

export default Home;