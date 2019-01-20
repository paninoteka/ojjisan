//=============================================================================
// TMPlugin - �߂�{�^��
// �o�[�W����: 1.0.0
// �ŏI�X�V��: 2016/10/28
// �z�z��    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc ���j���[�V�[���Ƀ^�b�v����p�̖߂�{�^����\�����܂��B
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param buttonImage
 * @desc �{�^���Ƃ��ĕ\������摜�B
 * �����l: backButton
 * @default backButton
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param sceneMenuX
 * @desc Scene_Menu�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneMenuY
 * @desc Scene_Menu�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneItemX
 * @desc Scene_Item�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneItemY
 * @desc Scene_Item�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneSkillX
 * @desc Scene_Skill�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneSkillY
 * @desc Scene_Skill�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneEquipX
 * @desc Scene_Equip�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneEquipY
 * @desc Scene_Equip�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneStatusX
 * @desc Scene_Status�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneStatusY
 * @desc Scene_Status�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneOptionsX
 * @desc Scene_Options�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneOptionsY
 * @desc Scene_Options�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneSaveX
 * @desc Scene_Save�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneSaveY
 * @desc Scene_Save�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneLoadX
 * @desc Scene_Load�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneLoadY
 * @desc Scene_Load�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneGameEndX
 * @desc Scene_GameEnd�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneGameEndY
 * @desc Scene_GameEnd�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneShopX
 * @desc Scene_Shop�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneShopY
 * @desc Scene_Shop�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneNameX
 * @desc Scene_Name�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneNameY
 * @desc Scene_Name�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneJobChangeX
 * @desc Scene_JobChange�̖߂�{�^���w���W�B
 * �����l: 0
 * @default 0
 *
 * @param sceneJobChangeY
 * @desc Scene_JobChange�̖߂�{�^���x���W�B
 * �����l: 0
 * @default 0
 *
 * @help
 * ����:
 *
 *   �v���O�C���ƈꏏ�ɔz�z���Ă���{�^���摜�� img/system �t�H���_��
 *   �ۑ����Ă��������B�t�@�C������ backButton.png �ƂȂ��Ă��܂��B
 *   �I���W�i���̃{�^���摜���g�p����ꍇ�͏�L�t�@�C�����Ɠ����̂��̂�
 *   �p�ӂ��邩�A�v���O�C���p�����[�^ buttonImage ��ύX���Ă��������B
 *
 *
 * �g����:
 *
 *   �{�^���摜�� img/system �t�H���_���ɒu������ԂŁA���̃v���O�C����
 *   ��������΁A�����I�ɖ߂�{�^�����\�������悤�ɂȂ�܂��B
 *
 *   �v���O�C���p�����[�^�Ń{�^���̕\���ʒu���V�[�����Ƃɒ��߂ł��܂��̂�
 *   ���D�݂ŕύX���Ă��������B
 *
 *   �{�^���摜�̓��ߕ����i�A���t�@�l�� 0 �j�̓^�b�v�ɔ������܂���B
 *
 *   �v���O�C���R�}���h�͂���܂���B
 *
 *   ���̃v���O�C���� RPG�c�N�[��MV Version 1.3.3 �œ���m�F�����Ă��܂��B
 */

var Imported = Imported || {};
Imported.TMBackButton = true;

var TMPlugin = TMPlugin || {};
TMPlugin.BackButton = {};
TMPlugin.BackButton.Parameters = PluginManager.parameters('TMBackButton');
TMPlugin.BackButton.ButtonImage = TMPlugin.BackButton.Parameters['buttonImage'] || 'backButton';
TMPlugin.BackButton.SceneMenuX = +(TMPlugin.BackButton.Parameters['sceneMenuX'] || 0);
TMPlugin.BackButton.SceneMenuY = +(TMPlugin.BackButton.Parameters['sceneMenuY'] || 0);
TMPlugin.BackButton.SceneItemX = +(TMPlugin.BackButton.Parameters['sceneItemX'] || 0);
TMPlugin.BackButton.SceneItemY = +(TMPlugin.BackButton.Parameters['sceneItemY'] || 0);
TMPlugin.BackButton.SceneSkillX = +(TMPlugin.BackButton.Parameters['sceneSkillX'] || 0);
TMPlugin.BackButton.SceneSkillY = +(TMPlugin.BackButton.Parameters['sceneSkillY'] || 0);
TMPlugin.BackButton.SceneEquipX = +(TMPlugin.BackButton.Parameters['sceneEquipX'] || 0);
TMPlugin.BackButton.SceneEquipY = +(TMPlugin.BackButton.Parameters['sceneEquipY'] || 0);
TMPlugin.BackButton.SceneStatusX = +(TMPlugin.BackButton.Parameters['sceneStatusX'] || 0);
TMPlugin.BackButton.SceneStatusY = +(TMPlugin.BackButton.Parameters['sceneStatusY'] || 0);
TMPlugin.BackButton.SceneOptionsX = +(TMPlugin.BackButton.Parameters['sceneOptionsX'] || 0);
TMPlugin.BackButton.SceneOptionsY = +(TMPlugin.BackButton.Parameters['sceneOptionsY'] || 0);
TMPlugin.BackButton.SceneSaveX = +(TMPlugin.BackButton.Parameters['sceneSaveX'] || 0);
TMPlugin.BackButton.SceneSaveY = +(TMPlugin.BackButton.Parameters['sceneSaveY'] || 0);
TMPlugin.BackButton.SceneLoadX = +(TMPlugin.BackButton.Parameters['sceneLoadX'] || 0);
TMPlugin.BackButton.SceneLoadY = +(TMPlugin.BackButton.Parameters['sceneLoadY'] || 0);
TMPlugin.BackButton.SceneGameEndX = +(TMPlugin.BackButton.Parameters['sceneGameEndX'] || 0);
TMPlugin.BackButton.SceneGameEndY = +(TMPlugin.BackButton.Parameters['sceneGameEndY'] || 0);
TMPlugin.BackButton.SceneShopX = +(TMPlugin.BackButton.Parameters['sceneShopX'] || 0);
TMPlugin.BackButton.SceneShopY = +(TMPlugin.BackButton.Parameters['sceneShopY'] || 0);
TMPlugin.BackButton.SceneNameX = +(TMPlugin.BackButton.Parameters['sceneNameX'] || 0);
TMPlugin.BackButton.SceneNameY = +(TMPlugin.BackButton.Parameters['sceneNameY'] || 0);
TMPlugin.BackButton.SceneJobChangeX +(TMPlugin.BackButton.Parameters['sceneJobChangeX'] || 0);
TMPlugin.BackButton.SceneJobChangeY +(TMPlugin.BackButton.Parameters['sceneJobChangeY'] || 0);


(function() {

  //-----------------------------------------------------------------------------
  // Window_Selectable
  //

  var _Window_Selectable_processTouch = Window_Selectable.prototype.processTouch;
  Window_Selectable.prototype.processTouch = function() {
    if (this.isOpenAndActive() && TouchInput.isTriggered()) {
      var backButton = SceneManager._scene._backButtonSprite;
      if (this.isCancelEnabled() && backButton && backButton.width) {
        var x = backButton.x;
        var y = backButton.y;
        if (TouchInput.x >= x && TouchInput.x < x + backButton.width &&
            TouchInput.y >= y && TouchInput.y < y + backButton.height &&
            +backButton.bitmap.getAlphaPixel(TouchInput.x - x, TouchInput.y - y) > 0) {
          this.processCancel();
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
    this.createBackButton();
  };

  Scene_MenuBase.prototype.createBackButton = function() {
    this._backButtonSprite = new Sprite();
    this._backButtonSprite.bitmap = ImageManager.loadSystem(TMPlugin.BackButton.ButtonImage);
    this._backButtonSprite.x = this.backButtonX();
    this._backButtonSprite.y = this.backButtonY();
    this.addChild(this._backButtonSprite);
  };

  Scene_MenuBase.prototype.backButtonX = function() {
    return 0;
  };

  Scene_MenuBase.prototype.backButtonY = function() {
    return 0;
  };

  //-----------------------------------------------------------------------------
  // Scene_Menu
  //

  Scene_Menu.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneMenuX;
  };

  Scene_Menu.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneMenuY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Item
  //

  Scene_Item.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneItemX;
  };

  Scene_Item.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneItemY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Skill
  //

  Scene_Skill.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneSkillX;
  };

  Scene_Skill.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneSkillY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Equip
  //

  Scene_Equip.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneEquipX;
  };

  Scene_Equip.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneEquipY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Status
  //

  Scene_Status.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneStatusX;
  };

  Scene_Status.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneStatusY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Options
  //

  Scene_Options.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneOptionsX;
  };

  Scene_Options.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneOptionsY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Save
  //

  Scene_Save.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneSaveX;
  };

  Scene_Save.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneSaveY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Load
  //

  Scene_Load.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneLoadX;
  };

  Scene_Load.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneLoadY;
  };

  //-----------------------------------------------------------------------------
  // Scene_GameEnd
  //

  Scene_GameEnd.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneGameEndX;
  };

  Scene_GameEnd.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneGameEndY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Shop
  //

  Scene_Shop.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneShopX;
  };

  Scene_Shop.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneShopY;
  };


  //-----------------------------------------------------------------------------
  // Scene_JobChange
  //

  Scene_JobChange.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneJobChangeX;
  };

  Scene_JobChange.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneJobChangeY;
  };

//-----------------------------------------------------------------------------

    //-----------------------------------------------------------------------------
  // Scene_Name
  //

  Scene_Name.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneNameX;
  };

  Scene_Name.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneNameY;
  };

})();
