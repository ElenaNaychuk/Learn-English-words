import { makeAutoObservable } from "mobx";
import { WordRepository } from "../WordRepository";

const baseUrl = '/api/words';

const wordRepository = new WordRepository(baseUrl);
class WordsStore {
    words = [];
    isLoaded = false;
    isLoading = false;
    error = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadWords = async () => {
        if (this.isLoaded) {
            return;
        }
        try {
            this.words = await wordRepository.getAllWords();
            this.isLoaded = true;
        } catch (error) {
            console.log(error);
        }
    }

    aupdateWord = async (word) => {
        try {
            await wordRepository.updateWord(word);
            const index = this.words.findIndex(word);
            this.words.splice(index, 1, word);
        } catch (error) {
            console.log(error);
        }
    }

    addWord = async (word) => {
        this.words.push(word);
        try {
            await wordRepository.addWord(word);
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
};

export default WordsStore;