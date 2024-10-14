import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import useHabitStore, { Habit } from "../store/store";
import { CheckCircle, Delete } from "@mui/icons-material";

const HabitList = () => {
  const { habits, removeHabit, toggleHabit } = useHabitStore();

  const today = new Date().toISOString().split("T")[0];

  const getStreak = (habit: Habit) => {
    let streak = 0;

    const currentDate = new Date();

    while (true) {
      const dateString = currentDate.toISOString().split("T")[0];
      if (habit.completedDates.includes(dateString)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  };
  return (
    <>
      <Box className="flex flex-col gap-4 mt-3">
        {habits.map((habit) => (
          <Paper key={habit.id} elevation={2} className="p-4">
            <Grid container alignItems={"center"}>
              <Grid xs={12} sm={6}>
                <Typography variant="h6">{habit.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {habit.frequency}
                </Typography>
              </Grid>
              <Grid xs={12} sm={6}>
                <Box className="flex justify-end gap-2">
                  <Button
                    variant="outlined"
                    color={
                      habit.completedDates.includes(today)
                        ? "success"
                        : "primary"
                    }
                    startIcon={<CheckCircle />}
                    onClick={() => toggleHabit(habit.id, today)}
                  >
                    {habit.completedDates.includes(today)
                      ? "Completed"
                      : "Mark Complete"}
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Delete />}
                    onClick={() => removeHabit(habit.id)}
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box className="mt-4">
              <Typography>Current Streak : {getStreak(habit)}</Typography>
              <LinearProgress
                variant="determinate"
                value={(getStreak(habit) / 30) * 100}
                className="mt-2"
              />
            </Box>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default HabitList;
