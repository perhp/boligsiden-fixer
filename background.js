chrome.browserAction.onClicked.addListener(function(tab) { 
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, { command: 'ICON_CLICKED' }, function(response) {
			console.log(response.result);
		});
	});
});
