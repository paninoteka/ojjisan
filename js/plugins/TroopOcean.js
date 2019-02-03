//=============================================================================
// TroopOcean.js
//=============================================================================

/*:ja
 * @plugindesc ver1.02 任意の回数敵グループを呼び出します。
 * @author まっつＵＰ
 * 
 * @param addcount
 * @desc このIDの変数が呼び出す回数です。
 * @default 561
 * 
 * @param troop
 * @desc このIDの変数が呼び出す敵グループの
 * 基準になります。（要ヘルプ参照）
 * @default 562
 * 
 * @param addcountsw
 * @desc 0以外の時このIDのスイッチを
 * 呼び出しがあった時にオンにします。
 * @default 32
 *
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * troopのIDの変数の値が
 * 0以上の時、そのIDの敵グループを呼び出します。
 * 0以下の時、全滅した敵グループの次のIDの敵グループを呼び出します。
 * 0の時、全滅した敵グループと同じIDの敵グループを呼び出します。
 * 
 * バトルイベントは一貫して現在の敵グループのものが適用されます。
 * 
 * ・他のプラグインの順列について
 * TMBattleMist.jsよりも下で適応してください。
 * 
 * このプラグインを利用する場合は
 * readmeなどに「まっつＵＰ」の名を入れてください。
 * また、素材のみの販売はダメです。
 * 上記以外の規約等はございません。
 * もちろんツクールMVで使用する前提です。
 * 何か不具合ありましたら気軽にどうぞ。
 * 
 * ver1.01 記述の整理
 * ver1.02 tomoaky様のTMBattleMistとの競合対応
 *  
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

//競合対策
var Imported = Imported || {};
Imported.TroopOcean = true;
var TOisMist = Imported.TMBattleMist;

(function() {

var parameters = PluginManager.parameters('TroopOcean');
var TOaddcount = Number(parameters['addcount'] || 561);
var TOtroop = Number(parameters['troop'] || 562);
var TOaddcountsw = Number(parameters['addcountsw'] || 32);

var _BattleManager_makeRewards = BattleManager.makeRewards;
BattleManager.makeRewards = function() {
    _BattleManager_makeRewards.call(this);
    this._rewards.gold = this._rewards.gold + $gameTroop._addrewardsgold;
    this._rewards.exp = this._rewards.exp + $gameTroop._addrewardsexp;
    this._rewards.items = this._rewards.items.concat($gameTroop._addrewardsitems);
};

var _Game_Enemy_initMembers = Game_Enemy.prototype.initMembers;
Game_Enemy.prototype.initMembers = function() {
    _Game_Enemy_initMembers.call(this);
    this._addappear = 0;
};

Game_Enemy.prototype.TOappear = function() {
    if(!this.isDeathStateAffected()) this._addappear = 1;
};

var _Game_Troop_clear = Game_Troop.prototype.clear;
Game_Troop.prototype.clear = function() {
    if(this._addCount){
        this._interpreter.clear();
        this._troopId = 0;
        this._eventFlags = {};
        this._enemies = [];
        this._namesCount = {};
    }else{
        _Game_Troop_clear.call(this);
        this._addrewardsgold = 0;
        this._addrewardsexp = 0;
        this._addrewardsitems = [];
    }
    this._addCount = 0;
};

//オーバーライド
Game_Troop.prototype.isAllDead = function() {
    if(!Game_Unit.prototype.isAllDead.call(this) || !$gameParty.inBattle()) {
        return false;
    }
    var val = $gameVariables.value(TOaddcount);
    this._addCount = val;
    if(this._addCount > 0){
        this.TOaddreward();
        this.TOaddTroop();
        $gameVariables.setValue(TOaddcount, Math.max(val - 1, 0));
        if(TOaddcountsw) $gameSwitches.setValue(TOaddcountsw, true);
        return false;
    }else{
        this._addCount = 0;
        return true;
    }
};

Game_Troop.prototype.TOaddreward = function() {
    this._addrewardsgold += this.goldTotal();
    this._addrewardsexp += this.expTotal();
    this._addrewardsitems = this._addrewardsitems.concat(this.makeDropItems());
};

Game_Troop.prototype.TOaddTroop = function() {
    var val = $gameVariables.value(TOtroop);
    if(val < 0){
        val = this._troopId + 1;
    }else if(val === 0){
        val = this._troopId;
    }
    this.setup(val);
    this.members()[0].TOappear();
};

var _Spriteset_Battle_update = Spriteset_Battle.prototype.update;
Spriteset_Battle.prototype.update = function() {
    _Spriteset_Battle_update.call(this);
    if($gameTroop.members()[0]._addappear === 1){
        this._battleField.removeChild(this._enemySprites);
        this.createEnemies();
        this._enemySprites.forEach(function(enemy){
             enemy.opacity = 0;
             if(TOisMist) enemy.z = 5;
        }, this);
        $gameTroop.members()[0]._addappear = 2;
    }
    if($gameTroop.members()[0]._addappear === 2){
        this._enemySprites.forEach(function(enemy){
             enemy.opacity += 15;
        }, this);
        if(this._enemySprites[0].opacity >= 255){
            $gameTroop.members()[0]._addappear = 0;
        }
    }
};
 
})();
