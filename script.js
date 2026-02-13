// الرسائل
const loveMessages =  [
    "حبيبتقلب طارق من جوااا🥹\nبحبك اوي يعيوني ربنا يخليكي ليا وارجع حبيبك تاني وارجع وطروقك وتوتي تاني🥹\nان مش نفضل طول العمر سوا يعيونيي انتتت واشوفك كويسه وفاحسن حته في الدنيا كدههههووو وأفضل فخور بيكي موتتتت طول الوقتتتتت\nبحبك اوي والله 🥹🥹🥹🥹🥹🥹",
    "U mean more to me than I ever know how to explain. U're my comfort, my favorite smile, and the one my heart always chooses, I don't need special days to love you. You're always my choice, today and every day."
];

// الصور
const photoLinks = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
];

let currentMessageIndex = 0;
let currentPhotoIndex = 0;

// تحديث الشاشة
function updateUI() {
    const msgElement = document.getElementById("love-message");
    const imgElement = document.getElementById("gallery-image");
    
    if (msgElement) msgElement.innerText = loveMessages[currentMessageIndex];
    if (imgElement) imgElement.src = photoLinks[currentPhotoIndex];
}

// تشغيل عند تحميل الصفحة
window.onload = () => {
    updateUI();

    // ربط زرار الرسائل
    document.getElementById("next-message-btn").onclick = () => {
        currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;
        updateUI();
    };

    // ربط زراير الصور
    document.getElementById("next-btn").onclick = () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photoLinks.length;
        updateUI();
    };

    document.getElementById("prev-btn").onclick = () => {
        currentPhotoIndex = (currentPhotoIndex - 1 + photoLinks.length) % photoLinks.length;
        updateUI();
    };

    // ربط زراير المزيكا
    const audio = document.getElementById("audio-player");
    document.getElementById("play-btn").onclick = () => audio.play();
    document.getElementById("pause-btn").onclick = () => audio.pause();
};
