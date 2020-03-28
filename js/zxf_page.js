(function($) {
    var zp = {
        init: function(obj, pageinit) {
            return (function() {
                zp.addhtml(obj, pageinit);
                zp.bindEvent(obj, pageinit);
            } ());
        },
        addhtml: function(obj, pageinit) {
            return (function() {
                obj.empty();
                if (pageinit.current > 1) {
                    obj.append('<a href="javascript:;" class="prebtn"><</a>');
                } else {
                    obj.remove('.prevPage');
                    obj.append('<a class="disabled"><</a>');
                }
                /*
                if (pageinit.current > 4 && pageinit.pageNum > 4) {
                    obj.append('<a href="javascript:;" class="zxfPagenum">' + 1 + '</a>');
                    obj.append('<a href="javascript:;" class="zxfPagenum">' + 2 + '</a>');
                    // obj.append('<span>...</span>');
                }
                */
                var start = pageinit.current - 3,
                        end = pageinit.current + 3;
                if (start < 1) {
                    end = end - start;
                }
                if (end > pageinit.pageNum ) {
                    start = start - end + pageinit.pageNum;
                }
                for (; start <= end; start++) {
                    if (start <= pageinit.pageNum && start >= 1) {
                        if (start == pageinit.current) {
                            obj.append('<a class="active">' + start + '</a>');
                        } else if (start == pageinit.current + 1) {
                            obj.append('<a href="javascript:;" class="zxfPagenum nextpage">' + start + '</a>');
                        } else {
                            obj.append('<a href="javascript:;" class="zxfPagenum">' + start + '</a>');
                        }
                    }
                }
                if (pageinit.current >= pageinit.pageNum) {
                    obj.remove('.nextbtn');
                    obj.append('<a class="disabled">></a>');
                } else {
                    obj.append('<a href="javascript:;" class="nextbtn">></a>');
                }
                // obj.append('<span>' + '共' + '<b>' + pageinit.pageNum + '</b>' + '页，' + '</span>');
                // obj.append('<span>' + '到第' + '<input type="number" class="zxfinput" value="5"/>' + '页' + '</span>');
                // obj.append('<span class="zxfokbtn">' + '确定' + '</span>');
            } ());
        },
        bindEvent: function(obj, pageinit) {
            return (function() {
                obj.on("click", "a.prebtn",
                    function() {
                        var cur = parseInt(obj.children("a.active").text());
                        var current = $.extend(pageinit, {
                            "current": cur - 1
                        });
                        zp.addhtml(obj, current);
                        if (typeof(pageinit.backfun) == "function") {
                            pageinit.backfun(current);
                        }
                    });
                obj.on("click", "a.zxfPagenum",
                    function() {
                        var cur = parseInt($(this).text());
                        var current = $.extend(pageinit, {
                            "current": cur
                        });
                        zp.addhtml(obj, current);
                        if (typeof(pageinit.backfun) == "function") {
                            pageinit.backfun(current);
                        }
                    });
                obj.on("click", "a.nextbtn",
                    function() {
                        var cur = parseInt(obj.children("a.active").text());
                        var current = $.extend(pageinit, {
                            "current": cur + 1
                        });
                        zp.addhtml(obj, current);
                        if (typeof(pageinit.backfun) == "function") {
                            pageinit.backfun(current);
                        }
                    });
                obj.on("click", "span.zxfokbtn",
                    function() {
                        var cur = parseInt($("input.zxfinput").val());
                        var current = $.extend(pageinit, {
                            "current": cur
                        });
                        zp.addhtml(obj, {
                            "current": cur,
                            "pageNum": pageinit.pageNum
                        });
                        if (typeof(pageinit.backfun) == "function") {
                            pageinit.backfun(current);
                        }
                    });
            } ());
        }
    }
    $.fn.createPage = function(options) {
        var pageinit = $.extend({
                pageNum: 10,
                current: 1,
                backfun: function() {}
            },
            options);
        zp.init(this, pageinit);
    }
} (jQuery));