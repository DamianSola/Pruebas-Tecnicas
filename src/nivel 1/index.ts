
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

  console.log(cleaned, cleaned2)
  // if(cleaned.length !== cleaned2.length) return false;





  // console.log(cleaned)
  return cleaned === cleaned2;
}

//misma cantidad de letras, no se prueden, quitar espacios