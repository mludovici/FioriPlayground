sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        let oRouter;

        return Controller.extend("mainapp.controller.Main", {
            onInit: function () {
                oRouter = this.getOwnerComponent().getRouter();
            },
            onNavigateHome: function () {

            },
            navigateToAbout: function () {
                oRouter.navTo("RouteAbout");
            },
            navigateToProfile: function () {
                oRouter.navTo("RouteProfile");
            },
            navToTable: function () {
                oRouter.navTo("RouteTable");
            }

        });
    });
