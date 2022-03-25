/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [value, setValue] = useState(60);

  const diameterCircle = wp("50%");

  const percentageCircle = (value) => {
    // 20%
    let newValue = value / 100;


    return newValue * diameterCircle;

  };

  console.log(100 - percentageCircle(20));


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>

        <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: hp("10%") }}>
          <AnimatedCircularProgress
            size={wp("50%")}
            width={15}
            fill={80}
            rotation={-115}
            arcSweepAngle={225}

            tintColor="red"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="green"
          // renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="blue" />}
          >
            {
              () => (
                <AnimatedCircularProgress
                  size={wp("40%")}
                  width={25}
                  fill={value}
                  rotation={-115}
                  arcSweepAngle={225}
                  duration={1000}
                  // onFillChange={() => setValue(Math.random() * 100)}
                  tintColor={value > 80 ? "green" : "red"}
                  onAnimationComplete={() => console.log('onAnimationComplete')}
                // backgroundColor="#FFF"
                // renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r="10" fill="blue" />}
                >
                  {
                    (fill) => (
                      <Text style={{ fontSize: 30 }}>
                        { fill}%
                      </Text>
                    )
                  }
                </AnimatedCircularProgress>
              )
            }
          </AnimatedCircularProgress>
        </View>
        {/* <View style={{ marginTop: hp('20%'), width: "100%", alignItems: "center", flexDirection: "column-reverse", justifyContent: "center" }}>

          <View style={{ width: "100%", alignItems: "center", position: "relative" }}>
            <View style={{ backgroundColor: "grey", width: wp("50%"), height: wp("60%"), overflow: "hidden" }}>

            </View>

          </View>
          <View style={{ justifyContent: "center", alignItems: "center", }}>

            <Text style={{ width: wp("50%"), height: wp("50%"), borderRadius: wp("25%"), borderWidth: 1, justifyContent: "center", alignItems: "center", position: "absolute", overflow: "hidden", textAlign: "center" }}>haloo</Text>
          </View>
        </View> */}


        <View style={{ width: "100%", alignItems: "center", justifyContent: "center" }} >

          <View style={{ width: wp('50%'), height: diameterCircle, borderRadius: wp('25%'), borderWidth: 1, borderColor: "white", overflow: "hidden" }}>
            <View style={{ width: wp("50%"), height: wp("10%"), backgroundColor: "lightgrey", }}>

            </View>
            <View style={{ width: wp("50%"), height: wp("40%"), backgroundColor: "green", }}>

            </View>

          </View>
          <View style={{ justifyContent: "center", alignItems: "center", position: "absolute" }}>

            <Text style={{ color: "white", fontSize: wp("8%"), textAlign: "center", }}>{value}%</Text>
          </View>

        </View>



      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  textView: {
    position: 'absolute',
    top: 50,
    left: 100,
    width: 100,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
