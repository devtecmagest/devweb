import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../images/icons/heart-outline.png';
import unfavoriteIcon from '../../images/icons/unfavorite.png';
import whatsappIcon from '../../images/icons/whatsapp.png';

import styles from './styles';

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher:Teacher;
}
const TeacherItem:React.FC<TeacherItemProps> = ({teacher}) =>{
    
    function handleLinkWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }
    return (
    <View style = { styles.container }>
    <View style = { styles.profile} >
    <Image style= { styles.avatar}
    source = { { uri: teacher.avatar}}
    />
    <View style = { styles.profileInfo} > 
    <Text style = {styles.name }>{teacher.name}</Text> 
    <Text style = {styles.subject }>{teacher.subject}</Text> 
    </View>
    </View>
    <Text style = { styles.bio}>{teacher.bio}</Text>
    <View style = { styles.footer}>
    <Text style = { styles.price}>
        Preço por hora {'   '}
    <Text style = { styles.priceValue}>$ {teacher.cost}</Text>
    </Text>
    <View style = {styles.buttonsContainer}>
        <RectButton style = {[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOutlineIcon } />*/}
            <Image source={unfavoriteIcon } />
        </RectButton>
        <RectButton onPress = {handleLinkWhatsapp} style = { styles.contactButton}>
            <Image source={whatsappIcon } />
            <Text style = {styles.contactButtonText}>Entre em contacto</Text>
        </RectButton>
    </View>
    </View>
    </View>
    )
}


export default TeacherItem;