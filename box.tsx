import styled from 'styled-components';

interface BoxProps {
  p?: keyof typeof import('../theme/tokens').spacing;
  m?: keyof typeof import('../theme/tokens').spacing;
  bg?: string;
  color?: string;
}

export const Box = styled.div<BoxProps>`
  padding: ${({ p, theme }) => (p ? theme.spacing[p] : '0')};
  margin: ${({ m, theme }) => (m ? theme.spacing[m] : '0')};
  background-color: ${({ bg }) => bg || 'transparent'};
  color: ${({ color }) => color || 'inherit'};
`;
