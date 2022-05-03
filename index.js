function makePerson (list,id) {
    list.find(x => x.Number === id)
    let person = `<div> <img src='Images/tree.png' alt = 'drevo'> 
        <p class = 'fio'> ${" " + x.Birth_family_name || "" + ") "}${x.Family_name} ${x.First_name} ${x.Fathers_name}</p>`;
    if (x.children.length > 0) {
        person += `<ul>`
        for (let i = 0; i < x.children.length; i++) {
            person += `<li> + makePerson (list,x.children[i]) + </li>`
        }
        person += `/<ul>`
    }

    person += `</div>`
    return person
}

async function getData () {
    let response = await fetch('datafile.json');

    let parsed = await response.json(); 

    console.log(makePerson(parsed,1))
}

getData();