#!/usr/bin/node
const value = process.argv[2]

if (value === undefined || isNaN(value)) {
    console.log("Not A number")
}else{
    console.log(parseInt(value));
}

