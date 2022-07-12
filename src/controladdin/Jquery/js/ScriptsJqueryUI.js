//*********************************************************************************************************************
//jQuery UI
//*********************************************************************************************************************
function HtmlJqueryUI() {
    //creamos un titulo y lo añadimos al parrafo
    var par1 = $("<p />", { id: "p1" });
    var h1Par1 = $("<h1 />");
    h1Par1.html("HTML jQuery UI");
    par1.append(h1Par1);
    controlAddIn.append(par1);

    var br = $("<br />");
    controlAddIn.append(br);

    //me he quedado aquí:  https://www.udemy.com/course/draft/21679/learn/lecture/271345#questions

}