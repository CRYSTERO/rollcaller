const csv = require('jquery-csv/src/jquery.csv');
const fs = require('fs');
const readline = require('readline');
const path = require("path");

const pathToCSV1 = path.join(__dirname, '/Person1.csv');
const pathToCSV2 = path.join(__dirname, '/Person2.csv');

let count = $('#count')
let list = $('#list')


//     function testFileHandler() {
//     var pathToCSV1 = "/Person1.csv";
//     var pathToCSV2 = "/Person2.csv";
//     var arr1 = [];
//     var arr2 = [];
//     fs.readFile(pathToCSV1, "UTF-8", function (err, csv) {
//         $.csv.toArrays(csv, {}, function (err, data) {arr1 = data;
//         // alert(arr1);
//         });
//     });
//
//     fs.readFile(pathToCSV2, "UTF-8", function (err, csv) {
//         $.csv.toArrays(csv, {}, function (err, data) {
//             arr2 = data;
//         });
//     });
//     alert(arr1);alert(arr2);
//     return [arr1, arr2];
// }

    function oneFromClassOneSelector() {

        fs.readFile(pathToCSV1, "UTF-8", function (err, csv) {
            var arr1 =[]
            $.csv.toArrays(csv, {}, function (err, data) {
                arr1 = data;
                var theLuckyOne = randomSelector(arr1);
                showDataOnOneColumn(theLuckyOne);
                list.prepend('<li class="list-group-item d-flex justify-content-between lh-condensed">' +
                        '<div>' + '<h6 class="my-0">' +
                        theLuckyOne[1] +
                    '</h6>'  +
                    '<small class="text-muted">' +
                     theLuckyOne[0] +'</small>' + '</div>'+
                   '</li>');

            });

        });
        count.text(list.find("li").length+1) ;
        // alert(arr1);//Just blank
    }
    function twoFromClassOneSelector() {

        fs.readFile(pathToCSV1, "UTF-8", function (err, csv) {
            $.csv.toArrays(csv, {}, function (err, data) {
                var theFirstLuckyOne = randomSelector(data);
                var theSecondLuckyOne;
                var flag = true;
                while (flag)
                {
                    var temp = randomSelector(data);
                    if (temp !== theFirstLuckyOne) theSecondLuckyOne = temp;
                    flag = false;
                }
                showDataOnTwoColumns(theFirstLuckyOne, theSecondLuckyOne);
                list.prepend('<li class="list-group-item d-flex justify-content-between lh-condensed">' +
                    '<div>' + '<h6 class="my-0">' +
                    theFirstLuckyOne[1] +
                    '</h6>'  +
                    '<small class="text-muted">' +
                    theFirstLuckyOne[0] +'</small>' + '</div>'+
                    '</li>');
                list.prepend('<li class="list-group-item d-flex justify-content-between lh-condensed">' +
                    '<div>' + '<h6 class="my-0">' +
                    theSecondLuckyOne[1] +
                    '</h6>'  +
                    '<small class="text-muted">' +
                    theSecondLuckyOne[0] +'</small>' + '</div>'+
                    '</li>');
            });
        });
        count.text(list.find("li").length+2) ;
    }
    function oneFromClassTwoSelector() {

    fs.readFile(pathToCSV2, "UTF-8", function (err, csv) {
        var arr1 =[]
        $.csv.toArrays(csv, {}, function (err, data) {
            arr1 = data;
            var theLuckyOne = randomSelector(arr1);
            showDataOnOneColumn(theLuckyOne);
            list.prepend('<li class="list-group-item d-flex justify-content-between lh-condensed">' +
                '<div>' + '<h6 class="my-0">' +
                theLuckyOne[1] +
                '</h6>'  +
                '<small class="text-muted">' +
                theLuckyOne[0] +'</small>' + '</div>'+
                '</li>');
        });
    });
        count.text(list.find("li").length+1) ;
    // alert(arr1);//Just blank
}
    function twoFromClassTwoSelector() {

    fs.readFile(pathToCSV2, "UTF-8", function (err, csv) {
        $.csv.toArrays(csv, {}, function (err, data) {
            arr1 = data;
            var theFirstLuckyOne = randomSelector(arr1);
            var theSecondLuckyOne;
            var flag = true;
            while (flag)
            {
                var temp = randomSelector(arr1);
                if (temp !== theFirstLuckyOne) theSecondLuckyOne = temp;
                flag = false;
            }
            showDataOnTwoColumns(theFirstLuckyOne, theSecondLuckyOne);
            list.prepend('<li class="list-group-item d-flex justify-content-between lh-condensed">' +
                '<div>' + '<h6 class="my-0">' +
                theFirstLuckyOne[1] +
                '</h6>'  +
                '<small class="text-muted">' +
                theFirstLuckyOne[0] +'</small>' + '</div>'+
                '</li>');
            list.prepend('<li class="list-group-item d-flex justify-content-between lh-condensed">' +
                '<div>' + '<h6 class="my-0">' +
                theSecondLuckyOne[1] +
                '</h6>'  +
                '<small class="text-muted">' +
                theSecondLuckyOne[0] +'</small>' + '</div>'+
                '</li>');
        });
    });
        count.text(list.find("li").length+2) ;
}
    function oneFromTwoSelector(){
        let a = [1, 2];
        var theLuckyOne;
        if(randomSelector(a) === 1)
        {
            oneFromClassOneSelector();
        }
        else
        {
            oneFromClassTwoSelector();
        }
    }
    function twoFromTwoSelector() {

        fs.readFile(pathToCSV1, "UTF-8", function (err, csv) {

            $.csv.toArrays(csv, {}, function (err, data) {
                var theLuckyOne = randomSelector(data);
                showDataOnLeftSpecial(theLuckyOne);
                list.prepend('<li class="list-group-item d-flex justify-content-between lh-condensed">' +
                    '<div>' + '<h6 class="my-0">' +
                    theLuckyOne[1] +
                    '</h6>'  +
                    '<small class="text-muted">' +
                    theLuckyOne[0] +'</small>' + '</div>'+
                    '</li>');
            });
        });

        fs.readFile(pathToCSV2, "UTF-8", function (err, csv) {

            $.csv.toArrays(csv, {}, function (err, data) {
                var theLuckyOne = randomSelector(data);
                showDataOnRightSpecial(theLuckyOne);
                list.prepend('<li class="list-group-item d-flex justify-content-between lh-condensed">' +
                    '<div>' + '<h6 class="my-0">' +
                    theLuckyOne[1] +
                    '</h6>'  +
                    '<small class="text-muted">' +
                    theLuckyOne[0] +'</small>' + '</div>'+
                    '</li>');
            });
        });
        count.text(list.find("li").length+2) ;
}


    function randomSelector(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


    function showDataOnOneColumn(data) {
    var x = document.getElementById("column2");
    var y = document.getElementById("name1");
    var z = document.getElementById("id1");
    x.style.display = 'none';
    y.innerText = data[1];
    z.innerText = data[0];

}

    function showDataOnTwoColumns(data1, data2) {
    var x = document.getElementById("column2");
    var a = document.getElementById("name1");
    var b = document.getElementById("id1");
    var c = document.getElementById("name2");
    var d = document.getElementById("id2");
    x.style.display = 'block';
    a.innerText = data1[1];
    b.innerText = data1[0];
    c.innerText = data2[1];
    d.innerText = data2[0];
}

    function showDataOnLeftSpecial(data) {
        var y = document.getElementById("name1");
        var z = document.getElementById("id1");

        y.innerText = data[1];
        z.innerText = data[0];
    }
function showDataOnRightSpecial(data) {
    var x = document.getElementById("column2");
    var y = document.getElementById("name2");
    var z = document.getElementById("id2");
    x.style.display = 'block';
    y.innerText = data[1];
    z.innerText = data[0];
}

    function csv2array(data, delimeter) {
    // Retrieve the delimeter
    if (delimeter === undefined)
        delimeter = ',';
    if (delimeter && delimeter.length > 1)
        delimeter = ',';

    // initialize variables
    var newline = '\n';
    var eof = '';
    var i = 0;
    var c = data.charAt(i);
    var row = 0;
    var col = 0;
    var array = new Array();

    while (c !== eof) {
        // skip whitespaces
        while (c === ' ' || c === '\t' || c === '\r') {
            c = data.charAt(++i); // read next char
        }

        // get value
        var value = "";
        if (c == '\"') {
            // value enclosed by double-quotes
            c = data.charAt(++i);

            do {
                if (c != '\"') {
                    // read a regular character and go to the next character
                    value += c;
                    c = data.charAt(++i);
                }

                if (c == '\"') {
                    // check for escaped double-quote
                    var cnext = data.charAt(i+1);
                    if (cnext == '\"') {
                        // this is an escaped double-quote.
                        // Add a double-quote to the value, and move two characters ahead.
                        value += '\"';
                        i += 2;
                        c = data.charAt(i);
                    }
                }
            }
            while (c != eof && c != '\"');

            if (c == eof) {
                throw "Unexpected end of data, double-quote expected";
            }

            c = data.charAt(++i);
        }
        else {
            // value without quotes
            while (c != eof && c != delimeter && c!= newline && c != ' ' && c != '\t' && c != '\r') {
                value += c;
                c = data.charAt(++i);
            }
        }

        // add the value to the array
        if (array.length <= row)
            array.push(new Array());
        array[row].push(value);

        // skip whitespaces
        while (c == ' ' || c == '\t' || c == '\r') {
            c = data.charAt(++i);
        }

        // go to the next row or column
        if (c == delimeter) {
            // to the next column
            col++;
        }
        else if (c == newline) {
            // to the next row
            col = 0;
            row++;
        }
        else if (c != eof) {
            // unexpected character
            throw "Delimiter expected after character " + i;
        }

        // go to the next character
        c = data.charAt(++i);
    }

    return array;
}
