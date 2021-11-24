import React, {useContext} from 'react';
import { View, Text, Stylesheet } from 'react-native';
import CartContext from '../context/CartContext';


const Index = () => {
    
    const {data, addBlogPost} = useContext(CartContext);
    
    return <View>
        <Text>Index Screen</Text>
    </View>
}

const styles = Stylesheet.create({});

export default Index;