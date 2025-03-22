import { useState } from "react";
import SpaceTechLayout from "./spaceTechLayout";
import spaceVihicle from "../space/SpaceAssets/technology/image-launch-vehicle-portrait.jpg";
import Spaceport from "../space/SpaceAssets/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "../space/SpaceAssets/technology/image-space-capsule-portrait.jpg";

import landscapeVehicle from "../space/SpaceAssets/technology/image-launch-vehicle-landscape.jpg";
import landscapePort from "../space/SpaceAssets/technology/image-spaceport-landscape.jpg";
import landscapeCapsule from "../space/SpaceAssets/technology/image-space-capsule-landscape.jpg";

export default function Technology() {
  const [destination, setDestination] = useState("1");

  function oneBtn() {
    return setDestination("1");
  }

  function twoBtn() {
    return setDestination("2");
  }

  function threeBtn() {
    return setDestination("3");
  }

  if (destination === "1") {
    return (
      <SpaceTechLayout
        imageSrc={spaceVihicle}
        imageSrc2={landscapeVehicle}
        techTitle={"Launch Vehicle"}
        btnSelected={destination}
        description={
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        }
        oneFunc={oneBtn}
        twoFunc={twoBtn}
        threeFunc={threeBtn}
      ></SpaceTechLayout>
    );
  } else if (destination === "2") {
    return (
      <SpaceTechLayout
        imageSrc={Spaceport}
        imageSrc2={landscapePort}
        techTitle={"Spaceport"}
        btnSelected={destination}
        description={
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        }
        oneFunc={oneBtn}
        twoFunc={twoBtn}
        threeFunc={threeBtn}
      ></SpaceTechLayout>
    );
  } else if (destination === "3") {
    return (
      <SpaceTechLayout
        imageSrc={spaceCapsule}
        imageSrc2={landscapeCapsule}
        techTitle={"Space Capsule"}
        btnSelected={destination}
        description={
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
        oneFunc={oneBtn}
        twoFunc={twoBtn}
        threeFunc={threeBtn}
      ></SpaceTechLayout>
    );
  }
}
