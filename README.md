# IN4119_portfolio
Made for Software Engineering Homework
<br><br>

## 프로젝트 구조 및 주요 파일 설명

```
INC4119_portfolio/
├── src/
│   ├── components/   
│   ├── pages/         
│   ├── assets/       
│   ├── layout/        
│   ├── App.jsx        
│   └── App.css      
├── public/           
└── README.md          
```
<br>

## 각 폴더/파일 역할
- **src/components/** : 여러 페이지에서 재사용되는 작은 단위의 UI 컴포넌트들이 위치
- **src/pages/** : 홈페이지의 각 주요 메뉴(홈, 소개, 프로젝트, 이력서, 연락처 등)에 해당하는 페이지 컴포넌트가 위치
- **src/assets/** : 이미지, PDF 등 정적 리소스 파일을 보관
- **src/layout/** : 사이트 전체에 공통적으로 적용되는 Header, Footer 컴포넌트가 위치
- **App.jsx** : 전체 앱의 구조와 페이지 라우팅 로직을 담당
- **App.css** : 전체적인 스타일과 각 컴포넌트/페이지의 CSS 포함

<br>

## 페이지 구성
- **HomePage** : 사이트 소개 및 주요 메뉴 안내
- **AboutPage** : 프로필, 자기소개, 연구/활동 이력, 보유 기술 등
- **ProjectsPage** : 프로젝트별 카드, 이미지, 데모 등
- **ResumePage** : PDF 이력서 미리보기 및 다운로드
- **ContactPage** : 연락처 정보, 메시지 전송 폼(입력값 검증 및 전송 알림)
