import useStore from "../context/store";

export default function Footer() {
    const { isDark, toggleThema } = useStore();
    return (
        <footer className={`footer ${isDark ? "dark" : "white"}`}>
            <button onClick={toggleThema}>테마 변경</button>
        </footer>
    );
}
