/*global chrome, ExtensionBuddy, importScripts*/

// We import the script using our extension-buddy-sdk npm package
importScripts('lib/extension-buddy-sdk.js');

const EXTENSION_BUDDY_KEY = '_YOUR_KEY_';

const setup = () => {
  chrome.runtime.onInstalled.addListener(async () => {
    console.log('Chrome extension successfully installed!');

    // Connection to Extension Buddy
    const client = new ExtensionBuddy(EXTENSION_BUDDY_KEY);
    const status = await client.getUserStatus();
    console.log(`status: ${status?.status}`);
  });

  // Open page in new tab
  chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: chrome.runtime.getURL('page.html') });
  });
  
  // Listen for messages from content scripts or popup scripts
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received:", message.greeting);
    
    // Process the message and send a response if needed
    sendResponse({ response: `We received the message, '${message.greeting}'` });
  });
}

setup();
