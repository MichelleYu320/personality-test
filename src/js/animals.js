// 16가지 성향 타입 → 동물 캐릭터 매칭 데이터

const animalTypes = {
    'AAAA': {
        animal: '비버',
        emoji: '🦫',
        nickname: '워커홀릭 비버',
        oneLine: '밤새 댐 짓는 완벽주의자',
        hashtags: ['#완벽주의', '#워커홀릭', '#번아웃주의', '#섬세함', '#책임감甲'],
        compatibility: {
            best: ['🐶 리트리버', '🐻 곰'],
            worst: ['🦙 라마', '🐼 판다']
        },
        group: 'GROUP 1. [열정 과다형] 뜨거운 가슴과 복잡한 머리',
        description: '누구보다 열정적이고, 남을 배려하며, 끝까지 해내는 슈퍼맨/원더우먼입니다. 하지만 속으로는 "실수하면 어쩌지?", "저 사람이 날 싫어하면 어쩌지?" 끊임없이 걱정하며 스스로를 들볶습니다.',
        aiPrompt: 'cute kawaii beaver character building a dam with tools, hardworking expression, simple cartoon style, pastel brown colors, friendly chibi art, white background'
    },
    'AAAB': {
        animal: '다람쥐',
        emoji: '🐿️',
        nickname: '눈치 빠른 다람쥐',
        oneLine: '도토리 모으다 까먹는 금사빠',
        hashtags: ['#다재다능', '#눈치빠름', '#금사빠', '#분위기메이커', '#끈기부족'],
        compatibility: {
            best: ['🐱 고양이', '🐼 판다'],
            worst: ['🐘 코끼리', '🦏 코뿔소']
        },
        group: 'GROUP 1. [열정 과다형] 뜨거운 가슴과 복잡한 머리',
        description: '호기심에 시작했다가(A), 걱정돼서 눈치 보다가(A), 힘들면 "에이, 안 해!" 하고 빠집니다(B). 감수성이 풍부하고 재치 있어서 인기가 많지만, 끈기가 부족하다는 소리를 듣습니다.',
        aiPrompt: 'cute kawaii squirrel character collecting acorns, cheerful expression, simple cartoon style, pastel orange colors, friendly chibi art, white background'
    },
    'AABA': {
        animal: '독수리',
        emoji: '🦅',
        nickname: '외로운 독수리',
        oneLine: '홀로 날아오르는 전략가',
        hashtags: ['#전략가', '#목표지향', '#독립적', '#냉철함', '#사회성부족'],
        compatibility: {
            best: ['🦁 사자', '🦏 코뿔소'],
            worst: ['🐶 리트리버', '🐑 양']
        },
        group: 'GROUP 1. [열정 과다형] 뜨거운 가슴과 복잡한 머리',
        description: '남들의 시선 따위는 신경 안 씁니다(B). 오로지 내 목표와 내 걱정에만 집중합니다. 치밀하게 계획을 세워 혼자서라도 기어이 목표를 달성하는 무서운 사람입니다.',
        aiPrompt: 'cute kawaii eagle character flying solo with determined eyes, strategic expression, simple cartoon style, pastel brown colors, friendly chibi art, white background'
    },
    'AABB': {
        animal: '올빼미',
        emoji: '🦉',
        nickname: '몽상가 올빼미',
        oneLine: '아이디어만 많은 밤의 철학자',
        hashtags: ['#아이디어뱅크', '#몽상가', '#귀차니즘', '#실행력부족', '#야행성'],
        compatibility: {
            best: ['🐱 고양이', '🐢 거북이'],
            worst: ['🐶 리트리버', '🦁 사자']
        },
        group: 'GROUP 1. [열정 과다형] 뜨거운 가슴과 복잡한 머리',
        description: '머릿속엔 기막힌 아이디어가 넘치는데(A), 막상 실행하려니 겁나고(A) 귀찮습니다(B). "아, 뭐 하지?" 말만 하고 침대와 한 몸이 되어 있을 확률이 높습니다.',
        aiPrompt: 'cute kawaii owl character thinking with lightbulb, dreamy expression, simple cartoon style, pastel purple colors, friendly chibi art, white background'
    },
    'ABAA': {
        animal: '리트리버',
        emoji: '🐶',
        nickname: '에너자이저 강아지',
        oneLine: '꼬리 흔들며 뛰어다니는 핵인싸',
        hashtags: ['#핵인싸', '#에너지넘침', '#오지랖', '#사교성만점', '#인기많음'],
        compatibility: {
            best: ['🐼 판다', '🐻 곰'],
            worst: ['🐢 거북이', '🦙 라마']
        },
        group: 'GROUP 2. [직진 본능형] 겁 없는 불도저',
        description: '겁 없고, 사람 좋아하고, 끈기까지 있습니다. 전교 회장이나 사업가 스타일입니다. 어딜 가나 주인공이 되어야 직성이 풀립니다.',
        aiPrompt: 'cute kawaii golden retriever character wagging tail happily, energetic expression, simple cartoon style, pastel golden colors, friendly chibi art, white background'
    },
    'ABAB': {
        animal: '고양이',
        emoji: '🐱',
        nickname: '자유로운 고양이',
        oneLine: '마이웨이 피터팬',
        hashtags: ['#자유영혼', '#마이웨이', '#피터팬', '#욜로', '#끈기없음'],
        compatibility: {
            best: ['🐿️ 다람쥐', '🦉 올빼미'],
            worst: ['🐘 코끼리', '🦫 비버']
        },
        group: 'GROUP 2. [직진 본능형] 겁 없는 불도저',
        description: '재미있으면 하고, 재미없으면 안 합니다. 낙천적이고 사랑스럽지만, 끈기가 부족해 용두사미가 되기 쉽습니다. "어떻게든 되겠지!"가 말버릇입니다.',
        aiPrompt: 'cute kawaii cat character lounging freely, carefree expression, simple cartoon style, pastel pink colors, friendly chibi art, white background'
    },
    'ABBA': {
        animal: '사자',
        emoji: '🦁',
        nickname: '정글의 왕 사자',
        oneLine: '무리의 리더, 스티브 잡스형',
        hashtags: ['#리더십', '#천재', '#독불장군', '#승부사', '#카리스마'],
        compatibility: {
            best: ['🦅 독수리', '🦏 코뿔소'],
            worst: ['🐑 양', '🐰 토끼']
        },
        group: 'GROUP 2. [직진 본능형] 겁 없는 불도저',
        description: '남이 뭐라든 내 길을 가고(B), 끝까지 파고듭니다(A). 천재 아니면 괴짜 소리를 듣습니다. 성공 확률도 높지만 적도 많이 만듭니다.',
        aiPrompt: 'cute kawaii lion character with confident stance and crown, leader expression, simple cartoon style, pastel gold colors, friendly chibi art, white background'
    },
    'ABBB': {
        animal: '늑대',
        emoji: '🐺',
        nickname: '겜블러 늑대',
        oneLine: '스릴을 즐기는 위험한 매력',
        hashtags: ['#스릴추구', '#즉흥적', '#겜블러', '#뒤끝없음', '#위험한매력'],
        compatibility: {
            best: ['🦁 사자', '🐱 고양이'],
            worst: ['🐰 토끼', '🐑 양']
        },
        group: 'GROUP 2. [직진 본능형] 겁 없는 불도저',
        description: '복잡한 건 질색이고, 빠르고 재밌는 게 최고입니다. 즉흥적이고 뒤끝이 없습니다. 오늘만 사는 사람처럼 보일 수 있습니다.',
        aiPrompt: 'cute kawaii wolf character with adventurous look, thrilling expression, simple cartoon style, pastel gray colors, friendly chibi art, white background'
    },
    'BAAA': {
        animal: '토끼',
        emoji: '🐰',
        nickname: '착한 토끼',
        oneLine: '당근만 먹는 모범생',
        hashtags: ['#모범생', '#착함', '#성실함', '#책임감', '#번아웃위험'],
        compatibility: {
            best: ['🐻 곰', '🐘 코끼리'],
            worst: ['🦁 사자', '🐺 늑대']
        },
        group: 'GROUP 3. [안전 제일형] 돌다리도 두드리는 신중파',
        description: '시키는 대로 잘하고, 남 배려하고, 성실합니다. 법 없이도 살 사람이지만, 정작 본인은 책임감에 짓눌려 힘들어합니다.',
        aiPrompt: 'cute kawaii rabbit character with gentle smile holding carrot, obedient expression, simple cartoon style, pastel white colors, friendly chibi art, white background'
    },
    'BAAB': {
        animal: '양',
        emoji: '🐑',
        nickname: '순한 양',
        oneLine: '무리 속에서 평화를 찾는 소심이',
        hashtags: ['#평화주의', '#소심함', '#순함', '#갈등회피', '#양보'],
        compatibility: {
            best: ['🐰 토끼', '🐼 판다'],
            worst: ['🦁 사자', '🦅 독수리']
        },
        group: 'GROUP 3. [안전 제일형] 돌다리도 두드리는 신중파',
        description: '갈등이 싫어서 그냥 내가 참고 맙니다(B). 겉으로는 유순해 보이지만 속은 타들어 갑니다. 끈기가 부족해 보이지만, 사실은 평화를 위해 양보하는 겁니다.',
        aiPrompt: 'cute kawaii sheep character in fluffy wool, peaceful expression, simple cartoon style, pastel cream colors, friendly chibi art, white background'
    },
    'BABA': {
        animal: '코끼리',
        emoji: '🐘',
        nickname: '장인 코끼리',
        oneLine: '절대 안 잊어버리는 원칙주의자',
        hashtags: ['#원칙주의', '#완벽함', '#장인정신', '#융통성없음', '#신뢰'],
        compatibility: {
            best: ['🐰 토끼', '🦏 코뿔소'],
            worst: ['🐱 고양이', '🐿️ 다람쥐']
        },
        group: 'GROUP 3. [안전 제일형] 돌다리도 두드리는 신중파',
        description: '남한테 관심 없고(B), 내 일은 꼼꼼하고 완벽하게 해냅니다(A). 융통성은 좀 없지만, 맡은 일은 확실하게 처리하는 신뢰의 아이콘입니다.',
        aiPrompt: 'cute kawaii elephant character with serious focused look, perfectionist expression, simple cartoon style, pastel gray colors, friendly chibi art, white background'
    },
    'BABB': {
        animal: '거북이',
        emoji: '🐢',
        nickname: '집순이 거북이',
        oneLine: '등껍질 속이 제일 편한 귀차니스트',
        hashtags: ['#집순이', '#귀차니즘', '#은둔형', '#혼자최고', '#평화'],
        compatibility: {
            best: ['🦉 올빼미', '🦙 라마'],
            worst: ['🐶 리트리버', '🦁 사자']
        },
        group: 'GROUP 3. [안전 제일형] 돌다리도 두드리는 신중파',
        description: '나가기도 싫고, 사람도 귀찮고, 복잡한 건 딱 질색입니다. 혼자 있는 게 제일 행복한 집돌이/집순이입니다. 욕심이 없어 보입니다.',
        aiPrompt: 'cute kawaii turtle character in cozy shell, relaxed expression, simple cartoon style, pastel green colors, friendly chibi art, white background'
    },
    'BBAA': {
        animal: '곰',
        emoji: '🐻',
        nickname: '우직한 곰',
        oneLine: '묵묵히 일하는 최고의 신랑감',
        hashtags: ['#우직함', '#믿음직함', '#한결같음', '#신랑감', '#대기만성'],
        compatibility: {
            best: ['🐰 토끼', '🐶 리트리버'],
            worst: ['🐺 늑대', '🐱 고양이']
        },
        group: 'GROUP 4. [태평천하형] 흔들리지 않는 시몬스',
        description: '튀지는 않지만 묵묵히 자리를 지키며 사람들을 챙깁니다. 감정 기복이 없고 한결같아서, 알면 알수록 진국인 사람입니다.',
        aiPrompt: 'cute kawaii bear character with warm smile, reliable expression, simple cartoon style, pastel brown colors, friendly chibi art, white background'
    },
    'BBAB': {
        animal: '판다',
        emoji: '🐼',
        nickname: '행복한 판다',
        oneLine: '대나무만 있으면 만족하는 둥글이',
        hashtags: ['#행복바이러스', '#둥글이', '#만족', '#욕심없음', '#소확행'],
        compatibility: {
            best: ['🐿️ 다람쥐', '🐑 양'],
            worst: ['🦅 독수리', '🦁 사자']
        },
        group: 'GROUP 4. [태평천하형] 흔들리지 않는 시몬스',
        description: '"좋아 좋아~" 성격 좋고 모난 데 없습니다. 욕심도 별로 없어서 스트레스를 잘 안 받습니다. 행복 지수가 가장 높은 유형 중 하나입니다.',
        aiPrompt: 'cute kawaii panda character eating bamboo happily, satisfied expression, simple cartoon style, pastel black and white colors, friendly chibi art, white background'
    },
    'BBBA': {
        animal: '코뿔소',
        emoji: '🦏',
        nickname: '단단한 코뿔소',
        oneLine: '흔들리지 않는 멘탈 갑',
        hashtags: ['#멘탈갑', '#침착함', '#흔들림없음', '#강인함', '#위기관리'],
        compatibility: {
            best: ['🦅 독수리', '🦁 사자'],
            worst: ['🐿️ 다람쥐', '🐱 고양이']
        },
        group: 'GROUP 4. [태평천하형] 흔들리지 않는 시몬스',
        description: '남들이 난리를 쳐도 눈 하나 깜짝 안 하고 내 할 일 합니다. 감정 기복이 거의 없습니다. 어떤 위기 상황에서도 침착함을 유지합니다.',
        aiPrompt: 'cute kawaii rhinoceros character standing firm, unshakeable expression, simple cartoon style, pastel gray colors, friendly chibi art, white background'
    },
    'BBBB': {
        animal: '라마',
        emoji: '🦙',
        nickname: '자연인 라마',
        oneLine: '산 속에서 유유자적 살고 싶은 자유인',
        hashtags: ['#자연인', '#자유', '#무욕', '#평화', '#나만의세계'],
        compatibility: {
            best: ['🐢 거북이', '🦉 올빼미'],
            worst: ['🐶 리트리버', '🦫 비버']
        },
        group: 'GROUP 4. [태평천하형] 흔들리지 않는 시몬스',
        description: '세상 돌아가는 일에 크게 관심 없고, 나 편한 대로 삽니다. 욕심도, 걱정도, 남 눈치도, 끈기도 없습니다. 진정한 자유인입니다.',
        aiPrompt: 'cute kawaii llama character in mountain scenery, peaceful zen expression, simple cartoon style, pastel cream colors, friendly chibi art, white background'
    }
};

// 연령대별 솔루션 데이터
const solutions = {
    'AAAA': {
        teen: '친구 부탁 다 들어주고, 수행평가도 완벽하게 하려니 늘 시간이 부족하지? 너는 **\'대충 하는 법\'**을 배워야 더 크게 성장해. 100점이 아니어도 괜찮아. 오늘은 딱 1시간만 아무것도 안 하고 멍 때려보자. 그게 뇌를 쉬게 하는 공부야.',
        twenties: '스펙 쌓으랴 알바하랴 몸이 열 개라도 모자라죠? 당신의 가장 큰 적은 **\'자책\'**입니다. 남들보다 예민한 건 약점이 아니라, 남들이 못 보는 디테일을 보는 **\'능력\'**이에요. 마케팅, 기획, 상담 등 섬세함이 필요한 곳에서 당신은 대체 불가한 인재입니다.',
        thirties: '회사 일도 집안일도 완벽해야 한다는 강박을 내려놓으세요. 당신은 이미 차고 넘치게 잘하고 있습니다. 주말 하루쯤은 **\'스마트폰 끄고 잠수타기\'**를 해도 세상은 망하지 않습니다. 당신의 에너지를 남이 아닌 \'나\'를 위해 쓰세요.'
    },
    'AAAB': {
        teen: '이것저것 건드려보다가 금방 질린다고 혼난 적 있지? 괜찮아, 그건 네가 **\'다재다능\'**하다는 증거야. 대신 딱 하나만, 네가 정말 좋아하는(게임이라도 좋아) 분야에서 **\'끝판왕\'**을 한번 깨봐. 그 경험이 너를 바꿔줄 거야.',
        twenties: '좋아하는 일이 직업이 되면 금방 싫증 날 수 있어요. 직업은 **\'안정적인 것\'**을 선택하고, 퇴근 후 취미 생활을 화려하게 즐기는 \'N잡러\' 라이프를 추천합니다. 당신의 다양한 호기심이 곧 돈이 될 수 있습니다.',
        thirties: '인간관계 스트레스에 가장 취약합니다. 모든 사람에게 \'좋은 사람\'일 필요는 없어요. 나를 힘들게 하는 관계는 과감히 **\'손절\'**하고, 내 옆에 있는 배우자나 찐친에게만 잘해주세요. 감정 소모를 줄이는 게 핵심입니다.'
    },
    'AABA': {
        teen: '친구들이 유치해 보이고 혼자 있는 게 편하지? 네가 또래보다 성숙해서 그래. 하지만 학교는 \'공부\'만 하는 곳이 아니라 **\'사회성\'**을 연습하는 곳이야. 밥 먹을 때만이라도 친구들과 어울려봐. 나중에 큰 자산이 돼.',
        twenties: '팀플보다는 개인 과제가 편하죠? 하지만 사회에 나가면 실력만큼 중요한 게 **\'네트워크\'**입니다. 당신의 완벽한 계획을 남들에게 설명하고 설득하는 **\'스피치 능력\'**만 키운다면, 당신은 압도적인 리더가 될 수 있습니다.',
        thirties: '일 중독(워커홀릭)이 되기 쉽습니다. 성공을 위해 달리느라 가족을 외롭게 하지 마세요. 논리적인 해결책보다 따뜻한 말 한마디가 가정의 평화를 지킵니다. 일주일에 한 번은 일 생각 끄고 가족과 온전히 시간을 보내세요.'
    },
    'AABB': {
        teen: '머리는 좋은데 공부하기 귀찮지? 너 같은 타입은 책상에 오래 앉아있는다고 공부 안 해. **\'벼락치기\'**도 능력이다! 짧고 굵게 집중해서 효율적으로 끝내는 너만의 공부법을 찾아봐.',
        twenties: '생각만 하다가 기회 다 놓칩니다. 완벽한 준비는 없어요. 일단 아주 작게라도 \'저질러\' 보세요. 블로그 글 하나 쓰기, 유튜브 영상 하나 올리기 등 \'실행\'이 쌓여야 네 아이디어가 빛을 봅니다.',
        thirties: '재테크나 투자 정보에 밝은 편이네요. 하지만 \'한 방\'을 노리다 잃지 않도록 조심하세요. 귀찮더라도 꼼꼼하게 따져보고 움직여야 합니다. 당신의 직관을 믿되, 검증은 필수입니다.'
    },
    'ABAA': {
        teen: '여기저기 끼어드느라 바쁘지? 친구들 문제 해결해 주는 건 좋지만, **\'내 실속\'**도 챙겨야 해. 남 챙기느라 네 공부 시간 뺏기지 말고, 가끔은 이기적으로 굴어도 친구들은 너 안 떠나.',
        twenties: '사람을 너무 믿어서 사기 당하거나 이용당하기 딱 좋습니다. 사람 좋은 웃음 뒤에 **\'냉철한 눈\'**을 가지세요. 모든 사람에게 좋은 사람이 되려다간 너만 손해 봅니다. 맺고 끊음을 확실히!',
        thirties: '밖에서 에너지 다 쏟고 집에서는 방전되시나요? 배우자는 당신의 \'껍데기\'만 보고 있을지도 몰라요. 밖에서 쓰는 에너지의 딱 반만 가족에게 써보세요. 그럼 집안 분위기가 확 달라질 겁니다.'
    },
    'ABAB': {
        teen: '노는 건 1등인데 끈기가 좀 부족해. 그래도 괜찮아, 네 창의력은 억지로 시킨다고 나오는 게 아니니까. 대신 네가 진짜 좋아하는 취미 하나만큼은 포기하지 말고 끝까지 해봐.',
        twenties: '\'욜로(YOLO)\'하다가 진짜 골로 갈 수 있어요. 버는 돈의 50%는 미래의 너를 위해 강제 저축하세요. 지금의 즐거움도 중요하지만, 미래의 자유를 위한 \'비상금\'이 있어야 진짜 자유로워집니다.',
        thirties: '이제는 \'철들었다\'는 소리를 들어야 할 때입니다. 하기 싫은 일도 웃으면서 해내는 게 진짜 어른의 멋짐이에요. 배우자에게 경제적인 부분이나 미래 계획을 공유해서 **\'신뢰\'**를 주세요.'
    },
    'ABBA': {
        teen: '"선생님이 뭔데?" 반항심이 들 때가 있지? 네 주관이 뚜렷한 건 아주 좋아. 하지만 무조건 반대하기보다, 논리적으로 네 생각을 설명해서 설득하는 법을 연습해 봐. 그게 진짜 이기는 거야.',
        twenties: '독불장군이 되지 않도록 조심하세요. 당신의 뛰어난 직관과 능력을 \'팀을 위해\' 쓴다면 존경받는 리더가 됩니다. "내가 맞고 너는 틀려"라는 태도만 버리면, 당신은 무적입니다.',
        thirties: '사회적 성공이 가정의 행복을 보장하진 않아요. 가족은 부하직원이 아닙니다. 집에서는 논리적인 판단을 끄고, 져주는 척이라도 하세요. **\'가족에게 지는 것이 이기는 것\'**임을 깨달아야 합니다.'
    },
    'ABBB': {
        teen: '스마트폰 게임이나 자극적인 영상에 빠지기 쉬워. 그 에너지를 운동이나 악기처럼 몸을 쓰는 활동으로 돌려봐. 드럼을 치거나 복싱을 배우면 스트레스도 풀리고 인기도 많아질걸?',
        twenties: '인생 \'한 방\'을 노리다가 큰일 납니다. 코인이나 도박은 금물! 매일매일 조금씩 쌓아가는 **\'성취의 기쁨\'**을 맛보는 연습을 하세요. 작은 목표부터 하나씩 달성해가는 재미를 느껴보세요.',
        thirties: '변화무쌍한 직업(영업, 프리랜서, 현장직)이 천직입니다. 다만, 경제 관념이 느슨할 수 있으니 돈 관리는 꼼꼼한 배우자나 전문가에게 맡기고 용돈 받아 쓰는 게 가정의 평화를 위해 좋습니다.'
    },
    'BAAA': {
        teen: '실수 한 번 한다고 인생 안 망해. 시험 좀 못 봐도 괜찮아. 선생님이나 부모님 기대에 너무 맞추려 하지 마. 가끔은 \'나 오늘 학원 땡땡이 칠래!\' 하는 작은 일탈이 너 숨통을 틔워줄 거야.',
        twenties: '조별 과제 버스 기사 노릇 그만하세요. 거절 못 하고 다 떠안는 건 착한 게 아니라 \'미련한\' 겁니다. "저 이거 못 해요"라고 말하는 연습을 하세요. 그래도 아무도 당신 미워하지 않아요.',
        thirties: '가장이나 엄마/아빠의 무게가 너무 무겁죠? 가끔은 무단결근하고 여행 가는 상상을 하거나, 나를 위해 비싼 선물을 사주세요. 당신이 행복해야 가족도 행복합니다. **\'나를 위한 이기심\'**이 필요한 때입니다.'
    },
    'BAAB': {
        teen: '친구들 의견에 휩쓸려 다니지 마. "난 짜장면 싫은데..."라고 속으로만 생각하지 말고, **"난 짬뽕 먹고 싶어!"**라고 작게라도 말해봐. 네 의견을 말해도 싸움 안 나니까 걱정 마.',
        twenties: '안전한 길만 찾다 보면 나중에 후회해요. 젊을 때 딱 한 번만, **실패해도 되는 \'무모한 도전\'**을 해보길 추천합니다. 여행을 혼자 가보거나, 낯선 모임에 나가보는 작은 용기가 인생을 바꿉니다.',
        thirties: '\'좋은 게 좋은 거지\' 하고 넘어가면 홧병 납니다. 부부 사이라도 서운한 건 그때그때 말해야 나중에 폭발하지 않아요. 감정을 쌓아두지 말고 \'말로 푸는 연습\'을 하세요.'
    },
    'BABA': {
        teen: '규칙 지키는 건 좋은데, 친구들이 좀 어겨도 너그럽게 봐줘. "너 왜 숙제 안 해왔어?"라고 따지기보다 그냥 웃어넘기는 여유를 가져봐. 그래야 친구들이 너한테 다가오기 쉬워.',
        twenties: '전문 자격증, 연구직, 엔지니어 등 **\'기술직\'**이 천직입니다. 한 우물만 파면 그 분야 탑이 될 겁니다. 단, 대인관계 스킬은 책으로라도 좀 배우세요. 스몰토크가 당신의 실력을 더 빛내줍니다.',
        thirties: '너무 원칙만 따지면 \'꼰대\' 소리 듣기 딱 좋습니다. 후배나 자녀가 실수해도 정색하고 가르치려 들지 말고, \'허허, 그럴 수도 있지\' 하고 웃어넘기는 연기(?)라도 해보세요.'
    },
    'BABB': {
        teen: '집에만 있지 말고 햇빛 좀 보자. 귀찮아도 하루 30분 산책이 네 무기력함을 없애줄 거야. 그리고 네가 좋아하는 분야(애니, 게임 등)의 커뮤니티 활동이라도 하면서 세상과 소통해 봐.',
        twenties: '최소한의 경제 활동은 해야 독립할 수 있어요. 재택근무나 프리랜서처럼 혼자 조용히 할 수 있는 일을 찾아보세요. 돈을 벌어봐야 세상 돌아가는 것도 알게 됩니다.',
        thirties: '결혼이나 연애가 귀찮을 수 있습니다. 그래도 마음 맞는 단 한 사람(반려자 또는 친구)은 있어야 노후가 외롭지 않아요. 당신의 조용한 성향을 이해해 주는 사람을 찾는 노력을 포기하지 마세요.'
    },
    'BBAA': {
        teen: '행동이 좀 느리다고 답답해하는 친구들이 있지? 기죽지 마. 너는 **\'대기만성형\'**이야. 꾸준히 하는 널 이길 사람은 아무도 없어. 결국엔 네가 토끼를 이기는 거북이가 될 거야.',
        twenties: '화려하고 끼 많은 친구들이 부러울 수 있어요. 하지만 사회에서는 너처럼 **\'믿을 수 있는 사람\'**을 가장 원해. 너의 그 안정감이 나중엔 가장 큰 매력이 되니 자존감을 가져!',
        thirties: '가족과 회사를 위해 묵묵히 헌신하는 당신, 정말 멋집니다. 하지만 가끔은 가장의 무게를 내려놓으세요. 친구들과 술 한잔하며 헛소리도 하고, 스트레스를 푸는 탈출구가 꼭 필요합니다.'
    },
    'BBAB': {
        teen: '성적 좀 안 나와도 행복하지? 긍정적인 건 좋은데, 학생 때 해야 할 최소한의 의무는 하자. 그래야 나중에 네가 좋아하는 소확행을 지킬 수 있는 힘이 생겨.',
        twenties: '야망이 없다고 누가 뭐라 해도 신경 쓰지 마세요. 평범한 일상의 행복을 아는 네가 진정한 승리자입니다. 남들과 비교하지 말고, 너만의 속도대로 살아가면 됩니다.',
        thirties: '경제 관념이 조금 느슨할 수 있습니다. "어떻게든 되겠지" 하다가 노후 준비 놓칠 수 있어요. 저축이나 재테크는 배우자나 전문가에게 맡기고, 용돈 받아 쓰는 게 속 편하고 안전합니다.'
    },
    'BBBA': {
        teen: '"무슨 생각 하는지 모르겠어"라는 말 자주 듣지? 표현을 안 하면 아무도 몰라. "고마워", "미안해", "재밌다" 같은 감정 표현을 의식적으로 연습해 봐. 그래야 오해를 안 받아.',
        twenties: '**\'멘탈 갑(甲)\'**입니다. 감정 노동이 심한 서비스직이나 위기 관리가 필요한 직업에서 당신은 빛을 발합니다. 너의 그 무던함은 남들이 갖지 못한 엄청난 재능이야.',
        thirties: '배우자가 "당신은 벽 보고 얘기하는 것 같아"라고 할 수 있습니다. 공감이 안 돼도 영혼 없는 리액션이라도 좋으니 대꾸는 꼭 해주세요. 그게 당신이 가정을 지키는 방법입니다.'
    },
    'BBBB': {
        teen: '아무 생각 없어 보이지만 너만의 평화로운 세계가 있지? 그래도 밥벌이는 해야 하니, 네가 스트레스 안 받고 할 수 있는 기술 하나는 꼭 배우자. 그래야 편하게 살 수 있어.',
        twenties: '치열한 경쟁 사회가 안 맞을 수 있어요. 대기업보다는 자연과 함께하거나 경쟁이 적은 전문직, 혹은 귀농을 생각해보는 것도 좋습니다. 남들 시선보다 **\'내 마음의 평화\'**가 중요한 사람이니까요.',
        thirties: '현실 감각(돈, 집)을 챙겨줄 꼼꼼한 배우자를 만나는 게 인생 최대의 과제입니다. 당신의 여유로움이 배우자의 불안함을 달래줄 수 있으니, 서로 보완해 주는 최고의 짝꿍이 될 수 있습니다.'
    }
};

// 모듈 내보내기 (브라우저 환경에서 사용)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { animalTypes, solutions };
}
