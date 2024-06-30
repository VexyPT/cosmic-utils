const isPalindrome = (input: string): boolean => {
    const normalized = input.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return normalized === normalized.split('').reverse().join('');
};

export default isPalindrome;
