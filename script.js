//  let  num = [1, 2, 3]
//  num.reverse (3,2,1)
//  console.log(num)

// let num = [0, 1, false, 2, undefined, '', 3, null]
// console.log(num.filter(Boolean))

// let num = [1, 2, 3, 1, 2]
// let  num2 = num.filter((element, index) => num.indexOf(element) === index);
//  console.log (num2)


// const num=['a', 'b', 'c']
// const num2=[1, 2, 3]
// console.log ([...num,...num2])


// let a = [1, 2, 3]
// a.push(4, 5, 6)
// console.log(a)

// let a = [1, 2, 3]
// a.unshift(4, 5, 6)
// console.log(a)

// let a  = [1, 2, 3, 4, 5]
// a.splice(1,3,4)
// console.log (a)

// let obj = {
//  js:'test',
//  jq: 'hello',
//  css: 'world'
//  }
//  console.log(Object.keys(obj))

// let a = ['Капуста', 'Репа', 'Редиска', 'Морковка']
// let b = a.join()
// console.log (b)

// let a = 'КаЖдЫй ОхОтНиК'
//  const change = (a) => {
//     return [...a].map(item => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join('')
//  }
// console.log (change(a))


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6]
// let arr3 = (arr1.length > arr2.length ? arr1 : arr2)
//     .map( (element, index) => (arr2[index] === undefined) ? element : element + arr2[index])
// console.log (arr3)