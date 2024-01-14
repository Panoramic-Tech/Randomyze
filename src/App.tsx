import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex w-full h-100 min-h-screen flex-col space-y-4 p-8 justify-center items-center">
      <h1 className="text-3xl font-bold underline">Welcome to Know it Today</h1>
      <div>
        <Button>Randomyze</Button>
      </div>
    </div>
  );
}

export default App;
