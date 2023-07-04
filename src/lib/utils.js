export const serialiseNonPOJO = (obj) => {
    return structuredClone(obj);
};