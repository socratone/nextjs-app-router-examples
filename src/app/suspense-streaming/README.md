# Suspense Streaming

layout에 Suspense를 사용하면 html을 한 번에 가져오는 게 아닌 streaming 방식으로 가져오는 것을 볼 수 있다.

- `/with-suspense` 페이지에서 확인할 수 있다.
- `/without-suspense` 페이지는 비교를 위한 페이지다.

## React 18의 Suspense SSR 아키텍처

https://github.com/reactwg/react-18/discussions/37

이 글은 React 18의 새로운 Suspense SSR(서버사이드 렌더링) 아키텍처에 대한 상세한 설명입니다. 주요 내용을 요약하면 다음과 같습니다:

### 기존 SSR의 문제점

기존 SSR은 다음과 같은 순서로 작동했습니다:

1\. 서버에서 모든 데이터 가져오기 → 2\. HTML 렌더링 → 3\. 클라이언트에서 JavaScript 로드 → 4\. 하이드레이션

이 방식의 문제점:

- **모든 데이터를 가져올 때까지 아무것도 보여줄 수 없음**
- **모든 JavaScript를 로드할 때까지 하이드레이션을 시작할 수 없음**
- **모든 컴포넌트가 하이드레이션될 때까지 상호작용할 수 없음**

### React 18의 해결책

React 18은 `<Suspense>`를 활용해 두 가지 주요 기능을 제공합니다:

#### 1. HTML 스트리밍

- 모든 데이터를 기다리지 않고 HTML을 부분적으로 스트리밍
- 느린 컴포넌트를 `<Suspense>`로 감싸면 스피너를 먼저 보내고, 나중에 실제 콘텐츠를 스트림으로 전송
- 데이터가 준비되면 `<script>` 태그와 함께 HTML을 적절한 위치에 삽입

#### 2. 선택적 하이드레이션(Selective Hydration)

- 모든 JavaScript 코드가 로드되기 전에 하이드레이션 시작 가능
- `React.lazy`와 코드 스플리팅이 SSR과 함께 작동
- 사용자가 상호작용하는 부분을 우선적으로 하이드레이션
- 하이드레이션 중에도 브라우저가 다른 작업(클릭 이벤트 등) 처리 가능

### 주요 개선사항

1. **부분적 데이터 로딩**: 일부 데이터가 느려도 나머지 페이지를 먼저 보여줄 수 있음
2. **부분적 코드 로딩**: 일부 컴포넌트 코드가 없어도 나머지 부분 하이드레이션 가능
3. **부분적 하이드레이션**: 사용자 상호작용에 따라 우선순위를 정해 하이드레이션

### 새로운 API

- 서버: `renderToString` → `renderToPipeableStream`
- 클라이언트: `hydrateRoot` 사용
- `<Suspense>` 컴포넌트로 경계 설정

이러한 개선으로 React 18의 SSR은 더 빠른 초기 로딩과 더 나은 사용자 경험을 제공합니다.

## 더 알아보기

- https://nextjs.org/docs/app/api-reference/file-conventions/loading
- https://nextjs.org/learn/dashboard-app/streaming
