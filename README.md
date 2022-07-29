# 샤인마스켓

### 🔗 배포 URL : https://shine-masket.herokuapp.com<br><br>

## 1. 개요

- 🏪 샤인마스켓 서비스는 자신의 스토어에서 판매하고 있는 상품을 등록하여 홍보할 수 있는 SNS입니다.
- 💬 상품을 등록하지 않아도 일상을 공유하며 즐거운 SNS 활동을 할 수 있습니다. 글과 사진과 함께 게시물을 작성하여 자신의 일상을 공유할 수 있습니다. 다른 사용자를 팔로우하면 유저가 올린 게시물을 홈 피드에서 소식을 확인할 수도 있습니다.<br><br>

## 2. 팀 구성

| 유준상                                            | 류재준                                          | 오한솔                                         | 장소연                                          |
| ------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------- | ----------------------------------------------- |
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
  => Figma

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

## 5. 역할 분담

### 👦 유준상

- Splash, 로그인, 회원가입, 프로필 수정, 모달 컴포넌트, 404 페이지

### 👦 류재준

- 피드, 검색 페이지, 하단 탭 메뉴, 좋아요, 모달 컴포넌트

### 👧 오한솔

- 사용자 프로필 페이지, 팔로워, 팔로잉 목록

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
<img width="251" height="450" alt="splash" src="https://user-images.githubusercontent.com/89122773/180934943-37b80e0f-8f0d-474b-ba9e-966bc4b775fb.png">
<img width="251" height="450" alt="welcome" src="https://user-images.githubusercontent.com/89122773/180935031-a8851140-1849-43c2-8e3c-f2111dc7afa1.png">
<img width="251" height="450" alt="login" src="https://user-images.githubusercontent.com/89122773/180935128-1a72c040-7b78-4532-bacf-27f179e57f5d.png">
<img width="251" height="450" alt="home" src="https://user-images.githubusercontent.com/89122773/180935764-deb09958-c44c-4a4f-bcc5-b79946bee447.png">
<img width="251" height="450" alt="chatroom" src="https://user-images.githubusercontent.com/89122773/180935887-2c11808d-5734-4727-9ec0-c30b9bd643b2.png">
<img width="251" height="450" alt="myprofile" src="https://user-images.githubusercontent.com/89122773/180935975-29c2bfb4-2768-404a-934a-e25cef4495f5.png">
<img width="251" height="450" alt="followers" src="https://user-images.githubusercontent.com/89122773/180936081-c431fbb3-8810-4d33-ae04-43b06b38b35e.png">
<img width="251" height="450" alt="modifyprofile" src="https://user-images.githubusercontent.com/89122773/180936220-fbfe0dc8-91c5-4abe-aa36-45970499651e.png">
<img width="251" height="450" alt="upload" src="https://user-images.githubusercontent.com/89122773/180936321-c83d5e87-b767-42a4-888d-3667818e349d.png">
