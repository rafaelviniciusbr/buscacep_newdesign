import React, {useState} from 'react';
import {View, Text, TouchableOpacity,
       StyleSheet, Image, TextInput, 
       SafeAreaView, Keyboard} from 'react-native';
import api from "./services/api";
import MostrarModal from './components/modal';

export default function App(props){
  const [cepUser, setCepUser] = useState(['']);
  const [cep, setCep] = useState('');
  const [exibirModal, setExibirModal] = useState(false);

  async function getCep(){
    if(cep ==''){
      alert("Digite um cep válido!")
      return;
    }
    try{
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      setCep('');
      setExibirModal(true);
      Keyboard.dismiss();
    }
    catch(error){
      alert('Digite um cep válido!')
      console.log('ERROR: ' + error);
    }
  }

  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.containerLogo}>
          <Image style={styles.logo}source={require('./assets/img/icone-localizacao.png')}/>
          <View style={styles.title}>
          <Text style={styles.logoBusca}>Busca</Text><Text style={styles.logoCep}>Cep</Text>
          </View>
        </View>
        <View style={styles.containerInputs}>
          <Text style={styles.txt}>Digite o cep:</Text>
          <TextInput style={styles.txtCep} placeholder=" Ex: 78090780"
          value={cep} keyboardType="numeric" 
          onChangeText={ (texto) => setCep(texto) }/>
          <TouchableOpacity style={styles.btnText} onPress={getCep}>
            <Text style={styles.txtSearch}>Pesquisar </Text><Image style={styles.btn}source={require('./assets/img/search.png')}/>
          </TouchableOpacity>
          {exibirModal && (<MostrarModal {...props} data={cepUser}
           exibirModal={exibirModal} setExibirModal ={setExibirModal}/>)}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:3,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#f0ddee',

  },
  containerLogo:{
    marginTop: -100,
  },
  logo:{
    width: 100,
    height: 100,
  },
  title:{
    flexDirection: 'row',
  },
  logoBusca:{
    fontFamily: 'Age',
    fontSize: 20,
    color:'#5B57F2'
  },
  logoCep:{
    fontFamily: 'Age',
    fontSize: 40,
    color:'#D154E8'

  },
  txtCep:{
    marginStart: -12,
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor:'#FFF',
    padding: 10,
    borderRadius: 15,
    width: 350,
  },
  btn:{
    width: 30,
    height: 30
  },
  txt:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginStart: -245
  },
  btnText:{
    flexDirection:'row',
    backgroundColor: '#5B57F2',
    padding: 5,
    width: 150,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 10
  },
  containerInputs:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtSearch:{
    fontSize: 18,
    marginBottom: 5,
    color:'#FFF',
    fontWeight: 'bold'
  },
});