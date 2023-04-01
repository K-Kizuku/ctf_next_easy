"use client";

import { FC } from "react";
import type { CardProps } from "@/types/card";

export const Card: FC<CardProps> = ({ title, context, url }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{context}</div>
      <a href={url}>リンク</a>
    </div>
  );
};
