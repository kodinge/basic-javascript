// let firstName = "Fika";
// let lastName = "Pasa";
// // const fullName = 'My name is ' + firstName + ' ' + lastName;
// const fullName = `My name is ${firstName} ${lastName}`;

// let people = [
//     'maradho',
//     'lani'
// ];

// let person = {
//     username: 'maradho',
//     age: 30
// };

// if (firstName == 'Tedy'){
//     console.log('Tedy');
// } else if (firstName == 'Lani') {
//     console.log('Lani');
// } else {
//     console.log('tidak ada');
// }
// // people.push('fika');
// people.unshift('fika');

// // console.log(person['age']);
// // console.log(people);

// let i = 1
// let inter = setInterval(()=>{
//     console.log(i);
//     if(i==4){
//         clearInterval(inter);
//     }
//     i++;
// }, 1000);

// for (let i = 2020; i <= new Date().getFullYear(); i++){
//     console.log(i);
// }

let people = [
    {
        firstname: 'tedy',
        lastname: 'pasa',
        age: 30
    },
    {
        firstname: 'lani',
        lastname: 'prastiwi',
        age: 27
    },
    {
        firstname: 'fika',
        lastname: 'mufida',
        age: 2
    }
];

// //filter return array
// const filterPeople = people.filter((item) => {
//     return item.age <= 27;
// });
// console.log(filterPeople);

//map return array with modified array
// const mapPeople = filterPeople.map((item) => {
//     return {
//         name: `${item.firstname} ${item.lastname}`,
//         age: item.age 
//     };
// });
// console.log(mapPeople);

//find return object
// const findPeople = people.find((item) => item.age <= 27)
// console.log(findPeople);

//foreach return value
// people.forEach((item) => console.log(`${item.firstname} ${item.lastname}`));

//some for check true or false
// people.some((item) => console.log(item.age < 30));

//every for check true or false at all list 
// people.every((item) => console.log(item.age < 30));

//reduce for calc/sum
// let reducePeople = people.reduce((currentItem, item) => {
//     return item.age + currentItem;
// }, 0);
// console.log(reducePeople);

//includes
let items = [1, 2, 3, 4, 5]
let includesItems = items.includes(3);
console.log(includesItems);
