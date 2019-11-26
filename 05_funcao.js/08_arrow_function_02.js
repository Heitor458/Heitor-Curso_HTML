function pessoa() {
    this.idade = 0

    this.blablabla = function () {
        (function () {
            this.idade = 2
            this.idade++
            console.log(this.idade);

        })();
    };
}
var p;
( p = new pessoa).blablabla();
console.log(p.idade);


