import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native'


const App=() => {

  return(
    <ScrollView>
      <Text style={styles.texto1}>Some text</Text>
      <View >
        <Text style={styles.texto2}>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                 }}
                     style={styles.linkstyle}
        />  
      </View>
      <TextInput style={ styles.textimp}
        defaultValue="     You can type in me"
        />
    </ScrollView>
  )
  const styles = StyleSheet.create({
    container: {padding:10},
    texto1:{paddingTop: 45, alignSelf: 'center', fontSize: 20, color: '#0069AC'},
    texto2:{alignSelf: 'center', fontSize: 30,color: '#0069AC'},
    textimp:{ margin:10, borderColor: '#8C8C8C', alignSelf: 'center', height: 40, 
    width: 300, borderWidth: 5},
    linkstyle:{width: 200, height: 200 , alignSelf: 'center'}
    
  })
}
export default App
