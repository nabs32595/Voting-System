

//listen for submit
document.getElementById('contactform').addEventLister('submit',submitForm);

function submitForm(e){
	e.preventDefaultS();

	consolLog(123);

}
