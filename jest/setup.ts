console.log('[Jest] Setting up!');

console.log = jest.fn();
console.group = jest.fn();
console.dir = jest.fn();


export {};