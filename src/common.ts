const formatSeconds = (sec: number): string => {
    if (!sec) return '--:--:--';

    const rounded = Math.floor(sec);
    const hours = Math.floor(rounded / 3600);
    const minutes = Math.floor((rounded - (hours * 3600)) / 60);
    const seconds = rounded - (hours * 3600) - (minutes * 60);

    return `${addOptionalZero(hours)}:${addOptionalZero(minutes)}:${addOptionalZero(seconds)}`
}

const addOptionalZero = (num: number): string => {
    return `${num < 10 ? '0' + num : num}`
}

const debounce = (callback: Function, wait: number) => {
    let timeout: any = null
    return (...args: any[]) => {
        const next = () => callback(...args)
        clearTimeout(timeout)
        timeout = setTimeout(next, wait)
    }
}


export { formatSeconds, debounce };

