//=============================================================================
// NendBanner.js
//=============================================================================

/*:
 * @plugindesc Nend Banner Ad.
 * @author Takeshi Kinami
 * @copyright 2016 Takeshi Kinami
 * @license   http://www.apache.org/licenses/LICENSE-2.0 Apache-2.0
 *
 * @param iOSApiKey
 * @desc your ApiKey for iOS
 * @default a6eca9dd074372c898dd1df549301f277c53f2b9
 *
 * @param iOSSpotID
 * @desc your SpotID for iOS
 * @default 3172
 *
 * @param androidApiKey
 * @desc your ApiKey for Android
 * @default c5cb8bc474345961c6e7a9778c947957ed8e1e4f
 *
 * @param androidSpotID
 * @desc your SpotID for Android
 * @default 3174
 *
 * @param isAdjust
 * @desc Adjust banner width to device
 * @default YES
 *
 * @help
 *
 * Plugin Command:
 *   NendBanner load    # load Ad
 *   NendBanner show    # display Ad
 *   NendBanner show bottom    # display Ad to bottom
 *   NendBanner hide    # hide Ad
 *   NendBanner pause    # pause auto reload
 *   NendBanner resume    # resume auto reload
 *   NendBanner release    # release Ad
 */

/*:ja
 * @plugindesc nendのバナー広告を表示します。
 * @author Takeshi Kinami
 * @copyright 2016 Takeshi Kinami
 * @license   http://www.apache.org/licenses/LICENSE-2.0 Apache-2.0
 *
 * @param iOSApiKey
 * @desc 管理画面から発行されたiOS用ApiKey
 * @default a6eca9dd074372c898dd1df549301f277c53f2b9
 *
 * @param iOSSpotID
 * @desc 管理画面から発行されたiOS用SpotID
 * @default 3172
 *
 * @param androidApiKey
 * @desc 管理画面から発行されたAndroid用ApiKey
 * @default c5cb8bc474345961c6e7a9778c947957ed8e1e4f
 *
 * @param androidSpotID
 * @desc 管理画面から発行されたAndroid用ApiKey
 * @default 3174
 *
 * @param isAdjust
 * @desc バナー広告の幅を端末のサイズに合わせます
 * @default YES
 *
 * @help
 *
 * プラグインコマンド:
 *   NendBanner load    # 広告を読み込みます
 *   NendBanner show    # 広告を表示します
 *   NendBanner show bottom    # 広告を下部に表示します
 *   NendBanner hide    # 広告を非表示にします
 *   NendBanner pause    # 広告の自動リロードを停止します
 *   NendBanner resume    # 広告の自動リロードを再開します
 *   NendBanner release    # 広告を消去します
 *
 */

(function() {
 
    var parameters = PluginManager.parameters('NendBanner');

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
    var isAdjust = String(parameters['isAdjust'] || 'YES');

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'NendBanner') {
            if (useragent.indexOf("Android") > 0 || useragent.indexOf("iPhone") > 0  || useragent.indexOf("iPad") > 0  ) {
                switch (args[0]) {
                case `load`:
                    if (isAdjust == `YES`) {
                        Nend.loadBanner(apiKey, spotID, isAdjust);
                    } else {
                        Nend.loadBanner(apiKey, spotID);
                    }
                    break;
                case `show`:
                    if (args[1] == `bottom`) {
                        Nend.showBannerBottom();
                    } else {
                        Nend.showBanner();
                    }
                    break;
                case `hide`:
                    Nend.hideBanner();
                    break;
                case `pause`:
                    Nend.pauseBanner();
                    break;
                case `resume`:
                    Nend.resumeBanner();
                    break;
                case `release`:
                    Nend.releaseBanner();
                    break;
                }
            }
        }
    };
})();