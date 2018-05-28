export const recursive = (value) => {
    if (value === 0) {
        return 0;
    } else if (value === 1) {
        return 1;
    } else {
        return recursive(value-1)+recursive(value-2);
    }
}