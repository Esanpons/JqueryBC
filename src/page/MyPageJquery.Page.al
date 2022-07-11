page 60000 "MyPageJquery"
{
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Administration;
    SourceTable = Customer;


    layout
    {
        area(Content)
        {
            usercontrol("Jquery"; Jquery)
            {

                trigger ControlAddInReady()
                begin
                    CurrPage.Jquery.InitHtml();
                    CurrPage.Jquery.SetDataText('Hola Mundo');
                    CurrPage.Update(false);
                    CurrPage.Jquery.InitHtml2();
                end;


            }

        }
    }

    trigger OnAfterGetCurrRecord()
    begin
        CurrPage.Jquery.SetDataText('Hola Mundo');
    end;

}



