# 🎨 AI 이미지 생성 가이드

## 개요
16가지 성향 타입별 동물 캐릭터 이미지를 AI로 생성하는 가이드입니다.

## 사용 가능한 AI 도구
- **DALL-E 3** (ChatGPT Plus/Pro)
- **Midjourney** (디스코드 봇)
- **Stable Diffusion** (무료, 로컬 환경)
- **Firefly** (Adobe)

## 공통 스타일 가이드

### 기본 스타일
- **스타일**: Cute kawaii chibi art
- **색상**: Pastel colors, soft gradients
- **배경**: White or transparent background
- **크기**: 512x512px (정사각형)
- **표정**: Friendly, approachable
- **일관성**: 모든 동물이 같은 아트 스타일 유지

### 프롬프트 구조
```
cute kawaii [동물 이름] character [특징적 행동/소품],
[성격 표현], simple cartoon style, pastel [색상] colors,
friendly chibi art, white background, high quality,
professional illustration
```

---

## 16가지 동물 캐릭터별 프롬프트

### GROUP 1: 열정 과다형

#### 1. AAAA - 🦫 비버 (워커홀릭 비버)
```
cute kawaii beaver character building a dam with tools and blueprints,
hardworking and focused expression, wearing a small hard hat,
simple cartoon style, pastel brown colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 2. AAAB - 🐿️ 다람쥐 (눈치 빠른 다람쥐)
```
cute kawaii squirrel character collecting acorns with surprised expression,
cheerful and curious, holding multiple acorns,
simple cartoon style, pastel orange colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 3. AABA - 🦅 독수리 (외로운 독수리)
```
cute kawaii eagle character flying solo with confident eyes,
strategic and determined expression, wings spread majestically,
simple cartoon style, pastel brown colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 4. AABB - 🦉 올빼미 (몽상가 올빼미)
```
cute kawaii owl character thinking with lightbulb above head,
dreamy and thoughtful expression, sitting on a moon,
simple cartoon style, pastel purple colors, friendly chibi art,
white background, high quality, professional illustration
```

---

### GROUP 2: 직진 본능형

#### 5. ABAA - 🐶 리트리버 (에너자이저 강아지)
```
cute kawaii golden retriever character wagging tail happily,
energetic and friendly expression, jumping with joy,
simple cartoon style, pastel golden colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 6. ABAB - 🐱 고양이 (자유로운 고양이)
```
cute kawaii cat character lounging freely on cushion,
carefree and relaxed expression, stretching comfortably,
simple cartoon style, pastel pink colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 7. ABBA - 🦁 사자 (정글의 왕 사자)
```
cute kawaii lion character with confident stance wearing crown,
leader expression with charisma, standing proudly,
simple cartoon style, pastel gold colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 8. ABBB - 🐺 늑대 (겜블러 늑대)
```
cute kawaii wolf character with adventurous look holding dice,
thrilling and excited expression, ready for action,
simple cartoon style, pastel gray colors, friendly chibi art,
white background, high quality, professional illustration
```

---

### GROUP 3: 안전 제일형

#### 9. BAAA - 🐰 토끼 (착한 토끼)
```
cute kawaii rabbit character with gentle smile holding carrot,
obedient and kind expression, wearing a small bow,
simple cartoon style, pastel white colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 10. BAAB - 🐑 양 (순한 양)
```
cute kawaii sheep character in fluffy wool with peaceful look,
calm and gentle expression, sitting contentedly,
simple cartoon style, pastel cream colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 11. BABA - 🐘 코끼리 (장인 코끼리)
```
cute kawaii elephant character with serious focused look,
perfectionist expression holding magnifying glass,
simple cartoon style, pastel gray colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 12. BABB - 🐢 거북이 (집순이 거북이)
```
cute kawaii turtle character hiding in cozy shell,
relaxed and comfortable expression, with home sweet home sign,
simple cartoon style, pastel green colors, friendly chibi art,
white background, high quality, professional illustration
```

---

### GROUP 4: 태평천하형

#### 13. BBAA - 🐻 곰 (우직한 곰)
```
cute kawaii bear character with warm smile and honey pot,
reliable and steady expression, standing confidently,
simple cartoon style, pastel brown colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 14. BBAB - 🐼 판다 (행복한 판다)
```
cute kawaii panda character eating bamboo happily,
satisfied and content expression, round and cuddly,
simple cartoon style, pastel black and white colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 15. BBBA - 🦏 코뿔소 (단단한 코뿔소)
```
cute kawaii rhinoceros character standing firm with strong pose,
unshakeable and calm expression, solid and confident,
simple cartoon style, pastel gray colors, friendly chibi art,
white background, high quality, professional illustration
```

#### 16. BBBB - 🦙 라마 (자연인 라마)
```
cute kawaii llama character in peaceful mountain scenery,
zen and tranquil expression, meditating peacefully,
simple cartoon style, pastel cream colors, friendly chibi art,
white background, high quality, professional illustration
```

---

## 이미지 생성 후 작업

### 1. 파일명 규칙
```
[타입코드]_[동물이름].png
예: AAAA_beaver.png, ABAB_cat.png
```

### 2. 저장 위치
```
/Users/yujeonghui/Documents/forpeter/images/
```

### 3. HTML 적용
생성된 이미지를 `images` 폴더에 저장한 후, `index.html`에서 다음 코드 수정:

```javascript
// 현재 (임시 이모지)
document.getElementById('resultAnimal').textContent = animalData.emoji;

// 변경 후 (AI 이미지 사용)
const img = document.createElement('img');
img.src = `images/${typeCode}_${animalData.animal}.png`;
img.alt = animalData.nickname;
img.style.width = '200px';
img.style.height = '200px';
document.getElementById('resultAnimal').innerHTML = '';
document.getElementById('resultAnimal').appendChild(img);
```

---

## DALL-E 3 사용 팁

1. **ChatGPT Plus/Pro** 계정 필요
2. 프롬프트 한 번에 하나씩 입력
3. 여러 변형 생성 후 최선 선택
4. 일관성을 위해 "same style as previous image" 추가

### 배치 생성 예시
```
Generate 16 cute kawaii animal characters in the same style:
1. A beaver building a dam
2. A squirrel collecting acorns
...
All in pastel colors, chibi art style, white background
```

---

## Midjourney 사용 팁

### 기본 명령어
```
/imagine [프롬프트] --ar 1:1 --v 6 --style cute
```

### 스타일 일관성 유지
```
--sref [이전 이미지 URL]
```

### 추천 파라미터
- `--ar 1:1`: 정사각형
- `--v 6`: 최신 버전
- `--style cute`: 귀여운 스타일
- `--q 2`: 고품질

---

## 예산별 추천

### 무료
- **Stable Diffusion** (로컬 설치)
- **Bing Image Creator** (제한적)

### 중간 예산 ($10-20)
- **ChatGPT Plus** ($20/월) - DALL-E 3 무제한

### 고품질 ($30+)
- **Midjourney Standard** ($30/월)
- **Adobe Firefly** (포함 시 추가 비용)

---

## 다음 단계

1. ✅ animals.js에 각 동물별 AI 프롬프트 포함됨
2. 🎨 AI 도구 선택 및 이미지 생성
3. 📁 images 폴더에 저장
4. 🔧 index.html 이미지 로딩 로직 수정
5. 🧪 브라우저에서 테스트

---

## 참고 링크

- [DALL-E 3 공식 가이드](https://openai.com/dall-e-3)
- [Midjourney 문서](https://docs.midjourney.com/)
- [Kawaii Art 스타일 가이드](https://www.behance.net/galleries/illustration/kawaii)

---

💡 **현재 상태**: 이모지로 임시 표시 중. AI 이미지 생성 후 교체 가능합니다.
