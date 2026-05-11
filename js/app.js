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
          bgImage: null,
          audioSrc: null,
          narration: `На бескрайних просторах Вселенной, там, где даже самые мощные телескопы видят лишь россыпь далеких звёзд, скрывается удивительная планета Видеаль. Она такая крошечная, что могла бы уместиться на ладони самого маленького великана, но такая важная, что без неё жизнь многих детей на Земле стала бы гораздо сложнее.\n\nВидеаль — это гармония природы и населяющих планету жителей. Они понимают язык животных и относятся к ним как к равным. Здесь козы работают журналистами, а лошади занимаются садоводством и собирают полезные травы, из которых видеаляне делают чудодейственные лекарства. Здесь текут реки с прозрачной целебной питьевой водой, в лесах растут деревья с магическими плодами, а на лугах распускаются удивительные чудотворные цветы, которые не встречаются ни на одной другой планете.`,
          videoPrompt: "В бескрайнем космосе парит яркая неоновая планета, из её центра постепенно усиливается пульсирующее свечение, светятся искристые звёзды, камера делает медленный плавный наезд к планете за 10 секунд.",
          videoSrc: null,
          dialogues: [],
          transitionText: "Населяют Видеаль удивительные жители — невысокого роста, с огромными голубыми глазами, густыми ресницами, шёлковыми кудряшками, из которых торчат забавные круглые ушки.",
          game: null
        },
        {
          id: 2,
          title: "Жизнь на Видеале",
          bgGradient: "radial-gradient(ellipse at 50% 80%, #4c1d95 0%, #1a0f2e 60%, #0a0618 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `Населяют Видеаль удивительные жители — невысокого роста, с огромными голубыми глазами, густыми ресницами, шёлковыми кудряшками, из которых торчат забавные круглые ушки. Но главное — у них самые добрые сердца во всей вселенной!\n\nЗдесь каждый посвящает себя только одной миссии: следить за здоровьем детей планеты Земля, а в особенности, за их зрением. Ведь с помощью глаз человек получает 90 процентов информации из окружающего мира! И, чем лучше ребенок будет заботиться о своем зрении с самого детства, тем ярче будет его жизнь, когда он станет взрослым.`,
          videoPrompt: "Персонажи стоят в центре мощёной средневековой улицы, дружелюбно улыбаются и поочерёдно машут руками, камера мягко приближается к группе за 10 секунд.",
          videoSrc: null,
          dialogues: [],
          transitionText: "На планете есть ещё много других полезных изобретений и чудодейственных снадобий, которые помогают жить ярче и веселее.",
          game: null
        },
        {
          id: 3,
          title: "Угроза Великой Тьмы",
          bgGradient: "radial-gradient(circle at 50% 50%, #1e3a5f 0%, #0f172a 50%, #0a0618 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `На планете есть ещё много других полезных изобретений и чудодейственных снадобий, которые помогают жить ярче и веселее. Именно жители планеты Видеаль создали необыкновенные очки. Они предупреждают об опасности и шепчут мальчикам и девочкам: «Отодвинь книгу подальше, сядь прямо, не сутулься, сделай перерыв».`,
          videoPrompt: "В 10-секундном кадре показаны стильные очки, парящие над мягкой бархатной подушкой в тёмном фиолетовом космосе; вокруг оправы медленно кружатся и переливаются мягким светом крошечные частицы и искры.",
          videoSrc: null,
          dialogues: [],
          transitionText: "Но скромные и воспитанные видеаляне не всесильны. Однажды, вокруг их планеты стало сгущаться Великое Зло.",
          game: null
        },
        {
          id: 4,
          title: "Угроза Великой Тьмы — Тучи",
          bgGradient: "linear-gradient(180deg, #1e293b 0%, #334155 40%, #0f172a 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `Но скромные и воспитанные видеаляне не всесильны. Однажды, вокруг их планеты стало сгущаться Великое Зло. Оно грозило поглотить Видеаль и погрузить ее в непроглядную тьму. А значит, опасность грозила и всем детям на Земле, которые могли остаться без полезных изобретений и целебных лекарств.`,
          videoPrompt: "Камера с уровня спин жителей смотрит вперёд на площадь, где люди застыли, уставившись в небо; за 10 секунд над светлым небом стремительно сгущаются тяжёлые тёмные тучи, лица людей меняются от любопытства к испугу.",
          videoSrc: null,
          dialogues: [],
          transitionText: "Весть об этом разнеслась за считанные секунды. И жители планеты высыпали на Каменную площадь.",
          game: null
        },
        {
          id: 5,
          title: "Каменная площадь",
          bgGradient: "linear-gradient(160deg, #0f766e 0%, #134e4a 30%, #0f172a 70%, #0a0618 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `Весть об этом разнеслась за считанные секунды. И жители планеты высыпали на Каменную площадь, чтобы услышать о том, что их ждет, от самого Правителя.\n\nПлощадь эта находилась в лоне огромной скалы, унизанной сверкающими драгоценными камнями. С её высоты с мелодичным журчанием, словно звуки флейты, ниспадал водопад. Его бирюзовые воды впадали в озеро, на поверхности которого сновали рыбы, словно водомерки. Это место было священным. Здесь жители планеты проводили добрые магические ритуалы. А в самом воздухе царили покой и гармония.`,
          videoPrompt: "Один статичный кадр: камера на каменном пьедестале, перед ним ярко-зеленая лужайка, вдалеке горная гряда со снежными вершинами, с утёса плавно ниспадает мощный водопад, в тумане сияет мягкая двойная радуга.",
          videoSrc: null,
          dialogues: [],
          transitionText: "Но на этот раз, к шуму водопада добавились тревожные звуки.",
          game: null
        },
        {
          id: 6,
          title: "Мудрый Хрусталик и Советник",
          bgGradient: "radial-gradient(ellipse at 40% 60%, #4338ca 0%, #1e1b4b 50%, #0a0618 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `Но на этот раз, к шуму водопада добавились тревожные звуки. Это видеаляне переминались с ноги на ногу, перешёптывались и перебрасывались догадками о том, какая их постигнет беда.\n\nНаконец из толпы вышел Правитель планеты — Мудрый Хрусталик. Высокий, статный человек с совершенно обычными ушами, прямыми седыми волосами и едва заметным шрамом на щеке. Когда-то он прибыл сюда с планеты Земля. Жители Видеаля оценили его ум, храбрость и доброту и тут же упросили его стать их королем.\n\nЗа ним следовал его помощник — Советник. Высокий и худой, он то и дело путался в длинной тёмно-зелёной профессорской мантии и беспрестанно поправлял монокль и академическую шапочку.`,
          videoPrompt: "Мудрый Хрусталик торжественно поднимается по ступеням на возвышение, посох светится, мантия развевается, Советник за ним запинается о край мантии, поправляет монокль, толпа тихонько хихикает.",
          videoSrc: null,
          dialogues: [],
          transitionText: "Мудрый Хрусталик поднялся на возвышение и глубоко вдохнул свежий горный воздух.",
          game: null
        },
        {
          id: 7,
          title: "Речь Правителя",
          bgGradient: "linear-gradient(160deg, #14532d 0%, #166534 30%, #0f172a 80%, #0a0618 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `Мудрый Хрусталик поднялся на возвышение и глубоко вдохнул свежий горный воздух. А вот Советник засмотрелся на чудесный водопад, запнулся и наступил на край мантии правителя. Толпа тихонько захихикала.\n\nСоветник смущенно улыбнулся, и поправил монокль, в котором отражалось бесчисленное множество видеалян.\n\nМудрый Хрусталик остановился ровно на середине возвышения. В воздухе застыло напряжение. Но каждый надеялся и верил, что мудрый правитель примет верное решение и спасет Видеаль от надвигающейся Великой Тьмы.\n\nИ только один маленький видеалянин не выдержал и от волнения подбросил шапку с колокольчиками. Она зазвенела и приземлилась на рог козе, которая застыла с фотоаппаратом.`,
          videoPrompt: "Король с посохом поднимается на пьедестал и обращается с речью к народу. Переход: из толпы вылетает чёрная шляпа и в плавном слоу-моушен приземляется на рог козы-фотографа.",
          videoSrc: null,
          dialogues: [
            { speaker: "hrust", text: "— Здравствуйте, уважаемые и досточтимые видеаляне! Рад видеть вас в здравии и благоденствии!", position: "bl", style: "top:18%;left:6%" },
            { speaker: "hrust", text: "— Мир Тьмы становится сильнее с каждым днем!", position: "br", style: "top:42%;right:6%" }
          ],
          transitionText: "В толпе вновь послышалось тревожное перешёптывание.",
          game: null
        },
        {
          id: 8,
          title: "Ритуал Призыва",
          bgGradient: "radial-gradient(circle at 50% 50%, #7c3aed 0%, #4c1d95 40%, #0a0618 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `В толпе вновь послышалось тревожное перешёптывание. Из ропота толпы можно было разобрать пару возгласов.\n\nПосле его слов трое помощников внесли огромный прозрачный сосуд, внутри которого клубился разноцветный туман. Он бурлил, булькал и звонко лопал пузырями.\n\nХрусталик опустил посох в котёл и начал произносить заклинание.`,
          videoPrompt: "Мудрый Хрусталик опускает посох в прозрачный сосуд, туман внутри бурлит, булькал и звонко лопает пузырями, толпа плавно качается из стороны в сторону, произнося заклинание, жидкость засветилась.",
          videoSrc: null,
          dialogues: [
            { speaker: "hrust", text: "— Мы вынуждены обратиться к нашему святейшему ритуалу, который был забыт долгие годы. Ведь нашей планете давно не угрожала опасность.", position: "bl", style: "top:10%;left:6%" },
            { speaker: "tolpa", text: "— Неужели Призыв?", position: "br", style: "top:34%;right:6%" },
            { speaker: "hrust", text: "— Да! Мы обратимся к Призыву!", position: "bl", style: "top:52%;left:6%" },
            { speaker: "sovet", text: "— Еще р-рано р-радоваться. Мы наб-беремся терпения и над-дежды.", position: "br", style: "top:70%;right:6%" }
          ],
          transitionText: "Жидкость в сосуде засветилась. Дым рассеялся... но вода осталась точно такой же, как и была!",
          game: null
        },
        {
          id: 9,
          title: "Появление девочки",
          bgGradient: "radial-gradient(ellipse at 50% 30%, #f59e0b 0%, #a855f7 30%, #1e1b4b 70%, #0a0618 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `Жидкость в сосуде засветилась. Дым рассеялся... но вода осталась точно такой же, как и была!\n\nНа площади воцарилась мрачная тишина. Советник лихорадочно зашелестел страницами своей папки. С этими словами глаза его закатились, и он с тихим стоном повалился в обморок прямо на руки Мудрому Хрусталику.\n\nИ в этот миг сосуд забурлил с новой силой. Из него вырвался яркий, широкий луч разноцветной энергии.`,
          videoPrompt: "Вода в стеклянном чане затухает, король подхватывает за плечи пошатывающегося Советника, посох выскальзывает и падает на пьедестал. Из сосуда вырывается яркий луч разноцветной энергии в небо.",
          videoSrc: null,
          dialogues: [
            { speaker: "tolpa", text: "— Призыв не сработал! Планета обречена!", position: "bl", style: "top:14%;left:6%" },
            { speaker: "sovet", text: "— Н-не сходится с прог-гнозом! Н-неужели — это та самая пог-г-р-решность в 0,0000000000000001 процента?!", position: "br", style: "top:40%;right:6%" }
          ],
          transitionText: "Он ударил прямо в небо, а затем с громким хлопком на площадь приземлилось «нечто».",
          game: null
        },
        {
          id: 10,
          title: "Трансформация в Суперглазку",
          bgGradient: "radial-gradient(circle at 50% 50%, #ec4899 0%, #a855f7 30%, #4c1d95 70%, #0a0618 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `Он ударил прямо в небо, а затем с громким хлопком на площадь приземлилось «нечто». Когда туманное облако рассеялось, все увидели… девочку. В красном комбинезоне, с растрепанными, ослепительно белыми волосами и огромными голубыми глазами. На вид ей было не больше десяти лет.\n\nСоветник икнул и чуть было опять не потерял сознание.\n\nИ в ту же секунду случилось чудо. Её комбинезон озарился ярким светом и преобразился. Теперь за спиной девочки развевался белый плащ, на руках появились перчатки-краги, на ногах сапожки, а на груди засиял знак «V».\n\nНо ликующая толпа, не слушая его, ринулась на возвышение. Девочку подхватили на руки и начали подбрасывать вверх.`,
          videoPrompt: "Посох касается плеча девочки, пробегает разряд тока, комбинезон озаряется ярким светом, преображается — появляются белый плащ, перчатки-краги, сапожки, знак «V» на груди сверкает, толпа ликует.",
          videoSrc: null,
          dialogues: [
            { speaker: "dev", text: "— Привет.", position: "bl", style: "top:12%;left:6%" },
            { speaker: "hrust", text: "— Ты наше спасение.", position: "br", style: "top:30%;right:6%" },
            { speaker: "dev", text: "— Ай!", position: "bl", style: "top:52%;left:6%" },
            { speaker: "tolpa", text: "— Да это же символ планеты Видеаль! Мы спасены!", position: "br", style: "top:68%;right:6%" },
            { speaker: "sovet", text: "— Н-не тор-ропитесь, нам предстоит д-долгий путь, чтобы об-бучить всему эту девочку.", position: "bl", style: "top:82%;left:6%" }
          ],
          transitionText: "Мудрый Хрусталик заботливо взял её за руку, доброжелательно улыбнулся и сказал:",
          game: null
        },
        {
          id: 11,
          title: "Дорога к замку",
          bgGradient: "linear-gradient(160deg, #1d4ed8 0%, #7c3aed 40%, #1e1b4b 80%, #0a0618 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `Мудрый Хрусталик заботливо взял её за руку, доброжелательно улыбнулся и сказал:\n\nДевочка нерешительно ступила на каменную дорожку, которая вела в замок правителя. Советник ободряюще кивнул ей. И тогда она весело побежала вперёд, подпрыгивая то на одной, то на другой ножке.\n\nЖители начали расходиться. И каждый надеялся, что эта малышка совсем скоро спасет их планету Видеаль от Большой Тьмы и защитит детей с планеты Земля.`,
          videoPrompt: "Оба персонажа медленно идут по мощёной улице уютного городка к сказочному замку в конце улицы, держась за руку, тёплый мягкий свет, плавное медленное отдаляющееся движение камеры со спины героев, 10-секундный единый кинематографичный план.",
          videoSrc: null,
          dialogues: [
            { speaker: "hrust", text: "— Нам нужно многое тебе рассказать! Мой Советник всегда будет рядом и всему обучит тебя.", position: "bl", style: "top:18%;left:6%" }
          ],
          transitionText: "Только один видеалянин грустно плёлся позади толпы, он был единственным во всей планете, который не мог найти себе дела!",
          game: null
        },
        {
          id: 12,
          title: "Ищуработу и коза-журналист",
          bgGradient: "radial-gradient(ellipse at 60% 70%, #b45309 0%, #7c2d12 30%, #1a0f2e 70%, #0a0618 100%)",
          bgImage: null,
          audioSrc: null,
          narration: `Только один видеалянин грустно плёлся позади толпы, он был единственным во всей планете, который не мог найти себе дела! Местные прозвали его «Ищуработу». А все потому, что он был полицейским, пожарным и доктором в одном лице! Но на Видеале уже сотню лет никто не совершал преступлений, пятьдесят два года ничего не горело и никто, ну совершенно никто не болел.\n\nПравда, несколько лет назад произошёл один вопиющий случай. Пожилая курица страдала куриной слепотой и однажды случайно отдавила лапкой копыто лошади. «Ищуработу» очень обрадовался и хотел тут же посадить преступницу в тюрьму. Но ее давно снесли, а на этом месте построили начальную школу для домашних животных.\n\nК слову, лошадь совсем даже не обиделась, ей было не больно. Да и бабушка курица тут же извинилась, и они расстались друзьями. Ну а несчастный «Ищуработу» опять пошёл искать себе дело по душе.\n\nТем временем коза дописала репортаж, захлопнула блокнот и отправилась в редакцию, сдавать материал. И совсем скоро на первой полосе газеты появилась статья под заголовком: «У планеты Видеаль появился новый герой!» и фотография девочки в сверкающем костюме.`,
          videoPrompt: "В первой сцене курица извиняется перед конём, на заднем плане к ним бежит мужчина в медицинской форме. В другой половине — коза дописывает пером текст в блокноте, закрывает блокнот и ставит перо в чернильницу.",
          videoSrc: null,
          dialogues: [],
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

  // ═══════════════════════════════════════════════════════════
  // DOM REFS
  // ═══════════════════════════════════════════════════════════
  const mainMenu = document.getElementById('main-menu');
  const episodeViewer = document.getElementById('episode-viewer');
  const frameContainer = document.getElementById('frame-container');
  const progressFill = document.querySelector('.progress-fill');
  const frameCounter = document.querySelector('.frame-counter');
  const transitionOverlay = document.getElementById('transition-overlay');

  // ═══════════════════════════════════════════════════════════
  // RENDER FRAME
  // ═══════════════════════════════════════════════════════════
  function renderFrame(frameData, idx, total) {
    const bgStyle = frameData.bgImage
      ? `background-image:url('${frameData.bgImage}');background-size:cover;background-position:center;`
      : `background:${frameData.bgGradient};`;

    const dialoguesHtml = frameData.dialogues.map((d, i) => `
      <div class="speech-bubble tail-${d.position}" style="${d.style};max-width:46%">
        <span class="speaker ${d.speaker}">${SPEAKER_NAMES[d.speaker] || d.speaker}</span>
        ${escapeHtml(d.text)}
      </div>
    `).join('');

    const videoContent = frameData.videoSrc
      ? `<video src="${frameData.videoSrc}" autoplay muted playsinline style="width:100%;height:100%;object-fit:cover"></video>`
      : `<div class="video-placeholder">
          <div class="ph-icon">🎬</div>
          <div class="ph-text">Видео: ${escapeHtml(frameData.title)}</div>
          <div class="ph-note">${escapeHtml(frameData.videoPrompt)}</div>
        </div>`;

    return `
      <div class="frame" data-index="${idx}" style="display:${idx === 0 ? 'flex' : 'none'}">
        <div class="frame-bg blurred" style="${bgStyle}"></div>
        <div class="frame-overlay"></div>

        <button class="audio-btn" data-audio="${escapeHtml(frameData.audioSrc || '')}" title="Озвучка рассказчика">
          <span class="audio-icon">🔊</span>
          <div class="audio-wave"><span></span><span></span><span></span><span></span></div>
        </button>
        <button class="play-clip-btn">▶ Воспроизвести отрывок</button>

        <div class="narration-box">
          <div class="narration-label">🎙️ Рассказчик</div>
          <div class="narration-text">${escapeHtml(frameData.narration).replace(/\n/g, '<br><br>')}</div>
        </div>

        <div class="video-container">
          ${videoContent}
        </div>

        <div class="dialogues-container">
          ${dialoguesHtml}
        </div>

        <div class="next-frame-panel">
          <div class="next-frame-text">${escapeHtml(frameData.transitionText)}</div>
          <button class="next-frame-btn" data-game="${frameData.game || ''}">
            ${idx < total - 1 ? 'Следующий кадр →' : 'Завершить эпизод ✨'}
          </button>
        </div>
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
  // AUDIO
  // ═══════════════════════════════════════════════════════════
  function playAudio(src, onEnd) {
    stopAudio();
    if (!src) {
      // Fallback: simulate reading speed
      const narrText = document.querySelector('.frame.active .narration-text');
      if (narrText) {
        const words = narrText.textContent.split(/\s+/).length;
        const duration = Math.max(3000, words * 350);
        simulateAudio(duration, onEnd);
      }
      return;
    }

    const audio = new Audio(src);
    audio.preload = 'auto';
    currentAudioEl = audio;

    const btn = document.querySelector('.frame.active .audio-btn');
    if (btn) btn.classList.add('playing');
    isPlayingAudio = true;

    audio.onended = () => {
      cleanupAudio(btn, onEnd);
    };

    audio.onerror = () => {
      console.warn('Audio failed, falling back to simulation');
      cleanupAudio(btn, null);
      const narrText = document.querySelector('.frame.active .narration-text');
      if (narrText) {
        const words = narrText.textContent.split(/\s+/).length;
        simulateAudio(Math.max(3000, words * 350), onEnd);
      }
    };

    audio.play().catch(err => {
      console.warn('Audio play failed:', err);
      cleanupAudio(btn, null);
      const narrText = document.querySelector('.frame.active .narration-text');
      if (narrText) {
        const words = narrText.textContent.split(/\s+/).length;
        simulateAudio(Math.max(3000, words * 350), onEnd);
      }
    });
  }

  function simulateAudio(duration, onEnd) {
    const btn = document.querySelector('.frame.active .audio-btn');
    if (btn) btn.classList.add('playing');
    isPlayingAudio = true;

    if (audioTimeout) clearTimeout(audioTimeout);
    audioTimeout = setTimeout(() => {
      cleanupAudio(btn, onEnd);
    }, duration);
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
    if (typeof onEnd === 'function') onEnd();
  }

  // ═══════════════════════════════════════════════════════════
  // FRAME NAVIGATION
  // ═══════════════════════════════════════════════════════════
  function showFrame(idx) {
    const allFrames = document.querySelectorAll('.frame');
    allFrames.forEach((f, i) => {
      f.style.display = i === idx ? 'flex' : 'none';
      f.classList.toggle('active', i === idx);
    });
    currentFrameIdx = idx;
    currentPhase = 'narration';

    const total = frames.length;
    if (progressFill) progressFill.style.width = ((idx + 1) / total * 100) + '%';
    if (frameCounter) frameCounter.textContent = `Кадр ${idx + 1} из ${total}`;

    resetFrameState();

    // Auto-start narration
    const frame = allFrames[idx];
    const narrText = frame.querySelector('.narration-text');
    const playBtn = frame.querySelector('.play-clip-btn');
    const audioSrc = frame.querySelector('.audio-btn')?.dataset.audio;

    if (narrText && narrText.textContent.trim()) {
      setTimeout(() => {
        playAudio(audioSrc || null, () => {
          if (currentPhase === 'narration' && playBtn) {
            playBtn.classList.add('visible');
          }
        });
      }, 600);
    } else {
      if (playBtn) playBtn.classList.add('visible');
    }
  }

  function resetFrameState() {
    const frame = document.querySelector('.frame.active');
    if (!frame) return;

    const bg = frame.querySelector('.frame-bg');
    const overlay = frame.querySelector('.frame-overlay');
    const narration = frame.querySelector('.narration-box');
    const videoContainer = frame.querySelector('.video-container');
    const dialogues = frame.querySelector('.dialogues-container');
    const playBtn = frame.querySelector('.play-clip-btn');
    const nextPanel = frame.querySelector('.next-frame-panel');
    const bubbles = frame.querySelectorAll('.speech-bubble');

    if (bg) { bg.classList.remove('clear'); bg.classList.add('blurred'); }
    if (overlay) overlay.classList.remove('light');
    if (narration) narration.classList.remove('hidden');
    if (videoContainer) videoContainer.classList.remove('active');
    if (dialogues) dialogues.classList.remove('active');
    if (playBtn) playBtn.classList.remove('visible');
    if (nextPanel) nextPanel.classList.remove('visible');
    bubbles.forEach(b => b.classList.remove('visible'));
  }

  function nextFrame() {
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
    currentPhase = 'video';
    const frame = document.querySelector('.frame.active');
    if (!frame) return;

    const bg = frame.querySelector('.frame-bg');
    const overlay = frame.querySelector('.frame-overlay');
    const narration = frame.querySelector('.narration-box');
    const videoContainer = frame.querySelector('.video-container');
    const dialogues = frame.querySelector('.dialogues-container');
    const playBtn = frame.querySelector('.play-clip-btn');
    const bubbles = frame.querySelectorAll('.speech-bubble');

    if (narration) narration.classList.add('hidden');
    if (playBtn) playBtn.classList.remove('visible');

    if (bg) { bg.classList.remove('blurred'); bg.classList.add('clear'); }
    if (overlay) overlay.classList.add('light');

    setTimeout(() => {
      if (videoContainer) videoContainer.classList.add('active');
    }, 500);

    setTimeout(() => {
      if (dialogues) dialogues.classList.add('active');
      bubbles.forEach((b, i) => {
        setTimeout(() => b.classList.add('visible'), i * 400 + 200);
      });
    }, 1200);

    const hasDialogues = bubbles.length > 0;
    const delay = hasDialogues ? 3000 + bubbles.length * 400 : 2500;

    setTimeout(() => {
      const nextPanel = frame.querySelector('.next-frame-panel');
      if (nextPanel) nextPanel.classList.add('visible');
    }, delay);
  }

  // ═══════════════════════════════════════════════════════════
  // GAME INTEGRATION
  // ═══════════════════════════════════════════════════════════
  function startGame(gameType) {
    if (gameType === 'runner') {
      showGameTransition('🏃 Мини-игра!', 'Помоги Суперглазке догнать Пикселька!', () => {
        if (typeof startRunnerGame === 'function') startRunnerGame();
      });
    } else if (gameType === 'gym') {
      showGameTransition('⚔️ Ваня против Ленивуса!', 'Используй три супер-атаки: Лазер, Прицел и Слёзы.', () => {
        if (typeof startGymGame === 'function') startGymGame();
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
      newBtn.addEventListener('click', () => {
        overlay.classList.remove('visible');
        if (onStart) setTimeout(onStart, 300);
      });
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
    document.querySelectorAll('.audio-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const frame = btn.closest('.frame');
        const narrText = frame ? frame.querySelector('.narration-text') : null;
        const audioSrc = btn.dataset.audio || null;

        if (isPlayingAudio) {
          stopAudio();
        } else if (narrText) {
          playAudio(audioSrc, () => {
            const playBtn = frame.querySelector('.play-clip-btn');
            if (playBtn && currentPhase === 'narration') playBtn.classList.add('visible');
          });
        }
      });
    });

    document.querySelectorAll('.play-clip-btn').forEach(btn => {
      btn.addEventListener('click', () => startVideoPhase());
    });

    document.querySelectorAll('.next-frame-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const frameData = frames[currentFrameIdx];
        if (frameData && frameData.game) {
          startGame(frameData.game);
        } else {
          nextFrame();
        }
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // INIT
  // ═══════════════════════════════════════════════════════════
  function init() {
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
        const frame = document.querySelector('.frame.active');
        if (!frame) return;
        const playBtn = frame.querySelector('.play-clip-btn');
        const nextPanel = frame.querySelector('.next-frame-panel');
        if (playBtn && playBtn.classList.contains('visible')) {
          startVideoPhase();
        } else if (nextPanel && nextPanel.classList.contains('visible')) {
          const frameData = frames[currentFrameIdx];
          if (frameData && frameData.game) {
            startGame(frameData.game);
          } else {
            nextFrame();
          }
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
