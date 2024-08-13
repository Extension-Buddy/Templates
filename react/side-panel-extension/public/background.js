/*global chrome, ExtensionBuddy, importScripts*/

// We import the script using our extension-buddy-sdk npm package
importScripts('lib/extension-buddy-sdk.js');

const EXTENSION_BUDDY_KEY = '_YOUR_KEY_';

const setup = () => {
  chrome.runtime.onInstalled.addListener(async () => {
    console.log('Chrome extension successfully installed!');
    const client = new ExtensionBuddy(EXTENSION_BUDDY_KEY);
    const status = await client.getUserStatus();
    console.log(`status: ${status?.status}`);
  });
  
  // Listen for messages from content scripts or popup scripts
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received:", message.greeting);
    
    // Process the message and send a response if needed
    sendResponse({ response: `We received the message, '${message.greeting}'` });
  });

  // Show side panel when clicking on extension icon
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
}

setup();
