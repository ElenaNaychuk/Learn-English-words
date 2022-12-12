class Word {
    constructor(id, english, transcription, russian, tags, isLearned) {
        this.id = id;
        this.english = english;
        this.transcription = transcription;
        this.russian = russian;
        this.tags = tags;
        this.isLearned = isLearned;
    };

    markWordAsLearned() {
        this.isLearned = true;
    };
};
