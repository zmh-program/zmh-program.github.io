"use client";

import React from "react";

type TypingProps = {
  content: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  typingSpeed?: number;
  typingDelayTick?: number;
  keyboardSeed?: number;
  keyboardStay?: number;
  keyboardKey?: string;
};

function getKeyboardSeed(seed: number): boolean {
  if (seed <= 0) {
    return false;
  }

  return Math.floor(Math.random() * seed) === 0;
}

export const Typing: React.FC<TypingProps> = ({
  content,
  className,
  style,
  id,
  typingDelayTick,
  typingSpeed,
  keyboardSeed,
  keyboardStay,
  keyboardKey,
}) => {
  const [cursor, setCursor] = React.useState(
    typingDelayTick ? -typingDelayTick : 0,
  );
  const [keyboard, setKeyboard] = React.useState<boolean>(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => {
        if (prev >= content.length + (keyboardStay ?? 0)) {
          setKeyboard(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
      setKeyboard(getKeyboardSeed(keyboardSeed ?? 0));
    }, typingSpeed ?? 100);

    return () => {
      clearInterval(interval);
      setKeyboard(false);
    };
  }, []);

  return (
    <p className={className} style={style} id={id}>
      {content.slice(0, cursor)}
      {keyboard && (keyboardKey ?? "|")}
    </p>
  );
};
