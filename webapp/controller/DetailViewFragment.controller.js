sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Fragment) {
		"use strict";

		return Controller.extend("mainapp.controller.DetailViewFragment", {

			_oParent: null,
			onInit: function () {

			},
			init: function (oParent) {
				this._oParent = oParent;
			},
			onPress: function () {
				alert("BUtton from fragment pressed!")
			}

		});
	});
