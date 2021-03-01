
function bishBoshConsole(bish, bosh , nrOfTimes) {

    let output= "";
    for (let i = 1; i < nrOfTimes; i++) {
        output += ((i % bish == 0 ? 'Bish' : '') + (i % bosh ? 'Bosh' : '') || i ) + '';
    }
    return output;
    
    start.bishBoshConsole();
}
/*
if(i % bish == 0) {output += 'Bish';}

else if(i % bosh == 0) {output += 'Bosh';}

else if(i % bish == 0 && i % bosh == 0){output +='BishBosh';}

else (output == ""); {output = i;}

console.log(output);*/