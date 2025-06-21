import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; 
  grid-template-columns: 17.5rem auto; 
  grid-template-rows: auto 1fr; 
  grid-template-areas: 
    "menu top"
    "menu content";
`;

export const FixedContent = styled.section`
  grid-area: top;
`;