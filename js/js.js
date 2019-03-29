

// to blur each picture and hide the button
function blurOut1() {
	document.querySelector('.pic1').style.filter="blur(17px)";
	document.querySelector('.middle1').style.display="inline";
}

function blurOut2() {
	document.querySelector('.pic2').style.filter="blur(17px)";
	document.querySelector('.middle2').style.display="inline";
}

function blurOut3() {
	document.querySelector('.pic3').style.filter="blur(17px)";
	document.querySelector('.middle3').style.display="inline";
}

function blurOut4() {
	document.querySelector('.pic4').style.filter="blur(17px)";
	document.querySelector('.middle4').style.display="inline";
}

function blurOut5() {
	document.querySelector('.pic5').style.filter="blur(17px)";
	document.querySelector('.middle5').style.display="inline";
}

function blurOut6() {
	document.querySelector('.pic6').style.filter="blur(17px)";
	document.querySelector('.middle6').style.display="inline";
}

function blurOut7() {
	document.querySelector('.pic7').style.filter="blur(17px)";
	document.querySelector('.middle7').style.display="inline";
}

function blurOut8() {
	document.querySelector('.pic8').style.filter="blur(17px)";
	document.querySelector('.middle8').style.display="inline";
}

function blurOut9() {
	document.querySelector('.pic9').style.filter="blur(17px)";
	document.querySelector('.middle9').style.display="inline";
}

function blurOut10() {
	document.querySelector('.pic10').style.filter="blur(17px)";
	document.querySelector('.middle10').style.display="inline";
}

function blurOut11() {
	document.querySelector('.pic11').style.filter="blur(17px)";
	document.querySelector('.middle11').style.display="inline";
}

function blurOut12() {
	document.querySelector('.pic12').style.filter="blur(17px)";
	document.querySelector('.middle12').style.display="inline";
}

function blurOut13() {
	document.querySelector('.pic13').style.filter="blur(17px)";
	document.querySelector('.middle13').style.display="inline";
}

// function blurOut14() {
// 	document.querySelector('.pic14').style.filter="blur(17px)";
// 	document.querySelector('.middle14').style.display="inline";
// }

// function blurOut15() {
// 	document.querySelector('.pic15').style.filter="blur(17px)";
// 	document.querySelector('.middle15').style.display="inline";
// }

// function blurOut16() {
// 	document.querySelector('.pic16').style.filter="blur(17px)";
// 	document.querySelector('.middle16').style.display="inline";
// }

// function blurOut17() {
// 	document.querySelector('.pic17').style.filter="blur(17px)";
// 	document.querySelector('.middle17').style.display="inline";
// }

// function blurOut18() {
// 	document.querySelector('.pic18').style.filter="blur(17px)";
// 	document.querySelector('.middle18').style.display="inline";
// }

// function blurOut19() {
// 	document.querySelector('.pic19').style.filter="blur(17px)";
// 	document.querySelector('.middle19').style.display="inline";
// }




// to end each blur and hide the button
function endBlur1() {
	document.querySelector('.pic1').style.filter="none";
	document.querySelector('.middle1').style.display="none";
}

function endBlur2() {
	document.querySelector('.pic2').style.filter="none";
	document.querySelector('.middle2').style.display="none";
}

function endBlur3() {
	document.querySelector('.pic3').style.filter="none";
	document.querySelector('.middle3').style.display="none";
}

function endBlur4() {
	document.querySelector('.pic4').style.filter="none";
	document.querySelector('.middle4').style.display="none";
}

function endBlur5() {
	document.querySelector('.pic5').style.filter="none";
	document.querySelector('.middle5').style.display="none";
}

function endBlur6() {
	document.querySelector('.pic6').style.filter="none";
	document.querySelector('.middle6').style.display="none";
}

function endBlur7() {
	document.querySelector('.pic7').style.filter="none";
	document.querySelector('.middle7').style.display="none";
}

function endBlur8() {
	document.querySelector('.pic8').style.filter="none";
	document.querySelector('.middle8').style.display="none";
}

function endBlur9() {
	document.querySelector('.pic9').style.filter="none";
	document.querySelector('.middle9').style.display="none";
}

function endBlur10() {
	document.querySelector('.pic10').style.filter="none";
	document.querySelector('.middle10').style.display="none";
}

function endBlur11() {
	document.querySelector('.pic11').style.filter="none";
	document.querySelector('.middle11').style.display="none";
}

function endBlur12() {
	document.querySelector('.pic12').style.filter="none";
	document.querySelector('.middle12').style.display="none";
}

function endBlur13() {
	document.querySelector('.pic13').style.filter="none";
	document.querySelector('.middle13').style.display="none";
}

// function endBlur14() {
// 	document.querySelector('.pic14').style.filter="none";
// 	document.querySelector('.middle14').style.display="none";
// }

// function endBlur15() {
// 	document.querySelector('.pic15').style.filter="none";
// 	document.querySelector('.middle15').style.display="none";
// }

// function endBlur16() {
// 	document.querySelector('.pic16').style.filter="none";
// 	document.querySelector('.middle16').style.display="none";
// }

// function endBlur17() {
// 	document.querySelector('.pic17').style.filter="none";
// 	document.querySelector('.middle17').style.display="none";
// }

// function endBlur18() {
// 	document.querySelector('.pic18').style.filter="none";
// 	document.querySelector('.middle18').style.display="none";
// }

function showme() {
  setTimeout(function(){ document.querySelector('.page1').style.display="block"; }, 100);
  setTimeout(function(){ document.querySelector('.loading').style.display="none"; }, 100);
}

function screenSizeAlert () {
	const screenWidth = window.innerWidth;
	if (screenWidth < 576) {
		alert("For full user experience and maximum quality revisit our site from a Computer/Laptop. Or visit my Behance account.");
	};
};

screenSizeAlert();


function about() {
	var element = document.getElementById("port-nav");
    element.classList.remove("active-nav");
    var element1 = document.getElementById("contact-nav");
    element1.classList.remove("active-nav");
    var element2 = document.getElementById("about-nav");
    element2.classList.add("active-nav");
    document.querySelector('.main-content').style.display="none";
	document.querySelector('.main-content2').style.display="block";
	document.querySelector('.main-content3').style.display="none";
	
}

function portfolio() {
	var element3 = document.getElementById("about-nav");
    element3.classList.remove("active-nav");
    var element4 = document.getElementById("contact-nav");
    element4.classList.remove("active-nav");
    var element5 = document.getElementById("port-nav");
    element5.classList.add("active-nav");
	document.querySelector('.main-content').style.display="block";
	document.querySelector('.main-content2').style.display="none";
	document.querySelector('.main-content3').style.display="none";
}

function contact() {
	var element6 = document.getElementById("port-nav");
    element6.classList.remove("active-nav");
    var element7 = document.getElementById("about-nav");
    element7.classList.remove("active-nav");
    var element8 = document.getElementById("contact-nav");
    element8.classList.add("active-nav");
	document.querySelector('.main-content').style.display="none";
	document.querySelector('.main-content2').style.display="none";
	document.querySelector('.main-content3').style.display="block";
}



// // Type writer effect
// var i = 0;
// var txt = ''
// var speed = 10;


// setTimeout(function typeWriter() {
//   if (i < txt.length) {
//     document.querySelector(".CJ").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }, 100);


function reveal() {
	var container = document.querySelector(".showDown");
    container.classList.add("container-mod");
    document.querySelector('.Article').style.display="block";
    //document.querySelector('.quote').style.display="none";
    document.querySelector('.cj-btn').style.display="none";
    document.querySelector('.cj-btn2').style.display="block";
}

function conseal() {
	var container2 = document.querySelector(".showDown");
    container2.classList.remove("container-mod");
    document.querySelector('.Article').style.display="none";
    //document.querySelector('.quote').style.display="none";
    document.querySelector('.cj-btn').style.display="block";
    document.querySelector('.cj-btn2').style.display="none";
}




function displayEmail() {
	document.querySelector('.email').style.display="inline";
}

function displayEmailEnd() {
	document.querySelector('.email').style.display="none";
}


