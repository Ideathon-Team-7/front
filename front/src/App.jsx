import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
