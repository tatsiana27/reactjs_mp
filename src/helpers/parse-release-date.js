export function parseReleaseDate(value) {
    if (value) {
        return value.split('-')[0];
    }
}