import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

export default function PlayPage() {
  const [click, setClick] = useState(false);
  const [subtitleBg, setSubtitleBg] = useState([]);
  const [selected, setSelected] = useState(1);

  const onPlayHandle = () => {
    setClick(true);
  };

  const onClickHandle = () => {
    setClick(!click);
  };

  const handleButtonClick = (index) => {
    setSelected(index);
  };

  useEffect(() => {
    console.log(click);
    if (click) {
      const subtitleTimings = [
        { start: 3.3, duration: 2.1 },
        { start: 5.8, duration: 3.733 },
        { start: 9.868, duration: 2.898 },
        { start: 13.901, duration: 2.169 },
        { start: 16.985, duration: 3.036 },
        { start: 21.07, duration: 3.647 },
        { start: 25.1, duration: 5.297 },
        { start: 61.181, duration: 1.852 },
        { start: 63.48, duration: 4.12 },
        { start: 72.88, duration: 3.12 },
      ];

      let bgTimers = subtitleTimings.map((subtitle, index) => {
        return setTimeout(() => {
          setSubtitleBg((prev) => {
            const newBg = [...prev];
            newBg[index] = true;
            return newBg;
          });
          setTimeout(() => {
            setSubtitleBg((prev) => {
              const newBg = [...prev];
              newBg[index] = false;
              return newBg;
            });
          }, subtitle.duration * 1000);
        }, subtitle.start * 1000);
      });

      return () => {
        bgTimers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [click]);

  return (
    <Layout>
      <LeftSide>
        <ButtonLayout>
          <Button
            selected={selected === 1}
            onClick={() => handleButtonClick(1)}
          >
            기본
          </Button>
          <Button
            selected={selected === 2}
            onClick={() => handleButtonClick(2)}
          >
            친구
          </Button>
          <Button
            selected={selected === 3}
            onClick={() => handleButtonClick(3)}
          >
            전문가
          </Button>
        </ButtonLayout>
        <YoutubeWrapper onClick={onClickHandle}>
          <YouTube
            videoId='hOJ76cZEt08' //동영상 주소
            opts={{
              width: '640',
              height: '390',
              playerVars: {
                autoplay: 1, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
              },
            }}
            onPlay={onPlayHandle}
          />
        </YoutubeWrapper>
      </LeftSide>
      <Subtitle>
        {[
          '파도를 타는 것은 나는 것처럼 몸 위를 걷는 것처럼 갑자기 속도가 빨라지고 활공하는 것과 같다.',
          '자연 현상을 가진 사람이 되는 게 중요하다고 생각해요',
          '서프 보드는 많은 경제적 사고를 필요로 한다.',
          '어떻게 내가 거기에 서 있을 수 있을까? 어떻게 내가 미끄러지지 않을 수 있을까?',
          '하지만 동시에 그 유동적인 환경에서 작동해야 합니다.',
          '작가로서 정말로 고려되고 있다.',
          '물리학에서 어떤 부분 그리고/또는 물 그리고 다른 부분에서 서프 보드는 보드를 부유하게 만드는 거품인 경향이 있는 핵심 요소로 구성되어 있고 보드의 표면은 어떤 종류의 수지 에폭시 섬유 유리이고 때때로 나무의 줄무늬가 있습니다.',
          '가운데를 자르다',
          '그것을 더 강하게 만드는 것',
          '로커는 앞에 있는 보드의 곡률이다. 왜냐하면 그것은 당신이 파형이 얼마나 가파른지를 결정할 수 있기 때문이다. 곡리각 성능에 얼마나 영향을 미치는지 그리고 성능에 영향을 미치기 때문이다.',
          '다른 코리는 보드가 다르게 반응하게 만듭니다.',
        ].map((text, index) => (
          <p
            key={index}
            style={{
              backgroundColor: subtitleBg[index] ? 'yellow' : 'transparent',
            }}
          >
            {text}
          </p>
        ))}
      </Subtitle>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f0f2f5;
`;

const LeftSide = styled.div``;

const ButtonLayout = styled.div`
  display: flex;
  gap: 10px;
  border: none;
  align-items: center;
  padding: 20px;
`;
const Button = styled.button`
  border-radius: 7.5px;
  background-color: #bd4848;
  background-color: ${(props) => (props.selected ? '#bd4848' : '#424242')};
  text-align: center;
  width: 103px;
  height: 35px;
`;

const YoutubeWrapper = styled.button`
  position: relative;
  width: 80%;
  max-width: 800px;
  height: auto;
  aspect-ratio: 16 / 9;
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

const Subtitle = styled.div`
  width: 80%;
  max-width: 800px;
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  text-align: justify;
`;
