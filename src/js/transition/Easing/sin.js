/*
 * js Javascript Library
 * 
 * create:
 * @2010-07-22 by mytharcher
 * 
 * update:
 */

///import js.transition.Easing;

/**
 * @class js.transition.Easing
 */
/**
 * 正弦周期变化
 * @method js.transition.Easing.sin
 * @static
 * 
 * @param {Number} t 0~1之间的数，代表当前进行到的时间总量的百分比
 * 
 * @return {Number}
 */
js.transition.Easing.sin = function (t) {
	return Math.sin(2 * Math.PI * t);
};