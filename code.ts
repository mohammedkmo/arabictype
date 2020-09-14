// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.




figma.ui.resize(300,400);



figma.ui.onmessage = async msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.



  if(msg.type === 'req:setText'){

    let selections  = figma.currentPage.selection['0'];
    if(selections){
      await figma.loadFontAsync(selections.fontName as FontName)
      selections.characters = msg.reText.split("\n").reverse().join("\n");
      selections.name = msg.textbox;
    

    }
    return 
  }

  if(msg.type === 'cancel'){
    figma.closePlugin();
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};


  

  figma.ui.postMessage(
  
    figma.currentPage.selection['0'].characters
   
  
  );
 
  


