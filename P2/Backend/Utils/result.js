function CreateResult(data,error){
    if(data){
        return SuccessResult(data)
    }
    else{
        FailureResult(error)
    }
}


function SuccessResult(data){
    result  = {}
    result.status = "Success"
    result.data = data
    return result
}

function FailureResult(error){
    result  = {}
    result.status = "Error"
    result.error = error
    return result
}

module.exports = CreateResult