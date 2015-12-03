requirejs.config({
    // Load all files from lib when referred to just by name, e.g. 'jquery'
    baseUrl: "scripts/lib",
    // can refer to this folder as './'
    paths: {
        app: "../app"
    }

});


// Dependencies loaded at start
require(["jquery"], function($) {
	require(["app/main"]);
});