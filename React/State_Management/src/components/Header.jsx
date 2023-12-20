import { useSnapshot } from "valtio";
import { appState } from "../global/proxy";

export default function Header() {
    const snap = useSnapshot(appState);
    return (
        <header className={`header ${snap.isDark ? "dark" : "white"}`}>
            <h1>Welcome! 프론트엔드 테킷 수강생</h1>
        </header>
    );
}
