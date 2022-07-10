var controlAddIn;
var TextDiv1, BtnButton1;

function InitHtml() {
    controlAddIn = $("#controlAddIn");

    cargando();
}

function todoElHtmlInicial() {

    var text = 'Inicio';

    controlAddIn.html(
        `
        <div id="div1">`+ text + `...</div>
        <br />
        <input type="button" id="button1" value="Cambiar texto" />
        <input type="button" id="button2" value="Toggle" />
        <input type="button" id="button3" value="FadeIn" />
        <input type="button" id="button4" value="hover" />

        <br />
        <br />
        <br />

        <p> 1 línea </p>
        <p> 2 línea </p>
        <p> 3 línea </p>
        <input type="button" id="button5" value="Propiedades CSS" />

        <br />
        <br />
        <br />

        <div id="imagenes"></div>
        <input type="button" id="button6" value="remove Image" />
        
        <br />
        <input type="button" id="button7" value="Cargando" />

        <br />
        `
    );

    var br = $("<br />");
    controlAddIn.append(br);

    //una manera diferente de añadir html
    //https://ksdconsultancy.blog/2019/01/05/control-add-in-in-business-central/
    var par = $("<p />", { id: "p1" });
    par.html("nueva línea");
    controlAddIn.append(par);

    var par2 = $("<p />", { id: "p2" });
    par2.html("nueva línea2");
    controlAddIn.append(par2);


    var img = $("<img />", { id: "imgCorazon", src: Microsoft.Dynamics.NAV.GetImageResource("src/controladdin/Jquery/images/corazon.jpg") });
    $("#imagenes").append(img);

    controlAddIn.append(br);
    controlAddIn.append(br);
    controlAddIn.append(br);

    var bt8 = $("<input />", { type: "button", id: "button8", value: "Quitar TODO y añadir HTML jQuery UI" });
    controlAddIn.append(bt8);

    //esto equivaldria al $(document).ready
    var NuevoTexto = "Nuevo Hola";
    $("#button1").click({ value: NuevoTexto }, notify);
    $("#button2").click(toggle);
    $("#button3").click(FadeIn);
    $("#button4").hover(HoverAndSlide);
    $("#button5").click(CssJquery);
    $("#button6").click(removeImage);
    $("#button7").click(cargando);
    $("#button8").click(RemoveAndAddJqueryUI);

}

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



function notify(Mgs) {
    $('#div1').html('hola boton: ' + Mgs.data.value);
}
function toggle(clickEventObject) {
    //Esto muestra el evento del boton
    console.log(clickEventObject);
    //oculta y desoculta
    $('#div1').toggle(500);
}
function FadeIn() {
    //oculta y desoculta pero primero hace que desaparezca
    $('#div1').fadeToggle(500);
}
function HoverAndSlide() {
    //oculta y desoculta mientras lo estes tocando
    $('#div1').slideToggle(1000);
}

function CssJquery() {
    $('p').css("font-family", "Arial").css("color", "green");
}

function removeImage() {
    $("#imgCorazon").remove();
}

async function cargando() {
    //funcion para emular el tiempo de espera se requiere el async
    var divCargando = $("<div />", { id: "divCargando" });
    var imgCargando = $("<img />",
        { id: "imgCargando", src: Microsoft.Dynamics.NAV.GetImageResource("src/controladdin/Jquery/images/ajax-loader.gif") });
    divCargando.append(imgCargando);
    controlAddIn.append(divCargando);

    for (let i = 0; i < 2; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 1000);
    }

    console.log('Done');
    //elimina el div creado para que se quite el cargando
    $("#divCargando").remove();

    todoElHtmlInicial();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function RemoveAndAddJqueryUI() {
    controlAddIn.html('');
    HtmlJqueryUI();
}


function SetDataText(SetText) {
    console.log('SetText');
    $('#div1').html(SetText);
}
