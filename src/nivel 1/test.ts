// tests/isPalindrome.test.ts
import { isPalindrome, isAnagram, countVowels } from './index';

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


describe('countVowels', () => {
  it('should return 5, because "murcielago" has 5 vocals', () => {
    expect(countVowels('murcielago')).toBe(5)
  });
  it('should return 4 because "caserola has 4 vocals"', () => {
    expect(countVowels('caserola')).toBe(4)
  });
})

