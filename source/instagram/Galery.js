import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { IMAGES } from './assets/images';

const { width } = Dimensions.get('window');
const Galery = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicatorit={false}>
        <View >
          <View style={styles.header}>
            <Image
              source={IMAGES.backIcon}
              style={{ width: 10 / 375 * width, height: 17 / 375 * width }}
            />
            <Text style={{ fontFamily: 'SF-Pro-Display-Bold', fontSize: 18 / 375 * width }}
            >antoninagarsia</Text>
            <TouchableOpacity
              onPress={() => { }}
            >
              <Image
                source={IMAGES.iconMore}
                style={{ width: 13 / 375 * width, height: 3 / 375 * width }}
              />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
              flex: 1, alignItems: 'center',
              borderBottomColor: '#262626',
              borderBottomWidth: 1 / 375 * width,
              paddingBottom: 14 / 375 * width
            }}>
              <Image
                source={IMAGES.iconList}
                style={{
                  width: 23 / 375 * width,
                  height: 23 / 375 * width
                }}
              />
            </View>
            <View style={{
              flex: 1,
              alignItems: 'center',
              paddingBottom: 14 / 375 * width
            }}>
              <Image
                source={IMAGES.iconAccount}
                style={{
                  width: 24 / 375 * width,
                  height: 24 / 375 * width
                }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 1 / 375 * width }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ paddingRight: 1 / 375 * width, flex: 1 }}>
                <Image
                  source={IMAGES.post1}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
              <View style={{ paddingRight: 1, flex: 1 }}>
                <Image
                  source={IMAGES.post2}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
              <View style={{ paddingRight: 1, flex: 1 }}>
                <Image
                  source={IMAGES.post3}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ paddingRight: 1 / 375 * width, flex: 1 }}>
                <Image
                  source={IMAGES.post4}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
              <View style={{ paddingRight: 1, flex: 1 }}>
                <Image
                  source={IMAGES.post5}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
              <View style={{ paddingRight: 1, flex: 1 }}>
                <Image
                  source={IMAGES.post6}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <View style={{ paddingRight: 1 / 375 * width, flex: 1 }}>
                <Image
                  source={IMAGES.post7}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
              <View style={{
                paddingRight: 1,
                flex: 1
              }}>
                <Image
                  source={IMAGES.post8}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
              <View style={{ paddingRight: 1, flex: 1 }}>
                <Image
                  source={IMAGES.post9}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ paddingRight: 1 / 375 * width, flex: 1 }}>
                <Image
                  source={IMAGES.post10}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
              <View style={{
                paddingRight: 1,
                flex: 1
              }}>
                <Image
                  source={IMAGES.post11}
                  style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
                />
              </View>
              <View style={{
                paddingRight: 1,
                flex: 1
              }}>
                <Image
                  source={IMAGES.post12}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ paddingRight: 1 / 375 * width, flex: 1 }}>
                <Image
                  source={IMAGES.post13}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
              <View style={{ paddingRight: 1, flex: 1 }}>
                <Image
                  source={IMAGES.post14}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
              <View style={{ paddingRight: 1, flex: 1 }}>
                <Image
                  source={IMAGES.post15}
                  style={{
                    width: 124 / 375 * width,
                    height: 124 / 375 * width
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{
        paddingVertical: (12 / 375) * width,
        backgroundColor: '#F9FAF9'
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Image
            source={IMAGES.iconHome}
            style={{
              width: (23 / 375) * width,
              height: (24 / 375) * width,
              marginLeft: (18 / 375) * width
            }}
          />
          <Image
            source={IMAGES.iconSearch}
            style={{
              width: (22 / 375) * width,
              height: (22 / 375) * width
            }}
          />
          <Image
            source={IMAGES.iconCreatePost}
            style={{
              width: (25 / 375) * width,
              height: (25 / 375) * width
            }}
          />
          <View style={{ alignItems: 'center' }}>

            <Image
              source={IMAGES.iconBlackHeart}
              style={{
                width: (24 / 375) * width,
                height: (22 / 375) * width
              }}
            />
            <Image
              source={IMAGES.belowHeart}
              style={{
                width: (5 / 375) * width,
                height: (5 / 375) * width,
                marginTop: (9 / 375) * width
              }}
            />
          </View>
          <Image
            source={IMAGES.imageUser}
            style={{
              width: (24 / 375) * width,
              height: (23 / 375) * width,
              marginRight: (21 / 375) * width
            }}
          />

        </View>
        <View style={{ alignItems: 'center' }} >
          <Image
            source={IMAGES.rectangleBot}
            style={{
              width: (134 / 375) * width,
              height: (5 / 375) * width,
              marginBottom: (9 / 375) * width,
              marginTop: (20 / 375) * width,
              borderRadius: (100 / 375) * width
            }}
          />
        </View>
      </View>
    </View>
  );
}
export default Galery;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12 / 375 * width,
    paddingHorizontal: 19 / 375 * width
  }
})