#!/usr/bin/env node

import { startGame } from '..';
import * as game from '../games/brain-progression';

startGame(game.rules, game.generateQuestion);
