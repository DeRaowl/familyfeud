import styled from 'styled-components'
import Rules from '../Rules/Rules'

const Nav = () => {
  return (
    <NavContainer>
      <h1>Family Feud</h1>
      <Rules />
    </NavContainer>
  )
}

const NavContainer = styled.div`
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 10;
  border-bottom: 1px solid #ccc;
  background: #72e0f010;
  width: 100%;
  margin: 10px 0;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  height: 50px;
  h1 {
    font-size: 30px;
    margin: 0;
    color: #fff;
  }
`

export default Nav