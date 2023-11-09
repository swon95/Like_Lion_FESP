import { useAtom } from "jotai";
import { isDarkAtom } from "../global/atoms";

export default function Content() {
    const [isDark] = useAtom(isDarkAtom);
    return (
        <div className={`content ${isDark ? "dark" : "white"}`}>
            <p>
                이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.
            </p>
        </div>
    );
}
