/*----------------------------------------------------------------------------------------------------------------------------------------
  ------------------------------------------------ ARRAYS, VARIABLES, OBJECTS ------------------------------------------------------------
  ----------------------------------------------------------------------------------------------------------------------------------------*/

// Variables
let previousScrollPosition = window.pageYOffset;

const currentHtml = document.currentScript.getAttribute("currentHtml");         // Get file name of HTML that is calling this script.js
//console.log(`currentHtml: ${currentHtml}`);


// Only create these variables or objects when executing script.js from certain html files
if ((currentHtml=="html_sheet_page.html") || (currentHtml=="css_sheet_page.html") || (currentHtml=="js_sheet_page.html")) {
    
    //Aside Resources Element Objects
    myAsideResources = document.getElementById("aside-resources");              // Initializing without declaration (on purpose) to make it a global variable
    
    //BUTTON Element Objects
    myButtonResources = document.getElementById("button-resources");            // Initializing without declaration (on purpose) to make it a global variable
    myButtonResourcesClose = document.getElementById("button-resources-close"); // Initializing without declaration (on purpose) to make it a global variable 
}


/*----------------------------------------------------------------------------------------------------------------------------------------
  -------------------------------------------------------------- FUNCTIONS ---------------------------------------------------------------
  ----------------------------------------------------------------------------------------------------------------------------------------*/
/**
 * Function to display the Resources aside element.
 */
function functionShowResources() {
    myAsideResources.style.display = "block";
}

/**
 * Function to hide the Resources aside element.
 */
function functionHideResources() {
    myAsideResources.style.display = "none";
}


/**
 * Function to hide navbar when scrolling down and show navbar when scrolling up
 */
function functionAnimateNavbar() {
var currentScrollPosition = window.pageYOffset;
  if (previousScrollPosition > currentScrollPosition) {
    document.getElementById("navbar").style.top = "0";
  }
  else {
    document.getElementById("navbar").style.top = "-100px";
  }
  previousScrollPosition = currentScrollPosition;
}


/*----------------------------------------------------------------------------------------------------------------------------------------
  ------------------------------------------------------- CALL FUNCTIONS -----------------------------------------------------------------
  ----------------------------------------------------------------------------------------------------------------------------------------*/

window.onscroll = functionAnimateNavbar;

// Only call these functions when executing script.js from certain html files
if ((currentHtml=="html_sheet_page.html") || (currentHtml=="css_sheet_page.html") || (currentHtml=="js_sheet_page.html")) {
    
    //Link functions to buttons
    myButtonResources.onclick = functionShowResources;
    myButtonResourcesClose.onclick = functionHideResources;
  }