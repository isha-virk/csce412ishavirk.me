var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    style_elem = document.getElementById("style");
    
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    current = style_elem.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
   if(current == "style1.css"){
    current = "style2.css";
   }
   else{
    current = "style1.css";
   }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    style_elem.setAttribute("href", current);


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("current_sheet", current);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    cur_style = localStorage.getItem("current_sheet");
    if(cur_style == null){
        style_elem = document.getElementById("style");
        style_elem.setAttribute("href", "style1.css");
    }
    else{
        // 2 (b) get html style element by ID
        new_style = document.getElementById("style");

        // 2 (c) replace href attribute of html element.
        new_style.setAttribute("href", cur_style);
    }
}

