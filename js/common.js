$(document).ready(function(){
	//при нажатию на любую кнопку, имеющую класс .btn
	$(".show-modal").click(function() {
		$("#myModalBox").modal('show');
	});
	
	$("#form-button-close").click(function() {
		$('.figure-data').empty();
		formSelect.prop('selectedIndex',0);
		$("#myModalBox").modal('hide');
	});
	
	var Figures = {
		'rectangle': {
			'label': 'Rectangle', 
			'fields':[
				{'id': 'name', type: 'text', label: 'Name', placeholder: 'Set Name', 'validation': 'string'}, 
				{'id': 'x', type: 'text', label: 'Position X-axis', placeholder: 'Set x', 'validation': 'number'}, 
				{'id': 'y', type: 'text', label: 'Position Y-axis', placeholder: 'Set y', 'validation': 'number'},
				{'id': 'w', type: 'text', label: 'Width', placeholder: 'Set width', 'validation': 'number'},
				{'id': 'h', type: 'text', label: 'Height', placeholder: 'Set height', 'validation': 'number'},
			], 
			'constructor': Rectangle
		},
		'circle': {
			'label': 'Circle', 
			'fields':[
				{'id': 'name', type: 'text', label: 'Name', placeholder: 'Set Name', 'validation': 'string'}, 
				{'id': 'x', type: 'text', label: 'Position X-axis', placeholder: 'Set x', 'validation': 'number'}, 
				{'id': 'y', type: 'text', label: 'Position Y-axis', placeholder: 'Set y', 'validation': 'number'},
				{'id': 'r', type: 'text', label: 'Radius', placeholder: 'Set radius', 'validation': 'number'},
			], 
			'constructor': Circle
		},
		'square': {
			'label': 'Square', 
			'fields':[
				{'id': 'name', type: 'text', label: 'Name', placeholder: 'Set Name', 'validation': 'string'}, 
				{'id': 'x', type: 'text', label: 'Position X-axis', placeholder: 'Set x', 'validation': 'number'}, 
				{'id': 'y', type: 'text', label: 'Position Y-axis', placeholder: 'Set y', 'validation': 'number'},
				{'id': 'r', type: 'text', label: 'Width', placeholder: 'Set width', 'validation': 'number'},
			], 
			'constructor': Square
		},
		'triangle': {
			'label': 'Triangle', 
			'fields':[
				{'id': 'name', type: 'text', label: 'Name', placeholder: 'Set Name', 'validation': 'string'}, 
				{'id': 'x', type: 'text', label: 'Position X-axis', placeholder: 'Set x', 'validation': 'number'}, 
				{'id': 'y', type: 'text', label: 'Position Y-axis', placeholder: 'Set y', 'validation': 'number'},
				{'id': 'r', type: 'text', label: 'Width', placeholder: 'Set width', 'validation': 'number'},
			], 
			'constructor': Triangle
		}
	};
	
	var formSelect = $('.form-check select[name="figure-type"]');

	for(prop in Figures){
		$(formSelect).append(`
		<option	value="${prop}">${Figures[prop]['label']}</option>
		`);
	}
		
	formSelect.on('change', function selectFigureOptions(){
		var option = formSelect.val()
		$('.figure-data').empty();
		var fields = Figures[option]['fields'];
		
		for (var field = 0; field < fields.length; field++) {
			$('.figure-data').append(`
				<div class="form-group line-check">
					<label for="${fields[field]['id']}">${fields[field]['label']}</label>
					<input type="${fields[field]['type']}" 
						   class="form-control field-check field-empty" 
						   id="${fields[field]['id']}" 
						   name="${fields[field]['id']}" 
						   data-validation="${fields[field]['validation']}" 
						   placeholder="${fields[field]['placeholder']}">
				</div>
			`)
		}	
	});
	
	$(".form-check").on('keyup', function(e){

		var field = $(e.target);
		
		if (field.val().length && field.attr('data-validation') == "string"){
			if(field.val().length > 20 && !field.parent().hasClass("error-check")){
				field.addClass("field-empty").parent().addClass("error-check").append("<span class='error-message'>Введите не более 20-ти симвлов</span>");
			} else if( field.val().length > 20 && field.parent().hasClass("error-check")){
				return false;
			} else if( field.val().length < 20 && field.parent().hasClass("error-check") ){
				field.removeClass("field-empty").parent().removeClass("error-check").find(".error-message").remove();
			}  
			
			if(field.val().length < 20 && !field.parent().hasClass("error-check")){
				field.removeClass("field-empty");
			} 
		} else if(field.val().length && field.attr('data-validation') == "number"){
			if (!isNumeric(field.val()) && !field.parent().hasClass("error-check")){
				field.parent().addClass("error-check").append("<span class='error-message'>Введите числовое значение</span>");
			} else if(isNumeric(field.val()) && field.parent().hasClass("error-check")){
				field.parent().removeClass("error-check").find(".error-message").remove();
			} 
			
			if(isNumeric(field.val()) && !field.parent().hasClass("error-check")){
				field.removeClass("field-empty");
			}
		} else if(!field.val().length && field.attr('data-validation') == "string" || !field.val().length && field.attr('data-validation') == "number"){
			field.addClass("field-empty");
		} 
		
		var sizeEmpty = $(".field-empty").length;
		
		if(sizeEmpty == 0){
			$("#form-button-submit").prop('disabled', false);
		} else if(sizeEmpty != 0){
			$("#form-button-submit").prop('disabled', true);
		}
		
	});
	
	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	
	$('#form-button-submit').on('click', function() {
		var figureData = DataSerialize();
		var option = formSelect.val();
		var constructor = Figures[option]['constructor'];
		var new_figure = new constructor(...figureData);
		new_figure.saveToLocalStorage();
		
		renderTable();
		
		$('.figure-data').empty();
		formSelect.prop('selectedIndex',0);
		$("#myModalBox").modal('hide');
	});
	
	function renderTable(){
		$("#table-figures tbody").empty();
		var figuresData = JSON.parse(localStorage.getItem('figuresCollection'));
	
		for(figure in figuresData){
			if (!figuresData[figure]["W"]) { figuresData[figure]["W"] = ' - ' }
			if (!figuresData[figure]["H"]) { figuresData[figure]["H"] = ' - ' }
			if (!figuresData[figure]["R"]) { figuresData[figure]["R"] = ' - ' }
			$("#table-figures tbody").append(`
				 <tr>
					 <td>${figuresData[figure]["type"]}</td>
					 <td>${figuresData[figure]["name"]}</td>
					 <td>${figuresData[figure]["X"]}</td>
					 <td>${figuresData[figure]["Y"]}</td>
					 <td>${figuresData[figure]["W"]}</td>
					 <td>${figuresData[figure]["H"]}</td>
					 <td>${figuresData[figure]["R"]}</td>
					 <td>${figuresData[figure]["S"]}</td>
					 <td>${figuresData[figure]["P"]}</td>
					 <td><button type="button" class="btn btn-primary delete" data-index="${figure}">Del</button></td>
				 </tr>
			`);
		}
		
		$('.delete').on('click', function (e){
			var index = $(this).attr("data-index");
			var figures = JSON.parse(localStorage.getItem('figuresCollection'))
			figures.splice(index, 1);
			localStorage.setItem('figuresCollection', JSON.stringify(figures));
			renderTable();
		});
	}
	renderTable()
	
	
	function DataSerialize(toObj){
	    var listOfFields = [];
		$("[name='form-data-figure']").serializeArray().forEach(function(item, index){
			listOfFields.push(item['value']);
		})
		return listOfFields
	}
});
