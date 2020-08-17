(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 1, msg: 'Beta Mode (Not ready for public)'};
    };
    ext.JavaScript=function(a){
        return eval(a);
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', 'Run JavaScript%s','JavaScript'],
        ],
    url: 'https://18001767679.github.io/Mini-Comp-Apps/Just a mod.js',
    };

    // Register the extension
    ScratchExtensions.register('JavaScript', descriptor, ext);
})({});
