
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Wed, 22 Sep 2021 20:48:11 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.980f green:0.984f blue:0.988f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.969f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.894f green:0.902f blue:0.922f alpha:1.000f],
[UIColor colorWithRed:0.808f green:0.816f blue:0.859f alpha:1.000f],
[UIColor colorWithRed:0.616f green:0.624f blue:0.686f alpha:1.000f],
[UIColor colorWithRed:0.416f green:0.427f blue:0.490f alpha:1.000f],
[UIColor colorWithRed:0.349f green:0.353f blue:0.420f alpha:1.000f],
[UIColor colorWithRed:0.282f green:0.275f blue:0.341f alpha:1.000f],
[UIColor colorWithRed:0.235f green:0.220f blue:0.278f alpha:1.000f],
[UIColor colorWithRed:0.188f green:0.176f blue:0.231f alpha:1.000f],
[UIColor colorWithRed:0.153f green:0.141f blue:0.192f alpha:1.000f],
[UIColor colorWithRed:0.957f green:0.949f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.922f green:0.898f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.867f green:0.820f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.765f green:0.678f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.643f green:0.502f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.533f green:0.341f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.475f green:0.243f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.412f green:0.137f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.302f green:0.102f blue:0.698f alpha:1.000f],
[UIColor colorWithRed:0.200f green:0.051f blue:0.502f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.965f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.929f blue:0.894f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.863f blue:0.800f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.741f blue:0.659f alpha:1.000f],
[UIColor colorWithRed:0.976f green:0.569f blue:0.439f alpha:1.000f],
[UIColor colorWithRed:0.969f green:0.427f blue:0.263f alpha:1.000f],
[UIColor colorWithRed:0.957f green:0.306f blue:0.153f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.255f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.651f green:0.212f blue:0.102f alpha:1.000f],
[UIColor colorWithRed:0.478f green:0.153f blue:0.078f alpha:1.000f],
[UIColor colorWithRed:0.922f green:1.000f blue:0.973f alpha:1.000f],
[UIColor colorWithRed:0.769f green:1.000f blue:0.929f alpha:1.000f],
[UIColor colorWithRed:0.455f green:0.984f blue:0.816f alpha:1.000f],
[UIColor colorWithRed:0.322f green:0.922f blue:0.729f alpha:1.000f],
[UIColor colorWithRed:0.290f green:0.831f blue:0.659f alpha:1.000f],
[UIColor colorWithRed:0.216f green:0.722f blue:0.561f alpha:1.000f],
[UIColor colorWithRed:0.180f green:0.600f blue:0.467f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.471f blue:0.365f alpha:1.000f],
[UIColor colorWithRed:0.114f green:0.380f blue:0.294f alpha:1.000f],
[UIColor colorWithRed:0.082f green:0.278f blue:0.216f alpha:1.000f],
[UIColor colorWithRed:0.984f green:1.000f blue:0.898f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.996f blue:0.733f alpha:1.000f],
[UIColor colorWithRed:0.925f green:0.992f blue:0.569f alpha:1.000f],
[UIColor colorWithRed:0.863f green:0.914f blue:0.404f alpha:1.000f],
[UIColor colorWithRed:0.776f green:0.800f blue:0.306f alpha:1.000f],
[UIColor colorWithRed:0.678f green:0.671f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.620f green:0.596f blue:0.157f alpha:1.000f],
[UIColor colorWithRed:0.541f green:0.510f blue:0.125f alpha:1.000f],
[UIColor colorWithRed:0.447f green:0.412f blue:0.086f alpha:1.000f],
[UIColor colorWithRed:0.361f green:0.314f blue:0.008f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.941f blue:0.996f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.851f blue:0.984f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.722f blue:0.976f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.553f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.427f blue:0.863f alpha:1.000f],
[UIColor colorWithRed:0.898f green:0.314f blue:0.784f alpha:1.000f],
[UIColor colorWithRed:0.800f green:0.200f blue:0.600f alpha:1.000f],
[UIColor colorWithRed:0.749f green:0.114f blue:0.482f alpha:1.000f],
[UIColor colorWithRed:0.600f green:0.059f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:0.451f green:0.043f blue:0.247f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.969f blue:0.953f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.851f blue:0.835f alpha:1.000f],
[UIColor colorWithRed:0.996f green:0.773f blue:0.745f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.576f blue:0.529f alpha:1.000f],
[UIColor colorWithRed:0.973f green:0.447f blue:0.388f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.310f blue:0.239f alpha:1.000f],
[UIColor colorWithRed:0.859f green:0.196f blue:0.122f alpha:1.000f],
[UIColor colorWithRed:0.761f green:0.129f blue:0.059f alpha:1.000f],
[UIColor colorWithRed:0.588f green:0.075f blue:0.020f alpha:1.000f],
[UIColor colorWithRed:0.451f green:0.078f blue:0.035f alpha:1.000f],
[UIColor colorWithRed:0.153f green:0.141f blue:0.192f alpha:1.000f],
[UIColor colorWithRed:0.416f green:0.427f blue:0.490f alpha:1.000f],
[UIColor colorWithRed:0.761f green:0.129f blue:0.059f alpha:1.000f],
[UIColor colorWithRed:0.412f green:0.137f blue:0.957f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.808f green:0.816f blue:0.859f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.576f blue:0.529f alpha:1.000f],
[UIColor colorWithRed:0.765f green:0.678f blue:1.000f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
