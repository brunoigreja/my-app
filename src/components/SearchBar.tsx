import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { searchBar } from "src/styles/searchbar.styles";


interface SearchBarProps{
  onSearch:(cityName: string) => void;
  loading?: boolean;
}

export default function SearchBar({ onSearch, loading = false }:SearchBarProps){
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log("searchText");
  }

  return (
    <View style={searchBar.container}>
      <View style={searchBar.inputContainer}>
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Digite o nome de uma cidade"
          placeholderTextColor= "#999"
          autoCapitalize="words"
          autoCorrect
          editable={!loading}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
          style={searchBar.input}
        />
        <TouchableOpacity onPress={handleSearch} disabled={loading} style={searchBar.button}>
          <Text style={searchBar.buttonText} >{loading ? 'Buscando...' : 'Buscar'}</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}