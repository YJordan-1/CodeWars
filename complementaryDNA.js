/* 
DESCRIPTION
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// ANSWER

function DNAStrand(dna) {
  // Create an empty result string
  let result = "";

  // Iterate through the characters in the input string
  for (let i = 0; i < dna.length; i++) {
    // Get the current character
    let char = dna[i];

    // Find the complementary character and add it to the result string
    if (char === "A") {
      result += "T";
    } else if (char === "T") {
      result += "A";
    } else if (char === "C") {
      result += "G";
    } else if (char === "G") {
      result += "C";
    }
  }

  // Return the result string
  return result;
}
