import YouTube from 'react-youtube';

export default function PlayPage() {
  return (
    <div>
      <YouTube
        videoId='hOJ76cZEt08' //동영상 주소
        opts={{
          width: '100%',
          height: '270px',
          playerVars: {
            autoplay: 1, //자동 재생 여부
            modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
            loop: 1, //반복 재생
          },
        }}
      />
    </div>
  );
}
