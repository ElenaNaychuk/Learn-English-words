import WordsStore from "./WordStore";
import UserStore from "./UserStore";

export const store = {
    wordsStore: new WordsStore(),
    userStore: new UserStore(),
}