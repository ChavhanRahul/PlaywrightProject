// const input = [1,2,1,3,1]
// const inputstr = "I Love India"


// const SetRemoveduplucate = [...new Set(input)]
// console.log(SetRemoveduplucate)

// const FilterRemoveduplucate = input.filter((ch, i, arr) => arr.indexOf(ch) ===i)
// console.log(FilterRemoveduplucate);

// const Mathmax = Math.max(...input)
// console.log(Mathmax)

// const Mathmin = Math.min(...input)
// console.log(Mathmin)

// const reducesum = input.reduce((acc,num) => acc+num,0)
// console.log(reducesum)

// const Setsum = [...new Set(input)].reduce((acc,num)=> acc+num,0)
// console.log(Setsum)

// const reverseint = [...input.reverse().join("")]
// console.log(reverseint)

// const reversestr = inputstr.split("").reverse().join("")
// console.log(reversestr)

// const reverseworldstr = inputstr.split(" ").map(world=> world.split("").reverse().join("")).reverse().join(" ")
// console.log(reverseworldstr)

// const inputarr = [1, 2, 3, 4, 5];

// const unique = [...new Set(inputarr)];   // remove duplicates
// unique.sort((a, b) => b - a);            // sort descending

// const secondHighest = unique[1];
// console.log(secondHighest); // 4




// Table1 name, id, gender
// Table2 id, salary, dept
// Name female employee QA dept highest salary   

// SELECT t1.name
// FROM Table1 t1
// JOIN Table2 t2 ON t1.id = t2.id;
// WHERE t1.gender = 'Female'
// AND t2.dept ='QA'
// ORDER BY t2.salary DESC
// LIMIT 1;





