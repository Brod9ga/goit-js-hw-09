function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return c.Date.now()};function v(e,t,n){var a,i,r,o,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=a,r=i;return a=i=void 0,l=t,o=e.apply(r,n)}function x(e){return l=e,u=setTimeout(I,t),c?g(e):o}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function I(){var e=p();if(j(e))return S(e);u=setTimeout(I,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function S(e){return u=void 0,v&&a?g(e):(a=i=void 0,o)}function h(){var e=p(),n=j(e);if(a=arguments,i=this,f=e,n){if(void 0===u)return x(f);if(s)return u=setTimeout(I,t),g(f)}return void 0===u&&(u=setTimeout(I,t)),o}return t=b(t)||0,y(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,a=f=i=u=void 0},h.flush=function(){return void 0===u?o:S(p())},h}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=r.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:a,maxWait:t,trailing:i})};const g={form:document.querySelector(".feedback-form"),email:document.querySelector('input[name="email"]'),textarea:document.querySelector('textarea[name="message"]')},x=e(t)((()=>{const e={emailInput:g.email.value,textareaInput:g.textarea.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);g.email.addEventListener("input",x),g.textarea.addEventListener("input",x),g.form.addEventListener("submit",(function(e){e.preventDefault();const t=g.email.value,n=g.textarea.value,a={emailInput:t,textareaInput:n};g.email.value="",g.textarea.value="",localStorage.removeItem("feedback-form-state"),console.log(a)}));const j=localStorage.getItem("feedback-form-state");if(j){const{emailInput:e,textareaInput:t}=JSON.parse(j);g.email.value=e,g.textarea.value=t}
//# sourceMappingURL=03-feedback.8703acaa.js.map