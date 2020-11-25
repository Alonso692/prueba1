	var solicitar_lista=  (event) => {
        fetch('https://82ea3xax39.execute-api.us-east-1.amazonaws.com/Testamento/pendiente/listar')
        .then(r => r.json())
        .then(json => {
            var pendientes = json.pendientes

            var table = document.getElementById("table_body");

            var c = 0;
            for (let index = 0; index < pendientes.length; index++) {

                c++;

                var row = table.insertRow(-1);


                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
    

                cell1.innerHTML = c;
                cell2.innerHTML = pendientes[index].id;
                cell3.innerHTML = pendientes[index].Desc;
                cell4.innerHTML = pendientes[index].curso;             
                
            }


        })
        .catch(err => {
            console.log(err);
        })  
};

if(document.forms[0]){
    const element = document.querySelector('form');
    element.addEventListener('submit', event => {
    event.preventDefault();


        var id = document.getElementById("id").value;
        var Desc = document.getElementById("desc").value;
        var curso = document.getElementById("curso").value;

        var data = {
            id : parseInt(id),
            Desc : Desc,
            curso : curso
        }  

        fetch('https://82ea3xax39.execute-api.us-east-1.amazonaws.com/Testamento/pendiente/crear',{
            method : "POST",
            body: JSON.stringify(data)
        })
        .then(function(response) {
            if(response.ok) {
                location.href ="index.html";
                
            } else {
                throw "Error al grabar";
            }
        
        })
        .catch(err => {
            console.log(err);
        })  
    });
}

