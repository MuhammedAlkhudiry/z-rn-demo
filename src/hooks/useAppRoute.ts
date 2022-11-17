import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList, ScreenNames} from '../stack';

const useAppRoute = <R extends ScreenNames>() =>
  useRoute<RouteProp<RootStackParamList, R>>();

export default useAppRoute;
