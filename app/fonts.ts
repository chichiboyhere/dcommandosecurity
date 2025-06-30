// app/fonts.ts (or similar)
import { localFont } from "@next/font/local";

export const myFont = localFont({
  src: "./public/fonts/fonnts.com-Halogen_Flare_Regular.otf", // Replace with your font file
  variable: "--font-my-font", // CSS variable name
});
