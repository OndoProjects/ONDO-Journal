import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
  },
  imageWrapper: {
    width: "33.33%",
    aspectRatio: 1,
    padding: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '90%',
    height: '80%',
    borderRadius: 12,
  },
});
