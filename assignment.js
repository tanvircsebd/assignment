// function for feet to mile conversion

function feetToMile(feet){
    if(typeof(feet)!='number'){
        return console.log('Invalid Input, please give a number');
    }
    else{
        if(feet<0){
            return console.log("Distance can not be negative");
        }
        mile=feet*0.000189394;
        return mile;
    }
}

// function for wood calculation

function woodCalculator(chair, table, bed){
    if(typeof(chair)!='number' || typeof(table)!='number' || typeof(bed)!='number'){
        return console.log('Invalid Entry');
    }
    else if(chair<0 ||table <0 || bed <0 ){
            return console.log("Number of furniture can not be negative");
        }
    else if (chair%1!=0||table%1!=0||bed%1!=0){
        return console.log("Chair, table or bed can not be fractional");
    }
    totalWoodReq=chair*1+table*3+bed*5;
    return totalWoodReq;
}


// function for brick calculation

function brickCalculator(floor){
    if(typeof(floor)!='number'){
        return console.log('Please give a number');
    }
    else{
        if(floor<0){
            return console.log("Invalid Entry, please provide positive value");
        }
        else  if(floor<=10){
            height=floor*15;
        }
        else if(floor<=20) {
            height=floor*12;
        }
        else if(floor>20){
            height=floor*10
        }
        brick=height*1000; 
    }
    return brick;
}

// function to find tiny names among an array of friends name

function tinyFriend(friends){
    for(i=0; i<friends.length; i++){
        friends[i]=friends[i].trim();
         if(friends[i].length==0){
             return ('May be you have missed any of your friends name');
         }
     }  
     var smallestLength=friends[0].length;
     for(i=1;i<friends.length;i++){
        if(friends[i].length<smallestLength){
            smallestLength=friends[i].length;
        }
     }
    var tinyArray=[];
    for(i=0; i<friends.length;i++){
        if(friends[i].length==smallestLength){
            tinyArray.push(friends[i]);
        }
    }
    return tinyArray;
} 

