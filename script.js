const loveMessages = [
    "حبيبتقلب طارق من جوااا🥹\nبحبك اوي يعيوني ربنا يخليكي ليا وارجع حبيبك تاني وارجع وطروقك وتوتي تاني🥹\nان مش نفضل طول العمر سوا يعيونيي انتتت واشوفك كويسه وفاحسن حته في الدنيا كدههههووو وأفضل فخور بيكي موتتتت طول الوقتتتتت\nبحبك اوي والله 🥹🥹🥹🥹🥹🥹",
    "U mean more to me than I ever know how to explain. U're my comfort, my favorite smile, and the one my heart always chooses, I don't need special days to love you. You're always my choice, today and every day."
];


const photoLinks = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
];

let currentMessageIndex = 0;
let currentPhotoIndex = 0;

// وظيفة تغيير الرسائل
function nextMessage() {
    currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;
    document.getElementById("love-message").innerText = loveMessages[currentMessageIndex];
}

// وظائف تغيير الصور
function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoLinks.length;
    document.getElementById("gallery-image").src = photoLinks[currentPhotoIndex];
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photoLinks.length) % photoLinks.length;
    document.getElementById("gallery-image").src = photoLinks[currentPhotoIndex];
}

// وظائف الأغنية
const audio = document.getElementById("audio-player");
function playMusic() { audio.play(); }
function pauseMusic() { audio.pause(); }

// تشغيل أول حاجة أول ما الموقع يفتح
window.onload = () => {
    document.getElementById("love-message").innerText = loveMessages[0];
    document.getElementById("gallery-image").src = photoLinks[0];
    
    // ربط الزراير بالوظائف
    document.querySelector(".next-message-btn").onclick = nextMessage;
    document.getElementById("next-btn").onclick = nextPhoto;
    document.getElementById("prev-btn").onclick = prevPhoto;
    document.getElementById("play-btn").onclick = playMusic;
    document.getElementById("pause-btn").onclick = pauseMusic;
};
