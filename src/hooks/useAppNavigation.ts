import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../stack';

const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export default useAppNavigation;
