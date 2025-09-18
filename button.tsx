import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ variant = 'primary', theme }) => `
    background-color: ${theme.colors[variant][500]};
    color: ${theme.colors.neutral[0]};
    &:hover { background-color: ${theme.colors[variant][700]}; }
  `}
`;
