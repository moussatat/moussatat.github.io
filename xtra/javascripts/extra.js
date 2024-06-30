window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', { analytics.property })
$(".pdf").on('click', function() {    
		gtag('event', 'file_download'  ); 
	});
	

