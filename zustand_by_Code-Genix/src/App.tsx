import { Button } from "./components/ui/button";
import Count from "./components/ui/Count";
import { useStore } from "./store/store";

const App = () => {
  const store = useStore();
  return (
    <>
      <div className="flex gap-5">
        <Button onClick={() => store.increment()}> + </Button>
        <Count />
        <Button onClick={() => store.decrement()}> - </Button>
      </div>
    </>
  );
};

export default App;
