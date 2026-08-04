# Flashcards

A mobile app for practising Finnish to English vocabulary. It shows one word at a
time, reveals the translation on a button press, and moves through the deck with
arrow buttons.

## Status

Runs on both iOS and Android. Still one screen and five words.

Working right now:

- One card at a time, showing the Finnish word
- A button that reveals the English translation and hides it again
- Arrows for moving back and forth through the deck, wrapping around at the ends
- Follows the phone's own light or dark setting

Not done yet:

- The words are hardcoded in `App.tsx`. There are five of them.
- No way to add your own cards.
- No decks or categories, just the one list.
- Nothing is saved. Closing the app returns you to the first card.
- No shuffle, and no record of which words you already know.
- The project is still called AwesomeProject in `app.json` and in the native folders.

## Tech

React Native 0.79 with React 19 and TypeScript. No navigation library, no state
library, no backend; the entire app is one component in `App.tsx` with two pieces of
`useState` and a plain `StyleSheet`. Dark mode comes from `useColorScheme`, so it
follows the system setting rather than a toggle in the app.

Node 18 or newer. iOS builds also need Ruby and CocoaPods, installed through the
bundled Gemfile.

## Running it

```bash
git clone https://github.com/makinenvilma/flashcards.git
cd flashcards
npm install
npm start
```

Then, in a second terminal:

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
App.tsx          the entire app: word list, card, buttons, styles
index.js         registers App with React Native
app.json         app name, still the template default
__tests__/       one generated smoke test that renders App
android/         native Android project
ios/             native iOS project and Podfile
```

## Next up

1. Move the words out of `App.tsx` into their own file
2. A screen for adding your own cards
3. Save the deck on the device so it survives a restart
4. Shuffle, and some way of showing weak words more often
5. Rename the project from AwesomeProject
