export function comparePathNamePrefixes(pathname, prefix) {
    const pathNameSegments = pathname.split('/');
    const prefixSegments = prefix.split('/');
    return prefixSegments.every((prefixSegment, index) => prefixSegment === pathNameSegments[index]);
}
