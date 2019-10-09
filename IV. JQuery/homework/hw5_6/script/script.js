
$(document).ready(function() {
	$('#AJAXGetBtn').click(function(){
		// забираем данные с input-data
		var idVal = $('#input-data').val();
		var idValStr = (idVal === '') ? '': `/${idVal}`;
		// очищаем input-data после ввода
		$('#input-data').val('');
		// создаем объект для работы с функцией
		var methods = {};
		methods['success']      = successHandler;
		methods['error']        = errorHandler;
		methods['beforeSend']   = beforeSendHandler;
		methods['complete']     = completeHandler;
		// подключаем функцию, которая забирает данные и объект
		AjaxGet(idValStr, methods);

	});

// функция для создания элемента для данных - объекта

function singleDataHandler(data){
	var newDoHtml = [ 
					`<div class='do-content'>`,
						`<span>${data.id}</span>`,
						`<h2>${data.title}</h2>`,
						`<p>${data.completed}</p>`,
					`</div>`
					].join('');

	$('.container').html(newDoHtml);

}
// функция для создания элемента для данных - массива
function dataHandler(data){
	$('.container').html('');
	data.forEach(function(element, index){
		var newDoHtml = [ 
						`<div class='do-content'>`,
							`<span>${index+1}</span>`,
							`<h2>${element.title}</h2>`,
							`<p>${element.completed}</p>`,
						`</div>`
						].join('');

		$('.container').append(newDoHtml);	

	});

}

// проверяем полученные данные - объект или массив
function successHandler(data, textStatus){
	if (Array.isArray(data)){
		dataHandler(data);
	}else{
		singleDataHandler(data);
	}

}

//функция при ошибке
function errorHandler(data){
	var modalHtml = [ 
					`<div class='modal'>`,
						`<div>`,
						`<p>Такого id нет!</p>`,
						`</div>`,
						`<button id='backBtn'>Назад</button>`,
					`</div>`
					].join('');
	$('.modalWindow').html(modalHtml);
	$('.modalWindow').css('display', 'flex');
	$('#backBtn').click(function(){
		$('.modalWindow').hide();
	});


}
// функция при загрузке
function beforeSendHandler() {
	var modalHtml = [ 
					`<div class='modal'>`,
						`<div>`,
						`<p>Loading<span id='load'>...</span></p>`,
						`</div>`,
					`</div>`
					].join('');
	$('.modalWindow').html(modalHtml);
	$('.modalWindow').css('display', 'flex');
	$('#load').stop(true).animate({ 'width': '100%' }, 500);
	$('#load').stop(true).animate({ 'width': '0%' }, 500);
	$('#load').ready(function(){
		$('.modalWindow').hide();
	});

}
// функция при выполнении запроса
function completeHandler(){
	console.log('Done');
}


// создаем функцию, которая забирает данные и объект
function AjaxGet(idValStr, methods){
	var AjaxGetObj         = {};
	AjaxGetObj['url']      = `https://jsonplaceholder.typicode.com/todos/${idValStr}`;
	AjaxGetObj['dataType'] = 'json';
	for (let key in methods){
		AjaxGetObj[key]    = methods[key];
	}
	$.ajax(AjaxGetObj);

}

})

