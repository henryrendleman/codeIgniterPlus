/*
	Form validation only.

	what it does:
	This is for validation only.  The page is responsible for hiding and showing the buttons and everything.
	This knows how to find the next area to show, how to make sure the form is valid, and each field is valid.

	what it needs:
	jQuery
	each form section needs a class of 'field-slot' 
	
	how to use it:

	you need an object of required items like this, every field should be represented
	//var requiredItems = {	'field_name' : {'required':true, 'min_length':"2"} };
		
*/
function getFormSlot(slotId){
	$('.field-slot:visible').hide();
	$('#'+slotId).show();
}

function getCurrentFormSlot(){
	return $('.field-slot:visible');
}

function getNextArea(){
	var current = $('.field-slot').index($('.field-slot:visible'));
	$('.field-slot:visible').hide();
	if((current + 1) < $('.field-slot').length) {
		$('#'+ $('.field-slot')[current+1].id).show();
	}
	return current;
}

function validateSection(){
	var fieldsOk = true;
	var invalids = $('.field-slot:visible').find('.input_error');
	$.each($('.field-slot:visible :input'),function(index,item){
		if(!validateField($('[name='+item.name+']'))){
			fieldsOk = false;
		}
	});
	if(invalids.length == 0 && fieldsOk){
		return true;
	}
	return false;
}

function invalidateField(jQueryObj, errorString){
	jQueryObj.addClass('input_error');
	jQueryObj.removeClass('input_success');
	//jQueryObj.keyup(function(){
	//	validateField($(this));
	//});
	if ($('#help_'+jQueryObj.attr('name')) != 'undefined'){
		$('#help_'+jQueryObj.attr('name')).html(errorString);
	}
	//$('#confirmation_verbage').html('<p>Confirming the information you have entered is ok</p>');
	//$('#next').hide();
}

function makeFieldValid(jQueryObj){
	jQueryObj.removeClass('input_error');
	jQueryObj.addClass('input_success');
	//jQueryObj.unbind('keyup',validateField);
	if ($('#help_'+jQueryObj.attr('name')) != 'undefined'){
		$('#help_'+jQueryObj.attr('name')).html('');
	}
}

function validateField(jQueryObj){
	//FirstName @len >= 2
	var requirements = requiredItems[jQueryObj.attr('name')];
	if (jQueryObj.attr('name') != 'submit'){
		//validate something is there
		if(requirements.required){
			if(!hasSomething(jQueryObj)){
				invalidateField(jQueryObj,'This is a required field.');
				return false;
			}
		}
		//validate min length
		if(requirements.min_length !== undefined ){
			if (!requirements.required &&  jQueryObj.val().length == 0){
				makeFieldValid(jQueryObj);
				return true;
			}
			if(!validateLen(jQueryObj,requirements.min_length)){
				invalidateField(jQueryObj, 'This field is a minimum of '+ requirements.min_length +' character')
				return false;
			}
		}
		//validate type email
		if(requirements.type !== undefined && requirements.type == 'email'){
			if(!requirements.required  &&  jQueryObj.val().length == 0){
				makeFieldValid(jQueryObj);
				return true;
			}
			if(!IsEmail(jQueryObj.val())){
				invalidateField(jQueryObj, 'This does not look like an email')
				return false;
			}
		}

		//validate type phone
		if(requirements.type !== undefined && requirements.type == 'phone'){
			if(!requirements.required  &&  jQueryObj.val().length == 0){
				makeFieldValid(jQueryObj);
				return true;
			}
			if(!IsPhone(jQueryObj.val())){
				invalidateField(jQueryObj, 'This does not look like an Phone Number')
				return false;
			}
		}
	}
	makeFieldValid(jQueryObj);
	return true;
}

function validateLen(item, len){
	if(item.val().length < len){
		return false;
	}
	return true;
}

function hasSomething(item){
	if(item.attr('type') == 'radio'){
		if($('[name="'+item.attr('name')+'"]:checked').length == 0){
			return false;
		}
	}
	if(item.attr('type') == 'text' || item.attr('type') == 'textarea'){
		if(item.val().length == 0){
			return false;
		}
	}
	return true;
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function IsPhone(phone){
	return /^(?:\W*\d){10}\W*$/.test(phone);
}