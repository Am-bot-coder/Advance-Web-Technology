function createResult(body,error){
    if(body){
        return successResult(body)
    }
    else{
        return errorResult(error)
    }
}

function successResult(body){
    const result = {}
    result.status = "Success"
    result.body = body
    return result
}

function errorResult(error){
    const result = {}
    result.status = "Error"
    result.error = error
    return result
}

module.exports = {createResult,successResult,errorResult}