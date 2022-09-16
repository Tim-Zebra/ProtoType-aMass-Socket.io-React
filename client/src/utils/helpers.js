module.exports = function calcPostValue(difficulty, duration) {
    let difficultyModifier;
    switch (difficulty) {
        case 'Easy':
            difficultyModifier = 1;
            break;
        case 'Medium':
            difficultyModifier = 2;
            break;
        case 'Hard':
            difficultyModifier = 3;
            break;
        default:
            difficultyModifier = 1;
    };
    const postValue = difficultyModifier * duration * 10;
    return postValue;
};