// emotion.d.ts
import "@emotion/react";
import { UITheme } from "./src/types/theme";

declare module "@emotion/react" {
  export interface Theme extends UITheme {}
}
