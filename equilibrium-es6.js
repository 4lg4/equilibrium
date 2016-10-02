import { Equilibrium } from './equilibrium-class'

var numbers = [-1, 3, -4, 5, 1, -6, 2, 1];
var equilibrium = new Equilibrium(numbers);
console.log('simple code ',equilibrium.getAll());
console.log('fast code ',equilibrium.getAllFast());
console.log('simple code ',equilibrium.getFirst());
console.log('fast code ',equilibrium.getFirstFast());
