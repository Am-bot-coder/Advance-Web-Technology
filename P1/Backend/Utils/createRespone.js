function respone(body,error){
    if(body){
        return createSuccess(body)
    }
    else{
        return createError(error)
    }
}

function createSuccess(body){
    const result = {}
    result.status = "Success",
    result.body = body
}


function createError(error){
    const result = {}
    result.status = "error",
    result.error = error
}

module.exports = {respone,createSuccess,createError}