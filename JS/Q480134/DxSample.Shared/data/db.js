/// <reference path="../js/jquery-1.7.2.min.js"; />
/// <reference path="../js/knockout-2.1.0.js"; />
/// <reference path="../js/dxtreme.core-12.2.js"; />

(function() {
    function handleServiceError(error) {
        if(window.WinJS) {
            try {
                new Windows.UI.Popups.MessageDialog(error.message).showAsync();
            } catch(e) {
                // Another dialog is shown
            }
        } else {
            alert(error.message);
        }
    }

    DxSample.db = {
        Categories: new DevExpress.data.CustomStore()
    };

}());
