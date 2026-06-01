import {merge} from '../src/merge';

describe('merge function', () => {
    it('should merge 3 arrays correctly', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [6, 4, 2];
        const collection_3 = [0, 7, 8];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('should handle one empty array', () => {
        const collection_1 = [1, 5];
        const collection_2: number[] = []; 
        const collection_3 = [2, 4];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 4, 5]);
    });

    it('should handle duplicate values', () => {
        const collection_1 = [1, 3, 3];
        const collection_2 = [4, 3, 2];
        const collection_3 = [1, 3, 5];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 1, 2, 3, 3, 3, 3, 4, 5]);
    });
});