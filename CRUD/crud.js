
const submitButton = document.getElementById("btn");
const updateButton = document.getElementById("upbtn");
updateButton.style.display = "none"
var dataarr = []
submitButton.disabled = true;
const validation = (e) => {
    if (e.value.length > 2) {
        submitButton.disabled = false;
    }
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    var name = document.getElementById('inputfield1').value;
    var department = document.getElementById('inputfield2').value;
    var phoneno = document.getElementById('inputfield3').value;
    inserData(name, department, phoneno)
    submitButton.disabled = true;
})
function inserData(name, department, phoneno) {
    var obj = {
        name: name,
        department: department,
        phoneno: phoneno
    }
    dataarr.push(obj)
    readData()
    resetForm()
}
function readData() {
    var Tbody = document.getElementById("tbody");
    var row = ""
    for (var i = 0; i < dataarr.length; i++) {
        row += `<tr>
                    <td>${dataarr[i].name}</td>
                    <td>${dataarr[i].department}</td>
                    <td>${dataarr[i].phoneno}</td>
                    <td> <a class="editbtn" onclick="update(${i})">edit </a></td>
                    <td> <a class="deletbtn" onclick="deletes(${i})">delete </a></td> 
                </tr>`
    }
    Tbody.innerHTML = row;
}

var okdata
function update(i) {
    okdata = i;
    document.getElementById('inputfield1').value = dataarr[i].name;
    document.getElementById('inputfield2').value = dataarr[i].department;
    document.getElementById('inputfield3').value = dataarr[i].phoneno;
    updateButton.disabled = false;
    updateButton.style.display = "block";

}
updateButton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(okdata);
    dataarr[okdata].name = document.getElementById('inputfield1').value;
    dataarr[okdata].department = document.getElementById('inputfield2').value;
    dataarr[okdata].phoneno = document.getElementById('inputfield3').value;
    readData()
    resetForm();
    updateButton.disabled = true;
})
function deletes(i) {
    const dele = dataarr.splice(i, 1)
    readData()
}
const resetForm = () => {
    document.getElementById('inputfield1').value = '';
    document.getElementById('inputfield2').value = '';
    document.getElementById('inputfield3').value = '';
    row = null;
}
const search = (e) => {
    var searchvalue = (e.value).toUpperCase();
    var rowData = document.querySelectorAll("#tbody tr")
    for (var i = 0; i < rowData.length; i++) {
        var nametd = rowData[i].getElementsByTagName('td')[0]
        if (nametd) {
            var txtValue = nametd.textContent || nametd.innerText;
            if (txtValue.toUpperCase().indexOf(searchvalue) > -1) {
                rowData[i].style.display = "";
            } else {
                rowData[i].style.display = "none";
            }
        }
    }
}
const short = () => {
    var rows, shorting, x, y, shouldSwitch;
    var table = document.getElementById("table");
    shorting = true;
    while (shorting) {
        shorting = false;
        rows = table.rows;
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            shorting = true;
        }
    }
}