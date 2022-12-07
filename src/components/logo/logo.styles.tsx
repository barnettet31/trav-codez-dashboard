import { cva, type VariantProps } from "class-variance-authority";
export type SVGLogoVariantProps = VariantProps<typeof svgLogoVariants>;
export const svgLogoVariants = cva(
  ["mx-auto", "text-gray-600", "dark:text-gray-300"],
  {
    variants: {
      intent: {
        large: ["h-72", "w-72"],
        medium: ["h-60", "w-60"],
        small: ["h-40", "w-40"],
        xsmall: ["h-24", "w-24"],
      },
    },
  }
);
