import { test1 } from './test1';
import { test2 } from './test2';
import { test3 } from './test3';

import TITLES from '../../../../../common/titles.js';

export const TESTS_NUMBERS = TITLES.map(({ title }, index) => ({
  test: [test1, test2, test3][index],
  title,
}));
