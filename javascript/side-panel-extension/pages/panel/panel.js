const clickMeButton  = document.getElementById('clickMeButton');
const sendMessageButton = document.getElementById('sendMessageButton');

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