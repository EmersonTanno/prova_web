document.addEventListener('DOMContentLoaded', function() {

    var jsonData = []
    const cidadesList = document.getElementById('cidades-list');
    const urlSearchParams = new URLSearchParams(location.search);
    const _id = urlSearchParams.get('id');


    async function getAndLoadMunicipios(_id) {
        try {
            
            const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${_id}/municipios`);
            jsonData = await data.json();

            for( i = 0; i < jsonData.length; i++){
                addmunicipios(jsonData[i].nome, i);
            }

        } catch (error) {
            console.error(error);
        }
    }

    function addmunicipios(nome, pos) {
        const li = document.createElement('li');
        li.textContent = nome;
        cidadesList.appendChild(li);
        const button = document.createElement('button');
        button.textContent = 'Favoritar';
        button.id = `${pos}`;
        cidadesList.appendChild(button)
    }

    getAndLoadMunicipios(_id);



    Window.addEventListener("DOMContentLoaded", async () => {
        const local = JSON.parse(localStorage.getItem("favoritos"));
        if (local) {
            const favorito = document.getElementsByTagName('button')

            favorito.addEventListener('click', () => {
                    window.localStorage.setItem("favoritos", JSON.stringify.jsonData[favorito.id])
            });
    
            footer.appendChild(span);
        } else {
            window.localStorage.setItem("favoritos", JSON.stringify({ jsonData }));
        }
    });
});
  