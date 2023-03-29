module.exports = function searching(array, name){
  for(let i =0; i< studentList.length; i++){
    if(studentList[i]==="name"){
      console.log(i);
    }else {
      console.log(`해당 순서는 ${name}이 아닙니다.`)
    }
  }
} 
//commonJS 방식

// export default  function searching(array, name){
//   for(let i =0; i< studentList.length; i++){
//     if(studentList[i]==="name"){
//       console.log(i);
//     }else {
//       console.log(`해당 순서는 ${name}이 아닙니다.`)
//     }
//   }
// } 

//esm방식