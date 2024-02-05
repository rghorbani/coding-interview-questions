/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
    const numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'twenty one',
        'twenty two',
        'twenty three',
        'twenty four',
        'twenty five',
        'twenty six',
        'twenty seven',
        'twenty eight',
        'twenty nine',
    ];
    let hour = h;
    if (m > 30) {
        hour += 1;
        if (hour >= 24) {
            hour -= 24;
        }
    }
    switch (m) {
        case 0: {
            return `${numbers[hour]} o' clock`;
        }
        case 15: {
            return `quarter past ${numbers[hour]}`;
        }
        case 30: {
            return `half past ${numbers[hour]}`;
        }
        case 45: {
            return `quarter to ${numbers[hour]}`;
        }
    }
    
    if (m > 30) {
        return `${numbers[60 - m]} minute${60 - m === 1 ? '' : 's'} to ${numbers[hour]}`;
    } else {
        return `${numbers[m]} minute${m === 1 ? '' : 's'} past ${numbers[hour]}`;
    }
}