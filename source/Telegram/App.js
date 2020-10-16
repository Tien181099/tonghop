import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import { profile, back, notification, priva, data, devices, chatSetting }
  from './assets/images';
const { width } = Dimensions.get('window')
const rate = width / 375

const App = () => {


  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
    >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 32 * rate / 414,
        marginTop: 75.21 * rate
      }}>
        <TouchableOpacity

          onPress={() => { }}
        >
          <Image source={back}
            style={{
              width: 17 * rate,
              height: 17 * rate,
              marginLeft: 10 * rate

            }} ></Image>

        </TouchableOpacity>
        <Text style={{
          fontFamily: 'Gilroy-Bold',
          fontSize: 25 * rate, color: '#2675EC',
          marginLeft: 25.59 * rate
        }} >@wdlam</Text>
      </View>

      <View style={{
        flexDirection: 'row',
        marginLeft: 27 * rate,
        marginTop: 34 * rate
      }} >
        <Image
          source={profile}
          style={{
            width: 82 * rate,
            height: 82 * rate
          }}
        />
        <View style={{ marginLeft: 18 * rate }}>
          <Text style={{
            fontFamily: 'Gilroy-Bold',
            fontSize: 23 * rate, color:
              '#131313'
          }}>Gloria Mckinney</Text>
          <Text style={{
            fontFamily: 'Gilroy-Regular',
            fontSize: 17 * rate,
            color: '#848484',
            marginTop: 5 * rate
          }}>+375(29)9638433</Text>
        </View >
      </View>
      <View style={{ marginLeft: 27 * rate, marginTop: 34 * rate }}>
        <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 20 * rate, color: '#131313' }}> Account</Text>

        <View style={{ marginTop: 13 * rate }}>
          <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 17 * rate, color: '#131313', marginTop: 6 * rate }}>+375(29)9638433</Text>
          <TouchableOpacity
            onPress={() => { }}
          >
            <Text style={{ fontFamily: 'Gilroy-Regular', fontSize: 17 * rate, color: '#848484' }}>Tap to change phone number</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 2 * rate, width: 359 * rate, backgroundColor: '#F6F6F6', marginVertical: 25 * rate }}></View>

        <View style={{ marginTop: 13 }}>
          <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 17 * rate, color: '#131313', marginTop: 6 * rate }}>@wdlam</Text>
          <Text style={{ fontFamily: 'Gilroy-Regular', fontSize: 17 * rate, color: '#848484' }}>username</Text>
        </View>

        <View style={{ height: 2 * rate, width: 359 * rate, backgroundColor: '#F6F6F6', marginVertical: 25 * rate }}></View>

        <View style={{ marginTop: 13 }}>
          <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 17 * rate, color: '#131313', marginTop: 6 * rate }}>I’m Senior Frontend Developer from Microsoft</Text>
          <Text style={{ fontFamily: 'Gilroy-Regular', fontSize: 17, color: '#848484' }}>Bio</Text>
        </View>
      </View>

      <View style={{ marginTop: 33 * rate, marginLeft: 27 * rate, marginBottom: 30 * rate }}>
        <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 20 * rate, color: '#131313' }}>Settings</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 21 * rate }}>
          <Image
            source={notification}
            style={{
              width: 22 * rate,
              height: 22 * rate
            }} />
          <TouchableOpacity
            onPress={() => { }}
          >
            <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18 * rate, color: '#131313', marginLeft: 30 * rate }}>Notification and Sounds</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 21 * rate }}>
          <Image
            source={priva}
            style={{
              width: 22 * rate,
              height: 22 * rate
            }} />
          <TouchableOpacity
            onPress={() => { }}
          >
            <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18 * rate, color: '#131313', marginLeft: 30 * rate }}>Privaty and Security</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 21 * rate }}>
          <Image
            source={data}
            style={{
              width: 22 * rate,
              height: 22 * rate
            }} />
          <TouchableOpacity
            onPress={() => { }}
          >
            <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18 * rate, color: '#131313', marginLeft: 30 * rate }}>Data and Stronge</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 21 * rate }}>
          <Image
            source={chatSetting}
            style={{
              width: 22 * rate,
              height: 22 * rate
            }} />
          <TouchableOpacity
            onPress={() => { }}
          >
            <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18 * rate, color: '#131313', marginLeft: 30 * rate }}>Chat Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 21 * rate }}>
          <Image
            source={devices}
            style={{
              width: 22 * rate,
              height: 22 * rate
            }} />
          <TouchableOpacity
            onPress={() => { }}
          >
            <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 18 * rate, color: '#131313', marginLeft: 30 * rate }}>Devices</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}
export default App;
