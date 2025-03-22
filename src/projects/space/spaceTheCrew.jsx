import CrewLayout from "./spaceCrewLayout";
import { useState } from "react";

// image imports
import douglasPngImg from "../space/SpaceAssets/crew/image-douglas-hurley.png";
import markPngImg from "../space/SpaceAssets/crew/image-mark-shuttleworth.png";
import victorPngImg from "../space/SpaceAssets/crew/image-victor-glover.png";
import anoPngImg from "../space/SpaceAssets/crew/image-anousheh-ansari.png";

export default function TheCrew() {
  const [crewMember, setCrewMember] = useState("Douglas");

  function douglasBtn() {
    return setCrewMember("Douglas");
  }

  function markBtn() {
    return setCrewMember("Mark");
  }

  function victorBtn() {
    return setCrewMember("Victor");
  }

  function anoBtn() {
    return setCrewMember("Ano");
  }

  if (crewMember === "Douglas") {
    return (
      <CrewLayout
        pngSrc={douglasPngImg}
        crewTitle="commander"
        crewName="douglas hurley"
        btnSelected={crewMember}
        description="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        douglasFunc={douglasBtn}
        markFunc={markBtn}
        victorFunc={victorBtn}
        anoFunc={anoBtn}
      ></CrewLayout>
    );
  } else if (crewMember === "Mark") {
    return (
      <CrewLayout
        pngSrc={markPngImg}
        crewTitle="mission specialist"
        crewName="mark shuttleworth"
        btnSelected={crewMember}
        description="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        douglasFunc={douglasBtn}
        markFunc={markBtn}
        victorFunc={victorBtn}
        anoFunc={anoBtn}
      ></CrewLayout>
    );
  } else if (crewMember === "Victor") {
    return (
      <CrewLayout
        pngSrc={victorPngImg}
        crewTitle="pilot"
        crewName="victor glover"
        btnSelected={crewMember}
        description="Pilot on the first operational flight of the SpaceX Crew Dragon to the international Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer."
        douglasFunc={douglasBtn}
        markFunc={markBtn}
        victorFunc={victorBtn}
        anoFunc={anoBtn}
      ></CrewLayout>
    );
  } else if (crewMember === "Ano") {
    return (
      <CrewLayout
        pngSrc={anoPngImg}
        crewTitle="flight engineer"
        crewName="anousheh ansari"
        btnSelected={crewMember}
        description="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded women to fly the ISS, and the first Iranian in space."
        douglasFunc={douglasBtn}
        markFunc={markBtn}
        victorFunc={victorBtn}
        anoFunc={anoBtn}
      ></CrewLayout>
    );
  }
}
