export default function parseArticleDate(date) {
    return new Date(date)
        .toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"});
}