"use client";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  useLayoutEffect(() => {
    const getToken = async (code: string) => {
      try {
        const res = await fetch("http://localhost:3000/api/auth?code=" + code, {
          method: "GET",

          cache: "no-store",
        });

        const data = await res.json();
        //   useAuthStore.setState({
        //     expiresIn: data.expires_in,
        //     accessToken: data.access_token,
        //   });
        //   localStorage.setItem("refreshToken", data.refresh_token);
        console.log(data);
        router.push(`/top-artists?access_token${data.access_token}`);
      } catch (error) {
        console.log(error);
      }
    };
    // getToken(searchParams.get("code") as string);

    router.push(`/top-artists`);
  }, []);
  return null;
}
