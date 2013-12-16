var repo = require("./repo");
var qtest = require("./test").qtest;

exports.branches = {
    // Branches listing
    list: function(test) {
        qtest(repo.branches(), test);
    }
}