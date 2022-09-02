//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"   
],
/**
 * @param{typeof sap.ui.core.mvc.Controller} Controller
 * @param{typeof sap.m.MessageToast} MessageToast
 */
function (Controller, MessageToast) {
    return Controller.extend("dtt.SAPUI5.controller.App", {
        onInit: function() {
        },
        onShowHello: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();      //leyendo texto i18n
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");      //leyendo propiedad del datamodel
            var sMSG = oBundle.getText("helloMSG",[sRecipient]);
            MessageToast.show(sMSG);            
        }
    });
});