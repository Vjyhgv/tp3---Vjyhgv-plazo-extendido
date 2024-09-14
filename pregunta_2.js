function cocinarCebollas(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(condicion) {
                const objReturn = {};
                objReturn.cebollas = true;
                objReturn.status = "blandas";
                resolve( objReturn);
                }
            else reject("Paso01: Fallo en cocinar cebollas");
        }, 1353);
    })
}

function sofreirIngredientes(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(condicion) {
                const objReturn = {};
                objReturn.sofrito = true;
                objReturn.status = "a fuego medio";
                resolve( objReturn);
                }
            else reject("Paso02: Fallo en el sofrito");
        }, 1803);
    })
}

function terminarSofrito(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
        if(condicion) {
                const objReturn = {};
                objReturn.sofrito = true;
                objReturn.status = "terminado con carne y aji decolor";
                resolve( objReturn);
                }
        else reject("Paso03: Fallo en el sofrito");
    }, 2007);
    })
}

function seguirCocinando(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(condicion) {
                const objReturn = {};
                objReturn.pino = true;
                objReturn.status = "retirado del fuego luego de 20minutos";
                resolve( objReturn);
                }
            else reject("Paso04: Fallo en el pino");
        }, 1857);
    })
}

function dejarReposar(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(condicion) {
            const objReturn = {};
            objReturn.pino = true;
            objReturn.status = "Termino de su reposo de 24 horas";
            resolve( objReturn);
            }
            else reject("Paso05: Fallo en el reposo");
        }, 1107);
    })
}



// manejo con async/await y manejo de errores con try y catch https://es.javascript.info/async-await
async function prepararPino(arrCondiciones){
    let log = []
    
    try{
        console.log("paso 1")
        let result = await cocinarCebollas(arrCondiciones[0])
        log.push(result)
        log.push({ cebollas:'reservadas', status: 'con agua' })
        console.log(log)

        console.log("paso 2")
        let result2 = await sofreirIngredientes(arrCondiciones[1])
        log.push(result2)
        console.log(log)

        console.log("paso 3")
        let result3 = await terminarSofrito(arrCondiciones[2])
        log.push(result3)
        console.log(log)

        console.log("paso 4")
        let result4 = await seguirCocinando(arrCondiciones[3])
        log.push(result4)
        console.log(log)

        console.log("Paso 5 y final")
        let result5 = await dejarReposar(arrCondiciones[4])
        log.push(result5)
        console.log(log)

    }
    catch (result) {
        console.log(result)
    }
}


let arrCondiciones = [true,true,true,true,true];
// let arrCondiciones = [true,true,false,true,true];
// let arrCondiciones = [true,true,false,true,false];
prepararPino(arrCondiciones);