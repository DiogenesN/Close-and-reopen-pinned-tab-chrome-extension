document.addEventListener("DOMContentLoaded", async () => {
	const textarea = document.getElementById("urls");
	const status = document.getElementById("status");
	const saveBtn = document.getElementById("save");

	// load saved URLs
	const result = await chrome.storage.sync.get("urls");
	if (result.urls) textarea.value = result.urls;

	saveBtn.addEventListener("click", async () => {
		await chrome.storage.sync.set({ urls: textarea.value });
		status.textContent = "Saved!";
		setTimeout(() => status.textContent = "", 2000);
	});
});
