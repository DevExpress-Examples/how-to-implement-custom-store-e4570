(function () {
    var db = new DevExpress.data.ODataContext({
        url: 'http://services.odata.org/Northwind/Northwind.svc/',
        jsonp: true,
        entities: {
            categories: {
                name: 'Categories',
                key: 'CategoryID',
                keyType: 'Int32'
            }
        }
    });

    DxSample.DataManager = {
        GetCategories: function(successCallback, errorCallback, top, skip) {
            db.categories.load({
                take: top,
                skip: skip
            }).done(successCallback).fail(errorCallback);
        }
    };
})();