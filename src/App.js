import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ServicesOne from "./components/ServicesOne";
import ServicesHeader from "./components/ServicesHeader";
import ContactForm from "./components/ContactForm";
import GoogleMaps from "./components/GoogleMaps";
import { Divider } from "@material-ui/core";
import LocationHeader from "./components/LocationHeader";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header>
          <NavBar />
          <Hero />
        </header>

        <body>
          <ServicesHeader />
          <ServicesOne />
          <ContactForm />
          <Divider variant="inset" />
          <LocationHeader />
          <GoogleMaps />
          <footer
            style={{
              backgroundColor: "black",
              color: "white",
              fontFamily: "Nunito",
              height: "3vh",
              fontSize: "20px",
            }}
          >
            Site made by @YuleeTea
          </footer>
        </body>
      </React.Fragment>
    </div>
  );
}

export default App;
