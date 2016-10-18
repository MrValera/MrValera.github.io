var generation = {
	createElement: function(params) {
	var element = document.createElement(params.tagName);

	if (params.tagName === 'input') {
		element.setAttribute('type', params.inputType);
	};

	if (params.className) {
		element.className = params.className;
	};

	if (params.content) {
		element.innerHTML = params.content;
	};

	if (params.parentElement) {
		params.parentElement.appendChild(element);
	};
	return element;
	},

	createList: function (countQuestion, countQuestion2) {
		for (var i = 0; i < countQuestion; i++) {
	
			this.createElement({
				tagName: 'h2',
				content: (i+1)+'. Вопрос №'+(i+1),
				parentElement: form
			});

		for (var j = 0; j < countQuestion2; j++) {
			
			var label = this.createElement({
				tagName: 'label',
				content: 'Вариант ответа №'+(j+1),
				parentElement: form
			});

			var checkbox = this.createElement ({
				tagName: 'input',
				className: 'checkbox1',
				inputType: 'checkbox'
			});
		label.insertAdjacentElement('afterBegin', checkbox)
		};
	};

	}
}


var body = document.querySelector('body');

generation.createElement({
	tagName: 'h1',
	className: 'title',
	content: 'Тест по программированию',
	parentElement: body
});

var form = generation.createElement({
	tagName: form,
	parentElement: body
});

generation.createList(3, 3);

generation.createElement({
	tagName: 'input',
	inputType: 'submit',
	className: 'checkMyResults',
	content: 'Проверить мои результаты',
	parentElement: form
});
