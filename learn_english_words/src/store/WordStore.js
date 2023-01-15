import { makeAutoObservable } from "mobx";
import { WordRepository } from "../WordRepository";

const baseUrl = '/api/words';

const wordRepository = new WordRepository(baseUrl);
class WordsStore {
    words = [];
    isLoaded = false;
    isLoading = false;
    serverError = false;

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
            this.serverError = true;
        }
    }

    updateWord = async (id, word) => {
        try {
            const response = await wordRepository.saveUpdateWord(id, word);
            const index = this.words.findIndex((element) => element.id === id);
            this.words.splice(index, 1, response);
        } catch (error) {
            console.log(error);
            this.serverError = true;
        }
    }

    addWord = async (word) => {
        try {
            const wordData = await wordRepository.addWord(word);
            this.words.push(wordData);
        } catch (error) {
            console.log(error);
            this.serverError = true;
        }
    }

    deleteWord = async (id) => {
        try {
            await wordRepository.deleteWord(id);
            this.words = this.words.filter(item => item.id !== id)
        } catch (error) {
            console.log(error);
            this.serverError = true;
        }
    }
};

export default WordsStore;