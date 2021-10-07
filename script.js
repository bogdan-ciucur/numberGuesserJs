function Person (name, dob) {
    this.name = name;
    this.birth = new Date(dob);
    this.calculateAge = function() {
         const diff  = Date.now() - this.birth.getTime();
         const ageDate = new Date(diff);
         return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

let bog = new Person('bog', '12-20-2000');
// let bog = new Person('caca');
console.log(bog.calculateAge());