import React from "react";
import {
  Link,
  Outlet,
} from "react-router-dom";
import NavBar from "./../components/NavBar";

// Outlet == index.js 에서 정의한 children 요소가 들어감
export default function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
