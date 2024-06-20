import { useState } from 'react';
import styled from 'styled-components'

const AsideSection = styled.aside`
  height: 100vh;
`

export const AsideNav = () => {
    const [count, setCount] = useState(0);
    return (
        <AsideSection>
            <h1>Boludeses de la pagina:</h1>

        </AsideSection>
    );
}
