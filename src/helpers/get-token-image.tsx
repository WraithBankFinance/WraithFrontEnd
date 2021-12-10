import TimeImg from "../assets/tokens/WRAITH.svg";
import MemoImg from "../assets/tokens/sWRAITH.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "wrth") {
        return toUrl(TimeImg);
    }

    if (name === "swraith") {
        return toUrl(MemoImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
