# 멋쟁이 사자처럼 Front-End School Plus 1기: JavaScript 프로그래밍
* GitHub URL: https://github.com/uzoolove/FESP01-javascript

## 개발환경 구축
### 프로그램 설치
* 본인의 OS에 맞는 버전 다운로드 후 설치
1. Nodejs 설치: https://nodejs.org/en/download
2. Visual Studio Code 설치: https://code.visualstudio.com/download
3. Git 설치: https://git-scm.com/downloads

### Visual Studio Code 설정
1. VSCode 실행
2. File > Preferences > Settings
	* "Files: Auto Save": onFocusChange
	* "Editor: Font Size": 각자 조절
	* "Editor: Tab Size": 2
	* "Editor: Detect Indentation": 체크 해제
	* "Files: Readonly Include"
		- Add Pattern > workspace-ins/** 입력한 후 OK 선택
		- Add Pattern > sample/** 입력한 후 OK 선택
		- Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
3. Github 레퍼지토리 복사
	* View > Source Control > Clone Repository 선택
	* <nohyper>https</nohyper>://github.com/uzoolove/FESP01-javascript.git 입력
	* 복사할 적당한 폴더 선택 후 Select as Repository Destination 선택
	* Open 선택

## 수업 자료
* PPT 폴더 확인

## 샘플 코드 복사
* 프로젝트 내에 workspace 폴더 생성 후 sample 폴더 복사해서 실습 진행
* 완성된 강사의 코드는 workspace-ins 폴더에서 확인
### 1일차
* sample/day1 폴더 내부의 파일과 폴더를 workspace 폴더에 복사
### 2일차
* sample/day2 폴더 내부의 파일과 폴더를 workspace 폴더에 복사(workspace/index.html 먼저 삭제)
### 3일차
* sample/day3 폴더 내부의 파일과 폴더를 workspace 폴더에 복사(workspace/index.html 먼저 삭제)
### 4일차
* sample/day4 폴더 내부의 파일과 폴더를 workspace 폴더에 복사(workspace/index.html 먼저 삭제)

## 서버 테스트
* VSCode 터미널에서 workspace 폴더로 이동 후 실행
  - 강사의 완성된 코드를 테스트하려면 workspace-ins 폴더로 이동
```
npx serve .
```
* http://localhost:3000 접속
  - 이미 3000 포트가 사용중일 경우 콘솔 안내 메세지에 따라서 접속
* 각 예제 클릭해서 브라우저 개발자 도구 > 콘솔 탭에서 결과 확인

## 서버 교체
* nodejs 서버 구동(5강 AJAX 테스트에 필요)
  - 기존에 serve로 구동한 서버는 종료하고 대신 AJAX 테스트에 필요한 서버로 교체 구동
```
# 프로젝트 루트에서 실행
# 강사의 완성된 코드를 테스트하려면 cd workspace-ins/nodejs
cd workspace/nodejs
npm i
npm start
```
* http://localhost:33080 접속

## 소스코드 공유
* 본인의 소스코드를 강사에게 공유하고 싶을때
* StackBlitz: https://stackblitz.com 접속 후 문제 있는 소스코드 붙여넣기

