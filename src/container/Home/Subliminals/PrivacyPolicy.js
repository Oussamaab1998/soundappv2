import { StyleSheet, ScrollView, View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

import CustomText from "../../../components/CustomText";
import ContentContainer from '../../../components/ContentContainer'

import HeaderRight from "../../../components/HeaderRight";
import HeaderTitle from "../../../components/HeaderTitle";
import HeaderLeft from "../../../components/HeaderLeft";

import { backIcon, drawerIcon } from "../../../constants/Images";

// styles
import AuthStyles from "../../../style/AuthStyles";
import SpaceStyles from "../../../style/SpaceStyles";
import TextStyles from "../../../style/TextStyles";

const PrivacyPolicy = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          iconName1={""}
          iconName2={""}
          iconName3={drawerIcon}
          onPress3={() => navigation.openDrawer()}
        />
      ),
      headerTitle: () => <HeaderTitle title={"Privacy policy"} />,
      headerLeft: () => (
        <HeaderLeft
          text={""}
          iconName={backIcon}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CustomText
          text={"Privacy Policy"}
          style={[TextStyles.textBold24Black, { alignSelf: "center" }, SpaceStyles.bottom20]}
        />

        <CustomText
          text={"PRIVACY POLICY"}
          style={[{ alignSelf: "center", fontStyle: 'italic' }, TextStyles.textQuicksandBold14Black]}
        />

        <CustomText
          text={"Date of Last Update: [4/1/2021]"}
          style={[TextStyles.textQuicksand14Black, { alignSelf: "center" }, SpaceStyles.bottom20]}
        />

        <CustomText
          text={'By visiting, viewing, accessing, browsing, surfing or using (“using” or “use”) our website www.soundandsoulful.com (“Website”) or avail any of the Website Services (as defined in the Terms and Conditions), you (“you”, “your” or “User”) consent to the data collection, revealing and use practices as delineated in this Privacy Policy. The Website is run by Magnetize Yourself LLC, a company incorporated under the laws of the State of Wyoming and having its registered address at 1309 Coffeen Avenue STE 2894, Sheridan, Wyoming, 82801 (“we,” “us” or “our”). Additionally, this Privacy Policy sets out how we might collect, reveal or use data relating to Users. '}
          style={[TextStyles.textQuicksand10Black, SpaceStyles.bottom10, SpaceStyles.left10]}
        />

        <View
          style={[AuthStyles.ContentContainer, SpaceStyles.top20]}
        >
          <ContentContainer data={data} />
        </View>

      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  error: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
  },
});

const data = [
  {
    title: '7. PROHIBITED ACTIVITIES',
    content: [
      {
        id: 2,
        heading: '1.1 When you use the Website or the Website Services, the following types of Personal Data, Payment and Invoicing Data, Communication Data, Technical Data and Marketing Data (collectively the “Data”) may be collected from you:',
        body: [
          {
            title: '1.1.1 Personal Data: Includes First Name, Last Name, E-mail Address and Credit/Debit Card Information or such other data as may be deemed necessary for providing the Website Services. When you e-mail us, your e-mail address may be added to our mailing list from which you can unsubscribe at any time using the unsubscribe link in each e-mail or by contacting us at Support@SoundandSoulful.com.'
          },
          {
            title: '1.1.2 Payment and Invoicing Data: Credit/Debit Card number, payment transactions and banking information etc.  '
          },
          {
            title: '1.1.3 Communication Data: Includes data that you provided us through the consultation/contact form on the Website, through e-mail or otherwise. The lawful ground for this processing is our legitimate interests such as to reply to communications sent to us, to keep records and to establish, pursue or defend potential legal claims.'
          },
          {
            title: '1.1.4 Technical Data: Technical Data includes data regarding your use of the Website and the Website Services such as your IP address, login, browser details, details of visit of pages on the Website, page views and navigation details, usage amount, time zone settings and other technical information on your device. The lawful ground for this processing is our legitimate interests such as to enable us to properly administer the Website and our business and to grow our business.'
          },
          {
            title: '1.1.5 Marketing Data: Includes data about your preferences in receiving marketing material from us and our third parties. The lawful ground for this processing is our legitimate interests such as to study how Users use the Website Services, to develop them, to grow our business and to \n decide our marketing strategy.'
          },
        ]
      }
    ]
  },
  {
    title: '2. Consent and its Withdrawal',
    content: [
      {
        heading: '2.1 Your consent to process your Data is deemed granted when you use the Website or the Website Services or fill the forms available on the Website. It is necessary for us to collect all necessary Data from you for the purposes of providing the Website Services.  '
      },
      {
        heading: '2.2 Your Data will be processed only after taking your consent in the form of a Clickable button or a checkbox when you accept the Privacy Policy.'
      },
      {
        heading: '2.3 You may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time, by contacting us at Support@SoundandSoulful.com.'
      },
    ]
  },
  {
    title: '3. Usage and Data Processing',
    content: [
      {
        heading: '3.1 Your Data may be used to provide you the Website Services and better understand your needs in relation thereto and to reply to any of your questions and requests regarding the Website Services.'
      },
      {
        heading: '3.2 Your Data is not rented or sold to others.'
      },
      {
        heading: '3.3 You are deemed to have authorized us to use your Data for the following purposes:',
        body: [
          {
            title: 'i. processing transactions;',
            points: []
          },
          {
            title: 'ii. verifying your identity;'
          },
          {
            title: 'iii. providing you the Website Services and responding to your queries, feedback or disputes;'
          },
          {
            title: 'iv. making such disclosures as may be required for any of the above purposes or as required by applicable laws and regulations or in respect of any investigations, claims or potential claims brought on or against us;'
          },
          {
            title: 'v. sending you notices regarding services you are receiving and for billing and collection purposes;'
          },
          {
            title: 'vi. providing and maintaining the Website Services; and'
          },
          {
            title: 'vii. improving the Website such as through personalized features and content.'
          },
        ]
      },
      {
        heading: '3.4 It shall be ensured that:',
        body: [
          {
            title: 'i Your Data collected by us or any of our third party will be used as per applicable data privacy laws;'
          },
          {
            title: 'ii. The reasons for the collection of Data and its usage will always be made known to you;'
          },
          {
            title: 'iii. Only the necessary Data will be collected from you; '
          },
          {
            title: 'iv. Cookies or similar technologies will be used in accordance with applicable laws;'
          },
          {
            title: 'v. If any Data submitted by you online cannot be fully deleted at your request under normal circumstances, you will be informed accordingly; '
          },
          {
            title: 'vi. Necessary technical and organizational measures are used to protect your Data; and '
          },
          {
            tile: 'vii. Your Data is transferred securely;'
          }
        ]
      },
    ]
  },
  {

    title: '4. Criteria for Disclosure of Data',
    content: [
      {
        heading: '4.1 Your Data will not be kept private in response to the legal process. If we deem that an investigation is required, an action is warranted in order to prevent illegal activities or suspected fraud, avert threats to the physical safety of a person, stop violation of our Terms or as otherwise required by law, we may disclose your Data. Moreover, your Data may also be disclosed in case of takeover, merger or acquisition.'
      },
      {
        heading: '4.2 Your Data may be disclosed in the good faith belief that an action is necessary to:',
        body: [
          {
            title: 'i. comply with a legal obligation;'
          },
          {
            title: 'ii. protect and defend our rights or property; ',
          },
          {
            title: 'iii. prevent or investigate possible wrongdoing; '
          },
          {
            title: 'iv. protect safety of our users and general public;'
          },
          {
            title: 'v. protect against legal liability.'
          },
          {

          }
        ]
      },
      {
        heading: '4.3 Your Data may be disclosed or transferred to our professional advisors, law enforcement agencies, insurers, government, and regulatory and other organizations in case of need.'
      }
    ]
  },
  {
    title: '5. Data Storage',
    content: [
      {
        heading: '5.1 We will store and process your Data at our dedicated Shopify’s customer account system, in the stripe.com system and in our Shopify membership app. '
      },
      {
        heading: '5.2 We act as the controller and our above partners as processors, meaning they will not undergo Personal Data processing activities towards information registered, submitted or conveyed by us.'
      },
      {
        heading: '5.3 Your Data may be transferred to our affiliated entities or other third-parties across borders. You hereby give consent to such transfer.'
      },
      {
        heading: '5.4 Your Data will be retained for as long as necessary to fulfil the purposes we collected it including to satisfy any record retention or reporting requirements under applicable laws.'
      },
      {
        heading: '5.5 As herein above mentioned, we will maintain Personal Data pertaining to our Users for the duration of the Website Services and as per legal requirements.'
      },
    ]
  },
  {
    title: '6. How We Protect Your Information',
    content: [
      {
        heading: '6.1 While we strive to use commercially acceptable means to protect your Data, we cannot guarantee its absolute security since no method of transmission over the Internet or method of electronic storage is 100% secure. '
      },
      {
        heading: '6.2 While we are concerned with protecting privacy of your Data, we do not give any guarantee to the security of your Data.'
      },
      {
        heading: '6.3 Your Data will be retained by us and will be accessible by our employees and any third-party service providers engaged by us.'
      }
    ]
  }

]

