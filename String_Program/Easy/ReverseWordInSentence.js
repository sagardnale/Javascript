//Reverse Words in a Sentence

function reverseWords(sentence){
    return sentence.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("   I am sagar     "));