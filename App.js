/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  onPress = () => {
    alert("toto");
  };
  render() {
    console.log("- start App-");
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            2001, l'odyssée de l'espace (1968)
          </Text>
        </View>
        <View style={styles.part2Container}>
          <Text style={styles.part2Text1}>
            2001, l'odyssée de l'espace{" "}
            <Text style={styles.part2Text2}>(1968)</Text>
          </Text>
          <Text style={styles.part2Text3}>
            2001: A Space Odyssey{" "}
            <Text style={styles.part2Text4}>(original title)</Text>
          </Text>
          <Text style={styles.part2Text3}>
            Tous publics{"  |  "}2h 29min{"  |  "}Adventure, Sci-Fi
          </Text>
        </View>
        <View style={styles.part3Container}>
          <View style={styles.part3Container1}>
            <Image
              style={{ width: 160, height: 250 }}
              source={{
                uri:
                  "http://www.dvdclassik.com/upload/images/affiches/2001-l-odyssee-de-l-espace.jpeg"
              }}
            />
          </View>
          <View style={styles.part3Container2}>
            <Text style={styles.part3Text1} numberOfLines={3}>
              Humanity finds a mysterious, obviously artificial object buried
              beneath the Lunar surface and, with the intelligent computer
              H.A.L. 9000, sets off on a quest
            </Text>
            <TouchableOpacity
              onPress={this.onPress}
              style={{
                backgroundColor: "#3e90eb",
                borderRadius: 8,
                height: 50,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 25, color: "#ffffff" }}>
                + Add to Watchlist
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.part4Container}>
          <View style={styles.part4Container1}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{
                uri:
                  "http://icons.iconarchive.com/icons/tatice/cristal-intense/128/Etoile-icon.png"
              }}
            />
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <Text style={{ fontSize: 40, color: "#ffffff" }}>
                8.3 <Text style={{ fontSize: 20, color: "#aaaaaa" }}>/10</Text>
              </Text>
              <Text style={{ fontSize: 20, color: "#bbbbbb" }}>454 834</Text>
            </View>
            <Image
              style={{ width: 60, height: 60 }}
              source={{
                uri: "http://images.clipartpanda.com/star-clipart-bTyExdEjc.png"
              }}
            />
            <View>
              <Text>Rate This</Text>
            </View>
          </View>
          <View style={styles.part4Container2} />
        </View>
        <ScrollView style={styles.lastContainer} horizontal={true}>
          <Image
            style={{ width: 160, height: 250, marginRight: 20 }}
            source={{
              uri:
                "http://www.dvdclassik.com/upload/images/affiches/2001-l-odyssee-de-l-espace.jpeg"
            }}
          />
          <Image
            style={{ width: 160, height: 250, marginRight: 20 }}
            source={{
              uri:
                "http://www.dvdclassik.com/upload/images/affiches/2001-l-odyssee-de-l-espace.jpeg"
            }}
          />
          <Image
            style={{ width: 160, height: 250, marginRight: 20 }}
            source={{
              uri:
                "http://www.dvdclassik.com/upload/images/affiches/2001-l-odyssee-de-l-espace.jpeg"
            }}
          />
          <Image
            style={{ width: 160, height: 250, marginRight: 20 }}
            source={{
              uri:
                "http://www.dvdclassik.com/upload/images/affiches/2001-l-odyssee-de-l-espace.jpeg"
            }}
          />
          <Image
            style={{ width: 160, height: 250, marginRight: 20 }}
            source={{
              uri:
                "http://www.dvdclassik.com/upload/images/affiches/2001-l-odyssee-de-l-espace.jpeg"
            }}
          />
          <Image
            style={{ width: 160, height: 250, marginRight: 20 }}
            source={{
              uri:
                "http://www.dvdclassik.com/upload/images/affiches/2001-l-odyssee-de-l-espace.jpeg"
            }}
          />
          <Image
            style={{ width: 160, height: 250, marginRight: 20 }}
            source={{
              uri:
                "http://www.dvdclassik.com/upload/images/affiches/2001-l-odyssee-de-l-espace.jpeg"
            }}
          />
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#373737"
  },
  headerContainer: {
    height: 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  headerText: {
    fontSize: 20,
    color: "#ffffff",
    paddingBottom: 5
  },
  part2Container: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 12
  },
  part2Text1: {
    fontSize: 40,
    color: "#ffffff",
    paddingBottom: 5
  },
  part2Text2: {
    fontSize: 30,
    color: "#aaaaaa",
    paddingBottom: 5
  },
  part2Text3: {
    fontSize: 25,
    color: "#dddddd",
    paddingBottom: 5
  },
  part2Text4: {
    fontSize: 25,
    color: "#dddddd",
    paddingBottom: 5,
    fontStyle: "italic"
  },
  part3Container: {
    backgroundColor: "#1f1f1f",
    height: 300,
    flexDirection: "row",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  part3Container1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  part3Container2: {
    flex: 2,
    flexDirection: "column",
    paddingRight: 40,
    paddingVertical: 20
  },
  part3Text1: {
    color: "#ffffff",
    fontSize: 30,
    lineHeight: 50,
    paddingBottom: 20
  },
  part4Container: {
    backgroundColor: "#1f1f1f",
    height: 100,
    flexDirection: "row",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  part4Container1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRightColor: "#bbb",
    borderRightWidth: StyleSheet.hairlineWidth,
    padding: 10
  },
  part4Container2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  lastContainer: {
    backgroundColor: "#1f1f1f",
    height: 300,
    flexDirection: "row",
    padding: 15
  }
});
