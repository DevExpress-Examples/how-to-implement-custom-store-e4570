
$(function() {
    
    DxSample.app = new DevExpress.framework.html.HtmlApplication({
        ns: DxSample,
        viewPortNode: document.getElementById("view-port"),
        defaultLayout: DxSample.config.defaultLayout,
        navigation: DxSample.config.navigation
    });

    DxSample.app.router.register(":view/:id", { view: "Categories", id: undefined });
});
