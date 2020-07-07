const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    ENTRY:  Symbol("ENTRY"),
    WAIT: Symbol("wait"),
    STEP1: Symbol("STEP1"),
    DOOR: Symbol("DOOR"),
    WAYS: Symbol("ways"),
    PATHS: Symbol("paths"),
    SELECTION: Symbol("selection"),
    HELP: Symbol("help"),
    END: Symbol("End")

});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply =" Once in late night with the worst atmosphere of snow storms your friend and you were out for some work , your car breaks down ,both neither had phone or transport available would u WAIT in car OR ENTER Martino Manor[Haunted House] to save ur life ?";
                this.stateCur = GameState.ENTRY;
                break;
            case GameState.ENTRY:
                if(sInput.toLowerCase().match("wait")){
                    sReply = "Even after an 2 hours you are freezing as heater of your car is not working.Will u still DIE frozen or ENTER the Manor ?"
                    this.stateCur = GameState.DECIDE;
                }else{
                    sReply ="As u step out you hear clear anklet sound passing by in harsh snow storm.Will you WALK in or keep WAITING";
                    this.stateCur = GameState.STEP1;
                }
                break;
             case GameState.DECIDE:
                if(sInput.toLowerCase().match("die")){
                    sReply = "You decided to die frozen !! ....GAME OVER!";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply ="As u step out you hear clear anklet sound passing by in harsh snow storm.Will you WALK in or keep WAITING";
                    this.stateCur = GameState.STEP1;

                }
                break;
            case GameState.STEP1:
                if(sInput.toLowerCase().match("walk")){
                    sReply = "You decided to walk in and reached at door and you hear a child sobbing at the other side . Will u OPEN the door or RUN back to the car with your friend?";
                    this.stateCur = GameState.DOOR;
                }else{
                    sReply = "Even after an 2 hours you are freezing as heater of your car is not working.Will u still DIE or ENTER the Manor ?"
                    this.stateCur = GameState.DECIDE;

                }
                break;
            case GameState.DOOR:
                if(sInput.toLowerCase().match("run")){
                    sReply = "oh no! you ran back and lost...Game over!";
                    this.stateCur = GameState.WELCOMING;

                }else{
                    sReply =  "As u open u got 2 ways CLIMB the staircase or SLIDE down to basement what will u choose?";
                    this.stateCur = GameState.WAYS;
    
                }
                break;
            case GameState.WAYS:
                if(sInput.toLowerCase().match("slide")){
                    sReply = "HURRY! u slide down and entered a new world with all back to normal.... GAME OVER:)";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply ="Seems u decided to climb and now u get 2 doors RED (laughing madly) and BLUE (Cries for help) .Where will u go ?"; 
                    this.stateCur = GameState.PATHS;
                }
                break;
            case GameState.PATHS:
                if(sInput.toLowerCase().match("blue")){
                    sReply ="YEAH! you made right choice cries were just to test you..You won! GAME OVER:)";
                    this.stateCur = GameState.WELCOMING;
                   
                }else{
                    sReply = "you walked towards the red door and you could hear a dangerous tone welcome dear.Will u KNOCK or RUN back";
                    this.stateCur = GameState.SELECTION;
                    
                }
                break;
                case GameState.SELECTION:
                    if(sInput.toLowerCase().match("knock")){
                        sReply ="As u knock the door you saw that your friend disappeared .Will u FIND him or RUN back?";
                    this.stateCur = GameState.HELP;
                   
                }else{
                    sReply ="NO! you made wrong choice.You lost! GAME OVER:)";
                    this.stateCur = GameState.WELCOMING;
                        
                    }
                    break;
                 case GameState.HELP:
                        if(sInput.toLowerCase().match("find")){
                            sReply ="Will u SHOUT out his name a loud or RUN back?";
                        this.stateCur = GameState.END;
                       
                    }else{
                        sReply ="NO! you ran back.. wrong choice.You lost! GAME OVER:)";
                        this.stateCur = GameState.WELCOMING;
                            
                        }
                        break;
             case GameState.END:
                if(sInput.toLowerCase().match("shout")){
                    sReply = "You still knocked at the door and cleared this level ! You Won ..GAME OVER ";
                    this.stateCur = GameState.WELCOMING;
                   
                }else{
                    sReply ="NO! you made wrong choice.You lost! GAME OVER:)";
                    this.stateCur = GameState.WELCOMING;
                }
                
        }
        return([sReply]);
    }
}
