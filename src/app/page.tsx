import Image from "next/image";

import stockChildren from "../../resources/download.png";

import { getServerSession } from "next-auth";
import { authConfig } from "../../lib/auth";
import { redirect } from "next/navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { getCsrfToken } from "next-auth/react";
import CircleIcon from "@mui/icons-material/Circle";
import { Button, Card } from "@mui/material";
import Link from "next/link";

let initiative = [
  "Help people in need using the help of others",
  "Properly redistribute unwanted goods",
  "Enable change through the will of people",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center p-24">
      <div className="flex flex-row gap-20 items-center justify-center text-center">
        <Image
          className="rounded-lg"
          src={stockChildren}
          alt="stockChildren"
          width={700}
          height={400}
        ></Image>
        <p className="main-text">
          Save, share, connect. <br />
          Make children happy.
        </p>
      </div>

      <section className="our-initiative">
        <h2>Our initiative</h2>

        <div className="flex flex-row gap-10 items-center justify-center text-center">
          <div className="flex flex-row gap-10 items-center justify-center text-center">
            {initiative.map((item, index) => (
              <div key={index} className="card-initiative">
                <CircleIcon></CircleIcon>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/donations">
          <Button>MAKE A DONATION</Button>
        </Link>
      </section>
    </main>
  );
}
