import { useRecoilState } from "recoil";
import { globalState } from "../global/globalState";

export default function Footer() {
    const [isDark, setIsDark] = useRecoilState(globalState);

    const toggleThema = () => {
        setIsDark((prevIsDark) => !prevIsDark);
    };

    return (
        <footer className={`footer ${isDark ? "dark" : "white"}`}>
            <button onClick={toggleThema}>테마 변경</button>
        </footer>
    );
}
