// your code here
function handleS() {
	const ht = document.getElementById("url");
	const nm = document.getElementById("name").value;
	const yr = document.getElementById("year").value;
	let s= "https://localhost:8080/?";
	if(nm){
		s+=`name=${nm}`;
	}
	if(yr){
		if(nm){
			s+='&';
		}
		s+=`year=${yr}`
	}
	ht.textContent = s;
}