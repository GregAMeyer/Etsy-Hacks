//based on "etsy hacks" code, which is based on craigslist hack.
//var etsyLeads = $('.user-name a').map(function() { return this.href; }).get();
for(var a=0; a<=x; a++) {
	$.get(('.highlight a')[a].href, function(body){
		$.get( $(body).find("#convo-overlay").href, function(contactForm){
			$(contactForm).find("input.text").val("subject_text"); //works on its own
			$(contactForm).find("textarea.text").val("message_text"); //works on its own
			$(contactForm).find("button.btn-primary").submit(); //works on its own
		});
	});
}


$('html').find('.highlight a').map(function(i,el) {return el}).each(function(i, el) {
		$.get(el.href, function(body){
			setTimeout(100);
		$.get( $(body).find(".contact-action").href, function(contactForm){
			setTimeout(100);
			$(contactForm).find("input.text").val("Mugshot Mug You Favorited!"); //line works on its own
			$(contactForm).find("textarea.text").val("Hey There, We noticed you favorited one of our Mugshot Mugs! Glad to hear you like the product. As a way of showing our apprecitation, we'd like to offer you the chance to take 15% off you order. If you fill out the survey at www.surveymonkey.com/s/69Y675Z we'll send you a coupon for 15% off your next order! Thanks, Mugshot Mugz"); //line works on its own
			setTimeout(100);
			$(contactForm).find("button.btn-primary").submit(); //line works on its own
		});
	});
})



/*
Mugshot Mug You Favorited

Hey There,
We noticed you favorited one of our Mugshot Mugs!
Glad to hear you like the product. As a way of showing our apprecitation,
we'd like to offer you the chance to take 15% off you order.
If you fill out the survey at www.surveymonkey.com/s/69Y675Z 
we'll send you a coupon for 15% off your next order!

Thanks,
Mugshot Mugz
*/
