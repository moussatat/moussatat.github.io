
<!-- Integrate with Google Analytics 4 -->
<script id="__analytics">
function __md_analytics() {
	window.dataLayer = window.dataLayer || []
    function gtag() { dataLayer.push(arguments) }
	  
  /* Send file download */
      $(".download-link").on('click', function() { 
		gtag('event', 'file_download', {
			  'event_category' : 'send-to',
			  'event_label' : 'downloads'
			});
	});

   /* Create script tag */
    var script = document.createElement("script")
    script.async = true
    script.src = "https://www.googletagmanager.com/gtag/js?id={{ property }}"

    /* Inject script tag */
    var container = document.getElementById("__analytics")
    container.insertAdjacentElement("afterEnd", script)
  }
</script>
	
	 