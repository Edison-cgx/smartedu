(window["webpackJsonpSubApp"] = window["webpackJsonpSubApp"] || [])
.push([
	[7914], {
		21970: function(e, t, n) {
			var r = {
				"./ar.js": 77537,
				"./en-US.js": 97516,
				"./en.js": 52482,
				"./zh-CN.js": 62132,
				"./zh-HK.js": 22164,
				"@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/ar.js": 77537,
				"@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/en-US.js": 97516,
				"@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/en.js": 52482,
				"@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/zh-CN.js": 62132,
				"@sdp.nd/elearning-general-module/lib/exam-answer-ui-player/locale/zh-HK.js": 22164
			};

			function a(e) {
				var t = i(e);
				return n(t)
			}

			function i(e) {
				if (!n.o(r, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return r[e]
			}
			a.keys = function() {
				return Object.keys(r)
			}, a.resolve = i, e.exports = a, a.id = 21970
		},
		5368: function(e, t, n) {
			var r = {
				"./ar.js": 67569,
				"./en-US.js": 95461,
				"./en.js": 94183,
				"./zh-CN.js": 73574,
				"./zh-HK.js": 66874,
				"@sdp.nd/elearning-general-module/lib/question-player/locale/ar.js": 67569,
				"@sdp.nd/elearning-general-module/lib/question-player/locale/en-US.js": 95461,
				"@sdp.nd/elearning-general-module/lib/question-player/locale/en.js": 94183,
				"@sdp.nd/elearning-general-module/lib/question-player/locale/zh-CN.js": 73574,
				"@sdp.nd/elearning-general-module/lib/question-player/locale/zh-HK.js": 66874
			};

			function a(e) {
				var t = i(e);
				return n(t)
			}

			function i(e) {
				if (!n.o(r, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return r[e]
			}
			a.keys = function() {
				return Object.keys(r)
			}, a.resolve = i, e.exports = a, a.id = 5368
		},
		99707: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return d
				}
			});
			n(47567);
			var r = n(280),
				a = n(64164),
				i = n(25720),
				o = n(67294),
				c = n(94184),
				l = n.n(c),
				u = {
					back: "index-module_back_2a-p8"
				},
				s = function(e, t) {
					var n = e.width,
						c = void 0 === n ? 800 : n,
						s = e.closable,
						d = void 0 === s || s,
						m = e.maskClosable,
						p = void 0 === m || m,
						v = e.className,
						f = (0, o.useRef)(),
						_ = (0, o.forwardRef)((function(e, n) {
							var s = e.title,
								m = (0, o.useState)(!1),
								f = (0, i.Z)(m, 2),
								_ = f[0],
								g = f[1],
								h = function() {
									g(!0)
								},
								y = function() {
									g(!1)
								};
							return (0, o.useImperativeHandle)(n, (function() {
								return {
									open: h,
									close: y
								}
							})), _ ? o.createElement(r.Z, {
								className: l()(u.mask, v),
								onCancel: y,
								visible: _,
								title: s,
								footer: null,
								width: c,
								closable: d,
								maskClosable: p
							}, o.createElement(t, (0, a.Z)({}, e, {
								close: y
							}))) : null
						}));
					return {
						FormModal: (0, o.useCallback)((function(e) {
							return o.createElement(_, (0, a.Z)({
								ref: f
							}, e))
						}), []),
						modalRef: f
					}
				},
				d = s
		},
		75213: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				default: function() {
					return Sr
				}
			});
			n(47941), n(82526), n(38880), n(49337), n(41539), n(91038), n(78783), n(41817), n(32165), n(66992), n(33948), n(70676);
			var r = n(36584),
				a = n(42982),
				i = n(15861),
				o = n(4942),
				c = n(70885),
				l = (n(35666), n(68309), n(69826), n(26699), n(47042), n(54747), n(74916), n(15306), n(92222), n(64765), n(23123), n(57327), n(67294)),
				u = n(26353),
				s = n(94184),
				d = n.n(s),
				m = n(96486),
				p = n(96208),
				v = n(86586),
				f = n(82753),
				_ = n(35929),
				g = n(39675),
				h = n(96543),
				y = n(64164),
				w = n(18860),
				b = n(74021),
				x = (n(68251), n(34394)),
				k = (n(47567), n(280)),
				E = n(10369),
				C = n(25720),
				N = (n(21249), n(7236)),
				Z = n(99707),
				P = n(26032),
				I = n(80163),
				S = n(52983),
				T = n(83763),
				R = n(78419),
				O = n(86405),
				j = (n(64061), n(48695)),
				D = n(58203),
				L = {
					wrapper: "index-module_wrapper_127QV",
					"tree-wrapper": "index-module_tree-wrapper_6s7YZ",
					"fish-tree-treenode-leaf-last": "index-module_fish-tree-treenode-leaf-last_1J02X",
					"tree-node-level-1": "index-module_tree-node-level-1_2ujX4",
					footer: "index-module_footer_3f9PX",
					"btn-wrapper": "index-module_btn-wrapper_3GTt_",
					btn: "index-module_btn_2JyHD",
					primary: "index-module_primary_1bn3u"
				};

			function M(e) {
				var t = e.courseInfo,
					n = e.loading,
					r = e.onClose,
					a = e.onSure,
					i = (0, l.useState)([]),
					o = (0, C.Z)(i, 2),
					c = o[0],
					u = o[1],
					s = function(e, t) {
						u(t.checkedNodes.filter((function(e) {
								return !e.children
							}))
							.map((function(e) {
								return e.data
							})))
					};
				return l.createElement(D.Z, {
					loading: n,
					delay: 1e3
				}, l.createElement("div", {
					className: L.wrapper
				}, l.createElement("div", {
					className: L["tree-wrapper"]
				}, l.createElement(j.Z, {
					checkable: !0,
					selectable: !1,
					defaultExpandAll: !0,
					onCheck: s,
					switcherIcon: null
				}, A(t.resourceData.length > 1 ? t.resourceData : t.resourceData[0].resources || t.resourceData[0].childNodes, 0))), l.createElement("div", {
					className: L.footer
				}, l.createElement("span", {
					className: L.count
				}, "已选择", c.length, "个资源，共", t.resourceCount, "个资源"), l.createElement("div", {
					className: L["btn-wrapper"]
				}, l.createElement("span", {
					className: L.btn,
					onClick: r
				}, "取消"), l.createElement("span", {
					className: "".concat(L.btn, " ")
						.concat(L.primary),
					onClick: function() {
						return a(c)
					}
				}, "确认")))))
			}

			function A(e, t) {
				return e.map((function(e) {
					var n;
					return l.createElement(j.Z.TreeNode, {
						title: function() {
							return l.createElement("span", {
								className: L["tree-node-level-".concat(t)]
							}, e.title || "-")
						},
						data: e,
						key: e.id
					}, (null === (n = e.childNodes || e.resources) || void 0 === n ? void 0 : n.length) > 0 && A(e.childNodes || e.resources, t + 1))
				}))
			}
			var F = {
					"play-warpper": "toMyResource-module_play-warpper_1r_jS",
					"main-icon": "toMyResource-module_main-icon_V6iNk",
					"right-icon": "toMyResource-module_right-icon_2W4di",
					"resource-wrap": "toMyResource-module_resource-wrap_iDgjh"
				},
				U = window.location.href.indexOf("ykt.eduyun.cn") > -1 || window.location.href.indexOf("localhost") > -1 || window.location.href.indexOf("127.0.0.1") > -1;

			function H(e) {
				var t = e.className,
					n = void 0 === t ? "" : t,
					a = e.channelCode,
					i = e.firstColumnCode,
					o = e.contentType,
					c = e.contentId,
					u = e.courseInfo,
					s = (0, l.useState)(!1),
					d = (0, C.Z)(s, 2),
					m = d[0],
					p = d[1],
					v = (0, l.useState)(!1),
					f = (0, C.Z)(v, 2),
					_ = f[0],
					g = f[1],
					h = (0, Z.Z)({
						wrapClassName: F["resource-wrap"],
						width: 680,
						centered: !0
					}, M),
					y = h.modalRef,
					w = h.FormModal,
					b = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
							var t;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return t = !1, e.prev = 1, e.next = 4, I.uc.isLogin();
									case 4:
										t = e.sent, e.next = 11;
										break;
									case 7:
										e.prev = 7, e.t0 = e["catch"](1), console.log("uc.isLogin error", e.t0), t = !1;
									case 11:
										return e.abrupt("return", t);
									case 12:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[1, 7]
							])
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();
				(0, l.useEffect)((function() {
					var e = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
							var t, n;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, b();
									case 2:
										if (t = e.sent, t) {
											e.next = 5;
											break
										}
										return e.abrupt("return");
									case 5:
										return e.next = 7, I.uc.getTokenAsync();
									case 7:
										n = e.sent, console.log("env : ".concat(U ? "NCET_XEDU_TEST" : P["default"].env, "  token: ")
											.concat(n)), (0, N.jQ)({
											env: U ? "NCET_XEDU_TEST" : P["default"].env,
											token: n,
											sdpAppId: P["default"].app.appid
										}), p(!0);
									case 11:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();
					e()
				}), []);
				var j = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
							var n, a, i, o;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return g(!0), n = t.map((function(e) {
											var t;
											return {
												resource_id: e.id,
												type: null !== (t = e.ti_items) && void 0 !== t && t.some((function(e) {
													return R.pk.indexOf(e.ti_format) > -1
												})) ? "open" : "get"
											}
										})), a = {
											container_id: u.detail.container_id,
											resource_list: n
										}, e.prev = 3, e.next = 6, (0, N.ns)(a);
									case 6:
										i = e.sent, o = i.fail, o.length ? o.some((function(e) {
											var t;
											return "DOC_CENTER/CAPACITY_NOT_ENOUGH" === (null === (t = e.exception) || void 0 === t ? void 0 : t.code)
										})) ? r.ZP.error("个人资源库容量不足") : r.ZP.error("添加到备课台失败，请重试") : r.ZP.success({
											content: l.createElement(l.Fragment, null, l.createElement("span", null, "成功添加至我的资源库，"), l.createElement("a", {
												onClick: function() {
													return (0, O.urlJumpInElectron)((0, O.queryJoin)("".concat(window.location.origin, "/user/myTchResources"), S.IC ? {
														uckey: I.uc.generateUCKey()
													} : {}))
												}
											}, "点击查看"))
										}), y.current.close(), e.next = 16;
										break;
									case 12:
										e.prev = 12, e.t0 = e["catch"](3), console.log("addToDocCenterBatch error", e.t0), r.ZP.error("添加到备课台失败，请重试");
									case 16:
										return e.prev = 16, g(!1), e.finish(16);
									case 19:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[3, 12, 16, 19]
							])
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					D = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
							var t;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, b();
									case 2:
										if (t = e.sent, t) {
											e.next = 6;
											break
										}
										return k.Z.confirm({
											content: "需要登录才可以添加到我的资源库，是否登录？",
											onOk: function() {
												var e = (0, I.Zd)();
												(0, I.EX)(e)
											}
										}), e.abrupt("return");
									case 6:
										if ((0, T._A)({
											eventName: "edu_platform_addContent_click",
											params: {
												channel_code: a,
												first_column_code: i,
												content_id: c,
												content_type: o,
												task_page_type: "detailPage_top"
											}
										}), !(u.resourceCount <= 1)) {
											e.next = 9;
											break
										}
										return e.abrupt("return");
									case 9:
										y.current.open();
									case 10:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					L = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, j(t);
									case 2:
										y.current.close();
									case 3:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}();
				return m ? l.createElement(l.Fragment, null, l.createElement("div", {
					className: "".concat(n, " ")
						.concat(F["play-warpper"]),
					onClick: D
				}, l.createElement(x.Z, {
					type: "plus"
				}), l.createElement("span", {
					className: F.playicon
				}, "添加到我的资源库")), l.createElement(w, {
					courseInfo: u,
					title: "选择资源",
					onClose: function() {
						return y.current.close()
					},
					onSure: L,
					loading: _
				})) : null
			}
			var B = {
					wrapper: "toolBar-module_wrapper_35pIP"
				},
				q = (n(42518), n(22926)),
				z = (n(34904), n(16498)),
				J = (n(60320), n(3510)),
				W = n(84986),
				X = n(345),
				V = {
					"to-teach": "index-module_to-teach_TPeDl",
					line: "index-module_line_3s6Id",
					"main-icon": "index-module_main-icon_tCv3y",
					"right-icon": "index-module_right-icon_13H27"
				},
				K = {
					"tips-wrapper": "toTeach-module_tips-wrapper_RpFhF",
					tips: "toTeach-module_tips_3My04",
					footer: "toTeach-module_footer_2Svk-",
					btn: "toTeach-module_btn_10ESz",
					"dropdown-overlay-wrapper-arrow": "toTeach-module_dropdown-overlay-wrapper-arrow_3wGZw",
					"dropdown-overlay-wrapper": "toTeach-module_dropdown-overlay-wrapper_219gB",
					listitemWrapper: "toTeach-module_listitemWrapper_2i0Wt",
					active: "toTeach-module_active_1ZhfB",
					listitem: "toTeach-module_listitem_1YATC",
					icon: "toTeach-module_icon_2Bitd",
					"play-warpper": "toTeach-module_play-warpper_3UDdn",
					"main-icon": "toTeach-module_main-icon_ksPR2",
					"fill-space": "toTeach-module_fill-space_367hi",
					line: "toTeach-module_line_d0P91",
					"arrow-icon-wrapper": "toTeach-module_arrow-icon-wrapper_1NwoL",
					"arrow-icon": "toTeach-module_arrow-icon_9FgL_"
				};

			function G(e) {
				var t = e.className,
					n = void 0 === t ? "" : t,
					r = e.onJumpBB,
					a = e.onJumpResourcePlatform,
					i = e.channelCode,
					o = e.firstColumnCode,
					c = e.contentType,
					u = e.contentId,
					s = (0, l.useState)(!window.localStorage.getItem("x_edu_isFirstShow_to_teacher")),
					m = (0, C.Z)(s, 2),
					p = m[0],
					v = m[1],
					f = (0, l.useState)(window.localStorage.getItem("x_edu_selected_101ppt_player_type")),
					_ = (0, C.Z)(f, 2),
					g = _[0],
					h = _[1],
					y = (0, l.useState)("down"),
					w = (0, C.Z)(y, 2),
					b = w[0],
					N = w[1];
				(0, l.useEffect)((function() {
					p && setTimeout((function() {
						window.localStorage.setItem("x_edu_isFirstShow_to_teacher", !0)
					}), 300)
				}), []);
				var Z = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
							var t;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return (0, T._A)({
											eventName: "edu_platform_newGotoClass_click",
											params: {
												channel_code: i,
												first_column_code: o,
												content_type: c,
												content_id: u,
												taskPageType: "detailPage_top",
												app: "whiteBoard"
											}
										}), e.next = 3, (0, I.iT)();
									case 3:
										if (t = e.sent, t) {
											e.next = 7;
											break
										}
										return k.Z.confirm({
											content: "需要登录才可以使用H5播放器上课，是否登录？",
											onOk: function() {
												var e = (0, I.Zd)();
												(0, I.EX)(e)
											}
										}), e.abrupt("return");
									case 7:
										r && (r(), h("whiteBoard"), window.localStorage.setItem("x_edu_selected_101ppt_player_type", "whiteBoard"), N("down"));
									case 8:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					P = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
							var t;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return (0, T._A)({
											eventName: "edu_platform_newGotoClass_click",
											params: {
												channel_code: i,
												first_column_code: o,
												content_type: c,
												content_id: u,
												taskPageType: "detailPage_top",
												app: "101ppt"
											}
										}), e.next = 3, (0, I.iT)();
									case 3:
										if (t = e.sent, t) {
											e.next = 7;
											break
										}
										return k.Z.confirm({
											content: "需要登录才可以使用默认播放器上课，是否登录？",
											onOk: function() {
												var e = (0, I.Zd)();
												(0, I.EX)(e)
											}
										}), e.abrupt("return");
									case 7:
										h("ppt"), window.localStorage.setItem("x_edu_selected_101ppt_player_type", "ppt"), null === a || void 0 === a || a("play"), N("down");
									case 11:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					S = function() {
						r ? g && ("ppt" === g ? P() : Z()) : P()
					},
					R = function(e) {
						N(e ? "up" : "down")
					},
					O = function() {
						return l.createElement("div", {
							className: K.tips
						}, l.createElement("span", null, "点击这里可以切换授课应用的播放器"), l.createElement("div", {
							className: K.footer
						}, l.createElement("span", {
							className: K.btn,
							onClick: function() {
								return v(!1)
							}
						}, "我知道了")))
					},
					j = function() {
						return l.createElement(J.Z, null, l.createElement(J.Z.Item, null, l.createElement("div", {
							className: d()(K.listitemWrapper, "ppt" === g ? K.active : ""),
							onClick: function() {
								(0, T._A)({
									eventName: "edu_platform_newGotoClass_choose101PPT_click",
									params: {
										channel_code: i,
										first_column_code: o,
										content_type: c,
										content_id: u
									}
								}), P()
							}
						}, l.createElement("span", {
							className: K.listitem
						}, "使用默认播放器上课"), l.createElement("img", {
							className: K.icon,
							src: W
						}))), l.createElement(J.Z.Item, null, l.createElement("div", {
							className: d()(K.listitemWrapper, "whiteBoard" === g ? K.active : ""),
							onClick: Z
						}, l.createElement("span", {
							className: K.listitem
						}, "使用H5播放器上课"), l.createElement("img", {
							className: K.icon,
							src: W
						}))))
					},
					D = function() {
						var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
							t = arguments.length > 1 ? arguments[1] : void 0;
						return l.createElement("div", {
							className: "".concat(V["to-teach"], " ")
								.concat(n, " ")
								.concat(K["play-warpper"])
						}, l.createElement("img", {
							className: K["main-icon"],
							src: X,
							onClick: S
						}), l.createElement("span", {
							className: K["fill-space"],
							onClick: S
						}), l.createElement("span", {
							className: K.playicon,
							onClick: S
						}, "播放"), l.createElement("span", {
							className: K.line
						}), l.createElement("div", {
							className: K["arrow-icon-wrapper"]
						}, e ? l.createElement(z.Z, {
							overlay: j,
							overlayClassName: d()(K["dropdown-overlay-wrapper"], K["dropdown-overlay-wrapper-arrow"]),
							placement: "bottomRight",
							onVisibleChange: R
						}, l.createElement(x.Z, {
							className: d()(K["arrow-icon"]),
							type: t || b
						})) : l.createElement(x.Z, {
							className: d()(K["arrow-icon"]),
							type: t || b
						})))
					};
				return r ? l.createElement(q.Z, {
					visible: p,
					content: O,
					placement: "bottomRight",
					overlayClassName: K["tips-wrapper"],
					overlayStyle: {
						zIndex: 100
					}
				}, g ? D() : l.createElement(z.Z, {
					overlay: j,
					overlayClassName: K["dropdown-overlay-wrapper"],
					placement: "bottomRight",
					trigger: ["click", "hover"],
					onVisibleChange: R
				}, D(!1))) : D(!1, "right")
			}

			function Q(e) {
				var t = e.className,
					n = void 0 === t ? "" : t,
					r = e.onJumpBB,
					a = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
							var t;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, (0, I.iT)();
									case 2:
										if (t = e.sent, t) {
											e.next = 6;
											break
										}
										return k.Z.confirm({
											content: "需要登录才可以使用触控屏，是否登录？",
											onOk: function() {
												var e = (0, I.Zd)();
												(0, I.EX)(e)
											}
										}), e.abrupt("return");
									case 6:
										r && r();
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();
				return l.createElement("div", {
					className: "".concat(V["to-teach"], " ")
						.concat(n),
					onClick: a
				}, l.createElement("img", {
					className: V["main-icon"],
					src: X
				}), l.createElement("span", null, "播放"), l.createElement("span", {
					className: V.line
				}), l.createElement(x.Z, {
					className: V["right-icon"],
					type: "right"
				}))
			}

			function Y(e) {
				var t = e.className,
					n = e.onJumpBB,
					r = e.onJumpResourcePlatform,
					a = (0, l.useContext)(b.Z),
					i = a.userInfo,
					o = e.onAddResource;
				if (n && !r) return l.createElement(Q, e);
				var c = (0, w.MO)(null === i || void 0 === i ? void 0 : i.user_id) && o;
				return l.createElement("div", {
					className: "".concat(B.wrapper, " ")
						.concat(t || "", " ")
				}, c && l.createElement(H, (0, y.Z)({}, e, {
					onJumpResourcePlatform: r,
					className: ""
				})), l.createElement(G, (0, y.Z)({}, e, {
					onJumpBB: n,
					className: B.toolbtn,
					onJumpResourcePlatform: r
				})))
			}
			var $ = n(88454),
				ee = n(96288),
				te = n(92474),
				ne = n(26500),
				re = {},
				ae = {},
				ie = function() {
					var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
						var n, r, a, i;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									n = t.alias, r = t.onLogined, a = t.onNewMessage, re[n] ? ae[n] = a : (i = new ne.Z, i.open({
										url: P["default"].api["iot-push-ws"],
										appId: P["default"].app.appid,
										disableSharedWorker: !0
									}), i.setAlias("".concat(n)), re[n] = i, ae[n] = a, i.onLogined = r, i.onNewMessage = function(e) {
										ae[n] && ae[n](e)
									});
								case 2:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}(),
				oe = n(41138),
				ce = n(76995),
				le = n(74568),
				ue = n(52626),
				se = n(86748),
				de = n(22085),
				me = n(60553),
				pe = n(4165),
				ve = n(94415),
				fe = n(21975),
				_e = n(53530),
				ge = n(37865),
				he = n(24086),
				ye = n(48740),
				we = (n(98981), n(88362)),
				be = n.n(we),
				xe = n(46514),
				ke = n(75694),
				Ee = n(68727),
				Ce = (n(9653), n(13130)),
				Ne = n(13494),
				Ze = (n(21717), n(56681)),
				Pe = (n(34553), n(56977), [.33, .5, .67, .75, .9, 1, 1.1, 1.25, 1.5, 1.75, 2]);

			function Ie(e) {
				var t = e.pageCount,
					n = e.pageNumber,
					r = e.thumbShow,
					a = e.isFullscreen,
					i = e.isPageChangeButton,
					o = void 0 === i || i,
					c = e.isThumbButton,
					u = void 0 === c || c,
					s = e.scale,
					m = e.onPageUp,
					p = e.onPageDown,
					v = e.onPageTo,
					f = e.onChangeTempPageNum,
					_ = e.onFullScreen,
					g = e.onToggleThumbnail,
					h = e.onScalePage,
					y = function(e, t) {
						var n = Pe.findIndex((function(e) {
							return e === s
						}));
						return "zoom-in" === t ? 0 === n ? Pe[n] : Pe[n - 1] : "zoom-out" === t ? n === Pe.length - 1 ? Pe[n] : Pe[n + 1] : void 0
					};
				return l.createElement("div", {
					className: "doc-toolbar"
				}, l.createElement("div", {
					className: "left"
				}, u && l.createElement(l.Fragment, null, l.createElement("div", {
					className: d()("tool-btn thumbnail", {
						active: r
					}),
					onClick: g,
					title: "缩略图"
				}), l.createElement("div", {
					className: "split-line"
				}))), l.createElement("div", {
					className: "center"
				}, l.createElement("div", {
					className: "split-line"
				}), o && l.createElement(l.Fragment, null, l.createElement("div", {
					className: "tool-btn page-up",
					onClick: m,
					title: "上一屏"
				}), l.createElement("div", {
					className: "split-line"
				})), l.createElement("div", {
					className: "page-num"
				}, l.createElement(Ze.Z, {
					className: "page-num-input",
					size: "small",
					min: 0,
					max: t,
					value: n,
					onChange: f,
					onPressEnter: v,
					onBlur: v
				}), "/  ".concat(t)), l.createElement("div", {
					className: "split-line"
				}), o && l.createElement(l.Fragment, null, l.createElement("div", {
					className: "tool-btn page-down",
					onClick: p,
					title: "下一屏"
				}), l.createElement("div", {
					className: "split-line"
				}))), l.createElement("div", {
					className: "right"
				}, l.createElement("div", {
					className: "split-line"
				}), a && l.createElement(l.Fragment, null, l.createElement("div", {
					className: "tool-btn zoom-in",
					onClick: function() {
						return h(y(s, "zoom-in"))
					},
					title: "缩小"
				}), l.createElement("div", {
					className: "split-line"
				}), l.createElement("div", {
					className: "scale-value"
				}, "".concat((100 * s)
					.toFixed(0), " %")), l.createElement("div", {
					className: "split-line"
				}), l.createElement("div", {
					className: "tool-btn zoom-out",
					onClick: function() {
						return h(y(s, "zoom-out"))
					},
					title: "放大"
				}), l.createElement("div", {
					className: "split-line"
				})), l.createElement("div", {
					className: "tool-btn fullscreen",
					onClick: _,
					title: "全屏"
				})))
			}

			function Se(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t)
							.enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Te(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Se(Object(n), !0)
						.forEach((function(t) {
							(0, xe.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			var Re = "excel-iframe",
				Oe = document.documentElement.style.overflow;

			function je(e) {
				var t = e.data,
					n = e.onPageChange,
					r = e.maxPosition,
					a = e.trackInfo,
					i = e.pageName,
					o = e.origin,
					c = e.controlSeeking,
					u = (0, l.useRef)(),
					s = (0, l.useState)(null),
					m = (0, C.Z)(s, 2),
					p = m[0],
					v = m[1],
					f = (0, l.useState)(1),
					_ = (0, C.Z)(f, 2),
					g = _[0],
					h = _[1],
					y = (0, l.useState)(null),
					w = (0, C.Z)(y, 2),
					b = w[0],
					x = w[1],
					k = (0, l.useState)(""),
					N = (0, C.Z)(k, 2),
					Z = N[0],
					P = N[1],
					I = (0, l.useState)(1),
					S = (0, C.Z)(I, 2),
					R = S[0],
					O = S[1],
					j = (0, l.useState)(!0),
					L = (0, C.Z)(j, 2),
					M = L[0],
					A = L[1],
					F = (0, l.useState)(!1),
					U = (0, C.Z)(F, 2),
					H = U[0],
					B = U[1],
					q = (0, l.useState)(r || t.beginPage || 0),
					z = (0, C.Z)(q, 2),
					J = z[0],
					W = z[1];
				(0, l.useEffect)((function() {
					(r > J || t.beginPage > J) && W(r > t.beginPage ? r : t.beginPage)
				}), [r, t.beginPage]);
				var X = function() {
					if (a) {
						var e = a.resource_id,
							t = a.resource_type,
							n = a.column_code,
							r = a.channel_code;
						(0, T.Zk)({
							eventName: "resource_duration",
							params: {
								resource_type: t,
								resource_id: e,
								column_code: n,
								channel_code: r,
								time_point: (new Date)
									.getTime()
							}
						})
					}
				};
				(0, l.useEffect)((function() {
					var e = t.files;
					if (e) {
						var n = e.find((function(e) {
							return "html" === e.type
						}));
						x(Te({}, n)), h(n.file_urls.length), X()
					}
				}), []);
				var V = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										X(), O(t);
									case 2:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					K = function() {
						document.documentElement.style.overflow = H ? Oe : "hidden", B(!H), V(1), "TCH" === o ? ((0, ge.hC)({
							eventName: "TCH_webPlatform_detail_Document_Fullscreen_click",
							pageName: i || "TCH_webPlatform_detail_Document_Fullscreen_click",
							params: {
								screen_state: H ? "退出全屏" : "打开全屏"
							}
						}), X()) : Ne.Z.trackEvent({
							eventId: H ? "edu_webPlatform_player_Exitfullscreen_click" : "edu_webPlatform_player_Fullscreen_click",
							info: {
								type: "文档播放器"
							}
						})
					},
					G = function(e) {
						var r, a = Number(e) || Number(null === e || void 0 === e || null === (r = e.target) || void 0 === r ? void 0 : r.value);
						if (a && !(a < 1 || a > g) && a !== p && !(c && a > J)) {
							A(!0);
							var i = t.hosts,
								o = "".concat(i[0])
								.concat(b.file_urls[a - 1]);
							P(o), v(a), c && a > J && W(a + 1), A(!1), X(), n({
								currentPage: a,
								pageCount: g
							})
						}
					},
					Q = function() {
						var e = p - 1;
						e > 0 && G(e)
					},
					Y = function() {
						var e = p + 1;
						e <= g && G(e)
					};
				return (0, l.useEffect)((function() {
					b && g && G(1)
				}), [b, g]), l.createElement("div", {
					className: d()("course-document", {
						"full-screen": H
					}),
					onClick: function() {
						X()
					}
				}, M && l.createElement("div", {
					className: "document-context placeholder"
				}, l.createElement(D.Z, null)), b ? l.createElement(l.Fragment, null, l.createElement("div", {
					className: "document-context",
					ref: u,
					style: {
						overflow: "hidden"
					}
				}, l.createElement("iframe", {
					id: Re,
					key: Z,
					src: Z,
					frameBorder: 0,
					height: "".concat(100 * R, "%"),
					width: "".concat(100 * R, "%")
				}))) : l.createElement("div", {
					className: "document-context placeholder"
				}, l.createElement(Ce.Z, null)), l.createElement(Ie, {
					pageCount: g,
					pageNumber: p,
					scale: R,
					isFullscreen: H,
					isPageChangeButton: g > 1,
					isThumbButton: !1,
					onFullScreen: K,
					onScalePage: V,
					onPageTo: G,
					onPageUp: Q,
					onPageDown: Y
				}))
			}

			function De(e) {
				var t = e.data,
					n = void 0 === t ? {
						url: "",
						beginPage: 1
					} : t,
					r = e.onPageChange,
					a = void 0 === r ? function() {} : r,
					i = e.origin,
					o = e.pageName,
					c = e.trackInfo,
					u = e.maxPosition,
					s = e.controlSeeking,
					d = (e.className, u || 1),
					m = n.beginPage || 1,
					p = (0, l.useRef)(null),
					v = (0, l.useRef)((function() {})),
					f = (0, l.useRef)({}),
					_ = (0, l.useState)(!1),
					g = (0, C.Z)(_, 2),
					h = g[0],
					y = g[1],
					w = (0, l.useState)(!1),
					b = (0, C.Z)(w, 2),
					x = b[0],
					k = b[1],
					E = (0, O.isTestHost)() ? "https://teach-test.ykt.eduyun.cn" : "https://teacher.ykt.eduyun.cn",
					N = "".concat(E, "/pdfjs/2.13/web/viewer.html?file=")
					.concat(encodeURIComponent(n.url), "#disablestream=true&disableAutoFetch=true&page=")
					.concat(m),
					Z = (0, l.useCallback)((function() {
						p.current.contentWindow.postMessage({
							type: "pdfPlayerArgumentsChange",
							data: {
								controlSeeking: s,
								maxPosition: m > d ? m : d
							}
						}, "*")
					}), [s, u, n]),
					P = function() {
						if (c) {
							var e = c.resource_id,
								t = c.resource_type,
								n = c.column_code,
								r = c.channel_code;
							(0, T.Zk)({
								eventName: "resource_duration",
								params: {
									resource_type: t,
									resource_id: e,
									column_code: n,
									channel_code: r,
									time_point: (new Date)
										.getTime()
								}
							})
						}
					};
				return (0, l.useEffect)((function() {
					x && Z()
				}), [s, u, x]), window.removeEventListener("message", v.current), v.current = (0, l.useCallback)((function(e) {
					var t = e.data;
					switch (null === t || void 0 === t ? void 0 : t.type) {
						case "pdfPlayerLoaded":
							Z(), k(!0);
							break;
						case "pdfPlayerInitPage":
						case "pdfPlayerPageChangeing":
							a({
								currentPage: t.data.pageNumber,
								pageCount: t.data.pageCount
							});
							break;
						case "pdfPlayerNextPage":
						case "pdfPlayerPreviousPage":
						case "pdfPlayerPageNumberChanged":
							"TCH" === i ? ((0, ge.hC)({
								eventName: "TCH_webPlatform_detail_Document_turnpage_click",
								pageName: o || "TCH_webPlatform_detail_Document_turnpage_click",
								params: c
							}), P()) : Ne.Z.trackEvent({
								eventId: "edu_webPlatform_Document_turnpage_click"
							});
							break;
						case "pdfPlayerSidebarViewChanged":
							"TCH" === i ? ((0, ge.hC)({
								eventName: "TCH_webPlatform_detail_Document_on-offFilelist_click",
								pageName: o || "TCH_webPlatform_detail_Document_on-offFilelist_click",
								params: c
							}), P()) : Ne.Z.trackEvent({
								eventId: "edu_webPlatform_Document_on-offfilelist_click"
							});
							break;
						case "pdfPlayerScaleChanging":
							if ((new Date)
								.getTime() - Number(f.current.pdfPlayerScaleChanging) < 500) break;
							if (h) break;
							f.current.pdfPlayerScaleChanging = (new Date)
								.getTime(), "TCH" === i && ((0, ge.hC)({
									eventName: "TCH_webPlatform_detail_Document_pictureScale_click",
									pageName: o || "TCH_webPlatform_detail_Document_pictureScale_click",
									params: {
										document_scale: t.data.scale
									}
								}), P());
							break;
						case "pdfPlayerFullscreenChanged":
							if ((new Date)
								.getTime() - Number(f.current.pdfPlayerFullscreenChanged) < 500) break;
							f.current.pdfPlayerFullscreenChanged = (new Date)
								.getTime(), setTimeout((function() {
									y(t.data.isFullscreen)
								}), t.data.isFullscreen ? 0 : 200), "TCH" === i ? ((0, ge.hC)({
									eventName: "TCH_webPlatform_detail_Document_Fullscreen_click",
									pageName: o || "TCH_webPlatform_detail_Document_Fullscreen_click",
									params: {
										screen_state: t.data.isFullscreen ? "打开全屏" : "退出全屏"
									}
								}), P()) : Ne.Z.trackEvent({
									eventId: t.data.isFullscreen ? "edu_webPlatform_player_Fullscreen_click" : "edu_webPlatform_player_Exitfullscreen_click",
									info: {
										type: "文档播放器"
									}
								});
							break;
						case "pdfPlayerThumbnailViewerClick":
							"TCH" === i ? ((0, ge.hC)({
								eventName: "TCH_webPlatform_detail_Document_switchFilelist_click",
								pageName: o || "TCH_webPlatform_detail_Document_switchFilelist_click",
								params: c
							}), P()) : Ne.Z.trackEvent({
								eventId: "edu_webPlatform_Document_switchfilelist_click"
							});
							break;
						default:
							break
					}
				}), [i, o, c, a, h]), window.addEventListener("message", v.current), (0, l.useEffect)((function() {
					return function() {
						window.removeEventListener("message", v.current)
					}
				}), []), (0, l.useMemo)((function() {
					return l.createElement("iframe", {
						key: "pdfViewer",
						ref: p,
						src: N,
						style: {
							height: "640px",
							width: "100%",
							border: 0,
							display: "block"
						},
						allowFullScreen: !0,
						allowaymentrequest: !0
					})
				}), [N])
			}
			var Le = De,
				Me = ["xls", "xlsx", "xlsm"],
				Ae = "pdf",
				Fe = 120;

			function Ue(e) {
				var t = e.data,
					n = e.beginPage,
					r = e.onPageChange,
					a = e.origin,
					i = e.pageName,
					o = e.trackInfo,
					c = e.maxPosition,
					u = void 0 === c ? 0 : c,
					s = e.controlSeeking;
				if (!t || !t.files) return null;
				var d = t.source_type,
					m = t.files,
					p = t.hosts,
					v = t.page_count,
					f = m && m.find((function(e) {
						return e.type === Ae
					}));
				if (Me.includes(d) || !f) return l.createElement(je, {
					data: t,
					origin: a,
					pageName: i,
					trackInfo: o,
					onPageChange: r,
					maxPosition: u,
					controlSeeking: s
				});
				var _ = (0, Ee.hL)(t),
					g = m.find((function(e) {
						return "thumbnail" === e.type
					})),
					h = g ? g.file_urls.map((function(e) {
						return "".concat(p[0])
							.concat(e, "?size=")
							.concat(Fe)
					})) : [];
				return l.createElement(Le, {
					key: t.resource_id,
					data: {
						url: _,
						thumbnailList: h,
						numPages: v,
						beginPage: n
					},
					origin: a,
					pageName: i,
					trackInfo: o,
					onPageChange: r,
					maxPosition: u,
					controlSeeking: s
				})
			}
			var He = n(1859),
				Be = n(82563),
				qe = (n(69600), n(17604)),
				ze = n(72611),
				Je = n(82300),
				We = n(50100),
				Xe = n(3511),
				Ve = P["default"].env,
				Ke = "Marker_".concat(Ve),
				Ge = {
					UNDO: 0,
					DOING: 1,
					PASS: 2,
					NO_PASS: 3
				},
				Qe = function() {
					function e() {
						(0, Je.Z)(this, e), this.storage = new Xe.Z, this.init(), this.markers = null
					}
					return (0, We.Z)(e, [{
						key: "setKey",
						value: function(e, t) {
							this.activityId = e, this.resourceId = t, this.key = "".concat(e, "_")
								.concat(t)
						}
					}, {
						key: "init",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
								var t;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, (0, I.bG)();
										case 2:
											return t = e.sent, this.userId = null === t || void 0 === t ? void 0 : t.user_id, this.tableName = "MarkerExercise_".concat(this.userId), e.next = 7, this.storage.initSchema(this.tableName, Ke);
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t() {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "updateOneMarkerProgress",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e(t, n) {
								var r, a, i;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.storage.get(this.tableName, this.key);
										case 2:
											if (e.t0 = e.sent, e.t0) {
												e.next = 5;
												break
											}
											e.t0 = [];
										case 5:
											return a = e.t0, null !== (r = a) && void 0 !== r && r.length || (a = this.markers || []), i = a.find((function(e) {
												return e.id === t
											})), i && (i.progress = n), e.next = 11, this.storage.put(this.tableName, this.key, a);
										case 11:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t(t, n) {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "getMarkerList",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
								var t, n, r;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.storage.get(this.tableName, this.key);
										case 2:
											if (e.t0 = e.sent, e.t0) {
												e.next = 5;
												break
											}
											e.t0 = [];
										case 5:
											return t = e.t0, e.next = 8, (0, ve.S1)(this.activityId, this.resourceId);
										case 8:
											return n = e.sent, r = n.map((function(e) {
												var n = t.find((function(t) {
													return t.id === e.id
												}));
												return e.progress = (null === n || void 0 === n ? void 0 : n.progress) || {
													status: Ge.UNDO
												}, e.answer_questions = (null === n || void 0 === n ? void 0 : n.answer_questions) || "", e
											})), this.markers = r, e.next = 13, this.storage.put(this.tableName, this.key, r);
										case 13:
											return e.abrupt("return", r);
										case 14:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t() {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "getMarker",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
								var n, r, a;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.storage.get(this.tableName, this.key);
										case 2:
											if (e.t0 = e.sent, e.t0) {
												e.next = 5;
												break
											}
											e.t0 = [];
										case 5:
											return r = e.t0, null !== (n = r) && void 0 !== n && n.length || (r = this.markers || []), a = r.find((function(e) {
												return e.id === t
											})) || {}, e.abrupt("return", a);
										case 9:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t(t) {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "delMarkerList",
						value: function() {
							this.markers = null, this.storage.removeByKey(this.tableName, this.key)
						}
					}, {
						key: "updateOneMarkerKV",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e(t, n) {
								var r, a, i, o, c = arguments;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											if (a = c.length > 2 && void 0 !== c[2] ? c[2] : "", t) {
												e.next = 3;
												break
											}
											return e.abrupt("return", !1);
										case 3:
											return e.next = 5, this.storage.get(this.tableName, this.key);
										case 5:
											if (e.t0 = e.sent, e.t0) {
												e.next = 8;
												break
											}
											e.t0 = [];
										case 8:
											return i = e.t0, null !== (r = i) && void 0 !== r && r.length || (i = this.markers || []), o = i.find((function(e) {
												return e.id === t
											})), o && (o[n] = a), e.next = 14, this.storage.put(this.tableName, this.key, i);
										case 14:
											return e.abrupt("return", !0);
										case 15:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t(t, n) {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "setAnswerQuestionIds",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
								var n, r = arguments;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return n = r.length > 1 && void 0 !== r[1] ? r[1] : [], e.next = 3, this.updateOneMarkerKV(t, "answer_questions", n.join(","));
										case 3:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t(t) {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "getAnswerQuestionIds",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
								var n, r;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.getMarker(t);
										case 2:
											return r = e.sent, e.abrupt("return", (null === (n = r.answer_questions) || void 0 === n ? void 0 : n.split(",")
												.filter((function(e) {
													return e
												}))) || []);
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t(t) {
								return e.apply(this, arguments)
							}
							return t
						}()
					}]), e
				}(),
				Ye = new Qe,
				$e = (n(83531), n(87314)),
				et = (n(83155), n(37107)),
				tt = n.n(et),
				nt = (n(88674), {
					"course-player": "index-module_course-player_5k2dJ",
					markerExercise: "index-module_markerExercise_KM5bU",
					box: "index-module_box_blt8G",
					header: "index-module_header_35MsH",
					title: "index-module_title_1HDZy",
					index: "index-module_index_1QxsB",
					skip: "index-module_skip_1Py4k",
					body: "index-module_body_3fqiu",
					footer: "index-module_footer_3r1Yy",
					greenMarker: "index-module_greenMarker_nFssC",
					alertModal: "index-module_alertModal_Xd_Jm"
				}),
				rt = tt()
				.ExamAnswerPlayer,
				at = tt()
				.ExamAnswerEventBus,
				it = tt()
				.ExamAnswerEvent,
				ot = 0,
				ct = {},
				lt = {
					AnswerAll: 0,
					CorrectNum: 1,
					CorrectRate: 2
				};

			function ut(e) {
				var t = e.questions,
					n = e.sessionId,
					r = e._useLocalAnswer,
					a = e.onCancel,
					i = e.passed,
					o = e.allowSkip,
					c = e.completionType,
					u = e.completionDetail,
					s = e.setPlayRef,
					d = e.libraryId,
					m = e.courseId,
					p = e.resourceId,
					v = e.status,
					f = void 0 === v ? 0 : v,
					_ = (0, l.useState)(!1),
					g = (0, C.Z)(_, 2),
					h = g[0],
					y = g[1],
					w = (0, l.useState)(!1),
					b = (0, C.Z)(w, 2),
					E = b[0],
					N = b[1],
					Z = (0, l.useState)(!1),
					I = (0, C.Z)(Z, 2),
					S = I[0],
					R = I[1],
					j = (0, l.useState)(null),
					D = (0, C.Z)(j, 2),
					L = D[0],
					M = D[1],
					A = (0, l.useState)(0),
					F = (0, C.Z)(A, 2),
					U = F[0],
					H = F[1],
					B = (0, l.useState)(null),
					q = (0, C.Z)(B, 2),
					z = q[0],
					J = q[1],
					W = (0, l.useState)(r),
					X = (0, C.Z)(W, 2),
					V = X[0],
					K = X[1],
					G = (0, l.useState)(!0),
					Q = (0, C.Z)(G, 2),
					Y = Q[0],
					$ = Q[1],
					ee = (0, l.useState)(Date.now()),
					te = (0, C.Z)(ee, 2),
					ne = te[0],
					re = te[1],
					ae = function() {
						return new Promise((function(e) {
							k.Z.confirm({
								content: "离开将无法继续学习，确认离开吗？",
								okText: "确定",
								onOk: function() {
									e(!0), (0, T.XN)({
										eventName: "edu_Platform_exercise_quit_click",
										params: {
											channel_code: (0, O.getPageChannelCode)(),
											column_code: d,
											resource_id: p,
											training_id: P["default"].library.trainingId,
											course_id: m,
											answer_type: (0, He.dz)(f),
											exercise_type: "断点练习"
										}
									})
								},
								cancelText: "继续作答",
								onCancel: function() {
									e(!1), (0, T.XN)({
										eventName: "edu_Platform_exercise_page",
										params: {
											channel_code: (0, O.getPageChannelCode)(),
											column_code: d,
											resource_id: p,
											training_id: P["default"].library.trainingId,
											course_id: m,
											answer_type: (0, He.dz)(f),
											exercise_type: "断点练习"
										}
									})
								}
							})
						}))
					};
				(0, l.useEffect)((function() {
					s({
						onExit: ae
					}), ct = {}, ot = 0, (0, T.XN)({
						eventName: "edu_Platform_exercise_page",
						params: {
							channel_code: (0, O.getPageChannelCode)(),
							column_code: d,
							resource_id: p,
							training_id: P["default"].library.trainingId,
							course_id: m,
							answer_type: (0, He.dz)(f),
							exercise_type: "断点练习"
						}
					}), (0, T._A)({
						eventName: "edu_Platform_exercise_click",
						params: {
							channel_code: (0, O.getPageChannelCode)(),
							column_code: d,
							resource_id: p,
							training_id: P["default"].library.trainingId,
							course_id: m,
							answer_type: (0, He.dz)(f),
							exercise_type: "断点练习"
						}
					}), at.on(it.QUESTIONCHANGED, (function(e) {
						J(e), H(e.index), ot = e.index, V && !ct[e.id] && 0 !== e.state && (ct[e.id] = !0, N(!0), y(!1))
					})), at.on(it.USERANSWERCHANGED, (function(e) {
						["SINGLE_CHOICE", "JUDGMENT"].includes(e.questionBody.qt_info.code) ? 1 === e.state && (ct[e.id] = !0, at.emit(it.COMMITQUESTION), at.emit(it.SHOWANALYSIS, !1), ot + 1 === t.length ? R(!0) : (y(!0), N(!1))) : 1 === e.state ? N(!0) : N(!1)
					})), at.on("statisticChanged", (function(e) {
						M(e)
					}));
					var e = function(e) {
						return e.preventDefault(), e.returnValue = "离开将无法继续学习，确认离开吗？", "离开将无法继续学习，确认离开吗？"
					};
					return window.addEventListener("beforeunload", e),
						function() {
							ct = {}, window.removeEventListener("beforeunload", e)
						}
				}), [ne]);
				var ie = function() {
						ct[z.id] = !0, N(!1), at.emit(it.COMMITQUESTION), at.emit(it.SHOWANALYSIS, !1), y(!0), U + 1 === t.length ? R(!0) : y(!0)
					},
					oe = function() {
						U + 1 < t.length && (at.emit(it.NEXTQUESTION), y(!1))
					},
					ce = function() {
						var e = L || {},
							t = e.totalCount,
							n = void 0 === t ? 1 : t,
							r = e.doneCount,
							o = e.correctCount,
							l = r === n,
							s = function(e) {
								k.Z.confirm({
									content: e,
									okText: "重新作答",
									onOk: function() {
										K(!1), $(!1), R(!1), setTimeout((function() {
											$(!0), re(Date.now())
										}), 50)
									},
									cancelText: "退出学习",
									onCancel: function() {
										a(!1, l), (0, T.XN)({
											eventName: "edu_Platform_exercise_quit_click",
											params: {
												channel_code: (0, O.getPageChannelCode)(),
												column_code: d,
												resource_id: p,
												training_id: P["default"].library.trainingId,
												course_id: m,
												answer_type: (0, He.dz)(f),
												exercise_type: "断点练习"
											}
										})
									}
								})
							},
							v = c === lt.AnswerAll;
						if (c === lt.CorrectNum ? v = o >= u : c === lt.CorrectRate && (v = o / n * 100 >= u), i || v) a(v, l);
						else {
							if (c === lt.AnswerAll) return s("您还有".concat(n - r, "题未答，退出练习后将不能继续学习")), !1;
							if (c === lt.CorrectNum) return s("您只答对了".concat(o, "道题目，需要答对")
								.concat(u, "道题目后才能继续学习")), !1;
							if (c === lt.CorrectRate) {
								var _ = Math.round(o / n * 100);
								return s("您答题正确率为".concat(_, "%，需正确率达到")
									.concat(u, "%后才能继续学习")), !1
							}
						}
					},
					le = function() {
						a(!0, !0)
					},
					ue = function() {
						return S ? l.createElement($e.Z, {
							type: "primary",
							onClick: function() {
								var e = L || {},
									t = e.totalCount,
									n = void 0 === t ? 1 : t,
									r = e.correctCount;
								(0, T._A)({
									eventName: "edu_Platform_exercise_submit_click",
									params: {
										channel_code: (0, O.getPageChannelCode)(),
										column_code: d,
										resource_id: p,
										training_id: P["default"].library.trainingId,
										course_id: m,
										answer_type: (0, He.dz)(f),
										answer_num: n,
										answer_correctly_num: r,
										exercise_type: "断点练习"
									}
								}), ce()
							}
						}, "完成") : E ? l.createElement($e.Z, {
							type: "primary",
							onClick: ie
						}, "确定") : h ? l.createElement($e.Z, {
							type: "primary",
							onClick: oe
						}, "下一题") : void 0
					};
				return l.createElement("div", {
					className: nt.markerExercise
				}, l.createElement("div", {
					className: nt.box
				}, l.createElement("div", {
					className: nt.header
				}, l.createElement("div", null, l.createElement("span", {
					className: nt.title
				}, "练习"), l.createElement("span", {
					className: nt.index
				}, U + 1), l.createElement("span", null, "/", t.length)), l.createElement("div", null, o && !i && l.createElement("a", {
					className: nt.skip,
					onClick: function() {
						le()
					}
				}, "跳过"), i && l.createElement(x.Z, {
					type: "close",
					onClick: function() {
						ce()
					}
				}))), l.createElement("div", {
					className: nt.body
				}, Y && l.createElement(rt, {
					key: "answer_area_".concat(n),
					config: {
						useSession: !1,
						sessionId: n,
						status: 0,
						examModel: "simplify",
						questions: t,
						enableLocalMark: !0,
						answerMode: 0,
						useLocalAnswer: V,
						gaea_js_config: {
							"static.url": "//s1.ykt.cbern.com.cn/",
							"cs.download.url": "//cdncs.ykt.cbern.com.cn/v0.1/static"
						},
						cdnCs: "//cdncs.ykt.cbern.com.cn"
					},
					startFromUndo: V,
					questionRenderOptions: {
						showScore: !1,
						showMarkCando: !1,
						attachmentsAllowed: !1,
						smartKeyboard: {
							enable: !1
						}
					},
					lang: "zh-CN"
				})), l.createElement("div", {
					className: nt.footer
				}, ue())))
			}
			n(40561);
			var st = {
				M3U8_FILE: 6,
				MP3_FILE: 3,
				MP4_FILE: 2,
				FLASH_FILE: 1
			};

			function dt(e) {
				var t, n = [],
					r = mt(e);
				if (r[st.M3U8_FILE].length > 0 ? t = r[st.M3U8_FILE] : r[st.MP4_FILE].length > 0 ? t = r[st.MP4_FILE] : r[st.FLASH_FILE].length > 0 ? t = r[st.FLASH_FILE] : r[st.MP3_FILE].length > 0 && (t = r[st.MP3_FILE]), t) {
					var a = t.map((function(t) {
							var n;
							return t.data.src = null === (n = e.find((function(e) {
									return e.quality === t.quality && e.type === t.type && e.audio_index === t.audio_index
								}))
								.urls) || void 0 === n ? void 0 : n[0], t
						})),
						i = a.length;
					if (i) {
						for (var o = null, c = -1, l = 0; l < i; l++) {
							var u = a[l];
							n.push(u.data), u.quality > c && (c = u.quality, o = {
								src: "".concat(u.data.src),
								type: "".concat(u.data.type),
								label: "默认"
							})
						}
						o && n.splice(0, 0, o)
					}
				}
				return n
			}

			function mt(e) {
				for (var t = {
					6: [],
					3: [],
					2: [],
					1: []
				}, n = 0; n < e.length; n++) t[e[n].type] && (e[n].data = {
					src: "",
					type: {
						6: "application/x-mpegURL",
						2: "video/mp4",
						1: "video/x-flv"
					} [e[n].type],
					label: {
						0: "极速",
						1: "流畅",
						2: "标清",
						3: "高清",
						4: "超清"
					} [e[n].quality]
				}, t[e[n].type].push(e[n]));
				return t
			}

			function pt(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t)
							.enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function vt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? pt(Object(n), !0)
						.forEach((function(t) {
							(0, xe.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pt(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			var ft, _t, gt, ht = {
					ALL: 1,
					PART: 2
				},
				yt = {
					currentTime: 0,
					videoCurrentTime: 0
				};

			function wt(e) {
				var t, n, r = e.resources,
					a = e.poster,
					i = e.trackInfo,
					o = e.aspectRatio,
					c = e.onPlayChange,
					u = e.onPlayFinish,
					s = e.onTimeUpdate,
					d = e.onReload,
					p = e.onReady,
					v = void 0 === p ? function() {} : p,
					f = e.pageName,
					_ = e.origin,
					g = e.controlSeeking,
					h = e.maxPosition,
					y = void 0 === h ? 0 : h,
					w = e.controlSpeed,
					b = e.forcedLogin,
					x = e.onlyone,
					N = e.mediaType,
					Z = void 0 === N ? "video" : N,
					P = e.userId,
					I = void 0 === P ? "" : P,
					S = e.activityId,
					T = void 0 === S ? "" : S,
					R = e.resourceId,
					j = void 0 === R ? "" : R,
					D = e.setPlayRef,
					L = void 0 === D ? function() {} : D,
					M = e.activityEvent,
					A = e.courseId,
					F = e.libraryId,
					U = e.limitPlaybackRate,
					H = (0, l.useState)(!1),
					B = (0, C.Z)(H, 2),
					q = B[0],
					z = B[1],
					J = (0, l.useState)(null),
					W = (0, C.Z)(J, 2),
					X = W[0],
					V = W[1],
					K = (0, l.useState)(null),
					G = (0, C.Z)(K, 2),
					Q = G[0],
					Y = G[1],
					$ = (0, l.useState)(!0),
					ee = (0, C.Z)($, 2),
					te = ee[0],
					ne = ee[1],
					re = (0, l.useState)(null),
					ae = (0, C.Z)(re, 2),
					ie = ae[0],
					oe = ae[1],
					ce = (0, l.useState)(!1),
					le = (0, C.Z)(ce, 2),
					ue = le[0],
					se = le[1];

				function de(e, t) {
					return t.map((function(t) {
							return e.find((function(e) {
								return e.id === t
							}))
						}))
						.filter((function(e) {
							return e
						}))
				}

				function me(e, t, n) {
					if (t === ht.ALL) return e;
					if (n >= e.length) return e;
					var r = [],
						a = e.map((function(e) {
							return e.id
						}));
					while (r.length < n) {
						var i = Math.floor(Math.random() * a.length),
							o = a[i];
						r.includes(o) || r.push(o)
					}
					return de(e, r)
				}

				function pe(e, t) {
					return ve.apply(this, arguments)
				}

				function ve() {
					return ve = (0, E.Z)(regeneratorRuntime.mark((function e(t, n) {
						var r, a, i, o, c, l, u, s, d, m, p, v;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									if (a = t.activity_event_behavior || {}, i = a.behavior_type, o = a.data.paper_url, "exercise" !== i || !o || (null === (r = t.progress) || void 0 === r ? void 0 : r.status) === Ge.PASS && !n) {
										e.next = 36;
										break
									}
									return (0, Be.F5)(), null === (c = ft) || void 0 === c || c.pause(), ft.isFullscreen() && ft.exitFullscreen(), e.next = 7, (0, ze.ZP)()
										.get(o);
								case 7:
									return l = e.sent, u = l.data, s = null, d = t.activity_event_behavior.setting, m = d.exercise_type, p = d.exercise_num, ne(!n), e.next = 14, Ye.getAnswerQuestionIds(t.id);
								case 14:
									if (v = e.sent, 0 !== v.length) {
										e.next = 22;
										break
									}
									return e.next = 18, me(u.question, m, p);
								case 18:
									s = e.sent, ne(!1), e.next = 28;
									break;
								case 22:
									if (s = de(u.question, v), s.length === v.length) {
										e.next = 28;
										break
									}
									return e.next = 26, me(u.question, m, p);
								case 26:
									s = e.sent, ne(!1);
								case 28:
									return e.next = 30, Ye.setAnswerQuestionIds(t.id, s.map((function(e) {
										return e.id
									})));
								case 30:
									Y(s), V(t), se(!0), setTimeout((function() {
										var e;
										null === (e = ft) || void 0 === e || e.pause()
									}), 800), e.next = 37;
									break;
								case 36:
									Y(null);
								case 37:
								case "end":
									return e.stop()
							}
						}), e)
					}))), ve.apply(this, arguments)
				}(0, l.useEffect)((function() {
					var e = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
							var t, n, r, a, i;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if ("video" !== Z && "audio" !== Z) {
											e.next = 19;
											break
										}
										return Ye.setKey(T, j), e.next = 4, Ye.getMarkerList();
									case 4:
										t = e.sent, n = (null === M || void 0 === M ? void 0 : M[j]) || {}, r = 0;
									case 7:
										if (!(r < t.length)) {
											e.next = 16;
											break
										}
										if (i = t[r], 2 !== Number(null === (a = n[i.condition_params.time]) || void 0 === a ? void 0 : a.status)) {
											e.next = 13;
											break
										}
										return i.progress.status = Ge.PASS, e.next = 13, Ye.updateOneMarkerProgress(i.id, i.progress);
									case 13:
										r++, e.next = 7;
										break;
									case 16:
										(0, m.isEqual)(ie, t) || oe((0, m.cloneDeep)(t) || []), e.next = 20;
										break;
									case 19:
										oe([]);
									case 20:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}();
					e()
				}), [M]);
				var fe = function() {
						return [{
							audio_index: null,
							data: {
								label: "标清",
								src: "https://gcdncs.101.com/v0.1/static/fish/media/test.mp4",
								type: "video/mp4"
							},
							encrypt: !1,
							encrypt_urls: null,
							quality: 2,
							size: 8945,
							type: 2,
							urls: ["https://gcdncs.101.com/v0.1/static/fish/media/test.mp4"]
						}]
					},
					_e = (0, l.useCallback)((function(e) {
						var t, n, r = e.time % 60,
							a = parseInt(e.time / 60, 10) % 60,
							i = parseInt(e.time / 3600, 10),
							o = function(e) {
								return "00".concat(e)
									.substr(-2)
							},
							c = '<div class="marker-name">'.concat(o(i), ":")
							.concat(o(a), ":")
							.concat(o(r), " ")
							.concat(e.text, "</div>");
						return (null === (t = e.data.progress) || void 0 === t ? void 0 : t.status) === Ge.PASS && (c += '<div class="marker-redo" data-marker-id="'.concat(e.data.id, '">再做一次</div>')), (null === (n = e.data.progress) || void 0 === n ? void 0 : n.status) === Ge.DOING && (c += '<div class="marker-continue" data-marker-id="'.concat(e.data.id, '">继续答题</div>')), "".concat(c)
					}), []),
					ge = (0, l.useMemo)((function() {
						return {
							sources: dt((0, O.isLocalhost)() ? fe() : r),
							poster: a,
							playbackRates: w ? [] : [.5, 1, 1.25, 1.5, 2],
							mediaType: Z,
							markers: {
								markerStyle: {
									width: "4px",
									borderRadius: "6px",
									fontSize: "14px",
									backgroundColor: "#FFFFFF"
								},
								markerTip: {
									display: !0,
									text: function(e) {
										return "<div id='marker_".concat(e.data.id, "'>")
											.concat(_e(e), "</div>")
									}
								},
								onMarkerReached: function(e) {
									var t, n = function() {
										var t = (0, E.Z)(regeneratorRuntime.mark((function t() {
											var n, r, a;
											return regeneratorRuntime.wrap((function(t) {
												while (1) switch (t.prev = t.next) {
													case 0:
														return t.next = 2, Ye.getMarker(e.data.id);
													case 2:
														if (a = t.sent, !(Math.ceil(ft.currentTime()) >= (null === a || void 0 === a || null === (n = a.condition_params) || void 0 === n ? void 0 : n.time)) || null !== (r = ft) && void 0 !== r && r.seeking()) {
															t.next = 6;
															break
														}
														return t.next = 6, pe(a);
													case 6:
													case "end":
														return t.stop()
												}
											}), t)
										})));
										return function() {
											return t.apply(this, arguments)
										}
									}();
									null !== (t = ft) && void 0 !== t && t.seeking() ? setTimeout(n, 1e3) : n()
								}
							}
						}
					}), []),
					he = (0, l.useCallback)(function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
							var n, r, a;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return n = -1 !== t.target.className.indexOf("marker-redo"), r = t.target.getAttribute("data-marker-id"), e.next = 4, Ye.getMarker(r);
									case 4:
										return a = e.sent, a.progress = vt(vt({}, a.progress), {}, {
											status: n ? Ge.PASS : Ge.DOING
										}), e.next = 8, Ye.updateOneMarkerProgress(a.id, a.progress);
									case 8:
										return e.next = 10, (0, Be.pS)({
											courseId: A,
											resourceId: j,
											markerTime: a.condition_params.time,
											markerState: a.progress.status === Ge.PASS ? 2 : 1
										});
									case 10:
										return e.next = 12, pe(a, !0);
									case 12:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(), []),
					ye = (0, l.useCallback)((0, E.Z)(regeneratorRuntime.mark((function e() {
						var t, n, r, a, i, o, c, l, u, s, d, m, p, v, f, _, g, h, y;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									if (console.log("=== markerInit"), ie && 0 !== ie.length && ft) {
										e.next = 3;
										break
									}
									return e.abrupt("return");
								case 3:
									for (ft.markers.reset((null === ie || void 0 === ie ? void 0 : ie.map((function(e) {
											return {
												time: e.condition_params.time,
												text: e.name,
												data: e,
												class: e.progress.status === Ge.PASS ? nt.greenMarker : ""
											}
										}))) || []), t = ft.el()
										.querySelectorAll(".marker-redo"), n = 0; t && n < t.length; n++) r = t[n], r.addEventListener("click", he);
									for (a = ft.el()
										.querySelectorAll(".marker-continue"), i = 0; a && i < a.length; i++) o = a[i], o.addEventListener("click", he);
									for (c = ft.el()
										.querySelectorAll(".vjs-tip"), l = ft.el()
										.getBoundingClientRect(), u = l.left, s = l.right, d = 0; c && d < c.length; d++) m = c[d], p = m.getBoundingClientRect(), v = p.left, f = p.right, _ = p.width, g = m.querySelector(".vjs-tip-inner"), h = v - u, y = s - f, h < 0 && y < 0 || h > 0 && y > 0 ? g.style.position = "static" : h < 0 ? (g.style.position = "relative", g.style.left = "".concat(Math.abs(h) - 2, "px"), g.style.right = "auto") : y < 0 && (g.style.position = "relative", g.style.left = "auto", g.style.right = "".concat(Math.abs(y) - 2, "px")), _ >= 200 && (g.style.width = "200px", g.style.whiteSpace = "normal");
								case 11:
								case "end":
									return e.stop()
							}
						}), e)
					}))), [ie]);
				(0, l.useEffect)((function() {
					ie && 0 !== ie.length && q && (console.log("=== useEffect play"), ye(), ft.on("useractive", ye), ft.one("play", ye))
				}), [ie, q]);
				var we = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e(t, n) {
							var r, a;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (L(null), (0, Be.eN)(), !n) {
											e.next = 6;
											break
										}
										return e.next = 5, Ye.setAnswerQuestionIds(X.id, []);
									case 5:
										ne(!1);
									case 6:
										if (X.progress.status === Ge.PASS) {
											e.next = 16;
											break
										}
										return t ? X.progress.status = Ge.PASS : !1 !== t && (X.progress.status = Ge.DOING), e.next = 10, Ye.updateOneMarkerProgress(X.id, X.progress);
									case 10:
										return e.next = 12, (0, Be.pS)({
											courseId: A,
											resourceId: j,
											markerTime: X.condition_params.time,
											markerState: X.progress.status === Ge.PASS ? 2 : 1
										});
									case 12:
										return e.next = 14, Ye.getMarkerList();
									case 14:
										r = e.sent, oe(r);
									case 16:
										se(!1), X.progress.status === Ge.PASS ? (ft.ended() || ft.play(), Y(null)) : ft.currentTime() >= X.condition_params.time && (a = X.condition_params.time - 2, ft.currentTime(a >= 0 ? a : 0)), V(null), ye();
									case 20:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					be = function() {
						console.log("油猴hook：系统检测到倍速播放，已自动暂停学习，关闭倍速播放后可继续学习。");
						return;
						if (ft && !ft.paused()) {
							var e = !1,
								t = ft.currentTime(),
								n = Date.now(),
								r = 1e3 * (t - yt.videoCurrentTime) / (n - yt.currentTime) - U;
							U && (ft.playbackRate() > U || r < 16 && r > .01) && yt.videoCurrentTime > 1 && (e = !0), e ? (gt && gt.destroy(), gt = k.Z.warn({
								content: "系统检测到倍速播放，已自动暂停学习，关闭倍速播放后可继续学习。",
								onOk: function() {
									gt = null
								},
								getContainer: function() {
									return ft.el()
								},
								className: nt.alertModal
							}), ft.playbackRate(1), ft.pause()) : (yt.currentTime = n, yt.videoCurrentTime = t)
						}
					},
					xe = function(e, t) {
						ft = t, (0, Be.eN)(), v(e, t), console.log("=== handleReady"), z(!0)
					};
				(0, l.useEffect)((function() {
					_t && clearInterval(_t), U && ft && (_t = setInterval((function() {
						be()
					}), 1e3))
				}), [U, ft]), (0, l.useEffect)((function() {
					var e = function() {
						console.log("油猴hook：visibilitychange");
						return;
						var e;
						document.hidden && (null === (e = ft) || void 0 === e || e.pause())
					};
					return window.addEventListener("visibilitychange", e),
						function() {
							window.removeEventListener("visibilitychange", e), (0, Be.eN)(), clearInterval(_t)
						}
				}), []);
				var ke = function(e, t) {
					be(), document.hidden && (null === t || void 0 === t || t.pause()), e && (yt.videoCurrentTime = t.currentTime(), yt.currentTime = Date.now()), c(e, t)
				};
				return l.createElement(l.Fragment, null, l.createElement(qe.Z, {
					key: r.resource_id,
					className: "fish-ndrVideo vjs-big-play-centered",
					options: ge,
					trackInfo: i,
					pageName: f,
					onReady: xe,
					aspectRatio: o,
					onPlayChange: ke,
					onPlayFinish: u,
					onTimeUpdate: s,
					onReload: d,
					origin: _,
					controlSeeking: g,
					maxPosition: y,
					forcedLogin: b,
					onlyone: x
				}), ue && Q && l.createElement(ut, {
					setPlayRef: L,
					questions: Q,
					sessionId: "".concat(X.id, "_")
						.concat(I, "_")
						.concat(Q.map((function(e) {
								return e.id.substring(0, 3)
							}))
							.join("")),
					_useLocalAnswer: te,
					onCancel: we,
					libraryId: F,
					courseId: A,
					resourceId: j,
					status: null === (t = X.progress) || void 0 === t ? void 0 : t.status,
					passed: (null === (n = X.progress) || void 0 === n ? void 0 : n.status) === Ge.PASS,
					allowSkip: X.allow_skip,
					completionType: X.activity_event_behavior.setting.completion_type,
					completionDetail: X.activity_event_behavior.setting.completion_detail
				}))
			}
			var bt = ["courseId", "resources", "onUploadProgress", "changeStudyStatus", "forcedLogin", "onlyone", "resourceMaxPos", "activityEvent", "reportToTrain", "from", "onPlay", "trainId", "libraryId"];

			function xt(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t)
							.enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function kt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? xt(Object(n), !0)
						.forEach((function(t) {
							(0, xe.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xt(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			var Et, Ct, Nt, Zt, Pt = He.hX.NotStart,
				It = He.hX.Studying,
				St = He.hX.Finish,
				Tt = 1e4,
				Rt = !1,
				Ot = !1,
				jt = null,
				Dt = 0,
				Lt = null,
				Mt = !0,
				At = !1,
				Ft = !1,
				Ut = !1,
				Ht = 0,
				Bt = 1,
				qt = !1,
				zt = /iPad|iPhone|iPod/.test(navigator.userAgent),
				Jt = -1 !== navigator.userAgent.indexOf("SogouMobileBrowser"),
				Wt = -1 !== navigator.userAgent.indexOf("MQQBrowser"),
				Xt = -1 !== navigator.userAgent.indexOf("UCBrowser"),
				Vt = -1 !== navigator.userAgent.toLowerCase()
				.indexOf("alook"),
				Kt = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
				Gt = (0, l.forwardRef)((function(e, t) {
					var n, r, a = e.courseId,
						i = e.resources,
						o = e.onUploadProgress,
						c = e.changeStudyStatus,
						u = void 0 === c ? function() {} : c,
						s = e.forcedLogin,
						d = void 0 !== s && s,
						p = e.onlyone,
						v = void 0 !== p && p,
						f = e.resourceMaxPos,
						_ = e.activityEvent,
						h = e.reportToTrain,
						w = void 0 === h ? (0, E.Z)(regeneratorRuntime.mark((function e() {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
									case "end":
										return e.stop()
								}
							}), e)
						}))) : h,
						b = e.from,
						x = e.onPlay,
						N = void 0 === x ? function() {} : x,
						Z = e.trainId,
						S = e.libraryId,
						R = (0, ke.Z)(e, bt);
					Zt = R.dataSessionId;
					var j = (0, l.useState)(!1),
						D = (0, C.Z)(j, 2),
						L = D[0],
						M = D[1],
						A = (0, l.useState)(null),
						F = (0, C.Z)(A, 2),
						U = F[0],
						H = F[1],
						B = (0, l.useState)({}),
						q = (0, C.Z)(B, 2),
						z = q[0],
						J = q[1],
						W = (0, l.useState)(!1),
						X = (0, C.Z)(W, 2),
						V = X[0],
						K = X[1],
						G = (0, l.useState)(!1),
						Q = (0, C.Z)(G, 2),
						Y = Q[0],
						$ = Q[1],
						ee = (0, l.useState)(0),
						te = (0, C.Z)(ee, 2),
						ne = te[0],
						re = te[1],
						ae = function() {
							var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt;
							if (t > 0) {
								var n = Math.ceil(jt.duration());
								e = n > 0 && t >= n ? St : It
							} else e = Pt;
							return e
						};
					(0, l.useImperativeHandle)(t, (function() {
						return {
							stopVideo: function() {
								jt && !jt.paused() && (jt.pause(), k.Z.warn({
									content: "你已在其他端进入学习，本端自动暂停学习。",
									getContainer: function() {
										return jt.el()
									},
									className: nt.alertModal
								}))
							},
							reportVideoBegined: function() {
								if (jt && !jt.paused()) {
									var e = Math.ceil(jt.currentTime()),
										t = Math.ceil(jt.duration());
									e > t && (e = t);
									var n = ae(e);
									w(n, e, !1, !0)
								}
							}
						}
					})), (0, l.useEffect)((function() {
						var e, t = !(null === (e = R.progressConfig) || void 0 === e || !e.spi);
						t && zt && Kt && (Jt || Wt || Xt || Vt) && k.Z.info({
							closable: !0,
							centered: !0,
							width: 550,
							title: "提示",
							okText: "我知道了",
							content: "请在WEB端或者APP端观看",
							afterClose: function() {
								M(!1)
							}
						})
					}), [R.progressConfig]), (0, l.useEffect)((function() {
						"e_exercise_activity" === i.resource_type && K(!0), qt = !1
					}), [i]);
					var ie, oe, ce, le, ue, se, de, me, pe, ve, fe = function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
								var n, r, a, c;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											if (r = t.currentPage, a = t.pageCount, a) {
												e.next = 3;
												break
											}
											return e.abrupt("return");
										case 3:
											if (Rt = !0, Zt) {
												e.next = 7;
												break
											}
											return console.log("not login, document not trigger report data"), e.abrupt("return");
										case 7:
											c = r, c > a && (c = a), Bt = c, console.log("document trigger report data", c), c === a && (clearTimeout(Nt), w(St, a)), Ot = Math.max((null === f || void 0 === f || null === (n = f[i.resource_id]) || void 0 === n ? void 0 : n.pos) || c) === a, o && o(), "prepare" !== b && (0, Be.Xq)({
												documentId: i.resource_id,
												userId: Zt,
												position: c
											}), u(Ot ? St : It, c);
										case 16:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						_e = function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
							Zt && (clearTimeout(Nt), Nt = setTimeout((0, E.Z)(regeneratorRuntime.mark((function t() {
								var n, r;
								return regeneratorRuntime.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (!Ot) {
												t.next = 2;
												break
											}
											return t.abrupt("return");
										case 2:
											if (t.prev = 2, "prepare" === b) {
												t.next = 7;
												break
											}
											return t.next = 6, w(It, Bt);
										case 6:
											n = t.sent;
										case 7:
											t.next = 11;
											break;
										case 9:
											t.prev = 9, t.t0 = t["catch"](2);
										case 11:
											"prepare" !== b && e(1e3 * ((null === (r = n) || void 0 === r ? void 0 : r.frequency) || 60));
										case 12:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[2, 9]
								])
							}))), t))
						},
						ge = function() {
							return !!jt && jt.playbackRate() > 1
						},
						he = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							if (Zt) {
								try {
									"prepare" !== b && (0, Be.Mz)({
										videoId: i.resource_id || i.id,
										userId: Zt,
										position: e,
										immediate: t
									})
								} catch (n) {}
								o && o()
							}
						},
						ye = function e() {
							Zt && (clearTimeout(Et), Et = setTimeout((0, E.Z)(regeneratorRuntime.mark((function t() {
								var n;
								return regeneratorRuntime.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											n = Math.ceil(jt.currentTime()), he(n, !1), n < Math.ceil(jt.duration()) && e();
										case 3:
										case "end":
											return t.stop()
									}
								}), t)
							}))), Tt))
						},
						we = function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
							Zt && (clearTimeout(Ct), Ct = setTimeout((0, E.Z)(regeneratorRuntime.mark((function t() {
								var n, r, a;
								return regeneratorRuntime.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (n = Math.ceil(jt.currentTime()), t.prev = 1, "prepare" === b) {
												t.next = 6;
												break
											}
											return t.next = 5, w(It, n, ge());
										case 5:
											r = t.sent;
										case 6:
											t.next = 11;
											break;
										case 8:
											t.prev = 8, t.t0 = t["catch"](1), console.error(t.t0);
										case 11:
											"prepare" !== b && n < Math.ceil(jt.duration()) && e(1e3 * ((null === (a = r) || void 0 === a ? void 0 : a.frequency) || 60));
										case 12:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[1, 8]
								])
							}))), t))
						},
						Ee = function() {
							clearTimeout(Et), clearTimeout(Ct)
						},
						Ne = function() {
							if (Rt && (!Ft || !Ot)) {
								var e = (jt ? Ft : Ot) ? St : It,
									t = jt ? Ht : Bt;
								he(t, !0), "prepare" !== b && w(e, t), u(e, t)
							}
							Ee()
						},
						Ze = function() {
							jt && (Ut = !0)
						},
						Pe = function(e) {
							if (e) {
								Ft = !0, Ee();
								var t = Math.ceil(e.duration());
								Lt = t || 0, he(t, !0), "prepare" !== b && w(St, t), u(St, t)
							}
						},
						Ie = (0, m.debounce)((function(e, t) {
							var n, r, a;
							Rt = e, console.log("===== onVideoPlayChange  resource_id： ".concat(i.resource_id), e, Math.ceil(t.duration()), Math.ceil(t.currentTime()));
							var o = Math.max(z || 0, (null === f || void 0 === f || null === (n = f[i.resource_id]) || void 0 === n ? void 0 : n.pos) || 0);
							if (e && !qt && !o && 0 === Math.floor(t.currentTime()) && null !== (r = R.videoStudyConfig) && void 0 !== r && r.alert_before_study && (null === (a = R.state) || void 0 === a || !a[i.resource_id])) return qt = !0, t.pause(), void k.Z.info({
								title: "提示",
								icon: null,
								content: R.videoStudyConfig.alert_content || "须学习完课程的视频并完成相应测试题才可获得该课程视频的学时",
								okText: "我知道了",
								onOk: function() {
									t.play()
								}
							});
							qt = !0;
							var c = Math.ceil(t.currentTime()),
								l = Math.ceil(t.duration());
							c > l && (c = l);
							var s = ae(c);
							if (!0 === e && (window.postMessage({
								type: "playStart"
							}, "*"), N(), w(s, c, !1, !0), !0 === Mt && (Mt = !1, console.log("===== lastPos: ".concat(Dt, "  maxPos: ")
								.concat(Lt)), Lt > 0 && Lt < l ? (t.currentTime(Lt), console.log("===== seekTo: ".concat(Lt))) : Dt > 0 && Dt < l && (t.currentTime(Dt), console.log("===== seekTo: ".concat(Dt)))), Ee(), ye(), ae() !== St && we(6e4), !Ut)) {
								var d = ae();
								u(d, c)
							}
							At || Ft || e || Ut ? (At = !1, Ut = !1) : (Ee(), he(c, !1), "prepare" !== b && w(s, c))
						}), 200),
						Se = function(e, t) {
							jt = t, t.on("seeking", (function() {
								At = !0
							}))
						},
						Te = function(e) {
							return Ht = Math.ceil(e)
						};
					if ((0, l.useEffect)((function() {
						return (0, E.Z)(regeneratorRuntime.mark((function e() {
								var t, n, r, o, c, l, u, s, d, m;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											if (Zt) {
												e.next = 3;
												break
											}
											return M(!0), e.abrupt("return");
										case 3:
											if (window.addEventListener("beforeunload", Ne), n = !1, r = "teacherTraining" === (null === (t = R.progressConfig) || void 0 === t ? void 0 : t.type), !(r && Z && Zt)) {
												e.next = 11;
												break
											}
											return e.next = 9, (0, Be.Vh)(Z, a, Zt);
										case 9:
											n = e.sent, n && k.Z.warn({
												content: "你的学习记录被判定为异常，请重新学习课程。"
											});
										case 11:
											if ("document" !== i.resource_type) {
												e.next = 24;
												break
											}
											return console.log("document init report data"), e.next = 15, (0, Be.xC)({
												documentId: i.resource_id || i.id,
												userId: Zt
											});
										case 15:
											if (e.t0 = e.sent, e.t0) {
												e.next = 18;
												break
											}
											e.t0 = 1;
										case 18:
											c = e.t0, l = (null === f || void 0 === f || null === (o = f[i.resource_id]) || void 0 === o ? void 0 : o.pos) || 1, u = 1, u = n && c > l ? l : Math.max(c, l), H(u), _e(6e4);
										case 24:
											if ("video" !== i.resource_type && "audio" !== i.resource_type && "x_video" !== i.resource_type) {
												e.next = 41;
												break
											}
											return console.log("video init report data"), Mt = !0, At = !1, Ft = !1, Ut = !1, e.next = 32, (0, Be.Tc)({
												videoId: i.resource_id || i.id,
												userId: Zt
											});
										case 32:
											if (e.t1 = e.sent, e.t1) {
												e.next = 35;
												break
											}
											e.t1 = 0;
										case 35:
											d = e.t1, m = (null === f || void 0 === f || null === (s = f[i.resource_id]) || void 0 === s ? void 0 : s.pos) || 0, n && d > m ? (Dt = m, Lt = m) : (Dt = d, Lt = Math.max(d, m)), J(kt(kt({}, z), {}, (0, xe.Z)({}, i.resource_id, Dt))), console.log("===== setVideoLastPos  lastPos：".concat(d, "  videoLastMaxPos：")
												.concat(Lt)), M(!0);
										case 41:
										case "end":
											return e.stop()
									}
								}), e)
							})))(),
							function() {
								Zt && (Ne(), window.removeEventListener("beforeunload", Ne)), Rt = !1, jt = null, Dt = 0, Lt = null, Mt = !0, At = !1, Ft = !1, Ut = !1, Ht = 0, qt = !1, J({})
							}
					}), [i, f]), (0, l.useEffect)((function() {
						if (L && i) var e = setInterval((function() {
							jt && null !== Lt && (clearInterval(e), jt.one("canplay", (function() {
								if ("prepare" !== b)
									if (Lt) {
										var e = ae(Lt);
										w(e, Lt)
									} else w(Pt, 0)
							})))
						}), 200)
					}), [i, L]), ("video" === i.resource_type || "audio" === i.resource_type) && null !== (n = i.video_extend) && void 0 !== n && n.urls) return L ? l.createElement("div", {
						className: nt["course-player"]
					}, l.createElement(wt, (0, y.Z)({
						libraryId: S,
						key: i.resource_id,
						courseId: a,
						resources: null === (ie = i.video_extend) || void 0 === ie ? void 0 : ie.urls,
						poster: null !== (oe = null === (ce = i.video_extend) || void 0 === ce ? void 0 : ce.front_cover_url) && void 0 !== oe ? oe : "",
						onReady: Se,
						onPlayChange: Ie,
						onPlayFinish: Pe,
						onReload: Ze,
						onTimeUpdate: Te,
						origin: "TCH",
						activityEvent: _,
						controlSeeking: 2 !== (null === (le = R.state) || void 0 === le ? void 0 : le[i.resource_id]) && !1 === (null === (ue = R.progressConfig) || void 0 === ue ? void 0 : ue.is_allow_drag),
						maxPosition: Lt,
						controlSpeed: !1 === (null === (se = R.progressConfig) || void 0 === se ? void 0 : se.is_allow_speed),
						forcedLogin: d,
						onlyone: v,
						mediaType: i.resource_type,
						userId: R.dataSessionId,
						activityId: i.activity_id,
						resourceId: i.resource_id
					}, R))) : null;
					if ("x_video" === i.resource_type && i.urls) return L ? l.createElement("div", {
						className: nt["course-player"]
					}, l.createElement(wt, (0, y.Z)({
						key: i.id,
						courseId: a,
						resources: i.urls,
						poster: null !== (de = i.cover) && void 0 !== de ? de : "",
						onReady: Se,
						onPlayChange: Ie,
						onPlayFinish: Pe,
						onReload: Ze,
						origin: "TCH",
						activityEvent: _,
						controlSeeking: 2 !== (null === (me = R.state) || void 0 === me ? void 0 : me[i.id]) && (!!R.progressConfig && !R.progressConfig.is_allow_drag),
						maxPosition: Lt,
						controlSpeed: !!R.progressConfig && !R.progressConfig.is_allow_speed,
						forcedLogin: d,
						onlyone: v,
						userId: R.dataSessionId,
						activityId: i.activity_id,
						resourceId: i.resource_id
					}, R))) : null;
					if ("document" === i.resource_type && null !== (r = i.document_extend) && void 0 !== r && r.files) return N(), l.createElement(Ue, (0, y.Z)({
						key: i.resource_id,
						data: kt(kt({
							resource_id: i.resource_id
						}, i.document_extend), {}, {
							init_page_num: U
						}),
						beginPage: U,
						onPageChange: fe,
						origin: "TCH",
						controlSeeking: 2 !== (null === (pe = R.state) || void 0 === pe ? void 0 : pe[i.resource_id]) && (!!R.progressConfig && !R.progressConfig.is_allow_drag),
						maxPosition: Math.max((null === f || void 0 === f || null === (ve = f[i.resource_id]) || void 0 === ve ? void 0 : ve.pos) || U + 1)
					}, R));
					if ("e_exercise_activity" === i.resource_type) {
						var Re, Oe, je;
						N();
						var De = function(e) {
								var t;
								if (2 !== (null === (t = R.state) || void 0 === t ? void 0 : t[i.resource_id])) {
									var n = e || {},
										r = n.totalCount,
										o = void 0 === r ? 1 : r,
										c = n.correctCount,
										l = void 0 === c ? 0 : c,
										s = i.ext_info || {},
										d = s.pass_model,
										m = s.pass_value,
										p = 4 === d;
									1 === d ? p = l / o * 100 >= m : 3 === d && (p = l >= m), p && (u(2, l), w(2, l)), (0, T._A)({
										eventName: "edu_Platform_exercise_submit_click",
										params: {
											channel_code: (0, O.getPageChannelCode)(),
											column_code: S,
											training_id: P["default"].library.trainingId,
											course_id: a,
											answer_type: (0, He.dz)(ne),
											answer_num: o,
											answer_correctly_num: l,
											exercise_type: "在线练习"
										}
									})
								}
							},
							Le = function(e) {
								if (e) {
									var t, n = null === e || void 0 === e || null === (t = e.userExamSessionVo) || void 0 === t ? void 0 : t.status;
									re(n)
								} else $(!0);
								(0, T.XN)({
									eventName: "edu_Platform_exercise_page",
									params: {
										channel_code: (0, O.getPageChannelCode)(),
										column_code: S,
										training_id: P["default"].library.trainingId,
										course_id: a,
										answer_type: (0, He.dz)(ne),
										exercise_type: "在线练习"
									}
								}), K(!1)
							},
							Me = function() {
								var e;
								(0, T._A)({
									eventName: "edu_Platform_exercise_click",
									params: {
										channel_code: (0, O.getPageChannelCode)(),
										column_code: S,
										training_id: P["default"].library.trainingId,
										course_id: a,
										answer_type: (0, He.dz)(ne),
										exercise_type: "在线练习"
									}
								}), 2 !== (null === (e = R.state) || void 0 === e ? void 0 : e[i.resource_id]) && u(1, 0)
							},
							Ae = function() {
								(0, T._A)({
									eventName: "edu_Platform_exercise_quit_click",
									params: {
										channel_code: (0, O.getPageChannelCode)(),
										column_code: S,
										training_id: P["default"].library.trainingId,
										course_id: a,
										answer_type: (0, He.dz)(ne),
										exercise_type: "在线练习"
									}
								})
							};
						return l.createElement(g.Z, {
							loading: V,
							loadingProps: {
								delay: 0,
								withChildren: !0
							},
							empty: Y,
							emptyProps: {
								tip: "哎呀，练习不见了~"
							}
						}, l.createElement(be(), {
							ref: function(e) {
								return R.setPlayRef(e)
							},
							onlineExamId: i.online_exam_id,
							uc: I.uc,
							userId: Zt,
							env: P["default"].env || "ncet-xedu",
							passed: 2 === (null === (Re = R.state) || void 0 === Re ? void 0 : Re[i.resource_id]),
							passModel: null === (Oe = i.ext_info) || void 0 === Oe ? void 0 : Oe.pass_model,
							passValue: null === (je = i.ext_info) || void 0 === je ? void 0 : je.pass_value,
							sdpAppParams: {
								"sdp-app-id": P["default"].app.appid
							},
							onInited: Le,
							onSubmited: De,
							onStartAnswer: Me,
							onExit: Ae
						}))
					}
					return l.createElement(Ce.Z, {
						tip: "哎呀，资源不存在",
						hideBack: !0,
						className: nt["list-empty"]
					})
				})),
				Qt = n(76109),
				Yt = n(58533),
				$t = {
					"course-catalog": "index-module_course-catalog_BjOAI",
					endMessage: "index-module_endMessage_8PnCZ",
					resources: "index-module_resources_2zTj8",
					progress0: "index-module_progress0_1q0ss",
					progress1: "index-module_progress1_1Lo1k",
					progress2: "index-module_progress2_CEvx_",
					"course-catalog2": "index-module_course-catalog2_3T0xz"
				};

			function en() {
				return l.createElement("div", {
					style: {
						transform: "rotate(180deg)"
					}
				}, l.createElement("svg", {
					version: "1.1",
					className: "coursePlayingIcon",
					x: "0px",
					y: "0px",
					width: "18px",
					height: "12px",
					viewBox: "0 0 24 24"
				}, l.createElement("rect", {
					x: "0",
					y: "0",
					width: "6",
					height: "7",
					fill: "#1E62EC"
				}, l.createElement("animateTransform", {
					attributeType: "xml",
					attributeName: "transform",
					type: "scale",
					values: "1,1; 1,3; 1,1",
					begin: "0s",
					dur: "0.6s",
					repeatCount: "indefinite"
				})), l.createElement("rect", {
					x: "10",
					y: "0",
					width: "6",
					height: "7",
					fill: "#1E62EC"
				}, l.createElement("animateTransform", {
					attributeType: "xml",
					attributeName: "transform",
					type: "scale",
					values: "1,1; 1,3; 1,1",
					begin: "0.2s",
					dur: "0.6s",
					repeatCount: "indefinite"
				})), l.createElement("rect", {
					x: "20",
					y: "0",
					width: "6",
					height: "7",
					fill: "#1E62EC"
				}, l.createElement("animateTransform", {
					attributeType: "xml",
					attributeName: "transform",
					type: "scale",
					values: "1,1; 1,3; 1,1",
					begin: "0.4s",
					dur: "0.6s",
					repeatCount: "indefinite"
				}))))
			}

			function tn(e) {
				var t = e.onBeforeChangeCatalog,
					n = void 0 === t ? (0, E.Z)(regeneratorRuntime.mark((function e() {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.abrupt("return", !0);
								case 1:
								case "end":
									return e.stop()
							}
						}), e)
					}))) : t,
					r = e.onChangeCatalog,
					a = e.initResourceId,
					i = e.progress,
					o = e.libraryId,
					c = e.needActiveEffect,
					u = void 0 === c || c,
					s = (0, O.getUrlQuery)(),
					d = s.courseId,
					p = void 0 === d ? "" : d,
					v = (0, l.useState)(""),
					f = (0, C.Z)(v, 2),
					_ = f[0],
					g = f[1],
					h = (0, l.useState)([]),
					y = (0, C.Z)(h, 2),
					w = y[0],
					b = y[1],
					k = (0, l.useState)(!0),
					N = (0, C.Z)(k, 2),
					Z = N[0],
					I = N[1],
					S = (0, l.useState)(0),
					T = (0, C.Z)(S, 2),
					R = T[0],
					j = T[1],
					D = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
							var t, n, r, a, i, o;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return t = 100, e.next = 3, (0, pe.ZA)(p, {
											limit: t
										});
									case 3:
										if (n = e.sent, !(n.total > t)) {
											e.next = 15;
											break
										}
										for (r = [], a = t; a < n.total; a += t) r.push(a);
										return e.next = 9, Promise.all(r.map(function() {
											var e = (0, E.Z)(regeneratorRuntime.mark((function e(n, r) {
												var a;
												return regeneratorRuntime.wrap((function(e) {
													while (1) switch (e.prev = e.next) {
														case 0:
															return e.next = 2, (0, pe.ZA)(p, {
																offset: (r + 1) * t,
																limit: t
															});
														case 2:
															return a = e.sent, e.abrupt("return", a);
														case 4:
														case "end":
															return e.stop()
													}
												}), e)
											})));
											return function(t, n) {
												return e.apply(this, arguments)
											}
										}()));
									case 9:
										return i = e.sent, o = (0, Qt.Z)(n.items), i.forEach((function(e) {
											o = [].concat((0, Qt.Z)(o), (0, Qt.Z)(e.items))
										})), e.abrupt("return", o);
									case 15:
										return e.abrupt("return", n.items);
									case 16:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					L = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
							var t;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, D();
									case 2:
										t = e.sent, b(t), j(t.length), I(!1);
									case 6:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					M = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e(t, a) {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (t.work_id !== _.work_id) {
											e.next = 2;
											break
										}
										return e.abrupt("return");
									case 2:
										return e.next = 4, (0, Be.N_)({
											courseId: t.course_id,
											workId: t.work_id
										});
									case 4:
										if (e.t0 = n, !e.t0) {
											e.next = 10;
											break
										}
										return e.next = 8, n(t);
									case 8:
										e.t1 = e.sent, e.t0 = !1 !== e.t1;
									case 10:
										if (!e.t0) {
											e.next = 13;
											break
										}
										u && g(t), r && r(t, a);
									case 13:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}();
				(0, l.useEffect)((function() {
					L()
				}), []), (0, l.useEffect)((function() {
					if (w.length > 0) {
						var e = (0, m.find)(w, {
							work_id: a
						}) || w[0];
						M(e)
					}
				}), [w]);
				var A = function(e) {
						var t;
						if (o === P["default"].library.trainingId && i) switch (String(null === (t = i[e]) || void 0 === t ? void 0 : t.status)) {
							case "0":
								return l.createElement("i", {
									className: "iconfont icon_checkbox_linear",
									title: "未开始"
								});
							case "1":
								return l.createElement("i", {
									className: "iconfont icon_processing_fill",
									title: "进行中"
								});
							case "2":
								return l.createElement("i", {
									className: "iconfont icon_checkbox_fill",
									title: "已学完"
								});
							default:
								return l.createElement("i", {
									className: "iconfont icon_checkbox_linear",
									title: "未开始"
								})
						}
					},
					F = function(e) {
						return l.createElement("div", {
							key: e.id,
							className: "resource-item ".concat(o === P["default"].library.trainingId && "resource-item-train", " ")
								.concat(e.work_id === _.work_id ? "resource-item-active" : ""),
							onClick: function() {
								M(e, !0)
							}
						}, l.createElement("div", null, l.createElement("i", {
							className: "iconfont app_icon_zuoye_line-2"
						}), e.title), l.createElement("div", {
							className: "status-icon"
						}, e.work_id === _.work_id && en(), A(e.work_id)))
					},
					U = function() {
						return w.map((function(e) {
							return l.createElement("div", {
								key: e.work_id,
								className: $t.resources
							}, F(e))
						}))
					};
				return l.createElement("div", {
					className: $t["course-catalog"],
					id: "work-catelog"
				}, l.createElement(Yt.Z, {
					dataLength: w.length,
					next: (0, E.Z)(regeneratorRuntime.mark((function e() {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									L(w.length);
								case 1:
								case "end":
									return e.stop()
							}
						}), e)
					}))),
					hasMore: w.length < R,
					loader: Z ? l.createElement(x.Z, {
						type: "loading",
						style: {
							padding: "20px"
						}
					}) : null,
					scrollableTarget: "work-catelog"
				}, U()))
			}
			n(7564);
			var nn = n(70461),
				rn = (n(90806), n(45173)),
				an = n(73006),
				on = n.n(an),
				cn = n(10497),
				ln = P["default"].env,
				un = "mywork_".concat(ln),
				sn = function() {
					function e() {
						(0, Je.Z)(this, e), this.enable = !0, this.idb = new cn.Z, this.lock = new(on()), this.initSchema = this._withCo(this._initSchema), this.get = this._withCo(this._get), this.put = this._withCo(this._put), this.removeByKey = this._withCo(this._removeByKey)
					}
					return (0, We.Z)(e, [{
						key: "_initSchema",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
								var n, r;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.idb.checkDB(un, (function(e) {
												var a = e.version,
													i = (0, Qt.Z)(e.objectStoreNames);
												r = -1 === i.indexOf(t), n = r ? a + 1 : a
											}));
										case 2:
											return e.next = 4, this.idb.openDB(un, n, [{
												name: t
											}]);
										case 4:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t(t) {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "_get",
						value: function() {
							var e;
							return (e = this.idb)
								.get.apply(e, arguments)
						}
					}, {
						key: "_put",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
								var t, n = arguments;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, (t = this.idb)
												.put.apply(t, n);
										case 2:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t() {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "_removeByKey",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
								var t, n = arguments;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, (t = this.idb)
												.removeByKey.apply(t, n);
										case 2:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t() {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "_withCo",
						value: function(e) {
							var t = this,
								n = e.bind(this);
							return (0, E.Z)(regeneratorRuntime.mark((function e() {
								var r, a, i = arguments;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											if (t.enable) {
												e.next = 2;
												break
											}
											return e.abrupt("return");
										case 2:
											return e.next = 4, t.lock.request();
										case 4:
											return r = e.sent, e.prev = 5, e.next = 8, n.apply(void 0, i);
										case 8:
											a = e.sent, t.lock.release(r), e.next = 16;
											break;
										case 12:
											e.prev = 12, e.t0 = e["catch"](5), t.lock.release(r), t.errorHandle(e.t0);
										case 16:
											return e.abrupt("return", a);
										case 17:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[5, 12]
								])
							})))
						}
					}, {
						key: "errorHandle",
						value: function(e) {
							e instanceof Event && (this.enable = !1, console.error("an error occurred using indexDB, will use memory instead in this session"), console.dir(e))
						}
					}]), e
				}(),
				dn = "all",
				mn = function() {
					function e() {
						(0, Je.Z)(this, e), this.isHang = !1, this.storage = new sn, this.init()
					}
					return (0, We.Z)(e, [{
						key: "init",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
								var t;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, (0, I.bG)();
										case 2:
											return t = e.sent, this.userId = null === t || void 0 === t ? void 0 : t.user_id, this.tableName = "MyWork_".concat(this.userId), e.next = 7, this.storage.initSchema(this.tableName);
										case 7:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t() {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "setCacheExpired",
						value: function(e) {
							var t = e || dn;
							this.storage.removeByKey(this.tableName, t), t !== dn && this.storage.removeByKey(this.tableName, dn)
						}
					}, {
						key: "isExpired",
						value: function(e) {
							var t = 3e5;
							return !e || Date.now() - e > t
						}
					}, {
						key: "getWorkResult",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
								var n, r;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return n = t, e.next = 3, this.storage.get(this.tableName, n);
										case 3:
											if (e.t0 = e.sent, e.t0) {
												e.next = 6;
												break
											}
											e.t0 = null;
										case 6:
											return r = e.t0, e.abrupt("return", r);
										case 8:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t(t) {
								return e.apply(this, arguments)
							}
							return t
						}()
					}, {
						key: "setWorkResult",
						value: function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e(t, n) {
								var r;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											r = t, this.storage.put(this.tableName, r, n);
										case 2:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));

							function t(t, n) {
								return e.apply(this, arguments)
							}
							return t
						}()
					}]), e
				}(),
				pn = new mn,
				vn = n(80584),
				fn = (n(16161), n(91616)),
				_n = (n(32023), n(2995), n(20932)),
				gn = (n(27852), n(42260)),
				hn = n(52838),
				yn = n.n(hn),
				wn = n(70054),
				bn = ["expire_at"];

			function xn(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t)
							.enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function kn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? xn(Object(n), !0)
						.forEach((function(t) {
							(0, xe.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xn(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			var En = P["default"].cs,
				Cn = function() {
					function e() {
						(0, Je.Z)(this, e), this.client = null, this.init()
					}
					return (0, We.Z)(e, [{
						key: "init",
						value: function() {
							var e = this;
							return yn()({
									serviceName: P["default"].api.serviceName["x-course"],
									getToken: this.getToken,
									host: En.host.substring(2),
									protocol: "https"
								})
								.then((function(t) {
									return console.log("client", "name", t), t._validateFileName = function(e) {
										return e.replace(/[\\\\/:*?"<>|]+/g, "-")
									}, e.client = t, t
								}))
								.catch((function(e) {
									console.log("e"), console.log(e)
								}))
						}
					}, {
						key: "getToken",
						value: function(e) {
							var t = e.javaSDKParams,
								n = e.name,
								r = t.params,
								a = t.path,
								i = t.tokenType;
							return (0, wn.nV)({
									token_type: i,
									path: "".concat(a, "/")
										.concat(n),
									params: r
								})
								.then((function(e) {
									var t = e.expire_at,
										n = (0, ke.Z)(e, bn);
									return kn(kn({}, n), {}, {
										expireAt: t
									})
								}))
						}
					}]), e
				}(),
				Nn = new Cn,
				Zn = n(11909);

			function Pn(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t)
							.enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function In(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Pn(Object(n), !0)
						.forEach((function(t) {
							(0, xe.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pn(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			var Sn = {
					image: "image/*",
					video: ".mp4"
				},
				Tn = "".concat(vn.qr, ",")
				.concat(vn.TD, ",")
				.concat(vn.hY),
				Rn = function(e) {
					var t = {
							originType: e.type,
							bigtype: "",
							filetype: "",
							contentType: ""
						},
						n = e.name.toLowerCase();
					return vn.qr.split(",")
						.some((function(e) {
							return n.endsWith(e)
						})) ? (t.filetype = "video", t.bigtype = "video", t.contentType = "x_audio_video") : vn.TD.split(",")
						.some((function(e) {
							return n.endsWith(e)
						})) ? (t.filetype = "document", t.bigtype = "document", t.contentType = "x_document") : vn.hY.split(",")
						.some((function(e) {
							return n.endsWith(e)
						})) ? (t.filetype = "image", t.bigtype = "image", t.contentType = "x_image_list") : (t.filetype = "", t.bigtype = "", t.contentType = ""), t
				},
				On = (0, l.forwardRef)((function(e, t) {
					var n = e.maxCount,
						a = e.multiple,
						i = void 0 === a || a,
						o = e.accept,
						c = void 0 === o ? "" : o,
						u = e.onUploadSuccess,
						s = void 0 === u ? function() {} : u,
						d = e.onUploadFail,
						p = void 0 === d ? function() {} : d,
						v = e.showUploadList,
						f = void 0 === v || v,
						_ = e.libraryId,
						g = (0, l.useRef)([]),
						h = (0, l.useState)([]),
						y = (0, C.Z)(h, 2),
						w = y[0],
						b = y[1],
						x = (0, l.useState)({}),
						k = (0, C.Z)(x, 2),
						N = k[0],
						Z = k[1],
						I = 10,
						S = function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
							g.current = e.map((function(e) {
								return e
							})), b(g.current)
						},
						T = function() {
							return g.current.filter((function(e) {
									return "success" === e.status
								}))
								.map((function(e) {
									var t = e.dentry;
									return t
								}))
						},
						R = function(e) {
							var t = e.fileType,
								n = e.fileName,
								r = e.dentryUrl,
								a = e.screenshot,
								i = e.dentry_id,
								o = {};
							if ((a || N[i]) && (o.screenshot = N[i] || a), t) return o.type = t, o;
							var c = n.split("."),
								l = c[c.length - 1];
							return ["jpg", "jpeg", "png"].some((function(e) {
								return e === l
							})) ? (o.type = "image", o.screenshot = r) : ["mp4"].some((function(e) {
								return e === l
							})) ? o.type = "video" : o.type = "file", o
						},
						O = function() {
							return T()
								.map((function(e) {
									return In({
										path: e.dentryUrl,
										name: e.fileName,
										dentry_id: e.dentry_id,
										cover_image_dentry_id: "",
										extend_info: {}
									}, R(e))
								}))
						},
						j = function() {
							var e = g.current.filter((function(e) {
								return "error" !== e.status
							}));
							return e.map((function(e) {
								var t = e.dentry;
								return "success" === e.status ? In(In({}, (0, m.pick)(e, ["uid", "status", "percent", "emitter"])), {}, {
									path: null === t || void 0 === t ? void 0 : t.dentryUrl,
									name: null === t || void 0 === t ? void 0 : t.fileName,
									dentry_id: null === t || void 0 === t ? void 0 : t.dentry_id
								}, R(t)) : e
							}))
						},
						D = function() {
							return g.current.some((function(e) {
								return "error" === e.status
							}))
						},
						L = function() {
							return !g.current.some((function(e) {
								return "success" !== e.status && "error" !== e.status
							}))
						},
						M = function(e) {
							var t = (0, Qt.Z)(g.current),
								n = t.findIndex((function(t) {
									return e.uid === t.uid
								})); - 1 !== n && (t[n] = In({}, e), g.current = t, b(g.current))
						},
						A = function(e, t) {
							var n, r = "https:".concat((0, gn.xC)("cdnHot"))
								.concat(null === t || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.path),
								a = In(In({}, t.data), {}, {
									dentryUrl: r,
									fileName: e.name
								});
							M(In(In({}, e), {}, {
								dentry: a,
								status: "success",
								emitter: void 0
							})), s(a)
						},
						F = function(e, t) {
							var n = (0, m.get)(t, "data");
							n || (n = (0, m.get)(t, "responseJSON")), M(In(In({}, e), {}, {
								error: n,
								status: "error",
								emitter: void 0
							})), p(n)
						},
						U = function(e, t) {
							var n = t.loaded;
							M(In(In({}, e), {}, {
								percent: n * (I / 100)
							}))
						},
						H = function(e, t) {
							var n = t.loaded;
							M(In(In({}, e), {}, {
								percent: I + n * ((100 - I) / 100)
							}))
						},
						B = function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e(t, n) {
								var r;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, Nn.client.upload(t.originFileObj, {
												name: t.name,
												scope: 1,
												infoJson: JSON.stringify({
													identify_param: {
														strategy: "strategy_before_origin_illegal_replace",
														sensitive_word_lib: P["default"].app.appid
													}
												})
											});
										case 2:
											r = e.sent, r.on("success", (function(e) {
												A(t, e, n)
											})), r.on("error", (function(e) {
												F(t, e, n)
											})), r.on("md5Progress", (function(e) {
												U(t, e)
											})), r.on("progress", (function(e) {
												H(t, e)
											})), r.emit("start"), M(In(In({}, t), {}, {
												emitter: r,
												status: "uploading"
											}));
										case 9:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(),
						q = function(e) {
							if (0 === e.size) return r.ZP.warn("不能上传0字节的文件"), !1;
							var t = e.name.toLowerCase();
							return ".mp4" === Sn[c] && "video/mp4" !== e.type ? (r.ZP.warn("不支持 ".concat(t.split(".")
								.slice(-1)[0], " 类型，请上传mp4文件")), !1) : (e.extend = Rn(e), -1 === ["video", "document", "image"].indexOf(e.extend.bigtype) ? (r.ZP.warn("不支持 ".concat(t.split(".")
								.slice(-1)[0], " 类型，请换个文件")), !1) : !(0 === e.type.indexOf("video/") && e.size > 3221225472) || (r.ZP.warn({
								content: "不能发送超过3G的视频",
								key: "不能发送超过3G的视频"
							}), !1))
						},
						z = function(e) {
							var t = e.filter((function(e) {
								var t = !g.current.some((function(t) {
									var n = t.uid;
									return n === e.uid
								}));
								return t && q(e)
							}));
							t.length && (g.current = g.current.concat(t), b(g.current), t.forEach((function(e) {
								B(e)
							})))
						};
					(0, l.useImperativeHandle)(t, (function() {
						return {
							hasUploaded: L,
							hasUploadFailFiles: D,
							getDentrys: T,
							setDentrys: S,
							getAttachmentList: O
						}
					}), [N]);
					var J = function(e) {
							z((0, Qt.Z)(e.fileList))
						},
						W = function(e) {
							var t;
							g.current = g.current.filter((function(t) {
								return t.uid !== e.uid
							})), null === (t = e.emitter) || void 0 === t || t.emit("pause"), b(g.current)
						},
						X = function() {
							return !1
						},
						V = j(),
						K = function(e, t) {
							var n = e.url;
							Z(In(In({}, N), {}, (0, xe.Z)({}, t.dentry_id, n)))
						};
					return l.createElement(l.Fragment, null, l.createElement(_n.Z.Dragger, {
						name: "file",
						maxCount: n,
						fileList: w,
						onChange: J,
						onRemove: W,
						beforeUpload: X,
						multiple: i,
						accept: c ? Sn[c] : Tn,
						showUploadList: f
					}, e.children, n && w.length >= n && l.createElement("span", {
						className: Zn.Z.errorTip
					}, "（最多可添加", n, "个附件）")), l.createElement("div", {
						className: Zn.Z["attachments-list"]
					}, !f && V && !!V.length && l.createElement(he.Z, {
						edit: !0,
						libraryId: _,
						showTitle: !1,
						values: V,
						onDelete: W,
						onUpdateCover: K
					})))
				})),
				jn = On,
				Dn = {
					editor: "index-module_editor_3ziUZ",
					"is-full-screen": "index-module_is-full-screen_3XXBH"
				},
				Ln = n(48670);

			function Mn(e) {
				var t = e.libraryId,
					n = void 0 === t ? "0" : t,
					a = e.onUploadSuccess,
					i = void 0 === a ? function() {} : a,
					o = (0, l.useState)(),
					c = (0, C.Z)(o, 2),
					u = c[0],
					s = c[1],
					d = (0, l.useState)(),
					m = (0, C.Z)(d, 2),
					p = (m[0], m[1]);
				(0, l.useEffect)((function() {
					p(n)
				}), [n]);
				var v = function() {
						return (0, wn.nV)()
							.then((function(e) {
								var t = e.payload ? e.payload : e;
								return s(null === t || void 0 === t ? void 0 : t.path), Promise.resolve(e)
							}))
							.catch((function(e) {
								return r.ZP.error("封面上传失败"), Promise.reject(e)
							}))
					},
					f = function() {
						var e = function() {
								return v()
									.then((function(e) {
										var t = e.token,
											n = e.policy,
											r = e.date_time;
										return "".concat(P["default"].api["cs-server"], "/v0.1/upload?token=")
											.concat(t, "&policy=")
											.concat(n, "&date=")
											.concat(encodeURIComponent(r))
									}))
							},
							t = function(e) {
								return {
									scope: "1",
									path: u,
									name: e.name
								}
							},
							n = ".jpg,.png,.jpeg";
						return {
							action: e,
							accept: n,
							name: "file",
							data: t,
							showUploadList: !1,
							beforeUpload: function(e) {
								var t = e.name.toLowerCase();
								return n.split(",")
									.some((function(e) {
										return t.endsWith(e) > -1
									})) ? 0 === e.size ? (r.ZP.error("不能上传0字节的文件"), !1) : e.size > 20971520 ? (r.ZP.error("不能上传超过20M的文件"), !1) : void 0 : (r.ZP.error("只能上传jpg、png图片"), !1)
							},
							onChange: function(e) {
								var t, n;
								"done" === e.file.status ? (e.url = "https:".concat((0, gn.xC)("cdnHot"))
									.concat(null === (t = e.file) || void 0 === t || null === (n = t.response) || void 0 === n ? void 0 : n.path), i(e), r.ZP.success("封面上传成功")) : "error" === e.file.status && r.ZP.error("封面上传失败")
							}
						}
					};
				return l.createElement(_n.Z, (0, y.Z)({
					className: Zn.Z["resource-cover-uploader"]
				}, f()), e.children)
			}
			var An = Mn,
				Fn = {
					"upload-cover": "index-module_upload-cover_3EsbY",
					"upload-cover__oper": "index-module_upload-cover__oper_3yiZl",
					tip: "index-module_tip_qwcna"
				},
				Un = (0, l.forwardRef)((function(e, t) {
					var r = (0, l.useState)(!1),
						a = (0, C.Z)(r, 2),
						i = a[0],
						o = a[1],
						c = (0, l.useState)(""),
						u = (0, C.Z)(c, 2),
						s = u[0],
						d = u[1],
						m = (0, l.useState)(),
						p = (0, C.Z)(m, 2),
						v = p[0],
						f = p[1];
					(0, l.useImperativeHandle)(t, (function() {
						return {
							open: function(e) {
								d(null === e || void 0 === e ? void 0 : e.poster), f(e), o(!0)
							}
						}
					}), []);
					var _ = function() {
							o(!1), e.onClose && e.onClose()
						},
						g = function() {
							null !== v && void 0 !== v && v.element && (v.element.dataset.poster = s), _()
						},
						h = function(e) {
							var t = e.url;
							d(t)
						};
					return l.createElement(k.Z, {
						className: "reset-theme",
						width: 450,
						title: "修改封面",
						okText: "确认",
						visible: i,
						onCancel: _,
						onOk: g
					}, l.createElement("div", {
						className: Fn["upload-cover"]
					}, l.createElement("img", {
						src: (0, Ln.Z)(s),
						onError: function(e) {
							e.target.src = n(81451)
						}
					}), l.createElement("div", {
						className: Fn["upload-cover__oper"]
					}, l.createElement(An, {
						libraryId: e.libraryId,
						onUploadSuccess: h
					}, l.createElement($e.Z, {
						type: "primary"
					}, "上传封面")), l.createElement("div", {
						className: Fn.tip
					}, "建议上传封面大小n*n"))))
				})),
				Hn = Un,
				Bn = window.MICRO_STUDIO || "https://teacher-studio.ykt.eduyun.cn";
			("web-bd.ykt.eduyun.cn" === window.location.host || "xue-test.ykt.eduyun.cn" === window.location.host || window.location.host.indexOf("localhost") > -1) && (Bn = window.MICRO_STUDIO || "https://teacher-studio-test.ykt.eduyun.cn");
			var qn = function(e, t) {
					var n = e.dentryUrl,
						r = e.fileName,
						a = 900;
					if (n) {
						var i = new Image;
						i.onload = function() {
							var e = {
								src: this.src,
								alt: r
							};
							this.width > a ? (e.width = a, e.height = parseInt(this.height * a / this.width, 10)) : (e.width = this.width, e.height = this.height), t(e)
						}, i.src = n
					}
				},
				zn = function(e, t) {
					var n = e.dentryUrl;
					n && t({
						url: n,
						width: 420,
						height: 280
					})
				},
				Jn = (0, l.forwardRef)((function(e, t) {
					var n = (0, l.useRef)(),
						a = (0, l.useRef)(),
						i = (0, l.useRef)(),
						o = e.maxLength,
						c = e.value,
						u = e.initialContent,
						s = e.autoClearinitialContent,
						m = (0, l.useState)(!1),
						p = (0, C.Z)(m, 2),
						v = p[0],
						f = p[1],
						_ = (0, l.useState)("image"),
						g = (0, C.Z)(_, 2),
						h = g[0],
						y = g[1],
						w = (0, l.useState)(!1),
						b = (0, C.Z)(w, 2),
						E = b[0],
						N = b[1];
					(0, l.useEffect)((function() {
						return function() {
							var e;
							null !== (e = n.current) && void 0 !== e && e.destory && n.current.destory()
						}
					}), [n.current]);
					var Z = {
							initialContent: u,
							initialFrameWidth: "100%",
							maximumWords: o,
							autoClearinitialContent: s,
							focus: !1,
							enableAutoSave: !1,
							autoHeightEnabled: !1,
							initialStyle: "body{font-family:Arial;font-size:18px;line-height:1.5;color:rgb(0, 0, 0);}",
							initialFrameHeight: 450,
							elementPathEnabled: !1,
							toolbars: [
								["source", "undo", "redo", "formatmatch", "removeformat", "fontfamily", "fontsize", "bold", "italic", "underline", "strikethrough", "forecolor", "backcolor", "justifyleft", "justifyright", "justifycenter", "justifyjustify", "indent", "lineheight", "insertorderedlist", "insertunorderedlist", "upload-image", "full-screen"]
							]
						},
						P = function(e, t, n) {
							t.registerUI("upload-image", (function(e, n) {
								var r = new t.ui.Button({
									name: "upload-image",
									title: "上传图片",
									onclick: function() {
										var e;
										null === a || void 0 === a || null === (e = a.current) || void 0 === e || e.setDentrys(), f(!0), y("image")
									}
								});
								return e.addListener("selectionchange", (function() {
									var t = e.queryCommandState(n); - 1 === t ? (r.setDisabled(!0), r.setChecked(!1)) : (r.setDisabled(!1), r.setChecked(t))
								})), r
							}), void 0, n), t.registerUI("full-screen", (function(e, n) {
								var r = new t.ui.Button({
									name: "full-screen",
									title: "全屏",
									onclick: function() {
										e.fullscreen = !e.fullscreen, N(e.fullscreen)
									}
								});
								return e.addListener("selectionchange", (function() {
									var t = e.queryCommandState(n); - 1 === t ? (r.setDisabled(!0), r.setChecked(!1)) : (r.setDisabled(!1), r.setChecked(t))
								})), r
							}), void 0, n)
						},
						I = function(e) {
							var t = document.createElement("div");
							t.innerHTML = e;
							for (var r = !1, a = t.querySelectorAll(".edui-faked-video-container"), i = 0; i < a.length; i++) a[i].querySelector(".edui-faked-video") || (a[i].remove(), r = !0);
							return r && n.current.setContent(t.innerHTML), t.innerHTML
						},
						S = c,
						T = function(t) {
							n.current = t, t.addListener("contentchange", (function() {
								var n = t.getContent();
								if (t.getContentLength(!0) > t.options.maximumWords) {
									r.ZP.error("已达到最大限制1w字符"), t.setContent(S);
									var a = t.selection.getRange();
									a.startOffset = a.endOffset, a.select(), t.focus()
								} else n.includes("edui-faked-video-container") && (n = I(n)), S = n, e.onChange(n)
							})), t.addListener("afterscalehide", (function() {
								var e = t.selection.getRange();
								e.startOffset = e.endOffset, e.select(), t.focus()
							})), t.addListener("click", (function(e, n) {
								var r;
								("edui-faked-video" === n.target.className && t.focus(!0), "edui-faked-video__update-cover" === n.target.className) && (null === i || void 0 === i || null === (r = i.current) || void 0 === r || r.open({
									element: n.target,
									poster: n.target.dataset.poster
								}))
							})), e.onReady(t)
						},
						R = function() {
							var e, t = (null === (e = n.current) || void 0 === e ? void 0 : e.getContentLength(!0)) || 0;
							return t
						},
						O = function() {
							var e, t = null === a || void 0 === a || null === (e = a.current) || void 0 === e ? void 0 : e.hasUploaded();
							t ? f(!1) : r.ZP.warning("".concat("image" === h ? "图片" : "视频", "正在上传"))
						},
						j = function(e) {
							"image" === h ? qn(e, (function(e) {
								n.current.execCommand("insertimage", [e]), O()
							})) : zn(e, (function(e) {
								var t = '<img width="'.concat(e.width, '" height="')
									.concat(e.height, '" _url="')
									.concat(e.url, '" class="edui-faked-video" src="')
									.concat(Bn, '/fish/editor/themes/default/images/spacer.gif" style="background:url(')
									.concat(Bn, '/fish/editor/themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;background-size: cover;"></img>'),
									r = '<span contenteditable="false" class="edui-faked-video__update-cover" style="margin-left: -80px;vertical-align: 12px;padding-right: 24px;cursor: pointer;color: #fff;font-size: 14px;cursor: pointer;">修改封面</span>',
									a = '<span contenteditable="false" class="edui-faked-video-container">'.concat(t)
									.concat(r, "</span>");
								n.current.focus(), n.current.execCommand("inserthtml", a), O()
							}))
						},
						D = function() {
							r.ZP.error("上传失败"), O()
						};
					(0, l.useImperativeHandle)(t, (function() {
						return {
							getContentLength: R
						}
					}), []);
					var L = function() {
						e.onChange(n.current.getContent()), n.current.focus(!0)
					};
					return l.createElement(l.Fragment, null, l.createElement(fn.Z, {
						value: c,
						className: d()(Dn.editor, (0, xe.Z)({}, Dn["is-full-screen"], E)),
						editorConfig: Z,
						onBeforeReady: P,
						onReady: T
					}), l.createElement(k.Z, {
						title: "image" === h ? "选择图片" : "选择视频",
						visible: v,
						onCancel: O,
						footer: null
					}, l.createElement("div", {
						className: Dn.uploader
					}, l.createElement(jn, {
						ref: a,
						multiple: !1,
						accept: h,
						onUploadSuccess: j,
						onUploadFail: D
					}, l.createElement(x.Z, {
						type: "plus"
					})))), l.createElement(Hn, {
						ref: i,
						libraryId: e.workId,
						onClose: L
					}))
				})),
				Wn = Jn,
				Xn = n(11102);

			function Vn(e) {
				var t = e.visible,
					n = e.courseId,
					a = e.workId,
					i = e.isAdd,
					o = void 0 === i || i,
					c = e.scopeName,
					u = void 0 === c ? "作答" : c,
					s = e.onOk,
					d = e.onCancel,
					m = rn.Z.useForm(),
					p = (0, C.Z)(m, 1),
					v = p[0],
					f = (0, l.useRef)(),
					_ = (0, l.useState)(!1),
					g = (0, C.Z)(_, 2),
					h = g[0],
					y = g[1],
					w = (0, l.useState)(),
					b = (0, C.Z)(w, 2),
					x = b[0],
					N = b[1],
					Z = (0, l.useState)(""),
					P = (0, C.Z)(Z, 2),
					I = P[0],
					S = P[1],
					T = (0, l.useState)([]),
					R = (0, C.Z)(T, 2),
					O = R[0],
					j = R[1],
					D = (0, l.useState)([]),
					L = (0, C.Z)(D, 2),
					M = L[0],
					A = L[1];
				(0, l.useEffect)((function() {
					(0, _e.Jj)()
					.onbeforeunload = t ? function(e) {
						e.preventDefault(), e.returnValue = ""
					} : null
				}), [t]);
				var F = function() {
						var e = v.getFieldsValue();
						S(), null !== e && void 0 !== e && e.title || (null === I || void 0 === I ? void 0 : I.length) > 0 || (null === O || void 0 === O ? void 0 : O.length) > 0 ? k.Z.confirm({
							title: "提示",
							content: "保留本次编辑的内容？",
							onOk: function() {
								var t = (0, E.Z)(regeneratorRuntime.mark((function t() {
									return regeneratorRuntime.wrap((function(t) {
										while (1) switch (t.prev = t.next) {
											case 0:
												pn.setWorkResult(a, {
													course_id: n,
													title: e.title,
													content: I,
													attachments: O
												}), d();
											case 2:
											case "end":
												return t.stop()
										}
									}), t)
								})));

								function r() {
									return t.apply(this, arguments)
								}
								return r
							}(),
							onCancel: function() {
								d()
							}
						}) : d()
					},
					U = function() {
						var e = (0, E.Z)(regeneratorRuntime.mark((function e(t) {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										k.Z.confirm({
											title: "确认提交",
											content: "作答内容提交后，无法修改，请确认是否提交",
											onOk: function() {
												var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
													return regeneratorRuntime.wrap((function(e) {
														while (1) switch (e.prev = e.next) {
															case 0:
																return y(!0), e.next = 3, (0, pe.jq)(a, {
																	course_id: n,
																	title: t.title,
																	content: I,
																	attachments: O
																});
															case 3:
																r.ZP.success("提交成功！"), y(!1), s();
															case 6:
															case "end":
																return e.stop()
														}
													}), e)
												})));

												function i() {
													return e.apply(this, arguments)
												}
												return i
											}()
										});
									case 1:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					H = function(e) {
						pn.getWorkResult(a)
							.then((function(t) {
								S((null === t || void 0 === t ? void 0 : t.content) || ""), A((null === t || void 0 === t ? void 0 : t.attachments) || []), N((null === t || void 0 === t ? void 0 : t.title) || ""), e.setContent((null === t || void 0 === t ? void 0 : t.content) || ""), v.setFieldsValue({
									title: (null === t || void 0 === t ? void 0 : t.title) || ""
								})
							}))
					},
					B = function() {
						return l.createElement(rn.Z, {
							form: v,
							layout: "vertical",
							onFinish: U,
							autoComplete: "off",
							initialValues: {
								title: x,
								content: I,
								attachments: O
							}
						}, l.createElement(rn.Z.Item, {
							name: "title",
							label: "标题",
							rules: [{
								required: !0,
								message: "请输入标题"
							}, {
								whitespace: !0,
								message: "不能全为空格"
							}]
						}, l.createElement(nn.Z, {
							placeholder: "标题",
							maxLength: 30,
							lengthRule: function(e) {
								return (0, vn.x)(e, 30)
							}
						})), l.createElement(rn.Z.Item, {
							name: "content",
							label: "作答内容",
							rules: [{
								required: !0,
								message: "请输入作答内容"
							}, {
								whitespace: !0,
								message: "不能全为空格"
							}]
						}, a && l.createElement(Wn, {
							ref: f,
							workId: a,
							maxLength: 1e4,
							value: I,
							initialContent: o ? "请输入".concat(u, "内容") : "",
							autoClearinitialContent: o,
							onReady: H,
							onChange: S
						})), l.createElement(rn.Z.Item, null, l.createElement(he.Z, {
							edit: !0,
							showTitle: !1,
							values: M,
							onChange: function(e) {
								j(e)
							},
							onUploadSuccess: function() {
								y(!1)
							},
							onUploadLoading: function() {
								y(!0)
							}
						})), l.createElement(rn.Z.Item, null, l.createElement("div", {
							className: Xn.Z.btns
						}, l.createElement($e.Z, {
							htmlType: "button",
							onClick: F,
							className: Xn.Z.cancelBtn
						}, "取消"), l.createElement($e.Z, {
							loading: h,
							type: "primary",
							htmlType: "submit",
							className: Xn.Z.submitBtn,
							style: {
								marginRight: 8
							}
						}, "提交"))))
					};
				return l.createElement("div", null, l.createElement(k.Z, {
					destroyOnClose: !0,
					visible: t,
					title: "提交作业",
					onOk: U,
					onCancel: F,
					footer: null,
					wrapClassName: Xn.Z.modal,
					width: 820,
					height: 620
				}, B()))
			}
			n(20494);
			var Kn = n(85407),
				Gn = n(27484),
				Qn = n.n(Gn),
				Yn = n(9927),
				$n = n(88061);

			function er(e) {
				var t = e.courseId,
					n = e.workId,
					r = e.workQuery,
					a = (0, l.useState)([]),
					i = (0, C.Z)(a, 2),
					o = i[0],
					c = i[1],
					s = (0, l.useState)(0),
					d = (0, C.Z)(s, 2),
					m = d[0],
					p = d[1],
					v = (0, l.useState)(1),
					f = (0, C.Z)(v, 2),
					_ = f[0],
					g = f[1],
					h = (0, u.k6)(),
					y = 10;
				(0, l.useEffect)((function() {
					n && (0, pe.sY)(t, n, {
							limit: y,
							offset: (_ - 1) * y
						})
						.then((function(e) {
							p(e.total), c(e.items)
						}))
				}), [n, _]);
				var w = function(e) {
					var a = e.title,
						i = e.name,
						o = e.submit_time,
						c = e.user_id,
						u = e.work_result_id;
					return l.createElement("div", {
						className: Xn.Z.item,
						onClick: function() {
							var e = "".concat((0, $n.Zq)(), "/courseDetail/work?courseId=")
								.concat(t, "&workId=")
								.concat(n, "&workResultId=")
								.concat(u, "&")
								.concat(r);
							h.push(e)
						}
					}, l.createElement("div", {
						className: Xn.Z.item_title
					}, a), l.createElement("div", {
						className: Xn.Z.item_detail
					}, l.createElement(Yn.Z, {
						src: (0, I.Kw)(c)
					}), l.createElement("span", {
						className: Xn.Z.name
					}, i), l.createElement("span", {
							className: Xn.Z.time
						}, Qn()(o)
						.format("YYYY/MM/DD"))))
				};
				return (null === o || void 0 === o ? void 0 : o.length) > 0 ? l.createElement("div", {
					className: Xn.Z.work_result_list
				}, l.createElement("div", {
					className: Xn.Z.title
				}, "优秀作业推荐"), o.map((function(e) {
					return w(e)
				})), Math.ceil(m / y) > 1 && l.createElement(Kn.Z, {
					total: m,
					pageSize: y,
					current: _,
					showQuickJumper: !0,
					showTotal: function(e) {
						return "总共 ".concat(Math.ceil(e / y), " 页")
					},
					onChange: function(e) {
						g(e)
					},
					className: Xn.Z.pagination
				})) : l.createElement(l.Fragment, null)
			}
			var tr = er,
				nr = (n(90767), n(57535)),
				rr = {
					"course-detail": "index-module_course-detail_zetph",
					"detail-top": "index-module_detail-top_1krVu",
					title: "index-module_title_2KQjr",
					name: "index-module_name_3B2lN",
					work_result: "index-module_work_result_UW2pB",
					extends: "index-module_extends_1sIbp",
					source: "index-module_source_me6og",
					learned: "index-module_learned_20CQe",
					actions: "index-module_actions_1tMUy",
					"detail-main": "index-module_detail-main_bdFS3",
					"detail-main-l": "index-module_detail-main-l_1b8KB",
					"work-wrapper": "index-module_work-wrapper_S5WIy",
					"video-wrapper": "index-module_video-wrapper_22Dc0",
					"detail-main-drawer-box": "index-module_detail-main-drawer-box_rppc5",
					"detail-main-l-work": "index-module_detail-main-l-work_2sGPZ",
					"detail-main-r": "index-module_detail-main-r_avQ4D",
					"sub-title": "index-module_sub-title_2wPeX",
					"catalog-wrapper": "index-module_catalog-wrapper_IW_l9",
					"catalog-title": "index-module_catalog-title_39ldt",
					"detail-bottom": "index-module_detail-bottom_11WmE",
					"related-recommend": "index-module_related-recommend_2Dr1u",
					"course-intro": "index-module_course-intro_RVIa4",
					"extend-reading": "index-module_extend-reading_3SAnT",
					info: "index-module_info_TP0Lb",
					lecturer: "index-module_lecturer_1ymJF",
					"intro-text": "index-module_intro-text_2X-Jp",
					lecturer_title: "index-module_lecturer_title_Xu0Fj",
					lecturer_name: "index-module_lecturer_name_3zLTt",
					download: "index-module_download_2hICj",
					"related-recommend-content": "index-module_related-recommend-content_2JrtT",
					"related-recommend-content__title": "index-module_related-recommend-content__title_1SJsg",
					"related-recommend-content__cover": "index-module_related-recommend-content__cover_20LIK",
					"related-recommend-content__info": "index-module_related-recommend-content__info_pu4Rk",
					"related-recommend-content__source": "index-module_related-recommend-content__source_1xY-j",
					"related-recommend-content__link": "index-module_related-recommend-content__link_ipgLe",
					"related-recommend-content__pv": "index-module_related-recommend-content__pv_15ngO",
					"related-recommend-content__stat": "index-module_related-recommend-content__stat_2gkGP",
					empty: "index-module_empty_kgmf-"
				};

			function ar(e) {
				var t = e.lecturer,
					r = e.intro;
				return t || r ? l.createElement("div", {
					className: rr["course-intro"]
				}, l.createElement("div", {
					className: rr.title
				}, "课程简介"), l.createElement(nr.Z, null), l.createElement("div", {
					className: rr.info
				}, t && l.createElement("div", {
					className: rr.lecturer
				}, l.createElement("img", {
					src: n(99569),
					style: {
						width: 24,
						height: 24,
						marginRight: 6
					}
				}), l.createElement("span", {
					className: rr.lecturer_title
				}, "授课教师"), l.createElement("span", {
					className: rr.lecturer_name
				}, t)), r && l.createElement("div", {
					className: rr["intro-text"],
					dangerouslySetInnerHTML: {
						__html: r
					}
				}))) : null
			}
			var ir = ar,
				or = (n(23157), n(39714), P["default"].api);

			function cr(e) {
				var t = e.extendReadingData,
					n = e.onDownload;
				return 0 === t.length ? null : l.createElement("div", {
					className: rr["extend-reading"]
				}, l.createElement("div", {
					className: rr.title
				}, "延伸阅读"), l.createElement(nr.Z, null), l.createElement("ul", null, t.map((function(e, t) {
					var r = e.url;
					r.startsWith("http") || (r = "".concat(or.cdn)
						.concat(or["cdn-prefix"])
						.concat(r));
					var a = e.name.substring(0, e.name.lastIndexOf("."));
					return l.createElement("li", {
						key: t.toString()
					}, l.createElement("div", {
						className: rr.name,
						title: a
					}, a), l.createElement("div", {
						className: rr.download
					}, l.createElement($e.Z, {
						type: "primary",
						onClick: n,
						href: r
					}, "下载")))
				}))))
			}
			var lr = cr,
				ur = n(81849);

			function sr() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return e.split("")
					.map((function(e) {
						return e.charCodeAt()
							.toString(16)
					}))
					.join("")
			}

			function dr() {
				return mr.apply(this, arguments)
			}

			function mr() {
				return mr = (0, E.Z)(regeneratorRuntime.mark((function e() {
					var t, n, r, a, i, o;
					return regeneratorRuntime.wrap((function(e) {
						while (1) switch (e.prev = e.next) {
							case 0:
								return t = (0, I.$w)(), n = t.user_id, r = (0, w.J_)({
									userId: n
								}), a = r, i = ur["default"].appid, o = {
									platform_type: "Web",
									identity: a,
									app_id: i,
									app_version: "",
									build_version: "",
									session_id: "",
									third_source: "white_plate"
								}, e.abrupt("return", "event_header=".concat(sr(JSON.stringify(o, 0))));
							case 6:
							case "end":
								return e.stop()
						}
					}), e)
				}))), mr.apply(this, arguments)
			}
			var pr = n(67627),
				vr = n(92441),
				fr = {
					live: "live-module_live_o_c4E",
					container: "live-module_container_rjLwn",
					info: "live-module_info_2bdcH",
					player: "live-module_player_3mUKq",
					desc: "live-module_desc_1Ehoh"
				};

			function _r(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t)
							.enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function gr(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? _r(Object(n), !0)
						.forEach((function(t) {
							(0, xe.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _r(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}

			function hr(e) {
				var t = e.liveId,
					n = e.trainId,
					r = e.courseId,
					a = e.resourceId,
					i = e.columnCode,
					o = e.channelCode,
					c = e.reportToTrain,
					u = He.hX.Finish,
					s = (0, l.useContext)(b.Z),
					d = function() {
						window.location.href = (0, I.Zd)()
					},
					m = function(e) {
						console.log(e)
					},
					p = function(e) {
						console.log(e)
					},
					v = function() {},
					f = function() {
						var e = (new Date)
							.getTime();
						c(u, e)
					},
					_ = function(e) {
						var t = gr(gr({}, e.params), {}, {
							course_id: r,
							resource_id: a,
							training_id: n,
							column_code: i,
							channel_code: o
						});
						(0, T._A)(gr(gr({}, e), {}, {
							params: t
						}))
					},
					g = "preproduction" === P["default"].env ? vr.PublicLiveDetail : pr.PublicLiveDetail;
				return l.createElement("div", {
					className: fr.live
				}, l.createElement(g, {
					key: t,
					className: fr.live,
					containerClassName: fr.container,
					infoClassName: fr.info,
					playerClassName: fr.player,
					descriptionClassName: fr.desc,
					liveId: t,
					appId: P["default"].appId,
					uc: I.uc,
					loginInfo: s,
					handleLogin: d,
					onOnlineCountChange: m,
					onStateChange: p,
					onReportProgress: v,
					onReportTeacherTrain: f,
					onSendSensors: _
				}))
			}
			var yr = l.memo(hr),
				wr = n(30038),
				br = (0, wr.oJ)("@/page/tchTraining/component/Card/img/default_cover.png"),
				xr = function(e) {
					return e && e.startsWith("http")
				};

			function kr(e) {
				var t = e.courseDetail,
					n = e.libraryId,
					r = (0, u.k6)(),
					a = (0, l.useState)([]),
					i = (0, C.Z)(a, 2),
					o = i[0],
					c = i[1];
				(0, l.useEffect)((function() {
					if (t && n) {
						var e = function() {
							var e = (0, E.Z)(regeneratorRuntime.mark((function e() {
								var r, a, i, o, l, u, s, d, m, p, v;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, (0, de.P6)(n);
										case 3:
											if (e.t0 = e.sent, e.t0) {
												e.next = 6;
												break
											}
											e.t0 = [];
										case 6:
											if (r = e.t0, a = [], i = [], o = t.context_id.split("auxo-train:")[1], o || n !== P["default"].library.trainingId || (o = P["default"].library.trainingId), !o) {
												e.next = 28;
												break
											}
											return e.next = 14, (0, se.ye)(o);
										case 14:
											l = e.sent, u = (null === l || void 0 === l ? void 0 : l.map((function(e) {
												return null === e || void 0 === e ? void 0 : e.course_id
											}))) || [], r = r.filter((function(e) {
												var t;
												return -1 !== u.indexOf(e.unit_id) && !(null !== (t = e.extra) && void 0 !== t && t.begin_time && Qn()(e.extra.begin_time) > Qn()())
											})), s = Math.min(8, r.length - 1), s <= 0 && console.log("库id".concat(n, "没有可推荐的内容")), d = function() {
												var e = Math.floor(Math.random() * r.length),
													n = r[e];
												n.unit_id !== t.id && -1 === a.findIndex((function(e) {
													return e.unit_id === n.unit_id
												})) && a.push(n)
											};
											while (s > 0 && a.length < s) d();
											if (!(a.length > 0)) {
												e.next = 26;
												break
											}
											return m = r.map((function(e) {
												var t = e.resource_id;
												return t
											})), e.next = 25, (0, me.nC)(m);
										case 25:
											i = e.sent;
										case 26:
											e.next = 37;
											break;
										case 28:
											return e.next = 30, (0, ve.vr)(t.id, n);
										case 30:
											if (p = e.sent, a = (null === p || void 0 === p ? void 0 : p.items) || [], !(a.length > 0)) {
												e.next = 37;
												break
											}
											return v = a.map((function(e) {
												var t = e.resource_id;
												return t
											})), e.next = 36, (0, me.nC)(v);
										case 36:
											i = e.sent;
										case 37:
											i.forEach((function(e) {
												var t = a.find((function(t) {
													return t.resource_id === e.id
												}));
												t && (t.stat = {
													like: e.like_count,
													pv: e.total_pv
												})
											})), c(a), e.next = 44;
											break;
										case 41:
											e.prev = 41, e.t1 = e["catch"](0), console.error(e.t1);
										case 44:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 41]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
						e()
					}
				}), [t, n]);
				var s = (0, l.useCallback)((function(e) {
						var t;
						if (xr(e.description)) window.open(e.description);
						else if ("x_url" !== e.resource_type && "x_smarturl" !== e.resource_type || null === (t = e.extra) || void 0 === t || !t.url) {
							var a = (e.tags[e.tags.length - 1] || {})
								.title || "",
								i = (0, O.getUrlQuery)(),
								o = i.channelId,
								c = void 0 === o ? "" : o,
								l = i.breadcrumb,
								u = void 0 === l ? "" : l,
								s = "".concat((0, $n.Zq)(), "/courseDetail?courseId=")
								.concat(null === e || void 0 === e ? void 0 : e.resource_id, "&tag=")
								.concat(encodeURIComponent(a), "&channelId=")
								.concat(c, "&libraryId=")
								.concat((null === e || void 0 === e ? void 0 : e.library_id) || n, "&breadcrumb=")
								.concat(encodeURIComponent(u));
							r.push(s)
						} else window.open(e.extra.url)
					}), []),
					d = (0, l.useCallback)((function(e) {
						var t, n, r = e.item,
							a = e.onClick,
							i = void 0 === a ? function() {} : a;
						return l.createElement("div", {
							key: r.unit_id,
							onClick: function() {
								i(r)
							}
						}, l.createElement("div", {
							className: rr["related-recommend-content__cover"]
						}, l.createElement("img", {
							src: r.cover_url ? (0, Ln.Z)(r.cover_url, 240) : br
						})), l.createElement("div", {
							className: rr["related-recommend-content__info"]
						}, l.createElement("div", {
							className: rr["related-recommend-content__title"],
							title: r.title
						}, r.title), (null === r || void 0 === r || null === (t = r.extra) || void 0 === t ? void 0 : t.source) && l.createElement("div", {
							className: rr["related-recommend-content__source"]
						}, l.createElement("i", {
							className: "iconfont icon_hotel_fill",
							style: {
								color: "#ccc"
							}
						}), l.createElement("span", null, null === r || void 0 === r || null === (n = r.extra) || void 0 === n ? void 0 : n.source)), r.stat && !xr(r.description) && "x_url" !== r.resource_type && "x_smarturl" !== r.resource_type && "train" !== r.resource_type && l.createElement("div", {
							className: rr["related-recommend-content__stat"]
						}, l.createElement("span", {
							className: rr["related-recommend-content__pv"]
						}, l.createElement("i", {
							className: "iconfont web_icon_guanzhu_fill",
							style: {
								color: "#ccc"
							}
						}), l.createElement("span", null, (0, _.mf)(r.stat.pv || 0, 1, 1e7))), l.createElement("span", {
							className: rr["related-recommend-content__link"]
						}, l.createElement("i", {
							className: "iconfont icon_thumb_fill",
							style: {
								color: "#ccc"
							}
						}), l.createElement("span", null, (0, _.mf)(r.stat.like || 0, 1, 1e7))))))
					}), []);
				return 0 === o.length ? null : l.createElement("div", {
					className: rr["detail-bottom"]
				}, l.createElement("div", {
					className: rr["related-recommend"]
				}, l.createElement("div", {
					className: rr.title
				}, "相关推荐"), l.createElement(nr.Z, null), l.createElement("div", {
					className: rr["related-recommend-content"]
				}, o.map((function(e) {
					return l.createElement(d, {
						item: e,
						key: e.unit_id,
						onClick: s
					})
				})))))
			}

			function Er(e, t) {
				var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = Cr(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var r = 0,
							a = function() {};
						return {
							s: a,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								throw e
							},
							f: a
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var i, o = !0,
					c = !1;
				return {
					s: function() {
						n = n.call(e)
					},
					n: function() {
						var e = n.next();
						return o = e.done, e
					},
					e: function(e) {
						c = !0, i = e
					},
					f: function() {
						try {
							o || null == n.return || n.return()
						} finally {
							if (c) throw i
						}
					}
				}
			}

			function Cr(e, t) {
				if (e) {
					if ("string" === typeof e) return Nr(e, t);
					var n = Object.prototype.toString.call(e)
						.slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Nr(e, t) : void 0
				}
			}

			function Nr(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Zr(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t)
							.enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Pr(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Zr(Object(n), !0)
						.forEach((function(t) {
							(0, o.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zr(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}

			function Ir() {
				var e, t, n, s, y, b = (0, O.getUrlQuery)(),
					x = b.tag,
					k = void 0 === x ? "" : x,
					E = b.libraryId,
					C = void 0 === E ? "" : E,
					N = b.breadcrumb,
					Z = void 0 === N ? "" : N,
					S = b.firstLevel,
					j = void 0 === S ? "" : S,
					D = b.secondLevel,
					L = void 0 === D ? "" : D,
					M = b.channelId,
					A = void 0 === M ? "" : M,
					F = b.thirdLevel,
					U = void 0 === F ? "" : F,
					H = b.courseId,
					B = b.resourceId,
					q = void 0 === B ? "" : B,
					z = b.workFlag,
					J = void 0 === z ? "0" : z,
					W = (0, l.useState)(""),
					X = (0, c.Z)(W, 2),
					V = X[0],
					K = X[1],
					G = (0, l.useState)(null),
					Q = (0, c.Z)(G, 2),
					ne = Q[0],
					re = Q[1],
					ae = (0, l.useState)(null),
					we = (0, c.Z)(ae, 2),
					be = we[0],
					xe = we[1],
					ke = (0, l.useState)(!1),
					Ee = (0, c.Z)(ke, 2),
					Ce = Ee[0],
					Ne = Ee[1],
					Ze = (0, l.useState)(!1),
					Pe = (0, c.Z)(Ze, 2),
					Ie = Pe[0],
					Se = Pe[1],
					Te = (0, l.useState)(null),
					Re = (0, c.Z)(Te, 2),
					Oe = Re[0],
					je = Re[1],
					De = (0, l.useState)(null),
					Le = (0, c.Z)(De, 2),
					Me = Le[0],
					Ae = Le[1],
					Fe = (0, l.useState)(null),
					Ue = (0, c.Z)(Fe, 2),
					He = Ue[0],
					qe = Ue[1],
					ze = (0, l.useState)(null),
					Je = (0, c.Z)(ze, 2),
					We = Je[0],
					Xe = Je[1],
					Ve = (0, l.useState)({}),
					Ke = (0, c.Z)(Ve, 2),
					Ge = Ke[0],
					Qe = Ke[1],
					Ye = (0, l.useState)([]),
					$e = (0, c.Z)(Ye, 2),
					et = $e[0],
					tt = $e[1],
					nt = (0, l.useMemo)($n.NH, []),
					rt = (0, l.useState)({}),
					at = (0, c.Z)(rt, 2),
					it = at[0],
					ot = at[1],
					ct = (0, l.useState)({}),
					lt = (0, c.Z)(ct, 2),
					ut = lt[0],
					st = lt[1],
					dt = (0, l.useState)(!0),
					mt = (0, c.Z)(dt, 2),
					pt = mt[0],
					vt = mt[1],
					ft = (0, l.useState)(null),
					_t = (0, c.Z)(ft, 2),
					gt = _t[0],
					ht = _t[1],
					yt = (0, l.useState)(null),
					wt = (0, c.Z)(yt, 2),
					bt = wt[0],
					xt = wt[1],
					kt = (0, l.useState)(!1),
					Et = (0, c.Z)(kt, 2),
					Ct = Et[0],
					Nt = Et[1],
					Zt = "1" === J,
					Pt = (0, u.k6)(),
					It = (0, l.useRef)(),
					St = function(e, t) {
						var n = Pr({}, We);
						n[e] = (n[e] || 0) - t > 0 ? n[e] : t, Xe(Pr({}, n))
					},
					Tt = function() {
						var e;
						return -1 !== (null === Oe || void 0 === Oe || null === (e = Oe.resource_type) || void 0 === e ? void 0 : e.indexOf("video")) ? "video" : "e_exercise_activity" === (null === Oe || void 0 === Oe ? void 0 : Oe.resource_type) ? "exam" : "e_live_activity" === (null === Oe || void 0 === Oe ? void 0 : Oe.resource_type) ? "live" : "doc"
					},
					Rt = function(e) {
						var t;
						return "e_live_activity" === (null === Oe || void 0 === Oe ? void 0 : Oe.resource_type) ? (null === Oe || void 0 === Oe ? void 0 : Oe.study_time) || (null === Oe || void 0 === Oe || null === (t = Oe.ext_info) || void 0 === t ? void 0 : t.duration) || 0 : e
					},
					Ot = (0, l.useCallback)(function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e(t, n) {
							var r, a, i, o, c;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (be && Oe) {
											e.next = 2;
											break
										}
										return e.abrupt("return");
									case 2:
										if (a = oe.pn.getProgressData(oe.pn.userId, be.id), a) {
											e.next = 6;
											break
										}
										return console.log("课程进度不存在, 是否调用`await initProgressInfo`"), e.abrupt("return");
									case 6:
										if (i = (null === (r = a.ext_info.resource_progress) || void 0 === r ? void 0 : r[null === Oe || void 0 === Oe ? void 0 : Oe.resource_id]) || 0, e.t0 = t > i && 0 !== t, !e.t0) {
											e.next = 12;
											break
										}
										return e.next = 11, (0, I.iT)();
									case 11:
										e.t0 = e.sent;
									case 12:
										if (!e.t0) {
											e.next = 14;
											break
										}(0, Be.bL)({
											courseId: H,
											activityId: Oe.activity_id || Oe.id,
											activityName: (null === (o = Oe.video_extend) || void 0 === o ? void 0 : o.title) || (null === (c = Oe.document_extend) || void 0 === c ? void 0 : c.title) || Oe.name,
											resourceId: null === Oe || void 0 === Oe ? void 0 : Oe.resource_id,
											studyTime: null === Oe || void 0 === Oe ? void 0 : Oe.study_time
										});
									case 14:
										(0, Be.fJ)({
											courseId: be.id,
											resourceId: null === Oe || void 0 === Oe ? void 0 : Oe.resource_id,
											activityId: Oe.activity_id || Oe.id,
											resources: [Oe],
											state: t,
											type: Tt(),
											position: n
										}), St(null === Oe || void 0 === Oe ? void 0 : Oe.resource_id, t);
									case 16:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(), [Oe, be]),
					jt = function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e(t, n) {
							var r, a, i, o, c, l, u, s, d, m, p, v, f = arguments;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (u = f.length > 2 && void 0 !== f[2] && f[2], s = f.length > 3 && void 0 !== f[3] && f[3], null !== be && void 0 !== be && null !== (r = be.ext_info) && void 0 !== r && null !== (a = r.progress_config) && void 0 !== a && a.spi && (!s || null !== be && void 0 !== be && null !== (i = be.ext_info) && void 0 !== i && null !== (o = i.progress_config) && void 0 !== o && o["begin-spi"])) {
											e.next = 4;
											break
										}
										return e.abrupt("return", null);
									case 4:
										return d = "", "teacherTraining" === (null === (c = be.ext_info) || void 0 === c || null === (l = c.progress_config) || void 0 === l ? void 0 : l.type) && (d = be.ext_info.progress_config.source_train_exid), e.next = 8, (0, I.bG)();
									case 8:
										return m = e.sent, p = m.user_id, e.next = 12, (0, Be.EK)({
											url: be.ext_info.progress_config.spi,
											fixUrl: be.ext_info.progress_config.fix_spi,
											beginUrl: s ? be.ext_info.progress_config["begin-spi"] : "",
											trainReportTokenUrlEncode: d,
											courseId: be.id,
											resourceId: null === Oe || void 0 === Oe ? void 0 : Oe.resource_id,
											activityId: (null === Oe || void 0 === Oe ? void 0 : Oe.activity_id) || (null === Oe || void 0 === Oe ? void 0 : Oe.id),
											resources: [Oe],
											state: t,
											type: Tt(),
											position: Rt(n),
											userId: p,
											trainId: be.ext_info.source_train_id,
											ignoreHackCheck: u
										});
									case 12:
										return v = e.sent, e.abrupt("return", v);
									case 14:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					Dt = function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e(t, n) {
							var r, a, i, c, l, u, s, d, p, v, f, _, g, h, y, w, b, x, k, E, N, I, S, R = arguments;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return c = R.length > 2 && void 0 !== R[2] ? R[2] : [], l = null === c || void 0 === c ? void 0 : c.find((function(e) {
											return e.id === A
										})), u = (0, m.get)(n, "nodes[0]", {}), Oe && (u = {
											node_id: null === Oe || void 0 === Oe ? void 0 : Oe.resource_id,
											node_name: (null === Oe || void 0 === Oe || null === (s = Oe.video_extend) || void 0 === s ? void 0 : s.title) || (null === Oe || void 0 === Oe || null === (d = Oe.document_extend) || void 0 === d ? void 0 : d.title) || (null === Oe || void 0 === Oe ? void 0 : Oe.name)
										}), e.next = 6, (0, le.v2)(C, [j, L]);
									case 6:
										p = e.sent, v = p.first_tag_name, f = p.first_tag_id, _ = p.first_tag_code, g = p.second_tag_name, h = p.second_tag_id, y = p.second_tag_code, w = "教师研修", b = "TCH_webPlatform_detail_page", x = (0, $n.Zq)(), x === ee.Xg.SPORT ? (w = "体育", b = "edu_webPlatform_articleDetail_SportsArt_page") : x === ee.Xg.ART && (w = "美育", b = "edu_webPlatform_articleDetail_SportsArt_page"), k = {
											content_id: t.id,
											content_name: null === t || void 0 === t ? void 0 : t.name,
											resource_id: null === (r = u) || void 0 === r ? void 0 : r.node_id,
											resource_name: null === (a = u) || void 0 === a ? void 0 : a.node_name,
											channel_name: w,
											Subchannel_id: A,
											channel_code: (0, O.getPageChannelCode)()
										}, k = (0, O.isTwy)() ? Pr(Pr({}, k), {}, {
											column_code: _,
											column_name: v,
											first_tag_name: g,
											first_tag_id: h,
											first_tag_code: y,
											second_tag_name: "",
											second_tag_code: "",
											third_tag_name: "",
											third_tag_code: "",
											fourth_tag_code: "",
											fourth_tag_name: "",
											fifth_tag_code: "",
											fifth_tag_name: "",
											sixth_tag_code: "",
											sixth_tag_name: "",
											seventh_tag_code: "",
											seventh_tag_name: "",
											eightth_tag_code: "",
											eightth_tag_name: "",
											nineth_tag_code: "",
											nineth_tag_name: "",
											tenth_tag_code: "",
											tenth_tag_name: ""
										}) : Pr(Pr({}, k), {}, {
											first_tag_name: v,
											first_tag_id: f,
											first_tag_code: _,
											column_code: C,
											column_name: Z,
											second_tag_name: g,
											second_tag_id: h,
											second_tag_code: y,
											Subchannel_name: null === l || void 0 === l ? void 0 : l.title,
											third_tag_name: "",
											third_tag_code: "",
											fourth_tag_code: "",
											fourth_tag_name: "",
											fifth_tag_code: "",
											fifth_tag_name: "",
											sixth_tag_code: "",
											sixth_tag_name: "",
											seventh_tag_code: "",
											seventh_tag_name: "",
											eightth_tag_code: "",
											eightth_tag_name: "",
											nineth_tag_code: "",
											nineth_tag_name: "",
											tenth_tag_code: "",
											tenth_tag_name: ""
										}), P["default"].library.trainingId === C && (k = Pr(Pr({}, k), {}, {
											training_name: (null === gt || void 0 === gt ? void 0 : gt.title) || "2022暑期专题培训",
											training_id: null === gt || void 0 === gt ? void 0 : gt.id
										})), Ae(Pr(Pr({}, k), {}, {
											course_type: "t_course",
											course_id: H,
											lesson_id: H,
											resource_id: null === Oe || void 0 === Oe ? void 0 : Oe.resource_id,
											resource_type: null === Oe || void 0 === Oe ? void 0 : Oe.resource_type,
											organ_id: "",
											training_id: (null === gt || void 0 === gt ? void 0 : gt.id) || "",
											studio_id: "",
											column_code: (0, O.isTwy)() ? _ : C,
											channel_code: (0, O.getPageChannelCode)()
										})), setTimeout((function() {
											(0, ge.hn)({
												eventName: b,
												params: k
											})
										}), 300), ("document" === (null === Oe || void 0 === Oe ? void 0 : Oe.resource_type) && null !== Oe && void 0 !== Oe && null !== (i = Oe.document_extend) && void 0 !== i && i.files || ["e_live_activity", "e_exercise_activity", "live"].includes(Oe.resource_type)) && (E = {}, (0, o.Z)(E, null === Oe || void 0 === Oe ? void 0 : Oe.resource_type, null === Oe || void 0 === Oe ? void 0 : Oe.resource_type), (0, o.Z)(E, "e_exercise_activity", "exercise"), (0, o.Z)(E, "e_live_activity", "livebroadcast"), (0, o.Z)(E, "live", "livebroadcast"), S = E, (0, T.Zk)({
											eventName: "resource_invite",
											params: {
												resource_type: S[null === Oe || void 0 === Oe ? void 0 : Oe.resource_type],
												resource_id: null === Oe || void 0 === Oe ? void 0 : Oe.resource_id,
												content_id: null === Oe || void 0 === Oe ? void 0 : Oe.resource_id,
												course_id: H,
												content_name: (null === Oe || void 0 === Oe || null === (N = Oe.video_extend) || void 0 === N ? void 0 : N.title) || (null === Oe || void 0 === Oe || null === (I = Oe.document_extend) || void 0 === I ? void 0 : I.title) || (null === Oe || void 0 === Oe ? void 0 : Oe.name),
												column_code: (0, O.isTwy)() ? _ : C,
												channel_code: (0, O.getPageChannelCode)(),
												training_id: (null === gt || void 0 === gt ? void 0 : gt.id) || ""
											}
										}));
									case 23:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					Lt = function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e(t) {
							var n, r, a, i, o, c, l, u, s, d, m, p, v, f, _, g, h, y, w, b, x, E, N, P, I, S, T, R, D, M, F, B, q, z, J = arguments;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (c = J.length > 1 && void 0 !== J[1] ? J[1] : [], l = J.length > 2 ? J[2] : void 0, C && 0 !== (null === (n = C) || void 0 === n ? void 0 : n.length)) {
											e.next = 7;
											break
										}
										return e.next = 5, ce.Z.getTeacherCourseList(null, (function(e) {
											return e.unit_id === H
										}));
									case 5:
										u = e.sent, C = null !== u && void 0 !== u && u.length && (null === (s = u[0]) || void 0 === s ? void 0 : s.library_id) || t;
									case 7:
										if (A && 0 !== (null === (r = A) || void 0 === r ? void 0 : r.length)) {
											e.next = 48;
											break
										}
										m = (0, O.isTwy)() ? c : c.slice(2), p = Er(m), e.prev = 10, p.s();
									case 12:
										if ((v = p.n())
											.done) {
											e.next = 40;
											break
										}
										return f = v.value, e.next = 16, (0, ue.kR)(f.id);
									case 16:
										_ = e.sent, g = Er(_), e.prev = 18, g.s();
									case 20:
										if ((h = g.n())
											.done) {
											e.next = 27;
											break
										}
										if (y = h.value, -1 === (0, $n.e0)(y)
											.indexOf(C)) {
											e.next = 25;
											break
										}
										return A = f.id, e.abrupt("break", 27);
									case 25:
										e.next = 20;
										break;
									case 27:
										e.next = 32;
										break;
									case 29:
										e.prev = 29, e.t0 = e["catch"](18), g.e(e.t0);
									case 32:
										return e.prev = 32, g.f(), e.finish(32);
									case 35:
										if (!A) {
											e.next = 38;
											break
										}
										return d = _, e.abrupt("break", 40);
									case 38:
										e.next = 12;
										break;
									case 40:
										e.next = 45;
										break;
									case 42:
										e.prev = 42, e.t1 = e["catch"](10), p.e(e.t1);
									case 45:
										return e.prev = 45, p.f(), e.finish(45);
									case 48:
										return e.prev = 48, e.next = 51, (0, de.Ug)(C, H);
									case 51:
										return b = e.sent, e.next = 54, (0, de.aM)(C);
									case 54:
										x = e.sent, w = (0, $n.Nu)(b.tags, x), E = w, N = E.firstLevelCode, P = E.secondLevelCode, I = E.thirdLevelCode, S = E.lastLevelName, j = N, L = P, U = I, k = S, e.next = 66;
										break;
									case 63:
										e.prev = 63, e.t2 = e["catch"](48), console.log(e.t2);
									case 66:
										if (d || !A) {
											e.next = 70;
											break
										}
										return e.next = 69, (0, ue.kR)(A);
									case 69:
										d = e.sent;
									case 70:
										if (T = null === (a = d) || void 0 === a ? void 0 : a.find((function(e) {
											return (0, $n.e0)(e)[0] === C
										})), R = "library_id", j && (R = "catalog_id"), null === (i = d) || void 0 === i || i.forEach((function(e) {
											var t = (0, $n.mD)(e, R)
												.find((function(e) {
													return e === (j || C)
												}));
											t && (T = e)
										})), !(0, O.isTwy)()) {
											e.next = 82;
											break
										}
										return e.next = 77, (0, le.v2)(C, [j]);
									case 77:
										D = e.sent, M = D.first_tag_name, Z = M, e.next = 104;
										break;
									case 82:
										if (11 !== (null === (o = T) || void 0 === o ? void 0 : o.type)) {
											e.next = 103;
											break
										}
										F = Er(c), e.prev = 84, F.s();
									case 86:
										if ((B = F.n())
											.done) {
											e.next = 93;
											break
										}
										if (q = B.value, (null === q || void 0 === q ? void 0 : q.id) !== A) {
											e.next = 91;
											break
										}
										return Z = (null === q || void 0 === q ? void 0 : q.title) || "", e.abrupt("break", 93);
									case 91:
										e.next = 86;
										break;
									case 93:
										e.next = 98;
										break;
									case 95:
										e.prev = 95, e.t3 = e["catch"](84), F.e(e.t3);
									case 98:
										return e.prev = 98, F.f(), e.finish(98);
									case 101:
										e.next = 104;
										break;
									case 103:
										Z = null === (z = T) || void 0 === z ? void 0 : z.setting.data.title;
									case 104:
										if (null === l || void 0 === l || !l.title || !C) {
											e.next = 107;
											break
										}
										return (0, le.F1)({
											courseId: H,
											libraryId: C,
											tag: l.title,
											breadcrumb: l.title
										}), e.abrupt("return", l.title);
									case 107:
										return Z && (0, le.F1)({
											courseId: H,
											channelId: A,
											breadcrumb: Z,
											libraryId: C,
											firstLevel: j,
											secondLevel: L,
											thirdLevel: U,
											tag: k
										}), e.abrupt("return", Z);
									case 109:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[10, 42, 45, 48],
								[18, 29, 32, 35],
								[48, 63],
								[84, 95, 98, 101]
							])
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					Mt = (0, l.useCallback)((function() {
						Pt.push("".concat(window.location.pathname)
							.concat(window.location.search)
							.concat(window.location.hash)
							.replace("courseDetail", "courseIndex"))
					}), []),
					At = (0, l.useCallback)(function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e(t) {
							var n, r, a, i, o, c, l, u;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (!t.action_rule_link) {
											e.next = 24;
											break
										}
										return e.next = 3, (0, I.iT)();
									case 3:
										if (r = e.sent, r) {
											e.next = 7;
											break
										}
										return Mt(), e.abrupt("return", !1);
									case 7:
										return e.next = 9, (0, I.bG)();
									case 9:
										if (a = e.sent, i = a.user_id, o = (0, w.J_)({
											userId: i
										}), c = [te.P0.TEACHER, te.P0.ACADEMIC_STAFF, te.P0.ELECTRIC_TEACHER, te.P0.EDU_ADMIN], (0, m.includes)(c, o)) {
											e.next = 16;
											break
										}
										return Mt(), e.abrupt("return", !1);
									case 16:
										return l = "".concat(t.action_rule_link, "&identity_code=")
											.concat(o), -1 === l.indexOf("course_id") && (l = "".concat(l, "&course_id=")
												.concat(t.id)), e.next = 20, (0, ve.b8)(t.id, l, i);
									case 20:
										if (u = e.sent, u.result || !(["NOT_VERIFY_PROFILE", "NOT_ENROLL", "COURSE_NOT_START"].indexOf(null === (n = u.action) || void 0 === n ? void 0 : n.business_code) > -1)) {
											e.next = 24;
											break
										}
										return Mt(), e.abrupt("return", !1);
									case 24:
										return e.abrupt("return", !0);
									case 25:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(), []);
				(0, l.useEffect)((function() {
					return (0, i.Z)(regeneratorRuntime.mark((function e() {
							var t, n, r, a, i, o, c, l, u, s, d, m, p, v, f, _, g, h, y, w, b, x, k, E, N, S, R, D, L, M, F, U, B, z, J, W;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return window.addEventListener("beforeunload", T.di), window.addEventListener("visibilitychange", T.gi), Se(!0), r = null, a = null, i = null, e.prev = 6, e.next = 9, (0, ve.XU)(H);
									case 9:
										if (r = e.sent, 0 !== (null === (o = r) || void 0 === o || null === (c = o.course_detail) || void 0 === c ? void 0 : c.status)) {
											e.next = 14;
											break
										}
										return Ne(!0), Se(!1), e.abrupt("return");
									case 14:
										if (et.length) {
											e.next = 18;
											break
										}
										return e.next = 17, (0, ue.mj)();
									case 17:
										a = e.sent;
									case 18:
										return null !== (l = r) && void 0 !== l && l.course_detail.action_rule_link && (r.course_detail.action_rule_link = r.course_detail.action_rule_link.replace("${action}", "access")), e.next = 21, At(null === (u = r) || void 0 === u ? void 0 : u.course_detail);
									case 21:
										if (e.sent) {
											e.next = 23;
											break
										}
										return e.abrupt("return");
									case 23:
										if (xe(null === (s = r) || void 0 === s ? void 0 : s.course_detail), E = (null === (d = r) || void 0 === d || null === (m = d.library_tags) || void 0 === m || null === (p = m[0]) || void 0 === p ? void 0 : p.library_id) || (null === (v = r) || void 0 === v ? void 0 : v.course_detail.context_id.split(":")[1]), (0, _e.et)({
											smartLink: null === (f = r) || void 0 === f || null === (_ = f.course_detail) || void 0 === _ || null === (g = _.ext_info) || void 0 === g ? void 0 : g.smart_link
										}), !(E === P["default"].library.trainingId || (null === (h = r) || void 0 === h ? void 0 : h.course_detail.context_id.indexOf("auxo-train:")) > -1)) {
											e.next = 33;
											break
										}
										if (N = r.course_detail.context_id.split("auxo-train:")[1] || P["default"].library.trainingId, !N) {
											e.next = 33;
											break
										}
										return e.next = 31, (0, se.N4)(N);
									case 31:
										i = e.sent, ht(i.train);
									case 33:
										if (Z) {
											e.next = 37;
											break
										}
										return e.next = 36, Lt(E, a, null === (S = i) || void 0 === S ? void 0 : S.train);
									case 36:
										Z = e.sent;
									case 37:
										return tt(a || []), Qe({
											content_id: H,
											content_type: 0,
											content_cover: null === (y = r) || void 0 === y ? void 0 : y.course_detail.front_cover_object_url,
											content_name: null === (w = r) || void 0 === w ? void 0 : w.course_detail.name,
											content_source: (null === (b = r) || void 0 === b ? void 0 : b.course_detail.ext_info.source) || "智慧中小学",
											sub_content: {
												sub_content_num: null === (x = r) || void 0 === x ? void 0 : x.course_detail.total_activity_count,
												video_duration: null === (k = r) || void 0 === k ? void 0 : k.course_detail.total_time
											}
										}), e.next = 41, (0, me.JW)(H);
									case 41:
										R = e.sent, st(R || {}), e.next = 50;
										break;
									case 45:
										e.prev = 45, e.t0 = e["catch"](6), Ne(!0), Se(!1), console.error(e.t0);
									case 50:
										return D = null === (t = r) || void 0 === t || null === (n = t.course_detail) || void 0 === n ? void 0 : n.activity_set_id, K(D), e.next = 54, (0, ve.z_)(D);
									case 54:
										if (L = e.sent, L.activity_total) {
											e.next = 59;
											break
										}
										return Ne(!0), Se(!1), e.abrupt("return");
									case 59:
										return M = {}, e.next = 62, (0, I.iT)();
									case 62:
										if (!e.sent) {
											e.next = 72;
											break
										}
										return e.next = 65, (0, I.bG)();
									case 65:
										return z = e.sent, e.next = 68, (0, Be.ST)({
											userId: z.user_id,
											courseDetail: null === (F = r) || void 0 === F ? void 0 : F.course_detail,
											courseActiveSet: L,
											channelId: A.length > 0 ? A : null === (U = r) || void 0 === U ? void 0 : U.course_detail.id,
											resourceId: q,
											tags: Z
										});
									case 68:
										M = e.sent, qe(Pr(Pr({}, M), {}, {
											userId: z.user_id
										})), Xe(null === (B = M) || void 0 === B ? void 0 : B.resource_progress), i && (J = function(e) {
											var t, n = (null === e || void 0 === e ? void 0 : e.extraFields) || {},
												r = n.device_id,
												a = n.event;
											"com.nd.sdp.traincourse/study" === a && r !== fe.y && (null === (t = It.current) || void 0 === t || t.stopVideo())
										}, ie({
											alias: z.user_id,
											onNewMessage: J,
											onLogined: function() {
												var e;
												return null === (e = It.current) || void 0 === e ? void 0 : e.reportVideoBegined()
											}
										}));
									case 72:
										if (re(L), !(0, O.isTwy)()) {
											e.next = 78;
											break
										}
										return e.next = 76, (0, le.v2)(C, [j]);
									case 76:
										W = e.sent, ot(Pr({}, W));
									case 78:
										Se(!1);
									case 79:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[6, 45]
							])
						})))(),
						function() {
							window.removeEventListener("beforeunload", T.di), window.removeEventListener("visibilitychange", T.gi)
						}
				}), []), (0, l.useEffect)((function() {
					Oe && ne && et.length > 0 && be && (Dt(be, ne, et), (0, T.di)())
				}), [Oe, ne, et, be]);
				var Ft = function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e(t) {
							var n;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (n = t.activity_remark || "", 0 !== n.indexOf("http")) {
											e.next = 4;
											break
										}
										return window.open(n, "_blank"), e.abrupt("return", !1);
									case 4:
										if (null === bt || void 0 === bt || !bt.onExit) {
											e.next = 6;
											break
										}
										return e.abrupt("return", bt.onExit());
									case 6:
										return e.abrupt("return", !0);
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					Ut = function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e(t, n) {
							var r, a, i, o, c, l, u, s, d;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (n) {
											e.next = 9;
											break
										}
										return e.next = 3, (0, le.v2)(C, [j, L]);
									case 3:
										i = e.sent, o = i.first_tag_code, (0, T.XN)({
											eventName: "edu_Platform_resourceDetail_page",
											params: {
												course_type: "t_course",
												parentchannel_code: "",
												channel_code: (0, O.getPageChannelCode)(),
												subchannel_id: A,
												column_code: (0, O.isTwy)() ? o : C,
												course_id: H,
												lesson_id: null === t || void 0 === t ? void 0 : t.id,
												resource_type: (0, O.isTwy)() ? "x_course" : "t_course",
												resource_id: (null === t || void 0 === t ? void 0 : t.resource_id) || "",
												organ_id: "",
												platform_category: "EDU"
											}
										}), C === P["default"].library.trainingId && (0, T.XN)({
											eventName: "edu_Platform_training_page",
											params: {
												training_id: P["default"].library.trainingId,
												channel_code: (0, O.getPageChannelCode)(),
												course_id: H,
												resource_id: (null === t || void 0 === t ? void 0 : t.resource_id) || ""
											}
										}), e.next = 14;
										break;
									case 9:
										return e.next = 11, (0, le.v2)(C, [j, L]);
									case 11:
										c = e.sent, l = c.first_tag_code, (0, T._A)({
											eventName: "edu_Platform_content_click",
											params: {
												content_type: "e_live_activity" === (null === t || void 0 === t ? void 0 : t.type) ? "publiclive_type" : "t_course",
												content_id: H,
												channel_code: (0, O.getPageChannelCode)(),
												first_column_code: (0, O.isTwy)() ? l : A,
												clickPage_type: (0, O.getPageChannelType)(),
												content_name: be.name,
												page_code: (0, O.getPageCode)(),
												locatePage_channel: (0, O.getPageChannelCode)()
											}
										});
									case 14:
										return xt(null), je(t), e.next = 18, (0, Be.bL)({
											courseId: H,
											activityId: t.activity_id || t.id,
											activityName: (null === (r = t.video_extend) || void 0 === r ? void 0 : r.title) || (null === (a = t.document_extend) || void 0 === a ? void 0 : a.title) || (null === t || void 0 === t ? void 0 : t.name),
											resourceId: null === t || void 0 === t ? void 0 : t.resource_id,
											studyTime: null === t || void 0 === t ? void 0 : t.study_time
										});
									case 18:
										Me && (d = Pr(Pr({}, Me), {}, {
											resource_id: null === t || void 0 === t ? void 0 : t.resource_id,
											resource_name: (null === t || void 0 === t || null === (u = t.video_extend) || void 0 === u ? void 0 : u.title) || (null === t || void 0 === t || null === (s = t.document_extend) || void 0 === s ? void 0 : s.title) || (null === t || void 0 === t ? void 0 : t.name)
										}), Ae(d), (0, ge.hC)({
											eventName: "document" === t.resource_type ? "TCH_webPlatform_detail_Document_switchFileList_click" : "TCH_webPlatform_detail_Switchvideo_click",
											params: d
										})), n && 2 === (null === t || void 0 === t ? void 0 : t.complete_mode) && on(t);
									case 20:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					Ht = function() {
						(0, ge.hC)({
							eventName: "TCH_webPlatform_detail_download_click",
							params: Me
						})
					},
					Bt = function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e() {
							var t, n, r, a, i;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, (0, le.v2)(C, [j, L]);
									case 2:
										return t = e.sent, n = t.first_tag_code, (0, T._A)({
											eventName: "edu_webPlatform_touchScreen_click",
											params: {
												channel_code: (0, O.getPageChannelCode)(),
												first_column_code: (0, O.isTwy)() ? n : A,
												content_type: null === be || void 0 === be ? void 0 : be.biz_type,
												content_id: null === be || void 0 === be ? void 0 : be.id
											}
										}), e.next = 7, (0, I.EV)({
											content: "需要登录才可以使用授课模式，是否登录？"
										});
									case 7:
										if (!e.sent) {
											e.next = 14;
											break
										}
										return r = "https://bb.basic.smartedu.cn/", e.next = 11, dr();
									case 11:
										a = e.sent, i = "".concat(r, "#teach_course_id=")
											.concat(H, "&node_id=")
											.concat(Oe.relation_node_id, "&")
											.concat(a), (0, O.urlJumpInElectron)(i);
									case 14:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					qt = function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e(t) {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										(0, ge.hC)({
											eventName: "edu_webPlatform_articleDetail_collect_click",
											params: {
												content_name: Me.content_name,
												resource_id: Me.content_id,
												column_name: Me.column_name,
												channel_name: Me.channel_name,
												channel_code: Me.channel_code,
												resource_type: "课程",
												status: t ? "收藏" : "取消收藏"
											}
										});
									case 1:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					zt = function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e(t) {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										(0, ge.hC)({
											eventName: "edu_webPlatform_articleDetail_likes_click",
											params: {
												content_name: Me.content_name,
												resource_id: Me.content_id,
												column_name: Me.column_name,
												channel_name: Me.channel_name,
												channel_code: Me.channel_code,
												resource_type: "课程",
												status: t ? "点赞" : "取消点赞"
											}
										});
									case 1:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					Jt = be || {},
					Wt = Jt.name,
					Xt = Jt.user_suit,
					Vt = Jt.introduction,
					Kt = Jt.summary,
					Qt = Jt.ext_info,
					Yt = (null === Qt || void 0 === Qt ? void 0 : Qt.extend_reading) || [],
					$t = (null === Qt || void 0 === Qt ? void 0 : Qt.source) || "智慧中小学",
					en = Vt || Kt,
					nn = Xt || en || 0 !== Yt.length,
					rn = (0, l.useMemo)((function() {
						var e, t = (0, $n.i7)();
						if (A && (0, O.isTwy)()) {
							var n = "".concat(nt, "?channelId=")
								.concat(A, "&libraryId=")
								.concat(C, "&breadcrumb=")
								.concat(Z);
							j && j.length > 0 && (n = "".concat(n, "&firstLevel=")
								.concat(j)), t = [].concat((0, a.Z)(t), [{
								title: it.first_tag_name,
								href: n
							}])
						}
						if (A && !(0, O.isTwy)()) {
							var r = null === et || void 0 === et ? void 0 : et.find((function(e) {
								return e.id === A
							}));
							r && (e = r.title, t = [].concat((0, a.Z)(t), [{
								title: r.title,
								href: "".concat(nt, "?channelId=")
									.concat(A)
							}]))
						}
						var i = t[t.length - 1];
						if (C && Z && e !== Z && (!k || Z !== k) && (!i || (null === i || void 0 === i ? void 0 : i.title) !== Z)) {
							var o = "".concat((0, $n.NH)(), "?channelId=")
								.concat(A, "&libraryId=")
								.concat(C, "&breadcrumb=")
								.concat(Z);
							j && j.length > 0 && (o = "".concat(o, "&firstLevel=")
								.concat(j)), L && L.length > 0 && (o = "".concat(o, "&secondLevel=")
								.concat(L)), t = [].concat((0, a.Z)(t), [{
								title: Z,
								href: o
							}])
						}
						if (k && C !== P["default"].library.trainingId) {
							var c = "".concat(nt, "?channelId=")
								.concat(A, "&libraryId=")
								.concat(C, "&breadcrumb=")
								.concat(Z);
							j && j.length > 0 && (c = "".concat(c, "&firstLevel=")
								.concat(j)), L && L.length > 0 && (c = "".concat(c, "&secondLevel=")
								.concat(L)), U && U.length > 0 && (c = "".concat(c, "&thirdLevel=")
								.concat(U)), t = [].concat((0, a.Z)(t), [{
								title: k,
								href: c
							}])
						}
						return gt && (t = [].concat((0, a.Z)(t), [{
							title: gt.title,
							href: "/training/".concat(gt.id)
						}])), Wt && (t = [].concat((0, a.Z)(t), [{
							title: Wt || "",
							href: "".concat(window.location.pathname.replace("courseDetail", "courseIndex"))
								.concat(window.location.search.replace(/&resourceId=[a-z0-9-]{36}/, ""))
						}, {
							title: "课程详情"
						}])), t
					}), [C, Z, Wt, et, it, gt]),
					an = (0, l.useCallback)((0, i.Z)(regeneratorRuntime.mark((function e() {
						var t, n, r;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return St(null === Oe || void 0 === Oe ? void 0 : Oe.resource_id, 1), e.next = 3, (0, I.bG)();
								case 3:
									if (t = e.sent, n = $.R.myCourses(null === t || void 0 === t ? void 0 : t.user_id), r = localStorage.getItem(n), r) try {
										r = JSON.parse(r)
									} catch (a) {
										r = ""
									}
									r || (r = {
										items: [],
										total: 0
									}), r.items = r.items.filter((function(e) {
										return e.content_id !== be.id
									})), r.items.unshift({
										content_cover: be.front_cover_object_url,
										content_id: be.id,
										content_name: be.name,
										content_source: be.ext_info.source || "智慧中小学",
										content_type: 0,
										progress: 0,
										sub_content: {
											sub_content_num: be.total_activity_count,
											video_duration: be.total_time
										}
									}), r.items.length >= 8 && r.items.pop(), r.total = r.items.length, localStorage.setItem(n, JSON.stringify(r));
								case 13:
								case "end":
									return e.stop()
							}
						}), e)
					}))), [be, Oe]),
					on = function() {
						var e = (0, i.Z)(regeneratorRuntime.mark((function e(t) {
							var n, r;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, (0, Be.N_)({
											courseId: be.id,
											workId: null === (n = t || Oe) || void 0 === n ? void 0 : n.work_id,
											status: 2
										});
									case 2:
										r = e.sent, qe(Pr(Pr({}, He), r));
									case 4:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					cn = function() {
						return l.createElement("div", {
							className: rr["work-wrapper"]
						}, l.createElement("div", null, null === Oe || void 0 === Oe ? void 0 : Oe.work_detail), l.createElement("div", {
							className: rr["work-attachments"]
						}, (null === Oe || void 0 === Oe ? void 0 : Oe.attachments) && l.createElement(he.Z, {
							showTitle: !0,
							values: null === Oe || void 0 === Oe ? void 0 : Oe.attachments
						})))
					},
					ln = function() {
						var e, t;
						return l.createElement("div", {
							className: rr["video-wrapper"]
						}, Oe && l.createElement(Gt, {
							key: Oe.resource_id,
							ref: It,
							courseId: null === be || void 0 === be ? void 0 : be.id,
							resources: Oe,
							trackInfo: Me,
							aspectRatio: .56,
							libraryId: C,
							dataSessionId: null === He || void 0 === He ? void 0 : He.userId,
							onUploadProgress: an,
							changeStudyStatus: Ot,
							trainId: null === gt || void 0 === gt ? void 0 : gt.id,
							progressConfig: null === be || void 0 === be || null === (e = be.ext_info) || void 0 === e ? void 0 : e.progress_config,
							resourceMaxPos: null === He || void 0 === He ? void 0 : He.resource_max_pos,
							state: null === He || void 0 === He ? void 0 : He.resource_progress,
							activityEvent: null === He || void 0 === He ? void 0 : He.activity_event,
							reportToTrain: jt,
							forcedLogin: !0,
							onlyone: !1,
							setPlayRef: xt,
							videoStudyConfig: null === be || void 0 === be || null === (t = be.ext_info) || void 0 === t ? void 0 : t.video_study_config,
							limitPlaybackRate: gt ? 3 : 0
						}))
					},
					un = function() {
						var e, t;
						return l.createElement(yr, {
							liveId: null === Oe || void 0 === Oe || null === (e = Oe.ext_info) || void 0 === e ? void 0 : e.live_id,
							errorCover: null === Oe || void 0 === Oe || null === (t = Oe.ext_info) || void 0 === t ? void 0 : t.cover_pic_web_url,
							trainId: null === gt || void 0 === gt ? void 0 : gt.id,
							courseId: H,
							resourceId: null === Oe || void 0 === Oe ? void 0 : Oe.resource_id,
							columnCode: C,
							channelCode: (0, O.getPageChannelCode)(),
							reportToTrain: (0, i.Z)(regeneratorRuntime.mark((function e() {
								var t, n;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return window.postMessage({
												type: "liveStart"
											}, "*"), Ot(2, Rt()), e.next = 4, (0, I.bG)();
										case 4:
											return t = e.sent, n = t.user_id, e.next = 8, (0, Be.lz)({
												videoId: null === Oe || void 0 === Oe ? void 0 : Oe.resource_id,
												userId: n,
												position: Rt()
											});
										case 8:
											jt(2);
										case 9:
										case "end":
											return e.stop()
									}
								}), e)
							})))
						})
					},
					sn = function() {
						return "live" === (null === Oe || void 0 === Oe ? void 0 : Oe.type) || "e_live_activity" === (null === Oe || void 0 === Oe ? void 0 : Oe.type) ? un() : Zt ? cn() : ln()
					};
				return l.createElement(g.Z, {
					loading: Ie,
					loadingProps: {
						delay: 0
					},
					empty: Ce,
					emptyProps: {
						tip: "哎呀，您查看的课程下线啦~"
					}
				}, l.createElement("div", {
					className: rr["course-detail"]
				}, l.createElement(p.Z, {
					config: rn,
					from: "detail",
					origin: "TCH"
				}), l.createElement("div", {
					className: rr["detail-top"]
				}, l.createElement("div", {
					className: rr.title
				}, l.createElement("div", {
					className: rr.name
				}, Wt || ""), l.createElement("div", {
					style: {
						display: "flex"
					}
				}, Zt && 1 === (null === Oe || void 0 === Oe ? void 0 : Oe.complete_mode) && ("2" === String(null === He || void 0 === He || null === (e = He.miniwork_progress[null === Oe || void 0 === Oe ? void 0 : Oe.work_id]) || void 0 === e ? void 0 : e.status) ? l.createElement("div", {
					className: rr.work_result,
					onClick: (0, i.Z)(regeneratorRuntime.mark((function e() {
						var t, n, a, i;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, (0, pe.R_)(null === Oe || void 0 === Oe ? void 0 : Oe.work_id);
								case 2:
									t = e.sent, (null === t || void 0 === t ? void 0 : t.length) > 0 ? (n = t[0].biz_id, a = "name=".concat(Wt, "&breadcrumb=")
										.concat(Z, "&tag=")
										.concat(k, "&channelId=")
										.concat(A, "&libraryId=")
										.concat(C, "&resourceId=")
										.concat(q, "&workFlag=1"), i = "".concat((0, $n.Zq)(), "/courseDetail/work?courseId=")
										.concat(H, "&workId=")
										.concat(null === Oe || void 0 === Oe ? void 0 : Oe.work_id, "&workResultId=")
										.concat(n, "&")
										.concat(a), Pt.push(i)) : r.ZP.error("无成果文件");
								case 4:
								case "end":
									return e.stop()
							}
						}), e)
					})))
				}, "查看我的成果") : l.createElement("div", {
					className: rr.work_result,
					onClick: function() {
						Nt(!0)
					}
				}, "提交作业")), l.createElement("div", {
					className: rr.teach
				}, !gt && be && l.createElement(Y, {
					channelCode: (0, O.getPageChannelCode)(),
					firstColumnCode: (0, O.isTwy)() ? j : A,
					contentType: be.biz_type,
					contentId: Ge.content_id,
					onJumpBB: Bt,
					onJumpResourcePlatform: function() {
						var e = (0, m.cloneDeep)(rn);
						e[e.length - 1].href = window.location.href, (0, R.mo)((0, O.getPageChannelCode)(), H, "t_course", e)
					}
				})))), l.createElement("div", {
					className: rr["extends"]
				}, l.createElement("div", {
					style: {
						display: "flex"
					}
				}, l.createElement("div", {
					className: rr.source
				}, l.createElement("i", {
					className: "iconfont icon_hotel_fill"
				}), l.createElement("span", null, " ", $t)), l.createElement("div", {
					className: rr.learned
				}, l.createElement("i", {
					className: "iconfont icon_draft_fill"
				}), l.createElement("span", null, " ", (0, _.mf)((null === ut || void 0 === ut ? void 0 : ut.total_uv) || 0, 1, 1e7), "已学"))), l.createElement("div", {
					className: rr.actions
				}, be ? l.createElement(v.Z, {
					tag: Z,
					contentId: Ge.content_id,
					contentType: be.biz_type,
					content: (0, $n.xr)(Pr(Pr({}, Ge), {}, {
						introduction: en,
						lastTag: "".concat(Z)
					})),
					onStatusChange: qt,
					firstColumnCode: (0, O.isTwy)() ? j : A
				}) : null, l.createElement(f.Z, {
					resId: H,
					onStatusChange: zt
				}), be && l.createElement(h.Z, {
					content: {
						id: be.id,
						name: be.name,
						type: be.biz_type,
						channelCode: (0, O.getPageChannelCode)(),
						smartlink: null === (t = be.ext_info) || void 0 === t ? void 0 : t.smart_link
					},
					className: "suggestion"
				})))), l.createElement("div", {
					className: rr["detail-main"]
				}, l.createElement("div", {
					className: Zt ? d()(rr["detail-main-l"], rr["detail-main-l-work"]) : rr["detail-main-l"]
				}, sn(), l.createElement("div", {
					className: rr["detail-main-drawer-box"],
					onClick: function() {
						vt(!pt)
					}
				}, pt ? l.createElement("i", {
					className: "iconfont icon_arrowRight_linear"
				}) : l.createElement("i", {
					className: "iconfont icon_arrowLeft_linear"
				}))), l.createElement("div", {
					className: rr["detail-main-r"],
					style: {
						display: pt ? "block" : "none"
					}
				}, l.createElement("div", {
					className: rr["catalog-wrapper"]
				}, l.createElement("div", {
					className: rr["catalog-title"]
				}, l.createElement("i", null), l.createElement("span", null, Zt ? "研修作业" : "研修内容")), Zt ? l.createElement(tn, {
					activitySetId: V,
					initResourceId: q.length > 0 ? q : null === He || void 0 === He ? void 0 : He.activity_last_learning_resource[null === He || void 0 === He || null === (n = He.last_learning_activity) || void 0 === n ? void 0 : n.activity_id],
					isOpenCatalog: !0,
					newHeight: 0,
					onBeforeChangeCatalog: Ft,
					onChangeCatalog: Ut,
					progress: null === He || void 0 === He ? void 0 : He.miniwork_progress,
					libraryId: C
				}) : l.createElement(ye.Z, {
					activitySetId: V,
					catalogData: ne,
					initResourceId: q.length > 0 ? q : null === He || void 0 === He ? void 0 : He.activity_last_learning_resource[null === He || void 0 === He || null === (s = He.last_learning_activity) || void 0 === s ? void 0 : s.activity_id],
					isOpenCatalog: !0,
					newHeight: 0,
					onBeforeChangeCatalog: Ft,
					onChangeCatalog: Ut,
					progress: We,
					libraryId: C,
					isDocument: "document" === (null === Oe || void 0 === Oe ? void 0 : Oe.resource_type) && (null === Oe || void 0 === Oe || null === (y = Oe.document_extend) || void 0 === y ? void 0 : y.files)
				})))), Zt && null !== Oe && void 0 !== Oe && Oe.work_id ? l.createElement(tr, {
					courseId: H,
					workId: null === Oe || void 0 === Oe ? void 0 : Oe.work_id,
					workQuery: "name=".concat(Wt, "&breadcrumb=")
						.concat(Z, "&tag=")
						.concat(k, "&channelId=")
						.concat(A, "&libraryId=")
						.concat(C, "&resourceId=")
						.concat(q, "&workFlag=1")
				}) : l.createElement(l.Fragment, null, l.createElement("div", {
					className: rr["sub-title"]
				}, l.createElement("span", null, "感谢所有为资源建设提供资料的单位和个人")), nn && l.createElement("div", {
					className: rr["detail-bottom"]
				}, l.createElement(ir, {
					lecturer: Xt || "",
					intro: en || ""
				}), l.createElement(lr, {
					extendReadingData: Yt,
					onDownload: Ht
				})), l.createElement(kr, {
					courseDetail: be,
					libraryId: C
				}))), l.createElement(Vn, {
					visible: Ct,
					workId: null === Oe || void 0 === Oe ? void 0 : Oe.work_id,
					courseId: H,
					onOk: function() {
						on(), Nt(!1)
					},
					onCancel: function() {
						Nt(!1)
					}
				}))
			}
			var Sr = Ir
		},
		68727: function(e, t, n) {
			"use strict";
			n.d(t, {
				hL: function() {
					return a
				},
				Sv: function() {
					return i
				}
			});
			n(69826), n(9653), n(74916), n(4723), n(92222);
			var r = n(57241),
				a = function(e) {
					var t;
					if (null !== e && void 0 !== e && e.document_extend || null !== e && void 0 !== e && e.files) {
						var n, r;
						e.document_extend ? (n = e.document_extend.files, r = e.document_extend.hosts) : e.files && (n = e.files, r = e.hosts);
						var a = n.find((function(e) {
								return "pdf" === e.type
							})),
							i = Number(null === (t = e.resource_id.match(/\d+/)) || void 0 === t ? void 0 : t[0]) || 0,
							o = r[i % r.length];
						return "".concat(o)
							.concat(a.file_urls[0])
					}
				},
				i = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "pdf.pdf",
						n = function(e) {
							var n = document.createElement("a");
							n.style.display = "none", n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
						};
					if ((0, r.w1)()) n(e);
					else {
						var a = new XMLHttpRequest;
						a.open("get", e), a.responseType = "blob", a.send(), a.onload = function(e) {
							var t = e.target,
								r = t.status,
								a = t.response;
							if (200 === r || 304 === r) {
								var i = new FileReader;
								i.readAsDataURL(a), i.onload = function(e) {
									n(e.target.result)
								}
							}
						}
					}
				}
		},
		78419: function(e, t, n) {
			"use strict";
			n.d(t, {
				l4: function() {
					return _
				},
				mo: function() {
					return h
				},
				pk: function() {
					return w
				}
			});
			n(47941), n(82526), n(57327), n(38880), n(54747), n(49337);
			var r = n(10369),
				a = n(76109),
				i = n(46514),
				o = (n(35666), n(26699), n(32023), n(74916), n(23123), n(92222), n(27885), n(26032)),
				c = n(80163),
				l = n(86405),
				u = n(52983);

			function s(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t)
							.enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function d(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? s(Object(n), !0)
						.forEach((function(t) {
							(0, i.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			var m = ["course", "prepare_lesson", "syncClassroom", "basicWork"];

			function p(e) {
				var t = e;
				return e.includes("localChannel_") ? t = e.split("_")[1] : m.includes(e) && (t = "syncClassroom"), t
			}
			o["default"].api["x-101-ppt-resource-player"];
			var v = "https://ppt.basic.smartedu.cn",
				f = "/#/view";

			function _(e) {
				var t = (0, l.queryJoin)("".concat(v)
					.concat(f), d(d({}, e), {}, {
						uckey: c.uc.generateUCKey()
					}));
				window.xElectron ? window.xElectron.subView.openInPopup({
					title: "",
					url: t
				}) : (0, l.urlJumpInElectron)(t, "_self")
			}

			function g(e) {
				var t = (new TextEncoder)
					.encode(e),
					n = btoa(String.fromCharCode.apply(String, (0, a.Z)(t)));
				return n
			}

			function h(e, t, n, r) {
				return y.apply(this, arguments)
			}

			function y() {
				return y = (0, r.Z)(regeneratorRuntime.mark((function e(t, n, r, a) {
					var i, o, s, d;
					return regeneratorRuntime.wrap((function(e) {
						while (1) switch (e.prev = e.next) {
							case 0:
								if (i = (0, l.getUrlQuery)() || {}, delete i.catalogType, delete i.subCatalog, o = {
									from: t,
									contentId: n,
									contentType: r,
									ext: g(JSON.stringify({
										breadCrumbConfig: a
									}))
								}, !u.IC) {
									e.next = 9;
									break
								}
								return e.next = 7, c.uc.cloneToken();
							case 7:
								s = e.sent, o.uckey = c.uc.generateUCKey({
									useToken: s
								});
							case 9:
								d = (0, l.queryJoin)("".concat(window.location.origin, "/tch/")
									.concat(p(t)), o), (0, l.urlJumpInElectron)(d, "_self");
							case 11:
							case "end":
								return e.stop()
						}
					}), e)
				}))), y.apply(this, arguments)
			}
			var w = ["ppt", "pptx", "nppt"]
		},
		84986: function(e, t, n) {
			"use strict";
			e.exports = n.p + "img/ri-check-fill.1a4c349b.svg"
		},
		345: function(e, t, n) {
			"use strict";
			e.exports = n.p + "img/to_teach.a7ac671e.svg"
		},
		99569: function(e, t, n) {
			"use strict";
			e.exports = n.p + "img/avatar.25fdf546.png"
		},
		81451: function(e, t, n) {
			"use strict";
			e.exports = n.p + "img/default-cover.86bfb33a.png"
		},
		80950: function() {},
		46601: function() {},
		69948: function() {},
		96419: function() {},
		56353: function() {},
		8623: function() {},
		7748: function() {},
		85568: function() {},
		69386: function() {},
		31616: function() {},
		56619: function() {},
		77108: function() {},
		69862: function() {},
		40964: function() {}
	}
]);
