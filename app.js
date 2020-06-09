let app = new Vue({
    el: "#app",
    data: {
        exercises: listOfExercises,
        airTableId: null,
        isRepeatCustomer: false,
        isTimeGateLifted: true,
        priorSessions: [],
        isRecordingSubmission: false,
        isAwaitingAnotherTry: false,
        isWrongAnswer: false,
        isSolved: false,
        didGiveUp: false,
        hasAttemptedToSolve: false,
        needsHint: false,
        nextHint: 0,
        counter: 0,
        score: 0,
        livesRemaining: 10,
        exerciseCap: 5,
        exercisesSolved: 0,
        exercisesAttempted: 0,
        timeLimit: 30,
        timeRemaining: 0,
        timerId: null,
        timer: 'Off',
        difficulty: 'all',
        language: 'js',
        email: '',
        submitLabel: 'Email Robert for more!',
    },
    computed: {
        filteredExercises() {
            return  this.difficulty === 'all' ? 
                    this.exercises : 
                    this.exercises.filter(exercise => exercise.difficulty == this.difficulty);
        },
        accumulatedScore() {
            return this.priorSessions.map(i => i["Score"]).reduce((i, acc) => acc + i["Score"]);
        }
    },
    mounted() {
        this.manageVisitorRecords();
        this.counter = this.getIndexOfRandomExercise();
        this.updateChallengeFn();
    },
    methods: {
        updateTimeGate(list) {
            let lastVisit = list[list.length - 1];
            if (lastVisit["Attempts"] < 5 && lastVisit["Lives"] > 0) {
                this.score = lastVisit["Score"],
                this.livesRemaining = lastVisit["Lives"],
                this.exercisesSolved = lastVisit["Solved"],
                this.exercisesAttempted = lastVisit["Attempts"],
                this.timeLimit = lastVisit["Time Limit"],
                this.difficulty = lastVisit["Difficulty"],
                this.language = lastVisit["Language"]
            } else {
                this.isTimeGateLifted = (
                      Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24)) 
                    - Math.floor(new Date(lastVisit["Date"]).getTime() / (1000 * 60 * 60 * 24)) 
                    > 0 ? true : false
                );
            }
            return this.isTimeGateLifted && lastVisit["Attempts"] === 5 ? this.recordTodaysSession() : null;
        },
        updateDatabases() {
            this.updateTodaysSession();
            this.updateAirTableRecord();
        },
        manageVisitorRecords() {
            if (this.visitorHasCookie()) {
                this.isRepeatCustomer = true;
                let record = JSON.parse(localStorage.getItem('fixafunction'));
                this.airTableId = record.id;
                this.priorSessions = record.sessions;
                this.updateTimeGate(record.sessions);
            } else {
                this.createRecordInAirTable();
            }    
        },
        createVisitorCookie(id) {
            this.airTableId = id;
            localStorage.setItem('fixafunction', JSON.stringify({
                "id": id,
                "sessions": [
                    {
                        "Date": new Date().toISOString(),
                        "Score": this.score,
                        "Lives": this.livesRemaining,
                        "Solved": this.exercisesSolved,
                        "Attempts": this.exercisesAttempted,
                        "Timer": this.timer,
                        "Time Limit": this.timeLimit,
                        "Difficulty": this.difficulty,
                        "Language": this.language,
                    }
                ]
            }))
        },
        visitorHasCookie() {
            let record = JSON.parse(localStorage.getItem('fixafunction'));
            return record ? true : false;
        },
        recordTodaysSession() {
            let record = JSON.parse(localStorage.getItem('fixafunction'));
            record.sessions.push({
                "Date": new Date().toISOString(),
                "Score": this.score,
                "Lives": this.livesRemaining,
                "Solved": this.exercisesSolved,
                "Attempts": this.exercisesAttempted,
                "Timer": this.timer,
                "Time Limit": this.timeLimit,
                "Difficulty": this.difficulty,
                "Language": this.language,
            })
            localStorage.setItem('fixafunction', JSON.stringify(record));
        },
        updateTodaysSession() {
            let record = JSON.parse(localStorage.getItem('fixafunction'));
            record.sessions[record.sessions.length - 1] = {
                "Date": new Date().toISOString(),
                "Score": this.score,
                "Lives": this.livesRemaining,
                "Solved": this.exercisesSolved,
                "Attempts": this.exercisesAttempted,
                "Timer": this.timer,
                "Time Limit": this.timeLimit,
                "Difficulty": this.difficulty,
                "Language": this.language,
            };
            localStorage.setItem('fixafunction', JSON.stringify(record));
        },
        updateChallengeFn() {
            document.getElementById('fn').textContent = this.filteredExercises[this.counter].fn;
        },
        getHint() {
            this.needsHint = true; 
            this.nextHint += 1;
            this.updateChallengeFn();
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
            this.isAwaitingAnotherTry = true;
            this.needsHint = true;
            this.nextHint += 1;
            this.subtractFromLives(1);
            this.updateChallengeFn();
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
            this.isAwaitingAnotherTry = false;
            if (!this.hasAttemptedToSolve) {
                this.hasAttemptedToSolve = true;
            }
        },
        prepareNextExercise() {
            this.isSolved = false;
            this.isWrongAnswer = false;
            this.didGiveUp ? this.didGiveUp = false : this.exercisesAttempted += 1;
            this.needsHint = false;
            this.isAwaitingAnotherTry = false;
            this.nextHint = 0;
            this.removePreviousExercise();
            this.counter = this.getIndexOfRandomExercise();
            this.updateChallengeFn();
            if (this.timer === "On") {
                this.resetTimer()
            }
            this.updateDatabases();
            this.hasAttemptedToSolve = false;
            this.priorSessions = JSON.parse(localStorage.getItem('fixafunction')).sessions;
        },
        giveUp() {
            this.didGiveUp = true;
            this.needsHint = false;
            this.exercisesAttempted += 1;
            this.subtractFromLives(3);
        },
        timeIsUp() {
            clearInterval(this.timerId);
            this.giveUp();
        },
        resetTimer() {
            this.timeRemaining = this.timeLimit;
            this.timerId = setInterval(this.decrementTimer, 1000);
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
        createRecordInAirTable() {
            fetch('https://api.airtable.com/v0/appwFsMeOIf3lyiIw/Fix%20A%20Function', {
                method: "POST",
                headers: { 
                    Authorization: "Bearer "+ 'keyP1MqDtZjN0eBc8',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "fields": {
                        "Days": 1,
                        "Date": new Date().toISOString(),
                        "Score": this.score,
                        "Lives": this.livesRemaining,
                        "Solved": this.exercisesSolved,
                        "Attempts": this.exercisesAttempted,
                        "Timer": this.timer,
                        "Time Limit": this.timeLimit,
                        "Difficulty": this.difficulty,
                        "Language": this.language
                }
                })
            })
            .then(response => response.json())
            .then(data => {
                this.createVisitorCookie(data.id);
            })
            .catch(err => console.error(err))
        },
        recordEmailAfterGameOver() {
            this.submitLabel = "Sending...";
            this.isRecordingSubmission = true;
            fetch(`https://api.airtable.com/v0/appwFsMeOIf3lyiIw/Fix%20A%20Function/${this.airTableId}`, {
                method: "PATCH",
                headers: { 
                    Authorization: "Bearer "+ 'keyP1MqDtZjN0eBc8',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "fields": {
                        "Days": this.priorSessions.length,
                        "Email": this.email,
                        "Score": this.accumulatedScore,
                        "Lives": this.livesRemaining,
                        "Solved": this.exercisesSolved,
                        "Attempts": this.exercisesAttempted,
                        "Timer": this.timer,
                        "Time Limit": this.timeLimit,
                        "Difficulty": this.difficulty,
                        "Language": this.language
                    }
                })
            })
            .then(response => response.json())
            .then(data => {
                this.submitLabel = "Success!"
            })
            .catch(err => console.error(err))        
        },
        updateAirTableRecord() {
            fetch(`https://api.airtable.com/v0/appwFsMeOIf3lyiIw/Fix%20A%20Function/${this.airTableId}`, {
                method: "PATCH",
                headers: { 
                    Authorization: "Bearer "+ 'keyP1MqDtZjN0eBc8',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "fields": {
                        "Days": this.priorSessions.length,
                        "Score": this.accumulatedScore,
                        "Lives": this.livesRemaining,
                        "Solved": this.exercisesSolved,
                        "Attempts": this.exercisesAttempted,
                        "Timer": this.timer,
                        "Time Limit": this.timeLimit,
                        "Difficulty": this.difficulty,
                        "Language": this.language
                    }
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log("AirTable updated!");
            })
            .catch(err => console.error(err))                
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
        },
        livesRemaining(newVal, oldVal) {
            this.updateTodaysSession();
        },
        exercisesSolved(newVal, oldVal) {
            this.updateTodaysSession();
        }
    }
})