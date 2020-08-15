import { createSelector } from 'reselect';

const todosSelector = (state: any) => state;

export const getTodos = createSelector(
    [todosSelector],
    (state) => state
);

