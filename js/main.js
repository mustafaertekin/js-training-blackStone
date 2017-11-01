/**
 *   jQuery
 *   Event handler olustur
 *   get values row,column
 *   
 *   Javascript
 *   For döngüsü -> row icin
 *   onun da icinde for döngüsü -> column icin
 *
 *   jQuery
 *   for döngüleri icinde tr ve td 'ler olustur.
 *   her bir td ye renk css attr ile ver.
 */

let numberOfColumns;
let numberOfRows;
let colorNumber;

$("button").on("click", function () {
    $("tr,td").hide();
    numberOfColumns = $("#numberColumns").val();
    numberOfRows = $("#numberRows").val();
    colorNumber = $("#colorPicker").val();
    trOlustur(numberOfRows, numberOfColumns);
});


function trOlustur(numberRow, numberCol) {
    for (let i = 0; i < numberRow; i++) {
        $('#theTable').append('<tr class"row"></tr>');
        for (let k = 0; k < numberCol; k++) {
            $('#theTable tr:last').after(`<td class"row" style="background-color:${colorNumber}"></td>`);
        };
    };
};
