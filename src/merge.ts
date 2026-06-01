export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = collection_2.length - 1;
    let k = 0;

    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
        const val1 = i < collection_1.length ? collection_1[i]! : Infinity;
        const val2 = j >= 0 ? collection_2[j]! : Infinity;
        const val3 = k < collection_3.length ? collection_3[k]! : Infinity;

        const min = Math.min(val1, val2, val3);

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
};