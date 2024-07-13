
//go : 어떤 집단에 속한 임원들의 임금깂

const go = function (group) {
    //base 
    if (Array.isArray(group)) {
        console.log('isArray')
        return group.map(m => m.salary).reduce((p, c) => p + c);
    }

    //recursive step
    let sum = 0;
    for (const [name, subGroup] of Object.entries(group)) {
        console.log(name);
        const groupSum = go(subGroup);
        console.log(groupSum);
        sum += groupSum;
        //sum += go(subGroup);
    }

    return sum;

}

let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

console.log(go(company));