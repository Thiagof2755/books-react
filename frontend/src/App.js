import Header from './Components/Header';
import styled from 'styled-components';
import Pesquisa from './Components/Pesquisa';
import UltimosLancamentos from './Components/UltimosLancamentos';

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh; /* Defina a altura mínima como 100vh */
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
    return (
        <AppContainer>
            <Header />
            <Pesquisa />
            <UltimosLancamentos/>
        </AppContainer>
    );
}

export default App;
