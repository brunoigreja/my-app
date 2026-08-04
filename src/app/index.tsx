import { View, Text, StatusBar } from 'react-native'
import { homeStyles } from '../styles/home.styles'
import { ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {

  return (
    <SafeAreaView style={homeStyles.safeArea}>

      <StatusBar barStyle="dark-content" />
      <ScrollView style={homeStyles.container}>
        <View style={homeStyles.header}>
          <Text style={homeStyles.title}>Dev Tempo</Text>
          <Text style={homeStyles.subtitle}>Busque o clima em qualquer cidade do mundo!</Text>
        </View>
        <SearchBar onSearch={() => {}} loading={false} />
        <View style={homeStyles.empyConteiner}>
          <Text style={homeStyles.emptyText}>Digite o nome de uma cidade acima para começar a buscar</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}