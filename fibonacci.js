function fibonacci(numeros){
    let array = []
  
    for(let i = 0;i < numeros ;i++){
      if(i === 0){
        array.push (0);
      }  else if(i === 1){
        array.push(1);
      } else {
         array.push(array[i - 1] + array[i - 2]);
      }
  
      array
    }
    return array;
  }
  
  console.log(fibonacci(8))