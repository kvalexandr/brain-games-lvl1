#!/usr/bin/env node

import { startGame } from '..';
import * as game from '../games/brain-gcd';

startGame(game.rules, game.generateQuestion);
