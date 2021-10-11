// const title = document.getElementById('Nombre');
// console.log(title.textContent);
// let nom = prompt("Ingresá tu nombre");
// title.textContent = nom;

const sex = document.getElementById('sexo');

//creo un Li
const li = document.createElement('LI');
//Creo el Item
const item = document.createElement('INPUT');
item.setAttribute('type', 'radio');
item.setAttribute('name', 'sexo');
item.setAttribute('value', 'indefinido');
//Creo el label pra el item
const lab = document.createElement('LABEL');
lab.textContent = ' Indefinido';

li.appendChild(item);
li.appendChild(lab)

//Agrego el item a la lista
sex.appendChild(li)
