import { useEffect, useState, useRef } from "react";

export default function TextCounter({
  text,
  trigger = true,
  delay = 0,
  duration = 1000,
  characters = "0123456789",
  className = "",
  as: Component = "span",
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const animFrameRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!trigger) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }

    let startTime = null;

    const getRandomChar = () =>
      characters[Math.floor(Math.random() * characters.length)];

    timeoutRef.current = setTimeout(() => {
      let lastScrambleTick = 0;

      const initialScramble = text
        .split("")
        .map((char) => (char === " " || char === "\n" ? char : getRandomChar()))
        .join("");
      setDisplayText(initialScramble);

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const charsRevealed = Math.floor(progress * text.length);

        if (timestamp - lastScrambleTick > 35 || progress >= 1) {
          lastScrambleTick = timestamp;

          let current = "";
          for (let i = 0; i < text.length; i++) {
            if (text[i] === " " || text[i] === "\n") {
              current += text[i];
            } else if (i < charsRevealed) {
              current += text[i];
            } else {
              current += getRandomChar();
            }
          }
          setDisplayText(current);
        }

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayText(text);
        }
      };

      animFrameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [trigger, text, delay, duration, characters]);

  return (
    <Component className={className} aria-label={text} {...props}>
      {displayText}
    </Component>
  );
}
