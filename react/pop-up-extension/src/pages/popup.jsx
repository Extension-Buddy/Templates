/*global chrome */

import React from 'react';
import { ExtensionBuddy } from 'extension-buddy-sdk';
import { useEffect } from 'react';
import './popup.css';
import { useState } from 'react';

const EXTENSION_BUDDY_KEY = '_YOUR_KEY_';

const Popup = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const checkStatus = async () => {
      const client = new ExtensionBuddy(EXTENSION_BUDDY_KEY);
      const status = await client.getUserStatus();
      setStatus(status?.status)
    }

    checkStatus();
  }, []);

  return (
    <div>
      <h1>Welcome to the Sample Extension!</h1>
      <h2><b>***Inspect this window to see any logs.***</b></h2>
      <p>This is a simple popup for demonstration purposes.</p>
      <button onClick={() => {
        alert('clickMeButton clicked!');
      }}>Click Me!</button>

      <p>You can also send messages to the background.js script.</p>
      <button onClick={() => {
        console.log('sendMessageButton clicked!');

        // Send message to background script
        chrome.runtime.sendMessage({ greeting: "Hi!" }, response => {
            alert(`background.js received the message: ${ JSON.stringify(response)}`);
        });
      }}>Send Message - Hi!</button>
      <p>Status: {status}</p>
    </div>
  )
}

export default Popup;
