//filtering word
const words = ['Eating', 'Washing', 'Sleeping','Driving'];

//using filter function
const filtered = words.filter(word => word.length <7);
console.log(filtered);