let navEl=document.getElementById('nav')
fetch('nav.html').then((res)=>{
	res.text().then((text)=>{
		navEl.innerHTML=text;
	})
}).catch((err)=>{
	navEl.innerHTML=`Error: ${JSON.stringify(err)}`
})

let faviconEl=document.createElement('link');
faviconEl.rel="shortcut icon"
faviconEl.href="norway.png"
faviconEl.type="image/png"

document.head.appendChild(faviconEl);