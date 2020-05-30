let app = new Vue({
    el: "#app",
    data: {
        email: '',
        submitLabel: 'Email Robert for more!',
        isRecordingSubmission: false,
        awaitingAnotherTry: false,
        isWrongAnswer: false,
        isSolved: false,
        didGiveUp: false,
        needsHint: false,
        nextHint: 0,
        counter: 0,
        score: 0,
        livesRemaining: 10,
        exercises: listOfExercises,
    },
    computed: {
        trimmedSolutions() {
            return this.exercises.map(exercise => exercise.answer.trim().replace(/\s/g,''))
        }
    },
    mounted() {
        this.updateChallengeFn();
    },
    methods: {
        updateChallengeFn() {
            document.getElementById('fn').textContent = this.exercises[this.counter].fn;
        },
        answerMatchesSolution() {
            return document.getElementById('fn').textContent.trim().replace(/\s/g,'') === this.trimmedSolutions[this.counter];
        },
        markCorrectAnswer() {
            this.isSolved = true;
            this.isWrongAnswer = false;
            this.score += (this.exercises[this.counter].hints.length - this.nextHint);
        },
        markIncorrectAnswer() {
            this.isWrongAnswer = true;
            this.awaitingAnotherTry = true;
            this.livesRemaining -= 1;
        },
        checkAttemptedFix() {
            this.answerMatchesSolution() ? this.markCorrectAnswer() : this.markIncorrectAnswer();
        },
        removePreviousExercise() {
            this.exercises.splice(this.counter, 1);
        },
        getIndexOfRandomExercise() {
            return Math.floor(Math.random() * this.exercises.length);
        },
        removeOneHeart() {
            this.livesRemaining -= 1;
        },
        enableSolveButton() {
            this.awaitingAnotherTry = false;
        },
        prepareNextExercise() {
            this.isSolved = false;
            this.isWrongAnswer = false;
            this.didGiveUp = false;
            this.needsHint = false;
            this.nextHint = 0;
            this.removePreviousExercise();
            this.counter = this.getIndexOfRandomExercise();
            this.updateChallengeFn();
        },
        giveUp() {
            this.didGiveUp = true;
            this.needsHint = false;
            this.removeOneHeart();
        },
        recordGame() {
            if (this.score > 0 && this.email !== '') {
                this.submitLabel = "Sending...";
                this.isRecordingSubmission = true;
                fetch('https://api.airtable.com/v0/appwFsMeOIf3lyiIw/Fix%20A%20Function', {
                    method: "POST",
                    headers: { 
                        Authorization: "Bearer "+ 'keyP1MqDtZjN0eBc8',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                                "fields": {
                                    "Email": this.email,
                                    "Score": this.score
                                }
                            })
                })
                .then(response => response.json())
                .then(data => {
                    this.submitLabel = "Success!"
                })
                .catch(err => console.error(err))                
            }
        }
    }
})