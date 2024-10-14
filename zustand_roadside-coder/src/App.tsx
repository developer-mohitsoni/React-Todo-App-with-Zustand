import { Button } from "@mui/material";
import useHabitStore from "./store/store";

const App = () => {
  const store = useHabitStore();

  console.log(store);

  return (
    <>
      <div>App</div>
      <Button variant="contained">Contained</Button>
    </>
  );
};

export default App;
