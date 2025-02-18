
export default function countFirstLetterOccurrence(str) {
    if (!str) return 0;
    const firstLetter = str[0];
    return str.split('').filter(letter => letter === firstLetter).length;
}


export function toUpperCase(str) {
    return str.toUpperCase();
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}
