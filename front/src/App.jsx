import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import MainPage from './pages/MainPage';
import PlayPage from './pages/PlayPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/play' element={<PlayPage />} />
      </Routes>
    </>
  );
}

export default App;
