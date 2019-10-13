#!/usr/bin/env node

import { startGame } from '..';
import * as game from '../games/brain-calc';

startGame(game.rules, game.generateQuestion);
