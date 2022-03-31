console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//--------------------------------Assignment--------------------------------//

let basket = [];

//------Stretch Goal------//
const maxItems = 5;
//------------------------//


function addItem( itemToAdd, arrayToAddTo ) {
    if(( typeof itemToAdd != 'string' ) || //ensure that a string was passed
        //------Stretch Goal------//
        ( isFull(arrayToAddTo))) { //ensure that the array isn't full
        //------------------------//
        return false; //return false if not
    }
    arrayToAddTo.push(itemToAdd); //add itemToAdd to basket array
    return true; //return true after item is added
}

console.log( 'Expected [], got: ', basket );
console.log('Expected false, got: ', addItem( 12, basket ));
console.log('Expected true, got: ', addItem( 'bone meal', basket ));
console.log( 'Expected [\'bone meal\'], got: ', basket );


function listItems( arrayToList ) {
    for( let i = 0; i < arrayToList.length; i++ ) { //loop over given array
        console.log( arrayToList[i] ); //console log each index
    }
}

listItems( basket ); 
// outputs -> bone meal

function empty( arrayToEmpty ) {
    arrayToEmpty.splice(0, arrayToEmpty.length); //splice the entire array to remove all indices
}

empty( basket ); 
console.log( 'Expect [], got: ', basket );

//--------------------------------Stretch Goals--------------------------------//

function isFull( arrayToCheck ) {
    if (arrayToCheck.length < maxItems) { //if the length of the input array is less than maxItems
        return false; //the array is not full, return false
    }
    return true; //the array is full, return true
}

function removeItem( itemToRemove, arrayToRemoveFrom ) {
    let remove = arrayToRemoveFrom.indexOf( itemToRemove ); //declare variable with the index of the item to remove
    if( remove === -1 ) return null; //indexOf will return -1 if no index is found, so return null if that is the case
    return arrayToRemoveFrom.splice( remove, 1 ); //splice the index at 'remove' and return the removed item
}

addItem( 'fish', basket );
addItem( 'brown sugar', basket );
addItem( 'motor oil', basket );
addItem( 'calcium suppliment', basket );

console.log( `Expected 'fish,brown sugar,motor oil,calcium suppliment', got: ${basket}` );
console.log( `Expected brown sugar, got ${removeItem('brown sugar', basket)}` );
console.log( `Expected null, got: ${removeItem('rice', basket)}` );
console.log( `Expected 'fish,motor oil,calcium suppliment', got ${basket}` );


