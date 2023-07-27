//array donde se cargarán los datos recibidos:
let categoriesArray = [];

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function showCategoriesList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        htmlContentToAppend +=
        `<div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src=" `+ category.imgSrc + ` " alt="product image" class="img-thumbnail"> </img>
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4> ` + category.name + ` </h4> 
                        <p> ` + category.description + ` </p> 
                        </div>
                        <small class="text-muted"> ` + category.productCount + ` artículos</small> 
                    </div>

                </div>
                </div>
    </div>`;
    }

        
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }



/* 
EJECUCIÓN:

-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en categoriesArray.
-Por último, se llama a showCategoriesList() pasándole por parámetro categoriesArray.

*/

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        }
    });
});

/* ERRORES:
- Error de sintaxys en "fetchh" es fetch
- Error en linea 14 etiqueta img no cerrada y src
-Error linea 29 "containr" en vez de container
- Error en linea 19 y 22 cambiados category.productCount con category.name  
- Error en linea 20 "category.descripion" error de tipeo "category.description"
- Error de cierre de div en linea 30 sin "`};"
- Error en linea 47 "showCategoriesList(categoriesArry);" por "showCategoriesList(categoriesArray);"
*/