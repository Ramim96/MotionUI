export const padStart = <T,>(maxLength: number, valueToPad: string, value: T) => {

    return String(value).padStart(maxLength, valueToPad);
};