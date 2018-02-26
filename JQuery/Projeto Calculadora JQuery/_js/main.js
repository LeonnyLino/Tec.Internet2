$(document).ready(function(){
	var countSimbolo = 0;
	$('input[name=btn]').click(function(){
		$('#campodetexto').val($('#campodetexto').val() + $(this).val());	
	});

	$('input[name=ce]').click(function(){
		$('#campodetexto').val('');
	});

	$('input[name=op]').click(function(){
		if($(this).val() == '+' || $(this).val() == '-' || $(this).val() == '/' || $(this).val() == '*'){
			countSimbolo++;
		}

		if(countSimbolo == 2){
			var valor = $('#campodetexto').val();
			$('#campodetexto').val(eval(valor));
			countSimbolo = 1;
		}

		if($('#campodetexto').val() != ''){
			$('#campodetexto').val($('#campodetexto').val() + $(this).val());
		}else {
			alert("Insira um valor para efetuar a operação!");
		}
	});

	$('input[name=igual]').click(function(){
		var valor = $('#campodetexto').val();
		$('#campodetexto').val(eval(valor));
	});

});	