chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.command === 'ICON_CLICKED') {
		Array.from(document.getElementsByClassName('paymentexpenses')).forEach(element => {
			const amount = Number(element.getElementsByTagName('span')[1].innerHTML.replace('.', ''));
			if (amount > 2500) {
				element.parentElement.parentElement.parentElement.style.display = 'none';
			}
		});
		Array.from(document.getElementsByClassName('featured-group-wrap')).forEach(element => element.style.display = 'none');
	}
});
