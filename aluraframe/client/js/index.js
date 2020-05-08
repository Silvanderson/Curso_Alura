var campos = [
    document.querySelector('#data'),
    document.querySelector('#quatidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
    
    var tr = document.createElement('tr');

    campos.forEach(function(campo){

        var td = document.createElement('td');
        td.textContent = campo.nodeValue;
        tr.appendChild(td);

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1] * campos[2].value;

    tr.appendChild(tdVolume);



}); 

