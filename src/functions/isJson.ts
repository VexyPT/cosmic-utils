const isJson = (input: string): boolean => {
    try {
        JSON.parse(input);
        return true;
    } catch (e) {
        return false;
    }
};

export default isJson;
