let navEl=document.getElementById('nav')
fetch('/norway/nav.html').then((res)=>{
	res.text().then((text)=>{
		navEl.innerHTML=text;
	})
}).catch((err)=>{
	navEl.innerHTML=`Error: ${JSON.stringify(err)}`
})