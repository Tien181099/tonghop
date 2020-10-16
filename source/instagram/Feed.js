import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { IMAGES } from './assets/images';

const { width } = Dimensions.get('window');

const Feed = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={styles.header}>
          <Image
            source={IMAGES.iconCamera}
            style={{
              width: (25 / 375) * width,
              height: (23 / 375) * width
            }}
          />

          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Image
              source={IMAGES.iconWatch}
              style={{
                width: (22 / 375) * width,
                height: (25 / 375) * width,
                marginRight: (18 / 375) * width,
              }}
            />
            <Image
              source={IMAGES.iconDirectMessage}
              style={{
                width: (24 / 375) * width,
                height: (21 / 375) * width,
                paddingTop: (4 / 375) * width
              }}
            />
          </View>
        </View>

        <View style={{
          height: (104 / 375) * width,
          borderBottomWidth: (1 / 375) * width,
          borderBottomColor: '#DADBDA',
        }}>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              paddingVertical: (12 / 375) * width,
              borderBottomWidth: (1 / 375) * width,
              borderBottomColor: '#DADBDA',
            }}>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={IMAGES.yourStory}
                style={{
                  width: (62 / 375) * width,
                  height: (62 / 375) * width
                }}
              />
              <Text style={{
                fontSize: (10 / 375) * width,
                fontFamily: 'Helvetica', color: '#999999'
              }}
              >Your Story</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={IMAGES.story1}
                style={{
                  width: (62 / 375) * width,
                  height: (62 / 375) * width
                }}
              />
              <Text style={{
                fontSize: (10 / 375) * width,
                fontFamily: 'Helvetica', color: '#262626'
              }}
              >helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={IMAGES.story2}
                style={{
                  width: (62 / 375) * width,
                  height: (62 / 375) * width
                }}
              />
              <Text style={{
                fontSize: (10 / 375) * width,
                fontFamily: 'Helvetica', color: '#262626'
              }}>
                helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={IMAGES.story3}
                style={{
                  width: (62 / 375) * width,
                  height: (62 / 375) * width
                }}
              />
              <Text style={{
                fontSize: (10 / 375) * width,
                fontFamily: 'Helvetica', color: '#262626'
              }}>
                helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={IMAGES.story4}
                style={{
                  width: (62 / 375) * width,
                  height: (62 / 375) * width
                }}
              />
              <Text style={{
                fontSize: (10 / 375) * width,
                fontFamily: 'Helvetica', color: '#262626'
              }}>
                helge_nilsen</Text>
            </View>

          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: (12 / 375) * width
          }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={IMAGES.avatar}
                style={{
                  width: (32 / 375) * width,
                  height: (32 / 375) * width
                }}
              />
              <View style={{
                paddingLeft: (12 / 375) * width,
                paddingVertical: (1 / 375) * width
              }}>
                <Text
                  style={{
                    fontFamily: 'SF-Pro-Display-Bold',
                    fontSize: 14, color: '#262626'
                  }}
                >tammyolson</Text>
                <Text
                  style={{
                    fontFamily: 'Helvetica',
                    fontSize: 11, color: '#262626'
                  }}
                >Holand, Rotterdam</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: (13 / 375) * width,
                height: (3 / 375) * width,
                marginTop: (15 / 375) * width
              }}
              onPress={() => { }}
            >
              <Image
                source={IMAGES.iconMore}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={IMAGES.imageUpload}
              style={{
                width: width,
                height: (278 / 375) * width
              }}
            />
            <View style={{
              position: "absolute",
              right: (12 / 375) * width,
              top: (12 / 375) * width,
              width: (43 / 375) * width,
              height: (24 / 375) * width
            }}>
              <Image
                source={IMAGES.iconSlide}
              />
            </View>
            <View style={{
              position: "absolute",
              left: (12 / 375) * width,
              bottom: (12 / 375) * width,
              width: (43 / 375) * width,
              height: (24 / 375) * width
            }}>
              <Image
                source={IMAGES.iconUser}
              />
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: (10 / 375) * width,
            paddingHorizontal: (12 / 375) * width
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <TouchableOpacity
                  onPress={() => { }}
                  style={{
                    width: (24 / 375) * width,
                    height: (22 / 375) * width,
                    marginRight: (18 / 375) * width
                  }}
                >
                  <Image
                    source={IMAGES.iconHeart}

                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { }}
                  style={{
                    width: (24 / 375) * width,
                    height: (24 / 375) * width,
                    marginRight: (18 / 375) * width
                  }}
                >
                  <Image
                    source={IMAGES.iconComment}

                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { }}
                  style={{
                    width: (24 / 375) * width,
                    height: (21 / 375) * width
                    , marginRight: (32 / 375) * width
                  }}
                >
                  <Image
                    source={IMAGES.iconDirectMessage}

                  />
                </TouchableOpacity>

              </View>
              <Image
                source={IMAGES.iconNumberOfPictures}
                style={{
                  width: (50 / 375) * width,
                  height: (6 / 375) * width
                }}
              />

            </View>
            <TouchableOpacity
              onPress={() => { }}
              style={{
                width: (21 / 375) * width,
                height: (24 / 375) * width
              }}
            >
              <Image
                source={IMAGES.iconSave}

              />
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: (12 / 375) * width }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }} >
              <Image
                source={IMAGES.likedUsers}
                style={{ width: (29 / 375) * width, height: (13 / 375) * width }}

              />
              <Text style={{
                fontSize: (13 / 375) * width,
                fontFamily: 'SF-Pro-Display-Regular', color: '#262626',
                paddingLeft: (6 / 375) * width
              }}>Liked by</Text>
              <Text style={{
                fontSize: (13 / 375) * width,
                fontFamily: 'SF-Pro-Display-Bold', color: '#262626'
              }}>
                KnE</Text>
              <Text style={{
                fontSize: (13 / 375) * width,
                fontFamily: 'SF-Pro-Display-Regular', color: '#262626'
              }}>
                and</Text>
              <Text style={{
                fontSize: (13 / 375) * width,
                fontFamily: 'SF-Pro-Display-Bold', color: '#262626'
              }}>
                115 321 others </Text>
            </View>
            <View style={{ paddingVertical: (10 / 375) * width }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Text style={{
                  fontSize: (13 / 375) * width,
                  fontFamily: 'SF-Pro-Display-Bold', color: '#262626'
                }}>
                  tammyolson</Text>
                <Text style={{
                  fontSize: (13 / 375) * width,
                  fontFamily: 'SF-Pro-Display-Regular', color: '#003569'
                }}>
                  #amazing
                </Text>
                <Text style={{
                  fontSize: (13 / 375) * width,
                  fontFamily: 'SF-Pro-Display-Regular', color: '#003569'
                }}>
                  #travel
                </Text>
                <Text style={{
                  fontSize: (13 / 375) * width,
                  fontFamily: 'SF-Pro-Display-Regular', color: '#003569'
                }}>
                  #instagram
                </Text>
              </View>
              <Text style={{
                fontSize: (13 / 375) * width,
                fontFamily: 'SF-Pro-Display-Regular', color: '#003569'
              }}>
                Look nice!
                </Text>
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center', justifyContent: 'space-between'
            }}>
              <View style={{
                flexDirection: 'row',
                width: (327 / 375) * width
              }}>
                <Text style={{
                  fontSize: (13 / 375) * width,
                  fontFamily: 'SF-Pro-Display-Bold',
                  color: '#262626'
                }}>tammyolson</Text>
                <Text style={{
                  fontSize: (13 / 375) * width,
                  fontFamily: 'SF-Pro-Display-Regular',
                  color: '#262626', flex: 1, flexWrap: 'wrap'
                }}>
                  Banjo tote bag bicycle rights,
                  High Life sartorial cray craft beer whatever street art fap.</Text>
              </View>
              <Image
                source={IMAGES.likeComment}
                style={{
                  width: (11 / 375) * width,
                  height: (9 / 375) * width
                }}
              />
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center', justifyContent: 'space-between'
            }}>
              <View style={{
                flexDirection: 'row',
                width: (327 / 375) * width
              }}>
                <Image
                  source={IMAGES.rectangle}
                  style={{ marginHorizontal: (10 / 375) * width }}
                />
                <Text style={{
                  fontSize: (13 / 375) * width,
                  fontFamily: 'SF-Pro-Display-Regular',
                  color: '#262626', flex: 1, flexWrap: 'wrap'
                }}>
                  Hashtag typewriter banh mi,
                  squid keffiyeh High Life Brooklyn twee craft beer tousled chillwave.
                  PBR&B selfies chillwave</Text>
              </View>
              <Image
                source={IMAGES.likeComment}
                style={{
                  width: (11 / 375) * width, height: (9 / 375) * width
                }}
              />
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
              source={IMAGES.popupLikeComment}
              style={{
                position: "absolute",
                bottom: (53 / 375) * width,
                width: (80 / 375) * width,
                height: (43 / 375) * width
              }}
            />
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

export default Feed;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: (12 / 375) * width,
    paddingRight: (10 / 375) * width,
    paddingVertical: (9 / 375) * width,
    borderBottomWidth: (1 / 375) * width,
    borderBottomColor: '#DADBDA',
    backgroundColor: '#F9FAF9'
  },
})