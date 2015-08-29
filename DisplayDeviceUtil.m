#import "DisplayDeviceUtil.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "RCTUtils.h"

@implementation DisplayDeviceUtil

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (instancetype)init {
  if ((self = [super init])) {
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(displayOrientationDidChange:)
                                                 name:UIDeviceOrientationDidChangeNotification
                                               object:nil];
  }

  return self;
}

- (void)dealloc {
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (NSDictionary *)getDimensions {
  CGSize frameSize = [UIScreen mainScreen].bounds.size;

  /* For Non-Orientation Dependant Versions */
  if ((NSFoundationVersionNumber <= NSFoundationVersionNumber_iOS_7_1)
      && UIInterfaceOrientationIsLandscape([UIApplication sharedApplication].statusBarOrientation)) {
    frameSize = CGSizeMake(frameSize.height, frameSize.width);
  }

  NSDictionary *dimensions = @{ @"width": @(frameSize.width), @"height": @(frameSize.height) };
  return dimensions;
}

- (void)displayOrientationDidChange:(NSNotification*)note {
  NSDictionary *dimensions = [self getDimensions];
  [_bridge.eventDispatcher sendDeviceEventWithName:@"orientationDidChange" body:dimensions];
}

- (NSDictionary *)constantsToExport {
  BOOL isPhone = [[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPhone;
  BOOL isTablet = [[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPad;
  NSDictionary *dimensions = [self getDimensions];

  return @{
           @"isPhone" : @(isPhone),
           @"isTablet" : @(isTablet),
           @"initialDimensions": dimensions
           };
}

RCT_EXPORT_METHOD(getFrameSize:(RCTResponseSenderBlock)callback)
{
  CGSize frameSize = [UIScreen mainScreen].applicationFrame.size;
  NSDictionary *dimensions = @{ @"width": @(frameSize.width), @"height": @(frameSize.height) };
  callback(@[dimensions]);
}

@end
