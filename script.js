let currentLang = 'th';

const uiTexts = {
    th: {
        appTitle: "คิดดิคอล thinking 💡", appSubtitle: "แบบประเมิน Critical Thinking",
        btnStartGame: "เริ่มเกม",
        spinLabelPrefix: "กำลังสุ่มคดีที่", btnSafe: "✅ ข่าวนี้ปกติ", btnSubmit: "ส่งบทวิเคราะห์",
        btnRestart: "เริ่มทำใหม่", btnDownload: "📥 โหลดผลลัพธ์", insightLabel: "คำอธิบายเพิ่มเติม:",
        questionProgressLabel: "คดีที่: ", sourcePrefix: "แหล่งที่มา: ", missedLabel: "จุดที่คุณพลาดไป 😲",
        wrongLabel: "คำที่คุณโดนหลอก 🧐",
        
        // Tutorial Texts
        tutMainTitle: "วิธีการเล่น", tutS1Title: "1. สังเกตข่าว", tutS1Desc: "อ่านพาดหัวข่าว และดูป้ายแหล่งที่มา",
        tutMockTag: "📌 มักพบใน: ไลน์กลุ่ม", tutMockText: "ดื่มน้ำปลาผสมมะนาว รักษามะเร็งหายขาด!",
        tutS2Title: "2. จับผิดคำลวง", tutS2Desc: "ถ้าเจอคำที่ขัดกับความจริง ให้จิ้มเลือกคำนั้น", tutMockWord: "หายขาด!",
        tutS3Title: "3. ข่าวจริงก็มีนะ", tutS3Desc: "ถ้าข่าวสมเหตุสมผล ให้กดปุ่ม 'ข่าวนี้ปกติ' ได้เลย",
        btnTutBack: "ย้อนกลับ", btnTutNext: "ถัดไป", btnTutStart: "เริ่มเกมเลย!"
    },
    en: {
        appTitle: "Critical Thinking 💡", appSubtitle: "Critical Thinking Assessment",
        btnStartGame: "Start Game",
        spinLabelPrefix: "Spinning Case", btnSafe: "✅ Normal News", btnSubmit: "Submit Analysis",
        btnRestart: "Start Over", btnDownload: "📥 Download", insightLabel: "Explanation:",
        questionProgressLabel: "Case: ", sourcePrefix: "Source: ", missedLabel: "Missed Flags 😲",
        wrongLabel: "Incorrect 🧐",

        // Tutorial Texts
        tutMainTitle: "How to Play", tutS1Title: "1. Observe News", tutS1Desc: "Read headline and check the source tag",
        tutMockTag: "📌 Often in: Line Group", tutMockText: "Drink fish sauce to cure cancer!",
        tutS2Title: "2. Catch the Lies", tutS2Desc: "Tap the words that are exaggerated or illogical", tutMockWord: "cure cancer!",
        tutS3Title: "3. Real News Exists", tutS3Desc: "If the news is reasonable, tap 'Normal News'",
        btnTutBack: "Back", btnTutNext: "Next", btnTutStart: "Start Game!"
    }
};

const evalTexts = {
    th: { correctTrue: { title: "ยอดเยี่ยม! 👏", color: "var(--accent-green)", body: "ถูกต้อง ข่าวนี้เป็นข้อมูลจริงและสมเหตุสมผล" }, wrongTrue: { title: "คิดมากไปนิด 😅", color: "var(--accent-yellow-shadow)", body: "ข่าวนี้ถูกต้องสมเหตุสมผลอยู่แล้ว" }, wrongFake: { title: "หลงกลเต็มๆ 🚨", color: "var(--accent-red)", body: "ข่าวนี้มีจุดหลอกลวงซ่อนอยู่" }, correctFake: { title: "เฉียบคมมาก! 🔥", color: "var(--accent-primary)", body: "คุณหาจุดหลอกลวงเจอทั้งหมด" }, partialFake: { title: "เกือบถูกแล้ว ✌️", color: "var(--accent-yellow-shadow)", body: "รู้ว่าแปลก แต่ยังชี้จุดผิดไม่ครบ" } },
    en: { correctTrue: { title: "Awesome! 👏", color: "var(--accent-green)", body: "Correct. This is credible news." }, wrongTrue: { title: "Overthinking 😅", color: "var(--accent-yellow-shadow)", body: "This is factual news." }, wrongFake: { title: "Fooled 🚨", color: "var(--accent-red)", body: "This news is hiding deceptive traps." }, correctFake: { title: "Sharp! 🔥", color: "var(--accent-primary)", body: "You pinpointed all flaws." }, partialFake: { title: "Almost ✌️", color: "var(--accent-yellow-shadow)", body: "You missed some specific flags." } }
};

const summaryTexts = {
    th: [ { title: "Master 🌟", desc: "วิจารณญาณสูง ไม่ตกเป็นเหยื่อของข่าวลวงแน่นอน!" }, { title: "Advanced 🏅", desc: "วิเคราะห์ได้ดีมาก แต่อาจเผลอเชื่อคำอ้างที่เนียนตาบ้าง" }, { title: "Beginner ⚠️", desc: "มีแนวโน้มจะเชื่อข้อมูลกระตุ้นอารมณ์ ควรระมัดระวัง" }, { title: "Critical 🚨", desc: "ระดับการรู้เท่าทันสื่ออยู่ในเกณฑ์น่าเป็นห่วง เสี่ยงถูกหลอก" } ],
    en: [ { title: "Master 🌟", desc: "Excellent discernment. Immune to fake news!" }, { title: "Advanced 🏅", desc: "Good analysis, occasionally susceptible to smooth claims." }, { title: "Beginner ⚠️", desc: "Tends to fall for emotional triggers. Caution advised." }, { title: "Critical 🚨", desc: "Media literacy is at a dangerous level. High scam risk." } ]
};

// ข้อมูล 27 
const DATA=[
{t:{h:"ยอดแชร์ทะลุแสน! ฟังคลื่นเสียงนี้ตอนหลับ สมองจะจำหนังสือได้ทั้งเล่ม",w:["ยอดแชร์ทะลุแสน!","ฟังคลื่นเสียงตอนหลับ","จำหนังสือได้ทั้งเล่ม"],s:"TikTok",l:"ไม่มีหลักฐานวิทย์ยืนยันว่าสมองจำได้ตอนหลับ"},e:{h:"100K+ Shares! Listen to soundwave while sleeping to memorize books.",w:["100K+ Shares!","Listen sleeping","Memorize books"],s:"TikTok",l:"No evidence supports sleep learning."},tr:[0],rf:[1,2]},
{t:{h:"กสทช. เตือนประชาชนระวังมิจฉาชีพ แอบอ้างเป็นตำรวจ",w:["กสทช. เตือน","ระวังมิจฉาชีพ","แอบอ้างตำรวจ"],s:"Official",l:"ประกาศเตือนภัยจริง"},e:{h:"NBTC warns public of scammers impersonating police.",w:["NBTC warns","Beware scammers","Impersonating police"],s:"Official",l:"Real government alert."},tr:[],rf:[]},
{t:{h:"ดีท็อกซ์สูตรดารา กิน 3 วันลด 10 โล ไม่ต้องคุมอาหาร",w:["สูตรดารา","ลด 10 โล 3 วัน","ไม่ต้องคุมอาหาร"],s:"FB Ad",l:"ลดน้ำหนักเร็วขนาดนี้เป็นไปไม่ได้"},e:{h:"Detox tea! Lose 10kg in 3 days no diet.",w:["Detox tea","Lose 10kg in 3 days","No diet"],s:"FB Ad",l:"Impossible weight loss claim."},tr:[0],rf:[1,2]},
{t:{h:"รัฐบาลแจกเน็ตฟรี 100GB ล็อกอิน bit.ly/freedata",w:["แจกเน็ตฟรี","ล็อกอินลิงก์","bit.ly/freedata"],s:"SMS",l:"รัฐไม่แจกของผ่านเว็บย่อลิงก์"},e:{h:"Gov gives free 100GB data. Login bit.ly/freedata",w:["Free data","Login link","bit.ly/freedata"],s:"SMS",l:"Govs don't use short URLs."},tr:[0],rf:[1,2]},
{t:{h:"กรมอุตุฯ เตือนพายุฤดูร้อน 12-14 เม.ย.",w:["กรมอุตุฯ เตือน","พายุฤดูร้อน","12-14 เม.ย."],s:"News",l:"ข่าวจริงเช็คได้"},e:{h:"Met Dept warns of summer storms Apr 12-14.",w:["Met Dept","Summer storms","Apr 12-14"],s:"News",l:"Verifiable weather news."},tr:[],rf:[]},
{t:{h:"เล่นมือถือในที่มืด แสงสะสมจนเป็นมะเร็งตา",w:["เล่นมือถือที่มืด","แสงสะสม","เป็นมะเร็งตา"],s:"Line",l:"แสงจอมือถือไม่ทำให้เป็นมะเร็ง"},e:{h:"Phones in dark causes eye cancer!",w:["Phones in dark","Light accumulates","Eye cancer"],s:"Line",l:"Screens don't cause cancer."},tr:[0,1],rf:[2]},
{t:{h:"ชาร์จแบต 10 วิ แค่เอาโทรศัพท์เข้าไมโครเวฟ!",w:["ชาร์จแบต 10 วิ","เอาเข้าไมโครเวฟ","คนทำตามเพียบ"],s:"TikTok",l:"เอาโลหะเข้าไมโครเวฟจะระเบิด"},e:{h:"Charge battery 10 secs by microwaving phone!",w:["Charge 10 secs","Microwave phone","Many tried"],s:"TikTok",l:"Microwaving metal causes explosions."},tr:[2],rf:[0,1]},
{t:{h:"แพทย์แนะ ทาครีมกันแดด 2 ข้อนิ้ว ลดมะเร็งผิวหนัง",w:["แพทย์แนะ","ครีมกันแดด","ลดมะเร็งผิวหนัง"],s:"News",l:"เป็นคำแนะนำสากล"},e:{h:"Doctors advise sunscreen 2 fingers to reduce skin cancer.",w:["Doctors advise","Sunscreen","Reduce skin cancer"],s:"News",l:"Universal medical advice."},tr:[],rf:[]},
{t:{h:"หมอดูเตือน! เลื่อนผ่านจะสอบตก พิมพ์สาธุแก้เคล็ด",w:["หมอดูเตือน","เลื่อนผ่านสอบตก","พิมพ์สาธุแก้เคล็ด"],s:"FB",l:"ข้อความลูกโซ่ใช้ความกลัวหลอกคน"},e:{h:"Psychic warns! Scroll and fail exams. Type Amen!",w:["Psychic warns","Fail exams","Type Amen"],s:"FB",l:"Fear-mongering chain mail."},tr:[0],rf:[1,2]},
{t:{h:"ลงทุนทองคำ 99 บาท กำไรการันตี 5,000 บาท ถอนได้ทันที!",w:["ลงทุน 99 บาท","กำไรการันตี 5,000","ถอนได้ทันที"],s:"FB",l:"การันตีกำไรสูง=แชร์ลูกโซ่"},e:{h:"Invest 99 THB, guarantee 5,000 THB profit!",w:["Invest 99","Guarantee 5,000","Withdraw instantly"],s:"FB",l:"High guaranteed return = scam."},tr:[2],rf:[0,1]},
{t:{h:"สธ. แนะดื่มน้ำวันละ 8 แก้ว รักษาสมดุลร่างกาย",w:["สธ. แนะ","ดื่มน้ำ 8 แก้ว","รักษาสมดุล"],s:"News",l:"คำแนะนำสุขภาพทั่วไป"},e:{h:"MOPH advises 8 glasses water daily for balance.",w:["MOPH advises","8 glasses","Maintain balance"],s:"News",l:"Standard health advice."},tr:[],rf:[]},
{t:{h:"แจก iPhone ฟรี 50 เครื่อง กรอกรหัสบัตรประชาชนที่นี่",w:["แจก iPhone ฟรี","กรอกรหัสบัตรประชาชน","ที่นี่"],s:"Web",l:"หลอกขโมยข้อมูลบัตรปชช."},e:{h:"Free iPhone giveaway! Enter ID card number here.",w:["Free iPhone","Enter ID card","Here"],s:"Web",l:"Classic phishing tactic."},tr:[0],rf:[1]},
{t:{h:"ตำรวจไซเบอร์เตือน ห้ามกดลิงก์ SMS แปลกปลอม",w:["ตำรวจเตือน","ห้ามกดลิงก์ SMS","แปลกปลอม"],s:"News",l:"คำเตือนที่มีประโยชน์"},e:{h:"Cyber police warn: Do not click strange SMS links.",w:["Police warn","Do not click","Strange links"],s:"News",l:"Useful public warning."},tr:[],rf:[]},
{t:{h:"กินใบมะละกอต้ม ทำลายเซลล์มะเร็งทุกชนิด",w:["ต้มใบมะละกอ","ทำลายเซลล์มะเร็ง","ทุกชนิด"],s:"Line",l:"สมุนไพรเดี่ยวไม่สามารถรักษามะเร็งได้ทุกชนิด"},e:{h:"Boil papaya leaves destroys all cancer cells.",w:["Boil leaves","Destroys cancer","All types"],s:"Line",l:"No single herb cures all cancers."},tr:[0],rf:[1,2]},
{t:{h:"พัสดุติดศุลกากร! โอนค่าปรับ 2,500 เข้าบัญชีส่วนตัวนาย A",w:["ติดศุลกากร","ค่าปรับ 2,500","เข้าบัญชีส่วนตัวนาย A"],s:"Email",l:"รัฐไม่ให้โอนเงินเข้าบัญชีบุคคล"},e:{h:"Customs package stuck! Pay 2,500 to Mr. A's personal account.",w:["Customs stuck","Pay 2,500","Personal account"],s:"Email",l:"Govs don't use personal accounts."},tr:[0],rf:[2]},
{t:{h:"นายกฯ ออกทีวีแนะนำเว็บสล็อต แจกโบนัส 100%",w:["นายกฯ แนะนำ","เว็บสล็อต","โบนัส 100%"],s:"TikTok",l:"ใช้ AI (Deepfake) ตัดต่อคลิปผู้นำ"},e:{h:"PM on TV recommends slot site with 100% bonus!",w:["PM recommends","Slot site","100% bonus"],s:"TikTok",l:"Deepfake video scam."},tr:[2],rf:[0,1]},
{t:{h:"แบงก์ชาติคงอัตราดอกเบี้ย 2.50% เพื่อรักษาเสถียรภาพ",w:["แบงก์ชาติ","คงดอกเบี้ย 2.50%","รักษาเสถียรภาพ"],s:"News",l:"ประกาศนโยบายการเงินจริง"},e:{h:"BOT holds interest rate at 2.50% for stability.",w:["BOT holds rate","2.50%","Stability"],s:"News",l:"Real financial policy update."},tr:[],rf:[]},
{t:{h:"กู้หมื่นผ่อนร้อย ไม่เช็คบูโร อนุมัติ 5 นาที โอนไว",w:["กู้หมื่นผ่อนร้อย","ไม่เช็คบูโร","อนุมัติ 5 นาที"],s:"FB",l:"แอปเงินกู้เถื่อนหลอกดูดข้อมูล"},e:{h:"Borrow 10k pay 100, no credit check, approved in 5 mins.",w:["Borrow 10k","No credit check","Approved 5 mins"],s:"FB",l:"Illegal loan app scam."},tr:[0],rf:[1,2]},
{t:{h:"อย. เตือนอาหารเสริมอวดอ้างลดน้ำหนักเกินจริง",w:["อย. เตือน","อาหารเสริม","ลดน้ำหนักเกินจริง"],s:"News",l:"ประกาศเตือนภัยจากภาครัฐ"},e:{h:"FDA warns against exaggerated weight loss supplements.",w:["FDA warns","Supplements","Exaggerated loss"],s:"News",l:"Valid government warning."},tr:[],rf:[]},
{t:{h:"แจกสติกเกอร์ไลน์ฟรี! ส่งต่อ 10 คนเพื่อปลดล็อก",w:["แจกสติกเกอร์ฟรี","ส่งต่อ 10 คน","เพื่อปลดล็อก"],s:"Line",l:"Line ไม่บังคับให้ฟอร์เวิร์ดข้อความ"},e:{h:"Free Line stickers! Forward to 10 friends to unlock.",w:["Free stickers","Forward 10 friends","Unlock"],s:"Line",l:"Spam forward chain mail."},tr:[0],rf:[1,2]},
{t:{h:"สบู่เกาหลี ถู 1 ครั้ง สิวหายเกลี้ยง หน้าขาวถาวร",w:["สบู่เกาหลี","ถู 1 ครั้ง","สิวหายเกลี้ยงถาวร"],s:"TikTok",l:"ไม่มีสบู่ที่รักษาสิวถาวรใน 1 ครั้ง"},e:{h:"Korean soap, rub once, acne gone permanently.",w:["Korean soap","Rub once","Acne gone permanently"],s:"TikTok",l:"False skincare claim."},tr:[0],rf:[1,2]},
{t:{h:"ดีอีเอส แนะนำตั้งรหัสผ่านให้ปลอดภัย ป้องกันแฮกเกอร์",w:["ดีอีเอส แนะนำ","รหัสผ่านปลอดภัย","ป้องกันแฮกเกอร์"],s:"IT",l:"คำแนะนำความปลอดภัยที่ถูกต้อง"},e:{h:"DES suggests secure passwords to stop hackers.",w:["DES suggests","Secure passwords","Stop hackers"],s:"IT",l:"Valid cyber advice."},tr:[],rf:[]},
{t:{h:"คุณคือผู้โชคดี! ได้ 1 ล้าน โอนภาษี 5% ก่อนรับเงิน",w:["ผู้โชคดี 1 ล้าน","โอนภาษี 5%","ก่อนรับเงิน"],s:"SMS",l:"หลอกให้โอนเงินค่าธรรมเนียม"},e:{h:"Lucky winner! Won 1M, transfer 5% tax to claim.",w:["Won 1M","Transfer 5% tax","To claim"],s:"SMS",l:"Advance fee scam."},tr:[0],rf:[1,2]},
{t:{h:"กรมมลพิษแจ้ง PM 2.5 เกินมาตรฐาน ควรสวมหน้ากาก",w:["กรมมลพิษแจ้ง","PM 2.5 เกินมาตรฐาน","สวมหน้ากาก"],s:"News",l:"รายงานสภาพอากาศจริง"},e:{h:"Pollution Dept: PM 2.5 exceeds standard, wear masks.",w:["Pollution Dept","PM 2.5 exceeds","Wear masks"],s:"News",l:"Real environmental report."},tr:[],rf:[]},
{t:{h:"เครื่องรางถูกหวยรางวัลที่ 1 ทันที มีแค่ 99 ชิ้น",w:["เครื่องราง","ถูกหวยที่ 1 ทันที","มีแค่ 99 ชิ้น"],s:"FB Ad",l:"ใช้ความเชื่อและจำกัดจำนวนกระตุ้นให้โอน"},e:{h:"Amulet wins 1st prize instantly. Limited 99 pcs.",w:["Amulet","Wins 1st prize","Limited 99 pcs"],s:"FB Ad",l:"Superstition FOMO scam."},tr:[0],rf:[1,2]},
{t:{h:"คอร์สรวยข้ามคืน ก๊อปโพสต์ทำเงินแสน ไม่ต้องลงทุน",w:["รวยข้ามคืน","ทำเงินแสน","ไม่ต้องลงทุน"],s:"TikTok",l:"คนรวยคือคนขายคอร์สหลอกฝัน"},e:{h:"Overnight rich course. Copy posts make 100k, zero invest.",w:["Overnight rich","Make 100k","Zero invest"],s:"TikTok",l:"Get-rich-quick course scam."},tr:[1],rf:[0,2]}
];

const ORIGINAL_CASES_DATA = DATA.map(d => ({
    th: { headline: d.t.h, words: d.t.w, source: d.t.s, logic: d.t.l },
    en: { headline: d.e.h, words: d.e.w, source: d.e.s, logic: d.e.l },
    traps: d.tr, redFlags: d.rf, sourceClass: "source-" + d.t.s.split(' ')[0].toLowerCase()
}));

const TOTAL_CASES = 10;
let remainingCases = [], currentCase = null, currentCaseNum = 1, correctAnswersCount = 0;
let selectedWordsSet = new Set(); 
let tutCurrentStep = 1;
let tutorialPassed = false; 

// ตัวแปรเชื่อมต่อ DOM ใหม่
const welcomeScreen = document.getElementById('welcome-screen');
const spinScreen = document.getElementById('spin-screen');
const gameScreen = document.getElementById('game-screen');
const tutorialScreen = document.getElementById('tutorial-screen');
const summaryScreen = document.getElementById('summary-screen');
const resultOverlay = document.getElementById('result-overlay');
const wordFeedbackBox = document.getElementById('word-feedback');
const startGameBtn = document.getElementById('start-game-btn'); // ปุ่มเริ่มเกมอันใหม่
const caseSlot = document.getElementById('case-slot');
const slotText = document.getElementById('slot-text');
const spinLabel = document.getElementById('spin-label');

document.getElementById('lang-th').onclick = () => setLanguage('th');
document.getElementById('lang-en').onclick = () => setLanguage('en');

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('lang-th').classList.toggle('active', lang === 'th');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    
    const txt = uiTexts[lang];
    document.getElementById('ui-app-title').innerText = txt.appTitle;
    document.getElementById('ui-app-subtitle').innerText = txt.appSubtitle;
    document.getElementById('ui-welcome-title').innerText = txt.appTitle;
    document.getElementById('startGameBtn').innerText = txt.btnStartGame;
    
    document.getElementById('ui-question-label').innerText = txt.questionProgressLabel;
    document.getElementById('ui-instruction').innerText = txt.instruction;
    document.getElementById('submit-btn').innerText = txt.btnSubmit;
    document.getElementById('safe-btn').innerText = txt.btnSafe;
    document.getElementById('btn-download').innerText = txt.btnDownload;
    document.getElementById('ui-insight-label').innerText = txt.insightLabel;
    document.getElementById('btn-restart').innerText = txt.btnRestart;
    
    document.getElementById('ui-tut-main-title').innerText = txt.tutMainTitle;
    document.getElementById('ui-tut-s1-title').innerText = txt.tutS1Title;
    document.getElementById('ui-tut-s1-desc').innerText = txt.tutS1Desc;
    document.getElementById('ui-tut-mock-tag').innerText = txt.tutMockTag;
    document.getElementById('ui-tut-mock-text').innerText = txt.tutMockText;
    document.getElementById('ui-tut-s2-title').innerText = txt.tutS2Title;
    document.getElementById('ui-tut-s2-desc').innerText = txt.tutS2Desc;
    document.getElementById('ui-tut-mock-word').innerText = txt.tutMockWord;
    document.getElementById('ui-tut-s3-title').innerText = txt.tutS3Title;
    document.getElementById('ui-tut-s3-desc').innerText = txt.tutS3Desc;
    document.getElementById('ui-tut-mock-safe').innerText = txt.btnSafe;
    document.getElementById('tut-back-btn').innerText = txt.btnTutBack;

    if (tutCurrentStep === 3) document.getElementById('tut-next-btn').innerText = txt.btnTutStart;
    else document.getElementById('tut-next-btn').innerText = txt.btnTutNext;

    if (!spinScreen.classList.contains('hidden')) {
        spinLabel.innerText = `${txt.spinLabelPrefix} ${currentCaseNum}/${TOTAL_CASES}`;
    }
}

// 2. ควบคุมปุ่ม เริ่มเกม 
startGameBtn.onclick = () => {
    if (!tutorialPassed) {
        tutCurrentStep = 1;
        updateTutorialView();
        switchScreenSmoothly(welcomeScreen, tutorialScreen, () => {});
    } else {
        switchScreenSmoothly(welcomeScreen, spinScreen, () => {
            triggerSpin();
        });
    }
};

function updateTutorialView() {
    const txt = uiTexts[currentLang];
    document.getElementById('tut-step-1').classList.add('hidden');
    document.getElementById('tut-step-2').classList.add('hidden');
    document.getElementById('tut-step-3').classList.add('hidden');
    document.getElementById(`tut-step-${tutCurrentStep}`).classList.remove('hidden');
    
    document.getElementById('dot-1').classList.remove('active');
    document.getElementById('dot-2').classList.remove('active');
    document.getElementById('dot-3').classList.remove('active');
    document.getElementById(`dot-${tutCurrentStep}`).classList.add('active');

    if (tutCurrentStep === 1) {
        document.getElementById('tut-back-btn').classList.add('hidden');
        document.getElementById('tut-next-btn').innerText = txt.btnTutNext;
    } else if (tutCurrentStep === 2) {
        document.getElementById('tut-back-btn').classList.remove('hidden');
        document.getElementById('tut-next-btn').innerText = txt.btnTutNext;
    } else if (tutCurrentStep === 3) {
        document.getElementById('tut-back-btn').classList.remove('hidden');
        document.getElementById('tut-next-btn').innerText = txt.btnTutStart;
    }
}

document.getElementById('tut-next-btn').onclick = () => {
    if (tutCurrentStep < 3) {
        tutCurrentStep++;
        updateTutorialView();
    } else {
        tutorialPassed = true;
        switchScreenSmoothly(tutorialScreen, spinScreen, () => {
            triggerSpin(); // จบ Tutorial ให้เด้งไปหน้าสุ่มคดี
        });
    }
};

document.getElementById('tut-back-btn').onclick = () => {
    if (tutCurrentStep > 1) {
        tutCurrentStep--;
        updateTutorialView();
    }
};

// ฟังก์ชันสุ่มคดี (ใช้กับหน้า Spin Screen)
function triggerSpin() {
    spinLabel.innerText = `${uiTexts[currentLang].spinLabelPrefix} ${currentCaseNum}/${TOTAL_CASES}`;
    caseSlot.className = 'case-slot'; 
    const randomIndex = Math.floor(Math.random() * remainingCases.length);
    currentCase = remainingCases.splice(randomIndex, 1)[0];
    const cLang = currentCase[currentLang], duration = 2000, tickInterval = 100, totalTicks = Math.floor(duration / tickInterval);
    let currentTick = 0;
    
    const timer = setInterval(() => {
        if (currentTick < totalTicks) {
            slotText.innerText = ORIGINAL_CASES_DATA[Math.floor(Math.random() * ORIGINAL_CASES_DATA.length)][currentLang].headline;
        } else {
            slotText.innerText = cLang.headline;
            caseSlot.className = 'case-slot done'; 
            clearInterval(timer);
            // เมื่อสุ่มเสร็จ ให้หน่วงเวลาและเด้งไปหน้าจอคำถาม
            setTimeout(() => switchScreenSmoothly(spinScreen, gameScreen, loadCaseToJudgingView), 1200);
        }
        currentTick++;
    }, tickInterval);
}

window.toggleWord = function(index, el) {
    el.classList.toggle('selected');
    selectedWordsSet.has(index) ? selectedWordsSet.delete(index) : selectedWordsSet.add(index);
};

// 3. ระบบจับผิด
function loadCaseToJudgingView() {
    selectedWordsSet.clear();
    const c = currentCase, cLang = c[currentLang], txt = uiTexts[currentLang];
    document.getElementById('question-progress').innerText = `${currentCaseNum}/${TOTAL_CASES}`;
    document.getElementById('headline').innerText = cLang.headline;
    document.getElementById('source-badge').innerText = `${txt.sourcePrefix}${cLang.source}`;
    
    document.getElementById('word-pool').innerHTML = cLang.words.map((w, i) => 
        `<div class="word-chip" onclick="toggleWord(${i}, this)">${w}</div>`
    ).join('');
}

document.getElementById('submit-btn').onclick = () => evaluateAnalysis(false);
document.getElementById('safe-btn').onclick = () => evaluateAnalysis(true);

function evaluateAnalysis(markedSafe) {
    const c = currentCase, cLang = c[currentLang], txtEval = evalTexts[currentLang], uiTxt = uiTexts[currentLang];
    let isCorrect = false, evalResult, feedbackHTML = "";
    
    if (c.redFlags.length === 0) {
        if (markedSafe) { isCorrect = true; evalResult = txtEval.correctTrue; } 
        else {
            evalResult = txtEval.wrongTrue;
            let wrongWords = Array.from(selectedWordsSet).map(i => `"${cLang.words[i]}"`).join(", ");
            feedbackHTML += `<div style="color: var(--text-sub); font-size: 0.85rem; margin-bottom:5px; font-weight:700;">${uiTxt.wrongLabel}</div><div style="color: var(--accent-yellow-shadow); font-weight:800;">${wrongWords}</div>`;
        }
    } else {
        if (markedSafe) {
            evalResult = txtEval.wrongFake;
            let missedWords = c.redFlags.map(i => `"${cLang.words[i]}"`).join(", ");
            feedbackHTML += `<div style="color: var(--text-sub); font-size: 0.85rem; margin-bottom:5px; font-weight:700;">${uiTxt.missedLabel}</div><div style="color: var(--accent-red); font-weight:800;">${missedWords}</div>`;
        } else {
            let missedIndices = c.redFlags.filter(i => !selectedWordsSet.has(i));
            let wrongIndices = Array.from(selectedWordsSet).filter(i => !c.redFlags.includes(i));
            if (missedIndices.length === 0 && wrongIndices.length === 0) {
                isCorrect = true; evalResult = txtEval.correctFake;
            } else {
                evalResult = txtEval.partialFake;
                if (missedIndices.length > 0) feedbackHTML += `<div style="color: var(--text-sub); font-size: 0.85rem; font-weight:700;">${uiTxt.missedLabel}</div><div style="color: var(--accent-red); margin-bottom: 8px; font-weight:800;">${missedIndices.map(i => `"${cLang.words[i]}"`).join(", ")}</div>`;
                if (wrongIndices.length > 0) feedbackHTML += `<div style="color: var(--text-sub); font-size: 0.85rem; font-weight:700;">${uiTxt.wrongLabel}</div><div style="color: var(--accent-yellow-shadow); font-weight:800;">${wrongIndices.map(i => `"${cLang.words[i]}"`).join(", ")}</div>`;
            }
        }
    }
    
    if (isCorrect) correctAnswersCount++;
    document.getElementById('result-title').innerText = evalResult.title;
    document.getElementById('result-title').style.color = evalResult.color;
    document.getElementById('result-body').innerText = evalResult.body;
    document.getElementById('logic-text').innerText = cLang.logic;

    if (feedbackHTML !== "") {
        wordFeedbackBox.innerHTML = feedbackHTML;
        wordFeedbackBox.classList.remove('hidden');
    } else wordFeedbackBox.classList.add('hidden');
    
    resultOverlay.classList.remove('hidden');
    
    setTimeout(() => {
        resultOverlay.classList.add('fade-out');
        setTimeout(() => {
            resultOverlay.classList.add('hidden'); resultOverlay.classList.remove('fade-out');
            currentCaseNum++;
            if (currentCaseNum <= TOTAL_CASES) {
                // เปลี่ยนหน้าจากคำถาม กลับไปหน้าสุ่มคดี
                switchScreenSmoothly(gameScreen, spinScreen, () => { triggerSpin(); });
            } else {
                // จบเกม ไปหน้าสรุปผล
                switchScreenSmoothly(gameScreen, summaryScreen, showFinalSummary);
            }
        }, 300);
    }, 2800);
}

// 4. SUMMARY & EXPORT
function showFinalSummary() {
    let levelIdx = 0;
    if (correctAnswersCount >= 9) levelIdx = 0; else if (correctAnswersCount >= 6) levelIdx = 1; else if (correctAnswersCount >= 4) levelIdx = 2; else levelIdx = 3;
    const summaryContent = summaryTexts[currentLang][levelIdx];
    document.getElementById('summary-score').innerText = `${correctAnswersCount} / ${TOTAL_CASES}`;
    document.getElementById('summary-title').innerText = summaryContent.title;
    document.getElementById('summary-desc').innerText = summaryContent.desc;
}

document.getElementById('btn-download').onclick = () => {
    const target = document.getElementById('summary-capture');
    html2canvas(target, { backgroundColor: '#FFFFFF', scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = `LoneJuror-Score-${correctAnswersCount}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
};

document.getElementById('btn-restart').onclick = () => location.reload(); 

function switchScreenSmoothly(currentScreen, nextScreen, setupFunction) {
    currentScreen.classList.add('fade-out');
    setTimeout(() => {
        currentScreen.classList.add('hidden'); currentScreen.classList.remove('fade-out'); 
        setupFunction(); 
        nextScreen.classList.remove('hidden'); nextScreen.classList.add('fade-out'); 
        void nextScreen.offsetWidth; nextScreen.classList.remove('fade-out');
    }, 400); 
}

function initApp() {
    remainingCases = [...ORIGINAL_CASES_DATA]; 
    correctAnswersCount = 0; currentCaseNum = 1; tutorialPassed = false;
    
    // ตั้งค่าหน้าจอเริ่มต้น
    welcomeScreen.style.display = ""; 
    spinScreen.style.display = ""; 
    gameScreen.style.display = ""; 
    summaryScreen.style.display = ""; 
    tutorialScreen.style.display = "";
    
    spinScreen.classList.add('hidden');
    gameScreen.classList.add('hidden'); 
    summaryScreen.classList.add('hidden'); 
    tutorialScreen.classList.add('hidden');
    
    welcomeScreen.classList.remove('hidden');
    
    // ตั้งค่าภาษาและข้อความเริ่มต้น
    document.getElementById('start-game-btn').innerText = uiTexts[currentLang].btnStartGame;
    setLanguage('th');
}

initApp();
