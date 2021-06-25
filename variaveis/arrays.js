var pens;

pens = ['red', 'magenta', 'cyan', 'blue', 'green']
console.log('before:', pens)


// Size
console.log('length:', pens.length)

// Remove First Value
pens.shift()

// Add in front of Array
pens.unshift('purple', 'green')

// Remove last
pens.pop()

// Insert at end
pens.push('pink', 'light blue')

// Find index and remove n numbers after
pens.splice(3, 2)


// console.log(pens)

// Create a copy of a array
var newPens = pens.slice(2, 5)

// Return first element match after index
var index = pens.indexOf('pink')

// Return array itens separate by comma
var res = pens.join()


// remove by index
var index = newPens.indexOf('pink')
console.log('After', newPens)
newPens.splice(index, 1)
console.log('Before', newPens)


