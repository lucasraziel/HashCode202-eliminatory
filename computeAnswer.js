function computeRemainingDays(signUpLine, index, libraries, numberOfDays) {
    let remainingDays = numberOfDays;
    for (let i = 0; i <= index; i++) {
        remainingDays -= libraries[signUpLine[i]].signUpDuration;
    }
    return remainingDays;
}

export default function computeAnswer(data, coeficients) {
    const { numberOfDays, libraries, numberOfLibraries } = data;

    const signUpLine = [];

    let daysSpent = 0;

    let i = 0;

    while (daysSpent < numberOfDays) {
        const { index } = coeficients[i];

        daysSpent += libraries[i].signUpDuration;

        if (daysSpent < numberOfDays) {
            signUpLine.push(index);
        }
        i++;
        if (i >= numberOfLibraries) {
            break;
        }
    }

    const booksSent = [];

    const bookByLibrarySent = [];

    signUpLine.map((libraryIndex, index) => {
        const books = libraries[index].booksInLibrary;
        const sentBooks = [];
        const { bookCapacityPerDay } = libraries[index];
        const remainingDays = computeRemainingDays(
            signUpLine,
            index,
            libraries,
            numberOfDays
        );
        const numberOfBooksWillBeSent = remainingDays * bookCapacityPerDay;

        for (let j = 0; j < numberOfBooksWillBeSent && j < books.length; j++) {
            if (!booksSent[books[j].index]) {
                sentBooks.push(books[j].index);
                booksSent[books[j].index] = true;
            }
        }
        console.log({ index, sentBooks });
        if (sentBooks.length > 0) {
            bookByLibrarySent.push({
                index,
                sentBooks,
            });
        } else {
            signUpLine.filter(value => value !== index);
        }
    });
    console.log(bookByLibrarySent);

    return {
        signUpLine,
        daysSpent,
        bookByLibrarySent,
    };
}
