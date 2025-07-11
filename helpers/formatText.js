function formatTextToJSX(text, isSingle, questionNumber, variantId) {
    const parts = [];
    let currentIndex = 0;

    const regex = /(\$\w.*?\$|@@)/g;
    const matches = text.matchAll(regex);

    for (const match of matches) {
        const matchStart = match.index;
        const matchText = match[0];

        if (currentIndex < matchStart) {
            parts.push(text.slice(currentIndex, matchStart));
        }

        if (matchText.startsWith("$") && matchText.endsWith("$")) {
            parts.push(
                <strong key={`bold-${currentIndex}`}>{matchText.slice(1, -1)}</strong>
            );
        } else if (matchText === "@@") {
            parts.push(
                <div
                    className="inline-flex items-center justify-center border border-natural_gray-300 text-natural_gray-400 rounded-lg min-w-32 mx-2 py-1">{isSingle ? questionNumber : "i".repeat(variantId)}</div>
            );
        }

        currentIndex = matchStart + matchText.length;
    }

    if (currentIndex < text.length) {
        parts.push(text.slice(currentIndex));
    }

    return parts;
}

function formatTextToJSXCloze(text) {
    const parts = [];
    let currentIndex = 0;
    let blankIndex = 1; // Start numbering from 1

    const regex = /(\$\w.*?\$|@@)/g;
    const matches = text.matchAll(regex);

    for (const match of matches) {
        const matchStart = match.index;
        const matchText = match[0];

        if (currentIndex < matchStart) {
            parts.push(text.slice(currentIndex, matchStart));
        }

        if (matchText.startsWith("$") && matchText.endsWith("$")) {
            parts.push(
                <strong key={`bold-${currentIndex}`}>{matchText.slice(1, -1)}</strong>
            );
        } else if (matchText === "@@") {
            parts.push(
                <div
                    key={`blank-${blankIndex}`}
                    className="inline-flex items-center justify-center border border-natural_gray-300 text-natural_gray-400 rounded-lg min-w-32 mx-2 py-1">
                    {blankIndex}
                </div>
            );
            blankIndex++;
        }

        currentIndex = matchStart + matchText.length;
    }

    if (currentIndex < text.length) {
        parts.push(text.slice(currentIndex));
    }

    return parts;
}

function formatTextToJSXInput(text, id, value) {
    const parts = [];
    let currentIndex = 0;
    let blankIndex = 0;

    const regex = /(\$\w.*?\$|@@)/g;
    const matches = text.matchAll(regex);

    for (const match of matches) {
        const matchStart = match.index;
        const matchText = match[0];

        if (currentIndex < matchStart) {
            parts.push(text.slice(currentIndex, matchStart));
        }

        if (matchText.startsWith("$") && matchText.endsWith("$")) {
            parts.push(
                <strong>{matchText.slice(1, -1)}</strong>
            );
        } else if (matchText === "@@") {
            parts.push(
                <input
                    name={id}
                    type="text"
                    defaultValue={value}
                    className="inline w-20 border border-gray-300 rounded text-center mx-1 text-sm"
                />
            );
        }

        currentIndex = matchStart + matchText.length;
    }

    if (currentIndex < text.length) {
        parts.push(text.slice(currentIndex));
    }

    return parts;
}

export {formatTextToJSX, formatTextToJSXInput, formatTextToJSXCloze};