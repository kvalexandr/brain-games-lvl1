#!/usr/bin/env node

import { startGame } from '..';
import * as game from '../games/brain-even';

startGame(game.rules, game.generateQuestion);