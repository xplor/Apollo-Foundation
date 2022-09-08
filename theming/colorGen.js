function generateColorList(primaryColor, secondaryColor) {

    const themePrimary50 = chroma.mix(primaryColor, 'white', 0.9, 'hsl').hex();
    const themePrimary200 = chroma.mix(primaryColor, 'white', 0.6, 'hsl').hex();
    const themePrimary300 = chroma.mix(primaryColor, 'white', 0.4, 'hsl').hex();
    const themePrimary400 = chroma.mix(primaryColor, 'white', 0.2, 'hsl').hex();
    const themePrimary500 = chroma(primaryColor).hex();
    const themePrimary600 = chroma.mix(primaryColor, 'black', 0.2, 'hsl').hex();
    const themePrimaryGradStart = chroma.mix(primaryColor, 'white', 0.2, 'hsl').alpha(.2).hex();
    const themePrimaryGradEnd = chroma.mix(primaryColor, 'white', 0.2, 'hsl').alpha(.0).hex();
  
    const themeSecondary50 = chroma.mix(secondaryColor, 'white', 0.9, 'hsl').hex();  
    const themeSecondary200 = chroma.mix(secondaryColor, 'white', 0.6, 'hsl').hex();
    const themeSecondary300 = chroma.mix(secondaryColor, 'white', 0.4, 'hsl').hex();
    const themeSecondary400 = chroma.mix(secondaryColor, 'white', 0.2, 'hsl').hex();
    const themeSecondary500 = chroma(secondaryColor).hex();
    const themeSecondary600 = chroma.mix(secondaryColor, 'black', 0.2, 'hsl').hex();
    const themeSecondaryGradStart = chroma.mix(secondaryColor, 'white', 0.2, 'hsl').alpha(.2).hex();
    const themeSecondaryGradEnd = chroma.mix(secondaryColor, 'white', 0.2, 'hsl').alpha(.0).hex();
  
    // contrast
  
    const contrastTarget = 4.5
    const textPrimary = _styleDictionary.color.text.primary.lm.value
    var themePrimaryTextOn = ""
    var themeSecondaryTextOn = ""
  
    const primaryContrast = chroma.contrast(textPrimary, primaryColor);
    const secondaryContrast = chroma.contrast(textPrimary, secondaryColor);
  
    if (primaryContrast > contrastTarget) {
      themePrimaryTextOn = _styleDictionary.color.text.primary.lm.value
    } else {
      themePrimaryTextOn = _styleDictionary.color.text.reverse.lm.value
    }
  
    if (secondaryContrast > contrastTarget) {
      themeSecondaryTextOn = _styleDictionary.color.text.primary.lm.value
    } else {
      themeSecondaryTextOn = _styleDictionary.color.text.reverse.lm.value
    }
    
    const colorList = {
      theme: {
        primary: {
          main: {
            lm: themePrimary500,
            dm: themePrimary200
          },
          focus: {
            lm: themePrimary600,
            dm: themePrimary300
          },
          surface: {
            lm: themePrimary50,
            dm: ColorBackground2Dm
          },
          textOn: {
            lm: themePrimary500,
            dm: themePrimary200
          },
          gradientStart: {
            lm: themePrimary400,
            dm: themePrimaryGradStart
          },
          gradientEnd: {
            lm: themePrimary500,
            dm: themePrimaryGradEnd
          },
          textOn: {
            lm: themePrimaryTextOn,
            dm: ColorTextPrimaryDm
          },
        },
        secondary: {
          main: {
            lm: themeSecondary500,
            dm: themeSecondary200
          },
          focus: {
            lm: themeSecondary600,
            dm: themeSecondary300
          },
          surface: {
            lm: themeSecondary50,
            dm: ColorBackground2Dm
          },
          textOn: {
            lm: themeSecondary500,
            dm: themeSecondary200
          },
          gradientStart: {
            lm: themeSecondary400,
            dm: themeSecondaryGradStart
          },
          gradientEnd: {
            lm: themeSecondary500,
            dm: themeSecondaryGradEnd
          },
          surfaceGradientStart: {
            lm: themeSecondary50,
            dm: themeSecondaryGradStart
          },
          surfaceGradientEnd: {
            lm: themeSecondary50,
            dm: themeSecondaryGradEnd
          },
          textOn: {
            lm: themeSecondaryTextOn,
            dm: ColorTextPrimaryDm
          },
        }
      },
      fixed: {
        foreground: {
          lm: ColorForegroundLm,
          dm: ColorForegroundDm
        },
        background: {
          lm: ColorBackgroundLm,
          dm: ColorBackgroundDm
        },
        background2: {
            lm: ColorBackground2Lm,
            dm: ColorBackground2Dm
          },
        stroke: {
          lm: ColorStrokeLm,
          dm: ColorStrokeDm
        },
        disabled: {
          lm: ColorActionDisabledLm,
          dm: ColorActionDisabledDm
        },
        buttontextprimary: {
         lm: ColorTextPrimaryLm,
         dm: ColorTextPrimaryLm
        },
        text: {
          primary: {
            lm: ColorTextPrimaryLm,
            dm: ColorTextPrimaryDm
          },
          secondary: {
            lm: ColorTextSecondaryLm,
            dm: ColorTextSecondaryDm
          },
          reverse: {
            lm: ColorTextReverseLm,
            dm: ColorTextReverseDm
          },
          warning: {
            lm: ColorTextWarningLm,
            dm: ColorTextWarningDm
          },
          success: {
            lm: ColorPositiveLm,
            dm: ColorPositiveDm
          }
        }
      }
    }
    return colorList;
  }