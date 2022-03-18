//primeira atividade Map
function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
           admins.push(key);
        }
    }
    return admins;

}

const usuarios = new Map();

usuarios.set('agno','Admin');
usuarios.set('geisa','Admin');
usuarios.set('pedro','user');
usuarios.set('jorge','Admin');
usuarios.set('andre','User');

console.log(getAdmins(usuarios));

//segunda atividade set
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    return [...mySet];
}

console.log(valoresUnicos(meuArray));