import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Main, Container } from "theme-ui"

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  )
}

export default Layout
