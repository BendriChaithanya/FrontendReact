function AddNumbers(props){
    return(
        <>
        <h1>Add Numbers</h1>
        <h2>Number1:{props.num1}</h2>
        <h2>Number2:{props.num2}</h2>
        <h3>sum:{props.num1+props.num2}</h3>
        <h1>_____________________________________________________________</h1>
        </>
    )
}
export default AddNumbers;