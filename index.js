document.addEventListener('DOMContentLoaded', function() {

    var jsonData = []
    const estadosList = document.getElementById('estados-list');
 
    async function getAndLoadEstados() {
        try {
    
            const data = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
            jsonData = await data.json();

            for( i = 0; i < jsonData.length; i++){
                addEstado(jsonData[i].nome, jsonData[i].id);
            }

        } catch (error) {
            console.error(error);
        }
    }

    function addEstado(nome, id) {
        const a = document.createElement('a')
        a.href = `./municipios/index.html?id=${id}`
        const li = document.createElement('li');
        li.textContent = nome;
        estadosList.appendChild(a);
        a.appendChild(li);
    }

    getAndLoadEstados();
});
  