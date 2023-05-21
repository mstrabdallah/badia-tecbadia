export default function ({ route, store }) {
  store.dispatch("setApp", route.path);
  store.dispatch("setShowLang", route.path);
  
}
