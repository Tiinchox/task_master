document.querySelector("#content").onkeyup = function(){
    if(document.querySelector("#content").value === ""){
        document.querySelector("#submit").disabled = true;
    } else {
         document.querySelector("#submit").disabled = false;
        }
    }
