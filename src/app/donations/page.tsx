"use client";

import React from "react";
import Image from "next/image";
import loveGirl from "../../../resources/undraw_love_it_xkc2.svg";

import { Axios } from "axios";

import Link from "next/link";

import FavoriteIcon from "@mui/icons-material/Favorite";

import IconButton from "@mui/material/IconButton";

import { useSession } from "next-auth/react";

import { useState } from "react";

let donations = [
  {
    name: "Catalina Ionescu",
    clothing: "Shoes",
    size: "30",
    age: "10",
    centre: "Centrul X de ajutor",
  },
  {
    name: "Stefan Gabriel",
    clothing: "Winter blouse",
    size: "M",
    age: "16",
    centre: "Centrul X de ajutor",
  },
  {
    name: "Radu Popa",
    clothing: "Trousers",
    size: "M",
    age: "18",
    centre: "Centrul X de ajutor",
  },
  {
    name: "Stefania Iordan",
    clothing: "Spring Dress",
    size: "S",
    age: "12",
    centre: "Centrul X de ajutor",
  },
];

function DonationsPage() {
  const { data: session, status } = useSession();

  const [donationContainer, setDonationContainer] = useState(donations);

  if (status === "loading") {
    return (
      <div className="our-initiative>">
        <h2 className="acces-denied">Loading...</h2>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="our-initiative>">
        <h2 className="acces-denied">Please login first.</h2>
      </div>
    );
  }

  return (
    <div className="donations-container">
      <Image
        src={loveGirl}
        alt="svg-donations"
        width={200}
        height={200}
      ></Image>
      <div className="w-50 flex flex-row gap-10">
        {donations.map((donation, index) => {
          return (
            <div
              className="flex flex-row items-centre justify-between p-5 cards-container"
              key={index}
            >
              <div className="donation-card" key={index}>
                <p>Name: {donation.name}</p>
                <p>Clothing: {donation.clothing}</p>
                <p>Size: {donation.size}</p>
                <p>Age: {donation.age}</p>
                <p>Centre: {donation.centre}</p>

                <IconButton>
                  <Link
                    href={{
                      pathname: "/makedonation",
                      query: {
                        name: donation.name,
                        clothing: donation.clothing,
                        size: donation.size,
                        age: donation.age,
                        centre: donation.centre,
                      },
                    }}
                  >
                    <FavoriteIcon color="primary"></FavoriteIcon>
                  </Link>
                </IconButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DonationsPage;
