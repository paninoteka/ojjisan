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
 * �����l: pejiButton
 * @default pejiButton
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
 *   �ۑ����Ă��������B�t�@�C������ pejiButton.png �ƂȂ��Ă��܂��B
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
