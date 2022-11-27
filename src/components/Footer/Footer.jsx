import styled from 'styled-components'
const Footer = () => {
  return (
    <FooterContainer>
      <small>View source on <a href="www.github.com/deraowl">Github</a></small>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  p {
    margin: 0;
    font-size: 20px;
  }
`

export default Footer