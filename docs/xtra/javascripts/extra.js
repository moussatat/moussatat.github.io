 /* Set up file_download tracking */ 
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());


document.addEventListener('DOMContentLoaded', function() {
	const downloadLinks = document.querySelectorAll('.pdf');
	downloadLinks.forEach(link => {
		link.addEventListener('click', function(event) {
			const filePath = link.pathname;
			const fileName = link.getAttribute('href').split('/').pop();
			const fileExtension = fileName.split('.').pop();
			gtag('event', 'file_download', {
				'event_category' : 'send-to',
				'event_label' : 'downloads', 
				'link_url' : filePath,
				'file_name': fileName,
				'file_extension': fileExtension
			});
		});
	});
});
 
 /* 
   'link_classes' :   'link_id' :  'link_text' :   'link_url' :  
*/


 