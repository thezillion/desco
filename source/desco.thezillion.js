/*

# Desco - the lightweight hover tooltip/describer. Brought to you by thezillion.WordPress.com.
# Include this Javascript file in your HTML page using the <script> tag.
# Any queries? Visit www.thezillion.co.nr and contact the developer.
# Coded by Prince Mathew [thezillion.wordpress.com][thezillion.co.nr][facebook.com/thezillion][twitter.com/thezillion]

*/


var win = window,
	doc = document,
	nav = navigator,
	loca = 'below',
	descoDist = 5,
	followmouse = false;
	$id = function(el){
		return doc.getElementById(el);
	},
	$cl = function(el){
		return doc.getElementsByClassName(el);
	},
	$intime = function(code, time){
		time *= 1000;
		return setTimeout(code, time);
	},
	desco = function(){
		return {
			getDescoText: function(el){
				return el.getAttribute('alt');
			},
			showDesco: function(el, e){
				var e = window.event ? window.event : e;
				$id('tzdesco').style.display = 'block';
				$id('tzdesco').style.position = 'absolute';
				var tttxt = desco.getDescoText(el);
				$id('tzdescotxtholder').innerText = tttxt;
				if (!followmouse){
					var posY = el.offsetTop,
					posX = el.offsetLeft,
					elWidth = el.offsetWidth,
					elHeight = el.offsetHeight;
					var ttWidth = $id('tzdesco').offsetWidth,
					ttHeight = $id('tzdesco').offsetHeight,
					ttposY = (loca == 'above') ? ((posY - ttHeight) - descoDist) : (posY + elHeight + descoDist),
					ttposX = posX - ((ttWidth - elWidth) / 2);
					if (ttposX < 0){
						ttposX = 2;
					}
					if (loca == 'above'){
						if (ttposY > e.clientY){
							ttposY = e.clientY - 10;
						}
					}
					else{
						if (ttposY < e.clientY){
							ttposY = e.clientY + 10;
						}
					}
				}
				else{
					ttposX = e.clientX;
					ttposY = e.clientY + descoDist;
				}
				$id('tzdesco').style.left = ttposX + 'px';
				$id('tzdesco').style.top = ttposY + 'px';
				$id('tzdesco').style.opacity = '1';
			},
			noDesco: function(){
				$id('tzdesco').style.opacity = '0';
				$id('tzdesco').style.display = 'none';
			},
			makeDesco: function(customs){
				var a = $cl('show-desco'),
				b = doc.createElement('div'),
				c = doc.createElement('div'),
				d = doc.createElement('div');
				b.setAttribute('id', 'tzdesco');
				c.setAttribute('id', 'tzdescoarrowholder');
				d.setAttribute('id', 'tzdescotxtholder');
				doc.body.appendChild(b);
				b.appendChild(c);
				b.appendChild(d);
				
				// cutomization code
				if (customs){
					if (customs.shadow){
						d.style.boxShadow = customs.shadow;
					}
					if (customs.distance >= 0){
						if (customs.distance > -9){
							descoDist = customs.distance;
						}
					}
					if (customs.location){
						loca = customs.location;
						if (customs.location == 'above'){
							c.parentNode.removeChild(c);
							c = doc.createElement('div');
							c.setAttribute('id', 'tzdescoarrowholder');
							c.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAAKElEQVQYV2NgYGD4TxD//w9Sg1shWB5E4FIIl4Mx0BWiiCNzYArRxQDQOlSsO5+A0wAAAABJRU5ErkJggg==")';
							b.appendChild(c);
						}
					}
					if (customs.softcorners){
						$id('tzdescotxtholder').style.borderRadius = customs.softcorners;
					}
					if (customs.fontsize){
						$id('tzdescotxtholder').style.fontSize = customs.fontsize;
					}
					if (customs.followmouse){
						followmouse = true;
						c.parentNode.removeChild(c);
					}
					
				}
				// end customization code
				
				for (var _i=0; _i<a.length; _i++){
					var b = a[_i];
					b.onmouseover = function(){
						desco.showDesco(this, event);
					}
					b.onmouseout = function(){
						desco.noDesco();
					}
				}
			}
		}
	}();