
DxSample.CategoryDetails = function(params) {

    var hidePopup = function() {
        var popup = $("#deleteConfirmation").data("dxPopup");
        popup.hide();
    };

    return {
        id: params.id,

        category: new DxSample.CategoryViewModel(),

        handleDelete: function() {
            var overlay = $("#deleteConfirmation").data("dxPopup");
            overlay.show();
        },

        handleConfirmDelete: function() {
            DxSample.db.Categories.remove(params.id).done(function() {
                DxSample.app.navigate("Categories", { target: "blank" });
            }).fail(hidePopup);
        },

        handleCancelDelete: function() {
            hidePopup();
        },

        viewShown: function() {
            categoryDetails = this;
            DxSample.db.Categories.byKey(params.id).done(function(data) {
                categoryDetails.category.fromJS(data);
            });
        }
    };
};
