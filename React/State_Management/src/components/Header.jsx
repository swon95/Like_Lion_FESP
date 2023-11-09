import useStore from "../context/store";

export default function Header() {
    const { isDark } = useStore();
    return (
        <header className={`header ${isDark ? "dark" : "white"}`}>
            <h1>Welcome! 프론트엔드 테킷 수강생</h1>
        </header>
    );
}
