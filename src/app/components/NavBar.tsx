"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import Image from "next/image";

import { loginIsRequiredClient } from "../../../lib/auth";
import { getSession } from "next-auth/react";
import { useSession, signIn, signOut } from "next-auth/react";

function handleLogOut() {
  signOut();
}

function handleLogIn() {
  signIn();
}

function NavBar() {
  const { data: session } = useSession();
  return (
    <>
      <div className="navbar">
        <div className="flex  flex-row gap-10 items-center justify-center text-center">
          <h1>ResourceWise</h1>
          <div className="flex gap-5">
            <Link href="/">
              <Button size="small" variant="outlined" color="primary">
                HOME
              </Button>
            </Link>
            <Link href="/tokens">
              <Button size="small" variant="outlined" color="primary">
                TOKENS
              </Button>
            </Link>

            <Link href="/donations">
              <Button size="small" variant="outlined" color="primary">
                DONATIONS
              </Button>
            </Link>

            <Link href="/ourcenters">
              <Button size="small" variant="outlined" color="primary">
                OUR CENTERS
              </Button>
            </Link>
          </div>
        </div>
        {session ? (
          <Button
            onClick={handleLogOut}
            size="small"
            variant="outlined"
            color="primary"
            startIcon={<LogoutIcon />}
          >
            Log out {session.user?.name}
          </Button>
        ) : (
          <Button
            onClick={handleLogIn}
            size="small"
            variant="outlined"
            color="primary"
            startIcon={<LogoutIcon />}
          >
            Log In
          </Button>
        )}
      </div>
    </>
  );
}
export default NavBar;
