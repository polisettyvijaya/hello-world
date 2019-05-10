class exx{
    firstName: string;
    lastName: string;
    constructor(){
        this.firstName =" haii";
        this.lastName=" hello";

    }
    getfullname(){
        return this.firstName +" "+this.lastName;
    }

}
var ex=new exx();
console.log(ex.getfullname());
