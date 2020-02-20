import fs from 'fs';

export default function writeAnswer(computeData) {
    const fileName = '/home/lucas/google-hash-code/answer.txt';
    const { bookByLibrarySent } = computeData;

    let data = `${bookByLibrarySent.length}\n`;

    bookByLibrarySent.map(value => {
        data += `${value.index} ${value.sentBooks.length}\n`;
        data += `${value.sentBooks.join(' ')}\n`;
    });

    fs.writeFileSync(fileName, data, { encoding: 'utf-8' });
}
