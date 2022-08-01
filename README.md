# 샤인마스켓

### 🔗 배포 URL : https://shine-masket.herokuapp.com<br><br>

## 1. 개요

- 🏪 샤인마스켓 서비스는 자신의 스토어에서 판매하고 있는 상품을 등록하여 홍보할 수 있는 SNS입니다.
- 💬 상품을 등록하지 않아도 일상을 공유하며 즐거운 SNS 활동을 할 수 있습니다. 글과 사진과 함께 게시물을 작성하여 자신의 일상을 공유할 수 있습니다. 다른 사용자를 팔로우하면 유저가 올린 게시물을 홈 피드에서 소식을 확인할 수도 있습니다.<br><br>

## 2. 팀 구성

| 유준상                                            | 류재준                                          | 오한솔                                         | 장소연                                          |
| :-------------------------------------------------: | :-----------------------------------------------: | :----------------------------------------------: | :-----------------------------------------------: |
|<img width="150" src="https://user-images.githubusercontent.com/89122773/182029746-64fd0dac-4166-4ef1-a2a4-abf132a2dc07.png" />|<img width="150" src="https://user-images.githubusercontent.com/89122773/182027739-90c155f4-fa68-4cb4-8c7b-fd13e952eaef.png" />|<img width="150" src="https://user-images.githubusercontent.com/89122773/182027799-2ae1df40-fbfe-4772-9ae9-307efaafc6b1.png" />|<img width="150" src="https://user-images.githubusercontent.com/89122773/182029678-6f3d1fa6-526b-4415-a364-dfdac4f4f013.png" />|
| <a href='https://github.com/yoojs1205'>Github</a> | <a href='https://github.com/ryungom'>Github</a> | <a href='https://github.com/hhnssl'>Github</a> | <a href='https://github.com/plutoin'>Github</a> |
<br>

## 3. 개발 환경 및 배포 URL

### 3.1 기술 스택

- Front<br>
  => HTML, CSS, Styled-components, JavaScript, React, Redux
- Back<br>
  => 제공된 API 사용
- 버전, 이슈 관리 및 협업<br>
  => Git, Github, Github Issues, Github Wiki
- 디자인<br>
  => [Figma](https://www.figma.com/file/9cy8vPNewbgmxB2gPOmo8j/%EC%83%A4%EC%9D%B8%EB%A7%88%EC%8A%A4%EC%BC%93?node-id=39%3A1814)

### 3.1.1 Why Git Flow?

- 팀원들 모두가 협업에 대한 경험이 없어서 초반에 고민을 많이 했던 부분이다. 대표적인 협업 전략인 Git Flow와 Github Flow에서 고민을 하던 도중 Github Flow가 더 간단명료하고 협업이 처음인 우리 팀에 적용하기 쉬울 것이라고 생각했으나, CI / CD 환경이 구축되어있을 때 장점이 부각되는 전략이라서 포기하였다.

- 하지만, 프로젝트 규모가 크지 않은 만큼, Git Flow를 채택하되, 5가지 Branch 중 다음 3가지의 Branch 이외의 나머지 2개의 Branch들을 과감하게 사용하지 않았다.
  1. main: 정식 배포된 코드를 보유하고 있는 Branch
  2. develop: 다음 버전에 배포할 최신 코드를 보유하고 있는 Branch
  3. feature: 새로운 기능 개발을 위해 생성하는 Branch, 개발이 완료되고 팀원들의 피드백이 완료되면 develop Branch로 merge된다.

### 3.1.2 Why Styled-components?

1. CSS in JS : 유지보수 해야할 파일의 수가 줄어든다.
2. className을 지정해줘야하는 번거로움을 피할 수 있다.
3. 스타일 재사용성이 증가한다.
4. React의 props와 함께 궁합이 매우 좋다. 조건부 스타일링도 가능하다.

### 3.1.3 Why Redux + Redux-persist?

1. 유저 정보를 전역에서 관리해야할 필요성을 느껴서 사용하였다.
2. 전역 상태 관리 라이브러리 중 가장 점유율이 높아서 사용하기로 하였다.
3. Redux-persist는 새로고침 및 브라우저 종료 시 스토어의 상태가 초기화되는 문제점을 해결하기 위해서 사용하였다.

```javascript
// src/store/index.js

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserInfoReducer from './UserInfo';
import PostInfoReducer from './PostInfo';
import OtherUserInfoReducer from './OtherUserInfo';
import ProductInfoReducer from './ProductInfo';

const persistConfig = {
  key: 'UserInfo',
  storage,
  whitelist: ['UserInfoReducer', 'PostInfoReducer', 'OtherUserInfoReducer', 'ProductInfoReducer'],
};

const rootReducer = combineReducers({
  UserInfoReducer,
  PostInfoReducer,
  OtherUserInfoReducer,
  ProductInfoReducer,
});

export default persistReducer(persistConfig, rootReducer);
```

### 3.2 배포 URL

🔗 배포 URL : https://shine-masket.herokuapp.com
<br><br>

## 4. 프로젝트 구조

- assets: 아이콘과 이미지가 들어있는 폴더
- components: 여러 페이지에서 사용되는 컴포넌트가 들어있는 폴더
- pages: 해당 페이지에서만 사용되는 컴포넌트 및 페이지 컴포넌트가 들어있는 폴더
- store: 전역 상태가 관리되는 리덕스 스토어

```
├─public
│      index.html
│
└─src
    │  App.jsx
    │  index.js
    │
    ├─assets
    │  │  .DS_Store
    │  ├─icon
    │  └─images
    │
    ├─components
    │  ├─Button
    │  ├─FollowList
    │  ├─Form
    │  ├─Modal
    │  ├─PostTextBar
    │  ├─PostView
    │  ├─ProductFrom
    │  ├─Profile
    │  ├─ProfileForm
    │  ├─SaleProduct
    │  ├─SaleProductItem
    │  ├─TabMenu
    │  ├─Title
    │  ├─TopMenuBar
    │  └─UserCell
    │
    ├─pages
    │  ├─AddProduct
    │  ├─ChatList
    │  ├─ChatRoom
    │  ├─Follower
    │  ├─Following
    │  ├─FollowListPage
    │  ├─HomeEmpty
    │  ├─Join
    │  ├─Login
    │  ├─ModifyProfile
    │  ├─NotFound
    │  ├─Post
    │  ├─PostUpdate
    │  ├─ProfileSetting
    │  ├─Search
    │  ├─Splash
    │  ├─Upload
    │  ├─UserProfile
    │  ├─Welcome
    │  └─YourProfile
    │
    ├─store
    │      index.js
    │      OtherUserInfo.js
    │      PostInfo.js
    │      ProductInfo.js
    │      UserInfo.js
    │
    └─styles
            app.css
            reset.css
```

<br>

* Flow Chart<br>
![image](https://user-images.githubusercontent.com/89122773/182028697-b580da54-c5c5-44f2-803e-7c4dfb7559a5.png)


## 5. 역할 분담

### 👦 유준상

- Splash, 로그인, 회원가입, 프로필 수정, 모달 컴포넌트, 404 페이지

### 👦 류재준

- 피드, 검색 페이지, 하단 탭 메뉴, 좋아요, 모달 컴포넌트, 디자인

### 👧 오한솔

- 사용자 프로필 페이지, 팔로워, 팔로잉 목록, 상품 등록

### 👧 장소연

- 게시글 댓글, 작성, 채팅 목록, 채팅방 페이지
  <br><br>

## 6. 개발 기간 및 이슈 관리

### 6.1 개발기간

- 2022.07.01 ~ 2022.07.31

### 6.2 이슈 관리

- 다음과 같이 Github Issue와 주간회의를 통해서 서로의 진행상황 및 이슈를 공유하였습니다.<br><br>
  <img width="600" alt="image" src="https://user-images.githubusercontent.com/89122773/180936637-3276e43f-9594-461f-8fb9-17482eaca514.png"><br><br>

## 7. UI

<div>
<img width="251" height="450" alt="image" src="https://user-images.githubusercontent.com/89122773/181754846-5e3a3062-0678-485f-b1df-1e6d72848d93.png">
<img width="251" height="450" alt="image" src="https://user-images.githubusercontent.com/89122773/181754685-38f43bbb-7ed2-4c24-b54d-c1d20c94c86c.png">
<img width="251" height="450" alt="login" src="https://user-images.githubusercontent.com/89122773/180935128-1a72c040-7b78-4532-bacf-27f179e57f5d.png">
<img width="251" height="450" alt="image" src="https://user-images.githubusercontent.com/89122773/181755002-1f37a61c-8df8-49bb-ae36-34836452fd03.png">
<img width="250" height="450" alt="image" src="https://user-images.githubusercontent.com/89122773/181755378-26db4d6a-d76d-4925-a4ba-f5cc617d8289.png">
<img width="251" height="450" alt="myprofile" src="https://user-images.githubusercontent.com/89122773/180935975-29c2bfb4-2768-404a-934a-e25cef4495f5.png">
<img width="251" height="450" alt="image" src="https://user-images.githubusercontent.com/89122773/181755522-e9bf7901-d3b7-4e6d-81e0-8d240ff79fa6.png">
<img width="251" height="450" alt="image" src="https://user-images.githubusercontent.com/89122773/181755863-18fe82dd-73f7-416a-8821-1360d3f542d0.png">
<img width="251" height="450" alt="image" src="https://user-images.githubusercontent.com/89122773/181755732-9ef254e7-2dd3-406e-96f7-d0df575935c2.png">
</div>
<br><br>

## 8. 기능

- ### <a href="https://github.com/YOOJS1205/shine_masket/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%84%A4%EB%AA%85">페이지 기능 설명</a>

|                                                                    로그인                                                                    |                                                                            회원가입                                                                            |                                                                 프로필 설정                                                                  |
| :------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="251" height="450" src="https://user-images.githubusercontent.com/89122773/181161999-4a05fbe2-333d-4cf9-b9d6-ad3f4653062c.gif" /> |          <img width="251" height="450" src="https://user-images.githubusercontent.com/89122773/181740767-8e768e86-4908-45b7-a354-bd988f13dd49.gif" />          | <img width="250" height="450" src="https://user-images.githubusercontent.com/89122773/181741841-bfc4124d-fdb5-44e1-80ad-07bd45f6c3db.gif" /> |
|                                                                 프로필 수정                                                                  |                                                                              피드                                                                              |                                                                     검색                                                                     |
| <img width="250" height="450" src="https://user-images.githubusercontent.com/89122773/181753681-bfec954f-6326-465e-9e15-c6b6f91b6315.gif" /> |          <img width="250" height="450" src="https://user-images.githubusercontent.com/42901380/181916339-9446f3c6-7940-44f2-a591-1a25a8c2f42b.gif" />          | <img width="250" height="450" src="https://user-images.githubusercontent.com/42901380/181916486-62bc51b6-f02d-40e9-b556-b95cda350bb6.gif" /> |
|                                                                 하단 탭 메뉴                                                                 |                                                                              모달                                                                              |                                                                 게시글 작성                                                                  |
| <img width="250" height="450" src="https://user-images.githubusercontent.com/42901380/181916568-1868a9d9-3fc8-4a61-96ab-df80dfc2cf6f.gif" /> |          <img width="250" height="450" src="https://user-images.githubusercontent.com/42901380/181917776-44b38235-ad9e-45a3-a318-019a4ce4266a.gif" />          | <img width="250" height="450" src="https://user-images.githubusercontent.com/66389585/181809406-993bb852-fc56-4c3b-bf7e-f071a31ccdb0.gif" /> |
|                                                              게시글 상세 페이지                                                              |                                                                       게시글 수정, 삭제                                                                        |                                                                     채팅                                                                     |
| <img width="250" height="450" src="https://user-images.githubusercontent.com/66389585/181808975-955d072d-f557-4ed2-af72-059f3b0410da.gif" /> | <img width="250" height="450" src="https://user-images.githubusercontent.com/66389585/181814581-a0bfbe56-336e-40a0-bd2d-b55d172cc19e.gif" alt="수정 및 삭제"/> | <img width="250" height="450" src="https://user-images.githubusercontent.com/66389585/181809803-441c20c6-bbca-4544-946e-d855b8d3fb75.gif" /> |
|                                                                사용자 프로필                                                                 |                                                                         팔로잉, 팔로워                                                                         |                                                                  상품 등록                                                                   |
| <img width="250" height="450" src="https://user-images.githubusercontent.com/97442475/181914482-71dce162-14e8-483e-a712-9dc3ed875020.gif" /> |          <img width="250" height="450" src="https://user-images.githubusercontent.com/97442475/181914573-5ad84571-b50e-4392-ae30-260e7a2145e3.gif" />          | <img width="250" height="450" src="https://user-images.githubusercontent.com/97442475/181914674-99a80872-df55-4b0c-84f2-98bad4a0d574.gif" /> |

## 9. 개발 이슈

### 9.1 트러블 슈팅

### 🔗 https://github.com/YOOJS1205/shine_masket/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85-(Trouble-Shooting)

### 9.2 아쉬운점, 앞으로의 방향성

- **어떤 데이터를 Redux를 사용하여 전역으로 상태 관리할 것인가**에 대한 공부가 부족하여 유저 정보 이외에도 여러 데이터를 불필요하게 관리했던 점이 아쉬웠습니다.<br>
  - OtherUserInfo, PostInfo, ProductInfo 등의 데이터를 Redux를 통해 관리하다보니 랜더링이 꼬이는 등의 문제가 발생하고 오히려 로직이 복잡해졌습니다. props를 이용했다면 좀 더 유동적인 운영이 가능하지 않았을까 하는 아쉬움이 남았습니다.
    
  => 공부를 더 진행하여 상황에 맞게 Redux를 활용하는 코드로 리팩토링할 예정입니다.

- 하나의 폼 컴포넌트에서 로그인, 회원가입 로직을 모두 처리해서 **props 관리에 어려움**을 느꼈지만, 그냥 개발을 진행한 점이 아쉬웠습니다.

- 같은 기능을 하는 로직을 분리해서 재사용성을 증가시키지 못한 점이 아쉬웠습니다.<br>
  - 프로필 페이지: 하나의 페이지 컴포넌트(UserProfile)를 사용하되, accountname에 따라 url을 다르게 부여하려 했습니다. 하지만 다른 사용자의 프로필 페이지를 방문했을 때, 그 사용자의 데이터(게시글과 상품)를 완벽하게 가져오지 못하여 프로필 페이지 자체가 랜더링이 불가하였습니다. 임시로 문제를 해결하기 위해 UserProfile(로그인 유저)과 YourProfile(다른 유저)을 분리하여 구현하였습니다.
    
  => 추후에 리팩토링할 예정입니다.

- 좋지 않은 사용자 경험을 제공하는 점이 아쉬웠습니다. 리액트의 이해도가 부족하여 로딩중 컴포넌트를 개발이라는 임시방편을 사용했습니다.<br>
  => useMemo, useCallback, 메모이제이션 등 여러가지 렌더링 최적화 방안을 공부하고 리팩토링할 예정입니다.
  
  
## 10. 프로젝트를 마치며
### 10.1 레슨런
- 프로젝트 시작 전 내가 작성하지 않은 코드를 이해하는 것에 대한 고민이 있었지만, 로직을 짜는 것에 어려움이 생길 때마다 팀원의 코드를 보며 해답을 얻는 경우가 많아 오히려 도움이 되었고 다른 개발자의 코드를 읽는 방법에 대해 알게 되었습니다.
- 내가 맡은 부분을 해결할 때까지 붙잡고 있는 것 보다는 마감 기한을 정해 한계를 타협하는 것이 오히려 도움이 된다는 것을 깨달았습니다. 며칠의 고민거리가 팀원의 도움으로 하루 만에 마무리되는 것을 보며 이러한 문제 상황 공유가 협업의 장점이라고 느꼈습니다.
  
### 10.2 고생담
- 모두가 처음 경험하는 협업이라 이슈 트래킹에 어려움을 겪었고, 거리적 제약도 존재하여 초반 커뮤니케이션에 어려움이 있었습니다.
- 혼자서만 개발을 진행하다가 처음으로 팀원이 개발한 코드를 바탕으로 추가 작업을 진행하는 것에 어려움을 느꼈습니다.
- 로직 문제라고만 생각했던 에러가 {}를 생략하는 등의 사소한 실수였음을 며칠 만에 발견하였습니다.
- 리액트에 대한 이해도가 부족한 상태에서 프로젝트를 진행하다 보니 버거움도 느끼고 커스텀 훅, useMemo, 메모이제이션 등의 기술도 응용하지 못해 아쉬움이 많이 남았습니다.
  
### 10.3 스페셜 포인트
- 디자이너 경력이 있는 팀원과 협업하여 서버 개발자뿐만 아니라, 디자이너와의 협업도 경험할 수 있었습니다.
- 거리적 제약이 있었지만 직접 만나서 페어 프로그래밍을 시도하고 디스코드, 카카오톡, 게더타운 등을 사용하여 원거리 협업의 제약을 줄였습니다.
