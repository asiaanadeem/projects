/*
read the names
sort alphabetically
create new file....sorted.txt
fs.readfilesync
fs.writefile.sync
*/

//we imported fs module so that we can use method foe accessing files
import fs from "fs";
//using readFileSync method we have read the content of file names_list.txt
const personNames = fs.readFileSync("names_list.txt", "utf-8");
//now we have split the string to an array by everyline
const namesArray = personNames.split("\n");
//then we have sorted the array alphabetically
const arraysorting = namesArray.sort();
//then we have removed the first element from the array which was empty
arraysorting.shift();
//now we have joined the array into string by lines in between
const stringFormat = arraysorting.join("\n");
//now we have created a file named sorted.txt and pasted the string format content in this file
fs.writeFileSync("sorted.txt", stringFormat);
