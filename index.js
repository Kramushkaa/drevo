function makePerson (list,id) {
    personData = list.find(x => x.Number === id)
    let person = `<div> <img src='Images/tree.png' alt = 'drevo'> 
        <p class = 'fio'> ${" " + personData.Birth_family_name || "" + ") "}${personData.Family_name} 
        ${personData.First_name} ${personData.Fathers_name}</p>`;
    if (personData.children.length > 0) {
        person += `<ul>`
        for (let i = 0; i < personData.children.length; i++) {
            person += `<li> + ${makePerson (list,personData.children[i])} + </li>`
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