import styled from 'styled-components'
// import Image from "../images/chuck-norris-photo.png"

const Head = styled.header`
  padding-top : 48px ;
  img {
      width : 100%
  }
`;

function Header({ src }) {
    return (
        <Head>
            <img src={src} alt="Chuck Noris"></img>
        </Head>
    )
}
export default Header