For implementing function with this interface
    merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []
That returns sorted array by ascending.

given
     collection_1, collection_3 already sorted from min(0) to max
     collection_2 already sorted from max to min(0)

Please provide accessible repo of typescript project with unit test
and provide ## How to Execute the Code


```typescript
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

### Given Conditions
- `collection_1`, `collection_3` are already sorted from min to max (ascending).
- `collection_2` is already sorted from max to min (descending).

## Setup and Dependencies

To set up the project and install dependencies, run the following commands in the root of the project:

```bash
npm init -y

# Install TypeScript, Jest, and their type definitions as development dependencies
npm install -D typescript jest ts-jest @types/jest

# Initialize TypeScript configuration (creates tsconfig.json)
npx tsc --init

# Initialize Jest configuration (creates jest.config.js)
npx ts-jest config:init
```

## Unit Tests

to run the test run the following commands in the root of the project:

```bash
cd test
npm run test
```