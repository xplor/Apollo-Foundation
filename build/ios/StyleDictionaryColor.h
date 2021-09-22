
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Wed, 22 Sep 2021 20:16:17 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBaseGray0,
ColorBaseGray50,
ColorBaseGray100,
ColorBaseGray200,
ColorBaseGray300,
ColorBaseGray400,
ColorBaseGray500,
ColorBaseGray600,
ColorBaseGray700,
ColorBaseGray800,
ColorBaseGray850,
ColorBaseGray900,
ColorBasePurple50,
ColorBasePurple100,
ColorBasePurple200,
ColorBasePurple300,
ColorBasePurple400,
ColorBasePurple500,
ColorBasePurple600,
ColorBasePurple700,
ColorBasePurple800,
ColorBasePurple900,
ColorBaseOrange50,
ColorBaseOrange100,
ColorBaseOrange200,
ColorBaseOrange300,
ColorBaseOrange400,
ColorBaseOrange500,
ColorBaseOrange600,
ColorBaseOrange700,
ColorBaseOrange800,
ColorBaseOrange900,
ColorBaseGreen50,
ColorBaseGreen100,
ColorBaseGreen200,
ColorBaseGreen300,
ColorBaseGreen400,
ColorBaseGreen500,
ColorBaseGreen600,
ColorBaseGreen700,
ColorBaseGreen800,
ColorBaseGreen900,
ColorBaseYellow50,
ColorBaseYellow100,
ColorBaseYellow200,
ColorBaseYellow300,
ColorBaseYellow400,
ColorBaseYellow500,
ColorBaseYellow600,
ColorBaseYellow700,
ColorBaseYellow800,
ColorBaseYellow900,
ColorBasePink50,
ColorBasePink100,
ColorBasePink200,
ColorBasePink300,
ColorBasePink400,
ColorBasePink500,
ColorBasePink600,
ColorBasePink700,
ColorBasePink800,
ColorBasePink900,
ColorBaseRed50,
ColorBaseRed100,
ColorBaseRed200,
ColorBaseRed300,
ColorBaseRed400,
ColorBaseRed500,
ColorBaseRed600,
ColorBaseRed700,
ColorBaseRed800,
ColorBaseRed900,
ColorTextDefaultPrimary,
ColorTextDefaultSecondary,
ColorTextDefaultWarning,
ColorTextDefaultAction,
ColorTextDmPrimary,
ColorTextDmSecondary,
ColorTextDmWarning,
ColorTextDmAction
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
