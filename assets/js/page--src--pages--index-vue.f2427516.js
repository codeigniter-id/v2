(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{384:function(t,a,s){},385:function(t,a,s){},386:function(t,a,s){},390:function(t,a,s){"use strict";var e=s(384);s.n(e).a},391:function(t,a,s){"use strict";var e=s(385);s.n(e).a},392:function(t,a,s){"use strict";var e=s(386);s.n(e).a},394:function(t,a,s){"use strict";s.r(a);var e=s(389),i=s(22),n=s(277),o=s.n(n),r={data:function(){return{members:null,github:i.b}},mounted:function(){var t=this;o.a.get("https://api.github.com/orgs/codeigniter-id/members").then(function(a){return t.members=a.data})}},c=(s(390),s(31)),l=Object(c.a)(r,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"columns is-multiline"},t._l(t.members,function(a){return s("div",{key:a.id,staticClass:"column is-6"},[s("article",{staticClass:"box media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48"},[s("img",{staticClass:"is-rounded",attrs:{src:a.avatar_url,alt:"Image"}})])]),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",{staticClass:"title is-6"},[t._v(t._s(a.login))]),s("br"),s("small",[s("a",{attrs:{href:a.html_url}},[s("i",{staticClass:"fab fa-github"}),t._v(" github\n              ")])])])])])])])}),0)},[],!1,null,"5005fad2",null).exports,d={data:function(){return{url:""}},mounted:function(){this.url=window.location.origin+"/v2"}},u=(s(391),s(1)),f=u.default.config.optionMergeStrategies.computed,g={posts:{edges:[{node:{id:"64d03705a0b0b89ad0f27baf3e3c5d2f",author:"Putera Kahfi",published:!0,date:"15 June 2019",title:"Pelatihan web codeigniter di jepara",description:"Pelatihan pemrograman berbasis web dengan framework codeigniter",category:"event",path:"/content/event/2019/jepara-pelatihan-codeigniter",cover_image:"https://scontent.fsoc1-1.fna.fbcdn.net/v/t1.0-9/64404843_1722593244541302_4020209283068067840_n.jpg?_nc_cat=107&_nc_ht=scontent.fsoc1-1.fna&oh=ba3dc4c9b5ae5707b8305e33670214a8&oe=5D84AFC3"}},{node:{id:"e8b3d42a96e385a3956ef921a96b7121",author:"Putera Kahfi",published:!0,date:"15 June 2019",title:"Rewrite Landingpage Codeigniter Indonesia",description:" Rewrite Landingpage Codeigniter Indonesia menggunakan gridsome",category:"info",path:"/content/blog/2019/rewrite-landingpage",cover_image:null}},{node:{id:"a6f44c562f673c155f04517a870183f1",author:"Putera Kahfi",published:!0,date:"13 May 2019",title:"Group Rules",description:"Rekan-rekan sekalian selamat datang di group __CodeIgniter Indonesia__ terbesar di facebook group page. ",category:"info",path:"/content/group-rules",cover_image:null}}]}},h=function(t){var a=t.options;a.__staticData?a.__staticData.data=g:(a.__staticData=u.default.observable({data:g}),a.computed=f({$static:function(){return a.__staticData.data}},a.computed))},m=Object(c.a)(d,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"columns is-multiline"},t._l(t.$static.posts.edges,function(a){return s("div",{key:a.node.id,staticClass:"column is-6"},[s("div",{staticClass:"card has-equal-height is-marginless"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media has-margin-bottom-10"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"subtitle is-7"},[s("span",{staticClass:"tag is-info"},[t._v(t._s(a.node.category))])]),s("p",{staticClass:"title is-4 has-margin-bottom-30"},[s("g-link",{staticClass:"has-text-grey-darker",attrs:{to:a.node.path}},[t._v(t._s(a.node.title))])],1),s("p",{staticClass:"subtitle is-7 has-text-grey-darker has-margin-bottom-5 has-text-weight-semibold\t"},[t._v("Tanggal Posting : "+t._s(a.node.date))])])]),s("div",{staticClass:"content has-text-grey-darker has-margin-bottom-10 is-family-secondary\t"},[t._v(t._s(a.node.description))]),t._m(0,!0),s("social-sharing",{attrs:{url:t.url+a.node.path},inlineTemplate:{render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("network",{staticClass:"button is-white is-marginless has-padding-left-5",attrs:{network:"facebook"}},[a("i",{staticClass:"fab fa-facebook"})]),a("network",{staticClass:"button is-white",attrs:{network:"linkedin"}},[a("i",{staticClass:"fab fa-linkedin"})]),a("network",{staticClass:"button is-white",attrs:{network:"twitter"}},[a("i",{staticClass:"fab fa-twitter"})]),a("network",{staticClass:"button is-white",attrs:{network:"whatsapp"}},[a("i",{staticClass:"fab fa-whatsapp"})]),a("network",{staticClass:"button is-white",attrs:{network:"telegram"}},[a("i",{staticClass:"fab fa-telegram"})])],1)},staticRenderFns:[]}})],1)])])}),0)},[function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"has-padding-top-15 is-size-7"},[a("i",{staticClass:"fas fa-share"}),this._v("\n          Share:\n        ")])}],!1,null,"72ff5dec",null);"function"==typeof h&&h(m);var b={data:function(){return{download:e.a}},metaInfo:{title:"Codeigniter Indonesia Community",siteName:""},components:{Contributors:l,LatestPosting:m.exports},mounted:function(){this.$snackbar.open("Default, positioned bottom-right with a green 'OK' button")}},p=(s(392),Object(c.a)(b,function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-5"},[a("img",{attrs:{src:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/12803255_10206961661254942_8404149022163356260_n.jpg?_nc_cat=103&_nc_ht=scontent-sin6-1.xx&oh=3dc359e980ba816255f2653aa81ee487&oe=5DC71CD8",alt:""}}),a("h1",{staticClass:"title is-3 has-margin-bottom-20"},[this._v("Codeigniter Indonesia")]),a("p",{staticClass:"is-size-6 is-family-secondary\t"},[this._v("\n        Codeigniter Indonesia merupakan wadah tempat berkumpulnya pengguna Codeigniter Framework khususnya di Indonesia\n        Codeigniter sendiri merupakan php Framework MVC yang bersifat free dan opensource\n      ")]),a("br"),a("div",{staticClass:"buttons"},[a("a",{staticClass:"button is-info",attrs:{href:"https://github.com/bcit-ci/CodeIgniter/archive/3.1.10.zip"}},[a("span",{staticClass:"icon"},[a("font-awesome",{attrs:{icon:this.download}})],1),a("span",[this._v("Download")])]),a("a",{staticClass:"button is-success",attrs:{href:"https://www.codeigniter.com/docs",target:"_blank"}},[a("span",[this._v("Dokumentasi")])])]),a("b-tabs",{attrs:{type:"is-boxed"}},[a("b-tab-item",[a("template",{slot:"header"},[a("b-icon",{attrs:{icon:"fas fa-code-branch is-marginless "}}),a("span",[this._v("Github Feed")])],1),a("github-feed",{attrs:{login:"codeigniter-id"}})],2),a("b-tab-item",[a("template",{slot:"header"},[a("b-icon",{attrs:{icon:"fas fa-users"}}),a("span",[this._v("Kontributor")])],1),a("Contributors")],2)],1)],1),a("div",{staticClass:"column is-7"},[a("LatestPosting")],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"})])])},[],!1,null,null,null));a.default=p.exports}}]);