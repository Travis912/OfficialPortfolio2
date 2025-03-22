import SpaceDestLayout from "./spaceDestLayout";
import { useState } from "react";

// image imports
import moonPngImg from "../space/SpaceAssets/destination/image-moon.png";
import marsPngImg from "../space/SpaceAssets/destination/image-mars.png";
import europaPngImg from "../space/SpaceAssets/destination/image-europa.png";
import titanPngImg from "../space/SpaceAssets/destination/image-titan.png";

export default function SpaceDestinations() {
  const [destination, setDestination] = useState("Moon");

  function moonBtn() {
    return setDestination("Moon");
  }

  function marsBtn() {
    return setDestination("Mars");
  }

  function europaBtn() {
    return setDestination("Europa");
  }

  function titanBtn() {
    return setDestination("Titan");
  }

  if (destination === "Moon") {
    return (
      <SpaceDestLayout
        moonFunc={moonBtn}
        marsFunc={marsBtn}
        europaFunc={europaBtn}
        titanFunc={titanBtn}
        planet={"MOON"}
        description={
          "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        }
        distance={"384,400"}
        travelTime={"3 DAYS"}
        btnSelected={destination}
        imagePngSrc={moonPngImg}
      ></SpaceDestLayout>
    );
  } else if (destination === "Mars") {
    return (
      <SpaceDestLayout
        moonFunc={moonBtn}
        marsFunc={marsBtn}
        europaFunc={europaBtn}
        titanFunc={titanBtn}
        planet={"MARS"}
        description={
          "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!"
        }
        distance={"225 MIL."}
        travelTime={"9 MONTHS"}
        btnSelected={destination}
        imagePngSrc={marsPngImg}
      ></SpaceDestLayout>
    );
  } else if (destination === "Europa") {
    return (
      <SpaceDestLayout
        moonFunc={moonBtn}
        marsFunc={marsBtn}
        europaFunc={europaBtn}
        titanFunc={titanBtn}
        planet={"EUROPA"}
        description={
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        }
        distance={"628 MIL."}
        travelTime={"3 YEARS"}
        btnSelected={destination}
        imagePngSrc={europaPngImg}
      ></SpaceDestLayout>
    );
  } else if (destination === "Titan") {
    return (
      <SpaceDestLayout
        moonFunc={moonBtn}
        marsFunc={marsBtn}
        europaFunc={europaBtn}
        titanFunc={titanBtn}
        planet={"TITAN"}
        description={
          "The only moon known to have a dense atmosphere other than Earth. Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        }
        distance={"1.6 BIL."}
        travelTime={"7 YEARS"}
        btnSelected={destination}
        imagePngSrc={titanPngImg}
      ></SpaceDestLayout>
    );
  }
}
