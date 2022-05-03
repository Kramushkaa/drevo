

(function (global) {

    var dc = {};
    

var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };


dc.loadPerson = async function (id) {
    let parsed=await getData()
    let personData = await parsed.find(x => x.Number === id)
    let fio = personData.Family_name + " " + (personData.Birth_family_name ? "(" + personData.Birth_family_name + ") " : "") 
            + personData.First_name + " " + personData.Fathers_name;
    let html=`<div id=person-info> 
                <button id='closer' onclick='$dc.closePersonInfo(${personData.Number})';>Закрыть</button>
                <h2> ${fio} </h2> 
                <p> Дата рождения: ${personData.Birth_date} </p>
                <p> Родной город: ${personData.Birth_city} </p>`
    if (personData.Death_date) {
        html += `<p> Дата смерти: ${personData.Death_date}
        <p> Похоронен: ${personData.Current_city} </p>`
    } else {
        html += `<p> Сейчас живёт: ${personData.Current_city} </p>`
    }
    if (personData.Children.length>0) {
        html += `<div id="children"> <h3> Дети </h3>`
        for (child of personData.Children) {
            let childData = await parsed.find(x => x.Number === child)
            let fio = childData.Family_name + " " + (childData.Birth_family_name ? "(" + childData.Birth_family_name + ") " : "") 
            + childData.First_name + " " + childData.Fathers_name;
            html += `<div class="child"> ${fio} <button onclick="$dc.loadPerson(${childData.Number});">Перейти</button></div>`
        }
        html += `</div>`
    }
    html += `</div>`
    insertHtml('#person-info-holder',html)
};

dc.closePersonInfo = function () {
    html=" "
    insertHtml('#person-info-holder',html)
};

global.$dc = dc;

})(window);
