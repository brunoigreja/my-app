import { View, Text, StatusBar } from 'react-native'
import { homeStyles } from '../styles/home.styles'
import { ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

export default function App() {
  const router = useRouter()

  const handleSearch = (cityName: string) => {
    // Cast to any to satisfy router.push typing for dynamic route
    router.push({
      pathname: '/details',
      params: { cityName }
    } as any)
  }

  return (
    <SafeAreaView style={homeStyles.safeArea}>

      <StatusBar barStyle="dark-content" />

      <ScrollView style={homeStyles.container}>
        <View style={homeStyles.header}>
          <Text style={homeStyles.title}> 🌤️ Previsão do Tempo</Text>
          <Text style={homeStyles.subtitle}> 🌍 Busque o clima de qualquer cidade do mundo!</Text>
        </View>

        <SearchBar onSearch={(handleSearch)} />

        <View style={homeStyles.empyConteiner}>
          <Text style={homeStyles.emptyText}>Digite o nome de uma cidade acima para começar a buscar</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}