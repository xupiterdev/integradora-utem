import React, {useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View
} from 'react-native';

import Navigation from './app/navigations/navigation.navigation'

export default function App() {
  return(<Navigation />)
}



// export default function (){
//   const [contador, setContador] = useState(0);

//   const llegarA10 = () => {
//     setContador(contador+1)
//     if(contador === 10) {
//       alert("Hemos llegado a 10 cliks")
//       setContador(0);
//     }
//   }

//   return (
//     <View style={Style.contenedor}>
//       <Text style={Style.title}>Proyecto integrador 5-TTI-1</Text>
//       <Text>Haz dado {contador} cliks!</Text>
//       <Button 
//         title="Mas 1"
//         color="#00C6C9"
//         onPress={llegarA10}
//       />

//       <TouchableOpacity
//         style={Style.btnRed}
//         onPress={() => setContador(contador-1)}
//       >
//         <Text style={Style.textWhite}>Menos 1</Text>
//       </TouchableOpacity>

//     </View>
//   );
// }

// const Style = StyleSheet.create({
//   contenedor : {
//     flex : 1,
//     justifyContent : "center",
//     alignItems: "center"
//   },
//   title : {
//     fontSize : 20
//   },
//   btnRed : {
//     width: 300,
//     height : 100,
//     backgroundColor : "#B6151C",
//     borderRadius : 10,
//     justifyContent : "center",
//     alignItems: "center"
//   },
//   textWhite : {
//     color: "#f6f6f6",
//     fontSize:40
//   }
// })




