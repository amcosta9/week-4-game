$(document).ready(function() {

    var game = {
        answer: 0,
        userTotal: 0,
        wins: 0,
        losses: 0,
        crystal1: 0,
        crystal2: 0,
        crystal3: 0,
        crystal4: 0,


        startGame: function () {
            // Random number generated for answer (between 19-120)
            this.answer = [Math.floor(Math.random() * (120 - 19 + 1)) + 19];
            this.answer = parseInt(this.answer);
            console.log("Answer: " + this.answer);
            $("#answer-d").html(this.answer);
            // 4 crystal numbers generated and assigned to each image (between 1-12)
            this.crystal1 = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
            console.log("crystal1 increment: " + this.crystal1);
            this.crystal2 = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
            console.log("crystal1 increment: " + this.crystal2);
            this.crystal3 = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
            console.log("crystal1 increment: " + this.crystal3);
            this.crystal4 = [Math.floor(Math.random() * (12 - 1 + 1)) + 1];
            console.log("crystal1 increment: " + this.crystal4);

            this.collectCrystals();
        },

        collectCrystals: function () {
            $("#crystal1-d").click(function (){
                console.log("you clicked the 1st crystal");
                game.userTotal += parseInt(game.crystal1);
                console.log("user total = " + game.userTotal);
                $("#user-total").html(game.userTotal);
                game.compare();
            });
            $("#crystal2-d").click(function (){
                console.log("you clicked the 2nd crystal");
                game.userTotal += parseInt(game.crystal2);
                console.log("user total = " + game.userTotal);
                $("#user-total").html(game.userTotal);
                game.compare();
            });
            $("#crystal3-d").click(function (){
                console.log("you clicked the 3rd crystal");
                game.userTotal += parseInt(game.crystal3);
                console.log("user total = " + game.userTotal);
                $("#user-total").html(game.userTotal);
                game.compare();
            });
            $("#crystal4-d").click(function (){
                console.log("you clicked the 4th crystal");
                game.userTotal += parseInt(game.crystal4);
                console.log("user total = " + game.userTotal);
                $("#user-total").html(game.userTotal);
                game.compare();
            });

        },

        //this.userTotal and this.answer returning undefined ????
        compare: function () {
            if (parseInt(this.userTotal) === parseInt(this.answer)){
                this.wins++;
                $("#wins-d").html(this.wins);
                alert("you win");
                this.reset();
            }
            else if (parseInt(this.userTotal) > parseInt(this.answer)){
                this.losses++;
                $("#losses-d").html(this.losses);
                alert("you lose");
                this.reset();
            }

        },

        reset: function () {
            this.userTotal = 0;
            $("#user-total").html(this.userTotal);
            this.answer = 0;
            $("#answer-d").html(this.answer);
            this.startGame();
        }
    };

    game.startGame();

});