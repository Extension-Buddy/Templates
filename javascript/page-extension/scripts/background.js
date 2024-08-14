importScripts("lib/extension-buddy-sdk.js");

const EXTENSION_BUDDY_KEY = '_YOUR_KEY_';

const setup = () => {
  // Listen for messages from content scripts or popup scripts
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received:", message.greeting);
    
    // Process the message and send a response if needed
    sendResponse({ response: `We received the message, '${message.greeting}'` });
  });

  // Open page in new tab
  chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: chrome.runtime.getURL('pages/extension-page/extension-page.html') });
  });

  chrome.runtime.onInstalled.addListener(async () => {
    console.log('Chrome extension successfully installed!');

    // Connection to Extension Buddy
    const client = new ExtensionBuddy(EXTENSION_BUDDY_KEY);
    const status = await client.getUserStatus();
    console.log(`status: ${status?.status}`);
  });
}

setup();
