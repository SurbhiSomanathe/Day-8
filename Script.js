class person {
    constructor(name,father_name,aadhar_no,last_name,gender,address,mobile_No,Email) {
      this.name = name ;
      this.father_name = father_name ;
      this.last_name = mother_name;
      this.aadhar_no = aadhar_no;
      this.gender = gender; ;
      this.address = address ;
      this.mobile_No = mobile_No; ;
      this.Email = Email;
   }
    person_name() {
      return `my name is  ${this.name}`;
    }
  
    person_father_name() {
      return `my father name is ${this.father_name}`;
    }
    person_last_name() {
      return `my last name is ${this.last_name}`;
    }
    person_aadhar_no() {
      return `aadhar_no  is ${this.aadhar_no}`;
    }
    person_gender() {
      return `i am ${this.gender}`;
    }
    person_address() {
      return `my addressis ${this.adress}`;
    }
    person_mobile_no() {
      return `my mobile_no is ${this.mobile_No}`;
    }
    person_Email() {
      return `my email is ${this.Email}`;
    }
  }
  
  const surbhi_obj = new person("surbhi","dudharam","somanathe","5858-5858-5858","F","nagpur","9001190000","bhi@gmail.com");
  
  console.log(surbhi_obj.person_name());
  console.log(surbhi_obj.person_father_name());
  console.log(surbhi_obj.person_last_name());
  console.log(surbhi_obj.person_aadhar_no());
  
  console.log(surbhi_obj.person_gender());
  console.log(surbhi_obj.person_address());
  console.log(surbhi_obj.person_mobile_no());
  console.log(surbhi_obj.person_Email());

















  4.	write a class to calculate uber price.


  class UberPriceCalculator{
    constructor(basefare,ridedistance,bookingfee){
      
        this.basefare=basefare;
        this.ridedistance=ridedistance
        this.bookingfee=bookingfee;

    }
    getprice(){
        console.log(" UBER PRICE IS "+(this.basefare + this.ridedistance)+ this.bookingfee ))
    }
    
     setprice(newbasefare,newridedistance,newbookingfee){
            
            this.basefare=newbasefare;
            this.ridedistance=newridedistance
            this.bookingfee=newbookingfee;
    
        }    
}
var cost1=new UberPriceCalculator();
cost1.setprice(100,20,15,20)
cost1.getprice()


  