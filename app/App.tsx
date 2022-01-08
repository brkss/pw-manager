import { MainNavigation } from "./src/navigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <MainNavigation />
    </NativeBaseProvider>
  );
}
