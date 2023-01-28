var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function p(t){$=t}function h(){if(!$)throw new Error("Function called outside component initialization");return $}function y(t){h().$$.on_mount.push(t)}function v(){const t=h();return(e,n,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,o,e),s}(e,n,{cancelable:o});return s.slice().forEach((e=>{e.call(t,i)})),!i.defaultPrevented}return!0}}const g=[],x=[],b=[],w=[],_=Promise.resolve();let V=!1;function E(t){b.push(t)}function k(t){w.push(t)}const C=new Set;let j=0;function z(){const t=$;do{for(;j<g.length;){const t=g[j];j++,p(t),A(t.$$)}for(p(null),g.length=0,j=0;x.length;)x.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];C.has(e)||(C.add(e),e())}b.length=0}while(g.length);for(;w.length;)w.pop()();V=!1,C.clear(),p(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const N=new Set;function S(t,e){t&&t.i&&(N.delete(t),t.i(e))}function L(t,e,n,o){if(t&&t.o){if(N.has(t))return;N.add(t),undefined.c.push((()=>{N.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function M(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function O(t){t&&t.c()}function P(t,n,i,c){const{fragment:r,after_update:a}=t.$$;r&&r.m(n,i),c||E((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(E)}function R(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(g.push(t),V||(V=!0,_.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(e,s,i,c,r,l,u,d=[-1]){const f=$;p(e);const m=e.$$={fragment:null,ctx:[],props:l,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||f.$$.root};u&&u(m.root);let h=!1;if(m.ctx=i?i(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return m.ctx&&r(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),h&&q(e,t)),n})):[],m.update(),h=!0,o(m.before_update),m.fragment=!!c&&c(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();s.intro&&S(e.$$.fragment),P(e,s.target,s.anchor,s.customElement),z()}p(f)}class Y{$destroy(){R(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(e){let n,o,s,i;return{c(){n=l("div"),o=l("div"),o.textContent=`${I}`,s=d(),i=l("div"),i.textContent="status",f(o,"class","name svelte-1mk4j0v"),f(i,"class","status svelte-1mk4j0v"),f(n,"class","wrapper svelte-1mk4j0v")},m(t,e){r(t,n,e),c(n,o),c(n,s),c(n,i)},p:t,i:t,o:t,d(t){t&&a(n)}}}const I="Robot";class U extends Y{constructor(t){super(),T(this,t,null,B,i,{})}}function X(e){let n,o,s,i;return{c(){n=l("div"),o=l("input"),f(o,"class","slider svelte-13elacp"),f(o,"type","range"),f(o,"id",e[2]),f(o,"name",e[2]),f(o,"step",e[3]),f(o,"min",e[0]),f(o,"max",e[1]),f(n,"class","wrapper")},m(t,a){var l,u,d,f;r(t,n,a),c(n,o),e[8](o),s||(l=o,u="input",d=e[5],l.addEventListener(u,d,f),i=()=>l.removeEventListener(u,d,f),s=!0)},p(t,[e]){4&e&&f(o,"id",t[2]),4&e&&f(o,"name",t[2]),8&e&&f(o,"step",t[3]),1&e&&f(o,"min",t[0]),2&e&&f(o,"max",t[1])},i:t,o:t,d(t){t&&a(n),e[8](null),s=!1,i()}}}function F(t,e,n){let{value:o}=e,{min:s=-255}=e,{max:i=255}=e,{name:c}=e,{step:r=5}=e,{isVertical:a=!1}=e;const l=Math.floor((s+i)/2),u=v();let d;const f=t=>{t.target.value=String(l),n(6,o=l),u("interactionEnd")};return y((()=>{n(4,d.value=String(l),d),n(4,d.onmouseup=f,d),n(4,d.ontouchend=f,d),n(4,d.ontouchcancel=f,d),a&&(n(4,d.style.transform="rotate(-90deg) translateY(-90px)",d),n(4,d.style.transformOrigin="center",d),n(4,d.style.marginBottom="80px",d),n(4,d.style.display="inline",d))})),t.$$set=t=>{"value"in t&&n(6,o=t.value),"min"in t&&n(0,s=t.min),"max"in t&&n(1,i=t.max),"name"in t&&n(2,c=t.name),"step"in t&&n(3,r=t.step),"isVertical"in t&&n(7,a=t.isVertical)},[s,i,c,r,d,t=>{const e=t.target;u("moved"),n(6,o=Number(e.value))},o,a,function(t){x[t?"unshift":"push"]((()=>{d=t,n(4,d)}))}]}class H extends Y{constructor(t){super(),T(this,t,F,X,i,{value:6,min:0,max:1,name:2,step:3,isVertical:7})}}class W{constructor(){this.API_URL="192.168.4.1"}}class D extends W{constructor(){super(...arguments),this.isConnected=!1}start(t,e){this.ws=new WebSocket(`ws://${this.API_URL}/robot`),console.log("Start"),this.ws.onopen=()=>{this.isConnected=!0,t()},this.ws.onclose=t=>{this.isConnected=!1,e(t.reason)}}shutdown(){this.ws.close()}sendCommand(t,e){this.ws&&this.ws.send(`${t}:${e}`)}}class G{static get(t){return this.services.find((e=>e instanceof t))}}function J(t){let e;return{c(){e=l("div"),e.innerHTML='<div class="switch-to-horizontal-info-text">Rotate your phone to horizontal position</div>',f(e,"class","disabled-view svelte-2aizmy")},m(t,n){r(t,e,n)},d(t){t&&a(e)}}}function K(t){let e,n,o,s,i,$,p,h,y,v,g,b,w,_,V,E,C,j=t[1].yVelocity+"",z=t[1].xVelocity+"",A=!t[0]&&J();function N(e){t[6](e)}let q={name:"yVel"};function T(e){t[7](e)}void 0!==t[1].yVelocity&&(q.value=t[1].yVelocity),h=new H({props:q}),x.push((()=>M(h,"value",N))),h.$on("moved",t[3]),h.$on("interactionEnd",t[5]);let Y={name:"xVel",isVertical:!0};return void 0!==t[1].xVelocity&&(Y.value=t[1].xVelocity),b=new H({props:Y}),x.push((()=>M(b,"value",T))),b.$on("moved",t[2]),b.$on("interactionEnd",t[4]),{c(){A&&A.c(),e=d(),n=l("div"),o=l("div"),s=l("span"),i=l("div"),$=u(j),p=d(),O(h.$$.fragment),v=d(),g=l("span"),O(b.$$.fragment),_=d(),V=l("div"),E=u(z),f(i,"class","vel-indicator svelte-2aizmy"),f(s,"class","joy joy-y svelte-2aizmy"),f(V,"class","vel-indicator svelte-2aizmy"),f(g,"class","jay joy-x svelte-2aizmy"),f(o,"class","joysticks svelte-2aizmy"),f(n,"class","wrapper svelte-2aizmy")},m(t,a){A&&A.m(t,a),r(t,e,a),r(t,n,a),c(n,o),c(o,s),c(s,i),c(i,$),c(s,p),P(h,s,null),c(o,v),c(o,g),P(b,g,null),c(g,_),c(g,V),c(V,E),C=!0},p(t,[n]){t[0]?A&&(A.d(1),A=null):A||(A=J(),A.c(),A.m(e.parentNode,e)),(!C||2&n)&&j!==(j=t[1].yVelocity+"")&&m($,j);const o={};!y&&2&n&&(y=!0,o.value=t[1].yVelocity,k((()=>y=!1))),h.$set(o);const s={};!w&&2&n&&(w=!0,s.value=t[1].xVelocity,k((()=>w=!1))),b.$set(s),(!C||2&n)&&z!==(z=t[1].xVelocity+"")&&m(E,z)},i(t){C||(S(h.$$.fragment,t),S(b.$$.fragment,t),C=!0)},o(t){L(h.$$.fragment,t),L(b.$$.fragment,t),C=!1},d(t){A&&A.d(t),t&&a(e),t&&a(n),R(h),R(b)}}}function Q(t,e,n){const o=G.get(D);let s=!1;const i={xVelocity:0,yVelocity:0},c=()=>{},r=t=>{};var a;return y((()=>{n(0,s=window.matchMedia("(orientation: landscape)").matches),window.matchMedia("(orientation: landscape)").onchange=t=>n(0,s=t.matches),o.start(c,r)})),a=()=>{o.shutdown()},h().$$.on_destroy.push(a),[s,i,()=>{o.sendCommand("X",i.xVelocity)},()=>{o.sendCommand("Y",i.yVelocity)},()=>{o.sendCommand("X",0)},()=>{o.sendCommand("Y",0)},function(e){t.$$.not_equal(i.yVelocity,e)&&(i.yVelocity=e,n(1,i))},function(e){t.$$.not_equal(i.xVelocity,e)&&(i.xVelocity=e,n(1,i))}]}G.services=[new D];class Z extends Y{constructor(t){super(),T(this,t,Q,K,i,{})}}function tt(e){let n,o,s,i,u;return o=new U({}),i=new Z({}),{c(){n=l("main"),O(o.$$.fragment),s=d(),O(i.$$.fragment),f(n,"class","svelte-1ho5237")},m(t,e){r(t,n,e),P(o,n,null),c(n,s),P(i,n,null),u=!0},p:t,i(t){u||(S(o.$$.fragment,t),S(i.$$.fragment,t),u=!0)},o(t){L(o.$$.fragment,t),L(i.$$.fragment,t),u=!1},d(t){t&&a(n),R(o),R(i)}}}return new class extends Y{constructor(t){super(),T(this,t,null,tt,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map