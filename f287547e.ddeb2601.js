(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),o=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=o(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=o(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||y[b]||c;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=b;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<c;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return o}));var r=t(2),a=t(6),c=(t(0),t(101)),i={id:"wallet",title:"Wallet"},l={unversionedId:"features/wallet",id:"features/wallet",isDocsHomePage:!1,title:"Wallet",description:"One of the first features I like to design in any language is the Wallet.",source:"@site/docs/features/wallet.md",slug:"/features/wallet",permalink:"/incremental-game-template-website/docs/features/wallet",version:"current",sidebar:"docs",previous:{title:"Game States",permalink:"/incremental-game-template-website/docs/introduction/game-states"},next:{title:"Settings",permalink:"/incremental-game-template-website/docs/features/settings"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Implementation",id:"implementation",children:[{value:"Multipliers",id:"multipliers",children:[]},{value:"Saving and Loading",id:"saving-and-loading",children:[]},{value:"Events",id:"events",children:[]}]},{value:"See also",id:"see-also",children:[]}],s={rightToc:u};function o(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"One of the first features I like to design in any language is the ",Object(c.b)("inlineCode",{parentName:"p"},"Wallet"),".\nIts main purpose is to store and save currencies.\nIt should also be able to check if the player can afford something or not."),Object(c.b)("h2",{id:"requirements"},"Requirements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Store currencies"),Object(c.b)("li",{parentName:"ul"},"Select which currencies can be stored"),Object(c.b)("li",{parentName:"ul"},"Check if the player can afford something"),Object(c.b)("li",{parentName:"ul"},"Emit an event when currency is gained"),Object(c.b)("li",{parentName:"ul"},"Apply currency multipliers if applicable"),Object(c.b)("li",{parentName:"ul"},"Easily extendable with more currencies"),Object(c.b)("li",{parentName:"ul"},"Save & Load")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const wallet = new Wallet([CurrencyType.Money]);\n\nwallet.gainCurrency(new Currency(10, CurrencyType.Money));\nconsole.log(wallet.money); // 10\n\nwallet.setCurrencyMultiplier(2, CurrencyType.Money);\nwallet.gainCurrency(new Currency(10, CurrencyType.Money));\nconsole.log(wallet.money); // 30\nconsole.log(wallet.hasCurrency(new Currency(30, CurrencyType.Money))); // true\n\nlet couldAfford = wallet.payIfPossible(new Currency(31, CurrencyType.Money));\nconsole.log(couldAfford); // false\n\ncouldAfford = wallet.payIfPossible(new Currency(25, CurrencyType.Money));\nconsole.log(couldAfford); // true\n\nconsole.log(wallet.money); // 5\n")),Object(c.b)("h2",{id:"implementation"},"Implementation"),Object(c.b)("p",null,"To avoid making typos regarding currencies, we declare an enum ",Object(c.b)("inlineCode",{parentName:"p"},"CurrencyType")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/ig-template/features/wallet/CurrencyType.ts"',title:'"src/ig-template/features/wallet/CurrencyType.ts"'}),'export enum CurrencyType {\n    Money = "Money",\n    Secondary = "Secondary",\n}\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Currency")," then simply becomes"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/ig-template/features/wallet/Currency.ts"',title:'"src/ig-template/features/wallet/Currency.ts"'}),"export class Currency {\n    amount: number;\n    type: CurrencyType;\n\n    constructor(amount: number, type: CurrencyType) {\n        this.amount = amount;\n        this.type = type;\n    }\n\n    /**\n     * Whether or not this currency is valid. Your game can have different rules\n     */\n    public isValid(): boolean {\n        if (isNaN(this.amount)) {\n            return false;\n        }\n        return this.amount > 0;\n    }\n\n}\n")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Wallet")," has to deal with storing the currencies, and check if they are valid"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/ig-template/features/wallet/Wallet.ts"',title:'"src/ig-template/features/wallet/Wallet.ts"'}),"export class Wallet extends Feature {\n    private _currencies: Record<CurrencyType, number> = {} as Record<CurrencyType, number>\n    private _multipliers: Record<CurrencyType, number> = {} as Record<CurrencyType, number>\n    private _onCurrencyGain = new SimpleEventDispatcher<Currency>();\n    private readonly _supportedCurrencies: CurrencyType[];\n\n    /**\n     * Gain the specified currency and apply the global multiplier\n     */\n    public gainCurrency(currency: Currency): void {\n        currency.multiply(this.getCurrencyMultiplier(currency.type));\n\n        if (!currency.isValid() || !this.supportsCurrencyType(currency.type)) {\n            console.warn(`Could not add currency ${currency.toString()}`);\n            return;\n        }\n\n        this._onCurrencyGain.dispatch(currency);\n        this._currencies[currency.type] += currency.amount;\n    }\n\n    /**\n     * Return true if the currency is valid and the player has the specified amount.\n     */\n    public hasCurrency(currency: Currency): boolean {\n        if (!this.supportsCurrencyType(currency.type)) {\n            return false;\n        }\n        return this._currencies[currency.type] >= currency.amount;\n    }\n\n    /**\n     * Remove the currency amount from the specified currency.\n     * IMPORTANT: This method does not care if amounts go negative\n     * @param currency\n     */\n    public loseCurrency(currency: Currency): void {\n        if (!currency.isValid() || !this.supportsCurrencyType(currency.type)) {\n            console.warn(`Could not lose currency ${currency.toString()}`);\n            return;\n        }\n        this._currencies[currency.type] -= currency.amount;\n    }\n\n    /**\n     * Subtracts the specified currency and returns true if the wallet has enough.\n     * Otherwise return false and don't subtract anything\n     * @param currency\n     * @constructor\n     */\n    public payIfPossible(currency: Currency): boolean {\n        if (this.hasCurrency(currency)) {\n            this.loseCurrency(currency);\n            return true;\n        }\n        return false;\n    }\n\n}\n\n")),Object(c.b)("h3",{id:"multipliers"},"Multipliers"),Object(c.b)("p",null,"To avoid a dependency on ",Object(c.b)("inlineCode",{parentName:"p"},"App.game"),", the ",Object(c.b)("inlineCode",{parentName:"p"},"Wallet")," internally keeps track of a list of multipliers per ",Object(c.b)("inlineCode",{parentName:"p"},"CurrencyType"),".\nIf a ",Object(c.b)("inlineCode",{parentName:"p"},"Feature")," changes a multiplier (by for example buying an upgrade),\nit needs to trigger a recalculation by emitting the ",Object(c.b)("inlineCode",{parentName:"p"},"onCurrencyMultiplierChange")," event.\n",Object(c.b)("inlineCode",{parentName:"p"},"App.game")," will then recalculate this multiplier and update the ",Object(c.b)("inlineCode",{parentName:"p"},"Wallet"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/ig-template/features/wallet/Wallet.ts"',title:'"src/ig-template/features/wallet/Wallet.ts"'}),"export class Wallet extends Feature {\n    private _multipliers: Record<CurrencyType, number> = {} as Record<CurrencyType, number>\n\n    public getCurrencyMultiplier(type: CurrencyType) {\n        return this._multipliers[type] ?? 1;\n    }\n\n    public setCurrencyMultiplier(multiplier: number, type: CurrencyType) {\n        this._multipliers[type] = multiplier;\n    }\n}\n")),Object(c.b)("h3",{id:"saving-and-loading"},"Saving and Loading"),Object(c.b)("p",null,"Saving now becomes very straightforward. We only need to add each currency to the ",Object(c.b)("inlineCode",{parentName:"p"},"WalletSaveData"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// WalletSaveData.ts\nexport interface WalletSaveData extends SaveData {\n    money: number;\n    secondary: number;\n}\n\n// Wallet.ts\nexport class Wallet extends Feature {\n    public save(): WalletSaveData {\n        return {\n            money: this.currencies[CurrencyType.Money],\n            secondary: this.currencies[CurrencyType.Secondary],\n        }\n    }\n\n    public load(data: WalletSaveData): void {\n        this.currencies[CurrencyType.Money] = data.money ?? this.currencies[CurrencyType.Money];\n        this.currencies[CurrencyType.Secondary] = data.secondary ?? this.currencies[CurrencyType.Secondary];\n    }\n}\n")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"You might think that declaring the currencies 3 times just to save them is a bit excessive.\nIt is possible to simply return ",Object(c.b)("inlineCode",{parentName:"p"},"currencies")," and save that.\nThis does however leave you with a bit less control when modifying saves as TS can't tell which attributes exist.\nIt's up to you!"))),Object(c.b)("h3",{id:"events"},"Events"),Object(c.b)("h4",{id:"oncurrencygain"},"onCurrencyGain"),Object(c.b)("p",null,"Emitted whenever a currency is gained."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'App.game.features.wallet.onCurrencyGain.subscribe(currency => {\n    console.log("We gained", currency.amount, currency.type);\n});\n')),Object(c.b)("h2",{id:"see-also"},"See also"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/wallet"}),"src/ig-template/features/wallet"))))}o.isMDXComponent=!0}}]);