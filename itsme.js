const itsMe = {
  firstName: "jung",
  lastName:"jieun",
  age:20,
  email:"je_eun2735@naver.com",
  phone:"01047292735",
  address:"대전 서구 청사로 282",
  like:"곱창먹고싶다 소곱창",
  hate:"존재하는 사람들",
  sleepTime:"am1:00이후",
  food:"지금먹고있는 카페라떼아이스"
};

function gaeIn(firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const a = new gaeIn("jung","jieun");
console.log(a);

