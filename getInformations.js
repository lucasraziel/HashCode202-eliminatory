import fs from 'fs';

export default function getInformation(filename) {
    const libraries = [];

    const data = fs.readFileSync(filename, { encoding: 'utf-8' });

    const lines = data.split('\n');

    const [numberOfBooks, numberOfLibraries, numberOfDays] = lines[0]
        .split(' ')
        .map(value => Number(value));

    const books = lines[1].split(' ').map(value => Number(value));

    lines.splice(0, 2);

    lines.map((line, index) => {
        if (index % 2 === 0 && line.length > 0) {
            const [
                booksInLibrary,
                signUpDuration,
                bookCapacityPerDay,
            ] = line.split(' ').map(value => Number(value));
            libraries.push({
                booksInLibrary,
                signUpDuration,
                bookCapacityPerDay,
            });
        }
        if (index % 2 !== 0 && line.length > 0) {
            const booksInLibrary = line
                .split(' ')
                .map(value => {
                    return {
                        index: Number(value),
                        value: books[Number(value)],
                    };
                })
                .sort(function(a, b) {
                    return b.value - a.value;
                });
            const library = libraries[libraries.length - 1];
            libraries[libraries.length - 1] = { ...library, booksInLibrary };
            console.log(booksInLibrary);
        }
    });

    return {
        books,
        libraries,
        numberOfDays,
        numberOfBooks,
        numberOfLibraries,
    };
}
