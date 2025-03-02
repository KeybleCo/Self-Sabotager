const links = [
    'https://mynews13.com/fl/orlando/news/2024/01/22/kissimmee-kid-considered-a-genius-at-age-5',
    'https://www.kidschaupal.com/young_xpert/soborno-isaac-bari',
    'https://www.braingainmag.com/meet-kairan-quazi-who-is-only-nine-and-already-in-college.htm',
    'https://www.forbes.com/profile/livia-voigt/',
    'https://www.fortnite.com/item-shop?lang=en-US',
    'https://x.com/canadahonk'
]

function getRandomLink() {
    return links[Math.floor(Math.random() * links.length)];
}

function openRandomLink() {
    const randomLink = getRandomLink();
    chrome.tabs.create({url: randomLink});
}

chrome.runtime.onInstalled.addListener(openRandomLink);

chrome.runtime.onStartup.addListener(function(window) {
    const randomLink = getRandomLink();
    chrome.tabs.query({windowId: window.id}, function(tabs) {
        if (tabs.length === 1) {
            chrome.tabs.update(tabs[0].id, {url: randomLink});
        }
    });
});

chrome.windows.onCreated.addListener(function(window) {
    const randomLink = getRandomLink();
    chrome.tabs.query({windowId: window.id}, function(tabs) {
        if (tabs.length === 1) {
            chrome.tabs.update(tabs[0].id, {url: randomLink]});
        }
    });
});
