import { appState } from "./global/proxy";
import "./App.css";
import Page from "./components/Page";
import { useSnapshot } from "valtio";

function App() {
    const snap = useSnapshot(appState);
    const toggleTheme = () => {
        appState.isDark = !appState.isDark;
    };
    return <Page isDark={snap.isDark} toggleTheme={toggleTheme} />;
}

export default App;
