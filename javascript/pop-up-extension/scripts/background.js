const setup = () => {
  // Listen for messages from content scripts or popup scripts
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received:", message);
    
    // Process the message and send a response if needed
    sendResponse({ response: "We received the message!" });
  });
}

setup();
