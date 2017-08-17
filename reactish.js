
Element.prototype.render = function(str) {
	//Is it faster to maintain some diff, or just to clear all like this?
	Array.from(this.children).forEach(x => this.removeChild(x));

	const appendChild = Element.prototype.appendChild;
	const doc = (new DOMParser()).parseFromString(str, 'text/html');
	// console.log(doc.body.children);
	return Array.from(doc.body.children).map(
		(domNode,pos) => appendChild.call(this, domNode)
	);
};

Element.prototype.reactish = function(props, templateFunc) {
	var self = this;

	var reactiveTrap = {
		set: function(target, key, value) {
			if(target[key] !== value) {
				target[key] = value;
				// console.log('rerendering', target);
				self.render(templateFunc.call(target));
			}
			return true;
		}
	};
	
	self.state = new Proxy(props, reactiveTrap);
	// console.log('rendering', this.state);
	
	self.render(templateFunc.call(props));
};