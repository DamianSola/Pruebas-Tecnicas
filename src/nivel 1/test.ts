// tests/isPalindrome.test.ts
import { isPalindrome, isAnagram, countVowels, reverseWords, isIsogram, longestWord } from './index';

xdescribe('isPalindrome', () => {
  it('should return true for a valid palindrome', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(isPalindrome('Hello world')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
});


xdescribe('isAnagram', () => {
  it('should return true for a valid anagram', () => {
    expect(isAnagram('llave sorda','El Salvador')).toBe(true)
  });
  it('should return false fror a non-anagram', () => {
    expect(isAnagram('pelotero', "rompe pelota")).toBe(false)
  });
  it('should return tre for a valid anagram', () => {
    expect(isAnagram('animales', "milanesa")).toBe(true)
  })
})


xdescribe('countVowels', () => {
  it('should return 5, because "murcielago" has 5 vocals', () => {
    expect(countVowels('murcielago')).toBe(5)
  });
  it('should return 4 because "caserola has 4 vocals"', () => {
    expect(countVowels('caserola')).toBe(4)
  });
})

xdescribe('reverseWords', () => {
  it('should return "autito un compre me".', () => {
    expect(reverseWords("me compre un autito")).toBe('autito un compre me')
  });
  it('should return "Mexico". ', () => {
    expect(reverseWords("Mexico")).toBe("Mexico")
  });
  it('should return "frente al van que los son soldados mejores Los". ', () => {
    expect(reverseWords("Los mejores soldados son los que van al frente")).toBe("frente al van que los son soldados mejores Los")
  })
})

xdescribe('isIsogram', () => {
  it('should return true for a valid isogram', ()=>{
    expect(isIsogram("murcielago")).toBe(true)
  });
  it('should return false for a invalid isogram', () => {
    expect(isIsogram('argentinos')).toBe(false)
  });
  it('should return false for a valid isogram', ()=>{
    expect(isIsogram("murcielago negro")).toBe(false)
  });
})

describe('longestWord', () => {
  it('should return "Mariposas" because is the longest', ()=>{
    expect(longestWord("Mariposas escapan por la ventana")).toBe("Mariposas")
  });
  it('should return "argentinos" because is the longest', () => {
    expect(longestWord('vivan los soldados argentinos')).toBe("argentinos")
  });
  it('should return "compre" because is the longest', ()=>{
    expect(longestWord("Me compre un auto")).toBe("compre")
  });
})