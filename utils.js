
htmlentities = {
	decode: function(str) {
		return (''+str).replace(/\&amp;/g, '&')
			.replace(/\&gt;/g, '>')
			.replace(/\&lt;/g, '<')
			.replace(/\&quot;/g, '"')
			.replace(/\&#x27;/g, "'");
	}
}