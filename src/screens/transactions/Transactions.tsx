
import React, { useEffect, useState } from 'react'; // Import the missing useState hook
import {StyleSheet, Text, View, FlatList, Button, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {RootState} from '../../context/store';
import {useGetClientsQuery} from '../../API/ClientApi';
import {tokens} from '../../assets/palette';
import { Icon } from 'react-native-paper';


const Transactions = () => {
  const {mode} = useSelector((state: RootState) => state.global);
  const colors:any = tokens(mode);

  const {data, isLoading} = useGetClientsQuery(1);
  const operation = data?.compteBancaire.operations;
  console.log('🚀 operations', operation);

 


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.main.backgroundColor,
    },
    item: {
      width: wp(90),
      flex:1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: wp(4),
      padding: wp(3),
      backgroundColor: colors.main.rectangleColor,
      margin: wp(1)
    },
    icon: {
      
      width: hp(8),
      height: hp(8),
      margin: wp(2),
      borderRadius: hp(2),
      backgroundColor: colors.background[300],
      justifyContent: 'center',
      alignItems: 'center',

    },
    left: {
      
      //flexWrap: 'wrap',
      flexDirection: 'column',
      
    },
    libelle: {
      marginBottom: wp(2),
      fontSize: wp(4),
      color: colors.main.fontColor,
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
    montant: {
      fontWeight: 'bold',
      color: colors.main.passText,
    },
    montantCredit: {
      fontWeight: 'bold',
      color: colors.main.dangerText,
    },
    text:{
      fontSize: wp(4),
      marginBottom: wp(2),
      color: colors.main.fontColor,
    }
  });
  
  const renderItem = ({item}: {item: any}) => (
    <TouchableWithoutFeedback
      accessibilityLabel={`operation ${item.op_id}, operation ${item.op_canal.replace(/_/g, ' ')}, operation effectuee a ${item.op_marchant}, ${item.op_emplacement}, la date de l'operation est ${item.date_operation}, son montant est de ${item.op_type === 'Credit' ? '' : '-'}${item.montant} dinars`}
      onPress={() => {
        // Handle item click
      }}
    >
      <View style={styles.item} accessibilityHint={`operation ${item.op_id}`}>
      {/* <View style={styles.icon} accessibilityLabel='icone'>
        <Icon source={item.op_type === 'Credit' ? 'download-outline' : 'upload-outline'} size={hp(5)} color={item.op_type === 'Credit' ? colors.main.passText : colors.main.dangerText}  />

      </View> */}
      
      <View style={styles.left}>
        <Text style={styles.libelle} accessibilityRole='text' accessibilityLabel={`operation ${item.op_canal.replace(/_/g, ' ')}`}>{item.op_canal.replace(/_/g, ' ')}</Text>
        <Text style={styles.text} accessibilityRole='text' accessibilityLabel={`operation effectuee a ${item.op_marchant}`}>{item.op_marchant}</Text>
        <Text style={styles.text} accessibilityRole='text' accessibilityLabel={`emplacement de l'operation est ${item.op_emplacement}`}>{item.op_emplacement}</Text>
      </View>
      
      <Text style={[styles.text,{width:wp(12)}]} accessibilityRole='text' accessibilityLabel={`la date de l'operation est ${item.date_operation}`}>{item.date_operation}</Text>
      <View style={styles.icon}>
        <Text style={item.op_type === 'Credit' ? styles.montant : styles.montantCredit} accessibilityRole='text' accessibilityLabel={`le montant de l'operation est ${item.op_type === 'Credit' ? '' : '-'}${item.montant} dinars`} >
          {item.op_type === 'Credit' ? '' : '-'}{item.montant}DT
        </Text>
      </View>
      
    </View>
    </TouchableWithoutFeedback>

  );



  

  return (

    <View style={styles.container}>
      <Text style={[styles.libelle, { textAlign: 'left', fontSize: wp(6), marginBottom:wp(3)}]}>Historique de Mouvements</Text>
      

      
      <FlatList
        data={operation}
        renderItem={renderItem}
        keyExtractor={item => item.op_id.toString()}
        // accessibilityRole='list'
        // accessibilityLabel='historiques de vos mouvements'
      />
    </View>
  );
};

export default Transactions;
