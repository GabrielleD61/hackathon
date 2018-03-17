/* global $ */

console.log('hi');
//  This code receieves the note written and stores it in the journal

var accessNotes= window.localStorage.getItem("notes");
var notes= JSON.parse(accessNotes) || [];;


$("#release").click(function() {
    var thoughtsInput= $("#Thoughts").val();
    $("#addThoughts").html(thoughtsInput);
    notes.push(thoughtsInput);
    window.localStorage.setItem("notes", JSON.stringify(notes));
   for(var x=0; x < notes.length; x++){
    var child= notes[x];
    $("#pArchivedNotes").append("<li>" + child + " " + "</li> <br>");
} 
});


$(function () {
  $('[data-toggle="popover"]').popover();
});


//  This code receieves the note written and stores it in the journal

