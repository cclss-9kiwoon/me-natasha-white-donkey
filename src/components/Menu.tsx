import { useNavigate } from '@tanstack/react-router';

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div id="menu-screen">
      <div className="menu-tag">POEM GAME · 제1편</div>
      <div className="menu-title">
        나와 나타샤와<br />흰 당나귀
      </div>
      <div className="menu-author">백석 (白石)</div>
      <div className="menu-year">1938</div>
      <div className="menu-buttons">
        <button
          className="menu-btn"
          onClick={() => navigate({ to: '/game' })}
        >
          시작하기
        </button>
        <button
          className="menu-btn"
          onClick={() => navigate({ to: '/settings' })}
        >
          설정
        </button>
        <button
          className="menu-btn"
          onClick={() => navigate({ to: '/poem' })}
        >
          나와 나타샤와 흰 당나귀란
        </button>
      </div>
    </div>
  );
}
