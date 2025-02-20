#!/usr/bin/env node
import {getUserName} from '/home/old_town_road/frontend-project-44/src/cli.js';
import {isEven} from '/home/old_town_road/frontend-project-44/bin/brain-even.js';

console.log ("Welcome to the Brain Games!");

getUserName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

isEven();
