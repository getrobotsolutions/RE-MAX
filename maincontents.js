conf_count = 0;
        var jokes = new Array( );
        jokes[1]="How does a dual agent sleep? Well, first he lies on one side, then he lies on the other.";
        jokes[2]="Did you hear about the last remaining unit in the apartment building? It was last but not leased.";
        jokes[3]="What does a house wear? Address.";
        jokes[4]="What kind of building weighs the least? A lighthouse.";
        jokes[5]="How many insects do you need to make money from your rental unit? Tenants.";
        jokes[6]="Why did the hipster real estate agent refuse to show the riverfront property?  It was too current.";
        jokes[7]="My bread and butter are listings with finished basements. They’re my best cellars!";
        jokes[8]="Why did the house go to the doctor? It had a window pane.";
        jokes[9]="What’s the difference between a Realtor and a Mortgage Broker? The Mortgage Broker knows he’s boring.";
        jokes[10]="What's a real estate agent's favorite sexual position?  The comissionary position.";
        jokes[11]="What does a real estate agent use for birth control?  Their personality.";
        jokes[12]="My realtor sold me a two story house. I got one story before I bought it and another afterwards.";

        var speak = new Array( );
        speak[0] = "try your luck with our slot machine";
        speak[1] = "Take a picture with me.";
        speak[2] = "Pick a song and let's boogie.";
        speak[3] = "Become a robot.";
        speak[4] = "see our pictures from today on our slack channel";
        speak[5] = "";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("Hi, I’m Tracey, welcome to the Novartis booth. Please click around on my screen and then speak to my smart human friends in the booth.");
            break;
        case "Home":
            //writeCookie("NavigationState", true, 30);
           location.href = "../../maincontents.htm";
           break;
           
        case "SlotMachine":
            location.href = "Contents/SlotMachine/index.html";
            //PlaySpeech(speak[0]);
            break;

        case "Videos":
            location.href = "Contents/Videos/index.html";
            //PlaySpeech(speak[5]);
            break;

        case "Selfie":
            location.href = "Contents/Selfie/index.html";
            PlaySpeech(speak[1]);
            break;

        case "Dance":
            location.href = "Contents/Dance/index.html";
            PlaySpeech(speak[2]);
            break;

        case "Avatar":
            location.href = "Contents/RobotAvatar/index.htm";
            PlaySpeech(speak[3]);
            break;
        
        
            
        case "Config":
            if(conf_count === 3)
            {
                conf_count = 0;
                location.href = "Config/Config.htm";
            }
            else
            {
                conf_count++;
                console.log(conf_count);
            }

            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    //PlaySpeech("Hello, welcome to the BWl Airport. Please press a button on my screen to begin.");
}


function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}
function ShowPopupForm(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').style.display = "block";
    //document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}



$(document).ready(function(){

    //$('.navigation').hide();
    /*$('.get-started').click(function(){
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
        
    });
    if (readCookie("NavigationState")) {
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
    }
    $('.close-menu').click(function(){
        $('.navigation').hide();
        $('.welcome-text, .get-started, footer').show();
        writeCookie("NavigationState", false, 30);
    });*/
    

    $('a.close').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });

  


});

function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
           // window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Take a picture with me");     
    }

    if(btn_info[1] == '1'){
        //window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Welcome to the RE MAX Showcase Booth");
        
    }
    if(btn_info[2] == '1'){
        //window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Would you like to see me dance?");
    }
    if(btn_info[3] == '1'){
        //window.external.ChangeLanguage("en-us");
        SetVolume(1);
       window.external.PlaySpeech("Want to become a robot?");
        
    }
    if(btn_info[4] == '1'){
        FC_ContentsCall('Config');       
    }
}

var textArray = new Array( );
textArray[1]="No Fees";
textArray[2]="Technology";
textArray[3]="Education";
textArray[4]="Leads"; 
textArray[5]="Robots"; 
textArray[6]="Charity";
textArray[7]="Guidance";
textArray[8]="The Best";
textArray[9]="Entrepreneurial spirit";
textArray[10]="Support";
textArray[11]="Competitive splits";
 




var i=2;

var myVar = setInterval(changeText, 5000);

function changeText() { 

    $('#changetext').fadeOut(1000, function() {
        if (i>11) 
            i=1;
        /*else
            i=2;*/
        $(this).html('<p>' + textArray[i] + '</p>').fadeIn(1000);
        i++;
        //alert(i);
        
    });
}