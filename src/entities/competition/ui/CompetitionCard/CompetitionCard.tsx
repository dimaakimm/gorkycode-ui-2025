"use client";

import Link from "next/link";
import { FC } from "react";

import { Tag } from "@/shared/components";

import {
  SCardImage,
  SCompetitionCard,
  SGeneral,
  SGeneralInfo,
  SGeneralText,
  SMainContent,
  SMainInfo,
  SParticipantsNumber,
  SSubTitle,
  SSubtitleText,
  STagsSection,
  STitle,
} from "./competitionCard.styles";
import { IGetCreateCompetition } from "../../api/createCompetition";

export const CompetitionCard: FC<IGetCreateCompetition> = ({
  name,
  id,
  mainImageUrl,
}) => {
  const cardHref = `/competition/${id}`;

  return (
    <Link href={cardHref} prefetch={false}>
      <SCompetitionCard>
        <SCardImage $mainImageUrl={mainImageUrl}>
          <Tag>Кол-во участников: ...</Tag>
        </SCardImage>
        <SMainContent>
          <SMainInfo>
            <STitle>{name}</STitle>
            <SSubTitle>
              <SSubtitleText>Регистрация</SSubtitleText>
            </SSubTitle>
          </SMainInfo>
          <SGeneralInfo>
            <SGeneral>
              <SGeneralText>Даты проведения: </SGeneralText>
            </SGeneral>
            <SGeneralText>Организатор: ...</SGeneralText>
          </SGeneralInfo>
        </SMainContent>
      </SCompetitionCard>
    </Link>
  );
};
