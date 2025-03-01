const links = [
    'https://mynews13.com/fl/orlando/news/2024/01/22/kissimmee-kid-considered-a-genius-at-age-5',
    'https://www.kidschaupal.com/young_xpert/soborno-isaac-bari',
    'https://www.braingainmag.com/meet-kairan-quazi-who-is-only-nine-and-already-in-college.htm',
    'https://www.forbes.com/profile/livia-voigt/'
]

function openRandomLink() {
    const randomLink = links[Math.floor(Math.random() * links.length)];
    chrome.tabs.create({url: randomLink});
}

chrome.runtime.onInstalled.addListener(openRandomLink);

chrome.runtime.onStartup.addListener(openRandomLink);

chrome.windows.onCreated.addListener(function(tab) {
    if (tab.windowId === chrome.windows.WINDOW_ID_CURRENT) {
        chrome.tabs.executeScript(tab.id, {file: "popup.js"});
    }
});