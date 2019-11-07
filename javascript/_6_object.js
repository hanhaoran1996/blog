console.log("_6_object");

var app = function () {
    var components = new Array();

    return {
        getComponentCount: function () {
            return components.length;
        },
        registerComponent: function (component) {
            if (typeof component === 'object') {
                components.push(component);
            }
        }
    };
}();

var singleton = function () {
    var privateVariable = 10;
    function privateFunction() {
        return false;
    }

    var obj = {};
    obj.publicProperty = true;
    obj.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    };

    return obj;
};

