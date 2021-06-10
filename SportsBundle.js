define("Commponent/ch_EmptyView", ["react", "common", "router", "react.backbone"], function(n, t, i) {
    var r = n.createBackboneClass({
        changeOptions: "change:IsFav change:filterGV change:filterFast",
        ClickFav: function(n) {
            n.stopPropagation();
            this.getModel().set({
                IsFav: !this.getModel().get("IsFav")
            })
        },
        ClickGV: function(n) {
            n.stopPropagation();
            this.getModel().set({
                filterGV: !this.getModel().get("filterGV")
            })
        },
        goToSports: function(n, t) {
            console.log("id:" + n + " market:" + t);
            var r = "l";
            r = t == "l" ? "t" : "e";
            i.navigate("#Sports/s=" + n + "_0&d=" + r, {
                trigger: !0
            })
        },
        CancelFilter: function(n) {
            n.stopPropagation();
            this.getModel().set({
                IsFav: !1
            });
            this.getModel().set({
                filterGV: !1
            });
            this.getModel().set({
                filterFast: !1
            })
        },
        goEvent: function(n, t, i) {
            if (n == "c")
                this.getModel().set({
                    IsFav: !1
                }),
                this.getModel().set({
                    filterGV: !1
                }),
                this.getModel().set({
                    filterFast: !1
                });
            else {
                var r = "l";
                r = i == "l" ? "t" : "e";
                this.getModel().UpdateSync(null, !0)
            }
        },
        render: function() {
            var r = this.getModel().get("IsFav")
              , u = this.getModel().get("filterGV")
              , f = this.getModel().get("filterFast")
              , i = [];
            return r && i.push(n.createElement("span", {
                className: "text-highlight"
            }, t.LanguageHelper.Get("lbl_favorite"))),
            u && (i.length >= 1 && i.push(","),
            i.push(n.createElement("span", {
                className: "text-highlight"
            }, t.LanguageHelper.Get("lbl_Strm")))),
            f && (i.length >= 1 && i.push(","),
            i.push(n.createElement("span", {
                className: "text-highlight"
            }, t.LanguageHelper.Get("lbl_fastmarkets")))),
            n.createElement("div", {
                className: "empty " + (i.length <= 0 ? "empty-noEvent" : "empty-noFilter")
            }, n.createElement("div", {
                className: "empty_container"
            }, n.createElement("div", {
                className: "empty_content"
            }, n.createElement("div", {
                className: "empty_pic"
            }), n.createElement("div", {
                className: "empty_title"
            }, t.LanguageHelper.Get("lbl_NodataTitle")), n.createElement("div", {
                className: "empty_text"
            }, i.length <= 0 ? n.createElement("p", null, t.LanguageHelper.Get("NoGame")) : n.createElement("span", null, n.createElement("p", null, t.LanguageHelper.Get("empty_1")), n.createElement("p", null, t.LanguageHelper.Get("empty_2"), ":", i))))))
        }
    });
    return {
        NoLeague: r
    }
});
define("Commponent/ch_SportHeader", ["react", "common", "router", "accountModel", "FortuneGodModel", "FavoritesModel", "Commponent/FortuneGodIcon", "NumberGameTypeModel", "Happy5Constant", "Commponent/ConstantLeagueID", "ch_HeaderMenuModel", "MenuModel", "OddsModel", "ProductCollection", "ch_BetPanelModular", "Commponent/NumberGame/NumberGameTab", "Commponent/DetectNetwork", "Commponent/NonPeakPromoView", "react.backbone", "bootstrap.min", "touchswipe.min", "style!css!/swiper", "swiper.jquery"], function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b) {
    var k = function(n, i) {
        if (window._SiteMode == "2" && r.get("ActStatus") == 1)
            alert(t.LanguageHelper.Get("lbl_deposit"));
        else if (window._IsAPPLobby == !0) {
            var u = n;
            n == "keno" ? u = "#ThirdPartyGame/vid=1&gid=202&bid=1501" : n == "kenolottery" ? u = "#ThirdPartyGame/vid=28&gid=220&bid=1021" : n == "tablegame" && (u = "#ThirdPartyGame/vid=40&gid=222&bid=4901");
            window.location.href = "/#" + u
        } else
            require(["router"], function(r) {
                var f = ""
                  , u = {}
                  , e = "";
                switch (n.toLowerCase()) {
                case "exchange":
                    f = "ex1";
                    break;
                case "colossusbet":
                    n = "CB";
                    f = "cb";
                    break;
                case "keno":
                    n = "router";
                    f = "keno";
                    u.sport = "202";
                    u.routerkey = "#ThirdPartyGame/vid=1&gid=202&bid=1501";
                    e = t.LanguageHelper.Get("lbl_Keno");
                    break;
                case "kenolottery":
                    n = "router";
                    f = "kenolottery";
                    u.sport = "220";
                    u.routerkey = "#ThirdPartyGame/vid=28&gid=220&bid=1021";
                    e = t.LanguageHelper.Get("lbl_KenoLottery");
                    break;
                case "tablegame":
                    n = "router";
                    f = "tablegame";
                    u.sport = "222";
                    u.routerkey = "#ThirdPartyGame/vid=40&gid=222&bid=4901";
                    e = t.LanguageHelper.Get("lbl_TableGame");
                    break;
                case "virtualgame":
                    n = "ThirdParty";
                    f = "virtualgame";
                    u.vid = "10";
                    u.routerkey = "#ThirdPartyGame/vid=10";
                    e = t.LanguageHelper.Get("lbl_VirtualGames");
                    break;
                case "sabaclub":
                    n = "router";
                    f = "t1";
                    u.sport = "200";
                    u.routerkey = "#ThirdPartyGame/vid=42&gid=" + i;
                    e = t.LanguageHelper.Get("lbl_SabaClub");
                    break;
                case "vgaming":
                    n = "router";
                    f = "vgaming";
                    u.sport = "171";
                    u.routerkey = "#ThirdPartyGame/vid=66&gid=" + i;
                    e = t.LanguageHelper.Get("lbl_VGaming");
                    break;
                case "rngwar":
                    n = "router";
                    f = "RNGWar";
                    u.sport = "224";
                    u.routerkey = "#ThirdPartyGame/vid=50&gid=224";
                    e = t.LanguageHelper.Get("lbl_RNGWar")
                }
                r.OpenNewWindow(n, f, u, function() {
                    e && UmCallback(e)
                });
                $(".menu-product").removeClass("open")
            })
    }
      , ft = n.createBackboneClass({
        changeOptions: "change:IsMini change:IsShow",
        getInitialState: function() {
            return {
                IsClose: !1
            }
        },
        componentDidMount: function() {
            $(document).on("scroll", this.onScroll);
            u.on("change:IsMini change:IsShow", this.updateFortuneGod, this)
        },
        updateFortuneGod: function() {
            this.forceUpdate()
        },
        onScroll: function() {
            var n = this;
            if (window.scrollY <= 100) {
                this.setState({
                    IsClose: !1
                });
                return
            }
            !this.scrollTimer || !this.scrollY ? (this.scrollY = window.scrollY,
            this.scrollTimer = setTimeout(function() {
                n.scrollTimer = undefined;
                n.scrollY = undefined
            }, 1e3)) : $("div.content").innerHeight() - window.innerHeight - window.scrollY <= 100 ? this.setState({
                IsClose: !0
            }) : window.scrollY - this.scrollY > 50 ? this.setState({
                IsClose: !0
            }) : this.scrollY - window.scrollY > 50 && this.setState({
                IsClose: !1
            })
        },
        componentWillUnmount: function() {
            $(document).off("scroll", this.onScroll);
            u.off("change:IsMini change:IsShow", this.updateFortuneGod, this)
        },
        render: function() {
            return n.createElement("div", {
                className: "header",
                "data-status": this.state.IsClose ? "is-close" : "",
                "data-gof": u.get("IsShow") && u.get("IsMini") ? "show" : ""
            }, this.props.children)
        }
    })
      , g = n.createBackboneClass({
        mixins: [n.BackboneMixin("account", "change:BetCredit")],
        componentDidMount: function() {},
        componentWillUnmount: function() {},
        render: function() {
            var i = _skinPath && _skinPath == "cn88" ? t.trimDecimal(this.props.account.get("BetCredit")) : this.props.account.get("BetCredit")
              , r = window._EnableCurrencyDisplay == !0 ? this.props.account.get("Currency") + " " + i : i;
            return n.createElement("div", {
                className: "header_status"
            }, n.createElement("div", {
                className: "text-balance"
            }, r))
        }
    })
      , ui = n.createBackboneClass({
        getInitialState: function() {
            return {
                count: y.get("MixParlay"),
                IsAdd: !1
            }
        },
        componentDidMount: function() {
            y.on("change:MixParlay", this.ChkAdd, this)
        },
        componentWillUnmount: function() {
            y.off("change:MixParlay", this.ChkAdd, this)
        },
        ChkAdd: function() {
            var n = {
                count: y.get("MixParlay")
            };
            n.count > this.state.count && (n.IsAdd = !0);
            this.setState(n)
        },
        componentDidUpdate: function() {
            if (this.state.IsAdd)
                $(n.findDOMNode(this.refs.Parlaybadge)).one("animationend", function() {
                    this.setState({
                        IsAdd: !1
                    })
                }
                .bind(this))
        },
        render: function() {
            return n.createElement("div", {
                ref: "Parlaybadge",
                className: "badge " + (this.state.count > 0 ? "badge-new " : "") + (this.state.IsAdd ? "is-adding" : "")
            })
        }
    })
      , et = function() {
        $("#element").attr("data-status", "");
        i.navigate("lobby", {
            trigger: !0
        })
    }
      , ot = n.createClass({
        displayName: "ParlayHelp",
        componentDidMount: function() {
            $("#ContentScoll").css({
                position: "fixed"
            });
            $("#parlayHelp").attr({
                "data-status": "is-open"
            });
            var n = new Swiper(".parlayHelp__container",{
                speed: 500,
                pagination: ".parlayHelp__container .swiper-pagination",
                onSlideChangeStart: function(n) {
                    $(".parlayHelp__rect").attr("data-active", n.activeIndex)
                }
            })
        },
        closeParlayHelp: function() {
            $("#parlayHelp").removeAttr("data-status");
            $("#ContentScoll").css({
                position: ""
            });
            n.unmountComponentAtNode($("#parlayHelp")[0])
        },
        render: function() {
            var i = window._EnableImageServer ? window.siteSetting.CDNUrl ? window.siteSetting.CDNUrl : "https://mbi.nvxcdn.com" : "";
            return n.createElement("div", null, n.createElement("div", {
                className: "parlayHelp__rect parlayHelp__rect--1",
                "data-active": "0"
            }), n.createElement("div", {
                className: "parlayHelp__rect parlayHelp__rect--2",
                "data-active": "0"
            }), n.createElement("div", {
                className: "parlayHelp__close",
                onClick: this.closeParlayHelp
            }), n.createElement("div", {
                className: "parlayHelp__container swiper-container swiper-container-horizontal"
            }, n.createElement("div", {
                className: "swiper-wrapper"
            }, n.createElement("div", {
                className: "swiper-slide parlayHelp__step1 swiper-slide-active",
                style: {
                    width: "358px;"
                }
            }, n.createElement("div", {
                className: "parlayHelp__step-wrap"
            }, n.createElement("div", {
                className: "parlayHelp__chat"
            }, n.createElement("div", {
                className: "parlayHelp__chat-round"
            }, n.createElement("span", {
                className: "parlayHelp__badge"
            }, "Q"), n.createElement("div", {
                className: "parlayHelp__chat-round-text",
                "data-parlay-key": "lbl_PIntro_WhatsP",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_WhatsP")
                }
            })), n.createElement("img", {
                src: i + "/Content/public/Common/parlayHelp_papa-1.png",
                width: "131",
                alt: ""
            })), n.createElement("div", {
                className: "parlayHelp__description"
            }, n.createElement("div", {
                className: "parlayHelp__badge"
            }, "A"), n.createElement("div", {
                "data-parlay-key": "lbl_PIntro_Parlayis",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_Parlayis")
                }
            }), n.createElement("div", {
                className: "parlayHelp__bubble",
                "data-parlay-key": "lbl_PIntro_LargerPayout",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_LargerPayout")
                }
            })))), n.createElement("div", {
                className: "swiper-slide parlayHelp__step2 swiper-slide-next",
                style: {
                    width: "358px;"
                }
            }, n.createElement("div", {
                className: "parlayHelp__step-wrap"
            }, n.createElement("div", {
                className: "parlayHelp__chat"
            }, n.createElement("img", {
                src: i + "/Content/public/Common/parlayHelp_papa-2.png",
                width: "73",
                alt: ""
            }), n.createElement("div", {
                className: "parlayHelp__chat-capsule"
            }, n.createElement("div", {
                className: "parlayHelp__chat-capsule-text",
                "data-parlay-key": "lbl_PIntro_Example",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_Example")
                }
            }))), n.createElement("div", {
                className: "parlayHelp__img"
            }, n.createElement("img", {
                "data-parlay-img": "2",
                src: i + "/Content/public/Common/" + t.CasinoLangPath(r.get("Language")) + "/parlayHelp_step2.png",
                width: "273",
                alt: ""
            })), n.createElement("div", {
                className: "parlayHelp__description"
            }, n.createElement("div", {
                "data-parlay-key": "odds"
            }, t.LanguageHelper.Get("lbl_odds"), ": 5.00 x 5.00 x 5.00=", n.createElement("span", {
                className: "parlayHelp__text-red"
            }, "125.00")), n.createElement("div", {
                "data-parlay-key": "bet"
            }, t.LanguageHelper.Get("lbl_Bet_1"), ":", n.createElement("span", {
                className: "parlayHelp__text-red"
            }, "100")), n.createElement("div", {
                className: "parlayHelp__promo"
            }, n.createElement("div", {
                className: "parlayHelp__bg-red"
            }, n.createElement("small", {
                "data-parlay-key": "lbl_PIntro_ExampleWin",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_ExampleWin")
                }
            }), n.createElement("span", null, "$ 12,500.00")), n.createElement("div", {
                className: "parlayHelp__promo-text",
                "data-parlay-key": "lbl_PIntro_HighlyValued",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_HighlyValued")
                }
            }))))), n.createElement("div", {
                className: "swiper-slide parlayHelp__step3",
                style: {
                    width: "358px;"
                }
            }, n.createElement("div", {
                className: "parlayHelp__step-wrap"
            }, n.createElement("div", {
                className: "parlayHelp__chat"
            }, n.createElement("img", {
                src: i + "/Content/public/Common/parlayHelp_papa-3.png",
                width: "75",
                alt: ""
            }), n.createElement("div", {
                className: "parlayHelp__chat-capsule"
            }, n.createElement("div", {
                className: "parlayHelp__chat-capsule-text",
                "data-parlay-key": "lbl_PIntro_HowsP",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_HowsP")
                }
            }))), n.createElement("div", {
                className: "parlayHelp__img"
            }, n.createElement("img", {
                "data-parlay-img": "3",
                src: i + "/Content/public/Common/" + t.CasinoLangPath(r.get("Language")) + "/parlayHelp_step3.png",
                width: "273",
                alt: ""
            }), n.createElement("div", {
                className: "parlayHelp__bubble",
                "data-parlay-key": "lbl_PIntro_LearnP",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_LearnP")
                }
            })), n.createElement("div", {
                className: "parlayHelp__description"
            }, n.createElement("div", {
                className: "parlayHelp__description-title"
            }, n.createElement("span", {
                className: "parlayHelp__badge"
            }, "1"), n.createElement("strong", {
                "data-parlay-key": "lbl_PIntro_ChooseEvent",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_ChooseEvent")
                }
            })), n.createElement("div", {
                className: "parlayHelp__description-text",
                "data-parlay-key": "lbl_PIntro_SelectThree",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_SelectThree")
                }
            })))), n.createElement("div", {
                className: "swiper-slide parlayHelp__step4",
                style: {
                    width: "358px;"
                }
            }, n.createElement("div", {
                className: "parlayHelp__step-wrap"
            }, n.createElement("div", {
                className: "parlayHelp__chat"
            }, n.createElement("img", {
                src: i + "/Content/public/Common/parlayHelp_papa-4.png",
                width: "75",
                alt: ""
            }), n.createElement("div", {
                className: "parlayHelp__chat-capsule"
            }, n.createElement("div", {
                className: "parlayHelp__chat-capsule-text",
                "data-parlay-key": "lbl_PIntro_ClickCart",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_ClickCart")
                }
            }))), n.createElement("div", {
                className: "parlayHelp__img"
            }, n.createElement("img", {
                "data-parlay-img": "4",
                src: i + "/Content/public/Common/" + t.CasinoLangPath(r.get("Language")) + "/parlayHelp_step4.png",
                width: "273",
                alt: ""
            })), n.createElement("div", {
                className: "parlayHelp__description"
            }, n.createElement("div", {
                className: "parlayHelp__description-title"
            }, n.createElement("span", {
                className: "parlayHelp__badge"
            }, "2"), n.createElement("strong", {
                "data-parlay-key": "lbl_PIntro_OpenBetslip",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_OpenBetslip")
                }
            })), n.createElement("div", {
                className: "parlayHelp__description-text",
                "data-parlay-key": "lbl_PIntro_CartPrompt",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_CartPrompt")
                }
            })))), n.createElement("div", {
                className: "swiper-slide parlayHelp__step5",
                style: {
                    width: "358px;"
                }
            }, n.createElement("div", {
                className: "parlayHelp__step-wrap"
            }, n.createElement("div", {
                className: "parlayHelp__img"
            }, n.createElement("img", {
                "data-parlay-img": "5",
                src: i + "/Content/public/Common/" + t.CasinoLangPath(r.get("Language")) + "/parlayHelp_step5.png",
                width: "273",
                alt: ""
            })), n.createElement("div", {
                className: "parlayHelp__description"
            }, n.createElement("div", {
                className: "parlayHelp__description-title"
            }, n.createElement("span", {
                className: "parlayHelp__badge"
            }, "3"), n.createElement("strong", {
                "data-parlay-key": "lbl_PIntro_ConfirmMatch",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_ConfirmMatch")
                }
            })), n.createElement("div", {
                className: "parlayHelp__description-text",
                "data-parlay-key": "lbl_PIntro_ConfirmStatus",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_ConfirmStatus")
                }
            })))), n.createElement("div", {
                className: "swiper-slide parlayHelp__step6",
                style: {
                    width: "358px;"
                }
            }, n.createElement("div", {
                className: "parlayHelp__step-wrap"
            }, n.createElement("div", {
                className: "parlayHelp__img"
            }, n.createElement("img", {
                "data-parlay-img": "6",
                src: i + "/Content/public/Common/" + t.CasinoLangPath(r.get("Language")) + "/parlayHelp_step6.png",
                width: "273",
                alt: ""
            })), n.createElement("div", {
                className: "parlayHelp__description"
            }, n.createElement("div", {
                className: "parlayHelp__description-title"
            }, n.createElement("span", {
                className: "parlayHelp__badge"
            }, "4"), n.createElement("strong", {
                "data-parlay-key": "lbl_PIntro_SelectParlay",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_SelectParlay")
                }
            })), n.createElement("div", {
                className: "parlayHelp__description-text"
            }, n.createElement("div", {
                "data-parlay-key": "lbl_PIntro_SelectPType",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_SelectPType")
                }
            }), n.createElement("div", {
                "data-parlay-key": "lbl_PIntro_EnterStake",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_EnterStake")
                }
            }), n.createElement("div", {
                "data-parlay-key": "lbl_PIntro_ClickBet",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_ClickBet")
                }
            }))), n.createElement("div", {
                className: "parlayHelp__link"
            }))), n.createElement("div", {
                className: "swiper-slide parlayHelp__step7",
                style: {
                    width: "358px;"
                }
            }, n.createElement("div", {
                className: "parlayHelp__step-wrap"
            }, n.createElement("div", {
                className: "parlayHelp__img"
            }, n.createElement("img", {
                "data-parlay-img": "7",
                src: i + "/Content/public/Common/" + t.CasinoLangPath(r.get("Language")) + "/parlayHelp_step7.png",
                width: "273",
                alt: ""
            })), n.createElement("div", {
                className: "parlayHelp__description"
            }, n.createElement("div", {
                className: "parlayHelp__description-title"
            }, n.createElement("span", {
                className: "parlayHelp__badge"
            }, "5"), n.createElement("strong", {
                "data-parlay-key": "lbl_PIntro_AddParlay",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_AddParlay")
                }
            })), n.createElement("div", {
                className: "parlayHelp__description-text",
                "data-parlay-key": "lbl_PIntro_BetslipAddP",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_PIntro_BetslipAddP")
                }
            }))))), n.createElement("div", {
                className: "swiper-pagination swiper-pagination-bullets"
            }, n.createElement("span", {
                className: "swiper-pagination-bullet swiper-pagination-bullet-active"
            }), n.createElement("span", {
                className: "swiper-pagination-bullet"
            }), n.createElement("span", {
                className: "swiper-pagination-bullet"
            }), n.createElement("span", {
                className: "swiper-pagination-bullet"
            }), n.createElement("span", {
                className: "swiper-pagination-bullet"
            }), n.createElement("span", {
                className: "swiper-pagination-bullet"
            }), n.createElement("span", {
                className: "swiper-pagination-bullet"
            }))))
        }
    })
      , st = n.createBackboneClass({
        getInitialState: function() {
            return {
                right: !1,
                showBadge: window._SiteMode == 2 && (t.Utility.Storage.get("sh") != 1 || window._EnableEuroView && t.Utility.Storage.get("sheuro") != 1),
                isProductMenuOpen: !1,
                isLiveCasinoOpen: !1,
                showParlayTech: !1,
                showParlayToolTip: !1
            }
        },
        componentDidUpdate: function() {
            this.GetScrollState()
        },
        componentDidMount: function() {
            var t = $(n.findDOMNode(this.refs.scrolltab));
            t.on("scroll", this.GetScrollState);
            this.GetScrollState();
            $(document).on("scroll", this.onScroll);
            document.getElementById("TryEuroTip") && ($("#TryEuroTip").attr({
                "data-status": "is-open"
            }),
            setTimeout(function() {
                $("#TryEuroTip").removeAttr("data-status")
            }
            .bind(this), 8e3));
            this.setState({
                showParlayTech: this.getModel().get("GroupIndex") == 2
            });
            this.getModel().off("change:GroupIndex", this.SwitchParlayTeach).on("change:GroupIndex", this.SwitchParlayTeach);
            this.setParlayToolTipCounter()
        },
        SwitchParlayTeach: function() {
            this.setState({
                showParlayTech: this.getModel().get("GroupIndex") == 2
            })
        },
        GetScrollState: function() {
            var t = $(n.findDOMNode(this.refs.scrolltab))
              , r = t.length > 0 ? t[0].scrollWidth : 0
              , u = $(n.findDOMNode(this.refs.search))
              , f = $(n.findDOMNode(this.refs.LeftMenu))
              , e = t.scrollLeft()
              , o = $(n.findDOMNode(this.refs.content)).innerWidth() - u.innerWidth() - f.innerWidth()
              , i = {
                right: !1
            };
            r - e > o && (i.right = !0);
            i.right != this.state.right && this.setState(i)
        },
        componentWillUnmount: function() {
            $(n.findDOMNode(this.refs.scrolltab)).off("scroll");
            $(document).off("scroll");
            this.getModel().off("change:GroupIndex", this.SwitchParlayTeach);
            this.parlayToolTipCounter && clearTimeout(this.parlayToolTipCounter)
        },
        onScroll: function() {
            this.state.isProductMenuOpen && this.triggerProductMenu(!1)
        },
        handleTab: function(n, t) {
            this.getModel().set({
                GroupIndex: n,
                ShowSub: !(n == 55)
            });
            typeof t == "boolean" && this.triggerProductMenu(t)
        },
        switchBetMode: function(n) {
            var t = this.getModel(), i, r;
            (this.setState({
                showParlayTech: n == 2
            }),
            t.get("GroupIndex") != n) && (i = t.get("SelectItem").get("sportid"),
            r = (i == 43 ? i + "-0" : i) + "_" + t.get("SelectItem").get("mode") + "_" + (n == 2 ? "true" : 0),
            l.get("Sport").set({
                CurrLmode: 0
            }),
            n == 2 ? t.get("Parlay").find(function(n) {
                return n.get("value") == r
            }) ? t.SelectItem(r) : t.set({
                GroupIndex: 2,
                ShowSub: !0
            }) : i != 43 ? t.SelectItem(r) : t.set({
                GroupIndex: 3,
                ShowSub: !0
            }))
        },
        OpenSearch: function() {
            require(["Commponent/ch_SearchResultView"], function(t) {
                n.render(n.createElement(t, null), document.getElementById("SearchPanel"))
            })
        },
        CreateTab: function(t, i, r, u, f) {
            return f || (f = this.handleTab.bind(this, t, !1)),
            n.createElement("div", {
                key: t,
                className: "header-dropdown__item",
                key: t,
                onClick: f,
                "data-selected": r
            }, n.createElement("div", {
                className: "btn"
            }, n.createElement("span", {
                className: "text"
            }, i)))
        },
        OpenLink: function() {},
        addDirectLink: function() {},
        backToHome: function() {
            i.navigateAndSaveLast("Home", {
                trigger: !0
            })
        },
        triggerProductMenu: function(n) {
            var t = typeof n == "boolean" ? n : !this.state.isProductMenuOpen;
            this.setState({
                isProductMenuOpen: t,
                isLiveCasinoOpen: t ? this.state.isLiveCasinoOpen : !1
            })
        },
        getLiveCasinoList: function() {
            var n = [];
            return _Site != "pica88" && (n = window._SiteMode == 0 ? v.NewLiteProductGroup.List.filter(function(n) {
                return n[0].group == "live-casino"
            })[0][0].collection.models.filter(function(n) {
                return !!n.get("enable")
            }) : v.ProductGroup.List.filter(function(n) {
                return n.Name == "lbl_LiveCasino"
            })[0].collection.models.filter(function(n) {
                return !!n.get("enable")
            })),
            n
        },
        clickESports: function() {
            i.OpenNewWindow("#EsportWeb/g=0", "EsportWeb")
        },
        openParlayTeach: function() {
            $("#parlayHelp").length == 0 && $("#divMain").append("<div id='parlayHelp' class='parlayHelp'><\/div>");
            n.render(n.createElement(ot, null), document.getElementById("parlayHelp"))
        },
        setParlayToolTipCounter: function() {
            var n = this;
            this.getModel().get("GroupIndex") != 2 ? t.Utility.Cookie.get("_switch_to_parlay") != 1 && (this.setState({
                showParlayToolTip: !0
            }),
            this.parlayToolTipCounter = setTimeout(function() {
                n.disableParlayToolTip()
            }, 5e3)) : this.disableParlayToolTip()
        },
        disableParlayToolTip: function() {
            this.parlayToolTipCounter && clearTimeout(this.parlayToolTipCounter);
            t.Utility.Cookie.get("_switch_to_parlay") != 1 && t.Utility.Cookie.set("_switch_to_parlay", 1, 365);
            this.setState({
                showParlayToolTip: !1
            })
        },
        onModelChange: function() {
            this.getModel().get("GroupIndex") == 2 && this.disableParlayToolTip();
            this.forceUpdate()
        },
        render: function() {
            for (var y, s, g, nt, o, h, p, b, tt = this, u = this.getModel(), i = [], it = u.get("AllLive"), rt = u.get("Sport"), ut = u.get("Parlay"), ft = _Site != "pica88" ? u.get("Virtual") : [], et = u.get("ESport"), ot = _Site != "pica88" ? u.get("NumberGame") : [], c = u.get("GroupIndex"), ct = l.get("Sport").get("CurrLmode"), st = [it, rt, ut, et, ft, ot], e = ["lbl_AllLive", "lbl_Sports", "lbl_mixparlay", "#43", "lbl_VirtualSport", "#161"], ht = e.indexOf("lbl_Sports"), d = e.indexOf("lbl_mixparlay"), a = u.get("GroupIndex") != d, v = {}, f = 0; f < e.length; f++)
                st[f].length > 0 && (y = e[f].substr(0, 1) == "#" ? l.get("Sport").GetSportName(parseInt(e[f].split("#")[1])) : t.LanguageHelper.Get(e[f]),
                s = u.MenuTabArry[f],
                g = e[f] == "#43" ? this.clickESports : null,
                i.push(this.CreateTab(s, y, c == s, e[f] == "lbl_mixparlay", g)),
                v[s] = y);
            return u.get("LmodeList").map(function(n) {
                i.push(this.CreateTab(n.get("index"), n.get("name"), c == n.get("index"), !1));
                v[n.get("index")] = n.get("name")
            }
            .bind(this)),
            window._UseNewAppBar && (r.get("RNGWar") && i.push(this.CreateTab("rngwar", t.LanguageHelper.Get("lbl_RNGWar"), !1, !1, function() {
                k("rngwar")
            })),
            window._CanSeeTableGameMenu && i.push(this.CreateTab("tablegame", t.LanguageHelper.Get("lbl_TableGame"), !1, !1, function() {
                k("tablegame")
            })),
            window._IsLicenseeAPI && r.get("VRG") && i.push(this.CreateTab("virtualgame", t.LanguageHelper.Get("lbl_VirtualGames"), !1, !1, function() {
                k("virtualgame")
            })),
            window._IsLicenseeAPI && window._CanSeeSabaClubMenu && i.push(this.CreateTab("sabaClub", t.LanguageHelper.Get("lbl_SabaClub"), !1, !1, function() {
                k("sabaClub", 0)
            })),
            nt = typeof siteSetting.CloseEXInMenu != "undefined" ? siteSetting.CloseEXInMenu : !1,
            r.get("Exchange") && !nt && i.push(this.CreateTab("exchange", t.LanguageHelper.Get("lbl_Exchange"), !1, !1, function() {
                k("exchange")
            })),
            r.get("KR") && i.push(this.CreateTab("keno", t.LanguageHelper.Get("lbl_Keno"), !1, !1, function() {
                k("keno")
            })),
            !window._IsLicenseeAPI && window._CanSeeSabaClubMenu && i.push(this.CreateTab("SabaKenoProM", t.LanguageHelper.Get("lbl_SabaKenoProM"), !1, !1, function() {
                k("sabaclub", 1619)
            })),
            o = siteSetting.OpenCBInMenu,
            o && (window._Site == "Fun88" && (r.get("Currency").toUpperCase() == "IN" || r.get("Currency").toUpperCase() == "IDR") && (o = !1),
            window._SiteMode != "0" || r.get("CB") || (o = !1)),
            o && i.push(this.CreateTab("colossusbet", t.LanguageHelper.Get("lbl_ColossusBet"), !1, !1, function() {
                k("colossusbet")
            })),
            r.get("KL") && i.push(this.CreateTab("kenolottery", t.LanguageHelper.Get("lbl_KenoLottery"), !1, !1, function() {
                k("kenolottery")
            }))),
            h = null,
            !window._IsLicenseeAPI && r.get("CL") && i.push(this.CreateTab("casino", t.LanguageHelper.Get(window._Site == "ibcbet" ? "lbl_Slots" : "lbl_casino"), !1, !1, function() {
                this.triggerProductMenu(!1);
                require(["router"], function(n) {
                    n.OpenNewWindow("cl", "c1", null, function(n) {
                        UmCallback("lbl_casino", n)
                    })
                })
            }
            .bind(this))),
            p = this.getLiveCasinoList(),
            window._IsLicenseeAPI || !p.length || (h = p.map(function(i) {
                return n.createElement("div", {
                    className: "header-dropdown__item"
                }, n.createElement("div", {
                    className: "btn",
                    onClick: function() {
                        tt.triggerProductMenu(!1);
                        i.doAction()
                    }
                }, n.createElement("img", {
                    src: i.get("menuImg"),
                    alt: ""
                }), n.createElement("span", {
                    className: "text"
                }, t.LanguageHelper.Get(i.get("name")))))
            }),
            i.push(this.CreateTab("livecasino", t.LanguageHelper.Get("lbl_LiveCasino"), !1, !1, function() {
                this.setState({
                    isLiveCasinoOpen: !this.state.isLiveCasinoOpen
                })
            }
            .bind(this)))),
            b = void 0,
            window._EnableEuroView && t.Utility.Storage.get("sheuro") != 1 && (b = n.createElement("div", {
                id: "TryEuroTip",
                className: "tooltips tooltips-bottom tooltips-promo tooltips-min-w-sm",
                "data-status": "is-open"
            }, n.createElement("div", {
                className: "tooltips_arrow"
            }), n.createElement("div", {
                className: "tooltips_content"
            }, t.LanguageHelper.Get("lbl_EuroNewTip")))),
            n.createElement("div", {
                className: "header-menu"
            }, window._UseNewAppBar ? n.createElement("div", {
                className: "btn"
            }, n.createElement("i", {
                className: "icon icon-arrow-left",
                onClick: this.backToHome
            })) : n.createElement("div", {
                ref: "LeftMenu",
                className: "btn",
                "data-open-sidebar": !0,
                onClick: this.props.openLeftMenu
            }, n.createElement("i", {
                className: "icon icon-menu"
            }), this.state.showBadge ? n.createElement("div", {
                className: "badge badge-new"
            }) : null, b), n.createElement("div", {
                className: "header-dropdown",
                "data-open": this.state.isProductMenuOpen
            }, n.createElement("div", {
                className: "header-dropdown__btn",
                onClick: this.triggerProductMenu
            }, n.createElement("span", {
                className: "text"
            }, v[c]), n.createElement("i", {
                className: "icon icon-arrow-bottom"
            })), window._EnableParlayTeach && this.state.showParlayTech ? n.createElement("div", {
                className: "header-dropdown__btn-help",
                onClick: this.openParlayTeach
            }, n.createElement("i", {
                className: "icon icon-help-outline"
            })) : null, n.createElement("div", {
                className: "header-dropdown__container"
            }, n.createElement("div", {
                className: "header-dropdown__list"
            }, i), h ? n.createElement("div", {
                className: "header-dropdown__sub-list",
                "data-open": this.state.isLiveCasinoOpen
            }, h) : null)), n.createElement("div", {
                className: "c-switch-to-parlay",
                "data-selected": !a,
                onClick: this.switchBetMode.bind(this, a ? d : ht)
            }, n.createElement("a", {
                className: "c-btn"
            }, n.createElement("span", {
                className: "c-text"
            }, t.LanguageHelper.Get("lbl_mixparlay")), n.createElement("i", {
                className: "c-icon c-icon--successful"
            })), n.createElement("div", {
                className: "c-tooltip c-tooltip--bottom-right c-tooltip--highlight",
                "data-open": this.state.showParlayToolTip && a
            }, n.createElement("span", {
                className: "c-text"
            }, t.LanguageHelper.Get("lbl_SwtctoPrly")))), window._EnableNetworkDetect && !window._UseNewAppBar ? n.createElement(w.WifiIcon, null) : null, window._CanSeeSabaVSOnly ? null : n.createElement("div", {
                ref: "search",
                className: "btn btn-search",
                onClick: this.OpenSearch
            }, n.createElement("i", {
                className: "icon icon-search"
            })))
        }
    })
      , ht = n.createBackboneClass({
        getInitialState: function() {
            return {
                right: !1
            }
        },
        componentDidUpdate: function() {
            this.GetScrollState()
        },
        GetScrollState: function() {
            var t = $(n.findDOMNode(this.refs.content)).children().first()
              , r = t.length > 0 ? t[0].scrollWidth : 0
              , u = t.scrollLeft()
              , f = $(n.findDOMNode(this.refs.content)).innerWidth() + 1
              , i = {
                right: !1
            };
            r - u > f && (i.right = !0);
            i.right != this.state.right && this.setState(i)
        },
        componentDidMount: function() {
            r.on("change:NPHP_ShowBanner", this.update, this)
        },
        componentWillUnmount: function() {
            r.off("change:NPHP_ShowBanner", this.update, this)
        },
        update: function() {
            this.forceUpdate()
        },
        handleClick: function(n) {
            this.getModel().SelectItem(n)
        },
        WhatHotClick: function() {
            this.getModel().set({
                IsWhatsHot: !0
            })
        },
        render: function() {
            var i = this.getModel(), g = i.get("ShowSub"), u = i.get("SelectItem"), v, y, s, k, w, a;
            if (!i.get("Sport").length || !u.get("value"))
                return null;
            var r = i.get("GroupIndex")
              , f = this
              , h = [{
                key: "AllLive",
                value: []
            }, {
                key: "Sport",
                value: []
            }, {
                key: "Parlay",
                value: []
            }, {
                key: "ESport",
                value: []
            }, {
                key: "Virtual",
                value: []
            }, {
                key: "Cricket",
                value: []
            }, {
                key: "CricketParlay",
                value: []
            }];
            h.map(function(r) {
                var e = r.key;
                r.value = i.get(r.key).map(function(r) {
                    var s = r.get("text")
                      , v = !1
                      , o = r.get("sportid")
                      , h = "btn"
                      , y = !1
                      , a = u.get("value")
                      , c = a == r.get("value");
                    switch (o) {
                    case 9999:
                    case 99999:
                        s = t.LanguageHelper.Get("lbl_All");
                        break;
                    case 43:
                        e != "ESport" && (s = l.get("Sport").GetSportName(43),
                        h += " btn-esports",
                        parseInt(a) == 43 && (c = !0));
                        break;
                    case 50:
                        e == "Sport" || e == "Parlay" ? (s = l.get("Sport").GetSportName(50),
                        h += " btn-cricket",
                        parseInt(a) == 50 && (c = !0)) : o = null;
                        break;
                    case 180:
                    case 181:
                    case 182:
                    case 183:
                    case 184:
                    case 185:
                    case 186:
                    case 190:
                    case 191:
                    case 192:
                    case 193:
                    case 194:
                    case 195:
                    case 196:
                    case 197:
                        v = !0;
                        e == "Parlay" && (s = t.LanguageHelper.Get("lbl_Virtual") + " " + s)
                    }
                    return o == 99999 && (o = 9999),
                    o == 43 && r.get("subkey") ? o += "-" + r.get("subkey") : o == 43 && r.get("subkey") == 0 && e == "ESport" && (o += "-" + r.get("subkey")),
                    !window._UseNewAppBar || e == "ESport" || e == "Cricket" ? n.createElement("div", {
                        className: h,
                        "data-selected": !i.get("IsWhatsHot") && c,
                        onClick: f.handleClick.bind(f, r.get("value"))
                    }, o ? n.createElement("i", {
                        className: "icon icon-sport" + o
                    }) : null, s, y ? n.createElement("i", {
                        className: "icon icon-arrow-bottom"
                    }) : null) : n.createElement("div", {
                        className: h,
                        "data-status": !i.get("IsWhatsHot") && c ? "is-active" : "",
                        onClick: f.handleClick.bind(f, r.get("value"))
                    }, window._UseNewAppBar && !v || parseInt(o) == 43 ? n.createElement("i", {
                        className: "icon icon-sport" + o
                    }) : null, s, y ? n.createElement("i", {
                        className: "icon icon-arrow-bottom"
                    }) : null)
                })
            });
            v = null;
            r >= 31 && r <= 35 && (y = i.get("LmodeList").get(r - 30),
            y && (v = y.get("SList").map(function(t) {
                var r = t.get("text");
                return window._UseNewAppBar ? n.createElement("div", {
                    className: "btn",
                    "data-status": !i.get("IsWhatsHot") && u.get("value") == t.get("value") ? "is-active" : "",
                    onClick: f.handleClick.bind(f, t.get("value"))
                }, window._UseNewAppBar ? n.createElement("i", {
                    className: "icon icon-sport" + t.get("sportid")
                }) : null, r) : n.createElement("div", {
                    className: "btn",
                    "data-selected": !i.get("IsWhatsHot") && u.get("value") == t.get("value"),
                    "data-status": !i.get("IsWhatsHot") && u.get("value") == t.get("value") ? "is-active" : "",
                    onClick: f.handleClick.bind(f, t.get("value"))
                }, t.get("sportid") ? n.createElement("i", {
                    className: "icon icon-sport" + t.get("sportid")
                }) : null, r)
            })));
            s = null;
            switch (r) {
            case 5:
            case 2:
            case 99:
                k = r == 5 ? 4 : r == 99 ? 0 : r;
                s = n.createElement(d, {
                    key: r,
                    GetScrollState: this.GetScrollState,
                    SelectItem: u.get("value")
                }, h[k].value);
                break;
            case 1:
            case 3:
                s = n.createElement(d, {
                    key: r,
                    GetScrollState: this.GetScrollState,
                    SelectItem: u.get("value")
                }, window._SkinMode == 4 ? null : n.createElement(b.MenuBanner_ch, null), c.showWhatsHot() && (window._UseNewAppBar ? n.createElement("div", {
                    className: "btn btn-hot",
                    "data-status": i.get("IsWhatsHot") ? "is-active" : "",
                    onClick: this.WhatHotClick
                }, n.createElement("i", {
                    className: "icon icon-whats-hot"
                }), t.LanguageHelper.Get("lbl_Whatshot")) : n.createElement("div", {
                    className: "btn btn-hot",
                    "data-selected": !!i.get("IsWhatsHot"),
                    onClick: this.WhatHotClick
                }, n.createElement("i", {
                    className: "icon icon-whats-hot"
                }), t.LanguageHelper.Get("lbl_Whatshot"))), h[1].value);
                break;
            case 4:
                s = n.createElement(p.NumberGameTab, {
                    model: o,
                    isStandard: !1
                });
                break;
            default:
                v && (s = n.createElement(d, {
                    key: r,
                    GetScrollState: this.GetScrollState,
                    SelectItem: u.get("value")
                }, v))
            }
            w = u.get("sportid") == 43 || r != 2 && u.get("sportid") == 50;
            a = null;
            switch (u.get("sportid")) {
            case 43:
                a = r != 2 ? h[3].value : n.createElement("div", {
                    className: "btn",
                    "data-selected": "true"
                }, n.createElement("i", {
                    className: "icon icon-sport43-0"
                }), t.LanguageHelper.Get("lbl_All"));
                break;
            case 50:
                singleSubMenu = h[5].value.filter(function(n) {
                    return n.props.children[1] != t.LanguageHelper.Get("esport_gametype_0")
                });
                a = r != 2 ? singleSubMenu : null
            }
            return window._UseNewAppBar ? n.createElement("div", {
                ref: "content",
                className: "header_submenu",
                "data-arrow": this.state.right ? "true" : ""
            }, s, n.createElement("div", {
                ref: "childtab",
                className: "header-child-menu",
                "data-status": w ? "is-open" : ""
            }, a), n.createElement(e.EntryHeaderIcon, null)) : n.createElement("div", {
                ref: "content",
                className: "header-submenu",
                "data-status": s ? "is-open" : "",
                "data-arrow": this.state.right ? "true" : ""
            }, s, n.createElement("div", {
                ref: "childtab",
                className: "header-child-menu",
                "data-status": w ? "is-open" : ""
            }, a), n.createElement(e.EntryHeaderIcon, null))
        }
    })
      , d = n.createBackboneClass({
        autoScroll: function() {
            var n = $(".submenu>[data-selected='true']");
            n.length == 0 && (n = $(".submenu>[data-status='is-active']"));
            n.length > 0 && (n.offset().left < 0 || $(".submenu").width() < n.offset().left + n.width()) && $(".submenu").scrollLeft($(".submenu").scrollLeft() + n.offset().left)
        },
        componentDidMount: function() {
            this.autoScroll();
            var t = $(n.findDOMNode(this.refs.scrolltab));
            t.on("scroll", this.props.GetScrollState);
            this.props.GetScrollState()
        },
        componentDidUpdate: function(n) {
            n.SelectItem != this.props.SelectItem && this.autoScroll();
            this.props.GetScrollState()
        },
        componentWillUnmount: function() {
            $(n.findDOMNode(this.refs.scrolltab)).off("scroll")
        },
        GetDOM: function() {
            return $(n.findDOMNode(this.refs.scrolltab))
        },
        render: function() {
            return n.createElement("div", {
                ref: "scrolltab",
                className: "submenu",
                "data-status": "is-open"
            }, this.props.children)
        }
    })
      , sr = n.createBackboneClass({
        getInitialState: function() {
            return this.getSetting(this.props)
        },
        getSetting: function(n) {
            var t = n.sportid
              , i = this.getModel().getSetting(t)
              , r = i.leagueId
              , u = i.gameType;
            return {
                sportid: t,
                leagueId: r,
                gameType: u
            }
        },
        componentDidMount: function() {
            var n = this.state.leagueId;
            n !== 0 && a.FilterLeague([n])
        },
        componentDidUpdate: function(n, t) {
            var r = this.state, u = r.sportid, i = r.leagueId, f = r.gameType, e;
            (t.leagueId !== i || t.gameType !== f) && this.getModel().changeNumberGameType(i, f);
            t.sportid !== u && (e = this.props.NumberSport.find(function(n) {
                return n.get("sportid") == u
            }),
            this.props.handleClick(e.get("value")));
            t.leagueId !== i && (i != 0 ? a.FilterLeague([i]) : a.FilterLeague(null))
        },
        componentWillUnmount: function() {
            this.getModel().changeNumberGameType(leagueId = 0, gameType = "");
            t.EventHub.off("openLeague-161", this.OpenLeagueCallBack, this)
        },
        clickEvent: function(n, t, i) {
            this.setState({
                sportid: n,
                leagueId: t,
                gameType: i
            })
        },
        OpenLeagueCallBack: function(n) {
            this.handleClick(161, parseInt(n))
        },
        render: function() {
            var i = this
              , e = this.getModel().get("leagueId")
              , o = this.getModel().get("gameType")
              , c = r.get("Happy5") && !!r.get("Happy5")
              , l = s.isShowParlay5
              , u = l ? {
                161: {
                    league: [{
                        id: h.LNGLeagueID,
                        gameType: "numbergame",
                        key: "numberGame",
                        name: t.LanguageHelper.Get("lbl_161")
                    }, {
                        id: h.TurboLNGLeagueID,
                        gameType: "numbergame",
                        key: "turbonumberGame",
                        name: t.LanguageHelper.Get("lbl_TurbgNG")
                    }]
                },
                164: {
                    league: [{
                        id: h.Happy5LeagueID,
                        gameType: "happy5",
                        key: "happy5",
                        name: t.LanguageHelper.Get("lbl_164")
                    }, {
                        id: h.Happy5LeagueID,
                        gameType: "parlay5",
                        key: "parlay5",
                        name: t.LanguageHelper.Get("lbl_Parlay5")
                    }]
                }
            } : {
                161: {
                    league: [{
                        id: h.LNGLeagueID,
                        gameType: "numbergame",
                        key: "numberGame",
                        name: t.LanguageHelper.Get("lbl_161")
                    }, {
                        id: h.TurboLNGLeagueID,
                        gameType: "numbergame",
                        key: "turbonumberGame",
                        name: t.LanguageHelper.Get("lbl_TurbgNG")
                    }]
                },
                164: {
                    league: [{
                        id: h.Happy5LeagueID,
                        gameType: "happy5",
                        key: "happy5",
                        name: t.LanguageHelper.Get("lbl_164")
                    }]
                }
            }
              , f = []
              , a = c ? [161, 164] : [161];
            return a.map(function(t) {
                u[t] && u[t].league.map(function(r) {
                    var u = r.gameType === "numbergame" ? e == r.id : o == r.gameType;
                    f.push(window._UseNewAppBar ? n.createElement("div", {
                        className: "btn",
                        "data-status": u ? "is-active" : "",
                        onClick: i.clickEvent.bind(i, t, r.id, r.gameType)
                    }, r.name) : n.createElement("div", {
                        className: "btn",
                        "data-selected": u,
                        onClick: i.clickEvent.bind(i, t, r.id, r.gameType)
                    }, r.name))
                })
            }),
            n.createElement(d, {
                GetScrollState: this.props.GetScrollState
            }, f)
        }
    })
      , ct = n.createBackboneClass({
        mixins: [n.BackboneMixin("MarketSelecter", "change:SelectItem")],
        render: function() {
            var i = this.getModel()
              , t = i.get("SelectItem")
              , u = this.props.MarketSelecter.get("SelectItem");
            return n.createElement("div", {
                className: "header_market_float"
            }, n.createElement("div", {
                className: "btn btn-back",
                onClick: et
            }, n.createElement("i", {
                className: "icon icon-back"
            })), n.createElement("div", {
                className: "header_market_title"
            }, n.createElement("i", {
                className: "icon icon-sport" + t.get("sportid")
            }), n.createElement("div", {
                className: "header_text"
            }, t.get("text"), "｜", u.get("text"))), n.createElement(g, {
                account: r
            }))
        }
    })
      , lt = n.createBackboneClass({
        displayName: "MarketItem",
        render: function() {
            var t = this.props.Item
              , i = this.props.Item2 && !!r.get("TWL") ? this.props.Item2.get("count") : 0
              , u = t.get("count") ? t.get("count") + i : "0";
            return n.createElement("div", {
                className: "btn",
                onClick: this.props.handleClick,
                "data-status": this.props.active ? "is-active" : ""
            }, n.createElement("div", {
                className: "btn_text"
            }, n.createElement("span", {
                className: "c-text"
            }, t.get("text")), n.createElement("span", {
                className: "c-badge c-badge--default"
            }, u)))
        }
    })
      , at = n.createBackboneClass({
        displayName: "EarlyItem",
        render: function() {
            var t = this.props.Item
              , i = t.get("count") ? t.get("count") : "0";
            return n.createElement("li", {
                onClick: this.props.handleClick,
                className: this.props.active ? "active" : ""
            }, n.createElement("a", null, n.createElement("span", {
                className: "c-text"
            }, t.get("text")), n.createElement("span", {
                className: "c-badge c-badge--default"
            }, i)))
        }
    })
      , nt = n.createBackboneClass({
        displayName: "EarlyDropdown",
        render: function() {
            var t = this.props.Item
              , i = t.get("count") ? t.get("count") : "0";
            return n.createElement("div", {
                className: "btn btn-dropdown",
                "data-status": this.props.earlyActive ? "is-active" : "",
                onClick: this.props.OpenClose
            }, n.createElement("div", {
                className: "btn_text"
            }, n.createElement("span", {
                className: "c-text"
            }, t.get("text")), n.createElement("span", {
                className: "c-badge c-badge--default"
            }, i)), n.createElement("div", {
                className: "dropdown dropdown-early " + (this.props.IsOpenEarly ? "open" : "")
            }, n.createElement("ul", {
                className: "dropdown-menu"
            }, this.props.early)))
        }
    })
      , vt = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsOpenEarly: !1
            }
        },
        componentDidMount: function() {},
        componentWillUnmount: function() {
            $(document.body).off("touchstart", this.onBlurHandler)
        },
        onBlurHandler: function(t) {
            t && $.contains(n.findDOMNode(this), t.target) || this.state.IsOpenEarly && this.OpenEarly()
        },
        handleClick: function(n) {
            this.getModel().select(n);
            l.get("Market").defaultMarket = n;
            this.state.IsOpenEarly && this.OpenEarly()
        },
        OpenEarly: function() {
            var n = !this.state.IsOpenEarly;
            if (n)
                $(document.body).on("touchstart", this.onBlurHandler);
            else
                $(document.body).off("touchstart", this.onBlurHandler);
            this.setState({
                IsOpenEarly: n
            })
        },
        render: function() {
            var s = this.getModel(), i = [], r = [], f = s.get("SelectItem"), e = !1, u = null, t = this, o;
            return (this.getCollection().map(function(s) {
                var h = s.get("value").split(":")[0];
                h == "l" || h == "t" ? (h == "l" && (o = s),
                r.push(n.createElement(lt, {
                    key: s.get("value"),
                    handleClick: t.handleClick.bind(t, s.get("value")),
                    active: f.get("value") == s.get("value"),
                    Item: s,
                    Item2: h == "l" ? null : o,
                    IsLive: h == "l"
                }))) : (i.push(n.createElement(at, {
                    key: s.get("value"),
                    Item: s,
                    handleClick: t.handleClick.bind(t, s.get("value")),
                    active: f.get("value") == s.get("value"),
                    OpenClose: t.OpenEarly
                })),
                u || (u = n.createElement(nt, {
                    Item: s,
                    earlyActive: e,
                    OpenClose: t.OpenEarly,
                    early: i,
                    IsOpenEarly: t.state.IsOpenEarly
                })),
                f.get("value") == s.get("value") && (e = !0,
                u = n.createElement(nt, {
                    Item: s,
                    earlyActive: e,
                    OpenClose: t.OpenEarly,
                    early: i,
                    IsOpenEarly: t.state.IsOpenEarly
                })))
            }),
            i.length > 0 && r.push(u),
            window._SkinMode == 4) ? n.createElement("div", {
                className: "header_market"
            }, r) : n.createElement("div", {
                className: "btn-bar bar-scroll"
            }, n.createElement("div", {
                className: "btn-group"
            }, r))
        }
    })
      , yt = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsCheck: !1
            }
        },
        ClickMode: function() {
            var n = !this.state.IsCheck;
            this.setState({
                IsCheck: n
            });
            a.FilterMode(this.getModel().get("mode"), !n)
        },
        componentWillUnmount: function() {
            a.FilterMode(this.getModel().get("mode"), !0)
        },
        render: function() {
            var t = this.getModel()
              , i = t.get("mode");
            return n.createElement("li", null, n.createElement("div", {
                className: "checkbox"
            }, n.createElement("input", {
                type: "checkbox",
                onChange: this.ClickMode,
                className: "icon icon-checkbox",
                id: "Lmode_" + i,
                checked: this.state.IsCheck,
                defaultChecked: this.state.IsCheck
            }), n.createElement("label", {
                className: "title",
                htmlFor: "Lmode_" + i
            }, n.createElement("span", {
                className: "c-text"
            }, t.get("name")))))
        }
    })
      , tt = n.createBackboneClass({
        render: function() {
            return n.createElement("div", {
                className: "filters_item",
                "js-filters-switch": "",
                "data-status": this.props.IsActive ? "is-active" : "",
                onClick: this.props.onSwitch
            }, n.createElement("span", {
                className: "filters_title"
            }, this.props.Txt), n.createElement("div", {
                className: "btn"
            }, n.createElement("div", {
                className: "btn-switch"
            }, n.createElement("span", null))))
        }
    })
      , pt = n.createBackboneClass({
        changeOptions: "change:sortByTime",
        SetSortByTime: function(n) {
            this.getModel().set({
                sortByTime: n
            })
        },
        render: function() {
            var t = this.getModel();
            return n.createElement("div", {
                className: "filters_item",
                "js-filters-btns": ""
            }, n.createElement("div", {
                className: "btn",
                "data-status": t.get("sortByTime") ? "is-active" : "",
                onClick: this.SetSortByTime.bind(this, !0)
            }, n.createElement("span", {
                className: "btn_text"
            }, "时间排序")), n.createElement("div", {
                className: "btn",
                "data-status": t.get("sortByTime") ? "" : "is-active",
                onClick: this.SetSortByTime.bind(this, !1)
            }, n.createElement("span", {
                className: "btn_text"
            }, "预设排序")))
        }
    })
      , wt = n.createBackboneClass({
        changeOptions: "change:OddsType",
        SetOType: function(n) {
            t.SyncServer("Setting/SaveCN88UserOddsType", {
                oddsType: n
            }, function() {
                this.getModel().set({
                    OddsType: n
                })
            }
            .bind(this))
        },
        render: function() {
            return n.createElement("div", {
                className: "filters_item",
                "js-filters-btns": ""
            }, [{
                id: 2,
                txt: "中国盘"
            }, {
                id: 1,
                txt: "欧洲盘"
            }, {
                id: 4,
                txt: "马来盘"
            }].map(function(t) {
                return n.createElement("div", {
                    className: "btn",
                    "data-status": t.id == this.getModel().get("OddsType") ? "is-active" : "",
                    onClick: this.SetOType.bind(this, t.id)
                }, n.createElement("span", {
                    className: "btn_text"
                }, t.txt))
            }
            .bind(this)))
        }
    })
      , it = n.createBackboneClass({
        changeOptions: "change:filterGV change:filterFast change:IsFav",
        getInitialState: function() {
            return {
                IsOpen: !1
            }
        },
        componentDidMount: function() {
            require(["fastclick"], function(n) {
                new n(document.body)
            });
            this.getModel().filterLeague.on("change:filter", this.update, this);
            a.on("change:market", this.update, this);
            f.on("change:IsAddMatchLeague", this.update, this)
        },
        componentWillUnmount: function() {
            $(document.body).off("touchstart", this.onBlurHandler);
            this.getModel().filterLeague.off("change:filter", this.update);
            a.off("change:market", this.update, this);
            f.off("change:IsAddMatchLeague", this.update)
        },
        update: function() {
            this.forceUpdate()
        },
        onBlurHandler: function(t) {
            t && $.contains(n.findDOMNode(this), t.target) || ($(document.body).off("touchstart", this.onBlurHandler),
            this.setState({
                IsOpen: !1
            }),
            f.get("IsAddMatchLeague") && f.set("IsAddMatchLeague", !1))
        },
        ClickOpen: function() {
            if (!this.state.IsOpen)
                $(document.body).on("touchstart", this.onBlurHandler);
            this.setState({
                IsOpen: !this.state.IsOpen
            })
        },
        CloseFilter: function() {
            this.setState({
                IsOpen: !1
            });
            f.get("IsAddMatchLeague") && f.set("IsAddMatchLeague", !1)
        },
        ClickGV: function() {
            this.getModel().set({
                filterGV: !this.getModel().get("filterGV")
            })
        },
        ClickFast: function() {
            this.getModel().set({
                filterFast: !this.getModel().get("filterFast")
            })
        },
        SetFilterActive: function() {},
        ClickFav: function() {
            this.getModel().set({
                IsFav: !this.getModel().get("IsFav")
            });
            f.get("IsAddMatchLeague") && f.set("IsAddMatchLeague", !1)
        },
        render: function() {
            var i = this.getModel(), o = (i.get("WhatsHotAct") == 0 && i.get("market") == "l" || i.get("sportId") == 160) && i.get("WhatsHotAct") == 0 && y.get("BetMode") != "p", s = i.get("WhatsHotAct") == 0 && i.get("sportId") == 1 && y.get("BetMode") != "p", u = i.get("IsFav"), h = this.getModel().get("filterGV") || this.getModel().filterLeague.get("filter") != null || this.getModel().get("filterFast") || u, v = null, e;
            return (l.get("Sport").get("isParlay") && (e = c.get("PLmodeList").get(i.get("sportId")),
            e && (v = e.get("LmodeList").map(function(t) {
                var i = t.get("mode");
                return n.createElement(yt, {
                    key: i,
                    model: t
                })
            }
            .bind(this)),
            a.filterModeArry && a.filterModeArry.length > 0 && (h = !0))),
            window._SkinMode == 4) ? n.createElement("div", {
                className: "filters",
                "data-status": this.state.IsOpen ? "is-open" : ""
            }, n.createElement("div", {
                className: "overlay",
                onClick: this.CloseFilter
            }), n.createElement("div", {
                className: "filters_container"
            }, o ? n.createElement(tt, {
                Txt: t.LanguageHelper.Get("lbl_Strm"),
                IsActive: i.get("filterGV"),
                onSwitch: this.ClickGV
            }) : null, s ? n.createElement(tt, {
                Txt: t.LanguageHelper.Get("lbl_fastmarkets"),
                IsActive: i.get("filterFast"),
                onSwitch: this.ClickFast
            }) : null, n.createElement(pt, {
                model: l.get("Market")
            }), n.createElement(wt, {
                model: r
            }), n.createElement(rt, {
                model: ut
            }))) : n.createElement("div", {
                className: "dropdown dropdown-filter " + (this.state.IsOpen ? "open" : "")
            }, n.createElement("div", {
                className: "btn",
                onClick: this.ClickOpen
            }, n.createElement("i", {
                className: h ? "icon icon-filter-on" : "icon icon-filter"
            })), n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, n.createElement("li", null, n.createElement("div", {
                className: "checkbox"
            }, n.createElement("input", {
                type: "checkbox",
                onChange: this.ClickFav,
                className: "icon icon-checkbox",
                id: "option_3",
                checked: u,
                defaultChecked: u
            }), n.createElement("label", {
                className: "title",
                htmlFor: "option_3"
            }, n.createElement("span", {
                className: "c-text"
            }, t.LanguageHelper.Get("lbl_favorite"), f.get("IsAddMatchLeague") ? n.createElement("div", {
                className: "badge badge-new"
            }) : null)))), o ? n.createElement("li", null, n.createElement("div", {
                className: "checkbox"
            }, n.createElement("input", {
                type: "checkbox",
                onChange: this.ClickGV,
                className: "icon icon-checkbox",
                id: "option_1",
                checked: i.get("filterGV"),
                defaultChecked: i.get("filterGV")
            }), n.createElement("label", {
                className: "title",
                htmlFor: "option_1"
            }, n.createElement("span", {
                className: "c-text"
            }, t.LanguageHelper.Get("lbl_Strm"))))) : null, s ? n.createElement("li", null, n.createElement("div", {
                className: "checkbox"
            }, n.createElement("input", {
                type: "checkbox",
                onChange: this.ClickFast,
                className: "icon icon-checkbox",
                id: "option_2",
                checked: i.get("filterFast"),
                defaultChecked: i.get("filterFast")
            }), n.createElement("label", {
                className: "title",
                htmlFor: "option_2"
            }, n.createElement("span", {
                className: "c-text"
            }, t.LanguageHelper.Get("lbl_fastmarkets"))))) : null, n.createElement("li", {
                className: "divider"
            }), v, n.createElement(rt, {
                model: ut
            })), f.get("IsAddMatchLeague") ? n.createElement("div", {
                className: "badge badge-new"
            }) : null)
        }
    })
      , rt = n.createBackboneClass({
        OpenView: function() {
            var t = this;
            require(["Commponent/ch_selectleagueView"], function(i) {
                n.render(n.createElement(i, {
                    model: t.getModel()
                }), document.getElementById("selectleaguePanel"))
            })
        },
        render: function() {
            var i = this.getModel(), r, u;
            return i.get("LeagueList").length == 0 ? null : (r = i.get("LeagueList").length,
            u = a.filterLeague.get("filter"),
            u != null && u.length > 0 && (r = u.length),
            window._SkinMode == 4) ? n.createElement("div", {
                className: "filters_item",
                onClick: this.OpenView
            }, n.createElement("span", {
                className: "filters_title"
            }, t.LanguageHelper.Get("lbl_selectleague") + "(" + r + "/" + i.get("LeagueList").length + ")"), n.createElement("i", {
                className: "icon icon-arrow-right"
            })) : n.createElement("li", null, n.createElement("div", {
                className: "btn",
                onClick: this.OpenView
            }, n.createElement("div", {
                className: "text"
            }, t.LanguageHelper.Get("lbl_selectleague") + "(" + r + "/" + i.get("LeagueList").length + ")"), n.createElement("i", {
                className: "icon icon-arrow-right"
            })))
        }
    })
      , bt = Backbone.Model.extend({
        defaults: {
            LeagueList: []
        },
        initialize: function() {
            var n = this;
            a.get("MatchCollection").on("sort", this.Calculate.bind(this));
            a.get("MatchCollection").LeagueCollection.on("update", this.Calculate.bind(this))
        },
        Calculate: function() {
            var t = this
              , n = {}
              , i = a.GetMatchCollection();
            if (i.LeagueCollection != null) {
                if (t.updateData(i, n),
                a.LiveMarket) {
                    t.updateData(a.LiveMarket.GetLiveCollection(), n);
                    a.LiveMarket.GetLiveCollection().LeagueCollection.off("update", this.Calculate.bind(this));
                    a.LiveMarket.GetLiveCollection().LeagueCollection.on("update", this.Calculate.bind(this))
                }
            } else
                i.map(function(i) {
                    i.get("MarketCollection").map(function(i) {
                        t.updateData(i.get("MatchCollection"), n)
                    })
                });
            n = _.sortBy(_.toArray(n), "gameid");
            t.set({
                LeagueList: n
            })
        },
        updateData: function(n, i) {
            n.map(function(n) {
                if ((a.get("sportId") == 999 || n.get("GTY") == null || a.GetMatchCollection().EGameType == 0 || a.GetMatchCollection().EGameType == n.get("GTY")) && (a.get("WhatsHotAct") || n.get("LDM") == null || !(a.get("LMode") > 0) || n.get("LDM") == a.get("LMode"))) {
                    var r = n.get("LeagueId")
                      , f = t.LeagueNameRef.GetName((a.get("sportId") == 999 ? "G" : "") + r)
                      , u = n.get("GameID");
                    (u || a.get("sportId") == 999) && i[r] == null && (i[r] = {
                        id: r,
                        name: f,
                        gameid: u
                    })
                }
            })
        }
    })
      , ut = new bt
      , kt = n.createBackboneClass({
        componentWillUpdate: function() {
            this.refs.vsheader && (a.get("sportId") < 180 || a.get("sportId") > 186) && n.unmountComponentAtNode(n.findDOMNode(this.refs.vsheader))
        },
        render: function() {
            var t = this.getModel().Market
              , i = this.getModel().get("SelectItem").get("text");
            return a.get("sportId") >= 180 && a.get("sportId") <= 186 ? null : this.getModel().get("GroupIndex") == 4 || this.getModel().get("GroupIndex") == 5 || a.get("sportId") >= 190 && a.get("sportId") <= 197 ? null : n.createElement("div", {
                className: window._SkinMode == 4 ? "" : window._UseNewAppBar ? "header_filter" : "header-filter"
            }, !this.getModel().get("IsWhatsHot") && !a.get("IsPromoMode") && window._UseNewAppBar ? n.createElement("div", {
                className: "btn btn-sports"
            }, n.createElement("i", {
                className: "icon icon-sport" + a.get("sportId")
            })) : null, !this.getModel().get("IsWhatsHot") && !a.get("IsPromoMode") ? n.createElement(vt, {
                model: t.get("MarketSelecter"),
                collection: t.get("MarketSelecter").get("Items")
            }) : null, window._EnableNetworkDetect && window._UseNewAppBar ? n.createElement(w.WifiIcon, {
                IsSpeedometer: !0
            }) : null, window._SkinMode == 4 ? null : n.createElement(it, {
                model: a
            }))
        }
    });
    return {
        Mapbar: g,
        productBar: st,
        subMenu: ht,
        Filter: kt,
        Header: ft,
        MarketFloat: ct,
        OtherFilter: it
    }
});
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n
}
: function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol ? "symbol" : typeof n
}
;
define("Commponent/ch_SportsView", ["react", "common", "Commponent/CommonComponent", "router", "NumberGameTypeModel", "Commponent/OddsPage/CricketMatchContent", "Commponent/TimeMachine", "Commponent/FortuneGodIcon", "Commponent/DialogVideo", "Commponent/Parlayhint", "Commponent/QuickBetView", "BetPanelModel", "Commponent/Happy5/Lite/StreamingComponent", "NumberGameConstant", "Commponent/NumberGameScoreBoard", "ch_HeaderMenuModel", "OddsUtil", "Commponent/SabaPlayer", "Commponent/ch_BaseComponent", "Commponent/ch_EmptyView", "Commponent/Happy5/Lite/Happy5Component", "Commponent/DetectNetwork", "Commponent/NonPeakPromoView", "Commponent/BaseMixins", "Commponent/ch_GameVisualizationView", "Commponent/ch_AppBar", "Commponent/ch_SportHeader", "Commponent/ch_LeftMenu", "Commponent/ch_SearchResultView", "accountModel", "MenuModel", "BetTypeSetting", "OddsModel", "ch_BetPanelModular", "GoToTop", "Commponent/ch_SoccerBaccarat", "Commponent/BannerPopDialog", "LoyaltyModular", "Commponent/AdArea", "Commponent/ESports/ESportsGroup", "Commponent/MiniStreaming", "OddsBoostModular", "popup", "react.backbone", "touchswipe.min"], function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, gt) {
    function ki(n, i, r) {
        var u = t.CultureToRef(st.get("Language"));
        t.PopupWindow("SabaSports", t.eEurocupUrl(u));
        !r && n && (r = 1,
        n.get("LDM2") && (r = n.get("LDM2")));
        t.PNRLog(i, r)
    }
    function wf(n) {
        var t = new Date(n + "-00:00"), i, r;
        return t.setHours(t.getUTCHours() + (window._SiteMode == 0 ? 0 : 12)),
        i = t.getHours(),
        r = ("0" + t.getMinutes()).substr(-2, 2),
        i = ("0" + i).substr(-2, 2),
        i + ":" + r
    }
    function ue() {
        kr || window._Site.toLowerCase() == "12bet" || window._Site.toLowerCase() == "soon88" || (kr = !0,
        require(["//sc.detecas.com/di/activator.ashx"], function() {
            var n = function n(i) {
                $("#__di").length > 0 ? t.SyncServer("FpsHandler", {
                    __di: $("#__di").val()
                }) : i < 10 && setTimeout(function() {
                    n(i + 1)
                }, 1e3)
            };
            n(0)
        }))
    }
    var dr = n.createBackboneClass({
        getInitialState: function() {
            return {
                startIndex: 0
            }
        },
        componentDidMount: function() {
            window.addEventListener("message", this.BetBuilderEvent, !1)
        },
        componentDidUpdate: function() {},
        ClickEvent: function(n) {
            r.navigate("#Sports/s=" + n + "_0&d=t", {
                trigger: !0
            });
            this.setState({
                sportid: n
            })
        },
        componentWillMount: function() {},
        componentWillUnmount: function() {
            window.removeEventListener("message", this.BetBuilderEvent, !1)
        },
        BetBuilderEvent: function(n) {
            if (n.origin.includes(".betstream.betgenius.com") && n.data && typeof n.data == "string") {
                var t = JSON.parse(n.data);
                switch (t.command) {
                case "addToBetslip":
                    at.addTicket({
                        type: "BB",
                        seqno: null,
                        gameid: lt.get("sportId"),
                        bettype: 0,
                        pty: 1,
                        oddsid: t.marketId,
                        errorcode: "",
                        Matchid: bi.get(t.sportsbookFixtureId)
                    })
                }
            }
        },
        render: function() {
            var l, f, e, w, o, s, h, c, a, k;
            this.start = (new Date).getTime();
            var v = this, i = lt.get("sportId"), r, y = n.createElement(d.NoLeague, {
                model: lt
            });
            if (i == 9999 || i == 99999)
                l = !1,
                f = this.getCollection().map(function(t) {
                    return t.get("sportId") == 1 && (l = !0),
                    n.createElement(yr, {
                        key: "Live_" + t.get("sportId"),
                        model: t,
                        collection: t.GetLiveCollection().LeagueCollection
                    })
                }),
                !l,
                f && f.length > 0 ? (f.push(n.createElement("div", {
                    key: "NoLeagueLi",
                    id: "NoLeagueLi",
                    style: {
                        display: "none"
                    }
                }, y)),
                r = f) : r = y;
            else if (i == 43) {
                e = this.getCollection().groupBy(function(n) {
                    return n.get("GTY")
                });
                r = [];
                this.getCollection().models.length > 0 && (w = {
                    1: this.getCollection().models
                },
                e = w);
                for (o in e)
                    o != "undefined" && (s = o + lt.get("market") + this.getCollection().IsGetAll,
                    h = ri(i, lt.get("market"), e[o], lt.filterLeague.get("filter"), lt.get("MatchCollection").IsReady, !0, s),
                    Array.isArray(h) && (st.get("IsNewStyle") ? r.push(n.createElement(ui, {
                        key: s,
                        ComGroupKey: s
                    }, h)) : r.push(n.createElement("div", {
                        className: "game",
                        key: s
                    }, n.createElement("div", {
                        className: "game_title"
                    }, t.LanguageHelper.Get("esport_gametype_" + o), n.createElement("span", {
                        className: "game_number"
                    }, "(" + h.length + ")")), h))));
                (r == null || r.length == 0) && lt.get("MatchCollection").IsReady && Object.keys(e).length === 0 && (r = n.createElement(d.NoLeague, {
                    model: lt
                }))
            } else
                this.props.IsBVS ? lt.get("loading") || (r = n.createElement(df, {
                    key: i,
                    LeagueCollection: this.getCollection()
                })) : this.props.IsVirtual ? r = n.createElement(pf, {
                    key: i,
                    sportId: i
                }) : i == 164 ? r = lt.get("loading") ? null : n.createElement(g.Happy5Content, {
                    leagueCollection: this.getCollection(),
                    model: u,
                    Updata: lt.Updata
                }) : (c = i + "_" + lt.get("market"),
                lt.LiveMarket ? r = n.createElement(gr, {
                    model: v.getModel(),
                    todayData: this.getCollection(),
                    collection: lt.LiveMarket.GetLiveCollection().LeagueCollection,
                    sportId: i,
                    ComGroupKey: c
                }) : (a = {
                    flg: !1
                },
                r = ri(i, lt.get("market"), this.getCollection(), v.getModel().get("filter"), lt.get("MatchCollection").IsReady, !0, c, a),
                a.flg || (r = n.createElement(ui, {
                    sportId: i,
                    ComGroupKey: c,
                    PageCount: lt.get("WhatsHotAct") == 1 || i == 1 && lt.get("market") != "l" ? 2 : 2
                }, r))));
            return k = n.createElement(tu, {
                key: "VideoDiv",
                SportID: i,
                IsBVS: this.props.IsBVS,
                IsVirtual: this.props.IsVirtual
            }),
            n.createElement(gi, {
                model: p,
                IsBVS: this.props.IsBVS,
                IsVirtual: this.props.IsVirtual
            }, k, n.createElement(b, {
                key: i,
                SportID: i == 997 ? 1 : i
            }), n.createElement(tt.PromOddsBanner, null, r), lt.get("loading") ? null : n.createElement("div", {
                "class": "page-end-msg"
            }, n.createElement("div", {
                "class": "page-end-msg__text"
            }, t.LanguageHelper.Get("lbl_ReachBottom"))), n.createElement(re, {
                model: lt
            }))
        }
    })
      , gr = n.createBackboneClass({
        render: function() {
            var r = this.props.sportId
              , i = this.props.ComGroupKey
              , e = null
              , u = null
              , o = {
                flg: !1
            }
              , f = {
                flg: !1
            };
            return (lt.LiveMarket && lt.LiveMarket.GetLiveCollection().length > 0 ? e = ri(r, "l", this.getCollection(), this.getModel().get("filter"), lt.LiveMarket.GetLiveCollection().IsReady, !0, i + "_l", f) : f.flg = !0,
            u = ri(r, lt.get("market"), this.props.todayData, this.getModel().get("filter"), lt.get("MatchCollection").IsReady, !0, i, o),
            o.flg && f.flg) ? u : n.createElement("div", null, e && !f.flg ? n.createElement(ui, {
                key: i + "_l",
                Title: t.LanguageHelper.Get("live"),
                PageCount: 2,
                sportId: r,
                ComGroupKey: i + "_l"
            }, e) : null, u && !o.flg ? n.createElement(ui, {
                key: i + "_t",
                Title: t.LanguageHelper.Get("lbl_today"),
                PageCount: r == 1 ? 2 : 2,
                sportId: r,
                ComGroupKey: i
            }, u) : null)
        }
    })
      , ye = n.createBackboneClass({
        getInitialState: function() {
            return {
                LiveSubGroup: [],
                TodaySubGroup: []
            }
        },
        SetSubGroup: function(n) {
            var t, i, r = n.substring(n.length - 1);
            r == "l" ? (t = this.state.LiveSubGroup,
            i = p.get("SelectItem").get("SportsCount").LiveSportsCount) : (t = this.state.TodaySubGroup,
            i = p.get("SelectItem").get("SportsCount").TodaySportsCount);
            n.substring(0, 1) == "m" ? t.indexOf(n) > -1 ? t = [] : t.push(n) : (t.indexOf(n) > -1 ? (t = t.filter(function(t) {
                return t != n
            }),
            t.length == 1 && t[0].substring(0, 1) == "m" && t.pop()) : t.length == 1 && t[0].substring(0, 1) == "m" ? t.pop() : t.push(n),
            t.filter(function(n) {
                return n.substring(0, 1) != "m"
            }).length == i ? t.push("m_99999_" + r) : t = t.filter(function(n) {
                return n.substring(0, 1) != "m"
            }));
            r == "l" ? this.setState({
                LiveSubGroup: t
            }) : this.setState({
                TodaySubGroup: t
            })
        },
        render: function() {
            var r = this
              , i = this.props.Data
              , e = null
              , o = null
              , u = {
                flg: !1
            }
              , f = {
                flg: !1
            };
            return this.getCollection() && this.getCollection().length > 0 ? (this.getCollection() && this.getCollection().length > 0 ? e = this.getCollection().map(function(t) {
                return n.createElement(pr, {
                    key: "Live_" + t.get("sportId"),
                    model: t,
                    collection: t.GetLiveCollection().LeagueCollection,
                    Market: "l",
                    SubGroup: r.state.LiveSubGroup,
                    SetSubGroup: r.SetSubGroup
                })
            }) : f.flg = !0,
            i && i.length > 0 ? o = i.map(function(t) {
                return n.createElement(pr, {
                    key: "Today_" + t.get("sportId"),
                    model: t,
                    collection: t.GetLiveCollection().LeagueCollection,
                    Market: "t",
                    SubGroup: r.state.TodaySubGroup,
                    SetSubGroup: r.SetSubGroup
                })
            }) : u.flg = !0,
            u.flg && f.flg) ? null : n.createElement("div", null, f.flg ? null : n.createElement(ai, {
                ComGroupKey: "m_" + this.props.sportId + "_l",
                Title: t.LanguageHelper.Get("live"),
                market: "l",
                SubGroup: this.state.LiveSubGroup,
                SetSubGroup: this.SetSubGroup
            }, e), u.flg ? null : n.createElement(ai, {
                ComGroupKey: "m_" + this.props.sportId + "_t",
                Title: t.LanguageHelper.Get("lbl_today"),
                market: "t",
                SubGroup: this.state.TodaySubGroup,
                SetSubGroup: this.SetSubGroup
            }, o)) : i && i.length > 0 ? i.map(function(t) {
                return n.createElement(yr, {
                    key: "Live_" + t.get("sportId"),
                    model: t,
                    collection: t.GetLiveCollection().LeagueCollection
                })
            }) : null
        }
    })
      , gi = n.createBackboneClass({
        changeOptions: "change:ShowSub change:SelectItem",
        render: function() {
            var r = window._SkinMode == 4 ? 9 : 0, t = window._UseNewAppBar ? [90, 120, 85, 145] : [64, 98, 66, 131], u = lt.get("sportId") == 161 || lt.get("sportId") == 164 || this.props.IsBVS || this.props.IsVirtual ? {
                paddingTop: t[0] + "px"
            } : {
                paddingTop: t[1] + r + "px"
            }, f, i;
            return ((parseInt(lt.get("sportId")) == 43 || lt.get("sportId") == 50 && this.getModel().get("SelectItem").get("place") == 0) && (u = {
                paddingTop: t[3] + "px"
            }),
            f = this.getModel().get("ShowSub") ? u : {
                paddingTop: t[2] + r + "px"
            },
            i = this.getModel().get("SelectItem").get("value"),
            i.length == 0) ? null : n.createElement("div", {
                className: "content",
                key: i,
                style: f,
                id: "ContentScoll"
            }, this.props.children)
        }
    })
      , we = n.createBackboneClass({
        OpenSaba: function() {
            ki(null, 15, 0)
        },
        render: function() {
            var i = lt.get("sportId")
              , r = i >= 151 && i <= 153 ? !0 : !1
              , u = i >= 180 && i <= 186 ? !0 : !1
              , f = i >= 190 && i <= 197 ? !0 : !1;
            if (r || u || f || i == 161 || i == 164)
                return null;
            var e = t.CasinoLangPath(st.get("Language"))
              , o = require.s.contexts._.config.urlArgs;
            return n.createElement("div", {
                className: "promotion-bar",
                onClick: this.OpenSaba
            }, n.createElement("img", {
                src: "{0}/PromotionBar/{1}/pm_sabaGeneral.jpg?{2}".format(["./Content/public", e, o])
            }))
        }
    })
      , ke = n.createBackboneClass({
        changeOptions: "change:MixParlay change:BetMode",
        showBet: function() {
            this.getModel().showPanel("p")
        },
        render: function() {
            var i = this.getModel();
            return i.get("BetMode") != "p" ? null : n.createElement("div", {
                className: "parlay_counter",
                "data-status": i.get("MixParlay") > 0 ? "is-open" : ""
            }, n.createElement("div", {
                className: "btn has-bet",
                onClick: this.showBet
            }, n.createElement("i", {
                className: "icon icon-betslip-ticket"
            }), t.LanguageHelper.Get("Betsilp"), n.createElement("span", {
                className: "betting-amount"
            }, i.get("MixParlay"))))
        }
    })
      , nr = {
        OpenLeagueCallBack: function(i) {
            if (this.state.MatchReady == 2 ? this.setState({
                IsOpen: !0
            }) : this.OpenLeague(),
            i == "0") {
                var r = $(n.findDOMNode(this.refs.league));
                setTimeout(function() {
                    $("html,body").animate({
                        scrollTop: r.offset().top - $(".header").outerHeight()
                    }, 100)
                }, 300)
            } else
                t.EventHub.trigger("openMatch-" + i, window.fromCTA ? !1 : !0),
                window.fromCTA = !1
        },
        OpenLeague: function() {
            this.autoShowMatch();
            var n = this.getModel();
            n.get("LeagueId")
        },
        componentWillUnmount: function() {
            this.props.IsSingleModel || t.EventHub.off("openLeague-" + this.getModel().get("LeagueId"), this.OpenLeagueCallBack, this)
        },
        autoShowMatch: function() {
            var i = $(n.findDOMNode(this.refs.league))
              , t = this;
            i.children(t.state.ListName).show();
            t.setState({
                IsOpen: !0,
                MatchReady: 2
            })
        },
        showMatch: function() {
            if (this.state.MatchReady == 2) {
                var i = $(n.findDOMNode(this.refs.league))
                  , t = this;
                this.state.IsOpen ? i.children(t.state.ListName).slideUp(300, function() {
                    t.setState({
                        IsOpen: !1
                    })
                }) : i.children(t.state.ListName).slideDown(300, function() {
                    t.setState({
                        IsOpen: !0
                    })
                })
            } else
                this.setState({
                    MatchReady: 1
                })
        },
        ClickFav: function() {
            this.getModel().set({
                Fav: !this.getModel().get("Fav")
            })
        },
        componentDidUpdate: function() {
            if (this.state.MatchReady == 1) {
                var i = $(n.findDOMNode(this.refs.league))
                  , t = this;
                i.children(t.state.ListName).slideDown(300, function() {
                    t.setState({
                        IsOpen: !0,
                        MatchReady: 2
                    })
                })
            }
        }
    }
      , ui = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsOpen: this.props.defaultOpen == null ? !0 : this.props.defaultOpen
            }
        },
        componentDidMount: function() {},
        componentWillMount: function() {
            var n = this.props.PageCount ? this.props.PageCount : 2;
            ei.add({
                ComGroupKey: this.props.ComGroupKey,
                page: 1,
                pagemax: n,
                lock: !1
            })
        },
        OpenEvent: function() {
            var n = !this.state.IsOpen;
            this.setState({
                IsOpen: n
            });
            t.EventHub.trigger("ComOpenAllLeague-" + this.props.ComGroupKey, n)
        },
        render: function() {
            if (this.props.sportId == 161 || this.props.sportId == 999)
                return n.createElement("div", null, this.props.children);
            var i = this.props.Title ? this.props.Title : this.state.IsOpen ? t.LanguageHelper.Get("lbl_CollapseAllLeagues") : t.LanguageHelper.Get("lbl_ExpandAllLeagues");
            return n.createElement("div", {
                id: this.props.ComGroupKey,
                className: "commarket",
                "data-status": this.state.IsOpen ? "is-open" : ""
            }, n.createElement("div", {
                className: this.props.SubMenu ? "commarket_subheader" : "commarket_header",
                onClick: this.OpenEvent,
                style: this.props.exstyle
            }, i, n.createElement("div", {
                className: "icon icon-arrow-bottom"
            })), this.props.children)
        }
    })
      , ai = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsOpen: this.props.defaultOpen == null ? !0 : this.props.defaultOpen
            }
        },
        componentDidMount: function() {},
        componentWillMount: function() {
            var n = this.props.PageCount ? this.props.PageCount : 2;
            ei.add({
                ComGroupKey: this.props.ComGroupKey,
                page: 1,
                pagemax: n,
                lock: !1
            })
        },
        componentDidUpdate: function() {
            this.OpenLeague()
        },
        OpenSubMenu: function() {},
        OpenEvent: function() {
            this.props.SetSubGroup && this.props.SetSubGroup(this.props.ComGroupKey)
        },
        OpenLeague: function() {
            var n = !(this.props.SubGroup.indexOf(this.props.ComGroupKey) > -1 || this.props.SubGroup.indexOf("m_" + lt.get("sportId") + "_" + this.props.Market) > -1);
            this.props.SubMenu && t.EventHub.trigger("ComOpenAllLeague-" + this.props.ComGroupKey, n)
        },
        render: function() {
            if (this.props.sportId == 161 || this.props.sportId == 999)
                return n.createElement("div", null, this.props.children);
            var t;
            return t = !this.props.SubMenu && this.props.SubGroup && this.props.SubGroup.length == 0 ? !0 : !(this.props.SubGroup.indexOf(this.props.ComGroupKey) > -1 || this.props.SubGroup.indexOf("m_" + lt.get("sportId") + "_" + this.props.Market) > -1),
            n.createElement("div", {
                id: this.props.ComGroupKey,
                className: this.props.SubMenu ? "commarket_sub" : "commarket",
                "data-status": t ? "is-open" : ""
            }, n.createElement("div", {
                className: this.props.SubMenu ? "commarket_subheader" : "commarket_header",
                onClick: this.OpenEvent
            }, this.props.Title, n.createElement("div", {
                className: "icon icon-arrow-bottom"
            })), this.props.children)
        }
    })
      , nu = n.createBackboneClass({
        mixins: [nr],
        getInitialState: function() {
            return {
                IsOpen: !1,
                MatchReady: 0,
                ListName: ".commatch_list"
            }
        },
        componentDidMount: function() {
            var n = this.getModel().get("LeagueId"), i;
            if (!this.props.IsSingleModel)
                t.EventHub.on("openLeague-" + n, this.OpenLeagueCallBack, this);
            i = this;
            this.OpenLeague();
            t.EventHub.on("ComOpenAllLeague-" + this.props.ComGroupKey, this.ComOpenAllLeague, this)
        },
        ComOpenAllLeague: function(t) {
            var r = $(n.findDOMNode(this.refs.league))
              , i = this;
            t ? r.children(i.state.ListName).slideDown(300, function() {
                i.setState({
                    IsOpen: !0
                })
            }) : r.children(i.state.ListName).slideUp(300, function() {
                i.setState({
                    IsOpen: !1
                })
            })
        },
        componentWillUnmount: function() {
            t.EventHub.off("ComOpenAllLeague-" + this.props.ComGroupKey, this.ComOpenAllLeague, this)
        },
        render: function() {
            var u = null, i = this.getModel(), s = i.get("Index"), f = lt.get("sportId"), o, r, e;
            return f != 161 && this.props.IsSingleModel == null && (u = n.createElement(k.MyFav, {
                type: "league",
                model: i
            })),
            o = i.get("Index"),
            r = null,
            this.state.MatchReady && (r = n.createElement(uu, {
                IsOpen: this.state.IsOpen
            }, n.createElement(fu, {
                IsOpen: this.state.IsOpen,
                collection: i.get("MatchList"),
                LeagueId: i.get("Index"),
                IsSingleModel: this.props.IsSingleModel,
                defTab: this.props.defTab,
                LeagueCollection: this.props.LeagueCollection,
                IsLastLeague: !this.props.IsSingleModel && this.props.openLeague.open,
                ComGroupKey: this.props.ComGroupKey,
                OpenMatch: this.props.OpenMatch,
                isFirstLeague: this.props.isFirstLeague
            }))),
            e = "icon icon-flag-" + (i.get("CCode") ? i.get("CCode") : "others"),
            i.get("GTY") != null && (e = "icon icon-sport43-" + i.get("GTY")),
            n.createElement("div", {
                ref: "league",
                className: "comleague" + (i.get("hasLive") ? " is-live" : ""),
                "data-status": this.state.IsOpen ? "is-open" : ""
            }, n.createElement("div", {
                className: "comleague_header",
                onClick: this.showMatch
            }, n.createElement("div", {
                className: "comleague_flag"
            }, n.createElement(k.LogoIcon, {
                key: i.get("LeagueId"),
                IconID: i.get("LeagueId"),
                type: "L"
            })), n.createElement("div", {
                className: "comleague_name"
            }, t.LeagueNameRef.GetName((f == 999 ? "G" : "") + i.get("LeagueId")), n.createElement("span", {
                className: "comleague_number"
            }, "(" + i.get("MatchList").length + ")")), u, n.createElement(k.RefreshButton, null)), r ? r : null)
        }
    })
      , tr = n.createBackboneClass({
        toogleVideoSideBar: function() {
            t.EventHub.trigger("toogleVideoSideBar", "sidebar")
        },
        render: function() {
            var o = this
              , s = this.getModel()
              , i = s.get("MatchList").at(0)
              , r = i.get("GameID")
              , h = i.get("IsLive")
              , c = i.get("Neu") ? "" + t.LanguageHelper.Get("Neutral_Team") : "";
            $("html").attr("data-single-match", "true");
            var l = p.get("SelectItem").get("value")
              , u = []
              , f = void 0
              , e = void 0;
            return i !== "noMatch" && (f = !!~[0, 107, 108, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138].indexOf(i.get("CMT")),
            e = i.get("BetTypes").BetTypeClass == "parlay"),
            p.get("Cricket").map(function(t) {
                if (t.get("value") != "50_0_0" && t.get("value") != "50-SP_0_0") {
                    var i = l == t.get("value");
                    u.push(n.createElement("div", {
                        "class": "c-tab",
                        "data-selected": i ? "true" : ""
                    }, n.createElement("div", {
                        "class": "btn",
                        onClick: i ? null : o.props.changeGameType.bind(null, t.get("value"))
                    }, t.get("text"))))
                }
            }),
            n.createElement("div", {
                className: "comsingle" + (r == 2 ? " basketball" : "")
            }, n.createElement("div", {
                className: "comquickBet_sidebar",
                role: "landscape-visible"
            }, n.createElement("div", {
                className: "btn btn-watchbet-close",
                onClick: this.toogleVideoSideBar
            }, n.createElement("i", {
                className: "icon icon-clear"
            }))), n.createElement("div", {
                className: "match-teams-bar",
                role: "landscape-visible"
            }, n.createElement("div", {
                className: "team_name"
            }, n.createElement("div", {
                className: "team_court"
            }), n.createElement("div", {
                className: "team_text"
            }, lt.LiveStreaming.GetTeamName(i.get("TeamId1")) + c), n.createElement("div", {
                className: "team_flag"
            }, n.createElement(k.LogoIcon, {
                IconID: i.get("TeamId1"),
                type: "H",
                LeagueLogoRef: lt.LiveStreaming.LeagueName,
                TeamLogoRef: lt.LiveStreaming.TeamName
            })), i.get("Rc1") > 0 ? n.createElement("div", {
                className: "match_redcard"
            }, i.get("Rc1")) : null), n.createElement("div", {
                className: "team_vs"
            }, n.createElement("div", {
                className: "team_score"
            }, r == 50 ? "- VS -" : i.get("T1V") + " - " + i.get("T2V")), n.createElement("div", {
                className: "team_time"
            }, h && i.get("HLS") == 0 && r == 44 ? n.createElement("div", null, t.LanguageHelper.Get("lbl_round") + i.get("T1V")) : null, n.createElement(k.LiveTimerDiv, {
                match: i
            }))), n.createElement("div", {
                className: "team_name"
            }, n.createElement("div", {
                className: "team_text"
            }, lt.LiveStreaming.GetTeamName(i.get("TeamId2"))), n.createElement("div", {
                className: "team_flag"
            }, n.createElement(k.LogoIcon, {
                IconID: i.get("TeamId2"),
                type: "A",
                LeagueLogoRef: lt.LiveStreaming.LeagueName,
                TeamLogoRef: lt.LiveStreaming.TeamName
            })), i.get("Rc2") > 0 ? n.createElement("div", {
                className: "match_redcard"
            }, i.get("Rc2")) : null)), r == 50 && !f && !e ? n.createElement("div", {
                "class": "c-tabs c-tabs--switch"
            }, n.createElement("div", {
                "class": "c-tabs__content"
            }, u)) : null, this.props.IsLoading ? n.createElement("div", null) : this.props.noMatch ? n.createElement(d.NoLeague, {
                model: lt
            }) : n.createElement(er, {
                IsNewStyle: !0,
                model: i.get("MoreBetType"),
                collection: i.get("BetTypes"),
                MainMatch: i,
                IsSingleModel: !0,
                defTab: this.props.defTab
            }), lt.get("loading") ? null : n.createElement("div", {
                className: "page-end-msg",
                role: "portrait-visible"
            }, n.createElement("div", {
                className: "page-end-msg__text"
            }, t.LanguageHelper.Get("lbl_ReachBottom"))))
        }
    })
      , ir = n.createBackboneClass({
        mixins: [nr],
        getInitialState: function() {
            return {
                IsOpen: !1,
                MatchReady: 1,
                ListName: ".match_list"
            }
        },
        componentDidMount: function() {
            var n = this.getModel().get("LeagueId");
            if (!this.props.IsSingleModel)
                t.EventHub.on("openLeague-" + n, this.OpenLeagueCallBack, this);
            (this.props.IsSingleModel || this.props.openLeague && this.props.openLeague.open && this.props.openLeague.first == this.getModel().get("Index")) && this.OpenLeague()
        },
        getMarketType: function() {
            var n = lt.get("market");
            return this.getModel().get("MaT") && (n = this.getModel().get("MaT")),
            n
        },
        render: function() {
            var e = null, i = this.getModel(), s = i.get("Index"), r = lt.get("sportId"), o, u, f;
            return r != 161 && this.props.IsSingleModel == null && (e = n.createElement(k.MyFav, {
                type: "league",
                model: i
            })),
            o = i.get("Index"),
            u = null,
            this.state.MatchReady && (u = n.createElement(eu, {
                IsOpen: this.state.IsOpen,
                collection: i.get("MatchList"),
                LeagueId: i.get("Index"),
                IsSingleModel: this.props.IsSingleModel,
                defTab: this.props.defTab,
                IsLastLeague: !this.props.IsSingleModel && this.props.openLeague.open && this.props.openLeague.first == i.get("Index"),
                sportId: r,
                marketType: this.getMarketType(),
                NormalLeagueId: this.getModel().get("LeagueId")
            })),
            f = "icon icon-flag-" + (i.get("CCode") ? i.get("CCode") : "others"),
            i.get("GTY") != null && (f = "icon icon-sport43-" + i.get("GTY")),
            n.createElement("div", {
                ref: "league",
                className: "league" + (i.get("hasLive") ? " is-live" : "") + (r == 161 ? " number-game" : ""),
                "data-status": this.state.IsOpen ? "is-open" : ""
            }, n.createElement("div", {
                className: "league_header",
                onClick: this.showMatch
            }, n.createElement("i", {
                className: r != 161 ? f : ""
            }), n.createElement("div", {
                className: "league_name"
            }, t.LeagueNameRef.GetName((r == 999 ? "G" : "") + i.get("LeagueId")), n.createElement("span", {
                className: "league_number"
            }, "(" + i.get("MatchList").length + ")")), e, n.createElement(k.RefreshButton, null)), u ? u : null)
        }
    })
      , tu = n.createBackboneClass({
        render: function() {
            var r = this.props.SportID, f = 0, i;
            if (this.props.IsBVS) {
                i = t.CultureToRef(st.get("Language"));
                switch (i) {
                case "ch":
                case "cs":
                case "zhcn":
                    i = "zh";
                    break;
                default:
                    i = "en"
                }
                return (i == "ch" || i == "cs") && (i = "zh"),
                n.createElement("div", {
                    className: "video"
                }, n.createElement("div", {
                    className: "video_container"
                }, n.createElement("iframe", {
                    id: "BetradarVSIf",
                    height: r == 190 || r == 193 ? "390px" : "310px",
                    width: "100%",
                    src: "/VirtualSports/Index?sportid=" + lt.get("sportId") + "&lang=" + i
                })))
            }
            return this.props.IsVirtual ? n.createElement(yf, {
                SportId: r
            }) : r == 161 ? (f = u.get("leagueId"),
            n.createElement(a.Streaming, {
                SportId: r,
                Leagueid: f
            })) : f == 0 ? null : n.createElement(rt.Streaming, {
                key: r,
                Leagueid: f,
                sportid: r
            })
        }
    })
      , iu = n.createBackboneClass({
        mixins: [n.BackboneMixin("MainMatch"), n.BackboneMixin("Market")],
        GetBetTypeName: function(n) {
            switch (n) {
            case 1:
                return t.LanguageHelper.Get("lbl_90") + " - " + t.LanguageHelper.Get("lbl_NG_SeqNo").format("5 ");
            case 2:
                return t.LanguageHelper.Get("lbl_90") + " - " + t.LanguageHelper.Get("lbl_NG_SeqNo").format("15 ");
            case 3:
                return t.LanguageHelper.Get("lbl_90") + " - " + t.LanguageHelper.Get("lbl_NG_SeqNo").format("25 ");
            case 4:
                return t.LanguageHelper.Get("lbl_90") + " - " + t.LanguageHelper.Get("lbl_NG_15No");
            case 5:
                return t.LanguageHelper.Get("lbl_90") + " - 1~75 " + t.LanguageHelper.Get("lbl_NumberGameCurrentBall")
            }
        },
        CalculateNumber: function(n, t) {
            var r = [], i, u, f;
            switch (n) {
            case 1:
                i = t * 5 + 1;
                u = i + 4;
                r = [i, u];
                break;
            case 2:
                i = t * 15 + 1;
                u = i + 14;
                r = [i, u];
                break;
            case 3:
                i = t * 25 + 1;
                u = i + 24;
                r = [i, u];
                break;
            case 4:
                for (f = 0; f < 15; f++)
                    r.push(f * 5 + 1 + t);
                break;
            case 5:
                r = [t + 1]
            }
            return r
        },
        getBallColor: function(n) {
            var t = v.BALL_MAPPING[n];
            return t === v.BALL_RED ? "ng-ball-red" : t === v.BALL_BLUE ? "ng-ball-blue" : "ng-ball-disable"
        },
        render: function() {
            var s = this.props.Market, f = this.props.MainMatch, l = [], a = 2, i = parseInt(s.get("Line")), w = this.GetBetTypeName(i), d = i == 4 ? "odds-table numberWheel15" : "odds-table numberWheel", r, e = null, u, t, p;
            switch (i) {
            case 1:
                r = 15;
                break;
            case 2:
                r = 5;
                break;
            case 3:
                r = 3;
                break;
            case 4:
                a = 1;
                r = 5;
                break;
            case 5:
                a = 3;
                e = f.get("IsLive") ? [f.get("ball1"), f.get("ball2")] : null;
                r = 75
            }
            for (u = 0; u < r; u++) {
                var h = u + 1
                  , v = ""
                  , y = null;
                e != null && e.indexOf(h) > -1 && (v = "is-drawn",
                y = e.indexOf(h));
                var b = u
                  , o = this.CalculateNumber(i, u)
                  , c = [];
                for (t = 0; t < o.length; t++)
                    c.push(n.createElement("div", {
                        key: "ball" + t,
                        className: this.getBallColor(o[t])
                    }, o[t])),
                    o.length == 2 && t == 0 && c.push(n.createElement("span", {
                        key: "ballto" + t
                    }, "~"));
                p = n.createElement("div", {
                    className: "betType_option"
                }, n.createElement("div", {
                    className: "numberball-group " + v
                }, c));
                l.push(n.createElement(k.Odds, {
                    key: b,
                    Match: f,
                    TeamAry: this.props.TeamAry,
                    Line: i,
                    Title: "",
                    HasLine: !1,
                    market: s,
                    betTypeOption: p,
                    Selection: s.get("Selections").get(h),
                    LngBallIndex: y
                }))
            }
            return n.createElement("div", {
                className: "betType " + (i != 4 ? "betType-row" : "betType-top")
            }, n.createElement("div", {
                className: "betType_name"
            }, w), l)
        }
    })
      , ru = n.createClass({
        displayName: "NumberTimer",
        nowTimeValue: 0,
        componentWillReceiveProps: function(n) {
            this.nowTimeValue = n.TimeValue;
            clearInterval(this.timer);
            this.timer = setInterval(this.tick, 1e3)
        },
        componentWillMount: function() {
            this.nowTimeValue = this.props.TimeValue;
            this.timer = setInterval(this.tick, 1e3)
        },
        componentWillUnmount: function() {
            clearInterval(this.timer)
        },
        tick: function() {
            this.nowTimeValue -= 1;
            this.forceUpdate()
        },
        render: function() {
            var i;
            this.props.model.set({
                ShowTime: "" + this.nowTimeValue
            }, {
                silent: !0
            });
            this.nowTimeValue <= 0 ? (i = t.LanguageHelper.Get("lbl_nomorebet"),
            clearInterval(this.timer)) : i = this.nowTimeValue + " " + t.LanguageHelper.Get("lbl_sec");
            var r = this.nowTimeValue <= 10 && this.nowTimeValue > 0
              , u = this.nowTimeValue <= 0
              , f = "ng-counting " + (r ? "ng-counting--end" : "") + " " + (u ? "ng-counting--nobet" : "");
            return n.createElement("div", {
                className: f
            }, n.createElement("svg", {
                className: "ng-counting__icon"
            }, n.createElement("path", {
                d: "M0,12.5A9.514,9.514,0,0,1,8.47,3.055V2H8A1,1,0,0,1,8,0h3a1,1,0,1,1,0,2h-.529V3.049A9.44,9.44,0,0,1,14.914,4.7l1.4-1.4a1,1,0,1,1,1.414,1.415l-1.3,1.3A9.5,9.5,0,1,1,0,12.5Zm2,0A7.5,7.5,0,1,0,9.5,5,7.509,7.509,0,0,0,2,12.5Zm7,6v-1a.5.5,0,0,1,1,0v1a.5.5,0,1,1-1,0Zm4.149-1.644a.477.477,0,0,1,0-.688l-.017,0a.506.506,0,0,1,.706,0,.477.477,0,0,1,0,.688l.017,0a.508.508,0,0,1-.706,0Zm-8,0a.477.477,0,0,1,0-.688l-.017,0a.506.506,0,0,1,.706,0,.477.477,0,0,1,0,.688l.017,0a.508.508,0,0,1-.706,0ZM8,12.5a1.5,1.5,0,0,1,1.732-1.482l4.1-3.047.462-.05.023.491L11,12.385q0,.057,0,.115a1.5,1.5,0,0,1-3,0Zm6.5.5a.5.5,0,0,1,0-1h1a.5.5,0,1,1,0,1Zm-11,0a.5.5,0,0,1,0-1h1a.5.5,0,1,1,0,1ZM5.149,8.855a.477.477,0,0,1,0-.688l-.017,0a.508.508,0,0,1,.706,0,.477.477,0,0,1,0,.688l.017,0a.508.508,0,0,1-.706,0ZM9,7.5v-1a.5.5,0,0,1,1,0v1a.5.5,0,1,1-1,0Z"
            })), n.createElement("span", {
                className: "ng-counting__text"
            }, i))
        }
    })
      , uu = n.createBackboneClass({
        render: function() {
            return n.createElement("div", {
                className: "commatch_list",
                style: this.props.IsOpen ? {
                    display: "flex",
                    overflow: "visible"
                } : {
                    display: "none"
                }
            }, this.props.children)
        }
    })
      , fu = n.createBackboneClass({
        mixins: [it.MatchInfoMixins],
        shouldComponentUpdate: function() {
            return !0
        },
        updateData: function() {
            this.forceUpdate()
        },
        render: function() {
            var t = this, i = null, r;
            return this.props.IsLastLeague && (i = {
                matchid: 0
            }),
            r = this.getCollection().map(function(r) {
                var u = !1, f;
                if (!lt.get("IsFav") || lt.get("DisableFav") || r.get("Fav"))
                    return f = window._SiteMode == 0 ? 10 : _LicGetMarketsCount,
                    t.props.OpenMatch && t.props.OpenMatch.count < f && (t.props.OpenMatch.count++,
                    i = {
                        matchid: r.get("MatchId")
                    },
                    t.props.OpenMatch.tmCount < 3 && r.get("BetTypes").HasTimeMachine && r.get("BetTypes").tmCollection && r.get("BetTypes").tmCollection.length > 0 && t.getTMTime(t.GetShowTimeCN(r), null, !0) < 91 && (u = !0,
                    t.props.OpenMatch.tmCount++)),
                    n.createElement(rf, {
                        model: r,
                        ComGroupKey: t.props.ComGroupKey,
                        LeagueCollection: t.props.LeagueCollection,
                        key: r.get("MatchId") + "_" + r.get("GameID"),
                        IsSingleModel: t.props.IsSingleModel,
                        LastMatch: i,
                        defTab: t.props.defTab,
                        collection: r.get("BetTypes"),
                        LeagueIsOpen: t.props.IsOpen,
                        defultOpenTM: u,
                        isFirstLeague: t.props.isFirstLeague
                    })
            }),
            n.createElement("div", null, r)
        }
    })
      , eu = n.createBackboneClass({
        updateData: function() {
            this.forceUpdate()
        },
        render: function() {
            var i = this, t = null, r;
            return this.props.IsLastLeague && (t = {
                matchid: 0
            }),
            r = this.getCollection().map(function(r) {
                if (!lt.get("IsFav") || lt.get("DisableFav") || r.get("Fav"))
                    return t && t.matchid == 0 && (t.matchid = r.get("MatchId")),
                    n.createElement(ef, {
                        model: r,
                        key: r.get("MatchId") + "_" + r.get("GameID"),
                        IsSingleModel: i.props.IsSingleModel,
                        LastMatch: t,
                        defTab: i.props.defTab
                    })
            }),
            n.createElement("div", {
                className: "match_list",
                style: this.props.IsOpen ? {
                    display: "block"
                } : {
                    display: "none"
                }
            }, r)
        }
    })
      , vi = n.createBackboneClass({
        HTSelect: "",
        FTSelect: "",
        getInitialState: function() {
            return {
                IsOpen: !1
            }
        },
        OpenEvent: function() {
            var n = !this.state.IsOpen;
            this.setState({
                IsOpen: n
            });
            t.EventHub.trigger("Expand152-" + this.getModel().get("MarketId"), n)
        },
        handleClick: function(n, t) {
            this[n] = t;
            this.forceUpdate()
        },
        CreateHT: function() {
            var r = {}, i = [], u = this.HTSelect == "" ? "" : this.HTSelect.split(",")[0], f;
            return i.push(n.createElement("li", {
                className: u == "" ? "active" : ""
            }, n.createElement("a", {
                onClick: this.handleClick.bind(this, "HTSelect", "")
            }, t.LanguageHelper.Get("lbl_1st_half")))),
            f = this.getModel().get("BetTypeId"),
            this.getModel().get("Selections").map(function(e) {
                var l = e.get("SelId"), h = l.split("/"), o, s, c;
                if (e.get("Price") > 0 && !r[h[0]]) {
                    o = "";
                    s = "";
                    s = h[0];
                    switch (f) {
                    case 493:
                    case 467:
                        o = s.replace("G", "");
                        break;
                    default:
                        c = s.split(":");
                        o = s.replace(":", "-");
                        o = c[0] == c[1] ? t.LanguageHelper.Get("lbl_draw") + " " + o : o
                    }
                    i.push(n.createElement("li", {
                        className: u == s ? "active" : ""
                    }, n.createElement("a", {
                        onClick: this.handleClick.bind(this, "HTSelect", s + "," + o)
                    }, o)));
                    r[h[0]] = 1
                }
            }
            .bind(this)),
            i
        },
        CreateFT: function() {
            var i = [], r = this.FTSelect == "" ? "" : this.FTSelect.split(",")[0], u;
            return i.push(n.createElement("li", {
                className: r == "" ? "active" : ""
            }, n.createElement("a", {
                onClick: this.handleClick.bind(this, "FTSelect", "")
            }, t.LanguageHelper.Get("lbl_fulltime")))),
            u = this.getModel().get("BetTypeId"),
            this.HTSelect.length > 0 && this.getModel().get("Selections").map(function(f) {
                var s = f.get("SelId").split("/"), h, e, o, c;
                if (f.get("Price") > 0 && (h = this.HTSelect.split(",")[0],
                s[0] == h)) {
                    e = "";
                    o = s.length > 1 ? s[1] : "SAMEHT";
                    switch (u) {
                    case 493:
                    case 467:
                        e = o == "SAMEHT" ? h : o.replace("G", "");
                        break;
                    default:
                        c = o.split(":");
                        e = o.replace(":", "-");
                        e = c[0] == c[1] ? t.LanguageHelper.Get("lbl_draw") + " " + e : e
                    }
                    i.push(n.createElement("li", {
                        className: r == o ? "active" : ""
                    }, n.createElement("a", {
                        onClick: this.handleClick.bind(this, "FTSelect", o + "," + e)
                    }, e)))
                }
            }
            .bind(this)),
            i
        },
        render: function() {
            var r = n.createElement("div", {
                className: this.props.IsNewStyle ? "bettype_oddsbox 2940" : ""
            }), u = this.getModel(), i = t.LanguageHelper, e, f;console.log('2940>>>>',u);
            this.HTSelect.length > 0 && this.FTSelect.length > 0 && (e = this.FTSelect.split(",")[0] == "SAMEHT" ? this.HTSelect.split(",")[0] : this.HTSelect.split(",")[0] + "/" + this.FTSelect.split(",")[0],
            f = u.get("Selections").get(e),console.log('2943>>>',k.Odds),
            f != null ? r = n.createElement(k.Odds, {
                market: u,
                Match: this.props.Match,
                TeamAry: this.props.TeamAry,
                Selection: f,
                Title: "",
                HasLine: !1,
                IsNewStyle: this.props.IsNewStyle,
                NoShowLine: !0
            }) : this.FTSelect = "");
            var o = this.CreateFT()
              , s = this.CreateHT()
              , h = this.FTSelect == "" || this.HTSelect == "" ? i.Get("lbl_fulltime") : this.FTSelect.split(",")[1]
              , c = this.HTSelect == "" ? i.Get("lbl_1st_half") : this.HTSelect.split(",")[1];
            return this.props.IsNewStyle ? n.createElement("div", {
                className: "bettype_group"
            }, n.createElement("div", {
                className: "bettype_item"
            }, n.createElement("div", {
                className: "dropdown"
            }, n.createElement("div", {
                className: "btn",
                "data-toggle": "dropdown",
                "aria-expanded": "false"
            }, n.createElement("div", {
                className: "btn_text"
            }, c)), n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, s))), n.createElement("div", {
                className: "bettype_item"
            }, n.createElement("div", {
                className: "dropdown"
            }, n.createElement("div", {
                className: "btn",
                "data-toggle": "dropdown",
                "aria-expanded": "false"
            }, n.createElement("div", {
                className: "btn_text"
            }, h)), n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, o))), n.createElement("div", {
                className: "bettype_item"
            }, r), n.createElement("div", {
                className: "bettype_item"
            }, u.get("IsCP") ? null : n.createElement("div", {
                className: "combtn combtn-outline",
                "js-toggle-all": "",
                onClick: this.OpenEvent
            }, this.state.IsOpen ? t.LanguageHelper.Get("lbl_HideAll") : t.LanguageHelper.Get("lbl_ViewAll")))) : n.createElement("div", {
                className: "betType betType-row"
            }, n.createElement("div", {
                className: "betType_item"
            }, n.createElement("div", {
                className: "betType_option"
            }, i.Get("lbl_1st_half")), n.createElement("div", {
                className: "dropdown dropdown-odds"
            }, n.createElement("div", {
                className: "btn btn-select",
                "data-toggle": "dropdown",
                "aria-expanded": "false"
            }, n.createElement("span", null, c)), n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, s))), n.createElement("div", {
                className: "betType_item"
            }, n.createElement("div", {
                className: "betType_option"
            }, i.Get("lbl_fulltime")), n.createElement("div", {
                className: "dropdown dropdown-odds"
            }, n.createElement("div", {
                className: "btn btn-select",
                "data-toggle": "dropdown",
                "aria-expanded": "false"
            }, n.createElement("span", null, h)), n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, o))), r)
        }
    })
      , ou = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsOpen: !1
            }
        },
        OpenEvent: function(n) {
            this.setState({
                IsOpen: n
            })
        },
        componentDidMount: function() {
            t.EventHub.on("Expand152-" + this.getModel().get("MarketId"), this.OpenEvent, this)
        },
        componentWillUnmount: function() {
            t.EventHub.off("Expand152-" + this.getModel().get("MarketId"), this.OpenEvent, this)
        },
        CreateTable: function(t, i) {
            return n.createElement("div", {
                key: "G_" + i,
                className: "commatch_content"
            }, n.createElement("div", {
                className: "commatch_bettype"
            }, n.createElement("div", {
                className: "bettype_list"
            }, t)))
        },
        pushAll: function(t, i, r) {
            var f, u;
            if (i.length > 0) {
                for (f = 3 - i.length,
                u = 0; u < f; u++)
                    i.push(n.createElement("div", {
                        className: "bettype_type"
                    }, "--")),
                    r.push(n.createElement("div", {
                        className: "bettype_oddsbox 3061"
                    }, "--"));
                t.push(n.createElement("div", {
                    className: "bettype_group"
                }, n.createElement("div", {
                    className: "bettype_item"
                }, i), n.createElement("div", {
                    className: "bettype_item"
                }, r)))
            }
        },
        render: function() {
            var u = []
              , f = this.getModel();
            if (f.get("IsCP"))
                return null;
            if (this.state.IsOpen) {
                var t = []
                  , i = []
                  , r = []
                  , e = null;
                f.get("Selections").map(function(o) {
                    if (o.get("Price") != 0) {
                        var s = o.get("SelId").replace(/\:/g, "-").replace(/\G/g, "")
                          , h = s.split("/");
                        e != null && e != h[0] && (this.pushAll(t, i, r),
                        u.push(this.CreateTable(t, s)),
                        t = [],
                        i = [],
                        r = []);
                        i.push(n.createElement("div", {
                            className: "bettype_type",
                            dangerouslySetInnerHTML: {
                                __html: s
                            }
                        }));
                        r.push(n.createElement(k.Odds, {
                            market: f,
                            betTypeOption: s,
                            IsNewStyle: !0,
                            Match: this.props.Match,
                            TeamAry: this.props.TeamAry,
                            Selection: o,
                            Title: "",
                            NoShowLine: !0,
                            HasLine: !1
                        }));
                        i.length == 3 && (this.pushAll(t, i, r),
                        i = [],
                        r = []);
                        e = h[0]
                    }
                }
                .bind(this));
                this.pushAll(t, i, r);
                t.length > 0 && u.push(this.CreateTable(t, "end"))
            }
            return n.createElement("div", {
                className: "bettype bettype-expand  6666",
                "data-status": this.state.IsOpen ? "is-open" : ""
            }, u)
        }
    })
      , rr = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsOpen: !1
            }
        },
        OpenEvent: function() {
            this.setState({
                IsOpen: !this.state.IsOpen
            })
        },
        CreateTable: function(t, i) {
            return n.createElement("div", {
                key: i,
                className: "betType betType-row"
            }, t)
        },
        render: function() {
            var u = [], f = this.getModel(), i, r;
            return f.get("IsCP") ? null : (this.state.IsOpen && (i = [],
            r = null,
            f.get("Selections").map(function(t) {
                if (t.get("Price") != 0) {
                    var e = t.get("SelId").replace(/\:/g, "-").replace(/\G/g, "")
                      , o = e.split("/");
                    r != null && r != o[0] && (u.push(this.CreateTable(i, e)),
                    i = []);
                    i.push(n.createElement(k.Odds, {
                        betTypeOption: e,
                        market: f,
                        Match: this.props.Match,
                        TeamAry: this.props.TeamAry,
                        Selection: t,
                        Title: "",
                        HasLine: !1
                    }));
                    r = o[0]
                }
            }
            .bind(this)),
            i.length > 0 && u.push(this.CreateTable(i, "end"))),
            n.createElement("div", {
                className: "betType_list " + (this.state.IsOpen ? "is-open" : "")
            }, n.createElement("div", {
                className: "betType betType-allbet",
                onClick: this.OpenEvent
            }, n.createElement("div", {
                className: "btn btn-allbet"
            }, this.state.IsOpen ? t.LanguageHelper.Get("lbl_HideAll") : t.LanguageHelper.Get("lbl_ViewAll"))), u))
        }
    })
      , su = n.createBackboneClass({
        render: function() {
            for (var c, d, l, a, f = this.getModel(), v = f.get("Line"), s = f.get("hdp2"), w = s, i = this.props.Setting, b = i.HasLine == 1 ? 0 : s - 1, y = this.props.Setting.HasLine == 1 ? 1 : -1, p = [], e = [[], []], r = 0; r < i.Options.length; r++) {
                var o = b
                  , h = []
                  , u = i.HasLine == 1 ? v : v - s + 1;
                for (c = 0; c < w; c++)
                    d = null,
                    l = f.get("Selections").get(i.Options[r][o].Sel),
                    e[r].push(u + ":" + l.get("Price").toFixed(2)),
                    a = r == 0 ? t.LanguageHelper.Get("lbl_home") : t.LanguageHelper.Get("lbl_away"),
                    i.HasLine == 0 && (a = r == 0 ? t.LanguageHelper.Get("lbl_Equal") + "/" + t.LanguageHelper.Get("lbl_over") : t.LanguageHelper.Get("lbl_Equal") + "/" + t.LanguageHelper.Get("lbl_under")),
                    h.push(n.createElement(k.Odds, {
                        market: f,
                        Match: this.props.Match,
                        TeamAry: this.props.TeamAry,
                        Selection: l,
                        betTeam: i.Options[r][o].betTeam,
                        Title: a,
                        CustomLine: u == 0 ? t.LanguageHelper.Get("lbl_draw") : u,
                        nochg: !0,
                        betInfo: e[r]
                    })),
                    o = o + y,
                    u = u - y;
                p.push(n.createElement("div", {
                    className: "betType"
                }, h));
                h = []
            }
            return i.HasLine == 0 && (e[0].reverse(),
            e[1].reverse()),
            n.createElement(ti, {
                LeagueId: this.props.LeagueId,
                match: this.props.Match,
                betTypeName: i.Name(),
                TeamAry: this.props.TeamAry,
                List: p,
                BetTypeId: this.props.BetTypeId
            })
        }
    })
      , hu = n.createBackboneClass({
        GetSelTxt: function(n, i, r, u, f) {
            var h = ""
              , o = {
                win1: "lbl_WinByXGoalOrMore",
                win1s: "lbl_WinByXGoalsOrMore",
                win2: "lbl_WinByXGoal",
                win2s: "lbl_WinByXGoals",
                los1: "lbl_LoseByXGoalOrMore",
                los1s: "lbl_LoseByXGoalsOrMore",
                los2: "lbl_LoseByXGoal",
                los2s: "lbl_LoseByXGoals"
            }
              , s = {
                less: "lbl_TotalGoalXOrLess",
                lesss: "lbl_TotalGoalsXOrLess",
                more: "lbl_TotalGoalsXOrMore",
                Goal: "lbl_TotalGoalX",
                Goals: "lbl_TotalGoalsX"
            }
              , e = Math.abs(r) > 1 ? "s" : "";
            return h = n == 468 ? r == 0 ? "lbl_draw" : r > 0 ? u == 0 ? i ? o["los1" + e] : o["win1" + e] : i ? o["los2" + e] : o["win2" + e] : u == f - 1 ? i ? o["win1" + e] : o["los1" + e] : i ? o["win2" + e] : o["los2" + e] : r == 0 ? s["Goal" + e] : u == 0 ? s["less" + e] : u == f - 1 ? s.more : s["Goal" + e],
            t.LanguageHelper.Get(h).format([Math.abs(r)])
        },
        render: function() {
            for (var g, a, c, it, v, nt, u = this.getModel(), f = this.props.BetTypeId, y = u.get("Line"), l = u.get("hdp2"), p = l, r = this.props.Setting, tt = r.HasLine == 1 ? 0 : l - 1, w = this.props.Setting.HasLine == 1 ? 1 : -1, b = [], e = [[], []], i = 0; i < r.Options.length; i++) {
                var o = tt
                  , s = []
                  , h = r.HasLine == 1 ? y : y - l + 1
                  , d = i == 0 ? t.LanguageHelper.Get("lbl_home") : t.LanguageHelper.Get("lbl_away");
                for (r.HasLine == 0 && (d = i == 0 ? t.LanguageHelper.Get("lbl_Equal") + "/" + t.LanguageHelper.Get("lbl_over") : t.LanguageHelper.Get("lbl_Equal") + "/" + t.LanguageHelper.Get("lbl_under")),
                a = "",
                c = 0; c < p; c++)
                    it = null,
                    v = u.get("Selections").get(r.Options[i][o].Sel),
                    e[i].push(h + ":" + v.get("Price").toFixed(2)),
                    a = v.get("Price").toFixed(2),
                    s.push(n.createElement("div", {
                        className: "type_item"
                    }, n.createElement("div", {
                        className: "type_option"
                    }, this.GetSelTxt(f, i, h, c, p)), n.createElement("div", {
                        className: "type_odds"
                    }, "@", a))),
                    g = r.Options[i][o].betTeam,
                    o = o + w,
                    h = h - w;
                nt = {
                    Pty: u.get("Pty"),
                    MatchId: this.props.Match.get("OMid") ? this.props.Match.get("OMid") : u.get("MatchId"),
                    MarketId: u.get("MarketId"),
                    TeamAry: this.props.TeamAry,
                    T1V: this.props.Match.get("T1V"),
                    T2V: this.props.Match.get("T2V"),
                    SportID: this.props.Match.get("GameID"),
                    betInfo: e[i],
                    srcLine: u.get("Line"),
                    MatchModel: this.props.Match
                };
                (f == 468 && i == 1 || f == 469 && i == 0) && s.reverse();
                b.push(n.createElement("div", {
                    className: "bettype_item"
                }, n.createElement("div", {
                    className: "bettype_type type-scorebox"
                }, s), n.createElement(k.OddsField, {
                    Price: "1",
                    Line: "",
                    BetTypeId: f,
                    SelId: g,
                    Betting: nt,
                    nochg: !0,
                    IsNewStyle: !0,
                    NoShowLine: !0,
                    StrPrice: d
                })));
                s = []
            }
            return r.HasLine == 0 && (e[0].reverse(),
            e[1].reverse()),
            n.createElement(hi, {
                BetTypeTitle: r.Name()
            }, n.createElement("div", {
                className: "bettype_group"
            }, b))
        }
    })
      , cu = n.createBackboneClass({
        getInitialState: function() {
            return {
                isOpen: !1
            }
        },
        componentDidMount: function() {
            t.EventHub.on("PenaltyShootoutHelp", this.onClickHandler)
        },
        componentWillUnmount: function() {
            t.EventHub.off("PenaltyShootoutHelp", this.onClickHandler)
        },
        onClickHandler: function() {
            this.setState({
                isOpen: !this.state.isOpen
            })
        },
        render: function() {
            return n.createElement("div", {
                className: "dialog dialog-full",
                "data-status": this.state.isOpen ? "is-open" : ""
            }, n.createElement("div", {
                className: "dialog_container"
            }, n.createElement("div", {
                className: "dialog_header"
            }, n.createElement("div", {
                className: "dialog_title"
            }, t.LanguageHelper.Get("lbl_help"))), n.createElement("div", {
                className: "dialog_content"
            }, n.createElement("div", {
                className: "dialog_text"
            }, t.LanguageHelper.Get("lbl_PSCBF10Hint"))), n.createElement("div", {
                className: "dialog_footer"
            }, n.createElement("div", {
                className: "btn-box"
            }, n.createElement("div", {
                className: "btn btn-highlight",
                onClick: this.onClickHandler
            }, t.LanguageHelper.Get("lbl_ok"))))))
        }
    })
      , lu = n.createBackboneClass({
        render: function() {
            var r = this.props.title
              , u = this.props.ballStyle
              , f = this.props.ballStatus
              , t = this.props.isEmpty
              , i = this.props.isPause;
            return n.createElement("div", {
                className: "bettype_ball-" + u,
                "data-status": f,
                onClick: t || i ? null : this.props.onClickBall
            }, t ? null : i ? n.createElement("i", {
                className: "icon icon-pause"
            }) : r)
        }
    })
      , oi = n.createBackboneClass({
        onModelChange: function() {
            this.props.onClickBall()
        },
        render: function() {
            var r = this
              , u = this.props.team
              , f = this.props.choice
              , e = this.props.options
              , i = this.props.selectedValue
              , o = t.LanguageHelper.Get(i == "s" ? "lbl_Score" : "lbl_Miss");
            return n.createElement("div", {
                className: "bettype_item"
            }, n.createElement("div", {
                className: "bettype_type"
            }, o), f.split("").map(function(t, f) {
                var c = e[f].title()
                  , l = i == "s" ? "goal" : "miss"
                  , o = f < r.props.round
                  , s = r.props.isPause && !o
                  , h = o || s ? "is-disabled" : t == i ? "is-selected" : "is-unselect";console.log('3380>>>lu',lu);
                return n.createElement(lu, {
                    key: f + "_" + h,
                    title: c,
                    ballStyle: l,
                    ballStatus: h,
                    isEmpty: o,
                    isPause: s,
                    onClickBall: r.props.onClickBall.bind(null, u, f, i)
                })
            }))
        }
    })
      , ur = n.createBackboneClass({
        mixins: [n.BackboneMixin("tickets")],
        onModelChange: function() {
            this.props.tickets.findWhere({
                Bettype: 376
            }) ? this.forceUpdate() : this.setState({
                hChoice: "-----",
                aChoice: "-----",
                tPrice: 0
            })
        },
        updatePrice: function(n, t) {
            var i = {};
            return this.getModel().get("Selections").models.forEach(function(n) {
                return i[n.get("SelId")] = n.get("Price")
            }),
            (n + t).split("").reduce(function(n, t, r) {
                var u = r < 5 ? "h" : "a";
                return n ? n * (i[u + t] || 1) : i[u + t] || 0
            }, 0)
        },
        getInitialState: function() {
            return {
                hChoice: "-----",
                aChoice: "-----",
                tPrice: 0
            }
        },
        componentDidMount: function() {
            n.render(n.createElement(cu, null), document.getElementById("dialogMessage"))
        },
        componentWillUnmount: function() {
            n.unmountComponentAtNode(document.getElementById("dialogMessage"))
        },
        onClickHelp: function() {
            t.EventHub.trigger("PenaltyShootoutHelp")
        },
        onClickBall: function(n, t, i) {
            var r = this.state.hChoice
              , u = this.state.aChoice;
            n == "h" ? r = r.substring(0, t) + (r[t] != i ? i : "-") + r.substring(t + 1) : n == "a" ? u = u.substring(0, t) + (u[t] != i ? i : "-") + u.substring(t + 1) : n == "-" && (r = "-----",
            u = "-----");
            tPrice = this.updatePrice(r, u);
            this.setState({
                hChoice: r,
                aChoice: u,
                tPrice: tPrice
            })
        },
        Bet: function(n, t) {
            if (window._SiteMode == "2" && typeof st.get("ActStatus") != "undefined" && st.get("ActStatus") == 1)
                k.depositBeforeBet();
            else {
                var i = this.getModel()
                  , r = {
                    type: lt.get("type"),
                    seqno: null,
                    gameid: 1,
                    pty: i.get("Pty"),
                    bettype: i.get("BetTypeId"),
                    oddsid: i.get("MarketId"),
                    betteam: this.state.hChoice + this.state.aChoice,
                    odds: n,
                    Line: t + "",
                    home: this.props.TeamAry[0],
                    away: this.props.TeamAry[1],
                    Hscore: this.props.score[0],
                    Ascore: this.props.score[1],
                    stake: 0,
                    ChoiceValue: 0,
                    errorcode: "",
                    payout: 0,
                    MRPercentage: null,
                    Matchid: i.get("MatchId"),
                    hasCashOut: !1,
                    SrcOddsInfo: null,
                    srcLine: i.get("Line")
                };
                at.addTicket(r)
            }
        },
        render: function() {
            var o = this.state.hChoice
              , s = this.state.aChoice
              , i = this.state.tPrice
              , r = this.props.Setting
              , h = this.props.TeamAry
              , c = this.getModel()
              , u = c.get("IsCP")
              , f = c.get("Line")
              , l = u ? "" : t.LanguageHelper.Get("lbl_SelComboOdds")
              , a = t.LanguageHelper.Get("lbl_Reset")
              , e = this.getModel().get("Selections").models;
			  
            return n.createElement("div", {
                className: "bettype bettype-penalty"
            }, n.createElement("div", {
                className: "bettype_title"
            }, n.createElement("span", null, r.Name()), n.createElement("div", {
                className: "btn",
                "js-btn-penalty": ""
            }, n.createElement("i", {
                className: "icon icon-info-outline",
                onClick: this.onClickHelp
            }))), n.createElement("div", {
                className: "bettype_col"
            }, n.createElement("div", {
                className: "special_title"
            }, h[0]), n.createElement("div", {
                className: "commatch_content"
            }, n.createElement("div", {
                className: "commatch_bettype"
            }, n.createElement("div", {
                className: "bettype_list"
            }, n.createElement("div", {
                className: "bettype_group"
            }, n.createElement(oi, {
                model: e[0],
                team: "h",
                choice: o,
                options: r.Options[0],
                selectedValue: "s",
                isPause: u,
                round: f,
                onClickBall: this.onClickBall
            }), n.createElement(oi, {
                model: e[1],
                team: "h",
                choice: o,
                options: r.Options[1],
                selectedValue: "m",
                isPause: u,
                round: f,
                onClickBall: this.onClickBall
            }))))), n.createElement("div", {
                className: "special_title"
            }, h[1]), n.createElement("div", {
                className: "commatch_content"
            }, n.createElement("div", {
                className: "commatch_bettype"
            }, n.createElement("div", {
                className: "bettype_list"
            }, n.createElement("div", {
                className: "bettype_group"
            }, n.createElement(oi, {
                model: e[2],
                team: "a",
                choice: s,
                options: r.Options[2],
                selectedValue: "s",
                isPause: u,
                round: f,
                onClickBall: this.onClickBall
            }), n.createElement(oi, {
                model: e[3],
                team: "a",
                choice: s,
                options: r.Options[3],
                selectedValue: "m",
                isPause: u,
                round: f,
                onClickBall: this.onClickBall
            })))))), n.createElement("div", {
                className: "bettype_col-odds"
            }, n.createElement("div", {
                className: "bettype_oddsbox 3558",
                onClick: i ? this.Bet.bind(this, Math.round(i * 100) / 100, f) : null
            }, i ? n.createElement("div", {
                className: "oddsbox_odds 3561",
                id: 'oddsbox_odds_3562_'+i,
            }, " ", w.fixedDecimal(Math.round(i * 100) / 100, 2)) : n.createElement("span", {
                className: "text"
            }, l)), n.createElement("div", {
                className: "btn btn-highlight",
                "data-status": i ? "" : "is-disabled",
                onClick: i ? this.onClickBall.bind(this, "-") : null
            }, a)))
        }
    })
      , au = function(t, i, r, u, f, e, o) {
        var c = t[0], h = c.get("BetTypeId"), s = ct.BetTypeSetting[h], v;
        if (s) {
            var l = r + "_" + c.get("MarketId")
              , a = s.Name(c, c.get("Resourceid"))
              , y = [f.get("T1V"), f.get("T2V")];
            if (h >= 154 && h <= 156 && (a = s.Name().replace(/x/, parseInt(c.get("Resourceid")))),
            v = lt.get("sportId"),
            v == 5 && (h == 1 || h == 2 || h == 3) && (a = s.Name(v, c.get("Resourceid"))),
            s)
                switch (s.Col) {
                case 0:
                case -1:
                    s.HasLine == 0 || s.HasLine == 1 ? e.push(n.createElement(ku, {
                        key: l,
                        index: l,
                        IsSpecial: o,
                        BetTypeId: h,
                        BetTypeName: a,
                        TeamAry: u,
                        model: f,
                        MarketArray: t,
                        Setting: s
                    })) : e.push(n.createElement(si, {
                        key: l,
                        index: l,
                        IsSpecial: o,
                        BetTypeId: h,
                        BetTypeName: a,
                        TeamAry: u,
                        model: f,
                        MarketArray: t,
                        Setting: s
                    }));
                    break;
                case -3:
                    e.push(n.createElement(hi, {
                        IsDropdown: !0,
                        BetTypeTitle: s.Name(c, c.get("Resourceid")),
                        BetTypeId: h
                    }, n.createElement(vi, {
                        key: l,
                        IsNewStyle: !0,
                        index: l,
                        TeamAry: u,
                        Match: f,
                        model: c,
                        Setting: s
                    })));
                    e.push(n.createElement(ou, {
                        model: c,
                        Match: f,
                        TeamAry: u,
                        Setting: s,
                        BetTypeId: h
                    }));
                    break;
                case -4:
                    e.push(n.createElement(hu, {
                        model: c,
                        IsSpecial: o,
                        BetTypeId: h,
                        TeamAry: u,
                        Match: f,
                        LeagueId: f.get("LeagueId"),
                        Setting: s
                    }));
                    break;
                case -5:
                    e.push(n.createElement(si, {
                        key: l,
                        HasLine: !0,
                        IsSpecial: o,
                        index: l,
                        BetTypeId: h,
                        BetTypeName: a,
                        TeamAry: u,
                        model: f,
                        MarketArray: t,
                        Setting: s
                    }));
                    break;
                case -6:
                    e.push(n.createElement(ur, {
                        model: c,
                        TeamAry: u,
                        score: y,
                        Setting: s,
                        tickets: at.getDicPanel("s").model.get("tickets")
                    }));
                    break;
                default:
                    e.push(n.createElement(si, {
                        key: l,
                        IsSpecial: o,
                        index: l,
                        BetTypeId: h,
                        BetTypeName: a,
                        TeamAry: u,
                        model: f,
                        MarketArray: t,
                        Setting: s
                    }))
                }
        }
    }
      , yi = function(t, i, r, u, f, e, o) {
        var v, y, a;
        if (st.get("IsNewStyle") && !(f.get("GameID") >= 190 && f.get("GameID") <= 197) && f.get("GameID") != 43) {
            au(t, i, r, u, f, e, o);
            return
        }
        var h = t[0]
          , c = h.get("BetTypeId")
          , s = ct.BetTypeSetting[c]
          , l = r + "_" + h.get("MarketId");
        if (c == 9088 && (v = s._Options[f.get("BOF")],
        s.Options = v),
        s)
            switch (s.Col) {
            case -1:
                e.push(n.createElement(fi, {
                    key: l,
                    index: l,
                    BetTypeId: c,
                    BetTypeName: s.Name(h, h.get("Resourceid")),
                    TeamAry: u,
                    model: f,
                    MarketArray: t,
                    Setting: s
                }));
                break;
            case -2:
                e.push(n.createElement(fi, {
                    key: l,
                    index: l,
                    BetTypeId: c,
                    BetTypeName: s.Name(lt.get("sportId"), h.get("Resourceid")),
                    TeamAry: u,
                    model: f,
                    MarketArray: t,
                    Setting: s,
                    Col: -2
                }));
                break;
            case -3:
                y = n.createElement(rr, {
                    model: h,
                    Match: f,
                    TeamAry: u,
                    Setting: s
                });
                e.push(n.createElement(ti, {
                    Other: y,
                    match: f,
                    LeagueId: f.get("LeagueId"),
                    betTypeName: s.Name(h),
                    TeamAry: u,
                    BetTypeId: c
                }, n.createElement(vi, {
                    key: l,
                    index: l,
                    TeamAry: u,
                    Match: f,
                    model: h,
                    Setting: s
                })));
                break;
            case -4:
                e.push(n.createElement(su, {
                    model: h,
                    BetTypeId: c,
                    TeamAry: u,
                    Match: f,
                    LeagueId: f.get("LeagueId"),
                    Setting: s,
                    BetTypeId: c
                }));
                break;
            case -6:
                e.push(n.createElement(ur, {
                    model: h,
                    TeamAry: u,
                    Setting: s
                }));
                break;
            default:
                a = "";
                a = c == 612 || c >= 614 && c <= 617 ? s.Name(h, h.get("Resourceid")) : c >= 154 && c <= 156 ? s.Name().replace(/x/, parseInt(h.get("Resourceid"))) : s.Name(lt.get("sportId"), h.get("Resourceid"));
                e.push(n.createElement(fi, {
                    key: l,
                    index: l,
                    BetTypeId: c,
                    BetTypeName: a,
                    TeamAry: u,
                    model: f,
                    MarketArray: t,
                    Setting: s
                }))
            }
    }
      , pi = function(n, t, i, r, u, f) {
        var s = this
          , o = 0
          , e = []
          , h = i.get("GameID") ? i.get("GameID") : lt.get("sportId");
        n.map(function(n) {
            var s = n.get("BetTypeId"), h = ct.BetTypeSetting[s], c;
            !!h && n.get("Resourceid") && n.get("Resourceid").length > 0 && (h.Col != -2 || h.RidSplit) && (s = n.get("Resourceid").length > 2 ? s + ":" + n.get("Resourceid").substr(0, 2) : s + ":" + n.get("Resourceid"));
            s != o && o != 0 && (yi(e, 0, r, t, i, u, f),
            e = []);
            o = s;
            e.push(n);
            i.get("MBO") == 0 && n.get("isMMR") && (c = n.clone(),
            c.set("notUseMMR", !0),
            e.push(c))
        });
        e.length > 0 && yi(e, 0, r, t, i, u, f)
    }
      , wi = n.createBackboneClass({
        componentDidMount: function() {
            t.EventHub.bind("refresCategoryGroup-" + this.props.MainMatch.get("MatchId"), this.refreshCategoryGroup, this)
        },
        componentWillUnmount: function() {
            t.EventHub.off("refreshCategoryGroup-" + this.props.MainMatch.get("MatchId"), this.refreshCategoryGroup, this)
        },
        refreshCategoryGroup: function() {
            this.forceUpdate()
        },
        render: function() {
            var u = this, i = [], c = [], o = this.props.BetTypeSeq, e = $.extend({}, this.props.cData, this.props.mData), r = this.props.MainMatch, l = this, h = [t.TeamNameRef.GetName(r.get("TeamId1")), t.TeamNameRef.GetName(r.get("TeamId2"))], a, s, v;
            if (this.getCollection() && (~[2, 3].indexOf(r.get("GameID")) ? Object.keys(e).length || this.getCollection().map(function(n) {
                var t = n.get("BetTypeId");
                e[t] == null && (e[t] = []);
                e[t].push(n)
            }) : ~[50].indexOf(r.get("GameID")) ? function() {
                var n = {};
                u.getCollection().map(function(t) {
                    var i = t.get("BetTypeId");
                    n[i] == null && (n[i] = []);
                    n[i].push(t)
                });
                f.CreateCategoryGroup(n, o, h, r, l.props.index, i)
            }() : pi(this.getCollection(), h, r, l.props.index, i)),
            e != null) {
                if (r.get("GameID") == 50)
                    f.CreateCategoryGroup(e, o, h, r, l.props.index, i);
                else
                    for (a = 0; a < o.length; a++)
                        s = e[o[a]],
                        s && (s[0].get("Resourceid") && s[0].get("Resourceid").length > 0 ? pi(s, h, r, l.props.index, i) : yi(s, this.props.number, this.props.index, h, r, i));
                r.get("GameID") != 2 || !~[0, 8].indexOf(this.props.number) || function() {
                    var r = {
                        0: [612, 609, 610, 611],
                        8: [612, 609, 610, 611, 614, 615, 616, 613, 627, 628, 629, 617, 630, 631]
                    }, n = -1, t, f;
                    r[u.props.number].some(function(t) {
                        return i.some(function(i, r) {
                            if (i.props.BetTypeId == t)
                                return n = r,
                                !0
                        }),
                        n != -1 ? !0 : void 0
                    });
                    n != -1 && (i.sort(function(n, t) {
                        return n.props.MarketArray[0].get("Resourceid").substring(0, 2) - t.props.MarketArray[0].get("Resourceid").substring(0, 2)
                    }),
                    t = -1,
                    i.some(function(n, i) {
                        if (r[u.props.number].some(function(t) {
                            return t == n.props.BetTypeId
                        }))
                            return t = i,
                            !0
                    }),
                    f = i.splice(t),
                    f.forEach(function(t, r) {
                        i.splice(n + r, 0, t)
                    }))
                }()
            }
            return (v = this.props.sData,
            v != null && function() {
                var i = [], r;
                _.sortBy(v, function(n) {
                    return n.get("CMT")
                }).forEach(function(n) {
                    var t = n.get("LeagueId");
                    i.length && ~i.indexOf(t) || i.push(t)
                });
                r = _.groupBy(v, function(n) {
                    return n.get("LeagueId")
                });
                i.forEach(function(i, f) {
                    var s = [], e = !1, h;
                    r[i].forEach(function(f, h) {
                        if (cmt = f.get("CMT"),
                        cmt == 202 && (e = !0),
                        cmt != 203 || !e) {
                            var a = [t.TeamNameRef.GetName(f.get("TeamId1")), t.TeamNameRef.GetName(f.get("TeamId2"))]
                              , l = u.props.index + "_Special_" + i + "_" + h;
                            u.props.IsNewStyle ? s.push(n.createElement(du, {
                                key: l,
                                index: l,
                                MatchList: e ? r[i] : [f],
                                TeamAry: a,
                                bettypeseq: o,
                                id: 3879
                            })) : c.push(n.createElement(gu, {
                                key: l,
                                index: l,
                                MatchList: e ? r[i] : [f],
                                TeamAry: a,
                                bettypeseq: o,
                                id: 3886
                            }))
                        }
                    });
                    u.props.IsNewStyle && (h = u.props.index + "_Special_title_" + i + "_" + f,
                    c.push(n.createElement("div", {
                        key: h,
                        className: "bettype bettype-child-match"
                    }, n.createElement("div", {
                        className: "bettype_title"
                    }, t.LeagueNameRef.GetName(i)), s)))
                })
            }(),
            this.props.IsNewStyle) ? (ct.SortSetting.SortBettype(i),
            n.createElement("div", {
                className: "comtab_panel  3899",
                id: "more-category" + this.props.number + "-" + this.props.matchid,
                "data-status": this.props.activeCls == "" ? "" : "is-open"
            }, c, r.get("GameID") == 50 ? n.createElement("div", {
                className: "c-bettype-group"
            }, i) : i)) : n.createElement("div", {
                className: "tab_panel",
                id: "more-category" + this.props.number + "-" + this.props.matchid,
                style: this.props.activeCls == "" ? {
                    display: "none"
                } : {
                    display: "block"
                }
            }, c, i)
        }
    })
      , fr = n.createClass({
        displayName: "FastMarketsTime",
        getInitialState: function() {
            return {
                value: 0
            }
        },
        change: function(n) {
            if (this.setState({
                value: n
            }),
            this.props.onchange)
                this.props.onchange(n)
        },
        render: function() {
            for (var i = [], r = "", t = 0; t < 90; t++)
                this.state.value == t && (r = ct.FastMarketTimerList(t, 0)),
                i.push(n.createElement("li", {
                    key: t,
                    className: this.state.value == t ? "active" : ""
                }, n.createElement("a", {
                    onClick: this.change.bind(this, t)
                }, ct.FastMarketTimerList(t, 0))));
            return this.props.IsNewStyle ? n.createElement("div", {
                className: "dropdown dropdown-full"
            }, n.createElement("div", {
                className: "btn",
                "data-toggle": "dropdown",
                "aria-expanded": "false"
            }, n.createElement("div", {
                className: "btn_text"
            }, r)), n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, i)) : n.createElement("div", {
                className: "betType betType-row betType-full"
            }, n.createElement("div", {
                className: "dropdown dropdown-odds"
            }, n.createElement("div", {
                className: "btn btn-select",
                "data-toggle": "dropdown",
                "aria-expanded": "false"
            }, n.createElement("div", null, r)), n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, i)))
        }
    })
      , vu = n.createClass({
        displayName: "FastMarketsGroup",
        getInitialState: function() {
            var n = lt.get("market");
            return this.props.MainMatch.get("MaT") && (n = this.props.MainMatch.get("MaT")),
            {
                value: n == "l" ? -1 : 0
            }
        },
        change: function(n) {
            this.setState({
                value: parseInt(n)
            })
        },
        render: function() {
            var o = [], c = this.props.BetTypeSeq, l = this.props.cData, a = this.props.IsNewStyle, p = a ? si : fi, v, u, s, r, y, f, i, e, h;
            if (l != null)
                for (v = [t.TeamNameRef.GetName(this.props.MainMatch.get("TeamId1")), t.TeamNameRef.GetName(this.props.MainMatch.get("TeamId2"))],
                u = 0; u < c.length; u++)
                    if (s = l[c[u]],
                    s)
                        for (r = _.sortBy(s, function(n) {
                            return parseInt(n.get("Line"))
                        }),
                        y = this.state.value > -1 ? r.length : r.length > 2 ? 3 : r.length,
                        f = 0; f < y; f++)
                            (i = r[f],
                            this.state.value > -1 && parseInt(i.get("Line")) != this.state.value) || (e = ct.BetTypeSetting[i.get("BetTypeId")],
                            h = this.props.index + "_" + i.get("MarketId"),
                            e && o.push(n.createElement(p, {
                                IsFastMarket: !0,
                                key: h,
                                index: h,
                                BetTypeId: i.get("BetTypeId"),
                                BetTypeName: e.Name(i, i.get("Resourceid")),
                                TeamAry: v,
                                model: this.props.MainMatch,
                                MarketArray: [i],
                                Setting: e
                            })));
            return a ? n.createElement("div", {
                className: "comtab_panel 4004",
                id: "more-category" + this.props.number + "-" + this.props.matchid,
                "data-status": this.props.activeCls == "" ? "" : "is-open"
            }, this.state.value > -1 ? n.createElement("div", {
                className: "bettype"
            }, n.createElement("div", {
                className: "bettype_title"
            }, t.LanguageHelper.Get("l_time")), n.createElement(fr, {
                IsNewStyle: !0,
                onchange: this.change
            })) : null, o) : n.createElement("div", {
                className: "tab_panel",
                id: "more-category" + this.props.number + "-" + this.props.matchid,
                style: this.props.activeCls == "" ? {
                    display: "none"
                } : {
                    display: "block"
                }
            }, this.state.value > -1 ? n.createElement("div", {
                className: "betType_name"
            }, t.LanguageHelper.Get("l_time")) : null, this.state.value > -1 ? n.createElement(fr, {
                onchange: this.change
            }) : null, o)
        }
    })
      , er = n.createBackboneClass({
        componentDidMount: function() {
            this.props.MainMatch.get("PlayInfo") && this.props.MainMatch.get("PlayInfo").Start()
        },
        componentWillMount: function() {
            var n = this, i, r;
            t.EventHub.on("SetDefTab-" + this.props.MainMatch.get("MatchId"), function(t) {
                n.defTab = t;
                n.forceUpdate()
            });
            this.props.defTab ? n.defTab = this.props.defTab : this.props.defTab || (i = this.props.MainMatch,
            r = i.get("GameID") ? i.get("GameID") : lt.get("sportId"),
            r == 43 && (n.defTab = -99))
        },
        componentWillUnmount: function() {
            t.EventHub.off("SetDefTab-" + this.props.MainMatch.get("MatchId"));
            this.props.MainMatch.get("PlayInfo") && this.props.MainMatch.get("PlayInfo").Stop()
        },
        SelectTab: function(n) {
            this.defTab = n;
            this.forceUpdate()
        },
        changeTab: function(n) {
            var i = this.keymapping.indexOf(this.defTab), t;
            i == -1 && (i = 0);
            t = i + n;
            t > this.keymapping.length - 1 && (t = this.keymapping.length - 1);
            t < 0 && (t = 0);
            t != i && (this.defTab = this.keymapping[t],
            this.forceUpdate())
        },
        GetCat: function(n) {
            var i = n.get("BetTypes").at(0)
              , t = i.get("Cat");
            return t > 10 && (t = t - 10),
            t
        },
        render: function() {
            var p = this.props.IsNewStyle, tt = this.getModel().get("SpMatch"), k = [], r = this.props.MainMatch, e = r.get("MatchId"), f = r.get("GameID") ? r.get("GameID") : lt.get("sportId"), it = f == 3 ? r.get("BetTypes") : this.getModel().get("Markets"), u = [], h = [], c = [], l = [], s, v, y, nt, d, w, i, o, a, g, b;
            if (tt.map(function(n) {
                var t = 1
                  , t = n.get("CMT") == null ? this.GetCat(n) : lt.GetCategory(n.get("CMT"));
                h[t] == null && (h[t] = []);
                h[t].push(n)
            }
            .bind(this)),
            u[0] = {},
            (r.get("Moc") > 0 || f == 3) && it.map(function(n) {
                var i = n.get("Cat")
                  , t = n.get("BetTypeId");
                if (f != 43 || t != 20 && t != 1 && t != 3)
                    [2807, 2809, 2811, 2812].indexOf(t) > -1 && (i = 1),
                    [2808].indexOf(t) > -1 && (i = 2),
                    !~[9088].indexOf(t) || (i = 0,
                    r.attributes.BetTypes.push(n)),
                    i > 10 && (i = i - 10),
                    i > 0 && (f == 43 || ct.CategorySetting[ct.CategorySeq[i]].BetTypeSeq.indexOf(t) > -1) && f != 3 && (u[i] == null && (u[i] = {}),
                    u[i][t] == null && (u[i][t] = []),
                    u[i][t].push(n)),
                    (f != 2 && n.get("Pim") || f == 2 && !~[401, 402, 403, 404].indexOf(t) || f == 3 || f == 50) && ct.CategorySetting.Main.BetTypeSeq.indexOf(t) > -1 && (u[0] == null && (u[0] = {}),
                    u[0][t] == null && (u[0][t] = []),
                    u[0][t].push(n))
            }),
            s = !1,
            f == 43 && this.defTab == -99 ? (this.defTab = u[r.get("CMP")] != null ? r.get("CMP") : u[r.get("CMP") + 1] != null ? r.get("CMP") + 1 : 0,
            s = !0) : (this.defTab && (u[this.defTab] != null || h[this.defTab] != null) || this.defTab == 34 || this.defTab == -99) && (s = !0),
            !s && this.defTab && (this.defTab = 0),
            v = "",
            y = [],
            f == 43)
                for (i = 0; i < 10; i++)
                    (i == 0 || u[i] != null || h[i] != null) && (o = "",
                    (!s && c.length == 0 || s && this.defTab == i) && (o = "is-active"),
                    v += i + "-",
                    a = "Category_" + i + "_" + e,
                    nt = i == 0 ? ct.CategorySetting.Main.Title(f) : t.LanguageHelper.Get("lbl_map" + i) ? t.LanguageHelper.Get("lbl_map" + i) : "Map " + i,
                    y.push(i),
                    c.push(n.createElement("li", {
                        className: r.get("IsLive") && r.get("ISS") == 0 && r.get("CMP") == i ? "is-inplay" : "",
                        id: "more-category" + i,
                        key: a,
                        "data-status": o,
                        onClick: this.SelectTab.bind(this, i)
                    }, n.createElement("div", {
                        className: "btn"
                    }, nt))),
                    o == "is-active" && l.push(n.createElement(kt.ChView, {
                        CategoryGroup: wi,
                        MoreSpecialRow2: nf,
                        HdpOU: ii,
                        MoreBeTypeGroup: ti,
                        key: i + "_" + e,
                        MainMatch: r,
                        MainGroup: i == 0 ? r.get("BetTypes") : null,
                        index: a,
                        activeCls: o,
                        cData: u[i],
                        sData: h[i],
                        matchid: "" + e + this.props.IsSingleModel,
                        number: i,
                        BetTypeSeq: ct.CategorySetting[ct.CategorySeq[i]].BetTypeSeq
                    })));
            else {
                for (d = p ? "combtn" : "btn",
                w = 0; w < ct.CategorySeq.length; w++)
                    i = ct.CategorySort[w],
                    (u[i] != null || h[i] != null) && (o = "",
                    (!s && c.length == 0 || s && this.defTab == i) && (o = "is-active"),
                    v += i + "-",
                    a = "Category_" + i + "_" + e,
                    y.push(i),
                    g = 0,
                    c.push(n.createElement("li", {
                        id: "more-category" + i,
                        key: a,
                        "data-status": o,
                        onClick: this.SelectTab.bind(this, i)
                    }, n.createElement("div", {
                        className: d
                    }, ct.CategorySetting[ct.CategorySeq[i]].Title(f) + (g > 0 ? "(" + g + ")" : ""), ct.CategorySeq[i] == "Fastmarket" ? n.createElement("i", {
                        className: "icon icon-fastmarket"
                    }) : null))),
                    o == "is-active" && (ct.CategorySeq[i] == "Fastmarket" ? l.push(n.createElement(vu, {
                        key: i + "_" + e,
                        IsNewStyle: p,
                        MainMatch: r,
                        index: a,
                        activeCls: o,
                        cData: u[i],
                        sData: h[i],
                        matchid: "" + e + this.props.IsSingleModel,
                        number: i,
                        BetTypeSeq: ct.CategorySetting[ct.CategorySeq[i]].BetTypeSeq
                    })) : l.push(n.createElement(wi, {
                        IsNewStyle: p,
                        key: i + "_" + e,
                        MainMatch: r,
                        collection: ct.CategorySeq[i] == "Main" ? r.get("BetTypes") : null,
                        index: a,
                        activeCls: o,
                        mData: u[0],
                        cData: u[i],
                        sData: h[i],
                        matchid: "" + e + this.props.IsSingleModel,
                        number: i,
                        BetTypeSeq: ct.CategorySetting[ct.CategorySeq[i]].BetTypeSeq
                    }))));
                lt.get("type") != "parlay" && r.get("ID34") && (f == "1" && st.get("SMP_1") || f == "2" && st.get("SMP_2")) && (b = "",
                (!s && c.length == 0 || s && this.defTab == 34) && (b = "is-active"),
                y.push(34),
                c.push(n.createElement("li", {
                    key: "ID34",
                    onClick: this.SelectTab.bind(this, 34),
                    "data-status": b
                }, n.createElement("div", {
                    className: d
                }, t.LanguageHelper.Get("lbl_SingleMatchParlay")))),
                l.push(n.createElement(yu, {
                    key: "34_" + e,
                    MainMatch: r,
                    activeCls: b,
                    matchid: "" + e + this.props.IsSingleModel
                })));
                window._ShowStaticInfo && r.get("ext") && this.defTab == -99 && l.push(n.createElement(pu, {
                    key: "Statistics",
                    MainMatch: r,
                    activeCls: "is-active"
                }))
            }
            return (this.keymapping = y,
            p && f != 43) ? n.createElement(wu, {
                tabArray: c,
                tabContent: l,
                MainMatch: r,
                changeTab: this.changeTab
            }) : (k.push(n.createElement("ul", {
                key: "tab-" + v,
                className: "tab tab-single"
            }, c)),
            k.push(n.createElement("div", {
                key: "tabCon-" + v,
                className: "tab-content"
            }, l)),
            n.createElement("div", {
                className: "tab_block",
                id: "more-bettype-" + e + this.props.IsSingleModel
            }, k))
        }
    })
      , bi = {
        _list: {},
        add: function(n, t) {
            this._list[n] = t
        },
        remove: function(n) {
            this._list[n] && delete this._list[n]
        },
        get: function(n) {
            return this._list[n]
        }
    }
      , yu = n.createClass({
        displayName: "BetBuilderGroup",
        componentDidMount: function() {
            bi.add(this.props.MainMatch.get("ID34"), this.props.MainMatch.get("MatchId"))
        },
        componentWillUnmount: function() {
            bi.remove(this.props.MainMatch.get("ID34"))
        },
        render: function() {
            var i = t.CultureToRef(st.get("Language"));
            return n.createElement("div", {
                className: "comtab_panel",
                id: "more-category34-" + this.props.matchid,
                "data-status": this.props.activeCls == "" ? "" : "is-open"
            }, n.createElement("iframe", {
                width: "100%",
                height: "500",
                src: "./AuthorizationCustomer/AuthorizationSingleMatchParlay?FixtureId=" + this.props.MainMatch.get("ID34") + "&lang=" + i,
                frameborder: "0"
            }))
        }
    })
      , pu = n.createClass({
        displayName: "Statistics",
        render: function() {
            return n.createElement("div", {
                className: "comtab_panel",
                "data-status": this.props.activeCls == "" ? "" : "is-open"
            }, n.createElement("iframe", {
                width: "100%",
                height: "500",
                src: "/ExtraInfo/GameInfo?MatchId=" + this.props.MainMatch.get("MatchId"),
                frameborder: "0"
            }))
        }
    })
      , wu = n.createBackboneClass({
        mixins: [it.MatchInfoMixins],
        OpenStatistics: function() {
            t.EventHub.trigger("SetDefTab-" + this.props.MainMatch.get("MatchId"), -99)
        },
        OpenSaba: function() {
            ki(this.props.MainMatch, 16)
        },
        scrollEvent: function() {
            var i = 0
              , r = $(n.findDOMNode(this.refs.comtab_group))
              , t = $(n.findDOMNode(this.refs.comtab));
            t.children().each(function() {
                i += $(this).outerWidth(!0)
            });
            i > t.innerWidth() && (i - t.scrollLeft() - t.innerWidth() < 0 ? r.removeAttr("data-arrow") : r.attr("data-arrow", "true"))
        },
        componentDidMount: function() {
            var i = $(n.findDOMNode(this.refs.tabContent))
              , r = $(n.findDOMNode(this.refs.comtab));
            this.gs = new t.GuestureSlide(i,this.props.changeTab);
            r.on("scroll", this.scrollEvent);
            this.scrollEvent()
        },
        componentWillUnmount: function() {
            this.gs && this.gs.Dispose();
            var t = $(n.findDOMNode(this.refs.comtab));
            t.off("scroll", this.scrollEvent)
        },
        render: function() {
            var i = this.props.MainMatch
              , u = [t.TeamNameRef.GetName(i.get("TeamId1")), t.TeamNameRef.GetName(i.get("TeamId2"))]
              , r = i.get("BetTypes").HasTimeMachine && i.get("BetTypes").tmCollection && i.get("BetTypes").tmCollection.length > 0 && this.getTMTime(this.GetShowTimeCN(i), null, !0) < 91
              , f = r ? this.GetShowTimeCN(i) : null;
            return n.createElement("div", {
                className: "comtab_block"
            }, n.createElement("div", {
                ref: "comtab_group",
                className: "comtab_group"
            }, n.createElement("ul", {
                ref: "comtab",
                className: "comtab"
            }, this.props.tabArray, i.get("LDM2") ? n.createElement("li", null, n.createElement("a", {
                className: "combtn",
                onClick: this.OpenSaba
            }, t.LanguageHelper.Get("lbl_Fixture"))) : null), n.createElement("div", {
                className: "comtab_arrow"
            }), window._ShowStaticInfo && i.get("ext") ? n.createElement("div", {
                className: "btn btn-statistics",
                onClick: this.OpenStatistics
            }, n.createElement("i", {
                className: "icon icon-statistics"
            })) : null, window._CanSeeLiveTips && window._UseNewAppBar && window._SignalRConnectStatus && window._leaguesSupportLiveTips.includes(i.get("LeagueId")) ? n.createElement(k.BellButton, {
                model: i
            }) : null, n.createElement(k.RefreshButton, null)), r ? n.createElement(e.TimeMachine, {
                show: !0,
                match: i,
                TeamAry: u,
                collection: i.get("BetTypes").tmCollection,
                time: f,
                type: "singleMatch"
            }) : null, lt.HasScoresCards(i) ? n.createElement(hr, {
                match: i,
                isMiniScoreCards: !1
            }) : null, n.createElement("div", {
                ref: "tabContent"
            }, this.props.tabContent))
        }
    })
      , ti = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsOpen: !0,
                Show: 0
            }
        },
        OpenList: function() {
            var t = this
              , i = $(n.findDOMNode(this.refs.betType));
            this.state.IsOpen ? i.children(".betType_list").slideUp(300, function() {
                t.setState({
                    IsOpen: !1
                })
            }) : i.children(".betType_list").slideDown(300, function() {
                t.setState({
                    IsOpen: !0
                })
            })
        },
        clickhelp: function(n) {
            n.stopPropagation();
            var i;
            switch (this.props.BetTypeId) {
            case 221:
                i = t.LanguageHelper.Get("lbl_NextMinute");
                break;
            case 223:
                i = t.LanguageHelper.Get("lbl_Whatwillhappen");
                break;
            case 225:
                i = t.LanguageHelper.Get("lbl_NextMinutePiece");
                break;
            case 222:
                i = t.LanguageHelper.Get("lbl_NextMinute");
                break;
            case 224:
                i = t.LanguageHelper.Get("lbl_Whatwillhappen");
                break;
            case 226:
                i = t.LanguageHelper.Get("WhichCombinationNext");
                break;
            case 227:
                i = t.LanguageHelper.Get("WhichCombinationNext");
                break;
            case 468:
                i = t.LanguageHelper.Get("lbl_ScoreBoxHDPeHint");
                break;
            case 469:
                i = t.LanguageHelper.Get("lbl_ScoreBoxOUHint")
            }
            $(".dialog").attr("data-status", "is-open");
            $("#FirstMarketHelp").html(i)
        },
        render: function() {
            var i = this.props.match, r, u;
            return this.props.betTypeName ? r = i.get("GameID") == 43 && i.get("IsLive") && i.get("ISS") == 0 && this.props.BetTypeId == 9001 && i.get("CMP") == parseInt(this.props.Resourceid) ? n.createElement("div", {
                className: "betType_name is-inplay"
            }, this.props.betTypeName, n.createElement("span", {
                className: "betType_inplay"
            }, t.LanguageHelper.Get("lbl_Status_InPlay"))) : n.createElement("div", {
                className: "betType_name"
            }, this.props.betTypeName) : (u = this.props.score ? this.props.score : n.createElement("div", {
                className: "match_versus"
            }, "vs"),
            i.get("GameID") == 43 && (u = n.createElement("div", {
                className: "match_versus"
            }, "vs")),
            r = n.createElement("div", {
                className: "betType_specialLeague"
            }, n.createElement("div", {
                className: "betType_name"
            }, t.LeagueNameRef.GetName(this.props.LeagueId)), n.createElement(di, {
                Rc1: this.props.match.get("Rc1"),
                Rc2: this.props.match.get("Rc2"),
                sportid: this.props.match.get("GameID"),
                IsSingle: !1,
                HomeName: this.props.TeamAry[0],
                AwayName: this.props.TeamAry[1]
            }, u))),
            n.createElement("div", {
                className: "betType_block",
                "data-status": this.state.IsOpen ? "is-open" : ""
            }, n.createElement("div", {
                className: "betType_header",
                onClick: this.OpenList
            }, r, this.props.IsFastMarket || this.props.BetTypeId == 468 || this.props.BetTypeId == 469 ? n.createElement("div", {
                className: "btn btn-help",
                onClick: this.clickhelp
            }, " ", n.createElement("i", {
                className: "icon icon-help-outline"
            })) : null, n.createElement("div", {
                className: "btn"
            }, n.createElement("i", {
                className: "icon icon-arrow-up"
            }))), n.createElement("div", {
                ref: "betType",
                style: this.state.IsOpen ? {
                    display: "block"
                } : {
                    display: "none"
                }
            }, n.createElement("div", {
                className: "betType_list"
            }, this.props.children ? this.props.children : this.props.List), this.props.Other))
        }
    })
      , or = n.createBackboneClass({
        changeOptions: "change:MoneyH",
        getInitialState: function() {
            return {
                MoneyH: this.getModel().get("MoneyH"),
                MoneyA: this.getModel().get("MoneyA"),
                UserH: this.getModel().get("UserH"),
                UserA: this.getModel().get("UserA"),
                change: !1,
                showDialog: 0
            }
        },
        componentWillUnmount: function() {
            this.Timer && clearTimeout(this.Timer)
        },
        componentDidUpdate: function() {
            this.cheakData()
        },
        componentDidMount: function() {
            this.cheakData()
        },
        OpenDialog: function(n) {
            t.EventHub.trigger("PlayInfoOpen", {
                TeamName: this.props.TeamAry[n - 1],
                User: n == 1 ? this.state.UserH : this.state.UserA,
                Money: n == 1 ? this.state.MoneyH : this.state.MoneyA
            })
        },
        CloseDialog: function() {
            this.setState({
                showDialog: 0
            })
        },
        cheakData: function() {
            var n = this.getModel();
            n.get("MoneyH") != this.state.MoneyH ? this.setState({
                MoneyH: this.getModel().get("MoneyH"),
                MoneyA: this.getModel().get("MoneyA"),
                UserH: this.getModel().get("UserH"),
                UserA: this.getModel().get("UserA"),
                change: !0
            }) : (this.Timer && clearTimeout(this.Timer),
            this.Timer = setTimeout(function() {
                this.setState({
                    change: !1
                })
            }
            .bind(this), 1500))
        },
        render: function() {
            var i = this.getModel();
            console.log('4492>>>>>>>>',i);
            return n.createElement("div", {
                className: "bettype_item item-stake"
            }, n.createElement("div", {
                className: "bettype_oddsbox 4499",
                onClick: this.OpenDialog.bind(this, 1)
            }, n.createElement("div", {
                className: "oddsbox_stake"
            }, t.LanguageHelper.Get("lbl_TotalStakes"), "："), n.createElement("div", {
                className: "oddsbox_value " + (this.state.change ? "is-changing" : "")
            }, w.addCommas(this.state.MoneyH))), n.createElement("div", {
                className: "bettype_oddsbox 4506",
                onClick: this.OpenDialog.bind(this, 2)
            }, n.createElement("div", {
                className: "oddsbox_stake"
            }, t.LanguageHelper.Get("lbl_TotalStakes"), "："), n.createElement("div", {
                className: "oddsbox_value " + (this.state.change ? "is-changing" : "")
            }, w.addCommas(this.state.MoneyA))))
        }
    })
      , bu = n.createBackboneClass({
        getInitialState: function() {
            return {
                isopen: !1,
                User: 0,
                Money: 0,
                TeamName: ""
            }
        },
        componentWillUnmount: function() {
            t.EventHub.off("PlayInfoOpen", this.OpenDialog, this)
        },
        componentDidMount: function() {
            t.EventHub.on("PlayInfoOpen", this.OpenDialog, this)
        },
        OpenDialog: function(n) {
            this.setState({
                isopen: !0,
                User: n.User,
                Money: n.Money,
                TeamName: n.TeamName
            })
        },
        CloseDialog: function() {
            this.setState({
                isopen: !1
            })
        },
        render: function() {
            return n.createElement("div", {
                className: "dialog dialog-second dialog-dark",
                "data-status": this.state.isopen ? "is-open" : "",
                onTouchStart: this.CloseDialog
            }, n.createElement("div", {
                className: "dialog_container"
            }, n.createElement("div", {
                className: "dialog_content"
            }, n.createElement("div", {
                className: "dialog_text"
            }, this.state.TeamName), n.createElement("div", {
                className: "dialog-stake"
            }, n.createElement("div", {
                className: "dialog-stake_row"
            }, n.createElement("div", {
                className: "text-title"
            }, t.LanguageHelper.Get("lbl_Members"), "："), n.createElement("div", {
                className: "text-value"
            }, t.LanguageHelper.Get("lbl_Person").format([this.state.User]))), n.createElement("div", {
                className: "dialog-stake_row"
            }, n.createElement("div", {
                className: "text-title"
            }, t.LanguageHelper.Get("lbl_TotalStakes"), "："), n.createElement("div", {
                className: "text-value"
            }, w.addCommas(this.state.Money))), n.createElement("div", {
                className: "dialog-stake_hint"
            }, n.createElement("div", {
                className: "text-value"
            }, t.LanguageHelper.Get("lbl_FRefonly")))))))
        }
    })
      , ku = n.createBackboneClass({
        render: function() {
            var i = this.getModel(), tt = i.get("GameID"), f = this, s, h = f.props.BetTypeId, r = ct.BetTypeSetting[h], a = [], v = [], d, e, t, u, l, o, b, nt;
            if (tt == 2)
                t = [],
                this.props.MarketArray.map(function(u, e) {
                    for (var o, l, a, b, y = [], p = [], c = 0; c < r.Options.length; c++)
                        o = r.Options[c],
                        l = o.title(s, null, f.props.TeamAry),
                        p.push(l),
                        s = u.get("Resourceid"),
                        a = null,
                        o.SLine && (a = u.get("Selections").get(o.SLine).get("Price")),
                        b = u.get("Selections").get(o.betTeam),console.log('4585>>>',k.Odds),
                        y.push(n.createElement(k.Odds, {
                            key: w,
                            market: u,
                            IsNewStyle: !0,
                            Match: i,
                            TeamAry: f.props.TeamAry,
                            Selection: b,
                            Title: "",
                            betTeamName: l,
                            HasLine: r.HasLine,
                            FMLine: a
                        }));
                    siteSetting.BetInfo && i.get("MaT") == "l" && i.get("PlayInfo").get(h) && v.length == 0 && (v = n.createElement(or, {
                        key: "PlayInfo",
                        model: i.get("PlayInfo").get(h),
                        TeamAry: p
                    }),
                    t.push(v));
                    t.push(n.createElement("div", {
                        key: e,
                        className: "bettype_item"
                    }, y))
                }
                .bind(this)),
                a.push(n.createElement("div", {
                    className: "bettype_group"
                }, t));
            else
                for (d = parseInt(this.props.MarketArray.length / 3) + (this.props.MarketArray.length % 3 > 0 ? 1 : 0),
                e = 0; e < d; e++) {
                    for (t = [],
                    u = 0; u < r.Options.length; u++) {
                        var c = r.Options[u]
                          , y = []
                          , it = c.title(s, null, f.props.TeamAry);
                        for (y.push(n.createElement("div", {
                            className: "bettype_type"
                        }, it)),
                        l = 0; l < 3; l++) {
                            var p = e * 3 + l
                              , w = p + "_" + u
                              , g = n.createElement("div", {
                                key: w,
                                className: "bettype_oddsbox 4632"
                            }, "--");
                            p < this.props.MarketArray.length && (o = this.props.MarketArray[p],
                            s = o.get("Resourceid"),
                            b = null,
                            c.SLine && (b = o.get("Selections").get(c.SLine).get("Price")),
                            nt = o.get("Selections").get(c.betTeam),
                            g = n.createElement(k.Odds, {
                                key: w,
                                market: o,
                                IsNewStyle: !0,
                                Match: i,
                                TeamAry: f.props.TeamAry,
                                Selection: nt,
                                Title: "",
                                HasLine: r.HasLine,
                                FMLine: b
                            }));
                            y.push(g)
                        }
                        t.push(n.createElement("div", {
                            key: u,
                            className: "bettype_item"
                        }, y))
                    }
                    a.push(n.createElement("div", {
                        key: e,
                        className: "bettype_group"
                    }, t))
                }
            return n.createElement(hi, {
                IsSpecial: this.props.IsSpecial,
                BetTypeTitle: this.props.BetTypeName,
                BetTypeId: h
            }, a)
        }
    })
      , si = n.createBackboneClass({
        CreateOption: function(t, i, r, u, f, e, o, s, h, c) {
            var l = t.title(i, r, f) || "", p = r.get("Selections").get(t.betTeam), w, y, v, a;
            return p ? (w = t.betTeam,
            y = null,
            t.SLine && (y = r.get("Selections").get(t.SLine).get("Price")),
            e || s.push(n.createElement("div", {
                className: "bettype_type",
                dangerouslySetInnerHTML: {
                    __html: l
                }
            })),
            e && o.BasTitle && (v = l,
            a = l.split(o.BasOptionTitle ? "  " : " "),
            l = a.length > 1 ? a[a.length - 1] : a[0],
            v = o.BasOptionTitle ? a[0] : v.replace(l, ""),
            c == 0 && h.push(n.createElement("div", {
                className: "bettype_oddsbox 4686"
            }, n.createElement("div", {
                className: "bettype_type"
            }, v)))),
            n.createElement(k.Odds, {
                key: w,
                market: r,
                IsNewStyle: !0,
                Match: u,
                TeamAry: f,
                Selection: p,
                Title: "",
                NoShowLine: !0,
                HasLine: o.HasLine,
                betTeamName: e ? l : null,
                FMLine: y
            })) : null
        },
        render: function() {
            var u = this.getModel(), a = this.props.MarketArray[0], f = this, v = u.get("GameID"), i = v == 2, e = this.props.BetTypeId, o = a.get("Resourceid"), c, h, l;
            typeof e == "string" && (c = e.split(":"),
            e = parseInt(c[0]),
            o = c[1]);
            var r = ct.BetTypeSetting[e]
              , t = r.MoreOptions || r.Options
              , y = Array.isArray(t[0])
              , s = [];
            return y ? this.props.MarketArray.forEach(function(e) {
                var c = 0, v = 1, l = t, p = null, h, b;
                for (i && r.BasTitle && t.length == 3 && (l = [t[0], t[2]],
                p = t[1][0]); c < v; ) {
                    var a = []
                      , w = []
                      , y = [];
                    for (h = 0; h < l.length; h++) {
                        if (r.MergeDraw && !!h && c == v - 1)
                            break;
                        l[h].length > v && (v = l[h].length);
                        l[h][c] ? (b = l[h][c],
                        w.push(f.CreateOption(b, o, e, u, f.props.TeamAry, i, r, a, y, c))) : (i || a.push(n.createElement("div", {
                            className: "bettype_type"
                        }, "--")),
                        w.push(n.createElement("div", {
                            className: "bettype_oddsbox 4729",
                            id: 'bettype_oddsbox_4728'
                        }, "--")))
                    }
                    s.push(n.createElement("div", {
                        className: "bettype_group"
                    }, a.length > 0 ? n.createElement("div", {
                        className: "bettype_item"
                    }, a) : null, y.length > 0 ? n.createElement("div", {
                        className: "bettype_item item-title"
                    }, y) : null, n.createElement("div", {
                        className: "bettype_item"
                    }, w)));
                    c++
                }
                p && s.push(n.createElement("div", {
                    className: "bettype_group"
                }, n.createElement("div", {
                    className: "bettype_item"
                }, f.CreateOption(p, o, e, u, f.props.TeamAry, i, r, a, y, 1))))
            }) : (h = t.length > 4 ? this.props.IsFastMarket ? 2 : 3 : t.length,
            l = parseInt(t.length / h) + (t.length % h > 0 ? 1 : 0),
            this.props.MarketArray.map(function(c, a) {
                var b, d, nt, rt, ut, v, tt, y;
                for (o = c.get("Resourceid"),
                b = [],
                d = 0; d < l; d++) {
                    var p = []
                      , g = []
                      , it = []
                      , ft = [];
                    for (nt = 0; nt < h; nt++)
                        if (rt = d * h + nt,
                        rt < t.length) {
                            var et = null
                              , w = t[rt]
                              , ot = c.get("Selections").get(w.betTeam);
                            ot ? (ut = w.betTeam,
                            v = w.title(o, c, f.props.TeamAry) || "",
                            ft.push(v),
                            i || p.push(n.createElement("div", {
                                key: "title" + ut,
                                className: "bettype_type",
                                dangerouslySetInnerHTML: {
                                    __html: v
                                }
                            })),
                            w.SLine && (et = c.get("Selections").get(w.SLine).get("Price")),
                            i && r.BasTitle && (tt = v,
                            y = v.split(" "),
                            v = y.length > 1 ? y[y.length - 1] : y[0],
                            tt = tt.replace(v, ""),
                            a == 0 && (v.replace(""),
                            it.push(n.createElement("div", {
                                className: "bettype_oddsbox 4783",
                                id: 'oddsbox_'+et
                            }, n.createElement("div", {
                                className: "bettype_type"
                            }, tt)))),
                            v = y.length > 1 ? y[y.length - 1] : y[0]),
                            g.push(n.createElement(k.Odds, {
                                key: ut,
                                market: c,
                                IsNewStyle: !0,
                                Match: u,
                                TeamAry: f.props.TeamAry,
                                Selection: ot,
                                Title: "",
                                NoShowLine: !(r.HasLine >= 0 && r.HasLine <= 2),
                                HasLine: r.HasLine,
                                betTeamName: i ? v : null,
                                FMLine: et
                            }))) : (i || p.push(n.createElement("div", {
                                className: "bettype_type"
                            }, "--")),
                            g.push(n.createElement("div", {
                                className: "bettype_oddsbox 4805"
                            }, "--")))
                        } else
                            i || p.push(n.createElement("div", {
                                className: "bettype_type"
                            }, "--")),
                            g.push(n.createElement("div", {
                                className: "bettype_oddsbox 4812"
                            }, "--"));
                    i && siteSetting.BetInfo && u.get("MaT") == "l" && u.get("PlayInfo").get(e) && b.length == 0 && (b = n.createElement(or, {
                        key: "PlayInfo",
                        model: u.get("PlayInfo").get(e),
                        TeamAry: ft
                    }),
                    s.push(b));
                    s.push(n.createElement("div", {
                        className: "bettype_group"
                    }, p.length > 0 ? n.createElement("div", {
                        className: "bettype_item"
                    }, p) : null, it.length > 0 ? n.createElement("div", {
                        className: "bettype_item item-title"
                    }, it) : null, n.createElement("div", {
                        className: "bettype_item"
                    }, g)))
                }
            }
            .bind(this))),
            n.createElement(hi, {
                IsSpecial: this.props.IsSpecial,
                BetTypeTitle: this.props.BetTypeName
            }, s)
        }
    })
      , hi = n.createBackboneClass({
        getInitialState: function() {
            return {
                orientation: !1
            }
        },
        orientationChange: function() {
            this.setState({
                orientation: !!~[90, -90].indexOf(window.orientation)
            })
        },
        componentDidMount: function() {
            window.addEventListener("orientationchange", this.orientationChange)
        },
        componentWillUnmount: function() {
            window.removeEventListener("orientationchange", this.orientationChange)
        },
        render: function() {
            var t = !!~[1, 3, 7, 8, 153].indexOf(this.props.BetTypeId)
              , i = this.props.IsSpecial ? "" : t && this.state.orientation ? "bettype bettype-row" : "bettype";
              console.log('4858>>',this.props.children);
            return n.createElement("div", {
                className: i
            }, n.createElement("div", {
                className: this.props.IsSpecial ? "special_title" : "bettype_title"
            }, this.props.BetTypeTitle), n.createElement("div", {
                className: "commatch_content" + (this.props.IsDropdown ? "  bettype-dropdown" : "") + (t ? " bettype-double-line" : "")
            }, n.createElement("div", {
                className: "commatch_bettype"
            }, n.createElement("div", {
                className: "bettype_list"
            }, this.props.children))))
        }
    })
      , fi = n.createBackboneClass({
        render: function() {
            var t = this.getModel(), i = this, u, r = [];
            return this.props.MarketArray.map(function(f) {
                var e = i.props.BetTypeId;
                (u = f.get("Resourceid"),
                i.props.Col === -2 && (e = e + ":" + f.get("Resourceid")),
                i.props.BetTypeId == 713 && r.length > (t.get("IsLive") ? 4 : 1)) || r.push(n.createElement(ii, {
                    model: f,
                    showTitle: !1,
                    bettypeid: e,
                    TeamAry: i.props.TeamAry,
                    Match: t,
                    IsSingleModel: !0
                }))
            }),
            n.createElement(ti, {
                LeagueId: t.get("LeagueId"),
                match: t,
                betTypeName: this.props.BetTypeName,
                TeamAry: this.props.TeamAry,
                List: r,
                IsFastMarket: this.props.IsFastMarket,
                BetTypeId: this.props.BetTypeId,
                Resourceid: u
            })
        }
    })
      , du = n.createBackboneClass({
        render: function() {
            var i = this.props.MatchList[0], u = "vs", f = this, t = [], r;
            return this.props.MatchList.map(function(n) {
                t = t.concat(n.get("BetTypes").models)
            }),
            this.props.bettypeseq && (t = _.sortBy(t, function(n) {
                return this.props.bettypeseq.indexOf(n.get("BetTypeId"))
            }
            .bind(this))),
            r = [],
            pi(t, this.props.TeamAry, i, this.props.index, r, !0),
            i.get("IsLive") && (u = i.get("T1V") + "-" + i.get("T2V")),
            n.createElement("div", {
                className: "bettype_match"
            }, n.createElement("div", {
                className: "bettype_title"
            }, n.createElement("div", {
                className: "special_home"
            }, this.props.TeamAry[0]), n.createElement("div", {
                className: "special_score"
            }, u), n.createElement("div", {
                className: "special_away"
            }, this.props.TeamAry[1])), r)
        }
    })
      , gu = n.createBackboneClass({
        render: function() {
            var t = this.props.MatchList[0], u = null, e;
            t.get("IsLive") && (u = n.createElement("div", {
                className: "match_score"
            }, t.get("T1V") + " - " + t.get("T2V")));
            var f = this
              , r = 0
              , i = [];
            return this.props.MatchList.map(function(n) {
                i = i.concat(n.get("BetTypes").models)
            }),
            this.props.bettypeseq && (i = _.sortBy(i, function(n) {
                return this.props.bettypeseq.indexOf(n.get("BetTypeId"))
            }
            .bind(this))),
            e = i.map(function(i) {
                var u = r != i.get("BetTypeId"), e;
                return r = i.get("BetTypeId"),
                e = ct.BetTypeSetting[r],
                e.NoMerge && (u = !0),
                n.createElement(ii, {
                    model: i,
                    showTitle: u,
                    bettypeid: r,
                    TeamAry: f.props.TeamAry,
                    Match: t,
                    IsSingleModel: !0
                })
            }),
            n.createElement(ti, {
                LeagueId: t.get("LeagueId"),
                match: t,
                TeamAry: f.props.TeamAry,
                score: u,
                List: e
            })
        }
    })
      , nf = n.createBackboneClass({
        render: function() {
            var t = this.getModel(), r = null, e;
            t.get("IsLive") && (r = n.createElement("div", {
                className: "match_score"
            }, t.get("T1V") + " - " + t.get("T2V")));
            var u = this
              , i = 0
              , f = this.getCollection();
            return this.props.bettypeseq && (f = _.sortBy(this.getCollection().models, function(n) {
                return this.props.bettypeseq.indexOf(n.get("BetTypeId"))
            }
            .bind(this))),
            e = f.map(function(r) {
                var f = i != r.get("BetTypeId"), e;
                return i = r.get("BetTypeId"),
                e = ct.BetTypeSetting[i],
                e.NoMerge && (f = !0),
                n.createElement(ii, {
                    model: r,
                    showTitle: f,
                    bettypeid: i,
                    TeamAry: u.props.TeamAry,
                    Match: t,
                    IsSingleModel: !0
                })
            }),
            n.createElement(ti, {
                LeagueId: t.get("LeagueId"),
                match: t,
                TeamAry: u.props.TeamAry,
                score: r,
                List: e
            })
        }
    })
      , di = n.createBackboneClass({
        render: function() {
            var r = this.props.IsSingle ? "single_team" : "match_team"
              , t = this.props.IsSingle ? "single_home" : "match_home"
              , i = this.props.IsSingle ? "single_away" : "match_away";
            return this.props.sportid == 44 && (t += " match-red",
            i += " match-blue"),
            n.createElement("div", {
                className: r
            }, n.createElement("div", {
                className: t
            }, this.props.Rc1 > 0 ? n.createElement("div", {
                className: "match_redcard"
            }, this.props.Rc1) : null, this.props.HomeName), this.props.children, n.createElement("div", {
                className: i
            }, this.props.AwayName, this.props.Rc2 > 0 ? n.createElement("div", {
                className: "match_redcard"
            }, this.props.Rc2) : null), this.props.hasCashout ? n.createElement("i", {
                className: "icon icon-cashout"
            }) : null)
        }
    })
      , tf = n.createBackboneClass({
        getBallColor: function(n) {
            var t = v.BALL_MAPPING[n];
            return t === v.BALL_RED ? "ng-ball-red" : t === v.BALL_BLUE ? "ng-ball-blue" : "ng-ball-disable"
        },
        render: function() {
            var i = this.props.match
              , r = this.props.sportid
              , u = this.props.IsLive
              , s = this.props.neu
              , f = null;
            if ((!this.props.IsSingleModel || u) && this.props.IsSingleModel)
                f = n.createElement("div", {
                    className: "single_header"
                }, n.createElement(di, {
                    Rc1: i.get("Rc1"),
                    Rc2: i.get("Rc2"),
                    sportid: r,
                    IsSingle: !0,
                    HomeName: t.TeamNameRef.GetName(i.get("TeamId1")) + s,
                    AwayName: t.TeamNameRef.GetName(i.get("TeamId2"))
                }, n.createElement(k.ScoreDiv, {
                    IsSingle: !0,
                    sportid: r,
                    HLS: i.get("HLS"),
                    Score1: i.get("T1V"),
                    IsLive: u
                }), n.createElement("div", {
                    className: "single_time"
                }, u && i.get("HLS") == 0 && r == 44 ? n.createElement("div", null, t.LanguageHelper.Get("lbl_round") + i.get("T1V")) : null, n.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.ShowTime
                    }
                }), this.props.TimerSuspend, this.props.CreateGTS), n.createElement(k.ScoreDiv, {
                    IsSingle: !0,
                    sportid: r,
                    HLS: i.get("HLS"),
                    Score1: i.get("T2V"),
                    IsLive: u
                })));
            else if (r == 161) {
                var e = i.get("ball1")
                  , o = i.get("ball2")
                  , h = i.get("T1V") + "/" + i.get("T2V")
                  , c = i.get("Rc1") + "/" + i.get("Rc2");
                f = n.createElement("div", {
                    className: "match_header ng-info"
                }, n.createElement("div", {
                    className: "ng-info_row"
                }, n.createElement("div", {
                    className: "ng-info_number"
                }, t.LanguageHelper.Get("lbl_Bingo_No").format(i.get("MatchCode"))), n.createElement(ru, {
                    TimeValue: i.get("ShowTime"),
                    model: i
                })), n.createElement("div", {
                    className: "ng-info_row"
                }, n.createElement("div", {
                    className: "numberball-group"
                }, n.createElement("div", {
                    className: this.getBallColor(e)
                }, e > 0 ? e : "?", n.createElement("i", {
                    "class": "icon icon-icon_arraw"
                })), n.createElement("div", {
                    className: this.getBallColor(o)
                }, o > 0 ? o : "?", n.createElement("i", {
                    "class": "icon icon-icon_arraw"
                })), n.createElement("div", {
                    "class": "ng-ball-disable"
                }, "?")), n.createElement("div", {
                    className: "ng-info_status"
                }, n.createElement("div", {
                    className: "ng-info_item"
                }, n.createElement("span", null, t.LanguageHelper.Get("lbl_OU")), n.createElement("strong", null, h)), n.createElement("div", {
                    className: "ng-info_item"
                }, n.createElement("span", null, t.LanguageHelper.Get("lbl_OE")), n.createElement("strong", null, c)))))
            } else
                f = n.createElement("div", {
                    className: "match_header",
                    onClick: this.props.openOddsDiv
                }, n.createElement("div", {
                    className: "match_time"
                }, n.createElement(k.ScoreDiv, {
                    IsSingle: !1,
                    sportid: r,
                    HLS: i.get("HLS"),
                    Score1: i.get("T1V"),
                    Score2: i.get("T2V"),
                    IsLive: u
                }), n.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.ShowTime
                    }
                }), this.props.TimerSuspend, this.props.CreateGTS), n.createElement(di, {
                    Rc1: i.get("Rc1"),
                    Rc2: i.get("Rc2"),
                    sportid: r,
                    IsSingle: !1,
                    HomeName: t.TeamNameRef.GetName(i.get("TeamId1")) + this.props.neu,
                    AwayName: t.TeamNameRef.GetName(i.get("TeamId2")),
                    hasCashout: k.ChkCashOut(i.get("CO")) && !this.props.IsSingleModel
                }, n.createElement("div", {
                    className: "match_versus"
                }, "vs")), n.createElement("div", {
                    className: "btn"
                }, n.createElement("i", {
                    className: "icon icon-arrow-bottom"
                })));
            return f
        }
    })
      , ci = {
        ShowSingle: function(i) {
            var e, s, h;
            t.EventHub.trigger("openMiniStreaming", null);
            var c = this
              , r = c.getModel()
              , u = r.get("GameID") ? r.get("GameID") : lt.get("sportId")
              , l = "Streaming ";
            l += u == 1 ? "Soccer" : "Basketball";
            $("body").attr("data-status", "is-page-open");
            t.EventHub.trigger("SabaVideo_pause");
            var o = ir
              , f = null;
            st.get("IsNewStyle") && (MatchHeaderView = cr,
            o = tr,
            f = this.props.LeagueCollection);
            at.set({
                ShowQuickBet: !0
            });
            e = function(n) {
                at.set({
                    ShowQuickBet: !1
                });
                this.props.CloseBack && this.props.CloseBack(n)
            }
            .bind(this);
            t.PNRLog(this.RnrId ? this.RnrId : 19, r.get("MatchId"));
            s = window._CanSeeLiveTips && window._leaguesSupportLiveTips.includes(r.get("LeagueId")) && window._UseNewAppBar && window._SignalRConnectStatus ? n.createElement(k.SubscribeTutorial, {
                matchId: r.get("MatchId")
            }) : null;
            h = u == 1 && r.get("IsLive") && !/\((H|O\s)|ET\)/.test(r.get("MatchCode")) && !!~[90196, 90088].indexOf(r.get("LeagueId")) && !!st.get("SOC");
            h ? n.render(n.createElement(yt.SoccerBaccarat, {
                key: r.get("MatchId"),
                MatchView: yt.MatchView,
                IsNGPlayer: u == 161,
                selectTab: i,
                MatchHeaderView: MatchHeaderView,
                LeagueCollection: f,
                CloseBack: e,
                Match: r
            }), document.getElementById("visualizationPanel")) : n.render(n.createElement(n.Fragment, null, n.createElement(rt.GameVisualization, {
                MatchView: o,
                IsNGPlayer: u == 161,
                selectTab: i,
                MatchHeaderView: MatchHeaderView,
                MatchBarPanel: lr,
                LeagueCollection: f,
                CloseBack: e,
                Match: r
            }), s), document.getElementById("visualizationPanel"))
        }
    }
      , sr = {
        mixins: [it.MatchInfoMixins, k.MatchTimeMix, ci],
        componentDidMount: function() {
            if ((this.props.IsSingleModel || this.props.LastMatch && this.props.LastMatch.matchid == this.getModel().get("MatchId")) && this.openOddsDiv(),
            !this.props.IsSingleModel) {
                t.EventHub.off("openMatch-" + this.getModel().get("MatchId"));
                t.EventHub.on("openMatch-" + this.getModel().get("MatchId"), function(t) {
                    var i = $(n.findDOMNode(this.refs.match));
                    setTimeout(function() {
                        $("html,body").animate(t ? {
                            scrollTop: i.offset().top
                        } : {}, 100)
                    }, 300);
                    this.getModel().get("BetTypes").length == 0 && this.getModel().GetBetyypes();
                    this.ShowSingle();
                    this.setState({
                        IsOpen: !0
                    })
                }
                .bind(this))
            }
            var i = this.getModel()
              , r = i.get("GameID") == 1 && i.get("IsLive") && !/\((H|O\s)|ET\)/.test(i.get("MatchCode")) && !!~[90196, 90088].indexOf(i.get("LeagueId")) && !!st.get("SOC");
            if (!this.props.IsSingleModel && r) {
                t.EventHub.off("openBaccarat");
                t.EventHub.on("openBaccarat", function() {
                    this.ShowSingle(null, !0)
                }
                .bind(this))
            }
        },
        componentWillUnmount: function() {
            this.props.IsSingleModel || t.EventHub.off("openMatch-" + this.getModel().get("MatchId"))
        },
        getMarketType: function() {
            var n = lt.get("market");
            return this.getModel().get("MaT") && (n = this.getModel().get("MaT")),
            n
        },
        openOddsDiv: function() {
            var i = $(n.findDOMNode(this.refs.match)), r, t;
            this.state.IsOpen || (r = this.getModel().get("MatchId"),
            this.getModel().get("BetTypes").length != 0 || lt.get("getMarketsING") || this.getModel().GetBetyypes(),
            this.getModel().get("GameID") == 161 && this.getMarketType() == "l");
            t = this;
            this.state.IsOpen ? (this.state.IsNewStyle && t.setState({
                IsOpen: !0,
                Show: 0
            }),
            i.children(t.state.contentName).slideUp(300, function() {
                t.setState({
                    IsOpen: !1,
                    Show: 0
                })
            })) : this.state.Show ? i.children(t.state.contentName).slideDown(300, function() {
                t.setState({
                    IsOpen: !0
                })
            }) : t.setState({
                Show: 1
            })
        },
        componentDidUpdate: function() {
            if (this.state.Show == 1) {
                var i = $(n.findDOMNode(this.refs.match))
                  , t = this;
                i.children(t.state.contentName).slideDown(300, function() {
                    t.setState({
                        IsOpen: !0,
                        Show: 2
                    })
                })
            }
        }
    }
      , hr = n.createClass({
        displayName: "SoccaratScoreCards",
        getInitialState: function() {
            return {
                scores: [],
                isOpen: !1
            }
        },
        componentDidMount: function() {
            this._isMounted = !0;
            this.h = setTimeout(this.syncScoreCards, 300)
        },
        componentWillUnmount: function() {
            this.h && clearTimeout(this.h);
            this._isMounted = !1
        },
        syncScoreCards: function() {
            var n = this;
            if (this._isMounted) {
                this.h && clearTimeout(this.h);
                var i = this.props.match
                  , r = {
                    LeagueId: i.get("LeagueId"),
                    HomeId: i.get("TeamId1"),
                    AwayId: i.get("TeamId2")
                };
                t.SyncServer("Result/GetSoccerBaccaratResult", r, function(t) {
                    n._isMounted && (Array.isArray(t) && n.setState({
                        scores: t
                    }),
                    n.h = setTimeout(n.syncScoreCards, 18e4))
                })
            }
        },
        onClickScoreCards: function(n) {
            n.stopPropagation();
            this.setState({
                isOpen: !this.state.isOpen
            })
        },
        render: function() {
            for (var i = this.state && this.state.scores || [], u = this.state.isOpen, r = this.props.isMiniScoreCards, f = u || !r ? 20 : 5, e = u || !r ? f - 1 : f, i = i.slice(i.length < e ? 0 : i.length - e); i.length < f; )
                i.push(["", ""]);
            return n.createElement("div", {
                className: "baccarat_stat",
                "data-status": u ? "is-open" : "",
                onClick: r ? this.onClickScoreCards : null
            }, n.createElement("div", {
                className: "stat_header"
            }, t.LanguageHelper.Get("lbl_Scores")), n.createElement("div", {
                className: "stat_title"
            }, n.createElement("div", {
                className: "stat_text text-home"
            }, t.LanguageHelper.Get("lbl_ShortH")), n.createElement("div", {
                className: "stat_text text-away"
            }, t.LanguageHelper.Get("lbl_ShortA"))), n.createElement("div", {
                className: "stat_numbers"
            }, i.map(function(t, i) {
                var r = parseInt(t[0])
                  , u = parseInt(t[1])
                  , f = "stat_number text-" + (r > u ? "home" : r < u ? "away" : "draw");
                return n.createElement("div", {
                    key: i,
                    className: f
                }, n.createElement("div", {
                    className: "stat_text"
                }, t[0]), n.createElement("div", {
                    className: "stat_text"
                }, t[1]))
            })), r ? n.createElement("div", {
                className: "icon icon-clear"
            }) : null)
        }
    })
      , li = n.createBackboneClass({
        OpenSaba: function(n) {
            n.stopPropagation();
            ki(this.props.match, 15)
        },
        openMiniStreaming: function(n) {
            n.stopPropagation();
            this.props.IsOpen == !1 && this.props.openOddsDiv();
            var r = this.props.match
              , i = window._SkinMode == 0 ? "n" : "l";
            i = this.props.showMiniStreaming ? i + 1 : i + 0;
            t.WritePNRLog(st.get("ID"), r.get("MatchId") + "-" + r.get("GameID"), i, 32);
            t.EventHub.trigger("openMiniStreaming", this.props.match)
        },
        isShowStreaming: function(n) {
            var t = /422840/.test(window._Mesid) || /424240/.test(window._Mesid);
            return n === 43 && t ? !1 : !0
        },
        changeTimeMachine: function(n) {
            this.props.changeTimeMachine(n, !0)
        },
        ClickFav: function(n) {
            n.stopPropagation();
            this.getModel().set({
                Fav: !this.getModel().get("Fav")
            })
        },
        render: function() {
            var i = this.props.match, r = this.props.sportid, s = this.props.IsLive, h = this.props.neu, e = "commatch_home", o = "commatch_away", u;
            // console.log('*******', i);
            //增加 matchid
            e += ' '+ i.id + ' ';
            return r == 44 && (e += " match-red",
            o += " match-blue"),
            u = this.isShowStreaming(r),
            r == 50 ? n.createElement("div", {
                className: "commatch_header"
            }, n.createElement("div", {
                className: "commatch_stat",
                onClick: this.props.openOddsDiv
            }, n.createElement(k.MyFav, {
                type: "match",
                model: i
            }), n.createElement(k.TimeStatusDiv, {
                cls: "commatch_time",
                model: i
            })), this.props.hasLiveVideo && u && typeof st.get("ActStatus") != "undefined" && st.get("ActStatus") != 1 ? n.createElement("div", {
                className: "btn btn-mini-streaming",
                "data-open": this.props.showMiniStreaming,
                onClick: this.openMiniStreaming
            }, n.createElement("i", {
                className: "icon icon-mini-streaming"
            })) : null, this.props.hasVideo && u ? n.createElement("i", {
                className: "icon icon-tv",
                onClick: this.props.ShowSingle
            }) : null, n.createElement("div", {
                className: "btn",
                onClick: this.props.openOddsDiv
            }, n.createElement("i", {
                className: "icon icon-arrow-bottom"
            })), n.createElement(f.MatchInfo, {
                match: i,
                showSingle: this.props.ShowSingle,
                neu: h,
                openMatch: this.props.openOddsDiv
            })) : this.props.issmall ? n.createElement("div", {
                className: "commatch_header",
                onClick: this.props.openOddsDiv
            }, n.createElement("div", {
                className: "commatch_stat"
            }, n.createElement(k.ScoreDiv, {
                cls: "commatch_score",
                IsSingle: !1,
                sportid: r,
                HLS: i.get("HLS"),
                Score1: i.get("T1V"),
                Score2: i.get("T2V"),
                IsLive: s
            }), n.createElement(k.TimeStatusDiv, {
                cls: "commatch_time",
                model: i
            })), n.createElement("div", {
                className: "commatch_team"
            }, n.createElement("div", {
                className: e
            }, n.createElement("span", null, t.TeamNameRef.GetName(i.get("TeamId1")) + this.props.neu), i.get("Rc1") > 0 ? n.createElement("div", {
                className: "match_redcard"
            }, i.get("Rc1")) : null), n.createElement("div", {
                className: "commatch_versus"
            }, "vs"), n.createElement("div", {
                className: o
            }, n.createElement("span", null, t.TeamNameRef.GetName(i.get("TeamId2"))), i.get("Rc2") > 0 ? n.createElement("div", {
                className: "match_redcard"
            }, i.get("Rc2")) : null)), this.props.hasTimeMachine ? n.createElement("i", {
                "class": "icon icon-time-machine",
                onClick: this.changeTimeMachine
            }) : null, n.createElement("div", {
                className: "commatch_arrow"
            }, n.createElement("div", {
                className: "btn"
            }, n.createElement("i", {
                className: "icon icon-arrow-bottom"
            })))) : n.createElement("div", {
                className: "commatch_info"
            }, n.createElement("div", {
                className: "commatch_stat"
            }, n.createElement(k.ScoreDiv, {
                cls: "commatch_score",
                IsSingle: !1,
                sportid: r,
                HLS: i.get("HLS"),
                Score1: i.get("T1V"),
                Score2: i.get("T2V"),
                IsLive: s
            }), n.createElement(k.TimeStatusDiv, {
                cls: "commatch_time",
                model: i
            })), n.createElement("div", {
                className: e,
                id: 'mid'+i.id,
                onClick: this.props.ShowSingle
            }, window._SkinMode == 4 ? n.createElement("div", {
                className: "team_flag"
            }, n.createElement(k.LogoIcon, {
                key: i.get("TeamId1"),
                IconID: i.get("TeamId1"),
                type: "H"
            })) : null, n.createElement("span", null, t.TeamNameRef.GetName(i.get("TeamId1")) + this.props.neu), i.get("Rc1") > 0 ? n.createElement("div", {
                className: "match_redcard"
            }, i.get("Rc1")) : null), n.createElement("div", {
                className: o,
                onClick: this.props.ShowSingle
            }, window._SkinMode == 4 ? n.createElement("div", {
                className: "team_flag"
            }, n.createElement(k.LogoIcon, {
                key: i.get("TeamId2"),
                IconID: i.get("TeamId2"),
                type: "A"
            })) : null, n.createElement("span", null, t.TeamNameRef.GetName(i.get("TeamId2"))), i.get("Rc2") > 0 ? n.createElement("div", {
                className: "match_redcard"
            }, i.get("Rc2")) : null), n.createElement("div", {
                className: "commatch_stream"
            }, n.createElement(k.MyFav, {
                type: "match",
                model: i
            }), n.createElement("div", {
                className: "commatch_stream-icon-group"
            }, this.props.hasVideo && u ? n.createElement("i", {
                className: "icon icon-tv",
                onClick: this.props.ShowSingle
            }) : null, lt.HasGV(i) ? n.createElement("i", {
                className: "icon icon-gv",
                onClick: this.props.ShowSingle
            }) : null), i.get("LDM2") ? n.createElement("div", {
                className: "btn",
                onClick: this.OpenSaba
            }, n.createElement("i", {
                className: "iconcolor-fixtures"
            })) : null, k.ChkCashOut(i.get("CO")) ? n.createElement("i", {
                className: "icon icon-cashout",
                onClick: this.props.ShowSingle
            }) : null, this.props.hasScoresCards ? n.createElement(hr, {
                match: this.props.match,
                isMiniScoreCards: !0
            }) : null, this.props.hasLiveVideo && u && typeof st.get("ActStatus") != "undefined" && st.get("ActStatus") != 1 ? n.createElement("div", {
                className: "btn btn-mini-streaming",
                "data-open": this.props.showMiniStreaming,
                onClick: this.openMiniStreaming
            }, n.createElement("i", {
                className: "icon icon-mini-streaming"
            })) : null))
        }
    })
      , rf = n.createBackboneClass({
        mixins: [sr],
        getInitialState: function() {
            return {
                IsOpen: !1,
                Show: 0,
                contentName: ".commatch_content,.tab_block",
                IsNewStyle: !0,
                IsToolTipShow: null,
                IsStreamingToolTipShow: null,
                showTM: this.props.defultOpenTM,
                openMoreAsianMarkets: !1,
                selectMoreAsianMarkets: null,
                showMiniStreaming: !1
            }
        },
        componentDidUpdate: function(n) {
            n.isFirstLeague !== this.props.isFirstLeague && (this.props.isFirstLeague || this.setState({
                IsToolTipShow: !1
            }))
        },
        handleOpenMoreAsianMarkets: function(n) {
            this.setState({
                openMoreAsianMarkets: !this.state.openMoreAsianMarkets,
                selectMoreAsianMarkets: n
            })
        },
        handleSelectMoreAsianMarketsTab: function(n) {
            this.state.selectMoreAsianMarkets != n && this.setState({
                selectMoreAsianMarkets: n
            })
        },
        handleLaterClick: function(n) {
            $(n).removeAttr("data-status")
        },
        OpenBetBuilder: function() {
            st.get("ActStatus") == 2 ? this.ShowSingle("34") : window._pop.ch_DialogGeneric("modalPopupMsg", "modal", {
                Head: "lbl_Infomation"
            }, "lbl_deposit", "", [{
                Class: "btn btn-default",
                Key: "lbl_later",
                IsUpperCase: !1,
                Callback: this.handleLaterClick.bind(null, "#modalPopupMsg")
            }, {
                Class: "btn btn-primary",
                Key: "Deposit_Now",
                IsUpperCase: !1,
                Callback: function() {
                    require(["Commponent/ch_MyAccountEdit", "ch_MyAccCommon"], function(t, i) {
                        var r = window._EnableCurrencyDisplay == !0 ? st.get("Currency") + " " + st.get("BetCredit") : st.get("BetCredit")
                          , u = n.renderToStaticMarkup(n.createElement(t.DepositWithdrawal, {
                            balance: r
                        }));
                        $("#divMain").append(u);
                        i.DepWitHandler("deposit")
                    });
                    this.handleLaterClick("#modalPopupMsg")
                }
                .bind(this)
            }])
        },
        openSuperLive: function() {
            r.navigateAndSaveLast("SuperLive/m=" + this.getModel().get("MatchId"), {
                trigger: !0
            })
        },
        openEGamer: function(n) {
            this.closeToolTips(n);
            var t = {
                sport: "43",
                routerkey: "#EGamer/m=" + this.getModel().get("MatchId")
            };
            r.OpenNewWindow("router", "EsportWeb", t, function(n) {
                UmCallback(name, n)
            })
        },
        closeToolTips: function(n) {
            localStorage.setItem("closeMobileLiteESportEGamerTooltip", "true");
            n.preventDefault();
            n.stopPropagation();
            this.setState({
                IsToolTipShow: !1
            })
        },
        closeMiniStreamingToolTips: function(n) {
            localStorage.setItem("closeMobileLiteMiniStreamingTooltip", "true");
            n.preventDefault();
            n.stopPropagation();
            this.setState({
                IsStreamingToolTipShow: !1
            })
        },
        changeTimeMachine: function(n, t) {
            this.setState({
                showTM: t ? t : !this.state.showTM
            })
        },
        openMiniStreaming: function(i) {
            var r = $(n.findDOMNode(this.refs.MiniStreamingFrame));
            i && i.get("MatchId") == this.getModel().get("MatchId") && !this.state.showMiniStreaming ? (this.setState({
                showMiniStreaming: !0
            }),
            localStorage.getItem("closeMobileLiteMiniStreamingTooltip") || (localStorage.setItem("closeMobileLiteMiniStreamingTooltip", "true"),
            t.EventHub.trigger("closeMobileLiteMiniStreamingTooltip"))) : this.state.showMiniStreaming && (r.removeAttr("data-scroll-to-top").removeAttr("data-scroll-to-bottom").removeAttr("data-full-screen"),
            this.setState({
                showMiniStreaming: !1
            }))
        },
        componentDidMount: function() {
            t.EventHub.on("openMiniStreaming", this.openMiniStreaming)
        },
        componentWillUnmount: function() {
            t.EventHub.off("openMiniStreaming", this.openMiniStreaming)
        },
        render: function() {
            var b = this
              , i = this.getModel()
              , r = i.get("GameID") ? i.get("GameID") : lt.get("sportId")
              , a = [t.TeamNameRef.GetName(i.get("TeamId1")), t.TeamNameRef.GetName(i.get("TeamId2"))]
              , et = r + "_" + lt.get("sportId") + this.getMarketType() + lt.get("type") + "_" + lt.get("LMode")
              , s = i.get("Neu") ? t.LanguageHelper.Get("Neutral_Team") : ""
              , h = this.getMarketType() == "l"
              , k = st.get("MR") && i.get("MBO") == 0 ? i.get("BetTypes").models.filter(function(n) {
                return n.get("isMMR")
            }).length : 0
              , d = i.get("Moc") + (i.get("BetTypes").length + k)
              , g = r == 1 && i.get("IsLive") && !/\((H|O\s)|ET\)/.test(i.get("MatchCode")) && !!~[90196, 90088].indexOf(i.get("LeagueId")) && !!st.get("SOC")
              , nt = /422840/.test(window._Mesid) || /424240/.test(window._Mesid)
              , tt = !nt
              , p = st.get("ActStatus") == 2 && window._EnableEGamer && r == 43 && i.get("IsLive") && lt.HasVideo(i) && tt
              , it = this.props.isFirstLeague
              , rt = !!localStorage.getItem("closeMobileLiteESportEGamerTooltip");
            p && !rt && it && t.EventHub.trigger("showMobileLiteESportEGamerTooltip", this);
            var v = i.get("BetTypes").HasTimeMachine && i.get("BetTypes").tmCollection && i.get("BetTypes").tmCollection.length > 0 && this.getTMTime(this.GetShowTimeCN(i), null, !0) < 91
              , ut = v ? this.GetShowTimeCN(i) : null
              , y = !1
              , w = [1, 3, 7, 8];
            !~[1, 2].indexOf(i.get("GameID")) || function() {
                var n = 0;
                y = !!i.get("BetTypes").find(function(t) {
                    var i = t.get("BetTypeId");
                    return !!~w.indexOf(i) && i == n ? !0 : (n = i,
                    !1)
                })
            }();
            var c = lt.HasScoresCards(i)
              , l = lt.HasVideo(i, i.get("MaT") != "l")
              , o = l && i.get("MaT") == "l"
              , u = this.state.showMiniStreaming && this.state.IsOpen && this.props.LeagueIsOpen && typeof st.get("ActStatus") != "undefined" && st.get("ActStatus") != 1
              , ft = !localStorage.getItem("closeMobileLiteMiniStreamingTooltip");
            return (o && typeof st.get("ActStatus") != "undefined" && st.get("ActStatus") != 1 && !!ft && t.EventHub.trigger("showMobileLiteMiniStreamingTooltip", this),
            r == 50) ? n.createElement("div", {
                ref: "match",
                className: "commatch commatch--sport" + r,
                "data-status": this.state.Show ? "is-open" : "",
                "data-mini-streaming": o
            }, n.createElement("div", {
                ref: "MiniStreamingFrame",
                "class": "c-mini-streaming",
                "data-open": u
            }, u ? n.createElement(dt, {
                parentRef: this.refs,
                beforeElement: "commatch_content",
                match: i,
                sportid: r,
                IsLive: h,
                neu: s,
                openMiniStreaming: this.openMiniStreaming
            }) : null), n.createElement(li, {
                match: i,
                sportid: r,
                openOddsDiv: this.openOddsDiv,
                IsLive: h,
                neu: s,
                IsSingleModel: !1,
                issmall: !1,
                ShowSingle: this.ShowSingle,
                hasScoresCards: c,
                hasVideo: l,
                hasLiveVideo: o,
                showMiniStreaming: u,
                IsToolTipShow: this.state.IsStreamingToolTipShow,
                closeToolTips: this.closeMiniStreamingToolTips,
                IsOpen: this.state.IsOpen
            }), n.createElement("div", {
                ref: "commatch_content",
                className: "commatch_content",
                style: this.state.IsOpen ? {
                    display: "flex"
                } : {
                    display: "none"
                }
            }, !this.state.Show && this.state.IsOpen ? null : n.createElement(f.HDPOUGroup, {
                collection: i.get("BetTypeGroup"),
                match: i,
                TeamAry: a
            }))) : n.createElement("div", {
                ref: "match",
                className: "commatch",
                "data-status": this.state.Show ? "is-open" : "",
                "data-mini-streaming": o,
                "data-scores": c
            }, n.createElement("div", {
                ref: "MiniStreamingFrame",
                "class": "c-mini-streaming",
                "data-open": u
            }, u ? n.createElement(dt, {
                parentRef: this.refs,
                beforeElement: "commatch_content",
                match: i,
                sportid: r,
                IsLive: h,
                neu: s,
                openMiniStreaming: this.openMiniStreaming
            }) : null), n.createElement(li, {
                match: i,
                sportid: r,
                openOddsDiv: this.openOddsDiv,
                IsLive: h,
                hasTimeMachine: v,
                changeTimeMachine: this.changeTimeMachine,
                neu: s,
                IsSingleModel: !1,
                issmall: !0,
                hasScoresCards: c,
                hasVideo: l,
                hasLiveVideo: o,
                showMiniStreaming: u
            }), n.createElement("div", {
                ref: "commatch_content",
                className: "commatch_content",
                style: this.state.IsOpen ? {
                    display: "flex"
                } : {
                    display: "none"
                }
            }, this.state.Show ? n.createElement(li, {
                match: i,
                sportid: r,
                openOddsDiv: this.openOddsDiv,
                IsLive: h,
                neu: s,
                IsSingleModel: !1,
                issmall: !1,
                ShowSingle: this.ShowSingle,
                hasScoresCards: c,
                hasVideo: l,
                hasLiveVideo: o,
                showMiniStreaming: u,
                IsToolTipShow: this.state.IsStreamingToolTipShow,
                closeToolTips: this.closeMiniStreamingToolTips
            }) : null, n.createElement(hf, {
                collection: i.get("BetTypeGroup"),
                Show: this.state.Show,
                match: i,
                TeamAry: a,
                IsOpen: this.state.IsOpen,
                ComGroupKey: this.props.ComGroupKey,
                showMoreAsianMarkets: y,
                handleOpenMoreAsianMarkets: this.handleOpenMoreAsianMarkets
            }), this.state.Show ? n.createElement("div", {
                className: "commatch_btn"
            }, n.createElement("div", {
                className: "commatch_arrow",
                onClick: this.openOddsDiv
            }, n.createElement("div", {
                className: "btn"
            }, n.createElement("i", {
                className: "icon icon-arrow-bottom"
            }))), n.createElement("div", {
                className: "commatch_more"
            }, n.createElement("div", {
                className: "btn btn-highlight",
                onClick: this.ShowSingle
            }, d, "+"), lt.get("type") != "parlay" && i.get("ID34") && (r == "1" && st.get("SMP_1") || r == "2" && st.get("SMP_2")) ? n.createElement("div", {
                className: "btn btn-highlight btn-smp",
                onClick: this.OpenBetBuilder
            }, t.LanguageHelper.Get("lbl_SMP")) : null, lt.get("type") != "parlay" && st.get("SuperLive") && i.get("Sup") ? n.createElement("div", {
                className: "btn btn-highlight btn-sl",
                onClick: this.openSuperLive
            }, "SL") : null, g && n.createElement("div", {
                className: "btn-baccarat rotate",
                onClick: this.ShowSingle.bind(null, null, !0),
                "data-status": "is-active"
            }, n.createElement("i", {
                className: "iconcolor-baccarat"
            }), n.createElement("span", null, "3")), p && n.createElement("div", {
                className: "btn btn-egamer",
                onClick: this.openEGamer
            }, n.createElement("i", {
                "class": "icon icon-egamer"
            }), n.createElement("div", {
                className: "tooltips tooltips-bottom tooltips-right tooltips-warning",
                "data-status": this.state.IsToolTipShow ? "is-open" : "",
                onClick: function(n) {
                    return b.closeToolTips(n)
                },
                style: {
                    "pointer-events": "auto"
                }
            }, n.createElement("div", {
                className: "tooltips_arrow"
            }), n.createElement("div", {
                className: "tooltips_content"
            }, t.LanguageHelper.Get("lbl_EgamerTooltip")))), v && n.createElement("div", {
                className: "btn btn-time-machine",
                onClick: this.changeTimeMachine,
                "data-open": this.state.showTM
            }, n.createElement("i", {
                className: "icon icon-time-machine"
            })))) : null, y ? n.createElement("div", {
                className: "c-more-lines",
                "data-open": this.state.openMoreAsianMarkets
            }, n.createElement("div", {
                className: "c-more-lines__content"
            }, n.createElement(li, {
                match: i,
                sportid: r,
                openOddsDiv: this.openOddsDiv,
                IsLive: h,
                neu: s,
                IsSingleModel: !1,
                issmall: !1,
                ShowSingle: this.ShowSingle,
                hasScoresCards: c,
                hasVideo: l,
                hasLiveVideo: o,
                showMiniStreaming: u
            }), n.createElement(uf, {
                match: i,
                collection: i.get("BetTypes"),
                TeamAry: a,
                limtBetTypeMAM: w,
                selectMoreAsianMarkets: this.state.selectMoreAsianMarkets,
                handleOpenMoreAsianMarkets: this.handleOpenMoreAsianMarkets,
                handleSelectMoreAsianMarketsTab: this.handleSelectMoreAsianMarketsTab
            }))) : null), v ? n.createElement(e.TimeMachine, {
                show: this.state.showTM,
                match: i,
                TeamAry: a,
                collection: i.get("BetTypes").tmCollection,
                time: ut,
                type: "sportsView"
            }) : null)
        }
    })
      , uf = n.createBackboneClass({
        displayName: "MoreAsianMarkets",
        createOddsList: function(i, r, u) {
            for (var f, c = this.props.match, o = [], e = 0; e < 3; e++)
                if (f = u.Options[e],
                f && r) {
                    var l = r.get("Selections").get(f.betTeam)
                      , s = u.HasLine == 1 ? "" : f.title(null)
                      , h = !1;
                    u.HasLine == 0 && (h = !0,
                    s = e == 0 ? t.LanguageHelper.Get("lbl_odds_o") : t.LanguageHelper.Get("lbl_odds_u"));
                    o.push(n.createElement(k.Odds, {
                        key: f.betTeam,
                        showTitleLine: h,
                        NoShowLine: !1,
                        IsNewStyle: !0,
                        market: r,
                        Match: c,
                        TeamAry: this.props.TeamAry,
                        Selection: l,
                        Title: s,
                        HasLine: u.HasLine
                    }))
                }
            i.push(n.createElement("div", {
                key: element,
                className: "bettype_item"
            }, o))
        },
        componentDidMount: function() {
            t.EventHub.bind("refresMoreAsianMarkets-" + this.props.match.get("MatchId"), this.refreshMoreAsianMarkets, this)
        },
        componentWillUnmount: function() {
            t.EventHub.off("refreshMoreAsianMarkets-" + this.props.match.get("MatchId"), this.refreshMoreAsianMarkets, this)
        },
        refreshMoreAsianMarkets: function() {
            this.forceUpdate()
        },
        render: function() {
            var e = this
              , i = this
              , r = this.props.match
              , u = []
              , f = [];
            return this.props.limtBetTypeMAM.forEach(function(t) {
                var o = window._SiteMode == 2 ? null : !~[1, 3].indexOf(t) ? !~[7, 8].indexOf(t) ? null : r.get("HtCount") : r.get("FtCount"), s = ct.BetTypeSetting[t], h = e.getCollection().reduce(function(n, u) {
                    if (u.get("BetTypeId") == t && (!o || o && u.get("sort") <= o) && (i.createOddsList(n, u, s),
                    r.get("MBO") == 0 && u.get("isMMR"))) {
                        var f = u.clone();
                        f.set("notUseMMR", !0);
                        i.createOddsList(n, f, s)
                    }
                    return n
                }, []), c;
                h.length && (c = s.Name(r.get("GameID"), null, !0),
                u.push(n.createElement("div", {
                    className: "c-tab",
                    onClick: i.props.handleSelectMoreAsianMarketsTab.bind(null, t),
                    "data-selected": i.props.selectMoreAsianMarkets == t
                }, n.createElement("div", {
                    className: "btn"
                }, c))),
                f.push(n.createElement("div", {
                    className: "bettype_group",
                    "data-selected": i.props.selectMoreAsianMarkets == t
                }, h)))
            }),
            n.createElement("div", {
                className: "commatch_bettype"
            }, n.createElement("div", {
                className: "c-tabs"
            }, n.createElement("div", {
                className: "c-tabs__content"
            }, u)), f, n.createElement("div", {
                className: "c-more-lines__btn",
                onClick: this.props.handleOpenMoreAsianMarkets
            }, n.createElement("div", {
                className: "btn_text"
            }, t.LanguageHelper.Get("lbl_btnClose")), n.createElement("i", {
                className: "icon icon-clear"
            })))
        }
    })
      , cr = n.createBackboneClass({
        mixins: [it.MatchInfoMixins, k.MatchTimeMix, ci],
        EsportTimer: function(i, r) {
            var u = i.get("CMP")
              , f = t.LanguageHelper.Get("lbl_map" + u) ? t.LanguageHelper.Get("lbl_map" + u) : "Map " + u;
            return n.createElement("div", {
                className: "team_vs"
            }, r && i.get("ISS") == 0 ? n.createElement("span", {
                className: "ess-vs__map"
            }, f) : null, n.createElement("span", {
                className: "ess-vs__process"
            }, n.createElement("span", {
                className: "ess-vs__arrow-left"
            }), n.createElement(k.LiveTimerDiv, {
                match: i
            }), n.createElement("span", {
                className: "ess-vs__arrow-right"
            })), r && n.createElement("span", {
                className: "ess-vs__text"
            }, i.get("T1V") + " - " + i.get("T2V")))
        },
        render: function() {
            var i = this.getModel(), e = this.props.IsMini ? "text_home" : "team_text", o = this.props.IsMini ? "text_away" : "team_text", r = i.get("GameID"), u = i.get("IsLive"), l;
            r == 44 && (e += " match-red",
            o += " match-blue");
            var s = i.get("Neu") ? t.LanguageHelper.Get("Neutral_Team") : ""
              , h = this.TimerSuspend()
              , c = this.CreateGTS()
              , a = null;
            if (this.props.IsMini)
                return (a = n.createElement("div", {
                    className: "slideshow",
                    "data-ani": h || c ? "true" : ""
                }, n.createElement("div", {
                    className: "slideshow_1"
                }, n.createElement("div", {
                    className: "team_time"
                }, u && i.get("HLS") == 0 && r == 44 ? n.createElement("div", null, t.LanguageHelper.Get("lbl_round") + i.get("T1V")) : null, n.createElement(k.LiveTimerDiv, {
                    match: i
                }))), n.createElement("div", {
                    className: "slideshow_2"
                }, h, c)),
                i.get("GST") == 6 && (a = n.createElement("div", {
                    className: "match_happen",
                    "data-accent": "true"
                }, t.LanguageHelper.Get("lbl_SuddenDeath"))),
                r == 50) ? n.createElement("div", {
                    "class": "video_head_match"
                }, n.createElement(f.MatchInfo, {
                    match: i,
                    showFlag: !0,
                    neu: s
                })) : n.createElement("div", {
                    className: "video_head_match"
                }, n.createElement("div", {
                    className: "video_head_col"
                }, n.createElement("div", {
                    className: "video_head_stat"
                }, n.createElement("div", {
                    className: "team_label home"
                }), n.createElement("div", {
                    className: e
                }, t.TeamNameRef.GetName(i.get("TeamId1")) + s)), i.get("Rc1") > 0 ? n.createElement("div", {
                    className: "match_redcard"
                }, i.get("Rc1")) : null, n.createElement("div", {
                    className: "team_flag"
                }, n.createElement(k.LogoIcon, {
                    key: i.get("TeamId1"),
                    IconID: i.get("TeamId1"),
                    type: "H"
                }))), n.createElement("div", {
                    className: "team_vs"
                }, n.createElement(k.ScoreDiv, {
                    IsSingle: !1,
                    cls: "team_score",
                    sportid: r,
                    HLS: i.get("HLS"),
                    Score1: i.get("T1V"),
                    Score2: i.get("T2V"),
                    IsLive: u
                }), a), n.createElement("div", {
                    className: "video_head_col"
                }, n.createElement("div", {
                    className: "team_flag"
                }, n.createElement(k.LogoIcon, {
                    key: i.get("TeamId2"),
                    IconID: i.get("TeamId2"),
                    type: "A"
                })), i.get("Rc2") > 0 ? n.createElement("div", {
                    className: "match_redcard"
                }, i.get("Rc2")) : null, n.createElement("div", {
                    className: "video_head_stat"
                }, n.createElement("div", {
                    className: o
                }, t.TeamNameRef.GetName(i.get("TeamId2"))))));
            if (l = null,
            r == 43)
                l = this.EsportTimer(i, u);
            else {
                if (r == 50)
                    return n.createElement("div", {
                        className: "video_match"
                    }, n.createElement("div", {
                        className: "team"
                    }, n.createElement("div", {
                        className: "team_name"
                    }, n.createElement("div", {
                        className: "team_flag"
                    }, n.createElement(k.LogoIcon, {
                        key: i.get("TeamId1"),
                        IconID: i.get("TeamId1"),
                        type: "H"
                    })), n.createElement("div", {
                        className: e
                    }, t.TeamNameRef.GetName(i.get("TeamId1")) + s), n.createElement(f.LiveScore, {
                        match: i,
                        team: "h",
                        stylecss: "team_score"
                    })), n.createElement("div", {
                        className: "team_vs"
                    }, n.createElement("div", {
                        className: "team_score"
                    }, "- VS -")), n.createElement("div", {
                        className: "team_name"
                    }, n.createElement("div", {
                        className: "team_flag"
                    }, n.createElement(k.LogoIcon, {
                        key: i.get("TeamId2"),
                        IconID: i.get("TeamId2"),
                        type: "A"
                    })), n.createElement("div", {
                        className: o
                    }, t.TeamNameRef.GetName(i.get("TeamId2"))), n.createElement(f.LiveScore, {
                        match: i,
                        team: "a",
                        stylecss: "team_score"
                    }))));
                l = n.createElement("div", {
                    className: "team_vs"
                }, n.createElement("div", {
                    className: "team_time"
                }, u && i.get("HLS") == 0 && r == 44 ? n.createElement("div", null, t.LanguageHelper.Get("lbl_round") + i.get("T1V")) : null, n.createElement(k.LiveTimerDiv, {
                    match: i
                })), n.createElement(k.ScoreDiv, {
                    IsSingle: !1,
                    cls: "team_score",
                    sportid: r,
                    HLS: i.get("HLS"),
                    Score1: i.get("T1V"),
                    Score2: i.get("T2V"),
                    IsLive: u
                }), n.createElement("div", {
                    className: "team_status"
                }, n.createElement("div", {
                    className: "team_colrt"
                }, i.get("Rc1") > 0 ? n.createElement("div", {
                    className: "match_redcard"
                }, i.get("Rc1")) : null), n.createElement("div", {
                    className: "team_colct"
                }, h || c ? n.createElement("div", {
                    className: "match_happen"
                }, h, c) : null), n.createElement("div", {
                    className: "team_collt"
                }, i.get("Rc2") > 0 ? n.createElement("div", {
                    className: "match_redcard"
                }, i.get("Rc2")) : null)))
            }
            return n.createElement("div", {
                className: "video_match"
            }, n.createElement("div", {
                className: "team"
            }, n.createElement("div", {
                className: "team_name"
            }, n.createElement("div", {
                className: "team_flag"
            }, n.createElement(k.LogoIcon, {
                key: i.get("TeamId1"),
                IconID: i.get("TeamId1"),
                type: "H"
            })), n.createElement("div", {
                className: e
            }, n.createElement("div", {
                className: "team_label home"
            }), t.TeamNameRef.GetName(i.get("TeamId1")) + s)), l, n.createElement("div", {
                className: "team_name"
            }, n.createElement("div", {
                className: "team_flag"
            }, n.createElement(k.LogoIcon, {
                key: i.get("TeamId2"),
                IconID: i.get("TeamId2"),
                type: "A"
            })), n.createElement("div", {
                className: o
            }, t.TeamNameRef.GetName(i.get("TeamId2"))))))
        }
    })
      , lr = n.createBackboneClass({
        mixins: [it.MatchInfoMixins, k.MatchTimeMix, ci],
        RnrId: 18,
        OpenMatch: function() {
            this.props.SelectMatch && this.props.SelectMatch(this.props.indexKey, this.getModel().get("MatchId"));
            this.getModel().get("BetTypes").length == 0 && this.getModel().GetBetyypes();
            this.ShowSingle()
        },
        render: function() {
            var i = this.getModel()
              , r = "text-name"
              , f = r
              , u = i.get("GameID")
              , o = i.get("IsLive");
            u == 44 && (r += " match-red",
            f += " match-blue");
            var e = i.get("Neu") ? t.LanguageHelper.Get("Neutral_Team") : ""
              , s = this.TimerSuspend()
              , h = this.CreateGTS();
            return n.createElement("div", {
                id: "MatchBarPanel_" + this.props.indexKey,
                className: "match-bar_panel",
                onClick: this.OpenMatch,
                "data-selected": this.props.IsSelect ? "true" : ""
            }, n.createElement(k.LiveTimerDiv, {
                match: i,
                stylecss: "match-bar_time"
            }), n.createElement("div", {
                className: "match-bar_content"
            }, n.createElement("div", {
                className: "match-bar_team"
            }, n.createElement("div", {
                className: "team_flag"
            }, n.createElement(k.LogoIcon, {
                key: i.get("TeamId1"),
                IconID: i.get("TeamId1"),
                type: "H"
            })), n.createElement("div", {
                className: r
            }, t.TeamNameRef.GetName(i.get("TeamId1")) + e), u == 50 ? null : n.createElement("div", {
                className: "text-score"
            }, i.get("T1V"))), n.createElement("div", {
                className: "match-bar_team"
            }, n.createElement("div", {
                className: "team_flag"
            }, n.createElement(k.LogoIcon, {
                key: i.get("TeamId2"),
                IconID: i.get("TeamId2"),
                type: "A"
            })), n.createElement("div", {
                className: f
            }, t.TeamNameRef.GetName(i.get("TeamId2"))), u == 50 ? null : n.createElement("div", {
                className: "text-score"
            }, i.get("T2V")))))
        }
    })
      , ff = n.createBackboneClass({
        mixins: [it.MatchInfoMixins, k.MatchTimeMix, ci],
        OpenLink: function() {
            this.props.hasLink && (this.getModel().get("BetTypes").length == 0 && this.getModel().GetBetyypes(),
            this.ShowSingle());
            this.props.onOpenOther && this.props.onOpenOther()
        },
        render: function() {
            var i = this.getModel()
              , r = "team_text"
              , f = r
              , u = i.get("GameID")
              , e = i.get("IsLive");
            u == 44 && (r += " match-red",
            f += " match-blue");
            var o = i.get("Neu") ? t.LanguageHelper.Get("Neutral_Team") : ""
              , s = this.TimerSuspend()
              , h = this.CreateGTS();
            return n.createElement("div", {
                className: "team",
                onClick: this.OpenLink,
                "data-status": this.props.IsActive ? "is-active" : ""
            }, n.createElement("div", {
                className: "team_name"
            }, n.createElement("div", {
                className: "team_flag"
            }, n.createElement(k.LogoIcon, {
                key: i.get("TeamId1"),
                IconID: i.get("TeamId1"),
                type: "H"
            }), i.get("Rc1") > 0 ? n.createElement("div", {
                className: "match_redcard"
            }, i.get("Rc1")) : null), n.createElement("div", {
                className: "team_court"
            }), n.createElement("div", {
                className: r
            }, t.TeamNameRef.GetName(i.get("TeamId1")) + o)), n.createElement("div", {
                className: "team_vs"
            }, n.createElement(k.ScoreDiv, {
                IsSingle: !1,
                cls: "team_score",
                sportid: u,
                HLS: i.get("HLS"),
                Score1: i.get("T1V"),
                Score2: i.get("T2V"),
                IsLive: e
            }), n.createElement("div", {
                className: "team_time"
            }, e && i.get("HLS") == 0 && u == 44 ? n.createElement("div", null, t.LanguageHelper.Get("lbl_round") + i.get("T1V")) : null, n.createElement(k.LiveTimerDiv, {
                match: i
            }), s, h)), n.createElement("div", {
                className: "team_name"
            }, n.createElement("div", {
                className: "team_flag"
            }, n.createElement(k.LogoIcon, {
                key: i.get("TeamId2"),
                IconID: i.get("TeamId2"),
                type: "A"
            }), i.get("Rc2") > 0 ? n.createElement("div", {
                className: "match_redcard"
            }, i.get("Rc2")) : null), n.createElement("div", {
                className: "team_court"
            }), n.createElement("div", {
                className: f
            }, t.TeamNameRef.GetName(i.get("TeamId2")))))
        }
    })
      , ef = n.createBackboneClass({
        mixins: [sr],
        getInitialState: function() {
            return {
                IsOpen: !1,
                Show: 0,
                contentName: ".match_content,.tab_block"
            }
        },
        render: function() {
            var i = this.getModel(), c = i.get("MatchId"), r = i.get("GameID") ? i.get("GameID") : lt.get("sportId"), o = [t.TeamNameRef.GetName(i.get("TeamId1")), t.TeamNameRef.GetName(i.get("TeamId2"))], s = r + "_" + lt.get("sportId") + this.getMarketType() + lt.get("type") + "_" + lt.get("LMode"), h = i.get("Neu") ? t.LanguageHelper.Get("Neutral_Team") : "", u = this.getMarketType() == "l", f, e;
            return r && r === 161 && (f = i.get("ball1"),
            e = i.get("ball2")),
            n.createElement("div", {
                ref: "match",
                className: "match " + (u ? "is-live" : ""),
                "data-status": this.state.IsOpen ? "is-open" : ""
            }, r === 161 && this.getMarketType() === "l" && n.createElement(y.ScoreBoard, {
                leagueID: i.get("LeagueId"),
                ball1: f,
                ball2: e
            }), n.createElement(tf, {
                match: i,
                sportid: r,
                openOddsDiv: this.openOddsDiv,
                IsLive: u,
                ShowTime: this.GetShowTimeCN(i),
                TimerSuspend: this.TimerSuspend(),
                CreateGTS: this.CreateGTS(),
                neu: h,
                IsSingleModel: this.props.IsSingleModel
            }), this.state.IsOpen || this.state.Show ? this.props.IsSingleModel ? n.createElement(er, {
                model: i.get("MoreBetType"),
                MainMatch: i,
                IsSingleModel: !0,
                defTab: this.props.defTab
            }) : n.createElement(vr, {
                ref: "HDPOUGroup",
                ShowSingle: this.ShowSingle,
                IsOpen: this.state.IsOpen,
                collection: i.get("BetTypes"),
                IsLive: u,
                match: i,
                TeamAry: o,
                key: s,
                IsSingleModel: this.props.IsSingleModel
            }) : null)
        }
    })
      , of = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsOpen: !1
            }
        },
        changeOddsType: function() {
            this.forceUpdate()
        },
        componentWillUnmount: function() {
            st.off("change:OddsType", this.changeOddsType, this);
            t.EventHub.off("openMatch-" + this.props.Match.get("MatchId"))
        },
        componentDidMount: function() {
            this.props.IsOpen && this.openOddsDiv();
            st.on("change:OddsType", this.changeOddsType, this);
            t.EventHub.on("openMatch-" + this.props.Match.get("MatchId"), function() {
                var t = $(n.findDOMNode(this.refs.match));
                setTimeout(function() {
                    $("html,body").animate({
                        scrollTop: t.offset().top
                    }, 100)
                }, 300);
                this.setState({
                    IsOpen: !0
                })
            }
            .bind(this))
        },
        openOddsDiv: function() {
            var i = $(n.findDOMNode(this.refs.match))
              , r = this;
            this.state.IsOpen ? i.children(".match_content").slideUp(300, function() {
                r.setState({
                    IsOpen: !1
                })
            }) : (this.props.Match.get("BetTypes").length == 0 && this.props.Match.GetBetyypes(),
            t.EventHub.trigger("scrollTomatch"),
            i.children(".match_content").slideDown(300),
            r.setState({
                IsOpen: !0
            }))
        },
        render: function() {
            var r = this.props.Match
              , u = "[" + r.get("Etm").substring(0, 10).replace(/-/g, "/") + "] " + t.LeagueNameRef.GetName(r.get("MatchId"))
              , i = this.getCollection().sortBy(function(n) {
                return n.get("Price")
            }).map(function(i) {
                var r = w.OddsConverter.FloorToString(i.get("Price"), 2)
                  , u = {
                    MatchId: i.get("MatchId"),
                    MarketId: i.get("MarketId"),
                    TeamAry: ["", ""],
                    SportKind: "OT",
                    T1V: 0,
                    T2V: 0,
                    MatchModel: this.props.Match
                };
                return n.createElement("div", {
                    className: "betType_item"
                }, n.createElement("div", {
                    className: "betType_option"
                }, t.TeamNameRef.GetName(i.get("TeamId"))), n.createElement(k.OddsField, {
                    Price: r,
                    Betting: u
                }))
            }
            .bind(this));
            return (i == null || i.length == 0) && (i = this.getCollection().IsNoData ? n.createElement("div", {
                className: "panel emptyState"
            }, n.createElement("div", {
                className: "panel-body"
            }, n.createElement("span", {
                className: "msg-img noEvent"
            }), n.createElement("div", {
                className: "msg-title"
            }, t.LanguageHelper.Get("lbl_NodataTitle")), n.createElement("div", {
                className: "msg-text",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("NoGame")
                }
            }))) : n.createElement(k.LoadingMin, null)),
            n.createElement("div", {
                ref: "match",
                className: "match",
                "data-status": this.state.IsOpen ? "is-open" : ""
            }, n.createElement("div", {
                className: "match_header",
                onClick: this.openOddsDiv
            }, n.createElement("div", {
                className: "match_team"
            }, u), n.createElement(k.MyFav, {
                type: "match",
                model: r
            }), n.createElement(k.RefreshButton, null)), n.createElement("div", {
                className: "match_content",
                style: {
                    display: "none"
                }
            }, n.createElement("div", {
                className: "betType"
            }, i)))
        }
    })
      , sf = n.createBackboneClass({
        componentDidMount: function() {
            var n = this.props.LeagueId;
            t.EventHub.on("openLeague-" + n, this.OpenLeagueCallBack)
        },
        componentWillUnmount: function() {
            t.EventHub.off("openLeague-" + this.props.LeagueId, this.OpenLeagueCallBack)
        },
        OpenLeagueCallBack: function(n) {
            t.EventHub.trigger("openMatch-" + n, !0)
        },
        render: function() {
            var r = this
              , i = this.getCollection().map(function(t, i) {
                return n.createElement(of, {
                    key: t.get("MatchId"),
                    Match: t,
                    collection: t.get("BetTypes"),
                    IsOpen: i == 0
                })
            });
            return (i == null || i.length == 0) && (i = this.getCollection().IsNoData ? n.createElement("span", {
                className: "text-nodata"
            }, "There are no games available at the moment.") : n.createElement("div", {
                className: "loading-small"
            }, n.createElement("i", {
                className: "icon-loading"
            }, n.createElement("span", null), n.createElement("span", null), n.createElement("span", null), n.createElement("span", null)))),
            n.createElement("div", {
                className: "game"
            }, n.createElement("div", {
                className: "game_title"
            }, t.LeagueNameRef.GetName("G" + this.props.LeagueId), n.createElement("span", {
                className: "game_number"
            }, "(", this.getCollection().length, ")")), n.createElement("div", {
                className: "match_list match-outright"
            }, i))
        }
    })
      , hf = n.createBackboneClass({
        getInitialState: function() {
            return {
                PaginationModel: new ar({
                    ComGroupKey: this.props.match.get("MatchId"),
                    page: 1,
                    pagemax: 2,
                    lock: !1
                })
            }
        },
        componentWillMount: function() {
            this.CreateHTFT()
        },
        shouldComponentUpdate: function() {
            return this.CreateHTFT(),
            !0
        },
        CreateHTFT: function() {
            var i = this.props.match, r = function(n) {
                return function(t) {
                    var u = t.get("typeArray"), f, i, r;
                    if (Array.isArray(n[0])) {
                        for (f = !1,
                        i = 0; i < n.length; i++)
                            if (u[0] == n[i][0] && u[1] == n[i][1] && u[2] == n[i][2]) {
                                f = !0;
                                break
                            }
                        return f
                    }
                    for (r = 0; r < n.length; r++)
                        if (u[r] != n[r])
                            return !1;
                    return !0
                }
            }, n, t;
            this.FT = this.getCollection().findWhere(r(i.FTBetTypes));
            this.HT = this.getCollection().findWhere(r(i.HTBetTypes));
            n = this.state.PaginationModel.get("pagemax");
            t = this.state.PaginationModel.get("page");
            n = this.FT && this.HT ? 2 : 1;
            t > n && (t = n);
            this.state.PaginationModel.set({
                page: t,
                pagemax: n
            })
        },
        componentDidMount: function() {
            var t = $(n.findDOMNode(this.refs.bettype_list));
            this.nofirst = !0;
            return
        },
        componentWillUnmount: function() {},
        addScrollEvent: function() {
            var t = $(n.findDOMNode(this.refs.bettype_list));
            this.currentPosition = 0;
            this.isTouchEnd = !0;
            this.moveLength = 0;
            this.startT = (new Date).getTime();
            t.on("touchstart", function(n) {
                if (n.originalEvent.touches.length === 1 || this.isTouchEnd) {
                    t.off("scroll");
                    this.scrolltimer !== null && clearTimeout(this.scrolltimer);
                    var i = n.originalEvent.touches[0];
                    this.startX = i.pageX;
                    this.startY = i.pageY;
                    this.initialPos = this.currentPosition;
                    this.startT = (new Date).getTime();
                    this.isMove = !1;
                    this.isTouchEnd = !1;
                    this.moveLength = 0
                }
            }
            .bind(this));
            t.on("touchmove", function(n) {
                if (this.isTouchEnd) {
                    n.preventDefault();
                    return
                }
                var u = -t.width() * ei.get(this.props.ComGroupKey).get("pagemax") - 1
                  , i = n.originalEvent.touches[0]
                  , r = i.pageX - this.startX
                  , f = i.pageY - this.startY;
                this.moveLength = Math.abs(r);
                this.isMove = !0;
                this.direction = r > 0 ? "right" : "left"
            }
            .bind(this));
            t.on("touchend", function() {
                var r = +new Date - this.startT
                  , i = ei.get(this.props.ComGroupKey)
                  , u = t.width() * i.get("pagemax")
                  , n = i.get("page");
                if (this.isMove && !this.isTouchEnd)
                    if (this.isTouchEnd = !0,
                    r > 300)
                        t.scrollLeft() >= (n - 1) * t.width() + t.width() / 4 ? n++ : t.scrollLeft() < (n - 1) * t.width() - t.width() / 4 && n--,
                        n < 1 && (n = 1),
                        n > i.get("pagemax") && (n = i.get("pagemax")),
                        $("#" + this.props.ComGroupKey).find(".bettype_list").animate({
                            scrollLeft: (n - 1) * t.width()
                        }, 300),
                        i.set("page", n);
                    else {
                        t.off("scroll");
                        t.on("scroll", function(r) {
                            $("#" + this.props.ComGroupKey).find(".bettype_list").not(t).scrollLeft(r.target.scrollLeft);
                            this.scrolltimer !== null && clearTimeout(this.scrolltimer);
                            this.scrolltimer = setTimeout(function() {
                                var u, r;
                                for (t.off("scroll"),
                                u = t.width() / 2,
                                n = i.get("pagemax"),
                                r = 1; r <= i.get("pagemax"); r++)
                                    if (t.scrollLeft() <= r * t.width() - u) {
                                        n = r;
                                        break
                                    }
                                n < 1 && (n = 1);
                                n > i.get("pagemax") && (n = i.get("pagemax"));
                                $("#" + this.props.ComGroupKey).find(".bettype_list").animate({
                                    scrollLeft: (n - 1) * t.width()
                                }, 300);
                                i.set("page", n)
                            }
                            .bind(this), 150)
                        }
                        .bind(this))
                    }
            }
            .bind(this))
        },
        removeScrollEvent: function() {},
        componentDidUpdate: function() {
            if (this.refs.HDPOU && this.props.IsOpen)
                var t = ei.get(this.props.ComGroupKey)
                  , i = $(n.findDOMNode(this.refs.bettype_list))
        },
        render: function() {
            var t = this.props.match, i = [], r, u, f;
            return this.props.Show == 0 ? null : (r = this.FT,
            u = this.HT,
            r || u || t.get("BetTypes").length != 0 ? (t.get("GameID") == 43 ? t.get("IsLive") ? (u && i.push(n.createElement(ni, {
                model: u,
                showTitle: !0,
                BetTypes: t.HTBetTypes,
                TeamAry: this.props.TeamAry,
                IsSingleModel: this.props.IsSingleModel,
                Match: t
            })),
            r && i.push(n.createElement(ni, {
                ref: "HDPOU",
                model: r,
                showTitle: !0,
                BetTypes: t.FTBetTypes,
                TeamAry: this.props.TeamAry,
                IsSingleModel: this.props.IsSingleModel,
                Match: t
            }))) : (r && i.push(n.createElement(ni, {
                ref: "HDPOU",
                model: r,
                showTitle: !0,
                BetTypes: t.FTBetTypes,
                TeamAry: this.props.TeamAry,
                IsSingleModel: this.props.IsSingleModel,
                Match: t
            })),
            u && i.push(n.createElement(ni, {
                model: u,
                showTitle: !0,
                BetTypes: t.HTBetTypes,
                TeamAry: this.props.TeamAry,
                IsSingleModel: this.props.IsSingleModel,
                Match: t
            }))) : (r && i.push(n.createElement(ni, {
                ref: "HDPOU",
                model: r,
                showTitle: !0,
                BetTypes: t.FTBetTypes,
                TeamAry: this.props.TeamAry,
                IsSingleModel: this.props.IsSingleModel,
                Match: t,
                showMoreAsianMarkets: this.props.showMoreAsianMarkets,
                handleOpenMoreAsianMarkets: this.props.handleOpenMoreAsianMarkets
            })),
            u && i.push(n.createElement(ni, {
                model: u,
                showTitle: !0,
                BetTypes: t.HTBetTypes,
                TeamAry: this.props.TeamAry,
                IsSingleModel: this.props.IsSingleModel,
                Match: t,
                showMoreAsianMarkets: this.props.showMoreAsianMarkets,
                handleOpenMoreAsianMarkets: this.props.handleOpenMoreAsianMarkets
            }))),
            i.length == 0 && t.OtherBetType && (f = this.getCollection().findWhere(CreatFilter(t.OtherBetType)),
            i.push(n.createElement(ni, {
                model: f,
                showTitle: !0,
                BetTypes: t.OtherBetType,
                TeamAry: this.props.TeamAry,
                IsSingleModel: this.props.IsSingleModel,
                Match: t
            }))),
            i.length == 0 && i.push(n.createElement(ni, {
                ref: "HDPOU",
                model: r,
                showTitle: !0,
                BetTypes: t.FTBetTypes,
                TeamAry: this.props.TeamAry,
                IsSingleModel: this.props.IsSingleModel,
                Match: t
            }))) : i = n.createElement(k.LoadingMin, null),
            n.createElement("div", {
                className: "commatch_bettype"
            }, n.createElement(cf, {
                List: i,
                Pagination: this.state.PaginationModel
            }), n.createElement(af, {
                model: this.state.PaginationModel
            })))
        }
    })
      , cf = n.createBackboneClass({
        componentDidMount: function() {
            var t = $(n.findDOMNode(this.refs.bettype_list));
            t.on("scroll", function(n) {
                this.props.Pagination.set({
                    scroll: n.target.scrollLeft,
                    width: t.width()
                })
            }
            .bind(this));
            this.props.Pagination.get("page") == 2 && t.scrollLeft(this.props.Pagination.get("scroll"))
        },
        componentDidUpdate: function() {
            var t = $(n.findDOMNode(this.refs.bettype_list));
            this.props.Pagination.get("page") == 2 && t.scrollLeft(this.props.Pagination.get("scroll"))
        },
        render: function() {
            return n.createElement("div", {
                ref: "bettype_list",
                className: "bettype_list"
            }, this.props.List)
        }
    })
      , ar = Backbone.Model.extend({
        defaults: {
            ComGroupKey: "",
            page: 1,
            pagemax: 2,
            lock: !1,
            scroll: 0,
            width: 0
        },
        idAttribute: "ComGroupKey",
        initialize: function() {
            this.on("change:scroll", function() {
                for (var i = this.get("width"), r = i / this.get("pagemax"), n = this.get("pagemax"), u = this.get("scroll"), t = 1; t <= n; t++)
                    if (u <= t * i - r) {
                        n = t;
                        break
                    }
                n < 1 && (n = 1);
                n > this.get("pagemax") && (n = this.get("pagemax"));
                this.set("page", n)
            }
            .bind(this))
        }
    })
      , lf = Backbone.Collection.extend({
        model: ar,
        initialize: function() {
            lt.on("change:sportId change:market change:type change:WhatsHotAct", function() {
                this.reset(null)
            }
            .bind(this))
        }
    })
      , ei = new lf
      , af = n.createBackboneClass({
        changeOptions: "change:page change:pagemax",
        render: function() {
            var i = [], t;
            if (!this.getModel())
                return null;
            for (t = 1; t <= this.getModel().get("pagemax"); t++)
                i.push(n.createElement("li", {
                    "data-status": this.getModel().get("page") == t ? "is-active" : ""
                }));
            return n.createElement("div", {
                className: "bettype_pagination"
            }, n.createElement("ul", null, i))
        }
    })
      , vr = n.createBackboneClass({
        componentDidUpdate: function() {
            var n = this.props.match.get("MatchId");
            t.EventHub.trigger("HDPOUGroupDidUpdate-" + n + "-" + this.props.IsSingleModel, this.getCollection().length);
            this.props.match.hasCP != null && t.EventHub.trigger("OpenEsportMore-" + n + this.props.IsSingleModel, this.props.match.hasCP);
            this.props.UpdateCallBack && this.props.UpdateCallBack()
        },
        componentDidMount: function() {
            this.props.UpdateCallBack && this.props.UpdateCallBack()
        },
        FindBetTypeCom: function(t) {
            for (var u, f, e = [], r = this, i = 0; i < t.length; i++)
                u = this.getCollection().findWhere(t[i]),
                u && (f = t[i].BetTypeId,
                t[i].Resourceid && (f = t[i].BetTypeId + ":" + t[i].Resourceid),
                e.push(f == 90 ? n.createElement(iu, {
                    MainMatch: r.props.match,
                    Market: u,
                    TeamAry: r.props.TeamAry,
                    IsSingleModel: r.props.IsSingleModel
                }) : n.createElement(ii, {
                    model: u,
                    showTitle: !0,
                    bettypeid: f,
                    TeamAry: r.props.TeamAry,
                    IsSingleModel: r.props.IsSingleModel,
                    Match: r.props.match
                })));
            return e
        },
        ClickFirstMarke: function() {
            this.props.ShowSingle("7")
        },
        render: function() {
            var h = this, f = this.props.match, e = null, o = null, i = f.get("GameID") ? f.get("GameID") : lt.get("sportId"), r = [], u = [{
                BetTypeId: 20
            }, {
                BetTypeId: 1
            }, {
                BetTypeId: 2
            }, {
                BetTypeId: 3
            }, {
                BetTypeId: 5
            }, {
                BetTypeId: 153
            }, {
                BetTypeId: 501
            }], s;
            return i == 43 && (u = u.concat([{
                BetTypeId: 9001,
                Resourceid: "01"
            }, {
                BetTypeId: 9001,
                Resourceid: "02"
            }, {
                BetTypeId: 9001,
                Resourceid: "03"
            }, {
                BetTypeId: 9001,
                Resourceid: "04"
            }, {
                BetTypeId: 9001,
                Resourceid: "05"
            }, {
                BetTypeId: 9001,
                Resourceid: "06"
            }, {
                BetTypeId: 9001,
                Resourceid: "07"
            }, {
                BetTypeId: 9001,
                Resourceid: "08"
            }, {
                BetTypeId: 9001,
                Resourceid: "09"
            }])),
            i == 161 && (u = [{
                BetTypeId: 85
            }, {
                BetTypeId: 86
            }, {
                BetTypeId: 89
            }, {
                BetTypeId: 91
            }, {
                BetTypeId: 90,
                Line: 1
            }, {
                BetTypeId: 90,
                Line: 2
            }, {
                BetTypeId: 90,
                Line: 3
            }, {
                BetTypeId: 90,
                Line: 4
            }, {
                BetTypeId: 90,
                Line: 5
            }]),
            i == 180 && (u = [{
                BetTypeId: 1201
            }, {
                BetTypeId: 1203
            }, {
                BetTypeId: 1205
            }, {
                BetTypeId: 1224
            }, {
                BetTypeId: 1206
            }, {
                BetTypeId: 1204
            }]),
            i == 186 && (u = [{
                BetTypeId: 1220
            }, {
                BetTypeId: 1235
            }, {
                BetTypeId: 1236
            }]),
            i == 9 && (u = [{
                BetTypeId: 20
            }, {
                BetTypeId: 701
            }, {
                BetTypeId: 704
            }, {
                BetTypeId: 705
            }, {
                BetTypeId: 706
            }]),
            r = this.FindBetTypeCom(u, i),
            r.length == 0 && (r = this.FindBetTypeCom([{
                BetTypeId: 7
            }, {
                BetTypeId: 8
            }, {
                BetTypeId: 15
            }, {
                BetTypeId: 12
            }, {
                BetTypeId: 21
            }])),
            r == null || r.length == 0 ? r = this.getCollection().IsNoData ? n.createElement("div", {
                className: "panel emptyState"
            }, n.createElement("div", {
                className: "panel-body"
            }, n.createElement("span", {
                className: "msg-img noEvent"
            }), n.createElement("div", {
                className: "msg-title"
            }, t.LanguageHelper.Get("lbl_NodataTitle")), n.createElement("div", {
                className: "msg-text",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("NoGame")
                }
            }))) : n.createElement(k.LoadingMin, null) : i != 161 && i != 180 && i != 186 && (s = f.get("Moc") + this.getCollection().length,
            o = n.createElement("div", {
                className: "betType betType-morebet",
                onClick: this.props.ShowSingle
            }, n.createElement("div", {
                className: "btn btn-morebet"
            }, t.LanguageHelper.Get("lbl_more") + " (" + s + ")", n.createElement("i", {
                className: "icon icon-arrow-right"
            })))),
            lt.get("type") != "parlay" && f.get("fast") == !0 && (e = n.createElement("div", {
                className: "betType betType-FM"
            }, n.createElement("div", {
                className: "betType_item"
            }, n.createElement("div", {
                className: "betType_option"
            }, t.LanguageHelper.Get("lbl_fastmarkets"), n.createElement("i", {
                className: "icon icon-fastmarket"
            })), n.createElement("div", {
                className: "betType_goal 6919"
            }, t.LanguageHelper.Get("fm1"))), n.createElement("div", {
                className: "btn",
                onClick: this.ClickFirstMarke
            }, n.createElement("div", {
                className: "betType_odds"
            }, t.LanguageHelper.Get("qBet"), n.createElement("i", {
                className: "icon icon-arrow-right"
            }))))),
            n.createElement("div", {
                className: "match_content",
                id: "MatchDiv_" + h.props.match.get("MatchId") + this.props.IsSingleModel,
                style: this.props.IsOpen ? {
                    display: "block"
                } : {
                    display: "none"
                }
            }, r, e, o)
        }
    })
      , ni = n.createBackboneClass({
        componentDidMount: function() {
            t.EventHub.bind("refreshHdpOU-" + this.props.Match.get("MatchId"), this.refreshHdpOU, this)
        },
        componentWillUnmount: function() {
            t.EventHub.off("refreshHdpOU-" + this.props.Match.get("MatchId"), this.refreshHdpOU, this)
        },
        refreshHdpOU: function() {
            this.forceUpdate()
        },
        handleOpenMoreAsianMarkets: function(n) {
            var i = this.props.Match;
            t.WritePNRLog(st.get("ID"), i.get("MatchId") + "-" + i.get("GameID"), null, 31);
            this.props.handleOpenMoreAsianMarkets(n)
        },
        render: function() {
            var i = this.getModel(), s = this.props.BetTypes, f = this, e = null, u;
            i || (i = {
                get: function(n) {
                    if (n == "typeArray") {
                        var t = function(n) {
                            return Array.isArray(n[0]) ? n[0] : n
                        };
                        return t(s)
                    }
                    return n == "colCount" ? 3 : null
                }
            });
            var h = i.get("typeArray")
              , c = 3
              , f = this
              , o = this.props.Match.get("GameID") ? this.props.Match.get("GameID") : lt.get("sportId")
              , r = h.map(function(r) {
                var u = r, y = null, p, v, l, a;
                typeof r == "string" && (p = r.split(":"),
                u = parseInt(p[0]),
                y = p[1]);
                var s = i.get("bettype" + r)
                  , h = ct.BetTypeSetting[u]
                  , w = h.Name(o, y, !0);
                for (!s || !s.get("isMMR") || s.get("notUseMMR") || [1, 3, 7, 8].indexOf(u) == "-1" || (w += " MM"),
                !f.props.showMoreAsianMarkets || e || !s || !~[1, 3, 7, 8].indexOf(u) || (e = u),
                v = [],
                l = 0; l < c; l++)
                    if (a = h.Options[l],
                    a && s) {
                        var g = s.get("Selections").get(a.betTeam)
                          , b = h.HasLine == 1 || u == 20 || u == 21 ? "" : a.title(y)
                          , d = !1;
                        h.HasLine == 0 && (d = !0,
                        b = l == 0 ? t.LanguageHelper.Get("lbl_odds_o") : t.LanguageHelper.Get("lbl_odds_u"));
                        v.push(n.createElement(k.Odds, {
                            key: a.betTeam,
                            showTitleLine: d,
                            NoShowLine: !1,
                            IsNewStyle: !0,
                            market: s,
                            Match: f.props.Match,
                            TeamAry: f.props.TeamAry,
                            Selection: g,
                            Title: b,
                            HasLine: h.HasLine
                        }))
                    } else
                        v.push(n.createElement("div", {
                            className: "bettype_oddsbox 7004"
                        }));
                return n.createElement("div", {
                    key: r,
                    className: "bettype_item"
                }, n.createElement("div", {
                    className: "bettype_name"
                }, w), v)
            })
              , l = 3 - r.length;
            for (u = 0; u < l; u++)
                r.push(n.createElement("div", {
                    kye: u,
                    className: "bettype_item"
                }, n.createElement("div", {
                    className: "bettype_name"
                })));
            return this.props.showMoreAsianMarkets && r.splice(0, 0, n.createElement("div", {
                className: "btn btn-more-lines",
                onClick: this.handleOpenMoreAsianMarkets.bind(null, e),
                "data-full-width": o == 2
            }, n.createElement("span", {
                className: "btn_text-line-2"
            }, t.LanguageHelper.Get("lbl_MoreAsianLines")))),
            n.createElement("div", {
                className: "bettype_group",
                "data-more-lines": this.props.showMoreAsianMarkets
            }, r)
        }
    })
      , ii = n.createBackboneClass({
        openSuperLive: function() {
            r.navigateAndSaveLast("SuperLive/m=" + this.props.Match.get("MatchId"), {
                trigger: !0
            })
        },
        render: function() {
            var w = this.getModel(), nt = this.props.Match.get("GameID") ? this.props.Match.get("GameID") : lt.get("sportId"), tt = this.props.showTitle, e = this.props.TeamAry, o = this.props.bettypeid, s = w.get("Resourceid"), b, d, it, c, l, v, y, g, f, u, p;
            typeof o == "string" && (b = o.split(":"),
            o = parseInt(b[0]),
            s = b[1]);
            var i = ct.BetTypeSetting[o]
              , h = []
              , r = w;
            if (!r || !i)
                return null;
            if (d = Array.isArray(i.Options[0]) && i.Options.length > 2,
            i.Col == -3)
                tt = !1,
                it = n.createElement(rr, {
                    model: r,
                    Match: this.props.Match,
                    TeamAry: e,
                    Setting: i
                }),
                h.push(n.createElement(ti, {
                    Other: it,
                    match: this.props.Match,
                    LeagueId: this.props.Match.get("LeagueId"),
                    betTypeName: i.Name(r),
                    TeamAry: e
                }, n.createElement(vi, {
                    TeamAry: e,
                    Match: this.props.Match,
                    model: r,
                    Setting: i
                })));
            else if (d)
                for (c = 0,
                l = 1; c < l; ) {
                    for (f = 0; f < i.Options.length; f++)
                        if (i.Options[f].length > l && (l = i.Options[f].length),
                        i.Options[f][c]) {
                            var u = i.Options[f][c]
                              , rt = u.title(s, r, e)
                              , ut = r.get("Selections").get(u.betTeam)
                              , a = null;
                            u.SLine && (a = r.get("Selections").get(u.SLine).get("Price"));
                            h.push(n.createElement(k.Odds, {
                                market: r,
                                Match: this.props.Match,
                                TeamAry: e,
                                Selection: ut,
                                Title: rt,
                                HasLine: i.HasLine,
                                FMLine: a
                            }))
                        } else
                            h.push(n.createElement("div", {
                                className: "betType_item"
                            }));
                    c++
                }
            else
                for (v = [i.Options],
                Array.isArray(i.Options[0]) && (v = i.Options),
                y = 0; y < v.length; y++)
                    for (g = v[y],
                    f = 0; f < g.length; f++)
                        if (u = g[f],
                        u && u.title && u.betTeam) {
                            var rt = u.title(s, w, e)
                              , ut = r.get("Selections").get(u.betTeam)
                              , a = null;
                            u.SLine && (a = r.get("Selections").get(u.SLine).get("Price"));
                            h.push(n.createElement(k.Odds, {
                                market: r,
                                Match: this.props.Match,
                                TeamAry: e,
                                Selection: ut,
                                Title: rt,
                                HasLine: i.HasLine,
                                FMLine: a
                            }))
                        }
            return p = null,
            tt && (p = nt == 43 && this.props.Match.get("IsLive") && this.props.Match.get("ISS") == 0 && o == 9001 && this.props.Match.get("CMP") == parseInt(s) ? n.createElement("div", {
                className: "betType_name is-inplay"
            }, i.Name(nt, s), n.createElement("span", {
                className: "betType_inplay"
            }, t.LanguageHelper.Get("lbl_Status_InPlay"))) : n.createElement("div", {
                className: this.props.IsEsportMore ? "betType_title" : "betType_name"
            }, i.Name(r, s), o === 91 && n.createElement("div", {
                className: "label label-new"
            }, t.LanguageHelper.Get("lbl_TagNew")))),
            n.createElement("div", {
                className: "betType " + (d ? "betType-row" : "betType-ng")
            }, p ? p : null, h)
        }
    })
      , lc = n.createBackboneClass({
        mixins: [n.BackboneMixin("market"), n.BackboneMixin("Selection", "change:Price change:changeStatus"), it.OddsMixins],
        changeOddsType: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            st.on("change:OddsType", this.changeOddsType, this)
        },
        componentWillUnmount: function() {
            st.off("change:OddsType", this.changeOddsType, this)
        },
        render: function() {
            var o = {
                value: 0
            }, i = this.props.market, y = this.props.Match.get("GameID") ? this.props.Match.get("GameID") : lt.get("sportId"), r = this.props.market.get("BetTypeId"), u = this.props.Selection.get("SelId"), s = {
                isMMR: this.props.Match.get("MBO") == 0 & !i.get("notUseMMR") && i.get("isMMR"),
                show: !1
            }, l = null, f, d = this.props.LngBallIndex, p, w, a, h, c, e;
            if (r == 90)
                f = "";
            else
                try {
                    s.isMMR ? (f = this.GetLine(u, this.props.HasLine, i.get("cs25"), o, !0),
                    f == 0 && (r == 1 || r == 7) && (i.get("Line") != 0 ? o.value = (i.get("Line") > 0 ^ u == "h") ? 0 : 1 : (p = Math.abs(i.get("Selections").get("h").get("Price")),
                    w = Math.abs(i.get("Selections").get("a").get("Price")),
                    o.value = (p <= w ^ u == "h") ? 0 : 1)),
                    a = i.get("cs15"),
                    (u != "a" || r != 3 && r != 8) && (r != 1 && r != 7 || o.value) ? s.show = !0 : a *= -1,
                    l = a) : f = this.props.FMLine != null ? this.GetLine(u, this.props.HasLine, this.props.FMLine, o, !0) : this.GetLine(u, this.props.HasLine, this.props.market.get("Line"), o, !0)
                } catch (g) {
                    console.log(g)
                }
            r >= 301 && r <= 304 && (h = this.props.Selection.get("Info").split(","),
            c = parseInt(h[0]),
            u == "h" && h[1] == "2" && (c *= -1),
            u == "a" && h[1] == "1" && (c *= -1),
            l = c);
            e = this.GetPrice();
            e != "" && s.isMMR && (e = u == "h" ? i.get("cs35") : i.get("cs45"),
            e = e ? e.toLocaleString(undefined, {
                minimumFractionDigits: 2
            }) : "");
            var nt = r == 646 ? this.props.market.get("hdp2") : null
              , tt = {
                Pty: this.props.market.get("Pty"),
                MatchId: this.props.Match.get("OMid") ? this.props.Match.get("OMid") : this.props.market.get("MatchId"),
                MarketId: this.props.market.get("MarketId"),
                TeamAry: this.props.TeamAry,
                T1V: this.props.Match.get("T1V"),
                T2V: this.props.Match.get("T2V"),
                SportID: y,
                betInfo: this.props.betInfo,
                srcLine: s.isMMR ? i.get("cs25") : this.props.market.get("Line"),
                MatchModel: this.props.Match,
                isMMR: s.isMMR,
                OtherHdp: nt
            }
              , b = n.createElement(k.OddsField, {
                Price: e,
                Line: f,
                Title: this.props.Title,
                Fav: o.value,
                changeStatus: this.props.Selection.get("changeStatus"),
                changeMMRStatus: i.get("changeMMRStatus"),
                mmrLine: l,
                MMRObj: s,
                BetTypeId: r,
                SelId: this.props.betTeam ? this.props.betTeam : u,
                Betting: tt,
                hasCashOut: vf(this.props.Match.get("CO")),
                nochg: this.props.nochg,
                IsNewStyle: this.props.IsNewStyle,
                showTitleLine: this.props.showTitleLine,
                NoShowLine: this.props.NoShowLine,
                betTeamName: this.props.betTeamName,
                SOGP: i.get("SOGP"),
                LngBallIndex: d
            })
              , v = null;
            return y == 1 && (r == 1 || r == 7) && parseFloat(f) > 0 && (v = n.createElement("div", {
                className: "betType_goal_ch"
            }, t.RefHdpName(parseFloat(f)))),
            this.props.CustomLine && (f = this.props.CustomLine),
            this.props.IsNewStyle ? b : n.createElement("div", {
                className: "betType_item"
            }, this.props.betTypeOption ? this.props.betTypeOption : n.createElement("div", {
                className: "betType_option",
                dangerouslySetInnerHTML: {
                    __html: this.props.Title
                }
            }), v ? v : null, f == "" || e == "" ? null : n.createElement("div", {
                className: "betType_goal 7225"
            }, f), b)
        }
    })
      , vf = function(n) {
        return (window._SiteMode == "2" ? "1,3" : "1,2").indexOf(n) > -1 && st.get("CO") && lt.get("type") != "parlay" ? !0 : !1
    }
      , ri = function(i, r, f, e, o) {
        var v = arguments.length <= 6 || arguments[6] === undefined ? "" : arguments[6]
          , c = arguments[7]
          , l = st.get("IsNewStyle") && i != 161
          , a = i + "_" + lt.get("sportId") + r + lt.get("type") + lt.get("LMode") + lt.get("WhatsHotAct") + f.IsGetAll
          , s = []
          , h = {
            open: !0,
            last: null,
            first: null
        }
          , y = l ? nu : ir
          , p = {
            count: 0,
            tmCount: 0
        };
        return i == 161 && (e = [u.get("leagueId")]),
        f.map(function(r, u) {
            if (e == null || !(e.indexOf(r.get("LeagueId")) < 0)) {
                h.last = r.get("Index");
                h.first == null && (h.first = r.get("Index"));
                t.EventHub.once("showMobileLiteMiniStreamingTooltip", function(n) {
                    n.setState({
                        IsStreamingToolTipShow: !0
                    });
                    var i = n;
                    t.EventHub.once("closeMobileLiteMiniStreamingTooltip", function() {
                        i.setState({
                            IsStreamingToolTipShow: !1
                        })
                    })
                });
                if (i == 43)
                    t.EventHub.once("showMobileLiteESportEGamerTooltip", function(n) {
                        n.setState({
                            IsToolTipShow: !0
                        })
                    });
                lt.get("sportId") == 999 ? s.push(n.createElement(sf, {
                    collection: r.get("MatchList"),
                    LeagueId: r.get("LeagueId"),
                    key: a + r.get("LeagueId") + r.get("Index"),
                    openLeague: h
                })) : (l && (h = {
                    open: s.length < 5
                }),
                s.push(n.createElement(y, {
                    model: r,
                    OpenMatch: p,
                    LeagueCollection: f,
                    key: a + r.get("LeagueId") + r.get("Index"),
                    openLeague: h,
                    ComGroupKey: v,
                    isFirstLeague: !u
                })),
                u == 0 && i == 1 && _Site !== "pica88" && s.push(n.createElement(bt.FacebookWall, {
                    key: "facebookAD"
                })))
            }
        }),
        s.length == 0 && i != 0 && o ? (s = n.createElement(d.NoLeague, {
            model: lt
        }),
        i == 161 && (s = n.createElement("div", {
            className: "league is-live number-game"
        }, n.createElement("div", {
            className: "league_header"
        }, n.createElement("div", {
            className: "league_name"
        }, t.LanguageHelper.Get("nogame2")), n.createElement(k.RefreshButton, null)))),
        c && (c.flg = !0)) : o || (s = n.createElement("div", null),
        c && (c.flg = !0)),
        s
    }
      , yr = n.createBackboneClass({
        componentDidUpdate: function() {
            $(".content .game").length > 0 || $(".content .commarket").length > 0 ? $("#NoLeagueLi").hide() : $("#NoLeagueLi").show()
        },
        componentDidMount: function() {},
        ClickEvent: function() {
            var n = this.getModel().get("sportId");
            r.navigate("#Sports/s=" + n + "_0", {
                trigger: !0
            })
        },
        render: function() {
            var i = this.getModel().get("sportId"), r = this.getModel().get("name"), t, u;
            if (this.getModel().get("loading"))
                t = [];
            else if (t = ri(i, lt.get("market"), this.getCollection(), lt.filterLeague.get("filter"), this.getModel().GetLiveCollection().IsReady, !0, i + "_" + lt.get("market")),
            t && !t.length)
                return n.createElement("div", null);
            return (u = st.get("IsNewStyle"),
            !u) ? n.createElement("div", {
                className: "game"
            }, n.createElement("div", {
                className: "game_title"
            }, r, n.createElement("span", {
                className: "game_number"
            }, "(" + t.length + ")")), t) : n.createElement(ui, {
                ComGroupKey: i + "_" + lt.get("market"),
                Title: r + " (" + t.length + ")"
            }, t)
        }
    })
      , pr = n.createBackboneClass({
        componentDidUpdate: function() {
            $(".content .game").length > 0 || $(".content .commarket").length > 0 ? $("#NoLeagueLi").hide() : $("#NoLeagueLi").show()
        },
        componentDidMount: function() {},
        render: function() {
            var i = this.getModel().get("sportId"), r = this.getModel().get("name"), t, u;
            if (this.getModel().get("loading"))
                t = [];
            else if (t = ri(i, lt.get("market"), this.getCollection(), lt.filterLeague.get("filter"), this.getModel().GetLiveCollection().IsReady, !0, i + "_" + lt.get("market") + "_" + this.props.Market),
            t && !t.length)
                return n.createElement("div", null);
            return (u = st.get("IsNewStyle"),
            !u) ? n.createElement("div", {
                className: "game"
            }, n.createElement("div", {
                className: "game_title"
            }, r, n.createElement("span", {
                className: "game_number"
            }, "(" + t.length + ")")), t) : n.createElement(ai, {
                ComGroupKey: i + "_" + lt.get("market") + "_" + this.props.Market,
                Title: r + " (" + t.length + ")",
                SubMenu: !0,
                Market: this.props.Market,
                SubGroup: this.props.SubGroup,
                SetSubGroup: this.props.SetSubGroup
            }, t)
        }
    })
      , yf = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsOpen: !0,
                IsMute: !0,
                IsRefresh: !1
            }
        },
        OpenEvent: function() {
            this.setState({
                IsOpen: !this.state.IsOpen
            })
        },
        MuteEvent: function() {
            var n = !this.state.IsMute;
            this.setState({
                IsMute: n
            });
            this.refs.video.doMute(n)
        },
        RefreshEvent: function() {
            this.refs.video.doStop();
            this.refs.video.init(this.state.IsMute);
            this.state.IsRefresh || (this.setState({
                IsRefresh: !0
            }),
            this.timer && clearTimeout(this.timer),
            this.timer = setTimeout(function() {
                this.setState({
                    IsRefresh: !1
                })
            }
            .bind(this), 1e3))
        },
        componentDidMount: function() {
            this.timer && clearTimeout(this.timer)
        },
        render: function() {
            return n.createElement("div", {
                className: "video",
                "data-status": this.state.IsOpen ? "" : "is-close"
            }, n.createElement("div", {
                className: "video_controller"
            }, n.createElement("div", {
                className: "btn btn-mute ",
                "data-status": this.state.IsMute ? "is-active" : "",
                onClick: this.MuteEvent
            }, n.createElement("i", {
                className: "icon icon-volume-on"
            })), n.createElement("div", {
                className: "btn btn-close-video",
                onClick: this.OpenEvent
            }, n.createElement("span", {
                className: "btn_text"
            }, t.LanguageHelper.Get("sm2"))), n.createElement("div", {
                className: "btn btn-open-video",
                onClick: this.OpenEvent
            }, n.createElement("span", {
                className: "btn_text"
            }, t.LanguageHelper.Get("sm3"))), n.createElement("div", {
                className: "btn btn-refresh",
                onClick: this.RefreshEvent,
                "data-status": this.state.IsRefresh ? "is-active" : ""
            }, n.createElement("i", {
                className: "icon icon-refresh-single"
            }))), this.state.IsOpen ? n.createElement(k.VirtualVideoDiv, {
                ref: "video",
                SportId: this.props.SportId,
                IsMute: this.state.IsMute
            }) : null)
        }
    })
      , pf = n.createBackboneClass({
        render: function() {
            var t = lt.get("sportId");
            return n.createElement(k.VirtualMatchList, {
                collection: lt.get("MatchCollection"),
                HDPOUGroup: vr,
                VirtualGroup: bf
            })
        }
    })
      , yc = n.createBackboneClass({
        render: function() {
            var i = this.props.match, t;
            return i == null ? n.createElement("div", null) : (t = this.getCollection().map(function(t) {
                var i = this.props.match.get("MatchId");
                return n.createElement(ii, {
                    key: i,
                    model: t,
                    TeamAry: this.props.TeamAry,
                    Match: this.props.match
                })
            }
            .bind(this)),
            i.get("MoreBetType").get("Markets").map(function(r) {
                var f = ct.BetTypeSetting[r.get("BetTypeId")]
                  , u = r.get("MarketId");
                f.Col == -1 ? t.push(n.createElement(MoreCorrectScore, {
                    key: u,
                    index: u,
                    TeamAry: this.props.TeamAry,
                    Match: i,
                    model: r,
                    Setting: f
                })) : t.push(n.createElement(fi, {
                    key: u,
                    index: u,
                    TeamAry: this.props.TeamAry,
                    Match: i,
                    model: r,
                    Setting: f
                }))
            }
            .bind(this)),
            (t == null || t.length == 0) && (t = n.createElement("div", {
                className: "loading-small"
            }, n.createElement("i", {
                className: "icon-loading"
            }, n.createElement("span", null), n.createElement("span", null), n.createElement("span", null), n.createElement("span", null)))),
            n.createElement("div", {
                className: "collapse in"
            }, n.createElement("div", {
                className: "main-bettype"
            }, t)))
        }
    })
      , bf = n.createBackboneClass({
        render: function() {
            var i = this.getCollection().map(function(t) {
                return n.createElement(kf, {
                    market: t,
                    match: this.props.match
                })
            }
            .bind(this));
            return (i == null || i.length == 0) && (i = this.getCollection().IsNoData ? n.createElement("div", {
                className: "panel emptyState"
            }, n.createElement("div", {
                className: "panel-body"
            }, n.createElement("span", {
                className: "msg-img noEvent"
            }), n.createElement("div", {
                className: "msg-title"
            }, t.LanguageHelper.Get("lbl_NodataTitle")), n.createElement("div", {
                className: "msg-text",
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("NoGame")
                }
            }))) : n.createElement(k.LoadingMin, null)),
            n.createElement("div", {
                className: "match_content"
            }, i)
        }
    })
      , kf = n.createBackboneClass({
        getImgCls: function(n, t) {
            var i = "";
            switch (t) {
            case 181:
                i = "img-hr";
                break;
            case 182:
                i = "img-gh";
                break;
            case 183:
                i = "img-sw";
                break;
            case 184:
                i = "img-mts";
                break;
            case 185:
                i = "img-cyc"
            }
            return "img-colours " + i + n
        },
        checkPlaceClose: function(n) {
            return st.get("VsPlace") && n >= 181 && n <= 185 ? !0 : n == 183 || n == 185 ? !0 : !1
        },
        render: function() {
            var i = this.props.market, u = this.props.match, r, o;
            if (!i.get("Pol"))
                return null;
            var s = this.checkPlaceClose(u.get("GameID")) ? "" : w.OddsConverter.FloorToString(i.get("Pol")[0].Place, 2)
              , h = w.OddsConverter.FloorToString(i.get("Pol")[0].Win, 2)
              , c = {
                SportKind: "VC",
                MatchId: i.get("MatchId"),
                MarketId: i.get("MarketId"),
                TeamAry: ["", ""],
                ProgramID: u.get("Prg"),
                RaceNum: u.get("RNo"),
                Runner: i.get("NO"),
                time: wf(u.get("Ktm")),
                MatchModel: this.props.match
            }
              , l = [h, s, ""]
              , f = [1231, 1232, 33]
              , a = [t.LanguageHelper.Get("lbl_hr_Win"), t.LanguageHelper.Get("lbl_hr_Place"), t.LanguageHelper.Get("lbl_hr_Win") + "/" + t.LanguageHelper.Get("lbl_hr_Place")]
              , e = [];
            for (r = 0; r < 1; r++)
                i.get("sts") == "SCR" ? e.push(n.createElement("div", {
                    key: f[r],
                    className: "betType_item"
                }, n.createElement("div", {
                    className: "betType_option"
                }, t.LanguageHelper.Get("lbl_SCR")))) : e.push(n.createElement("div", {
                    key: f[r],
                    className: "betType_item"
                }, n.createElement("div", {
                    className: "betType_option"
                }, a[r]), n.createElement(k.OddsField, {
                    Price: l[r],
                    BetTypeId: f[r],
                    PoolType: 1,
                    SelId: "",
                    Betting: c
                })));
            return o = "",
            (u.get("GameID") == 181 || u.get("GameID") == 182) && (o = t.TeamNameRef.GetName(i.get("JId"))),
            n.createElement("div", {
                className: "betType_row"
            }, n.createElement("div", {
                className: "betType_number"
            }, i.get("NO")), n.createElement("div", {
                className: "betType"
            }, n.createElement("div", {
                className: "betType_name betType-race"
            }, n.createElement("img", {
                src: "Content/public/" + i.get("Img")
            }), n.createElement("div", {
                className: "betType_info"
            }, n.createElement("div", {
                className: "info_league"
            }, n.createElement("div", {
                className: "info_name"
            }, t.TeamNameRef.GetName(i.get("RId"))), n.createElement("div", {
                className: "info_draw"
            }, n.createElement("i", {
                className: "icon icon-located"
            }), i.get("Drw"))), n.createElement("div", {
                className: "info_team"
            }, o))), e))
        }
    })
      , df = n.createBackboneClass({
        getInitialState: function() {
            return {
                first: [],
                next: [],
                currData: {
                    chunks: []
                }
            }
        },
        componentWillMount: function() {
            window.OneBookClass == null && (window.OneBookClass = {});
            window.OneBookClass.BetradarVS == null && (window.OneBookClass.BetradarVS = {
                loading: t.LanguageHelper.Get("Streaming"),
                directions: t.LanguageHelper.Get("Streaming2")
            })
        },
        componentDidMount: function() {
            window.addEventListener("message", this.UpdateData, !1);
            this.CreateEventList()
        },
        componentWillUnmount: function() {
            window.removeEventListener("message", this.UpdateData);
            this.retrytimer && clearTimeout(this.retrytimer);
            this.selftimer && clearTimeout(this.selftimer)
        },
        UpdateCollection: function() {
            this.setEvents(this.state.currData)
        },
        UpdateData: function(n) {
            n.data.Events != null && this.setEvents(n.data.Events)
        },
        CreateEventList: function() {
            var u;
            if (!(lt.get("sportId") >= 190 && lt.get("sportId") <= 197)) {
                this.componentWillUnmount();
                return
            }
            var i = {
                chunks: []
            }
              , r = this.props.LeagueCollection.length > 0 ? this.props.LeagueCollection.at(0).get("MatchList") : null
              , e = null
              , n = []
              , o = st.SysTime.get("Time").getTime()
              , t = 0;
            if (r) {
                for (r = _.sortBy(r.models, function(n) {
                    return Date.parse(n.get("Ktm"))
                }),
                u = 0; u < r.length; u++) {
                    var f = r[u]
                      , s = f.get("MatchCode")
                      , h = Date.parse(f.get("Ktm") + "-04:00");
                    if (!(o > h)) {
                        if (e != s && (e = s,
                        n.length > 0 && i.chunks.push({
                            event_ids: n
                        }),
                        n = [],
                        i.chunks.length == 2))
                            break;
                        n.push(f.get("MatchId"));
                        t == 0 && (t = h - o)
                    }
                }
                n.length > 0 && i.chunks.push({
                    event_ids: n
                });
                this.setEvents(i);
                t <= 0 && (t = 1e4);
                this.selftimer && clearTimeout(this.selftimer);
                this.selftimer = setTimeout(this.CreateEventList, t)
            } else if (this.props.IsSelfTrigger)
                this.setEvents(i),
                t = 1e4;
            else {
                this.props.LeagueCollection.once("update", this.CreateEventList);
                lt.SyncAll()
            }
        },
        setEvents: function(n, t) {
            var h = this, i, r, o, s, u, n;
            if (console.log("setEvents=" + JSON.stringify(n)),
            !this.props.IsSelfTrigger || !n.sport) {
                t || (t = 1);
                var c = this.props.LeagueCollection.length > 0 ? this.props.LeagueCollection.at(0).get("MatchList") : null
                  , f = [[], []]
                  , e = !1
                  , l = n.chunks.length > 2 ? 2 : n.chunks.length;
                for (i = 0; i < l; i++)
                    for (r = 0; r < n.chunks[i].event_ids.length; r++)
                        (o = n.chunks[i].event_ids[r],
                        o) && (c ? (s = c.findWhere({
                            MatchId: o
                        }),
                        s ? f[i].push(s) : e = !0) : e = !0);
                if (e && (u = function() {
                    var i = h;
                    return lt.SyncAll(function() {
                        t < 30 && (i.retrytimer && clearTimeout(i.retrytimer),
                        i.retrytimer = setTimeout(function() {
                            t++;
                            i.setEvents(n, t)
                        }, 3e3))
                    }),
                    h.setState({
                        first: [],
                        next: [],
                        currData: n
                    }),
                    {
                        v: void 0
                    }
                }(),
                (typeof u == "undefined" ? "undefined" : _typeof(u)) === "object"))
                    return u.v;
                n = {
                    first: f[0],
                    next: f[1],
                    currData: n
                };
                this.setState(n)
            }
        },
        componentDidUpdate: function() {},
        OpenDay: function(n) {
            var t = $("#vs" + n);
            t.attr("data-status") ? t.removeAttr("data-status") : t.attr("data-status", "is-open")
        },
        closeMatch: function(n) {
            n == "firstday" ? this.setState({
                first: []
            }) : this.setState({
                next: []
            })
        },
        componentWillUpdate: function() {},
        render: function() {
            var i = t.CultureToRef(st.get("Language"));
            switch (i) {
            case "ch":
            case "cs":
            case "zhcn":
                i = "zh";
                break;
            default:
                i = "en"
            }
            return (i == "ch" || i == "cs") && (i = "zh"),
            n.createElement("div", null, n.createElement("div", {
                id: "vstitle0",
                className: "league",
                "data-status": "is-open"
            }, n.createElement(wr, {
                name: "title0",
                OpenDay: this.OpenDay
            }), this.state.first.length > 0 ? n.createElement(br, {
                ref: "firstday",
                name: "firstday",
                matchList: this.state.first,
                closeMatch: this.closeMatch
            }) : null), n.createElement("div", {
                id: "vstitle1",
                className: "league",
                "data-status": "is-open"
            }, n.createElement(wr, {
                name: "title1",
                OpenDay: this.OpenDay
            }), this.state.next.length > 0 ? n.createElement(br, {
                ref: "nextday",
                name: "nextday",
                matchList: this.state.next,
                closeMatch: this.closeMatch
            }) : null))
        }
    })
      , wr = n.createBackboneClass({
        getInitialState: function() {
            return {
                title: "",
                time: ""
            }
        },
        componentDidMount: function() {
            window.addEventListener("message", this.UpdateData, !1)
        },
        componentWillUnmount: function() {
            window.removeEventListener("message", this.UpdateData)
        },
        UpdateData: function(n) {
            if (n.data[this.props.name] != null) {
                var t = n.data[this.props.name];
                (t.title != this.state.title || t.time != this.state.time) && this.setState({
                    title: t.title,
                    time: t.time
                })
            }
        },
        OpenDay: function() {
            this.props.OpenDay && this.props.OpenDay(this.props.name)
        },
        render: function() {
            return n.createElement("div", {
                className: "league_header",
                onClick: this.OpenDay
            }, n.createElement("div", {
                className: "league_name"
            }, n.createElement("span", {
                dangerouslySetInnerHTML: {
                    __html: this.state.title
                }
            }), n.createElement("span", {
                className: "league_countTime",
                dangerouslySetInnerHTML: {
                    __html: this.state.time
                }
            })), n.createElement(k.RefreshButton, null))
        }
    })
      , br = n.createBackboneClass({
        getInitialState: function() {
            return {
                matchList: this.props.matchList
            }
        },
        componentWillUnmount: function() {
            this.timer && (clearTimeout(this.timer),
            console.log("*** removetimeout *** :"))
        },
        CheckKtm: function(n) {
            if (n.length > 0) {
                var t = st.SysTime.get("Time").getTime()
                  , i = Date.parse(n[0].get("Ktm") + "-04:00");
                if (t >= i)
                    return !1
            }
            return !0
        },
        setCheckKtm: function() {
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(function() {
                this.CheckKtm(this.state.matchList) || this.setState({
                    matchList: []
                });
                this.setCheckKtm()
            }
            .bind(this), 3e3)
        },
        componentDidMount: function() {
            this.setCheckKtm();
            this.refs.match0 && this.refs.match0.Open()
        },
        componentWillReceiveProps: function(n) {
            this.CheckKtm(n.matchList) && this.setState({
                matchList: n.matchList
            })
        },
        render: function() {
            for (var i, r = [], t = 0; t < this.state.matchList.length; t++)
                i = this.state.matchList[t],
                r.push(n.createElement(gf, {
                    ref: "match" + t,
                    key: i.get("MatchId"),
                    model: i
                }));
            return n.createElement("div", {
                className: "match_list"
            }, r)
        }
    })
      , gf = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsOpen: !1
            }
        },
        Open: function() {
            this.getModel().get("BetTypes").length == 0 && this.getModel().GetBetyypes();
            this.setState({
                IsOpen: !this.state.IsOpen
            })
        },
        componentDidMount: function() {},
        render: function() {
            var i = [t.TeamNameRef.GetName(this.getModel().get("TeamId1")), t.TeamNameRef.GetName(this.getModel().get("TeamId2"))];
            return n.createElement("div", {
                className: "match",
                "data-status": this.state.IsOpen ? "is-open" : ""
            }, n.createElement("div", {
                className: "match_header",
                onClick: this.Open
            }, n.createElement("div", {
                className: "match_team"
            }, n.createElement("div", {
                className: "match_home"
            }, i[0]), n.createElement("div", {
                className: "match_versus"
            }, "vs"), n.createElement("div", {
                className: "match_away"
            }, i[1])), n.createElement("div", {
                className: "btn"
            }, n.createElement("i", {
                className: "icon icon-arrow-bottom"
            }))), n.createElement(ne, {
                collection: this.getModel().get("BetTypes"),
                Match: this.getModel()
            }))
        }
    })
      , ne = n.createBackboneClass({
        getInitialState: function() {
            var n = [2705, 2703, 2701]
              , t = [2706, 2704, 2702]
              , i = [2707];
            return lt.get("sportId") == 193 && (n = [2805, 2803, 2801, 2807, 2809, 2811, 2812],
            t = [2806, 2804, 2802, 2808],
            i = []),
            {
                Index: 0,
                full: n,
                half: t,
                cs: i
            }
        },
        SelectTab: function(n) {
            this.setState({
                Index: n
            })
        },
        render: function() {
            var o = [], s = this.props.Match, h = s.get("MatchId"), c = [], i, u, e, l;
            if (this.getCollection().length == 0)
                return n.createElement("div", {
                    className: "match_content"
                }, n.createElement(k.LoadingMin, null));
            var r = [this.state.full, this.state.half, this.state.cs]
              , f = [[], [], []]
              , a = [t.LanguageHelper.Get("lbl_fulltime"), t.LanguageHelper.Get("lbl_half"), t.BettypeName.Get("4")];
            for (i = 0; i < r.length; i++) {
                for (u = 0; u < r[i].length; u++)
                    e = r[i][u],
                    f[i][e] = this.getCollection().where({
                        BetTypeId: e
                    });
                f[i].length && (o.push(n.createElement("li", {
                    "data-status": this.state.Index == i ? "is-active" : ""
                }, n.createElement("div", {
                    className: "btn",
                    onClick: this.SelectTab.bind(this, i)
                }, a[i]))),
                this.state.Index == i && (l = i + "_" + h,
                c.push(n.createElement(wi, {
                    key: l,
                    MainMatch: s,
                    index: i,
                    activeCls: "is-active",
                    cData: f[i],
                    matchid: h,
                    number: i,
                    BetTypeSeq: r[i]
                }))))
            }
            return n.createElement("div", {
                className: "match_content"
            }, n.createElement("div", {
                className: "tab_block"
            }, n.createElement("ul", {
                className: "tab tab-single"
            }, o), c))
        }
    })
      , te = n.createBackboneClass({
        changeOptions: "change:sportId change:IsVSUM",
        render: function() {
            var t = this.getModel().get("sportId")
              , f = t >= 151 && t <= 153 ? !0 : !1
              , i = t >= 180 && t <= 186 ? !0 : !1
              , r = t >= 190 && t <= 197 ? !0 : !1
              , u = t + "_" + this.getModel().get("LMode") + "_" + this.getModel().get("type");
            return t == 160 ? n.createElement(gi, {
                model: p
            }, " ", n.createElement(d.NoLeague, {
                model: lt
            })) : (r || i) && this.getModel().get("IsVSUM") ? n.createElement(ie, {
                IsBVS: r,
                IsVirtual: i
            }) : n.createElement(dr, {
                key: u,
                IsBVS: r,
                IsVirtual: i,
                collection: t == 9999 ? this.getModel().get("LiveFilterCollection") : t == 99999 ? this.getModel().get("ParlayFilterCollection") : this.getModel().get("MatchCollection").LeagueCollection,
                model: this.getModel().filterLeague,
                ParlayLiveCollection: this.getModel().ParlayLiveMarket
            })
        }
    })
      , ie = n.createBackboneClass({
        render: function() {
            return n.createElement("div", {
                className: "content",
                style: {
                    paddingTop: "90px"
                }
            }, n.createElement("div", {
                className: "emptypage emptypage-um"
            }, n.createElement("div", {
                className: "emptypage_pic1"
            }, n.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "420",
                height: "720",
                viewBox: "0 0 420 720"
            }, n.createElement("path", {
                d: "M373.377 549.062c-7.872 0-14.277-6.405-14.277-14.277 0-7.873 6.405-14.278 14.277-14.278 7.873 0 14.278 6.405 14.278 14.278 0 7.871-6.405 14.277-14.278 14.277zm0-22.517c-4.543 0-8.238 3.696-8.238 8.239s3.695 8.238 8.238 8.238 8.239-3.695 8.239-8.238-3.696-8.239-8.239-8.239zM46.621 549.062c-7.872 0-14.276-6.405-14.276-14.277 0-7.873 6.404-14.278 14.276-14.278 7.873 0 14.278 6.405 14.278 14.278 0 7.871-6.405 14.277-14.278 14.277zm0-22.517c-4.543 0-8.238 3.696-8.238 8.239s3.695 8.238 8.238 8.238c4.544 0 8.24-3.695 8.24-8.238s-3.696-8.239-8.24-8.239zM309.024 416.04c-17.194 0-31.184-13.989-31.184-31.185s13.989-31.184 31.184-31.184 31.186 13.989 31.186 31.184-13.99 31.185-31.186 31.185zm0-56.331c-13.865 0-25.145 11.281-25.145 25.146s11.279 25.146 25.145 25.146 25.146-11.28 25.146-25.146-11.279-25.146-25.146-25.146zM110.975 416.04c-17.195 0-31.185-13.989-31.185-31.185s13.989-31.184 31.185-31.184c17.194 0 31.184 13.989 31.184 31.184s-13.99 31.185-31.184 31.185zm0-56.331c-13.866 0-25.146 11.281-25.146 25.146s11.28 25.146 25.146 25.146c13.865 0 25.146-11.28 25.146-25.146s-11.281-25.146-25.146-25.146z"
            }), n.createElement("path", {
                d: "M405.324 534.784c0-13.638-8.593-25.302-20.646-29.877l-26.529-105.885a50.951 50.951 0 0 0 2.012-14.167c0-28.196-22.94-51.134-51.137-51.134-10.803 0-20.826 3.376-29.091 9.116h-10.109c-.119-6.208-1.449-19.99-10.307-29.466-5.913-6.326-14.027-9.534-24.118-9.534h-22.381V0h-6.038v303.837h-22.581c-10.091 0-18.19 3.208-24.073 9.536-8.807 9.473-10.068 23.247-10.156 29.464h-10.104c-8.265-5.74-18.288-9.116-29.091-9.116-28.196 0-51.136 22.938-51.136 51.134 0 4.915.711 9.664 2.012 14.166L35.32 504.907c-12.053 4.575-20.645 16.239-20.645 29.877 0 16.161 12.064 29.549 27.659 31.651l97.996 99.538a3.024 3.024 0 0 0 2.14.901h.012c.801 0 1.568-.318 2.135-.885l13.587-13.586a3.015 3.015 0 0 0 .286-3.938L78.046 540.501c.337-1.856.522-3.765.522-5.717 0-8.207-3.113-15.7-8.217-21.364l57.832-80.417c12.322-4.418 22.462-13.441 28.354-24.983H263.46c5.893 11.542 16.032 20.565 28.355 24.983l57.832 80.417c-5.104 5.664-8.218 13.157-8.218 21.364 0 1.952.186 3.861.522 5.718l-80.444 107.964a3.019 3.019 0 0 0 .286 3.938l13.587 13.586a3.02 3.02 0 0 0 2.135.885h.012a3.026 3.026 0 0 0 2.14-.901l97.996-99.538c15.596-2.103 27.661-15.491 27.661-31.652zM164.769 317.462c4.692-5.034 11.298-7.587 19.631-7.587h51c8.339 0 14.963 2.556 19.687 7.598 7.369 7.864 8.55 19.932 8.687 25.364H156.221c.105-5.423 1.216-17.506 8.548-25.375zm-22.27 342.107L50.833 566.46c.138-.018.272-.048.411-.067.258-.037.514-.082.771-.125 10.622-1.785 19.558-8.753 23.851-18.587l76.224 102.3-9.591 9.588zM71.843 540.691a24.32 24.32 0 0 1-.228.903c-.038.141-.079.281-.12.421a24.288 24.288 0 0 1-.502 1.556c-.017.047-.032.094-.05.141-3.646 9.9-13.172 16.979-24.321 16.979a26.785 26.785 0 0 1-2.576-.129h-.004c-13.079-1.299-23.329-12.363-23.329-25.779 0-11.58 7.637-21.408 18.138-24.717.547-.172 1.1-.322 1.656-.457l.404-.094a25.88 25.88 0 0 1 1.7-.33l.042-.008a25.948 25.948 0 0 1 2.187-.235 25.78 25.78 0 0 1 1.781-.068c.431 0 .858.012 1.283.032.15.008.299.022.448.032.276.019.552.036.825.063.17.018.339.041.508.061.252.029.504.059.754.096.171.025.341.057.511.086.248.041.496.083.741.132.161.032.321.069.481.104.255.056.509.112.76.176.146.036.29.076.436.115.266.072.531.146.795.227.126.038.251.079.376.119.282.091.563.185.84.285l.309.113a24.506 24.506 0 0 1 1.129.454c.314.136.626.276.934.423l.175.084c.326.158.648.324.966.496l.123.065c.331.182.658.37.98.564l.087.053c.328.2.652.408.972.623.023.017.048.032.072.049.318.216.633.44.941.67l.073.055c.305.229.604.464.897.705l.085.069c.288.239.571.484.85.736l.093.083c5.197 4.742 8.465 11.566 8.465 19.14 0 2.032-.243 4.009-.687 5.907zm47.217-105.343l-53.181 73.949c-.09-.068-.187-.125-.276-.192a33.061 33.061 0 0 0-1.467-1.02 31.32 31.32 0 0 0-2.385-1.432c-.223-.12-.449-.231-.675-.346a31.684 31.684 0 0 0-1.475-.705c-.18-.08-.356-.167-.537-.243a31.038 31.038 0 0 0-1.941-.741 31.526 31.526 0 0 0-2.667-.808c-.131-.033-.264-.06-.396-.091a31.776 31.776 0 0 0-1.987-.409c-.129-.022-.257-.048-.386-.068a31.65 31.65 0 0 0-2.238-.274c-.163-.014-.326-.025-.489-.037a31.74 31.74 0 0 0-2.338-.095 32.261 32.261 0 0 0-2.617.116 32.88 32.88 0 0 0-1.841.201c-.062.009-.123.012-.184.021l23.688-94.546c8.252 15.842 24.203 26.27 42.409 27.275a51.946 51.946 0 0 0 2.897.087c.789 0 1.575-.023 2.361-.06.272-.013.543-.032.814-.049a48.036 48.036 0 0 0 1.519-.116c.323-.029.645-.061.966-.096.455-.051.909-.111 1.363-.174.33-.046.662-.087.99-.139a.905.905 0 0 0 .073-.008zm5.898-7.627c-.369.121-.739.237-1.111.349-.259.077-.52.149-.78.222-.388.108-.775.217-1.165.314-.258.064-.52.12-.779.18-.637.147-1.276.28-1.918.4-.366.067-.73.138-1.1.196-.306.049-.612.089-.92.132a45.398 45.398 0 0 1-2.043.237c-.448.042-.897.075-1.35.104-.239.015-.479.032-.72.044-.695.031-1.395.053-2.098.053-.72 0-1.435-.021-2.146-.055-.181-.008-.359-.021-.54-.032a43.167 43.167 0 0 1-2.119-.172c-22.615-2.407-40.292-21.595-40.292-44.837 0-24.866 20.23-45.096 45.098-45.096a44.85 44.85 0 0 1 26.779 8.839c.292.217.576.442.863.665.606.473 1.201.96 1.782 1.462.309.267.622.528.923.803.292.267.573.545.859.819.314.303.629.605.934.917.247.251.488.508.729.765.355.38.706.765 1.047 1.156.178.202.354.404.528.609.492.585.975 1.179 1.437 1.787l.047.061a45.346 45.346 0 0 1 8.427 19.129c.011.061.021.123.033.184.134.749.245 1.504.342 2.261.019.152.04.304.058.456.08.686.139 1.374.188 2.064.013.187.032.371.043.559.049.851.077 1.704.077 2.561 0 .795-.022 1.586-.063 2.374-.019.355-.054.706-.081 1.06-.031.425-.059.851-.102 1.272-.045.428-.106.851-.163 1.274-.046.345-.086.69-.14 1.033-.068.438-.152.871-.233 1.305-.062.328-.119.657-.188.983-.089.422-.19.839-.291 1.256-.082.342-.163.684-.254 1.023-.104.39-.217.776-.331 1.162-.109.369-.22.738-.339 1.105-.114.354-.234.703-.357 1.053-.14.398-.285.796-.438 1.191a41.747 41.747 0 0 1-.9 2.171c-5.157 11.594-15.06 20.621-27.233 24.602zm135.881-25.741H159.16a50.19 50.19 0 0 0 .621-1.863c.008-.027.019-.055.026-.082a49.72 49.72 0 0 0 .685-2.404l.017-.07c.194-.753.367-1.511.526-2.271.032-.159.062-.319.093-.479.125-.63.238-1.262.34-1.896.033-.214.064-.428.096-.643.086-.588.161-1.178.226-1.77.027-.24.054-.48.077-.722.057-.594.101-1.189.137-1.787.014-.228.032-.454.043-.682.038-.815.063-1.634.063-2.456 0-.852-.022-1.701-.064-2.548-.51-10.318-4.096-19.837-9.852-27.667l-.064-.091a53.196 53.196 0 0 0-1.146-1.483c-.149-.188-.293-.38-.444-.566-.259-.315-.528-.621-.795-.931-.294-.343-.584-.689-.888-1.025-.116-.128-.238-.25-.355-.378-.401-.434-.8-.87-1.216-1.291H272.719c-.421.425-.823.865-1.228 1.304-.113.122-.23.24-.342.363-.307.338-.6.687-.896 1.034-.264.307-.531.61-.788.923-.153.188-.298.381-.448.57a54.92 54.92 0 0 0-1.144 1.479l-.064.091c-5.756 7.831-9.343 17.349-9.852 27.667a50.237 50.237 0 0 0-.001 5.002c.011.23.029.46.044.689.035.595.079 1.188.135 1.777.023.245.052.488.078.731a48.506 48.506 0 0 0 .324 2.416c.099.623.211 1.243.333 1.862.034.171.064.343.101.514.153.739.323 1.475.51 2.206l.033.135c.206.8.432 1.596.679 2.386.017.055.037.108.054.163.185.602.38 1.2.592 1.793zm6.962 1.124a47.514 47.514 0 0 1-.509-1.186 44.252 44.252 0 0 1-.82-2.157 44.993 44.993 0 0 1-.697-2.16c-.114-.389-.228-.776-.332-1.169-.09-.338-.171-.677-.252-1.017a40.492 40.492 0 0 1-.292-1.261c-.068-.325-.126-.652-.188-.979-.081-.437-.165-.871-.234-1.311-.053-.341-.093-.685-.139-1.026-.057-.426-.118-.85-.163-1.279-.044-.423-.07-.85-.103-1.274-.026-.353-.062-.703-.08-1.058a45.67 45.67 0 0 1-.063-2.374c0-.856.028-1.71.077-2.561.011-.188.03-.373.043-.56.048-.689.106-1.378.187-2.062.018-.154.04-.307.059-.461a44.6 44.6 0 0 1 .342-2.256c.011-.063.021-.125.033-.187a45.327 45.327 0 0 1 8.422-19.123c.022-.03.047-.06.07-.09a44.82 44.82 0 0 1 1.412-1.757c.178-.21.36-.417.541-.625a48.17 48.17 0 0 1 1.774-1.917c.299-.306.607-.602.916-.899.291-.279.577-.563.875-.834.277-.253.567-.495.853-.742a45.53 45.53 0 0 1 1.861-1.53c.281-.219.561-.441.849-.654 7.495-5.551 16.76-8.841 26.781-8.841 24.867 0 45.098 20.23 45.098 45.096 0 23.242-17.677 42.43-40.292 44.837a43.167 43.167 0 0 1-2.119.172c-.18.011-.359.024-.54.032-.712.034-1.427.055-2.146.055-.703 0-1.401-.021-2.097-.053-.241-.012-.481-.029-.722-.044a42.944 42.944 0 0 1-3.39-.341c-.308-.043-.616-.083-.923-.132-.366-.059-.729-.128-1.093-.195a47.046 47.046 0 0 1-1.927-.401c-.259-.06-.52-.115-.776-.18-.39-.098-.776-.206-1.164-.313-.261-.073-.522-.146-.782-.223-.371-.111-.74-.228-1.109-.348-12.179-3.978-22.085-13.011-27.241-24.612zm33.209 32.253c.33.052.663.094.995.139.452.063.905.123 1.359.174.321.035.643.066.966.096.505.047 1.012.085 1.52.116.271.017.541.036.813.049.786.036 1.572.06 2.361.06.796 0 1.587-.024 2.375-.061l.522-.026c18.206-1.006 34.158-11.434 42.409-27.275l23.688 94.546c-.063-.009-.125-.012-.188-.021a31.67 31.67 0 0 0-2.362-.241 32.21 32.21 0 0 0-2.093-.076c-.787 0-1.564.038-2.337.095-.164.012-.327.023-.49.037-.754.066-1.5.156-2.238.274-.129.021-.257.046-.386.068-.67.116-1.332.252-1.987.409-.132.031-.264.058-.395.091-.698.177-1.385.381-2.063.603-.202.065-.402.135-.604.204-.656.229-1.307.473-1.942.742-.18.076-.355.162-.534.242-.5.223-.994.459-1.481.708-.224.113-.448.224-.669.343a31.951 31.951 0 0 0-2.381 1.429c-.51.335-1.012.681-1.5 1.044-.081.06-.168.111-.248.172l-53.181-73.949.071.008zM277.5 659.569l-9.59-9.589 76.224-102.3c4.294 9.835 13.231 16.804 23.854 18.587.255.044.509.088.765.125.139.02.274.049.413.067l-91.666 93.11zm98.456-99.006h-.004a26.656 26.656 0 0 1-2.575.129c-.674 0-1.34-.035-2.002-.085-.143-.011-.285-.02-.427-.032a26.436 26.436 0 0 1-2.448-.35 26.422 26.422 0 0 1-2.959-.747c-6.78-2.156-12.357-7.032-15.445-13.342a26.98 26.98 0 0 1-.267-.57 25.467 25.467 0 0 1-1.035-2.623c-.032-.098-.067-.194-.099-.292-.21-.664-.395-1.34-.553-2.028a25.833 25.833 0 0 1-.672-5.838c0-7.573 3.267-14.396 8.464-19.139a25.705 25.705 0 0 1 .943-.819l.087-.071c.293-.241.592-.476.895-.703.025-.02.051-.038.076-.057.309-.229.622-.453.94-.669l.072-.049c.318-.215.643-.422.972-.623l.086-.053a24.445 24.445 0 0 1 1.101-.628c.319-.173.644-.339.971-.498l.17-.082a28.291 28.291 0 0 1 1.172-.525 30.25 30.25 0 0 1 1.199-.466c.279-.101.562-.195.845-.286.124-.04.247-.08.371-.118.266-.08.533-.155.802-.228.143-.038.285-.078.428-.114.254-.063.511-.121.768-.177.158-.035.316-.071.476-.103.247-.05.496-.092.746-.134.169-.028.337-.06.507-.085.25-.037.504-.066.757-.096.168-.021.335-.044.504-.061.274-.026.551-.044.827-.063.149-.01.298-.024.447-.032.425-.021.853-.032 1.283-.032.596 0 1.189.027 1.782.068l.423.032a25.904 25.904 0 0 1 1.803.211c.571.089 1.138.203 1.701.33.136.03.271.062.407.094a25.91 25.91 0 0 1 1.652.456c10.502 3.308 18.14 13.137 18.14 24.718-.002 13.417-10.252 24.482-23.331 25.78z"
            }), n.createElement("path", {
                d: "M261.096 645.47c-.194-1.991-.44-3.729-.756-5.29a50.874 50.874 0 0 0-9.896-21.897 50.978 50.978 0 0 0-22.986-16.719c-8.387-3.015-17.518-3.826-26.313-2.289a50.492 50.492 0 0 0-8.594 2.295c-20.21 7.327-33.795 26.695-33.812 48.195 0 .591.025 1.172.05 1.757.306 9.677 3.33 19.014 8.752 26.986 6.712 9.897 16.739 17.188 28.344 20.561a51.525 51.525 0 0 0 28.152.016l.19-.055a50.26 50.26 0 0 0 8.301-3.201 51.643 51.643 0 0 0 19.928-17.32c5.427-7.973 8.449-17.304 8.756-27.021.025-.58.05-1.146.05-1.722a54.238 54.238 0 0 0-.166-4.296zm-4.87 1.046l-11.158-8.134 4.249-13.146c.005.005.005.01.012.015.419.655.811 1.312 1.189 1.986l.852 1.612c.264.536.536 1.078.781 1.599l.149.33c.141.31.275.609.41.92.307.717.57 1.428.836 2.163l.09.23c.116.305.231.61.336.921.311.925.576 1.842.852 2.874.05.169.104.346.15.521.255 1.016.485 2.146.716 3.47.034.185.06.37.081.55.02.166.039.324.063.479.12.822.227 1.678.311 2.503l.081 1.107zm-26.678-.537l12.215-3.975 14.482 10.554a45.943 45.943 0 0 1-7.153 22.146h-17.956l-7.545-10.394 5.957-18.331zm-29.185 21.211h19.272l7.529 10.383-5.521 17.08a47.276 47.276 0 0 1-23.292-.005l-5.518-17.075 7.53-10.383zm-22.127-25.174l12.215 3.964 5.957 18.349-7.543 10.377h-17.957a46.016 46.016 0 0 1-7.152-22.141l14.48-10.549zm29.316-12.014l-15.589 11.333-12.21-3.965-5.535-17.07a46.296 46.296 0 0 1 18.816-13.681l14.518 10.543v12.84zm9.907-25.995l1.07.199c.897.16 1.768.361 2.659.566L210 612.911l-11.198-8.139a68.698 68.698 0 0 1 2.633-.566l1.066-.196a57.277 57.277 0 0 1 2.832-.364l.897-.091a47 47 0 0 1 7.504 0l.881.091c.966.094 1.917.215 2.844.361zm10.578 37.333l-15.59-11.338v-12.84l14.519-10.549a46.424 46.424 0 0 1 18.816 13.683l-5.536 17.074-12.209 3.97zm-27.149 20.961l-5.63-17.321L210 634.267l14.743 10.713-5.633 17.321h-18.222zm-25.955-23.919l-11.168 8.125c.011-.356.04-.716.08-1.078.075-.855.19-1.7.3-2.501l.146-1.057c.216-1.258.451-2.389.727-3.475.034-.125.075-.262.115-.39l.06-.201c.235-.936.507-1.868.806-2.784.136-.379.276-.755.437-1.16.261-.741.525-1.446.841-2.177.154-.371.33-.747.56-1.228.306-.681.642-1.352 1.031-2.117.191-.36.381-.727.602-1.097.315-.566.65-1.117.986-1.667l.21-.351 4.267 13.158zm13.416 41.209l4.271 13.165-.131-.055a40.859 40.859 0 0 1-2.322-1.027 27.96 27.96 0 0 1-1.157-.564c-.766-.392-1.506-.81-2.253-1.228l-.324-.186c-.216-.119-.432-.237-.642-.384a45.515 45.515 0 0 1-3.204-2.128 50.549 50.549 0 0 1-2.714-2.177l-.881-.781a50.71 50.71 0 0 1-1.837-1.748l-.911-.937a49.869 49.869 0 0 1-1.691-1.912l-.041-.039h13.837zm48.927 7.698a52.083 52.083 0 0 1-3.063 2.023 8.094 8.094 0 0 1-.551.324l-.411.245c-.749.418-1.481.825-2.242 1.223a33.1 33.1 0 0 1-1.182.575c-.76.365-1.521.691-2.287 1.002l-.146.064 4.267-13.155h13.836l-.029.03a53.688 53.688 0 0 1-1.708 1.921c-.3.311-.601.615-.915.932a39.37 39.37 0 0 1-1.828 1.742l-.88.785a45.098 45.098 0 0 1-2.699 2.154l.44.61-.602-.475z"
            }))), n.createElement("div", {
                className: "emptypage_pic2"
            }, n.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "900",
                height: "900",
                viewBox: "0 0 900 900"
            }, n.createElement("path", {
                d: "M159.79 756.298c-10.583 10.584-16.411 24.652-16.414 39.623.004 14.971 5.832 29.041 16.414 39.623 10.583 10.583 24.653 16.411 39.625 16.415 14.97-.003 29.039-5.831 39.623-16.414 10.583-10.583 16.411-24.652 16.415-39.623-.004-14.972-5.833-29.042-16.416-39.624-10.582-10.582-24.651-16.411-39.623-16.415-14.972.004-29.04 5.832-39.624 16.415zm4.098 74.754c-9.336-9.421-14.476-21.897-14.476-35.13.001-13.234 5.139-25.709 14.476-35.131l.197-.206.197.205c9.182 9.274 14.445 22.083 14.444 35.131.001 13.049-5.263 25.855-14.445 35.131l-.197.205-.196-.205zm71.051-70.262c9.338 9.423 14.477 21.897 14.476 35.132 0 13.232-5.139 25.708-14.476 35.13l-.197.205-.198-.205c-9.182-9.273-14.444-22.082-14.444-35.13 0-13.05 5.263-25.855 14.444-35.132l.199-.205.196.205zm-4.965-4.416l.255.193-.22.229c-10.134 10.382-15.953 24.646-15.954 39.124 0 14.48 5.82 28.744 15.954 39.125l.217.224-.251.198c-8.85 6.837-19.421 10.451-30.562 10.455-11.14-.005-21.711-3.618-30.56-10.455l-.252-.197.216-.225c10.134-10.383 15.954-24.646 15.954-39.124 0-14.48-5.82-28.744-15.954-39.125l-.221-.228.255-.195c8.849-6.836 19.418-10.455 30.562-10.454 11.145.002 21.713 3.619 30.561 10.455zM363.813 691.383l-6.633-6.632 18.171-18.171-7.356-7.356c-10.238-10.238-26.907-10.225-37.162.029l-25.147 25.148-.176-.065-53.664-20.094-18.663 18.663 77.811 28.985-.039.224c-.569 3.572.109 6.525 1.969 8.557l.168.183 10.625 10.626c2.922 2.921 7.848 3.195 13.857.768 5.174-2.107 10.815-6.055 15.872-11.112 5.065-5.065 9.013-10.706 11.121-15.882 2.442-6.017 2.17-10.946-.754-13.871zm-81.701 3.296l-38.017-14.149 9.256-9.256.173.063 37.964 14.199-9.206 9.205-.17-.062zm77.418.988c1.892 1.892.007 10.842-10.352 21.199-10.348 10.348-19.288 12.225-21.181 10.332l-4.396-4.396.479-.124c1.037-.264 2.115-.67 2.943-.994 5.17-2.098 10.807-6.041 15.868-11.103 5.073-5.072 9.017-10.71 11.119-15.884.444-1.117.765-2.051 1.002-2.951l.122-.474 4.396 4.395zm-20.904 10.646c-10.347 10.348-19.288 12.225-21.181 10.332s-.016-10.834 10.331-21.181c10.358-10.358 19.309-12.243 21.2-10.352 1.893 1.894.008 10.844-10.35 21.201zm.764-26.238c-5.171 2.104-10.817 6.048-15.886 11.117-4.616 4.615-8.38 9.845-10.59 14.701l-.109.239-24.292-9.079 9.186-9.186.169.063 9.339 3.486 27.895-27.896c7.897-7.897 20.729-7.904 28.614-.019l3.084 3.084-13.903 13.902-.197-.158c-2.972-2.443-7.705-2.532-13.31-.254zM470.04 518.64c-1.69-1.39-3.223-2.542-4.674-3.506a55.623 55.623 0 0 0-24.576-9.274 55.72 55.72 0 0 0-30.692 4.844c-8.812 4.152-16.496 10.584-22.107 18.57a55.484 55.484 0 0 0-4.87 8.415c-9.957 21.287-5.486 46.76 11.12 63.392.456.456.925.886 1.397 1.319 7.716 7.244 17.27 12.123 27.624 14.096 12.839 2.461 26.224.345 37.802-6.018a56.52 56.52 0 0 0 12.424-9.383 56.301 56.301 0 0 0 9.35-12.366l.104-.19a55 55 0 0 0 3.943-8.889 56.466 56.466 0 0 0 2.016-28.793c-1.969-10.357-6.846-19.907-14.12-27.654a42.086 42.086 0 0 0-1.292-1.369 58.822 58.822 0 0 0-3.449-3.194zm-2.956 4.573l-14.913 2.338-6.876-13.445c.007-.002.012.004.02.002.831.183 1.64.387 2.456.616l1.904.587c.618.211 1.246.419 1.838.633l.371.139c.349.131.685.259 1.029.395.79.316 1.544.662 2.318 1.025l.247.108c.325.147.65.294.972.453.955.476 1.869.979 2.879 1.563.171.093.349.186.52.285a53.472 53.472 0 0 1 3.234 2.129c.169.117.333.24.487.363.144.113.282.221.421.321a63.66 63.66 0 0 1 2.175 1.695l.918.793zm-21.035 20.206l6.369-12.513 19.352-3.038a50.23 50.23 0 0 1 11.589 22.648l-13.879 13.881-13.865-2.203-9.566-18.775zm-6.164 38.955l14.897-14.896 13.846 2.205 8.935 17.471a51.674 51.674 0 0 1-18.009 18l-17.463-8.934-2.206-13.846zm-36.563-2.355l12.506-6.378 18.787 9.577 2.19 13.853-13.881 13.881a50.314 50.314 0 0 1-22.644-11.587l3.042-19.346zm13.373-31.948l-3.29 20.811-12.502 6.373-17.475-8.916a50.622 50.622 0 0 1 3.97-25.12l19.372-3.072 9.925 9.924zm-12.436-27.752l.982-.673a58.035 58.035 0 0 1 2.493-1.617l-2.357 14.938-14.947 2.365a75.713 75.713 0 0 1 1.598-2.473l.674-.976a60.797 60.797 0 0 1 1.906-2.472l.624-.763a51.237 51.237 0 0 1 5.8-5.8l.751-.612c.82-.67 1.648-1.312 2.476-1.917zm37.035 20.682l-20.814 3.286-9.925-9.925 3.068-19.375a50.736 50.736 0 0 1 25.12-3.97l8.919 17.478-6.368 12.506zm-4.783 37.187l-17.741-9.037 3.115-19.676 19.676-3.115 9.036 17.742-14.086 14.086zm-38.552 1.575l-2.353 14.914a15.225 15.225 0 0 1-.771-.896 56.013 56.013 0 0 1-1.702-2.166l-.704-.929a48.571 48.571 0 0 1-2.124-3.248 13.96 13.96 0 0 1-.214-.39l-.107-.202a44.23 44.23 0 0 1-1.528-2.773 39.181 39.181 0 0 1-.562-1.235 35.455 35.455 0 0 1-1.032-2.333 27.671 27.671 0 0 1-.516-1.381 52.82 52.82 0 0 1-.84-2.434c-.131-.427-.267-.855-.383-1.313a55.562 55.562 0 0 1-.526-2.051l-.108-.434 13.47 6.871zm42.225 21.483l13.477 6.876-.143.059c-.852.355-1.711.695-2.589 1.002-.438.158-.879.314-1.331.456-.894.29-1.791.538-2.689.794l-.395.107a8.586 8.586 0 0 1-.793.198 49.205 49.205 0 0 1-4.121.831 54.927 54.927 0 0 1-3.781.416l-1.284.076c-.926.042-1.854.073-2.771.069l-1.429-.02a56.423 56.423 0 0 1-2.785-.17h-.063l10.697-10.694zm43.77-31.869a59.016 59.016 0 0 1-.804 3.932c-.05.228-.108.456-.175.677l-.128.508c-.259.9-.507 1.783-.789 2.677-.147.456-.302.905-.469 1.358-.305.87-.642 1.71-.994 2.542l-.062.163-6.872-13.466 10.695-10.696v.047c.081.947.131 1.881.165 2.805.009.473.013.941.013 1.429.016.921-.023 1.849-.066 2.759l-.072 1.288a49.074 49.074 0 0 1-.423 3.751l.813.131-.832.095zM585.881 409.459c-10.583-10.584-24.66-16.41-39.624-16.415-14.971.003-29.048 5.831-39.627 16.411-10.579 10.578-16.407 24.655-16.41 39.626.004 14.964 5.831 29.041 16.415 39.624 10.583 10.583 24.659 16.41 39.623 16.414 14.967-.008 29.044-5.835 39.623-16.414 10.578-10.578 16.407-24.656 16.414-39.623-.003-7.464-1.431-14.682-4.241-21.453-2.805-6.783-6.899-12.897-12.173-18.17zm-77.653 72.901c-7.464-8.519-11.875-19.462-12.421-30.825l-.026-.623.618.031c11.508.541 22.157 4.846 30.806 12.44l.453.398-19.03 19.03-.4-.451zm36.199 17.199l-.623-.026c-11.363-.546-22.308-4.957-30.828-12.425l-.451-.398 19.029-19.029.398.451c7.591 8.646 11.898 19.297 12.443 30.81l.032.617zm35.564-12.85l-.451.398c-8.143 7.135-18.18 11.393-29.026 12.301l-.585.051-.026-.585a56.13 56.13 0 0 0-3.865-18.097 55.6 55.6 0 0 0-10.235-16.597l-.354-.396 10.811-10.811 33.731 33.736zm-37.63-37.631l-10.812 10.811-.396-.355a55.668 55.668 0 0 0-16.596-10.234 55.907 55.907 0 0 0-18.097-3.857l-.534-.024-.005-.538c.914-10.903 5.17-20.941 12.306-29.082l.398-.453 33.736 33.732zM512.52 411.45l.453-.397c8.152-7.139 18.186-11.392 29.025-12.303l.587-.053.028.592a55.769 55.769 0 0 0 3.865 18.09 55.673 55.673 0 0 0 10.23 16.6l.356.396-10.808 10.814-33.736-33.739zm84.048 42.098c-.947 10.768-5.188 20.728-12.285 28.815l-.398.452-33.738-33.738 10.815-10.807.395.355a55.86 55.86 0 0 0 34.698 14.096l1.285.055-.772.772zm-12.281-37.751c7.464 8.523 11.871 19.471 12.421 30.83l.027.624-.619-.031c-11.509-.541-22.157-4.844-30.81-12.443l-.451-.399 19.034-19.033.398.452zm-23.328 14.683l-.399-.451c-7.604-8.656-11.906-19.305-12.441-30.807l-.03-.619.623.026c11.36.551 22.304 4.954 30.828 12.419l.453.398-19.034 19.034zM672.14 269.999c-3.34-2.79-8.274-6.083-12.871-6.098-4.573.016-10.424 3.343-16.499 9.417-3.188 3.188-6.508 7.244-9.665 12.034-.125.163-.252.321-.337.515-8.277 12.712-15.284 30.36-15.289 50.199.003 23.539 9.725 41.801 15.524 50.598 4.121 6.265 8.744 11.609 13.396 15.471 3.341 2.789 8.273 6.083 12.871 6.098 4.574-.016 10.424-3.343 16.5-9.418l.003-.004c3.185-3.186 6.509-7.244 9.674-12.043.114-.153.236-.305.317-.486 8.284-12.712 15.297-30.372 15.293-50.211-.004-23.539-9.721-41.806-15.522-50.601-4.12-6.266-8.746-11.609-13.395-15.471zm-.194 124.992c-5.777 5.777-10.336 7.835-12.678 7.841-3.924-.016-11.534-5.268-18.905-15.076h37.813c-2.086 2.76-4.191 5.197-6.23 7.235zm23.712-58.925c-.012 18.199-6.255 34.432-13.761 46.288l-45.258-.001c-5.506-8.726-13.756-25.295-13.759-46.287.012-18.199 6.256-34.426 13.763-46.291l45.254.004c5.508 8.726 13.757 25.297 13.761 46.287zm-17.483-51.688l-37.813.001c2.087-2.761 4.19-5.198 6.23-7.237 5.776-5.776 10.336-7.836 12.676-7.839 3.924.015 11.536 5.266 18.907 15.075z"
            }), n.createElement("path", {
                d: "M648.703 315.608c.002 1.474 1.202 2.674 2.696 2.696l5.168-.015.005 14.546-5.171.016a2.66 2.66 0 0 0-2.695 2.695c-.005 1.475 1.203 2.682 2.697 2.697l5.161-.006.003 15.604-5.168-.016c-1.495.023-2.695 1.224-2.697 2.697a2.666 2.666 0 0 0 2.7 2.7l7.859.004c.003-.002.007.001.007.001l.005-.005 7.861.001a2.61 2.61 0 0 0 1.909-.778c.49-.49.808-1.164.788-1.918.001-1.479-1.198-2.679-2.696-2.697l-5.169.016.007-15.61 5.162.008a2.705 2.705 0 0 0 1.922-.793 2.687 2.687 0 0 0 .774-1.903 2.66 2.66 0 0 0-2.697-2.697l-5.168-.016-.001-14.551 5.17.017a2.715 2.715 0 0 0 1.915-.792 2.66 2.66 0 0 0 .782-1.905 2.672 2.672 0 0 0-2.697-2.697l-15.733.001a2.666 2.666 0 0 0-2.699 2.7zM565.106 627.509c-14.729-2.705-29.617.511-41.921 9.008a55.674 55.674 0 0 0-7.828 6.514c-19.115 19.115-21.828 49.145-6.438 71.414 17.542 25.438 52.509 31.824 77.924 14.279a55.969 55.969 0 0 0 7.839-6.525c19.115-19.114 21.819-49.139 6.438-71.414-8.513-12.321-21.301-20.584-36.014-23.276zm-51.494 83.704a50.287 50.287 0 0 1-8.896-26.82c1.924.083 3.813.253 5.672.536l-.034 3.246a2.863 2.863 0 0 0 2.813 2.891 2.82 2.82 0 0 0 2.055-.832 2.848 2.848 0 0 0 .833-1.984l.034-2.131a47.13 47.13 0 0 1 5.73 1.913l-1.316 3.328a2.855 2.855 0 0 0 1.592 3.688 2.87 2.87 0 0 0 3.084-.623c.274-.275.476-.601.642-.967l1.169-2.981a49.165 49.165 0 0 1 5.124 3.204l-1.734 2.137c-.991 1.207-.819 3.017.396 4a2.842 2.842 0 0 0 3.83-.176 1.59 1.59 0 0 0 .183-.206l1.8-2.179a51.518 51.518 0 0 1 4.017 4.062l-2.152 1.781c-1.207.981-1.394 2.802-.395 4a2.858 2.858 0 0 0 4.016.411l2.063-1.707c.062.101.139.194.217.287a54.357 54.357 0 0 1 2.952 4.84l-2.873 1.139c-1.462.596-2.182 2.26-1.605 3.71.59 1.464 2.254 2.183 3.704 1.606l3.193-1.273a49.69 49.69 0 0 1 1.868 5.684l-1.963.027a2.848 2.848 0 0 0-2.805 2.898 2.857 2.857 0 0 0 2.891 2.813l3.045-.051c.249 1.796.4 3.587.458 5.409-15.327-.57-30.24-8.101-39.608-21.68zm77.031 6.946a51.211 51.211 0 0 1-7.027 5.866 50.112 50.112 0 0 1-24.673 8.745 59.644 59.644 0 0 0-.44-5.377l2.802-.033a2.866 2.866 0 0 0 1.978-.832 2.852 2.852 0 0 0 .847-2.068 2.847 2.847 0 0 0-2.901-2.803l-3.761.055a55.786 55.786 0 0 0-2.442-7.713l2.283-.904a2.858 2.858 0 0 0 1.603-3.707 2.867 2.867 0 0 0-3.713-1.599l-2.561 1.015a58.881 58.881 0 0 0-3.59-5.945 24.253 24.253 0 0 0-.488-.687l2.477-2.028c.065-.06.14-.125.201-.186 1.028-1.029 1.13-2.694.196-3.828a2.86 2.86 0 0 0-4.023-.4l-2.395 1.969a53.473 53.473 0 0 0-4.807-4.854l1.938-2.379a2.834 2.834 0 0 0-.391-4.013 2.85 2.85 0 0 0-4.02.392l-1.986 2.426a54.259 54.259 0 0 0-6.628-4.138l.979-2.44a2.877 2.877 0 0 0-1.601-3.715 2.857 2.857 0 0 0-3.715 1.601l-.845 2.144a58.702 58.702 0 0 0-7.763-2.484l.052-3.578a2.838 2.838 0 0 0-2.799-2.896c-1.578-.032-2.879 1.237-2.908 2.815l-.036 2.595a58.491 58.491 0 0 0-5.646-.475 50.115 50.115 0 0 1 14.558-31.629 51.038 51.038 0 0 1 7.021-5.859c7.365-5.075 15.748-8.041 24.403-8.756.063 1.987.213 3.951.48 5.904l-2.596.035a2.85 2.85 0 0 0-2.807 2.899 2.856 2.856 0 0 0 2.884 2.813l3.59-.063a56.621 56.621 0 0 0 2.491 7.756l-2.165.865c-1.456.566-2.17 2.234-1.582 3.697.575 1.473 2.228 2.181 3.71 1.605l2.448-.986a55.631 55.631 0 0 0 4.117 6.648l-2.413 1.973a2.863 2.863 0 0 0-.391 4.02 2.83 2.83 0 0 0 4.016.388l2.379-1.938a56.592 56.592 0 0 0 4.841 4.818l-1.957 2.383c-.998 1.23-.832 3.03.398 4.026a2.851 2.851 0 0 0 3.818-.188c.063-.063.121-.13.194-.21l2.021-2.468c.239.162.459.313.688.487a54.96 54.96 0 0 0 5.958 3.582l-1.021 2.562a2.842 2.842 0 0 0 1.604 3.708c1.083.449 2.29.146 3.076-.639.255-.255.484-.585.615-.948l.92-2.298a55.424 55.424 0 0 0 7.717 2.438l-.074 3.781a2.863 2.863 0 0 0 2.816 2.887 2.833 2.833 0 0 0 2.055-.833c.52-.519.819-1.207.836-1.981l.047-2.816c1.865.255 3.746.387 5.646.453a50.093 50.093 0 0 1-14.538 31.343zm5.776-64.137a50.329 50.329 0 0 1 8.908 27.087 52.452 52.452 0 0 1-5.706-.487l.042-3.035a2.852 2.852 0 0 0-2.807-2.898 2.867 2.867 0 0 0-2.909 2.816l-.024 1.959a49.903 49.903 0 0 1-5.673-1.879l1.257-3.177a2.848 2.848 0 0 0-1.598-3.712 2.868 2.868 0 0 0-3.699 1.594l-1.141 2.875a51.164 51.164 0 0 1-4.84-2.953c-.105-.064-.201-.131-.303-.2l1.706-2.062a2.874 2.874 0 0 0-.398-4.029 2.858 2.858 0 0 0-4.016.41l-1.766 2.137a51.49 51.49 0 0 1-4.055-4.023l2.159-1.773c.077-.061.146-.13.219-.202a2.865 2.865 0 0 0 .176-3.83 2.86 2.86 0 0 0-4.014-.382l-2.131 1.729a52.959 52.959 0 0 1-3.196-5.131l2.987-1.176c.348-.148.688-.363.951-.627a2.86 2.86 0 0 0 .627-3.088c-.568-1.459-2.232-2.172-3.696-1.582l-3.315 1.303a53.801 53.801 0 0 1-1.924-5.715l2.131-.039a2.896 2.896 0 0 0 1.984-.833 2.855 2.855 0 0 0 .844-2.065 2.852 2.852 0 0 0-2.897-2.807l-3.251.039a58.015 58.015 0 0 1-.527-5.949 50.23 50.23 0 0 1 7.551.8c13.221 2.425 24.713 9.846 32.344 20.905zM744.893 447.561c1.795-1.795 1.846-4.678.05-6.473-1.783-1.783-4.721-1.787-6.516.008-1.742 1.742-1.733 4.674.051 6.458a4.541 4.541 0 0 0 6.415.007zM757.824 434.629c1.732-1.732 1.787-4.619-.008-6.414-1.783-1.783-4.726-1.783-6.458-.051-1.793 1.792-1.791 4.732-.008 6.516 1.796 1.795 4.681 1.742 6.474-.051zM770.692 421.76c1.805-1.804 1.836-4.667.041-6.463a4.605 4.605 0 0 0-6.506-.002c-1.744 1.744-1.729 4.67.055 6.453a4.534 4.534 0 0 0 6.41.012zM748.157 463.635a4.537 4.537 0 0 0-.018-6.419c-1.785-1.784-4.648-1.744-6.397.005-1.798 1.798-1.842 4.664-.057 6.449 1.798 1.799 4.674 1.764 6.472-.035zM761.023 450.77c1.8-1.8 1.788-4.629-.01-6.428-1.785-1.784-4.605-1.787-6.405.012a4.484 4.484 0 0 0-.003 6.396c1.798 1.799 4.627 1.811 6.418.02zM773.943 437.85c1.751-1.751 1.8-4.641.002-6.439-1.785-1.784-4.666-1.727-6.417.023-1.786 1.787-1.835 4.658-.05 6.443 1.798 1.799 4.679 1.759 6.465-.027zM786.825 424.967c1.791-1.791 1.838-4.678.039-6.477-1.784-1.784-4.663-1.729-6.454.063-1.744 1.744-1.8 4.622-.015 6.407a4.554 4.554 0 0 0 6.43.007zM757.813 460.48c-1.742 1.742-1.737 4.671-.003 6.405 1.8 1.8 4.727 1.803 6.469.061a4.624 4.624 0 0 0-.003-6.526c-1.736-1.734-4.669-1.734-6.463.06zM751.4 479.824c1.802-1.803 1.754-4.685-.045-6.484-1.735-1.734-4.619-1.783-6.421.019-1.793 1.792-1.784 4.718-.05 6.452 1.801 1.799 4.723 1.806 6.516.013zM770.744 447.549c-1.793 1.793-1.796 4.729-.061 6.463a4.624 4.624 0 0 0 6.526.003c1.732-1.732 1.738-4.669-.062-6.468-1.733-1.734-4.67-1.731-6.403.002zM783.612 434.68c-1.744 1.744-1.732 4.666.003 6.4 1.799 1.801 4.719 1.811 6.463.066 1.805-1.805 1.787-4.717-.013-6.517-1.734-1.734-4.648-1.753-6.453.051zM796.534 421.759c-1.795 1.795-1.734 4.667 0 6.401 1.8 1.801 4.671 1.859 6.466.064s1.741-4.672-.058-6.471c-1.734-1.734-4.613-1.79-6.408.006zM777.149 479.817c-1.742 1.742-1.75 4.659-.001 6.407 1.791 1.791 4.72 1.796 6.462.054 1.795-1.794 1.795-4.728.004-6.519-1.749-1.748-4.671-1.737-6.465.058zM764.271 492.695c-1.793 1.793-1.796 4.705-.048 6.455 1.791 1.79 4.716 1.799 6.509.006 1.803-1.803 1.753-4.686-.038-6.477a4.54 4.54 0 0 0-6.423.016zM790.081 466.886c-1.793 1.792-1.808 4.717-.059 6.466 1.791 1.791 4.727 1.788 6.52-.005 1.732-1.732 1.736-4.67-.055-6.461-1.748-1.749-4.674-1.734-6.406 0zM802.949 454.017c-1.744 1.745-1.744 4.654.005 6.403 1.791 1.791 4.712 1.803 6.457.059a4.604 4.604 0 0 0-.006-6.51c-1.749-1.748-4.651-1.756-6.456.048zM815.871 441.096a4.522 4.522 0 0 0 .003 6.404c1.791 1.791 4.663 1.852 6.458.057s1.74-4.674-.051-6.465a4.53 4.53 0 0 0-6.41.004zM780.414 495.892a4.6 4.6 0 0 0-.007 6.501c1.803 1.803 4.667 1.756 6.465-.043a4.524 4.524 0 0 0-.011-6.412c-1.787-1.788-4.699-1.795-6.447-.046zM793.28 483.025c-1.792 1.791-1.741 4.659.047 6.447 1.803 1.803 4.62 1.803 6.411.012 1.8-1.8 1.8-4.617-.003-6.42-1.788-1.787-4.656-1.837-6.455-.039zM806.2 470.105a4.602 4.602 0 0 0 .001 6.494c1.802 1.803 4.671 1.751 6.457-.035 1.751-1.751 1.812-4.629.009-6.432-1.788-1.786-4.717-1.777-6.467-.027zM819.082 457.224c-1.745 1.744-1.752 4.671.036 6.458 1.803 1.803 4.678 1.744 6.422 0 1.791-1.791 1.85-4.666.047-6.469-1.788-1.787-4.714-1.78-6.505.011zM815.873 486.271c-1.795-1.795-4.67-1.729-6.402.004-1.793 1.793-1.857 4.666-.063 6.462 1.799 1.8 4.673 1.734 6.466-.058 1.732-1.732 1.799-4.608-.001-6.408zM761.077 476.555c-1.798 1.799-1.794 4.714-.049 6.459 1.792 1.791 4.721 1.81 6.52.012 1.748-1.748 1.727-4.674-.064-6.466-1.747-1.746-4.658-1.753-6.407-.005zM780.413 470.159c1.8-1.8 1.735-4.683-.057-6.474a4.532 4.532 0 0 0-6.413.004c-1.791 1.791-1.74 4.659.005 6.404 1.792 1.792 4.674 1.857 6.465.066zM793.333 457.239c1.751-1.751 1.747-4.694-.045-6.485-1.745-1.745-4.674-1.735-6.425.016-1.786 1.786-1.787 4.705-.041 6.451 1.791 1.791 4.725 1.804 6.511.018zM806.215 444.357c1.792-1.791 1.785-4.731-.007-6.523-1.745-1.745-4.672-1.738-6.463.053-1.744 1.745-1.751 4.671-.006 6.416 1.791 1.792 4.732 1.799 6.476.054z"
            }), n.createElement("path", {
                d: "M740.796 417.592c-21.849 21.849-21.849 57.4-.002 79.247 21.848 21.849 57.399 21.849 79.248-.001 21.847-21.846 21.847-57.397-.002-79.245-21.847-21.847-57.398-21.847-79.244-.001zm75.31 4.4c.816.816 1.493 1.648 2.283 2.469-1.807-1.15-4.16-1.058-5.717.499-1.791 1.791-1.803 4.722-.057 6.468 1.791 1.791 4.731 1.797 6.526.002 1.297-1.297 1.612-3.119.999-4.76 10.308 13.412 12.922 30.766 7.858 46.175-1.782-1.134-4.054-1.045-5.661.562a4.524 4.524 0 0 0 .001 6.399c.658.659 1.451.995 2.275 1.147-2.278 4.25-5.212 8.197-8.741 11.727-3.591 3.59-7.484 6.47-11.725 8.738-.171-.805-.491-1.613-1.149-2.272-1.791-1.791-4.671-1.729-6.461.062-1.553 1.553-1.695 3.879-.555 5.653-15.412 5.066-32.705 2.392-46.115-7.918 1.62.632 3.446.314 4.754-.993 1.785-1.784 1.734-4.682-.062-6.477-1.741-1.742-4.627-1.781-6.412.004-1.55 1.551-1.655 3.924-.495 5.711-.97-.809-1.88-1.563-2.766-2.449-4.594-4.594-8.037-9.956-10.501-15.556.269-.231.598-.374.845-.622 1.785-1.785 1.78-4.621-.018-6.42-.976-.976-2.242-1.375-3.573-1.289-.532-2.438-1.001-4.91-1.186-7.387a4.691 4.691 0 0 0 1.555-1.031 4.55 4.55 0 0 0 .012-6.426 4.674 4.674 0 0 0-1.563-1.037c.583-7.124 2.77-14.1 6.381-20.496 1.596.584 3.535.264 4.844-1.045 1.723-1.723 1.732-4.49.159-6.243.919-1.205 1.974-2.297 3.107-3.431 1.075-1.075 2.165-2.129 3.427-3.104 1.737 1.59 4.509 1.574 6.227-.143a4.62 4.62 0 0 0 1.05-4.849c6.4-3.615 13.368-5.794 20.495-6.38.236.561.576 1.07 1.053 1.547 1.74 1.74 4.613 1.801 6.411.004a4.63 4.63 0 0 0 1.035-1.56c2.486.174 4.948.655 7.347 1.227-.046 1.291.302 2.608 1.277 3.585 1.798 1.798 4.685 1.752 6.48-.044.24-.24.332-.519.565-.789a49.102 49.102 0 0 1 15.552 10.505l.15.15.089.087zM667.402 501.224c-6.594-.009-12.804 2.565-17.47 7.231-4.668 4.668-7.238 10.875-7.241 17.479l-.004 11.441-15.856 67.159-.798 3.546 3.637.023a30.129 30.129 0 0 0 20.841-8.057l.249-.241a24.286 24.286 0 0 0 15.458 6.575 24.374 24.374 0 0 0 17.796-6.559l.317.285c5.696 5.248 13.102 8.104 20.856 7.994l3.624-.034-16.694-70.692v-11.438c.004-13.622-11.086-24.711-24.715-24.712zm-13.357 11.344c3.574-3.574 8.309-5.528 13.353-5.543 10.418.014 18.893 8.488 18.898 18.897l.008.148-37.797-.002-.003-.143a18.8 18.8 0 0 1 5.541-13.357zm-5.538 19.338l37.797-.001-.002 2.898h-37.799l.004-2.897zm-1.943 63.884c-3.688 3.393-8.265 5.572-13.183 6.266l14.521-61.453 6.221.018-5.981 53.699-1.578 1.47zm19.937 4.783c-4.841-.229-9.26-2.279-12.561-5.813l6.047-54.152 14.833-.005 6.005 54.173c-.141.154-.271.303-.418.449-3.644 3.645-8.72 5.595-13.906 5.348zm34.926 1.494c-4.896-.678-9.469-2.846-13.156-6.238l-1.656-1.517-5.939-53.688 6.232-.019 14.519 61.462zM804.43 628.315c-3.34-2.791-8.274-6.082-12.871-6.098-4.573.016-10.425 3.344-16.498 9.418-3.189 3.189-6.509 7.244-9.666 12.034-.125.162-.253.321-.338.515-2.207 3.382-4.3 7.131-6.209 11.163-.009.009-.01.015-.018.023a96.224 96.224 0 0 0-2.467 5.649c-.097.244-.176.499-.272.744a90.519 90.519 0 0 0-1.911 5.302c-.166.52-.301 1.073-.465 1.6-.476 1.576-.952 3.15-1.357 4.78-.21.858-.359 1.752-.545 2.626-.296 1.356-.607 2.69-.841 4.075-.213 1.26-.333 2.555-.491 3.836-.132 1.052-.307 2.084-.394 3.156a84.291 84.291 0 0 0-.318 7.244c0 2.893.155 5.694.426 8.42.076.828.231 1.594.337 2.402.236 1.869.471 3.731.808 5.508.175.908.412 1.748.608 2.635.348 1.587.697 3.181 1.115 4.682.262.943.564 1.811.847 2.721.417 1.338.823 2.689 1.284 3.953.357.983.729 1.881 1.1 2.818.425 1.066.839 2.138 1.277 3.141a85.35 85.35 0 0 0 1.385 2.971c.358.757.711 1.527 1.078 2.234.57 1.119 1.124 2.129 1.681 3.135.24.426.478.869.708 1.272a84.546 84.546 0 0 0 1.943 3.22c.044.076.108.179.153.255l.004-.004c.253.399.53.872.771 1.236 4.12 6.263 8.746 11.606 13.396 15.47 3.34 2.789 8.273 6.082 12.87 6.098 4.574-.016 10.424-3.344 16.499-9.42l.003-.002c3.185-3.186 6.509-7.245 9.674-12.043.117-.155.235-.305.318-.486.207-.326.406-.687.619-1.016l.004.005c.117-.179.218-.38.332-.558a98.706 98.706 0 0 0 2.512-4.252c.154-.279.298-.576.452-.855a97.302 97.302 0 0 0 2.284-4.457c.2-.419.378-.867.576-1.297a93.99 93.99 0 0 0 1.915-4.392c.252-.632.472-1.301.712-1.943.507-1.349 1.019-2.697 1.469-4.093.301-.926.544-1.89.817-2.829.346-1.181.708-2.341 1.007-3.553.316-1.291.564-2.631.828-3.954.182-.918.406-1.814.561-2.744.312-1.825.52-3.698.712-5.578.051-.477.136-.934.178-1.409.206-2.396.318-4.821.317-7.282a84.004 84.004 0 0 0-.427-8.433c-.071-.729-.208-1.396-.297-2.113-.244-1.953-.491-3.903-.846-5.761-.172-.897-.399-1.729-.593-2.604-.356-1.593-.7-3.185-1.117-4.692-.265-.953-.571-1.831-.857-2.752-.413-1.319-.811-2.646-1.264-3.896-.363-1.006-.747-1.931-1.127-2.889-.41-1.031-.81-2.072-1.233-3.047-.469-1.08-.949-2.07-1.429-3.076-.336-.701-.666-1.425-1.006-2.09a91.268 91.268 0 0 0-1.757-3.291c-.205-.357-.397-.73-.596-1.073a85.928 85.928 0 0 0-2.066-3.43c-.017-.021-.026-.05-.043-.073-.285-.449-.596-.974-.868-1.385-4.118-6.265-8.744-11.608-13.393-15.471zm-48.698 58.875c.073-.801.178-1.58.273-2.365.183-1.506.399-2.99.654-4.438.155-.874.31-1.75.487-2.6.278-1.317.588-2.594.919-3.852.208-.813.397-1.651.625-2.438a86.42 86.42 0 0 1 1.633-5.061c.381-1.076.786-2.078 1.189-3.092.254-.651.504-1.305.772-1.928.441-1.045.892-2.051 1.339-3.02.201-.432.407-.847.607-1.264a81.91 81.91 0 0 1 1.444-2.89c9.677 11.171 14.935 25.183 14.935 40.142-.002 14.871-5.281 28.963-14.963 40.153-.395-.743-.793-1.575-1.191-2.384a94.094 94.094 0 0 1-.878-1.815c-.4-.862-.798-1.765-1.188-2.688a96.922 96.922 0 0 1-.936-2.299c-.365-.921-.732-1.838-1.077-2.809a85.508 85.508 0 0 1-1.57-4.836c-.247-.828-.456-1.705-.677-2.559a81.176 81.176 0 0 1-.971-4.059 71.436 71.436 0 0 1-.483-2.574 83.885 83.885 0 0 1-.667-4.512c-.097-.785-.196-1.56-.271-2.361-.218-2.359-.368-4.771-.367-7.262.001-2.466.149-4.848.362-7.189zm57.626 54.346l-.238.373-.004.004-.059.09c-2.797 4.236-5.897 8.1-8.962 11.164-5.723 5.724-10.238 7.772-12.517 7.775-2.237-.007-5.713-1.795-9.312-4.805-4.22-3.502-8.47-8.425-12.296-14.241-.445-.675-.943-1.501-1.432-2.29 10.927-11.947 17.677-27.752 17.675-45.219.001-17.459-6.724-33.293-17.642-45.239.4-.638.814-1.347 1.181-1.907l.21-.326.004-.004.103-.157c2.794-4.233 5.887-8.09 8.952-11.155 5.723-5.723 10.238-7.771 12.517-7.773 2.237.007 5.712 1.796 9.311 4.805 4.222 3.504 8.472 8.425 12.298 14.24.479.727 1.009 1.605 1.536 2.465-10.831 11.922-17.521 27.666-17.518 45.052-.004 17.378 6.655 33.139 17.482 45.065-.435.707-.889 1.47-1.289 2.083zm6.201-83.07c.409.891.818 1.822 1.223 2.778.299.701.588 1.435.882 2.168.376.956.752 1.912 1.107 2.917a78.868 78.868 0 0 1 1.219 3.75 91.695 91.695 0 0 1 1.001 3.549c.345 1.334.683 2.685.976 4.086.175.832.322 1.689.478 2.549.261 1.486.482 3.008.672 4.559.094.759.19 1.513.261 2.287.216 2.367.367 4.779.366 7.278 0 2.485-.146 4.884-.358 7.233-.07.75-.171 1.477-.257 2.214a83.945 83.945 0 0 1-.673 4.597c-.15.83-.294 1.672-.465 2.482a87.42 87.42 0 0 1-.955 4.027c-.197.756-.373 1.533-.581 2.262a84.322 84.322 0 0 1-1.641 5.091c-.363 1.023-.747 1.978-1.122 2.943-.281.708-.558 1.415-.847 2.093a89.11 89.11 0 0 1-1.263 2.862c-.234.507-.468.987-.703 1.472-.444.916-.891 1.84-1.331 2.677-9.582-11.146-14.781-25.089-14.778-39.952.002-14.789 5.221-28.809 14.798-39.973.401.766.807 1.613 1.214 2.445.259.532.518 1.054.777 1.606zM393.956 764.432c-21.847 21.847-21.849 57.397.001 79.246 21.854 21.854 57.399 21.848 79.246.001 21.855-21.855 21.854-57.393 0-79.247-21.849-21.849-57.399-21.849-79.247 0zm75.284 75.284c-19.66 19.66-51.657 19.664-71.321 0-19.664-19.665-19.661-51.662-.001-71.322 19.661-19.66 51.658-19.664 71.323 0 19.664 19.665 19.66 51.661-.001 71.322z"
            }), n.createElement("path", {
                d: "M409.806 780.281c-13.109 13.109-13.111 34.436 0 47.548 13.109 13.109 34.438 13.109 47.548 0s13.117-34.431 0-47.548c-13.113-13.112-34.439-13.11-47.548 0zm43.586 43.585c-10.924 10.923-28.7 10.924-39.623 0-10.924-10.923-10.924-28.7-.001-39.623 10.924-10.924 28.7-10.924 39.624 0 10.923 10.923 10.922 28.699 0 39.623z"
            }), n.createElement("path", {
                d: "M446.36 800.552c-2.568-2.568-5.356-3.958-8.287-4.131-2.993-.18-5.712.935-8.073 3.295a12.58 12.58 0 0 0-2.161 2.854l-3.019-3.771 9.231-9.232-4.768-4.768-13.565 13.565 11.764 14.435 4.642-2.75.204-2.077c.125-.926.695-1.901 1.694-2.901 1.061-1.06 2.196-1.539 3.504-1.465 1.364.073 2.634.716 3.881 1.962 1.335 1.335 2.071 2.672 2.189 3.975.11 1.209-.328 2.289-1.339 3.299-.959.959-1.925 1.456-2.95 1.519-1.031.06-2.137-.352-3.302-1.235l-1.042-.79-4.794 4.793 1.259 1.052c2.221 1.856 4.619 2.798 7.129 2.798.221 0 .442-.007.664-.021 2.727-.179 5.248-1.408 7.494-3.654 2.543-2.543 3.784-5.358 3.688-8.369-.096-2.979-1.457-5.797-4.043-8.383zM775.088 197.833h-5.604v5.604h-5.604v.028c-11.206 0-11.206 11.179-11.206 11.179s0 11.18 11.206 11.18h16.811s5.604.027 5.604 5.631c0 5.603-5.604 5.603-5.86 5.603h-27.76v5.604h16.81v5.604l5.604-.001v-5.603h5.604v-.027c0 .027 11.207.027 11.207-11.18 0-11.207-11.207-11.207-11.207-11.207h-16.811s-5.604 0-5.604-5.604c0 0 0-5.603 5.604-5.604H791.9v-5.604h-16.811v-5.603z"
            }), n.createElement("path", {
                d: "M811.806 183.269c-11.06-10.837-24.209-16.254-39.52-16.254h-.547c-14.982.213-27.755 5.417-38.397 15.645-.389.375-.767.774-1.154 1.166-10.797 10.988-16.1 24.173-15.936 39.555.214 15.297 5.795 28.453 16.794 39.429 10.852 10.835 23.93 16.274 39.24 16.274h.559a58.206 58.206 0 0 0 13.904-1.762c9.642-2.49 18.161-7.463 25.604-15.059 4.466-4.563 7.973-9.549 10.507-14.852 3.731-7.562 5.581-15.868 5.455-24.911-.137-15.315-5.664-28.388-16.509-39.231zm.126 7.1c6.561 7.822 10.342 16.692 11.365 26.862h-11.989a39.311 39.311 0 0 0-7.863-18.384l8.487-8.478zm-34.486-18.435c9.97.897 18.786 4.449 26.595 10.72l-8.521 8.523a39.121 39.121 0 0 0-18.079-7.245v-11.997l.005-.001zm-11.02.057v12.036a39.275 39.275 0 0 0-17.614 7.322l-8.58-8.572c7.682-6.187 16.349-9.749 26.194-10.786zm-33.988 18.591l8.51 8.512a39.256 39.256 0 0 0-7.59 17.488l-12.126.001c1.05-9.678 4.749-18.258 11.206-26.001zm-.82 63.591c-6.129-7.831-9.571-16.625-10.452-26.572h11.902a39.312 39.312 0 0 0 6.955 18.167l-8.405 8.405zm34.152 19.864c-10.015-1.193-18.786-5.112-26.545-11.886l8.339-8.333a39.283 39.283 0 0 0 18.206 8.148v12.071zm6.516-17.09c-18.692 0-33.899-15.212-33.899-33.905 0-18.687 15.207-33.894 33.899-33.894s33.899 15.201 33.899 33.895c.001 18.692-15.206 33.904-33.899 33.904zm13.429 16.017c-2.824.745-5.855 1.105-8.92 1.379l.001-12.071c7.025-.799 13.478-3.469 18.895-7.48l8.673 8.652c-5.615 4.595-11.809 7.757-18.649 9.52zm33.105-27.481c-1.674 3.557-4.049 6.895-6.687 10.113l-8.535-8.548a39.253 39.253 0 0 0 7.813-18.791h12.22c-.542 6.151-2.096 11.792-4.811 17.226zM670.575 750.944l-50.198 50.198c-4.686 4.686-4.686 12.284 0 16.971l50.198 50.197c4.686 4.686 12.284 4.686 16.971 0l50.197-50.197c4.687-4.687 4.687-12.285 0-16.971l-50.197-50.198c-4.687-4.685-12.285-4.685-16.971 0zm62.926 54.441a6.007 6.007 0 0 1 0 8.485l-50.198 50.198a6.007 6.007 0 0 1-8.485 0L624.62 813.87a6.005 6.005 0 0 1 0-8.485l50.197-50.197a6.005 6.005 0 0 1 8.485 0l50.199 50.197z"
            }), n.createElement("circle", {
                cx: "646.724",
                cy: "809.499",
                r: "6.721"
            }), n.createElement("circle", {
                cx: "679.293",
                cy: "776.929",
                r: "6.721"
            }), n.createElement("circle", {
                cx: "679.795",
                cy: "842.57",
                r: "6.72"
            }), n.createElement("circle", {
                cx: "712.365",
                cy: "810",
                r: "6.721"
            }), n.createElement("circle", {
                cx: "679.363",
                cy: "809.931",
                r: "6.721"
            }), n.createElement("path", {
                d: "M896.475 149.931l.479-.124c1.036-.263 2.115-.67 2.943-.994.034-.014.068-.032.103-.045v-6.627c-4.927 2.531-8.558 2.759-9.684 1.633-1.85-1.851-.074-10.448 9.684-20.504v-8.292a62.915 62.915 0 0 0-3.624 3.343c-4.616 4.616-8.38 9.845-10.59 14.702l-.109.239-24.292-9.079 9.186-9.186.17.062 9.338 3.487L900 98.623v-8.536l-21.443 21.443-.175-.066-53.664-20.093-18.662 18.662 77.811 28.986-.039.225c-.569 3.571.109 6.524 1.969 8.556l.168.183 10.625 10.625c.939.939 2.088 1.601 3.411 1.991v-7.142l-3.526-3.526zm-41.492-28.124l-38.017-14.149 9.256-9.256.174.064 37.964 14.199-9.205 9.206-.172-.064zM887.572 341.921l10.544 10.544a9.384 9.384 0 0 0 1.884 1.444v-7.346l-8.535-8.535c-1.633-1.634-1.454-4.343.356-5.812l2.717-2.1 5.462 5.462v-7.785l-1.089-1.089.503-.396.586-.455v-6.968l-11.553 8.979c-4.515 3.495-4.814 10.117-.875 14.057z"
            }), n.createElement("path", {
                d: "M872.842 391.879c-1.439.51-3.034.155-4.091-.901l-11.245-11.245c-14.784-14.784-18.934-41.934-9.054-59.281a53.023 53.023 0 0 1 8.594-11.295c11.627-11.626 27.653-16.876 42.954-15.16v-5.422c-16.7-1.642-34.223 4.037-46.804 16.618-3.691 3.691-6.896 7.918-9.527 12.545-5.43 9.514-7.313 21.729-5.301 34.391 1.959 12.282 7.515 23.768 15.254 31.507l11.236 11.235c2.589 2.589 6.49 3.434 9.933 2.156L900 386.603v-5.946l-27.158 11.222z"
            }), n.createElement("path", {
                d: "M865.807 358.672c-4.902 4.901-4.903 12.88 0 17.783 4.902 4.902 12.882 4.902 17.784 0 4.903-4.902 4.902-12.881 0-17.783-4.903-4.904-12.881-4.904-17.784 0zm13.93 13.93c-2.779 2.779-7.299 2.778-10.076 0-2.778-2.778-2.779-7.298-.001-10.076s7.299-2.778 10.077 0a7.133 7.133 0 0 1 0 10.076zM888.371 630.471a103.091 103.091 0 0 0 5.418-3.336 97.158 97.158 0 0 0 6.211-.714v-4.022c-2.291.242-4.425.379-5.709.44-5.22-8.748-9.937-22.605-10.203-23.414l-5.468-20.482c2.853.244 6.04.656 9.336 1.135.533 2.387 3.614 15.163 12.044 33.685v-10.808c-4.345-10.741-6.575-18.636-7.465-22.121 2.457.431 4.955.94 7.465 1.532v-4.414c-14.555-3.342-28.415-3.91-34.045-3.987a113.853 113.853 0 0 1 2.392-9.203c2.651.041 16.693.406 31.653 3.726v-4.4c-13.401-2.895-25.752-3.467-30.284-3.581 1.54-4.441 2.961-7.682 3.731-9.303 6.918.629 25.31 3.542 25.506 3.576l1.047.168V525.56c-12.79 1.038-25.289 6.424-35.051 16.186-8.459 8.459-13.605 18.971-15.513 29.947l-.065-.014c-.021.184-.005.394-.012.594-2.817 17.203 2.344 35.476 15.589 48.721 9.762 9.762 22.262 15.148 35.052 16.187v-4.325a51.945 51.945 0 0 1-11.629-2.385zm-.174-98.142a50.986 50.986 0 0 1 9.267-2.164c-.379 4.21-.305 9.235-.305 9.235l-.001 10.774c-2.228-.35-5.684-.872-9.375-1.414-.004-5.21.109-12.683.414-16.431zM874.5 539.3a51.817 51.817 0 0 1 9.316-5.309c-.256 4.621-.302 11.006-.297 14.176a275.937 275.937 0 0 0-8.936-1.136c-.143-1.582-.37-5.131-.083-7.731zm-.396 39.283l5.484 20.52c-1.917 1.252-5.369 3.511-7.368 4.814-2.935-3.49-7.371-9.361-8.783-11.244.277-5.178.877-10.02 1.682-14.451 1.8.027 4.957.103 8.985.361zm-6.132-33.814c.686-.686 1.411-1.295 2.128-1.934.031 2.172.182 4.15.267 5.009l-.063.118c-.379.688-8.419 15.895-10.694 38.973-3.123-5.104-6.181-11.25-5.993-14.43 1.764-10.162 6.52-19.901 14.355-27.736zm-15.023 39.035c2.445 4.79 5.374 9.029 6.161 10.13l-.017.071.458.619c.255.324 5.273 7.053 8.872 11.394-3.893 1.905-6.095 2.946-7.297 3.483-5.057-7.828-7.758-16.711-8.177-25.697zm15.014 34.175c-1.571-1.57-2.967-3.238-4.302-4.953 1.514-.692 8.563-4.068 17.272-9.696a190.258 190.258 0 0 0 3.335 8.62c-4.8 3.193-11.883 7.015-13.967 8.142-.785-.699-1.587-1.361-2.338-2.113zm5.943 5.023c2.895-1.563 8.038-4.438 12.077-7.077 1.304 2.914 2.737 5.838 4.257 8.449-2.689 1.684-5.521 3.277-7.008 4.106a52.136 52.136 0 0 1-9.326-5.478zM63.772 862.647l45.253.004c4.716 7.471 11.425 20.704 13.264 37.527h5.443c-1.976-19.292-10.011-34.167-15.07-41.838-4.119-6.266-8.745-11.607-13.395-15.471-3.34-2.79-8.274-6.082-12.871-6.098-4.573.016-10.424 3.344-16.499 9.418-3.188 3.188-6.508 7.243-9.666 12.034-.125.162-.251.321-.337.515-7.036 10.806-13.138 25.187-14.817 41.439h5.43c1.606-14.625 6.987-27.607 13.265-37.53zm9.949-12.634c5.776-5.775 10.336-7.835 12.676-7.838 3.924.016 11.535 5.266 18.906 15.075l-37.813.001c2.087-2.761 4.191-5.198 6.231-7.238z"
            }), n.createElement("path", {
                d: "M89.094 891.157l5.17.017a2.715 2.715 0 0 0 1.914-.793 2.66 2.66 0 0 0 .783-1.904 2.673 2.673 0 0 0-2.697-2.697l-15.734.001a2.666 2.666 0 0 0-2.7 2.7c.002 1.474 1.203 2.673 2.696 2.696l5.168-.015.003 9.017h5.396l.001-9.022zM275.58 893.323a53.03 53.03 0 0 1 8.594-11.295c17.266-17.266 44.237-20.493 64.121-7.681l.675.435-32.676 25.396h10.348l-.603-.603.503-.396 26.78-20.813 21.812 21.811h7.785l-27.429-27.43c-.044-.034-.197-.174-.245-.204-21.82-17.092-54.733-14.67-74.92 5.519-3.692 3.691-6.896 7.917-9.528 12.544-1.685 2.952-3.027 6.166-4.019 9.571h5.771a38.235 38.235 0 0 1 3.031-6.854zM540.925 880.718v11.066l5.604.001-.001-12.715c1.83-.414 3.7-.751 5.603-.967l.001 22.075h5.605l.001-22.404a51.32 51.32 0 0 1 5.599.329l.001 22.075h5.604l-.001-21.108a49.55 49.55 0 0 1 5.604 1.648l.004 11.063h5.604l-.001-8.69a50.927 50.927 0 0 1 19.459 17.088h6.64c-9.692-16.738-27.782-28.008-48.512-28.008-20.731 0-38.821 11.27-48.514 28.008h6.634c5.998-8.908 14.769-15.805 25.066-19.461z"
            }), n.createElement("path", {
                d: "M540.925 897.389h5.604v2.79h-5.604zM574.546 897.384h5.604v2.795h-5.604z"
            }))), n.createElement("div", {
                className: "emptypage_content"
            }, n.createElement("div", {
                className: "emptypage_title"
            }, t.LanguageHelper.Get("lbl_UnderMaintain")), n.createElement("div", {
                className: "emptypage_text"
            }, n.createElement("p", {
                className: "text-primary"
            }, t.LanguageHelper.Get("lbl_UnderMaintainMsg1")), n.createElement("p", {
                dangerouslySetInnerHTML: {
                    __html: t.LanguageHelper.Get("lbl_UnderMaintainMsg2")
                }
            })))))
        }
    })
      , re = n.createBackboneClass({
        changeOptions: "change:loading",
        render: function() {
            return this.getModel().get("loading") ? n.createElement("div", {
                className: "ui_tmpl"
            }, n.createElement("div", {
                className: "preloader preloader-full"
            }, n.createElement("div", {
                className: "preloader_spiner"
            }, n.createElement("div", {
                className: "preloader_circles"
            }, n.createElement("div", {
                className: "preloader_circle-1"
            }), n.createElement("div", {
                className: "preloader_circle-2"
            }))))) : n.createElement("div", null)
        }
    })
      , el = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsShow: this.ReadCookie() < 3
            }
        },
        ReadCookie: function() {
            var i = "pdl_" + st.get("Username")
              , n = t.Utility.Cookie.get(i);
            return n == null && (n = "0"),
            parseInt(n)
        },
        WriteCookie: function(n) {
            var i = "pdl_" + st.get("Username");
            t.Utility.Cookie.setByDomain(i, n + "")
        },
        Close: function() {
            var n = this.ReadCookie();
            n++;
            this.WriteCookie(n);
            this.setState({
                IsShow: !1
            })
        },
        Open: function() {
            this.WriteCookie(4);
            this.setState({
                IsShow: !1
            });
            require(["Commponent/TutorialParlay"], function(t) {
                n.render(n.createElement(t, null), $("#TutorialParlay")[0])
            })
        },
        render: function() {
            return n.createElement("div", {
                className: "dialog dialog-mask dialog-primary",
                "data-status": this.state.IsShow ? "is-open" : "",
                "js-dialog-howtouse-parlay": ""
            }, n.createElement("div", {
                className: "dialog_container"
            }, n.createElement("div", {
                className: "dialog_header"
            }, n.createElement("div", {
                className: "dialog_title"
            }, t.LanguageHelper.Get("lbl_PrlyQuickIntro"))), n.createElement("div", {
                className: "dialog_content"
            }, n.createElement("div", {
                className: "dialog_text"
            }, t.LanguageHelper.Get("lbl_PrlyQuickIntroMsg"))), n.createElement("div", {
                className: "dialog_footer"
            }, n.createElement("div", {
                className: "btn-box"
            }, n.createElement("div", {
                className: "btn btn-default",
                onClick: this.Close
            }, t.LanguageHelper.Get("lbl_later")), n.createElement("div", {
                className: "btn btn-highlight",
                onClick: this.Open
            }, t.LanguageHelper.Get("lbl_Watchnow"))))))
        }
    })
      , kr = !1
      , fe = n.createBackboneClass({
        getInitialState: function() {
            return {
                openLeftMenu: !1
            }
        },
        componentWillUnmount: function() {},
        handleDepositPageClick: function() {
            if (window._IsLicenseeAPI) {
                if (window._DespositUrl != "") {
                    var t = new URL(window._DespositUrl)
                      , i = window.location.href.split("#")[0];
                    t.searchParams.append("ReturnUrl", escape(i));
                    window.location.href = t
                }
            } else
                require(["Commponent/ch_MyAccountEdit", "ch_MyAccCommon"], function(t, i) {
                    var r = window._EnableCurrencyDisplay == !0 ? st.get("Currency") + " " + st.get("BetCredit") : st.get("BetCredit")
                      , u = n.renderToStaticMarkup(n.createElement(t.DepositWithdrawal, {
                        balance: r
                    }));
                    $("#divMain").append(u);
                    i.DepWitHandler("deposit")
                }),
                this.handleLaterClick("#modalPopupMsg")
        },
        componentDidMount: function() {
            var i;
            if (vt.GoToTopView("body", document),
            window._SiteMode == 2 && (i = getIOSVersion(),
            window._IsLicenseeAPI && getMobileOperatingSystem() == "iOS" && i && i < 13 ? _pop.ch_IOSAlert(function() {
                this.CheckDeposit()
            }
            .bind(this)) : this.CheckDeposit()),
            window._Site == "ibcbet") {
                var u = new Date
                  , f = u.getFullYear() + "" + u.getMonth()
                  , r = st.get("LDW")
                  , e = r && t.Utility.Cookie.get("LDW") != f;
                e && n.render(n.createElement(pt.LiteView, {
                    openId: r ? "LDW" : "LDid",
                    cVal: r ? f : "1"
                }), document.getElementById("dialogMessage"))
            }
            st.get("FreeBetRoundID") && st.get("FreeBetRoundID") > t.Utility.Cookie.get("SbFreeBet") && new Date(st.get("FreeBetBannerEndDate")) > new Date && n.render(n.createElement(pt.LiteView, {
                openId: "SbFreeBet"
            }), document.getElementById("freebetSpinBanner"));
            _SabaClubFreeBetPeriod != 1 && _SabaClubFreeBetPeriod != 2 || !!sessionStorage.getItem("sabafreebetpromo") || (n.render(n.createElement(pt.LiteView, {
                openId: "SbFreeBetIntro"
            }), document.getElementById("freebetIntroBanner")),
            sessionStorage.setItem("sabafreebetpromo", "1"));
            st.get("ShowRedEnvelope2021") && n.render(n.createElement(pt.LiteView, {
                openId: "RedEnvelope"
            }), document.getElementById("luckyMoney"));
            ue();
            lt.get("loading") || setTimeout(function() {
                t.EventHub.trigger("moveTomatch")
            }, 1)
        },
        closeLeftMenu: function() {
            $("body").removeAttr("data-status");
            this.setState({
                openLeftMenu: !1
            })
        },
        openLeftMenu: function() {
            $("body").attr("data-status", "is-sidebar-open");
            at.clearTicket();
            this.setState({
                openLeftMenu: !0
            })
        },
        handleLaterClick: function(n) {
            $(n).removeAttr("data-status")
        },
        CheckDeposit: function() {
            st.get("gotoDeposit") == !0 && t.Utility.Cookie.get("depositShowed") != "1" ? require(["popup"], function() {
                var n = [{
                    Class: "btn btn-default",
                    Key: "lbl_later",
                    IsUpperCase: !1,
                    Callback: this.handleLaterClick.bind(null, "#modalPopupMsg")
                }, {
                    Class: "btn btn-primary",
                    Key: "lbl_OKDepositNow",
                    Callback: this.handleDepositPageClick,
                    IsUpperCase: !1
                }], i;
                window._DespositUrl == "" && window._IsLicenseeAPI && (n = [{
                    Class: "btn btn-default",
                    Key: "lbl_later",
                    Callback: this.handleLaterClick.bind(null, "#modalPopupMsg"),
                    IsUpperCase: !1
                }]);
                i = "lbl_PromotionGoDepositMsg";
                _pop.ch_DialogGeneric("modalPopupMsg", "modal", {
                    Head: "lbl_Bonus",
                    Icon: "icon icon-bonus"
                }, i, "", n);
                t.Utility.Cookie.setByDomain("depositShowed", "1")
            }
            .bind(this)) : this.createBonus();
            this.CreateLoyalty();
            this.CreateOddsBoost()
        },
        createBonus: function() {
            _SiteMode == 2 && window._SkinMode != 3 && t.Utility.Cookie.get("bonusShowed") != "1" && st.get("QBonus") && st.get("QBonus").length > 0 && (_pop.PromotionBannerCV(st.get("QBonus")),
            t.Utility.Cookie.setByDomain("bonusShowed", "1"))
        },
        CreateLoyalty: function() {
            var n = st.get("AlivePlanList") && st.get("AlivePlanList").length > 0;
            n && (st.get("AlivePlanList").map(function(t) {
                n = n && t.Status == 0
            }),
            window.LoyaltyShowed != 1 && st.get("SBID") != 0 && n == !0 && wt.show("Popup"))
        },
        CreateOddsBoost: function() {
            window._EnableEuroCupOddsBoostBanner && t.Utility.Cookie.get("OddsBoost") != "1" && sessionStorage.getItem("OddsBoost") != 1 && gt.show("Popup")
        },
        render: function() {
            return n.createElement(k.Main, {
                DefMenu: window._UseNewAppBar ? 9 : 3
            }, n.createElement(ft.Header, {
                HMenuModel: p
            }, window._SkinMode == 4 ? null : n.createElement(ft.Mapbar, {
                account: this.getModel().get("account")
            }), n.createElement(ft.productBar, {
                openLeftMenu: this.openLeftMenu,
                model: p
            }), n.createElement(ft.subMenu, {
                model: p
            }), n.createElement(ft.Filter, {
                model: p
            }), window._SkinMode == 4 ? n.createElement(ft.MarketFloat, {
                model: p,
                MarketSelecter: p.Market.get("MarketSelecter")
            }) : null), n.createElement("div", {
                id: "LeftMenu"
            }, this.state.openLeftMenu ? n.createElement(et, {
                account: this.getModel().get("account"),
                MenuBar: this.getModel().get("menuBar"),
                closeLeftMenu: this.closeLeftMenu
            }) : null), n.createElement(te, {
                model: lt,
                LeagueList: this.getModel().get("LeagueList")
            }), n.createElement("div", {
                id: "SearchPanel"
            }), n.createElement("div", {
                id: "selectleaguePanel"
            }), n.createElement("div", {
                className: "dialog dialog-mask dialog-primary dialog-full",
                id: "modalPopupMsg"
            }), n.createElement("div", {
                id: "TutorialParlay"
            }), n.createElement("div", {
                className: "dialog",
                "data-status": ""
            }, n.createElement("div", {
                className: "dialog_container"
            }, n.createElement("div", {
                className: "dialog_header"
            }, n.createElement("div", {
                className: "dialog_title"
            }, t.LanguageHelper.Get("lbl_note"))), n.createElement("div", {
                className: "dialog_content"
            }, n.createElement("div", {
                id: "FirstMarketHelp",
                className: "dialog_text"
            })), n.createElement("div", {
                className: "dialog_footer"
            }, n.createElement("div", {
                className: "btn-box"
            }, n.createElement("div", {
                className: "btn btn-highlight",
                onClick: this.handleLaterClick.bind(null, ".dialog")
            }, t.LanguageHelper.Get("lbl_ok")))))), n.createElement(o.EntryIcon, null), n.createElement(bu, null), n.createElement(h, {
                model: at,
                collection: p
            }), n.createElement("div", {
                id: "pageParlay"
            }), n.createElement(s, {
                EndDate: "2020/11/30"
            }), n.createElement("div", {
                id: "freebetIntroBanner"
            }), n.createElement("div", {
                id: "freebetSpinBanner"
            }), n.createElement("div", {
                id: "dialogMessage"
            }), n.createElement("div", {
                id: "luckyMoney"
            }), n.createElement("div", {
                className: "event-layer",
                id: "soccer-lottery"
            }), window._EnableNetworkDetect ? n.createElement(nt.DetectNetwork, null) : null, n.createElement(c.StakeList, {
                model: at
            }))
        }
    });
    return {
        SportsView: fe,
        SingleMatchNew: tr,
        SingleMatchHeader: ff,
        VideoMatch: cr,
        MatchBarPanel: lr
    }
});
define("Commponent/ch_GameVisualizationView", ["react", "common", "Commponent/CommonComponent", "Commponent/VideoPlayer", "ch_BetPanelModular", "react-list", "Commponent/ch_BaseComponent", "Commponent/BaseMixins", "router", "BetTypeSetting", "OddsModel", "ch_HeaderMenuModel", "accountModel", "Commponent/NumberGamePlayer", "GoToTop", "react.backbone"], function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y) {
    var p, tt = n.createBackboneClass({
        componentDidMount: function() {
            var n = this;
            require(["trailblazer"], function(t) {
                p == null && (p = new t);
                n.init()
            });
            ~[90, -90].indexOf(window.orientation) ? $("html").attr("data-landscape-bet", "true").attr("data-video-type", "gv").attr("data-addressbar-hidden", "true") : $("html").removeAttr("data-landscape-bet").removeAttr("data-addressbar-hidden").removeAttr("data-video-type", "gv");
            window.addEventListener("orientationchange", this.orientationChange)
        },
        init: function() {
            this.refreshKey(!1);
            var n = this.props.Matchid
              , i = this.props.TeamId1 + this.props.NeutralTeam
              , r = this.props.TeamId2
              , u = t.CultureToRef(this.props.Language);
            p.setUserLang(u);
            p.gvstart(n, i, r, "GVFrame", "mobile", this.props.GameClass)
        },
        componentWillUnmount: function() {
            this.refreshKeyTimer != null && clearTimeout(this.refreshKeyTimer);
            p.gvend();
            !!~[90, -90].indexOf(window.orientation) || $("html").removeAttr("data-landscape-bet").removeAttr("data-addressbar-hidden");
            window.removeEventListener("orientationchange", this.orientationChange)
        },
        orientationChange: function() {
            ~[90, -90].indexOf(window.orientation) ? $("html").attr("data-landscape-bet", "true").attr("data-video-type", "gv").attr("data-addressbar-hidden", "true") : $("html").removeAttr("data-landscape-bet").removeAttr("data-addressbar-hidden").removeAttr("data-video-type", "gv")
        },
        refreshKey: function(n) {
            var i = this;
            t.SyncServer("GameVisualization", null, function(n) {
                n.Data.dispatcherkey != null && p.setKey(n.Data.dispatcherkey);
                i.refreshKeyTimer = setTimeout(i.refreshKey, 6e4)
            }, n)
        },
        render: function() {
            var i = window.innerWidth
              , t = parseInt(Math.min(499, i) * 230 / 425);
            return t = t + Math.max(475 - Math.min(499, i), 0) * .11,
            n.createElement("div", {
                id: "GVFrame",
                style: {
                    height: t + "px"
                }
            }, n.createElement("div", {
                className: "loading-circular"
            }, n.createElement("div", {
                className: "circular-group"
            }, n.createElement("div", {
                className: "circular_1"
            }), n.createElement("div", {
                className: "circular_2"
            }), n.createElement("div", {
                className: "circular_3"
            }), n.createElement("div", {
                className: "circular_4"
            }), n.createElement("div", {
                className: "circular_5"
            }), n.createElement("div", {
                className: "circular_6"
            }), n.createElement("div", {
                className: "circular_7"
            }), n.createElement("div", {
                className: "circular_8"
            })), n.createElement("div", {
                className: "text-loading"
            })))
        }
    }), b = n.createBackboneClass({
        refresh: function() {
            this.refs.Player.Disconnect();
            var n = this.refs.ChannelSelect.GetChannelCode();
            this.refs.Player.Connect(n)
        },
        GetChannelIndex: function() {
            return this.refs.ChannelSelect.state.index
        },
        FrameComplete: function() {
            $(n.findDOMNode(this.refs.loadingDiv)).hide()
        },
        onDisconnect: function() {
            $(n.findDOMNode(this.refs.loadingDiv)).show()
        },
        componentWillMount: function() {
            this.updateData()
        },
        updateData: function() {
            var n = this;
            t.SyncServer("NumberGamePlayer", null, function(t) {
                n.setState({
                    SiteID: t.SiteID,
                    CustID: t.CustID,
                    apiToken: "True",
                    VendorId: t.VendorId
                })
            }, !1)
        },
        onSelectCH: function(n) {
            this.refs.Player.Disconnect();
            this.refs.Player.Connect(n)
        },
        componentWillUnmount: function() {},
        shouldComponentUpdate: function() {
            return !1
        },
        render: function() {
            var i = window.innerWidth
              , r = parseInt(i / 1.77777);
            return n.createElement("div", null, n.createElement("div", {
                id: "GVFrame",
                className: "video-frame"
            }, n.createElement(v, {
                ref: "Player",
                height: r,
                width: i,
                onConnect: this.FrameComplete,
                onDisconnect: this.onDisconnect,
                SiteID: this.state.SiteID,
                CustID: this.state.CustID,
                apiToken: this.state.apiToken,
                VendorId: this.state.VendorId
            }), n.createElement("div", {
                ref: "loadingDiv",
                className: "video_loading"
            }, n.createElement("div", {
                className: "preloader "
            }, n.createElement("div", {
                className: "preloader_spiner"
            }, n.createElement("div", {
                className: "preloader_circles"
            }, n.createElement("div", {
                className: "preloader_circle-1"
            }), n.createElement("div", {
                className: "preloader_circle-2"
            })))), n.createElement("div", {
                className: "text-loading"
            }, t.LanguageHelper.Get("Streaming")), n.createElement("div", {
                className: "text-directions"
            }, t.LanguageHelper.Get("Streaming2")))))
        }
    }), k = n.createBackboneClass({
        getInitialState: function() {
            return {
                needBet: !1
            }
        },
        refresh: function() {
            n.findDOMNode(this.refs.videoIframe).src = n.findDOMNode(this.refs.videoIframe).src
        },
        doPlay: function(n) {
            var t = this;
            this.refs.InHousePlayer && this.refs.InHousePlayer.doPlay && (n ? setTimeout(function() {
                t.refs.InHousePlayer.doPlay()
            }, 150) : this.refs.InHousePlayer.StopPlay())
        },
        SwitchMute: function() {
            this.refs.InHousePlayer && this.refs.InHousePlayer.SwitchMute && this.refs.InHousePlayer.SwitchMute()
        },
        componentWillMount: function() {
            window._IsLicenseeAPI && window.siteSetting.CheckBetToView && t.SyncServer("LicSteaming/CheckMatchidHasBet", {
                custid: a.get("ID"),
                matchid: this.props.Match.get("MatchId")
            }, function(n) {
                n.Data == 0 && this.setState({
                    needBet: !0
                })
            }
            .bind(this), !1)
        },
        FrameComplete: function() {
            $(n.findDOMNode(this.refs.loadingDiv)).hide()
        },
        componentWillUnmount: function() {
            this.oChangehandle && (window.removeEventListener("orientationchange", this.oChangehandle),
            $(".compage_header").show(),
            $(".video_controller").removeAttr("style"),
            $("#StreamingScoll").removeAttr("style"),
            $(".match-bar").attr("data-status", "is-open"),
            $("#GVFrame").removeAttr("data-fullscreen"),
            $(".comparlay_bar").removeAttr("style"),
            $("#LobbyHead").removeAttr("style"))
        },
        componentDidMount: function() {
            this.props.AutoPlay && this.doPlay(!0)
        },
        componentDidUpdate: function(n) {
            (this.props.AutoPlay && n.AutoPlay != this.props.AutoPlay || this.props.isdoPlay) && (this.doPlay(!0),
            this.props.changeIsDoPlay && this.props.changeIsDoPlay())
        },
        render: function() {
            var p, h, l;
            if (this.state.needBet)
                return n.createElement("div", {
                    id: "GVFrame",
                    className: "video_container"
                }, " ", t.LanguageHelper.Get("lbl_StreamingBetToView"), "  ");
            var u = this.props.Match
              , s = window.innerWidth
              , v = parseInt(s / 1.77777)
              , y = location.protocol.replace(":", "")
              , f = null
              , e = this.props.info ? this.props.info : c.GetVideoInfo(u)
              , o = ""
              , i = e.src;
            return this.props.channelKey && (i = this.props.channelKey),
            i == 13 ? (p = this.props.VideoMatch,
            f = n.createElement(r.InHousePlayer, {
                ref: "InHousePlayer",
                hasGV: this.props.hasGV,
                SwitchModel: this.props.SwitchModel,
                MuteEvent: this.props.MuteEvent,
                videoName: "InHousePlayer",
                VideoMatch: this.props.VideoMatch,
                Match: this.props.Match,
                SwitchPin: this.props.SwitchPin,
                SwitchLobby: this.props.SwitchLobby,
                height: v + "px",
                width: s + "px",
                sid: e.sid,
                IsCN: window._Country == "CN",
                AutoPlay: !1,
                onPlayReady: this.FrameComplete
            })) : (i == 14 || i == 16 && a.get("ESTwitchStreaming") == 1) && this.props.IsOpen ? (h = /422840/.test(window._Mesid) || /424240/.test(window._Mesid),
            l = h,
            f = l ? null : n.createElement(r.ESportsVideo, {
                ref: "videoIframe",
                IsOpenCh: this.props.IsOpenCh,
                OpenEsportCh: this.props.OpenEsportCh,
                MatchId: u.get("MatchId"),
                onPlayReady: this.FrameComplete,
                StreamingSrc: i
            })) : this.props.IsOpen && (o = "Streaming?protocol=" + y + "&Mid=" + u.get("MatchId") + "&Pid=" + i + "&Sid=" + e.sid + "&Hid=" + u.get("TeamId1") + "&Aid=" + u.get("TeamId2"),
            window._WeverdatStreamingUrl && i == 18 && (o = window._WeverdatStreamingUrl.format(u.get("Sid"))),
            f = n.createElement(r.OtherPlayer, {
                ref: "videoIframe",
                sid: i,
                src: o,
                onLoad: this.FrameComplete
            })),
            n.createElement("div", {
                id: "GVFrame"
            }, f, n.createElement("div", {
                ref: "loadingDiv",
                className: "video_loading"
            }, n.createElement("div", {
                className: "preloader "
            }, n.createElement("div", {
                className: "preloader_spiner"
            }, n.createElement("div", {
                className: "preloader_circles"
            }, n.createElement("div", {
                className: "preloader_circle-1"
            }), n.createElement("div", {
                className: "preloader_circle-2"
            })))), n.createElement("div", {
                className: "text-loading"
            }, t.LanguageHelper.Get("Streaming")), n.createElement("div", {
                className: "text-directions"
            }, t.LanguageHelper.Get("Streaming2"))))
        }
    }), d = n.createBackboneClass({
        getInitialState: function() {
            return {
                index: 0,
                ChannelList: [],
                Leagueid: this.props.Leagueid
            }
        },
        componentWillReceiveProps: function(n) {
            n.Leagueid != this.props.Leagueid && (this.updateData(n.Leagueid),
            this.setState({
                Leagueid: n.Leagueid
            }))
        },
        updateData: function(n) {
            var i = this
              , t = {
                ProductName: "MobileLNG",
                TableNo: "001"
            };
            switch (n) {
            case 50717:
                t.TableNo = "006";
                break;
            case 79747:
                t.ProductName = "MobileHP5";
                t.TableNo = "H01"
            }
            Backbone.ajax({
                dataType: "json",
                url: siteSetting.NGStreaming + "/SC/GetStreamingNameList",
                data: t,
                cache: !1,
                async: !1,
                type: "POST",
                success: function(n) {
                    var t = _.sortBy(n.Result, "DisplayName");
                    i.setState({
                        ChannelList: t
                    });
                    i.onSelect(0, t[0].StreamingName)
                },
                error: function(n) {
                    console.log(n)
                }
            })
        },
        onSelect: function(n, t) {
            this.setState({
                index: n
            });
            this.props.SelCallBack && this.props.SelCallBack(t)
        },
        GetChannelCode: function() {
            return this.state.ChannelList.length == 0 ? "" : this.state.ChannelList[this.state.index].StreamingName
        },
        componentDidMount: function() {
            this.updateData(this.state.Leagueid)
        },
        componentDidUpdate: function() {},
        render: function() {
            for (var u, r = [], f = this.GetChannelCode(), i = 0; i < this.state.ChannelList.length; i++)
                u = this.state.ChannelList[i],
                r.push(n.createElement("li", {
                    key: i,
                    className: this.state.index == i ? "active" : ""
                }, n.createElement("a", {
                    onClick: this.onSelect.bind(this, i, u.StreamingName)
                }, t.LanguageHelper.Get("channel_" + (i + 1)))));
            return n.createElement("div", {
                className: "dropdown dropdown-view"
            }, n.createElement("div", {
                className: "btn",
                "data-toggle": "dropdown"
            }, n.createElement("span", {
                className: "btn_text"
            }, t.LanguageHelper.Get("channel_" + (this.state.index + 1)))), n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, r))
        }
    }), g = n.createBackboneClass({
        info: null,
        getInitialState: function() {
            return this.GetChannelList = this.GetChannelList,
            this.GetInHouseUrl = this.GetInHouseUrl,
            this.info = this.props.info ? this.props.info : c.GetVideoInfo(this.props.Match),
            {
                ChannelList: this.GetChannelList()
            }
        },
        onSelect: function(n, t) {
            this.props.SelCallBack && this.props.SelCallBack(t, n)
        },
        GetChannelList: function() {
            var n = [], i = [t.LanguageHelper.Get("lbl_Source").format([1]), t.LanguageHelper.Get("lbl_Source").format([2])], r;
            return this.info && this.info.src == 13 ? (n.push({
                name: i[0],
                key: 13,
                index: 0
            }),
            n.push({
                name: i[1],
                key: 11,
                index: 1
            })) : (n.push({
                name: i[0],
                key: 11,
                index: 0
            }),
            r = this.GetInHouseUrl(),
            r != "" && n.push({
                name: i[1],
                key: 13,
                index: 1
            })),
            n
        },
        GetInHouseUrl: function() {
            var n = this.info.sid && this.info.sid != "0" ? this.info.sid : "", i;
            return n != "" && parseInt(n) >= 9900 && parseInt(n) <= 9999 ? (i = "M" + n + ".m3u8",
            t.SyncServer("Streaming/GetInHouseStreamingUrl", {
                protocol: location.protocol,
                sid: i
            }, function(n) {
                n.Data && (url = n.Data.url)
            }, !1),
            url) : ""
        },
        render: function() {
            for (var r, f, i = [], u = this.props.selectChannel, t = 0; t < this.state.ChannelList.length; t++)
                r = this.state.ChannelList[t],
                i.push(n.createElement("li", {
                    key: t,
                    className: u == t ? "active" : ""
                }, n.createElement("a", {
                    onClick: this.onSelect.bind(this, t, r.key)
                }, r.name, n.createElement("i", {
                    className: "icon icon-done"
                }))));
            return i.length > 1 && $("#video_controller").attr("data-show", "true"),
            f = this.props.type ? "dropdown dropdown-" + this.props.type : "dropdown dropdown-view",
            n.createElement("div", {
                className: f
            }, n.createElement("div", {
                className: "btn",
                "data-toggle": "dropdown"
            }, this.props.type == "mini-streaming" ? n.createElement("i", {
                className: "icon icon-mini-channels"
            }) : n.createElement("span", {
                className: "btn_text"
            }, this.state.ChannelList[u].name)), n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, i))
        }
    }), it = n.createBackboneClass({
        info: null,
        getInitialState: function() {
            return this.GetChannelList = this.GetChannelList,
            this.GetInHouseUrl = this.GetInHouseUrl,
            this.info = this.props.info ? this.props.info : c.GetVideoInfo(this.props.Match),
            {
                ChannelList: this.GetChannelList(),
                isOpen: !1
            }
        },
        onSelect: function(n, t) {
            this.props.SelCallBack && this.props.SelCallBack(t, n)
        },
        GetChannelList: function() {
            var n = [], i = [t.LanguageHelper.Get("lbl_Source").format([1]), t.LanguageHelper.Get("lbl_Source").format([2])], r;
            return this.info && this.info.src == 13 ? (n.push({
                name: i[0],
                key: 13,
                index: 0
            }),
            n.push({
                name: i[1],
                key: 11,
                index: 1
            })) : (n.push({
                name: i[0],
                key: 11,
                index: 0
            }),
            r = this.GetInHouseUrl(),
            r != "" && n.push({
                name: i[1],
                key: 13,
                index: 1
            })),
            n
        },
        GetInHouseUrl: function() {
            var n = this.info.sid && this.info.sid != "0" ? this.info.sid : "", i;
            return n != "" && parseInt(n) >= 9900 && parseInt(n) <= 9999 ? (i = "M" + n + ".m3u8",
            t.SyncServer("Streaming/GetInHouseStreamingUrl", {
                protocol: location.protocol,
                sid: i
            }, function(n) {
                n.Data && (url = n.Data.url)
            }, !1),
            url) : ""
        },
        OpenClose: function() {
            this.setState({
                isOpen: !this.state.isOpen
            })
        },
        render: function() {
            for (var i, r = [], u = this.props.selectChannel, f = "dropdown dropdown-view" + (this.state.isOpen ? " open" : ""), t = 0; t < this.state.ChannelList.length; t++)
                i = this.state.ChannelList[t],
                r.push(n.createElement("li", {
                    key: t,
                    className: u == t ? "active" : ""
                }, n.createElement("a", {
                    onClick: this.onSelect.bind(this, t, i.key)
                }, i.name)));
            return n.createElement("div", {
                className: f,
                onClick: this.OpenClose
            }, n.createElement("div", {
                className: "btn btn-channel"
            }, n.createElement("i", {
                className: "icon icon-channels"
            })), n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, r))
        }
    }), rt = n.createBackboneClass({
        openStatisticInfo: function() {
            var n = this.props.Match
              , i = encodeURIComponent(t.LeagueNameRef.GetName(n.get("LeagueId")))
              , r = encodeURIComponent(t.TeamNameRef.GetName(n.get("TeamId1")))
              , u = encodeURIComponent(t.TeamNameRef.GetName(n.get("TeamId2")))
              , f = {
                matchId: n.get("MatchId"),
                league: i,
                home: r,
                away: u
            };
            s.OpenNewWindow("eSport", "es", f)
        },
        render: function() {
            var i = this.props.Match;
            return n.createElement("div", {
                className: "btn btn-statistics",
                onClick: this.openStatisticInfo
            }, n.createElement("i", {
                className: "icon icon-statistics"
            }), !c.HasVideo(i) && !c.HasGV(i) ? n.createElement("div", null, t.LanguageHelper.Get("lbl_Statistics")) : null)
        }
    }), nt = n.createBackboneClass({
        getInitialState: function() {
            var n = this.props.sportid == 161 || this.props.sportid == 164;
            return {
                hasVideo: !1,
                hasGV: !1,
                hasLS: !1,
                needDeposit: !1,
                currMode: 0,
                IsOpen: !0,
                IsShow: !0,
                IsPin: !1,
                IsNamberGame: n,
                OpenLobby: !n,
                IsOpenCopy: !1,
                IsMute: !1,
                IsOpenCh: !1,
                ShowEGamer: !1,
                channelKey: null,
                channelIndex: 0,
                isdoPlay: !1,
                HideTitle: !0
            }
        },
        lastScroll: 0,
        scrollEvent: function() {
            var t = this;
            t.ticking || (requestAnimationFrame(function() {
                if (a.get("IsBF"))
                    return null;
                if ($Scoller = $("#" + t.props.ScollId),
                $Scoller.scrollTop() <= t.lastScroll || $Scoller.scrollTop() == 0 ? ($Scoller.scrollTop() == 0 && $("#LobbyHead").attr("data-scrolltop", "true"),
                $("#LobbyHead").attr("data-showhead", "true")) : $Scoller.scrollTop() > t.lastScroll && $("#LobbyHead").removeAttr("data-showhead").removeAttr("data-scrolltop"),
                t.lastScroll = $Scoller.scrollTop(),
                $(".video").attr("data-status") != "is-close" && $(".video-wrapper").attr("data-pin") != "true") {
                    var i = "0px"
                      , r = $(n.findDOMNode(t.refs.video_container));
                    $Scoller.scrollTop() >= $(".video").height() && (i = $("#" + t.props.ScollId).height() - r.height() + "px",
                    r.height() == 0 ? i = "0px" : ($("#video_root").height($(".video").height()),
                    $(".video").attr("data-mini", "true")));
                    $Scoller.scrollTop() < 10 && $(".video").attr("data-mini") == "true" && ($("#video_root").removeAttr("style"),
                    $(".video").removeAttr("data-mini"),
                    i = "0px")
                }
                t.ticking = !1
            }),
            t.ticking = !0)
        },
        componentWillReceiveProps: function(n) {
            var i, t, e;
            if (n.match && n.match.get("MatchId") != this.props.match.get("MatchId")) {
                i = this;
                t = !1;
                typeof a.get("ActStatus") != "undefined" && a.get("ActStatus") != 1 && (t = n.match ? c.HasVideo(n.match) : !1);
                var r = n.match ? c.HasGV(n.match) : !1
                  , u = t ? 0 : r ? 1 : 0
                  , f = this.state.OpenLobby;
                this.state.currMode != u && (f = !0);
                e = n.match && n.match.get("GameID") == 2 ? n.match.get("ls") != null : !1;
                i.setState({
                    hasVideo: t,
                    hasGV: r,
                    hasLS: e,
                    currMode: u,
                    OpenLobby: f
                });
                $("#StreamingScoll").scrollTop(0)
            }
        },
        componentDidMount: function() {
            var u, f;
            t.EventHub.on("SwitchLobbyEvent_off", this.SwitchLobbyEvent, this);
            var n = this
              , i = this.props.match ? c.HasVideo(this.props.match) : !1
              , r = this.props.match ? c.HasGV(this.props.match) : !1
              , e = i ? 0 : r ? 1 : 0
              , o = this.props.match && this.props.match.get("GameID") == 2 ? this.props.match.get("ls") != null : !1;
            if (typeof a.get("ActStatus") == "undefined" ? n.setState({
                hasVideo: !1,
                hasGV: !1,
                hasLS: !1
            }) : typeof a.get("ActStatus") != "undefined" && a.get("ActStatus") == 1 ? (_,
            n.setState({
                hasVideo: !1,
                hasGV: !1,
                hasLS: !1
            })) : n.setState({
                hasVideo: i,
                hasGV: r,
                hasLS: o,
                currMode: e
            }),
            this.props.ScollId) {
                u = $("#" + this.props.ScollId);
                u.on("scroll", this.scrollEvent);
                this.scrollEvent()
            }
            f = window._EnableEGamer && this.props.match && this.props.match.get("GameID") == 43 && this.props.match.get("IsLive") && i;
            n.setState({
                ShowEGamer: f
            });
            t.EventHub.on("SwitchLobbyEvent_on", this.SwitchLobby, this);
            !~[90, -90].indexOf(window.orientation) || $("html").attr("data-addressbar-hidden", "true");
            window.addEventListener("orientationchange", this.orientationChange)
        },
        componentWillUnmount: function() {
            if (t.EventHub.off("SwitchLobbyEvent_off", this.SwitchLobbyEvent, this),
            t.EventHub.off("SwitchLobbyEvent_on", this.SwitchLobby, this),
            this.props.ScollId) {
                var n = $("#" + this.props.ScollId);
                n.off("scroll")
            }
            window.removeEventListener("orientationchange", this.orientationChange);
            window.orientation == 90 && $(".rotateDevice").addClass("in");
            window.orientation == -90 && $(".rotateDevice").addClass("in right")
        },
        orientationChange: function() {
            ~[90, -90].indexOf(window.orientation) ? ($("html").attr("data-addressbar-hidden", "true"),
            this.SwitchPin(!1)) : $("html").removeAttr("data-addressbar-hidden")
        },
        componentDidUpdate: function() {},
        SwitchModel: function(n) {
            n != this.state.currMode && (n == 1 || this.state.currMode == 0 ? this.setState({
                currMode: 1
            }) : (this.setState({
                currMode: 0
            }),
            $("html").removeAttr("data-video-type")))
        },
        SwitchOpen: function() {
            var n = !this.state.IsOpen;
            this.refs.VideoFrame && (n ? this.refs.VideoFrame.doPlay(!0) : this.refs.VideoFrame.doPlay(!1));
            this.setState({
                IsOpen: n
            })
        },
        onShow: function() {
            if (this.state.IsOpen && !this.state.IsShow) {
                var n = this;
                this.timer != null && clearTimeout(this.timer);
                this.timer = setTimeout(function() {
                    n.setState({
                        IsShow: !1
                    })
                }, 3e3);
                n.setState({
                    IsShow: !0
                })
            }
        },
        onSelectCH: function(n) {
            if (this.refs.NumberPlayer)
                this.refs.NumberPlayer.onSelectCH(n);
            else
                this.SelectCHTimer && clearTimeout(this.SelectCHTimer),
                this.SelectCHTimer = setTimeout(function() {
                    this.onSelectCH(n)
                }
                .bind(this), 100)
        },
        SwitchPin: function(t) {
            var i = !this.state.IsPin, r;
            typeof t == "boolean" && (i = t);
            i ? (r = $(n.findDOMNode(this.refs.video_container)),
            $(".video").removeAttr("data-mini"),
            r.css("transform", "trsnslated3d(0,0px,0)"),
            r.css("-webkit-transform", "translate3d(0,0px,0)")) : this.scrollEvent();
            this.setState({
                IsPin: i
            })
        },
        SwitchLobby: function(n) {
            var i = !this.state.OpenLobby;
            this.refs.VideoFrame && (i ? this.refs.VideoFrame.doPlay(!1) : this.refs.VideoFrame.doPlay(!0));
            t.EventHub.trigger("SwitchLobbyEvent_off", i);
            i && $("#video_root").removeAttr("style");
            this.setState({
                OpenLobby: i,
                currMode: i ? this.state.currMode : n,
                IsPin: !1
            })
        },
        backimg: function(n) {
            switch (n) {
            case 1:
                return "soccer";
            case 2:
                return "basketball";
            case 43:
                return "esport";
            case 5:
                return "tennis";
            case 8:
                return "baseball";
            case 9:
                return "badminton";
            case 3:
                return "football";
            case 50:
                return "cricket";
            default:
                return "other"
            }
        },
        OpenCopyright: function() {
            this.setState({
                IsOpenCopy: !this.state.IsOpenCopy
            })
        },
        SwitchMute: function() {
            this.refs.VideoFrame && this.refs.VideoFrame.SwitchMute()
        },
        MuteEvent: function(n) {
            this.setState({
                IsMute: n
            })
        },
        OpenEsportCh: function() {
            this.setState({
                IsOpenCh: !this.state.IsOpenCh
            })
        },
        openEGamer: function() {
            var n = window.localStorage.getItem("streaming_url"), t;
            n && (t = {
                sport: "43",
                routerkey: "#EGamer/m=" + this.props.match.get("MatchId") + "&s=" + encodeURIComponent(n)
            },
            s.OpenNewWindow("router", "EsportWeb", t, function(n) {
                UmCallback(name, n)
            }))
        },
        forceRefeshVideo: function() {
            t.EventHub.trigger("forceRefeshVideo")
        },
        isShowStreaming: function(n) {
            var t = /422840/.test(window._Mesid) || /424240/.test(window._Mesid);
            return n === 43 && t ? !1 : !0
        },
        onSelecteHandler: function(n, t) {
            this.setState({
                channelKey: n,
                channelIndex: t,
                isdoPlay: !0
            });
            this.refs.VideoFrame.doPlay(!1)
        },
        changeIsDoPlay: function() {
            this.setState({
                isdoPlay: !1
            })
        },
        SwitchLobbyEvent: function(n) {
            this.setState({
                HideTitle: n
            })
        },
        render: function() {
            var f, d, y, g, l;
            if (this.state.needDeposit)
                return n.createElement("div", {
                    className: "video"
                }, t.LanguageHelper.Get("lbl_StreamingDepositToView"));
            var o = null
              , r = this.props.match
              , s = this.props.sportid
              , p = this.props.Leagueid
              , w = !1
              , v = null
              , h = this.props.MatchHeaderView
              , u = c.GetVideoInfo(r);
            if (this.state.IsOpen)
                if (this.state.IsNamberGame) {
                    if (a.get("IsBF"))
                        return null;
                    o = n.createElement(b, {
                        ref: "NumberPlayer",
                        Leagueid: p
                    });
                    w = !0
                } else if (s = r.get("GameID"),
                c.HasStatisticInfo(r) && (v = n.createElement(rt, {
                    Match: r
                })),
                this.state.currMode == 1 && this.state.hasGV && this.state.IsOpen && !this.state.OpenLobby) {
                    f = "";
                    switch (r.get("GameID")) {
                    case 1:
                        f = "soccer";
                        break;
                    case 2:
                        f = "basketball";
                        break;
                    case 8:
                        f = "baseball";
                        break;
                    case 43:
                        f = "esport"
                    }
                    d = r.get("Neu") ? t.LanguageHelper.Get("Neutral_Team") : "";
                    o = n.createElement(tt, {
                        Matchid: r.get("MatchId"),
                        TeamId1: r.collection.GetTeamName(r.get("TeamId1")),
                        TeamId2: r.collection.GetTeamName(r.get("TeamId2")),
                        GameClass: f,
                        Language: a.get("Language"),
                        NeutralTeam: d
                    })
                }
            return this.state.currMode == 0 && this.state.hasVideo && (o = n.createElement(k, {
                ref: "VideoFrame",
                IsOpen: this.state.IsOpen && !this.state.OpenLobby,
                IsOpenCh: this.state.IsOpenCh,
                OpenEsportCh: this.OpenEsportCh,
                IsPin: this.state.IsPin,
                hasGV: this.state.hasGV,
                SwitchModel: this.SwitchModel,
                MuteEvent: this.MuteEvent,
                Match: r,
                SwitchPin: this.SwitchPin,
                SwitchLobby: this.SwitchLobby,
                VideoMatch: h,
                AutoPlay: !this.state.OpenLobby,
                channelKey: this.state.channelKey,
                isdoPlay: this.state.isdoPlay,
                changeIsDoPlay: this.changeIsDoPlay,
                info: u
            })),
            y = null,
            g = this.state.currMode == 0 ? "icon icon-gv" : "icon icon-tv",
            this.props.toogleVideoSidebar && (y = n.createElement("div", {
                className: "video_sidebar",
                role: "landscape-visible",
                "data-show": this.props.state.showVideoSideBar
            }, this.state.hasVideo && this.state.hasGV && n.createElement("div", {
                className: "btn",
                onClick: this.SwitchModel
            }, n.createElement("i", {
                className: g
            })), n.createElement("div", {
                className: "btn",
                "js-function-video-bet": "",
                onClick: this.props.toogleVideoSidebar.bind(null, "oddspage")
            }, n.createElement("i", {
                className: "icon icon-video-bet"
            })), n.createElement("div", {
                className: "btn",
                "js-function-mybets": "",
                onClick: this.props.toogleVideoSidebar.bind(null, "mybets")
            }, n.createElement("i", {
                className: "icon icon-mybets"
            })), this.state.currMode == 0 && n.createElement("div", {
                className: "btn btn-refresh",
                onClick: this.forceRefeshVideo
            }, n.createElement("i", {
                className: "icon icon-refresh-single"
            })), u && u.src == 13 && !u.fixing && this.state.currMode != 1 ? n.createElement(it, {
                SelCallBack: this.onSelecteHandler,
                Match: r,
                info: u,
                selectChannel: this.state.channelIndex
            }) : null)),
            l = !this.state.OpenLobby && this.state.currMode != 1 && u && u.fixing,
            n.createElement("div", {
                className: "video-wrapper",
                "data-pin": this.state.IsPin ? "true" : ""
            }, n.createElement("div", {
                id: "LobbyHead",
                className: "video_head",
                "data-intv": this.state.HideTitle ? "" : "true"
            }, n.createElement("div", {
                id: "btnback",
                className: "btn btn-back",
                onClick: this.props.ReturnBack
            }, n.createElement("i", {
                className: "icon icon-back"
            })), n.createElement(et, {
                canSwitch: this.state.hasVideo && this.state.hasGV,
                SwitchModel: this.SwitchModel,
                currMode: this.state.currMode,
                IsOpen: this.state.IsOpen,
                SwitchOpen: this.SwitchOpen,
                IsShow: this.state.IsShow,
                OpenChannel: w,
                onSelectCH: this.onSelectCH,
                onSelecteHandler: this.onSelecteHandler,
                Leagueid: p,
                InfoCom: v,
                SwitchPin: this.SwitchPin,
                SwitchLobby: this.SwitchLobby,
                sportid: s,
                OpenEsportCh: this.OpenEsportCh,
                ShowEGamer: this.state.ShowEGamer,
                OpenEGamer: this.openEGamer,
                Match: r,
                info: u,
                selectChannel: this.state.channelIndex,
                IsPin: this.state.IsPin
            }), h ? n.createElement(h, {
                key: r.get("MatchId"),
                model: r,
                IsMini: !0
            }) : null), n.createElement("div", {
                id: "video_root",
                className: "video " + this.backimg(s),
                "data-status": this.state.IsOpen ? "" : "is-close",
                "data-mini": !1,
                "data-lobby": this.state.OpenLobby ? "true" : "",
                "data-channels": this.state.IsOpenCh ? "true" : "false",
                "data-streaming-fixing": l
            }, n.createElement(i.StreamingFixing, {
                show: l
            }), n.createElement("div", {
                ref: "video_container",
                className: "video_container"
            }, y, n.createElement("div", {
                className: "video_view"
            }, n.createElement("div", {
                className: "btn btn-close",
                onClick: this.SwitchLobby
            }, n.createElement("i", {
                className: "icon icon-clear"
            })), l ? null : o)), n.createElement("div", {
                className: "video_lobby"
            }, this.state.hasLS ? n.createElement(ft, {
                model: r
            }) : null, !this.state.hasLS && !this.state.IsNamberGame ? n.createElement(h, {
                key: r ? r.get("MatchId") : "nomatch",
                model: r
            }) : null, this.state.hasVideo && u && u.src == 13 ? n.createElement("div", {
                className: "btn btn-mute",
                "data-status": this.state.IsMute ? "is-active" : "",
                onClick: this.SwitchMute
            }, n.createElement("i", {
                className: "icon icon-volume-on"
            })) : null, a.get("IsBF") ? null : n.createElement(e.MyFav, {
                type: "match",
                model: r
            }), n.createElement("div", {
                className: "video_play"
            }, this.state.hasVideo && this.isShowStreaming(s) ? n.createElement("div", {
                className: "btn",
                onClick: this.SwitchLobby.bind(this, 0)
            }, n.createElement("i", {
                className: "icon icon-tv"
            }), n.createElement("div", {
                className: "btn_text"
            }, t.LanguageHelper.Get("LiveStreaming"))) : null, this.state.hasGV ? n.createElement("div", {
                className: "btn",
                onClick: this.SwitchLobby.bind(this, 1)
            }, n.createElement("i", {
                className: "icon icon-gv"
            }), n.createElement("div", {
                className: "btn_text"
            }, t.LanguageHelper.Get("LiveMatch"))) : null, !this.state.hasVideo && !this.state.hasGV ? v : null))))
        }
    }), ut = n.createBackboneClass({
        getInitialState: function() {
            return {
                MatchList: this.CreateList(),
                IsOpen: !0
            }
        },
        componentDidMount: function() {
            this.state.MatchList.length > 0 && this.state.IsOpen ? $("body").attr("data-switchmatch", "true") : $("body").removeAttr("data-switchmatch");
            t.EventHub.on("MatchBar_ShowHide", this.ShowHideEvent, this);
            setTimeout(function() {
                for (var n = 0; n < this.state.MatchList.length; n++)
                    if (this.state.MatchList[n].get("MatchId") == this.props.Match.get("MatchId")) {
                        this.SelectMatch(n, 0, !0);
                        break
                    }
            }
            .bind(this), 100)
        },
        componentWillUnmount: function() {
            $("body").removeAttr("data-switchmatch");
            t.EventHub.off("MatchBar_ShowHide", this.ShowHideEvent, this)
        },
        componentWillUpdate: function(n, t) {
            t.MatchList = this.CreateList()
        },
        componentDidUpdate: function() {
            this.state.MatchList.length > 0 && this.state.IsOpen ? $("body").attr("data-switchmatch", "true") : $("body").removeAttr("data-switchmatch");
            $(".comparlay_bar").attr("data-status") == "is-open" ? $("body").attr("data-parlaybar", "true") : $("body").removeAttr("data-parlaybar")
        },
        CreateList: function() {
            var n = [];
            return this.getCollection().map(function(t) {
                c.HasVideo(t) && (t.get("BetTypes").length == 0 && t.GetBetyypes(),
                n.push(t),
                lastmatchid = t.get("MatchId"))
            }),
            (n.length == 0 || n.length == 1 && lastmatchid == this.props.Match.get("MatchId")) && (n = []),
            n
        },
        ShowHideEvent: function(n) {
            this.setState({
                IsOpen: n
            })
        },
        SelectMatch: function(n, t, i) {
            this.refs.reactList && this.refs.reactList.scrollTo(n, !i)
        },
        renderItem: function(t) {
            var r = this.props.MatchBarPanel
              , u = t > this.state.MatchList.length - 1 ? t % this.state.MatchList.length : t
              , i = this.state.MatchList[u];
            return n.createElement(r, {
                ref: "m_" + i.get("MatchId"),
                key: t + "_" + i.get("MatchId"),
                indexKey: t,
                model: i,
                IsSelect: this.props.Match.get("MatchId") == i.get("MatchId"),
                SelectMatch: this.SelectMatch
            })
        },
        itemsRenderer: function(t, i) {
            return n.createElement("div", {
                ref: i,
                className: "match-bar_container"
            }, t)
        },
        scrollParent: function() {
            return n.findDOMNode(this.refs.scroller)
        },
        Switch: function() {
            this.setState({
                IsOpen: !this.state.IsOpen
            })
        },
        render: function() {
            var t = this.state.MatchList, i;
            return t.length == 0 ? null : (i = t.length > 1 ? 300 : t.length,
            n.createElement("div", {
                className: "match-bar",
                "data-status": this.state.IsOpen ? "is-open" : "",
                "data-more": i > 1 ? "true" : ""
            }, n.createElement("div", {
                ref: "scroller",
                className: "match-bar_scroller"
            }, n.createElement(f, {
                ref: "reactList",
                axis: "x",
                itemRenderer: this.renderItem,
                length: i,
                type: "uniform",
                itemsRenderer: this.itemsRenderer
            })), n.createElement("div", {
                className: "match-bar_float"
            }, n.createElement("div", {
                className: "btn btn-match-hide",
                onClick: this.Switch
            }, n.createElement("div", {
                className: "btn_text"
            }, n.createElement("i", {
                className: "icon icon-clear"
            }))), this.state.IsOpen ? null : n.createElement("div", {
                className: "btn btn-match-show",
                onClick: this.Switch
            }, n.createElement("div", {
                className: "btn_text"
            }, t.length)))))
        }
    }), kr = n.createBackboneClass({
        getInitialState: function() {
            return {
                HideTitle: !0
            }
        },
        componentDidMount: function() {
            t.EventHub.on("SwitchLobbyEvent_off", this.SwitchLobbyEvent, this)
        },
        componentWillUnmount: function() {
            t.EventHub.off("SwitchLobbyEvent_off", this.SwitchLobbyEvent, this)
        },
        SwitchLobbyEvent: function(n) {
            this.setState({
                HideTitle: n
            })
        },
        BackEvent: function() {
            this.props.ReturnBack()
        },
        render: function() {
            var i = this.props.VideoMatch;
            return n.createElement("div", {
                id: "LobbyHead",
                className: "video_head",
                "data-intv": this.state.HideTitle ? "" : "true"
            }, n.createElement("div", {
                id: "btnback",
                className: "btn btn-back",
                onClick: this.BackEvent,
                "data-move": "down"
            }, n.createElement("i", {
                className: "icon icon-back"
            })), n.createElement("div", {
                className: "video_head_league"
            }, t.LeagueNameRef.GetName(this.props.Match.get("LeagueId"))), i ? n.createElement(i, {
                key: this.props.Match.get("MatchId"),
                model: this.props.Match,
                IsMini: !0
            }) : null)
        }
    }), ft = n.createBackboneClass({
        changeOptions: "change:ls change:ltm",
        componentDidMount: function() {
            t.EventHub.on("clearPriceStatus", this.update, this)
        },
        componentWillUnmount: function() {
            t.EventHub.off("clearPriceStatus", this.update, this)
        },
        update: function() {
            this.forceUpdate()
        },
        Score: function(n, t, i) {
            return parseInt(n) > t ? i : "-"
        },
        render: function() {
            var r = this.getModel()
              , i = r.get("ls");
            if (!i)
                return null;
            var u = parseInt(i.h1q) + parseInt(i.h2q)
              , f = parseInt(i.a1q) + parseInt(i.a2q)
              , o = u + parseInt(i.h3q) + parseInt(i.h4q) + parseInt(i.hot)
              , s = f + parseInt(i.a3q) + parseInt(i.a4q) + parseInt(i.aot)
              , h = r.get("Neu") ? t.LanguageHelper.Get("Neutral_Team") : "";
            return !r.collection || !r.collection.GetTeamName ? null : n.createElement("div", {
                className: "numberboard"
            }, n.createElement("div", {
                className: "numberboard_stat"
            }, n.createElement("div", {
                className: "numberboard_time"
            }, n.createElement(e.LiveTimerDiv, {
                match: r
            })), n.createElement("div", {
                className: "numberboard_match"
            }, n.createElement("div", {
                className: "numberboard_team"
            }, n.createElement(e.LogoIcon, {
                key: r.get("TeamId1"),
                IconID: r.get("TeamId1"),
                type: "H"
            }), n.createElement("div", {
                className: "numberboard_teamname"
            }, r.collection.GetTeamName(r.get("TeamId1")) + h)), n.createElement("div", {
                className: "numberboard_team"
            }, n.createElement(e.LogoIcon, {
                key: r.get("TeamId2"),
                IconID: r.get("TeamId2"),
                type: "A"
            }), n.createElement("div", {
                className: "numberboard_teamname"
            }, r.collection.GetTeamName(r.get("TeamId2")))))), n.createElement("div", {
                className: "numberboard_score"
            }, n.createElement(w, {
                H: this.Score(i.llp, 0, i.h1q),
                A: this.Score(i.llp, 0, i.a1q),
                Title: t.LanguageHelper.Get(i._gs != "4" ? "lbl_1H" : "livescoreHeader_1Q"),
                IsActive: i.llp == "1"
            }), n.createElement(w, {
                H: this.Score(i.llp, 1, i.h2q),
                A: this.Score(i.llp, 1, i.a2q),
                Title: t.LanguageHelper.Get(i._gs != "4" ? "lbl_2H" : "livescoreHeader_2Q"),
                IsActive: i.llp == "2"
            }), i._gs != "4" ? null : n.createElement(w, {
                H: u,
                A: f,
                Title: t.LanguageHelper.Get("scoremapHT"),
                IsActive: !1
            }), i._gs != "4" ? null : n.createElement(w, {
                H: this.Score(i.llp, 2, i.h3q),
                A: this.Score(i.llp, 2, i.a3q),
                Title: t.LanguageHelper.Get("livescoreHeader_3Q"),
                IsActive: i.llp == "3"
            }), i._gs != "4" ? null : n.createElement(w, {
                H: this.Score(i.llp, 3, i.h4q),
                A: this.Score(i.llp, 3, i.a4q),
                Title: t.LanguageHelper.Get("livescoreHeader_4Q"),
                IsActive: i.llp == "4"
            }), n.createElement(w, {
                H: this.Score(i.llp, 98, i.hot),
                A: this.Score(i.llp, 98, i.aot),
                Title: t.LanguageHelper.Get("livescoreHeader_OT"),
                IsActive: i.llp == "99"
            }), n.createElement(w, {
                H: o,
                A: s,
                Title: t.LanguageHelper.Get("scoremapFT"),
                IsActive: !1
            })))
        }
    }), w = n.createBackboneClass({
        getInitialState: function() {
            return {
                Hchg: !1,
                Achg: !1
            }
        },
        componentWillReceiveProps: function(n) {
            this.setState({
                Hchg: n.H != this.props.H,
                Achg: n.A != this.props.A
            })
        },
        render: function() {
            return n.createElement("div", {
                className: "score_item",
                "data-status": this.props.IsActive ? "is-active" : ""
            }, n.createElement("div", {
                className: "score_title"
            }, this.props.Title), n.createElement("div", {
                className: "score_number" + (this.state.Hchg ? " is-changing" : "")
            }, this.props.H), n.createElement("div", {
                className: "score_number" + (this.state.Achg ? " is-changing" : "")
            }, this.props.A))
        }
    }), et = n.createBackboneClass({
        render: function() {
            var r = this.props.currMode == 0 ? t.LanguageHelper.Get("sm4") : t.LanguageHelper.Get("sm1")
              , u = this.props.sportid == 161 || this.props.sportid == 164
              , i = this.props.sportid == 43;
            return n.createElement("div", {
                className: "video_head_league"
            }, n.createElement("span", {
                className: "video_head_league_name"
            }, t.LeagueNameRef.GetName(this.props.Match.get("LeagueId"))), this.props.InfoCom, this.props.ShowEGamer ? n.createElement("div", {
                className: "btn btn-egamer",
                onClick: this.props.OpenEGamer
            }, n.createElement("i", {
                className: "icon icon-egamer"
            })) : null, i ? n.createElement("div", {
                className: "btn btn-channels",
                onClick: this.props.OpenEsportCh
            }, n.createElement("i", {
                className: "icon icon-channels"
            })) : null, this.props.canSwitch ? n.createElement("div", {
                className: "btn btn-switch-video",
                "data-status": this.props.currMode == 0 ? "is-active" : "",
                onClick: this.props.SwitchModel.bind(null, 0)
            }, n.createElement("i", {
                className: "icon icon-tv"
            })) : null, this.props.canSwitch ? n.createElement("div", {
                className: "btn btn-switch-video",
                "data-status": this.props.currMode == 1 ? "is-active" : "",
                onClick: this.props.SwitchModel.bind(null, 1)
            }, n.createElement("i", {
                className: "icon icon-gv"
            })) : null, this.props.Match.get("GameID") == 2 ? n.createElement("div", {
                className: "btn btn-score-board",
                onClick: this.props.SwitchLobby
            }, n.createElement("i", {
                className: "icon icon-live-score"
            })) : null, this.props.OpenChannel ? n.createElement(d, {
                SelCallBack: this.props.onSelectCH,
                Leagueid: this.props.Leagueid
            }) : null, this.props.info && this.props.info.src == 13 && !this.props.info.fixing && this.props.currMode != 1 ? n.createElement(g, {
                SelCallBack: this.props.onSelecteHandler,
                Match: this.props.Match,
                info: this.props.info,
                selectChannel: this.props.selectChannel
            }) : null, n.createElement("div", {
                className: "btn btn-close-video",
                onClick: this.props.SwitchOpen,
                "data-status": this.props.IsOpen ? "" : "is-close"
            }, n.createElement("i", {
                className: "icon icon-arrow-top"
            })), n.createElement("div", {
                className: "btn btn-pin-video",
                onClick: this.props.SwitchPin,
                "data-pin": this.props.IsPin ? "true" : ""
            }, n.createElement("i", {
                className: "icon icon-pin"
            })))
        }
    }), ot = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsLoading: this.props.Match.get("Moc") > 0 && this.props.Match.get("GameID") != 5 && !this.props.Match.get("MoreBetType").get("Hassync"),
                showOddsPage: !1,
                showVideoSideBar: !!(a.get("WB") == 1 && u.get("BetMode") != "p" && this.props.Match.get("GameID") != 43) && !window._EuroView
            }
        },
        ReturnBack: function() {
            $("html").removeAttr("data-single-match");
            $("#visualizationPanel").removeAttr("data-status");
            $("body").removeAttr("data-status");
            n.unmountComponentAtNode($("#visualizationPanel")[0]);
            this.props.CloseBack && this.props.CloseBack()
        },
        previousUrl: "",
        componentWillUnmount: function() {
            this.resizeTimer && clearTimeout(this.resizeTimer);
            t.EventHub.off("doFunc-GameVisualization");
            t.EventHub.off("doFunc-CloseSingle", this.ReturnBack, this);
            s.off("route", this.ReturnBack, this);
            t.EventHub.off("toogleVideoSideBar", this.toogleVideoSidebar)
        },
        componentWillMount: function() {
            this.CurrIsVideo = this.props.IsVideo
        },
        componentDidUpdate: function(n) {
            n.Match.get("MatchId") != this.props.Match.get("MatchId") && this.props.Match.get("MoreBetType").syncData(function() {
                this.setState({
                    IsLoading: !1
                })
            }
            .bind(this))
        },
        componentDidMount: function() {
            var n, i, r;
            y.GoToTopView(".page-singleMatch", "#singleMatch");
            t.EventHub.on("doFunc-GameVisualization", function() {
                $("#visualizationPanel").modal("show")
            });
            t.EventHub.on("doFunc-CloseSingle", this.ReturnBack, this);
            this.oddsPanelTop();
            n = $(".streamingPanel .main-bar");
            i = n.children(".tool-group").width();
            n.children(".title").css("padding-right", i);
            r = this;
            this.state.IsLoading && this.props.Match.get("MoreBetType").syncData(function() {
                r.setState({
                    IsLoading: !1
                })
            });
            s.on("route", this.ReturnBack, this);
            t.EventHub.on("toogleVideoSideBar", this.toogleVideoSidebar)
        },
        switchFrame: function() {
            this.CurrIsVideo == null ? this.CurrIsVideo = this.props.IsVideo : (this.CurrIsVideo = null,
            this.refs.VideoFrame && this.refs.VideoFrame.GetChannelIndex && (this.ChannelIndex = this.refs.VideoFrame.GetChannelIndex()));
            this.forceUpdate()
        },
        oddsPanelTop: function() {
            var t;
            if (this.GvFrameHeight != $(".video-block").height()) {
                console.log("@@@@ oddsPanelTop @@@@");
                var i = this.props.IsVideo ? ".streamingPanel .header" : ".gameVisualPanel .header"
                  , r = this.props.IsVideo ? ".streamingPanel .content-scroller" : ".gameVisualPanel .content-scroller"
                  , n = $(i).height() + $(".video-block").height();
                this.props.IsLucky3 && (t = $(".streamingPanel .lotto-quick-pick").innerHeight(),
                $(".streamingPanel .lotto-quick-pick").css("top", n),
                n += t);
                $(r).css("top", n);
                this.GvFrameHeight = $(".video-block").height()
            }
            this.resizeTimer && clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(this.oddsPanelTop, 100)
        },
        refresh: function(n) {
            var t = $(n.currentTarget);
            t.hasClass("active") || (this.CurrIsVideo == !0 && this.refs.VideoFrame.refresh(),
            this.CurrIsVideo == !1 && p && p.gvreload(),
            t.toggleClass("active"),
            setTimeout(function() {
                t.toggleClass("active")
            }, 5e3))
        },
        toogleVideoSidebar: function(n) {
            var t = this.state.showOddsPage;
            n == "sidebar" ? t = !1 : n == "oddspage" ? t = !0 : n == "mybets" && require("MyBetsModular").showStatement("run", "w", !1, !0);
            this.setState({
                showVideoSideBar: a.get("WB") == 1 && u.get("BetMode") != "p" && this.props.Match.get("GameID") != 43 && n == "sidebar" && !window._EuroView,
                showOddsPage: t
            })
        },
        render: function() {
            var t = this.props.Match, r = null, f = t.get("GameID"), e = f == 43, i;
            return typeof this.props.selectTab == "string" && (r = parseInt(this.props.selectTab, 10)),
            a.get("IsNewStyle") ? (i = c.get("MatchCollection"),
            c.LiveMarket ? i = c.LiveMarket.get("MarketCollection").at(0).get("MatchCollection") : c.get("sportId") == 9999 && (i = c.GetSportLive(f).at(0).get("MatchCollection")),
            n.createElement("div", {
                className: "compage",
                "data-status": "is-open"
            }, n.createElement("div", {
                id: "StreamingScoll",
                className: "compage_content",
                "data-oddspage-open": this.state.showOddsPage
            }, n.createElement(nt, {
                match: t,
                ScollId: "StreamingScoll",
                ReturnBack: this.ReturnBack,
                MatchHeaderView: this.props.MatchHeaderView,
                toogleVideoSidebar: this.toogleVideoSidebar,
                state: this.state
            }), this.state.IsLoading ? n.createElement(st, null) : n.createElement(ct, {
                key: t.get("MatchId"),
                model: t,
                MatchView: this.props.MatchView,
                IsNGPlayer: this.props.IsNGPlayer,
                defTab: r
            })), !e && t.get("MaT") == "l" && !!this.props.MatchBarPanel ? n.createElement(ut, {
                collection: i,
                model: u,
                MatchBarPanel: this.props.MatchBarPanel,
                Match: t
            }) : null)) : void 0
        }
    }), st = n.createBackboneClass({
        render: function() {
            return n.createElement("div", {
                className: "ui_tmpl"
            }, n.createElement("div", {
                className: "preloader preloader-full"
            }, n.createElement("div", {
                className: "preloader_spiner"
            }, n.createElement("div", {
                className: "preloader_circles"
            }, n.createElement("div", {
                className: "preloader_circle-1"
            }), n.createElement("div", {
                className: "preloader_circle-2"
            })))))
        }
    }), fu = n.createBackboneClass({
        changeOptions: "change:BetCredit",
        render: function() {
            var i = window._EnableCurrencyDisplay == !0 ? this.getModel().get("Currency") + " " + this.getModel().get("BetCredit") : this.getModel().get("BetCredit");
            return n.createElement("div", {
                className: "page_header"
            }, n.createElement("div", {
                className: "header_status"
            }, n.createElement("div", {
                className: "text-balance"
            }, i)), n.createElement("div", {
                className: "main-bar"
            }, n.createElement("div", {
                className: "btn",
                onClick: this.props.ReturnBack
            }, n.createElement("i", {
                className: "icon icon-back"
            })), n.createElement("div", {
                className: "title"
            }, t.LanguageHelper.Get("matchC"))))
        }
    }), eu = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsOpenOther: !1
            }
        },
        OpenOther: function() {
            this.setState({
                IsOpenOther: !this.state.IsOpenOther
            })
        },
        changeOptions: "change:BetCredit",
        render: function() {
            var i = this.props.MatchHeaderView;
            return n.createElement("div", {
                className: "compage_header",
                "data-status": "is-open"
            }, n.createElement("div", {
                className: "compage_row"
            }, n.createElement("div", {
                className: "btn",
                onClick: this.props.ReturnBack
            }, n.createElement("i", {
                className: "icon icon-back"
            })), n.createElement("div", {
                className: "compage_league",
                onClick: this.OpenOther
            }, n.createElement("div", {
                className: "btn"
            }, n.createElement("div", {
                className: "btn_text"
            }, t.LeagueNameRef.GetName(this.props.Match.get("LeagueId"))), n.createElement("i", {
                className: "icon icon-arrow-bottom"
            }))), this.state.IsOpenOther ? n.createElement(ht, {
                Match: this.props.Match,
                CloseBack: this.props.CloseBack,
                LeagueCollection: this.props.LeagueCollection,
                MatchHeaderView: i,
                onClose: this.OpenOther
            }) : null), n.createElement("div", {
                className: "compage_match"
            }, n.createElement(i, {
                model: this.props.Match,
                onOpenOther: this.OpenOther
            })))
        }
    }), ht = n.createBackboneClass({
        getInitialState: function() {
            return {
                View: this.CreateView()
            }
        },
        componentDidMount: function() {
            $(document.body).on("touchstart", this.onBlurHandler)
        },
        componentWillUnmount: function() {
            $(document.body).off("touchstart", this.onBlurHandler)
        },
        onBlurHandler: function(t) {
            t && ($.contains(n.findDOMNode(this), t.target) || $.contains($(".compage_league")[0], t.target)) || ($(document.body).off("touchstart", this.onBlurHandler),
            this.props.onClose())
        },
        CreateView: function() {
            var t = this.props.Match
              , u = this.props.MatchHeaderView
              , i = this.props.LeagueCollection
              , r = []
              , f = i.where ? i.where({
                LeagueId: t.get("LeagueId")
            }) : _.where(i, function(n) {
                return n.get("LeagueId") == t.get("LeagueId")
            })
              , e = this;
            return f.map(function(f) {
                f.get("MatchList").findWhere({
                    MatchId: t.get("MatchId")
                }) && f.get("MatchList").map(function(f) {
                    r.push(n.createElement(u, {
                        model: f,
                        CloseBack: e.props.CloseBack,
                        hasLink: !0,
                        LeagueCollection: i,
                        IsActive: f.get("MatchId") == t.get("MatchId")
                    }))
                })
            }),
            r
        },
        render: function() {
            var t = this.state.View;
            return t.length == 0 ? null : n.createElement("div", {
                className: "compage_teammenu",
                "data-status": "is-open"
            }, t)
        }
    }), ct = n.createBackboneClass({
        getInitialState: function() {
            return {
                Match: this.getModel(),
                MatchId: this.getModel().get("MatchId"),
                noMatch: !1,
                IsLoading: !1
            }
        },
        componentWillUnmount: function() {},
        componentDidMount: function() {},
        changeMatch: function() {},
        refresh: function(n) {
            var t = $(n.currentTarget);
            t.hasClass("active") || (t.toggleClass("active"),
            c.Updata(function() {
                t.toggleClass("active")
            }))
        },
        changeGameType: function(n) {
            var i = this;
            l.SelectItem(n);
            t.EventHub.once("moveTomatch", function() {
                var n = c.get("MatchCollection").findWhere({
                    MatchId: i.state.MatchId
                });
                n == undefined ? i.setState({
                    noMatch: !0
                }, function() {
                    i.setState({
                        IsLoading: !1
                    })
                }) : (t.EventHub.trigger("openLeague-" + n.get("LeagueId"), n.get("MatchId")),
                n.get("MoreBetType").get("Hassync") == !1 && n.get("MoreBetType").syncData(function() {
                    i.setState({
                        Match: n,
                        noMatch: !1
                    }, function() {
                        i.setState({
                            IsLoading: !1
                        })
                    })
                }))
            });
            i.setState({
                IsLoading: !0
            })
        },
        render: function() {
            var i = this.state.Match;
            if (i == null)
                return n.createElement("div", {
                    className: "content-scroller"
                }, n.createElement("div", {
                    className: "panel panel-default fill nodataPanel"
                }, n.createElement("div", {
                    className: "panel-body"
                }, n.createElement("a", {
                    className: "btn btn-refresh",
                    role: "button",
                    onClick: this.refresh
                }, n.createElement("i", {
                    className: "icon icon-refresh"
                })), n.createElement("p", null, t.LanguageHelper.Get("nogame2")))));
            var r = i.get("MatchId")
              , u = new Backbone.Model({
                LeagueId: r,
                Index: r,
                hasLive: i.get("IsLive"),
                CCode: i.get("CCode"),
                GTY: i.get("GTY"),
                MatchList: new Backbone.Collection([i]),
                GameID: r
            })
              , f = this.props.MatchView
              , e = c.get("Gametype") ? "_" + c.get("Gametype") : "";
            return n.createElement(f, {
                key: i.get("MatchId") + "_" + i.get("GameID") + e,
                model: u,
                IsSingleModel: !0,
                defTab: this.props.defTab,
                changeGameType: this.changeGameType,
                noMatch: this.state.noMatch,
                IsLoading: this.state.IsLoading
            })
        }
    });
    return {
        GameVisualization: ot,
        Streaming: nt,
        VideoFrame: k,
        NumberGameFrame: b,
        ChannelSelect: d,
        GLiveChannelSelect: g
    }
});
define("Commponent/ch_SearchResultView", ["react", "common", "SearchModel", "router", "react.backbone"], function(n, t, i, r) {
    var u = n.createBackboneClass({
        componentWillMount: function() {
            i.resetAll()
        },
        componentDidMount: function() {
            $("body").attr("data-status", "is-page-open")
        },
        onClose: function() {
            i.set({
                input: ""
            });
            i.get("Result").Clear();
            $("body").attr("data-status", "");
            n.unmountComponentAtNode($("#SearchPanel")[0])
        },
        render: function() {
            return n.createElement("div", {
                id: "panelSearch",
                className: "page page-search",
                "data-status": "is-open"
            }, n.createElement(s, {
                model: i,
                onClose: this.onClose
            }), n.createElement("div", {
                className: "page_content"
            }, n.createElement("div", {
                className: "search search-result"
            }, n.createElement(f, {
                collection: i.get("Result")
            }), n.createElement(e, {
                collection: i.get("Result"),
                onClose: this.onClose
            }))))
        }
    })
      , f = n.createBackboneClass({
        render: function() {
            var t = this.getCollection().length;
            return t == 0 ? n.createElement("div", null) : n.createElement("div", {
                className: "search_head"
            }, n.createElement("span", {
                className: "search_text"
            }, t, " results"))
        }
    })
      , e = n.createBackboneClass({
        SelectMatch: function(n) {
            require("OddsModel").set({
                IsFav: !1
            });
            var t = n.get("SportType") == 999 ? "e" : n.get("Market");
            r.navigate("Sports/s=" + n.get("SportType") + "&d=" + t + "&l=" + n.get("LeagueID") + "&m=" + n.get("MatchID"), {
                trigger: !0
            });
            this.props.onClose && this.props.onClose()
        },
        render: function() {
            var i = this.getCollection().map(function(i) {
                var o = i.get("SportType"), u = i.get("MatchName").split("-vs-"), r = [], f, e;
                return r.push(n.createElement("span", {
                    className: "team-name team-home"
                }, u[0])),
                u.length > 1 && (r.push(n.createElement("span", {
                    className: "text-vs"
                }, "v")),
                r.push(n.createElement("span", {
                    className: "team-name team-away"
                }, u[1]))),
                f = i.get("Market"),
                e = f == "l" ? t.LanguageHelper.Get("live") : f == "t" ? t.LanguageHelper.Get("lbl_today") : t.LanguageHelper.Get("lbl_early"),
                n.createElement("div", {
                    className: "search_result touch",
                    onClick: this.SelectMatch.bind(this, i)
                }, n.createElement("div", {
                    className: "search_item"
                }, n.createElement("span", {
                    className: "search_bettype"
                }, i.get("SportName"))), n.createElement("div", {
                    className: "search_item"
                }, n.createElement("div", {
                    className: "search_from"
                }, n.createElement("div", {
                    className: "search_match"
                }, n.createElement("span", {
                    className: "search_text"
                }, r)), n.createElement("div", {
                    className: "search_league"
                }, n.createElement("span", {
                    className: "search_text"
                }, i.get("LeagueName")))), n.createElement("div", {
                    className: "search_option"
                }, n.createElement("i", {
                    className: "icon icon-arrow-right"
                }))), n.createElement("div", {
                    className: "search_item"
                }, n.createElement("div", {
                    className: "label label-market"
                }, n.createElement("span", null, e)), n.createElement("span", {
                    className: "search_time"
                }, i.get("KickOffTime"))))
            }
            .bind(this));
            return n.createElement("div", {
                className: "search_content"
            }, i)
        }
    })
      , o = n.createBackboneClass({
        handleClick: function(n) {
            this.props.handleClick(n)
        },
        render: function() {
            var t = this.getCollection().map(function(t) {
                return n.createElement("li", {
                    style: {
                        cursor: "pointer"
                    }
                }, n.createElement("a", {
                    onClick: this.handleClick.bind(this, t.get("txt"))
                }, t.get("txt")))
            }
            .bind(this));
            return t.length == 0 ? n.createElement("div", null) : n.createElement("ul", {
                className: "dropdown-menu",
                role: "menu"
            }, t)
        }
    })
      , s = n.createBackboneClass({
        componentDidMount: function() {
            this.refs.field.getDOMNode ? this.refs.field.getDOMNode().focus() : $("#InputSearch").focus()
        },
        componentWillUnmount: function() {
            r.SubFuncToback("Search")
        },
        componentDidUpdate: function() {},
        handleChange: function() {
            this.getModel().set({
                input: n.findDOMNode(this.refs.field).value
            })
        },
        handleClick: function(n) {
            this.getModel().Select(n)
        },
        load: function() {
            this.getModel().Load();
            $("#iconleft").attr("data-status", "is-focus")
        },
        Close: function() {
            $("#panelSearch").modal("hide");
            $(".page-search").attr("data-status", "");
            this.getModel().set({
                input: ""
            });
            this.getModel().get("Result").Clear()
        },
        Clear: function() {
            $(".textfield_input").val("");
            $("#iconleft").removeAttr("data-status")
        },
        render: function() {
            var i = this.getModel();
            return n.createElement("div", {
                className: "page_header"
            }, n.createElement("div", {
                className: "main-bar main-bar-search"
            }, n.createElement("div", {
                className: "dropdown open"
            }, n.createElement("div", {
                id: "iconleft",
                className: "textfield textfield--iconleft",
                "data-status": "is-focus"
            }, n.createElement("i", {
                className: "icon icon-search"
            }), n.createElement("input", {
                id: "InputSearch",
                className: "textfield_input",
                ref: "field",
                onFocus: this.load,
                onChange: this.handleChange,
                type: "text",
                value: i.get("input"),
                placeholder: t.LanguageHelper.Get("leagueOrMatch")
            }), n.createElement("div", {
                className: "btn btn-cancel",
                onClick: this.Clear
            }, n.createElement("i", {
                className: "icon icon-cancel"
            }))), n.createElement(o, {
                collection: i.get("AutoCompl"),
                handleClick: this.handleClick
            }), n.createElement("div", {
                className: "btn",
                onClick: this.props.onClose
            }, t.LanguageHelper.Get("lbl_cancel"), " "))))
        }
    });
    return u
});
define("Commponent/ch_selectleagueView", ["react", "common", "router", "GoToTop", "BetTypeSetting", "OddsModel", "MenuModel", "react.backbone"], function(n, t, i, r, u, f, e) {
    var o = n.createBackboneClass({
        GetSportName: function(n) {
            var i = e.get("Sport").GetSportName(n);
            return i || (i = t.LeagueNameRef.GetName("G" + n)),
            i
        },
        render: function() {
            var t, r = this, u = _.map(this.props.LeagueList, function(i) {
                return t = i.gameid,
                n.createElement(s, {
                    key: i.id,
                    onSelestEvent: r.props.onSelestEvent,
                    data: i
                })
            }), i;
            return t == undefined && (t = f.get("sportId")),
            i = this.GetSportName(t),
            n.createElement("div", {
                className: "selected"
            }, n.createElement("div", {
                className: "selected_header"
            }, n.createElement("i", {
                className: "icon icon-sport" + t
            }), n.createElement("div", {
                className: "selected_title"
            }, i)), u)
        }
    })
      , s = n.createBackboneClass({
        Change: function(n) {
            this.props.onSelestEvent(this.props.data.id, n.target.checked)
        },
        render: function() {
            var t = !1;
            return (f.filterLeague.get("filter") == null || f.filterLeague.get("filter").indexOf(this.props.data.id) > -1) && (t = !0),
            n.createElement("div", {
                className: "selected_row"
            }, n.createElement("div", {
                className: "checkbox"
            }, n.createElement("input", {
                type: "checkbox",
                name: this.props.data.id,
                className: "icon icon-checkbox",
                onChange: this.Change,
                id: "league_" + this.props.data.id,
                defaultChecked: t
            }), n.createElement("label", {
                className: "title",
                htmlFor: "league_" + this.props.data.id
            }, this.props.data.name)))
        }
    })
      , h = n.createBackboneClass({
        getInitialState: function() {
            return {
                IsDisable: !0
            }
        },
        componentDidUpdate: function() {
            var n = this;
            t.EventHub.once("SelectLeagueChange", function() {
                n.setState({
                    IsDisable: !1
                })
            })
        },
        onAlldone: function() {
            this.state.IsDisable || this.props.onAlldone()
        },
        componentWillUnmount: function() {
            t.EventHub.off("SelectLeagueChange")
        },
        render: function() {
            return n.createElement("div", {
                className: "btn " + (this.state.IsDisable ? "disable" : ""),
                onClick: this.onAlldone
            }, n.createElement("span", {
                className: "btn_text"
            }, t.LanguageHelper.Get("lbl_Done")))
        }
    })
      , c = n.createBackboneClass({
        UpdateCount: function() {
            this.renew()
        },
        checkAll: function() {
            $("#selectleaguePanel [type=checkbox]").prop("checked", !0);
            this.renew()
        },
        uncheckAll: function() {
            $("#selectleaguePanel [type=checkbox]").prop("checked", !1);
            this.renew()
        },
        renew: function() {
            t.EventHub.trigger("SelectLeagueChange");
            this.forceUpdate()
        },
        render: function() {
            var i = $("#selectleaguePanel input:checked").length;
            return n.createElement("div", {
                className: "page_header"
            }, n.createElement("div", {
                className: "main-bar"
            }, n.createElement("div", {
                className: "btn",
                onClick: this.props.onback
            }, n.createElement("i", {
                className: "icon icon-back"
            })), n.createElement("div", {
                className: "title"
            }, "(", i, "/", this.props.AllCount, ")", t.LanguageHelper.Get("lbl_selectleague")), n.createElement(h, {
                onAlldone: this.props.onAlldone
            })), n.createElement("div", {
                className: "header_filter"
            }, n.createElement("div", {
                className: "btn-group"
            }, n.createElement("div", {
                className: "btn btn-disselect",
                onClick: this.uncheckAll
            }, n.createElement("div", {
                className: "btn_text",
                "js-dis-select": ""
            }, t.LanguageHelper.Get("cancelAll"), " ")), n.createElement("div", {
                className: "btn",
                onClick: this.checkAll
            }, n.createElement("div", {
                className: "btn_text",
                "js-select-all": ""
            }, t.LanguageHelper.Get("selectAll"))))))
        }
    });
    return n.createBackboneClass({
        alldone: function() {
            var n = [];
            $("#selectleaguePanel [type=checkbox]").each(function() {
                $(this).prop("checked") && n.push(parseInt($(this).attr("name")))
            });
            (n.length == 0 || n.length == $("#selectleaguePanel [type=checkbox]").length) && (n = null);
            f.FilterLeague(n);
            this.ReturnBack()
        },
        ReturnBack: function() {
            n.unmountComponentAtNode($("#selectleaguePanel")[0])
        },
        previousUrl: "",
        componentDidMount: function() {
            this.refs.Header.UpdateCount()
        },
        componentDidUpdate: function() {
            this.refs.Header.UpdateCount()
        },
        componentWillUnmount: function() {},
        onSelestEvent: function() {
            this.refs.Header.UpdateCount()
        },
        render: function() {
            var t = this.getModel()
              , i = this
              , r = _.groupBy(t.get("LeagueList"), function(n) {
                return n.gameid
            })
              , u = _.map(r, function(t) {
                return n.createElement(o, {
                    LeagueList: t,
                    onSelestEvent: i.onSelestEvent
                })
            });
            return n.createElement("div", {
                className: "page page-select",
                "data-status": "is-open"
            }, n.createElement(c, {
                ref: "Header",
                test: this.test,
                AllCount: t.get("LeagueList").length,
                onAlldone: this.alldone,
                onback: this.ReturnBack
            }), n.createElement("div", {
                className: "page_content"
            }, u))
        }
    })
})
