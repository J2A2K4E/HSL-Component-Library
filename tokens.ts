// hue values
const HUES = {
  primary: 220,
  secondary: 45,
  success: 140,
  warning: 35,
  danger: 355,
  neutral: 200,
};

// generate shades: light to dark
function hsl(h: number, s: string, l: number) {
  return `hsl(${h}, ${s}, ${l}%)`;
}

export const colors = {
  primary: {
    50:  hsl(HUES.primary, 90, 96),
    100: hsl(HUES.primary, 85, 90),
    200: hsl(HUES.primary, 80, 80),
    500: hsl(HUES.primary, 70, 50),
    700: hsl(HUES.primary, 75, 30),
  },
  secondary: {
    50:  hsl(HUES.secondary, 90, 96),
    100: hsl(HUES.secondary, 85, 90),
    200: hsl(HUES.secondary, 80, 80),
    500: hsl(HUES.secondary, 70, 50),
    700: hsl(HUES.secondary, 75, 30),
  },
  success: { /* same pattern */ },
  warning: { /* same pattern */ },
  danger:  { /* same pattern */ },
  neutral: {
    0:   hsl(HUES.neutral, 0, 100),
    100: hsl(HUES.neutral, 5, 95),
    200: hsl(HUES.neutral, 10, 85),
    500: hsl(HUES.neutral, 15, 50),
    800: hsl(HUES.neutral, 20, 25),
    900: hsl(HUES.neutral, 25, 15),
  },
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '32px',
};

export const typography = {
  fontFamily: `'Inter', sans-serif`,
  fontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
};
