const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const question = document.getElementById('question');
const gif = document.getElementById('gif');

const noTexts = [
    "Please think again! 🥺",
    "Samu একবার আবার ভেবে দেখো🥺",
    "Miss Sawwa pls maan jao na 😭💖"
];

const noGifs = [
    "https://files.catbox.moe/447g9s.gif",
    "https://files.catbox.moe/tgzbed.gif",
    "https://files.catbox.moe/j50po7.gif"
];

let noCount = 0;

// নো বাটনে ক্লিক বা টাচ করলে যা হবে (GIF আর টেক্সট চেঞ্জ করার লজিক)
noBtn.addEventListener('click', (e) => {
    if (noCount < noTexts.length) {
        // 🎯 ম্যাজিক: লেখা চেঞ্জ হওয়ার সাথে সাথে সঠিক GIF লোড হবে
        gif.src = noGifs[noCount];
        
        // লেখা চেঞ্জ হবে
        question.innerText = noTexts[noCount];
        
        noCount++;
    } else {
        e.preventDefault(); 
        runAway();
    }
});

noBtn.addEventListener('mouseover', () => {
    if (noCount >= noTexts.length) {
        runAway();
    }
});

noBtn.addEventListener('touchstart', (e) => {
    if (noCount >= noTexts.length) {
        e.preventDefault(); 
        runAway();
    }
});

// ৩ বার ক্লিকের পর নো বাটন যেভাবে স্ক্রিনজুড়ে পালাবে
function runAway() {
    gif.src = "https://files.catbox.moe/troueo.gif";
    question.innerText = "আর কতো না না করবে Samu😒 Yes তোমাকে বলতেই হবে😤";
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    const randomX = Math.floor(Math.random() * (windowWidth - btnWidth - 60)) + 30;
    const randomY = Math.floor(Math.random() * (windowHeight - btnHeight - 60)) + 30;
    
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// ইয়েস বাটনে ক্লিক করলে যা হবে
yesBtn.addEventListener('click', () => {
    question.innerText = "আমি জানতাম তুমি অয় খইবা😍 ওকে গেম এ আইও আমি ওয়েট করছি🥹👉👈💖";
    
    // ⬇️ এখানে 'Yes' চাপার পর যে ফাইনাল খুশির GIF দেখাবে, সেটার লিংক দিবি
    gif.src = "https://files.catbox.moe/0how9d.gif";
    
    noBtn.style.display = 'none';
});