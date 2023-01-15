export class WordRepository {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getAllWords() {
        const response = await fetch(this.baseUrl);
        return response.json();
    }

    async saveUpdateWord(id, word) {
        const response = await fetch(`${this.baseUrl}/${id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(word)
        });
        return response.json();
    }

    async addWord(word) {
        const response = await fetch(`${this.baseUrl}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(word)
        });
        return response.json();
    }

    async deleteWord(id) {
        await fetch(`${this.baseUrl}/${id}/delete`, {
            method: 'POST',
        });
    }
}