# 나와 나타샤와 흰 당나귀 — POEM GAME

백석의 시 「나와 나타샤와 흰 당나귀」(1938)를 5개의 스테이지로 나눈 횡스크롤 탐험 게임입니다.

**스택**: Vite + React + TypeScript + TanStack Router + HTML5 Canvas

---

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 열기.

## 빌드

```bash
npm run build
npm run preview
```

---

## 프로젝트 구조

```
me-natasha-white-donkey/
├── index.html                       # Vite entry
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx                     # React 엔트리
│   ├── routeTree.tsx                # TanStack Router 라우트 정의
│   ├── styles/
│   │   └── common.css               # 모든 스타일
│   ├── components/
│   │   ├── Menu.tsx                 # 메인 메뉴 (/)
│   │   ├── Settings.tsx             # 설정 (/settings)
│   │   ├── PoemInfo.tsx             # 시 설명 (/poem)
│   │   └── GameScreen.tsx           # 게임 (/game) - 5개 스테이지 관리
│   └── stages/
│       └── stage1.ts ~ stage5.ts    # 각 스테이지의 캔버스 게임 로직
└── legacy/                          # 변환 전 원본 HTML/JS 백업
    ├── index.html
    ├── css/
    └── js/
```

## 라우팅 (TanStack Router)

| 경로 | 컴포넌트 | 설명 |
|---|---|---|
| `/` | `Menu` | 시작하기 / 설정 / 시 설명 |
| `/settings` | `Settings` | 조작키 + 프로그램 구성 |
| `/poem` | `PoemInfo` | 시 전문 + 시인 소개 + 해석 |
| `/game` | `GameScreen` | 5개 스테이지가 자동으로 연결됨 |

## 게임 플로우

1. **Menu** → 시작하기 → `/game`
2. **Stage 1** 타이틀 → 시작하기 → 게임플레이 → 클리어
3. (3초 후 자동 전환) → **Stage 2** 타이틀 → … → **Stage 5** 엔딩
4. 중간에 메뉴로 돌아가려면 `ESC`
5. 엔딩 후 "처음부터 다시" 버튼으로 페이지 새로고침

## 스테이지별 테마

| # | 제목 | 배경 | 특수 메커닉 |
|---|---|---|---|
| 1 | 눈 내리는 밤 | 푸른 설원, 마을 실루엣 | 파편 3개 수집 |
| 2 | 나타샤를 기다리며 | 주막 외부 → 내부 (2 rooms) | E키 조사, 방 전환 |
| 3 | 세상을 버리고 | 고갯길 (오르막) | 당나귀 탑승 (R) |
| 4 | 흰 눈길과 초인 | 깊은 산 속 | 당나귀 + 초인 이벤트 |
| 5 | 나타샤와 흰 당나귀 | 산골 마을 (엔딩) | 엔딩 오버레이 |

## 기술 메모

- 각 스테이지의 캔버스 게임 로직은 `src/stages/stageN.ts`에 들어있음 (vanilla JS/DOM 기반, `initStageN()` export).
- `GameScreen.tsx`가 마운트될 때 5개 스테이지를 모두 초기화하고, CSS class `.active`로 가시성을 전환함.
- 스테이지 클리어 시 `window.onStageClear(N)`을 호출 → React가 다음 스테이지로 전환.
- 마지막 스테이지는 `window.onGameComplete()`를 호출하고 자체 엔딩 화면 표시.
- React StrictMode의 이중 mount에 대비해 `_stageNInitialized` flag로 idempotent 처리.

## 새 시(詩)로 프로젝트 만들기

`/Desktop/PoemGameProject/CreatePoemGameProject.md`를 AI에게 전달하고 **시 제목 + 시인**만 알려주면 동일 구조의 프로젝트를 자동 생성합니다.

예:
```
포임게임 만들어줘: 윤동주 「서시」
```
