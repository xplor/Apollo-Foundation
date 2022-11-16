const createColorList = (primaryColor, secondaryColor) => {

    const primary50 = chroma.mix(primaryColor, 'white', 0.9, 'hsl').hex();
    const primary100 = chroma.mix(primaryColor, 'white', 0.7, 'hsl').hex();
    const primary200 = chroma.mix(primaryColor, 'white', 0.6, 'hsl').hex();
    const primary300 = chroma.mix(primaryColor, 'white', 0.4, 'hsl').hex();
    const primary400 = chroma.mix(primaryColor, 'white', 0.2, 'hsl').hex();
    const primary500 = chroma(primaryColor).hex();
    const primary600 = chroma.mix(primaryColor, 'black', 0.2, 'hsl').hex();
    const primary700 = chroma.mix(primaryColor, 'black', 0.4, 'hsl').hex();
    const primary800 = chroma.mix(primaryColor, 'black', 0.6, 'hsl').hex();
    const primary900 = chroma.mix(primaryColor, 'black', 0.7, 'hsl').hex();
    const primary1000 = chroma.mix(primaryColor, 'black', 0.9, 'hsl').hex();
    const primaryDMGradStart = chroma.mix(primaryColor, 'white', 0.2, 'hsl').alpha(.2).hex();
    const primaryDMGradEnd = chroma.mix(primaryColor, 'white', 0.2, 'hsl').alpha(.0).hex();

    const secondary50 = chroma.mix(secondaryColor, 'white', 0.9, 'hsl').hex();
    const secondary100 = chroma.mix(secondaryColor, 'white', 0.7, 'hsl').hex();
    const secondary200 = chroma.mix(secondaryColor, 'white', 0.6, 'hsl').hex();
    const secondary300 = chroma.mix(secondaryColor, 'white', 0.4, 'hsl').hex();
    const secondary400 = chroma.mix(secondaryColor, 'white', 0.2, 'hsl').hex();
    const secondary500 = chroma(secondaryColor).hex();
    const secondary600 = chroma.mix(secondaryColor, 'black', 0.2, 'hsl').hex();
    const secondary700 = chroma.mix(secondaryColor, 'black', 0.4, 'hsl').hex();
    const secondary800 = chroma.mix(secondaryColor, 'black', 0.6, 'hsl').hex();
    const secondary900 = chroma.mix(secondaryColor, 'black', 0.7, 'hsl').hex();
    const secondary1000 = chroma.mix(secondaryColor, 'black', 0.9, 'hsl').hex();
    const secondaryDMGradStart = chroma.mix(secondaryColor, 'white', 0.2, 'hsl').alpha(.2).hex();
    const secondaryDMGradEnd = chroma.mix(secondaryColor, 'white', 0.2, 'hsl').alpha(.0).hex();

    const contrastTarget = 4.5
    const textColor = "#292632"
    const textReverse = "#FFFFFF"
    var textOnPrimary = ""
    var textOnSecondary = ""

    function checkContrast() {
        const primaryContrast = chroma.contrast(textColor, primaryColor);
        const secondaryContrast = chroma.contrast(textColor, secondaryColor);

        if (primaryContrast > contrastTarget) {
            textOnPrimary = textColor
        } else {
            textOnPrimary = textReverse
        }

        if (secondaryContrast > contrastTarget) {
            textOnSecondary = textColor
        } else {
            textOnSecondary = textReverse
        }
    };
    
    checkContrast();

    function updateCSS() {
        root.style.setProperty(`--xpl-color-primary50`, primary50);
        root.style.setProperty(`--xpl-color-primary100`, primary100);
        root.style.setProperty(`--xpl-color-primary100`, primary100);
        root.style.setProperty(`--xpl-color-primary200`, primary200);
        root.style.setProperty(`--xpl-color-primary300`, primary300);
        root.style.setProperty(`--xpl-color-primary400`, primary400);
        root.style.setProperty(`--xpl-color-primary500`, primary500);
        root.style.setProperty(`--xpl-color-primary600`, primary600);
        root.style.setProperty(`--xpl-color-primary700`, primary700);
        root.style.setProperty(`--xpl-color-primary800`, primary800);
        root.style.setProperty(`--xpl-color-primary900`, primary900);
        root.style.setProperty(`--xpl-color-primary1000`, primary1000);
        root.style.setProperty(`--xpl-color-brand-primary-gradient-start-dm`, primaryDMGradStart);
        root.style.setProperty(`--xpl-color-brand-primary-gradient-start-dm`, primaryDMGradEnd);
        root.style.setProperty(`--xpl-color-text-on-primary-lm`, textOnPrimary);

        root.style.setProperty(`--xpl-color-secondary50`, secondary50);
        root.style.setProperty(`--xpl-color-secondary100`, secondary100);
        root.style.setProperty(`--xpl-color-secondary100`, secondary100);
        root.style.setProperty(`--xpl-color-secondary200`, secondary200);
        root.style.setProperty(`--xpl-color-secondary300`, secondary300);
        root.style.setProperty(`--xpl-color-secondary400`, secondary400);
        root.style.setProperty(`--xpl-color-secondary500`, secondary500);
        root.style.setProperty(`--xpl-color-secondary600`, secondary600);
        root.style.setProperty(`--xpl-color-secondary700`, secondary700);
        root.style.setProperty(`--xpl-color-secondary800`, secondary800);
        root.style.setProperty(`--xpl-color-secondary900`, secondary900);
        root.style.setProperty(`--xpl-color-secondary1000`, secondary1000);
        root.style.setProperty(`--xpl-color-brand-secondary-gradient-start-dm`, secondaryDMGradStart);
        root.style.setProperty(`--xpl-color-brand-secondary-gradient-start-dm`, secondaryDMGradEnd);
        root.style.setProperty(`--xpl-color-text-on-secondary-lm`, textOnSecondary);
    }

    updateCSS();
};