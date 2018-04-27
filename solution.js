var csv = require('csv-array');
var createCsvWriter = require('csv-writer').createObjectCsvWriter;
require('./sort.js')();
require('./duplicate.js')();

//read csv file
function readcsv(){
    csv.parseCSV("input.csv", function(data){
        
        //javascript embedded sorting algorithm (slower)
        //data.sort(comparison);
        
        //using merge sort according to its pick location and product code (faster)
        data = mergeSort(data);
        //check if any product_code is the same
        data = checkduplicateproduct(data);

        //write data into a csv file
        write(data);
                 
    }, true)
}

//write data into a csv file
function write(data){
    const csvWriter = createCsvWriter({
        path: 'output.csv',
        header: [
           {id: 'product_code', title: 'product_code'},
           {id: 'quantity', title: 'quantity'},
           {id: 'pick_location', title: 'pick_location'},
           ]
        });
    
    csvWriter.writeRecords(data)
    .then(() => {
        //print out the pick up order
        console.log('PICKING ORDER');
        var i;
        for(i = 0;i<data.length;i++){
            console.log(data[i]);
        }
    });
}

//start to read csv file
readcsv();
