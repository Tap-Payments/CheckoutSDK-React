import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import multiply, {
  ApplePayButtonStyle,
  ApplePayButtonType,
  FlippingStatus,
  LocaleIdentifier,
  SdkMode,
  ShowSaveCreditCard,
  TransactionModeType,
} from 'checkout-sdk-react-native';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply({
      secretKey: 'test',
      bundleID: 'test',
      localeIdentifier: LocaleIdentifier.ar,
      flippingStatus: FlippingStatus.noFlipping,
      amount: 100,
      items: [],
      swipeDownToDismiss: false,
      showDragHandler: false,
      transactionMode: TransactionModeType.purchase,
      customer: {
        identifier: undefined,
        emailAddress: undefined,
        phoneNumber: undefined,
        firstName: undefined,
        address: undefined,
        middleName: undefined,
        lastName: undefined,
        descriptionText: undefined,
        metadata: undefined,
        title: undefined,
        nationality: undefined,
        currency: undefined,
        locale: undefined,
      },
      tapMerchantID: 'test',
      taxes: {
        title: '',
        descriptionText: undefined,
        amount: {
          type: undefined,
          value: undefined,
          minFee: 0,
          maxFee: 0,
        },
      },
      require3DSecure: false,
      sdkMode: SdkMode.sandbox,
      collectCreditCardName: true,
      showSaveCreditCard: ShowSaveCreditCard.none,
      isSubscription: false,
      recurringPaymentRequest: false,
      applePayButtonType: ApplePayButtonType.appleLogoOnly,
      applePayButtonStyle: ApplePayButtonStyle.whiteOutline,
    }).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
