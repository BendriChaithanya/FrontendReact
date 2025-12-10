function Greet()
{
   let msg="Hello";
   let fullName="Chaithanya Bendri";
    const student={
      id:101,
      name:"Chaithu",
      course:"React Js",

    };
    const fruits=["Apple","Banana","Mango","Oramge"];
    let listitems=fruits.map(fruit=>(<li>{fruit}</li>

    ))
    const employees=[
      {id:101,name:"Chaithanya",salary:75000},
      {id:101,name:"yogesh",salary:85000},
      {id:101,name:"Harish",salary:57000}
    ];
    let employeeslist=employees.map(employee=>(<li>{employee.id}{employee.name}{employee.salary}</li>

    ))
  
  return(
    <>
    <h1>{msg}</h1>
      <h1>{fullName}</h1>
      <h1>Good Morning.....</h1>
      <h2>student Details:</h2>
      <p>Id:{student.id}</p>
      <p>Name:{student.name}</p>
      <p>Cource:{student.course}</p>
      <h2>Fruits list:</h2>
      <ol>{listitems}</ol>
      <h2>Employee list:</h2>
      <ul>{employeeslist}</ul>
      </>
    );
}
export default Greet;