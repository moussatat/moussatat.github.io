window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 

$(".pdf").on('click', function() {   
		var filepath = {{Click URL}}.split("/");
		var filename = filepath.pop();
		
		gtag('event', 'file_download', { 
			  'event_category' : 'send-to',
			  'event_label' : 'downloads',
			  'file_extension' : 'pdf' ,
			  'file_name' : {{ filename }},
			  ; 
			});
	});
	

