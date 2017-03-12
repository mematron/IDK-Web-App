/* 
This is the code for the various triggers for the IDK (I Don't Know) Web Application.  
© 2008-09 Apple Computer, created by Jason L. German german@apple.com for the Apple Store
 */
 
    // Web application start. Get the things that HTML needs

function load()
{
    dashcode.setupParts();
}


function myClickHandler(event)
{
    // On click OMNISCAN!
var browser = document.getElementById('browser').object;  // Replace with id of Browser
browser.goForward('iPhone3GView', 'iPhone 3G');  // iPhone 3G info page
}


function myClickHandler1(event)
{
    // Goto iPhone New Features page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('newfeatures', 'New Features');  // New Features page explains iPhone capabilites

}


function myClickHandler3(event)
{
    // On click goto iPhone Availibility page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('worldtour', 'Availibility');  // iPhone Availibility page

}


function myClickHandler2(event)
{
    // On click goto iPhone North American page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('northamerica', 'North America');  // Goto the North American page

}


function myClickHandler4(event)
{
    // On click goto iPhone Central and South America page. Are you still reading this?
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('centralandsoutham', 'South America');  // Goto Central and South America page

}


function myClickHandler5(event)
{
    // On click goto iPhone Africa Coming Soon page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('africa', 'Africa');   // Goto the Africa Coming soon page

}


function myClickHandler7(event)
{
    // On click goto iPhone Europe page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('europe', 'Europe');  // iPhone Europe page

}


function myClickHandler6(event)
{
    // On click goto iPhone European Coming Soon page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('europe_contd', 'Coming Soon');  // iPhone Coming Soon page for Europe
}


function myClickHandler8(event)
{
    // On click goto iPhone Asia Availibility page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('asia', 'Asia');  // iPhone Asia info page

}


function myClickHandler9(event)
{
    // On click goto iPhone Austrailia Info Availibilty page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('australia', 'Australia');  // iPhone Austrailia info page

}


function myClickHandler10(event)
{
    // On click goto iPhone Service Plan Info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('monthyplans', 'Monthy Plans');  // iPhone monthy service plans page

}



function myClickHandler13(event)
{
    // On click goto iPhone Individual Plan page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('individualplans', 'Individual Plans');  // iPhone Individual plan page

}



function myClickHandler11(event)
{
    // On click goto iPhone Family Plan page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('familyplans', 'Family Plans');  // iPhone Family Plan page

}


function myClickHandler12(event)
{
    // On click goto iPhone battery page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonebattery', 'Battery Life');  // iPhone Battery info page

}


function myClickHandler14(event)
{
    // On click goto iPhone Monthy plans page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('monthyplans', 'Monthly Plans');  // iPhone Monthy plans page

}


function myClickHandler15(event)
{
    // On click goto iPhone Waht *** what? O_o *** to Bring page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('whattobring', 'What to Bring');  // iPhone What to Bring page

}


function myClickHandler16(event)
{
    // On click goto iPhone Software page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonesoftware', 'iPhone Software');  // iPhone Software page

}


function myClickHandler17(event)
{
    // On click goto iPhone Home page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonehome', 'Home Screen');  // iPhone Home page

}


function myClickHandler18(event)
{
    // On click goto iPhone Phone page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonephone', 'Phone');  // iPhone Phone page

}


function myClickHandler19(event)
{
    // On click goto iPhone Mail page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonemail', 'Mail');  // iPhone Mail page

}


function myClickHandler20(event)
{
    // On click goto iPhone Safari page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonesafari', 'Safari');  // iPhone Safari page

}


function myClickHandler21(event)
{
    // On click goto iPhone iPod page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphoneipod', 'iPod');  // iPhone iPod page

}


function myClickHandler22(event)
{
    // On click goto iPhone SMS page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonesms', 'SMS');  //  iPhone SMS page.  SMS stands for Short Message Services

}


function myClickHandler23(event)
{
    // On click goto iPhone Maps with GPS page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonemapswithgps', 'Maps with GPS');  // iPhone Maps with GPS page.  GPS stands for Global Positioning Satellite

}


function myClickHandler24(event)
{
    // On click goto iPhone iTunes page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphoneitunes', 'iTunes');  // iPhone iTunes page

}


function myClickHandler25(event)
{
    // On click goto iPhone App Store
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphoneappstore', 'App Store');  // iPhone App Store page

}


function myClickHandler26(event)
{
    // On click goto iPhone Calendar page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonecalendar', 'Calendar');  // iPhone Calendar page

}


function myClickHandler27(event)
{
    // On click goto iPhone YouTube page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphoneyoutube', 'YouTube');  // iPhone YouTube page

}


function myClickHandler28(event)
{
    // On click goto iPhone Photos + Camera page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonephotoscamera', 'Photos + Camera');  // iPhone Photos + Camera page

}


function myClickHandler29(event)
{
    // On click goto iPhone Stocks, Weather, Notes page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonestocksweathernotes', 'Stocks, Weather, Notes');  // iPhone Stocks, Weather, and Notes page

}


function myClickHandler30(event)
{
    // On click goto iPhone Calculator page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('calculator', 'Calculator');  // iPhone Calculator page

}


function myClickHandler31(event)
{
    // On click goto Mail Settings page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('mailsettings', 'Mail Settings');  // Mail Settings page

}


function myClickHandler32(event)
{
    // On click goto AppleTV page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('appletv', 'AppleTV');  // AppleTV page

}


function myClickHandler33(event)
{
    // On click goto Current Promotions page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('currentpromotions', 'Current Promotions');  // Current Promotions page

}


function myClickHandler34(event)
{
    // On click goto MobileMe page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('mobileme', 'MobileMe');  // MobileMe page

}


function myClickHandler35(event)
{
    // On click goto Apple Care page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('applecare', 'Apple Care');  // Apple Care page

}


function myClickHandler36(event)
{
    // On click goto Installs page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('installs', 'Installs');  // Installs page

}


function myClickHandler37(event)
{
    // On click goto One to One page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('onetoone', 'One to One');  // One to One page

}


function myClickHandler38(event)
{
    // On click goto Video Ports and Adapters page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('videoportsandadapters', 'Video Ports and Adapters');  // Video Ports and Adapters page

}


function myClickHandler39(event)
{
    // On click goto Educational Discounts page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('educationaldiscounts', 'Educational Discounts');  // Educational Discounts page

}


function myClickHandler42(event)
{
    // On click goto Phone Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('phonesoft', 'Phone');  // Phone Software info page

}


function myClickHandler43(event)
{
    // On click goto Calculator Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('calculatorsoft', 'Calculator');  // Calculator Software info page
}


function myClickHandler44(event)
{
    // On click goto Home Screen info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('iphonehome', 'Home Screen');  // Home Screen info page

}


function myClickHandler45(event)
{
    // On click goto Mail Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('mailsoft', 'Mail');  // Mail Software info page

}


function myClickHandler46(event)
{
    // On click goto Safari Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('safarisoft', 'Safari');  // Safari Software info page

}


function myClickHandler47(event)
{
    //  On click goto iPod Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('ipodsoft', 'iPod');  // iPod Software info page

}


function myClickHandler48(event)
{
    //  On click goto SMS Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('smssoft', 'SMS');  // SMS Software info page

}


function myClickHandler40(event)
{
    // On click goto Maps With GPS Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('mapswithgpssoft', 'Maps With GPS');  // Maps With GPS Software info page

}


function myClickHandler41(event)
{
    // On click goto iTunes Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('itunessoft', 'iTunes');  // iTunes Software info page

}


function myClickHandler49(event)
{
    // On click goto App Store Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('appstoresoft', 'App Store');  // App Store Software info page

}


function myClickHandler50(event)
{
    // On click goto Calendar Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('calendarsoft', 'Calendar');  // Calendar Software info page

}


function myClickHandler51(event)
{
    // On click goto YouTube Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('youtubesoft', 'YouTube');  // YouTube Software info page

}


function myClickHandler52(event)
{
    // On click goto Photos + Camera Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('photoscamerasoft', 'Photos + Camera');  // Photos + Camera Software info page

}


function myClickHandler53(event)
{
    // On click goto Stocks, Weather, Notes Software info page
var browser = document.getElementById('browser').object; // Replace with id of Browser
browser.goForward('stocksweathernotessoft', 'Stocks, Weather, Notes');  // Stocks, Weather, Notes Software info page

}
