import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import useHabitStore from "../store/store";
import { CheckCircle, Delete } from "@mui/icons-material";

const HabitList = () => {
  const { habits } = useHabitStore();

  const today = new Date().toISOString().split("T")[0];
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
                  >
                    {habit.completedDates.includes(today)
                      ? "Completed"
                      : "Mark Complete"}
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Delete />}
                  >
                    Remove
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </>
  );
};

export default HabitList;
