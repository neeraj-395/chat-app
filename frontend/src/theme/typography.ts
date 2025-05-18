import type { TypographyVariantsOptions } from "@mui/material";

const pxToRem = (value: number) => `${value / 16}rem`;

function responsiveFontSizes({ sm, md, lg }: { sm: number, md: number, lg: number }) {
    return {
      '@media (min-width:600px)': { fontSize: pxToRem(sm) },
      '@media (min-width:900px)': { fontSize: pxToRem(md) },
      '@media (min-width:1200px)': { fontSize: pxToRem(lg)},
    };
}

interface BuildHeadingProps {
    fontSize: number; 
    lineHeight: number; 
    sizes: { sm: number; md: number; lg: number };
}

const buildHeading = ({lineHeight, fontSize, sizes}: BuildHeadingProps) => ({
  fontWeight: 700,
  lineHeight,
  fontSize: pxToRem(fontSize),
  ...responsiveFontSizes(sizes),
});

const typography: TypographyVariantsOptions = {
  fontFamily: 'Manrope, Public Sans, sans-serif',
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  h1: buildHeading({fontSize: 40, lineHeight: 80 / 64, sizes: { sm: 52, md: 58, lg: 64 }}),
  h2: buildHeading({fontSize: 32, lineHeight: 64 / 48, sizes: { sm: 40, md: 44, lg: 48 }}),
  h3: buildHeading({fontSize: 24, lineHeight: 1.5,     sizes: { sm: 26, md: 30, lg: 32 }}),
  h4: buildHeading({fontSize: 20, lineHeight: 1.5,     sizes: { sm: 20, md: 24, lg: 24 }}),
  h5: buildHeading({fontSize: 18, lineHeight: 1.5,     sizes: { sm: 19, md: 20, lg: 20 }}),
  h6: buildHeading({fontSize: 17, lineHeight: 28 / 18, sizes: { sm: 18, md: 18, lg: 18 }}),

  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 700,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  }
};

export default typography;
