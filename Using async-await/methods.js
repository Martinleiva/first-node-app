const fs = require('fs');
const util = require('util');// Modulo de utilidades

/* 
-Convertir la función readdir, que se maneja con callbacks, para manejarla 
con promesas o async-await a través de promisify
*/ 
const readdir = util.promisify(fs.readdir);

module.exports = {

    //1 - Create a method to get all the files inside a given path  
    async getAllFiles(givenPath) {
        try {
            const files = await readdir(givenPath);
            return files;
        } catch (error) {
            console.log(error);
        }
    },

    //2 - Create a method to Print all the files
    printFiles(files) {
        console.log('All files', files);
    },

    //3 - Create a method to sort and print the files 
    printFilesSorted(files) {
        console.log('All files sorted', files.sort().reverse());
    },

    //4 - Create a method to get the amount of files starting with one letter
    amountFiles(files) {

        let amount = 0;

        files.map((file) => {
            if(isNaN(parseInt(file.charAt(0)))) {
                amount = amount + 1;
            }
        });
            
        console.log('The amount of files starting with one letter: ' +amount);
    }
}