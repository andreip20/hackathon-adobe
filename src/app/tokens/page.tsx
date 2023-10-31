"use client";

import React from "react";
import Image from "next/image";

import { toast, Toaster } from "react-hot-toast";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import teddyBear from "../../../resources/teddy_bear.jpg";

import carFigurine from "../../../resources/cars_figurine.jpg";

import doll from "../../../resources/my-best-friend-doll-willow-rag-doll.jpg";

import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";

import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import { loginIsRequiredClient } from "../../../lib/auth";

import axios from "axios";

let tokens = [
  {
    imageUrl: (
      <Image src={teddyBear} alt="teddyBear" width={100} height={100} />
    ),
    text: "Teddy Bear",
    nrOfTokens: 100,
  },

  {
    imageUrl: (
      <Image src={carFigurine} alt="carFigurine" width={100} height={100} />
    ),
    text: "Cars Figurine",
    nrOfTokens: 20,
  },

  {
    imageUrl: <Image src={doll} alt="doll" width={100} height={100} />,
    text: "Doll",
    nrOfTokens: 30,
  },
];

function handleBuyItem(key: Number) {}

function TokensPage() {
  const [retrievedTokens, setRetrievedTokens] = useState(50);

  const id = 1;

  useEffect(() => {
    async function fetchTokens() {
      try {
        const response = await axios.get(`/api/tokens?id=${id}`);
        if (response.data && response.data.nrOfTokens) {
          setRetrievedTokens(response.data.nrOfTokens);
        }
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    }

    fetchTokens();
  }, [id]);
  const { data: session, status } = useSession();

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
    <div className="token-container">
      <div>
        <Toaster />
      </div>
      <h3>Your tokens: {retrievedTokens}</h3>
      <h2>Available Items</h2>
      <div className="flex gap-40 w-full">
        {tokens.map((token, index) => {
          return (
            <div className="token-card" key={index}>
              <div className="token-image">{token.imageUrl}</div>
              <div className="token-text">
                <h3>{token.text}</h3>
                <h4>{token.nrOfTokens} Tokens</h4>
              </div>
              <IconButton
                onClick={() => {
                  const tobeBought = tokens.find((token, idx) => index === idx);
                  console.log(tobeBought);
                  if (tobeBought && retrievedTokens) {
                    if (retrievedTokens < tobeBought.nrOfTokens) {
                      toast.error("Not enough tokens!");
                    } else {
                      // Move this block within the else part, also removed the redundant error toast
                      toast.success("Your item has been bought successfully");
                      setRetrievedTokens(
                        retrievedTokens - tobeBought.nrOfTokens
                      );
                    }
                  } else {
                    toast.error("Error");
                  }
                }}
              >
                {" "}
                <ShoppingCartIcon></ShoppingCartIcon>{" "}
              </IconButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TokensPage;
