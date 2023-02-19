sap.ui.define([
	"sap/ui/core/mvc/Controller",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("mainapp.controller.Table", {
			onInit: function () {
				this._oPersonsModel = this.getView().getModel("personsModel");
				this.getView().setModel(this._oPersonsModel);
			},

		});
	});
