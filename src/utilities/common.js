import storeItems from '../data/items.json'

// filter the names list with input value
export function getNamesList(val) {
    return storeItems.filter((item) => {
        // ignore cases
        // for case matching only
        // return item.toLowerCase().includes(val.toLowerCase())
        // for case matching in sequence
        return item.toLowerCase().indexOf(val.toLowerCase()) === 0
    })
}

// own debounce function
export function debounceFunction(func, delay) {
    let timer;
    return function () {
        let self = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(self, args)
        }, delay)
    }
}