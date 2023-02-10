import { jest } from '@jest/globals';
import 'reflect-metadata';

global.jest = jest;

jest.unstable_mockModule('dotenv', () => ({ config: jest.fn() }));
