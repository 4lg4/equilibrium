
class Equilibrium {
    constructor(numbersArray) {
        if(!numbersArray) {
            // just basic test it should test if all positions are numbers also
            throw new Error('An Array of numbers are required');
        }

        this.numbers = numbersArray;
        this._equilibrium = [];
        this._equilibriumFast = [];
    }

    _sum(arr){
        var total = 0;
        arr.forEach(function(item){
            total += item;
        })
        return total;
    }

    // this code returns the first equilibrium found
    _executeNormal(){
        for(var i=1; i<this.numbers.length+1; i++){
            var leftSum = this._sum(this.numbers.slice(0,i));
            var rightSum = this._sum(this.numbers.slice(i+1,this.numbers.length));

            if(leftSum === rightSum){
                // console.log('Equilibirum [',i,']');
                return i;
            }
        }

        return -1;
    }

    // this code returns the first equilibrium
    _executeFast(){
        var sum = this._sum(this.numbers);
        var leftSum = 0;

        for(var i = 0; i < this.numbers.length; ++i){
            sum -= this.numbers[i];

            if(leftSum == sum){
                return i;
            }

            leftSum += this.numbers[i];
        }

        return -1;
    }


    // this code returns an array of equilibrium parts
    _executeAllNormal(){
        for(var i=1; i<this.numbers.length+1; i++){
            var leftSum = this._sum(this.numbers.slice(0,i));
            var rightSum = this._sum(this.numbers.slice(i+1,this.numbers.length));

            if(leftSum === rightSum){
                // console.log('Equilibirum [',i,']');
                this._equilibrium.push(i);
            }
        }

        return (this._equilibrium.length > 0) ? this._equilibrium : -1;
    }

    // this code returns an array of equilibrium parts
    _executeAllFast(){
        var sum = this._sum(this.numbers);
        var leftSum = 0;

        for(var i = 0; i < this.numbers.length; ++i){
            sum -= this.numbers[i];

            if(leftSum == sum){
                // return i;
                this._equilibriumFast.push(i);
            }

            leftSum += this.numbers[i];
        }

        return (this._equilibriumFast.length > 0) ? this._equilibriumFast : -1;
    }


    getAll(){
        return this._executeAllNormal();
    }

    getAllFast(){
        return this._executeAllFast();
    }

    getFirst(){
        return this._executeNormal();
    }

    getFirstFast(){
        return this._executeFast();
    }
}

export { Equilibrium }
