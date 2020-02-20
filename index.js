import getInformation from './getInformations';
import mountCoeficient from './mountCoeficient';
import computeAnswer from './computeAnswer';
import writeAnswer from './writeAnswer';

const filename =
    '/home/lucas/google-hash-code/files/f_libraries_of_the_world.txt';

const data = getInformation(filename);

console.log(data);

const coeficients = mountCoeficient(data);

console.log(coeficients);

const compute = computeAnswer(data, coeficients);

console.log(compute);

writeAnswer(compute);
