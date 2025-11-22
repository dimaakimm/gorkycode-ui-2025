"use server";

import { getTranslations } from "next-intl/server";

import { ReviewPage } from "@/screens/ReviewPage";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("metadata.title.reviewPage"),
    description: t("metadata.description"),
  };
}

export default async function Review() {
  return <ReviewPage />;
}
