var repo = require("./repo");
var qtest = require("./test").qtest;

exports.branches = {
    // Get status
    get: function(test) {
        qtest(repo.status(), test);
    }
}