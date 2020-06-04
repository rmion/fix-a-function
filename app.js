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
        exerciseCap: 5,
        exercisesSolved: 0,
        exercisesAttempted: 0,
        timer: 'Off',
        timeLimit: 30,
        timeRemaining: 0,
        timerID: null,
        difficulty: 'easy',
        exercises: listOfExercises,
    },
    computed: {
        filteredExercises() {
            return  this.difficulty === 'all' ? 
                    this.exercises : 
                    this.exercises.filter(exercise => exercise.difficulty == this.difficulty);
        }
    },
    mounted() {
        this.updateChallengeFn();
    },
    methods: {
        updateChallengeFn() {
            document.getElementById('fn').textContent = this.filteredExercises[this.counter].fn;
        },
        getHint() {
            this.needsHint = true; 
            this.nextHint += 1;
        },
        answerMatchesSolution() {
            return document.getElementById('fn').textContent.trim().replace(/\s/g,'') === this.filteredExercises[this.counter].answer.trim().replace(/\s/g,'');
        },
        markCorrectAnswer() {
            this.isSolved = true;
            this.isWrongAnswer = false;
            this.score += (this.filteredExercises[this.counter].hints.length - this.nextHint);
            this.exercisesSolved += 1;
        },
        markIncorrectAnswer() {
            this.isWrongAnswer = true;
            this.awaitingAnotherTry = true;
            this.subtractFromLives(1);
        },
        checkAttemptedFix() {
            this.answerMatchesSolution() ? this.markCorrectAnswer() : this.markIncorrectAnswer();
        },
        removePreviousExercise() {
            this.filteredExercises.splice(this.counter, 1);
            if (this.filteredExercises.length == 0) {
                this.endGame();
            }
        },
        getIndexOfRandomExercise() {
            return Math.floor(Math.random() * this.filteredExercises.length);
        },
        subtractFromLives(num) {
            this.livesRemaining -= num;
        },
        enableSolveButton() {
            this.awaitingAnotherTry = false;
        },
        prepareNextExercise() {
            this.isSolved = false;
            this.isWrongAnswer = false;
            this.didGiveUp = false;
            this.needsHint = false;
            this.awaitingAnotherTry = false;
            this.nextHint = 0;
            this.exercisesAttempted += 1;
            this.removePreviousExercise();
            this.counter = this.getIndexOfRandomExercise();
            this.updateChallengeFn();
            if (this.timer === "On") {
                this.resetTimer()
            }
        },
        giveUp() {
            this.didGiveUp = true;
            this.needsHint = false;
            this.subtractFromLives(3);
        },
        timeIsUp() {
            clearInterval(this.timerID);
            this.giveUp();
        },
        resetTimer() {
            this.timeRemaining = this.timeLimit;
            this.timerID = setInterval(this.decrementTimer, 1000);
        },
        decrementTimer() {
            if (this.timeRemaining < 1) {
                this.timeIsUp()
            } else {
                this.timeRemaining -= 1;
            }
        },
        endGame() {
            this.livesRemaining = 0;
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
                            "Score": this.score,
                            "Lives": this.livesRemaining,
                            "Solved": this.exercisesSolved,
                            "Attempts": this.exercisesAttempted,
                            "Timer": this.timer,
                            "Time Limit": this.timeLimit,
                            "Difficulty": this.difficulty,
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
    },
    watch: {
        timer(newVal, oldVal) {
            if (newVal === "On") {
                this.resetTimer();
            } else {
                this.timeRemaining = 0;
                this.timeIsUp();
            }
        },
        difficulty(newVal, oldVal) {
            this.updateChallengeFn()
        }
    }
})