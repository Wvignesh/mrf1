const scores = [
      {
        marks: 32,
        name: "Yvette Merritt"
      },
      {
        marks: 57,
        name: "Lillian Ellis"
      },
      {
        marks: 22,
        name: "Mccall Carter"
      },
      {
        marks: 21,
        name: "Pate Collier"
      },
      {
        marks: 91,
        name: "Debra Beard"
      },
      {
        marks: 75,
        name: "Nettie Hancock"
      },
      {
        marks: 20,
        name: "Hatfield Hodge"
      }
    ];
      
    
 const average = (array) => array.reduce((a, b) => a + b) / array.length;
    console.log(average([32, 52,27,21, 91,75,20]));
       
let max = scores.reduce(function(top, current) {
    return (top.marks > current.marks) ? top : current
})

console.log(max);


