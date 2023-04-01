"use client";
import type { CardProps } from "@/types/card";
import { useState, FC } from "react";
type Props = {
  hander: (e: CardProps) => void;
};
export const Modal: FC<Props> = ({ hander }) => {
  const [input, setInput] = useState<CardProps>({
    title: "",
    url: "",
    context: "",
  });
  return (
    <div>
      <label>title</label>
      <input
        onChange={(e) =>
          setInput((v) => {
            return {
              ...v,
              title: e.target.value,
            };
          })
        }
      />
      <label>説明</label>
      <input
        onChange={(e) =>
          setInput((v) => {
            return {
              ...v,
              context: e.target.value,
            };
          })
        }
      />
      <label>URL</label>
      <input
        onChange={(e) =>
          setInput((v) => {
            return {
              ...v,
              url: e.target.value,
            };
          })
        }
      />

      <button onClick={() => hander(input)}>送信</button>
    </div>
  );
};
