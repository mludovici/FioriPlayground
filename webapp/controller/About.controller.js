sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, History) {
		"use strict";

		return Controller.extend("mainapp.controller.About", {

			_oPersonModel: null,
			onInit: function () {
				this._oPersonModel = this.getOwnerComponent().getModel("personModel");
				this.getView().setModel(this._oPersonModel);
				this.initFragmentView(this);
			},
			initFragmentView: function (oParent) {
				// Fragment-Controller initialisieren
				var oFragController = sap.ui.controller("mainapp.controller.DetailViewFragment");
				oFragController.init(oParent);
				var oFragment = sap.ui.xmlfragment("mainapp.view.DetailViewFragment", oFragController);
				this.getView().byId("about").insertContent(oFragment);
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
