Desco.js
========

Desco.js is an easy way for you to show custom tooltips on your webpage.

Usage
------

<code>
	&lt;span class='show-desco' id="boxy" alt='Grey grey grey grey'&gt;Hover over this text to see a Desco popup.&lt;/span&gt;
	&lt;br/&gt;
	&lt;img src="img.jpg" class="show-desco" alt="This image is awesome!" /&gt;&lt;br/&gt;
	&lt;span id="posy"&gt;Hover over this image as well&lt;/span&gt;
	&lt;script&gt;
	// Put this code preferably at the end of the document
	win.addEventListener("load", function(){ desco.makeDesco(); });
	&lt;/script&gt;
</code>