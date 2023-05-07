let r = document.getElementById("inputText");

let calculate=(number)=>{
    r.value += number; 

    if (r.value.toString().length >= 9) { 
        if (window.innerWidth <= 768) { 
            r.style.fontSize = "24px"; 
        } else {
            r.style.fontSize = "32px"; 
        }
    }
}

let result = () => {
  try {
    let output = eval(r.value);
    if (output % 1 !== 0) {
      output = output.toFixed(8);
      output = output.replace(/\.?0+$/, '');
    }
    r.value = output;
  } catch (err) {
    alert("Enter the valid input");
  }
}


function clr(){
    r.value = "";

    if (r.value.toString().length < 9) { 
        if (window.innerWidth <= 768) { 
        } else {
            r.style.fontSize = "42px"; 
        }
    }
}
function del(){
    r.value = r.value.substring(0,r.value.length-1);
    if (r.value.toString().length < 9) { 
        if (window.innerWidth <= 768) {
            r.style.fontSize = "30px"; 
        } else {
            r.style.fontSize = "42px"; 
        } 
    }
}
