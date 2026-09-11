// 자동 생성 — 대본 데이터 (Day 1~31)
window.LESSONS = [
 {
  "day": 1,
  "title": "이웃과 첫 인사",
  "enTitle": "Meeting a Neighbor",
  "place": "이사 온 첫날, 집 앞 복도에서 옆집 사람을 만났어요.",
  "roles": {
   "A": "이웃",
   "B": "나 (새로 이사 온 사람)"
  },
  "tipA": "한 명은 A(이웃), 한 명은 B(나). 다 외우면 🔁 역할 바꾸기로 한 번 더 하세요.",
  "tipB": "상대방이 A와 다르게 말해요. 모르는 말이 나와도 당황하지 마세요. 되묻거나, 웃으면서 \"Thank you!\" 하면 대부분 통해요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! Are you new here?",
    "ko": "안녕하세요! 새로 오셨어요?",
    "pr": "하이! 아- 유 뉴 히어?"
   },
   {
    "r": "B",
    "en": "Yes, we just moved in.",
    "ko": "네, 저희 막 이사 왔어요.",
    "pr": "예스, 위 저슷 무브딘."
   },
   {
    "r": "A",
    "en": "Welcome! I'm Tom. I live next door.",
    "ko": "환영해요! 전 톰이에요. 옆집 살아요.",
    "pr": "웰컴! 아임 탐. 아이 리브 넥스 도어."
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 이민 가서 제일 많이 쓸 문장"
   },
   {
    "r": "A",
    "en": "Sure. I'm Tom. I live next door.",
    "ko": "그럼요. 톰이에요. 옆집 살아요.",
    "pr": "슈어. 아임 탐. 아이 리브 넥스 도어."
   },
   {
    "r": "B",
    "en": "Oh, nice to meet you, Tom. I'm {ME}.",
    "ko": "아, 만나서 반가워요, 톰. 저는 {MEKO}.",
    "pr": "오, 나이스 투 미츄, 탐. 아임 {MEPR}.",
    "nt": "✏️ 내 이름은 평소 내 발음 그대로 말해도 돼요"
   },
   {
    "r": "A",
    "en": "Nice to meet you, too. See you around!",
    "ko": "저도 반가워요. 또 봬요!",
    "pr": "나이스 투 미츄 투. 씨 유 어라운드!"
   },
   {
    "r": "B",
    "en": "See you!",
    "ko": "또 봬요!",
    "pr": "씨 유!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey there! Did you just move in?",
    "ko": "안녕하세요! 막 이사 오셨어요?",
    "pr": "헤이 데어! 디쥬 저슷 무빈?"
   },
   {
    "r": "B",
    "en": "Yes, we just moved in.",
    "ko": "네, 저희 막 이사 왔어요.",
    "pr": "예스, 위 저슷 무브딘.",
    "nt": "질문이 달라도 대답은 A랑 똑같이 하면 돼요"
   },
   {
    "r": "A",
    "en": "Oh, welcome to the neighborhood! I'm Sarah. I live upstairs.",
    "ko": "어머, 동네에 오신 걸 환영해요! 전 세라예요. 위층 살아요.",
    "pr": "오, 웰컴 투 더 네이버훗! 아임 쎄라. 아이 리브 업스테어즈."
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ 되묻기 두 번째 버전"
   },
   {
    "r": "A",
    "en": "Of course. I'm Sarah. I live upstairs.",
    "ko": "물론이죠. 세라예요. 위층 살아요.",
    "pr": "어브 코스. 아임 쎄라. 아이 리브 업스테어즈."
   },
   {
    "r": "B",
    "en": "Nice to meet you, Sarah. I'm {ME}.",
    "ko": "만나서 반가워요, 세라. 저는 {MEKO}.",
    "pr": "나이스 투 미츄, 쎄라. 아임 {MEPR}."
   },
   {
    "r": "A",
    "en": "Nice to meet you! Let me know if you need anything.",
    "ko": "반가워요! 필요한 거 있으면 말해요.",
    "pr": "나이스 투 미츄! 렛 미 노우 이퓨 니드 애니띵.",
    "nt": "처음 보는 문장이죠? 다 몰라도 괜찮아요 ↓"
   },
   {
    "r": "B",
    "en": "Thank you so much!",
    "ko": "정말 고마워요!",
    "pr": "땡큐 쏘 머치!"
   }
  ],
  "chunks": [
   {
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 말해 주실래요?",
    "star": true,
    "swaps": [
     {
      "en": "Sorry, can you speak slowly, please?",
      "ko": "천천히 말해 주실래요?"
     },
     {
      "en": "Sorry?",
      "ko": "네? (짧게 되묻기)"
     }
    ]
   },
   {
    "en": "We just moved in.",
    "ko": "저희 막 이사 왔어요.",
    "swaps": [
     {
      "en": "I just moved in.",
      "ko": "저 막 이사 왔어요."
     },
     {
      "en": "We just moved here from Korea.",
      "ko": "저희 한국에서 막 이사 왔어요."
     }
    ]
   },
   {
    "en": "I live next door.",
    "ko": "옆집 살아요.",
    "swaps": [
     {
      "en": "I live upstairs.",
      "ko": "위층 살아요."
     },
     {
      "en": "I live downstairs.",
      "ko": "아래층 살아요."
     }
    ]
   },
   {
    "en": "Nice to meet you.",
    "ko": "만나서 반가워요.",
    "swaps": [
     {
      "en": "Nice to meet you, too.",
      "ko": "저도 반가워요. (대답할 때)"
     }
    ]
   },
   {
    "en": "See you around!",
    "ko": "또 봬요! (오가다 또 봐요)",
    "swaps": [
     {
      "en": "See you!",
      "ko": "또 봬요!"
     },
     {
      "en": "Have a good day!",
      "ko": "좋은 하루 보내세요!"
     }
    ]
   },
   {
    "bonus": true,
    "en": "This is my wife, Kyung-a.",
    "ko": "이쪽은 제 아내 경아예요. (제훈이 말할 때)",
    "swaps": [
     {
      "en": "This is my husband, Jehoon.",
      "ko": "이쪽은 제 남편 제훈이에요. (경아가 말할 때)"
     }
    ]
   },
   {
    "bonus": true,
    "en": "How's it going?",
    "ko": "잘 지내요? (아주 흔한 가벼운 인사)",
    "swaps": [
     {
      "en": "Good, thanks! You?",
      "ko": "좋아요, 고마워요! 그쪽은요? (대답)"
     }
    ]
   }
  ]
 },
 {
  "day": 2,
  "title": "카페 주문",
  "enTitle": "Ordering Coffee",
  "place": "동네 카페에 처음 가서 커피를 주문해요.",
  "roles": {
   "A": "카페 직원",
   "B": "나 (손님)"
  },
  "tipA": "주문은 'Can I get ~, please?' 하나면 돼요. 직원이 묻는 순서(메뉴 → 사이즈 → 포장 여부 → 이름)를 익혀 두세요.",
  "tipB": "직원이 우유 종류처럼 예상 못 한 걸 물어봐요. 못 알아들으면 바로 되묻고, 들린 단어 하나를 골라 '~, please.'로 대답하면 돼요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! What can I get for you?",
    "ko": "안녕하세요! 뭐 드릴까요?",
    "pr": "하이! 왓 캐나이 겟 퍼 유?"
   },
   {
    "r": "B",
    "en": "Can I get an iced latte, please?",
    "ko": "아이스 라테 하나 주시겠어요?",
    "pr": "캐나이 게런 아이스 라테이, 플리즈?",
    "nt": "⭐ 주문은 Can I get ~, please? 하나면 돼요"
   },
   {
    "r": "A",
    "en": "Sure. What size?",
    "ko": "네. 사이즈는요?",
    "pr": "슈어. 왓 사이즈?"
   },
   {
    "r": "B",
    "en": "Medium, please.",
    "ko": "미디엄으로 주세요.",
    "pr": "미디엄, 플리즈."
   },
   {
    "r": "A",
    "en": "For here or to go?",
    "ko": "드시고 가세요, 가져가세요?",
    "pr": "퍼 히어 오어 투 고?",
    "nt": "for here = 매장에서, to go = 포장이에요"
   },
   {
    "r": "B",
    "en": "To go, please.",
    "ko": "가져갈게요.",
    "pr": "투 고, 플리즈."
   },
   {
    "r": "A",
    "en": "Okay. Can I get a name for the order?",
    "ko": "네. 주문하시는 분 이름이 어떻게 되세요?",
    "pr": "오케이. 캐나이 게러 네임 퍼 디 오더?",
    "nt": "미국 카페는 컵에 이름을 적고, 음료가 나오면 이름을 불러요"
   },
   {
    "r": "B",
    "en": "It's {ME}. Thank you!",
    "ko": "{MEKO}. 고마워요!",
    "pr": "잇츠 {MEPR}. 땡큐!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi there! What would you like today?",
    "ko": "안녕하세요! 오늘은 뭘로 드릴까요?",
    "pr": "하이 데어! 왓 우쥬 라익 투데이?"
   },
   {
    "r": "B",
    "en": "Can I get a medium iced latte, please?",
    "ko": "미디엄 아이스 라테 하나 주시겠어요?",
    "pr": "캐나이 게러 미디엄 아이스 라테이, 플리즈?",
    "nt": "사이즈까지 한 번에 말해도 돼요"
   },
   {
    "r": "A",
    "en": "Sure. Would you like whole milk or oat milk?",
    "ko": "네. 우유는 일반 우유로 드릴까요, 오트 밀크로 드릴까요?",
    "pr": "슈어. 우쥬 라익 호울 밀크 오어 오웃 밀크?"
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 모르는 말이 나오면 바로 되묻기"
   },
   {
    "r": "A",
    "en": "Whole milk or oat milk?",
    "ko": "일반 우유요, 오트 밀크요?",
    "pr": "호울 밀크 오어 오웃 밀크?"
   },
   {
    "r": "B",
    "en": "Whole milk, please.",
    "ko": "일반 우유로 주세요.",
    "pr": "호울 밀크, 플리즈.",
    "nt": "whole milk = 일반 우유. 들린 걸 골라 '~, please.' 하면 돼요"
   },
   {
    "r": "A",
    "en": "Got it. Anything else for you?",
    "ko": "알겠어요. 더 필요한 거 있으세요?",
    "pr": "가릿. 애니띵 엘스 퍼 유?"
   },
   {
    "r": "B",
    "en": "No, that's it. Thank you!",
    "ko": "아니요, 그거면 돼요. 고마워요!",
    "pr": "노우, 댓츠 잇. 땡큐!"
   }
  ],
  "chunks": [
   {
    "en": "Can I get an iced latte, please?",
    "ko": "아이스 라테 하나 주시겠어요?",
    "star": true,
    "swaps": [
     {
      "en": "Can I get a coffee, please?",
      "ko": "커피 하나 주시겠어요?"
     },
     {
      "en": "Can I get a cup of water, please?",
      "ko": "물 한 잔 주시겠어요?"
     }
    ]
   },
   {
    "en": "Medium, please.",
    "ko": "미디엄으로 주세요.",
    "swaps": [
     {
      "en": "Small, please.",
      "ko": "스몰로 주세요."
     },
     {
      "en": "Large, please.",
      "ko": "라지로 주세요."
     }
    ]
   },
   {
    "en": "To go, please.",
    "ko": "가져갈게요. (포장)",
    "swaps": [
     {
      "en": "For here, please.",
      "ko": "여기서 먹을게요."
     }
    ]
   },
   {
    "en": "Whole milk, please.",
    "ko": "일반 우유로 주세요.",
    "swaps": [
     {
      "en": "Oat milk, please.",
      "ko": "오트 밀크로 주세요."
     },
     {
      "en": "Less ice, please.",
      "ko": "얼음 적게 주세요."
     }
    ]
   },
   {
    "en": "No, that's it. Thank you!",
    "ko": "아니요, 그거면 돼요. 고마워요!",
    "swaps": [
     {
      "en": "Can I get a muffin, too?",
      "ko": "머핀도 하나 주시겠어요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "For here or to go?",
    "ko": "드시고 가세요, 가져가세요? (직원이 꼭 묻는 말)",
    "swaps": []
   },
   {
    "bonus": true,
    "en": "Anything else?",
    "ko": "더 필요한 거 있으세요? (직원이 자주 하는 말)",
    "swaps": [
     {
      "en": "Is that all?",
      "ko": "그게 다예요?"
     }
    ]
   }
  ]
 },
 {
  "day": 3,
  "title": "전화번호 주고받기",
  "enTitle": "Phone Numbers",
  "place": "건물 로비에서 다시 만난 이웃과 전화번호를 주고받아요.",
  "roles": {
   "A": "이웃",
   "B": "나 (새로 이사 온 사람)"
  },
  "tipA": "번호는 숫자를 하나씩 끊어 읽고, 0은 보통 '오우'라고 해요. 상대 번호는 따라 말하면서 확인하세요.",
  "tipB": "상대가 숫자를 헷갈려서 다시 물어보고, 자기 번호는 빠르게 말해요. 내 번호는 한 자리씩 또박또박, 상대 번호가 빠르면 천천히 말해 달라고 하세요.",
  "a": [
   {
    "r": "A",
    "en": "Hey, can I get your number?",
    "ko": "저기, 번호 좀 알려 줄래요?",
    "pr": "헤이, 캐나이 게츄어 넘버?"
   },
   {
    "r": "B",
    "en": "Sure. It's 555-0187.",
    "ko": "그럼요. 555-0187이에요.",
    "pr": "슈어. 잇츠 파이브 파이브 파이브, 오우 원 에잇 세븐.",
    "nt": "✏️ 내 번호로 바꿔서 연습해도 좋아요. 0은 보통 '오우'라고 읽어요"
   },
   {
    "r": "A",
    "en": "555-0187. Got it.",
    "ko": "555-0187. 알겠어요.",
    "pr": "파이브 파이브 파이브, 오우 원 에잇 세븐. 가릿."
   },
   {
    "r": "B",
    "en": "What's your number?",
    "ko": "그쪽 번호는요?",
    "pr": "왓츄어 넘버?",
    "nt": "⭐ 오늘의 핵심 문장"
   },
   {
    "r": "A",
    "en": "It's 555-0142.",
    "ko": "555-0142예요.",
    "pr": "잇츠 파이브 파이브 파이브, 오우 원 포 투."
   },
   {
    "r": "B",
    "en": "555-0142?",
    "ko": "555-0142요?",
    "pr": "파이브 파이브 파이브, 오우 원 포 투?",
    "nt": "숫자는 따라 말하며 확인하세요"
   },
   {
    "r": "A",
    "en": "That's right. Text me anytime!",
    "ko": "맞아요. 언제든 문자 해요!",
    "pr": "댓츠 라잇. 텍스 미 애니타임!"
   },
   {
    "r": "B",
    "en": "Okay, I will. Thank you!",
    "ko": "네, 그럴게요. 고마워요!",
    "pr": "오케이, 아이 윌. 땡큐!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey, do you want to exchange numbers?",
    "ko": "저기, 우리 번호 교환할래요?",
    "pr": "헤이, 두유 워너 익스체인지 넘버즈?"
   },
   {
    "r": "B",
    "en": "Sure. My number is 555-0187.",
    "ko": "좋아요. 제 번호는 555-0187이에요.",
    "pr": "슈어. 마이 넘버 이즈 파이브 파이브 파이브, 오우 원 에잇 세븐."
   },
   {
    "r": "A",
    "en": "Sorry, was that 0167 or 0187?",
    "ko": "미안해요, 0167이었어요, 0187이었어요?",
    "pr": "쏘리, 워즈 댓 오우 원 식스 세븐, 오어 오우 원 에잇 세븐?"
   },
   {
    "r": "B",
    "en": "0187. One, eight, seven.",
    "ko": "0187이요. 일, 팔, 칠.",
    "pr": "오우 원 에잇 세븐. 원, 에잇, 세븐.",
    "nt": "헷갈려하면 한 자리씩 또박또박 다시 말해 주세요"
   },
   {
    "r": "A",
    "en": "Got it. Here's mine. It's 555-0142.",
    "ko": "알겠어요. 이건 제 번호예요. 555-0142.",
    "pr": "가릿. 히어즈 마인. 잇츠 파이브 파이브 파이브, 오우 원 포 투."
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ 숫자가 빠르면 이렇게 부탁하세요"
   },
   {
    "r": "A",
    "en": "Sure. Five-five-five, oh-one-four-two.",
    "ko": "그럼요. 555, 0142요.",
    "pr": "슈어. 파이브 파이브 파이브, 오우 원 포 투."
   },
   {
    "r": "B",
    "en": "555-0142. Got it. Thank you!",
    "ko": "555-0142. 알겠어요. 고마워요!",
    "pr": "파이브 파이브 파이브, 오우 원 포 투. 가릿. 땡큐!"
   }
  ],
  "chunks": [
   {
    "en": "What's your number?",
    "ko": "번호가 어떻게 돼요?",
    "star": true,
    "swaps": [
     {
      "en": "What's your email?",
      "ko": "이메일 주소가 뭐예요?"
     },
     {
      "en": "What's your address?",
      "ko": "주소가 어떻게 돼요?"
     }
    ]
   },
   {
    "en": "Can I get your number?",
    "ko": "번호 좀 알려 줄래요?",
    "swaps": [
     {
      "en": "Can I get your email?",
      "ko": "이메일 좀 알려 줄래요?"
     }
    ]
   },
   {
    "en": "My number is 555-0187.",
    "ko": "제 번호는 555-0187이에요.",
    "swaps": [
     {
      "en": "My wife's number is 555-0198.",
      "ko": "제 아내 번호는 555-0198이에요. (제훈이 말할 때)"
     },
     {
      "en": "My husband's number is 555-0176.",
      "ko": "제 남편 번호는 555-0176이에요. (경아가 말할 때)"
     }
    ]
   },
   {
    "en": "Text me anytime.",
    "ko": "언제든 문자 해요.",
    "swaps": [
     {
      "en": "Call me anytime.",
      "ko": "언제든 전화해요."
     }
    ]
   },
   {
    "en": "Is that right?",
    "ko": "그거 맞아요? (확인할 때)",
    "swaps": [
     {
      "en": "That's right.",
      "ko": "맞아요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Do you want to exchange numbers?",
    "ko": "번호 교환할래요?",
    "swaps": []
   },
   {
    "bonus": true,
    "en": "Five-five-five, oh-one-four-two.",
    "ko": "555-0142 (0은 '오우'라고 읽어요)",
    "swaps": []
   }
  ]
 },
 {
  "day": 4,
  "title": "이름 철자 말하기",
  "enTitle": "Spelling Your Name",
  "place": "아파트 관리사무소에 가서 우편함 열쇠를 받아요.",
  "roles": {
   "A": "관리사무소 직원",
   "B": "나 (새 입주자)"
  },
  "tipA": "이름을 말하면 거의 항상 철자를 물어봐요. 예시 성(Kim)으로 먼저 연습하고, 내 진짜 이름 철자로도 바꿔서 해 보세요.",
  "tipB": "직원이 C냐 K냐처럼 헷갈리는 글자를 물어봐요. 못 알아들으면 되묻고, 철자를 한 글자씩 천천히 말하면 돼요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! How can I help you?",
    "ko": "안녕하세요! 무엇을 도와드릴까요?",
    "pr": "하이! 하우 캐나이 헬퓨?"
   },
   {
    "r": "B",
    "en": "Hi. I need a mailbox key, please.",
    "ko": "안녕하세요. 우편함 열쇠가 필요해요.",
    "pr": "하이. 아이 니더 메일박스 키, 플리즈."
   },
   {
    "r": "A",
    "en": "Sure. Can I get your name?",
    "ko": "네. 성함이 어떻게 되세요?",
    "pr": "슈어. 캐나이 게츄어 네임?"
   },
   {
    "r": "B",
    "en": "It's {ME} Kim.",
    "ko": "김{MEKO}.",
    "pr": "잇츠 {MEPR} 킴.",
    "nt": "미국에선 이름을 먼저, 성(Kim)을 뒤에 말해요"
   },
   {
    "r": "A",
    "en": "Thanks. How do you spell your last name?",
    "ko": "감사해요. 성 철자가 어떻게 돼요?",
    "pr": "땡스. 하우 두유 스펠 유어 래슷 네임?",
    "nt": "⭐ 이름을 말하면 거의 항상 듣는 질문"
   },
   {
    "r": "B",
    "en": "K-I-M.",
    "ko": "K, I, M이요.",
    "pr": "케이, 아이, 엠.",
    "nt": "✏️ 내 이름 철자로 바꿔서 연습하세요"
   },
   {
    "r": "A",
    "en": "Great. Here's your key.",
    "ko": "좋아요. 여기 열쇠요.",
    "pr": "그레잇. 히어즈 유어 키."
   },
   {
    "r": "B",
    "en": "Thank you so much!",
    "ko": "정말 고마워요!",
    "pr": "땡큐 쏘 머치!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi there! What can I do for you?",
    "ko": "안녕하세요! 뭘 도와드릴까요?",
    "pr": "하이 데어! 왓 캐나이 두 퍼 유?"
   },
   {
    "r": "B",
    "en": "Hi. I need a mailbox key, please.",
    "ko": "안녕하세요. 우편함 열쇠가 필요해요.",
    "pr": "하이. 아이 니더 메일박스 키, 플리즈."
   },
   {
    "r": "A",
    "en": "No problem. What's the last name?",
    "ko": "그럼요. 성이 어떻게 되세요?",
    "pr": "노 프라블럼. 왓츠 더 래슷 네임?",
    "nt": "last name = 성, first name = 이름"
   },
   {
    "r": "B",
    "en": "It's Kim.",
    "ko": "김이에요.",
    "pr": "잇츠 킴."
   },
   {
    "r": "A",
    "en": "Kim. Is that with a C or a K?",
    "ko": "킴이요. C로 써요, K로 써요?",
    "pr": "킴. 이즈 댓 위더 씨 오어러 케이?"
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 못 알아들으면 바로 되묻기"
   },
   {
    "r": "A",
    "en": "Sure. C or K? How do you spell it?",
    "ko": "네. C예요, K예요? 철자가 어떻게 돼요?",
    "pr": "슈어. 씨 오어 케이? 하우 두유 스펠릿?"
   },
   {
    "r": "B",
    "en": "K. K-I-M.",
    "ko": "K요. K, I, M.",
    "pr": "케이. 케이, 아이, 엠.",
    "nt": "✏️ 내 이름 철자로 바꿔서 연습하세요"
   }
  ],
  "chunks": [
   {
    "en": "How do you spell that?",
    "ko": "철자가 어떻게 돼요?",
    "star": true,
    "swaps": [
     {
      "en": "How do you spell your last name?",
      "ko": "성 철자가 어떻게 돼요?"
     },
     {
      "en": "How do you say that?",
      "ko": "그거 어떻게 읽어요?"
     }
    ]
   },
   {
    "en": "What's your last name?",
    "ko": "성이 뭐예요?",
    "swaps": [
     {
      "en": "What's your first name?",
      "ko": "이름이 뭐예요?"
     },
     {
      "en": "What's your full name?",
      "ko": "전체 이름(이름+성)이 뭐예요?"
     }
    ]
   },
   {
    "en": "It's K-I-M.",
    "ko": "K, I, M이에요.",
    "swaps": [
     {
      "en": "It's K, not C.",
      "ko": "C가 아니라 K예요."
     }
    ]
   },
   {
    "en": "Is that with a C or a K?",
    "ko": "C로 써요, K로 써요?",
    "swaps": [
     {
      "en": "Is that with a B or a V?",
      "ko": "B로 써요, V로 써요?"
     },
     {
      "en": "Is that with an L or an R?",
      "ko": "L로 써요, R로 써요?"
     }
    ]
   },
   {
    "en": "I need a mailbox key, please.",
    "ko": "우편함 열쇠가 필요해요.",
    "swaps": [
     {
      "en": "I need a parking pass, please.",
      "ko": "주차증이 필요해요."
     },
     {
      "en": "I need a new key, please.",
      "ko": "새 열쇠가 필요해요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Can you write it down, please?",
    "ko": "적어 주실래요? (말로 안 통할 때 최고)",
    "swaps": [
     {
      "en": "Can you spell it, please?",
      "ko": "철자 좀 불러 주실래요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "K as in 'king.'",
    "ko": "king의 K요. (헷갈리는 글자 설명할 때)",
    "swaps": [
     {
      "en": "M as in 'Mary.'",
      "ko": "Mary의 M이요."
     },
     {
      "en": "N as in 'Nancy.'",
      "ko": "Nancy의 N이요."
     }
    ]
   }
  ]
 },
 {
  "day": 5,
  "title": "마트 계산대",
  "enTitle": "At the Checkout",
  "place": "동네 마트에서 장을 보고 계산대에서 계산해요.",
  "roles": {
   "A": "계산원",
   "B": "나 (손님)"
  },
  "tipA": "계산원은 보통 인사 → 금액 → 영수증 순서로 말해요. 금액은 '트웨니쓰리 피프티'처럼 짧게 말하니 귀를 익혀 두세요.",
  "tipB": "봉투값이나 결제 방법처럼 다른 질문이 나와요. 금액을 못 들었으면 'Sorry, how much?'로 되묻고, 'Card, please.'처럼 짧게 대답하면 돼요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! Did you find everything okay?",
    "ko": "안녕하세요! 찾으시는 건 다 찾으셨어요?",
    "pr": "하이! 디쥬 파인 에브리띵 오케이?",
    "nt": "계산원 단골 인사예요. 'Yes, thank you.'면 충분해요"
   },
   {
    "r": "B",
    "en": "Yes, thank you.",
    "ko": "네, 고마워요.",
    "pr": "예스, 땡큐."
   },
   {
    "r": "A",
    "en": "Great. Your total is twenty-three fifty.",
    "ko": "네. 총 23달러 50센트예요.",
    "pr": "그레잇. 유어 토럴 이즈 트웨니쓰리 피프티.",
    "nt": "23.50달러를 '트웨니쓰리 피프티'처럼 짧게 말해요"
   },
   {
    "r": "B",
    "en": "Can I pay by card?",
    "ko": "카드로 계산해도 돼요?",
    "pr": "캐나이 페이 바이 카드?",
    "nt": "⭐ 오늘의 핵심 문장"
   },
   {
    "r": "A",
    "en": "Sure. Do you want your receipt?",
    "ko": "그럼요. 영수증 드릴까요?",
    "pr": "슈어. 두유 원츄어 리씻?"
   },
   {
    "r": "B",
    "en": "Yes, please.",
    "ko": "네, 주세요.",
    "pr": "예스, 플리즈."
   },
   {
    "r": "A",
    "en": "Here you go. Have a great day!",
    "ko": "여기 있어요. 좋은 하루 보내세요!",
    "pr": "히어 유 고. 해버 그레잇 데이!"
   },
   {
    "r": "B",
    "en": "You too. Thank you!",
    "ko": "그쪽도요. 고마워요!",
    "pr": "유 투. 땡큐!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey, how's it going?",
    "ko": "안녕하세요, 잘 지내세요?",
    "pr": "헤이, 하우즈 잇 고잉?"
   },
   {
    "r": "B",
    "en": "Good, thank you.",
    "ko": "좋아요, 고마워요.",
    "pr": "굿, 땡큐."
   },
   {
    "r": "A",
    "en": "Do you need a bag? They're ten cents.",
    "ko": "봉투 필요하세요? 한 장에 10센트예요.",
    "pr": "두유 니더 백? 데어 텐 센츠.",
    "nt": "봉투값을 받는 곳이 많아요. 장바구니를 챙기면 좋아요"
   },
   {
    "r": "B",
    "en": "No, thank you. I have a bag.",
    "ko": "아니요, 괜찮아요. 가방 있어요.",
    "pr": "노우, 땡큐. 아이 해버 백."
   },
   {
    "r": "A",
    "en": "Okay. That comes to twenty-three fifty.",
    "ko": "네. 다 해서 23달러 50센트예요.",
    "pr": "오케이. 댓 컴즈 투 트웨니쓰리 피프티."
   },
   {
    "r": "B",
    "en": "Sorry, how much?",
    "ko": "죄송한데, 얼마라고요?",
    "pr": "쏘리, 하우 머치?",
    "nt": "⭐ 금액을 놓치면 이렇게 되물어요"
   },
   {
    "r": "A",
    "en": "Twenty-three fifty. Cash or card?",
    "ko": "23달러 50센트요. 현금이세요, 카드세요?",
    "pr": "트웨니쓰리 피프티. 캐시 오어 카드?"
   },
   {
    "r": "B",
    "en": "Card, please. Thank you!",
    "ko": "카드요. 고마워요!",
    "pr": "카드, 플리즈. 땡큐!"
   }
  ],
  "chunks": [
   {
    "en": "Can I pay by card?",
    "ko": "카드로 계산해도 돼요?",
    "star": true,
    "swaps": [
     {
      "en": "Can I pay in cash?",
      "ko": "현금으로 계산해도 돼요?"
     },
     {
      "en": "Can I pay with my phone?",
      "ko": "휴대폰으로 결제해도 돼요?"
     }
    ]
   },
   {
    "en": "Sorry, how much?",
    "ko": "죄송한데, 얼마라고요?",
    "swaps": [
     {
      "en": "How much is this?",
      "ko": "이거 얼마예요?"
     }
    ]
   },
   {
    "en": "No, thank you. I have a bag.",
    "ko": "아니요, 괜찮아요. 가방 있어요.",
    "swaps": [
     {
      "en": "Yes, one bag, please.",
      "ko": "네, 봉투 하나 주세요."
     },
     {
      "en": "Yes, two bags, please.",
      "ko": "네, 봉투 두 개 주세요."
     }
    ]
   },
   {
    "en": "Card, please.",
    "ko": "카드요.",
    "swaps": [
     {
      "en": "Cash, please.",
      "ko": "현금이요."
     }
    ]
   },
   {
    "en": "You too!",
    "ko": "그쪽도요! (Have a great day!에 대한 대답)",
    "swaps": [
     {
      "en": "Thanks, you too!",
      "ko": "고마워요, 그쪽도요!"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Did you find everything okay?",
    "ko": "찾으시는 건 다 찾으셨어요? (계산원 단골 질문)",
    "swaps": [
     {
      "en": "Yes, thank you.",
      "ko": "네, 고마워요. (대답)"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Do you want your receipt?",
    "ko": "영수증 드릴까요?",
    "swaps": [
     {
      "en": "No, thanks.",
      "ko": "아니요, 괜찮아요. (대답)"
     }
    ]
   }
  ]
 },
 {
  "day": 6,
  "title": "길 묻기",
  "enTitle": "Asking for Directions",
  "place": "새 동네에서 휴대폰 지도를 보며 우체국을 찾는데, 지나가던 사람이 말을 걸어요.",
  "roles": {
   "A": "지나가던 사람",
   "B": "나 (길을 찾는 사람)"
  },
  "tipA": "'Where is ~?' 하나로 어디든 물어볼 수 있어요. 방향을 들으면 그대로 따라 말해서 확인하세요.",
  "tipB": "상대가 길을 빠르게, 다른 표현(make a right = 오른쪽으로 돌기)으로 알려 줘요. 천천히 말해 달라고 한 뒤, 들은 걸 따라 말하며 확인하세요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! Are you looking for something?",
    "ko": "안녕하세요! 뭐 찾으세요?",
    "pr": "하이! 아- 유 루킹 퍼 썸띵?"
   },
   {
    "r": "B",
    "en": "Yes. Where is the post office?",
    "ko": "네. 우체국이 어디예요?",
    "pr": "예스. 웨어리즈 더 포우슷 오피스?",
    "nt": "⭐ Where is ~? 하나로 어디든 물어볼 수 있어요"
   },
   {
    "r": "A",
    "en": "Go straight and turn left at the light.",
    "ko": "쭉 가다가 신호등에서 왼쪽으로 도세요.",
    "pr": "고 스트레잇 앤 턴 레프트 앳 더 라잇."
   },
   {
    "r": "B",
    "en": "Turn left at the light?",
    "ko": "신호등에서 왼쪽이요?",
    "pr": "턴 레프트 앳 더 라잇?",
    "nt": "들은 걸 따라 말하면 확인이 돼요"
   },
   {
    "r": "A",
    "en": "Yes. It's next to the bank.",
    "ko": "네. 은행 옆에 있어요.",
    "pr": "예스. 잇츠 넥스 투 더 뱅크."
   },
   {
    "r": "B",
    "en": "Is it far from here?",
    "ko": "여기서 멀어요?",
    "pr": "이짓 파 프럼 히어?"
   },
   {
    "r": "A",
    "en": "No, it's about five minutes.",
    "ko": "아니요, 5분 정도 걸려요.",
    "pr": "노우, 잇츠 어바웃 파이브 미닛츠."
   },
   {
    "r": "B",
    "en": "Thank you so much!",
    "ko": "정말 고마워요!",
    "pr": "땡큐 쏘 머치!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi there. Do you need some help?",
    "ko": "안녕하세요. 도와드릴까요?",
    "pr": "하이 데어. 두유 니드 썸 헬프?"
   },
   {
    "r": "B",
    "en": "Yes, please. Where is the post office?",
    "ko": "네, 부탁해요. 우체국이 어디예요?",
    "pr": "예스, 플리즈. 웨어리즈 더 포우슷 오피스?"
   },
   {
    "r": "A",
    "en": "It's on Maple Street. Go two blocks and make a right.",
    "ko": "메이플 스트리트에 있어요. 두 블록 가서 오른쪽으로 도세요.",
    "pr": "잇츠 온 메이플 스트릿. 고 투 블락스 앤 메이커 라잇.",
    "nt": "make a right = turn right (오른쪽으로 돌기)"
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ 길 설명이 빠르면 꼭 이렇게"
   },
   {
    "r": "A",
    "en": "Sure. Two blocks. Then turn right.",
    "ko": "그럼요. 두 블록 가세요. 그다음 오른쪽으로 도세요.",
    "pr": "슈어. 투 블락스. 덴 턴 라잇."
   },
   {
    "r": "B",
    "en": "Two blocks, then right?",
    "ko": "두 블록 가서 오른쪽이요?",
    "pr": "투 블락스, 덴 라잇?"
   },
   {
    "r": "A",
    "en": "Yep, that's it. You can't miss it.",
    "ko": "네, 맞아요. 금방 보일 거예요.",
    "pr": "옙, 댓츠 잇. 유 캔트 미씻.",
    "nt": "You can't miss it = 찾기 쉽다는 뜻이에요"
   },
   {
    "r": "B",
    "en": "Thank you so much!",
    "ko": "정말 고마워요!",
    "pr": "땡큐 쏘 머치!"
   }
  ],
  "chunks": [
   {
    "en": "Where is the post office?",
    "ko": "우체국이 어디예요?",
    "star": true,
    "swaps": [
     {
      "en": "Where is the bus stop?",
      "ko": "버스 정류장이 어디예요?"
     },
     {
      "en": "Where is the restroom?",
      "ko": "화장실이 어디예요?"
     }
    ]
   },
   {
    "en": "Is it far from here?",
    "ko": "여기서 멀어요?",
    "swaps": [
     {
      "en": "Is it near here?",
      "ko": "여기서 가까워요?"
     }
    ]
   },
   {
    "en": "Turn left at the light.",
    "ko": "신호등에서 왼쪽으로 도세요.",
    "swaps": [
     {
      "en": "Turn right at the light.",
      "ko": "신호등에서 오른쪽으로 도세요."
     },
     {
      "en": "Turn left at the corner.",
      "ko": "모퉁이에서 왼쪽으로 도세요."
     }
    ]
   },
   {
    "en": "Go straight.",
    "ko": "쭉 가세요.",
    "swaps": [
     {
      "en": "Go two blocks.",
      "ko": "두 블록 가세요."
     }
    ]
   },
   {
    "en": "It's next to the bank.",
    "ko": "은행 옆에 있어요.",
    "swaps": [
     {
      "en": "It's across from the bank.",
      "ko": "은행 건너편에 있어요."
     },
     {
      "en": "It's behind the bank.",
      "ko": "은행 뒤에 있어요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Excuse me, can you help me?",
    "ko": "실례지만, 좀 도와주실래요? (먼저 말 걸 때)",
    "swaps": [
     {
      "en": "Excuse me, where is the library?",
      "ko": "실례지만, 도서관이 어디예요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "You can't miss it.",
    "ko": "금방 보일 거예요. (찾기 쉽다는 뜻)",
    "swaps": []
   }
  ]
 },
 {
  "day": 7,
  "title": "복습: 첫 주 종합",
  "enTitle": "Week 1 Review",
  "place": "아파트 로비에서 같은 건물에 사는 이웃을 처음 만나, 첫 주에 배운 문장을 총동원해요.",
  "roles": {
   "A": "이웃",
   "B": "나 (새로 이사 온 사람)"
  },
  "tipA": "Day 1·3·4 문장이 다 나와요. 막히는 문장이 있으면 그날 레슨으로 돌아가 한 번 더 보세요.",
  "tipB": "상대가 모르는 표현(grab coffee)을 쓰고 빠르게 말해요. 되묻기(Day 1), 길 묻기(Day 6), 번호 확인(Day 3)을 섞어서 대응해 보세요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! Are you new in the building?",
    "ko": "안녕하세요! 저희 건물에 새로 오셨어요?",
    "pr": "하이! 아- 유 뉴 인 더 빌딩?"
   },
   {
    "r": "B",
    "en": "Yes, we just moved in. I'm {ME}.",
    "ko": "네, 저희 막 이사 왔어요. 저는 {MEKO}.",
    "pr": "예스, 위 저슷 무브딘. 아임 {MEPR}.",
    "nt": "Day 1 복습"
   },
   {
    "r": "A",
    "en": "Nice to meet you! I'm Rachel. Let's have coffee sometime.",
    "ko": "반가워요! 전 레이철이에요. 언제 커피 한잔해요.",
    "pr": "나이스 투 미츄! 아임 레이철. 렛츠 해브 커피 썸타임."
   },
   {
    "r": "B",
    "en": "Sure! What's your number?",
    "ko": "좋아요! 번호가 어떻게 돼요?",
    "pr": "슈어! 왓츄어 넘버?",
    "nt": "⭐ Day 3 복습"
   },
   {
    "r": "A",
    "en": "It's 555-0163. What's yours?",
    "ko": "555-0163이에요. 그쪽 번호는요?",
    "pr": "잇츠 파이브 파이브 파이브, 오우 원 식스 쓰리. 왓츄어즈?"
   },
   {
    "r": "B",
    "en": "My number is 555-0187.",
    "ko": "제 번호는 555-0187이에요.",
    "pr": "마이 넘버 이즈 파이브 파이브 파이브, 오우 원 에잇 세븐."
   },
   {
    "r": "A",
    "en": "Got it. And how do you spell your last name?",
    "ko": "알겠어요. 그리고 성 철자가 어떻게 돼요?",
    "pr": "가릿. 앤 하우 두유 스펠 유어 래슷 네임?"
   },
   {
    "r": "B",
    "en": "It's Kim. K-I-M.",
    "ko": "김이에요. K, I, M.",
    "pr": "잇츠 킴. 케이, 아이, 엠.",
    "nt": "✏️ 내 이름 철자로 바꿔서 연습하세요 (Day 4 복습)"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi! Are you my new neighbor?",
    "ko": "안녕하세요! 새로 온 이웃이세요?",
    "pr": "하이! 아- 유 마이 뉴 네이버?"
   },
   {
    "r": "B",
    "en": "Yes, we just moved in. I'm {ME}.",
    "ko": "네, 저희 막 이사 왔어요. 저는 {MEKO}.",
    "pr": "예스, 위 저슷 무브딘. 아임 {MEPR}."
   },
   {
    "r": "A",
    "en": "Welcome! I'm Rachel. Let's grab coffee at Bean House sometime.",
    "ko": "환영해요! 전 레이철이에요. 언제 빈 하우스에서 커피 한잔해요.",
    "pr": "웰컴! 아임 레이철. 렛츠 그랩 커피 앳 빈 하우스 썸타임.",
    "nt": "grab coffee = 커피 한잔하다 (아주 흔한 표현)"
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ Day 1 되묻기 복습"
   },
   {
    "r": "A",
    "en": "Sure. Coffee at Bean House. It's a cafe on Oak Street.",
    "ko": "그럼요. 빈 하우스에서 커피요. 오크 스트리트에 있는 카페예요.",
    "pr": "슈어. 커피 앳 빈 하우스. 잇처 캐페이 온 오크 스트릿."
   },
   {
    "r": "B",
    "en": "Where is Oak Street? Is it far?",
    "ko": "오크 스트리트가 어디예요? 멀어요?",
    "pr": "웨어리즈 오크 스트릿? 이짓 파?",
    "nt": "Day 6 복습"
   },
   {
    "r": "A",
    "en": "No, it's two blocks from here. Here's my number: 555-0163.",
    "ko": "아니요, 여기서 두 블록이에요. 이거 제 번호예요. 555-0163.",
    "pr": "노우, 잇츠 투 블락스 프럼 히어. 히어즈 마이 넘버: 파이브 파이브 파이브, 오우 원 식스 쓰리."
   },
   {
    "r": "B",
    "en": "555-0163? Thank you so much!",
    "ko": "555-0163이요? 정말 고마워요!",
    "pr": "파이브 파이브 파이브, 오우 원 식스 쓰리? 땡큐 쏘 머치!"
   }
  ],
  "chunks": [
   {
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 말해 주실래요? (Day 1)",
    "star": true,
    "swaps": [
     {
      "en": "Sorry, can you speak slowly, please?",
      "ko": "죄송한데, 천천히 말해 주실래요?"
     },
     {
      "en": "Sorry, how much?",
      "ko": "죄송한데, 얼마라고요?"
     }
    ]
   },
   {
    "en": "Can I get an iced latte, please?",
    "ko": "아이스 라테 하나 주시겠어요? (Day 2)",
    "swaps": [
     {
      "en": "Can I get a bag, please?",
      "ko": "봉투 하나 주시겠어요?"
     },
     {
      "en": "Can I get your number?",
      "ko": "번호 좀 알려 줄래요?"
     }
    ]
   },
   {
    "en": "What's your number?",
    "ko": "번호가 어떻게 돼요? (Day 3)",
    "swaps": [
     {
      "en": "What's your last name?",
      "ko": "성이 뭐예요?"
     },
     {
      "en": "What's your email?",
      "ko": "이메일 주소가 뭐예요?"
     }
    ]
   },
   {
    "en": "Can I pay by card?",
    "ko": "카드로 계산해도 돼요? (Day 5)",
    "swaps": [
     {
      "en": "Can I pay in cash?",
      "ko": "현금으로 계산해도 돼요?"
     }
    ]
   },
   {
    "en": "Where is the post office?",
    "ko": "우체국이 어디예요? (Day 6)",
    "swaps": [
     {
      "en": "Where is Oak Street?",
      "ko": "오크 스트리트가 어디예요?"
     },
     {
      "en": "Where is the restroom?",
      "ko": "화장실이 어디예요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "How do you spell that?",
    "ko": "철자가 어떻게 돼요? (Day 4)",
    "swaps": [
     {
      "en": "It's K-I-M.",
      "ko": "K, I, M이에요. (대답)"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Let's grab coffee sometime!",
    "ko": "언제 커피 한잔해요!",
    "swaps": [
     {
      "en": "Let's have lunch sometime!",
      "ko": "언제 점심 같이 해요!"
     }
    ]
   }
  ]
 },
 {
  "day": 8,
  "title": "버스 타기",
  "enTitle": "Taking the Bus",
  "place": "버스 정류장에서 버스에 타면서 기사님께 시내 가는 버스가 맞는지 물어봐요.",
  "roles": {
   "A": "버스 기사",
   "B": "나 (승객)"
  },
  "tipA": "버스에 타자마자 쓰는 짧은 문장들이에요. 가고 싶은 곳 이름만 바꾸면 어디서든 쓸 수 있어요.",
  "tipB": "기사님이 '이 버스 아니에요'라고 해요. 숫자나 장소가 안 들리면 꼭 다시 물어보세요. 다시 들으면 대부분 알아들을 수 있어요.",
  "a": [
   {
    "r": "A",
    "en": "Good morning!",
    "ko": "좋은 아침이에요!",
    "pr": "굿 모닝!"
   },
   {
    "r": "B",
    "en": "Hi. Does this bus go downtown?",
    "ko": "안녕하세요. 이 버스 시내 가요?",
    "pr": "하이. 더즈 디스 버스 고우 다운타운?",
    "nt": "⭐ 타기 전에 꼭 물어보기"
   },
   {
    "r": "A",
    "en": "Yes, it does. It's two dollars.",
    "ko": "네, 가요. 2달러예요.",
    "pr": "예스, 잇 더즈. 잇츠 투 달러즈.",
    "nt": "미국 버스는 보통 앞문으로 타고, 탈 때 요금을 내요"
   },
   {
    "r": "B",
    "en": "Can I pay with a card?",
    "ko": "카드로 내도 돼요?",
    "pr": "캐나이 페이 위더 카드?"
   },
   {
    "r": "A",
    "en": "Sure. Just tap it here.",
    "ko": "그럼요. 여기에 대기만 하세요.",
    "pr": "슈어. 저슷 태핏 히어.",
    "nt": "tap = 카드를 단말기에 톡 대는 것"
   },
   {
    "r": "B",
    "en": "I'm going to Main Street.",
    "ko": "저 메인 스트리트 가요.",
    "pr": "아임 고잉 투 메인 스트릿."
   },
   {
    "r": "A",
    "en": "Okay. I'll tell you when we get there.",
    "ko": "알겠어요. 도착하면 알려 드릴게요.",
    "pr": "오케이. 아일 텔 유 웬 위 겟 데어."
   },
   {
    "r": "B",
    "en": "Thank you so much!",
    "ko": "정말 고마워요!",
    "pr": "땡큐 쏘 머치!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey, how's it going?",
    "ko": "안녕하세요, 잘 지내요?",
    "pr": "헤이, 하우즈 잇 고잉?"
   },
   {
    "r": "B",
    "en": "Hi. Does this bus go downtown?",
    "ko": "안녕하세요. 이 버스 시내 가요?",
    "pr": "하이. 더즈 디스 버스 고우 다운타운?"
   },
   {
    "r": "A",
    "en": "No, this one goes to the airport. You need the 12.",
    "ko": "아니요, 이건 공항 가요. 12번 타셔야 해요.",
    "pr": "노우, 디스 원 고우즈 투 디 에어포트. 유 니드 더 트웰브.",
    "nt": "처음 듣는 말! 'No'랑 숫자만 들려도 충분해요"
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 숫자가 안 들리면 바로 되묻기"
   },
   {
    "r": "A",
    "en": "This bus goes to the airport. Take bus 12.",
    "ko": "이 버스는 공항 가요. 12번 버스 타세요.",
    "pr": "디스 버스 고우즈 투 디 에어포트. 테익 버스 트웰브."
   },
   {
    "r": "B",
    "en": "Bus 12? Where is the bus stop?",
    "ko": "12번이요? 정류장이 어디예요?",
    "pr": "버스 트웰브? 웨어 이즈 더 버스 스탑?"
   },
   {
    "r": "A",
    "en": "Right over there, across the street.",
    "ko": "바로 저기, 길 건너편이에요.",
    "pr": "라잇 오버 데어, 어크로스 더 스트릿."
   },
   {
    "r": "B",
    "en": "Okay. Thank you so much!",
    "ko": "네. 정말 고마워요!",
    "pr": "오케이. 땡큐 쏘 머치!"
   }
  ],
  "chunks": [
   {
    "en": "Does this bus go downtown?",
    "ko": "이 버스 시내 가요?",
    "star": true,
    "swaps": [
     {
      "en": "Does this bus go to the airport?",
      "ko": "이 버스 공항 가요?"
     },
     {
      "en": "Does this bus go to Main Street?",
      "ko": "이 버스 메인 스트리트 가요?"
     }
    ]
   },
   {
    "en": "How much is it?",
    "ko": "얼마예요?",
    "swaps": [
     {
      "en": "How much is the fare?",
      "ko": "요금이 얼마예요?"
     },
     {
      "en": "How much is a day pass?",
      "ko": "1일권은 얼마예요?"
     }
    ]
   },
   {
    "en": "Can I pay with a card?",
    "ko": "카드로 내도 돼요?",
    "swaps": [
     {
      "en": "Can I pay with cash?",
      "ko": "현금으로 내도 돼요?"
     },
     {
      "en": "Can I pay with my phone?",
      "ko": "휴대폰으로 내도 돼요?"
     }
    ]
   },
   {
    "en": "I'm going to Main Street.",
    "ko": "저 메인 스트리트 가요.",
    "swaps": [
     {
      "en": "I'm going to the bank.",
      "ko": "저 은행 가요."
     },
     {
      "en": "I'm going to the library.",
      "ko": "저 도서관 가요."
     }
    ]
   },
   {
    "en": "Where is the bus stop?",
    "ko": "버스 정류장이 어디예요?",
    "swaps": [
     {
      "en": "Where is the train station?",
      "ko": "기차역이 어디예요?"
     },
     {
      "en": "Where do I get off?",
      "ko": "어디서 내려요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Is this seat taken?",
    "ko": "여기 자리 있어요?",
    "swaps": [
     {
      "en": "Can I sit here?",
      "ko": "여기 앉아도 돼요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Is this my stop?",
    "ko": "저 여기서 내리면 돼요?",
    "swaps": [
     {
      "en": "Is this Main Street?",
      "ko": "여기가 메인 스트리트예요?"
     }
    ]
   }
  ]
 },
 {
  "day": 9,
  "title": "은행 계좌 열기",
  "enTitle": "Opening a Bank Account",
  "place": "동네 은행에 가서 창구 직원에게 새 계좌를 만들고 싶다고 말해요.",
  "roles": {
   "A": "은행 직원",
   "B": "나 (손님)"
  },
  "tipA": "은행 갈 때는 여권을 꼭 챙기세요. \"I'd like to ~\"(~하고 싶어요)는 어디서나 쓰는 정중한 표현이에요.",
  "tipB": "직원이 길고 빠르게 물어봐요. 천천히 말해 달라고 하면 짧게 다시 말해 줘요. 핵심 단어(checking / savings)만 들리면 돼요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! How can I help you today?",
    "ko": "안녕하세요! 오늘 뭘 도와드릴까요?",
    "pr": "하이! 하우 캐나이 헬퓨 투데이?"
   },
   {
    "r": "B",
    "en": "Hi. I'd like to open a bank account.",
    "ko": "안녕하세요. 은행 계좌를 만들고 싶어요.",
    "pr": "하이. 아이드 라익 투 오우프너 뱅커카운트.",
    "nt": "⭐ I'd like to ~ = ~하고 싶어요 (정중하게)"
   },
   {
    "r": "A",
    "en": "Sure. Checking or savings?",
    "ko": "네. 입출금 계좌요, 저축 계좌요?",
    "pr": "슈어. 체킹 오어 세이빙즈?",
    "nt": "checking = 입출금(체크카드용), savings = 저축 계좌"
   },
   {
    "r": "B",
    "en": "Checking, please.",
    "ko": "입출금 계좌로 할게요.",
    "pr": "체킹, 플리즈."
   },
   {
    "r": "A",
    "en": "Great. Can I see your ID, please?",
    "ko": "좋아요. 신분증 좀 볼 수 있을까요?",
    "pr": "그레잇. 캐나이 씨 유어 아이디, 플리즈?",
    "nt": "미국 은행은 신분증(여권)이 꼭 필요해요"
   },
   {
    "r": "B",
    "en": "Here's my passport.",
    "ko": "여기 제 여권이요.",
    "pr": "히어즈 마이 패스포트."
   },
   {
    "r": "A",
    "en": "Thank you. And what's your full name?",
    "ko": "감사합니다. 성함이 어떻게 되세요?",
    "pr": "땡큐. 앤 왓츠 유어 풀 네임?"
   },
   {
    "r": "B",
    "en": "It's {ME} Kim.",
    "ko": "{MEKO}. 성은 김이고요.",
    "pr": "잇츠 {MEPR} 킴."
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Good afternoon. What can I do for you?",
    "ko": "안녕하세요. 뭘 도와드릴까요?",
    "pr": "굿 애프터눈. 왓 캐나이 두 포 유?"
   },
   {
    "r": "B",
    "en": "Hi. I'd like to open a bank account.",
    "ko": "안녕하세요. 은행 계좌를 만들고 싶어요.",
    "pr": "하이. 아이드 라익 투 오우프너 뱅커카운트.",
    "nt": "질문이 달라도 대답은 A랑 똑같아요"
   },
   {
    "r": "A",
    "en": "Okay. Do you want a checking account or a savings account?",
    "ko": "네. 입출금 계좌 원하세요, 저축 계좌 원하세요?",
    "pr": "오케이. 두 유 워너 체킹 어카운트 오어러 세이빙즈 어카운트?"
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ 빠르면 천천히 말해 달라고 하기"
   },
   {
    "r": "A",
    "en": "Sure. Checking... or savings?",
    "ko": "그럼요. 입출금... 아니면 저축이요?",
    "pr": "슈어. 체킹... 오어 세이빙즈?"
   },
   {
    "r": "B",
    "en": "Checking, please.",
    "ko": "입출금 계좌로 할게요.",
    "pr": "체킹, 플리즈."
   },
   {
    "r": "A",
    "en": "Perfect. I just need a photo ID.",
    "ko": "좋아요. 사진 있는 신분증만 있으면 돼요.",
    "pr": "퍼펙트. 아이 저슷 니더 포토 아이디.",
    "nt": "photo ID = 사진 있는 신분증 (여권, 운전면허증)"
   },
   {
    "r": "B",
    "en": "Here's my passport.",
    "ko": "여기 제 여권이요.",
    "pr": "히어즈 마이 패스포트."
   }
  ],
  "chunks": [
   {
    "en": "I'd like to open a bank account.",
    "ko": "은행 계좌를 만들고 싶어요.",
    "star": true,
    "swaps": [
     {
      "en": "I'd like to open a savings account.",
      "ko": "저축 계좌를 만들고 싶어요."
     },
     {
      "en": "I'd like to send money to Korea.",
      "ko": "한국으로 송금하고 싶어요."
     }
    ]
   },
   {
    "en": "Checking, please.",
    "ko": "입출금 계좌로 할게요.",
    "swaps": [
     {
      "en": "Savings, please.",
      "ko": "저축 계좌로 할게요."
     },
     {
      "en": "Both, please.",
      "ko": "둘 다 할게요."
     }
    ]
   },
   {
    "en": "Here's my passport.",
    "ko": "여기 제 여권이요.",
    "swaps": [
     {
      "en": "Here's my ID.",
      "ko": "여기 제 신분증이요."
     },
     {
      "en": "Here's my card.",
      "ko": "여기 제 카드요."
     }
    ]
   },
   {
    "en": "My last name is Kim.",
    "ko": "제 성은 김이에요.",
    "swaps": [
     {
      "en": "My first name is {ME}.",
      "ko": "제 이름은 {MEKO}."
     },
     {
      "en": "My full name is {ME} Kim.",
      "ko": "제 이름은 김{MEKO}."
     }
    ]
   },
   {
    "en": "I need a debit card.",
    "ko": "체크카드가 필요해요.",
    "swaps": [
     {
      "en": "I need a new card.",
      "ko": "새 카드가 필요해요."
     },
     {
      "en": "I need some help.",
      "ko": "도움이 좀 필요해요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Is there a monthly fee?",
    "ko": "매달 내는 수수료가 있어요?",
    "swaps": [
     {
      "en": "Is there a fee?",
      "ko": "수수료 있어요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Checking or savings?",
    "ko": "입출금이요, 저축이요? (직원이 자주 묻는 말)",
    "swaps": []
   }
  ]
 },
 {
  "day": 10,
  "title": "휴대폰 개통",
  "enTitle": "Getting a Phone Plan",
  "place": "휴대폰 매장에 가서 한국에서 가져온 폰에 쓸 요금제와 유심을 신청해요.",
  "roles": {
   "A": "휴대폰 매장 직원",
   "B": "나 (손님)"
  },
  "tipA": "\"I need ~, please.\"(~가 필요해요)만 알면 매장에서 원하는 걸 다 말할 수 있어요. 이름 철자는 4일차처럼 한 글자씩 말해 주세요.",
  "tipB": "직원이 모르는 단어(unlocked)를 써요. 단어를 그대로 따라 말하고 \"What does ~ mean?\"으로 물어보면 쉽게 설명해 줘요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! What can I help you with?",
    "ko": "안녕하세요! 뭘 도와드릴까요?",
    "pr": "하이! 왓 캐나이 헬퓨 위드?"
   },
   {
    "r": "B",
    "en": "I need a phone plan, please.",
    "ko": "휴대폰 요금제가 필요해요.",
    "pr": "아이 니더 폰 플랜, 플리즈.",
    "nt": "⭐ I need ~, please = ~가 필요해요"
   },
   {
    "r": "A",
    "en": "Sure. Do you have a phone?",
    "ko": "네. 휴대폰은 있으세요?",
    "pr": "슈어. 두 유 해버 폰?"
   },
   {
    "r": "B",
    "en": "Yes. I just need a SIM card.",
    "ko": "네. 유심만 있으면 돼요.",
    "pr": "예스. 아이 저슷 니더 씸 카드.",
    "nt": "한국의 '유심'을 미국에선 SIM card(씸 카드)라고 해요"
   },
   {
    "r": "A",
    "en": "Okay. This plan is forty dollars a month.",
    "ko": "네. 이 요금제는 한 달에 40달러예요.",
    "pr": "오케이. 디스 플랜 이즈 포리 달러즈 어 먼쓰."
   },
   {
    "r": "B",
    "en": "Does it have unlimited data?",
    "ko": "데이터 무제한이에요?",
    "pr": "더짓 해브 언리미티드 데이러?"
   },
   {
    "r": "A",
    "en": "Yes, it does. Can I get your name?",
    "ko": "네, 무제한이에요. 성함이 어떻게 되세요?",
    "pr": "예스, 잇 더즈. 캐나이 겟 유어 네임?"
   },
   {
    "r": "B",
    "en": "It's {ME} Kim. K-I-M.",
    "ko": "{MEKO}. 성은 김, K-I-M이에요.",
    "pr": "잇츠 {MEPR} 킴. 케이-아이-엠.",
    "nt": "4일차에 배운 철자 말하기 그대로!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey! Are you looking for a new phone today?",
    "ko": "안녕하세요! 오늘 새 휴대폰 보러 오셨어요?",
    "pr": "헤이! 아- 유 루킹 포러 뉴 폰 투데이?",
    "nt": "새 폰 사러 왔냐고 물어요. No 하고 필요한 걸 말하면 돼요"
   },
   {
    "r": "B",
    "en": "No. I need a phone plan, please.",
    "ko": "아니요. 휴대폰 요금제가 필요해요.",
    "pr": "노우. 아이 니더 폰 플랜, 플리즈."
   },
   {
    "r": "A",
    "en": "Got it. Is your phone unlocked?",
    "ko": "알겠어요. 휴대폰이 통신사 잠금 해제된 거예요?",
    "pr": "갓 잇. 이즈 유어 폰 언락트?"
   },
   {
    "r": "B",
    "en": "Sorry? What does 'unlocked' mean?",
    "ko": "네? 'unlocked'가 무슨 뜻이에요?",
    "pr": "쏘리? 왓 더즈 언락트 민?",
    "nt": "⭐ 모르는 단어는 What does ~ mean?"
   },
   {
    "r": "A",
    "en": "It means it works with any company.",
    "ko": "어느 통신사에서나 쓸 수 있다는 뜻이에요.",
    "pr": "잇 민즈 잇 웍스 위드 애니 컴퍼니."
   },
   {
    "r": "B",
    "en": "Yes. I just need a SIM card.",
    "ko": "네. 유심만 있으면 돼요.",
    "pr": "예스. 아이 저슷 니더 씸 카드."
   },
   {
    "r": "A",
    "en": "Great. Our basic plan is forty-five a month, plus tax.",
    "ko": "좋아요. 기본 요금제는 한 달에 45달러고, 세금은 별도예요.",
    "pr": "그레잇. 아워 베이식 플랜 이즈 포리파이브 어 먼쓰, 플러스 택스.",
    "nt": "plus tax = 세금 별도. 미국은 가격표에 세금이 빠져 있어요"
   },
   {
    "r": "B",
    "en": "Okay. I'll take it. Thank you.",
    "ko": "네. 그걸로 할게요. 고마워요.",
    "pr": "오케이. 아일 테이킷. 땡큐."
   }
  ],
  "chunks": [
   {
    "en": "I need a phone plan, please.",
    "ko": "휴대폰 요금제가 필요해요.",
    "star": true,
    "swaps": [
     {
      "en": "I need a SIM card, please.",
      "ko": "유심이 필요해요."
     },
     {
      "en": "I need a new phone, please.",
      "ko": "새 휴대폰이 필요해요."
     }
    ]
   },
   {
    "en": "Does it have unlimited data?",
    "ko": "데이터 무제한이에요?",
    "swaps": [
     {
      "en": "Does it have international calling?",
      "ko": "국제전화도 돼요?"
     },
     {
      "en": "Does it have a contract?",
      "ko": "약정이 있어요?"
     }
    ]
   },
   {
    "en": "How much is it a month?",
    "ko": "한 달에 얼마예요?",
    "swaps": [
     {
      "en": "How much is it a year?",
      "ko": "1년에 얼마예요?"
     },
     {
      "en": "How much is the phone?",
      "ko": "휴대폰은 얼마예요?"
     }
    ]
   },
   {
    "en": "I'll take it.",
    "ko": "그걸로 할게요.",
    "swaps": [
     {
      "en": "I'll take this one.",
      "ko": "이걸로 할게요."
     },
     {
      "en": "I'll think about it.",
      "ko": "생각해 볼게요."
     }
    ]
   },
   {
    "en": "What does 'unlocked' mean?",
    "ko": "'unlocked'가 무슨 뜻이에요?",
    "swaps": [
     {
      "en": "What does 'plus tax' mean?",
      "ko": "'plus tax'가 무슨 뜻이에요?"
     },
     {
      "en": "What does this mean?",
      "ko": "이게 무슨 뜻이에요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Is tax included?",
    "ko": "세금 포함이에요?",
    "swaps": [
     {
      "en": "Is that plus tax?",
      "ko": "그거 세금 별도예요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Is it month-to-month?",
    "ko": "약정 없이 한 달 단위예요?",
    "swaps": [
     {
      "en": "Is it prepaid?",
      "ko": "선불 요금제예요?"
     }
    ]
   }
  ]
 },
 {
  "day": 11,
  "title": "집 보러 가기",
  "enTitle": "Apartment Viewing",
  "place": "임시 숙소에서 지내면서, 오래 살 아파트를 보러 가 임대 담당자에게 이것저것 물어봐요.",
  "roles": {
   "A": "아파트 임대 담당자",
   "B": "나 (집 구하는 사람)"
  },
  "tipA": "집 볼 때 꼭 물어볼 세 가지: 월세(rent), 공과금 포함인지(utilities), 언제 들어갈 수 있는지. 이 문장들만 외워 가세요.",
  "tipB": "담당자가 숫자를 빠르게 말해요. 돈 이야기는 확실히 알아들을 때까지 되물어도 괜찮아요. 미국 사람들도 다 그렇게 해요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! Are you here to see the apartment?",
    "ko": "안녕하세요! 집 보러 오셨어요?",
    "pr": "하이! 아- 유 히어 투 씨 디 아파트먼트?"
   },
   {
    "r": "B",
    "en": "Yes. Can we look around?",
    "ko": "네. 둘러봐도 될까요?",
    "pr": "예스. 캔 위 룩 어라운드?"
   },
   {
    "r": "A",
    "en": "Of course. This is the living room.",
    "ko": "물론이죠. 여기가 거실이에요.",
    "pr": "어브 코스. 디스 이즈 더 리빙 룸."
   },
   {
    "r": "B",
    "en": "It's nice. How much is the rent?",
    "ko": "좋네요. 월세가 얼마예요?",
    "pr": "잇츠 나이스. 하우 머치 이즈 더 렌트?",
    "nt": "⭐ 집 구할 때 제일 먼저 묻는 말"
   },
   {
    "r": "A",
    "en": "It's fifteen hundred a month.",
    "ko": "한 달에 1,500달러예요.",
    "pr": "잇츠 피프틴 헌드레드 어 먼쓰.",
    "nt": "fifteen hundred = 1,500. 미국은 큰 숫자를 이렇게 자주 말해요"
   },
   {
    "r": "B",
    "en": "Are utilities included?",
    "ko": "공과금 포함이에요?",
    "pr": "아- 유틸리티즈 인클루디드?",
    "nt": "utilities = 전기·수도·가스 같은 공과금"
   },
   {
    "r": "A",
    "en": "Only water. Electricity is extra.",
    "ko": "수도만요. 전기는 따로 내셔야 해요.",
    "pr": "오운리 워러. 일렉트리시티 이즈 엑스트라."
   },
   {
    "r": "B",
    "en": "Okay. We'll think about it. Thank you!",
    "ko": "네. 생각해 볼게요. 감사합니다!",
    "pr": "오케이. 윌 띵커바웃 잇. 땡큐!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hello! You're here for the two-bedroom, right?",
    "ko": "안녕하세요! 방 두 개짜리 집 보러 오셨죠?",
    "pr": "헬로우! 유어 히어 포 더 투베드룸, 라잇?"
   },
   {
    "r": "B",
    "en": "Yes. Can we look around?",
    "ko": "네. 둘러봐도 될까요?",
    "pr": "예스. 캔 위 룩 어라운드?"
   },
   {
    "r": "A",
    "en": "Sure, go ahead. The kitchen was just remodeled.",
    "ko": "그럼요, 둘러보세요. 부엌은 얼마 전에 새로 고쳤어요.",
    "pr": "슈어, 고우 어헤드. 더 키친 워즈 저슷 리마들드.",
    "nt": "처음 듣는 말! 다 몰라도 대화는 이어가면 돼요"
   },
   {
    "r": "B",
    "en": "It's nice. How much is the rent?",
    "ko": "좋네요. 월세가 얼마예요?",
    "pr": "잇츠 나이스. 하우 머치 이즈 더 렌트?"
   },
   {
    "r": "A",
    "en": "It's fourteen fifty, and there's a one-month deposit.",
    "ko": "1,450달러고, 보증금은 한 달 치예요.",
    "pr": "잇츠 포틴 피프티, 앤 데어즈 어 원먼쓰 디파짓."
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 돈 이야기는 확실히 알아들을 때까지 되묻기"
   },
   {
    "r": "A",
    "en": "Rent is fourteen fifty. The deposit is the same.",
    "ko": "월세는 1,450달러예요. 보증금도 같은 금액이에요.",
    "pr": "렌트 이즈 포틴 피프티. 더 디파짓 이즈 더 세임.",
    "nt": "fourteen fifty = 1,450 / deposit = 보증금"
   },
   {
    "r": "B",
    "en": "Okay. When can we move in?",
    "ko": "네. 언제 들어올 수 있어요?",
    "pr": "오케이. 웬 캔 위 무빈?"
   }
  ],
  "chunks": [
   {
    "en": "How much is the rent?",
    "ko": "월세가 얼마예요?",
    "star": true,
    "swaps": [
     {
      "en": "How much is the deposit?",
      "ko": "보증금이 얼마예요?"
     },
     {
      "en": "How much is parking?",
      "ko": "주차는 얼마예요?"
     }
    ]
   },
   {
    "en": "Are utilities included?",
    "ko": "공과금 포함이에요?",
    "swaps": [
     {
      "en": "Is water included?",
      "ko": "수도 요금 포함이에요?"
     },
     {
      "en": "Is parking included?",
      "ko": "주차 포함이에요?"
     }
    ]
   },
   {
    "en": "Can we look around?",
    "ko": "둘러봐도 될까요?",
    "swaps": [
     {
      "en": "Can we see the bedroom?",
      "ko": "침실 좀 봐도 될까요?"
     },
     {
      "en": "Can we see the kitchen?",
      "ko": "부엌 좀 봐도 될까요?"
     }
    ]
   },
   {
    "en": "When can we move in?",
    "ko": "언제 들어올 수 있어요?",
    "swaps": [
     {
      "en": "When can I move in?",
      "ko": "저 언제 들어올 수 있어요?"
     },
     {
      "en": "When can we sign the lease?",
      "ko": "임대 계약서는 언제 쓸 수 있어요?"
     }
    ]
   },
   {
    "en": "We'll think about it.",
    "ko": "생각해 볼게요.",
    "swaps": [
     {
      "en": "We'll take it.",
      "ko": "이 집으로 할게요."
     },
     {
      "en": "We'll call you tomorrow.",
      "ko": "내일 전화드릴게요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Is there a washer and dryer?",
    "ko": "세탁기랑 건조기 있어요?",
    "swaps": [
     {
      "en": "Is there parking?",
      "ko": "주차장 있어요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Fifteen hundred a month.",
    "ko": "한 달에 1,500달러 (큰 숫자 읽는 법)",
    "swaps": [
     {
      "en": "Fourteen fifty a month.",
      "ko": "한 달에 1,450달러"
     }
    ]
   }
  ]
 },
 {
  "day": 12,
  "title": "집주인에게 수리 요청",
  "enTitle": "Calling the Landlord",
  "place": "새 아파트로 이사했는데 부엌 싱크대에서 물이 새서 집주인에게 전화해요.",
  "roles": {
   "A": "집주인",
   "B": "나 (세입자)"
  },
  "tipA": "전화할 땐 \"This is ~ from apartment ~\"로 누구인지 먼저 말해요. 고장 난 곳 + \"Can you fix it, please?\"면 끝이에요.",
  "tipB": "집주인이 급하게 해야 할 일을 빨리 말해요. 천천히 말해 달라고 하면 중요한 부분만 다시 말해 줘요.",
  "a": [
   {
    "r": "A",
    "en": "Hello, this is Carlos.",
    "ko": "여보세요, 카를로스예요.",
    "pr": "헬로우, 디스 이즈 칼로스."
   },
   {
    "r": "B",
    "en": "Hi, this is {ME} from apartment 4B.",
    "ko": "안녕하세요, 4B호 {MEKO}.",
    "pr": "하이, 디스 이즈 {MEPR} 프럼 아파트먼트 포비.",
    "nt": "전화할 땐 I'm 대신 This is ~ 라고 해요"
   },
   {
    "r": "A",
    "en": "Oh, hi! What's going on?",
    "ko": "아, 안녕하세요! 무슨 일이에요?",
    "pr": "오, 하이! 왓츠 고잉 온?"
   },
   {
    "r": "B",
    "en": "My kitchen sink is leaking.",
    "ko": "부엌 싱크대에서 물이 새요.",
    "pr": "마이 키친 씽크 이즈 리킹.",
    "nt": "⭐ ~ is leaking = ~에서 물이 새요"
   },
   {
    "r": "A",
    "en": "Oh no. Is it bad?",
    "ko": "저런. 심해요?",
    "pr": "오 노우. 이즈 잇 배드?"
   },
   {
    "r": "B",
    "en": "A little. Can you fix it, please?",
    "ko": "조금요. 고쳐 주실 수 있어요?",
    "pr": "어 리를. 캐뉴 픽싯, 플리즈?"
   },
   {
    "r": "A",
    "en": "Sure. I can come tomorrow morning.",
    "ko": "그럼요. 내일 아침에 갈게요.",
    "pr": "슈어. 아이 캔 컴 투마로우 모닝.",
    "nt": "미국 월세집은 보통 수리를 집주인이 해 줘요"
   },
   {
    "r": "B",
    "en": "Great. Thank you so much!",
    "ko": "좋아요. 정말 고마워요!",
    "pr": "그레잇. 땡큐 쏘 머치!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hello, Carlos speaking.",
    "ko": "여보세요, 카를로스입니다.",
    "pr": "헬로우, 칼로스 스피킹."
   },
   {
    "r": "B",
    "en": "Hi, this is {ME} from apartment 4B.",
    "ko": "안녕하세요, 4B호 {MEKO}.",
    "pr": "하이, 디스 이즈 {MEPR} 프럼 아파트먼트 포비."
   },
   {
    "r": "A",
    "en": "Hi there. Is everything okay with the place?",
    "ko": "안녕하세요. 집에 별일 없죠?",
    "pr": "하이 데어. 이즈 에브리띵 오케이 위더 플레이스?"
   },
   {
    "r": "B",
    "en": "No. My kitchen sink is leaking.",
    "ko": "아니요. 부엌 싱크대에서 물이 새요.",
    "pr": "노우. 마이 키친 씽크 이즈 리킹."
   },
   {
    "r": "A",
    "en": "Okay. Turn off the water under the sink for now.",
    "ko": "알겠어요. 일단 싱크대 밑에 있는 물 밸브를 잠가 두세요.",
    "pr": "오케이. 턴 오프 더 워러 언더 더 씽크 포 나우.",
    "nt": "처음 듣는 긴 말! 되묻기로 해결해요 ↓"
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ 전화는 더 안 들려요. 편하게 되물으세요"
   },
   {
    "r": "A",
    "en": "Sure. Turn off the water. I'll send a plumber today.",
    "ko": "그럼요. 물을 잠그세요. 오늘 배관공 보낼게요.",
    "pr": "슈어. 턴 오프 더 워러. 아일 센더 플러머 투데이.",
    "nt": "plumber(플러머) = 배관공. b는 소리 안 나요"
   },
   {
    "r": "B",
    "en": "Okay. Thank you so much!",
    "ko": "알겠어요. 정말 고마워요!",
    "pr": "오케이. 땡큐 쏘 머치!"
   }
  ],
  "chunks": [
   {
    "en": "My kitchen sink is leaking.",
    "ko": "부엌 싱크대에서 물이 새요.",
    "star": true,
    "swaps": [
     {
      "en": "My toilet is leaking.",
      "ko": "변기에서 물이 새요."
     },
     {
      "en": "The ceiling is leaking.",
      "ko": "천장에서 물이 새요."
     }
    ]
   },
   {
    "en": "Can you fix it, please?",
    "ko": "고쳐 주실 수 있어요?",
    "swaps": [
     {
      "en": "Can you check it, please?",
      "ko": "한번 봐 주실 수 있어요?"
     },
     {
      "en": "Can you come today, please?",
      "ko": "오늘 와 주실 수 있어요?"
     }
    ]
   },
   {
    "en": "The heater doesn't work.",
    "ko": "히터가 안 돼요.",
    "swaps": [
     {
      "en": "The AC doesn't work.",
      "ko": "에어컨이 안 돼요."
     },
     {
      "en": "The washer doesn't work.",
      "ko": "세탁기가 안 돼요."
     }
    ]
   },
   {
    "en": "I'm calling about the sink.",
    "ko": "싱크대 때문에 전화드렸어요.",
    "swaps": [
     {
      "en": "I'm calling about my apartment.",
      "ko": "저희 집 일로 전화드렸어요."
     },
     {
      "en": "I'm calling about the heater.",
      "ko": "히터 때문에 전화드렸어요."
     }
    ]
   },
   {
    "en": "What time can you come?",
    "ko": "몇 시에 오실 수 있어요?",
    "swaps": [
     {
      "en": "What day can you come?",
      "ko": "무슨 요일에 오실 수 있어요?"
     },
     {
      "en": "What time is good for you?",
      "ko": "몇 시가 편하세요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "It's an emergency.",
    "ko": "급한 일이에요.",
    "swaps": [
     {
      "en": "It's not an emergency.",
      "ko": "급한 건 아니에요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Turn off the water.",
    "ko": "물 잠그세요. (집주인이 자주 하는 말)",
    "swaps": [
     {
      "en": "Turn off the power.",
      "ko": "전기 차단기를 내리세요."
     }
    ]
   }
  ]
 },
 {
  "day": 13,
  "title": "택배 받기",
  "enTitle": "Package Delivery",
  "place": "집에 있는데 택배 기사가 문을 두드려요. 서명이 필요한 택배예요.",
  "roles": {
   "A": "택배 기사",
   "B": "나 (택배 받는 사람)"
  },
  "tipA": "택배 기사와의 대화는 짧아요. \"That's me.\"와 \"Where do I sign?\" 두 문장이면 충분해요.",
  "tipB": "기사가 처음 듣는 말(adult signature)을 해요. 모르는 단어를 그대로 따라 하며 뜻을 물어보세요. 신분증은 은행에서 쓴 \"Here's my ~\"로 건네면 돼요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! I have a package for Kim.",
    "ko": "안녕하세요! 김 씨 앞으로 택배 왔어요.",
    "pr": "하이! 아이 해버 패키지 포 킴."
   },
   {
    "r": "B",
    "en": "Yes, that's me.",
    "ko": "네, 저예요.",
    "pr": "예스, 댓츠 미.",
    "nt": "⭐ 이름을 부르면 That's me!"
   },
   {
    "r": "A",
    "en": "Great. I need a signature here.",
    "ko": "좋아요. 여기 서명이 필요해요.",
    "pr": "그레잇. 아이 니더 시그니처 히어.",
    "nt": "미국은 보통 택배를 문 앞에 두고 가요. 비싼 물건 등 일부만 서명 받아요"
   },
   {
    "r": "B",
    "en": "Okay. Where do I sign?",
    "ko": "네. 어디에 서명해요?",
    "pr": "오케이. 웨어 두 아이 싸인?"
   },
   {
    "r": "A",
    "en": "Right here, on the screen.",
    "ko": "바로 여기, 화면에요.",
    "pr": "라잇 히어, 온 더 스크린."
   },
   {
    "r": "B",
    "en": "Like this?",
    "ko": "이렇게요?",
    "pr": "라익 디스?"
   },
   {
    "r": "A",
    "en": "Perfect. Here you go. Have a good one!",
    "ko": "좋아요. 여기 있어요. 좋은 하루 보내세요!",
    "pr": "퍼펙트. 히어 유 고우. 해버 굿 원!",
    "nt": "Have a good one! = 좋은 하루 보내요 (아주 흔한 인사)"
   },
   {
    "r": "B",
    "en": "Thank you. You too!",
    "ko": "고마워요. 그쪽도요!",
    "pr": "땡큐. 유 투!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi, delivery for Kim? Apartment 4B?",
    "ko": "안녕하세요, 김 씨 택배요? 4B호 맞으세요?",
    "pr": "하이, 딜리버리 포 킴? 아파트먼트 포비?"
   },
   {
    "r": "B",
    "en": "Yes, that's me.",
    "ko": "네, 저예요.",
    "pr": "예스, 댓츠 미."
   },
   {
    "r": "A",
    "en": "This one needs an adult signature. Can I see some ID?",
    "ko": "이건 성인 서명이 필요해요. 신분증 좀 보여 주실래요?",
    "pr": "디스 원 니즈 언 어덜트 시그니처. 캐나이 씨 썸 아이디?",
    "nt": "처음 듣는 말! ID(신분증)만 들려도 성공"
   },
   {
    "r": "B",
    "en": "Sorry? What does 'adult signature' mean?",
    "ko": "네? 'adult signature'가 무슨 뜻이에요?",
    "pr": "쏘리? 왓 더즈 어덜트 시그니처 민?",
    "nt": "⭐ 모르는 말은 그대로 따라 하며 뜻 묻기"
   },
   {
    "r": "A",
    "en": "It means someone over 21 has to sign.",
    "ko": "21살 이상인 사람이 서명해야 한다는 뜻이에요.",
    "pr": "잇 민즈 썸원 오버 트웨니원 해즈 투 싸인."
   },
   {
    "r": "B",
    "en": "Oh, okay. Here's my ID.",
    "ko": "아, 알겠어요. 여기 제 신분증이요.",
    "pr": "오, 오케이. 히어즈 마이 아이디.",
    "nt": "9일차 은행에서 쓴 Here's my ~ 그대로!"
   },
   {
    "r": "A",
    "en": "Thanks. Sign right here, please.",
    "ko": "감사해요. 여기에 서명해 주세요.",
    "pr": "땡스. 싸인 라잇 히어, 플리즈."
   },
   {
    "r": "B",
    "en": "Okay. Thank you. Have a good day!",
    "ko": "네. 고마워요. 좋은 하루 보내세요!",
    "pr": "오케이. 땡큐. 해버 굿 데이!"
   }
  ],
  "chunks": [
   {
    "en": "Yes, that's me.",
    "ko": "네, 저예요.",
    "star": true,
    "swaps": [
     {
      "en": "No, that's not me.",
      "ko": "아니요, 저 아니에요."
     },
     {
      "en": "That's my neighbor.",
      "ko": "그건 제 이웃이에요."
     }
    ]
   },
   {
    "en": "Where do I sign?",
    "ko": "어디에 서명해요?",
    "swaps": [
     {
      "en": "Where do I pay?",
      "ko": "어디서 계산해요?"
     },
     {
      "en": "Where do I go?",
      "ko": "어디로 가면 돼요?"
     }
    ]
   },
   {
    "en": "Like this?",
    "ko": "이렇게요?",
    "swaps": [
     {
      "en": "Here?",
      "ko": "여기요?"
     },
     {
      "en": "Is this okay?",
      "ko": "이거 괜찮아요?"
     }
    ]
   },
   {
    "en": "I'm waiting for a package.",
    "ko": "택배 기다리고 있어요.",
    "swaps": [
     {
      "en": "I didn't get my package.",
      "ko": "택배를 못 받았어요."
     },
     {
      "en": "I'm waiting for a letter.",
      "ko": "편지 기다리고 있어요."
     }
    ]
   },
   {
    "en": "You too!",
    "ko": "그쪽도요!",
    "swaps": [
     {
      "en": "Thanks, you too!",
      "ko": "고마워요, 그쪽도요!"
     },
     {
      "en": "Same to you!",
      "ko": "그쪽도요! (같은 뜻의 다른 표현)"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Can you leave it at the door?",
    "ko": "문 앞에 두고 가 주실래요?",
    "swaps": [
     {
      "en": "Can you leave it with my neighbor?",
      "ko": "이웃한테 맡겨 주실래요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Have a good one!",
    "ko": "좋은 하루 보내요! (헤어질 때 흔한 인사)",
    "swaps": []
   }
  ]
 },
 {
  "day": 14,
  "title": "복습: 둘째 주 종합",
  "enTitle": "Week 2 Review",
  "place": "우체국에 가서 한국에 있는 가족에게 소포를 보내요.",
  "roles": {
   "A": "우체국 직원",
   "B": "나 (손님)"
  },
  "tipA": "이번 주에 배운 문장들이 우체국에서도 그대로 통해요. 메모에서 몇 일차 문장인지 확인하며 연습하세요.",
  "tipB": "직원이 처음 듣는 단어(fragile)를 써요. 10일차처럼 \"What does ~ mean?\"으로 물어보면 쉬운 말로 설명해 줘요.",
  "a": [
   {
    "r": "A",
    "en": "Next, please! How can I help you?",
    "ko": "다음 분이요! 뭘 도와드릴까요?",
    "pr": "넥스트, 플리즈! 하우 캐나이 헬퓨?"
   },
   {
    "r": "B",
    "en": "Hi. I'd like to send this to Korea.",
    "ko": "안녕하세요. 이거 한국으로 보내고 싶어요.",
    "pr": "하이. 아이드 라익 투 센 디스 투 커리아.",
    "nt": "⭐ 9일차 I'd like to ~ 복습"
   },
   {
    "r": "A",
    "en": "Sure. It's forty-two dollars.",
    "ko": "네. 42달러예요.",
    "pr": "슈어. 잇츠 포리투 달러즈."
   },
   {
    "r": "B",
    "en": "Can I pay with a card?",
    "ko": "카드로 내도 돼요?",
    "pr": "캐나이 페이 위더 카드?",
    "nt": "8일차 버스에서 쓴 문장 그대로"
   },
   {
    "r": "A",
    "en": "Of course. I need your name and address here.",
    "ko": "물론이죠. 여기에 이름이랑 주소를 적어 주세요.",
    "pr": "어브 코스. 아이 니듀어 네임 앤 애드레스 히어."
   },
   {
    "r": "B",
    "en": "Okay. Where do I sign?",
    "ko": "네. 서명은 어디에 해요?",
    "pr": "오케이. 웨어 두 아이 싸인?",
    "nt": "13일차 택배 받을 때 쓴 문장"
   },
   {
    "r": "A",
    "en": "Right here, at the bottom.",
    "ko": "바로 여기, 맨 아래요.",
    "pr": "라잇 히어, 앳 더 바럼."
   },
   {
    "r": "B",
    "en": "Thank you so much!",
    "ko": "정말 고마워요!",
    "pr": "땡큐 쏘 머치!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi. What are you mailing today?",
    "ko": "안녕하세요. 오늘 뭐 보내세요?",
    "pr": "하이. 와러유 메일링 투데이?"
   },
   {
    "r": "B",
    "en": "Hi. I'd like to send this to Korea.",
    "ko": "안녕하세요. 이거 한국으로 보내고 싶어요.",
    "pr": "하이. 아이드 라익 투 센 디스 투 커리아."
   },
   {
    "r": "A",
    "en": "Okay. Anything fragile or liquid inside?",
    "ko": "네. 안에 깨지기 쉬운 거나 액체 있어요?",
    "pr": "오케이. 애니띵 프래절 오어 리퀴드 인사이드?",
    "nt": "처음 듣는 단어가 나와도 괜찮아요 ↓"
   },
   {
    "r": "B",
    "en": "Sorry? What does 'fragile' mean?",
    "ko": "네? 'fragile'이 무슨 뜻이에요?",
    "pr": "쏘리? 왓 더즈 프래절 민?",
    "nt": "⭐ 10일차 What does ~ mean? 복습"
   },
   {
    "r": "A",
    "en": "It means easy to break, like glass.",
    "ko": "유리처럼 깨지기 쉽다는 뜻이에요.",
    "pr": "잇 민즈 이지 투 브레익, 라익 글래스."
   },
   {
    "r": "B",
    "en": "No, nothing. How much is it?",
    "ko": "아니요, 없어요. 얼마예요?",
    "pr": "노우, 나띵. 하우 머치 이즈 잇?"
   },
   {
    "r": "A",
    "en": "That's forty-two fifty.",
    "ko": "42달러 50센트예요.",
    "pr": "댓츠 포리투 피프티.",
    "nt": "forty-two fifty = 42.50달러. 달러와 센트를 붙여 말해요"
   },
   {
    "r": "B",
    "en": "Okay. Here's my card.",
    "ko": "네. 여기 제 카드요.",
    "pr": "오케이. 히어즈 마이 카드."
   }
  ],
  "chunks": [
   {
    "en": "How much is it?",
    "ko": "얼마예요?",
    "star": true,
    "swaps": [
     {
      "en": "How much is the rent?",
      "ko": "월세가 얼마예요?"
     },
     {
      "en": "How much is it a month?",
      "ko": "한 달에 얼마예요?"
     }
    ]
   },
   {
    "en": "I'd like to open a bank account.",
    "ko": "은행 계좌를 만들고 싶어요.",
    "swaps": [
     {
      "en": "I'd like to send this to Korea.",
      "ko": "이거 한국으로 보내고 싶어요."
     },
     {
      "en": "I'd like to see the apartment.",
      "ko": "그 집을 보고 싶어요."
     }
    ]
   },
   {
    "en": "Can I pay with a card?",
    "ko": "카드로 내도 돼요?",
    "swaps": [
     {
      "en": "Can I pay with cash?",
      "ko": "현금으로 내도 돼요?"
     },
     {
      "en": "Can I pay with my phone?",
      "ko": "휴대폰으로 내도 돼요?"
     }
    ]
   },
   {
    "en": "What does 'fragile' mean?",
    "ko": "'fragile'이 무슨 뜻이에요?",
    "swaps": [
     {
      "en": "What does 'unlocked' mean?",
      "ko": "'unlocked'가 무슨 뜻이에요?"
     },
     {
      "en": "What does 'deposit' mean?",
      "ko": "'deposit'이 무슨 뜻이에요?"
     }
    ]
   },
   {
    "en": "Can you fix it, please?",
    "ko": "고쳐 주실 수 있어요?",
    "swaps": [
     {
      "en": "Can you help me, please?",
      "ko": "좀 도와주실 수 있어요?"
     },
     {
      "en": "Can you check it, please?",
      "ko": "한번 봐 주실 수 있어요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Where do I sign?",
    "ko": "어디에 서명해요?",
    "swaps": [
     {
      "en": "Where do I pay?",
      "ko": "어디서 계산해요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Here's my passport.",
    "ko": "여기 제 여권이요.",
    "swaps": [
     {
      "en": "Here's my card.",
      "ko": "여기 제 카드요."
     }
    ]
   }
  ]
 },
 {
  "day": 15,
  "title": "약국에서",
  "enTitle": "At the Pharmacy",
  "place": "감기 기운이 있어서 동네 드럭스토어 안에 있는 약국 카운터에 갔어요.",
  "roles": {
   "A": "약사",
   "B": "나 (손님)"
  },
  "tipA": "B는 '어디가 아픈지'와 '얼마나 자주 먹는지'만 확실히 말하면 돼요. 다 외우면 🔁 역할 바꾸기로 한 번 더 하세요.",
  "tipB": "약사가 'prescription(처방약)'처럼 모르는 단어를 써요. 모르는 단어는 'What does ... mean?'으로 물어보고, 복용법은 따라 말하면서 확인하세요.",
  "a": [
   {
    "r": "A",
    "en": "Hi, how can I help you?",
    "ko": "안녕하세요, 뭘 도와드릴까요?",
    "pr": "하이, 하우 캔 아이 헬퓨?"
   },
   {
    "r": "B",
    "en": "Hi. Do you have something for a cold?",
    "ko": "안녕하세요. 감기약 있어요?",
    "pr": "하이. 두 유 해브 썸띵 포러 콜드?",
    "nt": "⭐ 'something for ~' = ~에 먹는 약. 약국 필수 문장"
   },
   {
    "r": "A",
    "en": "Sure. Do you have a fever?",
    "ko": "네. 열이 있으세요?",
    "pr": "슈어. 두 유 해버 피버?"
   },
   {
    "r": "B",
    "en": "No. I have a sore throat and a cough.",
    "ko": "아니요. 목이 아프고 기침이 나요.",
    "pr": "노. 아이 해버 쏘어 쓰롯 앤더 커프."
   },
   {
    "r": "A",
    "en": "Okay. Try this one.",
    "ko": "알겠어요. 이 약 드셔 보세요.",
    "pr": "오케이. 트라이 디스 원."
   },
   {
    "r": "B",
    "en": "How often do I take it?",
    "ko": "얼마나 자주 먹어요?",
    "pr": "하우 오펀 두 아이 테이킷?"
   },
   {
    "r": "A",
    "en": "Twice a day, with food.",
    "ko": "하루 두 번, 음식이랑 같이 드세요.",
    "pr": "트와이스 어 데이, 윗 푸드.",
    "nt": "'with food' = 빈속에 먹지 말고 뭘 먹고 나서 드시라는 뜻"
   },
   {
    "r": "B",
    "en": "Okay. Thank you so much!",
    "ko": "알겠어요. 정말 고마워요!",
    "pr": "오케이. 땡큐 쏘 머치!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi there. Are you picking up a prescription?",
    "ko": "안녕하세요. 처방약 찾으러 오셨어요?",
    "pr": "하이 데어. 아- 유 피킹 어퍼 프리스크립션?"
   },
   {
    "r": "B",
    "en": "Sorry, what does 'prescription' mean?",
    "ko": "죄송한데, 'prescription'이 무슨 뜻이에요?",
    "pr": "쏘리, 왓 더즈 프리스크립션 민?",
    "nt": "⭐ 모르는 단어는 이렇게 물어보세요"
   },
   {
    "r": "A",
    "en": "It's medicine your doctor ordered for you.",
    "ko": "의사가 처방해 준 약이요.",
    "pr": "잇츠 메디썬 유어 닥터 오더드 포 유."
   },
   {
    "r": "B",
    "en": "Oh, no, I'm not. Do you have something for a cold?",
    "ko": "아, 아니요. 감기약 있어요?",
    "pr": "오, 노, 아임 낫. 두 유 해브 썸띵 포러 콜드?"
   },
   {
    "r": "A",
    "en": "Sure. What are your symptoms?",
    "ko": "네. 증상이 어떠세요?",
    "pr": "슈어. 왓 아- 유어 씸텀즈?",
    "nt": "symptoms(증상)를 몰라도 아픈 곳을 말하면 돼요"
   },
   {
    "r": "B",
    "en": "I have a sore throat and a cough.",
    "ko": "목이 아프고 기침이 나요.",
    "pr": "아이 해버 쏘어 쓰롯 앤더 커프."
   },
   {
    "r": "A",
    "en": "Try this one. Take it twice a day, with food.",
    "ko": "이 약 드셔 보세요. 하루 두 번, 음식이랑 같이 드세요.",
    "pr": "트라이 디스 원. 테이킷 트와이스 어 데이, 윗 푸드."
   },
   {
    "r": "B",
    "en": "Twice a day. Got it. Thank you!",
    "ko": "하루 두 번이요. 알겠어요. 고마워요!",
    "pr": "트와이스 어 데이. 가릿. 땡큐!",
    "nt": "들은 걸 따라 말하면 확인도 되고 기억에도 남아요"
   }
  ],
  "chunks": [
   {
    "en": "Do you have something for a cold?",
    "ko": "감기약 있어요?",
    "star": true,
    "swaps": [
     {
      "en": "Do you have something for a headache?",
      "ko": "두통약 있어요?"
     },
     {
      "en": "Do you have something for allergies?",
      "ko": "알레르기약 있어요?"
     }
    ]
   },
   {
    "en": "I have a sore throat.",
    "ko": "목이 아파요.",
    "swaps": [
     {
      "en": "I have a cough.",
      "ko": "기침이 나요."
     },
     {
      "en": "I have a runny nose.",
      "ko": "콧물이 나요."
     }
    ]
   },
   {
    "en": "How often do I take it?",
    "ko": "얼마나 자주 먹어요?",
    "swaps": [
     {
      "en": "How many do I take?",
      "ko": "몇 알 먹어요?"
     },
     {
      "en": "When do I take it?",
      "ko": "언제 먹어요?"
     }
    ]
   },
   {
    "en": "What does 'prescription' mean?",
    "ko": "'prescription'이 무슨 뜻이에요?",
    "swaps": [
     {
      "en": "What does 'symptoms' mean?",
      "ko": "'symptoms'가 무슨 뜻이에요?"
     }
    ]
   },
   {
    "en": "Twice a day. Got it.",
    "ko": "하루 두 번이요. 알겠어요.",
    "swaps": [
     {
      "en": "Once a day. Got it.",
      "ko": "하루 한 번이요. 알겠어요."
     },
     {
      "en": "Three times a day. Got it.",
      "ko": "하루 세 번이요. 알겠어요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "I'm picking up a prescription.",
    "ko": "처방약 찾으러 왔어요.",
    "swaps": [
     {
      "en": "I'm picking up a prescription for my {SP}.",
      "ko": "{SPKO} 처방약 찾으러 왔어요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Will this make me sleepy?",
    "ko": "이거 먹으면 졸려요?",
    "swaps": []
   }
  ]
 },
 {
  "day": 16,
  "title": "병원 예약 전화",
  "enTitle": "Making a Doctor's Appointment",
  "place": "며칠째 몸이 안 좋아서 동네 병원에 전화로 진료 예약을 잡아요.",
  "roles": {
   "A": "병원 접수 직원",
   "B": "나 (환자)"
  },
  "tipA": "전화는 얼굴이 안 보여서 더 어려워요. 서로 등을 돌리고 앉아서 연습하면 실제 전화처럼 연습돼요.",
  "tipB": "직원이 더 병원다운 표현(reason for your visit, opening)을 써요. 못 알아들으면 천천히 말해 달라고 하고, 날짜·시간은 따라 말해서 확인하세요.",
  "a": [
   {
    "r": "A",
    "en": "Good morning, Oak Valley Clinic. How can I help you?",
    "ko": "안녕하세요, 오크 밸리 클리닉이에요. 뭘 도와드릴까요?",
    "pr": "굿 모닝, 오크 밸리 클리닉. 하우 캔 아이 헬퓨?",
    "nt": "미국 병원은 대부분 예약제예요. 급할 땐 예약 없이 가는 urgent care도 있어요"
   },
   {
    "r": "B",
    "en": "Hi. I'd like to make an appointment, please.",
    "ko": "안녕하세요. 진료 예약하고 싶어요.",
    "pr": "하이. 아이드 라익 투 메이컨 어포인트먼트, 플리즈.",
    "nt": "⭐ 병원·미용실 등 예약할 때 다 쓰는 문장"
   },
   {
    "r": "A",
    "en": "Sure. What's your name?",
    "ko": "네. 성함이 어떻게 되세요?",
    "pr": "슈어. 왓츠 유어 네임?"
   },
   {
    "r": "B",
    "en": "It's {ME} Kim. I'm a new patient.",
    "ko": "김{MEKO}. 거기는 처음 가는 거예요.",
    "pr": "잇츠 {MEPR} 킴. 아임 어 뉴 페이션트."
   },
   {
    "r": "A",
    "en": "Okay. And what's the problem?",
    "ko": "네. 어디가 불편하세요?",
    "pr": "오케이. 앤 왓츠 더 프라블럼?"
   },
   {
    "r": "B",
    "en": "I have a fever and a headache.",
    "ko": "열이 나고 머리가 아파요.",
    "pr": "아이 해버 피버 앤더 헤데익."
   },
   {
    "r": "A",
    "en": "Can you come in tomorrow at 10 a.m.?",
    "ko": "내일 오전 10시에 오실 수 있어요?",
    "pr": "캐뉴 커민 터마로우 앳 텐 에이엠?"
   },
   {
    "r": "B",
    "en": "Yes, that works. Thank you!",
    "ko": "네, 그 시간 좋아요. 고마워요!",
    "pr": "예스, 댓 웍스. 땡큐!",
    "nt": "'That works.' = 그 시간 괜찮아요"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Oak Valley Clinic, this is Jessica. How can I help?",
    "ko": "오크 밸리 클리닉, 제시카예요. 뭘 도와드릴까요?",
    "pr": "오크 밸리 클리닉, 디스 이즈 제시카. 하우 캐나이 헬프?"
   },
   {
    "r": "B",
    "en": "Hi. I'd like to make an appointment, please.",
    "ko": "안녕하세요. 진료 예약하고 싶어요.",
    "pr": "하이. 아이드 라익 투 메이컨 어포인트먼트, 플리즈."
   },
   {
    "r": "A",
    "en": "Sure. What's the reason for your visit?",
    "ko": "네. 어떤 일로 진료받으시려고요?",
    "pr": "슈어. 왓츠 더 리즌 포 유어 비짓?"
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ 전화에서는 되묻는 게 당연해요. 부끄러워하지 마세요"
   },
   {
    "r": "A",
    "en": "Of course. Why do you need to see the doctor?",
    "ko": "물론이죠. 왜 진료를 받으려고 하세요?",
    "pr": "어브 코스. 와이 두 유 니드 투 씨 더 닥터?"
   },
   {
    "r": "B",
    "en": "I have a fever and a headache.",
    "ko": "열이 나고 머리가 아파요.",
    "pr": "아이 해버 피버 앤더 헤데익."
   },
   {
    "r": "A",
    "en": "I see. Our next opening is Thursday at 2:30.",
    "ko": "그러시군요. 가장 빠른 빈 시간은 목요일 2시 반이에요.",
    "pr": "아이 씨. 아워 넥스트 오프닝 이즈 써스데이 앳 투 써리.",
    "nt": "opening = 비어 있는 예약 시간"
   },
   {
    "r": "B",
    "en": "Thursday at 2:30? That works. Thank you!",
    "ko": "목요일 2시 반이요? 좋아요. 고마워요!",
    "pr": "써스데이 앳 투 써리? 댓 웍스. 땡큐!"
   }
  ],
  "chunks": [
   {
    "en": "I'd like to make an appointment.",
    "ko": "진료 예약하고 싶어요.",
    "star": true,
    "swaps": [
     {
      "en": "I'd like to change my appointment.",
      "ko": "예약을 바꾸고 싶어요."
     },
     {
      "en": "I'd like to cancel my appointment.",
      "ko": "예약을 취소하고 싶어요."
     }
    ]
   },
   {
    "en": "I'm a new patient.",
    "ko": "(이 병원은) 처음 오는 환자예요.",
    "swaps": [
     {
      "en": "This is my first visit.",
      "ko": "이번이 첫 방문이에요."
     }
    ]
   },
   {
    "en": "I have a fever and a headache.",
    "ko": "열이 나고 머리가 아파요.",
    "swaps": [
     {
      "en": "I have a fever and a cough.",
      "ko": "열이 나고 기침이 나요."
     },
     {
      "en": "I have a stomachache.",
      "ko": "배가 아파요."
     }
    ]
   },
   {
    "en": "That works.",
    "ko": "그 시간 괜찮아요.",
    "swaps": [
     {
      "en": "That doesn't work for me.",
      "ko": "그 시간은 안 돼요."
     },
     {
      "en": "Do you have anything in the morning?",
      "ko": "오전에 되는 시간 있어요?"
     }
    ]
   },
   {
    "en": "Can I come in today?",
    "ko": "오늘 가도 돼요?",
    "swaps": [
     {
      "en": "Can I come in tomorrow?",
      "ko": "내일 가도 돼요?"
     },
     {
      "en": "Can I come in this afternoon?",
      "ko": "오늘 오후에 가도 돼요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Do you take my insurance?",
    "ko": "제 보험 되나요?",
    "swaps": [
     {
      "en": "I have insurance.",
      "ko": "보험 있어요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Is there an urgent care near here?",
    "ko": "근처에 urgent care(예약 없이 가는 진료소) 있어요?",
    "swaps": []
   }
  ]
 },
 {
  "day": 17,
  "title": "진료실에서 증상 말하기",
  "enTitle": "Seeing the Doctor",
  "place": "예약한 날, 진료실에서 의사에게 어디가 아픈지 설명해요.",
  "roles": {
   "A": "의사",
   "B": "나 (환자)"
  },
  "tipA": "'어디가 아픈지 → 언제부터인지 → 약 알레르기' 순서만 기억하면 진료실 대화 대부분이 해결돼요. 아픈 곳은 손으로 가리키며 말하세요.",
  "tipB": "의사가 더 길게 물어봐요(How long has it been hurting?). 못 알아들으면 다시 말해 달라고 하세요. 대부분 더 쉬운 말로 바꿔서 다시 물어봐 줘요.",
  "a": [
   {
    "r": "A",
    "en": "Hi, I'm Dr. Patel. How are you feeling?",
    "ko": "안녕하세요, 저는 의사 파텔이에요. 몸은 좀 어떠세요?",
    "pr": "하이, 아임 닥터 퍼텔. 하우 아- 유 필링?"
   },
   {
    "r": "B",
    "en": "I don't feel well. My stomach hurts.",
    "ko": "몸이 안 좋아요. 배가 아파요.",
    "pr": "아이 돈 필 웰. 마이 스터먹 헐츠.",
    "nt": "⭐ 'My ___ hurts.' 아픈 곳만 바꿔 쓰세요"
   },
   {
    "r": "A",
    "en": "I'm sorry. When did it start?",
    "ko": "저런. 언제부터 그랬어요?",
    "pr": "아임 쏘리. 웬 디딧 스타트?"
   },
   {
    "r": "B",
    "en": "It started two days ago.",
    "ko": "이틀 전부터요.",
    "pr": "잇 스타-리드 투 데이즈 어고우."
   },
   {
    "r": "A",
    "en": "Are you allergic to any medicine?",
    "ko": "약 알레르기 있어요?",
    "pr": "아- 유 얼러-직 투 애니 메디썬?"
   },
   {
    "r": "B",
    "en": "No, I'm not.",
    "ko": "아니요, 없어요.",
    "pr": "노, 아임 낫.",
    "nt": "알레르기가 있으면 꼭 'I'm allergic to ~.'라고 말하세요"
   },
   {
    "r": "A",
    "en": "Okay. Can you show me where it hurts?",
    "ko": "알겠어요. 어디가 아픈지 보여 줄래요?",
    "pr": "오케이. 캐뉴 쇼 미 웨어릿 헐츠?"
   },
   {
    "r": "B",
    "en": "It hurts here.",
    "ko": "여기가 아파요.",
    "pr": "잇 헐츠 히어.",
    "nt": "손으로 가리키면서 말하면 끝!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi there, I'm Dr. Patel. What brings you in today?",
    "ko": "안녕하세요, 파텔이에요. 오늘은 어떻게 오셨어요?",
    "pr": "하이 데어, 아임 닥터 퍼텔. 왓 브링즈 유 인 터데이?",
    "nt": "'What brings you in?' = 어떻게 오셨어요? 병원에서 자주 들어요"
   },
   {
    "r": "B",
    "en": "I don't feel well. My stomach hurts.",
    "ko": "몸이 안 좋아요. 배가 아파요.",
    "pr": "아이 돈 필 웰. 마이 스터먹 헐츠."
   },
   {
    "r": "A",
    "en": "Sorry to hear that. How long has it been hurting?",
    "ko": "저런, 힘드셨겠어요. 아픈 지 얼마나 됐어요?",
    "pr": "쏘리 투 히어 댓. 하우 롱 해짓 빈 헐팅?"
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 되물으면 의사가 쉬운 말로 바꿔 줘요 ↓"
   },
   {
    "r": "A",
    "en": "Sure. When did the pain start?",
    "ko": "그럼요. 언제부터 아팠어요?",
    "pr": "슈어. 웬 디드 더 페인 스타트?"
   },
   {
    "r": "B",
    "en": "It started two days ago.",
    "ko": "이틀 전부터요.",
    "pr": "잇 스타-리드 투 데이즈 어고우."
   },
   {
    "r": "A",
    "en": "Are you taking any medicine right now?",
    "ko": "지금 드시는 약 있어요?",
    "pr": "아- 유 테이킹 애니 메디썬 라잇 나우?"
   },
   {
    "r": "B",
    "en": "No, I'm not.",
    "ko": "아니요, 없어요.",
    "pr": "노, 아임 낫."
   }
  ],
  "chunks": [
   {
    "en": "My stomach hurts.",
    "ko": "배가 아파요.",
    "star": true,
    "swaps": [
     {
      "en": "My head hurts.",
      "ko": "머리가 아파요."
     },
     {
      "en": "My back hurts.",
      "ko": "허리가 아파요."
     }
    ]
   },
   {
    "en": "I don't feel well.",
    "ko": "몸이 안 좋아요.",
    "swaps": [
     {
      "en": "I feel dizzy.",
      "ko": "어지러워요."
     },
     {
      "en": "I feel very tired.",
      "ko": "너무 피곤해요."
     }
    ]
   },
   {
    "en": "It started two days ago.",
    "ko": "이틀 전부터요.",
    "swaps": [
     {
      "en": "It started yesterday.",
      "ko": "어제부터요."
     },
     {
      "en": "It started last week.",
      "ko": "지난주부터요."
     }
    ]
   },
   {
    "en": "It hurts here.",
    "ko": "여기가 아파요.",
    "swaps": [
     {
      "en": "It hurts a lot.",
      "ko": "많이 아파요."
     },
     {
      "en": "It hurts a little.",
      "ko": "조금 아파요."
     }
    ]
   },
   {
    "en": "I'm allergic to penicillin.",
    "ko": "페니실린 알레르기가 있어요.",
    "swaps": [
     {
      "en": "I'm allergic to peanuts.",
      "ko": "땅콩 알레르기가 있어요."
     },
     {
      "en": "I don't have any allergies.",
      "ko": "알레르기 없어요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Is it serious?",
    "ko": "심각한 거예요?",
    "swaps": [
     {
      "en": "Do I need medicine?",
      "ko": "약 먹어야 해요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "I'm taking this medicine.",
    "ko": "이 약 먹고 있어요. (약통 보여 주면서)",
    "swaps": []
   }
  ]
 },
 {
  "day": 18,
  "title": "응급 전화 911",
  "enTitle": "Calling 911",
  "place": "집에서 가족이 갑자기 쓰러져서 911에 전화해요.",
  "roles": {
   "A": "911 상담원",
   "B": "나 (신고자)"
  },
  "tipA": "911은 생명·화재·범죄 같은 진짜 응급 상황에만 거는 번호예요. 실제 응급 상황이면 영어가 서툴러도 바로 걸고, 우리 집 주소는 입에 붙을 때까지 영어로 외워 두세요.",
  "tipB": "상담원이 주소부터 묻거나 더 빠르게 말할 수 있어요. 순서가 달라도 '무슨 일인지 + 주소' 두 가지만 또박또박 말하고, 못 알아들으면 천천히 말해 달라고 하세요.",
  "a": [
   {
    "r": "A",
    "en": "911, what's your emergency?",
    "ko": "911이에요. 무슨 일이세요?",
    "pr": "나인 원 원, 왓츠 유어 이머전씨?"
   },
   {
    "r": "B",
    "en": "My {SP} fell down and isn't waking up.",
    "ko": "제 {SPKO}, 쓰러져서 깨어나질 않아요.",
    "pr": "마이 {SPPR} 펠 다운 앤 이즌 웨이킹 업.",
    "nt": "⭐ 무슨 일인지 먼저 한 문장으로 말하세요"
   },
   {
    "r": "A",
    "en": "Okay. What's your address?",
    "ko": "알겠어요. 주소가 어떻게 되세요?",
    "pr": "오케이. 왓츠 유어 애드레스?"
   },
   {
    "r": "B",
    "en": "123 Maple Street, Apartment 4B.",
    "ko": "메이플 스트리트 123번지, 4B호예요.",
    "pr": "원 트웨니 쓰리 메이플 스트릿, 어파-트먼트 포 비.",
    "nt": "우리 집 주소를 영어로 적어서 냉장고에 붙여 두세요"
   },
   {
    "r": "A",
    "en": "Is the patient breathing?",
    "ko": "환자분 숨은 쉬고 있어요?",
    "pr": "이즈 더 페이션트 브리딩?"
   },
   {
    "r": "B",
    "en": "Yes, my {SP} is breathing.",
    "ko": "네, 숨 쉬고 있어요.",
    "pr": "예스, 마이 {SPPR} 이즈 브리딩."
   },
   {
    "r": "A",
    "en": "Help is on the way. Stay on the line.",
    "ko": "구급대가 가고 있어요. 전화 끊지 마세요.",
    "pr": "헬프 이즈 온 더 웨이. 스테이 온 더 라인.",
    "nt": "'Stay on the line' = 전화 끊지 말고 기다리세요"
   },
   {
    "r": "B",
    "en": "Okay. Please hurry!",
    "ko": "네. 빨리 와 주세요!",
    "pr": "오케이. 플리즈 허리!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "911. What is the address of your emergency?",
    "ko": "911이에요. 응급 상황이 일어난 곳 주소가 어떻게 되세요?",
    "pr": "나인 원 원. 왓 이즈 디 애드레스 오브 유어 이머전씨?",
    "nt": "주소부터 묻는 경우도 많아요"
   },
   {
    "r": "B",
    "en": "123 Maple Street, Apartment 4B.",
    "ko": "메이플 스트리트 123번지, 4B호예요.",
    "pr": "원 트웨니 쓰리 메이플 스트릿, 어파-트먼트 포 비."
   },
   {
    "r": "A",
    "en": "Okay. Tell me exactly what happened.",
    "ko": "네. 무슨 일인지 정확히 말해 주세요.",
    "pr": "오케이. 텔 미 이그잭틀리 왓 해픈드."
   },
   {
    "r": "B",
    "en": "My {SP} fell down and isn't waking up.",
    "ko": "제 {SPKO}, 쓰러져서 깨어나질 않아요.",
    "pr": "마이 {SPPR} 펠 다운 앤 이즌 웨이킹 업."
   },
   {
    "r": "A",
    "en": "Is the patient breathing normally?",
    "ko": "환자분 숨은 정상적으로 쉬고 있어요?",
    "pr": "이즈 더 페이션트 브리딩 노멀리?"
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ 급한 상황에서도 되물어도 괜찮아요"
   },
   {
    "r": "A",
    "en": "Is the patient breathing? Yes or no?",
    "ko": "환자분 숨 쉬고 있어요? 네, 아니요로 대답해 주세요.",
    "pr": "이즈 더 페이션트 브리딩? 예스 오어 노?"
   },
   {
    "r": "B",
    "en": "Yes. Please send an ambulance!",
    "ko": "네. 구급차 보내 주세요!",
    "pr": "예스. 플리즈 센던 앰뷸런스!"
   }
  ],
  "chunks": [
   {
    "en": "My {SP} fell down.",
    "ko": "제 {SPKO}, 쓰러졌어요.",
    "star": true,
    "swaps": [
     {
      "en": "My {SP} passed out.",
      "ko": "제 {SPKO}, 기절했어요."
     }
    ]
   },
   {
    "en": "My {SP} isn't waking up.",
    "ko": "제 {SPKO}, 깨어나질 않아요.",
    "swaps": [
     {
      "en": "My {SP} can't breathe.",
      "ko": "제 {SPKO}, 숨을 못 쉬어요."
     }
    ]
   },
   {
    "en": "My address is 123 Maple Street.",
    "ko": "제 주소는 메이플 스트리트 123번지예요. (우리 집 주소로 바꿔 외우기)",
    "swaps": [
     {
      "en": "I'm at 123 Maple Street.",
      "ko": "저 지금 메이플 스트리트 123번지에 있어요."
     }
    ]
   },
   {
    "en": "Please send an ambulance!",
    "ko": "구급차 보내 주세요!",
    "swaps": [
     {
      "en": "Please send the police!",
      "ko": "경찰 보내 주세요!"
     },
     {
      "en": "There's a fire!",
      "ko": "불이 났어요!"
     }
    ]
   },
   {
    "en": "Please hurry!",
    "ko": "빨리 와 주세요!",
    "swaps": [
     {
      "en": "Please help me!",
      "ko": "도와주세요!"
     }
    ]
   },
   {
    "bonus": true,
    "en": "I need a Korean interpreter.",
    "ko": "한국어 통역이 필요해요. (911은 보통 전화 통역을 연결해 줘요)",
    "swaps": [
     {
      "en": "Korean, please.",
      "ko": "한국어요. (짧게)"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Stay on the line.",
    "ko": "전화 끊지 마세요. (상담원이 하는 말)",
    "swaps": []
   }
  ]
 },
 {
  "day": 19,
  "title": "식당 주문",
  "enTitle": "Ordering at a Restaurant",
  "place": "부부가 동네 식당에 저녁을 먹으러 갔는데, 자리에 앉자 서버가 왔어요.",
  "roles": {
   "A": "서버 (종업원)",
   "B": "나 (손님)"
  },
  "tipA": "서버는 보통 음료 → 주문 → 사이드 순서로 물어봐요. 대답은 대부분 '___, please.' 하나로 해결돼요.",
  "tipB": "서버가 버거 고기 굽기(How would you like that cooked?)를 물어봐요. 못 알아들으면 되묻고, 'Medium, please.'처럼 대답하면 돼요.",
  "a": [
   {
    "r": "A",
    "en": "Hi, I'm Jake. Can I get you something to drink?",
    "ko": "안녕하세요, 전 제이크예요. 음료 먼저 드릴까요?",
    "pr": "하이, 아임 제이크. 캐나이 겟츄 썸띵 투 드링크?",
    "nt": "서버가 이름을 말하면 '제가 이 테이블 담당이에요'라는 뜻"
   },
   {
    "r": "B",
    "en": "Just water, please.",
    "ko": "그냥 물 주세요.",
    "pr": "저슷 워러, 플리즈."
   },
   {
    "r": "A",
    "en": "Sure. Are you ready to order?",
    "ko": "네. 주문하시겠어요?",
    "pr": "슈어. 아- 유 레디 투 오더?"
   },
   {
    "r": "B",
    "en": "Yes. I'll have the cheeseburger, please.",
    "ko": "네. 치즈버거로 주세요.",
    "pr": "예스. 아일 해브 더 치즈버거, 플리즈.",
    "nt": "⭐ 'I'll have ___, please.' 주문은 이 한 문장이면 돼요"
   },
   {
    "r": "A",
    "en": "Fries or salad with that?",
    "ko": "사이드는 감자튀김으로 드릴까요, 샐러드로 드릴까요?",
    "pr": "프라이즈 오어 샐러드 윗 댓?"
   },
   {
    "r": "B",
    "en": "Fries, please.",
    "ko": "감자튀김이요.",
    "pr": "프라이즈, 플리즈."
   },
   {
    "r": "A",
    "en": "Great. Anything else?",
    "ko": "좋아요. 더 필요한 건 없으세요?",
    "pr": "그레잇. 애니띵 엘스?"
   },
   {
    "r": "B",
    "en": "No, that's all. Thank you.",
    "ko": "아니요, 그거면 돼요. 고마워요.",
    "pr": "노, 댓츠 올. 땡큐.",
    "nt": "다 먹으면 'Can we get the check, please?' 앉아서 먹는 식당은 팁 15~20%가 보통이에요"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi there! What can I get you to drink?",
    "ko": "안녕하세요! 음료는 뭘로 드릴까요?",
    "pr": "하이 데어! 왓 캐나이 겟츄 투 드링크?"
   },
   {
    "r": "B",
    "en": "Just water, please.",
    "ko": "그냥 물 주세요.",
    "pr": "저슷 워러, 플리즈."
   },
   {
    "r": "A",
    "en": "Okay. Do you need more time, or are you ready?",
    "ko": "네. 좀 더 보실래요, 아니면 주문하시겠어요?",
    "pr": "오케이. 두 유 니드 모어 타임, 오어 아- 유 레디?"
   },
   {
    "r": "B",
    "en": "We're ready. I'll have the cheeseburger, please.",
    "ko": "주문할게요. 치즈버거로 주세요.",
    "pr": "위어 레디. 아일 해브 더 치즈버거, 플리즈."
   },
   {
    "r": "A",
    "en": "Sure. How would you like that cooked?",
    "ko": "네. 고기는 어떻게 익혀 드릴까요?",
    "pr": "슈어. 하우 우쥬 라익 댓 쿡트?",
    "nt": "버거·스테이크는 고기 굽기를 물어봐요"
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 모르면 무조건 되묻기. 더 쉽게 다시 말해 줘요"
   },
   {
    "r": "A",
    "en": "How do you want the meat? Medium, or well-done?",
    "ko": "고기 굽기요. 미디엄이요, 아니면 웰던이요?",
    "pr": "하우 두 유 원 더 밋? 미디엄, 오어 웰 던?"
   },
   {
    "r": "B",
    "en": "Medium, please. Thank you.",
    "ko": "미디엄으로 주세요. 고마워요.",
    "pr": "미디엄, 플리즈. 땡큐.",
    "nt": "rare(덜 익힘) → medium(중간) → well-done(바싹 익힘)"
   }
  ],
  "chunks": [
   {
    "en": "I'll have the cheeseburger, please.",
    "ko": "치즈버거로 주세요.",
    "star": true,
    "swaps": [
     {
      "en": "I'll have the chicken salad, please.",
      "ko": "치킨 샐러드로 주세요."
     },
     {
      "en": "I'll have the same, please.",
      "ko": "같은 걸로 주세요."
     }
    ]
   },
   {
    "en": "Just water, please.",
    "ko": "그냥 물 주세요.",
    "swaps": [
     {
      "en": "Just coffee, please.",
      "ko": "커피만 주세요."
     },
     {
      "en": "Two waters, please.",
      "ko": "물 두 잔 주세요."
     }
    ]
   },
   {
    "en": "We're ready.",
    "ko": "주문할게요. (준비됐어요)",
    "swaps": [
     {
      "en": "We need a few more minutes.",
      "ko": "조금만 더 볼게요."
     }
    ]
   },
   {
    "en": "No, that's all.",
    "ko": "아니요, 그거면 돼요.",
    "swaps": [
     {
      "en": "That's all for now.",
      "ko": "일단 그거면 돼요."
     }
    ]
   },
   {
    "en": "Can we get the check, please?",
    "ko": "계산서 주세요. (팁은 보통 15~20%)",
    "swaps": [
     {
      "en": "Can I get the check, please?",
      "ko": "계산서 주세요. (혼자일 때)"
     },
     {
      "en": "Can we get a box, please?",
      "ko": "남은 거 싸 갈 통 주세요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Medium, please.",
    "ko": "미디엄으로 주세요.",
    "swaps": [
     {
      "en": "Well-done, please.",
      "ko": "바싹 익혀 주세요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Can I get it without onions?",
    "ko": "양파 빼 주실 수 있어요?",
    "swaps": []
   }
  ]
 },
 {
  "day": 20,
  "title": "포장·배달 주문",
  "enTitle": "Takeout and Delivery",
  "place": "집에서 동네 피자 가게에 전화해서 포장이나 배달 주문을 해요.",
  "roles": {
   "A": "피자 가게 직원",
   "B": "나 (손님)"
  },
  "tipA": "전화 주문은 '포장/배달 → 메뉴 → 이름(주소) → 시간' 순서예요. 서로 등 돌리고 앉아서 전화처럼 연습해 보세요.",
  "tipB": "이번엔 배달 주문이에요. 직원이 첫마디부터 빠르게 'Pickup or delivery?'를 물어봐요. 되묻고, 주소는 Day 18처럼 또박또박 말하세요.",
  "a": [
   {
    "r": "A",
    "en": "Mario's Pizza. How can I help you?",
    "ko": "마리오 피자예요. 뭘 도와드릴까요?",
    "pr": "마리오즈 핏짜. 하우 캔 아이 헬퓨?"
   },
   {
    "r": "B",
    "en": "Hi. I'd like to order a pizza for pickup.",
    "ko": "안녕하세요. 피자 포장 주문하고 싶어요.",
    "pr": "하이. 아이드 라익 투 오더러 핏짜 포 피컵.",
    "nt": "⭐ pickup = 포장(내가 가지러 감), delivery = 배달"
   },
   {
    "r": "A",
    "en": "Sure. What would you like?",
    "ko": "네. 뭘로 드릴까요?",
    "pr": "슈어. 왓 우쥬 라익?"
   },
   {
    "r": "B",
    "en": "One large pepperoni pizza, please.",
    "ko": "페퍼로니 피자 라지로 한 판 주세요.",
    "pr": "원 라-지 페퍼로니 핏짜, 플리즈."
   },
   {
    "r": "A",
    "en": "Okay. Can I get your name?",
    "ko": "네. 성함이 어떻게 되세요?",
    "pr": "오케이. 캐나이 겟 유어 네임?"
   },
   {
    "r": "B",
    "en": "It's {ME}. How long will it take?",
    "ko": "{MEKO}. 얼마나 걸려요?",
    "pr": "잇츠 {MEPR}. 하우 롱 위릿 테익?"
   },
   {
    "r": "A",
    "en": "About 20 minutes. Your total is $18.50.",
    "ko": "20분쯤 걸려요. 전부 18달러 50센트예요.",
    "pr": "어바웃 트웨니 미닛츠. 유어 토를 이즈 에이틴 피프티.",
    "nt": "$18.50은 보통 '에이틴 피프티'라고 숫자만 말해요"
   },
   {
    "r": "B",
    "en": "Great. See you soon. Thank you!",
    "ko": "좋아요. 이따 갈게요. 고마워요!",
    "pr": "그레잇. 씨 유 쑨. 땡큐!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Thanks for calling Mario's. Pickup or delivery?",
    "ko": "마리오 피자에 전화 주셔서 감사해요. 포장이세요, 배달이세요?",
    "pr": "땡스 포 콜링 마리오즈. 피컵 오어 딜리버리?"
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 가게 전화는 빨라요. 첫마디부터 되물어도 괜찮아요"
   },
   {
    "r": "A",
    "en": "Sure. Pickup, or delivery?",
    "ko": "네. 포장이요, 배달이요?",
    "pr": "슈어. 피컵, 오어 딜리버리?"
   },
   {
    "r": "B",
    "en": "Delivery, please. One large pepperoni pizza.",
    "ko": "배달이요. 페퍼로니 피자 라지로 한 판이요.",
    "pr": "딜리버리, 플리즈. 원 라-지 페퍼로니 핏짜."
   },
   {
    "r": "A",
    "en": "Got it. What's the address?",
    "ko": "알겠어요. 주소가 어떻게 되세요?",
    "pr": "가릿. 왓츠 디 애드레스?"
   },
   {
    "r": "B",
    "en": "123 Maple Street, Apartment 4B.",
    "ko": "메이플 스트리트 123번지, 4B호예요.",
    "pr": "원 트웨니 쓰리 메이플 스트릿, 어파-트먼트 포 비."
   },
   {
    "r": "A",
    "en": "Okay. It'll be there in about 45 minutes.",
    "ko": "네. 45분쯤 뒤에 도착할 거예요.",
    "pr": "오케이. 잇틀 비 데어 인 어바웃 포리 파이브 미닛츠.",
    "nt": "배달 기사에게도 팁을 주는 게 보통이에요"
   },
   {
    "r": "B",
    "en": "Great. Thank you!",
    "ko": "좋아요. 고마워요!",
    "pr": "그레잇. 땡큐!"
   }
  ],
  "chunks": [
   {
    "en": "I'd like to order a pizza for pickup.",
    "ko": "피자 포장 주문하고 싶어요.",
    "star": true,
    "swaps": [
     {
      "en": "I'd like to order a pizza for delivery.",
      "ko": "피자 배달 주문하고 싶어요."
     }
    ]
   },
   {
    "en": "One large pepperoni pizza, please.",
    "ko": "페퍼로니 피자 라지로 한 판 주세요.",
    "swaps": [
     {
      "en": "Two small cheese pizzas, please.",
      "ko": "치즈 피자 스몰로 두 판 주세요."
     }
    ]
   },
   {
    "en": "Delivery, please.",
    "ko": "배달이요.",
    "swaps": [
     {
      "en": "Pickup, please.",
      "ko": "포장이요."
     }
    ]
   },
   {
    "en": "How long will it take?",
    "ko": "얼마나 걸려요?",
    "swaps": [
     {
      "en": "How much is it?",
      "ko": "얼마예요?"
     }
    ]
   },
   {
    "en": "Can I pay by card?",
    "ko": "카드로 계산돼요?",
    "swaps": [
     {
      "en": "Can I pay in cash?",
      "ko": "현금으로 돼요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "I'm here to pick up an order for Kim.",
    "ko": "김 이름으로 주문한 거 찾으러 왔어요.",
    "swaps": [
     {
      "en": "Pickup for Kim.",
      "ko": "김으로 주문한 포장이요. (짧게)"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Can I get a receipt?",
    "ko": "영수증 주실래요?",
    "swaps": []
   }
  ]
 },
 {
  "day": 21,
  "title": "복습: 셋째 주 종합",
  "enTitle": "Week 3 Review",
  "place": "주말에 갑자기 열이 나서, 예약 없이 가는 동네 긴급 진료소(urgent care)에 갔어요.",
  "roles": {
   "A": "접수 직원",
   "B": "나 (환자)"
  },
  "tipA": "이번 주에 외운 문장(처음 온 환자, 증상, 언제부터, 주소)을 한 번에 써 보는 날이에요. 막히면 Day 16~18을 다시 보고 오세요.",
  "tipB": "직원이 병원에서 자주 쓰는 다른 표현(What brings you in, symptoms)으로 물어봐요. 되물어서 쉬운 질문이 나오면 외운 문장으로 대답하세요.",
  "a": [
   {
    "r": "A",
    "en": "Hi there. Do you have an appointment?",
    "ko": "안녕하세요. 예약하셨어요?",
    "pr": "하이 데어. 두 유 해번 어포인트먼트?"
   },
   {
    "r": "B",
    "en": "No, I don't. I'm a new patient.",
    "ko": "아니요. 여기 처음 왔어요.",
    "pr": "노, 아이 돈. 아임 어 뉴 페이션트.",
    "nt": "urgent care는 보통 예약 없이 가도 되는 곳이에요"
   },
   {
    "r": "A",
    "en": "That's okay. What's the problem today?",
    "ko": "괜찮아요. 오늘 어디가 불편하세요?",
    "pr": "댓츠 오케이. 왓츠 더 프라블럼 터데이?"
   },
   {
    "r": "B",
    "en": "I have a fever and a sore throat.",
    "ko": "열이 나고 목이 아파요.",
    "pr": "아이 해버 피버 앤더 쏘어 쓰롯.",
    "nt": "⭐ Day 15·16 증상 문장을 합친 거예요"
   },
   {
    "r": "A",
    "en": "I see. When did it start?",
    "ko": "그렇군요. 언제부터 그랬어요?",
    "pr": "아이 씨. 웬 디딧 스타트?"
   },
   {
    "r": "B",
    "en": "It started two days ago.",
    "ko": "이틀 전부터요.",
    "pr": "잇 스타-리드 투 데이즈 어고우."
   },
   {
    "r": "A",
    "en": "Okay. And what's your address?",
    "ko": "네. 그리고 주소가 어떻게 되세요?",
    "pr": "오케이. 앤 왓츠 유어 애드레스?"
   },
   {
    "r": "B",
    "en": "It's 123 Maple Street, Apartment 4B.",
    "ko": "메이플 스트리트 123번지, 4B호예요.",
    "pr": "잇츠 원 트웨니 쓰리 메이플 스트릿, 어파-트먼트 포 비."
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Welcome in. Do you have an appointment with us today?",
    "ko": "어서 오세요. 오늘 예약하고 오셨어요?",
    "pr": "웰컴 인. 두 유 해번 어포인트먼트 윗 어스 터데이?"
   },
   {
    "r": "B",
    "en": "No, I don't. I'm a new patient.",
    "ko": "아니요. 여기 처음 왔어요.",
    "pr": "노, 아이 돈. 아임 어 뉴 페이션트."
   },
   {
    "r": "A",
    "en": "No problem. What brings you in today?",
    "ko": "괜찮아요. 오늘은 어떻게 오셨어요?",
    "pr": "노 프라블럼. 왓 브링즈 유 인 터데이?",
    "nt": "Day 17에서 들었던 'What brings you in?'"
   },
   {
    "r": "B",
    "en": "I have a fever and a sore throat.",
    "ko": "열이 나고 목이 아파요.",
    "pr": "아이 해버 피버 앤더 쏘어 쓰롯."
   },
   {
    "r": "A",
    "en": "Okay. How long have you had these symptoms?",
    "ko": "네. 이런 증상이 있은 지 얼마나 됐어요?",
    "pr": "오케이. 하우 롱 해뷰 해드 디즈 씸텀즈?"
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ 이번 주 내내 쓴 되묻기 문장"
   },
   {
    "r": "A",
    "en": "Sure. When did it start?",
    "ko": "그럼요. 언제부터 그랬어요?",
    "pr": "슈어. 웬 디딧 스타트?"
   },
   {
    "r": "B",
    "en": "It started two days ago.",
    "ko": "이틀 전부터요.",
    "pr": "잇 스타-리드 투 데이즈 어고우."
   }
  ],
  "chunks": [
   {
    "en": "I have a fever and a sore throat.",
    "ko": "열이 나고 목이 아파요.",
    "star": true,
    "swaps": [
     {
      "en": "I have a fever and a headache.",
      "ko": "열이 나고 머리가 아파요."
     },
     {
      "en": "My stomach hurts.",
      "ko": "배가 아파요."
     }
    ]
   },
   {
    "en": "It started two days ago.",
    "ko": "이틀 전부터요.",
    "swaps": [
     {
      "en": "It started this morning.",
      "ko": "오늘 아침부터요."
     },
     {
      "en": "It started yesterday.",
      "ko": "어제부터요."
     }
    ]
   },
   {
    "en": "I'd like to make an appointment.",
    "ko": "진료 예약하고 싶어요.",
    "swaps": [
     {
      "en": "I'd like to order a pizza for pickup.",
      "ko": "피자 포장 주문하고 싶어요."
     },
     {
      "en": "I'd like to cancel my appointment.",
      "ko": "예약을 취소하고 싶어요."
     }
    ]
   },
   {
    "en": "My address is 123 Maple Street.",
    "ko": "제 주소는 메이플 스트리트 123번지예요. (우리 집 주소로 바꿔 외우기)",
    "swaps": [
     {
      "en": "Please send an ambulance!",
      "ko": "구급차 보내 주세요! (911에서)"
     },
     {
      "en": "Delivery, please.",
      "ko": "배달이요."
     }
    ]
   },
   {
    "en": "I'll have the cheeseburger, please.",
    "ko": "치즈버거로 주세요.",
    "swaps": [
     {
      "en": "I'll have the pepperoni pizza, please.",
      "ko": "페퍼로니 피자로 주세요."
     },
     {
      "en": "Just water, please.",
      "ko": "그냥 물 주세요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Do you have something for a cold?",
    "ko": "감기약 있어요?",
    "swaps": [
     {
      "en": "Do you have something for a headache?",
      "ko": "두통약 있어요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Do I need an appointment?",
    "ko": "예약해야 돼요?",
    "swaps": [
     {
      "en": "Can I just walk in?",
      "ko": "예약 없이 그냥 가도 돼요?"
     }
    ]
   }
  ]
 },
 {
  "day": 22,
  "title": "날씨 스몰토크",
  "enTitle": "Small Talk: Weather",
  "place": "아침에 산책하다가 아파트 앞에서 이웃과 마주쳤어요.",
  "roles": {
   "A": "이웃",
   "B": "나"
  },
  "tipA": "미국에서는 날씨 이야기가 제일 흔한 대화 시작이에요. 'It's really ___ today.'에서 빈칸(nice, cold, hot)만 바꿔 연습하세요.",
  "tipB": "이웃이 '내일 눈 온대요'처럼 날씨 예보를 말해요. 못 알아들으면 되묻고, 핵심 단어(snow, rain)만 잡으면 충분해요.",
  "a": [
   {
    "r": "A",
    "en": "Good morning! Beautiful day, isn't it?",
    "ko": "좋은 아침이에요! 날씨 참 좋죠?",
    "pr": "굿 모닝! 뷰리풀 데이, 이즌잇?"
   },
   {
    "r": "B",
    "en": "Yes, it's really nice today.",
    "ko": "네, 오늘 날씨 정말 좋네요.",
    "pr": "예스, 잇츠 리을리 나이스 투데이.",
    "nt": "⭐ 날씨 대답은 이 한 문장이면 돼요"
   },
   {
    "r": "A",
    "en": "Finally some sun! It rained all week.",
    "ko": "드디어 해가 났네요! 일주일 내내 비 왔잖아요.",
    "pr": "파이널리 썸 썬! 잇 레인드 올 윅."
   },
   {
    "r": "B",
    "en": "I know. I don't like the rain.",
    "ko": "그러게요. 전 비 오는 게 싫어요.",
    "pr": "아이 노우. 아이 돈 라익 더 레인."
   },
   {
    "r": "A",
    "en": "How's the weather in Korea?",
    "ko": "한국 날씨는 어때요?",
    "pr": "하우즈 더 웨더 인 코리아?"
   },
   {
    "r": "B",
    "en": "It's very hot in summer and cold in winter.",
    "ko": "여름엔 아주 덥고 겨울엔 추워요.",
    "pr": "잇츠 베리 핫 인 써머 앤 콜딘 위너."
   },
   {
    "r": "A",
    "en": "Same here! Enjoy the sunshine!",
    "ko": "여기도 똑같아요! 햇볕 즐기세요!",
    "pr": "쎄임 히어! 인조이 더 썬샤인!"
   },
   {
    "r": "B",
    "en": "Thanks, you too!",
    "ko": "고마워요, 그쪽도요!",
    "pr": "땡스, 유 투!",
    "nt": "상대가 'Enjoy ~ / Have a good ~' 하면 'You too!'로 받으면 돼요"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey! Wow, it's so windy today.",
    "ko": "안녕하세요! 와, 오늘 바람 엄청 부네요.",
    "pr": "헤이! 와우, 잇츠 쏘 윈디 투데이."
   },
   {
    "r": "B",
    "en": "Yes, it's really cold today.",
    "ko": "네, 오늘 정말 춥네요.",
    "pr": "예스, 잇츠 리을리 콜드 투데이.",
    "nt": "좋은 날엔 nice, 추운 날엔 cold — 한 단어만 바꿔요"
   },
   {
    "r": "A",
    "en": "They say it's going to snow tomorrow.",
    "ko": "내일 눈 온대요.",
    "pr": "데이 쎄이 잇츠 거나 스노우 터마로우."
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 모르면 바로 되묻기"
   },
   {
    "r": "A",
    "en": "Snow. It will snow tomorrow.",
    "ko": "눈이요. 내일 눈이 온대요.",
    "pr": "스노우. 잇 윌 스노우 터마로우."
   },
   {
    "r": "B",
    "en": "Oh, really? I need a warm coat.",
    "ko": "아, 정말요? 따뜻한 코트가 필요하겠네요.",
    "pr": "오, 리을리? 아이 니드 어 웜 코웃."
   },
   {
    "r": "A",
    "en": "Yeah, bundle up! Stay warm.",
    "ko": "네, 옷 단단히 껴입어요! 따뜻하게 지내요.",
    "pr": "예, 번들 업! 스테이 웜.",
    "nt": "bundle up = 옷을 따뜻하게 껴입다"
   },
   {
    "r": "B",
    "en": "Thanks, you too!",
    "ko": "고마워요, 그쪽도요!",
    "pr": "땡스, 유 투!"
   }
  ],
  "chunks": [
   {
    "en": "It's really nice today.",
    "ko": "오늘 날씨 정말 좋네요.",
    "star": true,
    "swaps": [
     {
      "en": "It's really cold today.",
      "ko": "오늘 정말 춥네요."
     },
     {
      "en": "It's really hot today.",
      "ko": "오늘 정말 덥네요."
     }
    ]
   },
   {
    "en": "Beautiful day, isn't it?",
    "ko": "날씨 참 좋죠? (대화 시작할 때)",
    "swaps": [
     {
      "en": "Cold day, isn't it?",
      "ko": "오늘 춥죠?"
     },
     {
      "en": "Hot day, isn't it?",
      "ko": "오늘 덥죠?"
     }
    ]
   },
   {
    "en": "I don't like the rain.",
    "ko": "전 비 오는 게 싫어요.",
    "swaps": [
     {
      "en": "I don't like the cold.",
      "ko": "전 추운 게 싫어요."
     },
     {
      "en": "I like the snow.",
      "ko": "전 눈 오는 게 좋아요."
     }
    ]
   },
   {
    "en": "It's going to snow tomorrow.",
    "ko": "내일 눈이 온대요.",
    "swaps": [
     {
      "en": "It's going to rain tomorrow.",
      "ko": "내일 비가 온대요."
     },
     {
      "en": "It's going to be hot tomorrow.",
      "ko": "내일 덥대요."
     }
    ]
   },
   {
    "en": "Thanks, you too!",
    "ko": "고마워요, 그쪽도요!",
    "swaps": [
     {
      "en": "You too!",
      "ko": "그쪽도요!"
     },
     {
      "en": "Same to you!",
      "ko": "그쪽도요! (조금 더 정중하게)"
     }
    ]
   },
   {
    "bonus": true,
    "en": "It's 70 degrees today.",
    "ko": "오늘 70도예요. (미국은 화씨! 70°F ≈ 21°C)",
    "swaps": [
     {
      "en": "It's 32 degrees today.",
      "ko": "오늘 32도예요. (32°F = 0°C, 얼음이 어는 온도)"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Stay warm!",
    "ko": "따뜻하게 지내요! (추운 날 헤어질 때)",
    "swaps": [
     {
      "en": "Stay cool!",
      "ko": "더위 조심해요! (더운 날 헤어질 때)"
     }
    ]
   }
  ]
 },
 {
  "day": 23,
  "title": "주말 이야기",
  "enTitle": "Talking About the Weekend",
  "place": "월요일 아침, 아파트 우편함 앞에서 이웃을 만났어요.",
  "roles": {
   "A": "이웃",
   "B": "나"
  },
  "tipA": "월요일엔 'How was your weekend?'를 정말 많이 들어요. 짧게 대답하고 'How about you?'로 되물으면 대화가 자연스럽게 이어져요.",
  "tipB": "이웃의 질문이 길고 빨라요. 천천히 말해 달라고 한 뒤, 'We went to ___.' 틀에 장소만 넣어 대답하세요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! How was your weekend?",
    "ko": "안녕하세요! 주말 잘 보냈어요?",
    "pr": "하이! 하우 워즈 유어 위켄드?"
   },
   {
    "r": "B",
    "en": "It was good, thanks. How about you?",
    "ko": "좋았어요, 고마워요. 그쪽은요?",
    "pr": "잇 워즈 굿, 땡스. 하우 어바웃 유?",
    "nt": "⭐ 대답하고 꼭 되물어 주세요"
   },
   {
    "r": "A",
    "en": "Good! I just relaxed at home. What did you do?",
    "ko": "좋았어요! 그냥 집에서 쉬었어요. 뭐 했어요?",
    "pr": "굿! 아이 저슷 릴랙스트 앳 홈. 왓 디쥬 두?"
   },
   {
    "r": "B",
    "en": "We went to the park.",
    "ko": "저희 공원에 갔어요.",
    "pr": "위 웬 투 더 파악."
   },
   {
    "r": "A",
    "en": "Oh, nice! Which park?",
    "ko": "오, 좋네요! 어느 공원이요?",
    "pr": "오, 나이스! 위치 파악?"
   },
   {
    "r": "B",
    "en": "The big park near the library.",
    "ko": "도서관 근처에 있는 큰 공원이요.",
    "pr": "더 빅 파악 니어 더 라이브러리."
   },
   {
    "r": "A",
    "en": "I love that park. Have a good week!",
    "ko": "저 그 공원 좋아해요. 한 주 잘 보내요!",
    "pr": "아이 러브 댓 파악. 해버 굿 윅!"
   },
   {
    "r": "B",
    "en": "Thanks, you too!",
    "ko": "고마워요, 그쪽도요!",
    "pr": "땡스, 유 투!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey! Did you do anything fun this weekend?",
    "ko": "안녕하세요! 이번 주말에 뭐 재밌는 거 했어요?",
    "pr": "헤이! 디쥬 두 애니띵 펀 디스 위켄드?"
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ 빠르면 천천히 말해 달라고 하세요"
   },
   {
    "r": "A",
    "en": "Sure. What did you do this weekend?",
    "ko": "그럼요. 이번 주말에 뭐 했어요?",
    "pr": "슈어. 왓 디쥬 두 디스 위켄드?"
   },
   {
    "r": "B",
    "en": "We went to the Korean market.",
    "ko": "저희 한인마트에 갔어요.",
    "pr": "위 웬 투 더 코리안 마킷.",
    "nt": "Korean market = 한인마트. 장소만 바꿔 말하면 돼요"
   },
   {
    "r": "A",
    "en": "Oh, cool! Was it far?",
    "ko": "오, 좋네요! 멀었어요?",
    "pr": "오, 쿨! 워짓 파?"
   },
   {
    "r": "B",
    "en": "Yes, about thirty minutes by car.",
    "ko": "네, 차로 30분쯤 걸려요.",
    "pr": "예스, 어바웃 써리 미닛츠 바이 카."
   },
   {
    "r": "A",
    "en": "Nice. I'm going to the beach next weekend with my kids.",
    "ko": "좋네요. 전 다음 주말에 애들이랑 바닷가에 가요.",
    "pr": "나이스. 아임 고잉 투 더 비치 넥스트 위켄드 윗 마이 키즈."
   },
   {
    "r": "B",
    "en": "Sounds fun! Have a good week!",
    "ko": "재밌겠네요! 한 주 잘 보내요!",
    "pr": "싸운즈 펀! 해버 굿 윅!",
    "nt": "상대 계획을 들으면 'Sounds fun!'으로 반응해요"
   }
  ],
  "chunks": [
   {
    "en": "How was your weekend?",
    "ko": "주말 잘 보냈어요?",
    "star": true,
    "swaps": [
     {
      "en": "How was your day?",
      "ko": "오늘 하루 어땠어요?"
     },
     {
      "en": "How was your trip?",
      "ko": "여행 어땠어요?"
     }
    ]
   },
   {
    "en": "It was good, thanks.",
    "ko": "좋았어요, 고마워요.",
    "swaps": [
     {
      "en": "It was great, thanks.",
      "ko": "아주 좋았어요, 고마워요."
     },
     {
      "en": "It was okay.",
      "ko": "그냥 그랬어요."
     }
    ]
   },
   {
    "en": "We went to the park.",
    "ko": "저희 공원에 갔어요.",
    "swaps": [
     {
      "en": "We went to the beach.",
      "ko": "저희 바닷가에 갔어요."
     },
     {
      "en": "We went to the Korean market.",
      "ko": "저희 한인마트에 갔어요."
     }
    ]
   },
   {
    "en": "How about you?",
    "ko": "그쪽은요?",
    "swaps": [
     {
      "en": "What about you?",
      "ko": "그쪽은요? (같은 뜻)"
     }
    ]
   },
   {
    "en": "Sounds fun!",
    "ko": "재밌겠네요!",
    "swaps": [
     {
      "en": "Sounds great!",
      "ko": "좋네요!"
     },
     {
      "en": "Sounds nice!",
      "ko": "좋겠네요!"
     }
    ]
   },
   {
    "bonus": true,
    "en": "I just relaxed at home.",
    "ko": "그냥 집에서 쉬었어요.",
    "swaps": [
     {
      "en": "I just stayed home.",
      "ko": "그냥 집에 있었어요."
     },
     {
      "en": "I just cleaned the house.",
      "ko": "그냥 집 청소했어요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Have a good week!",
    "ko": "한 주 잘 보내요!",
    "swaps": [
     {
      "en": "Have a good weekend!",
      "ko": "주말 잘 보내요! (금요일에)"
     }
    ]
   }
  ]
 },
 {
  "day": 24,
  "title": "초대하고 초대받기",
  "enTitle": "Invitations",
  "place": "옆집 이웃이 이번 주말 파티에 저희 부부를 초대했어요.",
  "roles": {
   "A": "이웃",
   "B": "나"
  },
  "tipA": "초대받으면 'We'd love to!'로 기쁘게 대답하고, 'Should we bring anything?'까지 묻는 게 미국식 예의예요.",
  "tipB": "'potluck'이라는 모르는 단어가 나와요. 'What does ___ mean?'으로 뜻을 물어보면 돼요. 나머지 대답은 A와 거의 같아요.",
  "a": [
   {
    "r": "A",
    "en": "We're having a barbecue on Saturday. Can you come?",
    "ko": "저희 토요일에 바비큐 해요. 오실 수 있어요?",
    "pr": "위어 해빙 어 바비큐 온 쌔러데이. 캐뉴 컴?"
   },
   {
    "r": "B",
    "en": "We'd love to! Thank you.",
    "ko": "꼭 갈게요! 고마워요.",
    "pr": "위드 러브 투! 땡큐.",
    "nt": "⭐ 초대받았을 때 = 기꺼이 갈게요"
   },
   {
    "r": "A",
    "en": "Great! It starts at four.",
    "ko": "좋아요! 4시에 시작해요.",
    "pr": "그레잇! 잇 스탓츠 앳 포."
   },
   {
    "r": "B",
    "en": "Should we bring anything?",
    "ko": "저희 뭐 가져갈까요?",
    "pr": "슈드 위 브링 애니띵?",
    "nt": "미국에선 초대받으면 이렇게 묻는 게 예의예요"
   },
   {
    "r": "A",
    "en": "Maybe a drink or a snack.",
    "ko": "음료나 간식 정도요.",
    "pr": "메이비 어 드링크 오어 어 스낵."
   },
   {
    "r": "B",
    "en": "Okay. Can I bring Korean food?",
    "ko": "좋아요. 한국 음식 가져가도 돼요?",
    "pr": "오케이. 캐나이 브링 코리안 푸드?"
   },
   {
    "r": "A",
    "en": "Oh, yes! Everyone will love it.",
    "ko": "오, 좋죠! 다들 좋아할 거예요.",
    "pr": "오, 예스! 에브리원 윌 러빗."
   },
   {
    "r": "B",
    "en": "See you on Saturday!",
    "ko": "토요일에 봬요!",
    "pr": "씨 유 온 쌔러데이!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey! We're having a potluck on Sunday. Want to join us?",
    "ko": "안녕하세요! 저희 일요일에 포트럭 파티 해요. 같이 할래요?",
    "pr": "헤이! 위어 해빙 어 팟럭 온 썬데이. 워너 조이너스?"
   },
   {
    "r": "B",
    "en": "Sorry, what does potluck mean?",
    "ko": "죄송한데, 포트럭이 무슨 뜻이에요?",
    "pr": "쏘리, 왓 더즈 팟럭 민?",
    "nt": "⭐ 모르는 단어는 'What does ___ mean?'"
   },
   {
    "r": "A",
    "en": "Everyone brings one dish to share.",
    "ko": "다들 나눠 먹을 음식을 하나씩 가져와요.",
    "pr": "에브리원 브링즈 원 디쉬 투 쉐어.",
    "nt": "potluck = 각자 음식 하나씩 가져와서 나눠 먹는 모임"
   },
   {
    "r": "B",
    "en": "Oh, I see. We'd love to!",
    "ko": "아, 그렇군요. 꼭 갈게요!",
    "pr": "오, 아이 씨. 위드 러브 투!"
   },
   {
    "r": "A",
    "en": "Awesome! Come around six.",
    "ko": "좋아요! 6시쯤 오세요.",
    "pr": "어썸! 컴 어라운드 씩스."
   },
   {
    "r": "B",
    "en": "Can I bring Korean food?",
    "ko": "한국 음식 가져가도 돼요?",
    "pr": "캐나이 브링 코리안 푸드?"
   },
   {
    "r": "A",
    "en": "Absolutely! I've always wanted to try kimbap.",
    "ko": "물론이죠! 김밥 꼭 먹어 보고 싶었어요.",
    "pr": "앱솔룻리! 아이브 올웨이즈 원티드 투 츄라이 킴밥."
   },
   {
    "r": "B",
    "en": "Great! See you on Sunday!",
    "ko": "좋아요! 일요일에 봬요!",
    "pr": "그레잇! 씨 유 온 썬데이!"
   }
  ],
  "chunks": [
   {
    "en": "We'd love to!",
    "ko": "꼭 갈게요! (기꺼이요)",
    "star": true,
    "swaps": [
     {
      "en": "I'd love to!",
      "ko": "저 꼭 갈게요!"
     },
     {
      "en": "Sorry, we can't make it.",
      "ko": "죄송해요, 저희는 못 가요. (거절할 때)"
     }
    ]
   },
   {
    "en": "Should we bring anything?",
    "ko": "저희 뭐 가져갈까요?",
    "swaps": [
     {
      "en": "Should I bring anything?",
      "ko": "제가 뭐 가져갈까요?"
     },
     {
      "en": "What should we bring?",
      "ko": "뭘 가져가면 될까요?"
     }
    ]
   },
   {
    "en": "Can I bring Korean food?",
    "ko": "한국 음식 가져가도 돼요?",
    "swaps": [
     {
      "en": "Can I bring my {SP}?",
      "ko": "{SPKO} 데려가도 돼요?"
     },
     {
      "en": "Can I bring a friend?",
      "ko": "친구 데려가도 돼요?"
     }
    ]
   },
   {
    "en": "What does potluck mean?",
    "ko": "포트럭이 무슨 뜻이에요?",
    "swaps": [
     {
      "en": "What does this word mean?",
      "ko": "이 단어 무슨 뜻이에요?"
     },
     {
      "en": "What does RSVP mean?",
      "ko": "RSVP가 무슨 뜻이에요? (참석 여부를 알려 달라는 뜻)"
     }
    ]
   },
   {
    "en": "See you on Saturday!",
    "ko": "토요일에 봬요!",
    "swaps": [
     {
      "en": "See you on Sunday!",
      "ko": "일요일에 봬요!"
     },
     {
      "en": "See you then!",
      "ko": "그때 봬요!"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Would you like to come over for dinner?",
    "ko": "저희 집에 저녁 드시러 오실래요? (내가 초대할 때)",
    "swaps": [
     {
      "en": "Would you like to come over for coffee?",
      "ko": "저희 집에 커피 마시러 오실래요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "What time should we come?",
    "ko": "몇 시에 가면 돼요?",
    "swaps": [
     {
      "en": "What's your address?",
      "ko": "주소가 어떻게 돼요?"
     }
    ]
   }
  ]
 },
 {
  "day": 25,
  "title": "일자리 자기소개",
  "enTitle": "Introducing Yourself for a Job",
  "place": "동네 마트 직원 채용 면접을 보러 왔어요.",
  "roles": {
   "A": "매니저 (면접관)",
   "B": "나 (지원자)"
  },
  "tipA": "면접 대답은 짧고 분명하게! 한국에서 한 일, 영어 배우는 중, 일할 수 있는 시간 — 이 세 문장만 외워도 충분해요.",
  "tipB": "면접관이 'availability' 같은 어려운 단어를 써요. 뜻을 물어보는 건 전혀 부끄러운 일이 아니에요. 오히려 성실해 보여요.",
  "a": [
   {
    "r": "A",
    "en": "Hi, I'm Carlos, the manager. Nice to meet you.",
    "ko": "안녕하세요, 매니저 카를로스예요. 반가워요.",
    "pr": "하이, 아임 카알로스, 더 매니저. 나이스 투 미츄."
   },
   {
    "r": "B",
    "en": "Nice to meet you, too. I'm {ME}.",
    "ko": "저도 반가워요. 저는 {MEKO}.",
    "pr": "나이스 투 미츄 투. 아임 {MEPR}."
   },
   {
    "r": "A",
    "en": "So, tell me about yourself.",
    "ko": "자, 본인 소개를 해 주세요.",
    "pr": "쏘, 텔 미 어바웃 유어셀프."
   },
   {
    "r": "B",
    "en": "I'm from Korea. I was an office worker there.",
    "ko": "한국에서 왔어요. 거기서 회사원이었어요.",
    "pr": "아임 프럼 코리아. 아이 워즈 언 오피스 워커 데어.",
    "nt": "⭐ 한국에서 한 일은 딱 한 문장으로"
   },
   {
    "r": "A",
    "en": "Okay. How is your English?",
    "ko": "네. 영어는 어느 정도 해요?",
    "pr": "오케이. 하우즈 유어 잉글리시?"
   },
   {
    "r": "B",
    "en": "My English is not perfect, but I'm learning.",
    "ko": "영어가 완벽하진 않지만, 배우고 있어요.",
    "pr": "마이 잉글리시 이즈 낫 퍼펙트, 벗 아임 러닝.",
    "nt": "솔직하고 긍정적으로 말하면 좋은 인상을 줘요"
   },
   {
    "r": "A",
    "en": "That's fine. Can you work weekends?",
    "ko": "괜찮아요. 주말에도 일할 수 있어요?",
    "pr": "댓츠 파인. 캐뉴 웍 위켄즈?"
   },
   {
    "r": "B",
    "en": "Yes, I can work weekends.",
    "ko": "네, 주말에도 일할 수 있어요.",
    "pr": "예스, 아이 캔 웍 위켄즈."
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi, thanks for coming in. I'm Diane.",
    "ko": "안녕하세요, 와 주셔서 고마워요. 다이앤이에요.",
    "pr": "하이, 땡스 포 커밍 인. 아임 다이앤."
   },
   {
    "r": "B",
    "en": "Nice to meet you. I'm {ME}.",
    "ko": "반가워요. 저는 {MEKO}.",
    "pr": "나이스 투 미츄. 아임 {MEPR}."
   },
   {
    "r": "A",
    "en": "Have you worked in a store before?",
    "ko": "가게에서 일해 본 적 있어요?",
    "pr": "해뷰 웍틴 어 스토어 비포어?"
   },
   {
    "r": "B",
    "en": "No, but I was an office worker in Korea.",
    "ko": "아니요, 하지만 한국에서 회사원이었어요.",
    "pr": "노우, 벗 아이 워즈 언 오피스 워커 인 코리아."
   },
   {
    "r": "A",
    "en": "Okay. And what's your availability like?",
    "ko": "네. 그리고 근무 가능한 시간은 어떻게 돼요?",
    "pr": "오케이. 앤 왓츠 유어 어베일러빌리리 라익?"
   },
   {
    "r": "B",
    "en": "Sorry, what does availability mean?",
    "ko": "죄송한데, availability가 무슨 뜻이에요?",
    "pr": "쏘리, 왓 더즈 어베일러빌리리 민?",
    "nt": "⭐ 면접에서도 모르면 물어봐요"
   },
   {
    "r": "A",
    "en": "When can you work? What days and times?",
    "ko": "언제 일할 수 있어요? 무슨 요일, 몇 시요?",
    "pr": "웬 캐뉴 웍? 왓 데이즈 앤 타임즈?"
   },
   {
    "r": "B",
    "en": "I can work weekends and nights.",
    "ko": "주말이랑 밤에 일할 수 있어요.",
    "pr": "아이 캔 웍 위켄즈 앤 나잇츠.",
    "nt": "availability = 일할 수 있는 요일·시간 (면접 단골 질문)"
   }
  ],
  "chunks": [
   {
    "en": "I was an office worker in Korea.",
    "ko": "한국에서 회사원이었어요.",
    "star": true,
    "swaps": [
     {
      "en": "I was a cook in Korea.",
      "ko": "한국에서 요리사였어요."
     },
     {
      "en": "I was a teacher in Korea.",
      "ko": "한국에서 선생님이었어요."
     }
    ]
   },
   {
    "en": "My English is not perfect, but I'm learning.",
    "ko": "영어가 완벽하진 않지만, 배우고 있어요.",
    "swaps": [
     {
      "en": "My English is not good, but I'm learning.",
      "ko": "영어를 잘 못하지만, 배우고 있어요."
     }
    ]
   },
   {
    "en": "I can work weekends.",
    "ko": "주말에도 일할 수 있어요.",
    "swaps": [
     {
      "en": "I can work nights.",
      "ko": "밤에도 일할 수 있어요."
     },
     {
      "en": "I can start tomorrow.",
      "ko": "내일부터 일할 수 있어요."
     }
    ]
   },
   {
    "en": "I'm from Korea.",
    "ko": "한국에서 왔어요.",
    "swaps": [
     {
      "en": "We're from Korea.",
      "ko": "저희는 한국에서 왔어요."
     },
     {
      "en": "I'm from Seoul.",
      "ko": "서울에서 왔어요."
     }
    ]
   },
   {
    "en": "What does availability mean?",
    "ko": "availability가 무슨 뜻이에요?",
    "swaps": [
     {
      "en": "What does shift mean?",
      "ko": "shift가 무슨 뜻이에요? (교대 근무 시간)"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Thank you for your time.",
    "ko": "시간 내 주셔서 감사해요. (면접 끝날 때)",
    "swaps": [
     {
      "en": "Thank you for the interview.",
      "ko": "면접 기회 주셔서 감사해요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "I can start anytime.",
    "ko": "언제든 시작할 수 있어요.",
    "swaps": [
     {
      "en": "I can start next Monday.",
      "ko": "다음 주 월요일부터 할 수 있어요."
     }
    ]
   }
  ]
 },
 {
  "day": 26,
  "title": "직장 첫날",
  "enTitle": "First Day at Work",
  "place": "마트에서 일하는 첫날, 매니저와 동료를 만나요.",
  "roles": {
   "A": "매니저·동료",
   "B": "나 (새 직원)"
  },
  "tipA": "첫날엔 인사와 'Where can I ___?' 질문이 제일 많이 필요해요. 'Got it.'은 '알겠어요'라는 뜻으로 직장에서 정말 자주 써요.",
  "tipB": "'clock in' 같은 직장 용어가 나와요. 모르면 바로 'What does ___ mean?' 하세요. 첫날엔 다들 이해해 줘요.",
  "a": [
   {
    "r": "A",
    "en": "Good morning! Welcome to the team.",
    "ko": "좋은 아침이에요! 우리 팀에 온 걸 환영해요.",
    "pr": "굿 모닝! 웰컴 투 더 팀."
   },
   {
    "r": "B",
    "en": "Thank you. I'm happy to be here.",
    "ko": "고마워요. 여기서 일하게 돼서 기뻐요.",
    "pr": "땡큐. 아임 해피 투 비 히어.",
    "nt": "⭐ 첫날 인사는 이 한 문장"
   },
   {
    "r": "A",
    "en": "This is Jake. He will help you today.",
    "ko": "이쪽은 제이크예요. 오늘 도와줄 거예요.",
    "pr": "디스 이즈 제익. 히 윌 헬퓨 투데이."
   },
   {
    "r": "B",
    "en": "Hi, Jake. Nice to meet you.",
    "ko": "안녕하세요, 제이크. 반가워요.",
    "pr": "하이, 제익. 나이스 투 미츄."
   },
   {
    "r": "A",
    "en": "Your shift is nine to five.",
    "ko": "근무 시간은 9시부터 5시까지예요.",
    "pr": "유어 쉬프트 이즈 나인 투 파이브."
   },
   {
    "r": "B",
    "en": "Okay. Where can I put my bag?",
    "ko": "네. 가방은 어디에 두면 돼요?",
    "pr": "오케이. 웨어 캐나이 풋 마이 백?"
   },
   {
    "r": "A",
    "en": "In the break room. Lunch is at twelve.",
    "ko": "휴게실에요. 점심은 12시예요.",
    "pr": "인 더 브레익 룸. 런치 이즈 앳 트웰브."
   },
   {
    "r": "B",
    "en": "Got it. Thank you!",
    "ko": "알겠어요. 고마워요!",
    "pr": "갓잇. 땡큐!",
    "nt": "Got it = 알겠어요 (직장에서 아주 많이 써요)"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi! Are you the new cashier?",
    "ko": "안녕하세요! 새로 온 계산원이세요?",
    "pr": "하이! 아 유 더 뉴 캐시어?"
   },
   {
    "r": "B",
    "en": "Yes, today is my first day.",
    "ko": "네, 오늘이 첫날이에요.",
    "pr": "예스, 투데이 이즈 마이 퍼슷 데이."
   },
   {
    "r": "A",
    "en": "Cool! I'm Jasmine. I'll show you around.",
    "ko": "좋아요! 전 재스민이에요. 제가 여기저기 안내해 줄게요.",
    "pr": "쿨! 아임 재즈민. 아일 쇼우 유 어라운드."
   },
   {
    "r": "B",
    "en": "Thank you. I'm happy to be here.",
    "ko": "고마워요. 여기서 일하게 돼서 기뻐요.",
    "pr": "땡큐. 아임 해피 투 비 히어."
   },
   {
    "r": "A",
    "en": "First, you need to clock in over there.",
    "ko": "먼저, 저기서 출근 체크를 해야 해요.",
    "pr": "퍼슷, 유 니드 투 클라킨 오버 데어."
   },
   {
    "r": "B",
    "en": "Sorry, what does clock in mean?",
    "ko": "죄송한데, clock in이 무슨 뜻이에요?",
    "pr": "쏘리, 왓 더즈 클라킨 민?",
    "nt": "⭐ 직장 용어는 모르면 바로 물어보기"
   },
   {
    "r": "A",
    "en": "You scan your card here when you start.",
    "ko": "일 시작할 때 여기서 카드를 찍는 거예요.",
    "pr": "유 스캔 유어 카드 히어 웬 유 스탓.",
    "nt": "clock in = 출근 체크, clock out = 퇴근 체크"
   },
   {
    "r": "B",
    "en": "Oh, I see. Got it, thank you!",
    "ko": "아, 그렇군요. 알겠어요, 고마워요!",
    "pr": "오, 아이 씨. 갓잇, 땡큐!"
   }
  ],
  "chunks": [
   {
    "en": "I'm happy to be here.",
    "ko": "여기 오게 돼서 기뻐요.",
    "star": true,
    "swaps": [
     {
      "en": "We're happy to be here.",
      "ko": "저희 여기 오게 돼서 기뻐요."
     },
     {
      "en": "I'm happy to work here.",
      "ko": "여기서 일하게 돼서 기뻐요."
     }
    ]
   },
   {
    "en": "Today is my first day.",
    "ko": "오늘이 첫날이에요.",
    "swaps": [
     {
      "en": "Tomorrow is my first day.",
      "ko": "내일이 첫날이에요."
     },
     {
      "en": "This is my first job in America.",
      "ko": "미국에서 첫 직장이에요."
     }
    ]
   },
   {
    "en": "Where can I put my bag?",
    "ko": "가방은 어디에 두면 돼요?",
    "swaps": [
     {
      "en": "Where can I put my coat?",
      "ko": "코트는 어디에 두면 돼요?"
     },
     {
      "en": "Where can I get a uniform?",
      "ko": "유니폼은 어디서 받아요?"
     }
    ]
   },
   {
    "en": "Got it.",
    "ko": "알겠어요.",
    "swaps": [
     {
      "en": "I understand.",
      "ko": "이해했어요."
     },
     {
      "en": "I don't understand.",
      "ko": "이해가 안 돼요."
     }
    ]
   },
   {
    "en": "What does clock in mean?",
    "ko": "clock in이 무슨 뜻이에요?",
    "swaps": [
     {
      "en": "What does clock out mean?",
      "ko": "clock out이 무슨 뜻이에요? (퇴근 체크)"
     }
    ]
   },
   {
    "bonus": true,
    "en": "My shift is nine to five.",
    "ko": "제 근무 시간은 9시부터 5시까지예요.",
    "swaps": [
     {
      "en": "My shift starts at seven.",
      "ko": "제 근무는 7시에 시작해요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "When is my break?",
    "ko": "제 휴식 시간은 언제예요?",
    "swaps": [
     {
      "en": "Where is the break room?",
      "ko": "휴게실은 어디예요?"
     }
    ]
   }
  ]
 },
 {
  "day": 27,
  "title": "일하다 도움 요청",
  "enTitle": "Asking for Help at Work",
  "place": "마트에서 일하다가 모르는 게 생겨서 동료에게 도움을 청해요.",
  "roles": {
   "A": "동료",
   "B": "나"
  },
  "tipA": "도움 요청은 'Can you help me, please?' 한 문장으로 시작하세요. 그다음 'Where are ___?' 'How do I ___?'로 구체적으로 물으면 돼요.",
  "tipB": "동료가 빠르게 설명해요. 천천히 말해 달라고 한 뒤, 핵심 단어(batteries, registers)만 잡으면 충분해요.",
  "a": [
   {
    "r": "A",
    "en": "Hey, how's it going?",
    "ko": "안녕하세요, 일은 할 만해요?",
    "pr": "헤이, 하우짓 고잉?"
   },
   {
    "r": "B",
    "en": "Good, but can you help me, please?",
    "ko": "괜찮아요, 근데 좀 도와주실래요?",
    "pr": "굿, 벗 캐뉴 헬프 미, 플리즈?",
    "nt": "⭐ 직장에서 제일 많이 쓸 문장"
   },
   {
    "r": "A",
    "en": "Sure. What do you need?",
    "ko": "그럼요. 뭐가 필요해요?",
    "pr": "슈어. 왓 두 유 니드?"
   },
   {
    "r": "B",
    "en": "Where are the paper towels?",
    "ko": "키친타월 어디 있어요?",
    "pr": "웨어 아 더 페이퍼 타월즈?",
    "nt": "paper towel = 키친타월"
   },
   {
    "r": "A",
    "en": "Aisle five, on the bottom shelf.",
    "ko": "5번 통로, 맨 아래 칸이요.",
    "pr": "아일 파이브, 온 더 바럼 쉘프."
   },
   {
    "r": "B",
    "en": "Thanks! How do I use this machine?",
    "ko": "고마워요! 이 기계는 어떻게 써요?",
    "pr": "땡스! 하우 두 아이 유즈 디스 머신?"
   },
   {
    "r": "A",
    "en": "Let me show you. Just press this button.",
    "ko": "보여 줄게요. 이 버튼만 누르면 돼요.",
    "pr": "렛 미 쇼우 유. 저슷 프레스 디스 버른."
   },
   {
    "r": "B",
    "en": "Oh, I see. Thank you so much!",
    "ko": "아, 그렇구나. 정말 고마워요!",
    "pr": "오, 아이 씨. 땡큐 쏘 머치!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey, you look a little lost. Everything okay?",
    "ko": "좀 헤매는 것 같네요. 괜찮아요?",
    "pr": "헤이, 유 룩 어 리를 로스트. 에브리띵 오케이?"
   },
   {
    "r": "B",
    "en": "Not really. Can you help me, please?",
    "ko": "사실 좀요. 좀 도와주실래요?",
    "pr": "낫 리을리. 캐뉴 헬프 미, 플리즈?"
   },
   {
    "r": "A",
    "en": "Of course. What's up?",
    "ko": "물론이죠. 무슨 일이에요?",
    "pr": "어브 코스. 왓썹?"
   },
   {
    "r": "B",
    "en": "A customer is looking for batteries.",
    "ko": "손님이 건전지를 찾고 있어요.",
    "pr": "어 커스터머 이즈 루킹 포 배러리즈."
   },
   {
    "r": "A",
    "en": "Oh, those are up front, by the registers.",
    "ko": "아, 그건 앞쪽 계산대 옆에 있어요.",
    "pr": "오, 도즈 아 업 프런트, 바이 더 레지스터즈.",
    "nt": "register = 계산대"
   },
   {
    "r": "B",
    "en": "Sorry, can you speak slowly, please?",
    "ko": "죄송한데, 천천히 말해 주실래요?",
    "pr": "쏘리, 캐뉴 스픽 슬로울리, 플리즈?",
    "nt": "⭐ 동료에게도 편하게 되물어요"
   },
   {
    "r": "A",
    "en": "Batteries are next to the registers.",
    "ko": "건전지는 계산대 옆에 있어요.",
    "pr": "배러리즈 아 넥스 투 더 레지스터즈."
   },
   {
    "r": "B",
    "en": "Thank you so much! I really appreciate it.",
    "ko": "정말 고마워요! 진심으로 감사해요.",
    "pr": "땡큐 쏘 머치! 아이 리을리 어프리시에이릿."
   }
  ],
  "chunks": [
   {
    "en": "Can you help me, please?",
    "ko": "좀 도와주실래요?",
    "star": true,
    "swaps": [
     {
      "en": "Can you show me, please?",
      "ko": "좀 보여 주실래요?"
     },
     {
      "en": "Can you check this, please?",
      "ko": "이것 좀 확인해 주실래요?"
     }
    ]
   },
   {
    "en": "Where are the paper towels?",
    "ko": "키친타월 어디 있어요?",
    "swaps": [
     {
      "en": "Where are the batteries?",
      "ko": "건전지 어디 있어요?"
     },
     {
      "en": "Where is the bathroom?",
      "ko": "화장실 어디예요?"
     }
    ]
   },
   {
    "en": "How do I use this machine?",
    "ko": "이 기계는 어떻게 써요?",
    "swaps": [
     {
      "en": "How do I do this?",
      "ko": "이건 어떻게 해요?"
     },
     {
      "en": "How do I open this?",
      "ko": "이건 어떻게 열어요?"
     }
    ]
   },
   {
    "en": "A customer is looking for batteries.",
    "ko": "손님이 건전지를 찾고 있어요.",
    "swaps": [
     {
      "en": "A customer is looking for milk.",
      "ko": "손님이 우유를 찾고 있어요."
     },
     {
      "en": "A customer has a question.",
      "ko": "손님이 물어볼 게 있대요."
     }
    ]
   },
   {
    "en": "Thank you so much!",
    "ko": "정말 고마워요!",
    "swaps": [
     {
      "en": "Thanks for your help!",
      "ko": "도와줘서 고마워요!"
     },
     {
      "en": "I really appreciate it.",
      "ko": "진심으로 감사해요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "I'm sorry, I made a mistake.",
    "ko": "죄송해요, 제가 실수했어요.",
    "swaps": [
     {
      "en": "I'm sorry, I'm still learning.",
      "ko": "죄송해요, 아직 배우는 중이에요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Aisle five.",
    "ko": "5번 통로요.",
    "swaps": [
     {
      "en": "On the top shelf.",
      "ko": "맨 위 칸이요."
     },
     {
      "en": "On the bottom shelf.",
      "ko": "맨 아래 칸이요."
     }
    ]
   }
  ]
 },
 {
  "day": 28,
  "title": "복습: 넷째 주 종합",
  "enTitle": "Week 4 Review",
  "place": "월요일 아침, 직장 휴게실에서 동료와 날씨·주말·초대 이야기를 해요.",
  "roles": {
   "A": "직장 동료",
   "B": "나"
  },
  "tipA": "이번 주 표현(날씨·주말·초대)을 한 대화에 모았어요. 막히는 문장이 있으면 해당 Day로 돌아가서 한 번 더 연습하세요.",
  "tipB": "동료가 'you guys'(두 분, 너희들)처럼 빠르고 편하게 말해요. 못 알아들어도 되묻기 한 번이면 해결돼요.",
  "a": [
   {
    "r": "A",
    "en": "Morning! It's so cold today.",
    "ko": "좋은 아침이에요! 오늘 엄청 춥네요.",
    "pr": "모닝! 잇츠 쏘 콜드 투데이."
   },
   {
    "r": "B",
    "en": "Yes, it's really cold today. How was your weekend?",
    "ko": "네, 오늘 정말 춥네요. 주말 잘 보냈어요?",
    "pr": "예스, 잇츠 리을리 콜드 투데이. 하우 워즈 유어 위켄드?",
    "nt": "⭐ 날씨 대답 + 주말 질문 = 스몰토크 완성"
   },
   {
    "r": "A",
    "en": "It was good! I went hiking. You?",
    "ko": "좋았어요! 등산 갔었어요. 그쪽은요?",
    "pr": "잇 워즈 굿! 아이 웬 하이킹. 유?"
   },
   {
    "r": "B",
    "en": "We went to the park. It was fun.",
    "ko": "저희는 공원에 갔어요. 재밌었어요.",
    "pr": "위 웬 투 더 파악. 잇 워즈 펀."
   },
   {
    "r": "A",
    "en": "Hey, we're having a party on Friday. Can you come?",
    "ko": "저기, 저희 금요일에 파티해요. 올 수 있어요?",
    "pr": "헤이, 위어 해빙 어 파리 온 프라이데이. 캐뉴 컴?"
   },
   {
    "r": "B",
    "en": "I'd love to! Should I bring anything?",
    "ko": "꼭 갈게요! 제가 뭐 가져갈까요?",
    "pr": "아이드 러브 투! 슈다이 브링 애니띵?"
   },
   {
    "r": "A",
    "en": "No, just come and have fun!",
    "ko": "아니요, 그냥 와서 재밌게 놀아요!",
    "pr": "노우, 저슷 컴 앤 해브 펀!"
   },
   {
    "r": "B",
    "en": "Sounds fun! See you on Friday!",
    "ko": "재밌겠네요! 금요일에 봬요!",
    "pr": "싸운즈 펀! 씨 유 온 프라이데이!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Brr! Did you see the snow outside?",
    "ko": "으, 추워! 밖에 눈 온 거 봤어요?",
    "pr": "브르르! 디쥬 씨 더 스노우 아웃싸이드?"
   },
   {
    "r": "B",
    "en": "Yes, it's really cold today.",
    "ko": "네, 오늘 정말 춥네요.",
    "pr": "예스, 잇츠 리을리 콜드 투데이."
   },
   {
    "r": "A",
    "en": "So, what did you guys do this weekend?",
    "ko": "그래서, 두 분은 이번 주말에 뭐 했어요?",
    "pr": "쏘, 왓 디쥬 가이즈 두 디스 위켄드?",
    "nt": "you guys = 너희들, 두 분 (아주 흔한 말)"
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 이번 주도 되묻기는 필수"
   },
   {
    "r": "A",
    "en": "Your weekend. What did you do?",
    "ko": "주말이요. 뭐 했어요?",
    "pr": "유어 위켄드. 왓 디쥬 두?"
   },
   {
    "r": "B",
    "en": "Oh! We went to the park. It was fun.",
    "ko": "아! 저희는 공원에 갔어요. 재밌었어요.",
    "pr": "오! 위 웬 투 더 파악. 잇 워즈 펀."
   },
   {
    "r": "A",
    "en": "Nice! Hey, want to come to my birthday dinner on Saturday?",
    "ko": "좋네요! 저기, 토요일에 제 생일 저녁 식사에 올래요?",
    "pr": "나이스! 헤이, 워너 컴 투 마이 버쓰데이 디너 온 쌔러데이?"
   },
   {
    "r": "B",
    "en": "We'd love to! Thank you so much!",
    "ko": "저희 꼭 갈게요! 정말 고마워요!",
    "pr": "위드 러브 투! 땡큐 쏘 머치!"
   }
  ],
  "chunks": [
   {
    "en": "Can you help me, please?",
    "ko": "좀 도와주실래요? (Day 27)",
    "star": true,
    "swaps": [
     {
      "en": "Can you show me, please?",
      "ko": "좀 보여 주실래요?"
     },
     {
      "en": "Can you speak slowly, please?",
      "ko": "천천히 말해 주실래요?"
     }
    ]
   },
   {
    "en": "It's really cold today.",
    "ko": "오늘 정말 춥네요. (Day 22)",
    "swaps": [
     {
      "en": "It's really nice today.",
      "ko": "오늘 날씨 정말 좋네요."
     },
     {
      "en": "It's really hot today.",
      "ko": "오늘 정말 덥네요."
     }
    ]
   },
   {
    "en": "How was your weekend?",
    "ko": "주말 잘 보냈어요? (Day 23)",
    "swaps": [
     {
      "en": "How was your day?",
      "ko": "오늘 하루 어땠어요?"
     },
     {
      "en": "How about you?",
      "ko": "그쪽은요?"
     }
    ]
   },
   {
    "en": "I'd love to!",
    "ko": "꼭 갈게요! (기꺼이요) (Day 24)",
    "swaps": [
     {
      "en": "We'd love to!",
      "ko": "저희 꼭 갈게요!"
     },
     {
      "en": "Sorry, I can't make it.",
      "ko": "죄송해요, 저는 못 가요."
     }
    ]
   },
   {
    "en": "I can work weekends.",
    "ko": "주말에도 일할 수 있어요. (Day 25)",
    "swaps": [
     {
      "en": "I can work nights.",
      "ko": "밤에도 일할 수 있어요."
     },
     {
      "en": "I can start next week.",
      "ko": "다음 주부터 일할 수 있어요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Should I bring anything?",
    "ko": "제가 뭐 가져갈까요?",
    "swaps": [
     {
      "en": "Should we bring anything?",
      "ko": "저희 뭐 가져갈까요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Got it. Thank you!",
    "ko": "알겠어요. 고마워요! (Day 26)",
    "swaps": [
     {
      "en": "I'm happy to be here.",
      "ko": "여기 오게 돼서 기뻐요."
     }
    ]
   }
  ]
 },
 {
  "day": 29,
  "title": "교환·환불",
  "enTitle": "Returning Something",
  "place": "지난주에 산 셔츠가 작아서 영수증을 들고 가게에 왔어요.",
  "roles": {
   "A": "매장 직원",
   "B": "나"
  },
  "tipA": "반품하러 갈 땐 물건과 영수증을 꼭 챙기세요. 'I'd like to return this, please.' 한 문장으로 시작하면 돼요!",
  "tipB": "직원이 'store credit'(가게 적립금)을 권해요. 모르면 뜻을 묻고, 현금이나 카드로 돌려받고 싶으면 'my money back'이라고 말하세요.",
  "a": [
   {
    "r": "A",
    "en": "Hi, how can I help you?",
    "ko": "안녕하세요, 뭘 도와드릴까요?",
    "pr": "하이, 하우 캐나이 헬퓨?"
   },
   {
    "r": "B",
    "en": "I'd like to return this, please.",
    "ko": "이거 반품하고 싶어요.",
    "pr": "아이드 라익 투 리턴 디스, 플리즈.",
    "nt": "⭐ 반품할 때 첫 문장"
   },
   {
    "r": "A",
    "en": "Sure. What's wrong with it?",
    "ko": "네. 뭐가 문제인가요?",
    "pr": "슈어. 왓츠 뤙 위딧?"
   },
   {
    "r": "B",
    "en": "It's too small.",
    "ko": "너무 작아요.",
    "pr": "잇츠 투 스몰."
   },
   {
    "r": "A",
    "en": "Do you have the receipt?",
    "ko": "영수증 있으세요?",
    "pr": "두 유 해브 더 리씻?",
    "nt": "미국은 반품할 때 영수증(receipt)이 거의 필수! 버리지 말고 모아 두세요"
   },
   {
    "r": "B",
    "en": "Yes, here it is.",
    "ko": "네, 여기 있어요.",
    "pr": "예스, 히어 이리즈."
   },
   {
    "r": "A",
    "en": "Okay. Do you want a refund or an exchange?",
    "ko": "네. 환불해 드릴까요, 교환해 드릴까요?",
    "pr": "오케이. 두 유 워너 리펀드 오어 언 익스체인지?"
   },
   {
    "r": "B",
    "en": "A refund, please. Thank you.",
    "ko": "환불해 주세요. 고마워요.",
    "pr": "어 리펀드, 플리즈. 땡큐."
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hi there! What can I do for you today?",
    "ko": "안녕하세요! 오늘 뭘 도와드릴까요?",
    "pr": "하이 데어! 왓 캐나이 두 포 유 투데이?"
   },
   {
    "r": "B",
    "en": "I'd like to return this, please.",
    "ko": "이거 반품하고 싶어요.",
    "pr": "아이드 라익 투 리턴 디스, 플리즈."
   },
   {
    "r": "A",
    "en": "Okay. Is there something wrong with it?",
    "ko": "네. 뭔가 문제가 있나요?",
    "pr": "오케이. 이즈 데어 썸띵 뤙 위딧?"
   },
   {
    "r": "B",
    "en": "It's too small.",
    "ko": "너무 작아요.",
    "pr": "잇츠 투 스몰."
   },
   {
    "r": "A",
    "en": "Got it. Would you like store credit or your money back?",
    "ko": "알겠어요. 매장 적립금으로 드릴까요, 돈으로 돌려 드릴까요?",
    "pr": "갓잇. 우쥬 라익 스토어 크레딧 오어 유어 머니 백?"
   },
   {
    "r": "B",
    "en": "Sorry, what does store credit mean?",
    "ko": "죄송한데, store credit이 무슨 뜻이에요?",
    "pr": "쏘리, 왓 더즈 스토어 크레딧 민?",
    "nt": "⭐ 모르는 선택지는 꼭 물어보고 고르세요"
   },
   {
    "r": "A",
    "en": "It's like a gift card for our store.",
    "ko": "저희 가게에서만 쓰는 상품권 같은 거예요.",
    "pr": "잇츠 라이커 기프트 카드 포 아워 스토어."
   },
   {
    "r": "B",
    "en": "Oh, I see. I'd like my money back, please.",
    "ko": "아, 그렇군요. 그냥 돈으로 돌려받고 싶어요.",
    "pr": "오, 아이 씨. 아이드 라익 마이 머니 백, 플리즈.",
    "nt": "money back = 결제한 현금·카드로 돌려받기"
   }
  ],
  "chunks": [
   {
    "en": "I'd like to return this, please.",
    "ko": "이거 반품하고 싶어요.",
    "star": true,
    "swaps": [
     {
      "en": "I'd like to exchange this, please.",
      "ko": "이거 교환하고 싶어요."
     }
    ]
   },
   {
    "en": "It's too small.",
    "ko": "너무 작아요.",
    "swaps": [
     {
      "en": "It's too big.",
      "ko": "너무 커요."
     },
     {
      "en": "It doesn't work.",
      "ko": "작동이 안 돼요."
     }
    ]
   },
   {
    "en": "Here it is.",
    "ko": "여기 있어요.",
    "swaps": [
     {
      "en": "Here you go.",
      "ko": "여기요."
     },
     {
      "en": "I don't have the receipt.",
      "ko": "영수증이 없어요."
     }
    ]
   },
   {
    "en": "A refund, please.",
    "ko": "환불해 주세요.",
    "swaps": [
     {
      "en": "An exchange, please.",
      "ko": "교환해 주세요."
     },
     {
      "en": "Store credit is fine.",
      "ko": "적립금으로 받아도 괜찮아요."
     }
    ]
   },
   {
    "en": "I'd like my money back, please.",
    "ko": "돈으로 돌려받고 싶어요.",
    "swaps": [
     {
      "en": "I'd like a bigger size, please.",
      "ko": "더 큰 사이즈로 주세요."
     },
     {
      "en": "I'd like a smaller size, please.",
      "ko": "더 작은 사이즈로 주세요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Can I return this without a receipt?",
    "ko": "영수증 없이 반품할 수 있어요?",
    "swaps": [
     {
      "en": "Can I exchange this without a receipt?",
      "ko": "영수증 없이 교환할 수 있어요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Do I need the receipt?",
    "ko": "영수증이 필요해요?",
    "swaps": [
     {
      "en": "Do I need my card?",
      "ko": "카드가 필요해요? (결제한 카드)"
     }
    ]
   }
  ]
 },
 {
  "day": 30,
  "title": "미용실",
  "enTitle": "At the Hair Salon",
  "place": "예약한 날, 동네 미용실에 머리를 자르러 왔어요.",
  "roles": {
   "A": "미용사",
   "B": "나 (손님)"
  },
  "tipA": "미용실에선 말보다 보여 주기! 원하는 머리 사진을 휴대폰에 준비하고, 길이는 손으로 보여 주면서 'About this much, please.' 하세요.",
  "tipB": "미용사가 layers(층), bangs(앞머리) 같은 미용 단어를 써요. 못 알아들으면 되묻고, 'Just a trim, please.'로 대답해도 충분해요.",
  "a": [
   {
    "r": "A",
    "en": "Hi! Do you have an appointment?",
    "ko": "안녕하세요! 예약하셨어요?",
    "pr": "하이! 두 유 해번 어포인먼트?"
   },
   {
    "r": "B",
    "en": "Yes, at two o'clock. I'm {ME}.",
    "ko": "네, 2시예요. 저는 {MEKO}.",
    "pr": "예스, 앳 투 어클락. 아임 {MEPR}."
   },
   {
    "r": "A",
    "en": "Great, have a seat. What are we doing today?",
    "ko": "좋아요, 앉으세요. 오늘은 어떻게 해 드릴까요?",
    "pr": "그레잇, 해버 씻. 왓 아 위 두잉 투데이?"
   },
   {
    "r": "B",
    "en": "Just a trim, please.",
    "ko": "다듬기만 해 주세요.",
    "pr": "저스트 어 트림, 플리즈.",
    "nt": "⭐ trim = 길이는 거의 그대로, 살짝 다듬기"
   },
   {
    "r": "A",
    "en": "How short do you want it?",
    "ko": "얼마나 짧게 해 드릴까요?",
    "pr": "하우 숏 두 유 워닛?"
   },
   {
    "r": "B",
    "en": "About this much, please.",
    "ko": "이 정도만요. (손으로 길이를 보여 주며)",
    "pr": "어바웃 디스 머치, 플리즈.",
    "nt": "말이 막히면 손가락으로 길이를 보여 주세요"
   },
   {
    "r": "A",
    "en": "All done! How does it look?",
    "ko": "다 됐어요! 어때요?",
    "pr": "올 던! 하우 더짓 룩?"
   },
   {
    "r": "B",
    "en": "It looks great. Thank you so much!",
    "ko": "정말 좋아요. 정말 고마워요!",
    "pr": "잇 룩스 그레잇. 땡큐 쏘 머치!",
    "nt": "미국 미용실은 보통 요금의 15~20%를 팁으로 줘요"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey! Are you my two o'clock?",
    "ko": "안녕하세요! 2시 예약 손님이세요?",
    "pr": "헤이! 아 유 마이 투 어클락?"
   },
   {
    "r": "B",
    "en": "Yes, I'm {ME}.",
    "ko": "네, 저는 {MEKO}.",
    "pr": "예스, 아임 {MEPR}."
   },
   {
    "r": "A",
    "en": "Awesome. So what are you thinking? Layers? Bangs?",
    "ko": "좋아요. 어떻게 하고 싶으세요? 층 낼까요? 앞머리 할까요?",
    "pr": "어썸. 쏘 왓 아 유 띵킹? 레이어즈? 뱅즈?",
    "nt": "layers = 층 내기, bangs = 앞머리"
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 미용 단어는 어려우니 편하게 되물어요"
   },
   {
    "r": "A",
    "en": "What style do you want today?",
    "ko": "오늘 어떤 스타일로 하고 싶으세요?",
    "pr": "왓 스타일 두 유 원 투데이?"
   },
   {
    "r": "B",
    "en": "Just a trim, please. Not too short.",
    "ko": "다듬기만 해 주세요. 너무 짧지 않게요.",
    "pr": "저스트 어 트림, 플리즈. 낫 투 숏.",
    "nt": "Not too short = 너무 짧지 않게 (꼭 기억!)"
   },
   {
    "r": "A",
    "en": "You got it. Want me to wash it first?",
    "ko": "알겠어요. 먼저 머리 감겨 드릴까요?",
    "pr": "유 가릿. 원 미 투 워쉬잇 퍼슷?"
   },
   {
    "r": "B",
    "en": "Yes, please. Thank you!",
    "ko": "네, 그렇게 해 주세요. 고마워요!",
    "pr": "예스, 플리즈. 땡큐!"
   }
  ],
  "chunks": [
   {
    "en": "Just a trim, please.",
    "ko": "다듬기만 해 주세요.",
    "star": true,
    "swaps": [
     {
      "en": "Just a haircut, please.",
      "ko": "그냥 커트만 해 주세요."
     },
     {
      "en": "A little shorter, please.",
      "ko": "조금만 더 짧게 해 주세요."
     }
    ]
   },
   {
    "en": "Not too short, please.",
    "ko": "너무 짧지 않게 해 주세요.",
    "swaps": [
     {
      "en": "Short on the sides, please.",
      "ko": "옆은 짧게 해 주세요."
     }
    ]
   },
   {
    "en": "About this much, please.",
    "ko": "이 정도만요. (손으로 보여 주며)",
    "swaps": [
     {
      "en": "About two inches, please.",
      "ko": "5센티 정도요. (2인치 ≈ 5cm)"
     },
     {
      "en": "About one inch, please.",
      "ko": "2.5센티 정도요. (1인치 ≈ 2.5cm)"
     }
    ]
   },
   {
    "en": "I have an appointment at two.",
    "ko": "2시에 예약했어요.",
    "swaps": [
     {
      "en": "I have an appointment at ten.",
      "ko": "10시에 예약했어요."
     },
     {
      "en": "I'd like to make an appointment.",
      "ko": "예약하고 싶어요."
     }
    ]
   },
   {
    "en": "It looks great. Thank you so much!",
    "ko": "정말 좋아요. 정말 고마워요!",
    "swaps": [
     {
      "en": "I love it!",
      "ko": "너무 마음에 들어요!"
     }
    ]
   },
   {
    "bonus": true,
    "en": "Can I pay by card?",
    "ko": "카드로 계산할 수 있어요?",
    "swaps": [
     {
      "en": "Can I add a tip?",
      "ko": "팁을 추가할 수 있어요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "How much is a haircut?",
    "ko": "커트는 얼마예요?",
    "swaps": [
     {
      "en": "How much is a perm?",
      "ko": "파마는 얼마예요?"
     },
     {
      "en": "How much is a color?",
      "ko": "염색은 얼마예요?"
     }
    ]
   }
  ]
 },
 {
  "day": 31,
  "title": "졸업: 새 동네에서의 하루",
  "enTitle": "Final: A Day in Our New Town",
  "place": "이사 온 지 한 달, 이웃·단골 카페·동네 길에서 하루를 보내요.",
  "roles": {
   "A": "동네 사람들 (이웃·카페 직원·지나가는 사람)",
   "B": "나"
  },
  "tipA": "한 달 동안 배운 문장들이 하루에 다 나와요. 이웃 인사, 되묻기, 카페 주문, 그리고 이제는 길 안내까지! 장면마다 A 역할이 바뀌어요.",
  "tipB": "단골 카페에서 'The usual?'이라고 물어봐요. 모르는 말이 나와도 이제 되묻고, 웃으면서 'Thank you so much!' 하면 돼요. 한 달 동안 정말 수고 많았어요! 🎉",
  "a": [
   {
    "r": "A",
    "en": "Good morning! How are you settling in?",
    "ko": "(이웃) 좋은 아침이에요! 이제 좀 적응됐어요?",
    "pr": "굿 모닝! 하우 아 유 쎄를링 인?"
   },
   {
    "r": "B",
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "pr": "쏘리, 캐뉴 세이 댓 어겐?",
    "nt": "⭐ 한 달 동안 제일 많이 쓴 문장"
   },
   {
    "r": "A",
    "en": "Do you like it here?",
    "ko": "여기 마음에 들어요?",
    "pr": "두 유 라이킷 히어?"
   },
   {
    "r": "B",
    "en": "Yes, we love it here. Thank you!",
    "ko": "네, 여기 정말 좋아요. 고마워요!",
    "pr": "예스, 위 러빗 히어. 땡큐!"
   },
   {
    "r": "A",
    "en": "Hi! What can I get you?",
    "ko": "(카페에서) 안녕하세요! 뭐 드릴까요?",
    "pr": "하이! 왓 캐나이 게츄?"
   },
   {
    "r": "B",
    "en": "Two iced lattes, please.",
    "ko": "아이스 라테 두 잔 주세요.",
    "pr": "투 아이스트 라테이즈, 플리즈."
   },
   {
    "r": "A",
    "en": "Excuse me, where is the library?",
    "ko": "(길에서) 실례지만, 도서관이 어디예요?",
    "pr": "익스큐즈 미, 웨어리즈 더 라이브러리?"
   },
   {
    "r": "B",
    "en": "Go straight. It's on the left.",
    "ko": "쭉 가세요. 왼쪽에 있어요.",
    "pr": "고우 스트레잇. 잇츠 온 더 레프트.",
    "nt": "🎉 한 달 전엔 길을 물었는데, 이제는 길을 알려 줘요!"
   }
  ],
  "b": [
   {
    "r": "A",
    "en": "Hey, good to see you again! The usual?",
    "ko": "(카페에서) 또 오셨네요! 늘 드시던 걸로요?",
    "pr": "헤이, 굿 투 씨 유 어겐! 더 유주얼?"
   },
   {
    "r": "B",
    "en": "Sorry, what does the usual mean?",
    "ko": "죄송한데, the usual이 무슨 뜻이에요?",
    "pr": "쏘리, 왓 더즈 더 유주얼 민?",
    "nt": "⭐ 모르는 말은 이제 겁내지 말고 물어보기"
   },
   {
    "r": "A",
    "en": "Your usual order. Two iced lattes?",
    "ko": "늘 시키시는 거요. 아이스 라테 두 잔이요?",
    "pr": "유어 유주얼 오더. 투 아이스트 라테이즈?"
   },
   {
    "r": "B",
    "en": "Yes, two iced lattes, please!",
    "ko": "네, 아이스 라테 두 잔 주세요!",
    "pr": "예스, 투 아이스트 라테이즈, 플리즈!",
    "nt": "단골이 되면 'The usual?'(늘 드시던 걸로요?)이라고 물어봐요"
   },
   {
    "r": "A",
    "en": "Excuse me, can I help you? You look a little lost.",
    "ko": "(길에서) 실례지만, 도와드릴까요? 좀 헤매시는 것 같아서요.",
    "pr": "익스큐즈 미, 캐나이 헬퓨? 유 룩 어 리를 로스트."
   },
   {
    "r": "B",
    "en": "Yes, please. Where is the post office?",
    "ko": "네, 부탁해요. 우체국이 어디예요?",
    "pr": "예스, 플리즈. 웨어리즈 더 포슷 오피스?"
   },
   {
    "r": "A",
    "en": "It's right around the corner, next to the bank.",
    "ko": "모퉁이 돌면 바로 은행 옆에 있어요.",
    "pr": "잇츠 롸잇 어라운더 코너, 넥스 투 더 뱅크."
   },
   {
    "r": "B",
    "en": "Thank you so much! Have a nice day!",
    "ko": "정말 고마워요! 좋은 하루 보내세요!",
    "pr": "땡큐 쏘 머치! 해버 나이스 데이!",
    "nt": "🎉 한 달 동안 정말 잘했어요! 이제 여기가 우리 동네예요"
   }
  ],
  "chunks": [
   {
    "en": "Sorry, can you say that again?",
    "ko": "죄송한데, 다시 한번 말해 주실래요?",
    "star": true,
    "swaps": [
     {
      "en": "Sorry, can you speak slowly, please?",
      "ko": "죄송한데, 천천히 말해 주실래요?"
     },
     {
      "en": "What does that mean?",
      "ko": "그게 무슨 뜻이에요?"
     }
    ]
   },
   {
    "en": "Thank you so much!",
    "ko": "정말 고마워요!",
    "swaps": [
     {
      "en": "Thanks for your help!",
      "ko": "도와줘서 고마워요!"
     },
     {
      "en": "I really appreciate it.",
      "ko": "진심으로 감사해요."
     }
    ]
   },
   {
    "en": "Two iced lattes, please.",
    "ko": "아이스 라테 두 잔 주세요. ('___, please.' 하나로 주문 끝!)",
    "swaps": [
     {
      "en": "A refund, please.",
      "ko": "환불해 주세요."
     },
     {
      "en": "Just a trim, please.",
      "ko": "다듬기만 해 주세요."
     }
    ]
   },
   {
    "en": "Where is the post office?",
    "ko": "우체국이 어디예요?",
    "swaps": [
     {
      "en": "Where is the bathroom?",
      "ko": "화장실이 어디예요?"
     },
     {
      "en": "Where is the bus stop?",
      "ko": "버스 정류장이 어디예요?"
     }
    ]
   },
   {
    "en": "Can you help me, please?",
    "ko": "좀 도와주실래요?",
    "swaps": [
     {
      "en": "Can you show me, please?",
      "ko": "좀 보여 주실래요?"
     },
     {
      "en": "Can you write it down, please?",
      "ko": "좀 적어 주실래요?"
     }
    ]
   },
   {
    "bonus": true,
    "en": "We love it here.",
    "ko": "저희 여기 정말 좋아요.",
    "swaps": [
     {
      "en": "We're happy to be here.",
      "ko": "저희 여기 오게 돼서 기뻐요."
     }
    ]
   },
   {
    "bonus": true,
    "en": "Nice to see you again!",
    "ko": "또 만나서 반가워요!",
    "swaps": [
     {
      "en": "Nice to meet you.",
      "ko": "만나서 반가워요. (처음 만났을 때)"
     }
    ]
   }
  ]
 }
];
