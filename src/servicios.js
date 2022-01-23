//export const ListarImagenes = async () =>{

//try{
//const respuesta  =  await fetch("https://rickandmortyapi.com/api/character");
//const datos = await respuesta.json();
//return datos
//}catch(error){
//console.error(error);
//}

//}

export const ListarImagenes = () => {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        setTimeout(() => {
            req.open('GET', 'https://rickandmortyapi.com/api/character');
            req.onload = function() {
                if (req.status == 200) {
                    resolve(JSON.parse(req.response));
                } else {
                    reject();
                }
            };
            req.send();
        }, 2000)
    })
}

//var promises = [
//ListarImagenes(),

//ListarImagenes()
//];

//Promise.all(promises).then(results => {
//console.log(results)
//})

//function getPosts(success, error) {
    //var req = new XMLHttpRequest();
    //req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    //req.onload = function() {
        //if (req.status == 200) {
            //success(JSON.parse(req.response));
        //} else {
            //error();
        //}
    //};

    //req.send();
//}

//ListarImagenes(
    //function(r) {
        //console.log(r)
    //},
    //function(r) {
        //console.log('Ocurrió un error')
    //},
//)
