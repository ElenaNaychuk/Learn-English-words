import { makeAutoObservable } from "mobx";
import { WordRepository } from "../WordRepository";

const baseUrl = 'http://itgirlschool.justmakeit.ru/api/words';
const wordRepository = new WordRepository(baseUrl);
class WordsStore {
    words = [];
    isLoaded = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    loadWords = async () => {
        if (this.isLoaded && this.isLoading) {
            return;
        }
        try {
            this.isLoading = true;
            this.words = await wordRepository.getAllWords();
            this.isLoading = false;
            this.isLoaded = true;
        } catch (error) {
            console.log(error);
        }
    }

    updateWord = async (word) => {
        try {
            await wordRepository.updateWord(word);
            const index = this.words.findIndex(word);
            this.words.splice(index, 1, word);
        } catch (error) {
            console.log(error);
        }
    }

    addWord = async (word) => {
        try {
            await wordRepository.addWord(word);
            this.words.push(word);
        } catch (error) {
            console.log(error);
        }
    }

    deleteWord = async (word) => {
        try {
            await wordRepository.deleteWord(word);
            this.words = this.words.filter(item => item.id !== word.id)
        } catch (error) {
            console.log(error);
        }
    }
}

export default new WordsStore();