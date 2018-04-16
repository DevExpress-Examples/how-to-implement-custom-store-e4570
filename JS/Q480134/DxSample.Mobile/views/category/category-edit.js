
DxSample.CategoryEdit = function(params) {

    return {
        category: new DxSample.CategoryViewModel(),

        handleSave: function() {
            if(params.id !== undefined)
                this.update();            
            else
                this.insert();
        },

        load: function() {
            var self = this;
            DxSample.db.Categories.byKey(params.id).done(function(data) {
                self.category.fromJS(data);
            });
        },

        update: function(){
            DxSample.db.Categories.update(params.id, this.category.toJS()).done(function() {
                DxSample.app.navigate("CategoryDetails/" + params.id);
            });
        },

        insert: function() {
            DxSample.db.Categories.insert(this.category.toJS()).done(function() {
                DxSample.app.navigate("Categories");
            });
        },

        viewShown: function() {
             if(params.id !== undefined)
                this.load();
         }
    };        
};
