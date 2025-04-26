

export function isUnique(str: string){

}

export function compress(str: string):string{
    let compreString = str.split("")

    console.log(compreString)

    return "kfkfkf"
}


interface MatrizNumerica {
    datos: number[][]; // Array bidimensional de números
}


export function rotate(matrix: MatrizNumerica): number[][]{
   const matrixData: number[][] = matrix.datos;
    let newArray : number[][] = [];

    for(let i = 0; i < matrixData.length ; i++){
        let index: number[] = matrixData.map(e => e[i])
        newArray = [...newArray,index]
    }
    return newArray;
}
