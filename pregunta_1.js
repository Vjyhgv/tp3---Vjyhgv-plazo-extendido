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
                objReturn.status = "retirado del fuego luego de 20 minutos";
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



//  para ver la sintaxis y como funciona : https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises
function prepararPino(arrCondiciones){
    let log = []
    cocinarCebollas(arrCondiciones[0])
    .then( result =>{
        log.push(result);
        log.push({ cebollas:'reservadas', status: 'con agua' })
        // console.log(log);
        
        return sofreirIngredientes(arrCondiciones[1])          // me tiraba undefined con "sofreirIngredientes(arrCondiciones[1])"", chatgpt me dijo que me faltaba el return
    } )
    .then( result =>{
        log.push(result);
        // console.log(log);

        return terminarSofrito(arrCondiciones[2])
    })
    .then( result =>{
        log.push(result);
        // console.log(log);

        return seguirCocinando(arrCondiciones[3])
    })
    .then( result =>{
        log.push(result);
        // console.log(log);

        return dejarReposar(arrCondiciones[4])
    })
    .then( result => {
        log.push(result)
        console.log(log)
    })
    .catch(result => {
        console.log(result)
    })

}

let arrCondiciones = [true,true,true,true,true];
// let arrCondiciones = [true,true,false,true,true];
// let arrCondiciones = [true,true,true,true,false];
prepararPino(arrCondiciones);