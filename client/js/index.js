
var campos = 
[
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var tableBody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit',function(event){
    event.preventDefault();
    var tableRow = document.createElement('tr');
    campos.forEach(function(campo){
        var tableData = document.createElement('td');
        tableData.textContent = campo.value;
        tableRow.appendChild(tableData);
    });

    var tableDataVolume = document.createElement('td');
    tableDataVolume.textContent = campos[1].value * campos[2].value;
    tableRow.appendChild(tableDataVolume);
    tableBody.appendChild(tableRow);
});
