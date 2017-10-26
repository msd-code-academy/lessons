export function removeFromArray(haystack, needle) {
    return haystack.filter(item => item === needle)
}

export function sumMembers(allParties) {
    return allParties
    .map(party => party.members)
    .reduce((a, b) => a + b, 0)
}
