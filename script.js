

//select the titles
var simpleLink = document.querySelector(".simple");
var speedyLink = document.querySelector(".speedy");
var easyLink = document.querySelector(".easy");

//select the tabs
var simpleTab = document.querySelector(".tab-1");
var speedyTab = document.querySelector(".tab-2");
var easyTab = document.querySelector(".tab-3");

//select the containers and texts
var simpleContain = document.querySelector("#container-1");
var speedyContain = document.querySelector("#container-2");
var easyContain = document.querySelector("#container-3");

var simpleTxt = document.querySelector(".text-1");
var speedyTxt = document.querySelector(".text-2");
var easyTxt = document.querySelector(".text-3");
//for titles

simpleLink.addEventListener("click", function() {

// add active and clicked calsses to the titles of features
	speedyLink.classList.add("active");
	speedyLink.classList.remove("clicked");
	easyLink.classList.add("active");
	easyLink.classList.remove("clicked");
	simpleLink.classList.remove("active");
	simpleLink.classList.add("clicked");

//add the active class to the tab when click on the link
	speedyTab.classList.remove("visible");
	easyTab.classList.remove("visible");
	simpleTab.classList.add("visible");

});


speedyLink.addEventListener("click", function() {

	// add active and clicked calsses to the titles of features
	simpleLink.classList.add("active");
	simpleLink.classList.remove("clicked");
	easyLink.classList.add("active");
	easyLink.classList.remove("clicked");
	speedyLink.classList.remove("active");
	speedyLink.classList.add("clicked");

	//add the active class to the tab when click on the link
		simpleTab.classList.remove("visible");
		easyTab.classList.remove("visible");
		speedyTab.classList.add("visible");


});


easyLink.addEventListener("click", function() {

// add active and clicked calsses to the titles of features
	simpleLink.classList.add("active");
	simpleLink.classList.remove("clicked");
	speedyLink.classList.add("active");
	speedyLink.classList.remove("clicked");
	easyLink.classList.remove("active");
	easyLink.classList.add("clicked");

	//add the active class to the tab when click on the link
		simpleTab.classList.remove("visible");
		speedyTab.classList.remove("visible");
		easyTab.classList.add("visible");

});


// collapse the questions and answers

//select the collapse btns and answers

	var firstarr = document.querySelector(".btn-1");
	var secondarr = document.querySelector(".btn-2");
	var thirdarr = document.querySelector(".btn-3");
	var fourtharr = document.querySelector(".btn-4");

	var answerOne = document.querySelector(".content-1");
	var answerTwo = document.querySelector(".content-2");
	var answerThree = document.querySelector(".content-3");
	var answerFour = document.querySelector(".content-4");

	var questOne = document.querySelector(".quest-1");
	var questTwo = document.querySelector(".quest-2");
	var questThree = document.querySelector(".quest-3");
	var questFour = document.querySelector(".quest-4");


// for quset-1
		questOne.addEventListener("click", function() {

				//rotate the arrow when clicked

			firstarr.classList.toggle("rotate");
			secondarr.classList.remove("rotate");
			thirdarr.classList.remove("rotate");
			fourtharr.classList.remove("rotate");

			//collape the answer
			answerTwo.style.maxHeight = null;
			answerThree.style.maxHeight = null;
			answerFour.style.maxHeight = null;

			if (answerOne.style.maxHeight){
      	answerOne.style.maxHeight = null;
    } else {
      answerOne.style.maxHeight = answerOne.scrollHeight + "px";
    }

		});

//font btn-2

questTwo.addEventListener("click", function() {

		//rotate the arrow when clicked

	secondarr.classList.toggle("rotate");
	firstarr.classList.remove("rotate");
	thirdarr.classList.remove("rotate");
	fourtharr.classList.remove("rotate");

	//collape the answer
	answerOne.style.maxHeight = null;
	answerThree.style.maxHeight = null;
	answerFour.style.maxHeight = null;

	if (answerTwo.style.maxHeight){
	answerTwo.style.maxHeight = null;
} else {
	answerTwo.style.maxHeight = answerTwo.scrollHeight + "px";
}

});

//for btn-3

questThree.addEventListener("click", function() {

		//rotate the arrow when clicked

	thirdarr.classList.toggle("rotate");
	firstarr.classList.remove("rotate");
	secondarr.classList.remove("rotate");
	fourtharr.classList.remove("rotate");

	//collape the answer
	answerOne.style.maxHeight = null;
	answerTwo.style.maxHeight = null;
	answerFour.style.maxHeight = null;

	if (answerThree.style.maxHeight){
	answerThree.style.maxHeight = null;
} else {
	answerThree.style.maxHeight = answerThree.scrollHeight + "px";
}

});

//for btn-4

questFour.addEventListener("click", function() {

		//rotate the arrow when clicked

	fourtharr.classList.toggle("rotate");
	firstarr.classList.remove("rotate");
	secondarr.classList.remove("rotate");
	thirdarr.classList.remove("rotate");

	//collape the answer

	answerOne.style.maxHeight = null;
	answerTwo.style.maxHeight = null;
	answerThree.style.maxHeight = null;

	if (answerFour.style.maxHeight){
	answerFour.style.maxHeight = null;

} else {
	answerFour.style.maxHeight = answerFour.scrollHeight + "px";
}

//add border
questFour.style.borderBottomStyle = "none";
answerFour.style.borderBottomStyle = "solid";

/*
if (questFour.style.borderBottomStyle == "solid") {

	questFour.style.borderBottomStyle = "none";

	if(answerFour.style.borderBottomStyle == "none") {

		answerFour.style.borderBottomStyle = "solid";


	}

} else {

	questFour.style.borderBottomStyle = "solid";
	answerFour.style.borderBottomStyle = "none";

}
*/

});

//validate email input
var email = document.querySelector(".email-input");
var contact = document.querySelector(".contact-btn");
var errorMessage = document.querySelector(".error-msg");

function ValidateEmail(mail) {

 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {

		errorMessage.style.visibility = "hidden";
		return (true)
  }
    errorMessage.style.visibility = "visible";

    return (false)
	}

contact.addEventListener("click", function() {

	ValidateEmail();


});


//show the mobile side nav

document.querySelector(".menu-img").addEventListener("click", function() {

	document.querySelector(".mobile-nav").classList.add("active");
	

});

document.querySelector(".close").addEventListener("click", function() {

	document.querySelector(".mobile-nav").classList.remove("active");

});
