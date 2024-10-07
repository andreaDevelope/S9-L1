interface smartphone {
    credit:number;
    callMinuts: number;
}

class SmartphoneUser implements smartphone{
    private name: string;
    private surname: string;
    credit: number = 0
    callMinuts: number;

    constructor(_name:string, _surname:string, _credit:number=0, _callMinuts:number=0 ){
        this.name = _name
        this.surname = _surname
        this.credit = _credit
        this.callMinuts = _callMinuts

    }

    getName(){
        return this.name
    }

    setName(name:string){
        this.name = name 
    }

    getSurname(){
        return this.surname
    }

    setSurname(surname: string){
        this.surname = surname
    }

    charge(dollar:number){
        this.credit += dollar
    }

    call(minuts: number){
        let dollarForMinut: number = 0.20
        let totDollar: number = minuts * dollarForMinut
        if(this.credit > totDollar){
            this.callMinuts += minuts

            this.credit = this.credit - totDollar
        }else{
            console.log('fai una ricarica my friends')
        }

    }

    _404(){
        return this.credit
    }

    getCallsMinuts(){
        return this.callMinuts
    }

    resetCallMinuts(){
        this.callMinuts = 0
    }

}

const user = new SmartphoneUser('nome1', 'cognome1')

user.charge(10)
user.call(10)
console.log(user._404())

user.setName('Tamma')
console.log(user.getName())
