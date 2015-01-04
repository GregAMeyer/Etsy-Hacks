//this is the main one
//ideal version that allows user to input how many people he wants to message
var x = prompt("You want to send this message to the first (number<=10?) of people in the list below?");
var subject_text = prompt("What should the subject be?");
var message_text = prompt("What should the message be?");

for(var a=1; a<=x; a++) {
	$.get(('.user-name a')[a].href, function(body){
		$.get( $(body).find(".contact-action").href, function(contactForm){
			$(contactForm).find("input.text").val("subject_text"); //line works on its own
			$(contactForm).find("textarea.text").val("message_text"); //line works on its own
			setTimeout(100);
			$(contactForm).find("button.btn-primary").submit(); //line works on its own
		});
	});
}

 //attempting to just do all of them on the page, forget the for loop
var subject_text = prompt("What should the subject be?");
var message_text = prompt("What should the message be?");

$('html').find('.user-name a').map(function(i,el) {return el})
	.each(function(i, el) {
		$.get(el.href, function(body){
			setTimeout(100);
		$.get( $(body).find(".contact-action").href, function(contactForm){
			setTimeout(100);
			$(contactForm).find("input.text").val("subject_text"); //line works on its own
			$(contactForm).find("textarea.text").val("message_text"); //line works on its own
			setTimeout(100);
			$(contactForm).find("button.btn-primary").submit(); //line works on its own
		});
	});
})

//get rid of the clicks on contact because it's technically not needed?
var subject_text = prompt("What should the subject be?");
var message_text = prompt("What should the message be?");

$('html').find('.user-name a').map(function(i,el) {return el})
	.each(function(i, el) {
		$.get(el.href, function(){
			setTimeout(1000);
			$('html').find("input.text").val("subject_text"); //line works on its own
			$('html').find("textarea.text").val("message_text"); //line works on its own
			setTimeout(100);
			$('html').find("button.btn-primary").submit(); //line works on its own
		});
	})

/*
Ideal Version:
1. prompt user for X number of people, subject, and message - store responses 
in variables X, subject_text, and message_text.
2. put each <a href> of <div class="user-name"> into an array "estyLeads"
(don't have to do this)
3. for array elements 0 through X-1, click on it (get)
(don't have to do this either)
4. then click on the "contact" link button - 
an <a class="contact-action" 
href="https://www.etys.com/conversations/new?with_id=...">
(technically don't have to do that either, i don't think?)
5. clicking that contact button makes the contact form div appear 
(though, technically this is already present in the html without having to click on it)
with a subject area and a message area for typing -
<input class="text" type="text" name="subject">
<textarea class="text" name="message">
6. enter into the subject the variable "subject_text" and into message the variable "message_text"
7. hit submit button
Extra:
 also click on the link to add follow, an <a> in a <div class = "user-add-circle"> (might want to do this first)
*/


//$("html").find("div.user-name > a").map(function(){ return this.href; }) //also works
//var etsyLeads = $('.user-name a').map(function() { return this.href; }).get()
//works!!!!

/* Craigslist code

var emails = "";
$(".txt").find("a.hdrlnk").map(function(i, el) { return el })
.each(function(i, el) { 
  $.get(el.href, function(body) { 
    $.get( $(body).find("#replylink")[0].href, function(linkbody) {
          var email = $(linkbody).find(".mailto")[0].innerText + ',';
          emails += email;
    })
  })
})
setTimeout(function() { 
  console.log('emails: ' + emails);
}, 5000)
*/