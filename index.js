function makePerson (list,id) {
    personData = list.find(x => x.Number === id)
    let person = `<div> <img src='Images/tree.png' alt = 'drevo'> 
        <p class = 'fio'> ${(personData.Birth_family_name ? "(" + personData.Birth_family_name + ") " : "")}${personData.Family_name} 
        ${personData.First_name} ${personData.Fathers_name}</p></div>`;
    let children = personData.Children
    console.log(children.length)
    if (children.length > 0) {
        person += `<ul>`
        for (let i = 0; i < children.length; i++) {
            person += `<li> ${makePerson (list,children[i])} </li>`
        }
        person += `</ul>`
    }

    return person
}

async function getData () {
    let response = await fetch('datafile.json');

    let parsed = await response.json(); 

    htmlTree = makePerson(parsed,1);

    document.querySelector(".outer li").innerHTML = htmlTree;
}

getData();