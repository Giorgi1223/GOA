export function countFirstLetterOccurrence(str) {
    if (!str) return 0;
    const firstLetter = str[0];
    return str.split('').filter(letter => letter === firstLetter).length;
}
