function displaydata(data){
    result.value+=data
}  

function empty(){
    result.value=""
}

function evaluateresult(){
    result.value=eval(result.value)
}

function backspace(){
    data=result.value
    result.value=data.slice(0,-1)
}