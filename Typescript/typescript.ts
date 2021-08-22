export{}
// let message='Hello world'
// console.log(message)
function add(num1: number,num2:number=10){
    let sum= num1 + num2;
    //console.log(sum);
    }
    add(5);

    //any declearation
    let anytype:any
    anytype='jega'
    anytype=10
    anytype=true
    console.log(anytype)

    //interface function
interface fullname{
    lastname : string
        Firstname:string
}

function Name(person:fullname) {
    console.log(`${person.Firstname} ${person.lastname}`)
}
let p= {
    lastname :'Jega',
    Firstname:'Samuel'
}

Name(p);

//Assigning value
    /* function Name(person:{lastname:string, Firstname:string}) {
        console.log(`${person.Firstname} ${person.lastname}`)
    }
    let p= {
        lastname :'Jega',
        Firstname:'Samuel'
    }
    
    Name(p); */

    //class
    class employe{
        employee:string
        constructor(name){
            this.employee=name
                    }
                    greet(){
                        console.log(`Welcome ${this.employee}`)
                    }
                   
    }
    let emp1= new employe('Jega')
    console.log(emp1.employee)
    emp1.greet()

    //inheritance
    class manager extends employe{
        constructor(managername:String){
            super(managername)             
            
        }

    work(){
        console.log(`Manager Assigning Duties `);
    }
    }
    let man1=new manager('Jega')
    man1.greet()
    man1.work()
    console.log(man1.employee)