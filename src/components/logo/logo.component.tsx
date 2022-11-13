import Image from "next/image";
import { useState } from "react";
import darkModeLogo from "/public/graphics/dark-logo.png";
import lightModeLogo from "/public/graphics/light-logo.png";
export const Logo: React.FC = () => {
  const [theme, setTheme] = useState("");
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const newColorScheme = event.matches ? "dark" : "light";
      setTheme(newColorScheme);
    });
  return (
    <Image
      src={theme === "dark" ? darkModeLogo : lightModeLogo}
      alt=""
      width={100}
      height={100}
    />
  );
};
