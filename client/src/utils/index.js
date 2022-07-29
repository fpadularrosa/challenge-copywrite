const validate_input = (  input  ) => {
    if(Number(input)) {
        alert('Must be a string')
    } else if(!input) {
        alert('write something')
    }
}

export default validate_input