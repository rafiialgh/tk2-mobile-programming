import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

const MyComponent = () => {
  const navigation = useNavigation()

  const _goBack = () => navigation.navigate('Login');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header mode='small' style={{ backgroundColor: '#fff' }}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Catalog" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default MyComponent;