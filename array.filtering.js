const pets = ['cat', 'dog', 'elephant']
const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
});
console.log(filtered);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nfilter = numbers.filter(function evenNumbers (numbers) {
  return (numbers % 2==0)
});
console.log(nfilter);