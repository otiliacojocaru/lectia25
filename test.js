// // const testFunc=()=>{
// //     console.log('pass')
// //     return 1;
// // }

// // const test1 = testFunc

// // console.log('test',test1())

// /////////alt exercitiu:

// const obj= {
//     a:'key',
//     b:{
//         c:{
//             e:'value'
//         }
//     }
// }

// // const objCopy = JSON.stringify(obj)

// // console.log(JSON.parse(objCopy))

// //sau mai scurt:

// const obj1 = JSON.parse(JSON.stringify(obj))
// obj1.b.c.e='new'


// console.log(obj)
// console.log(obj1)


const obj = {
    a: 'value'
}

localStorage.setItem('item', JSON.stringify(obj))


const valueFromStorage = JSON.parse(localStorage.getItem('item'))

valueFromStorage.a = 'new value'
localStorage.setItem('item', JSON.stringify(valueFromStorage))

