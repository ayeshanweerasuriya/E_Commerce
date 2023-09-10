import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign';

import Menu from './assets/menu-variant.svg';

const Home = () => {
  const [active, setActive] = useState(false);
  const onPress = () => setActive(!active);

  const items = {
    color: active ? '#FFFFFF' : '#7F7F7F',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/menu-variant.png')}
          style={{ height: 20, width: 20, flexShrink: 0 }}
        />

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7.143,
            flexDirection: 'row',
          }}>
          <Image
            source={require('./assets/Group.png')}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.headerText}>Audio</Text>
        </View>

        <Image
          source={require('./assets/profile.jpeg')}
          style={styles.proPic}
        />
      </View>

      <View style={styles.greetings}>
        <Text style={{ fontSize: 16, color: '#fff', fontWeight: 400 }}>
          Hi, Andrea
        </Text>
        <Text style={{ alignSelf: 'stretch', fontSize: 24, fontWeight: 700 }}>
          What are you looking for today?
        </Text>
      </View>

      <View style={styles.searchBox}>
        <Icon name="search1" height={20} width={20} />
        <Text
          style={{
            fontSize: 14,
            marginLeft: 12,
            fontWeight: 400,
            color: '#BABABA'
          }}>
          Search headphone
        </Text>
      </View>

      <View style={styles.headphonesContainer}>
          <ScrollView
            horizontal
            style={styles.headphoneItems}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.itemStyleSelected} onPress={onPress}>
              <Text>Headphone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemStyle} onPress={onPress}>
              <Text>Headphone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemStyle} onPress={onPress}>
              <Text>Headphone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemStyle} onPress={onPress}>
              <Text>Headphone</Text>
            </TouchableOpacity>
          </ScrollView>
      </View>

      <View style={styles.headphoneBanner}>
        <View style={{ display: 'flex', gap: 28, width: '49%' }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 700,
              fontStyle: 'normal',
            }}>
            TMA-2 Modular Headphone
          </Text>
          <Text 
          style={{color: '#0ACF83', fontWeight: 700, fontSize: 14}}>
          Shop now <Icon name="arrowright" width={20} height={20}/></Text>
        </View>

        <View>
          <Image
            source={require('./assets/TMA2HD.png')}
            style={{ height: 135, width: 117, alignSelf: 'flex-end' }}
          />
        </View>
      </View>

      <View style={styles.fProducts}>
        <Text style={{fontSize: 16, fontWeight: 400}}>Featured Products</Text>
        <TouchableOpacity>
        <Text style={{fontSize: 14, fontWeight: 400, color: '#7F7F7F'}}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.product}>
          <Image source={require('./assets/TMA2HD.png')} style={styles.productImage} />
          <Text style={{fontSize: 14, fontWeight: 400}}>TMA-2 HD Wireless</Text>
          <Text style={{fontSize: 12, fontWeight: 700}}>USD 350</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.product}>
          <Image source={require('./assets/TMA2HD.png')} style={styles.productImage} />
          <Text style={{fontSize: 14, fontWeight: 400}}>TMA-2 HD Wireless</Text>
          <Text style={{fontSize: 12, fontWeight: 700}}>USD 350</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },

  header: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
  },

  headerText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontSize: 19,
    fontWeight: 700,
  },

  greetings: {
    width: 326,
    marginTop: 29,
    marginRight: 25,
    marginLeft: 25,
    alignItems: 'flex-start',
    fkexDirection: 'column',
    fontFamily: 'DM Sans',
  },

  proPic: {
    display: 'flex',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 35,
  },

  searchBox: {
    margin: 25,
    flexDirection: 'row',
    width: 'auto',
    height: 46,
    padding: 15,
    borderColor: '#BABABA',
    borderWidth: 1,
    borderRadius: 10,
    flexShrink: 0,
  },

  headphonesContainer: {
    marginLeft: 25,
    marginTop: 25,
    marginBottom: 25,
    flexDirection: 'row',
  },

  itemStyleSelected: {
    height: 25,
    width: 107,
    backgroundColor: '#0ACF83',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 30
  },

  itemStyle: {
    height: 25,
    width: 107,
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },

  headphoneItems: {},

  headphoneBanner: {
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    gap: 28,
    flexShrink: 0,
    borderadius: 10,
    flexDirection: 'row'
  },

  fProducts: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 25,
    marginRight: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },


  product: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 15,
    paddingTop: 15,
  },

  productImage: {
    height: 125,
    width: 125,
    alignSelf: 'center'
  }


});

export default Home;
