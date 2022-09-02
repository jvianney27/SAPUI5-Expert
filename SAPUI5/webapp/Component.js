//@ts-nocheck
sap.ui.define([
    "dtt/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent"
],
/**
 * @param{typeof sap.ui.core.UIComponent} UIComponent
 * @param{typeof dtt/SAPUI5/model/Models} Models
 * @param{typeof sap.ui.moodel.resource.ResourceModel} ResourceModel
 */

function(Models, ResourceModel, UIComponent){
    return UIComponent.extend("dtt.SAPUI5.Component", {
        metadata: {
            manifest: "json"
        },
        init:function(){
            UIComponent.prototype.init.apply(this, arguments);
            this.setModel(Models.createRecipient());
            var i18nModel = new ResourceModel({bundleName: "dtt.SAPUI5.i18n.i18n"});
            this.setModel(i18nModel, "i18n");
        }
    })
});