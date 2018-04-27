module.exports = function() {
    //merge sort
    this.mergeSort = function(data){
        if (data.length === 1) {
            return data;
        }
        
        var middle = Math.floor(data.length / 2);
        var left = data.slice(0, middle);
        var right = data.slice(middle);
        
        return merge(mergeSort(left),mergeSort(right));
    }
    
    //comparison function used in the original sorting
    /*
     this.comparison = function(a,b){
         var a_location = a.pick_location;
         var b_location = b.pick_location;
         
         var res_a = a_location.split(" ");
         var res_b = b_location.split(" ");
         
         if(res_a[0].length>res_b[0].length) return 1
         else if(res_a[0].length<res_b[0].length) return -1
         else{
             if(res_a[0]<res_b[0]) return -1;
             else if(res_a[0]>res_b[0]) return 1;
             else {
                 if (res_a[1]-res_b[1] !== 0) return res_a[1]-res_b[1];
                 else return a.product_code-b.product_code;
             }
         }
     }*/
}

function merge (left, right) {
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;
    
    var res_left;
    var res_right;
    
    while (indexLeft < left.length && indexRight < right.length) {
        
        //split the pick location into bay and shelf for comparison
        res_left = left[indexLeft].pick_location.split(" ");
        res_right = right[indexRight].pick_location.split(" ");
        
        //compare the length of Bay's letter
        if(res_left[0].length<res_right[0].length){
            result.push(left[indexLeft]);
            indexLeft++;
        }else if (res_left[0].length>res_right[0].length) {
            result.push(right[indexRight]);
            indexRight++;
        }else {
            //compare the Bay's letter
            if(res_left[0]<res_right[0]){
                result.push(left[indexLeft]);
                indexLeft++;
            }else if(res_left[0]>res_right[0]){
                result.push(right[indexRight]);
                indexRight++;
            }else {
                //compare the shelf's number
                if(parseInt(res_left[1])<parseInt(res_right[1])){
                    result.push(left[indexLeft]);
                    indexLeft++;
                }else if (parseInt(res_left[1])>parseInt(res_right[1])){
                    result.push(right[indexRight]);
                    indexRight++;
                }else {
                    //compare the product code
                    if(parseInt(left[indexLeft].product_code)<parseInt(right[indexRight].product_code)){
                        result.push(left[indexLeft]);
                        indexLeft++;
                    }else {
                        result.push(right[indexRight]);
                        indexRight++;
                    }
                }
            }
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

