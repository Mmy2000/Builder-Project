/**
 * 
 * @param {string} text - the input must be sliced.
 * @param {number} [max = 50] - the max length before truncation.
 * @returns - the sliced text, with an ellipsis (...) appended if truncated
 */
export function textSlicer(text:string , max:number = 50){
    if (text.length >= max) {
        return `${text.slice(0, max)} ...`;
    }
    else{
        return text
    }
}