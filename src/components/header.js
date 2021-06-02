import styled from 'styled-components'
// import Image from "../images/chuck-norris-photo.png"

const Head = styled.header`
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