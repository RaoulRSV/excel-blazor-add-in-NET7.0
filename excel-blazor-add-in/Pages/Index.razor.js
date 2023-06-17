/* Copyright(c) Maarten van Stam. All rights reserved. Licensed under the MIT License. */
/**
 * Basic function to show how to insert a value into cell A1 on the selected Excel worksheet.
 */
//office.ready(function () {    
  //export function helloButton() {

  //      return Excel.run(context => {

  //          // Insert text 'Hello world!' into cell A1.
  //          context.workbook.worksheets.getActiveWorksheet().getRange("A1").values = [['Hello world!']];

  //          // sync the context to run the previous API call, and return.

  //          return context.sync();
  //      });

  //  }
var dataToPassToService = {
    "Feedback": "f",
    "Rating": "r",
    "Activité": "a"
};
(window).lancerchaîné = async (event) => {
    console.log("lancerchaîné30");
    try {
        await callStaticLocalComponentMethod();
    }
    catch (err) {
        console.log();
        console.log("erreur lancer : " + err.message);
    }
    console.log("eventlancer Completed");
    event.completed();
}
//(window).initialiser = async (event) => {
//    console.log("initialiser");
//    try {
//        callStaticLocalComponentMethodinit();
//    }
//    catch (err) {
//        console.log();
//        console.log("erreur init : " + err.message);
//    }
//    console.log("eventinit  Completed");
//    event.completed();
//}
async function callStaticLocalComponentMethod() {
    console.log("avant");
    try {      
        var dato = "lancé";
        var jsObjectReference = DotNet.createJSObjectReference(window);
        dato = await DotNet.invokeMethodAsync("BlazorAddIn", "Localfunction", jsObjectReference, dataToPassToService);
        DotNet.disposeJSObjectReference(jsObjectReference);
        //dato = await DotNet.invokeMethodAsync("BlazorAddIn", "Localfunction");
        console.log("fin lancé : " + dato);       
    }
    catch (err) {
        console.log();
        console.log("erreur call : " + err.message);
    }
    finally {      
        console.log("aprèslancé : " );
    }

}
//async function callStaticLocalComponentMethodinit() {
//    console.log("avant");
//    try {       
//        var dato = "init";       
//        dato = await DotNet.invokeMethodAsync("BlazorAddIn", "Localfunctioninit");
//        console.log("fin init : " + dato)       
//    }
//    catch (err) {
//        console.log();
//        console.log("erreur call : " + err.message);
//    }
//    finally {
//        console.log("aprèsinit : " );
//    }
   
//}

