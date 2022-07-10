//https://summernote.org/

controladdin "Jquery"
{
    Scripts = 'src/controladdin/Jquery/js/Scripts.js',
        'https://code.jquery.com/jquery-3.6.0.min.js';

    StyleSheets = 'src/controladdin/Jquery/css/Style.css';

    StartupScript =
        'src/controladdin/Jquery/js/Startup.js';

    Images = 'src/controladdin/Jquery/images/ajax-loader.gif',
            'src/controladdin/Jquery/images/corazon.jpg';

    RequestedHeight = 1200;
    MinimumHeight = 1200;
    MaximumHeight = 1200;
    RequestedWidth = 1200;
    MinimumWidth = 1200;
    MaximumWidth = 1200;
    VerticalShrink = true;
    VerticalStretch = true;
    HorizontalShrink = true;
    HorizontalStretch = true;

    event ControlAddInReady();
    procedure SetDataText(SetText: Text);

    procedure InitHtml();

}