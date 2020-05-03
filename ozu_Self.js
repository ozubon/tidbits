//=============================================================================
//  ozu_Self.js 1.0
//=============================================================================

/*:
 * @author ozubon
 * @plugindesc Feather-weight plugin for using event variables.
 * @help
 * ===========================================================================
 * Self-variables
 * ===========================================================================
 * A self-variable looks like this:
 * 
 *       self(this)[Variable id]
 * 
 * Now that you know that, all you have to do is come up with a variable id
 * and set it to something!
 * 
 * Let's say you want to set self-variable 1 to 9001
 * Put this in a script call:
 * 
 *       self(this)[1] = 9001
 * 
 * Bonus:
 * You can have variable id's with names instead of numbers, but they gotta
 * be in quotation!
 * 
 *      self(this)["garlic cloves"] = 10
 *
 * ===========================================================================
 * Conditional branch
 * ===========================================================================
 * This uses standard javascript operators, but don't panic, it's easy!
 * 
 * To check if self-variable 1 is indeed 9001, put this into the conditional
 * branch script box:
 * 
 *      self(this)[1] == 9001
 * 
 * Don't use one lonely equal sign, one means set; two means compare!
 * 
 * Here's some other operators:
 * 
 *      Greater than: >                    Less than: <
 *      Greater than or equal to: >=       Less than or equal to: <=
 *      Not equal to: !=                   Equal and equal type: ===
 *      
 * This will return true beause garlic cloves is more than 9:
 * 
 *      self(this)["garlic cloves"] > 9
 *
 * ===========================================================================
 * Math
 * ===========================================================================
 * These are the assignment operators:
 * 
 *      Set: =                             Mod: %=
 *      Add: +=                            Subtract: -=
 *      Multiply: *=                       Divide: /=
 *     
 * So, to add 3 to garlic cloves you do this:
 * 
 *      self(this)["garlic cloves"] += 3
 * 
 * Given that garlic cloves was 10, it is now 13!
 * 
 * Bonus: MV's own modulo always return positive, if you want ot use it 
 * it's a little extra finger work (or whatever you type with):
 * 
 *      self(this)["garlic cloves"] = self(this)["garlic cloves"].mod(5) 
 * 
 * ===========================================================================
 * Other events' variables
 * ===========================================================================
 * To access other events' variables all you have to do is replace "this" with
 * the id of the event. Let's say you want to set event 2's variable 3 to 4:
 * 
 *      self(2)[3] = 4
 * 
 * Or check in a conditional branch if it is 4:
 * 
 *      self(2)[3] == 4
 * 
 * ===========================================================================
 * Events on other maps
 * ===========================================================================
 * You can also access variables on events on other maps, to do that you
 * specify the map id after the event id:
 * 
 *      self(Event id, Map id)[Variable id]
 * 
 * Let's say you want to set event 8 on map 7's potato variable to 6:
 * 
 *      self(8, 7)["potato"] = 6
 * 
 * Or check in a conditional branch if it is 6:
 * 
 *      self(8, 7)["potato"] == 6
 * 
 * ===========================================================================
 * Setting game variables to event variables
 * ===========================================================================
 * Simply, set a game variable using Control Variables with script operand:
 * 
 *      self(this)[Variable id]
 * 
 * Some examples:
 *
 *      self(this)[40]
 *      self(3)["pebbles"]
 *      self(1, 2)["quarks"] 
 * 
 * ===========================================================================
 * Terms of use
 * ===========================================================================
 * You don't have to credit me but I'd appreciate it!
 * For commercial use, you gotta credit me!
 * 
 */

self = function(id) {
    var GVAR = $gameVariables;
    var MID = (typeof arguments[1] === "number") ? arguments[1] : $gameMap.mapId();
    var EID = (typeof id === "object") ? id.eventId() : Number(id);
    if (isNaN(EID)) {
        console.error('ozu_Self: "' + id + '"' + " is not a valid event id!")
        return void(0)
    } else {
        GVAR.self === undefined && (GVAR.self = {})
        GVAR.self[MID] === undefined && (GVAR.self[MID] = {})
        GVAR.self[MID][EID] === undefined && (GVAR.self[MID][EID] = {})
        return GVAR.self[MID][EID]
    }
}
