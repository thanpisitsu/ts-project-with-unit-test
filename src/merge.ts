export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = collection_2.length - 1;
    let k = 0;

    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
        let val1 = i < collection_1.length ? collection_1[i] : Infinity;
        let val2 = j >= 0 ? collection_2[j] : Infinity;
        let val3 = k < collection_3.length ? collection_3[k] : Infinity;

        let min = val1;
        if (val2 < min ) min = val2;
        if (val3 < min ) min = val3;

        if (min === val1) {
            result.push(val1);
            i++;
        } else if (min === val2) {
            result.push(val2);
            j--;
        } else {
            result.push(val3);
            k++;
        }
    }

    return result;
}
