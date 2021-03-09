const sentence = 'This is another string to test';


const typewriter = function (string) {

//  let typed = '' ;
 let delay = 50 /// increment time??
 
 for (let i = 0; i < sentence.length; i++) {
   // typed += char
   setTimeout(() => {
     process.stdout.write(sentence[i]);      
     if(i === sentence.length - 1){
      process.stdout.write("\n")
      };
    }, delay);
    delay += 50
  }  
  
  // console.log("this is typed -->", typed)
}

typewriter(sentence)