import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";

const EatsScreen = () => {
  return (
    <SafeAreaView style={tw`bg-red-500 h-full`}>
      <View style={[tw`p-5`]}>
        <Text>EatsScreen</Text>
      </View>
      <View>
        <Text>come back later, we're preparing something good</Text>
      </View>
    </SafeAreaView>
  );
};

export default EatsScreen;

const styles = StyleSheet.create({});
