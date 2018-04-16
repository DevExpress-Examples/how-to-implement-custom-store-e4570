
// NOTE object below must be a valid JSON
window.DxSample = $.extend(true, window.DxSample, {
    "config": {
        "endpoints": {
            "db": {
                "local": "http://services.odata.org/Northwind/Northwind.svc/",
                "production": "http://services.odata.org/Northwind/Northwind.svc/"
            }
        },
        "services": {
            "db": {
                "entities": {
					"Categories": { 
						"key": "CategoryID", 
						"keyType": "Int32" 
					}
                }
            }
        }
    }
});
