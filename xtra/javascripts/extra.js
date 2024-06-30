window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 

$(".pdf").on('click', function() {   
		gtag('event', 'file_download', {
			  'event_category' : 'send-to',
			  'event_label' : 'downloads'
			});
	});
	
	

