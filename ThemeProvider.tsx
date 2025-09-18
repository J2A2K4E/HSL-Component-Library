import React, { ReactNode } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import * as tokens from './tokens';

interface Props { children: ReactNode; }

export const ThemeProvider = ({ children }: Props) => (
  <SCThemeProvider theme={tokens}>
    {children}
  </SCThemeProvider>
);
