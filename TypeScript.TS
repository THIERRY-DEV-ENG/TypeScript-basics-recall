let age: number = 21;
console.log(age);

let Name: string = "thierry";
console.log(Name);

let scores: number[] = [10, 20, 30, 40, 50];
console.log(scores);


let User: {
    name: string;
    age: number} = {
        name: "thierry",
        age: 21

    };
console.log(User);


type User = { id: string; name: string; age: number };
type Status = "active" | "inactive" | "pending";

let User2: User = { id: "123", name: "thierry", age: 21 };
let Status: Status = "active";
console.log(User2);
console.log(Status);




let myName : string 
| number = "thierry";
console.log(myName);



let string = "1" | "2" | "3";
let Name: string = "1";
console.log(Name);






interface Person { name: string ; age: number ;}
let Person: Person = { name: "thierry", age: 21 };
console.log(Person);

interface Employee extends Person { jobTitle: string; }
let Employee: Employee = { name: "thierry", age: 21, jobTitle: "developer" };
console.log(Employee);




type Admin = { isAdmin :boolean; }
type user = { name: string };
type AdminUser = Admin & user;
let AdminUser: AdminUser = { isAdmin: true, name: "thierry" };
console.log(AdminUser);


export default function navBar (){

    const = [open, setOpen] = useState(0);
    const links

}




