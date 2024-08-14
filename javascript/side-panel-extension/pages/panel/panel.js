const clickMeButton  = document.getElementById('clickMeButton');
const sendMessageButton = document.getElementById('sendMessageButton');

const EXTENSION_BUDDY_KEY = '_YOUR_KEY_';

clickMeButton.addEventListener('click', () => {
    alert('clickMeButton clicked!');
});

sendMessageButton.addEventListener('click', () => {
    console.log('sendMessageButton clicked!');

    // Send message to background script
    chrome.runtime.sendMessage({ greeting: "Hi!" }, response => {
        alert(`background.js received the message: ${ JSON.stringify(response)}`);
    });
});

// Connection to Extension Buddy
const client = new ExtensionBuddy(EXTENSION_BUDDY_KEY);
client.getUserStatus().then((res) => console.log(`status: ${stat?.status}`));
