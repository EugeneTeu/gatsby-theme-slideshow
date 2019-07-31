/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import useKeyPress from '../hooks/useKeyPress';

const NavLink = styled(AniLink)`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin: 0 20px;
  ${props => props.disabled && css`
    color: #777;
    pointer-events: none;
  `}
  ${props => props.previous && css`
    transform: rotateY(180deg);
  `}
`;

const Controls = ({previous, next}) => {
  useKeyPress('ArrowLeft', () => {
    if (previous) {
      document.querySelector('#js-prev-button').click();
    }
  })
  useKeyPress('ArrowRight', () => {
    if (next) {
      document.querySelector('#js-next-button').click();
    }
  })
  return (
    <nav sx={{
      fontFamily: 'default',
      fontSize: '50px',
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <NavLink id="js-prev-button" swipe direction="right" to={previous ? previous : '/'} previous="true" disabled={!previous}>➪</NavLink>
      <NavLink id="js-next-button" swipe direction="left" to={next ? next : '/'} disabled={!next}>➪</NavLink>
    </nav>
  )
}

export default Controls
