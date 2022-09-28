console.log("Welcome to Address BOOK System!")

class AddressBookContact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

constructor (...params){
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
}

    get firstName(){
    return this.firstName;
}

set firstName(firstName){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
    if(nameRegex.test(firstName)){
        this.firstName = firstName;
        }else {
        throw 'Name is Incorrect';
    }
}
}

let addressBookContact = new AddressBookContact("bhagavan", "Kommu","Ongole","Ongole","AP",523270,900000000, "abc.xyz@gmail.com");
console.log(addressBookContact)



