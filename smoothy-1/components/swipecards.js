import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import db from '../utils/firebase';
import { collection, getDocs } from "firebase/firestore";


const width = Dimensions.get('window').width;

function Card(props) {
  return (
    <View style={styles.card}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: (props.profile) }} />
    </View>
    <View style={styles.cardDetail}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.pickupLine}>{props.pickupLine.replaceAll('\\n', '\n')}</Text>
      <Text style={styles.location}>{props.radius}</Text>
    </View>
    </View>
  )
};

function NoMoreCards(props) {
  return (
    <View style={styles.noMoreCards}>
      <Text>You've gone through all of our userbase 😣</Text>
    </View>
  )
}

export default function Cards() {

  const [cards, setCards] = React.useState([]);

  const getUsers = async () => {
    const users = await getDocs(collection(db, "users"));
    const parsed = users.docs.map(doc => doc.data());
    setCards(parsed);
  };

  React.useEffect(() => { getUsers() }, []);


  const handleYup = (card) =>{
    console.log(`Yup for ${card.text}`)
  }
  const handleNope = (card) => {
    console.log(`Nope for ${card.text}`)
  }
  const handleMaybe = (card) => {
    console.log(`Maybe for ${card.text}`)
  }

return (<View style={{}}>
      <SwipeCards
        
        cards={cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={handleYup}
        handleNope={handleNope}
        handleMaybe={handleMaybe}
        hasMaybeAction
        
      />
      </View>);
}


const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    height: '80%',
    width: width/1.2,
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: '#000',
    borderWidth: 4,

    // overflow: 'hidden',
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // borderRadius: 5,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardDetail: {
    width: '100%',
    padding: 10,
  },
  pickupLine: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
    marginTop: 10,
  },
  location: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray'
  }
})