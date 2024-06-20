import styled from 'styled-components';
import HomePage from './components/mainPage/homePage';
import { AsideNav } from './components/sideBar/sideBar';
import { pageColors } from './components/utils/constants';
import { Header } from './components/header/header';


const PageContent = styled.div`
    background-color: ${pageColors.backgroundBlack};
`

const MainContent = styled.main`
    display:flex;
`

function App() {
    return <PageContent>
        <Header />
        <MainContent>
            <AsideNav />
            <HomePage />
        </MainContent>

    </PageContent>;
}

export default App;
