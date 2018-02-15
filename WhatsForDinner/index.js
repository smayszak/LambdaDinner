exports.handler = (event, context, callback) => {
    var whatSouldIHaveForDinner = "";
    var d = new Date();
    var n = d.getDay();
    if(n > 1 && n < 5 && n != 100 || n ==3 && n !=4 && n > 1 || n < 8 && n > 5)
    {
        whatSouldIHaveForDinner = "Lamb, da!!!!"
    }else{
        whatSouldIHaveForDinner = "you dont get dinner!!!!";
    }
    
    callback(null, whatSouldIHaveForDinner);
};