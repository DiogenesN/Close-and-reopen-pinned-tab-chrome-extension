chrome.action.onClicked.addListener(async () => {
	// get the active tab in current window
	let [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
	if (!activeTab) return;

	// get all tabs in current window
	let tabs = await chrome.tabs.query({ currentWindow: true });

	for (let t of tabs) {
		if (t.id !== activeTab.id) {
			chrome.tabs.remove(t.id);
		}
	}

	const result = await chrome.storage.sync.get("urls");
	if (!result.urls) return;

	const urlList = result.urls
		.split("\n")
		.map(u => u.trim())
		.filter(u => u);

	for (const url of urlList) {
		if (url.startsWith("chrome-extension://")) {
			console.warn("Skipping invalid extension URL:", url);
			continue;
		}
		const finalUrl = url.match(/^https?:\/\//) ? url : "https://" + url;
		chrome.tabs.create({ url: finalUrl, pinned: true });
	}
});
