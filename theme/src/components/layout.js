import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Main, Container } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
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
