import { useAtom } from "jotai";
import { isDarkAtom, toggleAtom } from "../global/atoms";

export default function Footer() {
    const [isDark] = useAtom(isDarkAtom);
    const [, toggleThema] = useAtom(toggleAtom);

    return (
        <footer className={`footer ${isDark ? "dark" : "white"}`}>
            <button onClick={toggleThema}>테마 변경</button>
        </footer>
    );
}
