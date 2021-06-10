define(["react", "common", "accountModel", "Commponent/BaseMixins", "Commponent/ch_EmptyView", "router", "OddsUtil", "OddsModel", "Commponent/ch_AppBar", "Commponent/ch_AppBarNew", "ch_BetPanelModular", "Commponent/CommonComponent", "liveTipsModel", "react.backbone", "bootstrap.min", "style!css!/bootstrap.min"], function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
  function y(n) {
      var t = new Date(n + "-00:00"), i, r;
      return t.setHours(t.getUTCHours() + (window._SiteMode == 0 ? 0 : 12)),
      i = t.getHours(),
      r = ("0" + t.getMinutes()).substr(-2, 2),
      i = ("0" + i).substr(-2, 2),
      i + ":" + r
  }
  var et = n.createBackboneClass({
      getInitialState: function() {
          return {
              imgurl: this.GetUrl(),
              IsShow: !1
          }
      },
      componentDidMount: function() {},
      GetUrl: function() {
          var i = window.siteSetting.CDNUrl ? window.siteSetting.CDNUrl : "https://mbi.akatx.net", r = this.props.LeagueLogoRef ? this.props.LeagueLogoRef : t.LeagueNameRef, u = this.props.TeamLogoRef ? this.props.TeamLogoRef : t.TeamNameRef, n;
          if (this.props.type == "L") {
              if (n = r.GetLogo(this.props.IconID),
              n != "0")
                  return i + "/leagueimg/" + n
          } else if (u.GetLogo(this.props.IconID))
              return i + "/teamimg/T_" + this.props.IconID + ".png";
          return this.GetDefaultUrl()
      },
      GetDefaultUrl: function() {
          return this.props.type == "L" ? "Content/public/Common/league_flag.png" : this.props.type == "H" ? "/Content/public/Common/team_flag_home.png" : "/Content/public/Common/team_flag_away.png"
      },
      showDefault: function() {
          this.setState({
              imgurl: this.GetDefaultUrl()
          })
      },
      LoadOK: function() {
          this.setState({
              IsShow: !0
          })
      },
      render: function() {
          return n.createElement("img", {
              src: this.state.imgurl,
              onError: this.showDefault,
              onLoad: this.LoadOK,
              style: this.state.IsShow ? {
                  display: "block"
              } : {
                  display: "none"
              }
          })
      }
  })
    , v = function(n) {
      $(n).removeAttr("data-status")
  }
    , w = function() {
      window._IsLicenseeAPI ? window._DespositUrl && window._DespositUrl != "" ? window._pop.ch_DialogGeneric("modalPopupMsg", "modal", {
          Head: "lbl_Infomation"
      }, "lbl_deposit", "", [{
          Class: "btn btn-default",
          Key: "lbl_later",
          IsUpperCase: !1,
          Callback: function() {
              if (window._Site == "12bet" && window.at) {
                  var n = t.CultureToRef(i.get("Language"));
                  at.trackEvent("SportPage", "Laterbtn" + n.toUpperCase(), "PopupBanner")
              }
              v("#modalPopupMsg")
          }
      }, {
          Class: "btn btn-primary",
          Key: "Deposit_Now",
          IsUpperCase: !1,
          Callback: function() {
              if (window._Site == "12bet" && window.at) {
                  var n = t.CultureToRef(i.get("Language"));
                  at.trackEvent("SportPage", "Depnowbtn" + n.toUpperCase(), "PopupBanner")
              }
              window.location = window._DespositUrl
          }
      }]) : window._isAPP ? window._pop.ch_DialogGeneric("modalPopupMsg", "modal", {
          Head: "lbl_Infomation"
      }, "lbl_deposit", "", [{
          Class: "btn btn-primary",
          Key: "lbl_ok",
          IsUpperCase: !1,
          Callback: function() {
              v("#modalPopupMsg")
          }
      }]) : alert(t.LanguageHelper.Get("lbl_deposit")) : window._pop.ch_DialogGeneric("modalPopupMsg", "modal", {
          Head: "lbl_Infomation"
      }, "lbl_deposit", "", [{
          Class: "btn btn-default",
          Key: "lbl_later",
          IsUpperCase: !1,
          Callback: function() {
              v("#modalPopupMsg")
          }
      }, {
          Class: "btn btn-primary",
          Key: "Deposit_Now",
          IsUpperCase: !1,
          Callback: function() {
              require(["Commponent/ch_MyAccountEdit", "ch_MyAccCommon"], function(t, r) {
                  var u = window._EnableCurrencyDisplay == !0 ? i.get("Currency") + " " + i.get("BetCredit") : i.get("BetCredit")
                    , f = n.renderToStaticMarkup(n.createElement(t.DepositWithdrawal, {
                      balance: u
                  }));
                  $("#divMain").append(f);
                  r.DepWitHandler("deposit")
              });
              v("#modalPopupMsg")
          }
          .bind(this)
      }])
  }
    , b = {
      DespAction: function(n) {
          n == 1 ? window.location = window._DespositUrl : require(["DepWitModular"], function(n) {
              n.show("deposit")
          })
      },
      handleLaterClick: function(n) {
          $(n).removeAttr("data-status")
      },
      Bet: function(n, t, r, u) {
          if (n != "")
              if (window._SiteMode == "2" && typeof i.get("ActStatus") != "undefined" && i.get("ActStatus") == 1)
                  w();
              else {
                  var f = this.getTicket(n, t);
                  c.addTicket(f, u, this.props.Betting.MatchModel);
                  (c.get("BetMode") == "m" || c.get("BetMode") == "p") && this.checkMultiSel(f) && this.state.IsMultiSel && c.removeMultiBetTicket(f)
              }
      },
      componentWillUpdate: function(n) {
          var t = this.props
            , i = t.SOGP && t.SOGP != 0 || n.SOGP && n.SOGP != 0;
          if (n.changeStatus != null && !i) {
              n.changeStatus == 1 && (n.chg = "odds-up");
              n.changeStatus == 2 && (n.chg = "odds-down");
              return
          }
          parseFloat(n.Price) > parseFloat(t.Price) && (n.chg = "odds-up");
          parseFloat(n.Price) < parseFloat(t.Price) && (n.chg = "odds-down")
      },
      GetOddsChangeStatus: function() {
          var n = ""
            , t = this.props.SOGP && this.props.SOGP != 0;
          return this.props.changeStatus != null && (this.props.changeStatus == 1 && (n = "odds-up"),
          this.props.changeStatus == 2 && (n = "odds-down")),
          t && (n = this.props.chg ? this.props.chg : n),
          n
      },
      getInitialState: function() {
          var n = this.checkMultiSel();
          return {
              IsMultiSel: n,
              IsParlay: c.get("BetMode") == "p"
          }
      },
      componentDidMount: function() {
          c.on("change:BetMode", this.changeBetMode);
          c.getMultiBet().get("tickets").on("update reomve reset", this.changeBetMode);
          c.getMultiBet(!0).get("tickets").on("update reomve reset", this.changeBetMode)
      },
      componentWillUnmount: function() {
          c.off("change:BetMode", this.changeBetMode);
          c.getMultiBet().get("tickets").off("update reomve reset", this.changeBetMode);
          c.getMultiBet(!0).get("tickets").off("update reomve reset", this.changeBetMode)
      },
      getTicket: function(n, t, i) {
          var r = this.props.Betting.SportID ? this.props.Betting.SportID : o.get("sportId")
            , u = this.props.Betting.Pty == null || o.get("type") == "parlay" ? 1 : this.props.Betting.Pty;
          return t == null && (t = ""),
          t = t.replace("(", "").replace(")", ""),
          this.props.Betting.SportKind == null ? r >= 180 && r <= 196 ? {
              type: o.get("type"),
              seqno: null,
              gameid: o.get("sportId"),
              pty: u,
              bettype: this.props.BetTypeId,
              oddsid: this.props.Betting.MarketId,
              betteam: this.props.SelId,
              odds: n,
              Line: t,
              home: this.props.Betting.TeamAry[0],
              away: this.props.Betting.TeamAry[1],
              Hscore: 0,
              Ascore: 0,
              stake: 0,
              ChoiceValue: 0,
              errorcode: "",
              payout: 0,
              MRPercentage: 0,
              Matchid: this.props.Betting.MatchId,
              hasCashOut: !1,
              srcLine: this.props.Betting.srcLine,
              MatchModel: this.props.Betting.MatchModel
          } : {
              type: this.props.Betting.type ? this.props.Betting.type : i ? i : o.get("type"),
              seqno: null,
              gameid: r,
              pty: u,
              bettype: this.props.BetTypeId,
              oddsid: this.props.Betting.MarketId,
              betteam: this.props.SelId,
              odds: n,
              Line: t,
              home: this.props.Betting.TeamAry[0],
              away: this.props.Betting.TeamAry[1],
              Hscore: this.props.Betting.T1V,
              Ascore: this.props.Betting.T2V,
              stake: 0,
              ChoiceValue: 0,
              errorcode: "",
              payout: 0,
              MRPercentage: this.props.mmrLine,
              isMMR: this.props.Betting.isMMR,
              Matchid: this.props.Betting.MatchId,
              hasCashOut: this.props.hasCashOut,
              SrcOddsInfo: this.props.Betting.betInfo ? this.props.Betting.betInfo.toString() : null,
              srcLine: this.props.Betting.srcLine,
              MatchModel: this.props.Betting.MatchModel,
              Resourceid: this.props.Betting.Resourceid,
              OtherHdp: this.props.Betting.OtherHdp
          } : this.props.Betting.SportKind == "OT" ? {
              type: this.props.Betting.SportKind,
              gameid: r,
              pty: u,
              home: this.props.Title,
              oddsid: this.props.Betting.MarketId,
              odds: n,
              ChoiceValue: 0,
              MatchModel: this.props.Betting.MatchModel
          } : {
              type: this.props.Betting.SportKind,
              gameid: r,
              pty: u,
              bettype: this.props.BetTypeId,
              oddsid: this.props.Betting.MarketId,
              odds: n,
              ProgramID: this.props.Betting.ProgramID,
              RaceNum: this.props.Betting.RaceNum,
              Runner: this.props.Betting.Runner,
              PoolType: this.props.PoolType,
              time: this.props.Betting.time,
              stake: 0,
              ChoiceValue: 0,
              errorcode: "",
              payout: 0,
              hasCashOut: this.props.hasCashOut,
              MatchModel: this.props.Betting.MatchModel
          }
      },
      checkMultiSel: function(n) {
          return (c.get("BetMode") == "m" || c.get("BetMode") == "p" || c.get("BetMode") == "s") && c.checkMultiBetTicket(n ? n : this.getTicket(null, null, "parlay"), "p")
      },
      changeBetMode: function() {
          this.setState({
              IsMultiSel: this.checkMultiSel()
          })
      }
  }
    , k = function(n, t) {
      return (t == null && (t = 0),
      i.SysTime.get("Time").getTime() > Date.parse(n + "-04:00") + t * 1e3) ? !1 : !0
  }
    , d = n.createBackboneClass({
      mixins: [b],
      getInitialState: function() {
          return {
              index: Math.floor(Math.random() * 3)
          }
      },
      render: function() {
          var r = this.props.Price, s = this.props.Line, o = this.props.Title, ut = this.props.Fav, y = this.props.LngBallIndex, p = this.props.MMRObj ? this.props.MMRObj : {}, u = p.isMMR ? "" : this.GetOddsChangeStatus(), b = "", f = "", tt = "", k = "", h = e.removeCommas(r), w, d, i, c, v, l, a;
          if (p.isMMR || this.props.mmrLine == null || (tt = n.createElement("span", {
              className: this.props.mmrLine < 0 ? "goal underdog" : "goal"
          }, "(", this.props.mmrLine, ")")),
          p.isMMR && p.show && this.props.mmrLine != null && (w = "",
          (this.props.BetTypeId == 1 || this.props.BetTypeId == 7) && (w = this.props.SelId == "h" ? " H" : " A"),
          b = this.props.changeMMRStatus ? " mmr-change" : "",
          k = n.createElement("span", {
              className: this.props.mmrLine < 0 ? "text-mmr-negative" : "text-mmr-positive"
          }, "(", this.props.mmrLine, ")", w)),
          d = this.props.Betting.MatchId + "," + this.props.Betting.MarketId + "," + this.props.BetTypeId + "," + this.props.SelId + "," + r + "," + s,
          i = [],
          this.props.Betting.SportID == "50") {
              if (!isNaN(h) && parseFloat(h) < 0 && (f = " c-odds--minus"),
              this.props.nochg && (f = ""),
              u == "odds-up" && (u = "change-up"),
              u == "odds-down" && (u = "change-down"),
              this.props.StrPrice && (r = this.props.StrPrice),
              r == "")
                  u = "close-price",
                  i.push(n.createElement("i", {
                      className: "icon icon-pause"
                  }));
              else if (window._TeNeT)
                  for (c = 0; c < 3; c++)
                      c != this.state.index ? i.push(n.createElement("div", {
                          key: c,
                          className: "c-odds" + f,
                          style: {
                              display: "none"
                          }
                      }, "0")) : i.push(n.createElement("div", {
                          key: c,
                          className: "c-odds" + f
                      }, r));
              else
                  i.push(n.createElement("div", {
                      key: "price",
                      className: "c-odds" + f
                  }, r));
              return n.createElement("div", {
                  className: "c-odds-button",
                  "data-odds-status": u ? u : "default",
                  "data-selected": this.state.IsMultiSel ? "true" : "false",
                  onClick: this.Bet.bind(this, h, s)
              }, n.createElement("span", {
                  className: "c-text-goal",
                  dangerouslySetInnerHTML: {
                      __html: "" + o + s
                  }
              }), i)
          }
          if (!isNaN(h) && parseFloat(h) < 0 && (f = " betType-minusOdds"),
          this.props.nochg && (f = ""),
          this.props.IsNewStyle) {
              if (u == "odds-up" && (u = " comodds-up"),
              u == "odds-down" && (u = " comodds-down"),
              this.props.showTitleLine ? o = o + " " + s : this.props.NoShowLine || (o = s + o),
              v = null,
              r != "" && (v = o && o.length > 0 ? n.createElement("div", {
                  className: "oddsbox_goal"
              }, o, k) : null,
              this.props.betTeamName && (v = n.createElement("div", {
                  className: "bettype_type"
              }, n.createElement("span", {
                  dangerouslySetInnerHTML: {
                      __html: this.props.betTeamName
                  }
              }), v))),
              this.props.StrPrice && (r = this.props.StrPrice),
              r == "")
                  i.push(n.createElement("i", {
                      className: "icon icon-pause"
                  }));
              else if (window._TeNeT)
                  for (l = 0; l < 3; l++)
                      l != this.state.index ? i.push(n.createElement("div", {
                          key: l,
                          className: "oddsbox_odds" + f,
                          style: {
                              display: "none"
                          }
                      }, "0")) : i.push(n.createElement("div", {
                          key: l,
                          className: "oddsbox_odds" + f
                      }, r));
              else
                  i.push(n.createElement("div", {
                      key: "price",
                      className: "oddsbox_odds" + f
                  }, r));
              return n.createElement("div", {
                  className: "bettype_oddsbox" + u + b,
                  id: ('box' + this.props.Betting.MarketId + '_' + o + '_' + r).replace(/\./g, '').replace(/\+/g, '').replace(/-/g, '').replace(/ /g, ''),
                  "data-status": this.state.IsMultiSel ? "is-active" : "",
                  onClick: this.Bet.bind(this, h, s)
              }, v, i)
          }
          if (r == "")
              y == 0 ? i.push(n.createElement("div", {
                  key: "closePrice",
                  className: "betType_odds"
              }, t.LanguageHelper.Get("lbl_1stBall"))) : y == 1 ? i.push(n.createElement("div", {
                  key: "closePrice",
                  className: "betType_odds"
              }, t.LanguageHelper.Get("lbl_2ndBall"))) : i.push(n.createElement("div", {
                  key: "closePrice",
                  className: "betType_odds betType-closePrice"
              }, n.createElement("i", {
                  className: "icon icon-pause"
              })));
          else if (window._TeNeT)
              for (a = 0; a < 3; a++)
                  a != this.state.index ? i.push(n.createElement("div", {
                      key: a,
                      className: "betType_odds " + u + f,
                      style: {
                          display: "none"
                      }
                  }, "0")) : i.push(n.createElement("div", {
                      key: a,
                      className: "betType_odds " + u + f,
                      "data-status": this.state.IsMultiSel ? "is-active" : ""
                  }, r));
          else
              i.push(n.createElement("div", {
                  key: "price",
                  className: "betType_odds " + u + f,
                  "data-status": this.state.IsMultiSel ? "is-active" : ""
              }, r));
          var g = r == ""
            , nt = y == 0 || y == 1
            , it = g && !nt
            , rt = g && nt;
          return n.createElement("div", {
              className: "btn " + (it ? "disable" : "") + (this.props.BetTypeId == 90 ? " btn-single" : "") + (rt ? " active" : ""),
              onClick: this.Bet.bind(this, r, s),
              "data-oddsinfo": d
          }, i)
      }
  })
    , ot = n.createBackboneClass({
      displayName: "Odds",
      mixins: [n.BackboneMixin("market"), n.BackboneMixin("Selection", "change:Price change:changeStatus"), r.OddsMixins],
      changeOddsType: function() {
          this.forceUpdate()
      },
      componentDidMount: function() {
          i.on("change:OddsType", this.changeOddsType, this)
      },
      componentWillUnmount: function() {
          i.off("change:OddsType", this.changeOddsType, this)
      },
      render: function() {
          var s = {
              value: 0
          }, r = this.props.market, a = this.props.Match.get("GameID") ? this.props.Match.get("GameID") : o.get("sportId"), i = this.props.market.get("BetTypeId"), f = this.props.Selection.get("SelId"), h = {
              isMMR: this.props.Match.get("MBO") == 0 & !r.get("notUseMMR") && r.get("isMMR"),
              show: !1
          }, v = null, u, w, b, y, k, c, l, e;
          if (i == 90)
              u = "";
          else
              try {
                  h.isMMR ? (u = this.GetLine(f, this.props.HasLine, r.get("cs25"), s, !0),
                  u == 0 && (i == 1 || i == 7) && (r.get("Line") != 0 ? s.value = (r.get("Line") > 0 ^ f == "h") ? 0 : 1 : (w = Math.abs(r.get("Selections").get("h").get("Price")),
                  b = Math.abs(r.get("Selections").get("a").get("Price")),
                  s.value = (w <= b ^ f == "h") ? 0 : 1)),
                  y = r.get("cs15"),
                  (f != "a" || i != 3 && i != 8) && (i != 1 && i != 7 || s.value) ? h.show = !0 : y *= -1,
                  v = y) : this.props.FMLine != null ? u = this.GetLine(f, this.props.HasLine, this.props.FMLine, s, !0) : (k = a == 50 ? !1 : !0,
                  u = this.GetLine(f, this.props.HasLine, this.props.market.get("Line"), s, k))
              } catch (tt) {
                  console.log(tt)
              }
          i >= 301 && i <= 304 && (c = this.props.Selection.get("Info").split(","),
          l = parseInt(c[0]),
          f == "h" && c[1] == "2" && (l *= -1),
          f == "a" && c[1] == "1" && (l *= -1),
          v = l);
          e = this.GetPrice();
          e != "" && h.isMMR && (e = f == "h" ? r.get("cs35") : r.get("cs45"),
          e = e ? e.toLocaleString(undefined, {
              minimumFractionDigits: 2
          }) : "");
          var it = i == 646 ? this.props.market.get("hdp2") : null
            , rt = {
              Pty: this.props.market.get("Pty"),
              MatchId: this.props.Match.get("OMid") ? this.props.Match.get("OMid") : this.props.market.get("MatchId"),
              MarketId: this.props.market.get("MarketId"),
              TeamAry: this.props.TeamAry,
              T1V: this.props.Match.get("T1V"),
              T2V: this.props.Match.get("T2V"),
              SportID: a,
              betInfo: this.props.betInfo,
              srcLine: h.isMMR ? r.get("cs25") : this.props.market.get("Line"),
              MatchModel: this.props.Match,
              isMMR: h.isMMR,
              OtherHdp: it
          }
            , nt = n.createElement(d, {
              Price: e,
              Line: u,
              Title: this.props.Title,
              Fav: s.value,
              changeStatus: this.props.Selection.get("changeStatus"),
              changeMMRStatus: r.get("changeMMRStatus"),
              mmrLine: v,
              MMRObj: h,
              BetTypeId: i,
              SelId: this.props.betTeam ? this.props.betTeam : f,
              Betting: rt,
              hasCashOut: g(this.props.Match.get("CO")),
              nochg: this.props.nochg,
              IsNewStyle: this.props.IsNewStyle,
              showTitleLine: this.props.showTitleLine,
              NoShowLine: this.props.NoShowLine,
              betTeamName: this.props.betTeamName,
              LngBallIndex: this.props.LngBallIndex
          })
            , p = null;
          return a == 1 && (i == 1 || i == 7) && parseFloat(u) > 0 && (p = n.createElement("div", {
              className: "betType_goal_ch"
          }, t.RefHdpName(parseFloat(u)))),
          this.props.CustomLine && (u = this.props.CustomLine),
          this.props.IsNewStyle ? nt : n.createElement("div", {
              className: "betType_item"
          }, this.props.betTypeOption ? this.props.betTypeOption : n.createElement("div", {
              className: "betType_option",
              dangerouslySetInnerHTML: {
                  __html: this.props.Title
              }
          }), p ? p : null, u == "" || e == "" ? null : n.createElement("div", {
              className: "betType_goal"
          }, u), nt)
      }
  })
    , g = function(n) {
      return (window._SiteMode == "2" ? "1,3" : "1,2").indexOf(n) > -1 && i.get("CO") && o.get("type") != "parlay" ? !0 : !1
  }
    , nt = {
      FirstOpenEvent: function(n) {
          this.FirstOpen = n
      },
      updateList: function() {
          this.MatchList && this.forceUpdate()
      },
      componentWillMount: function() {
          this.FirstOpen = !0;
          this.MatchList = this.CreateMatchList()
      },
      componentWillUpdate: function() {
          this.MatchList = this.CreateMatchList()
      },
      componentDidUpdate: function() {
          this.componentDidMount()
      },
      componentDidMount: function() {
          this.MatchList.length == 0 && (this.timer && clearTimeout(this.timer),
          this.timer = setTimeout(this.SyncSportData.bind(this), 1e4))
      },
      SyncSportData: function() {
          this.props.UpdataFunc ? this.props.UpdataFunc(function() {
              this.updateList()
          }
          .bind(this)) : o.Updata(function() {
              this.updateList()
          }
          .bind(this))
      },
      componentWillUnmount: function() {
          this.MatchList = null;
          this.timer && clearTimeout(this.timer)
      },
      CreateMatchList: function() {
          var t = [], i, r;
          if (this.getCollection().length > 0)
              for (i = 0; i < this.getCollection().length; i++)
                  if ((r = this.getCollection().at(i),
                  k(r.get("Ktm"))) && (t.push(n.createElement(ht, {
                      key: r.get("MatchId"),
                      HDPOUGroup: this.props.HDPOUGroup,
                      VirtualGroup: this.props.VirtualGroup,
                      IsSimple: this.props.IsSimple,
                      model: r,
                      FirstOpenEvent: t.length == 0 ? this.FirstOpenEvent : null,
                      DefOpen: t.length == 0 ? this.FirstOpen : !1,
                      updateList: this.updateList,
                      TeamNameRef: this.props.TeamNameRef,
                      LeagueNameRef: this.props.LeagueNameRef,
                      eventtype: this.props.eventtype
                  })),
                  t.length == 6))
                      break;
          return t
      }
  }
    , st = n.createBackboneClass({
      mixins: [nt],
      render: function() {
          return this.MatchList.length == 0 ? n.createElement(u.NoLeague, {
              model: o
          }) : n.createElement("div", {
              className: "match_list match-open"
          }, this.MatchList)
      }
  })
    , ht = n.createBackboneClass({
      getInitialState: function() {
          return {
              IsOpen: this.props.DefOpen ? !0 : !1
          }
      },
      componentWillReceiveProps: function(n) {
          !n.IsSimple && n.DefOpen && (this.state.IsOpen || (this.setState({
              IsOpen: !0
          }),
          this.InitBetTypes(!0)))
      },
      componentDidMount: function() {
          this.props.IsSimple || this.InitBetTypes(this.state.IsOpen)
      },
      InitBetTypes: function(n) {
          var t = this.getModel();
          n && t != null && t.get("BetTypes").length == 0 && t.GetBetyypes()
      },
      OpenEvent: function() {
          var n = !this.state.IsOpen;
          this.InitBetTypes(n);
          this.setState({
              IsOpen: n
          });
          this.props.FirstOpenEvent && this.props.FirstOpenEvent(n)
      },
      updateList: function() {
          this.props.updateList && this.props.updateList()
      },
      GotoMatch: function() {
          o.set({
              IsFav: !1
          });
          f.navigate("Sports/s=" + this.getModel().get("GameID") + "_0&d=t", {
              trigger: !0
          });
          $("body").removeAttr("data-status");
          $("#pagePanel").modal("hide");
          tt(this.getModel().get("GameID"), this.props.eventtype)
      },
      render: function() {
          var i = this.getModel(), r = [], f = null, e = i.get("GameID"), s = this.props.HDPOUGroup, h = this.props.VirtualGroup, o = this.props.TeamNameRef ? this.props.TeamNameRef : t.TeamNameRef, c = this.props.LeagueNameRef ? this.props.LeagueNameRef : t.LeagueNameRef, u;
          return (e == 180 || e == 186 ? (u = [o.GetName(i.get("TeamId1")), o.GetName(i.get("TeamId2"))],
          r.push(n.createElement("div", {
              className: "match_home"
          }, u[0])),
          r.push(n.createElement("div", {
              className: "match_versus"
          }, "vs")),
          r.push(n.createElement("div", {
              className: "match_away"
          }, u[1])),
          this.props.IsSimple || (f = n.createElement(s, {
              ref: "HDPOUGroup",
              IsOpen: !0,
              collection: i.get("BetTypes"),
              IsLive: !1,
              match: i,
              TeamAry: u,
              IsSingleModel: !1
          }))) : (r.push(n.createElement("div", {
              className: "match_home"
          }, c.GetName(i.get("Cur")))),
          this.props.IsSimple || (f = n.createElement(h, {
              collection: i.get("BetTypes"),
              match: i
          }))),
          this.props.IsSimple) ? n.createElement("div", {
              className: "streaming_list touch",
              onClick: this.GotoMatch
          }, n.createElement("div", {
              className: "time"
          }, y(i.get("Ktm"))), n.createElement("div", {
              className: "list_name"
          }, r), n.createElement("div", {
              className: "count"
          }, this.props.FirstOpenEvent ? n.createElement(p, {
              Ktm: i.get("Ktm"),
              nocls: !0,
              refresh: this.updateList,
              Match: i
          }) : null)) : n.createElement("div", {
              className: "match",
              "data-status": this.state.IsOpen ? "is-open" : ""
          }, n.createElement("div", {
              className: "match_header",
              onClick: this.OpenEvent
          }, n.createElement("div", {
              className: "match_time"
          }, y(i.get("Ktm"))), n.createElement("div", {
              className: "match_team"
          }, r, this.props.FirstOpenEvent ? n.createElement(p, {
              Ktm: i.get("Ktm"),
              refresh: this.updateList,
              Match: i
          }) : null), n.createElement(it, null)), this.state.IsOpen ? f : null)
      }
  })
    , tt = function(n, r) {
      var f = _SkinMode == 0 ? "n" : "l"
        , e = window._Mesid
        , u = i.get("ID") + "," + n + "," + e + "," + f + "," + r;
      t.SyncServer("Odds/WritePNRLog", {
          parm: u
      }, function(n) {
          n.ok != "" && console.log("WritePNRLog success.parm:" + u)
      }
      .bind(this))
  }
    , it = n.createBackboneClass({
      refresh: function(n) {
          var i, t;
          n.stopPropagation();
          i = $(n.currentTarget);
          i.attr("data-status", "is-active");
          t = this;
          o.Updata(function() {
              t.refreshAnim != null && clearTimeout(t.refreshAnim);
              t.refreshAnim = setTimeout(function() {
                  i.removeAttr("data-status")
              }, 1e3)
          })
      },
      render: function() {
          return n.createElement("div", {
              className: "btn btn-refresh",
              onClick: this.refresh
          }, n.createElement("i", {
              className: "icon icon-refresh-single"
          }))
      }
  })
    , ct = n.createBackboneClass({
      getInitialState: function() {
          return {
              tutorialStatus: localStorage.getItem("TutorialFinish") === "true" ? !1 : !0,
              tutorialStep: "1"
          }
      },
      ClickNextStep: function(n) {
          n.stopPropagation();
          this.setState({
              tutorialStep: "2"
          })
      },
      ClickEndTutorial: function(n) {
          n.stopPropagation();
          localStorage.setItem("TutorialFinish", "true");
          this.setState({
              tutorialStatus: !1
          })
      },
      render: function() {
          return n.createElement("div", {
              id: "tutorial-live-tip",
              className: "tutorial-live-tip",
              "match-id": this.props.matchId,
              "data-status": this.state.tutorialStatus ? "is-open" : "",
              "data-step": this.state.tutorialStep
          }, n.createElement("div", {
              className: "tlt__step tlt__step--1"
          }, n.createElement("div", {
              className: "tlt__arrow"
          }, n.createElement("svg", {
              className: "tlt__svg-line"
          }, n.createElement("path", {
              d: "M3.9,45.6c5.6-4.9,11.8-9.4,18.1-13.4c9.8-6.2,20.7-10.7,32.2-12.6c5-0.8,10.2-1.1,15.2-0.2\r\nc3.3,0.7,8.8,2,9,6.2c0.1,1.7-0.7,3.5-2.2,4.3c-1.8,1-3.8,0.3-5.3-0.9c-3.7-3.1-2.8-8.3,0.3-11.6c2.4-2.6,6.3-3.7,9.6-4.8\r\nc4.6-1.5,9.5-2.2,14.3-2.7"
          }), n.createElement("path", {
              d: "M87.7,3.2C90,5.5,92.8,7.3,95.5,9c0.6,0.4,0.7,1.3,0.2,1.8C93.5,13,91,15.3,90,18.3"
          }))), n.createElement("div", {
              className: "tlt__bell"
          }, n.createElement("i", {
              className: "icon icon-bell"
          })), n.createElement("div", {
              className: "tlt__title"
          }, n.createElement("i", {
              className: "icon icon-bell-on"
          }), n.createElement("span", null, "点击小铃铛")), n.createElement("div", {
              className: "tlt__bubble"
          }, n.createElement("div", {
              className: "tlt__bubble-text"
          }, "关注赛况变化的重要信息！")), n.createElement("div", {
              className: "tlt__papa"
          }), n.createElement("div", {
              className: "tlt__btn"
          }, n.createElement("div", {
              className: "btn",
              "js-livetip-next": !0,
              onClick: this.ClickNextStep
          }, "下一步"))), n.createElement("div", {
              className: "tlt__step tlt__step--2"
          }, n.createElement("div", {
              className: "live-tip__item"
          }, n.createElement("div", {
              className: "btn btn-close"
          }, n.createElement("i", {
              className: "icon icon-clear"
          })), n.createElement("div", {
              className: "live-tip__content"
          }, n.createElement("div", {
              className: "live-tip__header"
          }, n.createElement("div", {
              className: "live-tip__badge"
          }, n.createElement("i", {
              className: "icon icon-bell-on"
          })), n.createElement("div", {
              className: "live-tip__title"
          }, "*NBA-底特律活塞 vs 金州勇士")), n.createElement("div", {
              className: "live-tip__detail"
          }, "第一节结束，活塞 29 - 31 勇士"))), n.createElement("div", {
              className: "tlt__arrow"
          }, n.createElement("svg", {
              className: "tlt__svg-line"
          }, n.createElement("path", {
              d: "M3.9,45.6c5.6-4.9,11.8-9.4,18.1-13.4c9.8-6.2,20.7-10.7,32.2-12.6c5-0.8,10.2-1.1,15.2-0.2\r\nc3.3,0.7,8.8,2,9,6.2c0.1,1.7-0.7,3.5-2.2,4.3c-1.8,1-3.8,0.3-5.3-0.9c-3.7-3.1-2.8-8.3,0.3-11.6c2.4-2.6,6.3-3.7,9.6-4.8\r\nc4.6-1.5,9.5-2.2,14.3-2.7"
          }), n.createElement("path", {
              d: "M87.7,3.2C90,5.5,92.8,7.3,95.5,9c0.6,0.4,0.7,1.3,0.2,1.8C93.5,13,91,15.3,90,18.3"
          }))), n.createElement("div", {
              className: "tlt__title"
          }, "赛况实时变化通知"), n.createElement("div", {
              className: "tlt__bubble"
          }, n.createElement("div", {
              className: "tlt__bubble-text"
          }, "点击通知即可进入该场比赛页面！")), n.createElement("div", {
              className: "tlt__papa"
          }), n.createElement("div", {
              className: "tlt__btn"
          }, n.createElement("div", {
              className: "btn",
              "js-livetip-close": !0,
              onClick: this.ClickEndTutorial
          }, "我知道了"))))
      }
  })
    , lt = n.createBackboneClass({
      changeOptions: "change:message",
      getInitialState: function() {
          return this.maxMessageCount = 7,
          {
              isExpend: !1,
              tipDatas: [],
              touchStartLocation: {},
              runAnimateForRemovewAllMessage: !1
          }
      },
      componentDidMount: function() {},
      componentDidUpdate: function() {
          this.state.isExpend && this.getModel().clearRemoveMessageTimer()
      },
      clearMessage: function() {
          this.getModel().set({
              message: []
          })
      },
      clickTipClose: function(n) {
          var t = this;
          n.stopPropagation();
          this.state.isExpend ? function() {
              var n = t.getModel().get("message").length;
              t.setState({
                  runAnimateForRemovewAllMessage: !0
              }, function() {
                  setTimeout(function() {
                      t.setState({
                          runAnimateForRemovewAllMessage: !1,
                          isExpend: !1
                      });
                      t.clearMessage()
                  }, 100 * n + 200)
              })
          }() : (this.clearMessage(),
          this.setState({
              isExpend: !1
          }))
      },
      clickTip: function(n, t) {
          t.stopPropagation();
          this.getModel().get("message").length > 1 ? this.state.isExpend ? this.goToSingleMatchPage(n.leagueId, n.matchId) : (this.setState({
              isExpend: !0
          }),
          clearTimeout(this.timer)) : this.getModel().get("message").length == 1 && this.goToSingleMatchPage(n.leagueId, n.matchId)
      },
      goToSingleMatchPage: function(n, t) {
          $("#visualizationPanel")[0] && $("#visualizationPanel")[0].hasChildNodes() && $("#tutorial-live-tip").attr("match-id") == t || (console.log("goToSingleMatchPage Sports/s=2_0&d=l&l=" + n + "&m=" + t),
          f.navigate("Sports/s=2_0&d=l&l=" + n + "&m=" + t, {
              trigger: !0
          }));
          this.clearMessage();
          this.setState({
              isExpend: !1
          })
      },
      onItemTouchStart: function(n) {
          var t = n.touches[0]
            , i = {
              clientY: t.clientY
          };
          this.setState({
              touchStartLocation: i
          })
      },
      onItemTouchMove: function(n) {
          var t = n.touches[0];
          t.clientY - this.state.touchStartLocation.clientY < -45 && this.clearMessage()
      },
      render: function() {
          var i = this
            , t = null;
          return this.getModel().get("message").length > 1 ? t = this.getModel().get("message").map(function(t, r) {
              return n.createElement(rt, {
                  key: r,
                  data: t,
                  clickTip: i.clickTip,
                  clickTipClose: i.clickTipClose
              })
          }) : this.getModel().get("message").length == 1 && (t = n.createElement(rt, {
              data: this.getModel().get("message")[0],
              clickTip: this.clickTip,
              clickTipClose: this.clickTipClose,
              onItemTouchStart: this.onItemTouchStart,
              onItemTouchMove: this.onItemTouchMove
          })),
          n.createElement("div", {
              className: "live-tip",
              "data-status": this.getModel().get("message").length > 0 ? "is-open" : "",
              "data-expend": this.state.isExpend === !0 ? "on" : "off",
              "data-remove": this.state.runAnimateForRemovewAllMessage
          }, n.createElement("div", {
              className: "live-tip__head"
          }, n.createElement("div", null, "通知"), n.createElement("div", {
              className: "btn btn-close-all",
              onClick: this.clickTipClose
          }, n.createElement("i", {
              className: "icon icon-cancel"
          }))), n.createElement("div", {
              className: "live-tip__body"
          }, t))
      }
  })
    , rt = n.createBackboneClass({
      render: function() {
          var t = this.props
            , i = t.data
            , r = t.clickTip
            , u = t.clickTipClose
            , f = t.onItemTouchStart
            , e = t.onItemTouchMove;
          return n.createElement("div", {
              className: "live-tip__item",
              style: {
                  "touch-action": "none"
              },
              onClick: r.bind(null, i),
              onTouchStart: f,
              onTouchMove: e
          }, n.createElement("div", {
              className: "btn btn-close",
              onClick: u
          }, n.createElement("i", {
              className: "icon icon-clear"
          })), n.createElement("div", {
              className: "live-tip__content"
          }, n.createElement("div", {
              className: "live-tip__header"
          }, n.createElement("div", {
              className: "live-tip__badge"
          }, n.createElement("i", {
              className: "icon icon-bell-on"
          })), n.createElement("div", {
              className: "live-tip__title"
          }, "*NBA-" + i.homeName + " vs " + i.awayName)), n.createElement("div", {
              className: "live-tip__detail"
          }, "" + i.message)))
      }
  })
    , vt = n.createBackboneClass({
      getInitialState: function() {
          var t = this.props.model
            , i = t.id.toString()
            , n = window._SubScribeMatchList && window._SubScribeMatchList.indexOf(i) === -1 ? !1 : !0;
          return this.timer = null,
          {
              tooltipStatus: !0,
              toolTipText: n ? 4 : 0,
              isSelected: n
          }
      },
      changeBell: function() {},
      ClickBell: function(n) {
          var t = this
            , r = this.props.model
            , i = r.id;
          n.stopPropagation();
          clearTimeout(this.timer);
          this.state.isSelected ? window._signalClient.unsubscribe(i) : window._signalClient.subscribe(i);
          this.setState({
              tooltipStatus: !0,
              isSelected: !this.state.isSelected,
              toolTipText: this.state.isSelected == !1 ? 1 : 2
          }, function() {
              t.timer = setTimeout(function() {
                  t.setState({
                      tooltipStatus: !1
                  })
              }, 2e3)
          })
      },
      componentWillMount: function() {},
      componentDidMount: function() {
          var n = this;
          this.timer = setTimeout(function() {
              n.setState({
                  tooltipStatus: !1
              })
          }, 4e3)
      },
      renderSwitch: function() {
          switch (this.state.toolTipText) {
          case 0:
              return "开启赛事动态资讯通知";
          case 1:
              return "已关注此赛事";
          case 2:
              return "已取消关注此赛事";
          case 4:
              return "已訂閱此賽事所以不顯示"
          }
      },
      render: function() {
          return n.createElement("div", {
              className: "btn btn-notify",
              "data-selected": this.state.isSelected ? "true" : "false"
          }, n.createElement("i", {
              className: "icon icon-bell" + (this.state.isSelected ? "-on" : ""),
              onClick: this.ClickBell
          }), n.createElement("div", {
              id: "tooltip",
              className: "tooltips tooltips-top tooltips-right " + (this.state.toolTipText == 0 ? "tooltips-warning" : "tooltips-base"),
              "data-status": this.state.tooltipStatus == !0 && this.state.toolTipText != 4 ? "is-open" : ""
          }, n.createElement("div", {
              className: "tooltips_arrow"
          }), n.createElement("div", {
              className: "tooltips_content"
          }, this.renderSwitch())))
      }
  })
    , yt = t.getVSStreamingDefine()
    , pt = n.createBackboneClass({
      doMute: function(n) {
          this.player && (this.player.mute = n)
      },
      doStop: function() {
          this.player && this.player.disconnect()
      },
      doPlay: function() {
          this.player && this.player.play()
      },
      init: function() {
          var n = this
            , r = "";
          r = _Country == "CN" ? "citibet" : "limelight";
          require(["streaming-player"], function() {
              var u = t.CultureToRef(i.get("Language")), f, e;
              switch (u) {
              case "ch":
                  u = "ch";
                  break;
              case "cs":
              case "zhcn":
                  u = "cs";
                  break;
              default:
                  u = "en"
              }
              f = yt[n.props.SportId][u];
              try {
                  e = [{
                      url: siteSetting.VSH5_1,
                      app: "webrtc"
                  }, {
                      url: siteSetting.VSH5_2,
                      app: "webrtc"
                  }];
                  n.player = new window.StreamingPlayer({
                      div: document.getElementById("player"),
                      type: r,
                      serverUrls: e,
                      country: _Country,
                      alertPic: "/Content/public/Common/StreamingNotSupport.png",
                      noStreamPic: "/Content/public/Common/StreamingNotPlay.png"
                  });
                  n.player.mute = n.props.IsMute;
                  n.player.connect(r == "citibet" ? f[0] : f[1]);
                  n.player.on(window.StreamingPlayer.EventTypes.error, function(n) {
                      console.log(n)
                  })
              } catch (o) {}
          })
      },
      componentDidMount: function() {
          this.init()
      },
      componentWillUnmount: function() {
          this.doStop()
      },
      render: function() {
          return n.createElement("div", {
              className: "video_container",
              dangerouslySetInnerHTML: {
                  __html: '<div id="player" style="width: 100%;"><\/div>'
              }
          })
      }
  })
    , p = n.createBackboneClass({
      getInitialState: function() {
          return {
              sec: this.getSecTime()
          }
      },
      componentDidMount: function() {
          this.update()
      },
      componentWillUnmount: function() {
          this.timer && clearTimeout(this.timer)
      },
      update: function() {
          var n = this.getSecTime(), t;
          this.setState({
              sec: n
          });
          n >= -10 ? (this.timer && clearTimeout(this.timer),
          this.timer = setTimeout(this.update, 1e3),
          n == 0 && (t = !1,
          this.props.Match.get("BetTypes").map(function(n) {
              n.get("Selections") && n.get("Selections").length > 0 ? n.get("Selections").map(function(n) {
                  n.set({
                      Price: 0
                  })
              }) : n.get("Pol") && n.get("Pol").length > 0 && (n.get("Pol")[0].Win = 0,
              t = !0)
          }),
          t && this.props.Match.get("BetTypes").trigger("add"))) : this.props.refresh()
      },
      getSecTime: function() {
          (new Date).getTime() - i.SysTime.get("Time").getTime() > 5e3 && o.Updata();
          var n = Date.parse(this.props.Ktm + "-04:00") - i.SysTime.get("Time").getTime();
          return Math.round(n / 1e3)
      },
      render: function() {
          var i = t.LanguageHelper.Get("lbl_Betclosed"), r = "is-close", u, f;
          return this.state.sec > 0 && (u = t.padLeft(e.OddsConverter.FloorToString(this.state.sec / 60, 0), 2),
          f = t.padLeft(this.state.sec % 60, 2),
          i = u + ":" + f,
          r = ""),
          n.createElement("span", {
              className: this.props.nocls ? "" : "match_countTime",
              "data-status": r
          }, i)
      }
  })
    , wt = n.createBackboneClass({
      getInitialState: function() {
          return {
              DefMenu: this.props.DefMenu,
              Language: i.get("Language")
          }
      },
      componentWillUnMount: function() {
          i.off("change:Language")
      },
      componentDidMount: function() {
          i.on("change:Language", function() {
              window._SiteMode == 2 && ($(".icon-all-sports").length > 0 && this.props.from != "ThemeAppbar" ? this.setState({
                  Language: i.get("Language"),
                  DefMenu: 9
              }) : this.setState({
                  Language: i.get("Language")
              }))
          }
          .bind(this));
          orientationChange = function() {
              var n = Backbone.history.fragment.split("/");
              if (n.length > 1 && n[0].length > 0 && n[0] != "GG" || n[0] == "Streaming" || n[0] == "MyAccount")
                  switch (window.orientation) {
                  case 0:
                  case 180:
                      $(".rotateDevice").removeClass("in right");
                      break;
                  case -90:
                      $(".rotateDevice").addClass("in right");
                      break;
                  case 90:
                      $(".rotateDevice").addClass("in")
                  }
              else
                  $(".rotateDevice").removeClass("in right");
              $("#visualizationPanel:has(div)").length > 0 ? $(".rotateDevice").removeClass("in right") : $("html").removeAttr("data-landscape-bet").removeAttr("data-addressbar-hidden")
          }
          ;
          var n = Backbone.history.fragment.split("/");
          n.length > 1 && n[0].length > 0 && n[0] != "GG" && (window.addEventListener("orientationchange", orientationChange),
          orientationChange())
      },
      render: function() {
          var i = window._UseNewAppBar ? h.AppBar : s.AppBar;
          return this.props.from == "ThemeAppbar" && (window._UseNewAppBar || window._EuroView) && (i = h.AppBar),
          n.createElement("div", {
              id: "divMain",
              className: "main"
          }, n.createElement(l.ConnectionMsg, {
              model: o
          }), n.createElement(i, {
              key: "AppBar",
              DefItem: this.state.DefMenu
          }), window._UseNewAppBar && window._CanSeeLiveTips ? n.createElement(lt, {
              model: a
          }) : null, this.props.children, n.createElement("div", {
              id: "quickBet"
          }), n.createElement("div", {
              id: "visualizationPanel"
          }), n.createElement("div", {
              id: "pagePanel"
          }), n.createElement("div", {
              id: "betpanel"
          }), n.createElement("div", {
              id: "sabaSports",
              className: "c-frame",
              "data-open": "false"
          }), n.createElement("div", {
              className: "rotateDevice"
          }, n.createElement("div", {
              className: "img-rotate"
          }), n.createElement("div", {
              className: "text-rotate"
          }, t.LanguageHelper.Get("rotate"), n.createElement("br", null), t.LanguageHelper.Get("lbl_LiveMLandModeMsg"))))
      }
  })
    , bt = n.createBackboneClass({
      displayName: "LoadingMin",
      render: function() {
          var t = this.props.noMini ? "" : "preloader-mini";
          return n.createElement("div", {
              className: "preloader " + t
          }, n.createElement("div", {
              className: "preloader_spiner"
          }, n.createElement("div", {
              className: "preloader_circles"
          }, n.createElement("div", {
              className: "preloader_circle-1"
          }), n.createElement("div", {
              className: "preloader_circle-2"
          }))))
      }
  })
    , ut = n.createBackboneClass({
      mixins: [r.MatchInfoMixins],
      render: function() {
          var t = this.GetShowTimeCN(this.props.match), i;
          return typeof t == "string" ? this.props.stylecss ? (i = t.split(" "),
          n.createElement("div", {
              className: this.props.stylecss
          }, n.createElement("span", null, i[0]), i.length > 1 ? n.createElement("span", null, i[1]) : null)) : n.createElement("div", {
              dangerouslySetInnerHTML: {
                  __html: t
              }
          }) : n.createElement(kt, {
              ShowTime: t,
              stylecss: this.props.stylecss
          })
      }
  })
    , kt = n.createBackboneClass({
      getInitialState: function() {
          return {
              sec: this.GetTime()
          }
      },
      componentDidMount: function() {
          this.setTimer()
      },
      componentWillUnmount: function() {
          this.timer && clearTimeout(this.timer)
      },
      componentDidUpdate: function() {
          this.setTimer()
      },
      setTimer: function() {
          var n = this.GetTime();
          n > 0 && (this.timer = setTimeout(function() {
              this.setState({
                  sec: this.GetTime()
              })
          }
          .bind(this), 1e3))
      },
      GetTime: function() {
          var t = this.props.ShowTime.ltm
            , n = 0;
          return t[2] == 0 ? n = Math.round((i.SysTime.get("Time").getTime() - new Date(t[1]).getTime()) / 1e3) : t[2] < 0 && (n = Math.abs(t[2])),
          n = t[0] * 60 - n,
          n < 0 && (n = 0),
          n
      },
      render: function() {
          var i = Math.floor(this.state.sec / 60)
            , r = this.state.sec - i * 60;
          return this.props.stylecss ? n.createElement("div", {
              className: this.props.stylecss
          }, n.createElement("span", null, this.props.ShowTime.txt), n.createElement("span", null, t.padLeft(i, 2) + ":" + t.padLeft(r, 2))) : n.createElement("div", null, " ", this.props.ShowTime.txt + t.padLeft(i, 2) + ":" + t.padLeft(r, 2))
      }
  })
    , dt = n.createBackboneClass({
      displayName: "ScoreDiv",
      render: function() {
          return !~[55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 99].indexOf(this.props.sportid) ? this.props.IsSingle && this.props.IsLive && this.props.HLS == 0 ? this.props.sportid == 44 ? null : n.createElement("div", {
              className: "single_score"
          }, this.props.Score1) : this.props.IsLive && this.props.HLS == 0 ? this.props.sportid == 44 ? n.createElement("div", null, t.LanguageHelper.Get("lbl_round") + this.props.Score1) : n.createElement("div", {
              className: this.props.cls ? this.props.cls : "match_score"
          }, this.props.Score1 + " - " + this.props.Score2) : null : null
      }
  })
    , ft = {
      TimerSuspend: function() {
          var i = null
            , r = this.getModel()
            , u = this.getModel().get("GameID");
          if (r.get("IsLive") && r.get("Tsp"))
              switch (u) {
              case 5:
              case 8:
                  i = n.createElement("div", {
                      className: "match_status"
                  }, n.createElement("i", {
                      className: "icon icon-rain"
                  }));
                  break;
              case 7:
                  i = n.createElement("div", {
                      className: "match_status"
                  }, n.createElement("i", {
                      className: "icon icon-coffee"
                  }));
                  break;
              case 2:
              case 3:
              case 4:
              case 28:
              case 6:
              case 47:
              case 49:
              case 51:
                  i = n.createElement("span", null, t.LanguageHelper.Get("lbl_TOUT"))
              }
          return i
      },
      CreateGTS: function() {
          var u = null, f = "false", r = this.getModel(), i;
          if (r.get("GST") && r.get("GST") != 0) {
              i = "";
              switch (r.get("GST")) {
              case 1:
                  i = t.LanguageHelper.Get("lbl_PRC");
                  break;
              case 2:
                  i = t.LanguageHelper.Get("lbl_PPen");
                  break;
              case 3:
                  i = t.LanguageHelper.Get("lbl_VAR");
                  break;
              case 4:
                  i = t.LanguageHelper.Get("lbl_Pen");
                  break;
              case 5:
                  i = t.LanguageHelper.Get("lbl_Inj");
                  break;
              case 6:
                  i = t.LanguageHelper.Get("lbl_SuddenDeath");
                  f = "true"
              }
              u = n.createElement("div", {
                  className: "match_happen",
                  "data-accent": f
              }, i)
          }
          return u
      }
  }
    , gt = n.createBackboneClass({
      displayName: "TimeStatusDiv",
      mixins: [ft],
      render: function() {
          var i = this.getModel()
            , r = this.TimerSuspend()
            , u = this.CreateGTS()
            , f = n.createElement("div", {
              className: "slideshow",
              "data-ani": r || u ? "true" : ""
          }, n.createElement("div", {
              className: "slideshow_1"
          }, n.createElement(ut, {
              match: i
          })), n.createElement("div", {
              className: "slideshow_2"
          }, u, r));
          return i.get("GST") == 6 && (f = n.createElement("div", {
              className: "match_happen",
              "data-accent": "true"
          }, t.LanguageHelper.Get("lbl_SuddenDeath"))),
          n.createElement("div", {
              className: this.props.cls
          }, f)
      }
  })
    , ni = n.createBackboneClass({
      displayName: "MyFav",
      getInitialState: function() {
          return {
              isReady: !this.getModel().get("Fav")
          }
      },
      changeFav: function(n) {
          this.getModel().set({
              Fav: n
          })
      },
      ClickFav: function(n) {
          n.stopPropagation();
          this.props.type == "match" ? this.getModel().set({
              Fav: !this.getModel().get("Fav")
          }) : t.EventHub.trigger("changeFav-" + this.getModel().get("LeagueId"), !this.getModel().get("Fav"))
      },
      componentDidMount: function() {
          var n = this;
          this.state.isReady || setTimeout(function() {
              n.setState({
                  isReady: !0
              })
          }, 300)
      },
      componentWillMount: function() {
          if (this.props.type != "match")
              t.EventHub.on("changeFav-" + this.getModel().get("LeagueId"), this.changeFav, this)
      },
      componentWillUnmount: function() {
          this.props.type != "match" && t.EventHub.off("changeFav-" + this.getModel().get("LeagueId"), this.changeFav, this)
      },
      render: function() {
          var t = this.getModel()
            , i = this.state.isReady && t.get("Fav");
          return n.createElement("a", {
              className: "c-btn c-btn--myfav",
              "data-added": i,
              onClick: this.ClickFav
          }, n.createElement("i", {
              className: "c-icon c-icon--star-outline"
          }))
      }
  });
  return {
      LogoIcon: et,
      Odds: ot,
      OddsField: d,
      BetMixins: b,
      VirtualTimer: p,
      VirtualMatchList: st,
      VSConvertTime: y,
      VirtualMatchListMixins: nt,
      VirtualVideoDiv: pt,
      RefreshButton: it,
      SubscribeTutorial: ct,
      BellButton: vt,
      Main: wt,
      CheckKtm: k,
      WritePNRLog: tt,
      LoadingMin: bt,
      LiveTimerDiv: ut,
      depositBeforeBet: w,
      ChkCashOut: g,
      ScoreDiv: dt,
      MatchTimeMix: ft,
      TimeStatusDiv: gt,
      MyFav: ni
  }
})
