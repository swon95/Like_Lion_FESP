import { useRecoilValue } from "recoil";
import { globalState } from "../global/globalState";

export default function Header() {
    const isDark = useRecoilValue(globalState);
    return (
        <header className={`header ${isDark ? "dark" : "white"}`}>
            <h1>Welcome! 프론트엔드 테킷 수강생</h1>
        </header>
    );
}
