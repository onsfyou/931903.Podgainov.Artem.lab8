var mainD = document.getElementsByClassName("mainDiv");
var saveD = document.getElementsByClassName("saveDiv");

let addB = document.getElementById("addItem");
let saveB = document.getElementById("saveItems");

addB.onclick = function(){
    var lb = document.createElement('label');
    var in1 = document.createElement('input');
    var in2 = document.createElement('input');
    var but1 = document.createElement('button');
    var but2 = document.createElement('button');
    var but3 = document.createElement('button');
    
    but1.innerText = "↑";
    but2.innerText = "↓";
    but3.innerText = "×";

    but3.onclick = function(){
        lb.remove();
    }

    but1.onclick = function() {
        var before = lb.previousElementSibling;
        //console.log(lb.previousElementSibling);
        if (before) mainD[0].insertBefore(lb, before);
    }

    but2.onclick = function(){
        var after = lb.nextElementSibling;

        if(after) mainD[0].insertBefore(after, lb);
    }

    mainD[0].appendChild(lb);
    lb.appendChild(in1);
    lb.appendChild(in2);
    lb.appendChild(but1);
    lb.appendChild(but2);
    lb.appendChild(but3);
}

saveB.onclick = function(){
    var ins = document.getElementsByTagName('input');
    saveD[0].innerText += "{";
    for (var i = 0; i < ins.length; i= i+2){
        saveD[0].innerText += "\"";
        saveD[0].innerText += ins[i].value;
        saveD[0].innerText += "\"";
        saveD[0].innerText += ":";
        saveD[0].innerText += "\"";
        saveD[0].innerText += ins[i+1].value;
        saveD[0].innerText += "\"";
        saveD[0].innerText += ",";
    }
    saveD[0].innerText = saveD[0].innerText.slice(0,-1);
    saveD[0].innerText += "}";
}
