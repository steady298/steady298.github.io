import{_ as u}from"./chunks/ArticleMetadata.79c38a9c.js";import{_ as y}from"./chunks/Badge.9da6d83c.js";import{_ as b,c as h,b as r,f as p,g as c,w as D,a as m,i as C,o,e as k,q as v}from"./app.411458b3.js";const N=JSON.parse('{"title":"\u4E2A\u4EBA\u5E38\u7528Docker\u547D\u4EE4","description":"","frontmatter":{"title":"\u4E2A\u4EBA\u5E38\u7528Docker\u547D\u4EE4","author":"\u67E5\u5C14\u65AF","date":"2022/10/01 22:33","isTop":true,"categories":["\u6742\u788E\u9006\u88AD\u53F2"],"tags":["Docker"]},"headers":[{"level":2,"title":"\u955C\u50CF\u76F8\u5173","slug":"\u955C\u50CF\u76F8\u5173","link":"#\u955C\u50CF\u76F8\u5173","children":[{"level":3,"title":"\u67E5\u770B\u672C\u5730\u955C\u50CF\u5217\u8868","slug":"\u67E5\u770B\u672C\u5730\u955C\u50CF\u5217\u8868","link":"#\u67E5\u770B\u672C\u5730\u955C\u50CF\u5217\u8868","children":[]},{"level":3,"title":"\u4ECE\u8BB0\u5F55\u4E2D\u5FC3\u67E5\u8BE2\u955C\u50CF","slug":"\u4ECE\u8BB0\u5F55\u4E2D\u5FC3\u67E5\u8BE2\u955C\u50CF","link":"#\u4ECE\u8BB0\u5F55\u4E2D\u5FC3\u67E5\u8BE2\u955C\u50CF","children":[]},{"level":3,"title":"\u4ECE\u8BB0\u5F55\u4E2D\u5FC3\u62C9\u53D6\u955C\u50CF\u5230\u672C\u5730","slug":"\u4ECE\u8BB0\u5F55\u4E2D\u5FC3\u62C9\u53D6\u955C\u50CF\u5230\u672C\u5730","link":"#\u4ECE\u8BB0\u5F55\u4E2D\u5FC3\u62C9\u53D6\u955C\u50CF\u5230\u672C\u5730","children":[]},{"level":3,"title":"\u5220\u9664\u672C\u5730\u955C\u50CF","slug":"\u5220\u9664\u672C\u5730\u955C\u50CF","link":"#\u5220\u9664\u672C\u5730\u955C\u50CF","children":[]},{"level":3,"title":"\u4ECE Dockerfile \u521B\u5EFA\u955C\u50CF","slug":"\u4ECE-dockerfile-\u521B\u5EFA\u955C\u50CF","link":"#\u4ECE-dockerfile-\u521B\u5EFA\u955C\u50CF","children":[]},{"level":3,"title":"\u5C06\u672C\u5730\u955C\u50CF\u5BFC\u51FA\u4E3A tar \u6587\u4EF6","slug":"\u5C06\u672C\u5730\u955C\u50CF\u5BFC\u51FA\u4E3A-tar-\u6587\u4EF6","link":"#\u5C06\u672C\u5730\u955C\u50CF\u5BFC\u51FA\u4E3A-tar-\u6587\u4EF6","children":[]},{"level":3,"title":"\u4ECE tar \u6587\u4EF6\u5BFC\u5165\u4E3A\u672C\u5730\u955C\u50CF","slug":"\u4ECE-tar-\u6587\u4EF6\u5BFC\u5165\u4E3A\u672C\u5730\u955C\u50CF","link":"#\u4ECE-tar-\u6587\u4EF6\u5BFC\u5165\u4E3A\u672C\u5730\u955C\u50CF","children":[]}]},{"level":2,"title":"\u5BB9\u5668\u76F8\u5173","slug":"\u5BB9\u5668\u76F8\u5173","link":"#\u5BB9\u5668\u76F8\u5173","children":[{"level":3,"title":"\u67E5\u770B\u5BB9\u5668\u5217\u8868","slug":"\u67E5\u770B\u5BB9\u5668\u5217\u8868","link":"#\u67E5\u770B\u5BB9\u5668\u5217\u8868","children":[]},{"level":3,"title":"\u521B\u5EFA\u5BB9\u5668\u5E76\u8FD0\u884C","slug":"\u521B\u5EFA\u5BB9\u5668\u5E76\u8FD0\u884C","link":"#\u521B\u5EFA\u5BB9\u5668\u5E76\u8FD0\u884C","children":[]},{"level":3,"title":"\u505C\u6B62\u5BB9\u5668","slug":"\u505C\u6B62\u5BB9\u5668","link":"#\u505C\u6B62\u5BB9\u5668","children":[]},{"level":3,"title":"\u542F\u52A8\u5BB9\u5668","slug":"\u542F\u52A8\u5BB9\u5668","link":"#\u542F\u52A8\u5BB9\u5668","children":[]},{"level":3,"title":"\u91CD\u542F\u5BB9\u5668","slug":"\u91CD\u542F\u5BB9\u5668","link":"#\u91CD\u542F\u5BB9\u5668","children":[]},{"level":3,"title":"\u5220\u9664\u5BB9\u5668","slug":"\u5220\u9664\u5BB9\u5668","link":"#\u5220\u9664\u5BB9\u5668","children":[]},{"level":3,"title":"\u8FDB\u5165\u5BB9\u5668\u5185\u90E8","slug":"\u8FDB\u5165\u5BB9\u5668\u5185\u90E8","link":"#\u8FDB\u5165\u5BB9\u5668\u5185\u90E8","children":[]},{"level":3,"title":"\u4ECE\u5BB9\u5668\u5185\u90E8\u9000\u51FA","slug":"\u4ECE\u5BB9\u5668\u5185\u90E8\u9000\u51FA","link":"#\u4ECE\u5BB9\u5668\u5185\u90E8\u9000\u51FA","children":[]},{"level":3,"title":"\u5411\u5BB9\u5668\u5185\u62F7\u8D1D\u6587\u4EF6","slug":"\u5411\u5BB9\u5668\u5185\u62F7\u8D1D\u6587\u4EF6","link":"#\u5411\u5BB9\u5668\u5185\u62F7\u8D1D\u6587\u4EF6","children":[]},{"level":3,"title":"\u5907\u4EFD\u5BB9\u5668\u4E3A\u672C\u5730\u955C\u50CF","slug":"\u5907\u4EFD\u5BB9\u5668\u4E3A\u672C\u5730\u955C\u50CF","link":"#\u5907\u4EFD\u5BB9\u5668\u4E3A\u672C\u5730\u955C\u50CF","children":[]},{"level":3,"title":"\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7","slug":"\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7","link":"#\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7","children":[]}]},{"level":2,"title":"\u7F51\u7EDC\u76F8\u5173","slug":"\u7F51\u7EDC\u76F8\u5173","link":"#\u7F51\u7EDC\u76F8\u5173","children":[{"level":3,"title":"\u67E5\u770B\u7F51\u7EDC\u5217\u8868","slug":"\u67E5\u770B\u7F51\u7EDC\u5217\u8868","link":"#\u67E5\u770B\u7F51\u7EDC\u5217\u8868","children":[]},{"level":3,"title":"\u521B\u5EFA bridge \u7F51\u7EDC","slug":"\u521B\u5EFA-bridge-\u7F51\u7EDC","link":"#\u521B\u5EFA-bridge-\u7F51\u7EDC","children":[]},{"level":3,"title":"\u5220\u9664\u7F51\u7EDC","slug":"\u5220\u9664\u7F51\u7EDC","link":"#\u5220\u9664\u7F51\u7EDC","children":[]}]},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6","link":"#\u5176\u4ED6","children":[{"level":3,"title":"\u67E5\u770B docker \u7248\u672C","slug":"\u67E5\u770B-docker-\u7248\u672C","link":"#\u67E5\u770B-docker-\u7248\u672C","children":[]}]}],"relativePath":"categories/fragments/2022/10/01/\u4E2A\u4EBA\u5E38\u7528Docker\u547D\u4EE4.md","lastUpdated":1665668592000}'),A={name:"categories/fragments/2022/10/01/\u4E2A\u4EBA\u5E38\u7528Docker\u547D\u4EE4.md"},F={id:"\u4E2A\u4EBA\u5E38\u7528docker\u547D\u4EE4",tabindex:"-1"},g=r("a",{class:"header-anchor",href:"#\u4E2A\u4EBA\u5E38\u7528docker\u547D\u4EE4","aria-hidden":"true"},"#",-1),B=m("",56);function f(s,E,_,w,x,I){const t=y,i=u,d=C("ClientOnly");return o(),h("div",null,[r("h1",F,[p("\u4E2A\u4EBA\u5E38\u7528Docker\u547D\u4EE4 "),c(t,{text:"\u6301\u7EED\u66F4\u65B0",type:"warning"}),p(),g]),c(d,null,{default:D(()=>{var a,n,l,e;return[((n=(a=s.$frontmatter)==null?void 0:a.aside)!=null?n:!0)&&((e=(l=s.$frontmatter)==null?void 0:l.showArticleMetadata)!=null?e:!0)?(o(),k(i,{key:0,article:s.$frontmatter},null,8,["article"])):v("",!0)]}),_:1}),B])}const V=b(A,[["render",f]]);export{N as __pageData,V as default};
