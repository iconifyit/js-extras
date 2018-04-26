/**
 * Container width
 * @type {number}
 */
var w = 550;

/**
 * Container height
 * @type {number}
 */
var h = 410;

/**
 * Row height
 * @type {number}
 */
var rh = 30;

/**
 * Column width
 * @type {number}
 */
var cw  = 112;

/**
 * Margin
 * @type {number}
 */
var m = 16;

/**
 * Padding
 * @type {number}
 */
var p = 24;

/**
 * Left edge (origin)
 * @type {number}
 */
var x1 = m;

/**
 * Right edge corner
 * @type {number}
 */
var x2 = w - m;

/**
 * Top edge (origin)
 * @type {number}
 */
var y1 = m + p;

/**
 * Bottom edge
 * @type {number}
 */
var y2 = cw;
            
// cell_bounds( 1, 1, 2 )
// 28, 11, 275, 41

/**
 * Calculate row cell bounds
 * @param {int} x 		The left origin
 * @param {int} y 		The top origin
 * @param {int} tw 		The table width
 * @param {int} p 		The table padding
 * @param {int} rh 		The row height
 * @param {int} r 		The row number
 * @param {int} c 		The column number
 * @param {int} cols	The number of columns
 */
function cell_bounds(x, y, tw, p, rh, r, c, cols) {
	var cw  = (w - (p * 2)) / cols;
	return [
		x + p + ((c - 1) * cw),
		y + ((r - 1) * rh),
		x + p + ((c - 1) * cw) + cw,
		y + ((r - 1) * rh) + rh
	];
}