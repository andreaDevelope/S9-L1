var SmartphoneUser = /** @class */ (function () {
    function SmartphoneUser(_name, _surname, _credit, _callMinuts) {
        if (_credit === void 0) { _credit = 0; }
        if (_callMinuts === void 0) { _callMinuts = 0; }
        this.credit = 0;
        this.name = _name;
        this.surname = _surname;
        this.credit = _credit;
        this.callMinuts = _callMinuts;
    }
    SmartphoneUser.prototype.getName = function () {
        return this.name;
    };
    SmartphoneUser.prototype.setName = function (name) {
        this.name = name;
    };
    SmartphoneUser.prototype.getSurname = function () {
        return this.surname;
    };
    SmartphoneUser.prototype.setSurname = function (surname) {
        this.surname = surname;
    };
    SmartphoneUser.prototype.charge = function (dollar) {
        this.credit += dollar;
    };
    SmartphoneUser.prototype.call = function (minuts) {
        var dollarForMinut = 0.20;
        var totDollar = minuts * dollarForMinut;
        if (this.credit > totDollar) {
            this.callMinuts += minuts;
            this.credit = this.credit - totDollar;
        }
        else {
            console.log('fai una ricarica my friends');
        }
    };
    SmartphoneUser.prototype._404 = function () {
        return this.credit;
    };
    SmartphoneUser.prototype.getCallsMinuts = function () {
        return this.callMinuts;
    };
    SmartphoneUser.prototype.resetCallMinuts = function () {
        this.callMinuts = 0;
    };
    return SmartphoneUser;
}());
var user = new SmartphoneUser('nome1', 'cognome1');
user.charge(10);
user.call(10);
console.log(user._404());
user.setName('Tamma');
console.log(user.getName());
