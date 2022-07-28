
import { StyleSheet, ScrollView, View, Text, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

import CustomText from "../../../components/CustomText";
import ContentContainer from "../../../Common/ContentContainer";

import HeaderRight from "../../../components/HeaderRight";
import HeaderTitle from "../../../components/HeaderTitle";
import HeaderLeft from "../../../components/HeaderLeft";

import { backIcon, drawerIcon } from "../../../constants/Images";

// styles
import AuthStyles from "../../../style/AuthStyles";
import SpaceStyles from "../../../style/SpaceStyles";
import TextStyles from "../../../style/TextStyles";

const TermsAndService = ({ navigation }) => {

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
      headerTitle: () => <HeaderTitle title={"Terms of Services"} />,
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
          text={"Terms of Services"}
          style={[TextStyles.textBold24Black, { alignSelf: "center" }, SpaceStyles.bottom20]}
        />

        <CustomText
          text={"TERMS AND CONDITIONS"}
          style={[TextStyles.textQuicksandBold14Black, { alignSelf: "center" }, SpaceStyles.bottom5]}
        />

        <CustomText
          text={"Last updated: [4/1/2021]"}
          style={[TextStyles.textQuicksand14Black, { alignSelf: "center" }, SpaceStyles.bottom5]}
        />

        <CustomText
          text={"PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY"}
          style={[{ alignSelf: "center", fontStyle: 'italic' }, TextStyles.textQuicksandBold14Black, SpaceStyles.bottom5]}
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

export default TermsAndService;

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
    title: '1. AGREEMENT TO TERMS',
    id: 0,
    content: [
      {
        id: 0,
        heading: '1.1 These Terms and Conditions (“Terms”) constitute a legally binding agreement between you (hereinafter referred to as “you”, “your” or “User”) and Magnetize Yourself LLC, a company incorporated under the laws of the State of Wyoming and having its registered office located at 1309 Coffeen Avenue STE 2894, Sheridan, Wyoming, 82801 (the “Company”, “we”, “us”, or “our”) concerning your access to, and use of, the Company’s website (www.soundandsoulful.com) including its sub-domains and mobile-optimized version, if any (hereinafter collectively referred to as the “Website”). You agree that by accessing the Website, you have read, understood, and agree to be bound by all of these Terms.  IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE Website AND YOU MUST DISCONTINUE YOUR USE IMMEDIATELY.',
      },
      {
        id: 1,
        heading: '1.2 Supplemental terms and conditions or documents that may be posted on the Website from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms by your continued use of the Website after the date such revised Terms are posted.',
      },
      {
        id: 2,
        heading: '1.3 The information provided on the Website is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Website from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.',
      },
      {
        id: 3,
        heading: '1.4 Users below the age of 18 are not allowed to use the Website or any of the Website Services.',
      },
    ]
  },
  {
    id: 1,
    title: '2. WEBSITE SERVICES',
    content: [
      {
        id: 0,
        heading: '2.1 The Website offers meditation solutions by providing its Users an easy access to a virtual library which has an online collection of subliminal tracks including subliminal affirmations audio tracks, soothing meditation sounds, binaural beat frequencies and spoken affirmations relating to different areas of life (“Website Services”).',
      },
      {
        id: 1,
        heading: '2.2 Subliminal tracks are designed by embedding spoken affirmations within the meditation sounds and frequencies. By listening to the subliminal tracks, one can shift their thoughts which may affect the outcomes in one’s life. This is because it is believed that, since our conscious mind cannot hear spoken affirmations, these spoken affirmations are able to make more lasting impressions on our subconscious mind.',
        body: [
          {
            title: ''
          }
        ]
      },
      {
        id: 2,
        heading: '2.3 Users can sign-up to the Website by creating an e-mail address and password for their account and also providing their credit/debit card information. After sign-up, Users are able to have a 7-day trial period during which they can avail of the Website Services free of charge. After the expiry of the 7-day trial period, Users will be charged a subscription fee of US$19.99 each month, unless Users choose to cancel their account during the trial',
        body: [
          {
            title: ''
          }
        ]
      },
      {
        id: 3,
        heading: '2.4 After subscription, Users can access restricted pages on the Website containing subliminal tracks. Users can also combine various subliminal tracks (appearing in different pages of the Website) to create custom playlists, which they can save to their e-mail accounts on the Website. However, Users cannot download any of the subliminal tracks to their device and can only listen to the same by logging into their e-mail accounts on the Website.',
        body: [
          {
            title: ''
          }
        ]
      },
    ]
  },
  {
    id: 2,
    title: '3. USER REGISTRATION',
    content: [
      {
        id: 0,
        heading: '3.1 In order to use the Website Services, Users shall be required to register accounts with the Website. ',
        body: [
          {
            title: ''
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: '3. USER REGISTRATION',
    content: [
      {
        id: 0,
        heading: '3.1 In order to use the Website Services, Users shall be required to register accounts with the Website. ',
      },
      {
        id: 1,
        heading: '3.2 The Company reserves the right, in its sole discretion, to suspend the account of any User at any time and for any reason. '
      },
      {
        id: 2,
        heading: '3.2 The Company reserves the right, in its sole discretion, to suspend the account of any User at any time and for any reason. '
      },
      {
        id: 3,
        heading: '3.3 You will be required to sign up by creating an account with the Website by providing information such as First Name, Last Name, E-mail Address and Credit/Debit Card Information.'
      },
      {
        id: 4,
        heading: '3.4 You will be required to complete your profile by entering personal information before you are allowed to sign-in to your account.'
      },
      {
        id: 5,
        heading: '3.5 You represent, warrant and covenant that:',
        body: [
          {
            title: '3.5.1 you have full power and authority to accept these Terms, to grant any license and authorization and to perform any of your obligations hereunder;',
          },
          {
            title: '3.5.2 you will undertake to use the Website for personal purposes only.'
          }
        ]
      },
      {
        id: 6,
        heading: '3.6 You must not allow any other person to use your account to access the Website. You must notify us in writing immediately if you become aware of any unauthorized use of your account.'
      },
      {
        id: 7,
        heading: "3.7 You must not use any other person's account to access the Website, unless you have that person's express written permission to do so."
      }

    ]
  },
  {
    id: 4,
    title: '4. USER IDS AND PASSWORDS',
    content: [
      {
        id: 0,
        heading: '4.1 If you register for an account with the Website, you may be asked to choose a user ID and password. Your user ID must not be misleading and must comply with the content rules set out in this document; you must not use your account or user ID for or in connection with the impersonation of any person.',
      },
      {
        id: 1,
        heading: '4.2 You shall be responsible to maintain the confidentiality of your password and shall be responsible for all uses via your registration and/or login, whether authorized or unauthorized by you. You agree to immediately notify us of any unauthorized use or your registration, user account or password.'
      },
      {
        id: 2,
        heading: '4.3 You must notify by e-mailing us if you have reason to believe that your account is no longer secured for any reason (for example, in the event of a loss, theft or unauthorized disclosure or use of your password).'
      },
      {
        id: 3,
        heading: '4.4 You shall be responsible for any activity and content on the account arising out of any failure to keep your password confidential and may be held liable for any losses arising out of such a failure.'
      },
      {
        id: 4,
        heading: '4.5 Registration data and other personally identifiable information that we may collect is subject to the terms of our Privacy Policy.'
      }
    ]
  },
  {
    id: 5,
    title: '5. INTELLECTUAL PROPERTY RIGHTS ',
    content: [
      {
        id: 0,
        heading: '5.1 Unless otherwise indicated, the Website is our proprietary property and except the intellectual property rights (including articles, logos, trademarks and content) of the third party websites, all source code, databases, functionality, software, website designs, audio, video, text, photographs and graphics on the Website (collectively, the “Content”) and the trademarks, service marks and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws and international conventions. The Content and the Marks are provided on the Website “AS IS” for your information and personal use only. Except as expressly provided in these Terms, no part of the Website and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.',
      },
      {
        id: 1,
        heading: '5.2 Provided that you are eligible to use the Website, you are granted a limited license to access and use the Website. We reserve all rights not expressly granted to you in and to the Website, Content and the Marks.'
      }
    ]
  },
  {
    id: 6,
    title: '6. USER REPRESENTATIONS',
    content: [
      {
        id: 0,
        heading: '6.1 By using the Website, you represent and warrant that: (1) all registration information you submit is true, accurate, current and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms; (4) you are not under the age of 18; (5) you will not access the Website through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Website for any illegal or unauthorized purpose;  and (7) your use of the Website will not violate any applicable local, state and federal laws or regulations.',
      },
      {
        id: 1,
        heading: '6.2 If you provide any information that is untrue, inaccurate, not current or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Website (or any portion thereof).  '
      }
    ]
  },
  {
    id: 7,
    title: '7. PROHIBITED ACTIVITIES',
    content: [
      {
        id: 0,
        heading: '7.1 You may not access or use the Website for any purpose other than that for which we make the Website available. The Website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. ',
      },
      {
        id: 1,
        heading: '7.2 As a User of the Website, you agree not to use the Website:',
        body: [
          {
            title: '7.2.1 In any way that breaches any applicable local, state, federal or international law or regulation;'
          },
          {
            title: '7.2.2 In any way that is unlawful or fraudulent or has any unlawful or fraudulent purpose or effect;'
          },
          {
            title: '7.2.3 For the purpose of harming or attempting to harm minors in any way;'
          },
          {
            title: '7.2.4 To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards;'
          },
          {
            title: '7.2.5 To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material or any other form of similar solicitation (spam); or'
          },
          {
            title: '7.2.6 To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.'
          }
        ]
      },
      {
        id: 2,
        heading: '7.3 As a User of the Website, you also agree not to:',
        body: [
          {
            title: '7.3.1 reproduce, duplicate, copy or re-sell any content of the Website in contravention of the provisions of these Terms;'
          },
          {
            title: '7.3.2 access without authority, interfere with, damage or disrupt;',
            points: [
              {
                title: 'any part of the Website;'
              },
              {
                title: 'any equipment or network on which the Website is stored; '
              },
              {
                title: 'any software used in the provision of the Website; or '
              },
              {
                title: 'any equipment or network or software owned or used by any third party.'
              }
            ]
          },
          {
            title: '7.3.3 systematically retrieve data or other content from the Website to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us;'
          },
          {
            title: '7.3.4 make any unauthorized use of the Website, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences;'
          },
          {
            title: '7.3.5 use the Website to advertise or offer to sell illegal goods and services;'
          },
          {
            title: '7.3.6 circumvent, disable, or otherwise interfere with security-related features of the Website, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Website and/or the Content contained therein;'
          },
          {
            title: '7.3.7 engage in unauthorized framing of or linking to the Website;'
          },
          {
            title: '7.3.8 make improper use of our support services or submit false reports of abuse or misconduct;'
          },
          {
            title: '7.3.9 engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools;'
          },
          {
            title: '7.3.10 interfere with, disrupt, or create an undue burden on the Website or the networks or services connected to the Website;'
          },
          {
            title: '7.3.11 attempt to impersonate another user or person or use the username of another user.'
          },
          {
            title: '7.3.12 sell or otherwise transfer your profile;'
          },
          {
            title: '7.3.13 use any information obtained from the Website in order to harass, abuse, or harm another person or user of the Website;'
          },
          {
            title: '7.3.14 use the Website as part of any effort to compete with us or otherwise use the Website and/or the Content for any revenue-generating endeavour or commercial enterprise;'
          },
          {
            title: '7.3.15 decipher, decompile, disassemble or reverse engineer any of the software comprising or in any way making up a part of the Website;'
          },
          {
            title: '7.3.16 attempt to bypass any measures of the Website designed to prevent or restrict access to the Website or any portion of the Website;'
          },
          {
            title: '7.3.17 harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Website to you;'
          },
          {
            title: '7.3.18 delete the copyright or other proprietary rights notice from any Content;'
          },
          {
            title: '7.3.19 copy or adapt the Website’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code;'
          },
          {
            title: '7.3.20 upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”);'
          },
          {
            title: '7.3.21 except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Website, or using or launching any unauthorized script or other software;'
          },
          {
            title: '7.3.22 disparage, tarnish, or otherwise harm, in our opinion, us and/or the Website; or'
          },
          {
            title: '7.3.23 use the Website in a manner inconsistent with any applicable laws or regulations.'
          }
        ]

      }
    ]
  },
  {
    id: 8,
    title: '8. SUBMISSIONS',
    content: [
      {
        id: 0,
        heading: '8.1 You acknowledge and agree that any questions, comments, suggestions, ideas, feedback or other information regarding the Website ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.',
      }
    ]
  },
  {
    id: 9,
    title: "9. WEBSITE MANAGEMENT",
    content: [
      {
        id: 0,
        heading: "9.1 We reserve the right, but not the obligation, to: (1) monitor the Website for violations of these Terms; (2) take appropriate legal action against a User which, in our sole discretion, violates the law or these Terms, including without limitation, reporting such User to law enforcement authorities; and (3) otherwise manage the Website in a manner designed to protect our rights and property and to facilitate the proper functioning of the Website."
      }
    ]
  },
  {
    id: 10,
    title: '10. PRIVACY POLICY',
    content: [
      {
        id: 0,
        heading: "10.1 We care about data privacy and security. Please review our Privacy Policy. By using the Website, you agree to be bound by our Privacy Policy, which is incorporated into these Terms. Further, we do not knowingly accept, request or solicit information from children or knowingly market to children. Therefore, if we receive actual knowledge that anyone under the age of 18 has provided personal information to us, we will delete that information from the Website as quickly as is reasonably practical."
      }
    ]
  },
  {
    id: 11,
    title: '11. TERM AND TERMINATION',
    content: [
      {
        id: 0,
        heading: '11.1 These Terms shall remain in full force and effect while you use the Website. Without limiting any other provision of these Terms, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Website (including blocking certain ip addresses), to any person for any reason or for no reason, including without limitation for breach of any representation, warranty or covenant contained in these Terms or of any applicable law or regulation. We may terminate your use or participation in the Website or delete your account and any content or information that you posted at any time, without warning, in our sole discretion.',
      },
      {
        id: 0,
        heading: '11.2 If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.',
      }
    ]
  },
  {
    id: 12,
    title: '12. MODIFICATIONS AND INTERRUPTIONS ',
    content: [
      {
        id: 0,
        heading: '12.1 We reserve the right to change, modify or remove the contents of the Website at any time or for any reason at our sole discretion without notice.  However, we have no obligation to update any information on our Website. We also reserve the right to modify or discontinue all or part of the Website without notice at any time. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the Website.  ',
      },
      {
        id: 0,
        heading: '12.2 We cannot guarantee the Website will be available at all times. We may experience hardware, software or other problems or need to perform maintenance related to the Website, resulting in interruptions, delays or errors. We reserve the right to change, revise, update, suspend, discontinue or otherwise modify the Website at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Website during any downtime or discontinuance of the Website. Nothing in these Terms will be construed to obligate us to maintain and support the Website or to supply any corrections, updates, or releases in connection therewith.',
      }

    ]
  },
  {
    id: 13,
    title: '13. GOVERNING LAW ',
    content: [
      {
        id: 0,
        heading: '13.1 These Terms and your use of the Website are governed by and construed in accordance with the laws of the State of Wyoming without regard to its conflict of law principles.',
        body: [
          {
            title: ''
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: '14. CORRECTIONS',
    content: [
      {
        id: 0,
        heading: '14.1 There may be information on the Website that contains typographical errors, inaccuracies or omissions that may relate to the Website, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies or omissions and to change or update the information on the Website at any time, without prior notice.',
      }
    ]
  },
  {
    id: 15,
    title: '15. INDEMNIFICATION',
    content: [
      {
        id: 0,
        heading: '15.1 You agree to defend, indemnify and hold us harmless, including our subsidiaries, affiliates and all of our respective officers, agents, partners and employees, from and against any loss, damage, liability, claim or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Website;  (2) breach of these Terms; (3) any breach of your representations and warranties set forth in these Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act towards any other user of the Website with whom you connected via the Website. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defence of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.  ',
      }
    ]
  },
  {
    id: 16,
    title: '16. USER DATA',
    content: [
      {
        id: 0,
        heading: '16.1 We will maintain certain data that you transmit to the Website for the purpose of managing the Website as well as data relating to your use of the Website. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Website. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.',
      }
    ]
  },
  {
    id: 17,
    title: '17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS AND SIGNATURES',
    content: [
      {
        id: 0,
        heading: '17.1 Using the Website, sending us emails and completing online forms constitute electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications we provide to you electronically, via email and on the Website, satisfy any legal requirement that such communication be in writing. You hereby agree to the use of electronic signatures, contracts, orders, and other records and to electronic delivery of notices, policies and records of transactions initiated or completed by us or via the Website. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records or to payments or the granting of credits by any means other than electronic means. ',
      }
    ]
  },
  {
    id: 18,
    title: '18. CONTACT US',
    content: [
      {
        id: 0,
        heading: '18.1 In order to resolve a complaint regarding the Website or to receive further information regarding use of the Website, please contact us at Support@SoundandSoulful.com.',
      }
    ]
  }
]