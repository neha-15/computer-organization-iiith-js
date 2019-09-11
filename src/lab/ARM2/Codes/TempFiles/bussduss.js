function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}
function strip2(str){
    return str.replace(/^\s+|\s+$/g,'\t');
}
	
document.addEventListener('DOMContentLoaded',function(){
	init();
});

const init = function(e){
	akhiltopper();
}

function akhiltopper(){
	
	// document.getElementById("data_table").setAttribute("style", "visibility:visible;")
	// document.getElementById("text_table").setAttribute("style", "visibility:visible;width:100%; background-color: white;");
var s = localStorage.getItem('x');
s=s.split('\n')
var temp;
ans=[]
i=0
while(strip2(strip(s[i]))!="main:") {i+=1;}
for(;i<s.length;i++){
    temp=strip2(strip(s[i]));
    if(temp!='') {
        let ind2=temp.indexOf('@');
        if(ind2!=-1) temp=temp.substring(0,ind2); 
        let ind=temp.indexOf(':');
        if(ind!=-1) temp=temp.substring(ind+1);
        temp=strip2(strip(temp));
        if(temp!='') ans.push(temp);
    }
}
n=ans.length
serial=[];
let start=1073741824;
for(let i=0;i<n;i++){
    serial.push((start+4*i).toString(16));
}
dhoom=[]
for(let i=0;i<n;i++){
    chinnadhoom=[]
    chinnadhoom.push('');
    chinnadhoom.push(serial[i]);
    chinnadhoom.push(ans[i]);
    dhoom.push(chinnadhoom);
}
console.log(dhoom);

table = document.getElementById('text_table');
 for(var i=0;i<dhoom.length;i++)
 {
 	var newRow=table.insertRow(table.length);
 	for(var j=0;j<dhoom[i].length;j++)
 	{
 		var cell= newRow.insertCell(j);
 		cell.innerHTML=dhoom[i][j];
 	}
 }
}

// function badoom(){
//      var s = document.getElementById("ta").value;
//      localStorage.setItem('x',s);
     
//     // console.log(localStorage.getItem('x'));
//     // document.write(localStorage.getItem('x'));
//      window.location="pjtry.html";
//     // window.location.assign("pjtry.html");
//      // document.write(localStorage.getItem('x'));   
// }