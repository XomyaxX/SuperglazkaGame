/* ═══════════════════════════════════════════════════════════
   СУПЕРГЛАЗКА — Data-Driven Episode Engine
   ═══════════════════════════════════════════════════════════ */

const App = (function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // EPISODE DATA CONFIG
  // ═══════════════════════════════════════════════════════════
  const EPISODES = {
    1: {
      title: "Рождение героини",
      frames: [
        {
          id: 1,
          title: "Планета Видеаль в космосе",
          bgGradient: "radial-gradient(ellipse at 50% 50%, #312e81 0%, #1e1b4b 40%, #0f0a1e 100%)",
          bgImage: "assets/images/изб_1.png",
          audioSrc: "assets/audio/ауд_1.mp3",
          narration: `На бескрайних просторах Вселенной, там, где даже самые мощные телескопы видят лишь россыпь далеких звёзд, скрывается удивительная планета Видеаль. Она такая крошечная, что могла бы уместиться на ладони самого маленького великана, но такая важная, что без неё жизнь многих детей на Земле стала бы гораздо сложнее.

Видеаль — это гармония природы и населяющих планету жителей. Они понимают язык животных и относятся к ним как к равным. Здесь козы работают журналистами, а лошади занимаются садоводством и собирают полезные травы, из которых видеаляне делают чудодейственные лекарства. Здесь текут реки с прозрачной целебной питьевой водой, в лесах растут деревья с магическими плодами, а на лугах распускаются удивительные чудотворные цветы, которые не встречаются ни на одной другой планете.`,
          videoPrompt: "В бескрайнем космосе парит яркая неоновая планета, из её центра постепенно усиливается пульсирующее свечение, светятся искристые звёзды, камера делает медленный плавный наезд к планете за 10 секунд.",
          videoSrc: "assets/videos/Вид_1.mp4",
          dialogues: [],
          transitionText: "Населяют Видеаль удивительные жители — невысокого роста, с огромными голубыми глазами, густыми ресницами, шёлковыми кудряшками, из которых торчат забавные круглые ушки.",
          game: null
        },
        {
          id: 2,
          title: "Жизнь на Видеале",
          bgGradient: "radial-gradient(ellipse at 50% 80%, #4c1d95 0%, #1a0f2e 60%, #0a0618 100%)",
          bgImage: "assets/images/изб_2.png",
          audioSrc: "assets/audio/ауд_2.mp3",
          narration: `Населяют Видеаль удивительные жители — невысокого роста, с огромными голубыми глазами, густыми ресницами, шёлковыми кудряшками, из которых торчат забавные круглые ушки. Но главное — у них самые добрые сердца во всей вселенной!

Здесь каждый посвящает себя только одной миссии: следить за здоровьем детей планеты Земля, а в особенности, за их зрением. Ведь с помощью глаз человек получает 90 процентов информации из окружающего мира! И, чем лучше ребенок будет заботиться о своем зрении с самого детства, тем ярче будет его жизнь, когда он станет взрослым.`,
          videoPrompt: "Персонажи стоят в центре мощёной средневековой улицы, дружелюбно улыбаются и поочерёдно машут руками, камера мягко приближается к группе за 10 секунд.",
          videoSrc: "assets/videos/Вид_2.mp4",
          dialogues: [],
          transitionText: "На планете есть ещё много других полезных изобретений и чудодейственных снадобий, которые помогают жить ярче и веселее.",
          game: null
        },
        {
          id: 3,
          title: "Угроза Великой Тьмы",
          bgGradient: "linear-gradient(180deg, #1e293b 0%, #334155 40%, #0f172a 100%)",
          bgImage: "assets/images/изб_3.png",
          audioSrc: "assets/audio/ауд_3.mp3",
          narration: `На планете есть ещё много других полезных изобретений и чудодейственных снадобий, которые помогают жить ярче и веселее. Именно жители планеты Видеаль создали необыкновенные очки. Они предупреждают об опасности и шепчут мальчикам и девочкам: «Отодвинь книгу подальше, сядь прямо, не сутулься, сделай перерыв».`,
          videoPrompt: "В 10-секундном одном кадре показаны стильные очки, парящие над мягкой бархатной подушкой в тёмном фиолетовом космическом пространстве; вокруг оправы медленно кружатся и переливаются мягким светом крошечные частицы и искры, создавая ореол магического сияния, камера делает плавный медленный наезд на очки; в озвучке спокойным, чётким голосом прозвучивают команды: «Отодвинь книгу подальше, сядь прямо, не сутулься, сделай перерыв».",
          videoSrc: "assets/videos/Вид_3.mp4",
          dialogues: [],
          transitionText: "Но скромные и воспитанные видеаляне не всесильны. Однажды, вокруг их планеты стало сгущаться Великое Зло.",
          game: 'blink'
        },
        {
          id: 3.5,
          title: "Угроза Великой Тьмы",
          bgGradient: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0a0618 100%)",
          bgImage: "assets/images/изб_3.png",
          audioSrc: "assets/audio/ауд_4.mp3",
          narration: `Но скромные и воспитанные видеаляне не всесильны. Однажды, вокруг их планеты стало сгущаться Великое Зло. Оно грозило поглотить Видеаль и погрузить ее в непроглядную тьму. А значит, опасность грозила и всем детям на Земле, которые могли остаться без полезных изобретений и целебных лекарств.`,
          videoPrompt: "Кинематографичный одинарный кадр: камера с уровня спин жителей старинного европейского городка смотрит вперёд на площадь, где множество людей разных возрастов застыли, уставившись в небо над замком вдали; за 10 секунд над светлым вечерним небом стремительно сгущаются тяжёлые тёмные тучи, ветер чуть колышет одежду и шляпы, лица людей постепенно меняются от любопытства к испугу, небо мрачно темнеет, подчёркивая тревожную атмосферу.",
          videoSrc: "assets/videos/Вид_4.mp4",
          dialogues: [],
          transitionText: "Весть об этом разнеслась за считанные секунды. И жители планеты потянулись к Каменной площади, чтобы услышать от самого Правителя, что их ждёт.",
          game: null
        },
        {
          id: 4,
          title: "Каменная площадь",
          bgGradient: "linear-gradient(160deg, #0f766e 0%, #134e4a 30%, #0f172a 70%, #0a0618 100%)",
          bgImage: "assets/images/изб_4.png",
          audioSrc: "assets/audio/ауд_5.mp3",
          narration: `Весть об этом разнеслась за считанные секунды. И жители планеты высыпали на Каменную площадь, чтобы услышать о том, что их ждет, от самого Правителя.

Площадь эта находилась в лоне огромной скалы, унизанной сверкающими драгоценными камнями. С её высоты с мелодичным журчанием, словно звуки флейты, ниспадал водопад. Его бирюзовые воды впадали в озеро, на поверхности которого сновали рыбы, словно водомерки. Это место было священным. Здесь жители планеты проводили добрые магические ритуалы. А в самом воздухе царили покой и гармония.`,
          videoPrompt: "Один статичный кадр: камера на каменном пьедестале, перед ним ярко-зеленая лужайка, вдалеке горная гряда со снежными вершинами, с утёса плавно ниспадает мощный водопад, в тумане сияет мягкая двойная радуга.",
          videoSrc: "assets/videos/Вид_5.mp4",
          dialogues: [],
          transitionText: "Но на этот раз, к шуму водопада добавились тревожные звуки.",
          game: null
        },
        {
          id: 5,
          title: "Мудрый Хрусталик и Советник",
          bgGradient: "radial-gradient(ellipse at 40% 60%, #4338ca 0%, #1e1b4b 50%, #0a0618 100%)",
          bgImage: "assets/images/изб_5.png",
          audioSrc: "assets/audio/ауд_6.mp3",
          narration: `К шуму водопада прибавился тревожный гул: видеаляне перешёптывались, гадая, какая беда им грозит. Наконец из толпы вышел правитель — Мудрый Хрусталик. Когда-то прибыв с Земли, он завоевал их умом, храбростью и добротой, и они сами упросили его стать королём. Высокий и статный, с прямыми седыми волосами, совершенно обычными ушами и едва заметным шрамом на щеке, он поднимался по ступеням на возвышение. Седая борода трепалась на ветру, а тонкая корона с магическим камнем сверкала на солнце. Поверх серебристого костюма на нём лежала горностаевая мантия, на груди — брошь-«V» Ордена Стражей, а в руке он сжимал ярко-голубой посох, внутри которого мерцали тысячи огоньков.

Вслед за ним шёл Советник. Тоже землянин, он жил на Видеале так давно, что забыл своё настоящее имя. Высокий, худой и вечно путающийся в длинной тёмно-зелёной мантии, он то и дело поправлял монокль и съезжающую академическую шапочку, из-под которой торчали растрёпанные волосы, и едва не ронял увесистую магическую папку с секретными документами.`,
          videoPrompt: "Мудрый Хрусталик торжественно поднимается по ступеням на возвышение, посох светится, мантия развевается, Советник за ним запинается о край мантии, поправляет монокль, толпа тихонько хихикает.",
          videoSrc: "assets/videos/Вид_6.mp4",
          dialogues: [],
          transitionText: "Мудрый Хрусталик поднялся на возвышение и глубоко вдохнул свежий горный воздух.",
          game: null
        },
        {
          id: 6,
          title: "Речь Правителя",
          bgGradient: "linear-gradient(160deg, #14532d 0%, #166534 30%, #0f172a 80%, #0a0618 100%)",
          bgImage: "assets/images/изб_6.png",
          audioSrc: "assets/audio/ауд_7.mp3",
          dialogueAudio: ["assets/audio/диалог_кадр7.mp3"],
          narration: `Мудрый Хрусталик поднялся на возвышение и глубоко вдохнул свежий горный воздух. А вот Советник засмотрелся на чудесный водопад, запнулся и наступил на край мантии правителя. Толпа тихонько захихикала.

Советник смущенно улыбнулся, и поправил монокль, в котором отражалось бесчисленное множество видеалян.

Мудрый Хрусталик остановился ровно на середине возвышения. В воздухе застыло напряжение. Но каждый надеялся и верил, что мудрый правитель примет верное решение и спасет Видеаль от надвигающейся Великой Тьмы.

И только один маленький видеалянин не выдержал и от волнения подбросил шапку с колокольчиками. Она зазвенела и приземлилась на рог козе, которая застыла с фотоаппаратом, стараясь сделать торжественный кадр. Она недовольно приподняла бровь и несколько раз щелкнула затвором. Ведь настоящий репортёр не должен отвлекаться на такие мелочи, как летающие звенящие шляпы.`,
          videoPrompt: "Король с посохом поднимается на пьедестал и обращается с речью к народу. Переход: из толпы вылетает чёрная шляпа и в плавном слоу-моушен приземляется на рог козы-фотографа.",
          videoSrc: "assets/videos/Вид_7.mp4",
          dialogues: [
            { speaker: "hrust", text: "— Здравствуйте, уважаемые и досточтимые видеаляне! Рад видеть вас в здравии и благоденствии!", position: "bl", style: "top:18%;left:6%" },
            { speaker: "hrust", text: "— Мир Тьмы становится сильнее с каждым днем!", position: "br", style: "top:42%;right:6%" }
          ],
          transitionText: "В толпе вновь послышалось тревожное перешёптывание.",
          game: null
        },
        {
          id: 7,
          title: "Ритуал Призыва",
          bgGradient: "radial-gradient(circle at 50% 50%, #7c3aed 0%, #4c1d95 40%, #0a0618 100%)",
          bgImage: "assets/images/изб_7.png",
          audioSrc: "assets/audio/ауд_8.mp3",
          dialogueAudio: ["assets/audio/диалог_кадр8.mp3", "assets/audio/диалог_кадр8.5.mp3"],
          narration: `В толпе вновь послышалось тревожное перешёптывание. Из ропота толпы можно было разобрать пару возгласов.

После его слов трое помощников внесли огромный прозрачный сосуд, внутри которого клубился разноцветный туман. Он бурлил, булькал и звонко лопал пузырями.

Хрусталик опустил посох в котёл и начал произносить заклинание:`,
          videoPrompt: "Мудрый Хрусталик опускает посох в прозрачный сосуд, туман внутри бурлит, булькал и звонко лопает пузырями, толпа плавно качается из стороны в сторону, произнося заклинание, жидкость засветилась.",
          videoSrc: "assets/videos/Вид_8.mp4",
          dialogues: [
            { speaker: "hrust", text: "— Нам придётся прибегнуть к забытому ритуалу. Видеаль давно не знал бед, — правитель с грустью оглядел подданных.", position: "bl", style: "top:6%;left:6%" },
            { speaker: "tolpa", text: "— Неужели Призыв? — ахнула дама. — Призыв?! — поддержал сосед. — Я о нём только от бабушки слышал! — отозвался старичок.", position: "br", style: "top:20%;right:6%" },
            { speaker: "hrust", text: "— Да, мы совершим Призыв! — подтвердил Мудрый Хрусталик.", position: "bl", style: "top:36%;left:6%" },
            { speaker: "tolpa", text: "— Ура! Мы спасены! — взревела площадь.", position: "br", style: "top:44%;right:6%" },
            { speaker: "sovet", text: "— Р-рано п-праздновать, — заикаясь и слегка картавя, Советник поднял волшебную папку. — Сохраним т-терпение и надежду.", position: "bl", style: "top:52%;left:6%" },
            { speaker: "hrust", text: "— О Великий Источник, услышь наш зов, Пошли защитника миров! Его ты силой награди, Пусть свет горит в его груди!", position: "br", style: "top:64%;right:6%" },
            { speaker: "tolpa", text: "— ПРИЗЫВ! К ТЕБЕ ВЗЫВАЕМ МЫ! — подхватила толпа. — Не сработал! — выкрикнул кто-то. — Планета обречена!", position: "bl", style: "top:78%;left:6%" },
            { speaker: "sovet", text: "— Н-не сходится с р-расчётами! — забормотал он. — Неужели та самая погрешность в 0,0000000000000001 процента?! О господи, ск-сколько же там нулей…", position: "br", style: "top:90%;right:6%" }
          ],
          transitionText: "Жидкость в сосуде засветилась. Дым рассеялся... но вода осталась точно такой же, как и была!",
          game: 'tracker'
        },
        {
          id: 8,
          title: "Трансформация в Суперглазку",
          bgGradient: "radial-gradient(circle at 50% 50%, #ec4899 0%, #a855f7 30%, #4c1d95 70%, #0a0618 100%)",
          bgImage: "assets/images/изб_9.png",
          audioSrc: "assets/audio/ауд_9.mp3",
          dialogueAudio: ["assets/audio/диалог_кадр9.mp3"],
          narration: `С громким хлопком на площадь опустилось «нечто». Туман рассеялся, обнажив девочку лет десяти: в красном комбинезоне, с растрёпанными белоснежными волосами и огромными голубыми глазами. Советник судорожно икнул и едва не лишился чувств, но помощники быстро привели его в себя.
В тот же миг комбинезон вспыхнул и преобразился: за спиной затрепался белый плащ, на руках и ногах возникли краги и сапожки, а на груди засияла буква «V».
Толпа, не слушая его, ринулась на возвышение. Девочку подхватили и начали подбрасывать — видеаляне не учли, что «новорождённая» героиня ещё не знает их обычаев. Девочка испугалась, решив, что её снова запустят в небо. Опомнившись, её бережно спустили на землю, поправили плащ, причёску и сдули невидимую пылинку.`,
          videoPrompt: "Посох касается плеча девочки, пробегает разряд тока, комбинезон озаряется ярким светом, преображается — появляются белый плащ, перчатки-краги, сапожки, знак «V» на груди сверкает, толпа ликует.",
          videoSrc: "assets/videos/Вид_9.mp4",
          dialogues: [
            { speaker: "dev", text: "— Привет, — сказала она тоненьким голоском, глядя на пришедшего в себя Советника, рядом с которым приземлилась.", position: "bl", style: "top:10%;left:6%" },
            { speaker: "hrust", text: "— Ты наше спасение, — мягко улыбнулся Мудрый Хрусталик и, не выпуская посох из рук, обнял ее.", position: "br", style: "top:24%;right:6%" },
            { speaker: "dev", text: "— Ай, — взвизгнула девочка, когда волшебный посох коснулся её плеча. По всему телу будто пробежал легкий разряд тока.", position: "bl", style: "top:38%;left:6%" },
            { speaker: "tolpa", text: "— Да это же символ планеты Видеаль! — обрадовались жители. — Мы спасены!", position: "br", style: "top:52%;right:6%" },
            { speaker: "sovet", text: "— Н-не тор-ропитесь, — Советник вновь замахал папкой, — нам предстоит д-долгий путь, чтобы об-бучить всему эту девочку.", position: "bl", style: "top:66%;left:6%" },
            { speaker: "hrust", text: "— Нам нужно многое тебе рассказать! Мой Советник всегда будет рядом и всему обучит тебя.", position: "br", style: "top:80%;right:6%" }
          ],
          transitionText: "Мудрый Хрусталик заботливо взял её за руку, доброжелательно улыбнулся и сказал:",
          game: null
        },
        {
          id: 9.5,
          title: "Трансформация в Суперглазку",
          bgGradient: "radial-gradient(ellipse at 50% 30%, #f59e0b 0%, #a855f7 30%, #4c1d95 70%, #0a0618 100%)",
          bgImage: "assets/images/изб_9.png",
          audioSrc: "assets/audio/ауд_10.mp3",
          dialogueAudio: ["assets/audio/диалог_кадр10.mp3"],
          narration: `Мудрый Хрусталик заботливо взял её за руку, доброжелательно улыбнулся и сказал:

Девочка нерешительно ступила на каменную дорожку, которая вела в замок правителя. Советник ободряюще кивнул ей. И тогда она весело побежала вперёд, подпрыгивая то на одной, то на другой ножке.

Жители начали расходиться. И каждый надеялся, что эта малышка совсем скоро спасет их планету Видеаль от Большой Тьмы и защитит детей с планеты Земля. А видеалянам нужно было приниматься за работу, ведь каждый помнил о своей миссии, пусть она была и под угрозой.`,
          videoPrompt: "Оба персонажа в кадре медленно идут по мощёной улице уютного городка к сказочному замку в конце улицы, держась за руку, тёплый мягкий свет, плавное медленное отдаляющееся движение камеры со спины героев, 10-секундный единый кинематографичный план.",
          videoSrc: "assets/videos/Вид_10.mp4",
          dialogues: [],
          transitionText: "Только один видеалянин грустно плёлся позади толпы, он был единственным во всей планете, который не мог найти себе дела!",
          game: null
        },
        {
          id: 10,
          title: "Ищуработу и коза-журналист",
          bgGradient: "radial-gradient(ellipse at 60% 70%, #b45309 0%, #7c2d12 30%, #1a0f2e 70%, #0a0618 100%)",
          bgImage: "assets/images/изб_10.png",
          audioSrc: "assets/audio/ауд_11.mp3",
          narration: `Позади толпы грустно плёлся «Ищуработу» — единственный на планете бездельник. Местные так прозвали его за то, что он был и полицейским, и пожарным, и врачом, но на Видеале уже век не было преступлений, полвека — пожаров, а болезней не знали вовсе. Лишь раз случился «вопиющий» инцидент: слепая курица нечаянно наступила лошади на копыто. «Ищуработу» обрадовался было поймать нарушителя, но тюрьму давно снесли, а на её месте построили школу. Лошадь не обиделась, курица извинилась — дело замяли.
Перед новыми поисками он сделал привычную зарядку. Физкультура с детства, взрослый труд и ежедневная трапеза из целебных плодов делали видеалян неуязвимыми для хворей. Тем временем коза дописала репортаж, захлопнула блокнот и отправилась в редакцию. Вскоре на первой полосе газеты появилась статья: «У Видеаля появился новый герой!» — и фотография девочки в сверкающем костюме.`,
          videoPrompt: "В первой сцене курица в синем платье с узорчатым фартуком извиняется перед конём в элегантном костюме, на заднем плане к данным персонажам бежит мужчина в медицинской форме с эмблемой красного креста, подняв тревожно руки, в данной сцене камера статичная, без зума и отдаления. В другой половине видео ролика открывается общий план референсного изображения, камера статичная, коза в бордовом костюме дописывает пером текст в блокноте, после чего закрывает блокнот и ставит перо в чернильницу, мягкий кинематографичный план видео, тёплое освещение ламп, визуальный уют.",
          videoSrc: "assets/videos/Вид_11.mp4",
          dialogues: [],
          transitionText: "Продолжение следует...",
          game: null
        }
      ]
    },
    2: {
      title: "Кто я?",
      frames: [
        {
          id: 1,
          title: "Тронный зал",
          bgGradient: "radial-gradient(ellipse at 50% 30%, #7c3aed 0%, #4c1d95 40%, #1e1b4b 80%, #0a0618 100%)",
          bgImage: "assets/images/2_изб_1.png",
          audioSrc: "assets/audio/ауд_12.mp3",
          narration: `Пока девочка шла к замку, она то и дело озиралась и поглядывала на Правителя с Советником. И хотя со стороны казалось, что её ничего не тревожит, она всё же испытывала волнение. Откуда я здесь? Что это за место? Кто я вообще такая? Мысли в её голове бегали с невероятной скоростью, так что ни одну из них она не могла ухватить и «додумать» до конца.

Но войдя наконец во дворец, она почувствовала радость. Всё здесь казалось родным и знакомым. Так, наверное, чувствует себя каждый, когда возвращается домой после долгого путешествия. И всё же, девочка с любопытством изучала каждый уголок дворца. Больше всего её поразил величественный зал, украшенный коврами с разноцветным орнаментом и картинами в тяжелых золочёных рамах, висящими на стене. В центре стоял искуссной резьбы золоченый трон, а перед ним справа зажженый камин с потрескивающими поленьями.`,
          videoPrompt: "Однокадровое видео: девочка с белыми волосами и в красном костюме идёт по длинному освещённому свечами каменному коридору замка, медленно оглядывается по сторонам с широко раскрытыми от удивления глазами, останавливается у старинных картин, мягкий тёплый свет камина и свечей подчёркивает текстуру каменных стен и ковров, плавный медленный трекинг-кадр камеры, кинематографичная композиция.",
          videoSrc: "assets/videos/Вид_12.mp4",
          dialogues: [],
          transitionText: "Мудрый Хрусталик сел на трон и с интересом посмотрел на девочку.",
          game: null
        },
        {
          id: 2,
          title: "Варианты имён",
          bgGradient: "linear-gradient(160deg, #1e3a5f 0%, #334155 30%, #0f172a 70%, #0a0618 100%)",
          bgImage: "assets/images/2_изб_2.png",
          audioSrc: "assets/audio/ауд_13.mp3",
          narration: `Мудрый Хрусталик сел на трон и с интересом посмотрел на девочку.

Советник заботливо расправил складки на её плаще и подвел к правителю.`,
          videoPrompt: "10-секундное однокадровое видео: молодой учёный в мантии и квадратной академической шапочке стоит в величественном старинном зале, перед ним парит большая светящаяся магическая книга, он быстро перелистывает страницы, свет мерцает на его лице, на середине ролика останавливается на нужной странице, лицо меняется от сосредоточенности к радости, камера делает лёгкий наезд.",
          videoSrc: "assets/videos/Вид_13.mp4",
          dialogues: [
            { speaker: "hrust", text: "— Добро пожаловать в новый дом, — улыбнулся Мудрый Хрусталик, и вокруг его глаз заиграли добрые морщинки.", position: "bl", style: "top:10%;left:6%" },
            { speaker: "dev", text: "— Хм…, — нахмурилась девочка. — Вы — правитель, это ваш помощник, — она кивнула в сторону Советника, — а кто же я?", position: "br", style: "top:28%;right:6%" },
            { speaker: "sovet", text: "— Ты — новый гер-рой нашего мира! Т-точнее героиня… Мы призвали т-тебя на помощь нам и людям с планеты Земля!", position: "bl", style: "top:46%;left:6%" },
            { speaker: "dev", text: "— Значит спасать мир… — задумчиво произнесла девочка. — А это интересно. Только вот, как же меня зовут?", position: "br", style: "top:64%;right:6%" },
            { speaker: "sovet", text: "— Я тут накидал пар-ру вариантов! Ч-чудо Радужка? В-великое Око? Глаз Р-рыцарь?!", position: "bl", style: "top:82%;left:6%" }
          ],
          transitionText: "Мудрый Хрусталик приподнял бровь и с сомнением посмотрел на Советника.",
          game: null
        },
        {
          id: 3,
          title: "Суперглазка и Советник",
          bgGradient: "radial-gradient(circle at 50% 50%, #a855f7 0%, #7c3aed 40%, #4c1d95 80%, #0a0618 100%)",
          bgImage: "assets/images/2_изб_3.png",
          audioSrc: "assets/audio/ауд_14.mp3",
          narration: `Мудрый Хрусталик приподнял бровь и с сомнением посмотрел на Советника.

Но в следующий миг девочка почувствовала, как в груди её что-то затрепетало. Если бы девочка знала, что такое душа, то скорее всего подумала, что это она. Буквы собрались в правильный порядок и сорвались с её губ.

Советник слегка расстроился, что ни один из его вариантов, который он так долго подбирал, не подошёл. Но тут же взял себя в руки и многозначительно сказал:

Он выправил осанку, поднял подбородок чуть выше обычного и торжественно произнёс:

Он не ожидал такого порыва чувств, поэтому смутился и слегка покраснел.

Советник взял Суперглазку за руку и повёл её по длинным, утопающим в коврах коридорам. Пока они шли, он рассказывал ей удивительные истории о планете Видеаль. Замок был таким огромным, что, когда они добрались до её комнаты, наступил вечер.`,
          videoPrompt: "Синематографичное 3D-видео в одном кадре: два персонажа медленно идут по длинному готическому коридору замка, камера с лёгким плавным трекингом движется позади них на уровне плеч, персонаж в зелёном плаще держит светящуюся книгу, девочка идёт рядом, держась за его руку, вдоль стен горят канделябры, видны старинные портреты и арки, сказочная уютная атмосфера, 10 секунд.",
          videoSrc: "assets/videos/Вид_14.mp4",
          dialogues: [
            { speaker: "dev", text: "— Су…пер…глазка! Я — Суперглазка! Теперь я точно знаю, что это мое имя.", position: "bl", style: "top:10%;left:6%" },
            { speaker: "hrust", text: "— Отлично! Таких героев у нас ещё не было! — довольно резюмировал Мудрый Хрусталик.", position: "br", style: "top:24%;right:6%" },
            { speaker: "sovet", text: "— Суперглазка! П-прекрасное имя. Теперь же тебе пора отдохнуть. А с завтрашнего дня ты приступаешь к урокам и тренировкам. Ч-чтобы сделать из тебя настоящего героя — нужно многое знать и уметь. У тебя буд-дут самые лучшие учителя на этой планете.", position: "bl", style: "top:38%;left:6%" },
            { speaker: "sovet", text: "— Ведь од-дин из учителей — я сам!", position: "br", style: "top:52%;right:6%" },
            { speaker: "dev", text: "— Ура! — девочка порывисто обняла его.", position: "bl", style: "top:66%;left:6%" },
            { speaker: "hrust", text: "— Я рад, что вы подружились, — одобрительно кивнул Мудрый Хрусталик. — А теперь покажи Суперглазке её комнату.", position: "br", style: "top:80%;right:6%" },
            { speaker: "sovet", text: "— Б-будет сделано, Правитель. За мной!", position: "bl", style: "top:94%;left:6%" }
          ],
          transitionText: "Она подбежала к широкому окну своей комнаты.",
          game: null
        },
        {
          id: 4,
          title: "Новая комната",
          bgGradient: "linear-gradient(160deg, #1d4ed8 0%, #7c3aed 40%, #1e1b4b 80%, #0a0618 100%)",
          bgImage: "assets/images/2_изб_4.png",
          audioSrc: "assets/audio/ауд_15.mp3",
          narration: `Она подбежала к широкому окну своей комнаты. В нём открывался вид на весь город. Дома казались совсем крошечными и запросто могли уместиться на ладошке.

А вот Луна, наоборот, висела так близко, что если постараться и протянуть руку, до неё наверняка можно дотронуться! Залюбовавшись видом из окна Суперглазка не сразу заметила большую и мягкую кровать. А затем увидела на стенах полки со множеством книг, с разноцветными переплётами, которые ей ещё предстояло прочесть. Но самым удивительным было круглое гладкое зеркало, которое висело прямо над столом и походило на озеро, но не выходило из берегов. И не стекало по стене.

Как только Советник ушёл и пожелал ей спокойной ночи, Суперглазка поспешила к озеру. Взглянула на него и увидела милую рожицу с забавными ушками и белоснежными волосами. Она посмотрела вправо — рожица в озере тоже, влево — та опять повторила.

Но пальчик её остался сухим. А рожица внутри тоже протянула свой пальчик.`,
          videoPrompt: "10-секундное однокадровое видео: персонаж в своей комнате стоит у стола перед круглым зеркалом и игриво «соревнуется» с отражением, отражение идеально синхронно повторяет движения, плавные мягкие движения, камера полностью зафиксирована, общий план захватывает персонажа, зеркало, стол, кровать и каменную арку с окном и луной.",
          videoSrc: "assets/videos/Вид_15.mp4",
          dialogues: [
            { speaker: "dev", text: "— Какая красота! И высота! — воскликнула Суперглазка.", position: "bl", style: "top:12%;left:6%" },
            { speaker: "dev", text: "— Да оно меня передразнивает! — подумала Суперглазка и решила потрогать воду.", position: "br", style: "top:34%;right:6%" },
            { speaker: "dev", text: "— Так это я и есть! — поняла девочка. — Что ж довольно симпатичная.", position: "bl", style: "top:56%;left:6%" }
          ],
          transitionText: "— Пора…Пора ложиться спать, — послышался шёпот.",
          game: null
        },
        {
          id: 5,
          title: "Умиротворённый сон",
          bgGradient: "radial-gradient(ellipse at 50% 80%, #312e81 0%, #1e1b4b 40%, #0a0618 100%)",
          bgImage: "assets/images/2_изб_5.png",
          audioSrc: "assets/audio/ауд_16.mp3",
          narration: `Суперглазка насторожилась и забавно повела носиком из стороны в сторону.

И тут девочка поняла, что это шепчут на полках книги и едва шелестят страницами, убаюкивая её — книги тоже были волшебными.

Уставшая от впечатлений, с головой, полной новых знаний и переживаний — она легла на удобную кровать и уснула крепким сном, не сняв даже сапожек. Тихонько засопела, и снилась ей жизнь, которая ждала её впереди, полная удивительных приключений. Жизнь, в которой ей суждено стать настоящим супергероем.`,
          videoPrompt: "10-секундное видео в единственном статичном кадре: персонаж в красном костюме с белыми волосами ложится на аккуратно застеленную кровать у круглого окна с большой луной, медленно расслабляется и засыпает, дыхание становится спокойнее, веки плавно закрываются, камера неподвижна.",
          videoSrc: "assets/videos/Вид_16.mp4",
          dialogues: [
            { speaker: "dev", text: "— Пора…Пора ложиться спать, — послышался шёпот.", position: "bl", style: "top:18%;left:6%" },
            { speaker: "dev", text: "— Тебе нужно набраться сил, чтобы постичь все секреты спасения планеты…", position: "br", style: "top:42%;right:6%" }
          ],
          transitionText: "Продолжение следует...",
          game: null
        }
      ]
    }
};

  // ═══════════════════════════════════════════════════════════
  // STATE
  // ═══════════════════════════════════════════════════════════
  let currentEpisode = null;
  let currentFrameIdx = 0;
  let frames = [];
  let isPlayingAudio = false;
  let audioTimeout = null;
  let currentAudioEl = null;
  let currentPhase = 'narration';
  let typeWriterInterval = null;
  let dialogueTimeouts = [];

  // ═══════════════════════════════════════════════════════════
  // DOM REFS
  // ═══════════════════════════════════════════════════════════
  const mainMenu = document.getElementById('main-menu');
  const episodeViewer = document.getElementById('episode-viewer');
  const splash = document.getElementById('splash');
  const startBtn = document.getElementById('startBtn');
  const frameContainer = document.getElementById('frame-container');
  const progressFill = document.querySelector('.progress-fill');
  const frameCounter = document.querySelector('.frame-counter');
  const transitionOverlay = document.getElementById('transition-overlay');

  // ═══════════════════════════════════════════════════════════
  // RENDER FRAME
  // ═══════════════════════════════════════════════════════════
  function renderFrame(frameData, idx, total) {
    const hasVideo = !!frameData.videoSrc;
    const videoContent = hasVideo
      ? `<img class="frame-preview" src="${escapeHtml(frameData.bgImage)}" alt="">
         <div class="frame-preview-info">
           <div class="frame-preview-num">Кадр ${idx + 1}</div>
           <div class="frame-preview-title">${escapeHtml(frameData.title)}</div>
         </div>
         <button class="video-play-btn">▶</button>
         <video src="${frameData.videoSrc}" playsinline preload="auto"></video>`
      : `<div class="video-placeholder">
          <div class="ph-icon">🎬</div>
          <div class="ph-text">Видео: ${escapeHtml(frameData.title)}</div>
          <div class="ph-note">${escapeHtml(frameData.videoPrompt)}</div>
        </div>`;

    return `
      <div class="frame" data-index="${idx}" style="display:${idx === 0 ? 'flex' : 'none'}">
        <div class="video-layer">
          ${videoContent}
        </div>

        <button class="audio-btn" data-audio="${escapeHtml(frameData.audioSrc || '')}" title="Озвучка рассказчика">
          <span class="audio-icon">🔊</span>
          <div class="audio-wave"><span></span><span></span><span></span><span></span></div>
        </button>
        ${(frameData.dialogueAudio?.length > 0) ? `
        <button class="dialogue-audio-btn" title="Озвучить диалог">
          <span>🗣️</span>
          <span>Озвучить диалог</span>
        </button>` : ''}

        <div class="narrator-bar">
          <span class="narrator-content"></span><span class="narrator-cursor">|</span>
        </div>
        <button class="narrator-toggle" title="Свернуть">−</button>

        <div class="frame-nav-bar">
          <button class="nav-btn nav-prev" ${idx === 0 ? 'disabled' : ''}>← Назад</button>
          <div class="nav-counter">Кадр ${idx + 1} из ${total}</div>
          <button class="nav-btn nav-next">${idx < total - 1 ? 'Вперёд →' : 'Завершить ✨'}</button>
        </div>

        ${idx < total - 1 ? `
        <div class="transition-popup" style="display:none">
          <div class="transition-popup-text"></div>
          <button class="transition-popup-btn">Далее →</button>
        </div>
        ` : ''}
      </div>
    `;
  }

  const SPEAKER_NAMES = {
    hrust: "Мудрый Хрусталик",
    sovet: "Советник",
    dev: "Девочка",
    tolpa: "Толпа",
    nar: "Рассказчик"
  };

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ═══════════════════════════════════════════════════════════
  // TYPEWRITER
  // ═══════════════════════════════════════════════════════════
  function stopTypeWriter() {
    if (typeWriterInterval) {
      clearInterval(typeWriterInterval);
      typeWriterInterval = null;
    }
  }

  function clearDialogueTimeouts() {
    dialogueTimeouts.forEach(id => clearTimeout(id));
    dialogueTimeouts = [];
  }

  function typeWriter(text, element) {
    stopTypeWriter();
    if (!element) return;
    element.textContent = '';
    const speed = 30; // ms per character
    let i = 0;
    typeWriterInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        // Auto-scroll to bottom
        const bar = element.closest('.narrator-bar');
        if (bar) bar.scrollTop = bar.scrollHeight;
      } else {
        stopTypeWriter();
      }
    }, speed);
  }

  // ═══════════════════════════════════════════════════════════
  // AUDIO
  // ═══════════════════════════════════════════════════════════
  function playAudioSequence(sources, onEnd) {
    stopAudio();
    const btn = document.querySelector('.frame.active .audio-btn');
    const queue = sources.filter(Boolean);

    function playNext() {
      if (queue.length === 0) {
        cleanupAudio(btn, onEnd);
        return;
      }
      const src = queue.shift();
      const audio = new Audio(src);
      audio.preload = 'auto';
      currentAudioEl = audio;

      if (btn) btn.classList.add('playing');
      isPlayingAudio = true;

      audio.onended = () => {
        if (audioTimeout) { clearTimeout(audioTimeout); audioTimeout = null; }
        playNext();
      };

      audio.onerror = () => {
        console.warn('Audio failed:', src);
        if (audioTimeout) { clearTimeout(audioTimeout); audioTimeout = null; }
        playNext();
      };

      audio.play().catch(err => {
        console.warn('Audio play failed:', src, err);
        if (audioTimeout) { clearTimeout(audioTimeout); audioTimeout = null; }
        playNext();
      });

      audioTimeout = setTimeout(() => {
        if (isPlayingAudio) {
          console.warn('Audio timeout, skipping:', src);
          playNext();
        }
      }, 30000);
    }

    if (queue.length === 0) {
      cleanupAudio(btn, onEnd);
      return;
    }
    playNext();
  }

  function stopAudio() {
    if (currentAudioEl) {
      currentAudioEl.pause();
      currentAudioEl = null;
    }
    if (audioTimeout) {
      clearTimeout(audioTimeout);
      audioTimeout = null;
    }
    const btn = document.querySelector('.frame.active .audio-btn');
    cleanupAudio(btn, null);
  }

  function cleanupAudio(btn, onEnd) {
    if (btn) btn.classList.remove('playing');
    isPlayingAudio = false;
    if (audioTimeout) {
      clearTimeout(audioTimeout);
      audioTimeout = null;
    }
    if (typeof onEnd === 'function') onEnd();
  }

  function showTransitionPopup(idx) {
    const frame = document.querySelectorAll('.frame')[idx];
    if (!frame) return;
    const popup = frame.querySelector('.transition-popup');
    if (!popup) return;
    const textEl = popup.querySelector('.transition-popup-text');
    const frameData = frames[idx];
    if (textEl && frameData && frameData.transitionText) {
      textEl.textContent = frameData.transitionText;
    }
    popup.style.display = 'flex';
    void popup.offsetWidth;
    popup.classList.add('visible');
  }

  function hideTransitionPopup(idx) {
    const frame = document.querySelectorAll('.frame')[idx];
    if (!frame) return;
    const popup = frame.querySelector('.transition-popup');
    if (!popup) return;
    popup.classList.remove('visible');
    setTimeout(() => {
      if (!popup.classList.contains('visible')) {
        popup.style.display = 'none';
      }
    }, 400);
  }

  function hideAllTransitionPopups() {
    document.querySelectorAll('.transition-popup.visible').forEach(p => {
      p.classList.remove('visible');
      setTimeout(() => {
        if (!p.classList.contains('visible')) p.style.display = 'none';
      }, 400);
    });
  }

  // ═══════════════════════════════════════════════════════════
  // FRAME NAVIGATION
  // ═══════════════════════════════════════════════════════════
  function showFrame(idx) {
    const allFrames = document.querySelectorAll('.frame');
    stopAudio();
    stopTypeWriter();
    clearDialogueTimeouts();
    hideAllTransitionPopups();
    allFrames.forEach((f, i) => {
      if (i !== idx) {
        const v = f.querySelector('video');
        if (v) { v.pause(); v.currentTime = 0; }
      }
      f.style.display = i === idx ? 'flex' : 'none';
      f.classList.toggle('active', i === idx);
    });
    currentFrameIdx = idx;

    const total = frames.length;
    if (progressFill) progressFill.style.width = ((idx + 1) / total * 100) + '%';
    if (frameCounter) frameCounter.textContent = `Кадр ${idx + 1} из ${total}`;

    const frame = allFrames[idx];
    if (!frame) return;

    // Reset video preview state for this frame
    const preview = frame.querySelector('.frame-preview');
    const previewInfo = frame.querySelector('.frame-preview-info');
    const playBtn = frame.querySelector('.video-play-btn');
    const video = frame.querySelector('video');
    if (preview) preview.classList.remove('hidden');
    if (previewInfo) previewInfo.classList.remove('hidden');
    if (playBtn) playBtn.style.display = 'flex';
    if (video) { video.classList.remove('visible'); video.pause(); video.currentTime = 0; }

    // Reset narrator bar collapse state
    const narratorBar = frame.querySelector('.narrator-bar');
    const narratorToggle = frame.querySelector('.narrator-toggle');
    if (narratorBar) { narratorBar.classList.remove('collapsed'); }
    if (narratorToggle) { narratorToggle.textContent = '−'; narratorToggle.title = 'Свернуть'; }

    // Auto-play audio narration + dialogue sequence
    const audioSrc = frame.querySelector('.audio-btn')?.dataset.audio;
    const dialogueAudios = frames[idx]?.dialogueAudio || [];
    const allAudio = [];
    if (audioSrc) allAudio.push(audioSrc);
    if (dialogueAudios.length) allAudio.push(...dialogueAudios);
    console.log('Frame', idx, 'audio queue:', allAudio);

    if (allAudio.length > 0) {
      playAudioSequence(allAudio, () => showTransitionPopup(idx));
    } else {
      setTimeout(() => showTransitionPopup(idx), 2500);
    }

    // Update profile badge in viewer
    if (typeof PlayerProfile !== 'undefined' && PlayerProfile.renderBadge) {
      PlayerProfile.renderBadge();
    }

    // Start typewriter narration
    const narratorContent = frame.querySelector('.narrator-content');
    const narrationText = frames[idx]?.narration || '';
    if (narratorContent && narrationText) {
      typeWriter(narrationText, narratorContent);
    }
  }

  function resetFrameState() {
    // No phase states to reset — video and audio start automatically
  }

  function nextFrame() {
    const frameData = frames[currentFrameIdx];
    if (frameData && frameData.game) {
      startGame(frameData.game);
      return;
    }
    if (currentFrameIdx < frames.length - 1) {
      showTransition(() => showFrame(currentFrameIdx + 1));
    } else {
      showEndScreen();
    }
  }

  function advanceFromGame() {
    // Called after game completes or is skipped
    // Bypass game check and go straight to next frame
    if (currentFrameIdx < frames.length - 1) {
      showTransition(() => showFrame(currentFrameIdx + 1));
    } else {
      showEndScreen();
    }
  }

  function prevFrame() {
    if (currentFrameIdx > 0) {
      showFrame(currentFrameIdx - 1);
    }
  }

  // ═══════════════════════════════════════════════════════════
  // PHASE TRANSITIONS
  // ═══════════════════════════════════════════════════════════
  function startVideoPhase() {
    // Deprecated — video now starts automatically with the frame
  }

  // ═══════════════════════════════════════════════════════════
  // GAME INTEGRATION
  // ═══════════════════════════════════════════════════════════
  function startGame(gameType) {
    stopAudio();
    if (gameType === 'runner') {
      showGameTransition('🏃 Мини-игра!', 'Помоги Суперглазке догнать Пикселька!', () => {
        if (typeof startRunnerGame === 'function') startRunnerGame();
      });
    } else if (gameType === 'gym') {
      showGameTransition('⚔️ Ваня против Ленивуса!', 'Используй три супер-атаки: Лазер, Прицел и Слёзы.', () => {
        if (typeof startGymGame === 'function') startGymGame();
      });
    } else if (gameType === 'blink') {
      showGameTransition('👁️ Моргайка!', 'Тренируем глазные мышцы: моргай, жмурься и распахивай глаза!', () => {
        if (typeof startBlinkGame === 'function') startBlinkGame();
      });
    } else if (gameType === 'tracker') {
      showGameTransition('🔮 Следи за шариком!', 'Следи глазами за светящимся шариком — тренируем внимание!', () => {
        if (typeof startTrackerGame === 'function') startTrackerGame();
      });
    }
  }

  function showGameTransition(title, subtitle, onStart) {
    const overlay = document.getElementById('game-transition-overlay');
    if (!overlay) { if (onStart) onStart(); return; }

    const tTitle = overlay.querySelector('.gt-title');
    const tSub = overlay.querySelector('.gt-sub');
    if (tTitle) tTitle.textContent = title;
    if (tSub) tSub.textContent = subtitle;

    overlay.classList.add('visible');

    const btn = overlay.querySelector('.gt-btn');
    if (btn) {
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      const start = () => {
        overlay.classList.remove('visible');
        if (onStart) setTimeout(onStart, 300);
      };
      newBtn.addEventListener('click', start);
      newBtn.addEventListener('touchstart', (e) => { e.preventDefault(); start(); }, {passive: false});
    }
  }

  // ═══════════════════════════════════════════════════════════
  // TRANSITIONS & END SCREEN
  // ═══════════════════════════════════════════════════════════
  function showTransition(onComplete) {
    if (!transitionOverlay) {
      if (onComplete) onComplete();
      return;
    }
    transitionOverlay.classList.add('visible');
    setTimeout(() => {
      transitionOverlay.classList.remove('visible');
      if (onComplete) onComplete();
    }, 800);
  }

  function showEndScreen() {
    const text = transitionOverlay ? transitionOverlay.querySelector('.transition-text') : null;
    if (text) text.textContent = 'Эпизод завершён! Скоро продолжение...';
    if (transitionOverlay) transitionOverlay.classList.add('visible');
    setTimeout(() => {
      if (transitionOverlay) transitionOverlay.classList.remove('visible');
      backToMenu();
    }, 3000);
  }

  // ═══════════════════════════════════════════════════════════
  // MENU
  // ═══════════════════════════════════════════════════════════
  function startEpisode(episodeId) {
    const epData = EPISODES[episodeId];
    if (!epData) return;

    currentEpisode = epData;
    frames = epData.frames;

    // Render frames into container
    if (frameContainer) {
      frameContainer.innerHTML = frames.map((f, i) => renderFrame(f, i, frames.length)).join('');
    }

    if (mainMenu) mainMenu.classList.add('hidden');
    if (episodeViewer) episodeViewer.classList.add('active');

    // Update profile badge
    if (typeof PlayerProfile !== 'undefined') PlayerProfile.renderBadge();

    // Bind events on newly rendered elements
    bindFrameEvents();
    showFrame(0);
  }

  function backToMenu() {
    stopAudio();
    if (episodeViewer) episodeViewer.classList.remove('active');
    if (mainMenu) mainMenu.classList.remove('hidden');
    if (frameContainer) frameContainer.innerHTML = '';
    currentEpisode = null;
    frames = [];
    currentFrameIdx = 0;
  }

  // ═══════════════════════════════════════════════════════════
  // EVENT BINDING
  // ═══════════════════════════════════════════════════════════
  function bindFrameEvents() {
    // Audio toggle
    document.querySelectorAll('.audio-btn').forEach(btn => {
      const toggle = () => {
        if (isPlayingAudio) {
          stopAudio();
        } else {
          const frameData = frames[currentFrameIdx];
          const allAudio = [];
          if (frameData?.audioSrc) allAudio.push(frameData.audioSrc);
          if (frameData?.dialogueAudio?.length) allAudio.push(...frameData.dialogueAudio);
          if (allAudio.length) playAudioSequence(allAudio, null);
        }
      };
      btn.addEventListener('click', toggle);
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); toggle(); }, {passive: false});
    });

    // Dialogue audio button
    document.querySelectorAll('.dialogue-audio-btn').forEach(btn => {
      const playDialogues = () => {
        stopAudio();
        const frameData = frames[currentFrameIdx];
        if (frameData?.dialogueAudio?.length) {
          playAudioSequence(frameData.dialogueAudio, null);
        }
      };
      btn.addEventListener('click', playDialogues);
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); playDialogues(); }, {passive: false});
    });

    // Video play button
    document.querySelectorAll('.video-play-btn').forEach(btn => {
      const playVideo = () => {
        const layer = btn.closest('.video-layer');
        const preview = layer?.querySelector('.frame-preview');
        const previewInfo = layer?.querySelector('.frame-preview-info');
        const video = layer?.querySelector('video');
        if (preview) preview.classList.add('hidden');
        if (previewInfo) previewInfo.classList.add('hidden');
        if (video) {
          video.classList.add('visible');
          video.muted = false;
          video.play().catch(() => {});
        }
        btn.style.display = 'none';
      };
      btn.addEventListener('click', playVideo);
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); playVideo(); }, {passive: false});
    });

    // Video pause/play toggle on video itself
    document.querySelectorAll('.video-layer video').forEach(video => {
      video.addEventListener('click', () => {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
      video.addEventListener('ended', () => {
        const layer = video.closest('.video-layer');
        const preview = layer?.querySelector('.frame-preview');
        const previewInfo = layer?.querySelector('.frame-preview-info');
        const playBtn = layer?.querySelector('.video-play-btn');
        video.classList.remove('visible');
        if (preview) preview.classList.remove('hidden');
        if (previewInfo) previewInfo.classList.remove('hidden');
        if (playBtn) playBtn.style.display = 'flex';
      });
    });

    // Narrator bar toggle
    document.querySelectorAll('.narrator-toggle').forEach(btn => {
      const toggle = () => {
        const bar = btn.previousElementSibling;
        if (!bar || !bar.classList.contains('narrator-bar')) return;
        bar.classList.toggle('collapsed');
        const isCollapsed = bar.classList.contains('collapsed');
        btn.textContent = isCollapsed ? '+' : '−';
        btn.title = isCollapsed ? 'Развернуть' : 'Свернуть';
      };
      btn.addEventListener('click', toggle);
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); toggle(); }, {passive: false});
    });

    // Transition popup buttons
    document.querySelectorAll('.transition-popup-btn').forEach(btn => {
      const go = () => { hideTransitionPopup(currentFrameIdx); nextFrame(); };
      btn.addEventListener('click', go);
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); go(); }, {passive: false});
    });

    // Navigation buttons
    document.querySelectorAll('.nav-btn.nav-next').forEach(btn => {
      const go = () => {
        const frameData = frames[currentFrameIdx];
        if (frameData && frameData.game) {
          startGame(frameData.game);
        } else {
          nextFrame();
        }
      };
      btn.addEventListener('click', go);
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); go(); }, {passive: false});
    });

    document.querySelectorAll('.nav-btn.nav-prev').forEach(btn => {
      const go = () => prevFrame();
      btn.addEventListener('click', go);
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); go(); }, {passive: false});
    });
  }

  // ═══════════════════════════════════════════════════════════
  // INIT
  // ═══════════════════════════════════════════════════════════
  function init() {
    // Splash screen
    if (startBtn && splash) {
      startBtn.addEventListener('click', () => {
        // Initialize audio context on user gesture
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) { const ac = new AudioContext(); if (ac.state === 'suspended') ac.resume(); }
        } catch(e) {}
        splash.classList.add('hide');
        setTimeout(() => { splash.style.display = 'none'; }, 600);
        if (mainMenu) mainMenu.style.display = 'flex';
      });
      startBtn.addEventListener('touchend', (e) => { e.preventDefault(); startBtn.click(); }, {passive: false});
    }

    // Chapter cards
    document.querySelectorAll('.chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('locked')) return;
        const episode = card.dataset.episode;
        if (episode) startEpisode(episode);
      });
    });

    // Back button
    document.querySelectorAll('.back-btn').forEach(btn => {
      btn.addEventListener('click', () => backToMenu());
    });

    // Keyboard nav
    document.addEventListener('keydown', (e) => {
      if (!episodeViewer || !episodeViewer.classList.contains('active')) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        const frameData = frames[currentFrameIdx];
        if (frameData && frameData.game) {
          startGame(frameData.game);
        } else {
          nextFrame();
        }
      }
      if (e.key === 'ArrowLeft') prevFrame();
      if (e.key === 'Escape') backToMenu();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { startEpisode, backToMenu, nextFrame, prevFrame, advanceFromGame };
})();

/* ═══════════════════════════════════════════════════════════
   LEGACY GAME COMPATIBILITY SHIMS
   ═══════════════════════════════════════════════════════════ */

// Called by game_runner.js when game ends or is skipped
window.closeRunner = function(skip) {
  document.getElementById('game-overlay-runner').classList.remove('visible');
  if (skip) {
    setTimeout(() => {
      if (typeof App !== 'undefined') App.advanceFromGame();
    }, 300);
  }
};

window.showRunnerRegistration = function() {
  document.getElementById('runner-stats-overlay').classList.remove('visible');
  document.getElementById('runner-registration-overlay').classList.add('visible');
};

window.skipRunnerRegistration = function() {
  document.getElementById('runner-registration-overlay').classList.remove('visible');
  if (typeof App !== 'undefined') App.advanceFromGame();
};

window.finishRunnerRegistration = function() {
  document.getElementById('runner-registration-overlay').classList.remove('visible');
  if (typeof App !== 'undefined') App.advanceFromGame();
};

// Called by game_gymnastics.js when game ends or is skipped
window.closeGym = function(skip) {
  document.getElementById('game-overlay-gym').classList.remove('visible');
  if (skip) {
    setTimeout(() => {
      if (typeof App !== 'undefined') App.advanceFromGame();
    }, 300);
  }
};

window.showRegistration = function() {
  document.getElementById('stats-overlay').classList.remove('visible');
  document.getElementById('registration-overlay').classList.add('visible');
};

window.skipRegistration = function() {
  document.getElementById('registration-overlay').classList.remove('visible');
  if (typeof App !== 'undefined') App.advanceFromGame();
};

window.finishRegistration = function() {
  document.getElementById('registration-overlay').classList.remove('visible');
  if (typeof App !== 'undefined') App.advanceFromGame();
};

// Called by both games on victory
window.closeWinContinue = function() {
  document.getElementById('win-overlay').classList.remove('visible');
  setTimeout(() => {
    if (typeof App !== 'undefined') App.advanceFromGame();
  }, 300);
};

// Hide overlay helper used by old comic.js
window.hideOverlay = function(id) {
  const el = typeof id === 'string' ? document.getElementById(id) : id;
  if (el) el.classList.remove('visible');
};
