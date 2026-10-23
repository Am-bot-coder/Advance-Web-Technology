function createResult(data,error){
    if(data){
        return SuccessResult(data)
    }
    else{
        return ErrorResult(error)
    }
}

function SuccessResult(data){
    result = {}
    result.status = 'Success'
    result.data = data
    return result
}

function ErrorResult(error){
    result = {}
    result.status = 'Error'
    result.error = error
    return result
}

module.exports = {createResult,SuccessResult,ErrorResult}