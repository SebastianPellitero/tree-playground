import styled from 'styled-components'

const HeaderSection = styled.header`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  width: 100vw;
  height: 100px;
`

export const Header = () => {
    return (
        <HeaderSection>
            <h1>Trees and Algo-RITMO</h1>

        </HeaderSection>
    );
}
