"use server";

import { getTranslations } from "next-intl/server";

import DocsPage from "@/screens/DocsPage/ui/DocsPage";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("metadata.title.reviewPage"),
    description: t("metadata.description"),
  };
}

export default async function Review() {
  return <DocsPage />;
}
