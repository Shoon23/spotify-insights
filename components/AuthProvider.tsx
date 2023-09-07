"use client";
import { useSearchParams } from "next/navigation";

import React, { useEffect } from "react";

import { useAuthStore } from "@/store/authStore";

const getToken = async (code: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/auth?code=" + code, {
      method: "GET",

      cache: "no-store",
    });

    const data = await res.json();
    useAuthStore.setState({
      expiresIn: data.expires_in,
      accessToken: data.access_token,
    });
    localStorage.setItem("refreshToken", data.refresh_token);
  } catch (error) {
    console.log(error);
  }
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const refreshToken = localStorage.getItem("refreshToken");
  console.log(refreshToken);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  console.log(refreshToken);

  useEffect(() => {
    if (!refreshToken || !useAuthStore.getState().accessToken) {
      getToken(code as string);
      // console.log(data);
    }
  }, []);

  return <>{children}</>;
};
