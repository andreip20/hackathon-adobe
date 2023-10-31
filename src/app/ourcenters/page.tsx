"use client";

import React from "react";

import Image from "next/image";

import dsac from "../../../resources/DSC_1280.jpg";

import anaSiCopiii from "../../../resources/Smiley-si-copiii.jpg";

import oManaDeAjutor from "../../../resources/prim-3.jpg";

import { useRouter } from "next/navigation";

let centers = [
  {
    image: <Image src={dsac} alt="dsac" width={300} height={300}></Image>,
    name: "Directia Generala de Asistenta Sociala si Protectia Copilului",
    link: "https://www.protectiacopilului6.ro",
  },
  {
    image: (
      <Image
        src={anaSiCopiii}
        alt="anaSiCopiii"
        width={300}
        height={300}
      ></Image>
    ),
    name: "Asociatia Ana si Copiii",
    link: "https://anasicopiii.ro",
  },

  {
    image: (
      <Image
        src={oManaDeAjutor}
        alt="oManaDeAjutor"
        width={300}
        height={300}
      ></Image>
    ),
    name: "O mana de ajutor",
    link: "https://omanadeajutor.eu",
  },
];

function OurCentersPage() {
  const router = useRouter();

  return (
    <div className="our-centers-containers">
      {centers.map((center, index) => {
        return (
          <div
            onClick={() => {
              router.push(center.link);
            }}
            className="our-centers-container"
            key={index}
          >
            <div className="our-centers-image">{center.image}</div>
            <div className="our-centers-text">
              <h3>{center.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OurCentersPage;
