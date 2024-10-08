import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectStatusFilter = (state) => state.filters.status;

// export const selectVisibleTasks = (state) => {
//   // Використовуємо інші селектори
//   const tasks = selectTasks(state);
//   const statusFilter = selectStatusFilter(state);

//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter((task) => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log("Calculating visible tasks. Now memoized!");

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);
      case statusFilters.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTasksCount = createSelector([selectTasks], (tasks) => {
  console.log("Calculating task count. Now memoized!");
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});

// export const selectTasksCount1 = (state) => {
//   const tasks = selectTasks(state);

//   console.log("Calculating task count. X2 point");
//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// };
