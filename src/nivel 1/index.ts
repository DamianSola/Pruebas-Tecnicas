
// es palindromo

export function isPalindrome(str: string): boolean {

      const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
      console.log(cleaned.split('').reverse().join(''))
      
      return cleaned === cleaned.split('').reverse().join('')
}


// es Anagrama

export function isAnagram (word1: string , word2: string) : boolean {
  const cleaned = word1.toLocaleLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('')
  const cleaned2 = word2.toLocaleLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('')
  return cleaned === cleaned2;
}


// contar vocales
export function countVowels (str: string): number {
  let vocals = ['a', 'e', 'i', 'o', 'u']
  const filtersLetter = str.split('').filter(e => vocals.includes(e))
  console.log(filtersLetter.length)
  return filtersLetter.length;
}

// palabras en orden invertido
export function reverseWords (str: string): string {
  const toReverse : string = str.split(' ').reverse().join(" ")
  console.log(toReverse)
  return toReverse;
}


export function isIsogram () {
  
}

export function longestWord () {

}