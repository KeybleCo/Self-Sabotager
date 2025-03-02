chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'playAudio') {
      const audioUrl = chrome.runtime.getURL('radar.wav');
      const audio = new Audio(audioUrl);
      audio.play().catch(error => {
        console.error('Playback failed:', error);
      });
    }
  });