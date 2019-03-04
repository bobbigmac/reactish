
Element.prototype.render = function(template) {
	// Just clear everything
	Array.from(this.children).forEach(x => this.removeChild(x));

	// Generate child nodes from template
	const appendChild = Element.prototype.appendChild;
	const subDoc = (new DOMParser()).parseFromString(template, 'text/html');
	
	// Append subDoc children to this element
	return Array.from(subDoc.body.children).map(
		(domNode,pos) => appendChild.call(this, domNode)
	);
};

Element.prototype.reactish = function(props, templateFunc) {
	var reactiveTrap = {
		set: (target, key, value) => {
			if(target[key] !== value) {
				target[key] = value;
				this.render(templateFunc.call(target));
			}
			return true;
		}
	};
	
	this.state = new Proxy(props, reactiveTrap);
	
	this.render(templateFunc.call(props));
};