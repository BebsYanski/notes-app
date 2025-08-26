import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import PostImage from "../assets/images/post-it.png";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* <Image source={require("../assets/images/post-it.png")} /> */}
      <Image source={PostImage} style={styles.image} />
      <Text style={styles.title}>Welcome to the Notes App!</Text>
      <Text style={styles.subtitle}>
        Capture your thoughts anytime, anywhere
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/notes");
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#343a40",
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    /*  shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3, */
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
