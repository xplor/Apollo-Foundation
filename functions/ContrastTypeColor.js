const hexRegex = /^#[a-fA-F0-9]{6}$/;
const reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;

function parseToRgb(color) {
    if (typeof color !== 'string') {
        throw new Error('Value passed is not a string');
    }
    
    if (!color.includes('#')) {
        throw new Error('A valid hex value is required. Example: "#ffffff"');
    }
    
    if (color.match(hexRegex)) {
        return {
            red: parseInt(`${color[1]}${color[2]}`, 16),
            green: parseInt(`${color[3]}${color[4]}`, 16),
            blue: parseInt(`${color[5]}${color[6]}`, 16),
        };
    }
    
    if (color.match(reducedHexRegex)) {
        return {
            red: parseInt(`${color[1]}${color[1]}`, 16),
            green: parseInt(`${color[2]}${color[2]}`, 16),
            blue: parseInt(`${color[3]}${color[3]}`, 16),
        };
    }
    
    const rgbMatched = rgbRegex.exec(color)
    if (rgbMatched) {
        return {
            red: parseInt(`${rgbMatched[1]}`, 10),
            green: parseInt(`${rgbMatched[2]}`, 10),
            blue: parseInt(`${rgbMatched[3]}`, 10),
        };
    }
}
function getLuminance(color: string): number {
    if (color === 'transparent') return 0
    const rgbColor: { [string]: number } = parseToRgb(color)
    const [r, g, b] = Object.keys(rgbColor).map(key => {
        const channel = rgbColor[key] / 255
        return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
    })
    return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3))
}

function getContrast(color1: string, color2: string): number {
    const luminance1 = getLuminance(color1)
    const luminance2 = getLuminance(color2)
    return parseFloat(
        (luminance1 > luminance2
            ? (luminance1 + 0.05) / (luminance2 + 0.05)
            : (luminance2 + 0.05) / (luminance1 + 0.05)
        ).toFixed(2),
    )
}

function getForegroundColor(backgroundColor: string = themeColors.primary): string {
    const blackColor = grayscaleColors.black;
    const whiteColor = grayscaleColors.white;
    const blackContrastRatio = getContrast(backgroundColor, blackColor);
    const whiteContrastRatio = getContrast(backgroundColor, whiteColor);
    return blackContrastRatio > whiteContrastRatio ? blackColor : whiteColor;
};