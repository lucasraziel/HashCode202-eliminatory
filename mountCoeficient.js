export default function makeCoeficient(data) {
    const coeficients = [];

    data.libraries.map((library, index) => {
        const { booksInLibrary, signUpDuration, bookCapacityPerDay } = library;
        const averageValue =
            booksInLibrary.reduce((acc, value) => acc + value.value, 0) /
            booksInLibrary.length;

        const coeficient =
            (averageValue + bookCapacityPerDay) /
            (signUpDuration + booksInLibrary.length);
        coeficients.push({ coeficient, index });
    });

    return coeficients.sort(function(a, b) {
        return b.coeficient - a.coeficient;
    });
}
