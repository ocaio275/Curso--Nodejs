function a(){
    console.log("executando function a()")
}

function b(){
    console.log("executando function b()")
}

function c(){
    console.log("exevutando function c()")
    b()
    a()
}

c()