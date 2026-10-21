const CreateResult = function(data,error){
    if(data){
        return SuccessResult(data)
    }
    else{
        return ErrorResult(error)
    }
}

function SuccessResult(data){
    result = {}
    result.status="Success",
    result.data = data
    return result
}

function ErrorResult(error){
    result = {}
    result.status="Error",
    result.error = error
}