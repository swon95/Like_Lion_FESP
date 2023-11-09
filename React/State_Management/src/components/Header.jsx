import { useAtom } from "jotai";
import { isDarkAtom } from "../global/atoms";

export default function Header() {
    const [isDark] = useAtom(isDarkAtom);
    return (
        <header className={`header ${isDark ? "dark" : "white"}`}>
            <h1>Welcome! 프론트엔드 테킷 수강생</h1>
        </header>
    );
}
