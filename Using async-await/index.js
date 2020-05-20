/*
1 - Create a method to get all the files inside a given path  
2 - Create a method to Print all the files  
3 - Create a method to sort and print the files  
4 - Create a method to get the amount of files starting with one letter 
*/

const { getAllFiles, printFiles, printFilesSorted, amountFiles } = require('./methods');

async function main() {

    try {
        
        const files = await getAllFiles('./');
        
        printFiles(files);

        printFilesSorted(files);

        amountFiles(files);

    } catch (error) {
        console.log(error);    
    }
}

main();