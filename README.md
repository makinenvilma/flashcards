# Flashcards

A mobile app for practising Finnish to English vocabulary. Shows one word at a time,
reveals the translation on a button press, and navigates the deck with arrow buttons.

## Status

Runs on iOS and Android. One screen, five words.

Implemented:

- One card at a time, showing the Finnish word
- Button to show and hide the English translation
- Arrow buttons for navigating the deck, wrapping around at the ends
- Follows the system light or dark mode

Not implemented:

- Words are hardcoded in `App.tsx` (five words)
- Adding custom cards
- Decks or categories
- Saving progress. The app starts from the first card on every launch.
- Shuffle and tracking of known words
- The project is still named AwesomeProject in `app.json` and the native folders

## Tech

React Native 0.79, React 19 and TypeScript. No navigation library, state library or
backend. The app is one component in `App.tsx` with two `useState` hooks and a
`StyleSheet`. Dark mode uses `useColorScheme` and follows the system setting.

Requires Node 18 or newer. iOS builds also require Ruby and CocoaPods, installed
through the included Gemfile.

## Running it

```bash
git clone https://github.com/makinenvilma/flashcards.git
cd flashcards
npm install
npm start
```

In a second terminal:

```bash
npm run android
```

For iOS, install the pods first:

```bash
bundle install
bundle exec pod install --project-directory=ios
npm run ios
```

## Layout of the code

```
App.tsx          the app: word list, card, buttons, styles
index.js         registers App with React Native
app.json         app name, still the template default
__tests__/       one generated smoke test that renders App
android/         native Android project
ios/             native iOS project and Podfile
```

## Next up

1. Move the words from `App.tsx` to a separate file
2. Screen for adding cards
3. Save the deck on the device
4. Shuffle, and showing difficult words more often
5. Rename the project from AwesomeProject
