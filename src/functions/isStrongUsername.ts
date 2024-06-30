const isStrongUsername = (username: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9_]{6,}$/;
    return usernameRegex.test(username);
};

export default isStrongUsername;