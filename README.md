# 🐾 나의 숨겨진 본능 동물은?

> 3초 안에 선택하면 당신의 진짜 성격이 보인다!

TCI(Temperament and Character Inventory) 기반 바이럴 성향 테스트

## 📋 프로젝트 개요

16가지 동물 캐릭터로 표현한 성향 분석 테스트입니다.
TCI 심리 검사를 귀여운 동물 캐릭터와 매칭하여 10-20대가 재미있게 즐길 수 있도록 만들었습니다.

### 주요 기능

- ✅ 60개 질문 (4개 파트 × 15문항)
- ✅ 16가지 동물 캐릭터 결과
- ✅ 궁합 분석 (Best/Worst)
- ✅ 연령대별 맞춤 솔루션 (10대/20대/30대)
- ✅ SNS 공유 기능
- ✅ 바이럴 UI/UX (파스텔 그라데이션, 애니메이션)

## 📁 프로젝트 구조

```
forpeter/
├── index.html              # 메인 테스트 페이지
├── src/                    # 소스 코드
│   └── js/
│       └── animals.js      # 동물 캐릭터 데이터
├── docs/                   # 문서
│   ├── report.md           # 원본 TCI 리포트
│   ├── PRD.md              # 제품 요구사항 문서
│   ├── test.md             # 테스트 문서
│   └── AI_IMAGE_GUIDE.md   # AI 이미지 생성 가이드
├── archive/                # 이전 버전 보관
│   └── tci_balance_test.html
├── assets/                 # 리소스
│   └── images/             # AI 생성 이미지 (예정)
└── README.md               # 이 파일
```

## 🚀 시작하기

### 로컬에서 실행

```bash
# 브라우저로 index.html 열기
open index.html

# 또는 로컬 서버 실행 (Python)
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

### 사용 방법

1. **테스트 시작** - "시작하기" 버튼 클릭
2. **질문 답변** - 4개 파트, 각 15문항 A/B 선택
3. **결과 확인** - 당신의 동물 캐릭터와 성향 분석
4. **공유하기** - SNS 공유 또는 클립보드 복사

## 🎨 16가지 동물 캐릭터

### GROUP 1: 열정 과다형
- 🦫 **AAAA** - 워커홀릭 비버
- 🐿️ **AAAB** - 눈치 빠른 다람쥐
- 🦅 **AABA** - 외로운 독수리
- 🦉 **AABB** - 몽상가 올빼미

### GROUP 2: 직진 본능형
- 🐶 **ABAA** - 에너자이저 강아지
- 🐱 **ABAB** - 자유로운 고양이
- 🦁 **ABBA** - 정글의 왕 사자
- 🐺 **ABBB** - 겜블러 늑대

### GROUP 3: 안전 제일형
- 🐰 **BAAA** - 착한 토끼
- 🐑 **BAAB** - 순한 양
- 🐘 **BABA** - 장인 코끼리
- 🐢 **BABB** - 집순이 거북이

### GROUP 4: 태평천하형
- 🐻 **BBAA** - 우직한 곰
- 🐼 **BBAB** - 행복한 판다
- 🦏 **BBBA** - 단단한 코뿔소
- 🦙 **BBBB** - 자연인 라마

## 📊 TCI 4가지 차원

1. **NS (Novelty Seeking)** - 자극 추구
   - A: 새로운 자극을 추구
   - B: 안정적이고 규칙적인 것을 선호

2. **HA (Harm Avoidance)** - 위험 회피
   - A: 계획적이고 신중함
   - B: 즉흥적이고 대담함

3. **RD (Reward Dependence)** - 사회적 민감성
   - A: 타인 의견에 민감
   - B: 독립적이고 자기 주관이 뚜렷함

4. **P (Persistence)** - 인내력
   - A: 몽상적이고 창의적
   - B: 현실적이고 실용적

## 🎯 다음 단계

### AI 이미지 생성 (선택사항)

현재는 이모지로 동물을 표시하고 있습니다.
AI 이미지로 업그레이드하려면:

1. `docs/AI_IMAGE_GUIDE.md` 참고
2. AI 도구 선택 (DALL-E 3, Midjourney, Stable Diffusion)
3. 16개 동물 이미지 생성
4. `assets/images/` 폴더에 저장
5. `index.html` 이미지 로딩 코드 수정

### 파일명 규칙
```
assets/images/
├── AAAA_beaver.png
├── AAAB_squirrel.png
├── AABA_eagle.png
└── ...
```

## 🛠 기술 스택

- HTML5
- CSS3 (Gradients, Animations)
- Vanilla JavaScript
- Web Share API

## 📝 라이선스

개인 프로젝트용

## 👤 개발자

Yu Jeong Hui

---

💡 **현재 버전**: 1.0.0 (바이럴 에디션)
🎨 **UI 스타일**: Kawaii Pastel
🎯 **타겟**: 10-20대
