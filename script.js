model = { 				//Used to reflect or store added items
	buttons: [],
}


controller = { 			//Used to receive updates from view and also notifies model to add Item/Element
	init: function() {
		this.generateButtons();
		view.render();
	},

	createButton: function(text, val, type) {

		var button = document.createElement("button");
		button.setAttribute("value", val);
		button.textContent = text;

		button.className = "btn";

		if (type === "operator") 
			button.className += " operator";
		
		button.onclick = function() {
			document.getElementById("output").value += this.value;
		}	
		return button;

	},

	generateButtons: function() {
		button = this.createButton("=", "=", "operator");
		button.id = "evaluate";

		button.onclick = function() {
			controller.evaluate(document.getElementById("output").value);
		}
		model.buttons.push(button);
	},

	getButtons: function() {
		return model.buttons;
	},

	evaluate: function(str) {
		view.renderAnswer(eval(str));
	}
}


view = { 				//Used to display the output or in other words it is for UI
	render: function() {
		buttonsList = controller.getButtons();

		for (var i = 0; i < buttonsList.length; i++) {
			if (buttonsList[i].className == "btn operator") 
				document.getElementById("operators").append(buttonsList[i]);
		}

	},

	renderAnswer: function(str) {
		result = document.getElementById("result");
		result.placeholder = str;
	}
}

controller.init();






