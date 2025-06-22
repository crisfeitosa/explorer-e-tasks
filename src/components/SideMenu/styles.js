import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-area: none;
    position: absolute;
    z-index: 1;
    
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-size: 1.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  > a {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-left: 1.5rem;
    height: 3.5rem;
    font-size: 1rem;

    &[data-menu-active="true"] {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      color: ${({ theme }) => theme.COLORS.BLUE_600};
    }
  }
`;

export const Footer = styled.footer`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1.25rem;
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  > div strong {
    font-size: 0.875rem;
  }
  > div small {
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;

  > svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

