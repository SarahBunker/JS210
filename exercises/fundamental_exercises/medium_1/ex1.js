console.log((false && undefined)                          ); // false
console.log((false || undefined)                          ); // undefined
console.log(((false && undefined) || (false || undefined))); // false || undefined   >> undefined
console.log(((false || undefined) || (false && undefined))); // undefined || false   >> false
console.log(((false && undefined) && (false || undefined))); // false && undefined   >> false
console.log(((false || undefined) && (false && undefined))); // undefined && false   >> undefined
console.log(('a' || (false && undefined) || '')           ); // 'a'
console.log(((false && undefined) || 'a' || '')           ); // undefined || 'a' || ...  >> 'a'
console.log(('a' && (false || undefined) && '')           ); // 'a' && undefined && ... >> undefined
console.log(((false || undefined) && 'a' && '')           ); // undefined
