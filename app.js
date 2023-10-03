// input String
let a="Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
// function to get final string
function getLongestStringWithMaxVowels(a){
    a=a.split(",").join("").split(" ")
    let maxStringCount=0
    let finalStrings=[]
    // for loop to strings with max character length and pushed to finalStrings array
    for(let i of a){
        if(maxStringCount<i.length){
            maxStringCount=i.length
            finalStrings.push(i)
        }
        else if(maxStringCount==i.length){
            finalStrings.push(i)
        }
    }
    let vowels=['a','e','i','o','u','A','E','I','O','U']
    // storing vowel count and string as key value pairs in map
    let obj=new Map()
    for(let j of finalStrings){
        let vowelCount=0
        for(let k of j){
            if(vowels.includes(k)){
                vowelCount++
            }
        }
        obj.set(vowelCount,j)
    }
    let finalString=''
    let count=0
    // checking each property of map and getting string with max vowels string
    for(let m of obj){
        if(count<m[0]){
            count=m[0]
        }
    }
    return obj.get(count)
}
console.log(`String with max vowels or longest string is: ${getLongestStringWithMaxVowels(a)}`);

