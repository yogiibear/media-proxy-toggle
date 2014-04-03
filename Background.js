chrome.proxy.settings.set({
    value: {
        mode: "pac_script",
        pacScript: {
            url: "https://mediahint.com/default.pac"
        }
    }, scope: "regular"
});
