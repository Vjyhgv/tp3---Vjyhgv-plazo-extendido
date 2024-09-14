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




function prepararPino(arrCondiciones){
    
}


let arrCondiciones = [true,true,true,true,true];
prepararPino(arrCondiciones);