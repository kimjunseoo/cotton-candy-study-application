# 🍭 Cotton-Candy Study App (솜사탕 스터디앱 ver.백엔드) 

## 프로젝트 설명
원활한 온/오프라인 스터디 진행을 도와주는 웹 프로젝트 입니다. 

프로젝트의 주요 기능은 2가지 입니다.
발표 순서를 정해줍니다.
닉네임 기반 피드백을 기록/저장/조회 기능을 지원합니다.   

### 1. 만든 사람들

🏷 프론트엔드

솜사탕
github : https://github.com/sstipdev 

비니루
github : https://github.com/hmyo2853

🖥 백엔드

준서
github : https://github.com/kimjunseoo

혜린
github : https://github.com/OolongTea620


### 2. 백엔드 구현 사용 기술
**언어**    

    Javascript(Es6)
    TypeScript 

**데이터베이스**

    MongoDB Atlas    

**라이브러리 관리**     

    yarn

**사용 라이브러리**

    Express 
    Mongoose
    Socket.io 

**배포**

    Fly.io 

    
### 2. 구현 기능

1. 실시간 그룹 기능

실시간 그룹 생성 / 참여 / 탈퇴 기능
socket.io 를 사용하여 실시간 그룹 생성 / 참여 / 탈퇴 API 를 구현했습니다. 

유저가 랜덤 4자리 숫자의 초대코드를 가진 그룹을 생성하거나 그룹에 참여, 탈퇴할 수 있도록 하였습니다.   

실시간 그룹 유저 리스트 
socket.io 를 사용하여 그룹 참여 혹은 탈퇴 시 그룹 유저 리스트에 변경이 발생할 수 있도록 서버 API를 구현했습니다.

2. 피드백 기능


빠른 발표 피드백 조회를 위해 피드백 데이터를 닉네임 별 Document를 생성하여 피드백 정보 관리 
자주 사용되는 유저 피드백 조회 기능이 빠르게 동작되도록 닉네임 별 NoSQL document를 생성하는 방식으로 데이터를 설계하고 Create, Read 기능을 구현했습니다.


## 문제해결 과정

### front <-> back 통신 에러
Access-control-Allow-origin cors 에러
/*[]()*/
백엔드 API 완성 후, 프론트 개발자분들과 통신을 확인하던 중 
프론트 분께서 작성하신 fetch 코드에 문제가 발생되었습니다. 

오류 추적 결과, 백엔드 서버에 CORS allow 설정이 되어있지 않았습니다.

따라서 header Access-Control-Allow-Origin 보안 설정을 편리하게 하기 위해 cors 라이브러리를 사용하여 문제를 해결했습니다.

### 배포 과정
Fly.io 배포 과정 중 Port 미스매치로 발생된 문제 해결

fly.io 배포를 하면서 실제 서비스 포트(8080) 와 소스코드 상 익스프레스에서 리스닝하는 서버 포트에 차이가 발생하여 오류가 발생했습니다.
소스코드 상 익스프레스가 리스닝하는 포트를 실제 서비스 포트(HTTP 8080)에 맞추어 문제를 해결했습니다.

[블로그 글](https://velog.io/@kimjunseoo/fly.io-%EC%84%9C%EB%B2%84-%EB%B0%B0%ED%8F%AC-%EB%B0%8F-API-%ED%85%8C%EC%8A%A4%ED%8A%B8)


배포 과정 중 발생 된 Access-control-Allow-origin 오류 해결하기

## Backend API 문서

[cotton-study API Documatation](https://documenter.getpostman.com/view/25980345/2s93CLrszD)


