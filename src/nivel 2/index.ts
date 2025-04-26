

export function isUnique(str: string){

}

export function compress(str: string):string{
  if(str.length === 0 ) return "";
  let newString = "";
  let count = 1;

  for(let i = 1; i <= str.length ; i++){
    if(str[i] === str[i-1]){
        count ++;
    }else{
        newString += count + str[i-1];
        count = 1
    }
}
    return newString.length < str.length ? newString : str;
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
