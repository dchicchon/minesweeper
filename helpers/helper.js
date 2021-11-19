export const evilRotate = (targetArr, numTurns) => {
    let inputArr = JSON.parse(JSON.stringify(targetArr))
    let size = inputArr.length
    for (let turn = 0; turn < numTurns; turn++) {

        // this depth option is not needed for our purposes. maybe we can make this a boolean
        for (let depth = 0; depth < Math.floor(inputArr.length / 2); depth++) {
            let focusIndexStart = depth                     // which index will we focus on left/top
            let focusIndexEnd = size - 1 - depth            // which index will we focus on right/bottom
            // Make a tempArr here
            let tempArr = inputArr[focusIndexEnd].slice(focusIndexStart, focusIndexEnd)
            // For each side of array
            for (let side = 0; side < 4; side++) {
                // First two are using focusIndexStart left/top
                let constantIndex = side < 2 ? focusIndexStart : focusIndexEnd
                for (let iteratingIndex = focusIndexStart; iteratingIndex < focusIndexEnd; iteratingIndex++) {
                    // left and right
                    if (side % 2 === 0) {
                        let currentIndex = side === 0 ? iteratingIndex : focusIndexEnd - iteratingIndex + depth
                        let tmp = inputArr[currentIndex][constantIndex]
                        inputArr[currentIndex][constantIndex] = tempArr[iteratingIndex - depth];
                        tempArr[iteratingIndex - depth] = tmp;
                    }

                    // top and bottom
                    else {
                        // this is where things go wrong 
                        let currentIndex = side === 1 ? focusIndexEnd - iteratingIndex + depth : iteratingIndex
                        let tmp = inputArr[constantIndex][currentIndex]
                        inputArr[constantIndex][currentIndex] = tempArr[iteratingIndex - depth];
                        tempArr[iteratingIndex - depth] = tmp;
                    }
                }
            }
        }
    }
    return inputArr
}