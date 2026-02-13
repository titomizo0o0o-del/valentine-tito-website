// Love Messages Array
const loveMessages = [
    { lang: 'en', message: 'You are my world!' },
    { lang: 'ar', message: 'أنت عالمي!' },
    { lang: 'en', message: 'Love is friendship set on fire.' },
    { lang: 'ar', message: 'الحب هو الصداقة التي أُشعلت بالنار.' },
    { lang: 'en', message: 'Every love story is beautiful, but ours is my favorite.' },
    { lang: 'ar', message: 'كل قصة حب جميلة، لكن قصتنا هي المفضلة لدي.' }
];

// Photo URLs from Google Drive
const photoUrls = [
    'https://drive.google.com/uc?id=photo1_id',
    'https://drive.google.com/uc?id=photo2_id',
    'https://drive.google.com/uc?id=photo3_id',
    'https://drive.google.com/uc?id=photo4_id',
    'https://drive.google.com/uc?id=photo5_id'
];

// Function to display messages
function displayMessages() {
    loveMessages.forEach(msg => {
        console.log(`[${msg.lang}] ${msg.message}`);
    });
}

// Function to navigate gallery
function navigateGallery(direction) {
    // Implement navigation logic here
    console.log(`Navigating ${direction}`);
}

// Function to control music player
function controlMusicPlayer(action) {
    // Implement music control logic here
    console.log(`Music player action: ${action}`);
}