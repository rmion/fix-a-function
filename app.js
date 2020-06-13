let app = new Vue({
    el: "#app",
    data: {
        gameTypes: {
            'js': 'function',
            'html': 'tag',
            'css': 'style',
        },
        exercises: listOfExercises,
        airTableId: null,
        isRepeatCustomer: false,
        hasSubscribed: false,
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
        timeElapsed: 0,
        stopwatchId: null,
        timeLimit: 30,
        timeRemaining: 0,
        timerId: null,
        timer: 'Off',
        difficulty: 'easy',
        language: 'js',
        email: '',
        submitLabel: 'Get daily reminders!',
    },
    computed: {
        filteredExercises() {
            if (this.difficulty === 'any' && this.language === 'any') {
                return this.exercises;
            } else if (this.difficulty === 'any' && this.language !== 'any') {
                return this.exercises.filter(exercise => exercise.language == this.language)
            } else if (this.difficulty !== 'any' && this.language === 'any') {
                return this.exercises.filter(exercise => exercise.difficulty == this.difficulty)
            } else {
                return this.exercises.filter(exercise => exercise.difficulty == this.difficulty && exercise.language == this.language);
            }
        },
        accumulatedScore() {
            return this.priorSessions.length ? this.priorSessions.map(i => i["Score"]).reduce((i, acc) => acc + i) : this.score;
        },
        formattedTimeElapsed() {
            let minutes = Math.floor(this.timeElapsed / 60) > 0 ? Math.floor(this.timeElapsed / 60) : "";
            let seconds = this.timeElapsed % 60 > 9 ? this.timeElapsed % 60 : "0" + this.timeElapsed % 60;
            return minutes + ":" + seconds;
        }
    },
    mounted() {
        this.startSessionStopwatch();
        this.manageVisitorRecords();
        this.counter = this.getIndexOfRandomExercise();
        this.updateChallengeFn();
    },
    methods: {
        startSessionStopwatch() {
            this.stopwatchId = setInterval((() => this.timeElapsed += 1), 1000);
        },
        updateTimeGate(list) {
            let lastVisit = list[list.length - 1];
            if (lastVisit["Attempts"] < 5 && lastVisit["Lives"] > 0) {
                this.score = lastVisit["Score"],
                this.livesRemaining = lastVisit["Lives"],
                this.exercisesSolved = lastVisit["Solved"],
                this.exercisesAttempted = lastVisit["Attempts"],
                this.timeLimit = lastVisit["Time Limit"],
                this.difficulty = lastVisit["Difficulty"],
                this.language = lastVisit["Language"],
                this.timeElapsed = lastVisit["Time Elapsed"]
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
                let record = JSON.parse(localStorage.getItem('fixafunction'));
                fetch(`https://api.airtable.com/v0/appwFsMeOIf3lyiIw/Fix%20A%20Function/${record.id}`, {
                    method: "GET",
                    headers: { 
                        Authorization: "Bearer "+ 'keyP1MqDtZjN0eBc8',
                        'Content-Type': 'application/json'
                    }})
                    .then(response => response.json())
                    .then(data => {
                        if (data.hasOwnProperty('error') && data.error.message === "Record not found") {
                            this.createRecordInAirTable();
                        } else {
                            this.isRepeatCustomer = true;
                            this.airTableId = record.id;
                            this.priorSessions = record.sessions;
                            this.updateTimeGate(record.sessions);    
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
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
                        "Time Elapsed": this.timeElapsed
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
                "Time Elapsed": this.timeElapsed
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
                "Time Elapsed": this.timeElapsed
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
            this.updateChallengeFn();
            this.subtractFromLives(1);
            if (this.nextHint == this.filteredExercises[this.counter].hints.length) {
                this.needsHint = false;
                this.didGiveUp = true;
                this.needsHint = false;
                this.exercisesAttempted += 1;
                this.isAwaitingAnotherTry = false;
            } else {
                this.needsHint = true;
                this.nextHint += 1;
                this.isAwaitingAnotherTry = true; 
            }
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
            this.updateDatabases();
        },
        gameOver() {
            clearInterval(this.stopwatchId);
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
            this.gameOver();
        },
        createRecordInAirTable() {
            this.isRecordingSubmission = true;
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
                        "Language": this.language,
                        "Time Elapsed": this.timeElapsed,
                        "Subscribed": "No"
                    }
                })
            })
            .then(response => response.json())
            .then(data => {
                this.createVisitorCookie(data.id);
                this.isRecordingSubmission = false;
            })
            .catch(err => console.error(err))
        },
        recordEmailAfterGameOver() {
            this.submitLabel = "Subscribing...";
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
                        "Language": this.language,
                        "Time Elapsed": this.timeElapsed,
                        "Subscribed": "Yes"
                    }
                })
            })
            .then(response => response.json())
            .then(data => {
                this.submitLabel = "You're all set!"
                this.isRecordingSubmission = false;
            })
            .catch(err => console.error(err))        
        },
        updateAirTableRecord() {
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
                        "Score": this.accumulatedScore,
                        "Lives": this.livesRemaining,
                        "Solved": this.exercisesSolved,
                        "Attempts": this.exercisesAttempted,
                        "Timer": this.timer,
                        "Time Limit": this.timeLimit,
                        "Difficulty": this.difficulty,
                        "Language": this.language,
                        "Time Elapsed": this.timeElapsed
                    }
                })
            })
            .then(response => response.json())
            .then(data => {
                this.isRecordingSubmission = false;
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
            this.counter = this.getIndexOfRandomExercise();
            this.updateChallengeFn()
        },
        language(newVal, oldVal) {
            this.counter = this.getIndexOfRandomExercise();
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