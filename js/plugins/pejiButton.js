//=============================================================================
// TMPlugin - 戻るボタン
// バージョン: 1.0.0
// 最終更新日: 2016/10/28
// 配布元    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc メニューシーンにタップ操作用の戻るボタンを表示します。
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param buttonImage
 * @desc ボタンとして表示する画像。
 * 初期値: pejiButton
 * @default pejiButton
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param sceneMenuX
 * @desc Scene_Menuの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneMenuY
 * @desc Scene_Menuの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneItemX
 * @desc Scene_Itemの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneItemY
 * @desc Scene_Itemの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneSkillX
 * @desc Scene_Skillの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneSkillY
 * @desc Scene_Skillの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneEquipX
 * @desc Scene_Equipの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneEquipY
 * @desc Scene_Equipの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneStatusX
 * @desc Scene_Statusの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneStatusY
 * @desc Scene_Statusの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneOptionsX
 * @desc Scene_Optionsの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneOptionsY
 * @desc Scene_Optionsの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneSaveX
 * @desc Scene_Saveの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneSaveY
 * @desc Scene_Saveの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneLoadX
 * @desc Scene_Loadの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneLoadY
 * @desc Scene_Loadの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneGameEndX
 * @desc Scene_GameEndの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneGameEndY
 * @desc Scene_GameEndの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneShopX
 * @desc Scene_Shopの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneShopY
 * @desc Scene_Shopの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneNameX
 * @desc Scene_Nameの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneNameY
 * @desc Scene_Nameの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneJobChangeX
 * @desc Scene_JobChangeの戻るボタンＸ座標。
 * 初期値: 0
 * @default 0
 *
 * @param sceneJobChangeY
 * @desc Scene_JobChangeの戻るボタンＹ座標。
 * 初期値: 0
 * @default 0
 *
 * @help
 * 準備:
 *
 *   プラグインと一緒に配布しているボタン画像を img/system フォルダに
 *   保存してください。ファイル名は pejiButton.png となっています。
 *   オリジナルのボタン画像を使用する場合は上記ファイル名と同名のものを
 *   用意するか、プラグインパラメータ buttonImage を変更してください。
 *
 *
 * 使い方:
 *
 *   ボタン画像を img/system フォルダ内に置いた状態で、このプラグインを
 *   導入すれば、自動的に戻るボタンが表示されるようになります。
 *
 *   プラグインパラメータでボタンの表示位置をシーンごとに調節できますので
 *   お好みで変更してください。
 *
 *   ボタン画像の透過部分（アルファ値が 0 ）はタップに反応しません。
 *
 *   プラグインコマンドはありません。
 *
 *   このプラグインは RPGツクールMV Version 1.3.3 で動作確認をしています。
 */

var Imported = Imported || {};
Imported.TMpejiButton = true;

var TMPlugin = TMPlugin || {};
TMPlugin.pejiButton = {};
TMPlugin.pejiButton.Parameters = PluginManager.parameters('TMpejiButton');
TMPlugin.pejiButton.ButtonImage = TMPlugin.pejiButton.Parameters['buttonImage'] || 'pejiButton';
TMPlugin.pejiButton.SceneMenuX = +(TMPlugin.pejiButton.Parameters['sceneMenuX'] || 0);
TMPlugin.pejiButton.SceneMenuY = +(TMPlugin.pejiButton.Parameters['sceneMenuY'] || 0);
TMPlugin.pejiButton.SceneItemX = +(TMPlugin.pejiButton.Parameters['sceneItemX'] || 0);
TMPlugin.pejiButton.SceneItemY = +(TMPlugin.pejiButton.Parameters['sceneItemY'] || 0);
TMPlugin.pejiButton.SceneSkillX = +(TMPlugin.pejiButton.Parameters['sceneSkillX'] || 0);
TMPlugin.pejiButton.SceneSkillY = +(TMPlugin.pejiButton.Parameters['sceneSkillY'] || 0);
TMPlugin.pejiButton.SceneEquipX = +(TMPlugin.pejiButton.Parameters['sceneEquipX'] || 0);
TMPlugin.pejiButton.SceneEquipY = +(TMPlugin.pejiButton.Parameters['sceneEquipY'] || 0);
TMPlugin.pejiButton.SceneStatusX = +(TMPlugin.pejiButton.Parameters['sceneStatusX'] || 470);
TMPlugin.pejiButton.SceneStatusY = +(TMPlugin.pejiButton.Parameters['sceneStatusY'] || 10);
TMPlugin.pejiButton.SceneOptionsX = +(TMPlugin.pejiButton.Parameters['sceneOptionsX'] || 900);
TMPlugin.pejiButton.SceneOptionsY = +(TMPlugin.pejiButton.Parameters['sceneOptionsY'] || 900);
TMPlugin.pejiButton.SceneSaveX = +(TMPlugin.pejiButton.Parameters['sceneSaveX'] || 900);
TMPlugin.pejiButton.SceneSaveY = +(TMPlugin.pejiButton.Parameters['sceneSaveY'] || 900);
TMPlugin.pejiButton.SceneLoadX = +(TMPlugin.pejiButton.Parameters['sceneLoadX'] || 900);
TMPlugin.pejiButton.SceneLoadY = +(TMPlugin.pejiButton.Parameters['sceneLoadY'] || 900);
TMPlugin.pejiButton.SceneGameEndX = +(TMPlugin.pejiButton.Parameters['sceneGameEndX'] || 0);
TMPlugin.pejiButton.SceneGameEndY = +(TMPlugin.pejiButton.Parameters['sceneGameEndY'] || 0);
TMPlugin.pejiButton.SceneShopX = +(TMPlugin.pejiButton.Parameters['sceneShopX'] || 0);
TMPlugin.pejiButton.SceneShopY = +(TMPlugin.pejiButton.Parameters['sceneShopY'] || 0);
TMPlugin.pejiButton.SceneNameX = +(TMPlugin.pejiButton.Parameters['sceneNameX'] || 0);
TMPlugin.pejiButton.SceneNameY = +(TMPlugin.pejiButton.Parameters['sceneNameY'] || 0);
TMPlugin.pejiButton.SceneJobChangeX +(TMPlugin.pejiButton.Parameters['sceneJobChangeX'] || 0);
TMPlugin.pejiButton.SceneJobChangeY +(TMPlugin.pejiButton.Parameters['sceneJobChangeY'] || 0);


(function() {

  //-----------------------------------------------------------------------------
  // Window_Selectable
  //

  var _Window_Selectable_processTouch = Window_Selectable.prototype.processTouch;
  Window_Selectable.prototype.processTouch = function() {
    if (this.isOpenAndActive() && TouchInput.isTriggered()) {
      var pejiButton = SceneManager._scene._pejiButtonSprite;
      if (this.isCancelEnabled() && pejiButton && pejiButton.width) {
        var x = pejiButton.x;
        var y = pejiButton.y;
        if (TouchInput.x >= x && TouchInput.x < x + pejiButton.width &&
            TouchInput.y >= y && TouchInput.y < y + pejiButton.height &&
            +pejiButton.bitmap.getAlphaPixel(TouchInput.x - x, TouchInput.y - y) > 0) {
          this.processPageup();
          return;
        }
      }
    }
    _Window_Selectable_processTouch.call(this);
  };

  //-----------------------------------------------------------------------------
  // Scene_MenuBase
  //

  var _Scene_MenuBase_create = Scene_MenuBase.prototype.create;
  Scene_MenuBase.prototype.create = function() {
    _Scene_MenuBase_create.call(this);
    this.createpejiButton();
  };

  Scene_MenuBase.prototype.createpejiButton = function() {
    this._pejiButtonSprite = new Sprite();
    this._pejiButtonSprite.bitmap = ImageManager.loadSystem(TMPlugin.pejiButton.ButtonImage);
    this._pejiButtonSprite.x = this.pejiButtonX();
    this._pejiButtonSprite.y = this.pejiButtonY();
    this.addChild(this._pejiButtonSprite);
  };

  Scene_MenuBase.prototype.pejiButtonX = function() {
    return 0;
  };

  Scene_MenuBase.prototype.pejiButtonY = function() {
    return 0;
  };

  //-----------------------------------------------------------------------------
  // Scene_Menu
  //

  Scene_Menu.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneMenuX;
  };

  Scene_Menu.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneMenuY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Item
  //

  Scene_Item.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneItemX;
  };

  Scene_Item.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneItemY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Skill
  //

  Scene_Skill.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneSkillX;
  };

  Scene_Skill.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneSkillY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Equip
  //

  Scene_Equip.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneEquipX;
  };

  Scene_Equip.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneEquipY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Status
  //

  Scene_Status.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneStatusX;
  };

  Scene_Status.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneStatusY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Options
  //
  
    Scene_Options.prototype.pejiButtonX = function() {
      return TMPlugin.pejiButton.SceneOptionsX;
    };
  
    Scene_Options.prototype.pejiButtonY = function() {
      return TMPlugin.pejiButton.SceneOptionsY;
    };

  //-----------------------------------------------------------------------------
  // Scene_Save
  //

  Scene_Save.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneSaveX;
  };

  Scene_Save.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneSaveY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Load
  //

  Scene_Load.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneLoadX;
  };

  Scene_Load.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneLoadY;
  };

  //-----------------------------------------------------------------------------
  // Scene_GameEnd
  //

  Scene_GameEnd.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneGameEndX;
  };

  Scene_GameEnd.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneGameEndY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Shop
  //

  Scene_Shop.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneShopX;
  };

  Scene_Shop.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneShopY;
  };


  //-----------------------------------------------------------------------------
  // Scene_JobChange
  //

  Scene_JobChange.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneJobChangeX;
  };

  Scene_JobChange.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneJobChangeY;
  };

//-----------------------------------------------------------------------------

    //-----------------------------------------------------------------------------
  // Scene_Name
  //

  Scene_Name.prototype.pejiButtonX = function() {
    return TMPlugin.pejiButton.SceneNameX;
  };

  Scene_Name.prototype.pejiButtonY = function() {
    return TMPlugin.pejiButton.SceneNameY;
  };

})();
