"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-xl font-bold"> redirecting to login .....</p>
      <p>reload page if not redirected after 10 sec</p>
    </main>
  );
}
