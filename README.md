Desco.js
========

Desco.js is an easy way for you to show custom tooltips on your webpage.

Usage
------

### HTML
<code>
&lt;span class='show-desco' id="boxy" alt='Grey grey grey grey'&gt;Hover over this text to see a Desco popup.&lt;/span&gt;
</code>
<code>
&lt;img src="img.jpg" class="show-desco" alt="This image is awesome!" /&gt;&lt;br/&gt;
</code>

### JavaScript (To be put at the end of the page)
<code>
win.addEventListener("load", function(){ desco.makeDesco(); });
</code>
