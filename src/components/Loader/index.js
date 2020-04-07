import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function Loader() {
  const show = useSelector((state) => state.loader.show);

  return (
    show && (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
});
