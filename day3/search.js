let qu ="";
function search_text(){
    var elementtp = document.getElementById("stktp");
    elementtp.classList.add("sticky-top");
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    let x = document.getElementsByTagName('div');
    if (input.length<qu) {
        x[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    qu=input;
    
    //console.log("lol");
  
    for (i = x.length-1; i >=0; i--) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            
            //x[i].style.display="none";
        }
        else {
            //x[i].style.display="list-item";    
            x[i].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
           
            
        }
    }
}
function focusoutFunction(){
    var elementtp = document.getElementById("stktp");
    elementtp.classList.remove("sticky-top");
}