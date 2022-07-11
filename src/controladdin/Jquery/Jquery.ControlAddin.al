//https://summernote.org/

controladdin "Jquery"
{
    Scripts = 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-debug.js',
    'src/controladdin/Jquery/js/Scripts.js',
        'src/controladdin/Jquery/js/jquery-3.6.0.min.js';

    StyleSheets = 'src/controladdin/Jquery/css/Style.css';

    StartupScript =
        'src/controladdin/Jquery/js/Startup.js';

    Images = 'src/controladdin/Jquery/images/ajax-loader.gif',
            'src/controladdin/Jquery/images/corazon.jpg',
            'src\controladdin\Jquery\html\main.html';

    RefreshScript = 'src/controladdin/Jquery/js/Refresh.js';



    RequestedHeight = 1200;

    RequestedWidth = 1200;

    event ControlAddInReady();
    procedure SetDataText(SetText: Text);

    procedure InitHtml();
    procedure InitHtml2();


}