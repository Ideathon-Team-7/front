import { useState } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  // const [translatedText, setTranslatedText] = useState('');

  const movePage = () => {
    navigate('/play');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://your-backend-api-url.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link: inputValue }),
      });

      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다.');
      }

      const result = await response.json();
      console.log('성공:', result);
    } catch (error) {
      console.error('오류가 발생했습니다:', error.massage);
    }
  };

  return (
    <>
      <Layout>
        <Title>BTS</Title>
        <Subtitle>Best Translation System</Subtitle>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              type='text'
              value={inputValue}
              onChange={handleInputChange}
              placeholder='링크를 입력해주세요'
            />
            <Button type='submit' onClick={movePage}>
              전송
            </Button>
          </InputContainer>
        </form>
      </Layout>
    </>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-image: url('https://c.pxhere.com/photos/e9/ab/hand_laptop_macbook_touchpad_computing-1388435.jpg!d');
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  margin-right: 1rem;
`;

const Button = styled.button`
  height: 40px;
  padding: 0 1rem;
  font-size: 1rem;
  color: white;
  background-color: #d9534f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
