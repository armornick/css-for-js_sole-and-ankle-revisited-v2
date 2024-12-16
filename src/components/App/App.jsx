import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { QUERIES } from "../../constants";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  html {
    --color-white: hsl(0deg 0% 100%);
    --color-gray-100: hsl(185deg 5% 95%);
    --color-gray-300: hsl(190deg 5% 80%);
    --color-gray-500: hsl(196deg 4% 60%);
    --color-gray-700: hsl(220deg 5% 40%);
    --color-gray-900: hsl(220deg 3% 20%);
    --color-primary: hsl(340deg 65% 47%);
    --color-secondary: hsl(240deg 60% 63%);

    --weight-normal: 500;
    --weight-medium: 600;
    --weight-bold: 800;
  }
`;

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.tabletAndBelow} {
    padding: 48px 32px;
  }

  @media ${QUERIES.phoneAndBelow} {
    padding: 48px 16px;
  }
`;

export default App;
