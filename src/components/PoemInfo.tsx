import { useNavigate } from '@tanstack/react-router';

export default function PoemInfo() {
  const navigate = useNavigate();

  return (
    <div id="poem-screen" className="active">
      <div className="poem-info-wrap">
        <div className="pi-title">나와 나타샤와 흰 당나귀</div>
        <div className="pi-author">백석 (白石, 1912–1996)</div>

        <div className="pi-poem">
          가난한 내가<br />
          아름다운 나타샤를 사랑해서<br />
          오늘밤은 푹푹 눈이 나린다<br />
          <br />
          나타샤를 사랑은 하고<br />
          눈은 푹푹 날리고<br />
          나는 혼자 쓸쓸히 앉어 소주를 마신다<br />
          <br />
          나타샤와 나는<br />
          눈이 푹푹 쌓이는 밤 흰 당나귀 타고<br />
          산골로 가자 출출이 우는 깊은 산골로 가자<br />
          <br />
          산골로 가는 것은 세상한테 지는 것이 아니다<br />
          세상 같은 건 더러워 버리는 것이다<br />
          <br />
          눈은 푹푹 나리고<br />
          나는 나타샤를 생각하고<br />
          나타샤가 아니올 시 출출이 울고<br />
          백마 타고 오는 초인이 있어<br />
          이 밤이 지새도록 나는 우는 것이다<br />
          <br />
          나타샤는 나를 사랑하고<br />
          어데서 흰 당나귀도 오늘밤이 좋아서<br />
          응앙응앙 울 것이다
        </div>

        <div className="pi-desc">
          <p>
            백석(본명 백기행)은 평안북도 정주 출신의 시인으로, 일제강점기에
            조선어의 아름다움을 지키며 향토적이고 서정적인 시를 썼습니다.
            1936년 첫 시집 『사슴』을 출간하며 문단에 등장했습니다.
          </p>
          <p>
            이 시에서 '나타샤'는 실제 연인 김자야(기생 출신, 본명 김영한)로
            알려져 있습니다. 백석은 그녀를 깊이 사랑했으나, 신분의 차이와
            시대의 격랑 속에서 결국 헤어지게 됩니다.
          </p>
          <p>
            「나와 나타샤와 흰 당나귀」(1938)는 단순한 사랑 고백이 아닙니다.
            '산골로 가자'는 세상으로부터의 도피가 아니라, 더러운 세상을 등지고
            순수한 사랑을 향해 떠나는 적극적인 탈주입니다. '흰 당나귀'는 이
            순수한 여정의 동반자이자, 초라하지만 진실한 사랑의 상징입니다.
          </p>
          <p>
            해방 이후 북한에 남게 된 백석은 문학적 자유를 잃고 양치기, 농장
            관리인 등으로 살다 1996년 세상을 떠났습니다. 김영한은 남한에서
            평생 그를 그리워하며, 2000년대에 회고록을 남겼습니다.
          </p>
        </div>

        <button className="back-btn" onClick={() => navigate({ to: '/' })}>
          ← 돌아가기
        </button>
      </div>
    </div>
  );
}
