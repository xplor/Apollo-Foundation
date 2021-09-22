
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Wed, 22 Sep 2021 20:48:11 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorGray0,
ColorGray50,
ColorGray100,
ColorGray200,
ColorGray300,
ColorGray400,
ColorGray500,
ColorGray600,
ColorGray700,
ColorGray800,
ColorGray850,
ColorGray900,
ColorPurple50,
ColorPurple100,
ColorPurple200,
ColorPurple300,
ColorPurple400,
ColorPurple500,
ColorPurple600,
ColorPurple700,
ColorPurple800,
ColorPurple900,
ColorOrange50,
ColorOrange100,
ColorOrange200,
ColorOrange300,
ColorOrange400,
ColorOrange500,
ColorOrange600,
ColorOrange700,
ColorOrange800,
ColorOrange900,
ColorGreen50,
ColorGreen100,
ColorGreen200,
ColorGreen300,
ColorGreen400,
ColorGreen500,
ColorGreen600,
ColorGreen700,
ColorGreen800,
ColorGreen900,
ColorYellow50,
ColorYellow100,
ColorYellow200,
ColorYellow300,
ColorYellow400,
ColorYellow500,
ColorYellow600,
ColorYellow700,
ColorYellow800,
ColorYellow900,
ColorPink50,
ColorPink100,
ColorPink200,
ColorPink300,
ColorPink400,
ColorPink500,
ColorPink600,
ColorPink700,
ColorPink800,
ColorPink900,
ColorRed50,
ColorRed100,
ColorRed200,
ColorRed300,
ColorRed400,
ColorRed500,
ColorRed600,
ColorRed700,
ColorRed800,
ColorRed900,
ColorTextPrimary,
ColorTextSecondary,
ColorTextWarning,
ColorTextAction,
ColorTextDmPrimary,
ColorTextDmSecondary,
ColorTextDmWarning,
ColorTextDmAction
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
