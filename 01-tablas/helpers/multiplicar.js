const fs = require('fs');




//solucion 1
// const crearArchivo = (base = 5) => {

//     return new Promise (( resolve, reject)=>{
//         console.log('===============');
//         console.log('  Talba del:', base );
//         console.log('===============');
    
//         let salida = '';
    
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }
    
//         console.log(salida);
    
    
    
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
    
//         resolve(`tabla-${base}.txt`);
//     })

    

// }

const crearArchivo = async(base = 5) => {

    try {
        console.log('===============');
        console.log('  Talba del:', base );
        console.log('===============');
    
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        console.log(salida);
    
    
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
    
    

    

}

module.exports = {
     crearArchivo
}

