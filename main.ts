#! /usr/bin/env node
asyns function wordCounter(){
import inquirer from "inquirer"

let userAns = await inquirer.prompt([
    {
        name : "word",
        type :"input",
        message :"Please enter your sentence"

    }
])
let word_count = userAns.word.trim().split(/\s+/).length
console.log(`Your Sentence has ${word_count} words`);

}
 wordCounter();
