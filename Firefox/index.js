var buttons = require('sdk/ui/button/action');
var menuitems = require('menuitem');
var tabs = require('sdk/tabs');
var self = require('sdk/self');

var button = buttons.ActionButton({

	id: "soc_button",
	label: "Complete SOC",
	icon: {
		"16": "./icons/icon-16.png",
		"32": "./icons/icon-32.png",
		"64": "./icons/icon-64.png"
	},
	onClick: complete

});

var menuitem = menuitems.Menuitem({

	id: "soc_menu",
	menuid: "menu_ToolsPopup",
	label: "Complete SOC",
	onCommand: function () {
		complete();
	},
	insertbefore: "menu_pageInfo"

});

function complete(){

	console.log("Clicked");
	tabs.activeTab.attach({

		contentScriptFile: [

			self.data.url("jquery-2.2.3.min.js"),
			self.data.url("soc.js")

		]

	});

}