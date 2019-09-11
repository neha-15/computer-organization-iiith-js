function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}
function strip2(str){
    return str.replace(/^\s+|\s+$/g,'\t');
}
s2=`
@Adding elemnts of an array

	.arm

	.data
	numarray:	.word 10, 9, 8, 3, 2, 1, 4, 5, 6, 7  
	sum:		.word 

	.text
	.global main     @ 'main' function is mandatory.

	main:
        	mov r0, #10        	@ Set loop counter to 0
	mov r1, #0         	@ Set initial sum value to 0;  
	ldr r2, =numarray  	@ r2 = &numarray
	.Lloop: 
	ldr r3, [r2], #4  	@ r3 = *r2; r2=r2+4 
        	add r1, r1, r3     	@ sum = sum + numarray[i]
        	subs r0, r0, #1    	@ Decrement loop counter
        	bne .Lloop         	@ Branch back if the loop counter i!=0 
	ldr r0, =sum       	@ r0 = &sum; Reuse register r0
        	str r1, [r0]       	@ *r0 = r1 (sum = r1)`
s3=`
@Forward branch

	.text 
	.global main
	main:
	mov r3, #10
	mov r4, #11
	cmp r3, r4
	ble .Lif
	sub r0, r1, r2
	b .Lexit
	.Lif:  	add r0, r1, r2
	.Lexit:`
s4=`
@Square sum

	.arm
	.data
	arraysize:	.word 10
	array:		.word 1, -2, 3, -4, 5, -6, 8, -7, 9, -10
	sqrsum:	.word 0

	.text
	.global main     @ 'main' function is mandatory.

	@ r0 = arraysize; r1 = &array; r3 = sum; r2 = array[i]
	@ Other Registers Used: r6, r7

	main:
	ldr r0, =arraysize     @ r0 = &arraysize
        	ldr r0, [r0]           @ r0 = arraysize. We are immediately reusing r0. 
       	ldr r1, =array	       @ r1 = &array
       	mov r3, #0	       @ r3 = 0 (sum = 0)
	cmp r0, #0    	       @ if (r0 == 0) goto exit; 
	beq .Lexit	       

	@ We are using r0 as a loop index variable

	.Lloop: ldr r2, [r1], #4	
	mla r3, r2, r2, r3     	@ r3 = r2*r2+r3 (sum = sum + array[i]*array[i])
        	subs r0, r0, #1	
        	bne .Lloop
	ldr r6, =sqrsum        @ r6 = &sqrsum
 	str r3, [r6]           @ *r6 = r3	
	.Lexit:`

s1=`
@Adding elemnts of an array

	.arm

	.data
	numarray:	.word 10, 9, 8, 3, 2, 1, 4, 5, 6, 7  
	sum:		.word 

	.text
	.global main     @ 'main' function is mandatory.

	main:
        	mov r0, #10        	@ Set loop counter to 0
	mov r1, #0         	@ Set initial sum value to 0;  
	ldr r2, =numarray  	@ r2 = &numarray
	.Lloop: 
	ldr r3, [r2], #4  	@ r3 = *r2; r2=r2+4 
        	add r1, r1, r3     	@ sum = sum + numarray[i]
        	subs r0, r0, #1    	@ Decrement loop counter
        	bne .Lloop         	@ Branch back if the loop counter i!=0 
	ldr r0, =sum       	@ r0 = &sum; Reuse register r0
        	str r1, [r0]       	@ *r0 = r1 (sum = r1)`


s=s1;
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


// i=0
// while(s[i]!='main:') {i+=1; continue;}
// console.log(s);
// i+=1;
// for(;i<s.length;i++){
//     if(s[i]=='') continue;
//     var temp=''
//     for(var k=0;k<s[i].length;k++){
//         // console.log(k);
//         if(k=='@') break;
//         temp+=s[k];
//     }
    // ind=temp.indexOf(':');
    // temp=temp.substr(ind,temp.length-ind);
    // temp=temp.trim();
//     if(temp!='') ans.push(temp);
//     temp=''
// }
// console.log(ans)
// for j in range(i,len(a)):
//     if a[j]=='': continue
//     temp=''
//     for k in a[j]:
//         if k=='@': break
//         temp+=k
//     ind=temp.find(':')
//     if ind: temp=temp[ind+1:]
//     temp=temp.strip()
//     if temp!='': ans.append(temp)
// # for i in ans: print(i)    
// n=len(ans)
// serial=[]
// start=1073741824
// for i in range(n):
//     serial.append(hex(start+4*i))
// for i in range(n):
//     print(i,serial[i],ans[i])
// document.write(s);
// console.log(s);