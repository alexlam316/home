module.exports = function() {
    //check if any product is duplicated in the data and group them together
    this.checkduplicateproduct = function (data){
        var i;
        for(i = 0;i<data.length-1;i++){
            if(data[i].product_code === data[i+1].product_code) {
                //sum the quantity of same product
                data[i].quantity = String(parseInt(data[i].quantity)+parseInt(data[i+1].quantity));
                //remove duplicated product
                data.splice(i+1,1);
                //to check if there is anymore product with same product code
                i = i-1;
            }
        }
        return data;
    }
}
