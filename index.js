let submit = document.querySelectorAll("input")[5];
let tbody = document.querySelector("tbody");

submit.addEventListener("click", addList);
var data = [];
function addList(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let id = document.getElementById("docID").value;
    let dept = document.getElementById("dept").value;
    let exp = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let mbl = document.getElementById("mbl").value;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = name;
    let td2 = document.createElement("td");
    td2.textContent = id;
    let td3 = document.createElement("td");
    td3.textContent = dept;
    let td4 = document.createElement("td");
    td4.textContent = exp;
    let td5 = document.createElement("td");
    td5.textContent = email;
    let td6 = document.createElement("td");
    td6.textContent = mbl;
    let td7 = document.createElement("td");
    if (parseInt(exp) > 5) {
        td7.textContent = "Senior";
    } else if (parseInt(exp) > 1) {
        td7.textContent = "Junior";
    } else {
        td7.textContent = "Trainee";
    }
    let td8 = document.createElement("td");
    let btn = document.createElement("button");
    btn.textContent = "Delete";
    td8.append(btn);
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(tr);
}    




