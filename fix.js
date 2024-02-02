(window["webpackJsonpTchApp"] = window["webpackJsonpTchApp"] || [])
.push([
	[8072], {
		71845: function(e, t, n) {
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

			function i(e) {
				var t = a(e);
				return n(t)
			}

			function a(e) {
				if (!n.o(r, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return r[e]
			}
			i.keys = function() {
				return Object.keys(r)
			}, i.resolve = a, e.exports = i, i.id = 71845
		},
		16422: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return d
				}
			});
			n(70384);
			var r = n(67840),
				i = n(64164),
				a = n(25720),
				o = n(67294),
				c = n(94184),
				l = n.n(c),
				u = {
					back: "index-module_back_epPNe"
				},
				s = function(e, t) {
					var n = e.width,
						c = void 0 === n ? 800 : n,
						s = e.closable,
						d = void 0 === s || s,
						m = e.maskClosable,
						v = void 0 === m || m,
						f = e.className,
						p = (0, o.useRef)(),
						_ = (0, o.forwardRef)((function(e, n) {
							var s = e.title,
								m = (0, o.useState)(!1),
								p = (0, a.Z)(m, 2),
								_ = p[0],
								g = p[1],
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
								className: l()(u.mask, f),
								onCancel: y,
								visible: _,
								title: s,
								footer: null,
								width: c,
								closable: d,
								maskClosable: v
							}, o.createElement(t, (0, i.Z)({}, e, {
								close: y
							}))) : null
						}));
					return {
						FormModal: (0, o.useCallback)((function(e) {
							return o.createElement(_, (0, i.Z)({
								ref: p
							}, e))
						}), []),
						modalRef: p
					}
				},
				d = s
		},
		54004: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				default: function() {
					return Un
				}
			});
			n(59749), n(81919), n(99474), n(12826), n(77049), n(21694), n(7409), n(86544), n(84254), n(752), n(76265), n(21057), n(74407);
			var r = n(36584),
				i = n(42982),
				a = n(15861),
				o = n(4942),
				c = n(70885),
				l = (n(35666), n(34284), n(25728), n(60228), n(76801), n(89730), n(47522), n(64043), n(57267), n(34338), n(61514), n(43843), n(70560), n(69358), n(38077), n(91719), n(48324), n(67294)),
				u = n(26353),
				s = n(93649),
				d = n(94184),
				m = n.n(d),
				v = n(96486),
				f = n(96208),
				p = n(93411),
				_ = n(41865),
				g = n(35929),
				h = n(81972),
				y = n(10673),
				x = n(64164),
				b = n(18860),
				w = n(74021),
				k = (n(70384), n(10369)),
				E = n(25720),
				C = (n(50886), n(94698), n(16422), n(26032)),
				Z = n(80163),
				I = (n(52983), n(83763)),
				S = n(78419),
				P = n(86405);
			n(6568), n(45516);
			window.location.href.indexOf("ykt.eduyun.cn") > -1 || window.location.href.indexOf("localhost") > -1 || window.location.href.indexOf("127.0.0.1");
			var N = n(24812);
			n(25297), n(90255), n(86961);
			var R = n(88454),
				O = n(96288),
				T = n(92474),
				L = n(26500),
				j = {},
				M = {},
				D = function() {
					var e = (0, k.Z)(regeneratorRuntime.mark((function e(t) {
						var n, r, i, a;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									n = t.alias, r = t.onLogined, i = t.onNewMessage, j[n] ? M[n] = i : (a = new L.Z, a.open({
										url: C["default"].api["iot-push-ws"],
										appId: C["default"].app.appid,
										disableSharedWorker: !0
									}), a.setAlias("".concat(n)), j[n] = a, M[n] = i, a.onLogined = r, a.onNewMessage = function(e) {
										M[n] && M[n](e)
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
				A = n(41138),
				U = n(76995),
				F = n(74568),
				z = n(52626),
				H = n(86748),
				q = n(22085),
				B = n(60553),
				W = n(4165),
				X = n(94415),
				V = n(21975),
				J = n(53530),
				Q = n(37865),
				G = n(84062),
				K = n(73059),
				Y = (n(98981), n(88362)),
				$ = n.n(Y),
				ee = n(46514),
				te = n(67840),
				ne = n(60592),
				re = n(12600),
				ie = n(93606),
				ae = n(1859),
				oe = n(82563),
				ce = (n(79288), n(6203), n(17604)),
				le = n(72611),
				ue = n(72209),
				se = n(34394),
				de = (n(29356), n(87314)),
				me = (n(83155), n(37107)),
				ve = n.n(me),
				fe = (n(73964), {
					"course-player": "index-module_course-player_uq5bZ",
					markerExercise: "index-module_markerExercise_6+JoR",
					box: "index-module_box_tSctU",
					header: "index-module_header_zN2MV",
					title: "index-module_title_vgMfR",
					index: "index-module_index_7boRm",
					skip: "index-module_skip_HRYs0",
					body: "index-module_body_-4uJX",
					footer: "index-module_footer_wewZ2",
					greenMarker: "index-module_greenMarker_Bljy5",
					alertModal: "index-module_alertModal_mOiea"
				}),
				pe = ve()
				.ExamAnswerPlayer,
				_e = ve()
				.ExamAnswerEventBus,
				ge = ve()
				.ExamAnswerEvent,
				he = 0,
				ye = {},
				xe = {
					AnswerAll: 0,
					CorrectNum: 1,
					CorrectRate: 2
				};

			function be(e) {
				var t = e.questions,
					n = e.sessionId,
					r = e._useLocalAnswer,
					i = e.onCancel,
					a = e.passed,
					o = e.allowSkip,
					c = e.completionType,
					u = e.completionDetail,
					s = e.setPlayRef,
					d = e.libraryId,
					m = e.courseId,
					v = e.resourceId,
					f = e.status,
					p = void 0 === f ? 0 : f,
					_ = (0, l.useState)(!1),
					g = (0, E.Z)(_, 2),
					h = g[0],
					y = g[1],
					x = (0, l.useState)(!1),
					b = (0, E.Z)(x, 2),
					w = b[0],
					k = b[1],
					Z = (0, l.useState)(!1),
					S = (0, E.Z)(Z, 2),
					N = S[0],
					R = S[1],
					O = (0, l.useState)(null),
					T = (0, E.Z)(O, 2),
					L = T[0],
					j = T[1],
					M = (0, l.useState)(0),
					D = (0, E.Z)(M, 2),
					A = D[0],
					U = D[1],
					F = (0, l.useState)(null),
					z = (0, E.Z)(F, 2),
					H = z[0],
					q = z[1],
					B = (0, l.useState)(r),
					W = (0, E.Z)(B, 2),
					X = W[0],
					V = W[1],
					J = (0, l.useState)(!0),
					Q = (0, E.Z)(J, 2),
					G = Q[0],
					K = Q[1],
					Y = (0, l.useState)(Date.now()),
					$ = (0, E.Z)(Y, 2),
					ee = $[0],
					ne = $[1],
					re = function() {
						return new Promise((function(e) {
							te.Z.confirm({
								content: "离开将无法继续学习，确认离开吗？",
								okText: "确定",
								onOk: function() {
									e(!0), (0, I.XN)({
										eventName: "edu_Platform_exercise_quit_click",
										params: {
											channel_code: (0, P.getPageChannelCode)(),
											column_code: d,
											resource_id: v,
											training_id: C["default"].library.trainingId,
											course_id: m,
											answer_type: (0, ae.dz)(p),
											exercise_type: "断点练习"
										}
									})
								},
								cancelText: "继续作答",
								onCancel: function() {
									e(!1), (0, I.XN)({
										eventName: "edu_Platform_exercise_page",
										params: {
											channel_code: (0, P.getPageChannelCode)(),
											column_code: d,
											resource_id: v,
											training_id: C["default"].library.trainingId,
											course_id: m,
											answer_type: (0, ae.dz)(p),
											exercise_type: "断点练习"
										}
									})
								}
							})
						}))
					};
				(0, l.useEffect)((function() {
					s({
						onExit: re
					}), ye = {}, he = 0, (0, I.XN)({
						eventName: "edu_Platform_exercise_page",
						params: {
							channel_code: (0, P.getPageChannelCode)(),
							column_code: d,
							resource_id: v,
							training_id: C["default"].library.trainingId,
							course_id: m,
							answer_type: (0, ae.dz)(p),
							exercise_type: "断点练习"
						}
					}), (0, I._A)({
						eventName: "edu_Platform_exercise_click",
						params: {
							channel_code: (0, P.getPageChannelCode)(),
							column_code: d,
							resource_id: v,
							training_id: C["default"].library.trainingId,
							course_id: m,
							answer_type: (0, ae.dz)(p),
							exercise_type: "断点练习"
						}
					}), _e.on(ge.QUESTIONCHANGED, (function(e) {
						q(e), U(e.index), he = e.index, X && !ye[e.id] && 0 !== e.state && (ye[e.id] = !0, e.editable ? (k(!0), y(!1)) : (k(!1), y(!0), he + 1 === t.length && (y(!1), R(!0))))
					})), _e.on(ge.USERANSWERCHANGED, (function(e) {
						1 === e.state ? k(!0) : k(!1)
					})), _e.on("statisticChanged", (function(e) {
						j(e)
					}));
					var e = function(e) {
						return e.preventDefault(), e.returnValue = "离开将无法继续学习，确认离开吗？", "离开将无法继续学习，确认离开吗？"
					};
					return window.addEventListener("beforeunload", e),
						function() {
							ye = {}, window.removeEventListener("beforeunload", e)
						}
				}), [ee]);
				var ie = function() {
						ye[H.id] = !0, k(!1), _e.emit(ge.COMMITQUESTION), _e.emit(ge.SHOWANALYSIS, !1), y(!0), A + 1 === t.length ? R(!0) : y(!0)
					},
					oe = function() {
						A + 1 < t.length && (_e.emit(ge.NEXTQUESTION), y(!1))
					},
					ce = function() {
						var e = L || {},
							t = e.totalCount,
							n = void 0 === t ? 1 : t,
							r = e.doneCount,
							o = e.correctCount,
							l = r === n,
							s = function(e) {
								te.Z.confirm({
									content: e,
									okText: "重新作答",
									onOk: function() {
										V(!1), K(!1), R(!1), setTimeout((function() {
											K(!0), ne(Date.now())
										}), 50)
									},
									cancelText: "退出学习",
									onCancel: function() {
										i(!1, l), (0, I.XN)({
											eventName: "edu_Platform_exercise_quit_click",
											params: {
												channel_code: (0, P.getPageChannelCode)(),
												column_code: d,
												resource_id: v,
												training_id: C["default"].library.trainingId,
												course_id: m,
												answer_type: (0, ae.dz)(p),
												exercise_type: "断点练习"
											}
										})
									}
								})
							},
							f = c === xe.AnswerAll;
						if (c === xe.CorrectNum ? f = o >= u : c === xe.CorrectRate && (f = o / n * 100 >= u), a || f) i(f, l);
						else {
							if (c === xe.AnswerAll) return s("您还有".concat(n - r, "题未答，退出练习后将不能继续学习")), !1;
							if (c === xe.CorrectNum) return s("您只答对了".concat(o, "道题目，需要答对")
								.concat(u, "道题目后才能继续学习")), !1;
							if (c === xe.CorrectRate) {
								var _ = Math.round(o / n * 100);
								return s("您答题正确率为".concat(_, "%，需正确率达到")
									.concat(u, "%后才能继续学习")), !1
							}
						}
					},
					le = function() {
						i(!0, !0)
					},
					ue = function() {
						return N ? l.createElement(de.Z, {
							type: "primary",
							onClick: function() {
								_e.emit(ge.DELETELOCALANSWER);
								var e = L || {},
									t = e.totalCount,
									n = void 0 === t ? 1 : t,
									r = e.correctCount;
								(0, I._A)({
									eventName: "edu_Platform_exercise_submit_click",
									params: {
										channel_code: (0, P.getPageChannelCode)(),
										column_code: d,
										resource_id: v,
										training_id: C["default"].library.trainingId,
										course_id: m,
										answer_type: (0, ae.dz)(p),
										answer_num: n,
										answer_correctly_num: r,
										exercise_type: "断点练习"
									}
								}), ce()
							}
						}, "完成") : w ? l.createElement(de.Z, {
							type: "primary",
							onClick: ie
						}, "确定") : h ? l.createElement(de.Z, {
							type: "primary",
							onClick: oe
						}, "下一题") : void 0
					};
				return l.createElement("div", {
					className: fe.markerExercise
				}, l.createElement("div", {
					className: fe.box
				}, l.createElement("div", {
					className: fe.header
				}, l.createElement("div", null, l.createElement("span", {
					className: fe.title
				}, "练习"), l.createElement("span", {
					className: fe.index
				}, A + 1), l.createElement("span", null, "/", t.length)), l.createElement("div", null, o && !a && l.createElement("a", {
					className: fe.skip,
					onClick: function() {
						le()
					}
				}, "跳过"), a && l.createElement(se.Z, {
					type: "close",
					onClick: function() {
						ce()
					}
				}))), l.createElement("div", {
					className: fe.body
				}, G && l.createElement(pe, {
					key: "answer_area_".concat(n),
					config: {
						useSession: !1,
						sessionId: n,
						status: 0,
						examModel: "simplify",
						questions: t,
						enableLocalMark: !0,
						answerMode: 0,
						useLocalAnswer: X,
						gaea_js_config: {
							"static.url": "//s1.ykt.cbern.com.cn/",
							"cs.download.url": "//cdncs.ykt.cbern.com.cn/v0.1/static",
							"general-ability-common.exam.ndplayer_version": "1.10.0"
						},
						cdnCs: "//cdncs.ykt.cbern.com.cn"
					},
					startFromUndo: X,
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
					className: fe.footer
				}, ue())))
			}
			n(62506);
			var we = {
				M3U8_FILE: 6,
				MP3_FILE: 3,
				MP4_FILE: 2,
				FLASH_FILE: 1
			};

			function ke(e) {
				var t, n = [],
					r = Ee(e);
				if (r[we.M3U8_FILE].length > 0 ? t = r[we.M3U8_FILE] : r[we.MP4_FILE].length > 0 ? t = r[we.MP4_FILE] : r[we.FLASH_FILE].length > 0 ? t = r[we.FLASH_FILE] : r[we.MP3_FILE].length > 0 && (t = r[we.MP3_FILE]), t) {
					var i = t.map((function(t) {
							var n;
							return t.data.src = null === (n = e.find((function(e) {
									return e.quality === t.quality && e.type === t.type && e.audio_index === t.audio_index
								}))
								.urls) || void 0 === n ? void 0 : n[0], t
						})),
						a = i.length;
					if (a) {
						for (var o = null, c = -1, l = 0; l < a; l++) {
							var u = i[l];
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

			function Ee(e) {
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

			function Ce(e, t) {
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

			function Ze(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Ce(Object(n), !0)
						.forEach((function(t) {
							(0, ee.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			var Ie, Se, Pe, Ne = {
					ALL: 1,
					PART: 2
				},
				Re = {
					currentTime: 0,
					videoCurrentTime: 0
				};

			function Oe(e) {
				var t, n, r = e.resources,
					i = e.poster,
					a = e.trackInfo,
					o = e.aspectRatio,
					c = e.onPlayChange,
					u = e.onPlayFinish,
					s = e.onTimeUpdate,
					d = e.onReload,
					m = e.onReady,
					f = void 0 === m ? function() {} : m,
					p = e.pageName,
					_ = e.origin,
					g = e.controlSeeking,
					h = e.maxPosition,
					y = void 0 === h ? 0 : h,
					x = e.controlSpeed,
					b = e.forcedLogin,
					C = e.onlyone,
					Z = e.mediaType,
					I = void 0 === Z ? "video" : Z,
					S = e.userId,
					N = void 0 === S ? "" : S,
					R = e.activityId,
					O = void 0 === R ? "" : R,
					T = e.resourceId,
					L = void 0 === T ? "" : T,
					j = e.setPlayRef,
					M = void 0 === j ? function() {} : j,
					D = e.activityEvent,
					A = e.courseId,
					U = e.libraryId,
					F = e.limitPlaybackRate,
					z = (0, l.useState)(!1),
					H = (0, E.Z)(z, 2),
					q = H[0],
					B = H[1],
					W = (0, l.useState)(null),
					X = (0, E.Z)(W, 2),
					V = X[0],
					J = X[1],
					Q = (0, l.useState)(null),
					G = (0, E.Z)(Q, 2),
					K = G[0],
					Y = G[1],
					$ = (0, l.useState)(!0),
					ee = (0, E.Z)($, 2),
					ne = ee[0],
					re = ee[1],
					ie = (0, l.useState)(null),
					ae = (0, E.Z)(ie, 2),
					se = ae[0],
					de = ae[1],
					me = (0, l.useState)(!1),
					ve = (0, E.Z)(me, 2),
					pe = ve[0],
					_e = ve[1],
					ge = (0, l.useContext)(w.Z),
					he = ge.userInfo;

				function ye(e, t) {
					return t.map((function(t) {
							return e.find((function(e) {
								return e.id === t
							}))
						}))
						.filter((function(e) {
							return e
						}))
				}

				function xe(e, t, n) {
					if (t === Ne.ALL) return e;
					if (n >= e.length) return e;
					var r = [],
						i = e.map((function(e) {
							return e.id
						}));
					while (r.length < n) {
						var a = Math.floor(Math.random() * i.length),
							o = i[a];
						r.includes(o) || r.push(o)
					}
					return ye(e, r)
				}

				function we(e, t) {
					return Ee.apply(this, arguments)
				}

				function Ee() {
					return Ee = (0, k.Z)(regeneratorRuntime.mark((function e(t, n) {
						var r, i, a, o, c, l, u, s, d, m, v, f;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									if (i = t.activity_event_behavior || {}, a = i.behavior_type, o = i.data.paper_url, "exercise" !== a || !o || (null === (r = t.progress) || void 0 === r ? void 0 : r.status) === ue.w.PASS && !n) {
										e.next = 36;
										break
									}
									return (0, oe.F5)(), null === (c = Ie) || void 0 === c || c.pause(), Ie.isFullscreen() && Ie.exitFullscreen(), e.next = 7, (0, le.ZP)()
										.get(o);
								case 7:
									return l = e.sent, u = l.data, s = null, d = t.activity_event_behavior.setting, m = d.exercise_type, v = d.exercise_num, re(!n), e.next = 14, ue.Z.getAnswerQuestionIds(t.id);
								case 14:
									if (f = e.sent, 0 !== f.length) {
										e.next = 22;
										break
									}
									return e.next = 18, xe(u.question, m, v);
								case 18:
									s = e.sent, re(!1), e.next = 28;
									break;
								case 22:
									if (s = ye(u.question, f), s.length === f.length) {
										e.next = 28;
										break
									}
									return e.next = 26, xe(u.question, m, v);
								case 26:
									s = e.sent, re(!1);
								case 28:
									return e.next = 30, ue.Z.setAnswerQuestionIds(t.id, s.map((function(e) {
										return e.id
									})));
								case 30:
									Y(s), J(t), _e(!0), setTimeout((function() {
										var e;
										null === (e = Ie) || void 0 === e || e.pause()
									}), 800), e.next = 37;
									break;
								case 36:
									Y(null);
								case 37:
								case "end":
									return e.stop()
							}
						}), e)
					}))), Ee.apply(this, arguments)
				}(0, l.useEffect)((function() {
					var e = function() {
						var e = (0, k.Z)(regeneratorRuntime.mark((function e() {
							var t, n, r, i, a;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if ("video" !== I && "audio" !== I) {
											e.next = 19;
											break
										}
										return ue.Z.setKey(O, L), e.next = 4, ue.Z.getMarkerList();
									case 4:
										t = e.sent, n = (null === D || void 0 === D ? void 0 : D[L]) || {}, r = 0;
									case 7:
										if (!(r < t.length)) {
											e.next = 16;
											break
										}
										if (a = t[r], 2 !== Number(null === (i = n[a.condition_params.time]) || void 0 === i ? void 0 : i.status)) {
											e.next = 13;
											break
										}
										return a.progress.status = ue.w.PASS, e.next = 13, ue.Z.updateOneMarkerProgress(a.id, a.progress);
									case 13:
										r++, e.next = 7;
										break;
									case 16:
										(0, v.isEqual)(se, t) || de((0, v.cloneDeep)(t) || []), e.next = 20;
										break;
									case 19:
										de([]);
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
				}), [D]);
				var Ce = function() {
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
					Oe = (0, l.useCallback)((function(e) {
						var t, n, r = e.time % 60,
							i = parseInt(e.time / 60, 10) % 60,
							a = parseInt(e.time / 3600, 10),
							o = function(e) {
								return "00".concat(e)
									.substr(-2)
							},
							c = '<div class="marker-name">'.concat(o(a), ":")
							.concat(o(i), ":")
							.concat(o(r), " ")
							.concat(e.text, "</div>");
						return (null === (t = e.data.progress) || void 0 === t ? void 0 : t.status) === ue.w.PASS && (c += '<div class="marker-redo" data-marker-id="'.concat(e.data.id, '">再做一次</div>')), (null === (n = e.data.progress) || void 0 === n ? void 0 : n.status) === ue.w.DOING && (c += '<div class="marker-continue" data-marker-id="'.concat(e.data.id, '">继续答题</div>')), "".concat(c)
					}), []),
					Te = (0, l.useMemo)((function() {
						return {
							sources: ke((0, P.isLocalhost)() ? Ce() : r),
							poster: i,
							playbackRates: x ? [] : [.5, 1, 1.25, 1.5, 2],
							mediaType: I,
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
											.concat(Oe(e), "</div>")
									}
								},
								onMarkerReached: function(e) {
									var t, n = function() {
										var t = (0, k.Z)(regeneratorRuntime.mark((function t() {
											var n, r, i;
											return regeneratorRuntime.wrap((function(t) {
												while (1) switch (t.prev = t.next) {
													case 0:
														return t.next = 2, ue.Z.getMarker(e.data.id);
													case 2:
														if (i = t.sent, !(Math.ceil(Ie.currentTime()) >= (null === i || void 0 === i || null === (n = i.condition_params) || void 0 === n ? void 0 : n.time)) || null !== (r = Ie) && void 0 !== r && r.seeking()) {
															t.next = 6;
															break
														}
														return t.next = 6, we(i);
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
									null !== (t = Ie) && void 0 !== t && t.seeking() ? setTimeout(n, 1e3) : n()
								}
							}
						}
					}), []),
					Le = (0, l.useCallback)(function() {
						var e = (0, k.Z)(regeneratorRuntime.mark((function e(t) {
							var n, r, i;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return n = -1 !== t.target.className.indexOf("marker-redo"), r = t.target.getAttribute("data-marker-id"), e.next = 4, ue.Z.getMarker(r);
									case 4:
										return i = e.sent, i.progress = Ze(Ze({}, i.progress), {}, {
											status: n ? ue.w.PASS : ue.w.DOING
										}), e.next = 8, ue.Z.updateOneMarkerProgress(i.id, i.progress);
									case 8:
										return e.next = 10, (0, oe.pS)({
											courseId: A,
											resourceId: L,
											markerTime: i.condition_params.time,
											markerState: i.progress.status === ue.w.PASS ? 2 : 1
										});
									case 10:
										return e.next = 12, we(i, !0);
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
					je = (0, l.useCallback)((0, k.Z)(regeneratorRuntime.mark((function e() {
						var t, n, r, i, a, o, c, l, u, s, d, m, v, f, p, _, g, h, y;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									if (console.log("=== markerInit"), se && 0 !== se.length && Ie) {
										e.next = 3;
										break
									}
									return e.abrupt("return");
								case 3:
									for (Ie.markers.reset((null === se || void 0 === se ? void 0 : se.map((function(e) {
											return {
												time: e.condition_params.time,
												text: e.name,
												data: e,
												class: e.progress.status === ue.w.PASS ? fe.greenMarker : ""
											}
										}))) || []), t = Ie.el()
										.querySelectorAll(".marker-redo"), n = 0; t && n < t.length; n++) r = t[n], r.addEventListener("click", Le);
									for (i = Ie.el()
										.querySelectorAll(".marker-continue"), a = 0; i && a < i.length; a++) o = i[a], o.addEventListener("click", Le);
									for (c = Ie.el()
										.querySelectorAll(".vjs-tip"), l = Ie.el()
										.getBoundingClientRect(), u = l.left, s = l.right, d = 0; c && d < c.length; d++) m = c[d], v = m.getBoundingClientRect(), f = v.left, p = v.right, _ = v.width, g = m.querySelector(".vjs-tip-inner"), h = f - u, y = s - p, h < 0 && y < 0 || h > 0 && y > 0 ? g.style.position = "static" : h < 0 ? (g.style.position = "relative", g.style.left = "".concat(Math.abs(h) - 2, "px"), g.style.right = "auto") : y < 0 && (g.style.position = "relative", g.style.left = "auto", g.style.right = "".concat(Math.abs(y) - 2, "px")), _ >= 200 && (g.style.width = "200px", g.style.whiteSpace = "normal");
								case 11:
								case "end":
									return e.stop()
							}
						}), e)
					}))), [se]);
				(0, l.useEffect)((function() {
					se && 0 !== se.length && q && (console.log("=== useEffect play"), je(), Ie.on("useractive", je), Ie.one("play", je))
				}), [se, q]);
				var Me = function() {
						var e = (0, k.Z)(regeneratorRuntime.mark((function e(t, n) {
							var r, i;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (M(null), (0, oe.eN)(), !n) {
											e.next = 6;
											break
										}
										return e.next = 5, ue.Z.setAnswerQuestionIds(V.id, []);
									case 5:
										re(!1);
									case 6:
										if (V.progress.status === ue.w.PASS) {
											e.next = 16;
											break
										}
										return t ? V.progress.status = ue.w.PASS : !1 !== t && (V.progress.status = ue.w.DOING), e.next = 10, ue.Z.updateOneMarkerProgress(V.id, V.progress);
									case 10:
										return e.next = 12, (0, oe.pS)({
											courseId: A,
											resourceId: L,
											markerTime: V.condition_params.time,
											markerState: V.progress.status === ue.w.PASS ? 2 : 1
										});
									case 12:
										return e.next = 14, ue.Z.getMarkerList();
									case 14:
										r = e.sent, de(r);
									case 16:
										_e(!1), V.progress.status === ue.w.PASS ? (Ie.ended() || Ie.play(), Y(null)) : Ie.currentTime() >= V.condition_params.time && (i = V.condition_params.time - 2, Ie.currentTime(i >= 0 ? i : 0)), J(null), je();
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
					De = function() {
						return;
						if (Ie && !Ie.paused()) {
							var e = !1,
								t = Ie.currentTime(),
								n = Date.now(),
								r = 1e3 * (t - Re.videoCurrentTime) / (n - Re.currentTime) - F;
							F && (Ie.playbackRate() > F || r < 16 && r > .01) && Re.videoCurrentTime > 1 && (e = !0), e ? (Pe && Pe.destroy(), Pe = te.Z.warn({
								content: "系统检测到倍速播放，已自动暂停学习，关闭倍速播放后可继续学习。",
								onOk: function() {
									Pe = null
								},
								getContainer: function() {
									return Ie.el()
								},
								className: fe.alertModal
							}), Ie.playbackRate(1), Ie.pause()) : (Re.currentTime = n, Re.videoCurrentTime = t)
						}
					},
					Ae = function(e, t) {
						Ie = t, (0, oe.eN)(), f(e, t), console.log("=== handleReady"), B(!0)
					};
				(0, l.useEffect)((function() {
					Se && clearInterval(Se), F && Ie && (Se = setInterval((function() {
						De()
					}), 1e3))
				}), [F, Ie]), (0, l.useEffect)((function() {
					var e = function() {
						return;
						var e;
						document.hidden && (null === (e = Ie) || void 0 === e || e.pause())
					};
					return window.addEventListener("visibilitychange", e),
						function() {
							window.removeEventListener("visibilitychange", e), (0, oe.eN)(), clearInterval(Se)
						}
				}), []);
				var Ue = function(e, t) {
					De(), document.hidden && (null === t || void 0 === t || t.pause()), e && (Re.videoCurrentTime = t.currentTime(), Re.currentTime = Date.now()), c(e, t)
				};
				return l.createElement(l.Fragment, null, l.createElement(ce.Z, {
					key: r.resource_id,
					className: "fish-ndrVideo vjs-big-play-centered",
					options: Te,
					trackInfo: a,
					pageName: p,
					onReady: Ae,
					aspectRatio: o,
					onPlayChange: Ue,
					onPlayFinish: u,
					onTimeUpdate: s,
					onReload: d,
					origin: _,
					controlSeeking: g,
					maxPosition: y,
					forcedLogin: b,
					onlyone: C
				}), pe && K && l.createElement(be, {
					setPlayRef: M,
					questions: K,
					sessionId: "".concat(V.id, "_")
						.concat(N, "_")
						.concat(K.map((function(e) {
								return e.id.substring(0, 3)
							}))
							.join("")),
					_useLocalAnswer: ne,
					onCancel: Me,
					libraryId: U,
					courseId: A,
					resourceId: L,
					status: null === (t = V.progress) || void 0 === t ? void 0 : t.status,
					passed: (null === (n = V.progress) || void 0 === n ? void 0 : n.status) === ue.w.PASS,
					allowSkip: V.allow_skip,
					completionType: V.activity_event_behavior.setting.completion_type,
					completionDetail: V.activity_event_behavior.setting.completion_detail,
					questionProps: {
						watermark: {
							userInfo: he
						}
					}
				}))
			}
			var Te = ["courseId", "resources", "onUploadProgress", "changeStudyStatus", "forcedLogin", "onlyone", "resourceMaxPos", "activityEvent", "reportToTrain", "from", "onPlay", "trainId", "libraryId"];

			function Le(e, t) {
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

			function je(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Le(Object(n), !0)
						.forEach((function(t) {
							(0, ee.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			var Me, De, Ae, Ue, Fe = ae.hX.NotStart,
				ze = ae.hX.Studying,
				He = ae.hX.Finish,
				qe = 1e4,
				Be = !1,
				We = !1,
				Xe = null,
				Ve = 0,
				Je = null,
				Qe = !0,
				Ge = !1,
				Ke = !1,
				Ye = !1,
				$e = 0,
				et = 1,
				tt = !1,
				nt = window.rawWindow || window,
				rt = void 0 !== nt.orientation || /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
				it = (0, l.forwardRef)((function(e, t) {
					var n, r, i, a = e.courseId,
						o = e.resources,
						c = e.onUploadProgress,
						u = e.changeStudyStatus,
						s = void 0 === u ? function() {} : u,
						d = e.forcedLogin,
						m = void 0 !== d && d,
						f = e.onlyone,
						p = void 0 !== f && f,
						_ = e.resourceMaxPos,
						g = e.activityEvent,
						y = e.reportToTrain,
						b = void 0 === y ? (0, k.Z)(regeneratorRuntime.mark((function e() {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
									case "end":
										return e.stop()
								}
							}), e)
						}))) : y,
						S = e.from,
						N = e.onPlay,
						R = void 0 === N ? function() {} : N,
						O = e.trainId,
						T = e.libraryId,
						L = (0, ne.Z)(e, Te);
					Ue = L.dataSessionId;
					var j = (0, l.useState)(!1),
						M = (0, E.Z)(j, 2),
						D = M[0],
						A = M[1],
						U = (0, l.useState)(null),
						F = (0, E.Z)(U, 2),
						z = F[0],
						H = F[1],
						q = (0, l.useState)({}),
						B = (0, E.Z)(q, 2),
						W = B[0],
						X = B[1],
						V = (0, l.useState)(!1),
						J = (0, E.Z)(V, 2),
						Q = J[0],
						G = J[1],
						K = (0, l.useState)(!1),
						Y = (0, E.Z)(K, 2),
						ce = Y[0],
						le = Y[1],
						ue = (0, l.useState)(0),
						se = (0, E.Z)(ue, 2),
						de = se[0],
						me = se[1],
						ve = (0, l.useContext)(w.Z),
						pe = ve.userInfo,
						_e = function() {
							var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je;
							if (t > 0) {
								var n = Math.ceil(Xe.duration());
								e = n > 0 && t >= n ? He : ze
							} else e = Fe;
							return e
						};
					(0, l.useImperativeHandle)(t, (function() {
						return {
							stopVideo: function() {
								Xe && !Xe.paused() && (Xe.pause(), te.Z.warn({
									content: "你已在其他端进入学习，本端自动暂停学习。",
									getContainer: function() {
										return Xe.el()
									},
									className: fe.alertModal
								}))
							},
							reportVideoBegined: function() {
								if (Xe && !Xe.paused()) {
									var e = Math.ceil(Xe.currentTime()),
										t = Math.ceil(Xe.duration());
									e > t && (e = t);
									var n = _e(e);
									b(n, e, !1, !0)
								}
							}
						}
					})), (0, l.useEffect)((function() {
						"e_exercise_activity" === o.resource_type && G(!0), tt = !1
					}), [o]);
					var ge = function() {
							var e = (0, k.Z)(regeneratorRuntime.mark((function e(t) {
								var n, r, i, a;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											if (r = t.currentPage, i = t.pageCount, i) {
												e.next = 3;
												break
											}
											return e.abrupt("return");
										case 3:
											if (Be = !0, Ue) {
												e.next = 7;
												break
											}
											return console.log("not login, document not trigger report data"), e.abrupt("return");
										case 7:
											a = r, a > i && (a = i), et = a, console.log("document trigger report data", a), a === i && (clearTimeout(Ae), b(He, i)), We = Math.max((null === _ || void 0 === _ || null === (n = _[o.resource_id]) || void 0 === n ? void 0 : n.pos) || a) === i, c && c(), "prepare" !== S && (0, oe.Xq)({
												documentId: o.resource_id,
												userId: Ue,
												position: a
											}), s(We ? He : ze, a);
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
						he = function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
							Ue && (clearTimeout(Ae), Ae = setTimeout((0, k.Z)(regeneratorRuntime.mark((function t() {
								var n, r;
								return regeneratorRuntime.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (!We) {
												t.next = 2;
												break
											}
											return t.abrupt("return");
										case 2:
											if (t.prev = 2, "prepare" === S) {
												t.next = 7;
												break
											}
											return t.next = 6, b(ze, et);
										case 6:
											n = t.sent;
										case 7:
											t.next = 11;
											break;
										case 9:
											t.prev = 9, t.t0 = t["catch"](2);
										case 11:
											"prepare" !== S && e(1e3 * ((null === (r = n) || void 0 === r ? void 0 : r.frequency) || 60));
										case 12:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[2, 9]
								])
							}))), t))
						},
						ye = function() {
							return !!Xe && Xe.playbackRate() > 1
						},
						xe = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							if (Ue) {
								try {
									"prepare" !== S && (0, oe.Mz)({
										videoId: o.resource_id || o.id,
										userId: Ue,
										position: e,
										immediate: t
									})
								} catch (n) {}
								c && c()
							}
						},
						be = function e() {
							Ue && (clearTimeout(Me), Me = setTimeout((0, k.Z)(regeneratorRuntime.mark((function t() {
								var n;
								return regeneratorRuntime.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											n = Math.ceil(Xe.currentTime()), xe(n, !1), n < Math.ceil(Xe.duration()) && e();
										case 3:
										case "end":
											return t.stop()
									}
								}), t)
							}))), qe))
						},
						we = function e() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
							Ue && (clearTimeout(De), De = setTimeout((0, k.Z)(regeneratorRuntime.mark((function t() {
								var n, r, i;
								return regeneratorRuntime.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (n = Math.ceil(Xe.currentTime()), t.prev = 1, "prepare" === S) {
												t.next = 6;
												break
											}
											return t.next = 5, b(ze, n, ye());
										case 5:
											r = t.sent;
										case 6:
											t.next = 11;
											break;
										case 8:
											t.prev = 8, t.t0 = t["catch"](1), console.error(t.t0);
										case 11:
											"prepare" !== S && n < Math.ceil(Xe.duration()) && e(1e3 * ((null === (i = r) || void 0 === i ? void 0 : i.frequency) || 60));
										case 12:
										case "end":
											return t.stop()
									}
								}), t, null, [
									[1, 8]
								])
							}))), t))
						},
						ke = function() {
							clearTimeout(Me), clearTimeout(De)
						},
						Ee = function() {
							if (Be && (!Ke || !We)) {
								var e = (Xe ? Ke : We) ? He : ze,
									t = Xe ? $e : et;
								xe(t, !0), "prepare" !== S && b(e, t), s(e, t)
							}
							ke()
						},
						Ce = function() {
							Xe && (Ye = !0)
						},
						Ze = function(e) {
							if (e) {
								Ke = !0, ke();
								var t = Math.ceil(e.duration());
								Je = t || 0, xe(t, !0), "prepare" !== S && b(He, t), s(He, t)
							}
						},
						Ie = (0, v.debounce)((function(e, t) {
							var n, r, i;
							Be = e, console.log("===== onVideoPlayChange  resource_id： ".concat(o.resource_id), e, Math.ceil(t.duration()), Math.ceil(t.currentTime()));
							var a = Math.max(W || 0, (null === _ || void 0 === _ || null === (n = _[o.resource_id]) || void 0 === n ? void 0 : n.pos) || 0);
							if (e && !tt && !a && 0 === Math.floor(t.currentTime()) && null !== (r = L.videoStudyConfig) && void 0 !== r && r.alert_before_study && (null === (i = L.state) || void 0 === i || !i[o.resource_id])) return tt = !0, t.pause(), void te.Z.info({
								title: "提示",
								icon: null,
								content: L.videoStudyConfig.alert_content || "须学习完课程的视频并完成相应测试题才可获得该课程视频的学时",
								okText: "我知道了",
								onOk: function() {
									t.play()
								}
							});
							tt = !0;
							var c = Math.ceil(t.currentTime()),
								l = Math.ceil(t.duration());
							c > l && (c = l);
							var u = _e(c);
							if (!0 === e && (window.postMessage({
								type: "playStart"
							}, "*"), R(), b(u, c, !1, !0), !0 === Qe && (Qe = !1, console.log("===== lastPos: ".concat(Ve, "  maxPos: ")
								.concat(Je)), Je > 0 && Je < l ? (t.currentTime(Je), console.log("===== seekTo: ".concat(Je))) : Ve > 0 && Ve < l && (t.currentTime(Ve), console.log("===== seekTo: ".concat(Ve)))), ke(), be(), _e() !== He && we(6e4), !Ye)) {
								var d = _e();
								s(d, c)
							}
							Ge || Ke || e || Ye ? (Ge = !1, Ye = !1) : (ke(), xe(c, !1), "prepare" !== S && b(u, c))
						}), 200),
						Se = function(e, t) {
							Xe = t, t.on("seeking", (function() {
								Ge = !0
							}))
						},
						Pe = function(e) {
							return $e = Math.ceil(e)
						};
					(0, l.useEffect)((function() {
						return (0, k.Z)(regeneratorRuntime.mark((function e() {
								var t, n, r, i, c, l, u, s, d, m;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											if (Ue) {
												e.next = 3;
												break
											}
											return A(!0), e.abrupt("return");
										case 3:
											if (window.addEventListener("beforeunload", Ee), n = !1, r = "teacherTraining" === (null === (t = L.progressConfig) || void 0 === t ? void 0 : t.type), !(r && O && Ue)) {
												e.next = 11;
												break
											}
											return e.next = 9, (0, oe.Vh)(O, a, Ue);
										case 9:
											n = e.sent, n && te.Z.warn({
												content: "你的学习记录被判定为异常，请重新学习课程。"
											});
										case 11:
											if ("document" !== o.resource_type) {
												e.next = 24;
												break
											}
											return console.log("document init report data"), e.next = 15, (0, oe.xC)({
												documentId: o.resource_id || o.id,
												userId: Ue
											});
										case 15:
											if (e.t0 = e.sent, e.t0) {
												e.next = 18;
												break
											}
											e.t0 = 1;
										case 18:
											c = e.t0, l = (null === _ || void 0 === _ || null === (i = _[o.resource_id]) || void 0 === i ? void 0 : i.pos) || 1, u = 1, u = n && c > l ? l : Math.max(c, l), H(u), he(6e4);
										case 24:
											if ("video" !== o.resource_type && "audio" !== o.resource_type && "x_video" !== o.resource_type) {
												e.next = 41;
												break
											}
											return console.log("video init report data"), Qe = !0, Ge = !1, Ke = !1, Ye = !1, e.next = 32, (0, oe.Tc)({
												videoId: o.resource_id || o.id,
												userId: Ue
											});
										case 32:
											if (e.t1 = e.sent, e.t1) {
												e.next = 35;
												break
											}
											e.t1 = 0;
										case 35:
											d = e.t1, m = (null === _ || void 0 === _ || null === (s = _[o.resource_id]) || void 0 === s ? void 0 : s.pos) || 0, n && d > m ? (Ve = m, Je = m) : (Ve = d, Je = Math.max(d, m)), X(je(je({}, W), {}, (0, ee.Z)({}, o.resource_id, Ve))), console.log("===== setVideoLastPos  lastPos：".concat(d, "  videoLastMaxPos：")
												.concat(Je)), A(!0);
										case 41:
										case "end":
											return e.stop()
									}
								}), e)
							})))(),
							function() {
								Ue && (Ee(), window.removeEventListener("beforeunload", Ee)), Be = !1, Xe = null, Ve = 0, Je = null, Qe = !0, Ge = !1, Ke = !1, Ye = !1, $e = 0, tt = !1, X({})
							}
					}), [o, _]), (0, l.useEffect)((function() {
						if (D && o) var e = setInterval((function() {
							Xe && null !== Je && (clearInterval(e), Xe.one("canplay", (function() {
								if ("prepare" !== S)
									if (Je) {
										var e = _e(Je);
										b(e, Je)
									} else b(Fe, 0)
							})))
						}), 200)
					}), [o, D]);
					var Ne, Re, Le, nt, it, at, ot, ct, lt, ut, st, dt, mt = (0, l.useCallback)((0, v.debounce)((function() {
							te.Z.info({
								closable: !0,
								centered: !0,
								width: 550,
								title: "提示",
								okText: "我知道了",
								content: "请在WEB端或者APP端观看",
								afterClose: function() {
									A(!1)
								}
							})
						}), 1e3), []),
						vt = !(null === (n = L.progressConfig) || void 0 === n || !n.spi);
					if (vt && rt) return mt(), null;
					if (("video" === o.resource_type || "audio" === o.resource_type) && null !== (r = o.video_extend) && void 0 !== r && r.urls) return D ? l.createElement("div", {
						className: fe["course-player"]
					}, l.createElement(Oe, (0, x.Z)({
						libraryId: T,
						key: o.resource_id,
						courseId: a,
						resources: null === (Ne = o.video_extend) || void 0 === Ne ? void 0 : Ne.urls,
						poster: null !== (Re = null === (Le = o.video_extend) || void 0 === Le ? void 0 : Le.front_cover_url) && void 0 !== Re ? Re : "",
						onReady: Se,
						onPlayChange: Ie,
						onPlayFinish: Ze,
						onReload: Ce,
						onTimeUpdate: Pe,
						origin: "TCH",
						activityEvent: g,
						controlSeeking: 2 !== (null === (nt = L.state) || void 0 === nt ? void 0 : nt[o.resource_id]) && !1 === (null === (it = L.progressConfig) || void 0 === it ? void 0 : it.is_allow_drag),
						maxPosition: Je,
						controlSpeed: !1 === (null === (at = L.progressConfig) || void 0 === at ? void 0 : at.is_allow_speed),
						forcedLogin: m,
						onlyone: p,
						mediaType: o.resource_type,
						userId: L.dataSessionId,
						activityId: o.activity_id,
						resourceId: o.resource_id
					}, L))) : null;
					if ("x_video" === o.resource_type && o.urls) return D ? l.createElement("div", {
						className: fe["course-player"]
					}, l.createElement(Oe, (0, x.Z)({
						key: o.id,
						courseId: a,
						resources: o.urls,
						poster: null !== (ot = o.cover) && void 0 !== ot ? ot : "",
						onReady: Se,
						onPlayChange: Ie,
						onPlayFinish: Ze,
						onReload: Ce,
						origin: "TCH",
						activityEvent: g,
						controlSeeking: 2 !== (null === (ct = L.state) || void 0 === ct ? void 0 : ct[o.resource_id]) && !1 === (null === (lt = L.progressConfig) || void 0 === lt ? void 0 : lt.is_allow_drag),
						maxPosition: Je,
						controlSpeed: !1 === (null === (ut = L.progressConfig) || void 0 === ut ? void 0 : ut.is_allow_speed),
						forcedLogin: m,
						onlyone: p,
						userId: L.dataSessionId,
						activityId: o.activity_id,
						resourceId: o.resource_id
					}, L))) : null;
					if ("document" === o.resource_type && null !== (i = o.document_extend) && void 0 !== i && i.files) return R(), l.createElement(re.Z, (0, x.Z)({
						key: o.resource_id,
						data: je(je({
							resource_id: o.resource_id
						}, o.document_extend), {}, {
							init_page_num: z
						}),
						beginPage: z,
						onPageChange: ge,
						origin: "TCH",
						controlSeeking: 2 !== (null === (st = L.state) || void 0 === st ? void 0 : st[o.resource_id]) && (!!L.progressConfig && !L.progressConfig.is_allow_drag),
						maxPosition: Math.max((null === _ || void 0 === _ || null === (dt = _[o.resource_id]) || void 0 === dt ? void 0 : dt.pos) || z + 1)
					}, L));
					if ("e_exercise_activity" === o.resource_type) {
						var ft, pt, _t;
						R();
						var gt = function(e) {
								var t;
								if (2 !== (null === (t = L.state) || void 0 === t ? void 0 : t[o.resource_id])) {
									var n = e || {},
										r = n.totalCount,
										i = void 0 === r ? 1 : r,
										c = n.correctCount,
										l = void 0 === c ? 0 : c,
										u = o.ext_info || {},
										d = u.pass_model,
										m = u.pass_value,
										v = 4 === d;
									1 === d ? v = l / i * 100 >= m : 3 === d && (v = l >= m), v && (s(2, l), b(2, l)), (0, I._A)({
										eventName: "edu_Platform_exercise_submit_click",
										params: {
											channel_code: (0, P.getPageChannelCode)(),
											column_code: T,
											training_id: C["default"].library.trainingId,
											course_id: a,
											answer_type: (0, ae.dz)(de),
											answer_num: i,
											answer_correctly_num: l,
											exercise_type: "在线练习"
										}
									})
								}
							},
							ht = function(e) {
								if (e) {
									var t, n = null === e || void 0 === e || null === (t = e.userExamSessionVo) || void 0 === t ? void 0 : t.status;
									me(n)
								} else le(!0);
								(0, I.XN)({
									eventName: "edu_Platform_exercise_page",
									params: {
										channel_code: (0, P.getPageChannelCode)(),
										column_code: T,
										training_id: C["default"].library.trainingId,
										course_id: a,
										answer_type: (0, ae.dz)(de),
										exercise_type: "在线练习"
									}
								}), G(!1)
							},
							yt = function() {
								var e;
								(0, I._A)({
									eventName: "edu_Platform_exercise_click",
									params: {
										channel_code: (0, P.getPageChannelCode)(),
										column_code: T,
										training_id: C["default"].library.trainingId,
										course_id: a,
										answer_type: (0, ae.dz)(de),
										exercise_type: "在线练习"
									}
								}), 2 !== (null === (e = L.state) || void 0 === e ? void 0 : e[o.resource_id]) && s(1, 0)
							},
							xt = function() {
								(0, I._A)({
									eventName: "edu_Platform_exercise_quit_click",
									params: {
										channel_code: (0, P.getPageChannelCode)(),
										column_code: T,
										training_id: C["default"].library.trainingId,
										course_id: a,
										answer_type: (0, ae.dz)(de),
										exercise_type: "在线练习"
									}
								})
							};
						return l.createElement(h.Z, {
							loading: Q,
							loadingProps: {
								delay: 0,
								withChildren: !0
							},
							empty: ce,
							emptyProps: {
								tip: "哎呀，练习不见了~"
							}
						}, l.createElement($(), {
							ref: function(e) {
								return L.setPlayRef(e)
							},
							onlineExamId: o.online_exam_id,
							uc: Z.uc,
							userId: Ue,
							env: C["default"].env || "ncet-xedu",
							passed: 2 === (null === (ft = L.state) || void 0 === ft ? void 0 : ft[o.resource_id]),
							passModel: null === (pt = o.ext_info) || void 0 === pt ? void 0 : pt.pass_model,
							passValue: null === (_t = o.ext_info) || void 0 === _t ? void 0 : _t.pass_value,
							sdpAppParams: {
								"sdp-app-id": C["default"].app.appid
							},
							onInited: ht,
							onSubmited: gt,
							onStartAnswer: yt,
							onExit: xt,
							questionProps: {
								watermark: {
									userInfo: pe
								}
							}
						}))
					}
					return l.createElement(ie.Z, {
						tip: "哎呀，资源不存在",
						hideBack: !0,
						className: fe["list-empty"]
					})
				})),
				at = n(76109),
				ot = n(58533),
				ct = n(81659),
				lt = {
					"course-catalog": "index-module_course-catalog_ro+eA",
					endMessage: "index-module_endMessage_iYxWE",
					resources: "index-module_resources_OrOyy",
					progress0: "index-module_progress0_Gvic2",
					progress1: "index-module_progress1_f+uHp",
					progress2: "index-module_progress2_3umF4",
					"course-catalog2": "index-module_course-catalog2_9zMd3"
				},
				ut = n(9314);

			function st() {
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

			function dt(e) {
				var t = e.onBeforeChangeCatalog,
					n = void 0 === t ? (0, k.Z)(regeneratorRuntime.mark((function e() {
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
					i = e.initResourceId,
					a = e.progress,
					o = e.libraryId,
					c = e.needActiveEffect,
					u = void 0 === c || c,
					s = e.teachProps,
					d = (0, P.getUrlQuery)(),
					m = d.courseId,
					f = void 0 === m ? "" : m,
					p = (0, l.useState)(""),
					_ = (0, E.Z)(p, 2),
					g = _[0],
					h = _[1],
					y = (0, l.useState)([]),
					b = (0, E.Z)(y, 2),
					w = b[0],
					Z = b[1],
					I = (0, l.useState)(!0),
					S = (0, E.Z)(I, 2),
					N = S[0],
					R = S[1],
					O = (0, l.useState)(0),
					T = (0, E.Z)(O, 2),
					L = T[0],
					j = T[1],
					M = function() {
						var e = (0, k.Z)(regeneratorRuntime.mark((function e() {
							var t, n, r, i, a, o;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return t = 100, e.next = 3, (0, W.ZA)(f, {
											limit: t
										});
									case 3:
										if (n = e.sent, !(n.total > t)) {
											e.next = 15;
											break
										}
										for (r = [], i = t; i < n.total; i += t) r.push(i);
										return e.next = 9, Promise.all(r.map(function() {
											var e = (0, k.Z)(regeneratorRuntime.mark((function e(n, r) {
												var i;
												return regeneratorRuntime.wrap((function(e) {
													while (1) switch (e.prev = e.next) {
														case 0:
															return e.next = 2, (0, W.ZA)(f, {
																offset: (r + 1) * t,
																limit: t
															});
														case 2:
															return i = e.sent, e.abrupt("return", i);
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
										return a = e.sent, o = (0, at.Z)(n.items), a.forEach((function(e) {
											o = [].concat((0, at.Z)(o), (0, at.Z)(e.items))
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
					D = function() {
						var e = (0, k.Z)(regeneratorRuntime.mark((function e() {
							var t;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, M();
									case 2:
										t = e.sent, Z(t), j(t.length), R(!1);
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
					A = function() {
						var e = (0, k.Z)(regeneratorRuntime.mark((function e(t, i) {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (t.work_id !== g.work_id) {
											e.next = 2;
											break
										}
										return e.abrupt("return");
									case 2:
										return e.next = 4, (0, oe.N_)({
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
										u && h(t), r && r(t, i);
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
					D()
				}), []), (0, l.useEffect)((function() {
					if (w.length > 0) {
						var e = (0, v.find)(w, {
							work_id: i
						}) || w[0];
						A(e)
					}
				}), [w]);
				var U = function(e) {
						var t;
						if (o === C["default"].library.trainingId && a) switch (String(null === (t = a[e]) || void 0 === t ? void 0 : t.status)) {
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
							className: "resource-item ".concat(o === C["default"].library.trainingId && "resource-item-train", " ")
								.concat(e.work_id === g.work_id ? "resource-item-active" : ""),
							onClick: function() {
								A(e, !0)
							}
						}, l.createElement("div", null, l.createElement("img", {
							src: ut
						}), e.title), l.createElement("div", {
							style: {
								display: "flex",
								alignItems: "center"
							}
						}, l.createElement("div", {
							className: "status-icon"
						}, e.work_id === g.work_id && st(), U(e.work_id)), s && l.createElement(ct.Z, (0, x.Z)({
							activity: e
						}, s))))
					},
					z = function() {
						return w.map((function(e) {
							return l.createElement("div", {
								key: e.work_id,
								className: lt.resources
							}, F(e))
						}))
					};
				return l.createElement("div", {
					className: lt["course-catalog"],
					id: "work-catelog"
				}, l.createElement(ot.Z, {
					dataLength: w.length,
					next: (0, k.Z)(regeneratorRuntime.mark((function e() {
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									D(w.length);
								case 1:
								case "end":
									return e.stop()
							}
						}), e)
					}))),
					hasMore: w.length < L,
					loader: N ? l.createElement(se.Z, {
						type: "loading",
						style: {
							padding: "20px"
						}
					}) : null,
					scrollableTarget: "work-catelog"
				}, z()))
			}
			n(11254);
			var mt = n(10677),
				vt = (n(79793), n(21523)),
				ft = n(82300),
				pt = n(50100),
				_t = n(73006),
				gt = n.n(_t),
				ht = n(10497),
				yt = C["default"].env,
				xt = "mywork_".concat(yt),
				bt = function() {
					function e() {
						(0, ft.Z)(this, e), this.enable = !0, this.idb = new ht.Z, this.lock = new(gt()), this.initSchema = this._withCo(this._initSchema), this.get = this._withCo(this._get), this.put = this._withCo(this._put), this.removeByKey = this._withCo(this._removeByKey)
					}
					return (0, pt.Z)(e, [{
						key: "_initSchema",
						value: function() {
							var e = (0, k.Z)(regeneratorRuntime.mark((function e(t) {
								var n, r;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, this.idb.checkDB(xt, (function(e) {
												var i = e.version,
													a = (0, at.Z)(e.objectStoreNames);
												r = -1 === a.indexOf(t), n = r ? i + 1 : i
											}));
										case 2:
											return e.next = 4, this.idb.openDB(xt, n, [{
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
							var e = (0, k.Z)(regeneratorRuntime.mark((function e() {
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
							var e = (0, k.Z)(regeneratorRuntime.mark((function e() {
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
							return (0, k.Z)(regeneratorRuntime.mark((function e() {
								var r, i, a = arguments;
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
											return r = e.sent, e.prev = 5, e.next = 8, n.apply(void 0, a);
										case 8:
											i = e.sent, t.lock.release(r), e.next = 16;
											break;
										case 12:
											e.prev = 12, e.t0 = e["catch"](5), t.lock.release(r), t.errorHandle(e.t0);
										case 16:
											return e.abrupt("return", i);
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
				wt = "all",
				kt = function() {
					function e() {
						(0, ft.Z)(this, e), this.isHang = !1, this.storage = new bt, this.init()
					}
					return (0, pt.Z)(e, [{
						key: "init",
						value: function() {
							var e = (0, k.Z)(regeneratorRuntime.mark((function e() {
								var t;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, (0, Z.bG)();
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
							var t = e || wt;
							this.storage.removeByKey(this.tableName, t), t !== wt && this.storage.removeByKey(this.tableName, wt)
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
							var e = (0, k.Z)(regeneratorRuntime.mark((function e(t) {
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
							var e = (0, k.Z)(regeneratorRuntime.mark((function e(t, n) {
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
				Et = new kt,
				Ct = n(80584),
				Zt = (n(5322), n(91616)),
				It = (n(37691), n(54589)),
				St = (n(2918), n(39772), n(42260)),
				Pt = n(52838),
				Nt = n.n(Pt),
				Rt = n(70054),
				Ot = ["expire_at"];

			function Tt(e, t) {
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

			function Lt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Tt(Object(n), !0)
						.forEach((function(t) {
							(0, ee.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tt(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			var jt = C["default"].cs,
				Mt = function() {
					function e() {
						(0, ft.Z)(this, e), this.client = null, this.init()
					}
					return (0, pt.Z)(e, [{
						key: "init",
						value: function() {
							var e = this;
							return Nt()({
									serviceName: C["default"].api.serviceName["x-course"],
									getToken: this.getToken,
									host: jt.host.substring(2),
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
								i = t.path,
								a = t.tokenType;
							return (0, Rt.nV)({
									token_type: a,
									path: "".concat(i, "/")
										.concat(n),
									params: r
								})
								.then((function(e) {
									var t = e.expire_at,
										n = (0, ne.Z)(e, Ot);
									return Lt(Lt({}, n), {}, {
										expireAt: t
									})
								}))
						}
					}]), e
				}(),
				Dt = new Mt,
				At = n(37471);

			function Ut(e, t) {
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

			function Ft(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Ut(Object(n), !0)
						.forEach((function(t) {
							(0, ee.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ut(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			var zt = {
					image: "image/*",
					video: ".mp4"
				},
				Ht = "".concat(Ct.qr, ",")
				.concat(Ct.TD, ",")
				.concat(Ct.hY),
				qt = function(e) {
					var t = {
							originType: e.type,
							bigtype: "",
							filetype: "",
							contentType: ""
						},
						n = e.name.toLowerCase();
					return Ct.qr.split(",")
						.some((function(e) {
							return n.endsWith(e)
						})) ? (t.filetype = "video", t.bigtype = "video", t.contentType = "x_audio_video") : Ct.TD.split(",")
						.some((function(e) {
							return n.endsWith(e)
						})) ? (t.filetype = "document", t.bigtype = "document", t.contentType = "x_document") : Ct.hY.split(",")
						.some((function(e) {
							return n.endsWith(e)
						})) ? (t.filetype = "image", t.bigtype = "image", t.contentType = "x_image_list") : (t.filetype = "", t.bigtype = "", t.contentType = ""), t
				},
				Bt = (0, l.forwardRef)((function(e, t) {
					var n = e.maxCount,
						i = e.multiple,
						a = void 0 === i || i,
						o = e.accept,
						c = void 0 === o ? "" : o,
						u = e.onUploadSuccess,
						s = void 0 === u ? function() {} : u,
						d = e.onUploadFail,
						m = void 0 === d ? function() {} : d,
						f = e.showUploadList,
						p = void 0 === f || f,
						_ = e.libraryId,
						g = (0, l.useRef)([]),
						h = (0, l.useState)([]),
						y = (0, E.Z)(h, 2),
						x = y[0],
						b = y[1],
						w = (0, l.useState)({}),
						Z = (0, E.Z)(w, 2),
						I = Z[0],
						S = Z[1],
						P = 10,
						N = function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
							g.current = e.map((function(e) {
								return e
							})), b(g.current)
						},
						R = function() {
							return g.current.filter((function(e) {
									return "success" === e.status
								}))
								.map((function(e) {
									var t = e.dentry;
									return t
								}))
						},
						O = function(e) {
							var t = e.fileType,
								n = e.fileName,
								r = e.dentryUrl,
								i = e.screenshot,
								a = e.dentry_id,
								o = {};
							if ((i || I[a]) && (o.screenshot = I[a] || i), t) return o.type = t, o;
							var c = n.split("."),
								l = c[c.length - 1];
							return ["jpg", "jpeg", "png"].some((function(e) {
								return e === l
							})) ? (o.type = "image", o.screenshot = r) : ["mp4"].some((function(e) {
								return e === l
							})) ? o.type = "video" : o.type = "file", o
						},
						T = function() {
							return R()
								.map((function(e) {
									return Ft({
										path: e.dentryUrl,
										name: e.fileName,
										dentry_id: e.dentry_id,
										cover_image_dentry_id: "",
										extend_info: {}
									}, O(e))
								}))
						},
						L = function() {
							var e = g.current.filter((function(e) {
								return "error" !== e.status
							}));
							return e.map((function(e) {
								var t = e.dentry;
								return "success" === e.status ? Ft(Ft({}, (0, v.pick)(e, ["uid", "status", "percent", "emitter"])), {}, {
									path: null === t || void 0 === t ? void 0 : t.dentryUrl,
									name: null === t || void 0 === t ? void 0 : t.fileName,
									dentry_id: null === t || void 0 === t ? void 0 : t.dentry_id
								}, O(t)) : e
							}))
						},
						j = function() {
							return g.current.some((function(e) {
								return "error" === e.status
							}))
						},
						M = function() {
							return !g.current.some((function(e) {
								return "success" !== e.status && "error" !== e.status
							}))
						},
						D = function(e) {
							var t = (0, at.Z)(g.current),
								n = t.findIndex((function(t) {
									return e.uid === t.uid
								})); - 1 !== n && (t[n] = Ft({}, e), g.current = t, b(g.current))
						},
						A = function(e, t) {
							var n, r = "https:".concat((0, St.xC)("cdnHot"))
								.concat(null === t || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.path),
								i = Ft(Ft({}, t.data), {}, {
									dentryUrl: r,
									fileName: e.name
								});
							D(Ft(Ft({}, e), {}, {
								dentry: i,
								status: "success",
								emitter: void 0
							})), s(i)
						},
						U = function(e, t) {
							var n = (0, v.get)(t, "data");
							n || (n = (0, v.get)(t, "responseJSON")), D(Ft(Ft({}, e), {}, {
								error: n,
								status: "error",
								emitter: void 0
							})), m(n)
						},
						F = function(e, t) {
							var n = t.loaded;
							D(Ft(Ft({}, e), {}, {
								percent: n * (P / 100)
							}))
						},
						z = function(e, t) {
							var n = t.loaded;
							D(Ft(Ft({}, e), {}, {
								percent: P + n * ((100 - P) / 100)
							}))
						},
						H = function() {
							var e = (0, k.Z)(regeneratorRuntime.mark((function e(t, n) {
								var r;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, Dt.client.upload(t.originFileObj, {
												name: t.name,
												scope: 1,
												infoJson: JSON.stringify({
													identify_param: {
														strategy: "strategy_before_origin_illegal_replace",
														sensitive_word_lib: C["default"].app.appid
													}
												})
											});
										case 2:
											r = e.sent, r.on("success", (function(e) {
												A(t, e, n)
											})), r.on("error", (function(e) {
												U(t, e, n)
											})), r.on("md5Progress", (function(e) {
												F(t, e)
											})), r.on("progress", (function(e) {
												z(t, e)
											})), r.emit("start"), D(Ft(Ft({}, t), {}, {
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
							return ".mp4" === zt[c] && "video/mp4" !== e.type ? (r.ZP.warn("不支持 ".concat(t.split(".")
								.slice(-1)[0], " 类型，请上传mp4文件")), !1) : (e.extend = qt(e), -1 === ["video", "document", "image"].indexOf(e.extend.bigtype) ? (r.ZP.warn("不支持 ".concat(t.split(".")
								.slice(-1)[0], " 类型，请换个文件")), !1) : !(0 === e.type.indexOf("video/") && e.size > 3221225472) || (r.ZP.warn({
								content: "不能发送超过3G的视频",
								key: "不能发送超过3G的视频"
							}), !1))
						},
						B = function(e) {
							var t = e.filter((function(e) {
								var t = !g.current.some((function(t) {
									var n = t.uid;
									return n === e.uid
								}));
								return t && q(e)
							}));
							t.length && (g.current = g.current.concat(t), b(g.current), t.forEach((function(e) {
								H(e)
							})))
						};
					(0, l.useImperativeHandle)(t, (function() {
						return {
							hasUploaded: M,
							hasUploadFailFiles: j,
							getDentrys: R,
							setDentrys: N,
							getAttachmentList: T
						}
					}), [I]);
					var W = function(e) {
							B((0, at.Z)(e.fileList))
						},
						X = function(e) {
							var t;
							g.current = g.current.filter((function(t) {
								return t.uid !== e.uid
							})), null === (t = e.emitter) || void 0 === t || t.emit("pause"), b(g.current)
						},
						V = function() {
							return !1
						},
						J = L(),
						Q = function(e, t) {
							var n = e.url;
							S(Ft(Ft({}, I), {}, (0, ee.Z)({}, t.dentry_id, n)))
						};
					return l.createElement(l.Fragment, null, l.createElement(It.Z.Dragger, {
						name: "file",
						maxCount: n,
						fileList: x,
						onChange: W,
						onRemove: X,
						beforeUpload: V,
						multiple: a,
						accept: c ? zt[c] : Ht,
						showUploadList: p
					}, e.children, n && x.length >= n && l.createElement("span", {
						className: At.Z.errorTip
					}, "（最多可添加", n, "个附件）")), l.createElement("div", {
						className: At.Z["attachments-list"]
					}, !p && J && !!J.length && l.createElement(G.Z, {
						edit: !0,
						libraryId: _,
						showTitle: !1,
						values: J,
						onDelete: X,
						onUpdateCover: Q
					})))
				})),
				Wt = Bt,
				Xt = {
					editor: "index-module_editor_Mbmgi",
					"is-full-screen": "index-module_is-full-screen_Cmf02"
				},
				Vt = n(48670);

			function Jt(e) {
				var t = e.libraryId,
					n = void 0 === t ? "0" : t,
					i = e.onUploadSuccess,
					a = void 0 === i ? function() {} : i,
					o = (0, l.useState)(),
					c = (0, E.Z)(o, 2),
					u = c[0],
					s = c[1],
					d = (0, l.useState)(),
					m = (0, E.Z)(d, 2),
					v = (m[0], m[1]);
				(0, l.useEffect)((function() {
					v(n)
				}), [n]);
				var f = function() {
						return (0, Rt.nV)()
							.then((function(e) {
								var t = e.payload ? e.payload : e;
								return s(null === t || void 0 === t ? void 0 : t.path), Promise.resolve(e)
							}))
							.catch((function(e) {
								return r.ZP.error("封面上传失败"), Promise.reject(e)
							}))
					},
					p = function() {
						var e = function() {
								return f()
									.then((function(e) {
										var t = e.token,
											n = e.policy,
											r = e.date_time;
										return "".concat(C["default"].api["cs-server"], "/v0.1/upload?token=")
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
								"done" === e.file.status ? (e.url = "https:".concat((0, St.xC)("cdnHot"))
									.concat(null === (t = e.file) || void 0 === t || null === (n = t.response) || void 0 === n ? void 0 : n.path), a(e), r.ZP.success("封面上传成功")) : "error" === e.file.status && r.ZP.error("封面上传失败")
							}
						}
					};
				return l.createElement(It.Z, (0, x.Z)({
					className: At.Z["resource-cover-uploader"]
				}, p()), e.children)
			}
			var Qt = Jt,
				Gt = {
					"upload-cover": "index-module_upload-cover_3IW7A",
					"upload-cover__oper": "index-module_upload-cover__oper_+BeE4",
					tip: "index-module_tip_U9XyD"
				},
				Kt = (0, l.forwardRef)((function(e, t) {
					var r = (0, l.useState)(!1),
						i = (0, E.Z)(r, 2),
						a = i[0],
						o = i[1],
						c = (0, l.useState)(""),
						u = (0, E.Z)(c, 2),
						s = u[0],
						d = u[1],
						m = (0, l.useState)(),
						v = (0, E.Z)(m, 2),
						f = v[0],
						p = v[1];
					(0, l.useImperativeHandle)(t, (function() {
						return {
							open: function(e) {
								d(null === e || void 0 === e ? void 0 : e.poster), p(e), o(!0)
							}
						}
					}), []);
					var _ = function() {
							o(!1), e.onClose && e.onClose()
						},
						g = function() {
							null !== f && void 0 !== f && f.element && (f.element.dataset.poster = s), _()
						},
						h = function(e) {
							var t = e.url;
							d(t)
						};
					return l.createElement(te.Z, {
						className: "reset-theme",
						width: 450,
						title: "修改封面",
						okText: "确认",
						visible: a,
						onCancel: _,
						onOk: g
					}, l.createElement("div", {
						className: Gt["upload-cover"]
					}, l.createElement("img", {
						src: (0, Vt.Z)(s),
						onError: function(e) {
							e.target.src = n(81451)
						}
					}), l.createElement("div", {
						className: Gt["upload-cover__oper"]
					}, l.createElement(Qt, {
						libraryId: e.libraryId,
						onUploadSuccess: h
					}, l.createElement(de.Z, {
						type: "primary"
					}, "上传封面")), l.createElement("div", {
						className: Gt.tip
					}, "建议上传封面大小n*n"))))
				})),
				Yt = Kt,
				$t = window.MICRO_STUDIO || "https://teacher-studio.ykt.eduyun.cn";
			("web-bd.ykt.eduyun.cn" === window.location.host || "xue-test.ykt.eduyun.cn" === window.location.host || window.location.host.indexOf("localhost") > -1) && ($t = window.MICRO_STUDIO || "https://teacher-studio-test.ykt.eduyun.cn");
			var en = function(e, t) {
					var n = e.dentryUrl,
						r = e.fileName,
						i = 900;
					if (n) {
						var a = new Image;
						a.onload = function() {
							var e = {
								src: this.src,
								alt: r
							};
							this.width > i ? (e.width = i, e.height = parseInt(this.height * i / this.width, 10)) : (e.width = this.width, e.height = this.height), t(e)
						}, a.src = n
					}
				},
				tn = function(e, t) {
					var n = e.dentryUrl;
					n && t({
						url: n,
						width: 420,
						height: 280
					})
				},
				nn = (0, l.forwardRef)((function(e, t) {
					var n = (0, l.useRef)(),
						i = (0, l.useRef)(),
						a = (0, l.useRef)(),
						o = e.maxLength,
						c = e.value,
						u = e.initialContent,
						s = e.autoClearinitialContent,
						d = (0, l.useState)(!1),
						v = (0, E.Z)(d, 2),
						f = v[0],
						p = v[1],
						_ = (0, l.useState)("image"),
						g = (0, E.Z)(_, 2),
						h = g[0],
						y = g[1],
						x = (0, l.useState)(!1),
						b = (0, E.Z)(x, 2),
						w = b[0],
						k = b[1];
					(0, l.useEffect)((function() {
						return function() {
							var e;
							null !== (e = n.current) && void 0 !== e && e.destory && n.current.destory()
						}
					}), [n.current]);
					var C = {
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
						Z = function(e, t, n) {
							t.registerUI("upload-image", (function(e, n) {
								var r = new t.ui.Button({
									name: "upload-image",
									title: "上传图片",
									onclick: function() {
										var e;
										null === i || void 0 === i || null === (e = i.current) || void 0 === e || e.setDentrys(), p(!0), y("image")
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
										e.fullscreen = !e.fullscreen, k(e.fullscreen)
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
							for (var r = !1, i = t.querySelectorAll(".edui-faked-video-container"), a = 0; a < i.length; a++) i[a].querySelector(".edui-faked-video") || (i[a].remove(), r = !0);
							return r && n.current.setContent(t.innerHTML), t.innerHTML
						},
						S = c,
						P = function(t) {
							n.current = t, t.addListener("contentchange", (function() {
								var n = t.getContent();
								if (t.getContentLength(!0) > t.options.maximumWords) {
									r.ZP.error("已达到最大限制1w字符"), t.setContent(S);
									var i = t.selection.getRange();
									i.startOffset = i.endOffset, i.select(), t.focus()
								} else n.includes("edui-faked-video-container") && (n = I(n)), S = n, e.onChange(n)
							})), t.addListener("afterscalehide", (function() {
								var e = t.selection.getRange();
								e.startOffset = e.endOffset, e.select(), t.focus()
							})), t.addListener("click", (function(e, n) {
								var r;
								("edui-faked-video" === n.target.className && t.focus(!0), "edui-faked-video__update-cover" === n.target.className) && (null === a || void 0 === a || null === (r = a.current) || void 0 === r || r.open({
									element: n.target,
									poster: n.target.dataset.poster
								}))
							})), e.onReady(t)
						},
						N = function() {
							var e, t = (null === (e = n.current) || void 0 === e ? void 0 : e.getContentLength(!0)) || 0;
							return t
						},
						R = function() {
							var e, t = null === i || void 0 === i || null === (e = i.current) || void 0 === e ? void 0 : e.hasUploaded();
							t ? p(!1) : r.ZP.warning("".concat("image" === h ? "图片" : "视频", "正在上传"))
						},
						O = function(e) {
							"image" === h ? en(e, (function(e) {
								n.current.execCommand("insertimage", [e]), R()
							})) : tn(e, (function(e) {
								var t = '<img width="'.concat(e.width, '" height="')
									.concat(e.height, '" _url="')
									.concat(e.url, '" class="edui-faked-video" src="')
									.concat($t, '/fish/editor/themes/default/images/spacer.gif" style="background:url(')
									.concat($t, '/fish/editor/themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;background-size: cover;"></img>'),
									r = '<span contenteditable="false" class="edui-faked-video__update-cover" style="margin-left: -80px;vertical-align: 12px;padding-right: 24px;cursor: pointer;color: #fff;font-size: 14px;cursor: pointer;">修改封面</span>',
									i = '<span contenteditable="false" class="edui-faked-video-container">'.concat(t)
									.concat(r, "</span>");
								n.current.focus(), n.current.execCommand("inserthtml", i), R()
							}))
						},
						T = function() {
							r.ZP.error("上传失败"), R()
						};
					(0, l.useImperativeHandle)(t, (function() {
						return {
							getContentLength: N
						}
					}), []);
					var L = function() {
						e.onChange(n.current.getContent()), n.current.focus(!0)
					};
					return l.createElement(l.Fragment, null, l.createElement(Zt.Z, {
						value: c,
						className: m()(Xt.editor, (0, ee.Z)({}, Xt["is-full-screen"], w)),
						editorConfig: C,
						onBeforeReady: Z,
						onReady: P
					}), l.createElement(te.Z, {
						title: "image" === h ? "选择图片" : "选择视频",
						visible: f,
						onCancel: R,
						footer: null
					}, l.createElement("div", {
						className: Xt.uploader
					}, l.createElement(Wt, {
						ref: i,
						multiple: !1,
						accept: h,
						onUploadSuccess: O,
						onUploadFail: T
					}, l.createElement(se.Z, {
						type: "plus"
					})))), l.createElement(Yt, {
						ref: a,
						libraryId: e.workId,
						onClose: L
					}))
				})),
				rn = nn,
				an = n(51201);

			function on(e) {
				var t = e.visible,
					n = e.courseId,
					i = e.workId,
					a = e.isAdd,
					o = void 0 === a || a,
					c = e.scopeName,
					u = void 0 === c ? "作答" : c,
					s = e.onOk,
					d = e.onCancel,
					m = vt.Z.useForm(),
					v = (0, E.Z)(m, 1),
					f = v[0],
					p = (0, l.useRef)(),
					_ = (0, l.useState)(!1),
					g = (0, E.Z)(_, 2),
					h = g[0],
					y = g[1],
					x = (0, l.useState)(),
					b = (0, E.Z)(x, 2),
					w = b[0],
					C = b[1],
					Z = (0, l.useState)(""),
					I = (0, E.Z)(Z, 2),
					S = I[0],
					P = I[1],
					N = (0, l.useState)([]),
					R = (0, E.Z)(N, 2),
					O = R[0],
					T = R[1],
					L = (0, l.useState)([]),
					j = (0, E.Z)(L, 2),
					M = j[0],
					D = j[1];
				(0, l.useEffect)((function() {
					(0, J.Jj)()
					.onbeforeunload = t ? function(e) {
						e.preventDefault(), e.returnValue = ""
					} : null
				}), [t]);
				var A = function() {
						var e = f.getFieldsValue();
						P(), null !== e && void 0 !== e && e.title || (null === S || void 0 === S ? void 0 : S.length) > 0 || (null === O || void 0 === O ? void 0 : O.length) > 0 ? te.Z.confirm({
							title: "提示",
							content: "保留本次编辑的内容？",
							onOk: function() {
								var t = (0, k.Z)(regeneratorRuntime.mark((function t() {
									return regeneratorRuntime.wrap((function(t) {
										while (1) switch (t.prev = t.next) {
											case 0:
												Et.setWorkResult(i, {
													course_id: n,
													title: e.title,
													content: S,
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
						var e = (0, k.Z)(regeneratorRuntime.mark((function e(t) {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										te.Z.confirm({
											title: "确认提交",
											content: "作答内容提交后，无法修改，请确认是否提交",
											onOk: function() {
												var e = (0, k.Z)(regeneratorRuntime.mark((function e() {
													return regeneratorRuntime.wrap((function(e) {
														while (1) switch (e.prev = e.next) {
															case 0:
																return y(!0), e.next = 3, (0, W.jq)(i, {
																	course_id: n,
																	title: t.title,
																	content: S,
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

												function a() {
													return e.apply(this, arguments)
												}
												return a
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
					F = function(e) {
						Et.getWorkResult(i)
							.then((function(t) {
								P((null === t || void 0 === t ? void 0 : t.content) || ""), D((null === t || void 0 === t ? void 0 : t.attachments) || []), C((null === t || void 0 === t ? void 0 : t.title) || ""), e.setContent((null === t || void 0 === t ? void 0 : t.content) || ""), f.setFieldsValue({
									title: (null === t || void 0 === t ? void 0 : t.title) || ""
								})
							}))
					},
					z = function() {
						return l.createElement(vt.Z, {
							form: f,
							layout: "vertical",
							onFinish: U,
							autoComplete: "off",
							initialValues: {
								title: w,
								content: S,
								attachments: O
							}
						}, l.createElement(vt.Z.Item, {
							name: "title",
							label: "标题",
							rules: [{
								required: !0,
								message: "请输入标题"
							}, {
								whitespace: !0,
								message: "不能全为空格"
							}]
						}, l.createElement(mt.Z, {
							placeholder: "标题",
							maxLength: 30,
							lengthRule: function(e) {
								return (0, Ct.x)(e, 30)
							}
						})), l.createElement(vt.Z.Item, {
							name: "content",
							label: "作答内容",
							rules: [{
								required: !0,
								message: "请输入作答内容"
							}, {
								whitespace: !0,
								message: "不能全为空格"
							}]
						}, i && l.createElement(rn, {
							ref: p,
							workId: i,
							maxLength: 1e4,
							value: S,
							initialContent: o ? "请输入".concat(u, "内容") : "",
							autoClearinitialContent: o,
							onReady: F,
							onChange: P
						})), l.createElement(vt.Z.Item, null, l.createElement(G.Z, {
							edit: !0,
							showTitle: !1,
							values: M,
							onChange: function(e) {
								T(e)
							},
							onUploadSuccess: function() {
								y(!1)
							},
							onUploadLoading: function() {
								y(!0)
							}
						})), l.createElement(vt.Z.Item, null, l.createElement("div", {
							className: an.Z.btns
						}, l.createElement(de.Z, {
							htmlType: "button",
							onClick: A,
							className: an.Z.cancelBtn
						}, "取消"), l.createElement(de.Z, {
							loading: h,
							type: "primary",
							htmlType: "submit",
							className: an.Z.submitBtn,
							style: {
								marginRight: 8
							}
						}, "提交"))))
					};
				return l.createElement("div", null, l.createElement(te.Z, {
					destroyOnClose: !0,
					visible: t,
					title: "提交作业",
					onOk: U,
					onCancel: A,
					footer: null,
					wrapClassName: an.Z.modal,
					width: 820,
					height: 620
				}, z()))
			}
			n(76965);
			var cn = n(81109),
				ln = n(27484),
				un = n.n(ln),
				sn = n(9927),
				dn = n(88061);

			function mn(e) {
				var t = e.courseId,
					n = e.workId,
					r = e.workQuery,
					i = (0, P.getUrlQuery)(),
					a = i["x-edu-theme"],
					o = (0, l.useState)([]),
					c = (0, E.Z)(o, 2),
					s = c[0],
					d = c[1],
					m = (0, l.useState)(0),
					v = (0, E.Z)(m, 2),
					f = v[0],
					p = v[1],
					_ = (0, l.useState)(1),
					g = (0, E.Z)(_, 2),
					h = g[0],
					y = g[1],
					x = (0, u.k6)(),
					b = 10;
				(0, l.useEffect)((function() {
					n && (0, W.sY)(t, n, {
							limit: b,
							offset: (h - 1) * b
						})
						.then((function(e) {
							p(e.total), d(e.items)
						}))
				}), [n, h]);
				var w = function(e) {
					var i = e.title,
						o = e.name,
						c = e.submit_time,
						u = e.user_id,
						s = e.work_result_id;
					return l.createElement("div", {
						className: an.Z.item,
						onClick: function() {
							var e = "".concat((0, dn.Zq)(), "/courseDetail/work?courseId=")
								.concat(t, "&workId=")
								.concat(n, "&workResultId=")
								.concat(s, "&")
								.concat(r)
								.concat(a ? "&x-edu-theme=".concat(a) : "");
							x.push(e)
						}
					}, l.createElement("div", {
						className: an.Z.item_title
					}, i), l.createElement("div", {
						className: an.Z.item_detail
					}, l.createElement(sn.Z, {
						src: (0, Z.Kw)(u)
					}), l.createElement("span", {
						className: an.Z.name
					}, o), l.createElement("span", {
							className: an.Z.time
						}, un()(c)
						.format("YYYY/MM/DD"))))
				};
				return (null === s || void 0 === s ? void 0 : s.length) > 0 ? l.createElement("div", {
					className: an.Z.work_result_list
				}, l.createElement("div", {
					className: an.Z.title
				}, "优秀作业推荐"), s.map((function(e) {
					return w(e)
				})), Math.ceil(f / b) > 1 && l.createElement(cn.Z, {
					total: f,
					pageSize: b,
					current: h,
					showQuickJumper: !0,
					showTotal: function(e) {
						return "总共 ".concat(Math.ceil(e / b), " 页")
					},
					onChange: function(e) {
						y(e)
					},
					className: an.Z.pagination
				})) : l.createElement(l.Fragment, null)
			}
			var vn = mn,
				fn = (n(81132), n(57535)),
				pn = {
					"course-detail": "index-module_course-detail_bL7S7",
					"detail-top": "index-module_detail-top_OVeDo",
					title: "index-module_title_b9nPw",
					name: "index-module_name_A1bKn",
					work_result: "index-module_work_result_LqHRt",
					extends: "index-module_extends_SpNKk",
					source: "index-module_source_JBWIu",
					learned: "index-module_learned_oDo4W",
					actions: "index-module_actions_SRWzI",
					"detail-main": "index-module_detail-main_8Msgy",
					"detail-main-content": "index-module_detail-main-content_Yr-Qr",
					"detail-main-l": "index-module_detail-main-l_0fEZ-",
					"work-wrapper": "index-module_work-wrapper_wZbym",
					"video-wrapper": "index-module_video-wrapper_r6ONu",
					"detail-main-drawer-box": "index-module_detail-main-drawer-box_bWU4o",
					"detail-main-l-work": "index-module_detail-main-l-work_QgVYD",
					"detail-main-r": "index-module_detail-main-r_CLkZZ",
					"sub-title": "index-module_sub-title_Oawjz",
					"catalog-wrapper": "index-module_catalog-wrapper_X52ZR",
					"catalog-title": "index-module_catalog-title_hdItN",
					"theme-dark": "index-module_theme-dark_89oZp",
					"detail-bottom": "index-module_detail-bottom_GoNXB",
					"related-recommend": "index-module_related-recommend_76kw1",
					"course-intro": "index-module_course-intro_ZxUDg",
					"extend-reading": "index-module_extend-reading_fV22e",
					info: "index-module_info_zjO6R",
					lecturer: "index-module_lecturer_1szL6",
					"intro-text": "index-module_intro-text_buwTy",
					lecturer_title: "index-module_lecturer_title_AMdVA",
					lecturer_name: "index-module_lecturer_name_B91Up",
					download: "index-module_download_ZT7Ah",
					"related-recommend-content": "index-module_related-recommend-content_pzUxy",
					"related-recommend-content__title": "index-module_related-recommend-content__title_Pdqio",
					"related-recommend-content__cover": "index-module_related-recommend-content__cover_Ncwmp",
					"related-recommend-content__info": "index-module_related-recommend-content__info_67kYX",
					"related-recommend-content__source": "index-module_related-recommend-content__source_1qrLR",
					"related-recommend-content__link": "index-module_related-recommend-content__link_yt9WB",
					"related-recommend-content__uv": "index-module_related-recommend-content__uv_cH+0e",
					"related-recommend-content__stat": "index-module_related-recommend-content__stat_Ibe-f",
					empty: "index-module_empty_5ofeS"
				};

			function _n(e) {
				var t = e.lecturer,
					r = e.intro;
				return t || r ? l.createElement("div", {
					className: pn["course-intro"]
				}, l.createElement("div", {
					className: pn.title
				}, "课程简介"), l.createElement(fn.Z, {
					className: "x-edu-divider"
				}), l.createElement("div", {
					className: pn.info
				}, t && l.createElement("div", {
					className: pn.lecturer
				}, l.createElement("img", {
					src: n(99569),
					style: {
						width: 24,
						height: 24,
						marginRight: 6
					}
				}), l.createElement("span", {
					className: pn.lecturer_title
				}, "授课教师"), l.createElement("span", {
					className: pn.lecturer_name
				}, t)), r && l.createElement("div", {
					className: pn["intro-text"],
					dangerouslySetInnerHTML: {
						__html: r
					}
				}))) : null
			}
			var gn = _n,
				hn = (n(268), C["default"].api);

			function yn(e) {
				var t = e.extendReadingData,
					n = e.onDownload;
				return 0 === t.length ? null : l.createElement("div", {
					className: pn["extend-reading"]
				}, l.createElement("div", {
					className: pn.title
				}, "延伸阅读"), l.createElement(fn.Z, null), l.createElement("ul", null, t.map((function(e, t) {
					var r = e.url;
					r.startsWith("http") || (r = "".concat(hn.cdn)
						.concat(hn["cdn-prefix"])
						.concat(r));
					var i = e.name.substring(0, e.name.lastIndexOf("."));
					return l.createElement("li", {
						key: e.name
					}, l.createElement("div", {
						className: pn.name,
						title: i
					}, i), l.createElement("div", {
						className: pn.download
					}, l.createElement(de.Z, {
						type: "primary",
						onClick: n,
						href: (0, P.urlWithTheme)(r)
					}, "下载")))
				}))))
			}
			var xn = yn,
				bn = n(89591),
				wn = n(67627),
				kn = n(92441),
				En = {
					live: "live-module_live_tXiMZ",
					container: "live-module_container_jjeGM",
					info: "live-module_info_FI4lF",
					player: "live-module_player_jQjR6",
					desc: "live-module_desc_nJz97"
				};

			function Cn(e, t) {
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

			function Zn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Cn(Object(n), !0)
						.forEach((function(t) {
							(0, ee.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cn(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}

			function In(e) {
				var t = e.liveId,
					n = e.trainId,
					r = e.courseId,
					i = e.resourceId,
					a = e.columnCode,
					o = e.channelCode,
					c = e.reportToTrain,
					u = (0, P.getUrlQuery)(),
					s = u["x-edu-theme"],
					d = ae.hX.Finish,
					m = (0, l.useContext)(w.Z),
					v = function() {
						var e = (0, Z.Zd)(),
							t = s ? "".concat(e)
							.concat(null !== e && void 0 !== e && e.includes("?") ? "&" : "?", "x-edu-theme=")
							.concat(s) : e;
						window.location.href = t
					},
					f = function(e) {
						console.log(e)
					},
					p = function(e) {
						console.log(e)
					},
					_ = function() {},
					g = function() {
						var e = (new Date)
							.getTime();
						c(d, e)
					},
					h = function(e) {
						var t = Zn(Zn({}, e.params), {}, {
							course_id: r,
							resource_id: i,
							training_id: n,
							column_code: a,
							channel_code: o
						});
						(0, I._A)(Zn(Zn({}, e), {}, {
							params: t
						}))
					},
					y = "preproduction" === C["default"].env ? kn.PublicLiveDetail : wn.PublicLiveDetail;
				return l.createElement("div", {
					className: En.live
				}, l.createElement(y, {
					key: t,
					className: En.live,
					containerClassName: En.container,
					infoClassName: En.info,
					playerClassName: En.player,
					descriptionClassName: En.desc,
					liveId: t,
					appId: C["default"].appId,
					uc: Z.uc,
					loginInfo: m,
					handleLogin: v,
					onOnlineCountChange: f,
					onStateChange: p,
					onReportProgress: _,
					onReportTeacherTrain: g,
					onSendSensors: h
				}))
			}
			var Sn = l.memo(In),
				Pn = n(30038),
				Nn = (0, Pn.oJ)("@/page/tchTraining/component/Card/img/default_cover.png"),
				Rn = function(e) {
					return e && e.startsWith("http")
				};

			function On(e) {
				var t = e.courseDetail,
					n = e.libraryId,
					r = (0, P.getUrlQuery)(),
					i = r["x-edu-theme"],
					a = (0, u.k6)(),
					o = (0, l.useState)([]),
					c = (0, E.Z)(o, 2),
					s = c[0],
					d = c[1];
				(0, l.useEffect)((function() {
					if (t && n) {
						var e = function() {
							var e = (0, k.Z)(regeneratorRuntime.mark((function e() {
								var r, i, a, o, c, l, u, s, m, v, f;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, (0, q.P6)(n);
										case 3:
											if (e.t0 = e.sent, e.t0) {
												e.next = 6;
												break
											}
											e.t0 = [];
										case 6:
											if (r = e.t0, i = [], a = [], o = t.context_id.split("auxo-train:")[1], o || n !== C["default"].library.trainingId || (o = C["default"].library.trainingId), !o) {
												e.next = 31;
												break
											}
											return e.next = 14, (0, H.ye)(o);
										case 14:
											c = e.sent, l = (null === c || void 0 === c ? void 0 : c.map((function(e) {
												return null === e || void 0 === e ? void 0 : e.course_id
											}))) || [], r = r.filter((function(e) {
												var t;
												return -1 !== l.indexOf(e.unit_id) && !(null !== (t = e.extra) && void 0 !== t && t.begin_time && un()(e.extra.begin_time) > un()())
											})), u = Math.min(8, r.length - 1), u <= 0 && console.log("库id".concat(n, "没有可推荐的内容")), s = regeneratorRuntime.mark((function e() {
												var n, a;
												return regeneratorRuntime.wrap((function(e) {
													while (1) switch (e.prev = e.next) {
														case 0:
															n = Math.floor(Math.random() * r.length), a = r[n], a.unit_id !== t.id && -1 === i.findIndex((function(e) {
																return e.unit_id === a.unit_id
															})) && i.push(a);
														case 3:
														case "end":
															return e.stop()
													}
												}), e)
											}));
										case 20:
											if (!(u > 0 && i.length < u)) {
												e.next = 24;
												break
											}
											return e.delegateYield(s(), "t1", 22);
										case 22:
											e.next = 20;
											break;
										case 24:
											if (!(i.length > 0)) {
												e.next = 29;
												break
											}
											return m = r.map((function(e) {
												var t = e.resource_id;
												return t
											})), e.next = 28, (0, B.nC)(m);
										case 28:
											a = e.sent;
										case 29:
											e.next = 40;
											break;
										case 31:
											return e.next = 33, (0, X.vr)(t.id, n);
										case 33:
											if (v = e.sent, i = (null === v || void 0 === v ? void 0 : v.items) || [], !(i.length > 0)) {
												e.next = 40;
												break
											}
											return f = i.map((function(e) {
												var t = e.resource_id;
												return t
											})), e.next = 39, (0, B.nC)(f);
										case 39:
											a = e.sent;
										case 40:
											a.forEach((function(e) {
												var t = i.find((function(t) {
													return t.resource_id === e.id
												}));
												t && (t.stat = {
													like: e.like_count,
													uv: e.total_uv
												})
											})), d(i), e.next = 47;
											break;
										case 44:
											e.prev = 44, e.t2 = e["catch"](0), console.error(e.t2);
										case 47:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 44]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}();
						e()
					}
				}), [t, n]);
				var m = (0, l.useCallback)((function(e) {
						var t;
						if (Rn(e.description)) window.open(i ? "".concat(e.description)
							.concat(e.description.includes("?") ? "&" : "?", "x-edu-theme=")
							.concat(i) : e.description);
						else if ("x_url" !== e.resource_type && "x_smarturl" !== e.resource_type || null === (t = e.extra) || void 0 === t || !t.url) {
							var r = (e.tags[e.tags.length - 1] || {})
								.title || "",
								o = (0, P.getUrlQuery)(),
								c = o.channelId,
								l = void 0 === c ? "" : c,
								u = o.breadcrumb,
								s = void 0 === u ? "" : u,
								d = "".concat((0, dn.Zq)(), "/courseDetail?courseId=")
								.concat(null === e || void 0 === e ? void 0 : e.resource_id, "&tag=")
								.concat(encodeURIComponent(r), "&channelId=")
								.concat(l, "&libraryId=")
								.concat((null === e || void 0 === e ? void 0 : e.library_id) || n, "&breadcrumb=")
								.concat(encodeURIComponent(s)),
								m = i ? "".concat(d)
								.concat(null !== d && void 0 !== d && d.includes("?") ? "&" : "?", "x-edu-theme=")
								.concat(i) : d;
							a.push(m)
						} else {
							var v;
							window.open(i ? "".concat(e.extra.url)
								.concat(null !== (v = e.extra.url) && void 0 !== v && v.includes("?") ? "&" : "?", "x-edu-theme=")
								.concat(i) : e.extra.url)
						}
					}), []),
					v = (0, l.useCallback)((function(e) {
						var t, n, r = e.item,
							i = e.onClick,
							a = void 0 === i ? function() {} : i;
						return l.createElement("div", {
							key: r.unit_id,
							onClick: function() {
								a(r)
							}
						}, l.createElement("div", {
							className: pn["related-recommend-content__cover"]
						}, l.createElement("img", {
							src: r.cover_url ? (0, Vt.Z)(r.cover_url, 240) : Nn
						})), l.createElement("div", {
							className: pn["related-recommend-content__info"]
						}, l.createElement("div", {
							className: pn["related-recommend-content__title"],
							title: r.title
						}, r.title), (null === r || void 0 === r || null === (t = r.extra) || void 0 === t ? void 0 : t.source) && l.createElement("div", {
							className: pn["related-recommend-content__source"]
						}, l.createElement("i", {
							className: "iconfont icon_hotel_fill"
						}), l.createElement("span", null, null === r || void 0 === r || null === (n = r.extra) || void 0 === n ? void 0 : n.source)), r.stat && !Rn(r.description) && "x_url" !== r.resource_type && "x_smarturl" !== r.resource_type && "train" !== r.resource_type && l.createElement("div", {
							className: pn["related-recommend-content__stat"]
						}, l.createElement("span", {
							className: pn["related-recommend-content__uv"]
						}, l.createElement("i", {
							className: "iconfont web_icon_guanzhu_fill"
						}), l.createElement("span", null, (0, g.HR)(r.stat.uv || 0))), l.createElement("span", {
							className: pn["related-recommend-content__link"]
						}, l.createElement("i", {
							className: "iconfont web_icon_dianzan_fill"
						}), l.createElement("span", null, (0, g.mf)(r.stat.like || 0))))))
					}), []);
				return 0 === s.length ? null : l.createElement("div", {
					className: pn["detail-bottom"]
				}, l.createElement("div", {
					className: pn["related-recommend"]
				}, l.createElement("div", {
					className: pn.title
				}, "相关推荐"), l.createElement(fn.Z, {
					className: "x-edu-divider"
				}), l.createElement("div", {
					className: pn["related-recommend-content"]
				}, s.map((function(e) {
					return l.createElement(v, {
						item: e,
						key: e.unit_id,
						onClick: m
					})
				})))))
			}

			function Tn(e, t) {
				var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = Ln(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var r = 0,
							i = function() {};
						return {
							s: i,
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
							f: i
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var a, o = !0,
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
						c = !0, a = e
					},
					f: function() {
						try {
							o || null == n.return || n.return()
						} finally {
							if (c) throw a
						}
					}
				}
			}

			function Ln(e, t) {
				if (e) {
					if ("string" === typeof e) return jn(e, t);
					var n = Object.prototype.toString.call(e)
						.slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jn(e, t) : void 0
				}
			}

			function jn(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function Mn(e, t) {
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

			function Dn(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Mn(Object(n), !0)
						.forEach((function(t) {
							(0, o.Z)(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mn(Object(n))
						.forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
				}
				return e
			}
			n(41310);

			function An() {
				var e, t, n, d, x, w = (0, P.getUrlQuery)(),
					k = w.tag,
					E = void 0 === k ? "" : k,
					L = w.libraryId,
					j = void 0 === L ? "" : L,
					M = w.breadcrumb,
					Y = void 0 === M ? "" : M,
					$ = w.firstLevel,
					ee = void 0 === $ ? "" : $,
					te = w.secondLevel,
					ne = void 0 === te ? "" : te,
					re = w.channelId,
					ie = void 0 === re ? "" : re,
					ae = w.thirdLevel,
					ce = void 0 === ae ? "" : ae,
					le = w.courseId,
					ue = w.resourceId,
					se = void 0 === ue ? "" : ue,
					de = w.workFlag,
					me = void 0 === de ? "0" : de,
					ve = (0, s.gV)(),
					fe = (0, l.useState)(""),
					pe = (0, c.Z)(fe, 2),
					_e = pe[0],
					ge = pe[1],
					he = (0, l.useState)(null),
					ye = (0, c.Z)(he, 2),
					xe = ye[0],
					be = ye[1],
					we = (0, l.useState)(null),
					ke = (0, c.Z)(we, 2),
					Ee = ke[0],
					Ce = ke[1],
					Ze = (0, l.useState)(!1),
					Ie = (0, c.Z)(Ze, 2),
					Se = Ie[0],
					Pe = Ie[1],
					Ne = (0, l.useState)(!1),
					Re = (0, c.Z)(Ne, 2),
					Oe = Re[0],
					Te = Re[1],
					Le = (0, l.useState)(null),
					je = (0, c.Z)(Le, 2),
					Me = je[0],
					De = je[1],
					Ae = (0, l.useState)(null),
					Ue = (0, c.Z)(Ae, 2),
					Fe = Ue[0],
					ze = Ue[1],
					He = (0, l.useState)(null),
					qe = (0, c.Z)(He, 2),
					Be = qe[0],
					We = qe[1],
					Xe = (0, l.useState)(null),
					Ve = (0, c.Z)(Xe, 2),
					Je = Ve[0],
					Qe = Ve[1],
					Ge = (0, l.useState)({}),
					Ke = (0, c.Z)(Ge, 2),
					Ye = Ke[0],
					$e = Ke[1],
					et = (0, l.useState)([]),
					tt = (0, c.Z)(et, 2),
					nt = tt[0],
					rt = tt[1],
					at = (0, l.useMemo)(dn.NH, []),
					ot = (0, l.useState)({}),
					ct = (0, c.Z)(ot, 2),
					lt = ct[0],
					ut = ct[1],
					st = (0, l.useState)({}),
					mt = (0, c.Z)(st, 2),
					vt = mt[0],
					ft = mt[1],
					pt = (0, l.useState)(!0),
					_t = (0, c.Z)(pt, 2),
					gt = _t[0],
					ht = _t[1],
					yt = (0, l.useState)(null),
					xt = (0, c.Z)(yt, 2),
					bt = xt[0],
					wt = xt[1],
					kt = (0, l.useState)(null),
					Et = (0, c.Z)(kt, 2),
					Ct = Et[0],
					Zt = Et[1],
					It = (0, l.useState)(!1),
					St = (0, c.Z)(It, 2),
					Pt = St[0],
					Nt = St[1],
					Rt = "1" === me,
					Ot = (0, u.k6)(),
					Tt = (0, l.useRef)(),
					Lt = function(e, t) {
						var n = Dn({}, Je);
						n[e] = (n[e] || 0) - t > 0 ? n[e] : t, Qe(Dn({}, n))
					},
					jt = function() {
						var e;
						return -1 !== (null === Me || void 0 === Me || null === (e = Me.resource_type) || void 0 === e ? void 0 : e.indexOf("video")) ? "video" : "e_exercise_activity" === (null === Me || void 0 === Me ? void 0 : Me.resource_type) ? "exam" : "e_live_activity" === (null === Me || void 0 === Me ? void 0 : Me.resource_type) ? "live" : "doc"
					},
					Mt = function(e) {
						var t;
						return "e_live_activity" === (null === Me || void 0 === Me ? void 0 : Me.resource_type) ? (null === Me || void 0 === Me ? void 0 : Me.study_time) || (null === Me || void 0 === Me || null === (t = Me.ext_info) || void 0 === t ? void 0 : t.duration) || 0 : e
					},
					Dt = (0, l.useCallback)(function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
							var r, i, a, o, c;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (Ee && Me) {
											e.next = 2;
											break
										}
										return e.abrupt("return");
									case 2:
										if (i = A.pn.getProgressData(A.pn.userId, Ee.id), i) {
											e.next = 6;
											break
										}
										return console.log("课程进度不存在, 是否调用`await initProgressInfo`"), e.abrupt("return");
									case 6:
										if (a = (null === (r = i.ext_info.resource_progress) || void 0 === r ? void 0 : r[null === Me || void 0 === Me ? void 0 : Me.resource_id]) || 0, e.t0 = t > a && 0 !== t, !e.t0) {
											e.next = 12;
											break
										}
										return e.next = 11, (0, Z.iT)();
									case 11:
										e.t0 = e.sent;
									case 12:
										if (!e.t0) {
											e.next = 14;
											break
										}(0, oe.bL)({
											courseId: le,
											activityId: Me.activity_id || Me.id,
											activityName: (null === (o = Me.video_extend) || void 0 === o ? void 0 : o.title) || (null === (c = Me.document_extend) || void 0 === c ? void 0 : c.title) || Me.name,
											resourceId: null === Me || void 0 === Me ? void 0 : Me.resource_id,
											studyTime: null === Me || void 0 === Me ? void 0 : Me.study_time
										});
									case 14:
										(0, oe.fJ)({
											courseId: Ee.id,
											resourceId: null === Me || void 0 === Me ? void 0 : Me.resource_id,
											activityId: Me.activity_id || Me.id,
											resources: [Me],
											state: t,
											type: jt(),
											position: n
										}), Lt(null === Me || void 0 === Me ? void 0 : Me.resource_id, t);
									case 16:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(), [Me, Ee]),
					At = function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
							var r, i, a, o, c, l, u, s, d, m, v, f, p = arguments;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (u = p.length > 2 && void 0 !== p[2] && p[2], s = p.length > 3 && void 0 !== p[3] && p[3], null !== Ee && void 0 !== Ee && null !== (r = Ee.ext_info) && void 0 !== r && null !== (i = r.progress_config) && void 0 !== i && i.spi && (!s || null !== Ee && void 0 !== Ee && null !== (a = Ee.ext_info) && void 0 !== a && null !== (o = a.progress_config) && void 0 !== o && o["begin-spi"])) {
											e.next = 4;
											break
										}
										return e.abrupt("return", null);
									case 4:
										return d = "", "teacherTraining" === (null === (c = Ee.ext_info) || void 0 === c || null === (l = c.progress_config) || void 0 === l ? void 0 : l.type) && (d = Ee.ext_info.progress_config.source_train_exid), e.next = 8, (0, Z.bG)();
									case 8:
										return m = e.sent, v = m.user_id, e.next = 12, (0, oe.EK)({
											url: Ee.ext_info.progress_config.spi,
											fixUrl: Ee.ext_info.progress_config.fix_spi,
											beginUrl: s ? Ee.ext_info.progress_config["begin-spi"] : "",
											trainReportTokenUrlEncode: d,
											courseId: Ee.id,
											resourceId: null === Me || void 0 === Me ? void 0 : Me.resource_id,
											activityId: (null === Me || void 0 === Me ? void 0 : Me.activity_id) || (null === Me || void 0 === Me ? void 0 : Me.id),
											resources: [Me],
											state: t,
											type: jt(),
											position: Mt(n),
											userId: v,
											trainId: Ee.ext_info.source_train_id,
											ignoreHackCheck: u
										});
									case 12:
										return f = e.sent, e.abrupt("return", f);
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
					Ut = function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
							var r, i, a, c, l, u, s, d, m, f, p, _, g, h, y, x, b, w, k, E, Z, S, N = arguments;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return c = N.length > 2 && void 0 !== N[2] ? N[2] : [], l = null === c || void 0 === c ? void 0 : c.find((function(e) {
											return e.id === ie
										})), u = (0, v.get)(n, "nodes[0]", {}), Me && (u = {
											node_id: null === Me || void 0 === Me ? void 0 : Me.resource_id,
											node_name: (null === Me || void 0 === Me || null === (s = Me.video_extend) || void 0 === s ? void 0 : s.title) || (null === Me || void 0 === Me || null === (d = Me.document_extend) || void 0 === d ? void 0 : d.title) || (null === Me || void 0 === Me ? void 0 : Me.name)
										}), e.next = 6, (0, F.v2)(j, [ee, ne]);
									case 6:
										m = e.sent, f = m.first_tag_name, p = m.first_tag_id, _ = m.first_tag_code, g = m.second_tag_name, h = m.second_tag_id, y = m.second_tag_code, x = "教师研修", b = "TCH_webPlatform_detail_page", w = (0, dn.Zq)(), w === O.Xg.SPORT ? (x = "体育", b = "edu_webPlatform_articleDetail_SportsArt_page") : w === O.Xg.ART && (x = "美育", b = "edu_webPlatform_articleDetail_SportsArt_page"), k = {
											content_id: t.id,
											content_name: null === t || void 0 === t ? void 0 : t.name,
											resource_id: null === (r = u) || void 0 === r ? void 0 : r.node_id,
											resource_name: null === (i = u) || void 0 === i ? void 0 : i.node_name,
											channel_name: x,
											Subchannel_id: ie,
											channel_code: (0, P.getPageChannelCode)()
										}, k = (0, P.isTwy)() ? Dn(Dn({}, k), {}, {
											column_code: _,
											column_name: f,
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
										}) : Dn(Dn({}, k), {}, {
											first_tag_name: f,
											first_tag_id: p,
											first_tag_code: _,
											column_code: j,
											column_name: Y,
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
										}), C["default"].library.trainingId === j && (k = Dn(Dn({}, k), {}, {
											training_name: (null === bt || void 0 === bt ? void 0 : bt.title) || "2022暑期专题培训",
											training_id: null === bt || void 0 === bt ? void 0 : bt.id
										})), ze(Dn(Dn({}, k), {}, {
											course_type: "t_course",
											course_id: le,
											lesson_id: le,
											resource_id: null === Me || void 0 === Me ? void 0 : Me.resource_id,
											resource_type: null === Me || void 0 === Me ? void 0 : Me.resource_type,
											organ_id: "",
											training_id: (null === bt || void 0 === bt ? void 0 : bt.id) || "",
											studio_id: "",
											column_code: (0, P.isTwy)() ? _ : j,
											channel_code: (0, P.getPageChannelCode)()
										})), setTimeout((function() {
											(0, Q.hn)({
												eventName: b,
												params: k
											})
										}), 300), ("document" === (null === Me || void 0 === Me ? void 0 : Me.resource_type) && null !== Me && void 0 !== Me && null !== (a = Me.document_extend) && void 0 !== a && a.files || ["e_live_activity", "e_exercise_activity", "live"].includes(Me.resource_type)) && (S = (0, o.Z)((0, o.Z)((0, o.Z)((0, o.Z)({}, null === Me || void 0 === Me ? void 0 : Me.resource_type, null === Me || void 0 === Me ? void 0 : Me.resource_type), "e_exercise_activity", "exercise"), "e_live_activity", "livebroadcast"), "live", "livebroadcast"), (0, I.Zk)({
											eventName: "resource_invite",
											params: {
												resource_type: S[null === Me || void 0 === Me ? void 0 : Me.resource_type],
												resource_id: null === Me || void 0 === Me ? void 0 : Me.resource_id,
												content_id: null === Me || void 0 === Me ? void 0 : Me.resource_id,
												course_id: le,
												content_name: (null === Me || void 0 === Me || null === (E = Me.video_extend) || void 0 === E ? void 0 : E.title) || (null === Me || void 0 === Me || null === (Z = Me.document_extend) || void 0 === Z ? void 0 : Z.title) || (null === Me || void 0 === Me ? void 0 : Me.name),
												column_code: (0, P.isTwy)() ? _ : j,
												channel_code: (0, P.getPageChannelCode)(),
												training_id: (null === bt || void 0 === bt ? void 0 : bt.id) || ""
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
					Ft = function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
							var n, r, i, a, o, c, l, u, s, d, m, v, f, p, _, g, h, y, x, b, w, k, C, Z, I, S, N, R, O, T, L, M, D, A, H = arguments;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (c = H.length > 1 && void 0 !== H[1] ? H[1] : [], l = H.length > 2 ? H[2] : void 0, j && 0 !== (null === (n = j) || void 0 === n ? void 0 : n.length)) {
											e.next = 7;
											break
										}
										return e.next = 5, U.Z.getTeacherCourseList(null, (function(e) {
											return e.unit_id === le
										}));
									case 5:
										u = e.sent, j = null !== u && void 0 !== u && u.length && (null === (s = u[0]) || void 0 === s ? void 0 : s.library_id) || t;
									case 7:
										if (ie && 0 !== (null === (r = ie) || void 0 === r ? void 0 : r.length)) {
											e.next = 48;
											break
										}
										m = (0, P.isTwy)() ? c : c.slice(2), v = Tn(m), e.prev = 10, v.s();
									case 12:
										if ((f = v.n())
											.done) {
											e.next = 40;
											break
										}
										return p = f.value, e.next = 16, (0, z.kR)(p.id);
									case 16:
										_ = e.sent, g = Tn(_), e.prev = 18, g.s();
									case 20:
										if ((h = g.n())
											.done) {
											e.next = 27;
											break
										}
										if (y = h.value, -1 === (0, dn.e0)(y)
											.indexOf(j)) {
											e.next = 25;
											break
										}
										return ie = p.id, e.abrupt("break", 27);
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
										if (!ie) {
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
										e.prev = 42, e.t1 = e["catch"](10), v.e(e.t1);
									case 45:
										return e.prev = 45, v.f(), e.finish(45);
									case 48:
										return e.prev = 48, e.next = 51, (0, q.Ug)(j, le);
									case 51:
										return b = e.sent, e.next = 54, (0, q.aM)(j);
									case 54:
										w = e.sent, x = (0, dn.Nu)(b.tags, w), k = x, C = k.firstLevelCode, Z = k.secondLevelCode, I = k.thirdLevelCode, S = k.lastLevelName, ee = C, ne = Z, ce = I, E = S, e.next = 66;
										break;
									case 63:
										e.prev = 63, e.t2 = e["catch"](48), console.log(e.t2);
									case 66:
										if (d || !ie) {
											e.next = 70;
											break
										}
										return e.next = 69, (0, z.kR)(ie);
									case 69:
										d = e.sent;
									case 70:
										if (N = null === (i = d) || void 0 === i ? void 0 : i.find((function(e) {
											return (0, dn.e0)(e)[0] === j
										})), R = "library_id", ee && (R = "catalog_id"), null === (a = d) || void 0 === a || a.forEach((function(e) {
											var t = (0, dn.mD)(e, R)
												.find((function(e) {
													return e === (ee || j)
												}));
											t && (N = e)
										})), !(0, P.isTwy)()) {
											e.next = 82;
											break
										}
										return e.next = 77, (0, F.v2)(j, [ee]);
									case 77:
										O = e.sent, T = O.first_tag_name, Y = T, e.next = 104;
										break;
									case 82:
										if (11 !== (null === (o = N) || void 0 === o ? void 0 : o.type)) {
											e.next = 103;
											break
										}
										L = Tn(c), e.prev = 84, L.s();
									case 86:
										if ((M = L.n())
											.done) {
											e.next = 93;
											break
										}
										if (D = M.value, (null === D || void 0 === D ? void 0 : D.id) !== ie) {
											e.next = 91;
											break
										}
										return Y = (null === D || void 0 === D ? void 0 : D.title) || "", e.abrupt("break", 93);
									case 91:
										e.next = 86;
										break;
									case 93:
										e.next = 98;
										break;
									case 95:
										e.prev = 95, e.t3 = e["catch"](84), L.e(e.t3);
									case 98:
										return e.prev = 98, L.f(), e.finish(98);
									case 101:
										e.next = 104;
										break;
									case 103:
										Y = null === (A = N) || void 0 === A ? void 0 : A.setting.data.title;
									case 104:
										if (null === l || void 0 === l || !l.title || !j) {
											e.next = 107;
											break
										}
										return (0, F.F1)({
											courseId: le,
											libraryId: j,
											tag: l.title,
											breadcrumb: l.title
										}), e.abrupt("return", l.title);
									case 107:
										return Y && (0, F.F1)({
											courseId: le,
											channelId: ie,
											breadcrumb: Y,
											libraryId: j,
											firstLevel: ee,
											secondLevel: ne,
											thirdLevel: ce,
											tag: E
										}), e.abrupt("return", Y);
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
					zt = (0, l.useCallback)((function() {
						var e = "".concat(window.location.pathname)
							.concat(window.location.search)
							.concat(window.location.hash)
							.replace("courseDetail", "courseIndex"),
							t = ve ? "".concat(e)
							.concat(null !== e && void 0 !== e && e.includes("?") ? "&" : "?", "x-edu-theme=")
							.concat(ve) : e;
						Ot.push(t)
					}), []),
					Ht = (0, l.useCallback)(function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
							var n, r, i, a, o, c, l, u;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (!t.action_rule_link) {
											e.next = 24;
											break
										}
										return e.next = 3, (0, Z.iT)();
									case 3:
										if (r = e.sent, r) {
											e.next = 7;
											break
										}
										return zt(), e.abrupt("return", !1);
									case 7:
										return e.next = 9, (0, Z.bG)();
									case 9:
										if (i = e.sent, a = i.user_id, o = (0, b.J_)({
											userId: a
										}), c = [T.P0.TEACHER, T.P0.ACADEMIC_STAFF, T.P0.ELECTRIC_TEACHER, T.P0.EDU_ADMIN], (0, v.includes)(c, o)) {
											e.next = 16;
											break
										}
										return zt(), e.abrupt("return", !1);
									case 16:
										return l = "".concat(t.action_rule_link, "&identity_code=")
											.concat(o), -1 === l.indexOf("course_id") && (l = "".concat(l, "&course_id=")
												.concat(t.id)), e.next = 20, (0, X.b8)(t.id, l, a);
									case 20:
										if (u = e.sent, u.result || !(["NOT_VERIFY_PROFILE", "NOT_ENROLL", "COURSE_NOT_START"].indexOf(null === (n = u.action) || void 0 === n ? void 0 : n.business_code) > -1)) {
											e.next = 24;
											break
										}
										return zt(), e.abrupt("return", !1);
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
					return (0, a.Z)(regeneratorRuntime.mark((function e() {
							var t, n, r, i, a, o, c, l, u, s, d, m, v, f, p, _, g, h, y, x, b, w, k, E, S, N, R, T, L, M, A, U, q, W, Q, G, K;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return window.addEventListener("beforeunload", I.di), window.addEventListener("visibilitychange", I.gi), Te(!0), r = null, i = null, a = null, e.prev = 6, e.next = 9, (0, X.XU)(le);
									case 9:
										if (r = e.sent, 0 !== (null === (o = r) || void 0 === o || null === (c = o.course_detail) || void 0 === c ? void 0 : c.status)) {
											e.next = 14;
											break
										}
										return Pe(!0), Te(!1), e.abrupt("return");
									case 14:
										if (nt.length) {
											e.next = 18;
											break
										}
										return e.next = 17, (0, z.mj)();
									case 17:
										i = e.sent;
									case 18:
										return null !== (l = r) && void 0 !== l && l.course_detail.action_rule_link && (r.course_detail.action_rule_link = r.course_detail.action_rule_link.replace("${action}", "access")), e.next = 21, Ht(null === (u = r) || void 0 === u ? void 0 : u.course_detail);
									case 21:
										if (e.sent) {
											e.next = 23;
											break
										}
										return e.abrupt("return");
									case 23:
										if (Ce(null === (s = r) || void 0 === s ? void 0 : s.course_detail), E = (null === (d = r) || void 0 === d || null === (m = d.library_tags) || void 0 === m || null === (v = m[0]) || void 0 === v ? void 0 : v.library_id) || (null === (f = r) || void 0 === f ? void 0 : f.course_detail.context_id.split(":")[1]), P.isTwy && (S = window.location.href, E === C["default"].library.LibraryId.sportCourse.id && -1 === S.indexOf(O.Xg.SPORT) ? (S = "".concat(O.Xg.SPORT, "/courseDetail?courseId=")
											.concat(le), window.location.replace(S)) : E === C["default"].library.LibraryId.art.id && -1 === S.indexOf(O.Xg.ART) && (S = "".concat(O.Xg.ART, "/courseDetail?courseId=")
											.concat(le), window.location.replace(S))), (0, J.et)({
											smartLink: null === (p = r) || void 0 === p || null === (_ = p.course_detail) || void 0 === _ || null === (g = _.ext_info) || void 0 === g ? void 0 : g.smart_link
										}), !(E === C["default"].library.trainingId || (null === (h = r) || void 0 === h ? void 0 : h.course_detail.context_id.indexOf("auxo-train:")) > -1)) {
											e.next = 34;
											break
										}
										if (N = r.course_detail.context_id.split("auxo-train:")[1] || C["default"].library.trainingId, !N) {
											e.next = 34;
											break
										}
										return e.next = 32, (0, H.N4)(N);
									case 32:
										a = e.sent, wt(a.train);
									case 34:
										if (Y) {
											e.next = 38;
											break
										}
										return e.next = 37, Ft(E, i, null === (R = a) || void 0 === R ? void 0 : R.train);
									case 37:
										Y = e.sent;
									case 38:
										return rt(i || []), $e({
											content_id: le,
											content_type: 0,
											content_cover: null === (y = r) || void 0 === y ? void 0 : y.course_detail.front_cover_object_url,
											content_name: null === (x = r) || void 0 === x ? void 0 : x.course_detail.name,
											content_source: (null === (b = r) || void 0 === b ? void 0 : b.course_detail.ext_info.source) || "智慧中小学",
											sub_content: {
												sub_content_num: null === (w = r) || void 0 === w ? void 0 : w.course_detail.total_activity_count,
												video_duration: null === (k = r) || void 0 === k ? void 0 : k.course_detail.total_time
											}
										}), e.next = 42, (0, B.JW)(le);
									case 42:
										T = e.sent, ft(T || {}), e.next = 51;
										break;
									case 46:
										e.prev = 46, e.t0 = e["catch"](6), Pe(!0), Te(!1), console.error(e.t0);
									case 51:
										return L = null === (t = r) || void 0 === t || null === (n = t.course_detail) || void 0 === n ? void 0 : n.activity_set_id, ge(L), e.next = 55, (0, X.z_)(L);
									case 55:
										if (M = e.sent, M.activity_total) {
											e.next = 60;
											break
										}
										return Pe(!0), Te(!1), e.abrupt("return");
									case 60:
										return A = {}, e.next = 63, (0, Z.iT)();
									case 63:
										if (!e.sent) {
											e.next = 73;
											break
										}
										return e.next = 66, (0, Z.bG)();
									case 66:
										return Q = e.sent, e.next = 69, (0, oe.ST)({
											userId: Q.user_id,
											courseDetail: null === (U = r) || void 0 === U ? void 0 : U.course_detail,
											courseActiveSet: M,
											channelId: ie.length > 0 ? ie : null === (q = r) || void 0 === q ? void 0 : q.course_detail.id,
											resourceId: se,
											tags: Y
										});
									case 69:
										A = e.sent, We(Dn(Dn({}, A), {}, {
											userId: Q.user_id
										})), Qe(null === (W = A) || void 0 === W ? void 0 : W.resource_progress), a && (G = function(e) {
											var t, n = (null === e || void 0 === e ? void 0 : e.extraFields) || {},
												r = n.device_id,
												i = n.event;
											"com.nd.sdp.traincourse/study" === i && r !== V.y && (null === (t = Tt.current) || void 0 === t || t.stopVideo())
										}, D({
											alias: Q.user_id,
											onNewMessage: G,
											onLogined: function() {
												var e;
												return null === (e = Tt.current) || void 0 === e ? void 0 : e.reportVideoBegined()
											}
										}));
									case 73:
										if (be(M), !(0, P.isTwy)()) {
											e.next = 79;
											break
										}
										return e.next = 77, (0, F.v2)(j, [ee]);
									case 77:
										K = e.sent, ut(Dn({}, K));
									case 79:
										Te(!1);
									case 80:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[6, 46]
							])
						})))(),
						function() {
							window.removeEventListener("beforeunload", I.di), window.removeEventListener("visibilitychange", I.gi)
						}
				}), []), (0, l.useEffect)((function() {
					Me && xe && nt.length > 0 && Ee && (Ut(Ee, xe, nt), (0, I.di)())
				}), [Me, xe, nt, Ee]);
				var qt = function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
							var n;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (n = t.activity_remark || "", 0 !== n.indexOf("http")) {
											e.next = 4;
											break
										}
										return window.open(ve ? "".concat(n)
											.concat(n.includes("?") ? "&" : "?", "x-edu-theme=")
											.concat(ve) : n, "_blank"), e.abrupt("return", !1);
									case 4:
										if (null === Ct || void 0 === Ct || !Ct.onExit) {
											e.next = 6;
											break
										}
										return e.abrupt("return", Ct.onExit());
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
					Bt = function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e(t, n) {
							var r, i, a, o, c, l, u, s, d;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (n) {
											e.next = 9;
											break
										}
										return e.next = 3, (0, F.v2)(j, [ee, ne]);
									case 3:
										a = e.sent, o = a.first_tag_code, (0, I.XN)({
											eventName: "edu_Platform_resourceDetail_page",
											params: {
												course_type: "t_course",
												parentchannel_code: "",
												channel_code: (0, P.getPageChannelCode)(),
												subchannel_id: ie,
												column_code: (0, P.isTwy)() ? o : j,
												course_id: le,
												lesson_id: null === t || void 0 === t ? void 0 : t.id,
												resource_type: (0, P.isTwy)() ? "x_course" : "t_course",
												resource_id: (null === t || void 0 === t ? void 0 : t.resource_id) || "",
												organ_id: "",
												platform_category: "EDU"
											}
										}), j === C["default"].library.trainingId && (0, I.XN)({
											eventName: "edu_Platform_training_page",
											params: {
												training_id: C["default"].library.trainingId,
												channel_code: (0, P.getPageChannelCode)(),
												course_id: le,
												resource_id: (null === t || void 0 === t ? void 0 : t.resource_id) || ""
											}
										}), e.next = 14;
										break;
									case 9:
										return e.next = 11, (0, F.v2)(j, [ee, ne]);
									case 11:
										c = e.sent, l = c.first_tag_code, (0, I._A)({
											eventName: "edu_Platform_content_click",
											params: {
												content_type: "e_live_activity" === (null === t || void 0 === t ? void 0 : t.type) ? "publiclive_type" : "t_course",
												content_id: le,
												channel_code: (0, P.getPageChannelCode)(),
												first_column_code: (0, P.isTwy)() ? l : ie,
												clickPage_type: (0, P.getPageChannelType)(),
												content_name: Ee.name,
												page_code: (0, P.getPageCode)(),
												locatePage_channel: (0, P.getPageChannelCode)()
											}
										});
									case 14:
										return Zt(null), De(t), e.next = 18, (0, oe.bL)({
											courseId: le,
											activityId: t.activity_id || t.id,
											activityName: (null === (r = t.video_extend) || void 0 === r ? void 0 : r.title) || (null === (i = t.document_extend) || void 0 === i ? void 0 : i.title) || (null === t || void 0 === t ? void 0 : t.name),
											resourceId: null === t || void 0 === t ? void 0 : t.resource_id,
											studyTime: null === t || void 0 === t ? void 0 : t.study_time
										});
									case 18:
										Fe && (d = Dn(Dn({}, Fe), {}, {
											resource_id: null === t || void 0 === t ? void 0 : t.resource_id,
											resource_name: (null === t || void 0 === t || null === (u = t.video_extend) || void 0 === u ? void 0 : u.title) || (null === t || void 0 === t || null === (s = t.document_extend) || void 0 === s ? void 0 : s.title) || (null === t || void 0 === t ? void 0 : t.name)
										}), ze(d), (0, Q.hC)({
											eventName: "document" === t.resource_type ? "TCH_webPlatform_detail_Document_switchFileList_click" : "TCH_webPlatform_detail_Switchvideo_click",
											params: d
										})), n && 2 === (null === t || void 0 === t ? void 0 : t.complete_mode) && sn(t);
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
					Wt = function() {
						(0, Q.hC)({
							eventName: "TCH_webPlatform_detail_download_click",
							params: Fe
						})
					},
					Xt = function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e() {
							var t, n, r, i, a, o;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, (0, F.v2)(j, [ee, ne]);
									case 2:
										return t = e.sent, n = t.first_tag_code, (0, I._A)({
											eventName: "edu_webPlatform_touchScreen_click",
											params: {
												channel_code: (0, P.getPageChannelCode)(),
												first_column_code: (0, P.isTwy)() ? n : ie,
												content_type: null === Ee || void 0 === Ee ? void 0 : Ee.biz_type,
												content_id: null === Ee || void 0 === Ee ? void 0 : Ee.id
											}
										}), e.next = 7, (0, Z.EV)({
											content: "需要登录才可以使用授课模式，是否登录？"
										});
									case 7:
										if (!e.sent) {
											e.next = 17;
											break
										}
										return r = "https://bb.basic.smartedu.cn/", e.next = 11, (0, bn.J)();
									case 11:
										return i = e.sent, e.next = 14, (0, bn.$)();
									case 14:
										a = e.sent, o = "".concat(r, "#teach_course_id=")
											.concat(le, "&node_id=")
											.concat(Me.relation_node_id, "&")
											.concat(i)
											.concat(a), (0, P.urlJumpInElectron)(o, "_blank", "forceExternal");
									case 17:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}(),
					Vt = function() {
						var e = (0, v.cloneDeep)(ln);
						e[e.length - 1].href = window.location.href, (0, S.mo)((0, P.getPageChannelCode)(), le, "t_course", e, Me.relation_node_id)
					},
					Jt = function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										(0, Q.hC)({
											eventName: "edu_webPlatform_articleDetail_collect_click",
											params: {
												content_name: Fe.content_name,
												resource_id: Fe.content_id,
												column_name: Fe.column_name,
												channel_name: Fe.channel_name,
												channel_code: Fe.channel_code,
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
					Qt = function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										(0, Q.hC)({
											eventName: "edu_webPlatform_articleDetail_likes_click",
											params: {
												content_name: Fe.content_name,
												resource_id: Fe.content_id,
												column_name: Fe.column_name,
												channel_name: Fe.channel_name,
												channel_code: Fe.channel_code,
												resource_type: "课程",
												status: t ? "点赞" : "取消点赞"
											}
										}), (0, I._A)({
											eventName: "edu_Platform_contentLikes_click",
											params: {
												content_type: null === Ee || void 0 === Ee ? void 0 : Ee.biz_type,
												content_id: Fe.content_id,
												channel_code: (0, P.getPageChannelCode)(),
												first_column_code: (0, P.isTwy)() ? Fe.first_tag_id : Fe.Subchannel_id,
												status: t ? "点赞" : "取消点赞"
											}
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
					Gt = Ee || {},
					Kt = Gt.name,
					Yt = Gt.user_suit,
					$t = Gt.introduction,
					en = Gt.summary,
					tn = Gt.ext_info,
					nn = (null === tn || void 0 === tn ? void 0 : tn.extend_reading) || [],
					rn = (null === tn || void 0 === tn ? void 0 : tn.source) || "智慧中小学",
					an = $t || en,
					cn = Yt || an || 0 !== nn.length,
					ln = (0, l.useMemo)((function() {
						var e, t = (0, dn.i7)();
						if (ie && (0, P.isTwy)()) {
							var n = "".concat(at, "?channelId=")
								.concat(ie, "&libraryId=")
								.concat(j, "&breadcrumb=")
								.concat(Y);
							ee && ee.length > 0 && (n = "".concat(n, "&firstLevel=")
								.concat(ee)), t = [].concat((0, i.Z)(t), [{
								title: lt.first_tag_name,
								href: n
							}])
						}
						if (ie && !(0, P.isTwy)()) {
							var r = null === nt || void 0 === nt ? void 0 : nt.find((function(e) {
								return e.id === ie
							}));
							r && (e = r.title, t = [].concat((0, i.Z)(t), [{
								title: r.title,
								href: "".concat(at, "?channelId=")
									.concat(ie)
							}]))
						}
						var a = t[t.length - 1];
						if (j && Y && e !== Y && (!E || Y !== E) && (!a || (null === a || void 0 === a ? void 0 : a.title) !== Y)) {
							var o = "".concat((0, dn.NH)(), "?channelId=")
								.concat(ie, "&libraryId=")
								.concat(j, "&breadcrumb=")
								.concat(Y);
							ee && ee.length > 0 && (o = "".concat(o, "&firstLevel=")
								.concat(ee)), ne && ne.length > 0 && (o = "".concat(o, "&secondLevel=")
								.concat(ne)), t = [].concat((0, i.Z)(t), [{
								title: Y,
								href: o
							}])
						}
						if (E && j !== C["default"].library.trainingId) {
							var c = "".concat(at, "?channelId=")
								.concat(ie, "&libraryId=")
								.concat(j, "&breadcrumb=")
								.concat(Y);
							ee && ee.length > 0 && (c = "".concat(c, "&firstLevel=")
								.concat(ee)), ne && ne.length > 0 && (c = "".concat(c, "&secondLevel=")
								.concat(ne)), ce && ce.length > 0 && (c = "".concat(c, "&thirdLevel=")
								.concat(ce)), t = [].concat((0, i.Z)(t), [{
								title: E,
								href: c
							}])
						}
						return bt && (t = [].concat((0, i.Z)(t), [{
							title: bt.title,
							href: "/training/".concat(bt.id)
						}])), Kt && (t = [].concat((0, i.Z)(t), [{
							title: Kt || "",
							href: "".concat(window.location.pathname.replace("courseDetail", "courseIndex"))
								.concat(window.location.search.replace(/&resourceId=[a-z0-9-]{36}/, ""))
						}, {
							title: "课程详情"
						}])), t
					}), [j, Y, Kt, nt, lt, bt]),
					un = (0, l.useCallback)((0, a.Z)(regeneratorRuntime.mark((function e() {
						var t, n, r;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return Lt(null === Me || void 0 === Me ? void 0 : Me.resource_id, 1), e.next = 3, (0, Z.bG)();
								case 3:
									if (t = e.sent, n = R.R.myCourses(null === t || void 0 === t ? void 0 : t.user_id), r = localStorage.getItem(n), r) try {
										r = JSON.parse(r)
									} catch (i) {
										r = ""
									}
									r || (r = {
										items: [],
										total: 0
									}), r.items = r.items.filter((function(e) {
										return e.content_id !== Ee.id
									})), r.items.unshift({
										content_cover: Ee.front_cover_object_url,
										content_id: Ee.id,
										content_name: Ee.name,
										content_source: Ee.ext_info.source || "智慧中小学",
										content_type: 0,
										progress: 0,
										sub_content: {
											sub_content_num: Ee.total_activity_count,
											video_duration: Ee.total_time
										}
									}), r.items.length >= 8 && r.items.pop(), r.total = r.items.length, localStorage.setItem(n, JSON.stringify(r));
								case 13:
								case "end":
									return e.stop()
							}
						}), e)
					}))), [Ee, Me]),
					sn = function() {
						var e = (0, a.Z)(regeneratorRuntime.mark((function e(t) {
							var n, r;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, (0, oe.N_)({
											courseId: Ee.id,
											workId: null === (n = t || Me) || void 0 === n ? void 0 : n.work_id,
											status: 2
										});
									case 2:
										r = e.sent, We(Dn(Dn({}, Be), r));
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
					mn = function() {
						return l.createElement("div", {
							className: pn["work-wrapper"]
						}, l.createElement("div", null, null === Me || void 0 === Me ? void 0 : Me.work_detail), l.createElement("div", {
							className: pn["work-attachments"]
						}, (null === Me || void 0 === Me ? void 0 : Me.attachments) && l.createElement(G.Z, {
							showTitle: !0,
							values: null === Me || void 0 === Me ? void 0 : Me.attachments
						})))
					},
					fn = function() {
						var e, t;
						return l.createElement("div", {
							className: pn["video-wrapper"]
						}, Me && l.createElement(it, {
							key: Me.resource_id,
							ref: Tt,
							courseId: null === Ee || void 0 === Ee ? void 0 : Ee.id,
							resources: Me,
							trackInfo: Fe,
							aspectRatio: .56,
							libraryId: j,
							dataSessionId: null === Be || void 0 === Be ? void 0 : Be.userId,
							onUploadProgress: un,
							changeStudyStatus: Dt,
							trainId: null === bt || void 0 === bt ? void 0 : bt.id,
							progressConfig: null === Ee || void 0 === Ee || null === (e = Ee.ext_info) || void 0 === e ? void 0 : e.progress_config,
							resourceMaxPos: null === Be || void 0 === Be ? void 0 : Be.resource_max_pos,
							state: null === Be || void 0 === Be ? void 0 : Be.resource_progress,
							activityEvent: null === Be || void 0 === Be ? void 0 : Be.activity_event,
							reportToTrain: At,
							forcedLogin: !0,
							onlyone: !1,
							setPlayRef: Zt,
							videoStudyConfig: null === Ee || void 0 === Ee || null === (t = Ee.ext_info) || void 0 === t ? void 0 : t.video_study_config,
							limitPlaybackRate: bt ? 2 : 0
						}))
					},
					_n = function() {
						var e, t;
						return l.createElement(Sn, {
							liveId: null === Me || void 0 === Me || null === (e = Me.ext_info) || void 0 === e ? void 0 : e.live_id,
							errorCover: null === Me || void 0 === Me || null === (t = Me.ext_info) || void 0 === t ? void 0 : t.cover_pic_web_url,
							trainId: null === bt || void 0 === bt ? void 0 : bt.id,
							courseId: le,
							resourceId: null === Me || void 0 === Me ? void 0 : Me.resource_id,
							columnCode: j,
							channelCode: (0, P.getPageChannelCode)(),
							reportToTrain: (0, a.Z)(regeneratorRuntime.mark((function e() {
								var t, n;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return window.postMessage({
												type: "liveStart"
											}, "*"), Dt(2, Mt()), e.next = 4, (0, Z.bG)();
										case 4:
											return t = e.sent, n = t.user_id, e.next = 8, (0, oe.lz)({
												videoId: null === Me || void 0 === Me ? void 0 : Me.resource_id,
												userId: n,
												position: Mt()
											});
										case 8:
											At(2);
										case 9:
										case "end":
											return e.stop()
									}
								}), e)
							})))
						})
					},
					hn = function() {
						return "live" === (null === Me || void 0 === Me ? void 0 : Me.type) || "e_live_activity" === (null === Me || void 0 === Me ? void 0 : Me.type) ? _n() : Rt ? mn() : fn()
					};
				return l.createElement(h.Z, {
					loading: Oe,
					loadingProps: {
						delay: 0
					},
					empty: Se,
					emptyProps: {
						tip: "哎呀，您查看的课程下线啦~"
					}
				}, l.createElement("div", {
					className: pn["course-detail"]
				}, l.createElement(f.Z, {
					config: ln,
					from: "detail",
					origin: "TCH"
				}), l.createElement("div", {
					className: pn["detail-top"]
				}, l.createElement("div", {
					className: pn.title
				}, l.createElement("div", {
					className: pn.name
				}, Kt || ""), l.createElement("div", {
					style: {
						display: "flex"
					}
				}, Rt && 1 === (null === Me || void 0 === Me ? void 0 : Me.complete_mode) && ("2" === String(null === Be || void 0 === Be || null === (e = Be.miniwork_progress[null === Me || void 0 === Me ? void 0 : Me.work_id]) || void 0 === e ? void 0 : e.status) ? l.createElement("div", {
					className: pn.work_result,
					onClick: (0, a.Z)(regeneratorRuntime.mark((function e() {
						var t, n, i, a, o;
						return regeneratorRuntime.wrap((function(e) {
							while (1) switch (e.prev = e.next) {
								case 0:
									return e.next = 2, (0, W.R_)(null === Me || void 0 === Me ? void 0 : Me.work_id);
								case 2:
									t = e.sent, (null === t || void 0 === t ? void 0 : t.length) > 0 ? (n = t[0].biz_id, i = "name=".concat(Kt, "&breadcrumb=")
										.concat(Y, "&tag=")
										.concat(E, "&channelId=")
										.concat(ie, "&libraryId=")
										.concat(j, "&resourceId=")
										.concat(se, "&workFlag=1"), a = "".concat((0, dn.Zq)(), "/courseDetail/work?courseId=")
										.concat(le, "&workId=")
										.concat(null === Me || void 0 === Me ? void 0 : Me.work_id, "&workResultId=")
										.concat(n, "&")
										.concat(i), o = ve ? "".concat(a)
										.concat(null !== a && void 0 !== a && a.includes("?") ? "&" : "?", "x-edu-theme=")
										.concat(ve) : a, Ot.push(o)) : r.ZP.error("无成果文件");
								case 4:
								case "end":
									return e.stop()
							}
						}), e)
					})))
				}, "查看我的成果") : l.createElement("div", {
					className: pn.work_result,
					onClick: function() {
						Nt(!0)
					}
				}, "提交作业")))), l.createElement("div", {
					className: pn.extends
				}, l.createElement("div", {
					style: {
						display: "flex"
					}
				}, l.createElement("div", {
					className: pn.source
				}, l.createElement("i", {
					className: "iconfont icon_hotel_fill"
				}), l.createElement("span", null, " ", rn)), l.createElement("div", {
					className: pn.learned
				}, l.createElement("i", {
					className: "iconfont web_icon_guanzhu_fill"
				}), l.createElement("span", null, " ", (0, g.HR)((null === vt || void 0 === vt ? void 0 : vt.total_uv) || 0)))), l.createElement("div", {
					className: pn.actions
				}, Ee ? l.createElement(p.Z, {
					tag: Y,
					contentId: null === Ye || void 0 === Ye ? void 0 : Ye.content_id,
					contentType: null === Ee || void 0 === Ee ? void 0 : Ee.biz_type,
					content: (0, dn.xr)(Dn(Dn({}, Ye), {}, {
						introduction: an,
						lastTag: "".concat(Y)
					})),
					onStatusChange: Jt,
					firstColumnCode: (0, P.isTwy)() ? ee : ie
				}) : null, l.createElement(_.Z, {
					resId: le,
					onStatusChange: Qt
				}), Ee && l.createElement(y.Z, {
					content: {
						id: Ee.id,
						name: Ee.name,
						type: Ee.biz_type,
						channelCode: (0, P.getPageChannelCode)(),
						smartlink: null === (t = Ee.ext_info) || void 0 === t ? void 0 : t.smart_link
					},
					className: "suggestion"
				})))), l.createElement("div", {
					className: pn["detail-main"]
				}, l.createElement("div", {
					className: Rt ? m()(pn["detail-main-l"], pn["detail-main-l-work"]) : pn["detail-main-l"]
				}, l.createElement("div", {
					className: pn["detail-main-content"]
				}, hn(), l.createElement("div", {
					className: pn["sub-title"]
				}, l.createElement("span", null, "感谢所有为资源建设提供资料的单位和个人", l.createElement("br", null), "未经允许不得转载或引用"), !bt && Ee ? l.createElement(N.Z, {
					channelCode: (0, P.getPageChannelCode)(),
					firstColumnCode: (0, P.isTwy)() ? ee : ie,
					contentType: null === Ee || void 0 === Ee ? void 0 : Ee.biz_type,
					contentId: null === Ye || void 0 === Ye ? void 0 : Ye.content_id,
					onJumpBB: Xt,
					onJumpResourcePlatform: Vt,
					defaultPlayType: "ppt"
				}) : null)), l.createElement("div", {
					className: pn["detail-main-drawer-box"],
					onClick: function() {
						ht(!gt)
					}
				}, gt ? l.createElement("i", {
					className: "iconfont icon_arrowRight_linear"
				}) : l.createElement("i", {
					className: "iconfont icon_arrowLeft_linear"
				}))), l.createElement("div", {
					className: pn["detail-main-r"],
					style: {
						display: gt ? "block" : "none"
					}
				}, l.createElement("div", {
					className: pn["catalog-wrapper"]
				}, l.createElement("div", {
					className: m()(pn["catalog-title"], pn["theme-".concat(ve)])
				}, l.createElement("i", null), l.createElement("span", null, Rt ? "研修作业" : "研修内容")), Rt ? l.createElement(dt, {
					activitySetId: _e,
					initResourceId: se.length > 0 ? se : null === Be || void 0 === Be ? void 0 : Be.activity_last_learning_resource[null === Be || void 0 === Be || null === (n = Be.last_learning_activity) || void 0 === n ? void 0 : n.activity_id],
					isOpenCatalog: !0,
					newHeight: 0,
					onBeforeChangeCatalog: qt,
					onChangeCatalog: Bt,
					progress: null === Be || void 0 === Be ? void 0 : Be.miniwork_progress,
					libraryId: j
				}) : l.createElement(K.Z, {
					activitySetId: _e,
					catalogData: xe,
					initResourceId: se.length > 0 ? se : null === Be || void 0 === Be ? void 0 : Be.activity_last_learning_resource[null === Be || void 0 === Be || null === (d = Be.last_learning_activity) || void 0 === d ? void 0 : d.activity_id],
					isOpenCatalog: !0,
					newHeight: 0,
					onBeforeChangeCatalog: qt,
					onChangeCatalog: Bt,
					progress: Je,
					libraryId: j,
					isDocument: "document" === (null === Me || void 0 === Me ? void 0 : Me.resource_type) && (null === Me || void 0 === Me || null === (x = Me.document_extend) || void 0 === x ? void 0 : x.files)
				})))), Rt && null !== Me && void 0 !== Me && Me.work_id ? l.createElement(vn, {
					courseId: le,
					workId: null === Me || void 0 === Me ? void 0 : Me.work_id,
					workQuery: "name=".concat(Kt, "&breadcrumb=")
						.concat(Y, "&tag=")
						.concat(E, "&channelId=")
						.concat(ie, "&libraryId=")
						.concat(j, "&resourceId=")
						.concat(se, "&workFlag=1")
				}) : l.createElement(l.Fragment, null, cn && l.createElement("div", {
					className: pn["detail-bottom"]
				}, l.createElement(gn, {
					lecturer: Yt || "",
					intro: an || ""
				}), l.createElement(xn, {
					extendReadingData: nn,
					onDownload: Wt
				})), l.createElement(On, {
					courseDetail: Ee,
					libraryId: j
				}))), l.createElement(on, {
					visible: Pt,
					workId: null === Me || void 0 === Me ? void 0 : Me.work_id,
					courseId: le,
					onOk: function() {
						sn(), Nt(!1)
					},
					onCancel: function() {
						Nt(!1)
					}
				}))
			}
			var Un = An
		},
		99569: function(e, t, n) {
			"use strict";
			e.exports = n.p + "img/avatar-25fdf546.png"
		},
		41310: function(e, t, n) {
			"use strict";
			e.exports = n.p + "img/flod-8342900a.png"
		},
		81451: function(e, t, n) {
			"use strict";
			e.exports = n.p + "img/default-cover-86bfb33a.png"
		},
		9314: function(e, t, n) {
			"use strict";
			e.exports = n.p + "img/exercise2-75577d98.png"
		}
	}
]);
