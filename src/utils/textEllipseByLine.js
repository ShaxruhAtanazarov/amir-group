export const ellipseTextByLine = (line) => {
    return {
        display: "-webkit-box",
        WebkitLineClamp: line,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
    };
}