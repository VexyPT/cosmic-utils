const isAlphanumeric = (input: string): boolean => {
    const alphanumericRegex = /^[a-z0-9]+$/i;
    return alphanumericRegex.test(input);
};

export default isAlphanumeric;