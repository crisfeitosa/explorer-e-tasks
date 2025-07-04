import styled, { css } from 'styled-components';

export const Container = styled.a`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  height: 4.5rem;
  height: 4.5rem;
  
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${({ $done }) => $done && css`
    opacity: 0.5;
  `};

  > svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    ${({ $done }) => $done && css`
    color: ${({ theme }) => theme.COLORS.BLUE_300};
    `};

  }
`;

export const Details = styled.div`
  display: flex;
  flex: 1;  
  flex-direction: column;

  > span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

  }

  > small {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;