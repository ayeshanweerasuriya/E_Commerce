import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign, Feather, Ionicons, Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.cartContainer}>
          <Feather name="shopping-cart" size={22} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.navigateLeftContainer}>
          <AntDesign name="left" size={20} color="black" />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Headphones</Text>
      <Text style={styles.heading}>TMA Wireless</Text>
      <View style={styles.scrollMContainer}>
        <TouchableOpacity>
          <View style={styles.filterContainer}>
            <Feather name="sliders" size={22} color="black" />
            <Text style={styles.filterText}>Filter</Text>
          </View>
        </TouchableOpacity>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroller}
        >
          <TouchableOpacity>
            <Text style={styles.scrollText}>Popularity</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.scrollText}>Newest</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.scrollText}>Most Expensive</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.itemContainer}>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={styles.cardPairsContainer}>
            <View style={styles.cardContainer}>
              <Image
                style={styles.cardImage}
                source={require("./assets/added-frame.png")}
              />
              <Text style={styles.cardHeading}>TMA-2 HD Wireless</Text>
              <Text style={styles.cardTitle}>USD 350</Text>
              <View style={styles.reviewContainer}>
                <Ionicons
                  style={styles.starIcon}
                  name="ios-star"
                  size={9}
                  color="orange"
                />
                <Text style={styles.reviewText}>4.6</Text>
                <Text style={styles.reviewText}>86 Reviews</Text>
                <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={16} color="grey" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <Image
                style={styles.cardImage}
                source={require("./assets/added-frame.png")}
              />
              <Text style={styles.cardHeading}>TMA-2 HD Wireless</Text>
              <Text style={styles.cardTitle}>USD 350</Text>
              <View style={styles.reviewContainer}>
                <Ionicons
                  style={styles.starIcon}
                  name="ios-star"
                  size={9}
                  color="orange"
                />
                <Text style={styles.reviewText}>4.6</Text>
                <Text style={styles.reviewText}>86 Reviews</Text>
                <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={16} color="grey" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <Image
                style={styles.cardImage}
                source={require("./assets/added-frame.png")}
              />
              <Text style={styles.cardHeading}>TMA-2 HD Wireless</Text>
              <Text style={styles.cardTitle}>USD 350</Text>
              <View style={styles.reviewContainer}>
                <Ionicons
                  style={styles.starIcon}
                  name="ios-star"
                  size={9}
                  color="orange"
                />
                <Text style={styles.reviewText}>4.6</Text>
                <Text style={styles.reviewText}>86 Reviews</Text>
                <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={16} color="grey" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <Image
                style={styles.cardImage}
                source={require("./assets/added-frame.png")}
              />
              <Text style={styles.cardHeading}>TMA-2 HD Wireless</Text>
              <Text style={styles.cardTitle}>USD 350</Text>
              <View style={styles.reviewContainer}>
                <Ionicons
                  style={styles.starIcon}
                  name="ios-star"
                  size={9}
                  color="orange"
                />
                <Text style={styles.reviewText}>4.6</Text>
                <Text style={styles.reviewText}>86 Reviews</Text>
                <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={16} color="grey" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <Image
                style={styles.cardImage}
                source={require("./assets/added-frame.png")}
              />
              <Text style={styles.cardHeading}>TMA-2 HD Wireless</Text>
              <Text style={styles.cardTitle}>USD 350</Text>
              <View style={styles.reviewContainer}>
                <Ionicons
                  style={styles.starIcon}
                  name="ios-star"
                  size={9}
                  color="orange"
                />
                <Text style={styles.reviewText}>4.6</Text>
                <Text style={styles.reviewText}>86 Reviews</Text>
                <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={16} color="grey" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <Image
                style={styles.cardImage}
                source={require("./assets/added-frame.png")}
              />
              <Text style={styles.cardHeading}>TMA-2 HD Wireless</Text>
              <Text style={styles.cardTitle}>USD 350</Text>
              <View style={styles.reviewContainer}>
                <Ionicons
                  style={styles.starIcon}
                  name="ios-star"
                  size={9}
                  color="orange"
                />
                <Text style={styles.reviewText}>4.6</Text>
                <Text style={styles.reviewText}>86 Reviews</Text>
                <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={16} color="grey" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 60,
    flex: 1,
  },

  cartContainer: {
    position: "absolute",
    marginRight: 25,
    top: 0,
    right: 0,
    paddingTop: 10,
    paddingRight: 10,
  },

  cartIcon: {
    width: 24,
    height: 24,
  },

  navigateLeftContainer: {
    marginLeft: 25,
    position: "absolute",
    top: 0,
    left: 0,
    paddingTop: 10,
    paddingLeft: 10,
  },

  navigateLeftIcon: {
    width: 24,
    height: 24,
  },

  title: {
    marginLeft: 25,
    marginTop: 60,
    fontSize: 16,
    fontWeight: 500,
  },

  heading: {
    marginLeft: 25,
    marginTop: 10,
    fontWeight: "700",
    fontSize: 24,
  },

  scrollMContainer: {
    marginLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },

  scroller: {
    paddingRight: 20,
    flexDirection: "row",
    marginTop: 20,
  },

  filterContainer: {
    marginRight: 15,
    marginTop: 20,
    borderColor: "#BABABA",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  filterIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },

  filterText: {
    marginLeft: 10,
    fontWeight: "500",
  },

  scrollText: {
    marginLeft: 20,
    fontWeight: "500",
  },

  itemContainer: {
    marginTop: 40,
    width: "100%",
    padding: 24,
    backgroundColor: "#F3F3F3",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  cardPairsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 175,
  },

  cardContainer: {
    marginBottom: 20,
    borderRadius: 15,
    width: "48%",
    padding: 15,
    backgroundColor: "white",
  },

  cardImage: {
    width: 125,
    height: 125,
  },

  cardHeading: {
    fontWeight: 500,
  },

  cardTitle: {
    fontSize: 12,
    fontWeight: "700",
  },

  reviewContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  starIcon: {
    marginRight: 5,
  },

  reviewText: {
    fontSize: 12,
    fontWeight: 500,
    marginRight: 10,
  },
});
