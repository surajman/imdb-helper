(this["webpackJsonpimdb-helper"]=this["webpackJsonpimdb-helper"]||[]).push([[0],{47:function(e,t,a){e.exports=a(79)},52:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),o=(a(52),a(53),a(17)),l=a(23),u=a(24),s=a(27),d=a(25),m=a(18),v=a(26),p=(a(58),a(59),function(e){var t=e.movie,a=t.Title,n=t.Year,c=t.Type,i=t.Poster;return r.a.createElement("div",{className:"category"},r.a.createElement("div",{className:"imageDetails"},r.a.createElement("img",{src:i,alt:a,className:"movieImage"})),r.a.createElement("div",{className:"movieDetails"},r.a.createElement("div",{className:"movieName",title:a},a),r.a.createElement("div",{className:"movieYear",title:n},"Released in ",n),r.a.createElement("div",null,"Category: ",c)))}),E=a(16),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={searchValue:""},a.changeSearchValue=a.changeSearchValue.bind(Object(m.a)(a)),a.onSearchMovie=a.onSearchMovie.bind(Object(m.a)(a)),a.navigateToDetail=a.navigateToDetail.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"changeSearchValue",value:function(e){this.setState({searchValue:e.target.value})}},{key:"onSearchMovie",value:function(){this.state.searchValue&&this.props.searchMovie(this.state.searchValue)}},{key:"navigateToDetail",value:function(e){console.log(e)}},{key:"componentDidMount",value:function(){this.props.searchMovie("test")}},{key:"render",value:function(){var e=this.props.moviesData,t=e.allMovies&&e.allMovies.length;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"searchBox"},r.a.createElement("input",{placeholder:"Enter Movie Name",onChange:this.changeSearchValue,className:"inputBox"}),r.a.createElement("button",{onClick:this.onSearchMovie,disabled:!this.state.searchValue,className:"searchButton"},"Search"),e.loading&&!e.error?r.a.createElement("div",null,"loading"):null),r.a.createElement(E.a,null,r.a.createElement(E.b,{to:"/movie-detail/abc"},"navigate")),t?r.a.createElement("div",{className:"listContainer"},r.a.createElement(E.a,null,e.allMovies.map((function(e){return r.a.createElement(E.b,{to:"/movie-detail/".concat(e.imdbID),key:e.imdbID},r.a.createElement(p,{movie:e}))})))):null)}}]),t}(n.Component),h="FETCH_MOVIES_REQUEST",b="SEARCH_MOVIES_REQUEST",O="FETCH_MOVIES_DETAIL_REQUEST",S=function(e){return{type:"FETCH_MOVIES_SUCCESS",payload:e}},y=function(e){return{type:"SEARCH_MOVIES_SUCCESS",payload:e}},g=function(e){return{type:"FETCH_MOVIES_DETAIL_SUCCESS",payload:e}},M={fetchMovie:function(){return{type:h}},fetchMovieSuccess:S,fetchMovieError:function(e){return{type:"FETCH_MOVIES_FAILED",payload:e}},searchMovie:function(e){return{type:b,payload:e}}},w=Object(o.b)((function(e){return{moviesData:e.movieList}}),M)(f),D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params;this.props.fetchMovieDetail("".concat(e.id))}},{key:"render",value:function(){var e=this.props.selectedMovie;return r.a.createElement("div",null,e&&e.data?r.a.createElement("div",null,r.a.createElement("img",{src:e.data.Poster,alt:e.data.Title}),r.a.createElement("div",null,e.data.Title),r.a.createElement("div",null,"Year: ",e.data.Year),r.a.createElement("div",null,"Rated: ",e.data.Rated),r.a.createElement("div",null,"Released: ",e.data.Released),r.a.createElement("div",null,"Runtime: ",e.data.Runtime),r.a.createElement("div",null,"Genre: ",e.data.Genre),r.a.createElement("div",null,"Director: ",e.data.Director),r.a.createElement("div",null,"Writer: ",e.data.Writer),r.a.createElement("div",null,"Actors: ",e.data.Actors),r.a.createElement("div",null,"Plot: ",e.data.Plot),r.a.createElement("div",null,"Language: ",e.data.Language),r.a.createElement("div",null,"Country: ",e.data.Country),r.a.createElement("ul",null,"Ratings: ",e.data.Ratings&&e.data.Ratings.map((function(e){return r.a.createElement("li",{key:e.Source},e.Source," : ",e.Value)}))),r.a.createElement("div",null,"Metascore: ",e.data.Metascore),r.a.createElement("div",null,"imdbRating: ",e.data.imdbRating),r.a.createElement("div",null,"imdbVotes: ",e.data.imdbVotes),r.a.createElement("div",null,"imdbID: ",e.data.imdbID),r.a.createElement("div",null,"Type: ",e.data.Type),r.a.createElement("div",null,"DVD: ",e.data.DVD),r.a.createElement("div",null,"BoxOffice: ",e.data.BoxOffice),r.a.createElement("div",null,"Production: ",e.data.Production),r.a.createElement("div",null,"Website: ",e.data.Website),r.a.createElement("div",null,"Response: ",e.data.Response)):null,e.error?r.a.createElement("div",null,"Something Went Wrong"):null,e.loading?r.a.createElement("div",null,"Loading"):null)}}]),t}(n.Component),j={fetchMovieDetail:function(e){return{type:O,payload:e}},fetchMovieDetailSuccess:g,fetchMovieDetailError:function(e){return{type:"FETCH_MOVIES_DETAIL_FAILED",payload:e}}},C=Object(o.b)((function(e){return{selectedMovie:e.movieList.selectedMovie}}),j)(D),_=a(14);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/movie-list"},r.a.createElement(w,null)),r.a.createElement(_.a,{path:"/movie-detail/:id",component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(12),T=a(45);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(T.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R={allMovies:null,error:null,loading:null,selectedMovie:{data:null,error:null,loading:null}},A=Object(I.c)({movieList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:case"FETCH_MOVIES_LOADING":return V({},R,{loading:!0});case"FETCH_MOVIES_SUCCESS":return V({},R,{allMovies:t.payload});case"FETCH_MOVIES_FAILED":return V({},R,{error:t.error});case"SEARCH_MOVIES_SUCCESS":return V({},R,{allMovies:t.payload.Search});case O:return V({},R,{selectedMovie:V({},R.selectedMovie,{loading:!0})});case"FETCH_MOVIES_DETAIL_SUCCESS":return V({},R,{selectedMovie:V({},R.selectedMovie,{data:t.payload})});case"FETCH_MOVIES_DETAIL_FAILED":return V({},R,{error:t.error});default:return e}}}),L=a(46),F=a(5),N=a.n(F),H=a(15),P=a(28),U=a.n(P),W=N.a.mark(G),B=N.a.mark(Q),Y=N.a.mark(J);function G(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("http://www.omdbapi.com/?t=galaxy&apikey=9075f344").then((function(e){return e.data})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),W)}function Q(e){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.get("http://www.omdbapi.com/?apikey=9075f344&s=".concat(e)).then((function(e){return e.data})).catch((function(e){return e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),B)}function J(e){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.get("http://www.omdbapi.com/?apikey=9075f344&i=".concat(e)).then((function(e){return e.data})).catch((function(e){return e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),Y)}var $=N.a.mark(te),q=N.a.mark(ae),z=N.a.mark(ne),K=N.a.mark(re),X=N.a.mark(ce),Z=N.a.mark(ie),ee=N.a.mark(oe);function te(){var e;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:return e=t.sent,t.next=5,Object(H.b)(S(e.Title));case 5:case"end":return t.stop()}}),$)}function ae(e){var t;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,J(e.payload);case 2:return t=a.sent,a.next=5,Object(H.b)(g(t));case 5:case"end":return a.stop()}}),q)}function ne(e){var t;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Q(e.payload);case 2:return t=a.sent,a.next=5,Object(H.b)(y(t));case 5:case"end":return a.stop()}}),z)}function re(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.c)(h,te);case 2:case"end":return e.stop()}}),K)}function ce(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.c)(b,ne);case 2:case"end":return e.stop()}}),X)}function ie(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.c)(O,ae);case 2:case"end":return e.stop()}}),Z)}function oe(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([re(),ce(),ie()]);case 2:case"end":return e.stop()}}),ee)}var le=Object(L.a)(),ue=Object(I.e)(A,Object(I.a)(le));le.run(oe),i.a.render(r.a.createElement(o.a,{store:ue},r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.e4c19e09.chunk.js.map