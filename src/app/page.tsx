"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Card } from "@/components/Card";
import { useState } from "react";
import { CardProps } from "@/types/card";
import { Modal } from "@/components/Modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [props, setProps] = useState<CardProps[]>([]);
  const inputHander = (value: CardProps) => {
    setProps((e) => [...e, value]);
  };
  return (
    <>
      <h1>リンク集</h1>
      <Modal hander={inputHander} />
      {props.map((e, i) => {
        return <Card key={i} {...e} />;
      })}
    </>
  );
}
