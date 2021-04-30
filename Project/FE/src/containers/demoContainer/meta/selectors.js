import { initialState } from './reducer';
/**
 * Get demo
 * @param state
 * @returns {Object}
 */
export const get = state => state.demo || initialState;
