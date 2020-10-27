import React, { Component } from 'react';
import Header from "./Header";
import Meta from "./Meta";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidthk: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0, 0.09)'
};

const StyledPage = styled.div`
  background: white;
  color: ${ props => props.theme.black};
`;

// always access theme because react context api
const Inner = styled.div`
  max-width: ${ props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;  
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  /*base is 10 so then we know fontsize is 15px*/
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  /*
  Access different because its not referenced in the component like
  Inn or StyledPage
  */
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;