import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2rem;
`;

export const Filters = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  margin-right: 0.5rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;