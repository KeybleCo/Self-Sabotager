function playAudio() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'playAudio' }, (response) => {
        if (chrome.runtime.lastError) {
          console.error('Failed to send message:', chrome.runtime.lastError);
        }
      });
    }
  });
}

chrome.alarms.create('minuteAlarm', { periodInMinutes: 0.25 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'minuteAlarm') {
    playAudio();
  }
});

// Ensure content script is injected on install/update
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    tabs.forEach(tab => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['sound_content.js']
      });
    });
  });
});