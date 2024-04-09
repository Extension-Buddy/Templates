const setup = () => {
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
