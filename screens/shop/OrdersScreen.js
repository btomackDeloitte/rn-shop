import React from 'react';
import { FlatList, Button, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/ui/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';


const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders);

    return (
        <FlatList 
            data={orders} 
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <OrderItem 
                    amount={itemData.item.totalAmount} 
                    date={itemData.item.readableDate}
                    items={itemData.item.items}
                    deletable={false}
                />
            )}
        />
    );
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Orders',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent ={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    iconSize={23}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}  
                />
            </HeaderButtons>
          ),
    };
    
};

export default OrdersScreen;