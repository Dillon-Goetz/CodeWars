// return the string with the letter with the most occurences


function maxCharacter(str){
    //map + count + max char
    let charMap = {}
    count = 0,
    maxChar = null

    //map for chars in str + freq
    for (const char of str){
        charMap[char] = charMap[char] + 1 || 1
    }

    //loop and find most freq char
    for (const char in charMap){
        if (charMap[char] > count){
            count = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}