import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main className="mt-[100px]">
        <Outlet />
      </main>
    </div>
  );
}
