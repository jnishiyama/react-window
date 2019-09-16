!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","react-dom"],e):e((t=t||self).ReactWindow={},t.React,t.ReactDOM)}(this,(function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function a(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function s(t,e){var n;void 0===e&&(e=a);var r,o=[],i=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return i&&n===this&&e(a,o)?r:(r=t.apply(this,a),i=!0,n=this,o=a,r)}}var l="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function c(t){cancelAnimationFrame(t.id)}function u(t,e){var n=l();var r={id:requestAnimationFrame((function o(){l()-n>=e?t.call(null):r.id=requestAnimationFrame(o)}))};return r}var f=-1;var d=null;function h(t){if(void 0===t&&(t=!1),null===d||t){var e=document.createElement("div"),n=e.style;n.width="50px",n.height="50px",n.overflow="scroll",n.direction="rtl";var r=document.createElement("div"),o=r.style;return o.width="100px",o.height="100px",e.appendChild(r),document.body.appendChild(e),e.scrollLeft>0?d="positive-descending":(e.scrollLeft=1,d=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),d}return d}var m=150,p=function(t,e){return t};function v(t){var n,a,l=t.getItemOffset,f=t.getEstimatedTotalSize,d=t.getItemSize,v=t.getOffsetForIndexAndAlignment,S=t.getStartIndexForOffset,I=t.getStopIndexForStartIndex,M=t.initInstanceProps,_=t.shouldResetStyleCacheOnItemSizeChange,w=t.validateProps;return a=n=function(t){function n(e){var n;return(n=t.call(this,e)||this)._instanceProps=M(n.props,o(n)),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:o(n),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=s((function(t,e,r,o){return n.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:r,visibleStopIndex:o})})),n._callOnScroll=void 0,n._callOnScroll=s((function(t,e,r){return n.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:r})})),n._getItemStyle=void 0,n._getItemStyle=function(t){var e,r=n.props,o=r.direction,i=r.itemSize,a=r.layout,s=n._getItemStyleCache(_&&i,_&&a,_&&o);if(s.hasOwnProperty(t))e=s[t];else{var c,u=l(n.props,t,n._instanceProps),f=d(n.props,t,n._instanceProps),h="horizontal"===o||"horizontal"===a;s[t]=((c={position:"absolute"})["rtl"===o?"right":"left"]=h?u:0,c.top=h?0:u,c.height=h?"100%":f,c.width=h?f:"100%",e=c)}return e},n._itemStyleCache=void 0,n._getItemStyleCache=void 0,n._getItemStyleCache=s((function(t,e,r){return n._itemStyleCache={},n._itemStyleCache})),n._onScrollHorizontal=function(t){var e=t.currentTarget,r=e.clientWidth,o=e.scrollLeft,i=e.scrollWidth;n.setState((function(t){if(t.scrollOffset===o)return null;var e=n.props.direction,a=o;if("rtl"===e)switch(h()){case"negative":a=-o;break;case"positive-descending":a=i-r-o}return a=Math.max(0,Math.min(a,i-r)),{isScrolling:!0,scrollDirection:t.scrollOffset<o?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(t){var e=t.currentTarget,r=e.clientHeight,o=e.scrollHeight,i=e.scrollTop;n.setState((function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,o-r));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(t){var e=n.props.outerRef;n._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&c(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=u(n._resetIsScrolling,m)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))},n._instanceProps=M(n.props,o(n)),n}i(n,t),n.getDerivedStateFromProps=function(t,e){return g(t,e),w(t),null};var a=n.prototype;return a.scrollTo=function(t){t=Math.max(0,t),this.setState((function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},a.scrollToItem=function(t,e){void 0===e&&(e="auto");var n=this.props.itemCount,r=this.state.scrollOffset;t=Math.max(0,Math.min(t,n-1)),this.scrollTo(v(this.props,t,e,r,this._instanceProps))},a.componentDidMount=function(){var t=this.props,e=t.direction,n=t.initialScrollOffset,r=t.layout;if("number"==typeof n&&null!=this._outerRef){var o=this._outerRef;"horizontal"===e||"horizontal"===r?o.scrollLeft=n:o.scrollTop=n}this._callPropsCallbacks(),this._commitHook()},a.componentDidUpdate=function(){var t=this.props,e=t.direction,n=t.layout,r=this.state,o=r.scrollOffset;if(r.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===e||"horizontal"===n)if("rtl"===e)switch(h()){case"negative":i.scrollLeft=-o;break;case"positive-ascending":i.scrollLeft=o;break;default:var a=i.clientWidth,s=i.scrollWidth;i.scrollLeft=s-a-o}else i.scrollLeft=o;else i.scrollTop=o}this._callPropsCallbacks(),this._commitHook()},a.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&c(this._resetIsScrollingTimeoutId),this._unmountHook()},a.render=function(){var t=this.props,n=t.className,o=t.direction,i=t.height,a=t.innerRef,s=t.innerElementType,l=t.innerTagName,c=t.layout,u=t.outerElementType,d=t.outerTagName,h=t.style,m=t.width,p=this.state.isScrolling,v="horizontal"===o||"horizontal"===c,g=v?this._onScrollHorizontal:this._onScrollVertical,S=this._renderItems(),I=f(this.props,this._instanceProps);return e.createElement(u||d||"div",{className:n,onScroll:g,ref:this._outerRefSetter,style:r({height:i,width:m,overflow:"auto",position:"relative",WebkitOverflowScrolling:"touch",willChange:"transform",direction:o},h)},e.createElement(s||l||"div",{children:S,ref:a,style:{height:v?"100%":I,pointerEvents:p?"none":void 0,width:v?I:"100%"}}))},a._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],n=t[1],r=t[2],o=t[3];this._callOnItemsRendered(e,n,r,o)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,s=i.scrollOffset,l=i.scrollUpdateWasRequested;this._callOnScroll(a,s,l)}},a._commitHook=function(){},a._unmountHook=function(){},a._getRangeToRender=function(){var t=this.props,e=t.itemCount,n=t.overscanCount,r=this.state,o=r.isScrolling,i=r.scrollDirection,a=r.scrollOffset;if(0===e)return[0,0,0,0];var s=S(this.props,a,this._instanceProps),l=I(this.props,s,a,this._instanceProps),c=o&&"backward"!==i?1:Math.max(1,n),u=o&&"forward"!==i?1:Math.max(1,n);return[Math.max(0,s-c),Math.max(0,Math.min(e-1,l+u)),s,l]},a._renderItems=function(){var t=this.props,n=t.children,r=t.itemCount,o=t.itemData,i=t.itemKey,a=void 0===i?p:i,s=t.useIsScrolling,l=this.state.isScrolling,c=this._getRangeToRender(),u=c[0],f=c[1],d=[];if(r>0)for(var h=u;h<=f;h++)d.push(e.createElement(n,{data:o,key:a(h,o),index:h,isScrolling:s?l:void 0,style:this._getItemStyle(h)}));return d},n}(e.PureComponent),n.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},a}var g=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},S=function(t){function r(){for(var e,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this)._didProvideValidRef=!1,e._node=null,e._resizeObserver=null,e._measureItem=function(t,n){var r=e.props,o=r.direction,i=r.layout,a=r.handleNewMeasurements,s=r.index,l=r.size,c=e._node;if(c&&c.ownerDocument&&c.ownerDocument.defaultView&&c instanceof c.ownerDocument.defaultView.HTMLElement){var u="horizontal"===o||"horizontal"===i?Math.ceil(c.offsetWidth):Math.ceil(c.offsetHeight);(l!==u||n)&&a(s,u,t)}},e._refSetter=function(t){null!==e._resizeObserver&&null!==e._node&&e._resizeObserver.unobserve(e._node),t instanceof HTMLElement?(e._didProvideValidRef=!0,e._node=t):e._node=t?n.findDOMNode(t):null,null!==e._resizeObserver&&null!==e._node&&e._resizeObserver.observe(e._node)},e._onResize=function(){e._measureItem(!1,!1)},e}i(r,t);var o=r.prototype;return o.componentDidMount=function(){this._measureItem(!0,!0),"undefined"!=typeof ResizeObserver&&(this._resizeObserver=new ResizeObserver(this._onResize),null!==this._node&&this._resizeObserver.observe(this._node))},o.componentWillUnmount=function(){null!==this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)},o.render=function(){return e.cloneElement(this.props.item,{ref:this._refSetter})},r}(e.Component),I=function(t,e,n){var r=n.estimatedItemSize,o=n.instance,i=n.itemOffsetMap,a=n.itemSizeMap,s=n.lastMeasuredIndex,l=n.lastPositionedIndex;if(e>s)return{offset:0,size:r};if(e>l){l<0&&(i[0]=0);for(var c=Math.max(1,l+1);c<=e;c++){var u=i[c-1],f=a[c-1]||0;i[c]=u+f,delete o._itemStyleCache[c]}n.lastPositionedIndex=e}return{offset:i[e],size:a[e]}},M=function(t,e){var n=t.itemCount,r=(e.itemSizeMap,e.estimatedItemSize),o=e.lastMeasuredIndex,i=e.totalMeasuredSize+(n-o-1)*r;return i<0?n*r:i},_=v({getItemOffset:function(t,e,n){return I(0,e,n).offset},getItemSize:function(t,e,n){},getEstimatedTotalSize:M,getOffsetForIndexAndAlignment:function(t,e,n,r,o){var i=t.direction,a=t.layout,s=t.height,l=t.width,c="horizontal"===i||"horizontal"===a?l:s,u=I(0,e,o),f=M(t,o),d=Math.min(f-c,u.offset),h=Math.max(0,u.offset-c+u.size);switch(n){case"start":return d;case"end":return h;case"center":return Math.round(h+(d-h)/2);case"auto":default:return r>=h&&r<=d?r:r-h<d-r?h:d}},getStartIndexForOffset:function(t,e,n){var r=n.lastMeasuredIndex;return e<=n.totalMeasuredSize?function(t,e,n,r,o){for(;r<=n;){var i=r+Math.floor((n-r)/2),a=I(0,i,e).offset;if(a===o)return i;a<o?r=i+1:a>o&&(n=i-1)}return r>0?r-1:0}(0,n,r,0,e):r+1},getStopIndexForStartIndex:function(t,e,n,r){for(var o=t.direction,i=t.layout,a=t.height,s=t.itemCount,l=t.width,c="horizontal"===o||"horizontal"===i?l:a,u=I(0,e,r),f=n+c,d=u.offset+u.size,h=e;h<s-1&&d<f;)d+=I(0,++h,r).size;return h},initInstanceProps:function(t,n){var r={estimatedItemSize:t.estimatedItemSize||50,instance:n,itemOffsetMap:{},itemSizeMap:{},lastMeasuredIndex:-1,lastPositionedIndex:-1,totalMeasuredSize:0},o=null;n._unmountHook=function(){null!==o&&(clearTimeout(o),o=null)};var i=!1,a=0;n._commitHook=function(){if(i){if(i=!1,0===a)return void n.forceUpdate();var t,e=a;n.setState((function(n){return"backward"!==n.scrollDirection||n.scrollUpdateWasRequested?(t=!0,null):{scrollOffset:n.scrollOffset+e}}),(function(){if(t)n.forceUpdate();else{var r=n.state.scrollOffset,o=n.props,i=o.direction,s=o.layout,l=n._outerRef;"function"==typeof l.scrollBy?l.scrollBy("horizontal"===i||"horizontal"===s?e:0,"horizontal"===i||"horizontal"===s?0:e):"horizontal"===i||"horizontal"===s?l.scrollLeft=r:l.scrollTop=r}a-=e}))}};var s=function(t,e,s){var l=r.itemSizeMap,c=r.lastMeasuredIndex,u=r.lastPositionedIndex,f=l[t]||0;if(t<u&&(r.lastPositionedIndex=t),t<=c){if(f===e)return;r.totalMeasuredSize+=e-f,s&&(a+=e-f)}else r.lastMeasuredIndex=t,r.totalMeasuredSize+=e;l[t]=e,s?i=!0:null===o&&(o=setTimeout((function(){o=null,n.forceUpdate()}),1))};return n._handleNewMeasurements=s,n._renderItems=function(){var t=n.props,o=t.children,i=t.direction,a=t.layout,l=t.itemCount,c=t.itemData,u=t.itemKey,f=void 0===u?p:u,d=t.useIsScrolling,h=n.state.isScrolling,m=n._getRangeToRender(),v=m[0],g=m[1],M=[];if(l>0)for(var _=v;_<=g;_++){var w=I(n.props,_,r).size,x=n._getItemStyle(_),C=e.createElement(o,{data:c,index:_,isScrolling:d?h:void 0,style:x});M.push(e.createElement(S,{direction:i,layout:a,handleNewMeasurements:s,index:_,item:C,key:f(_,c),size:w}))}return M},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}}),w=150,x=function(t){var e=t.columnIndex;t.data;return t.rowIndex+":"+e};function C(t){var n,a,l=t.getColumnOffset,d=t.getColumnStartIndexForOffset,m=t.getColumnStopIndexForStartIndex,p=t.getColumnWidth,v=t.getEstimatedTotalHeight,g=t.getEstimatedTotalWidth,S=t.getOffsetForColumnAndAlignment,I=t.getOffsetForRowAndAlignment,M=t.getRowHeight,_=t.getRowOffset,C=t.getRowStartIndexForOffset,y=t.getRowStopIndexForStartIndex,R=t.initInstanceProps,O=t.shouldResetStyleCacheOnItemSizeChange,T=t.validateProps;return a=n=function(t){function n(e){var n;return(n=t.call(this,e)||this)._instanceProps=R(n.props,o(n)),n._resetIsScrollingTimeoutId=null,n._outerRef=void 0,n.state={instance:o(n),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof n.props.initialScrollLeft?n.props.initialScrollLeft:0,scrollTop:"number"==typeof n.props.initialScrollTop?n.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},n._callOnItemsRendered=void 0,n._callOnItemsRendered=s((function(t,e,r,o,i,a,s,l){return n.props.onItemsRendered({overscanColumnStartIndex:t,overscanColumnStopIndex:e,overscanRowStartIndex:r,overscanRowStopIndex:o,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:s,visibleRowStopIndex:l})})),n._callOnScroll=void 0,n._callOnScroll=s((function(t,e,r,o,i){return n.props.onScroll({horizontalScrollDirection:r,scrollLeft:t,scrollTop:e,verticalScrollDirection:o,scrollUpdateWasRequested:i})})),n._getItemStyle=void 0,n._getItemStyle=function(t,e){var r,o,i=n.props,a=i.columnWidth,s=i.direction,c=i.rowHeight,u=n._getItemStyleCache(O&&a,O&&s,O&&c),f=t+":"+e;u.hasOwnProperty(f)?r=u[f]:u[f]=((o={position:"absolute"})["rtl"===s?"right":"left"]=l(n.props,e,n._instanceProps),o.top=_(n.props,t,n._instanceProps),o.height=M(n.props,t,n._instanceProps),o.width=p(n.props,e,n._instanceProps),r=o);return r},n._getItemStyleCache=void 0,n._getItemStyleCache=s((function(t,e,n){return{}})),n._onScroll=function(t){var e=t.currentTarget,r=e.clientHeight,o=e.clientWidth,i=e.scrollLeft,a=e.scrollTop,s=e.scrollHeight,l=e.scrollWidth;n.setState((function(t){if(t.scrollLeft===i&&t.scrollTop===a)return null;var e=n.props.direction,c=i;if("rtl"===e)switch(h()){case"negative":c=-i;break;case"positive-descending":c=l-o-i}c=Math.max(0,Math.min(c,l-o));var u=Math.max(0,Math.min(a,s-r));return{isScrolling:!0,horizontalScrollDirection:t.scrollLeft<i?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:t.scrollTop<a?"forward":"backward",scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(t){var e=n.props.outerRef;n._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&c(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=u(n._resetIsScrolling,w)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1)}))},n}i(n,t),n.getDerivedStateFromProps=function(t,e){return z(t,e),T(t),null};var a=n.prototype;return a.scrollTo=function(t){var e=t.scrollLeft,n=t.scrollTop;void 0!==e&&(e=Math.max(0,e)),void 0!==n&&(n=Math.max(0,n)),this.setState((function(t){return void 0===e&&(e=t.scrollLeft),void 0===n&&(n=t.scrollTop),t.scrollLeft===e&&t.scrollTop===n?null:{horizontalScrollDirection:t.scrollLeft<e?"forward":"backward",scrollLeft:e,scrollTop:n,scrollUpdateWasRequested:!0,verticalScrollDirection:t.scrollTop<n?"forward":"backward"}}),this._resetIsScrollingDebounced)},a.scrollToItem=function(t){var e=t.align,n=void 0===e?"auto":e,r=t.columnIndex,o=t.rowIndex,i=this.props,a=i.columnCount,s=i.height,l=i.rowCount,c=i.width,u=this.state,d=u.scrollLeft,h=u.scrollTop,m=function(t){if(void 0===t&&(t=!1),-1===f||t){var e=document.createElement("div"),n=e.style;n.width="50px",n.height="50px",n.overflow="scroll",document.body.appendChild(e),f=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return f}();void 0!==r&&(r=Math.max(0,Math.min(r,a-1))),void 0!==o&&(o=Math.max(0,Math.min(o,l-1)));var p=v(this.props,this._instanceProps),M=g(this.props,this._instanceProps)>c?m:0,_=p>s?m:0;this.scrollTo({scrollLeft:void 0!==r?S(this.props,r,n,d,this._instanceProps,_):d,scrollTop:void 0!==o?I(this.props,o,n,h,this._instanceProps,M):h})},a.componentDidMount=function(){var t=this.props,e=t.initialScrollLeft,n=t.initialScrollTop;if(null!=this._outerRef){var r=this._outerRef;"number"==typeof e&&(r.scrollLeft=e),"number"==typeof n&&(r.scrollTop=n)}this._callPropsCallbacks()},a.componentDidUpdate=function(){var t=this.props.direction,e=this.state,n=e.scrollLeft,r=e.scrollTop;if(e.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("rtl"===t)switch(h()){case"negative":o.scrollLeft=-n;break;case"positive-ascending":o.scrollLeft=n;break;default:var i=o.clientWidth,a=o.scrollWidth;o.scrollLeft=a-i-n}else o.scrollLeft=Math.max(0,n);o.scrollTop=Math.max(0,r)}this._callPropsCallbacks()},a.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&c(this._resetIsScrollingTimeoutId)},a.render=function(){var t=this.props,n=t.children,o=t.className,i=t.columnCount,a=t.direction,s=t.height,l=t.innerRef,c=t.innerElementType,u=t.innerTagName,f=t.itemData,d=t.itemKey,h=void 0===d?x:d,m=t.outerElementType,p=t.outerTagName,S=t.rowCount,I=t.style,M=t.useIsScrolling,_=t.width,w=this.state.isScrolling,C=this._getHorizontalRangeToRender(),z=C[0],y=C[1],R=this._getVerticalRangeToRender(),O=R[0],T=R[1],b=[];if(i>0&&S)for(var P=O;P<=T;P++)for(var W=z;W<=y;W++)b.push(e.createElement(n,{columnIndex:W,data:f,isScrolling:M?w:void 0,key:h({columnIndex:W,data:f,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var D=v(this.props,this._instanceProps),F=g(this.props,this._instanceProps);return e.createElement(m||p||"div",{className:o,onScroll:this._onScroll,ref:this._outerRefSetter,style:r({position:"relative",height:s,width:_,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},I)},e.createElement(c||u||"div",{children:b,ref:l,style:{height:D,pointerEvents:w?"none":void 0,width:F}}))},a._callPropsCallbacks=function(){var t=this.props,e=t.columnCount,n=t.onItemsRendered,r=t.onScroll,o=t.rowCount;if("function"==typeof n&&e>0&&o>0){var i=this._getHorizontalRangeToRender(),a=i[0],s=i[1],l=i[2],c=i[3],u=this._getVerticalRangeToRender(),f=u[0],d=u[1],h=u[2],m=u[3];this._callOnItemsRendered(a,s,f,d,l,c,h,m)}if("function"==typeof r){var p=this.state,v=p.horizontalScrollDirection,g=p.scrollLeft,S=p.scrollTop,I=p.scrollUpdateWasRequested,M=p.verticalScrollDirection;this._callOnScroll(g,S,v,M,I)}},a._getHorizontalRangeToRender=function(){var t=this.props,e=t.columnCount,n=t.overscanColumnCount,r=t.overscanColumnsCount,o=t.overscanCount,i=t.rowCount,a=this.state,s=a.horizontalScrollDirection,l=a.isScrolling,c=a.scrollLeft,u=n||r||o||1;if(0===e||0===i)return[0,0,0,0];var f=d(this.props,c,this._instanceProps),h=m(this.props,f,c,this._instanceProps),p=l&&"backward"!==s?1:Math.max(1,u),v=l&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,f-p),Math.max(0,Math.min(e-1,h+v)),f,h]},a._getVerticalRangeToRender=function(){var t=this.props,e=t.columnCount,n=t.overscanCount,r=t.overscanRowCount,o=t.overscanRowsCount,i=t.rowCount,a=this.state,s=a.isScrolling,l=a.verticalScrollDirection,c=a.scrollTop,u=r||o||n||1;if(0===e||0===i)return[0,0,0,0];var f=C(this.props,c,this._instanceProps),d=y(this.props,f,c,this._instanceProps),h=s&&"backward"!==l?1:Math.max(1,u),m=s&&"forward"!==l?1:Math.max(1,u);return[Math.max(0,f-h),Math.max(0,Math.min(i-1,d+m)),f,d]},n}(e.PureComponent),n.defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},a}var z=function(t,e){t.children,t.direction,t.height,t.innerTagName,t.outerTagName,t.overscanColumnsCount,t.overscanCount,t.overscanRowsCount,t.width,e.instance},y=C({getColumnOffset:function(t,e){return e*t.columnWidth},getColumnWidth:function(t,e){return t.columnWidth},getRowOffset:function(t,e){return e*t.rowHeight},getRowHeight:function(t,e){return t.rowHeight},getEstimatedTotalHeight:function(t){var e=t.rowCount;return t.rowHeight*e},getEstimatedTotalWidth:function(t){var e=t.columnCount;return t.columnWidth*e},getOffsetForColumnAndAlignment:function(t,e,n,r,o,i){var a=t.columnCount,s=t.columnWidth,l=t.width,c=Math.max(0,a*s-l),u=Math.min(c,e*s),f=Math.max(0,e*s-l+i+s);switch("smart"===n&&(n=r>=f-l&&r<=u+l?"auto":"center"),n){case"start":return u;case"end":return f;case"center":var d=Math.round(f+(u-f)/2);return d<Math.ceil(l/2)?0:d>c+Math.floor(l/2)?c:d;case"auto":default:return r>=f&&r<=u?r:f>u?f:r<f?f:u}},getOffsetForRowAndAlignment:function(t,e,n,r,o,i){var a=t.rowHeight,s=t.height,l=t.rowCount,c=Math.max(0,l*a-s),u=Math.min(c,e*a),f=Math.max(0,e*a-s+i+a);switch("smart"===n&&(n=r>=f-s&&r<=u+s?"auto":"center"),n){case"start":return u;case"end":return f;case"center":var d=Math.round(f+(u-f)/2);return d<Math.ceil(s/2)?0:d>c+Math.floor(s/2)?c:d;case"auto":default:return r>=f&&r<=u?r:f>u?f:r<f?f:u}},getColumnStartIndexForOffset:function(t,e){var n=t.columnWidth,r=t.columnCount;return Math.max(0,Math.min(r-1,Math.floor(e/n)))},getColumnStopIndexForStartIndex:function(t,e,n){var r=t.columnWidth,o=t.columnCount,i=t.width,a=e*r,s=Math.ceil((i+n-a)/r);return Math.max(0,Math.min(o-1,e+s-1))},getRowStartIndexForOffset:function(t,e){var n=t.rowHeight,r=t.rowCount;return Math.max(0,Math.min(r-1,Math.floor(e/n)))},getRowStopIndexForStartIndex:function(t,e,n){var r=t.rowHeight,o=t.rowCount,i=t.height,a=e*r,s=Math.ceil((i+n-a)/r);return Math.max(0,Math.min(o-1,e+s-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.columnWidth,t.rowHeight}}),R=v({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,n,r){var o=t.direction,i=t.height,a=t.itemCount,s=t.itemSize,l=t.layout,c=t.width,u="horizontal"===o||"horizontal"===l?c:i,f=Math.max(0,a*s-u),d=Math.min(f,e*s),h=Math.max(0,e*s-u+s);switch("smart"===n&&(n=r>=h-u&&r<=d+u?"auto":"center"),n){case"start":return d;case"end":return h;case"center":var m=Math.round(h+(d-h)/2);return m<Math.ceil(u/2)?0:m>f+Math.floor(u/2)?f:m;case"auto":default:return r>=h&&r<=d?r:r<h?h:d}},getStartIndexForOffset:function(t,e){var n=t.itemCount,r=t.itemSize;return Math.max(0,Math.min(n-1,Math.floor(e/r)))},getStopIndexForStartIndex:function(t,e,n){var r=t.direction,o=t.height,i=t.itemCount,a=t.itemSize,s=t.layout,l=t.width,c=e*a,u="horizontal"===r||"horizontal"===s?l:o,f=Math.ceil((u+n-c)/a);return Math.max(0,Math.min(i-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}}),O=function(t,e){var n=t.rowCount,r=e.rowMetadataMap,o=e.estimatedRowHeight,i=e.lastMeasuredRowIndex,a=0;if(i>=n&&(i=n-1),i>=0){var s=r[i];a=s.offset+s.size}return a+(n-i-1)*o},T=function(t,e){var n=t.columnCount,r=e.columnMetadataMap,o=e.estimatedColumnWidth,i=e.lastMeasuredColumnIndex,a=0;if(i>=n&&(i=n-1),i>=0){var s=r[i];a=s.offset+s.size}return a+(n-i-1)*o},b=function(t,e,n,r){var o,i,a;if("column"===t?(o=r.columnMetadataMap,i=e.columnWidth,a=r.lastMeasuredColumnIndex):(o=r.rowMetadataMap,i=e.rowHeight,a=r.lastMeasuredRowIndex),n>a){var s=0;if(a>=0){var l=o[a];s=l.offset+l.size}for(var c=a+1;c<=n;c++){var u=i(c);o[c]={offset:s,size:u},s+=u}"column"===t?r.lastMeasuredColumnIndex=n:r.lastMeasuredRowIndex=n}return o[n]},P=function(t,e,n,r){var o,i;return"column"===t?(o=n.columnMetadataMap,i=n.lastMeasuredColumnIndex):(o=n.rowMetadataMap,i=n.lastMeasuredRowIndex),(i>0?o[i].offset:0)>=r?W(t,e,n,i,0,r):D(t,e,n,Math.max(0,i),r)},W=function(t,e,n,r,o,i){for(;o<=r;){var a=o+Math.floor((r-o)/2),s=b(t,e,a,n).offset;if(s===i)return a;s<i?o=a+1:s>i&&(r=a-1)}return o>0?o-1:0},D=function(t,e,n,r,o){for(var i="column"===t?e.columnCount:e.rowCount,a=1;r<i&&b(t,e,r,n).offset<o;)r+=a,a*=2;return W(t,e,n,Math.min(r,i-1),Math.floor(r/2),o)},F=function(t,e,n,r,o,i,a){var s="column"===t?e.width:e.height,l=b(t,e,n,i),c="column"===t?T(e,i):O(e,i),u=Math.max(0,Math.min(c-s,l.offset)),f=Math.max(0,l.offset-s+a+l.size);switch("smart"===r&&(r=o>=f-s&&o<=u+s?"auto":"center"),r){case"start":return u;case"end":return f;case"center":return Math.round(f+(u-f)/2);case"auto":default:return o>=f&&o<=u?o:f>u?f:o<f?f:u}},L=C({getColumnOffset:function(t,e,n){return b("column",t,e,n).offset},getColumnStartIndexForOffset:function(t,e,n){return P("column",t,n,e)},getColumnStopIndexForStartIndex:function(t,e,n,r){for(var o=t.columnCount,i=t.width,a=b("column",t,e,r),s=n+i,l=a.offset+a.size,c=e;c<o-1&&l<s;)l+=b("column",t,++c,r).size;return c},getColumnWidth:function(t,e,n){return n.columnMetadataMap[e].size},getEstimatedTotalHeight:O,getEstimatedTotalWidth:T,getOffsetForColumnAndAlignment:function(t,e,n,r,o,i){return F("column",t,e,n,r,o,i)},getOffsetForRowAndAlignment:function(t,e,n,r,o,i){return F("row",t,e,n,r,o,i)},getRowOffset:function(t,e,n){return b("row",t,e,n).offset},getRowHeight:function(t,e,n){return n.rowMetadataMap[e].size},getRowStartIndexForOffset:function(t,e,n){return P("row",t,n,e)},getRowStopIndexForStartIndex:function(t,e,n,r){for(var o=t.rowCount,i=t.height,a=b("row",t,e,r),s=n+i,l=a.offset+a.size,c=e;c<o-1&&l<s;)l+=b("row",t,++c,r).size;return c},initInstanceProps:function(t,e){var n=t,r={columnMetadataMap:{},estimatedColumnWidth:n.estimatedColumnWidth||50,estimatedRowHeight:n.estimatedRowHeight||50,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return e.resetAfterColumnIndex=function(t,n){void 0===n&&(n=!0),e.resetAfterIndices({columnIndex:t,shouldForceUpdate:n})},e.resetAfterRowIndex=function(t,n){void 0===n&&(n=!0),e.resetAfterIndices({rowIndex:t,shouldForceUpdate:n})},e.resetAfterIndices=function(t){var n=t.columnIndex,o=t.rowIndex,i=t.shouldForceUpdate,a=void 0===i||i;"number"==typeof n&&(r.lastMeasuredColumnIndex=Math.min(r.lastMeasuredColumnIndex,n-1)),"number"==typeof o&&(r.lastMeasuredRowIndex=Math.min(r.lastMeasuredRowIndex,o-1)),e._getItemStyleCache(-1),a&&e.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.columnWidth,t.rowHeight}}),H=function(t,e,n){var r=t.itemSize,o=n.itemMetadataMap,i=n.lastMeasuredIndex;if(e>i){var a=0;if(i>=0){var s=o[i];a=s.offset+s.size}for(var l=i+1;l<=e;l++){var c=r(l);o[l]={offset:a,size:c},a+=c}n.lastMeasuredIndex=e}return o[e]},k=function(t,e,n,r,o){for(;r<=n;){var i=r+Math.floor((n-r)/2),a=H(t,i,e).offset;if(a===o)return i;a<o?r=i+1:a>o&&(n=i-1)}return r>0?r-1:0},E=function(t,e,n,r){for(var o=t.itemCount,i=1;n<o&&H(t,n,e).offset<r;)n+=i,i*=2;return k(t,e,Math.min(n,o-1),Math.floor(n/2),r)},A=function(t,e){var n=t.itemCount,r=e.itemMetadataMap,o=e.estimatedItemSize,i=e.lastMeasuredIndex,a=0;if(i>=n&&(i=n-1),i>=0){var s=r[i];a=s.offset+s.size}return a+(n-i-1)*o},U=v({getItemOffset:function(t,e,n){return H(t,e,n).offset},getItemSize:function(t,e,n){return n.itemMetadataMap[e].size},getEstimatedTotalSize:A,getOffsetForIndexAndAlignment:function(t,e,n,r,o){var i=t.direction,a=t.height,s=t.layout,l=t.width,c="horizontal"===i||"horizontal"===s?l:a,u=H(t,e,o),f=A(t,o),d=Math.max(0,Math.min(f-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===n&&(n=r>=h-c&&r<=d+c?"auto":"center"),n){case"start":return d;case"end":return h;case"center":return Math.round(h+(d-h)/2);case"auto":default:return r>=h&&r<=d?r:r<h?h:d}},getStartIndexForOffset:function(t,e,n){return function(t,e,n){var r=e.itemMetadataMap,o=e.lastMeasuredIndex;return(o>0?r[o].offset:0)>=n?k(t,e,o,0,n):E(t,e,Math.max(0,o),n)}(t,n,e)},getStopIndexForStartIndex:function(t,e,n,r){for(var o=t.direction,i=t.height,a=t.itemCount,s=t.layout,l=t.width,c="horizontal"===o||"horizontal"===s?l:i,u=H(t,e,r),f=n+c,d=u.offset+u.size,h=e;h<a-1&&d<f;)d+=H(t,++h,r).size;return h},initInstanceProps:function(t,e){var n={itemMetadataMap:{},estimatedItemSize:t.estimatedItemSize||50,lastMeasuredIndex:-1};return e.resetAfterIndex=function(t,r){void 0===r&&(r=!0),n.lastMeasuredIndex=Math.min(n.lastMeasuredIndex,t-1),e._getItemStyleCache(-1),r&&e.forceUpdate()},n},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}});function q(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}function N(t,e){for(var n in t)if(!(n in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1}function V(t,e){var n=t.style,r=q(t,["style"]),o=e.style,i=q(e,["style"]);return!N(n,o)&&!N(r,i)}t.DynamicSizeList=_,t.FixedSizeGrid=y,t.FixedSizeList=R,t.VariableSizeGrid=L,t.VariableSizeList=U,t.areEqual=V,t.shouldComponentUpdate=function(t,e){return!V(this.props,t)||N(this.state,e)},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index-prod.umd.js.map
