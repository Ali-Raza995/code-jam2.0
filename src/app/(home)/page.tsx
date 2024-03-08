"use client";

import SkillsSelect from "@/components/react-select";
import { getUserData } from "@/store/slices/user-slice";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import Header from "@/components/common/header";
import HeroSection from "@/components/home/hero-section";
import Image from "next/image";

export default function Home() {
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch(getUserData({ name: "Ali Raza" }));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleDispatch}>Button dispatch</button>
      <SkillsSelect />
      <Header />
      <HeroSection />
    </main>
  );
}
