function makePerson (list,id) {
    personData = list.find(x => x.Number === id)
    let fio = personData.Family_name + " " + (personData.Birth_family_name ? "(" + personData.Birth_family_name + ") " : "") 
            + personData.First_name + " " + personData.Fathers_name;
    let person = `<div class = "card-box"> <div class="person ${personData.Sex === "m" ? "male" : "female"}"> 
                    <div class="card-front"> 
                        <img src='Images/tree.png' alt = 'drevo'> 
                        <p class = 'fio'>${fio}</p></div>
                    <div class="card-back"> 
                        <p class=fio>${fio}</p>
                        ${personData.Death_date ? `<p class="dates-of-life"> Даты жизни: ${personData.Birth_date}-${personData.Death_date}` : `<p class="birthday"> Дата рождения: ${personData.Birth_date}`} </p>
                        <button onclick="$dc.loadPerson(${personData.Number});">Больше</button></div></div></div>`

    let children = personData.Children;

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

    return parsed

}

async function makeatree() {
    let parsed = await getData()

    htmlTree = makePerson(parsed,1);

    document.querySelector(".outer li").innerHTML = htmlTree;
}

makeatree();