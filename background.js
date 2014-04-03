var
enable = false,
proxy = {
    value: {
        mode: "pac_script",
        pacScript: {
            url: "https://mediahint.com/default.pac"
        }
    }, scope: "regular"
},
badge = {text: "on"},
BADGE_ACTIVE = {color:[204, 0, 51, 255]},
BADGE_INACTIVE = {color:[153, 153, 153, 255]},
setproxy = function() {

    badge.text = enable ? "on" : "off";

    chrome.browserAction.setBadgeBackgroundColor(enable ? BADGE_ACTIVE : BADGE_INACTIVE);

    chrome.browserAction.setBadgeText(badge);

    enable ? chrome.proxy.settings.set(proxy) : chrome.proxy.settings.clear({scope: proxy.scope});
};

setproxy();

chrome.browserAction.onClicked.addListener(function(tab) {
    enable = !enable;
    setproxy();
});
