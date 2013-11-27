if (js.dom.Node) {

	module('js.dom.Node');
	
	test('js.dom.Node()', function(){
		var doc = js.dom.Node(document);
		equals(doc[0], document, 'Use js.dom.Node(document), it will create a node instance containing only document object.');
		
		var win = js.dom.Node(window);
		equals(win[0], window, 'Use js.dom.Node(window), it will create a node instance containing only window object.');
		
		var test = js.dom.Node('#Test');
		equals(test[0], document.getElementById('Test'), 'Use #id to create a node instance should contain the only element by id.');
		
		equals(js.dom.Node(null).length, 0, 'When null passed in, ignore the value and create a empty instance.');
	});
	
	if (js.dom.INodeAttribute) {
		test('node.setAttribute()', function () {
			
		});
		
		test('node.getAttribute()', function () {
			
		});
		
		test('node.attr()', function () {
			
		});
	}
	
	if (js.dom.INodeBoxModel) {
		test('node.getPosition()', function () {
			
		});
		
		test('node.isDisplaying()', function () {
			
		});
	}
	
	if (js.dom.INodeClassName) {
		test('node.addClass()', function () {
			
		});
		test('node.getClass()', function () {
			var node = js.dom.Node('#test-js-dom-classname');
			equal(typeof node.getClass, 'function', 'The extended function should be implemented on any Node instance.');
		});
		
		test('node.removeClass()', function () {
			
		});
		
		test('node.toggleClass()', function () {
			
		});
		
		test('node.hasClass()', function () {
			
		});
	}
	
	if (js.dom.INodeEvent) {
		test('node.addEventListener()', function () {
			var btn = js.dom.Node('Test_js-dom-Event-click');
			equals(typeof btn.addEventListener, 'function', '.addEventListener() method on node instance should be a function.');
		});
		
		test('node.removeEventListener()', function () {
			var btn = js.dom.Node('Test_js-dom-Event-click');
			equals(typeof btn.removeEventListener, 'function', '.removeEventListener() method on node instance should be a function.');
		});
		
		test('node.on()', function () {
			
		});
		
		test('node.un()', function () {
			
		});
	}
	
	if (js.dom.INodeOperation) {
		test('node.after()', function () {
			
		});
		
		test('node.append()', function () {
			
		});
		
		test('node.appendTo()', function () {
			
		});
		
		test('node.insert()', function () {
			
		});
		
		test('node.insertTo()', function () {
			
		});
		
		test('node.remove()', function () {
			
		});
		
		test('node.empty()', function () {
			
		});
		
		test('node.html()', function () {
			
		});
		
		test('node.text()', function () {
			
		});
	}
	
	if (js.dom.INodeRelation) {
		test('node.indexOfSiblings()', function () {
			
		});
		
		test('node.next()', function () {
			
		});
		
		test('node.nextAll()', function () {
			
		});
		
		test('node.prev()', function () {
			
		});
		
		test('node.prevAll()', function () {
			
		});
		
		test('node.parent()', function () {
			var node = js.dom.Node('#Test_js-dom');
			equal(node.parent()[0], document.getElementById('Test_js'), 'The method parent() should get the right element.');
		});
		
		test('node.ancestors()', function () {
			
		});
		
		test('node.firstChild()', function () {
			
		});
		
		test('node.lastChild()', function () {
			
		});
		
		test('node.children()', function () {
			var node = js.dom.Node('#Test_js-dom-Traversal-tree');
			equal(node.children().length, 12);
			equal(node.children('dt').length, 4);
			equal(node.children('dd').length, 8);
		});
		
		test('node.siblings()', function () {
			var node = js.dom.Node('#Test-js_util_XArray_toArray-dt3');
			equal(node.siblings().length, 11);
			equal(node.siblings('dd').length, 8);
			equal(node.siblings('dt').length, 3);
		});
		
		test('node.contains()', function () {
			
		});
	}
	
	if (js.dom.INodeStyle) {
		test('node.setStyle()', function () {
			
		});
		
		test('node.getStyle()', function () {
			
		});
		
		test('node.css()', function () {
			var absPosNode = js.dom.Node('#Test_js-dom-Tween');
			equals(absPosNode.css('position'), 'absolute', 'When use css(key) can get current style value by the specified key.');
			
			var anAlignCenterNode = js.dom.Node('#Test_js-dom-Style_align-center-2');
			anAlignCenterNode.css('textAlign', 'center');
			equals(anAlignCenterNode.css('textAlign'), 'center');
		});
	}
	
	if (js.dom.INodeTween) {
		test('node.tween()', function () {
			var node = js.dom.Node('#Test_js-dom-Tween');
			equals(typeof node.tween, 'function', 'Any instance of Node should contain tween() method.');
			
			equals(node.tween, js.dom.INodeTween.tween, 'The tween() method should be the one defined in INodeTween interface.');
		});
	}
}