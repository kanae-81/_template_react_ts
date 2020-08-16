import { createSelector } from 'reselect';

const todosSelector = (state: any) => state.todos;

export const getTodos = createSelector(
    [todosSelector],
    (state) => state
);

