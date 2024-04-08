const clickMeButton  = document.getElementById('clickMeButton');
const sendMessageButton = document.getElementById('sendMessageButton');

clickMeButton.addEventListener('click', () => {
    console.log('clickMeButton clicked!');

    // Change color to blue
    clickMeButton.style.backgroundColor = 'blue'; 
});

sendMessageButton.addEventListener('click', () => {
    console.log('sendMessageButton clicked!');

    // Send message to background script
    chrome.runtime.sendMessage({ greeting: "Hi!" }, response => {
        console.log("background.js received the message:", response);
    });
});