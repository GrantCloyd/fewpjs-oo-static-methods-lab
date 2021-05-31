class Formatter {
   //add static methods here
   static capitalize(string) {
      return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
   }
   static sanitize(string) {
      return string.replace(/[^\w-'\s]+/g, "")
   }
   static titleize(string) {
      let capKeywords = ["The", "A", "An", "But", "Of", "And", "For", "At", "By", "From"]
      let arr = string.split(" ")
      let newArr = []
      arr.forEach(word => newArr.push(word[0].toUpperCase() + word.slice(1)))
      let wordIndex = 1
      newArr.slice(1).findIndex(word => {
         let arrIndex = capKeywords.indexOf(word)
         if (arrIndex !== -1) {
            newArr[wordIndex] = word.toLowerCase()
         }
         wordIndex++
      })

      return newArr.join(" ")
   }
}

// function titleize(string) {
//    let capKeywords = ["The", "A", "An", "But", "Of", "And", "For", "At", "By", "From"]
//    let arr = string.split(" ")
//    let newArr = []
//    arr.forEach(word => newArr.push(word[0].toUpperCase() + word.slice(1)))
//    let wordIndex = 1
//    newArr.slice(1).findIndex(word => {
//       let arrIndex = capKeywords.indexOf(word)
//       if (arrIndex !== -1) {
//          newArr[wordIndex] = word.toLowerCase()
//       }
//       wordIndex++
//    })

//    return newArr.join(" ")
// }

console.log(
   titleize("There are a lot of words here for me to try out and see if this works at all")
)
