import { NativeModules, Platform } from 'react-native';
import type { CheckoutSDKConfig } from './models';
export * from './models/enums';
export * from './models';

const LINKING_ERROR =
  `The package 'checkout-sdk-react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const CheckoutSdkReactNative = NativeModules.CheckoutSdkReactNative
  ? NativeModules.CheckoutSdkReactNative
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export default function multiply(
  sdkConfig: CheckoutSDKConfig
): Promise<number> {
  console.log('🚀 ~ file: index.tsx:22 ~ multiply ~ sdkConfig', sdkConfig);
  return CheckoutSdkReactNative.multiply(1, 2);
}
