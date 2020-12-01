

(function (global) {

    var dc = {};
    

var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };


dc.loadPerson = function (person_number) {
    html="<div id=person-info> <h2> Kramushka </h2> <button id='closer' onclick='$dc.closePersonInfo(&quot;Kramushka&quot;)';>Закрыть</button> </div>"
    insertHtml('#person-info-holder',html)
};

dc.closePersonInfo = function () {
    html=" "
    insertHtml('#person-info-holder',html)
};

global.$dc = dc;

})(window);
