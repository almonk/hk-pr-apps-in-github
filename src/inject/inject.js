var $ = jQuery;

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
	if (msg.action == 'ready') {
		if (document.location.pathname.includes('pulls')) {
			$('.table-list-cell-hk').remove();

			$('.issue-title').each(function() {
				var issueUrl = $(this).children('.issue-title-link').attr('href');
				var issueUrlAsArray = issueUrl.split('/');
				var issueNo = issueUrlAsArray.slice(-1)[0];

				console.log(issueNo);
				// $(this).after(`<a class="heroku-pr-app-link" href="https://dashboard-staging-pr-${issueNo}.herokuapp.com/">Review app</a>`)
				$(this).after(`<div class="table-list-cell table-list-cell-hk">\
					<a target="_blank" aria-label="Open PR app" class=" tooltipped tooltipped-n" href="https://dashboard-staging-pr-${issueNo}.herokuapp.com">\
						<span></span>\
					</a>
				</div>`)
			});
		}
	}
});
