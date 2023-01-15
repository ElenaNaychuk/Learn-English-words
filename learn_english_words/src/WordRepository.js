export class WordRepository {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getAllWords() {
        const response = await fetch(this.baseUrl);
        return response.json();
    }

    async updateWord(word) {
        await fetch(`${this.baseUrl}/${word.id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(word)
        });
    }

    async addWord(word) {
        await fetch(`${this.baseUrl}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(word)
        });
    }

    async deleteWord(word) {
        await fetch(`${this.baseUrl}/${word.id}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(word)
        });
    }
}