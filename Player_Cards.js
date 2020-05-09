//============================================================================
//  Player_Cards.js 1.0
//============================================================================

/*:
 * @author ozubon
 * @plugindesc Displays a row of pictures corresponding to the matched skills.
 * @help
 * ===========================================================================
 * Setup
 * ===========================================================================
 * Name your card pictures the same thing ending with a number of the skill.
 * For example:
 * 
 * coolcard4.png    coolcard5.png   coolcard13.png
 * 
 * That would be cards for skill 4, 5 and 13.
 * 
 * For script calls:
 * playerCards(Actor id, [Skill id, Skill id], Margin, Priority, x, y, "name")
 * 
 * Actor id is. Well. The actor's id. 0 for the current actor.
 * Use "hide" for actor id to hide the cards from the same pool and priority.
 * 
 * Skill id is the id of a skill that's card compatible, you can add an
 * indefinite number of skills to the pool array. For example [4, 5, 13, 20]
 * 
 * Margin is the space between the displayed cards left side in pixels.
 * 
 * Priority is "number" in Show Pictures. Pick something low, preferably 1.
 * It will go up with the number of cards matched. If it starts at 1, then if
 * the player has 8 matched cards the range will go up to 8 and override any
 * showed pictures in that range.
 * 
 * x and y is simply the card row's x and y axes. Fiddle until perfect.
 * 
 * "name" is the card pictures' names before the skill numbers. In quotation!
 * For example "coolcard"
 * 
 * 
 * Examples:
 * playerCards(0, [9, 12, 13, 14, 15], 60, 2, 20, 600, "coolcard")
 * playerCards(2, [1, 2, 4, 5, 6, 7, 8], 100, 1, 20, 10, "deck")
 * playerCards("hide", [1, 2, 4, 5, 6, 7, 8], 100, 1, 20, 10, "deck")
 * 
 */

function playerCards(actorId, pool, margin, ppn, x, y, name) {
    
    var playerCards = []

    actorId = (actorId === 0) ? $gamePlayer.actor().actorId() : actorId

    for (var i = ppn; i < ppn + pool.length; ++i) {
        $gameScreen.erasePicture(i)
    }

    if (actorId != "hide") {
        for (i = 0; i < pool.length; i++) {
            if ($gameActors.actor(actorId).isLearnedSkill(pool[i])) {
                playerCards.push(pool[i])
            }
        }
        for (i = 0; i < playerCards.length; i++) {
            $gameScreen.showPicture(ppn + i, name + playerCards[i], 0, x + (margin * i), y, 100, 100, 255, 0)
        }
    }
}
