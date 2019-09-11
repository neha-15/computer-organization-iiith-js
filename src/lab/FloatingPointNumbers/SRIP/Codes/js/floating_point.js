


  function myFunction1() {
  var x =Number(document.getElementById("decno").value);
  var y =Number(document.getElementById("bitno").value);
  if(x=="" && y==""){
  x= 0;
  y = 0;
    
  }
  if(document.getElementById("lower_part").style.visibility=="hidden"){
           document.getElementById("lower_part").style.visibility="visible";
  }
  else{
    document.getElementById("lower_part").style.visibility="hidden";
    }
  
  }

  function myFunction2() {
    
  document.getElementById("lower_part").style.visibility="hidden"; 
    
  }

  function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  }



