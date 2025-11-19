"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/shared/components";
import { routes } from "@/shared/config";

import { SHeader, SHeaderActions, SHeaderMainContent } from "./header.styles";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <SHeader>
      <SHeaderMainContent>
        <Link href={routes.HOME_PAGE}>a</Link>
        <SHeaderActions>
          <Button type="text">a</Button>
          <Button type="text">a</Button>
        </SHeaderActions>
      </SHeaderMainContent>
      <div>
        <Button>a</Button>
      </div>
    </SHeader>
  );
};
