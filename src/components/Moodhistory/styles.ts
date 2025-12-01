import { StyleSheet } from "react-native";


export default StyleSheet.create({
container: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "flex-end",
paddingVertical: 20,
},
dayWrapper: {
alignItems: "center",
width: 40,
},
circle: {
width: 32,
height: 32,
backgroundColor: "black",
borderRadius: 16,
justifyContent: "center",
alignItems: "center",
marginBottom: 10,
},
circleText: {
color: "white",
fontWeight: "bold",
},
bar: {
width: 16,
backgroundColor: "#f60404ff",
borderStartStartRadius: 6,
borderEndStartRadius: 6,
marginBottom: -2,
},
dayLabel: {
fontSize: 12,
color: "#555",
marginTop: 4,
},
});