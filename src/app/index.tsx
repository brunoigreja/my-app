import { View, Text, StatusBar, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { homeStyles } from '../styles/home.styles'
import { ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { useLocation } from 'src/hooks/useLocation'
import { detailsStyles } from 'src/styles/details.styles'
import { searchBar } from 'src/styles/searchBar.styles'
import { getCurrentWeatherBycoords } from 'src/services/api'

export default function App() {
  const { getCurrentLocation, loading } = useLocation()
  const router = useRouter()

  const handleSearch = (cityName: string) => {
    router.push({
      pathname: '/details',
      params: { cityName }
    })
  }

  const handleLocation = async () => {
    const locationResult = await getCurrentLocation();

    if (!locationResult.success) {
      Alert.alert('Erro', locationResult.error)
    } else {
      const { latitude, longitude } = locationResult.coordinates
      const weatherResult = await getCurrentWeatherBycoords(latitude, longitude)

      if (!weatherResult.success) {
        Alert.alert('Erro', weatherResult.error)

      } else {
        router.push({
          pathname: '/details',
          params: { cityName: weatherResult.data.name }
        })
      }
    }

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

        <TouchableOpacity onPress={handleLocation} style={homeStyles.gpsButton}>
          {loading ? <ActivityIndicator color={'#ffff'} size={"small"} /> : <Text style={homeStyles.gpsButtonText}>Usar minha localização</Text>}

        </TouchableOpacity>

        <View style={homeStyles.empyConteiner}>
          <Text style={homeStyles.emptyText}>Digite o nome de uma cidade acima para começar a buscar</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}