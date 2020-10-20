function rainbowLog(string){
    var colorArray = ["\x1b[31m", "\x1b[33m", "\x1b[32m", "\x1b[34m", "\x1b[36m", "\x1b[35m"];
    var colorReset = "\x1b[0m";
    var output = "";

    for(i = 0; i < string.length; i++){
        output += colorArray[i % colorArray.length] + string[i];
    }

    console.log(output + colorReset);
}

module.exports = rainbowLog;