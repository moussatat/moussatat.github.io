$(".ext-download-file").on('click', function() {  
		ga('create', {{ property }}, 'auto'); 
		ga('send', 'event', 'file_download', {
			  'event_category' : 'send-to',
			  'event_label' : 'downloads'
			});
	});
	
	

