//filter

const students =[
    {
        name : "s1",
        marks:45
        
    },

    {
        name : "s2",
        marks:55
        

    },

    {
        name : "s3",
        marks:25
        

    }
];

// for(let i=0;i<students.length;i++)
// {
//     console.log(students[i]);
// }

//  students.forEach((i) => {
//      console.log(students[i]);
    
// });


// for(let i of students){
//     i.marks=i.marks+10;
//     console.log([i]);
// }

//filter ...



// const failed =students.filter((i)=> i.marks<45)
//     if(i.marks<45)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(failed);


//map ......................................................................

const fu = students.map((i)=>{
    return{
        concat: ` ${i.name} ${i.marks} `
    }
})

console.log(fu);