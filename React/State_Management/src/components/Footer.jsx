import { useSnapshot } from "valtio";
import { appState } from "../global/proxy";

export default function Footer() {
    const snap = useSnapshot(appState);
    const toggleTheme = () => {
        appState.isDark = !snap.isDark;
    };
    return (
        <footer className={`footer ${snap.isDark ? "dark" : "white"}`}>
            <button onClick={toggleTheme}>테마 변경</button>
        </footer>
    );
}
