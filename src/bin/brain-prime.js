#!/usr/bin/env node

import { startGame } from '..';
import * as game from '../games/brain-prime';

startGame(game.rules, game.generateQuestion);
