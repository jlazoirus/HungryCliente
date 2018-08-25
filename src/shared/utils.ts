export function randomInt(start , before) {
    return start + Math.floor(Math.random() * (before - start));
}

export function shuffle (array, size) {

    array = array.slice();

    for (let i = 0; i < array.length; i++) {
        const randomChoiceIndex = randomInt(i, array.length);
        [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
    }

    return array.slice(0, size);
}