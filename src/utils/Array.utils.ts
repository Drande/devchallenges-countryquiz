export const getRandomElements = <T>(arr: T[], num: number):T[] => {
    let output: T[] = [];
    let indexUsed: number[] = [];
    while (output.length < num) {
        const nextIndex = Math.floor(Math.random() * arr.length);
        if(indexUsed.includes(nextIndex)) { continue; }
        indexUsed.push(nextIndex);
        output.push(arr[nextIndex]);
    }
    return output;
}