import React from "react";
import { HeaderHome } from "../components/header/headerHome";
import { BodyHome } from "../components/body/bodyHome";
import { FooterHome } from "../components/footer/footerHome";
import { Stfc } from "../components/stfcSection/stfc";
import { StfcSubTitle } from "../components/stfcSection/stfcSubTitle";
import { Stfc2 } from "../components/stfcSection/stfc2";
import { Stfc3 } from "../components/stfcSection/stfc3";
import { Floatingbtn } from "../components/floatingbtn/floatingbtn";

export function Home() {
  const scrollToSection = () => {
    const stfcSection = document.getElementById("stfc-section");

    if (stfcSection) {
      stfcSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeaderHome scrollToSection={scrollToSection} />
      <BodyHome scrollToSection={scrollToSection} />
      <FooterHome />
      <Stfc />
      <StfcSubTitle />
      <Stfc2 />
      <Stfc3 />
      <Floatingbtn />
    </>
  );
}
