import { View, Image } from 'react-native';

const MiImagen = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image
        style={{ width: 400, height: 200 }}
        source={{
          uri: 'https://picsum.photos/400/300'
        }}
      />
    </View>
  );
};

export default MiImagen;