//>>built
define("epi-cms/contentediting/editors/CheckBoxListEditor",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dojo/on","dijit/focus","dijit/_TemplatedMixin","dijit/_Widget","dijit/form/CheckBox","epi/shell/widget/_ValueRequiredMixin"],function(_1,_2,_3,_4,on,_5,_6,_7,_8,_9){return _2([_7,_6,_9],{templateString:"<div class=\"dijit dijitReset dijitInline\"></div>",baseClass:"epi-checkBoxList",valueIsCsv:true,valueIsInclusive:true,value:null,constructor:function(){this._checkboxes=[];this._labelClickHandles=[];},buildRendering:function(){this.inherited(arguments);_1.forEach(this.selections,this._addCheckBoxForItem,this);},destroy:function(){var _a;while(_a=this._checkboxes.pop()){_a.destroyRecursive();}var _b;while(_b=this._labelClickHandles.pop()){_b.remove();}this.inherited(arguments);},focus:function(){try{if(this._checkboxes.length>0){_5.focus(this._checkboxes[0].domNode);}}catch(e){}},onChange:function(){},onBlur:function(){},onFocus:function(){},_calculateValue:function(){var _c=[];var _d=this.valueIsInclusive;_1.forEach(this._checkboxes,function(_e){if(_d===_e.checked){_c.push(_e.value);}});this._set("value",this.valueIsCsv?_c.join(","):_c);},_setValueAttr:function(_f){this._set("value",_f);var _10=[];if(_f){_10=this.valueIsCsv?_f.split(","):_f;}var _11=this.valueIsInclusive;_1.forEach(this._checkboxes,function(_12){_12.set("checked",_11===_1.some(_10,function(v){return v===_12.value;}));});},_onBlur:function(){this.inherited(arguments);this.onBlur();},_addCheckBoxForItem:function(_13){var _14=_4.create("span",null,this.domNode);var _15=new _8({value:_13.value});_15.placeAt(_14);_15.on("change",_3.hitch(this,function(){this._calculateValue();this.onChange(this.value);}));_15.on("focus",_3.hitch(this,function(){this._set("focused",true);this.onFocus();}));_15.on("blur",_3.hitch(this,function(){this._set("focused",false);this._onBlur();}));_15.set("readOnly",!!this.readOnly);this._checkboxes.push(_15);var _16=_4.create("label",{"for":_15.id,innerHTML:_13.text},_14);this._labelClickHandles.push(on(_16,"click",_3.hitch(this,function(){_5.focus(_15.domNode);})));}});});