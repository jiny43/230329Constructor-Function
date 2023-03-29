function c(year,month,day) {
  //return을 객체로 주었다.
  
    this.year = year;
    this.month = month;
    this.day = day;
}

// const test = c(2023,3,29).year; //객체를 리턴했기 때문에 .year 이 가능해졌다.
// console.log(test); //? 2023 

function user(id, password, email){
  this.id = id,
  this.password = password,
  this.email = email
};

const d = new user("jieun","1234","je_eun2735@naver.com");
console.log(d); 
//틀을 만들어놓고 객체를 찍어내자 = 생성자 함수를 사용
