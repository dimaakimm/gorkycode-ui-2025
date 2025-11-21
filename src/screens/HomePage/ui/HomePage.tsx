"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/components";
import { routes } from "@/shared/config";

import { SHomePage } from "./homePage.styles";

export const HomePage = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push(routes.DOCS_PAGE);
  };

  return (
    <SHomePage>
      <Button onClick={handleBackButtonClick}>Перейти к документам</Button>
    </SHomePage>
  );
};
