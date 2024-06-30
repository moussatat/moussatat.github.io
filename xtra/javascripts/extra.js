$(".ext-download-file").on('click', function() {  
		ga('create', {{ analytics.property }}, 'auto'); 
		ga('event', 'file_download', {
			  'event_category' : 'send-to',
			  'event_label' : 'downloads'
			});
	});
	
	

