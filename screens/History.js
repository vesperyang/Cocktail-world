import { Text, Button,} from "react-native"; 
import { useNavigation } from '@react-navigation/native'; 

export default function History () { 
    const navigation = useNavigation(); 
    return ( <Button title="New" onPress={() => { navigation.push("New"); }} /> ); }