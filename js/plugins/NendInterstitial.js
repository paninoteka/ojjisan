//=============================================================================
// NendInterstitial.js
//=============================================================================

/*:
 * @plugindesc Nend Interstitial Ad.
 * @author Takeshi Kinami
 * @copyright 2016 Takeshi Kinami
 * @license   http://www.apache.org/licenses/LICENSE-2.0 Apache-2.0
 *
 * @param iOSApiKey
 * @desc your ApiKey for iOS
 * @default 308c2499c75c4a192f03c02b2fcebd16dcb45cc9
 *
 * @param iOSSpotID
 * @desc your SpotID for iOS
 * @default 213208
 *
 * @param androidApiKey
 * @desc your ApiKey for Android
 * @default 8c278673ac6f676dae60a1f56d16dad122e23516
 *
 * @param androidSpotID
 * @desc your SpotID for Android
 * @default 213206
 *
 * @help
 *
 * Plugin Command:
 *   NendInterstitial load    # Load Nend Interstitial
 *   NendInterstitial show    # Show Nend Interstitial
 */

/*:ja
 * @plugindesc nend�̃C���^�[�X�e�B�V�����L����\�����܂��B
 * @author Takeshi Kinami
 * @copyright 2016 Takeshi Kinami
 * @license   http://www.apache.org/licenses/LICENSE-2.0 Apache-2.0
 *
 * @param iOSApiKey
 * @desc �Ǘ���ʂ��甭�s���ꂽiOS�pApiKey
 * @default 308c2499c75c4a192f03c02b2fcebd16dcb45cc9
 *
 * @param iOSSpotID
 * @desc �Ǘ���ʂ��甭�s���ꂽiOS�pSpotID
 * @default 213208
 *
 * @param androidApiKey
 * @desc �Ǘ���ʂ��甭�s���ꂽAndroid�pApiKey
 * @default 8c278673ac6f676dae60a1f56d16dad122e23516
 *
 * @param androidSpotID
 * @desc �Ǘ���ʂ��甭�s���ꂽAndroid�pApiKey
 * @default 213206
 *
 * @help
 *
 * �v���O�C���R�}���h:
 *   NendInterstitial load    # �C���^�[�X�e�B�V�����L���̓ǂݍ��݂��s���܂�
 *   NendInterstitial show    # �C���^�[�X�e�B�V�����L����\�����܂�
 *
 */

(function() {
 
    var parameters = PluginManager.parameters('NendInterstitial');

    var useragent = navigator.userAgent;
    
    var apiKey = '';
    var spotID = '';
    if (useragent.indexOf("Android") > 0) {
        apiKey = String(parameters['androidApiKey'] || 'c5cb8bc474345961c6e7a9778c947957ed8e1e4f');
        spotID = String(parameters['androidSpotID'] || '3174');
    } else if (useragent.indexOf("iPhone") > 0 || useragent.indexOf("iPad" > 0) ) {
        apiKey = String(parameters['iOSApiKey'] || 'a6eca9dd074372c898dd1df549301f277c53f2b9');
        spotID = String(parameters['iOSSpotID'] || '3172');
    }

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'NendInterstitial') {
            var useragent = navigator.userAgent;
            if (useragent.indexOf("Android") > 0 || useragent.indexOf("iPhone") > 0  || useragent.indexOf("iPad") > 0 ) {
                switch (args[0]) {
                    case `load`:
                        Nend.loadInterstitial(apiKey, spotID);
                        break;
                    case `show`:
                        Nend.showInterstitial(function(e) {
                            if (0 != e)
                            {
//                                alert("Nend Interstitial Show Error : code = " + e);
                            }
                        });
                        break;
                }
            }
        }
    };
})();