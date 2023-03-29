// import {searching} from './search-module';

const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];


console.log(studentList[studentList.length-1]);
//배열[마지막번째]
//lenght 는 항상 마지막 인덱스보다 +1 많다.
//마지막원소는 lenght 보다 -1 이다.
for(let i =0; i< studentList.length; i++){
  if(studentList[i]==="정지은"){
    console.log(i);
  } else{
    console.log("해당 순서는 정지은씨가 아닙니다.");
  }
}

const example = {
  order: 0,
  name:"강지민"
}
//!생성자 함수로 만들면 어떤 규격(명세)에 의해 만들어졌는지 알 수 있다 instance
function makeObject(order,name){
    this.order=order;
    this.name=name;
    
    function order(order){
      if(typeof(order)==="number"){
        return this._order;
      }
    }
}


let a = new makeObject("0","강지민");
console.log(a);