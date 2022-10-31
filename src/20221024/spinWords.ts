// DESCRIPTION:
// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words 
// reversed (Just like the name of this Kata). Strings passed in 
// will consist of only letters and spaces. Spaces will be included only 
// when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

export function spinWords(words: string): string {
    let w = words.split(" ")
    let res: string[] = []
    w.forEach((word) => {
      if (word.length >= 5) {
        let x = word.split("").reverse()
        res.push(x.join(""))
      } else {
        res.push(word)
      }
    })
  return res.join(" ")
}


// BEST

// export const spinWords = (words: string): string => words.split(' ')
//                         .map(m => m.length >= 5 
//                                 ? m.split('').reverse().join('') 
//                                 : m)
//                         .join(' ')