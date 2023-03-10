sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, History) {
		"use strict";

		return Controller.extend("mainapp.controller.Profile", {
			onInit: function () {

			},
			onNavBack: function () {
				var oHistory = History.getInstance();
				var oPrevHash = oHistory.getPreviousHash();
				if (oPrevHash !== undefined) {
					window.history.go(-1);
				} else {
					this.toMain();
				}
			},
			toMain: function () {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("RouteMain");
			},

		});
	});
