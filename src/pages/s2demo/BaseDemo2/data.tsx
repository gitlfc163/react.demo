import { replace } from "lodash";

const data = [
  {
    points: "水是万物之源。",
    name: "泰利斯",
    country: "希腊",
    word: "水是",
    weight: 11.739204307083542,
    start: -624,
    end: -546,
  },
  {
    points: "水是万物之源。",
    name: "泰利斯",
    country: "希腊",
    word: "之源",
    weight: 9.23723855786,
    start: -624,
    end: -546,
  },
  {
    points: "水是万物之源。",
    name: "泰利斯",
    country: "希腊",
    word: "万物",
    weight: 7.75434839431,
    start: -624,
    end: -546,
  },
  {
    points: "形成万物的物质不可能是一定是这些已经被创造出来的物质。",
    name: "安纳克西曼德",
    country: "希腊",
    word: "物质",
    weight: 11.3865516372,
    start: -610,
    end: -546,
  },
  {
    points: "形成万物的物质不可能是一定是这些已经被创造出来的物质。",
    name: "安纳克西曼德",
    country: "希腊",
    word: "万物",
    weight: 7.75434839431,
    start: -610,
    end: -546,
  },
  {
    points: "形成万物的物质不可能是一定是这些已经被创造出来的物质。",
    name: "安纳克西曼德",
    country: "希腊",
    word: "创造",
    weight: 5.83541244308,
    start: -610,
    end: -546,
  },
  {
    points: "形成万物的物质不可能是一定是这些已经被创造出来的物质。",
    name: "安纳克西曼德",
    country: "希腊",
    word: "形成",
    weight: 4.27215339948,
    start: -610,
    end: -546,
  },
  {
    points: "形成万物的物质不可能是一定是这些已经被创造出来的物质。",
    name: "安纳克西曼德",
    country: "希腊",
    word: "一定",
    weight: 4.2025551294,
    start: -610,
    end: -546,
  },
  {
    points: "形成万物之源的必定是“空气”或“气体”。",
    name: "安纳西梅利斯",
    country: "希腊",
    word: "之源",
    weight: 9.23723855786,
    start: -570,
    end: -526,
  },
  {
    points: "形成万物之源的必定是“空气”或“气体”。",
    name: "安纳西梅利斯",
    country: "希腊",
    word: "万物",
    weight: 7.75434839431,
    start: -570,
    end: -526,
  },
  {
    points: "形成万物之源的必定是“空气”或“气体”。",
    name: "安纳西梅利斯",
    country: "希腊",
    word: "必定",
    weight: 7.34959731693,
    start: -570,
    end: -526,
  },
  {
    points: "形成万物之源的必定是“空气”或“气体”。",
    name: "安纳西梅利斯",
    country: "希腊",
    word: "气体",
    weight: 6.57487014938,
    start: -570,
    end: -526,
  },
  {
    points: "形成万物之源的必定是“空气”或“气体”。",
    name: "安纳西梅利斯",
    country: "希腊",
    word: "空气",
    weight: 6.32509300042,
    start: -570,
    end: -526,
  },
  {
    points:
      "世界上根本没有真正的变化，没有任何事物可以变成另外一种事物。&我们的感官是不可靠的。",
    name: "帕梅尼德斯",
    country: "意大利",
    word: "任何事物",
    weight: 10.1394775363,
    start: -540,
    end: -480,
  },
  {
    points:
      "世界上根本没有真正的变化，没有任何事物可以变成另外一种事物。&我们的感官是不可靠的。",
    name: "帕梅尼德斯",
    country: "意大利",
    word: "感官",
    weight: 9.29550746599,
    start: -540,
    end: -480,
  },
  {
    points:
      "世界上根本没有真正的变化，没有任何事物可以变成另外一种事物。&我们的感官是不可靠的。",
    name: "帕梅尼德斯",
    country: "意大利",
    word: "可靠",
    weight: 7.13910488317,
    start: -540,
    end: -480,
  },
  {
    points:
      "世界上根本没有真正的变化，没有任何事物可以变成另外一种事物。&我们的感官是不可靠的。",
    name: "帕梅尼德斯",
    country: "意大利",
    word: "事物",
    weight: 6.89126871927,
    start: -540,
    end: -480,
  },
  {
    points:
      "世界上根本没有真正的变化，没有任何事物可以变成另外一种事物。&我们的感官是不可靠的。",
    name: "帕梅尼德斯",
    country: "意大利",
    word: "没有",
    weight: 6.2256471303,
    start: -540,
    end: -480,
  },
  {
    points: "所有事物都是流动的，万物都会变&我们的感官认知是可靠的。",
    name: "赫拉克里特斯",
    country: "希腊",
    word: "会变",
    weight: 11.739204307083542,
    start: -540,
    end: -480,
  },
  {
    points: "所有事物都是流动的，万物都会变&我们的感官认知是可靠的。",
    name: "赫拉克里特斯",
    country: "希腊",
    word: "感官",
    weight: 9.29550746599,
    start: -540,
    end: -480,
  },
  {
    points: "所有事物都是流动的，万物都会变&我们的感官认知是可靠的。",
    name: "赫拉克里特斯",
    country: "希腊",
    word: "认知",
    weight: 8.70772080109,
    start: -540,
    end: -480,
  },
  {
    points: "所有事物都是流动的，万物都会变&我们的感官认知是可靠的。",
    name: "赫拉克里特斯",
    country: "希腊",
    word: "万物",
    weight: 7.75434839431,
    start: -540,
    end: -480,
  },
  {
    points: "所有事物都是流动的，万物都会变&我们的感官认知是可靠的。",
    name: "赫拉克里特斯",
    country: "希腊",
    word: "可靠",
    weight: 7.13910488317,
    start: -540,
    end: -480,
  },
  {
    points:
      "大自然是由四种元素构成的：土、气、火与水。&基本上没有任何一件事情有变换，世间发生的事不过是这四元素的分合聚散罢了。",
    name: "恩陪窦",
    country: "意大利",
    word: "元素",
    weight: 13.68728134056,
    start: -490,
    end: -430,
  },
  {
    points:
      "大自然是由四种元素构成的：土、气、火与水。&基本上没有任何一件事情有变换，世间发生的事不过是这四元素的分合聚散罢了。",
    name: "恩陪窦",
    country: "意大利",
    word: "分合",
    weight: 10.2897597393,
    start: -490,
    end: -430,
  },
  {
    points:
      "大自然是由四种元素构成的：土、气、火与水。&基本上没有任何一件事情有变换，世间发生的事不过是这四元素的分合聚散罢了。",
    name: "恩陪窦",
    country: "意大利",
    word: "聚散",
    weight: 10.1871055853,
    start: -490,
    end: -430,
  },
  {
    points:
      "大自然是由四种元素构成的：土、气、火与水。&基本上没有任何一件事情有变换，世间发生的事不过是这四元素的分合聚散罢了。",
    name: "恩陪窦",
    country: "意大利",
    word: "四种",
    weight: 8.42421410004,
    start: -490,
    end: -430,
  },
  {
    points:
      "大自然是由四种元素构成的：土、气、火与水。&基本上没有任何一件事情有变换，世间发生的事不过是这四元素的分合聚散罢了。",
    name: "恩陪窦",
    country: "意大利",
    word: "世间",
    weight: 8.29487558568,
    start: -490,
    end: -430,
  },
  {
    points:
      "大自然是由无数肉眼看不见的微小粒子所组成的，而所有的事物都可以被分割成更小的部分。",
    name: "安纳萨哥拉斯",
    country: "希腊",
    word: "肉眼",
    weight: 8.77077893705,
    start: -500,
    end: -428,
  },
  {
    points:
      "大自然是由无数肉眼看不见的微小粒子所组成的，而所有的事物都可以被分割成更小的部分。",
    name: "安纳萨哥拉斯",
    country: "希腊",
    word: "微小",
    weight: 8.18364995057,
    start: -500,
    end: -428,
  },
  {
    points:
      "大自然是由无数肉眼看不见的微小粒子所组成的，而所有的事物都可以被分割成更小的部分。",
    name: "安纳萨哥拉斯",
    country: "希腊",
    word: "大自然",
    weight: 8.10461990121,
    start: -500,
    end: -428,
  },
  {
    points:
      "大自然是由无数肉眼看不见的微小粒子所组成的，而所有的事物都可以被分割成更小的部分。",
    name: "安纳萨哥拉斯",
    country: "希腊",
    word: "粒子",
    weight: 7.69410172525,
    start: -500,
    end: -428,
  },
  {
    points:
      "大自然是由无数肉眼看不见的微小粒子所组成的，而所有的事物都可以被分割成更小的部分。",
    name: "安纳萨哥拉斯",
    country: "希腊",
    word: "分割",
    weight: 7.65457088649,
    start: -500,
    end: -428,
  },
  {
    points:
      "每一种事物都是由微小的积木所组成，而每一块积木都是永恒不变的。&这些最小的单位被称为原子。",
    name: "德谟克利里特斯",
    country: "希腊",
    word: "积木",
    weight: 21.6192703972,
    start: -460,
    end: -370,
  },
  {
    points:
      "每一种事物都是由微小的积木所组成，而每一块积木都是永恒不变的。&这些最小的单位被称为原子。",
    name: "德谟克利里特斯",
    country: "希腊",
    word: "永恒不变",
    weight: 10.7226238216,
    start: -460,
    end: -370,
  },
  {
    points:
      "每一种事物都是由微小的积木所组成，而每一块积木都是永恒不变的。&这些最小的单位被称为原子。",
    name: "德谟克利里特斯",
    country: "希腊",
    word: "微小",
    weight: 8.18364995057,
    start: -460,
    end: -370,
  },
  {
    points:
      "每一种事物都是由微小的积木所组成，而每一块积木都是永恒不变的。&这些最小的单位被称为原子。",
    name: "德谟克利里特斯",
    country: "希腊",
    word: "原子",
    weight: 7.14957618304,
    start: -460,
    end: -370,
  },
  {
    points:
      "每一种事物都是由微小的积木所组成，而每一块积木都是永恒不变的。&这些最小的单位被称为原子。",
    name: "德谟克利里特斯",
    country: "希腊",
    word: "最小",
    weight: 7.1038539337,
    start: -460,
    end: -370,
  },
  {
    points:
      "人是衡量一切的尺度。&一件事情是对是错、是好是坏，完全要看它与人类的需求有何关系而定。",
    name: "普罗塔格拉斯",
    country: "雅典",
    word: "有何",
    weight: 11.739204307083542,
    start: -485,
    end: -410,
  },
  {
    points:
      "人是衡量一切的尺度。&一件事情是对是错、是好是坏，完全要看它与人类的需求有何关系而定。",
    name: "普罗塔格拉斯",
    country: "雅典",
    word: "是错",
    weight: 11.739204307083542,
    start: -485,
    end: -410,
  },
  {
    points:
      "人是衡量一切的尺度。&一件事情是对是错、是好是坏，完全要看它与人类的需求有何关系而定。",
    name: "普罗塔格拉斯",
    country: "雅典",
    word: "而定",
    weight: 8.10461990121,
    start: -485,
    end: -410,
  },
  {
    points:
      "人是衡量一切的尺度。&一件事情是对是错、是好是坏，完全要看它与人类的需求有何关系而定。",
    name: "普罗塔格拉斯",
    country: "雅典",
    word: "尺度",
    weight: 7.95787827685,
    start: -485,
    end: -410,
  },
  {
    points:
      "人是衡量一切的尺度。&一件事情是对是错、是好是坏，完全要看它与人类的需求有何关系而定。",
    name: "普罗塔格拉斯",
    country: "雅典",
    word: "衡量",
    weight: 7.36109169636,
    start: -485,
    end: -410,
  },
  {
    points:
      "我只知道一件事情，就是我一无所知。&明辨是非的能力就存在于人的理性中，而不存在于社会中。",
    name: "苏格拉底",
    country: "雅典",
    word: "明辨是非",
    weight: 11.7034530746,
    start: -470,
    end: -399,
  },
  {
    points:
      "我只知道一件事情，就是我一无所知。&明辨是非的能力就存在于人的理性中，而不存在于社会中。",
    name: "苏格拉底",
    country: "雅典",
    word: "存在",
    weight: 9.14102377386,
    start: -470,
    end: -399,
  },
  {
    points:
      "我只知道一件事情，就是我一无所知。&明辨是非的能力就存在于人的理性中，而不存在于社会中。",
    name: "苏格拉底",
    country: "雅典",
    word: "一无所知",
    weight: 8.98802276624,
    start: -470,
    end: -399,
  },
  {
    points:
      "我只知道一件事情，就是我一无所知。&明辨是非的能力就存在于人的理性中，而不存在于社会中。",
    name: "苏格拉底",
    country: "雅典",
    word: "理性",
    weight: 6.90950076485,
    start: -470,
    end: -399,
  },
  {
    points:
      "我只知道一件事情，就是我一无所知。&明辨是非的能力就存在于人的理性中，而不存在于社会中。",
    name: "苏格拉底",
    country: "雅典",
    word: "一件",
    weight: 5.82167939329,
    start: -470,
    end: -399,
  },
  {
    points:
      "理型的世界。&自然界的东西是流动的，“物质世界”的每一样东西必然是由某种物质构成的，但是形成各种事物模样的精神模式或者抽象模式是不变的。",
    name: "柏拉图",
    country: "雅典",
    word: "模式",
    weight: 12.06102341102,
    start: -427,
    end: -347,
  },
  {
    points:
      "理型的世界。&自然界的东西是流动的，“物质世界”的每一样东西必然是由某种物质构成的，但是形成各种事物模样的精神模式或者抽象模式是不变的。",
    name: "柏拉图",
    country: "雅典",
    word: "理型",
    weight: 11.739204307083542,
    start: -427,
    end: -347,
  },
  {
    points:
      "理型的世界。&自然界的东西是流动的，“物质世界”的每一样东西必然是由某种物质构成的，但是形成各种事物模样的精神模式或者抽象模式是不变的。",
    name: "柏拉图",
    country: "雅典",
    word: "物质",
    weight: 11.3865516372,
    start: -427,
    end: -347,
  },
  {
    points:
      "理型的世界。&自然界的东西是流动的，“物质世界”的每一样东西必然是由某种物质构成的，但是形成各种事物模样的精神模式或者抽象模式是不变的。",
    name: "柏拉图",
    country: "雅典",
    word: "东西",
    weight: 9.54656840164,
    start: -427,
    end: -347,
  },
  {
    points:
      "理型的世界。&自然界的东西是流动的，“物质世界”的每一样东西必然是由某种物质构成的，但是形成各种事物模样的精神模式或者抽象模式是不变的。",
    name: "柏拉图",
    country: "雅典",
    word: "世界",
    weight: 8.73505881114,
    start: -427,
    end: -347,
  },
  {
    points:
      "柏拉图无视他的感官，但是亚里士多德充分运用他的感官，像一个百科全书一样。&现实生活中最高层次的事物不是那些我们用理性来探索的事物，而是我们用感官察觉的事物。&事物是由本身的形式与质料和谐一致的事物所构成的，质料总是致力于实现一种内在的可能性。",
    name: "亚里士多德",
    country: "雅典",
    word: "事物",
    weight: 34.45634359635,
    start: -384,
    end: -322,
  },
  {
    points:
      "柏拉图无视他的感官，但是亚里士多德充分运用他的感官，像一个百科全书一样。&现实生活中最高层次的事物不是那些我们用理性来探索的事物，而是我们用感官察觉的事物。&事物是由本身的形式与质料和谐一致的事物所构成的，质料总是致力于实现一种内在的可能性。",
    name: "亚里士多德",
    country: "雅典",
    word: "感官",
    weight: 27.886522397969998,
    start: -384,
    end: -322,
  },
  {
    points:
      "柏拉图无视他的感官，但是亚里士多德充分运用他的感官，像一个百科全书一样。&现实生活中最高层次的事物不是那些我们用理性来探索的事物，而是我们用感官察觉的事物。&事物是由本身的形式与质料和谐一致的事物所构成的，质料总是致力于实现一种内在的可能性。",
    name: "亚里士多德",
    country: "雅典",
    word: "质料",
    weight: 20.4235963958,
    start: -384,
    end: -322,
  },
  {
    points:
      "柏拉图无视他的感官，但是亚里士多德充分运用他的感官，像一个百科全书一样。&现实生活中最高层次的事物不是那些我们用理性来探索的事物，而是我们用感官察觉的事物。&事物是由本身的形式与质料和谐一致的事物所构成的，质料总是致力于实现一种内在的可能性。",
    name: "亚里士多德",
    country: "雅典",
    word: "和谐一致",
    weight: 12.1089181827,
    start: -384,
    end: -322,
  },
  {
    points:
      "柏拉图无视他的感官，但是亚里士多德充分运用他的感官，像一个百科全书一样。&现实生活中最高层次的事物不是那些我们用理性来探索的事物，而是我们用感官察觉的事物。&事物是由本身的形式与质料和谐一致的事物所构成的，质料总是致力于实现一种内在的可能性。",
    name: "亚里士多德",
    country: "雅典",
    word: "充分运用",
    weight: 10.4994802703,
    start: -384,
    end: -322,
  },
  {
    points:
      "住在一个木桶中，除了一袭斗篷，一支木棍与一袋面包之外，什么也没有。&自己比亚历山大这位伟大的将军还要幸福。",
    name: "第欧根尼",
    country: "希腊",
    word: "一袭",
    weight: 11.739204307083542,
    start: -413,
    end: -323,
  },
  {
    points:
      "住在一个木桶中，除了一袭斗篷，一支木棍与一袋面包之外，什么也没有。&自己比亚历山大这位伟大的将军还要幸福。",
    name: "第欧根尼",
    country: "希腊",
    word: "木桶",
    weight: 10.1630080337,
    start: -413,
    end: -323,
  },
  {
    points:
      "住在一个木桶中，除了一袭斗篷，一支木棍与一袋面包之外，什么也没有。&自己比亚历山大这位伟大的将军还要幸福。",
    name: "第欧根尼",
    country: "希腊",
    word: "木棍",
    weight: 9.30555780184,
    start: -413,
    end: -323,
  },
  {
    points:
      "住在一个木桶中，除了一袭斗篷，一支木棍与一袋面包之外，什么也没有。&自己比亚历山大这位伟大的将军还要幸福。",
    name: "第欧根尼",
    country: "希腊",
    word: "斗篷",
    weight: 9.26594866375,
    start: -413,
    end: -323,
  },
  {
    points:
      "住在一个木桶中，除了一袭斗篷，一支木棍与一袋面包之外，什么也没有。&自己比亚历山大这位伟大的将军还要幸福。",
    name: "第欧根尼",
    country: "希腊",
    word: "一袋",
    weight: 9.22784881751,
    start: -413,
    end: -323,
  },
  {
    points: "发展出一种方式，避免所有形式的痛苦。",
    name: "伊壁鸠鲁",
    country: "雅典",
    word: "痛苦",
    weight: 6.47412857958,
    start: -341,
    end: -270,
  },
  {
    points: "发展出一种方式，避免所有形式的痛苦。",
    name: "伊壁鸠鲁",
    country: "雅典",
    word: "避免",
    weight: 6.06866347147,
    start: -341,
    end: -270,
  },
  {
    points: "发展出一种方式，避免所有形式的痛苦。",
    name: "伊壁鸠鲁",
    country: "雅典",
    word: "形式",
    weight: 5.02315619812,
    start: -341,
    end: -270,
  },
  {
    points: "发展出一种方式，避免所有形式的痛苦。",
    name: "伊壁鸠鲁",
    country: "雅典",
    word: "方式",
    weight: 4.80149232937,
    start: -341,
    end: -270,
  },
  {
    points: "发展出一种方式，避免所有形式的痛苦。",
    name: "伊壁鸠鲁",
    country: "雅典",
    word: "一种",
    weight: 4.13163619599,
    start: -341,
    end: -270,
  },
  {
    points: "宇宙间万事万物都是一体的，因为上帝存在于万事万物之中。",
    name: "普罗汀",
    country: "意大利",
    word: "万事万物",
    weight: 21.209681572,
    start: -270,
    end: -205,
  },
  {
    points: "宇宙间万事万物都是一体的，因为上帝存在于万事万物之中。",
    name: "普罗汀",
    country: "意大利",
    word: "上帝",
    weight: 7.48068272383,
    start: -270,
    end: -205,
  },
  {
    points: "宇宙间万事万物都是一体的，因为上帝存在于万事万物之中。",
    name: "普罗汀",
    country: "意大利",
    word: "一体",
    weight: 7.37711534583,
    start: -270,
    end: -205,
  },
  {
    points: "宇宙间万事万物都是一体的，因为上帝存在于万事万物之中。",
    name: "普罗汀",
    country: "意大利",
    word: "宇宙",
    weight: 7.36834335975,
    start: -270,
    end: -205,
  },
  {
    points: "宇宙间万事万物都是一体的，因为上帝存在于万事万物之中。",
    name: "普罗汀",
    country: "意大利",
    word: "之中",
    weight: 5.67973648369,
    start: -270,
    end: -205,
  },
  {
    points: "每一个人都可以得到上帝的拯救和赦免。",
    name: "耶稣",
    country: "巴勒斯坦",
    word: "赦免",
    weight: 9.17328983326,
    start: -4,
    end: 30,
  },
  {
    points: "每一个人都可以得到上帝的拯救和赦免。",
    name: "耶稣",
    country: "巴勒斯坦",
    word: "拯救",
    weight: 8.04274449749,
    start: -4,
    end: 30,
  },
  {
    points: "每一个人都可以得到上帝的拯救和赦免。",
    name: "耶稣",
    country: "巴勒斯坦",
    word: "上帝",
    weight: 7.48068272383,
    start: -4,
    end: 30,
  },
  {
    points: "每一个人都可以得到上帝的拯救和赦免。",
    name: "耶稣",
    country: "巴勒斯坦",
    word: "得到",
    weight: 4.60931044136,
    start: -4,
    end: 30,
  },
  {
    points: "每一个人都可以得到上帝的拯救和赦免。",
    name: "耶稣",
    country: "巴勒斯坦",
    word: "一个",
    weight: 2.81755097213,
    start: -4,
    end: 30,
  },
  {
    points: "世人皆试图寻找上帝，但是上帝已经向人类显现他自己。",
    name: "保罗",
    country: "意大利",
    word: "上帝",
    weight: 14.96136544766,
    start: 3,
    end: 67,
  },
  {
    points: "世人皆试图寻找上帝，但是上帝已经向人类显现他自己。",
    name: "保罗",
    country: "意大利",
    word: "世人",
    weight: 7.95787827685,
    start: 3,
    end: 67,
  },
  {
    points: "世人皆试图寻找上帝，但是上帝已经向人类显现他自己。",
    name: "保罗",
    country: "意大利",
    word: "显现",
    weight: 7.22485443034,
    start: 3,
    end: 67,
  },
  {
    points: "世人皆试图寻找上帝，但是上帝已经向人类显现他自己。",
    name: "保罗",
    country: "意大利",
    word: "试图",
    weight: 7.07413242842,
    start: 3,
    end: 67,
  },
  {
    points: "世人皆试图寻找上帝，但是上帝已经向人类显现他自己。",
    name: "保罗",
    country: "意大利",
    word: "寻找",
    weight: 6.04010686644,
    start: 3,
    end: 67,
  },
  {
    points:
      "上帝自虚空中创造了世界，不过在上帝创造世界之前，那些“理型”仍是存在于神的心中。",
    name: "圣奥古斯丁",
    country: "意大利",
    word: "上帝",
    weight: 14.96136544766,
    start: 354,
    end: 430,
  },
  {
    points:
      "上帝自虚空中创造了世界，不过在上帝创造世界之前，那些“理型”仍是存在于神的心中。",
    name: "圣奥古斯丁",
    country: "意大利",
    word: "创造",
    weight: 11.67082488616,
    start: 354,
    end: 430,
  },
  {
    points:
      "上帝自虚空中创造了世界，不过在上帝创造世界之前，那些“理型”仍是存在于神的心中。",
    name: "圣奥古斯丁",
    country: "意大利",
    word: "虚空",
    weight: 9.80633308975,
    start: 354,
    end: 430,
  },
  {
    points:
      "上帝自虚空中创造了世界，不过在上帝创造世界之前，那些“理型”仍是存在于神的心中。",
    name: "圣奥古斯丁",
    country: "意大利",
    word: "世界",
    weight: 8.73505881114,
    start: 354,
    end: 430,
  },
  {
    points:
      "上帝自虚空中创造了世界，不过在上帝创造世界之前，那些“理型”仍是存在于神的心中。",
    name: "圣奥古斯丁",
    country: "意大利",
    word: "心中",
    weight: 5.23799979382,
    start: 354,
    end: 430,
  },
  {
    points:
      "哲学，理性这两者和基督教的启示与信仰之间并不一定有冲突。&人们可以通过两条途径来接近上帝：由信仰和基督的启示活着由理性和观感。",
    name: "圣多玛斯",
    country: "意大利",
    word: "启示",
    weight: 16.57509909118,
    start: 1225,
    end: 1274,
  },
  {
    points:
      "哲学，理性这两者和基督教的启示与信仰之间并不一定有冲突。&人们可以通过两条途径来接近上帝：由信仰和基督的启示活着由理性和观感。",
    name: "圣多玛斯",
    country: "意大利",
    word: "信仰",
    weight: 14.51638170122,
    start: 1225,
    end: 1274,
  },
  {
    points:
      "哲学，理性这两者和基督教的启示与信仰之间并不一定有冲突。&人们可以通过两条途径来接近上帝：由信仰和基督的启示活着由理性和观感。",
    name: "圣多玛斯",
    country: "意大利",
    word: "理性",
    weight: 13.8190015297,
    start: 1225,
    end: 1274,
  },
  {
    points:
      "哲学，理性这两者和基督教的启示与信仰之间并不一定有冲突。&人们可以通过两条途径来接近上帝：由信仰和基督的启示活着由理性和观感。",
    name: "圣多玛斯",
    country: "意大利",
    word: "观感",
    weight: 10.5684731418,
    start: 1225,
    end: 1274,
  },
  {
    points:
      "哲学，理性这两者和基督教的启示与信仰之间并不一定有冲突。&人们可以通过两条途径来接近上帝：由信仰和基督的启示活着由理性和观感。",
    name: "圣多玛斯",
    country: "意大利",
    word: "并不一定",
    weight: 9.04086524761,
    start: 1225,
    end: 1274,
  },
  {
    points: "太阳并未绕地球运行，而是地球绕太阳运行。",
    name: "哥白尼",
    country: "波兰",
    word: "地球",
    weight: 12.57964972316,
    start: 1473,
    end: 1543,
  },
  {
    points: "太阳并未绕地球运行，而是地球绕太阳运行。",
    name: "哥白尼",
    country: "波兰",
    word: "太阳",
    weight: 12.45583951066,
    start: 1473,
    end: 1543,
  },
  {
    points: "太阳并未绕地球运行，而是地球绕太阳运行。",
    name: "哥白尼",
    country: "波兰",
    word: "运行",
    weight: 11.39201164604,
    start: 1473,
    end: 1543,
  },
  {
    points: "太阳并未绕地球运行，而是地球绕太阳运行。",
    name: "哥白尼",
    country: "波兰",
    word: "并未",
    weight: 6.22698952271,
    start: 1473,
    end: 1543,
  },
  {
    points:
      "用自己的感官来观察、研究星球运转的现象，而不盲目地接受古代的迷信。&如果没有外力强迫一个物体改变它所处的状态，则这个物体将会一直维持它原来禁止或移动的状态。&反对地球绕着自己的轴心转。",
    name: "伽利略",
    country: "意大利",
    word: "物体",
    weight: 14.35128801962,
    start: 1564,
    end: 1642,
  },
  {
    points:
      "用自己的感官来观察、研究星球运转的现象，而不盲目地接受古代的迷信。&如果没有外力强迫一个物体改变它所处的状态，则这个物体将会一直维持它原来禁止或移动的状态。&反对地球绕着自己的轴心转。",
    name: "伽利略",
    country: "意大利",
    word: "状态",
    weight: 11.18052531558,
    start: 1564,
    end: 1642,
  },
  {
    points:
      "用自己的感官来观察、研究星球运转的现象，而不盲目地接受古代的迷信。&如果没有外力强迫一个物体改变它所处的状态，则这个物体将会一直维持它原来禁止或移动的状态。&反对地球绕着自己的轴心转。",
    name: "伽利略",
    country: "意大利",
    word: "轴心",
    weight: 10.0505300503,
    start: 1564,
    end: 1642,
  },
  {
    points:
      "用自己的感官来观察、研究星球运转的现象，而不盲目地接受古代的迷信。&如果没有外力强迫一个物体改变它所处的状态，则这个物体将会一直维持它原来禁止或移动的状态。&反对地球绕着自己的轴心转。",
    name: "伽利略",
    country: "意大利",
    word: "星球",
    weight: 9.56994431169,
    start: 1564,
    end: 1642,
  },
  {
    points:
      "用自己的感官来观察、研究星球运转的现象，而不盲目地接受古代的迷信。&如果没有外力强迫一个物体改变它所处的状态，则这个物体将会一直维持它原来禁止或移动的状态。&反对地球绕着自己的轴心转。",
    name: "伽利略",
    country: "意大利",
    word: "感官",
    weight: 9.29550746599,
    start: 1564,
    end: 1642,
  },
  {
    points:
      "所有的行星都是围绕着太阳转。&宇宙间两个物体相互吸引的力量随着物体的大小而递增，并随着两物体之间的距离而递减。",
    name: "牛顿",
    country: "英国",
    word: "物体",
    weight: 21.52693202943,
    start: 1642,
    end: 1727,
  },
  {
    points:
      "所有的行星都是围绕着太阳转。&宇宙间两个物体相互吸引的力量随着物体的大小而递增，并随着两物体之间的距离而递减。",
    name: "牛顿",
    country: "英国",
    word: "递增",
    weight: 8.68574189437,
    start: 1642,
    end: 1727,
  },
  {
    points:
      "所有的行星都是围绕着太阳转。&宇宙间两个物体相互吸引的力量随着物体的大小而递增，并随着两物体之间的距离而递减。",
    name: "牛顿",
    country: "英国",
    word: "递减",
    weight: 8.29120585679,
    start: 1642,
    end: 1727,
  },
  {
    points:
      "所有的行星都是围绕着太阳转。&宇宙间两个物体相互吸引的力量随着物体的大小而递增，并随着两物体之间的距离而递减。",
    name: "牛顿",
    country: "英国",
    word: "行星",
    weight: 7.9817837977,
    start: 1642,
    end: 1727,
  },
  {
    points:
      "所有的行星都是围绕着太阳转。&宇宙间两个物体相互吸引的力量随着物体的大小而递增，并随着两物体之间的距离而递减。",
    name: "牛顿",
    country: "英国",
    word: "宇宙",
    weight: 7.36834335975,
    start: 1642,
    end: 1727,
  },
  {
    points:
      "用数学的方式来进行哲学思考。&将一个复杂的问题尽可能细分为许多不同的因素，然后我们再从其中最简单的概念出发。&我思故我在。&上帝是存在的。&宇宙之有一个外在的真实世界。",
    name: "笛卡尔",
    country: "法国",
    word: "故我在",
    weight: 13.900677652,
    start: 1569,
    end: 1650,
  },
  {
    points:
      "用数学的方式来进行哲学思考。&将一个复杂的问题尽可能细分为许多不同的因素，然后我们再从其中最简单的概念出发。&我思故我在。&上帝是存在的。&宇宙之有一个外在的真实世界。",
    name: "笛卡尔",
    country: "法国",
    word: "真实世界",
    weight: 11.9547675029,
    start: 1569,
    end: 1650,
  },
  {
    points:
      "用数学的方式来进行哲学思考。&将一个复杂的问题尽可能细分为许多不同的因素，然后我们再从其中最简单的概念出发。&我思故我在。&上帝是存在的。&宇宙之有一个外在的真实世界。",
    name: "笛卡尔",
    country: "法国",
    word: "我思",
    weight: 11.739204307083542,
    start: 1569,
    end: 1650,
  },
  {
    points:
      "用数学的方式来进行哲学思考。&将一个复杂的问题尽可能细分为许多不同的因素，然后我们再从其中最简单的概念出发。&我思故我在。&上帝是存在的。&宇宙之有一个外在的真实世界。",
    name: "笛卡尔",
    country: "法国",
    word: "之有",
    weight: 10.2371160058,
    start: 1569,
    end: 1650,
  },
  {
    points:
      "用数学的方式来进行哲学思考。&将一个复杂的问题尽可能细分为许多不同的因素，然后我们再从其中最简单的概念出发。&我思故我在。&上帝是存在的。&宇宙之有一个外在的真实世界。",
    name: "笛卡尔",
    country: "法国",
    word: "细分",
    weight: 7.96050639926,
    start: 1569,
    end: 1650,
  },
  {
    points:
      "上帝不是一切，一切都在上帝之中。&上帝并不是通过操控牵线木偶的方式来操纵一切的事情，而是通过自然法则来主宰世界。",
    name: "斯宾诺莎",
    country: "荷兰",
    word: "上帝",
    weight: 22.44204817149,
    start: 1632,
    end: 1677,
  },
  {
    points:
      "上帝不是一切，一切都在上帝之中。&上帝并不是通过操控牵线木偶的方式来操纵一切的事情，而是通过自然法则来主宰世界。",
    name: "斯宾诺莎",
    country: "荷兰",
    word: "主宰世界",
    weight: 12.1089181827,
    start: 1632,
    end: 1677,
  },
  {
    points:
      "上帝不是一切，一切都在上帝之中。&上帝并不是通过操控牵线木偶的方式来操纵一切的事情，而是通过自然法则来主宰世界。",
    name: "斯宾诺莎",
    country: "荷兰",
    word: "牵线",
    weight: 10.8096351986,
    start: 1632,
    end: 1677,
  },
  {
    points:
      "上帝不是一切，一切都在上帝之中。&上帝并不是通过操控牵线木偶的方式来操纵一切的事情，而是通过自然法则来主宰世界。",
    name: "斯宾诺莎",
    country: "荷兰",
    word: "自然法则",
    weight: 10.6818018271,
    start: 1632,
    end: 1677,
  },
  {
    points:
      "上帝不是一切，一切都在上帝之中。&上帝并不是通过操控牵线木偶的方式来操纵一切的事情，而是通过自然法则来主宰世界。",
    name: "斯宾诺莎",
    country: "荷兰",
    word: "木偶",
    weight: 9.7898037878,
    start: 1632,
    end: 1677,
  },
  {
    points:
      "在我们的感官察知任何事物之前，我们的心灵都是空白的。&我们的心灵除了被动地接受外界的印象之外，同时也积极的进行某种活动。&感官的性质分为“主要”和“次要”两种。",
    name: "洛克",
    country: "英国",
    word: "感官",
    weight: 18.59101493198,
    start: 1632,
    end: 1704,
  },
  {
    points:
      "在我们的感官察知任何事物之前，我们的心灵都是空白的。&我们的心灵除了被动地接受外界的印象之外，同时也积极的进行某种活动。&感官的性质分为“主要”和“次要”两种。",
    name: "洛克",
    country: "英国",
    word: "心灵",
    weight: 15.51728049278,
    start: 1632,
    end: 1704,
  },
  {
    points:
      "在我们的感官察知任何事物之前，我们的心灵都是空白的。&我们的心灵除了被动地接受外界的印象之外，同时也积极的进行某种活动。&感官的性质分为“主要”和“次要”两种。",
    name: "洛克",
    country: "英国",
    word: "察知",
    weight: 11.9547675029,
    start: 1632,
    end: 1704,
  },
  {
    points:
      "在我们的感官察知任何事物之前，我们的心灵都是空白的。&我们的心灵除了被动地接受外界的印象之外，同时也积极的进行某种活动。&感官的性质分为“主要”和“次要”两种。",
    name: "洛克",
    country: "英国",
    word: "任何事物",
    weight: 10.1394775363,
    start: 1632,
    end: 1704,
  },
  {
    points:
      "在我们的感官察知任何事物之前，我们的心灵都是空白的。&我们的心灵除了被动地接受外界的印象之外，同时也积极的进行某种活动。&感官的性质分为“主要”和“次要”两种。",
    name: "洛克",
    country: "英国",
    word: "次要",
    weight: 8.74738605748,
    start: 1632,
    end: 1704,
  },
  {
    points:
      "没有一个哲学家“能够带我们体验日常的生活。&事实上哲学家提示的那些行为准则是我们对日常生活加以省思后，便可以领悟出来的。&自我只不过是一束不同的知觉以无法想象的速度接连起来的，不断改变并移动。&一件事情跟着另一件事情发生，两者并不一定有关联。",
    name: "休谟",
    country: "英国",
    word: "哲学家",
    weight: 14.95161725614,
    start: 1711,
    end: 1776,
  },
  {
    points:
      "没有一个哲学家“能够带我们体验日常的生活。&事实上哲学家提示的那些行为准则是我们对日常生活加以省思后，便可以领悟出来的。&自我只不过是一束不同的知觉以无法想象的速度接连起来的，不断改变并移动。&一件事情跟着另一件事情发生，两者并不一定有关联。",
    name: "休谟",
    country: "英国",
    word: "接连起来",
    weight: 12.5143832909,
    start: 1711,
    end: 1776,
  },
  {
    points:
      "没有一个哲学家“能够带我们体验日常的生活。&事实上哲学家提示的那些行为准则是我们对日常生活加以省思后，便可以领悟出来的。&自我只不过是一束不同的知觉以无法想象的速度接连起来的，不断改变并移动。&一件事情跟着另一件事情发生，两者并不一定有关联。",
    name: "休谟",
    country: "英国",
    word: "省思",
    weight: 11.739204307083542,
    start: 1711,
    end: 1776,
  },
  {
    points:
      "没有一个哲学家“能够带我们体验日常的生活。&事实上哲学家提示的那些行为准则是我们对日常生活加以省思后，便可以领悟出来的。&自我只不过是一束不同的知觉以无法想象的速度接连起来的，不断改变并移动。&一件事情跟着另一件事情发生，两者并不一定有关联。",
    name: "休谟",
    country: "英国",
    word: "一件",
    weight: 11.64335878658,
    start: 1711,
    end: 1776,
  },
  {
    points:
      "没有一个哲学家“能够带我们体验日常的生活。&事实上哲学家提示的那些行为准则是我们对日常生活加以省思后，便可以领悟出来的。&自我只不过是一束不同的知觉以无法想象的速度接连起来的，不断改变并移动。&一件事情跟着另一件事情发生，两者并不一定有关联。",
    name: "休谟",
    country: "英国",
    word: "行为准则",
    weight: 10.2897597393,
    start: 1711,
    end: 1776,
  },
  {
    points:
      "世间所有的存在只有那些我们感受到的事情，我们并没有感受到“物质”或者“质料”。&我们周遭的世界与我们的生命全部都存在于天主之中。",
    name: "柏克莱",
    country: "英国",
    word: "感受",
    weight: 13.78796485028,
    start: 1685,
    end: 1753,
  },
  {
    points:
      "世间所有的存在只有那些我们感受到的事情，我们并没有感受到“物质”或者“质料”。&我们周遭的世界与我们的生命全部都存在于天主之中。",
    name: "柏克莱",
    country: "英国",
    word: "天主",
    weight: 10.3743171274,
    start: 1685,
    end: 1753,
  },
  {
    points:
      "世间所有的存在只有那些我们感受到的事情，我们并没有感受到“物质”或者“质料”。&我们周遭的世界与我们的生命全部都存在于天主之中。",
    name: "柏克莱",
    country: "英国",
    word: "质料",
    weight: 10.2117981979,
    start: 1685,
    end: 1753,
  },
  {
    points:
      "世间所有的存在只有那些我们感受到的事情，我们并没有感受到“物质”或者“质料”。&我们周遭的世界与我们的生命全部都存在于天主之中。",
    name: "柏克莱",
    country: "英国",
    word: "周遭",
    weight: 9.58318953844,
    start: 1685,
    end: 1753,
  },
  {
    points:
      "世间所有的存在只有那些我们感受到的事情，我们并没有感受到“物质”或者“质料”。&我们周遭的世界与我们的生命全部都存在于天主之中。",
    name: "柏克莱",
    country: "英国",
    word: "存在",
    weight: 9.14102377386,
    start: 1685,
    end: 1753,
  },
  {
    points:
      "我们对于世界的观念是我们同时通过观感与理性获得的。&因果律是根植于我们内心的。&康德认为上帝存不存这种大问题应该交给我们信仰来决定。&如果你只是做自己想做的事，你就不算独立或者自由。&头顶的星空和心中的道德准则都让我觉得神奇：上帝在我头顶，亦在我心中。",
    name: "康德",
    country: "德国",
    word: "上帝",
    weight: 14.96136544766,
    start: 1724,
    end: 1804,
  },
  {
    points:
      "我们对于世界的观念是我们同时通过观感与理性获得的。&因果律是根植于我们内心的。&康德认为上帝存不存这种大问题应该交给我们信仰来决定。&如果你只是做自己想做的事，你就不算独立或者自由。&头顶的星空和心中的道德准则都让我觉得神奇：上帝在我头顶，亦在我心中。",
    name: "康德",
    country: "德国",
    word: "头顶",
    weight: 14.35850390238,
    start: 1724,
    end: 1804,
  },
  {
    points:
      "我们对于世界的观念是我们同时通过观感与理性获得的。&因果律是根植于我们内心的。&康德认为上帝存不存这种大问题应该交给我们信仰来决定。&如果你只是做自己想做的事，你就不算独立或者自由。&头顶的星空和心中的道德准则都让我觉得神奇：上帝在我头顶，亦在我心中。",
    name: "康德",
    country: "德国",
    word: "因果律",
    weight: 12.5143832909,
    start: 1724,
    end: 1804,
  },
  {
    points:
      "我们对于世界的观念是我们同时通过观感与理性获得的。&因果律是根植于我们内心的。&康德认为上帝存不存这种大问题应该交给我们信仰来决定。&如果你只是做自己想做的事，你就不算独立或者自由。&头顶的星空和心中的道德准则都让我觉得神奇：上帝在我头顶，亦在我心中。",
    name: "康德",
    country: "德国",
    word: "存不存",
    weight: 11.739204307083542,
    start: 1724,
    end: 1804,
  },
  {
    points:
      "我们对于世界的观念是我们同时通过观感与理性获得的。&因果律是根植于我们内心的。&康德认为上帝存不存这种大问题应该交给我们信仰来决定。&如果你只是做自己想做的事，你就不算独立或者自由。&头顶的星空和心中的道德准则都让我觉得神奇：上帝在我头顶，亦在我心中。",
    name: "康德",
    country: "德国",
    word: "根植",
    weight: 11.0674643079,
    start: 1724,
    end: 1804,
  },
  {
    points:
      "大自然的全部——包括人的精神与物质世界——都是一个绝对的存在。&我们厌倦了无休止地与粗糙的物质世界奋战，因此决定选择另外一种方式。我们走进自己的内心，在那里创造了一个新的世界...&大自然是一个有机体，也就是一个不断发展其内在潜能的整体。",
    name: "谢林",
    country: "德国",
    word: "大自然",
    weight: 16.20923980242,
    start: 1775,
    end: 1854,
  },
  {
    points:
      "大自然的全部——包括人的精神与物质世界——都是一个绝对的存在。&我们厌倦了无休止地与粗糙的物质世界奋战，因此决定选择另外一种方式。我们走进自己的内心，在那里创造了一个新的世界...&大自然是一个有机体，也就是一个不断发展其内在潜能的整体。",
    name: "谢林",
    country: "德国",
    word: "世界",
    weight: 13.10258821671,
    start: 1775,
    end: 1854,
  },
  {
    points:
      "大自然的全部——包括人的精神与物质世界——都是一个绝对的存在。&我们厌倦了无休止地与粗糙的物质世界奋战，因此决定选择另外一种方式。我们走进自己的内心，在那里创造了一个新的世界...&大自然是一个有机体，也就是一个不断发展其内在潜能的整体。",
    name: "谢林",
    country: "德国",
    word: "物质",
    weight: 11.3865516372,
    start: 1775,
    end: 1854,
  },
  {
    points:
      "大自然的全部——包括人的精神与物质世界——都是一个绝对的存在。&我们厌倦了无休止地与粗糙的物质世界奋战，因此决定选择另外一种方式。我们走进自己的内心，在那里创造了一个新的世界...&大自然是一个有机体，也就是一个不断发展其内在潜能的整体。",
    name: "谢林",
    country: "德国",
    word: "一个",
    weight: 11.27020388852,
    start: 1775,
    end: 1854,
  },
  {
    points:
      "大自然的全部——包括人的精神与物质世界——都是一个绝对的存在。&我们厌倦了无休止地与粗糙的物质世界奋战，因此决定选择另外一种方式。我们走进自己的内心，在那里创造了一个新的世界...&大自然是一个有机体，也就是一个不断发展其内在潜能的整体。",
    name: "谢林",
    country: "德国",
    word: "无休止",
    weight: 10.1164880181,
    start: 1775,
    end: 1854,
  },
  {
    points:
      "哲学家应该再读脚踏实地。&“世界精神”或者“世界理性”乃是人类理念的总和。&世界精神正朝着愈来愈了解自己的方向发展。&辩证法：正 + 反 = 合",
    name: "黑格尔",
    country: "德国",
    word: "世界",
    weight: 13.10258821671,
    start: 1770,
    end: 1831,
  },
  {
    points:
      "哲学家应该再读脚踏实地。&“世界精神”或者“世界理性”乃是人类理念的总和。&世界精神正朝着愈来愈了解自己的方向发展。&辩证法：正 + 反 = 合",
    name: "黑格尔",
    country: "德国",
    word: "精神",
    weight: 11.23942650284,
    start: 1770,
    end: 1831,
  },
  {
    points:
      "哲学家应该再读脚踏实地。&“世界精神”或者“世界理性”乃是人类理念的总和。&世界精神正朝着愈来愈了解自己的方向发展。&辩证法：正 + 反 = 合",
    name: "黑格尔",
    country: "德国",
    word: "再读",
    weight: 10.9049453784,
    start: 1770,
    end: 1831,
  },
  {
    points:
      "哲学家应该再读脚踏实地。&“世界精神”或者“世界理性”乃是人类理念的总和。&世界精神正朝着愈来愈了解自己的方向发展。&辩证法：正 + 反 = 合",
    name: "黑格尔",
    country: "德国",
    word: "脚踏实地",
    weight: 10.1394775363,
    start: 1770,
    end: 1831,
  },
  {
    points:
      "哲学家应该再读脚踏实地。&“世界精神”或者“世界理性”乃是人类理念的总和。&世界精神正朝着愈来愈了解自己的方向发展。&辩证法：正 + 反 = 合",
    name: "黑格尔",
    country: "德国",
    word: "辩证法",
    weight: 8.60236028543,
    start: 1770,
    end: 1831,
  },
  {
    points:
      "整个欧洲正走向破产的地步。&世间唯一重要的事只有每一个人“自己的存在”。&重要的并不是基督教是否真实，而是对你而言，它是否真实。&人生有三个阶段：美感阶段、道德阶段和宗教阶段。&害怕几乎是有正面意义的：它表示这个人正处在存在状态中，可以跃升到更高阶段。",
    name: "祁克果",
    country: "丹麦",
    word: "阶段",
    weight: 26.6063055869,
    start: 1813,
    end: 1855,
  },
  {
    points:
      "整个欧洲正走向破产的地步。&世间唯一重要的事只有每一个人“自己的存在”。&重要的并不是基督教是否真实，而是对你而言，它是否真实。&人生有三个阶段：美感阶段、道德阶段和宗教阶段。&害怕几乎是有正面意义的：它表示这个人正处在存在状态中，可以跃升到更高阶段。",
    name: "祁克果",
    country: "丹麦",
    word: "真实",
    weight: 13.0408437271,
    start: 1813,
    end: 1855,
  },
  {
    points:
      "整个欧洲正走向破产的地步。&世间唯一重要的事只有每一个人“自己的存在”。&重要的并不是基督教是否真实，而是对你而言，它是否真实。&人生有三个阶段：美感阶段、道德阶段和宗教阶段。&害怕几乎是有正面意义的：它表示这个人正处在存在状态中，可以跃升到更高阶段。",
    name: "祁克果",
    country: "丹麦",
    word: "人正",
    weight: 11.739204307083542,
    start: 1813,
    end: 1855,
  },
  {
    points:
      "整个欧洲正走向破产的地步。&世间唯一重要的事只有每一个人“自己的存在”。&重要的并不是基督教是否真实，而是对你而言，它是否真实。&人生有三个阶段：美感阶段、道德阶段和宗教阶段。&害怕几乎是有正面意义的：它表示这个人正处在存在状态中，可以跃升到更高阶段。",
    name: "祁克果",
    country: "丹麦",
    word: "是否",
    weight: 10.48883682488,
    start: 1813,
    end: 1855,
  },
  {
    points:
      "整个欧洲正走向破产的地步。&世间唯一重要的事只有每一个人“自己的存在”。&重要的并不是基督教是否真实，而是对你而言，它是否真实。&人生有三个阶段：美感阶段、道德阶段和宗教阶段。&害怕几乎是有正面意义的：它表示这个人正处在存在状态中，可以跃升到更高阶段。",
    name: "祁克果",
    country: "丹麦",
    word: "美感",
    weight: 9.5062284973,
    start: 1813,
    end: 1855,
  },
  {
    points:
      "物质的变化才是推动历史的力量。&“精神”关系并不会造成物质的改变，而是物质的改变造成了新的“精神关系”。&物质条件“支持”着一个社会里的每一种思想和看法。&社会的基础分为三层：生产条件、生产工具的人和统治阶级。&创造了人类历史进化的理论。",
    name: "马克思",
    country: "德国",
    word: "物质",
    weight: 17.0798274558,
    start: 1818,
    end: 1883,
  },
  {
    points:
      "物质的变化才是推动历史的力量。&“精神”关系并不会造成物质的改变，而是物质的改变造成了新的“精神关系”。&物质条件“支持”着一个社会里的每一种思想和看法。&社会的基础分为三层：生产条件、生产工具的人和统治阶级。&创造了人类历史进化的理论。",
    name: "马克思",
    country: "德国",
    word: "新的",
    weight: 11.739204307083542,
    start: 1818,
    end: 1883,
  },
  {
    points:
      "物质的变化才是推动历史的力量。&“精神”关系并不会造成物质的改变，而是物质的改变造成了新的“精神关系”。&物质条件“支持”着一个社会里的每一种思想和看法。&社会的基础分为三层：生产条件、生产工具的人和统治阶级。&创造了人类历史进化的理论。",
    name: "马克思",
    country: "德国",
    word: "精神",
    weight: 11.23942650284,
    start: 1818,
    end: 1883,
  },
  {
    points:
      "物质的变化才是推动历史的力量。&“精神”关系并不会造成物质的改变，而是物质的改变造成了新的“精神关系”。&物质条件“支持”着一个社会里的每一种思想和看法。&社会的基础分为三层：生产条件、生产工具的人和统治阶级。&创造了人类历史进化的理论。",
    name: "马克思",
    country: "德国",
    word: "改变",
    weight: 10.4471578861,
    start: 1818,
    end: 1883,
  },
  {
    points:
      "物质的变化才是推动历史的力量。&“精神”关系并不会造成物质的改变，而是物质的改变造成了新的“精神关系”。&物质条件“支持”着一个社会里的每一种思想和看法。&社会的基础分为三层：生产条件、生产工具的人和统治阶级。&创造了人类历史进化的理论。",
    name: "马克思",
    country: "德国",
    word: "造成",
    weight: 10.21443458184,
    start: 1818,
    end: 1883,
  },
  {
    points:
      "创立了有机物进化的理论。&物竞天择，适者生存。&地球是航行在宇宙中燃烧的太阳周围的一艘大船，而我们每一个人则是满载基因航行过生命的一艘小船。",
    name: "达尔文",
    country: "英国",
    word: "一艘",
    weight: 16.20923980242,
    start: 1809,
    end: 1882,
  },
  {
    points:
      "创立了有机物进化的理论。&物竞天择，适者生存。&地球是航行在宇宙中燃烧的太阳周围的一艘大船，而我们每一个人则是满载基因航行过生命的一艘小船。",
    name: "达尔文",
    country: "英国",
    word: "航行",
    weight: 15.07529909688,
    start: 1809,
    end: 1882,
  },
  {
    points:
      "创立了有机物进化的理论。&物竞天择，适者生存。&地球是航行在宇宙中燃烧的太阳周围的一艘大船，而我们每一个人则是满载基因航行过生命的一艘小船。",
    name: "达尔文",
    country: "英国",
    word: "人则",
    weight: 11.739204307083542,
    start: 1809,
    end: 1882,
  },
  {
    points:
      "创立了有机物进化的理论。&物竞天择，适者生存。&地球是航行在宇宙中燃烧的太阳周围的一艘大船，而我们每一个人则是满载基因航行过生命的一艘小船。",
    name: "达尔文",
    country: "英国",
    word: "物竞天择",
    weight: 11.7034530746,
    start: 1809,
    end: 1882,
  },
  {
    points:
      "创立了有机物进化的理论。&物竞天择，适者生存。&地球是航行在宇宙中燃烧的太阳周围的一艘大船，而我们每一个人则是满载基因航行过生命的一艘小船。",
    name: "达尔文",
    country: "英国",
    word: "适者生存",
    weight: 10.5684731418,
    start: 1809,
    end: 1882,
  },
  {
    points:
      "人类的意识只是他心灵中一小部分而已，在意识之外，还有“潜意识”的存在。&人内心的三个因素：快乐原则、本我和超我。&我们的感觉和行动会受到潜意识的鼓动：说溜了嘴、合理化和投射。&梦都反映我们本身的愿望。",
    name: "弗洛伊德",
    country: "奥地利",
    word: "潜意识",
    weight: 19.89886786678,
    start: 1856,
    end: 1939,
  },
  {
    points:
      "人类的意识只是他心灵中一小部分而已，在意识之外，还有“潜意识”的存在。&人内心的三个因素：快乐原则、本我和超我。&我们的感觉和行动会受到潜意识的鼓动：说溜了嘴、合理化和投射。&梦都反映我们本身的愿望。",
    name: "弗洛伊德",
    country: "奥地利",
    word: "意识",
    weight: 12.76848869812,
    start: 1856,
    end: 1939,
  },
  {
    points:
      "人类的意识只是他心灵中一小部分而已，在意识之外，还有“潜意识”的存在。&人内心的三个因素：快乐原则、本我和超我。&我们的感觉和行动会受到潜意识的鼓动：说溜了嘴、合理化和投射。&梦都反映我们本身的愿望。",
    name: "弗洛伊德",
    country: "奥地利",
    word: "合理化",
    weight: 9.96885201925,
    start: 1856,
    end: 1939,
  },
  {
    points:
      "人类的意识只是他心灵中一小部分而已，在意识之外，还有“潜意识”的存在。&人内心的三个因素：快乐原则、本我和超我。&我们的感觉和行动会受到潜意识的鼓动：说溜了嘴、合理化和投射。&梦都反映我们本身的愿望。",
    name: "弗洛伊德",
    country: "奥地利",
    word: "投射",
    weight: 9.17328983326,
    start: 1856,
    end: 1939,
  },
  {
    points:
      "人类的意识只是他心灵中一小部分而已，在意识之外，还有“潜意识”的存在。&人内心的三个因素：快乐原则、本我和超我。&我们的感觉和行动会受到潜意识的鼓动：说溜了嘴、合理化和投射。&梦都反映我们本身的愿望。",
    name: "弗洛伊德",
    country: "奥地利",
    word: "一小部分",
    weight: 8.73589167805,
    start: 1856,
    end: 1939,
  },
  {
    points:
      "人在一个没有意义的世界中会感到疏离。&一个东西只是在己，而人类却是为己，因此人的存在并不等于东西的存在。&人注定要受自由之苦，并没有自己，但却已是自由。因为一旦被扔入这个世界，他就必须为他所做的每一件事情负责。&哲学问题的定义就是每一个世代，每一个人都必须要一再地问自己的一些问题。",
    name: "萨特",
    country: "法国",
    word: "自由",
    weight: 11.8006563133,
    start: 1905,
    end: 1980,
  },
  {
    points:
      "人在一个没有意义的世界中会感到疏离。&一个东西只是在己，而人类却是为己，因此人的存在并不等于东西的存在。&人注定要受自由之苦，并没有自己，但却已是自由。因为一旦被扔入这个世界，他就必须为他所做的每一件事情负责。&哲学问题的定义就是每一个世代，每一个人都必须要一再地问自己的一些问题。",
    name: "萨特",
    country: "法国",
    word: "在己",
    weight: 11.739204307083542,
    start: 1905,
    end: 1980,
  },
  {
    points:
      "人在一个没有意义的世界中会感到疏离。&一个东西只是在己，而人类却是为己，因此人的存在并不等于东西的存在。&人注定要受自由之苦，并没有自己，但却已是自由。因为一旦被扔入这个世界，他就必须为他所做的每一件事情负责。&哲学问题的定义就是每一个世代，每一个人都必须要一再地问自己的一些问题。",
    name: "萨特",
    country: "法国",
    word: "为己",
    weight: 11.739204307083542,
    start: 1905,
    end: 1980,
  },
  {
    points:
      "人在一个没有意义的世界中会感到疏离。&一个东西只是在己，而人类却是为己，因此人的存在并不等于东西的存在。&人注定要受自由之苦，并没有自己，但却已是自由。因为一旦被扔入这个世界，他就必须为他所做的每一件事情负责。&哲学问题的定义就是每一个世代，每一个人都必须要一再地问自己的一些问题。",
    name: "萨特",
    country: "法国",
    word: "地问",
    weight: 11.739204307083542,
    start: 1905,
    end: 1980,
  },
  {
    points:
      "人在一个没有意义的世界中会感到疏离。&一个东西只是在己，而人类却是为己，因此人的存在并不等于东西的存在。&人注定要受自由之苦，并没有自己，但却已是自由。因为一旦被扔入这个世界，他就必须为他所做的每一件事情负责。&哲学问题的定义就是每一个世代，每一个人都必须要一再地问自己的一些问题。",
    name: "萨特",
    country: "法国",
    word: "疏离",
    weight: 11.4157710022,
    start: 1905,
    end: 1980,
  },
];

const getFormatter = (val: number) => {
  if (val < 0) {
    return `公元前${replace(val, "-", "")}年`;
  } else {
    return `${val}年`;
  }
};

const s2DataConfig = {
  fields: {
    rows: ["country", "name", "start", "end", "points", "word"],
    columns: [],
    values: ["weight"],
  },
  meta: [
    {
      field: "word",
      name: "关键词",
    },
    {
      field: "points",
      name: "观点",
    },
    {
      field: "name",
      name: "姓名",
    },
    {
      field: "country",
      name: "国家",
    },
    {
      field: "start",
      name: "出生",
      formatter: getFormatter,
    },
    {
      field: "end",
      name: "逝世",
      formatter: getFormatter,
    },
    {
      field: "weight",
      name: "权重",
      formatter: (val: number) => val.toFixed(2),
    },
  ],
  data,
};

export { data, s2DataConfig };
