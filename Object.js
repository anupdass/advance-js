const student=[
    {id:22,name:'Omar Sunny'},
    {id:12,name:'Kabilla'},
    {id:32,name:'Josim'},
    {id:52,name:'Khairul'},
    {id:42,name:'Subol'}
]

let newName = [];

student.map(function(element){
    let elements = element.name;
    newName.push(elements);
})

const names = student.map(s => s.name);
const filetIds = student.find(s => s.id>30);

console.log(filetIds);