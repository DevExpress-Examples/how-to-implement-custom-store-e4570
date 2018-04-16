
DxSample.Categories = function(params) {
    return {
        dataSource: {
            store: DxSample.db.Categories,
            map: function(item) {
                return new DxSample.CategoryViewModel(item);
            }
        }
    };   
};
