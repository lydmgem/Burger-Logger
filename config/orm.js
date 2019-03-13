// Import MySQL connection.
var connection = require('../config/connection.js');

// Helper function for SQL syntax.
function printQM(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax.
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var val = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof val === "string" && val.indexOf(" ") >= 0) {
                val = "'" + val + "'";
            }
            arr.push(key + "=" + val);
        }
    }

    return arr.toString();
}

var orm = {
    // Selecting all burgers
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    // Creating burger
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQM(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
    // Update burger
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;