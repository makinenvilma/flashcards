import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  StatusBar,
} from 'react-native';

const words = [
  {fi: 'omena', en: 'apple'},
  {fi: 'kirja', en: 'book'},
  {fi: 'koira', en: 'dog'},
  {fi: 'aurinko', en: 'sun'},
  {fi: 'vesi', en: 'water'},
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [index, setIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#111' : '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  };

  const currentWord = words[index];

  const nextWord = () => {
    setShowTranslation(false);
    setIndex((prev) => (prev + 1) % words.length);
  };

  const prevWord = () => {
    setShowTranslation(false);
    setIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#000'}]}>
        Flashcards
      </Text>

      <Text style={[styles.word, {color: isDarkMode ? '#fff' : '#000'}]}>
        {currentWord.fi}
      </Text>

      {showTranslation && (
        <Text style={[styles.translation, {color: isDarkMode ? '#aaa' : '#555'}]}>
          {currentWord.en}
        </Text>
      )}

      <TouchableOpacity onPress={() => setShowTranslation(!showTranslation)} style={styles.button}>
        <Text style={styles.buttonText}>
          {showTranslation ? 'Piilota käännös' : 'Näytä käännös'}
        </Text>
      </TouchableOpacity>

      <View style={styles.navButtons}>
        <TouchableOpacity onPress={prevWord} style={styles.navButton}>
          <Text style={styles.navText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextWord} style={styles.navButton}>
          <Text style={styles.navText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  word: {
    fontSize: 40,
    marginBottom: 20,
  },
  translation: {
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  navButtons: {
    flexDirection: 'row',
    gap: 20,
  },
  navButton: {
    padding: 15,
  },
  navText: {
    fontSize: 30,
    color: '#4A90E2',
  },
});

export default App;
