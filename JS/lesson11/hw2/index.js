function countOccurrences(str1, str2){
     if(str2 == ''){
        return null
     }

    return (str1.split(str2).length - 1)
    
}
// const result = countOccurrences('i write some text for test', '');
// console.log(result)


