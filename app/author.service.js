System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorService;
    return {
        setters:[],
        execute: function() {
            AuthorService = (function () {
                function AuthorService() {
                }
                AuthorService.prototype.getAuthors = function () {
                    return ["auth1", "auth2", "auth3"];
                };
                return AuthorService;
            }());
            exports_1("AuthorService", AuthorService);
        }
    }
});
//# sourceMappingURL=author.service.js.map