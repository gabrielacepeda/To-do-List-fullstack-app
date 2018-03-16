window.onload = function () {
	var listItemsCached = localStorage.getItem("listItemsKey");
	if (listItemsCached != undefined) {
		listItemsCached = listItemsCached.replace("[object Object]", "");
		document.getElementById("toDoList").innerHTML = listItemsCached;
		var num = $("li").not(".strikeThrough").length;
		$("#count").text("you have " + num + " todos left");
		saveMe();
		strikeThrough();
	}
}
//ADD ITEMS TO LIST FUNCTION
$("form").on("submit", function (event) {
	event.preventDefault();
	var inputItems = $("#items").val();

	$("#toDoList").append("<li>" + inputItems + "</li>");
	$("#items").val("");
	var num = $("li").length
	$("#count").text("you have " + num + " todos left");
	saveMe();
	strikeThrough();
});

$("#completeBtn").on("click", function (event) {
	$("li.strikeThrough").remove();
	var num = $("li").length;
	$("#count").text("you have " + num + " todos left");
	saveMe();
});

//CLEAR COMPLETE ITEMS FUNCTION
$("#clearBtn").on("click", function (event) {
	$("li").remove();
	var num = $("li").length
	$("#count").text(num);
	saveMe();

})
//MOUSE ENTER ITEMS FUNCTION
$("ol").on("mouseenter", "li", function (event) {
	$(this).append("<button onclick='editMe(this);'>edit</button>" + "<button onclick='removeMe(this);'>remove</button>");
});
//MOUSE LEAVE
$("ol").on("mouseleave", "li", function (event) {
	$("ol button").detach();
})
//REMOVEME FUNCTION
function removeMe(element) {
	$(element).parent().remove(); //e.parentNode.outerHTML="";
	var num = $("li").not(".strikeThrough").length;
	$("#count").text("you have " + num + " todos left");
	saveMe();
}

function saveMe() {
	var listItems = document.getElementById("toDoList").innerHTML;
	localStorage.setItem("listItemsKey", listItems);
}

//EDIT FUNCTION
function editMe(element) {
	$(element).parent().attr("contentEditable", true).focus();
	$(element).parent().removeClass("strikeThrough");
	$(element).parent().on("blur", function () { //attaching blur event listener
		$(this).removeAttr("contentEditable"); //have to click edit button for content editable to work
		$(this).off("blur"); //turn off blur event listener
		saveMe();
	});
}

function strikeThrough() {
	//STRIKETHROUGH ITEMS FUNCTION
	$("ol").on("click", "li", function (event) {
		if ($(this).attr("contentEditable") === "true") {
			return;
		}
		$(this).addClass("strikeThrough");
		var num = $("li").length - $("li.strikeThrough").length;
		$("#count").text("you have " + num + " todos left");
		saveMe();
	});
}
//typeof = what type of object it is whether its string, number boolean, etc. (#74 wasn't working with quptes around true; true is string not boolean)
//event listerners for the click must be assigned when load the page from local storage (must assign click handler to ol too when refresh from local storage)
//THIS is like custom variable that refers to the object that the function/method is working on; (noun.verb) THIS is the way for the verb to know what its noun is
//as soon as the buttons are part of the html, you can attach event listeners, as soon as the buttons leave, the buttons eventlisteners will also go away

//what can the user do
//what does the user expect
//what can the user see

//list out all event listeners

//browser has built in web storage / local storage..it can be used for different reasons, but
//one is
//that can store local objects (as key value pairs),
//browser go to your database that store local objects (as key value pairs), add an item with setItem and
//get item using localStorage.getItem
//when store an item with setItem - need to pass in key name and value
//when getting an item with getItem - only need to pass in key name

//dictionaries: key, value paire
//look up value by the key you give it
//data structure that stores key,value pairs
//to get values from dictionary, need to know its key
//with ceasar cipher; create dictionary that maps ascii values to lowercase or uppercase letters
//method to add key value pairs to the dictionary and look up value by the key
//dictionary is a fundamental data structure; object is an abstract dictionary // dictionary also called hashmap