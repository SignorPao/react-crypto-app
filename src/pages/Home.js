import React from "react";
import { Outlet } from "react-router-dom";

// import components
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

// import context api
import { CryptoProvider } from "../context/CryptoContext";
import { StorageProvider } from "../context/StorageContext";
import { TrendingProvider } from "../context/TrendingContext";

const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <main className="h-full w-full flex flex-col items-center relative text-white font-nunito">
            <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
            <div className="w-[80%] pt-10 lg:pt-14 flex flex-col gap-y-4 lg:gap-y-0 items-center lg:flex-row lg:justify-between">
              <Logo />
              <Navigation />
            </div>
            <Outlet />
          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default Home;
