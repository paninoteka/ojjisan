//=============================================================================
// Trb_LoadingAnimation.js
//=============================================================================
//Copyright (c) 2016 Trb
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//
//twitter https://twitter.com/Trb_surasura
/*:
 * @plugindesc ローディング画面をアニメーションさせるプラグイン
 * @author Trb
 * @version 1.00 2016/11/5 初版
 * 
 * @help ローディング画面の画像を簡易的にアニメーションさせるプラグインです。
 * 画像の規格については、配布ページのサンプル画像を参考にして下さい。
 * 
 * 
 * ＜パラメータの設定＞
 * コマ数・・・アニメーションのコマ数です。たとえば2コマのアニメーションなら「2」と入れて下さい
 * 再生速度・・・アニメーションの再生速度です。たとえば「10」と入れれば10フレームごとに画像が切り替わります。
 * x・・・表示位置のx座標です。無記入の場合は真ん中に調整されます。
 * y・・・表示位置のy座標です。無記入の場合は真ん中に調整されます。
 * 
 * @param コマ数
 * @desc アニメーションのコマ数
 * @default 1
 * 
 * @param 再生速度
 * @desc 1コマあたりの長さ
 * @default 30
 * 
 * @param x
 * @desc 表示位置のx座標
 * @default 
 * 
 * @param y
 * @desc 表示位置のy座標
 * @default 
 */
(function () {

    //パラメータの読み込み
    var parameters = PluginManager.parameters('Trb_LoadingAnimation');
    var maxFrame = Number(parameters['コマ数']) || 1;
    var maxCount = Number(parameters['再生速度']) || 30;
    var drawX = Number(parameters['x']);
    var drawY = Number(parameters['y']);

    //ロード画像の描画メソッドを改変
    Graphics._paintUpperCanvas = function() {
        this._clearUpperCanvas();
        if (this._loadingImage && this._loadingCount >= 20) {
            var context = this._upperCanvas.getContext('2d');
            var frame = Math.floor((this._loadingCount - 20) / maxCount) % maxFrame;
            var iw = this._loadingImage.width;
            var ih = this._loadingImage.height;
            var sw = iw;
            var sh = ih / maxFrame;
            var sx = 0;
            var sy = sh * frame;
            var dx = typeof drawX === 'number' ? drawX : (this._width - iw) / 2;
            var dy = typeof drawY === 'number' ? drawY : (this._height - sh) / 2;
            var alpha = ((this._loadingCount - 20) / 30).clamp(1, 1);
            context.save();
            context.globalAlpha = alpha;
            context.drawImage(this._loadingImage, sx, sy, sw, sh, dx, dy, sw, sh);
            context.restore();
        }
    };

})();