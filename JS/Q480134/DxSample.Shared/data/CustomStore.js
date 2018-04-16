(function () {
    var data = DevExpress.data;
    data.CustomStore = data.Store.inherit({
        _loadImpl: function (options) {
            var result = $.Deferred();
            DxSample.DataManager.GetCategories(function (data) {
                result.resolve(data);
            }, function (ex) {
                result.reject(ex);
            }, options.take, options.skip);
            return result.promise();
        },

        _byKeyImpl: function (key) {
            alert('This method is not implemented');
            var result = $.Deferred();
            setTimeout(function () {
                result.resolve({
                    CategoryID: 1,
                    CategoryName: 'Beverages'
                });
            }, 100);
            return result.promise();
        },

        _updateImpl: function (key, values) {
            alert('This method is not implemented');
            var result = $.Deferred();
            setTimeout(function () {
                result.resolve();
            }, 100);
            return result.promise();
        },

        _removeImpl: function (key) {
            alert('This method is not implemented');
            var result = $.Deferred();
            setTimeout(function () {
                result.resolve();
            }, 100);
            return result.promise();
        },

        _insertImpl: function (values) {
            alert('This method is not implemented');
            var result = $.Deferred();
            setTimeout(function () {
                result.resolve();
            }, 100);
            return result.promise();
        }
    });
})();