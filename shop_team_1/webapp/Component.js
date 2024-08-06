/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "shopteam1/model/models",
        'sap/ui/model/json/JSONModel'
    ],
    function (UIComponent, Device, models,JSONModel) {
        "use strict";

        return UIComponent.extend("shopteam1.Component", {
            metadata: {
                manifest: "json"
            },

            init: function () {
                var oProductsModel;
    
                UIComponent.prototype.init.apply(this, arguments);
    
                // set products demo model on this sample
                oProductsModel = new JSONModel(sap.ui.require.toUrl('shopteam1/mock') + '/products.json');
                oProductsModel.setSizeLimit(1000);
                this.setModel(oProductsModel, 'products');
                console.log(oProductsModel)
            }
        });
    }
);