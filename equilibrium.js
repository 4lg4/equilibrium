var Equilibrium = function solution(A) {
    if(!A) {
        // just basic test it should test if all positions are numbers also
        throw new Error('An Array of numbers are required');
    }


    this._sum = function(arr){
        var total = 0;
        arr.forEach(function(item){
            total += item;
        })
        return total;
    }

    // this code returns the first equilibrium found
    this._execute = function(){
        for(var i=1; i<A.length+1; i++){
            var leftSum = this._sum(A.slice(0,i));
            var rightSum = this._sum(A.slice(i+1,A.length));

            if(leftSum === rightSum){
                // console.log('Equilibirum [',i,']');
                return i;
            }
        }

        return -1;
    }

    // this code returns the first equilibrium
    this._executeEquilibriumFast = function(){
        var sum = this._sum(A);
        var leftSum = 0;

        for(var i = 0; i < A.length; ++i){
            sum -= A[i];

            if(leftSum == sum){
                return i;
            }

            leftSum += A[i];
        }

        return -1;
    }


    // this code returns an array of equilibrium parts
    this._equilibrium = [];
    this._executeAllEquilibrium = function(){
        for(var i=1; i<A.length+1; i++){
            var leftSum = this._sum(A.slice(0,i));
            var rightSum = this._sum(A.slice(i+1,A.length));

            if(leftSum === rightSum){
                // console.log('Equilibirum [',i,']');
                this._equilibrium.push(i);
            }
        }

        return (this._equilibrium.length > 0) ? this._equilibrium : -1;
    }

    // this code returns an array of equilibrium parts
    this._equilibriumFast = [];
    this._executeAllEquilibriumFast = function(){
        var sum = this._sum(A);
        var leftSum = 0;

        for(var i = 0; i < A.length; ++i){
            sum -= A[i];

            if(leftSum == sum){
                // return i;
                this._equilibriumFast.push(i);
            }

            leftSum += A[i];
        }

        return (this._equilibriumFast.length > 0) ? this._equilibriumFast : -1;
    }


    this.getAllEquilibirum = function(){
        return this._executeAllEquilibrium();
    }

    this.getAllEquilibirumFast = function(){
        return this._executeAllEquilibriumFast();
    }

    this.getFirstEquilibirum = function(){
        return this._execute();
    }

    this.getFirstEquilibirumFast = function(){
        return this._executeEquilibriumFast();
    }
}

var numbers = [-1, 3, -4, 5, 1, -6, 2, 1];
var equilibrium = new Equilibrium(numbers);
console.log('simple code ',equilibrium.getAllEquilibirum());
console.log('fast code ',equilibrium.getAllEquilibirumFast());
console.log('simple code ',equilibrium.getFirstEquilibirum());
console.log('fast code ',equilibrium.getFirstEquilibirumFast());
