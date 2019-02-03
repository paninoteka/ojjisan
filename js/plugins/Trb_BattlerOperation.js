//=============================================================================
// Trb_BattlerOperation.js
//=============================================================================
//Copyright (c) 2016 Trb
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//
//twitter https://twitter.com/Trb_surasura
/*:
 * @plugindesc バトラーの位置を操作するプラグイン
 * @author Trb
 * @version 1.00 2016/ 9/ 1 初版
 *          1.01 2016/10/18 プラグインコマンドを使用するプラグインと競合する部分を修正
 * 
 * @help 
 * プラグインコマンド、またはスクリプトコマンドによってアクターやエネミーの位置を
 * 移動させることができます。
 * 
 * 詳しい使い方は配布サイトの方に書かれている説明を見て下さい。
 * 
 * 
 * [バトラーの移動]
 * 
 * 移動方式1  指定バトラーの現在地の座標を基準にして移動
 * プラグインコマンド
 *  ActorMove index x y frame
 *  EnemyMove index x y frame
 * スクリプトコマンド
 *  $gameParty.move(index, x, y, frame)
 *  $gameTroop.move(index, x, y, frame)
 * 
 * 移動方式2　画面座標を基準にして移動
 * プラグインコマンド
 *  ActorSet index x y frame
 *  EnemySet index x y frame
 * スクリプトコマンド
 *  $gameParty.set(index, x, y, frame)
 *  $gameTroop.set(index, x, y, frame)
 * 
 * 
 * [バトラー移動時の向き固定変更]
 * 
 * プラグインコマンド
 *  ActorDirectionFix index value
 *  EnemyDirectionFix index value
 * スクリプトコマンド
 *  $gameParty.directionFix(index, value)
 *  $gameTroop.directionFix(index, value)
 * 
 * 
 *  [バトラーの位置情報の取得]
 * 
 *  $gameParty.getX(index)
 *  $gamePerty.getY(index)
 *  $gameTroop.getX(index)
 *  $gameTroop.getY(index)
 * 
 * 
 * [スキルのダメージ計算式に使えるスクリプト]
 * 
 *  range(a,b)
 * 
 * 
 * @param 向き固定
 * @desc 後ろ方向に移動する時、後ろを向かせるかどうか
 * true・・・固定(前を向いたまま後ろに移動) false・・・向きを変える
 * @default true
 * 
 * @param 歩きモーション
 * @desc アクターの移動中、専用の歩きモーションを使うか
 * true・・・使う false・・・使わない
 * @default false
 * 
 */
(function () {

//独自改変用メソッド1（戦闘中、常に実行）
Scene_Battle.prototype.updateOriginalBattleProcess1 = function() {
if($gameParty.battleMembers().length == 8){
$gameParty.set(1, 415, 295, 1)
$gameParty.set(2, 425, 385, 1)
$gameParty.set(3, 440, 475, 1)
$gameParty.set(4, 465, 565, 1)
$gameParty.set(5, 515, 295, 1)
$gameParty.set(6, 525, 385, 1)
$gameParty.set(7, 540, 475, 1)
$gameParty.set(8, 565, 565, 1)
}
if($gameParty.battleMembers().length == 7){
$gameParty.set(1, 450, 295, 1)
$gameParty.set(2, 415, 385, 1)
$gameParty.set(3, 415, 475, 1)
$gameParty.set(4, 450, 565, 1)
$gameParty.set(5, 540, 330, 1)
$gameParty.set(6, 540, 430, 1)
$gameParty.set(7, 540, 530, 1)
}
if($gameParty.battleMembers().length == 6){
$gameParty.set(1, 430, 295, 1)
$gameParty.set(2, 525, 350, 1)
$gameParty.set(3, 435, 405, 1)
$gameParty.set(4, 530, 460, 1)
$gameParty.set(5, 440, 515, 1)
$gameParty.set(6, 535, 570, 1)
}
if($gameParty.battleMembers().length == 5){
$gameParty.set(1, 526, 330, 1)
$gameParty.set(2, 444, 380, 1)
$gameParty.set(3, 530, 430, 1)
$gameParty.set(4, 445, 480, 1)
$gameParty.set(5, 535, 530, 1)
}
if($gameParty.battleMembers().length == 4){
$gameParty.set(1, 516, 295, 1)
$gameParty.set(2, 447, 385, 1)
$gameParty.set(3, 526, 475, 1)
$gameParty.set(4, 465, 565, 1)
}
if($gameParty.battleMembers().length == 3){
$gameParty.set(1, 513, 330, 1)
$gameParty.set(2, 443, 430, 1)
$gameParty.set(3, 514, 530, 1)
}
if($gameParty.battleMembers().length == 2){
$gameParty.set(1, 470, 380, 1)
$gameParty.set(2, 470, 480, 1)
}
if($gameParty.battleMembers().length == 1){
$gameParty.set(1, 457, 430, 1)
}
};

//独自改変用メソッド2（戦闘中、ウインドウが開いてる時と戦闘終了時以外 常に実行）
Scene_Battle.prototype.updateOriginalBattleProcess2 = function() {

};
//--------------------------------------------------------------------------

//--------------------------------------------------------------------------
//プラグインコマンド
var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    var command_T = command.toUpperCase();//コマンドの大文字と小文字の区別を無くす処理
    switch(command_T){
        case 'ACTORMOVE':
        case 'ENEMYMOVE':
        case 'ACTORSET':
        case 'ENEMYSET':
        case 'ACTORDIRECTIONFIX':
        case 'ENEMYDIRECTIONFIX':
            var args_T = [];
            for(var i = 0; i < args.length; i++){
                args_T[i] = eval(args[i]);//コマンドの引数にスクリプトを入れた時、数値に変換する処理
            }
            if(command_T == 'ACTORMOVE'){
                $gameParty.move(args_T[0],args_T[1],args_T[2],args_T[3]);
            }else if(command_T == 'ENEMYMOVE'){
                $gameTroop.move(args_T[0],args_T[1],args_T[2],args_T[3]);
            }else if(command_T == 'ACTORSET'){
                $gameParty.set(args_T[0],args_T[1],args_T[2],args_T[3]);
            }else if(command_T == 'ENEMYSET'){
                $gameTroop.set(args_T[0],args_T[1],args_T[2],args_T[3]);
            }else if(command_T == 'ACTORDIRECTIONFIX'){
                $gameParty.directionFix(args_T[0],args_T[1]);
            }else if(command_T == 'ENEMYDIRECTIONFIX'){
                $gameTroop.directionFix(args_T[0],args_T[1]);
            }
            break;
        default:
            break;
    }
};

//パラメータの読み込み
var parameters = PluginManager.parameters('Trb_BattlerOperation');
var directionFix = parameters['向き固定'] == 'true' ? true : false;
var walkMotion = parameters['歩きモーション'] == 'true' ? true : false;
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
//独自改変用のメソッドを呼び出す処理を追加
var _Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
    _Scene_Battle_update.apply(this,arguments);
    if(this.isActive()){
        this.updateOriginalBattleProcess1();
        if (!this.isBusy() && (!this.isAnyInputWindowActive() || BattleManager.isAborting() ||
                BattleManager.isBattleEnd())) {
            this.updateOriginalBattleProcess2();
        }
    }
};
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
//移動命令用の各メソッドを定義

//バトラーを相対座標で移動させる（指定バトラーの現在地を基準に移動）
Game_Unit.prototype.move = function(index,x,y,frame) {
    index--;
    if(index >= 0 && index < this.members().length){
        this.members()[index].movePosition(x,y,frame);
    }
};
Game_Battler.prototype.movePosition = function(x,y,frame) {
    var sprite = this.getBattlerSprite();
    sprite._movementDuration2 = Math.max(frame,1);//移動にかける時間(フレーム数)
    sprite._targetHomeX = sprite._homeX + x;//移動先の座標
    sprite._targetHomeY = sprite._homeY + y;
};

//バトラーを絶対座標で移動させる（画面の左上を基準に移動）
Game_Unit.prototype.set = function(index,x,y,frame) {
    index--;
    if(index >= 0 && index < this.members().length){
        this.members()[index].setPosition(x,y,frame);
    }
};
Game_Battler.prototype.setPosition = function(x,y,frame) {
    var sprite = this.getBattlerSprite();
    sprite._movementDuration2 = Math.max(frame,1);
    sprite._targetHomeX = x;
    sprite._targetHomeY = y;
};

//バトラーの向き固定のオンオフ
Game_Unit.prototype.directionFix = function(index,value) {
    index--;
    if(index >= 0 && index < this.members().length){
        this.members()[index].setDirectionFix(value);
    }
};
Game_Battler.prototype.setDirectionFix = function(value) {
    var sprite = this.getBattlerSprite();
    sprite._directionFix = value;
};


//バトラーのX座標を取得
Game_Unit.prototype.getX = function(index) {
    index--;
    if(index >= 0 && index < this.members().length){
        return this.members()[index].getX();
    }
};
Game_Battler.prototype.getX = function() {
    return this.getBattlerSprite()._homeX;
};

//バトラーのY座標を取得
Game_Unit.prototype.getY = function(index) {
    index--;
    if(index >= 0 && index < this.members().length){
        return this.members()[index].getY();
    }
};
Game_Battler.prototype.getY = function() {
    return this.getBattlerSprite()._homeY;
};


Game_Battler.prototype.getBattlerSprite = function() {
    if (this.isActor()) var id = 100000 + this.actorId();
    if (this.isEnemy()) var id = 200000 + this.index();
    return BattleManager._registeredSprites[id];
};

//---------------------------------------------------------------------------

//---------------------------------------------------------------------------

//z,directionFix の値を追加
var _Sprite_Battler_initMembers = Sprite_Battler.prototype.initMembers;
Sprite_Battler.prototype.initMembers = function() {
    _Sprite_Battler_initMembers.apply(this,arguments);
    this.z = 1;
    this._directionFix = directionFix;
};

//バトラーのホーム座標、向きの操作をする処理を追加
var _Sprite_Battler_updateMain = Sprite_Battler.prototype.updateMain;
Sprite_Battler.prototype.updateMain = function() {
    if(!this._directionFix){
        this.updateDirection();
    }
    this.updateHomeMove();
    _Sprite_Battler_updateMain.apply(this,arguments);
};

Sprite_Battler.prototype.updateDirection = function(){
    if(this._movementDuration2 > 0){
        var c = this._battler.isActor() ? 1 : -1;
        if ( this._homeX * c < this._targetHomeX * c) {
            this.scale.x = Math.abs(this.scale.x) * -1;
        }else{
            this.scale.x = Math.abs(this.scale.x);
        }
    }else if(this.scale.x < 0){
        this.scale.x *= -1;
    }
};

Sprite_Battler.prototype.updateHomeMove = function(){
    if (this._movementDuration2 > -1) {
        if(this._movementDuration2 > 0){
            var d = this._movementDuration2;
            this._homeX = (this._homeX * (d - 1) + this._targetHomeX) / d;
            this._homeY = (this._homeY * (d - 1) + this._targetHomeY) / d;
        }
        this._movementDuration2--;
        if(this._actor && walkMotion){
            this.startMotion('walk_T');
        }
        if (this._movementDuration2 === -1) {
            this.onMoveEnd();
        }
    }
};

//専用の歩きモーションを用意
//(他のモーション拡張系プラグインと競合する可能性大)
if(walkMotion){
    Sprite_Actor.MOTIONS.walk_T = {index: 18, loop: true};

    Sprite_Actor.prototype.updateFrame = function() {
        Sprite_Battler.prototype.updateFrame.call(this);
        var bitmap = this._mainSprite.bitmap;
        if (bitmap) {
            var motionIndex = this._motion ? this._motion.index : 0;
            var pattern = this._pattern < 3 ? this._pattern : 1;
            var cw = bitmap.width / 12;
            var ch = bitmap.height / 6;
            var cx = Math.floor(motionIndex / 6) * 3 + pattern;
            var cy = motionIndex % 6;
            this._mainSprite.setFrame(cx * cw, cy * ch, cw, ch);
        }
    };
};

//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
//その他

//スキルのダメージ計算式に使える関数
//スキルの使用者とターゲットの距離を求める
range = function(a,b) {
    return Math.sqrt(Math.pow((a.getX() - b.getX()),2) + Math.pow((a.getY() - b.getY()),2));
}
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
//YEP_BattleEngineCoreが使われているかどうかの判定
var useBEC = false;
$plugins.forEach(function(plugin){
    if(plugin.name == 'YEP_BattleEngineCore' && plugin.status == true){
        useBEC = true;
        return;
    }
});
//以下のメソッドはYEP_BattleEngineCoreを使用していない時のみ読み込む
//(処理が被っていたり競合する部分があるため)
if(useBEC == false){
    var _Sprite_Damage_setup = Sprite_Damage.prototype.setup;
    Sprite_Damage.prototype.setup = function(target) {
        _Sprite_Damage_setup.apply(this,arguments);
        this.z = 9;
    };

    var _Spriteset_Battle_update = Spriteset_Battle.prototype.update;
    Spriteset_Battle.prototype.update = function() {
        _Spriteset_Battle_update.apply(this,arguments);
        this.sortBattleField();
    };

    Spriteset_Battle.prototype.sortBattleField = function() {
        this._battleField.children.sort(function(a,b){
            if((a.z && b.z) && a.z !== b.z){
                return a.z - b.z;
            }else if (a.y !== b.y) {
                return a.y - b.y;
            }
        },this);
    };

    var _Sprite_Battler_setBattler = Sprite_Battler.prototype.setBattler;
    Sprite_Battler.prototype.setBattler = function(battler) {
        _Sprite_Battler_setBattler.apply(this,arguments);
        if(battler)battler.setBattler(this);
    };

    Game_Battler.prototype.setBattler = function(sprite) {
        BattleManager.registerSprite(this, sprite);
    };

    BattleManager.registerSprite = function(battler, sprite) {
        if (!this._registeredSprites) this._registeredSprites = {};
        if (battler.isActor()) var id = 100000 + battler.actorId();
        if (battler.isEnemy()) var id = 200000 + battler.index();
        this._registeredSprites[id] = sprite;
    };

};
//---------------------------------------------------------------------------

})();