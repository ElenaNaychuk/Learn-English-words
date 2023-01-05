const baseUrl = 'http://itgirlschool.justmakeit.ru/api/words';

export class WordRepository {
    constructor(word) {
        this.word = word;
    }
    async getAllWords() {
        const response = await fetch(baseUrl);
        return response.json();
    }

    async updateWord(word) {
        await fetch(`${baseUrl}/${word.id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(word)
        });
    }

    async addWord(word) {
        await fetch(`${baseUrl}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(word)
        });
    }

    async deleteWord(word) {
        await fetch(`${baseUrl}/${word.id}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(word)
        });
    }
}