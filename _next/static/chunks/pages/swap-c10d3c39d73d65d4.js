(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8503], {
		18717: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return o
				}
			});
			var r = t(19013),
				i = t(13882);

			function o(e) {
				(0, i.Z)(1, arguments);
				var n = (0, r.Z)(e);
				return n.setSeconds(0, 0), n
			}
		},
		85899: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return a
				}
			});
			var r = t(83946),
				i = t(77349),
				o = t(13882);

			function a(e, n) {
				return (0, o.Z)(2, arguments),
					function(e, n) {
						(0, o.Z)(2, arguments);
						var t = (0, r.Z)(n);
						return (0, i.Z)(e, 7 * t)
					}(e, -(0, r.Z)(n))
			}
		},
		68994: function(e, n, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/swap", function() {
				return t(53877)
			}])
		},
		86891: function(e, n, t) {
			"use strict";
			t.d(n, {
				R: function() {
					return l
				}
			});
			var r = t(90902),
				i = t(90327),
				o = t(2784),
				a = t(63445),
				s = t(57535),
				u = t(19022),
				c = t(95867);

			function l(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.gv,
					t = arguments.length > 2 ? arguments[2] : void 0,
					l = (0, i.Z)(),
					d = l.account,
					p = l.chainId,
					m = null === t ? d : t,
					h = (0, c.Z)(),
					x = (0, u.Ti)();
				return (0, o.useMemo)(function() {
					if (!e || !m || !d || !p || !h || !x) return [];
					var t = [];
					return t.push(r.F0.swapCallParameters(e, {
						feeOnTransfer: !1,
						allowedSlippage: new r.gG(r.QA.BigInt(n), a.PM),
						recipient: m,
						deadline: h.toNumber()
					})), e.tradeType === r.YL.EXACT_INPUT && t.push(r.F0.swapCallParameters(e, {
						feeOnTransfer: !0,
						allowedSlippage: new r.gG(r.QA.BigInt(n), a.PM),
						recipient: m,
						deadline: h.toNumber()
					})), t.map(function(e) {
						return {
							parameters: e,
							contract: x
						}
					})
				}, [d, n, p, x, h, m, e])
			}
		},
		76631: function(e, n, t) {
			"use strict";
			t.d(n, {
				o: function() {
					return v
				}
			});
			var r, i, o = t(98788),
				a = t(70865),
				s = t(50930),
				u = t(5163),
				c = t(77561),
				l = t(90902),
				d = t(98772),
				p = t(44203),
				m = t(90327),
				h = t(2784),
				x = t(38497),
				f = t(67831),
				g = t(57535),
				y = t(46267),
				T = t(51147),
				j = t(19022),
				b = t(76837);

			function v(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.gv,
					t = arguments.length > 2 ? arguments[2] : void 0,
					r = arguments.length > 3 ? arguments[3] : void 0,
					v = (0, m.Z)(),
					C = v.account,
					A = v.chainId,
					w = (0, x.Fh)(),
					Z = (0, c.$G)().t,
					S = (0, y.h7)(),
					I = null === t ? C : t;
				return (0, h.useMemo)(function() {
					var c;
					return e && C && A ? I ? {
						state: i.VALID,
						callback: (c = (0, o.Z)(function() {
							var i, o, c, m, h, x, g, y, v, P;
							return (0, u.__generator)(this, function(u) {
								switch (u.label) {
									case 0:
										return [4, Promise.all(r.map(function(e) {
											var n, t = e.parameters,
												r = t.methodName,
												i = t.args,
												o = t.value,
												a = e.contract,
												u = !o || (0, d.Z)(o) ? {} : {
													value: o
												};
											return (n = a.estimateGas)[r].apply(n, (0, s.Z)(i).concat([u])).then(function(n) {
												return {
													call: e,
													gasEstimate: n
												}
											}).catch(function(n) {
												var t;
												return console.error("Gas estimate failed, trying eth_call to extract error", e), (t = a.callStatic)[r].apply(t, (0, s.Z)(i).concat([u])).then(function(t) {
													return console.error("Unexpected successful call after failed estimate gas", e, n, t), {
														call: e,
														error: Z("Unexpected issue with estimating the gas. Please try again.")
													}
												}).catch(function(n) {
													return console.error("Call threw error", e, n), {
														call: e,
														error: (0, b.e)(n, Z)
													}
												})
											})
										}))];
									case 1:
										if (!(o = (i = u.sent()).find(function(e, n, t) {
												return "gasEstimate" in e && (n === t.length - 1 || "gasEstimate" in t[n + 1])
											}))) {
											if ((c = i.filter(function(e) {
													return "error" in e
												})).length > 0) throw Error(c[c.length - 1].error);
											throw Error(Z("Unexpected error. Could not estimate gas for the swap."))
										}
										return h = (m = o.call).contract, g = (x = m.parameters).methodName, y = x.args, v = x.value, P = o.gasEstimate, [2, h[g].apply(h, (0, s.Z)(y).concat([(0, a.Z)({
											gasLimit: (0, T.yC)(P),
											gasPrice: w
										}, v && !(0, d.Z)(v) ? {
											value: v,
											from: C
										} : {
											from: C
										})])).then(function(r) {
											var i = e.inputAmount.currency.symbol,
												o = e.outputAmount.currency.symbol,
												s = (0, j.P4)(n),
												u = e.tradeType === l.YL.EXACT_INPUT ? e.inputAmount.toSignificant(3) : e.maximumAmountIn(s).toSignificant(3),
												c = e.tradeType === l.YL.EXACT_OUTPUT ? e.outputAmount.toSignificant(3) : e.minimumAmountOut(s).toSignificant(3),
												d = "Swap ".concat(e.tradeType === l.YL.EXACT_OUTPUT ? "max." : "", " ").concat(u, " ").concat(i, " for ").concat(e.tradeType === l.YL.EXACT_INPUT ? "min." : "", " ").concat(c, " ").concat(o),
												m = t && (0, T.UJ)(t) ? (0, p.Z)(t) : t;
											return S(r, {
												summary: I === C ? d : "".concat(d, " to ").concat(m),
												translatableSummary: {
													text: e.tradeType === l.YL.EXACT_OUTPUT ? I === C ? "Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol%" : "Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol% to %recipientAddress%" : I === C ? "Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol%" : "Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol% to %recipientAddress%",
													data: (0, a.Z)({
														inputAmount: u,
														inputSymbol: i,
														outputAmount: c,
														outputSymbol: o
													}, I !== C && {
														recipientAddress: m
													})
												},
												type: "swap"
											}), (0, f.M)({
												chainId: A,
												inputAmount: u,
												outputAmount: c,
												input: e.inputAmount.currency,
												output: e.outputAmount.currency
											}), (0, f.u)({
												account: C,
												chainId: A,
												hash: r.hash
											}), r.hash
										}).catch(function(e) {
											if ((null == e ? void 0 : e.code) === 4001) throw Error("Transaction rejected.");
											throw console.error("Swap failed", e, g, y, v), Error(Z("Swap failed: %message%", {
												message: (0, b.e)(e, Z)
											}))
										})]
								}
							})
						}), function() {
							return c.apply(this, arguments)
						}),
						error: null
					} : null !== t ? {
						state: i.INVALID,
						callback: null,
						error: "Invalid recipient"
					} : {
						state: i.LOADING,
						callback: null,
						error: null
					} : {
						state: i.INVALID,
						callback: null,
						error: "Missing dependencies"
					}
				}, [e, C, A, I, t, r, w, Z, S, n])
			}(r = i || (i = {}))[r.INVALID = 0] = "INVALID", r[r.LOADING = 1] = "LOADING", r[r.VALID = 2] = "VALID"
		},
		53877: function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, {
				default: function() {
					return rF
				}
			});
			var r, i, o, a, s, u, c, l = t(52322),
				d = t(12905),
				p = t(47842),
				m = t(87394),
				h = t(77561),
				x = t(49996),
				f = t(85644),
				g = t(41013),
				y = t(58311),
				T = t(35158),
				j = t(46710),
				b = t(2784),
				v = t(50154),
				C = (0, t(61003).O4)("pcs:isHotTokensDisplay", !1),
				A = function() {
					return (0, v.KO)(C)
				},
				w = t(20173),
				Z = t(67152),
				S = t(41871),
				I = t(98159),
				P = t(92553),
				U = t(92228),
				E = t(18080),
				k = t(11318),
				N = t(36158),
				D = t(78293),
				L = t(79074),
				F = t(3411),
				O = t(58194),
				M = t(78005),
				_ = t(60796),
				B = t(14393),
				z = t(24826),
				X = t(95919),
				Y = t(9695),
				R = t(57902),
				W = t(22175),
				G = t(33575),
				H = t(15112),
				V = t(34498),
				$ = t.n(V),
				q = t(85875),
				K = t(75583),
				Q = t(14279),
				J = t(25374);

			function ee() {
				var e = (0, U.Z)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n\n  padding: 0 24px;\n\n  grid-template-columns: 3fr 1fr 1fr;\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 2fr repeat(2, 1fr);\n    & :nth-child(4) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 2fr repeat(2, 1fr);\n    & :nth-child(6) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 670px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"]);
				return ee = function() {
					return e
				}, e
			}

			function en() {
				var e = (0, U.Z)(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]);
				return en = function() {
					return e
				}, e
			}

			function et() {
				var e = (0, U.Z)(["\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  @media screen and (max-width: 670px) {\n    width: 16px;\n    height: 16px;\n  }\n"]);
				return et = function() {
					return e
				}, e
			}

			function er() {
				var e = (0, U.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"]);
				return er = function() {
					return e
				}, e
			}

			function ei() {
				var e = (0, U.Z)(["\n  padding: 4px 8px;\n  border-radius: 8px;\n  width: 25px;\n  height: 25px;\n  margin-left: 3px;\n  border-color: ", ";\n  background: ", ";\n  path {\n    fill: ", ";\n  }\n  &.is-asc {\n    background: ", ";\n    path:first-child {\n      fill: rgba(255, 255, 255, 1);\n    }\n    path:last-child {\n      fill: rgba(255, 255, 255, 0.3);\n    }\n  }\n  &.is-desc {\n    background: ", ";\n    path:first-child {\n      fill: rgba(255, 255, 255, 0.3);\n    }\n    path:last-child {\n      fill: rgba(255, 255, 255, 1);\n    }\n  }\n"]);
				return ei = function() {
					return e
				}, e
			}
			var eo = F.ZP.div.withConfig({
					componentId: "sc-141b62d3-0"
				})(ee()),
				ea = (0, F.ZP)(M.Z).withConfig({
					componentId: "sc-141b62d3-1"
				})(en()),
				es = (0, F.ZP)(G.Z).withConfig({
					componentId: "sc-141b62d3-2"
				})(et()),
				eu = (0, F.ZP)(Q._J).withConfig({
					componentId: "sc-141b62d3-3"
				})(er()),
				ec = (0, F.ZP)(_.Z).withConfig({
					componentId: "sc-141b62d3-4"
				})(ei(), function(e) {
					return e.theme.colors.cardBorder
				}, function(e) {
					var n = e.theme;
					return n.isDark ? n.colors.backgroundDisabled : n.colors.input
				}, function(e) {
					return e.theme.isDark ? "rgba(255, 255, 255, 0.2)" : "#B4ACCF"
				}, function(e) {
					var n = e.theme;
					return n.isDark ? n.colors.input : n.colors.textSubtle
				}, function(e) {
					var n = e.theme;
					return n.isDark ? n.colors.input : n.colors.textSubtle
				}),
				el = function() {
					var e = (0, l.jsxs)(eo, {
						children: [(0, l.jsx)(B.Z, {}), (0, l.jsx)(B.Z, {}), (0, l.jsx)(B.Z, {}), (0, l.jsx)(B.Z, {}), (0, l.jsx)(B.Z, {}), (0, l.jsx)(B.Z, {}), (0, l.jsx)(B.Z, {}), (0, l.jsx)(B.Z, {}), (0, l.jsx)(B.Z, {})]
					});
					return (0, l.jsxs)(l.Fragment, {
						children: [e, e, e]
					})
				},
				ed = function(e) {
					var n = e.tokenData,
						t = e.type,
						r = (0, x.Z)(),
						i = r.isXs,
						o = r.isSm,
						a = (0, L.hb)(),
						s = (0, L.U1)(),
						u = (0, H.g)().chainId,
						c = (0, O.getAddress)(n.address),
						d = (0, K.B)(n.address, u);
					return (0, l.jsx)(ea, {
						to: "/info".concat(a, "/tokens/").concat(n.address).concat(s),
						children: (0, l.jsxs)(eo, {
							children: [(0, l.jsxs)(f.Z, {
								alignItems: "center",
								children: [(0, l.jsx)(es, {
									sizes: "24px",
									srcs: [d, "https://tokens.pancakeswap.finance/images/".concat(c, ".png")]
								}), (i || o) && (0, l.jsx)(z.Z, {
									ml: "8px",
									children: n.symbol
								}), !i && !o && (0, l.jsxs)(f.Z, {
									marginLeft: "10px",
									children: [(0, l.jsx)(z.Z, {
										children: n.name
									}), (0, l.jsxs)(z.Z, {
										ml: "8px",
										children: ["(", n.symbol, ")"]
									})]
								})]
							}), "priceChange" === t && (0, l.jsxs)(z.Z, {
								fontWeight: 400,
								children: ["$", (0, q.d)(n.priceUSD, {
									notation: "standard"
								})]
							}), (0, l.jsx)(z.Z, {
								fontWeight: 400,
								children: (0, l.jsx)(J.Z, {
									value: n.priceUSDChange,
									fontWeight: 400
								})
							}), "volume" === t && (0, l.jsxs)(z.Z, {
								fontWeight: 400,
								children: ["$", (0, q.d)(n.volumeUSD)]
							})]
						})
					})
				},
				ep = {
					name: "name",
					volumeUSD: "volumeUSD",
					liquidityUSD: "liquidityUSD",
					priceUSD: "priceUSD",
					priceUSDChange: "priceUSDChange",
					priceUSDChangeWeek: "priceUSDChangeWeek"
				},
				em = function(e) {
					var n = e.tokenDatas,
						t = e.maxItems,
						r = void 0 === t ? 10 : t,
						i = e.defaultSortField,
						o = void 0 === i ? ep.volumeUSD : i,
						a = e.type,
						s = (0, m.Z)((0, b.useState)(ep[o]), 2),
						u = s[0],
						c = s[1],
						d = (0, x.Z)().isMobile;
					(0, b.useEffect)(function() {
						o && (c(o), v(1))
					}, [o]);
					var p = (0, m.Z)((0, b.useState)(!0), 2),
						f = p[0],
						g = p[1],
						y = (0, h.$G)().t,
						T = (0, m.Z)((0, b.useState)(1), 2),
						j = T[0],
						v = T[1],
						C = (0, m.Z)((0, b.useState)(1), 2),
						A = C[0],
						w = C[1];
					(0, b.useEffect)(function() {
						var e = 1;
						n && (n.length % r == 0 && (e = 0), w(Math.floor(n.length / r) + e))
					}, [r, n]);
					var Z = (0, b.useMemo)(function() {
							return n ? $()(n, function(e) {
								return e[u]
							}, f ? "desc" : "asc").slice(r * (j - 1), j * r) : []
						}, [n, r, j, f, u]),
						S = (0, b.useCallback)(function(e) {
							c(e), g(u !== e || !f)
						}, [f, u]),
						I = (0, b.useCallback)(function(e) {
							return u === e ? f ? "is-desc" : "is-asc" : ""
						}, [f, u]);
					return n ? (0, l.jsxs)(Q.y6, {
						children: [(0, l.jsxs)(eo, {
							children: [(0, l.jsx)(eu, {
								color: "secondary",
								fontSize: "12px",
								bold: !0,
								onClick: function() {
									return S(ep.name)
								},
								textTransform: "uppercase",
								children: y("Token Name")
							}), "priceChange" === a && (0, l.jsxs)(eu, {
								color: "secondary",
								fontSize: "12px",
								bold: !0,
								onClick: function() {
									return S(ep.priceUSD)
								},
								textTransform: "uppercase",
								children: [y("Price"), " ", (0, l.jsx)(ec, {
									scale: "sm",
									variant: "subtle",
									className: I(ep.priceUSD),
									children: (0, l.jsx)(X.Z, {})
								})]
							}), (0, l.jsxs)(eu, {
								color: "secondary",
								fontSize: "12px",
								bold: !0,
								onClick: function() {
									return S(ep.priceUSDChange)
								},
								textTransform: "uppercase",
								children: [y("Change"), " ", (0, l.jsx)(ec, {
									scale: "sm",
									variant: "subtle",
									className: I(ep.priceUSDChange),
									children: (0, l.jsx)(X.Z, {})
								})]
							}), "volume" === a && (0, l.jsxs)(eu, {
								color: "secondary",
								fontSize: "12px",
								bold: !0,
								onClick: function() {
									return S(ep.volumeUSD)
								},
								textTransform: "uppercase",
								children: [y("Volume 24H"), " ", (0, l.jsx)(ec, {
									scale: "sm",
									variant: "subtle",
									className: I(ep.volumeUSD),
									children: (0, l.jsx)(X.Z, {})
								})]
							})]
						}), (0, l.jsx)(Q.SS, {}), Z.length > 0 ? (0, l.jsxs)(l.Fragment, {
							children: [Z.map(function(e, n) {
								return e ? (0, l.jsxs)(b.Fragment, {
									children: [(0, l.jsx)(ed, {
										index: (j - 1) * 10 + n,
										tokenData: e,
										type: a
									}), (0, l.jsx)(Q.SS, {})]
								}, e.address) : null
							}), !d && (0, l.jsxs)(Q.Ob, {
								children: [(0, l.jsx)(Q.Eh, {
									onClick: function() {
										v(1 === j ? j : j - 1)
									},
									children: (0, l.jsx)(Y.Z, {
										color: 1 === j ? "textDisabled" : "primary"
									})
								}), (0, l.jsx)(z.Z, {
									children: y("Page %page% of %maxPage%", {
										page: j,
										maxPage: A
									})
								}), (0, l.jsx)(Q.Eh, {
									onClick: function() {
										v(j === A ? j : j + 1)
									},
									children: (0, l.jsx)(R.Z, {
										color: j === A ? "textDisabled" : "primary"
									})
								})]
							})]
						}) : (0, l.jsxs)(l.Fragment, {
							children: [(0, l.jsx)(el, {}), (0, l.jsx)(W.ZP, {})]
						})]
					}) : (0, l.jsx)(B.Z, {})
				};

			function eh() {
				var e = (0, U.Z)(["\n  padding-top: 10px;\n  ", " {\n    width: 725px;\n    padding: 24px;\n    box-sizing: border-box;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: 32px;\n  }\n"]);
				return eh = function() {
					return e
				}, e
			}

			function ex() {
				var e = (0, U.Z)(["\n  padding: 0px 24px 12px;\n  ", " {\n    margin-bottom: 24px;\n  }\n"]);
				return ex = function() {
					return e
				}, e
			}
			var ef = F.ZP.div.withConfig({
					componentId: "sc-5b6bc09e-0"
				})(eh(), function(e) {
					return e.theme.mediaQueries.lg
				}, function(e) {
					return e.theme.isDark ? "rgba(39, 38, 44, 0.5)" : "rgba(255, 255, 255, 0.5)"
				}, function(e) {
					return e.theme.colors.cardBorder
				}),
				eg = F.ZP.div.withConfig({
					componentId: "sc-5b6bc09e-1"
				})(ex(), function(e) {
					return e.theme.mediaQueries.lg
				}),
				ey = (0, b.memo)(function() {
					var e = (0, v.Dv)(N.Ti)[D.gi].current,
						n = (0, b.useMemo)(function() {
							return e ? e.tokens.map(function(e) {
								return e.address.toLowerCase()
							}) : []
						}, [e]),
						t = (0, L.ZF)(n, !1),
						r = (0, m.Z)((0, b.useState)(0), 2),
						i = r[0],
						o = r[1],
						a = (0, x.Z)().isMobile,
						s = (0, b.useMemo)(function() {
							return t.filter(function(e) {
								return 0 !== e.priceUSD && 0 !== e.priceUSDChange && 0 !== e.volumeUSD
							})
						}, [t]),
						u = (0, h.$G)().t;
					return (0, l.jsxs)(ef, {
						children: [(0, l.jsx)(eg, {
							children: (0, l.jsxs)(E.Z, {
								activeIndex: i,
								onItemClick: o,
								fullWidth: !0,
								scale: "sm",
								variant: "subtle",
								children: [(0, l.jsx)(k.Z, {
									children: u("Price Change")
								}), (0, l.jsx)(k.Z, {
									children: u("Volume (24H)")
								})]
							})
						}), 0 === i ? (0, l.jsx)(em, {
							tokenDatas: s,
							type: "priceChange",
							defaultSortField: "priceUSDChange",
							maxItems: a ? 100 : 6
						}) : (0, l.jsx)(em, {
							tokenDatas: s,
							type: "volume",
							defaultSortField: "volumeUSD",
							maxItems: a ? 100 : 6
						})]
					})
				}),
				eT = t(90902),
				ej = t(97869),
				eb = t(41829),
				ev = t(83995),
				eC = t(88428),
				eA = t(97872),
				ew = t(60493),
				eZ = t(90327),
				eS = t(97628),
				eI = t(4581),
				eP = t(72848),
				eU = t(77526),
				eE = t(18663),
				ek = t(24219),
				eN = t(92085),
				eD = t(21175),
				eL = t(65597),
				eF = t(70147),
				eO = t(98788),
				eM = t(5163),
				e_ = t(9758),
				eB = t(46267),
				ez = t(37346),
				eX = t(56521),
				eY = t(25571);
			(r = s || (s = {}))[r.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", r[r.WRAP = 1] = "WRAP", r[r.UNWRAP = 2] = "UNWRAP";
			var eR = {
					wrapType: s.NOT_APPLICABLE
				},
				eW = t(38497),
				eG = t(64184),
				eH = t(63151),
				eV = t(51147);

			function e$() {
				var e = (0, U.Z)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]);
				return e$ = function() {
					return e
				}, e
			}

			function eq() {
				var e = (0, U.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"]);
				return eq = function() {
					return e
				}, e
			}

			function eK() {
				var e = (0, U.Z)(["\n  flex: 1;\n  padding: 1rem;\n"]);
				return eK = function() {
					return e
				}, e
			}

			function eQ() {
				var e = (0, U.Z)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
				return eQ = function() {
					return e
				}, e
			}
			var eJ = F.ZP.div.withConfig({
					componentId: "sc-55002117-0"
				})(e$(), function(e) {
					return e.theme.colors.backgroundAlt
				}),
				e0 = F.ZP.div.withConfig({
					componentId: "sc-55002117-1"
				})(eq(), function(e) {
					var n = e.error,
						t = e.theme;
					return n ? t.colors.failure : t.colors.background
				}, function(e) {
					return e.error ? "step-end" : "step-start"
				}, function(e) {
					return e.error ? "step-end" : "step-start"
				}, function(e) {
					return e.theme.colors.backgroundAlt
				}),
				e1 = F.ZP.div.withConfig({
					componentId: "sc-55002117-2"
				})(eK()),
				e2 = F.ZP.input.withConfig({
					componentId: "sc-55002117-3"
				})(eQ(), function(e) {
					return e.theme.colors.backgroundAlt
				}, function(e) {
					return e.error ? "step-end" : "step-start"
				}, function(e) {
					var n = e.error,
						t = e.theme;
					return n ? t.colors.failure : t.colors.primary
				}, function(e) {
					return e.theme.colors.textDisabled
				}, function(e) {
					return e.theme.colors.textDisabled
				});

			function e9(e) {
				var n = e.id,
					t = e.value,
					r = e.onChange,
					i = (0, H.g)().chainId,
					o = (0, h.$G)().t,
					a = (0, eV.UJ)(t) ? t : void 0,
					s = (0, b.useCallback)(function(e) {
						r(e.target.value.replace(/\s+/g, ""))
					}, [r]),
					u = Boolean(t.length > 0 && !a);
				return (0, l.jsx)(eJ, {
					id: n,
					children: (0, l.jsx)(e0, {
						error: u,
						children: (0, l.jsx)(e1, {
							children: (0, l.jsxs)(eN.Tz, {
								gap: "md",
								children: [(0, l.jsxs)(eD.m0, {
									children: [(0, l.jsx)(z.Z, {
										children: o("Recipient")
									}), a && i && (0, l.jsxs)(eH.Z, {
										external: !0,
										small: !0,
										href: (0, eV.C)(a, "address", i),
										children: ["(", o("View on %site%", {
											site: (0, eV.X0)(i)
										}), ")"]
									})]
								}), (0, l.jsx)(e2, {
									className: "recipient-address-input",
									type: "text",
									autoComplete: "off",
									autoCorrect: "off",
									autoCapitalize: "off",
									spellCheck: "false",
									placeholder: o("Wallet Address"),
									error: u,
									pattern: "^(0x[a-fA-F0-9]{40})$",
									onChange: s,
									value: t
								})]
							})
						})
					})
				})
			}
			var e5 = t(70865),
				e6 = t(96670),
				e4 = t(26297);

			function e3(e) {
				return null != e
			}
			var e7 = function(e) {
					var n, t, r;
					return t = (n = (0, m.Z)((0, b.useState)(function() {
						return e3 && e3(e) ? e : void 0
					}), 2))[0], r = n[1], (0, b.useEffect)(function() {
						r(function(n) {
							return !e3 || e3(e) ? e : n
						})
					}, [e3, e]), t
				},
				e8 = t(92666),
				ne = t(3098),
				nn = t(26390),
				nt = t(19022),
				nr = t(63445),
				ni = t(27209);

			function no(e) {
				var n = e.priceImpact;
				return (0, l.jsx)(ni.y, {
					fontSize: "14px",
					severity: (0, nt.oX)(n),
					children: n ? n.lessThan(nr.IS) ? "<0.01%" : "".concat(n.toFixed(2), "%") : "-"
				})
			}
			var na = t(30282),
				ns = t(8736),
				nu = t(25555);

			function nc() {
				var e = (0, U.Z)(["\n  position: relative;\n  flex-direction: column;\n  min-height: 450px;\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0%;\n    left: 50%;\n    width: 3px;\n    height: 100%;\n    border-left: 3px dotted ", ";\n    transform: translateX(-50%);\n    z-index: 1;\n  }\n\n  ", " {\n    min-width: 400px;\n    min-height: auto;\n    flex-direction: row;\n    &:before {\n      top: 50%;\n      left: 0;\n      width: 100%;\n      height: 3px;\n      border-left: none;\n      border-top: 3px dotted ", ";\n      transform: translateY(-50%);\n      z-index: 1;\n    }\n  }\n"]);
				return nc = function() {
					return e
				}, e
			}

			function nl() {
				var e = (0, U.Z)(["\n  position: relative;\n  border-radius: 50px;\n  display: flex;\n  flex-direction: column;\n  padding: 4px 8px;\n  background-color: ", ";\n  z-index: 2;\n  svg,\n  img {\n    &:first-child {\n      margin-bottom: 2px;\n      ", " {\n        margin-bottom: 0px;\n        margin-right: 2px;\n      }\n    }\n  }\n  &.isStableSwap {\n    background-color: ", ";\n  }\n  ", " {\n    flex-direction: row;\n  }\n"]);
				return nl = function() {
					return e
				}, e
			}

			function nd() {
				var e = (0, U.Z)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ", ";\n  position: absolute;\n  top: 50%;\n  left: calc(100% + 10px);\n  transform: translateY(-50%);\n  ", " {\n    left: 50%;\n    transform: translateX(-50%);\n    top: calc(100% + 3px);\n  }\n"]);
				return nd = function() {
					return e
				}, e
			}

			function np() {
				var e = (0, U.Z)(["\n  position: relative;\n  height: 48px;\n  width: 48px;\n  padding: 2px;\n  background: linear-gradient(180deg, #53dee9 0%, #7645d9 76.22%);\n  border-radius: 50%;\n  z-index: 2;\n"]);
				return np = function() {
					return e
				}, e
			}
			var nm = (0, F.ZP)(f.Z).withConfig({
					componentId: "sc-d7ace633-0"
				})(nc(), function(e) {
					return e.theme.colors.backgroundDisabled
				}, function(e) {
					return e.theme.mediaQueries.md
				}, function(e) {
					return e.theme.colors.backgroundDisabled
				}),
				nh = (0, F.ZP)(W.ZP).withConfig({
					componentId: "sc-d7ace633-1"
				})(nl(), function(e) {
					return e.theme.colors.backgroundDisabled
				}, function(e) {
					return e.theme.mediaQueries.md
				}, function(e) {
					return e.theme.colors.secondary
				}, function(e) {
					return e.theme.mediaQueries.md
				}),
				nx = F.ZP.div.withConfig({
					componentId: "sc-d7ace633-2"
				})(nd(), function(e) {
					return e.theme.colors.text
				}, function(e) {
					return e.theme.mediaQueries.md
				}),
				nf = F.ZP.div.withConfig({
					componentId: "sc-d7ace633-3"
				})(np()),
				ng = function(e) {
					var n = e.pairs,
						t = e.path,
						r = e.inputCurrency,
						i = e.outputCurrency,
						o = (0, h.$G)().t,
						a = (0, ns.Z)((0, l.jsx)(z.Z, {
							children: r.symbol
						}), {
							placement: "right"
						}),
						s = a.targetRef,
						u = a.tooltip,
						c = a.tooltipVisible,
						d = (0, ns.Z)((0, l.jsx)(z.Z, {
							children: i.symbol
						}), {
							placement: "right"
						}),
						p = d.targetRef,
						m = d.tooltip,
						x = d.tooltipVisible;
					return (0, l.jsxs)(nm, {
						justifyContent: "space-between",
						alignItems: "center",
						children: [(0, l.jsx)(nf, {
							ref: s,
							children: (0, l.jsx)(nu.Xw, {
								size: "44px",
								currency: r
							})
						}), c && u, n && t && n.map(function(e, a) {
							var s = (0, na.yO)(e);
							return (0, l.jsxs)(nh, {
								className: s && "isStableSwap",
								children: [(0, l.jsx)(nu.Xw, {
									size: "32px",
									currency: 0 === a ? r : t[a]
								}), (0, l.jsx)(nu.Xw, {
									size: "32px",
									currency: a === n.length - 1 ? i : t[a + 1]
								}), (0, l.jsx)(nx, {
									children: s ? o("StableSwap") : o("V2")
								})]
							}, "tradingPairIds".concat(s ? e.stableSwapAddress : e.liquidityToken.address))
						}), (0, l.jsx)(nf, {
							ref: p,
							children: (0, l.jsx)(nu.Xw, {
								size: "44px",
								currency: i
							})
						}), x && m]
					})
				},
				ny = t(75654),
				nT = t(3170),
				nj = (0, b.memo)(function(e) {
					var n = e.path;
					return (0, l.jsx)(f.Z, {
						flexWrap: "wrap",
						width: "100%",
						justifyContent: "flex-end",
						alignItems: "center",
						children: n.map(function(e, t) {
							var r = t === n.length - 1,
								i = e.isToken ? (0, nT.Bv)(e) : e;
							return (0, l.jsxs)(b.Fragment, {
								children: [(0, l.jsx)(f.Z, {
									alignItems: "end",
									children: (0, l.jsx)(z.Z, {
										fontSize: "14px",
										ml: "0.125rem",
										mr: "0.125rem",
										children: i.symbol
									})
								}), !r && (0, l.jsx)(ny.Z, {
									width: "12px"
								})]
							}, e.isToken ? e.address : "")
						})
					})
				});

			function nb(e) {
				var n, t, r, i, o = e.inputAmount,
					a = e.outputAmount,
					s = e.tradeType,
					u = e.slippageAdjustedAmounts,
					c = e.priceImpactWithoutFee,
					d = e.realizedLPFee,
					p = e.hasStablePair,
					m = void 0 !== p && p,
					x = (0, h.$G)().t,
					f = s === eT.YL.EXACT_INPUT,
					g = "".concat((100 * nn.om).toFixed(2), "%"),
					y = "".concat((100 * nn.BY).toFixed(2), "%"),
					T = "".concat((100 * nn.hT).toFixed(4), "%"),
					j = "".concat((100 * nn.xy).toFixed(4), "%");
				return (0, l.jsxs)(eN.Tz, {
					style: {
						padding: "0 16px"
					},
					children: [(0, l.jsxs)(eD.m0, {
						children: [(0, l.jsxs)(eD.DA, {
							children: [(0, l.jsx)(z.Z, {
								fontSize: "14px",
								color: "textSubtle",
								children: x(f ? "Minimum received" : "Maximum sold")
							}), (0, l.jsx)(e8.s, {
								text: x("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
								ml: "4px",
								placement: "top-start"
							})]
						}), (0, l.jsx)(eD.DA, {
							children: (0, l.jsx)(z.Z, {
								fontSize: "14px",
								children: f ? null !== (r = "".concat(null === (n = u[Z.gN.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4), " ").concat(a.currency.symbol)) && void 0 !== r ? r : "-" : null !== (i = "".concat(null === (t = u[Z.gN.INPUT]) || void 0 === t ? void 0 : t.toSignificant(4), " ").concat(o.currency.symbol)) && void 0 !== i ? i : "-"
							})
						})]
					}), c && (0, l.jsxs)(eD.m0, {
						children: [(0, l.jsxs)(eD.DA, {
							children: [(0, l.jsx)(z.Z, {
								fontSize: "14px",
								color: "textSubtle",
								children: x("Price Impact")
							}), (0, l.jsx)(e8.s, {
								text: x("The difference between the market price and estimated price due to trade size."),
								ml: "4px",
								placement: "top-start"
							})]
						}), (0, l.jsx)(no, {
							priceImpact: c
						})]
					}), d && (0, l.jsxs)(eD.m0, {
						children: [(0, l.jsxs)(eD.DA, {
							children: [(0, l.jsx)(z.Z, {
								fontSize: "14px",
								color: "textSubtle",
								children: x("Liquidity Provider Fee")
							}), (0, l.jsx)(e8.s, {
								text: (0, l.jsxs)(l.Fragment, {
									children: [(0, l.jsx)(z.Z, {
										mb: "12px",
										color: "#fff",
										fontSize: "12px",
										children: x(m ? "For each non-stableswap trade, a %amount% fee is paid" : "For each trade a %amount% fee is paid", {
											amount: g
										})
									}), (0, l.jsxs)(z.Z, {
										color: "#fff",
										fontSize: "12px",
										children: ["- ", x("%amount% to LP token holders", {
											amount: y
										})]
									}), (0, l.jsxs)(z.Z, {
										color: "#fff",
										fontSize: "12px",
										children: ["- ", x("%amount% to the Treasury", {
											amount: T
										})]
									}), (0, l.jsxs)(z.Z, {
										color: "#fff",
										fontSize: "12px",
										children: ["- ", x("%amount% towards Alien buyback and burn", {
											amount: j
										})]
									}), m && (0, l.jsx)(l.Fragment, {
										children: (0, l.jsxs)(z.Z, {
											mt: "12px",
											children: [x("For each stableswap trade, refer to the fee table"), (0, l.jsx)(eH.Z, {
												style: {
													display: "inline"
												},
												ml: "4px",
												external: !0,
												href: "https://docs.pancakeswap.finance/products/stableswap#stableswap-fees",
												children: x("here.")
											})]
										})
									})]
								}),
								ml: "4px",
								placement: "top-start"
							})]
						}), (0, l.jsx)(z.Z, {
							fontSize: "14px",
							children: "".concat(d.toSignificant(4), " ").concat(o.currency.symbol)
						})]
					})]
				})
			}

			function nv(e) {
				var n = e.pairs,
					t = e.path,
					r = e.priceImpactWithoutFee,
					i = e.realizedLPFee,
					o = e.slippageAdjustedAmounts,
					a = e.inputAmount,
					s = e.outputAmount,
					u = e.tradeType,
					c = e.hasStablePair,
					d = (0, h.$G)().t,
					p = (0, m.Z)((0, b.useState)(function() {
						return !1
					}), 2),
					x = p[0],
					g = p[1],
					j = Boolean(t && t.length > 1);
				return (0, l.jsx)(eN.Tz, {
					gap: "0px",
					children: a && (0, l.jsxs)(l.Fragment, {
						children: [(0, l.jsx)(nb, {
							inputAmount: a,
							outputAmount: s,
							tradeType: u,
							slippageAdjustedAmounts: o,
							priceImpactWithoutFee: r,
							realizedLPFee: i,
							hasStablePair: c
						}), j && (0, l.jsx)(l.Fragment, {
							children: (0, l.jsxs)(eD.m0, {
								style: {
									padding: "0 16px"
								},
								children: [(0, l.jsxs)("span", {
									style: {
										display: "flex",
										alignItems: "center"
									},
									children: [(0, l.jsx)(z.Z, {
										fontSize: "14px",
										color: "textSubtle",
										children: d("Route")
									}), (0, l.jsx)(e8.s, {
										text: d("Routing through these tokens resulted in the best price for your trade."),
										ml: "4px",
										placement: "top-start"
									})]
								}), (0, l.jsx)(nj, {
									path: t
								}), (0, l.jsx)(ne.Z, {
									style: {
										cursor: "pointer"
									},
									onClick: function() {
										return g(!0)
									}
								}), (0, l.jsx)(y.k, {
									closeOnOverlayClick: !0,
									isOpen: x,
									onDismiss: function() {
										return g(!1)
									},
									children: (0, l.jsx)(T.ZP, {
										title: (0, l.jsxs)(f.Z, {
											justifyContent: "center",
											children: [d("Route"), " ", (0, l.jsx)(e8.s, {
												text: d("Routing through these tokens resulted in the best price for your trade."),
												ml: "4px",
												placement: "top-start"
											})]
										}),
										onDismiss: function() {
											return g(!1)
										},
										children: (0, l.jsx)(ng, {
											inputCurrency: a.currency,
											pairs: n,
											path: t,
											outputCurrency: s.currency
										})
									})
								})]
							})
						})]
					})
				})
			}

			function nC() {
				var e = (0, U.Z)(["\n  margin-top: ", ";\n  margin: ", ";\n\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 90%;\n  max-width: 400px;\n  // border-radius: 20px;\n  background-color: #ffffff;\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"]);
				return nC = function() {
					return e
				}, e
			}
			var nA = F.ZP.div.withConfig({
				componentId: "sc-998cfd94-0"
			})(nC(), function(e) {
				return e.show ? "16px" : 0
			}, function(e) {
				return e.show ? "16px" : 0
			}, function(e) {
				return e.show ? "translateY(0%)" : "translateY(-100%)"
			});

			function nw(e) {
				var n, t, r, i, o, a, s, u, c = e.pairs,
					d = e.path,
					p = e.priceImpactWithoutFee,
					m = e.realizedLPFee,
					h = e.slippageAdjustedAmounts,
					x = e.inputAmount,
					f = e.outputAmount,
					g = e.tradeType,
					y = (0, e4.Z)(e, ["pairs", "path", "priceImpactWithoutFee", "realizedLPFee", "slippageAdjustedAmounts", "inputAmount", "outputAmount", "tradeType"]),
					T = e7((0, b.useMemo)(function() {
						return {
							pairs: c,
							path: d,
							priceImpactWithoutFee: p,
							realizedLPFee: m,
							slippageAdjustedAmounts: h,
							inputAmount: x,
							outputAmount: f,
							tradeType: g
						}
					}, [c, d, p, m, h, x, f, g]));
				return (0, l.jsx)(nA, {
					show: Boolean(x && f),
					children: (0, l.jsx)(nv, (0, e6.Z)((0, e5.Z)({}, y), {
						pairs: null !== (n = null != c ? c : T.pairs) && void 0 !== n ? n : void 0,
						path: null !== (t = null != d ? d : T.path) && void 0 !== t ? t : void 0,
						priceImpactWithoutFee: null !== (r = null != p ? p : T.priceImpactWithoutFee) && void 0 !== r ? r : void 0,
						realizedLPFee: null !== (i = null != m ? m : T.realizedLPFee) && void 0 !== i ? i : void 0,
						slippageAdjustedAmounts: null !== (o = null != h ? h : T.slippageAdjustedAmounts) && void 0 !== o ? o : void 0,
						inputAmount: null !== (a = null != x ? x : T.inputAmount) && void 0 !== a ? a : void 0,
						outputAmount: null !== (s = null != f ? f : T.outputAmount) && void 0 !== s ? s : void 0,
						tradeType: null !== (u = null != g ? g : T.tradeType) && void 0 !== u ? u : void 0
					}))
				})
			}
			var nZ = t(89317),
				nS = t(49246),
				nI = t(213),
				nP = t(75777),
				nU = t(83712),
				nE = t(17147),
				nk = t(90891),
				nN = t(73710),
				nD = t(17136),
				nL = t(54793),
				nF = t(39017),
				nO = function(e) {
					return (0, l.jsxs)(nF.Z, (0, e6.Z)((0, e5.Z)({
						id: "arrow_loading",
						viewBox: "0 0 24 24"
					}, e), {
						children: [(0, l.jsx)("path", {
							stroke: "none",
							fill: "#D7CAEC",
							d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
						}), (0, l.jsxs)("defs", {
							children: [(0, l.jsx)("path", {
								id: "arrow",
								stroke: "none",
								fill: "none",
								d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
							}), (0, l.jsx)("clipPath", {
								id: "arrow-clip",
								children: (0, l.jsx)("use", {
									xlinkHref: "#arrow"
								})
							})]
						})]
					}))
				},
				nM = function(e) {
					var n = e.disabled,
						t = (0, e4.Z)(e, ["disabled"]);
					return n ? (0, l.jsx)(nO, (0, e5.Z)({}, t)) : (0, l.jsxs)(nF.Z, (0, e6.Z)((0, e5.Z)({
						id: "arrow_loading",
						viewBox: "0 0 24 24"
					}, t), {
						children: [(0, l.jsx)("path", {
							stroke: "none",
							fill: "#7A6EAA",
							d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
						}), (0, l.jsxs)("defs", {
							children: [(0, l.jsx)("path", {
								id: "arrow",
								stroke: "none",
								fill: "none",
								d: "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
							}), (0, l.jsx)("clipPath", {
								id: "arrow-clip",
								children: (0, l.jsx)("use", {
									xlinkHref: "#arrow"
								})
							})]
						}), (0, l.jsx)("g", {
							clipPath: "url(#arrow-clip)",
							children: (0, l.jsx)("circle", {
								cx: "12",
								cy: "12",
								r: "5",
								transform: "rotate(365,12,12)",
								fill: "none",
								stroke: "#D7CAEC",
								strokeWidth: "16",
								strokeDasharray: "30",
								strokeDashoffset: "0",
								children: (0, l.jsx)("animate", {
									attributeName: "stroke-dashoffset",
									values: "0;-30",
									begin: "arrow_loading.click; 0.7s",
									repeatCount: "indefinite",
									dur: "6.3s"
								})
							})
						}), (0, l.jsx)("use", {
							xlinkHref: "#arrow"
						}), (0, l.jsx)("animateTransform", {
							id: "transform_0",
							attributeName: "transform",
							attributeType: "XML",
							type: "rotate",
							from: "0 0 0",
							to: "-10 0 0",
							dur: "0.07s",
							begin: "arrow_loading.click;",
							repeatCount: "1"
						}), (0, l.jsx)("animateTransform", {
							id: "transform_1",
							attributeName: "transform",
							attributeType: "XML",
							type: "rotate",
							from: "-45 0 0",
							to: "390 0 0",
							dur: "0.6s",
							begin: "transform_0.end",
							repeatCount: "1"
						}), (0, l.jsx)("animateTransform", {
							id: "transform_2",
							attributeName: "transform",
							attributeType: "XML",
							type: "rotate",
							from: "390 0 0",
							to: "360 0 0",
							dur: "0.15s",
							begin: "transform_1.end",
							repeatCount: "1"
						})]
					}))
				},
				n_ = t(44239),
				nB = (0, b.createContext)({
					isChartSupported: !1,
					isStableSupported: !1,
					isAccessTokenSupported: !1,
					isChartExpanded: !1,
					isChartDisplayed: !1,
					setIsChartExpanded: null,
					setIsChartDisplayed: null
				}),
				nz = [],
				nX = [eT.a_.ARBITRUM],
				nY = [eT.a_.BSC_TESTNET, eT.a_.BSC],
				nR = function(e) {
					var n = e.children,
						t = (0, x.Z)().isMobile,
						r = (0, H.g)().chainId,
						i = (0, m.Z)((0, eW.vD)(t), 2),
						o = i[0],
						a = i[1],
						s = (0, m.Z)((0, b.useState)(o), 2),
						u = s[0],
						c = s[1],
						d = (0, m.Z)((0, b.useState)(!1), 2),
						p = d[0],
						h = d[1],
						f = (0, b.useMemo)(function() {
							return !r || nz.includes(r)
						}, [r]),
						g = (0, b.useMemo)(function() {
							return !r || nY.includes(r)
						}, [r]),
						y = (0, b.useMemo)(function() {
							return nX.includes(r)
						}, [r]);
					(0, b.useEffect)(function() {
						a(u)
					}, [u, a]);
					var T = (0, b.useMemo)(function() {
						return {
							isChartSupported: f,
							isStableSupported: g,
							isAccessTokenSupported: y,
							isChartDisplayed: u,
							setIsChartDisplayed: c,
							isChartExpanded: p,
							setIsChartExpanded: h
						}
					}, [f, g, y, u, c, p, h]);
					return (0, l.jsx)(nB.Provider, {
						value: T,
						children: n
					})
				};

			function nW() {
				var e = (0, U.Z)(["\n  color: ", ";\n"]);
				return nW = function() {
					return e
				}, e
			}
			var nG = (0, F.ZP)(nZ.Z).withConfig({
					componentId: "sc-260b998e-0"
				})(nW(), function(e) {
					return e.theme.colors.textSubtle
				}),
				nH = function(e) {
					var n = e.subtitle,
						t = e.hasAmount,
						r = e.onRefreshPrice,
						i = e.title,
						i2= e.title2,
						o = (0, b.useContext)(nB),
						a = o.isChartSupported,
						s = o.isChartDisplayed,
						u = o.setIsChartDisplayed,
						c = (0, m.Z)((0, eW.DG)(), 1)[0],
						d = function() {
							u(function(e) {
								return !e
							})
						},
						p = (0, m.Z)((0, nS.Z)((0, l.jsx)(nD.Z, {})), 1)[0],
						h = (0, b.useCallback)(function() {
							return null == r ? void 0 : r()
						}, [r]),
						x = (0, m.Z)(A(), 2),
						g = x[0],
						y = x[1];
					return (0, l.jsx)(ej.H.CurrencyInputHeader, {
						title: (0, l.jsxs)(f.Z, {
							width: "100%",
							alignItems: "center",
							justifyContent: "space-between",
							flexDirection: "column",
     children: [
                (0, l.jsxs)(f.Z, {
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: 15,
                    children: [
                        (0, l.jsx)(ej.H.CurrencyInputHeaderTitle, {
                            children: i
                        }),
                        (0, l.jsx)("a", {
                            href: "https://example.com",
                            style: {marginTop:"10px", color:"yellow"},
                            children: "(Click here to swap other tokens)"
                        })
                    ]
                }), (0, l.jsx)(f.Z, {
								justifyContent: "center",
								width: "100%",
								height: "17px",
								alignItems: "center",
								mb: "14px",
								children: (0, l.jsx)(ej.H.CurrencyInputHeaderSubTitle, {
									children: n
								})
							}), (0, l.jsxs)(f.Z, {
								width: "100%",
								justifyContent: "end",
								children: [a && u && (0, l.jsx)(nG, {
									onClick: function() {
										!s && g && y(!1), d()
									},
									variant: "text",
									scale: "sm",
									children: s ? (0, l.jsx)(nI.Z, {
										color: "textSubtle"
									}) : (0, l.jsx)(nP.Z, {
										width: "24px",
										color: "textSubtle"
									})
								}), a && (0, l.jsx)(nG, {
									variant: "text",
									scale: "sm",
									onClick: function() {
										!g && s && d(), y(!g)
									},
									children: g ? (0, l.jsx)(nU.Z, {
										color: "textSubtle",
										width: "24px"
									}) : (0, l.jsx)(nE.Z, {
										color: "textSubtle",
										width: "24px"
									})
								}), (0, l.jsx)(nk.Z, {
									show: c,
									children: (0, l.jsx)(nL.Z, {
										color: "textSubtle",
										mr: "0",
										mode: n_.a.SWAP_LIQUIDITY
									})
								}), (0, l.jsx)(nZ.Z, {
									onClick: p,
									variant: "text",
									scale: "sm",
									children: (0, l.jsx)(nN.Z, {
										color: "textSubtle",
										width: "24px"
									})
								}), (0, l.jsx)(nZ.Z, {
									variant: "text",
									scale: "sm",
									onClick: h,
									children: (0, l.jsx)(nM, {
										disabled: !t,
										color: "textSubtle",
										width: "27px"
									})
								})]
							})]
						}),
						subtitle: (0, l.jsx)(l.Fragment, {})
					})
				},
				nV = t(52054),
				n$ = t(61220),
				nq = t(95457),
				nK = t(80703),
				nQ = t(15432),
				nJ = t(76631),
				n0 = t(86891),
				n1 = t(87176),
				n2 = t(91287),
				n9 = t(34389);

			function n5() {
				var e = (0, U.Z)(["\n  width: 100%;\n"]);
				return n5 = function() {
					return e
				}, e
			}

			function n6() {
				var e = (0, U.Z)(["\n  padding: 24px 0;\n"]);
				return n6 = function() {
					return e
				}, e
			}
			var n4 = F.ZP.div.withConfig({
					componentId: "sc-a6bc6db7-0"
				})(n5()),
				n3 = (0, F.ZP)(eN.lg).withConfig({
					componentId: "sc-a6bc6db7-1"
				})(n6()),
				n7 = function(e) {
					var n, t, r, i, o, a, s = e.inputAmount,
						u = e.outputAmount,
						c = (0, h.$G)().t,
						d = c("Swapping %amountA% %symbolA% for %amountB% %symbolB%", {
							amountA: null !== (r = null == s ? void 0 : s.toSignificant(6)) && void 0 !== r ? r : "",
							symbolA: null !== (i = null == s ? void 0 : null === (n = s.currency) || void 0 === n ? void 0 : n.symbol) && void 0 !== i ? i : "",
							amountB: null !== (o = null == u ? void 0 : u.toSignificant(6)) && void 0 !== o ? o : "",
							symbolB: null !== (a = null == u ? void 0 : null === (t = u.currency) || void 0 === t ? void 0 : t.symbol) && void 0 !== a ? a : ""
						});
					return (0, l.jsxs)(n4, {
						children: [(0, l.jsx)(n3, {
							children: (0, l.jsx)(n9.Z, {})
						}), (0, l.jsxs)(eN.Tz, {
							gap: "12px",
							justify: "center",
							children: [(0, l.jsx)(z.Z, {
								fontSize: "20px",
								children: c("Waiting For Confirmation")
							}), (0, l.jsx)(eN.Tz, {
								gap: "12px",
								justify: "center",
								children: (0, l.jsx)(z.Z, {
									bold: !0,
									small: !0,
									textAlign: "center",
									children: d
								})
							}), (0, l.jsx)(z.Z, {
								small: !0,
								color: "textSubtle",
								textAlign: "center",
								children: c("Confirm this transaction in your wallet")
							})]
						})]
					})
				},
				n8 = t(95620);

			function te() {
				var e = (0, U.Z)(["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
				return te = function() {
					return e
				}, e
			}
			var tn = (0, F.ZP)(eN.Tz).withConfig({
				componentId: "sc-3eda6de0-0"
			})(te(), function(e) {
				return e.theme.radii.default
			}, function(e) {
				return e.theme.colors.cardBorder
			}, function(e) {
				return e.theme.colors.background
			});

			function tt(e) {
				var n, t, r, i, o = e.trade,
					a = e.slippageAdjustedAmounts,
					s = e.isEnoughInputBalance,
					u = e.onConfirm,
					c = e.swapErrorMessage,
					d = e.disabledConfirm,
					p = (0, h.$G)().t,
					x = (0, m.Z)((0, b.useState)(!1), 2),
					f = x[0],
					g = x[1],
					y = (0, b.useMemo)(function() {
						return (0, nt.U7)(o)
					}, [o]),
					T = y.priceImpactWithoutFee,
					j = y.realizedLPFee,
					v = (0, nt.oX)(T),
					C = "".concat((100 * nn.om).toFixed(2), "%"),
					A = "".concat((100 * nn.BY).toFixed(2), "%"),
					w = "".concat((100 * nn.hT).toFixed(4), "%"),
					S = "".concat((100 * nn.xy).toFixed(4), "%");
				return (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)(tn, {
						children: [(0, l.jsxs)(eD.m0, {
							align: "center",
							children: [(0, l.jsx)(z.Z, {
								fontSize: "14px",
								children: p("Price")
							}), (0, l.jsxs)(z.Z, {
								fontSize: "14px",
								style: {
									justifyContent: "center",
									alignItems: "center",
									display: "flex",
									textAlign: "right",
									paddingLeft: "10px"
								},
								children: [(0, nt.Kh)(o, f), (0, l.jsx)(ni.k0, {
									onClick: function() {
										return g(!f)
									},
									children: (0, l.jsx)(n8.Z, {
										width: "14px"
									})
								})]
							})]
						}), (0, l.jsxs)(eD.m0, {
							children: [(0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(z.Z, {
									fontSize: "14px",
									children: p(o.tradeType === eT.YL.EXACT_INPUT ? "Minimum received" : "Maximum sold")
								}), (0, l.jsx)(e8.s, {
									text: p("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
									ml: "4px"
								})]
							}), (0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(z.Z, {
									fontSize: "14px",
									children: o.tradeType === eT.YL.EXACT_INPUT ? null !== (r = null === (n = a[Z.gN.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4)) && void 0 !== r ? r : "-" : null !== (i = null === (t = a[Z.gN.INPUT]) || void 0 === t ? void 0 : t.toSignificant(4)) && void 0 !== i ? i : "-"
								}), (0, l.jsx)(z.Z, {
									fontSize: "14px",
									marginLeft: "4px",
									children: o.tradeType === eT.YL.EXACT_INPUT ? o.outputAmount.currency.symbol : o.inputAmount.currency.symbol
								})]
							})]
						}), (0, l.jsxs)(eD.m0, {
							children: [(0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(z.Z, {
									fontSize: "14px",
									children: p("Price Impact")
								}), (0, l.jsx)(e8.s, {
									text: p("The difference between the market price and your price due to trade size."),
									ml: "4px"
								})]
							}), (0, l.jsx)(no, {
								priceImpact: T
							})]
						}), (0, l.jsxs)(eD.m0, {
							children: [(0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(z.Z, {
									fontSize: "14px",
									children: p("Liquidity Provider Fee")
								}), (0, l.jsx)(e8.s, {
									text: (0, l.jsxs)(l.Fragment, {
										children: [(0, l.jsx)(z.Z, {
											color: "#fff",
											fontSize: "14px",
											mb: "12px",
											children: p("For each trade a %amount% fee is paid", {
												amount: C
											})
										}), (0, l.jsxs)(z.Z, {
											color: "#fff",
											fontSize: "14px",
											children: ["- ", p("%amount% to LP token holders", {
												amount: A
											})]
										}), (0, l.jsxs)(z.Z, {
											color: "#fff",
											fontSize: "14px",
											children: ["- ", p("%amount% to the Treasury", {
												amount: w
											})]
										}), (0, l.jsxs)(z.Z, {
											color: "#fff",
											fontSize: "14px",
											children: ["- ", p("%amount% towards Alien buyback and burn", {
												amount: S
											})]
										})]
									}),
									ml: "4px"
								})]
							}), (0, l.jsx)(z.Z, {
								fontSize: "14px",
								children: j ? "".concat(null == j ? void 0 : j.toSignificant(6), " ").concat(o.inputAmount.currency.symbol) : "-"
							})]
						})]
					}), (0, l.jsxs)(eD.BA, {
						children: [(0, l.jsx)(_.Z, {
							variant: v > 2 ? "danger" : "primary",
							onClick: u,
							disabled: d,
							mt: "12px",
							id: "confirm-swap-or-send",
							width: "100%",
							children: p(v > 2 || o.tradeType === eT.YL.EXACT_OUTPUT && !s ? "Swap Anyway" : "Confirm Swap")
						}), c ? (0, l.jsx)(ni.rn, {
							error: c
						}) : null]
					})]
				})
			}
			var tr = t(62649),
				ti = t(44203);

			function to(e) {
				var n, t, r = e.trade,
					i = e.slippageAdjustedAmounts,
					o = e.isEnoughInputBalance,
					a = e.recipient,
					s = e.showAcceptChanges,
					u = e.onAcceptChanges,
					c = e.allowedSlippage,
					d = (0, h.$G)().t,
					p = (0, b.useMemo)(function() {
						return (0, nt.U7)(r)
					}, [r]).priceImpactWithoutFee,
					x = (0, nt.oX)(p),
					f = s && r.tradeType === eT.YL.EXACT_OUTPUT && o ? "primary" : r.tradeType !== eT.YL.EXACT_OUTPUT || o ? "text" : "failure",
					g = r.tradeType === eT.YL.EXACT_INPUT ? null === (n = i[Z.gN.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(6) : null === (t = i[Z.gN.INPUT]) || void 0 === t ? void 0 : t.toSignificant(6),
					y = r.tradeType === eT.YL.EXACT_INPUT ? r.outputAmount.currency.symbol : r.inputAmount.currency.symbol,
					T = d(r.tradeType === eT.YL.EXACT_INPUT ? "Output is estimated. You will receive at least or the transaction will revert." : "Input is estimated. You will sell at most or the transaction will revert."),
					j = (0, m.Z)(T.split("".concat(g, " ").concat(y)), 2),
					v = j[0],
					C = j[1],
					A = a ? (0, ti.Z)(a) : "",
					w = d("Output will be sent to %recipient%", {
						recipient: A
					}),
					S = (0, m.Z)(w.split(A), 2),
					I = S[0],
					P = S[1];
				return (0, l.jsxs)(eN.Tz, {
					gap: "md",
					children: [(0, l.jsxs)(eD.m0, {
						align: "flex-end",
						children: [(0, l.jsxs)(eD.DA, {
							gap: "4px",
							children: [(0, l.jsx)(nu.Xw, {
								currency: r.inputAmount.currency,
								size: "24px",
								style: {
									marginRight: "12px"
								}
							}), (0, l.jsx)(ni.Ld, {
								fontSize: "24px",
								color: f,
								children: r.inputAmount.toSignificant(6)
							})]
						}), (0, l.jsx)(eD.DA, {
							gap: "0px",
							children: (0, l.jsx)(z.Z, {
								fontSize: "24px",
								ml: "10px",
								children: r.inputAmount.currency.symbol
							})
						})]
					}), (0, l.jsx)(eD.DA, {
						children: (0, l.jsx)(eC.Z, {
							width: "16px",
							ml: "4px"
						})
					}), (0, l.jsxs)(eD.m0, {
						align: "flex-end",
						children: [(0, l.jsxs)(eD.DA, {
							gap: "4px",
							children: [(0, l.jsx)(nu.Xw, {
								currency: r.outputAmount.currency,
								size: "24px"
							}), (0, l.jsx)(ni.Ld, {
								fontSize: "24px",
								color: x > 2 ? "failure" : s && r.tradeType === eT.YL.EXACT_INPUT ? "primary" : "text",
								children: r.outputAmount.toSignificant(6)
							})]
						}), (0, l.jsx)(eD.DA, {
							children: (0, l.jsx)(z.Z, {
								fontSize: "24px",
								ml: "10px",
								children: r.outputAmount.currency.symbol
							})
						})]
					}), s ? (0, l.jsx)(ni.ly, {
						justify: "flex-start",
						gap: "0px",
						children: (0, l.jsxs)(eD.m0, {
							children: [(0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(tr.Z, {
									mr: "8px"
								}), (0, l.jsxs)(z.Z, {
									bold: !0,
									children: [" ", d("Price Updated")]
								})]
							}), (0, l.jsx)(_.Z, {
								onClick: u,
								children: d("Accept")
							})]
						})
					}) : null, (0, l.jsxs)(eN.Tz, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "24px 0 0 0px"
						},
						children: [(0, l.jsxs)(eD.DA, {
							style: {
								width: "100%"
							},
							children: [(0, l.jsx)(z.Z, {
								color: "secondary",
								bold: !0,
								textTransform: "uppercase",
								children: d("Slippage Tolerance")
							}), (0, l.jsx)(z.Z, {
								bold: !0,
								color: "primary",
								ml: "auto",
								textAlign: "end",
								children: "".concat(c / 100, "%")
							})]
						}), r.tradeType === eT.YL.EXACT_OUTPUT && !o && (0, l.jsx)(z.Z, {
							small: !0,
							color: "failure",
							textAlign: "left",
							style: {
								width: "100%"
							},
							children: d("Insufficient input token balance. Your transaction may fail.")
						}), (0, l.jsxs)(z.Z, {
							small: !0,
							color: "textSubtle",
							textAlign: "left",
							style: {
								width: "100%"
							},
							children: [v, C]
						})]
					}), null !== a ? (0, l.jsx)(eN.Tz, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "12px 0 0 0px"
						},
						children: (0, l.jsxs)(z.Z, {
							color: "textSubtle",
							children: [I, (0, l.jsx)("b", {
								title: a,
								children: A
							}), P]
						})
					}) : null]
				})
			}

			function ta(e) {
				var n, t, r = e.trade,
					i = e.slippageAdjustedAmounts,
					o = e.isEnoughInputBalance,
					a = e.recipient,
					s = e.showAcceptChanges,
					u = e.onAcceptChanges,
					c = e.allowedSlippage,
					d = (0, h.$G)().t,
					p = s && r.tradeType === eT.YL.EXACT_OUTPUT && o ? "primary" : r.tradeType !== eT.YL.EXACT_OUTPUT || o ? "text" : "failure",
					x = r.tradeType === eT.YL.EXACT_INPUT ? null === (n = i[Z.gN.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(6) : null === (t = i[Z.gN.INPUT]) || void 0 === t ? void 0 : t.toSignificant(6),
					f = r.tradeType === eT.YL.EXACT_INPUT ? r.outputAmount.currency.symbol : r.inputAmount.currency.symbol,
					g = d(r.tradeType === eT.YL.EXACT_INPUT ? "Output is estimated. You will receive at least or the transaction will revert." : "Input is estimated. You will sell at most or the transaction will revert."),
					y = (0, m.Z)(g.split("".concat(x, " ").concat(f)), 2),
					T = y[0],
					j = y[1],
					b = a ? (0, ti.Z)(a) : "",
					v = d("Output will be sent to %recipient%", {
						recipient: b
					}),
					C = (0, m.Z)(v.split(b), 2),
					A = C[0],
					w = C[1];
				return (0, l.jsxs)(eN.Tz, {
					gap: "md",
					children: [(0, l.jsxs)(eD.m0, {
						align: "flex-end",
						children: [(0, l.jsxs)(eD.DA, {
							gap: "4px",
							children: [(0, l.jsx)(nu.Xw, {
								currency: r.inputAmount.currency,
								size: "24px",
								style: {
									marginRight: "12px"
								}
							}), (0, l.jsx)(ni.Ld, {
								fontSize: "24px",
								color: p,
								children: r.inputAmount.toSignificant(6)
							})]
						}), (0, l.jsx)(eD.DA, {
							gap: "0px",
							children: (0, l.jsx)(z.Z, {
								fontSize: "24px",
								ml: "10px",
								children: r.inputAmount.currency.symbol
							})
						})]
					}), (0, l.jsx)(eD.DA, {
						children: (0, l.jsx)(eC.Z, {
							width: "16px",
							ml: "4px"
						})
					}), (0, l.jsxs)(eD.m0, {
						align: "flex-end",
						children: [(0, l.jsxs)(eD.DA, {
							gap: "4px",
							children: [(0, l.jsx)(nu.Xw, {
								currency: r.outputAmount.currency,
								size: "24px"
							}), (0, l.jsx)(ni.Ld, {
								fontSize: "24px",
								color: s && r.tradeType === eT.YL.EXACT_INPUT ? "primary" : "text",
								children: r.outputAmount.toSignificant(6)
							})]
						}), (0, l.jsx)(eD.DA, {
							children: (0, l.jsx)(z.Z, {
								fontSize: "24px",
								ml: "10px",
								children: r.outputAmount.currency.symbol
							})
						})]
					}), s ? (0, l.jsx)(ni.ly, {
						justify: "flex-start",
						gap: "0px",
						children: (0, l.jsxs)(eD.m0, {
							children: [(0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(tr.Z, {
									mr: "8px"
								}), (0, l.jsxs)(z.Z, {
									bold: !0,
									children: [" ", d("Price Updated")]
								})]
							}), (0, l.jsx)(_.Z, {
								onClick: u,
								children: d("Accept")
							})]
						})
					}) : null, (0, l.jsxs)(eN.Tz, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "24px 0 0 0px"
						},
						children: [(0, l.jsxs)(eD.DA, {
							style: {
								width: "100%"
							},
							children: [(0, l.jsx)(z.Z, {
								color: "secondary",
								bold: !0,
								textTransform: "uppercase",
								children: d("Slippage Tolerance")
							}), (0, l.jsx)(z.Z, {
								bold: !0,
								color: "primary",
								ml: "auto",
								textAlign: "end",
								children: "".concat((0, nt.P4)(c).toFixed(1), "%")
							})]
						}), r.tradeType === eT.YL.EXACT_OUTPUT && !o && (0, l.jsx)(z.Z, {
							small: !0,
							color: "failure",
							textAlign: "left",
							style: {
								width: "100%"
							},
							children: d("Insufficient input token balance. Your transaction may fail.")
						}), (0, l.jsxs)(z.Z, {
							small: !0,
							color: "textSubtle",
							textAlign: "left",
							style: {
								width: "100%"
							},
							children: [T, j]
						})]
					}), null !== a ? (0, l.jsx)(eN.Tz, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "12px 0 0 0px"
						},
						children: (0, l.jsxs)(z.Z, {
							color: "textSubtle",
							children: [A, (0, l.jsx)("b", {
								title: a,
								children: b
							}), w]
						})
					}) : null]
				})
			}

			function ts() {
				var e = (0, U.Z)(["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
				return ts = function() {
					return e
				}, e
			}
			var tu = (0, F.ZP)(eN.Tz).withConfig({
				componentId: "sc-526799a5-0"
			})(ts(), function(e) {
				return e.theme.radii.default
			}, function(e) {
				return e.theme.colors.cardBorder
			}, function(e) {
				return e.theme.colors.background
			});

			function tc(e) {
				var n, t, r, i, o = e.trade,
					a = e.slippageAdjustedAmounts,
					s = e.isEnoughInputBalance,
					u = e.onConfirm,
					c = e.swapErrorMessage,
					d = e.disabledConfirm,
					p = (0, h.$G)().t,
					x = (0, m.Z)((0, b.useState)(!1), 2),
					f = x[0],
					g = x[1];
				return (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)(tu, {
						children: [(0, l.jsxs)(eD.m0, {
							align: "center",
							children: [(0, l.jsx)(z.Z, {
								fontSize: "14px",
								children: p("Price")
							}), (0, l.jsxs)(z.Z, {
								fontSize: "14px",
								style: {
									justifyContent: "center",
									alignItems: "center",
									display: "flex",
									textAlign: "right",
									paddingLeft: "10px"
								},
								children: [(0, nt.Kh)(o, f), (0, l.jsx)(ni.k0, {
									onClick: function() {
										return g(!f)
									},
									children: (0, l.jsx)(n8.Z, {
										width: "14px"
									})
								})]
							})]
						}), (0, l.jsxs)(eD.m0, {
							children: [(0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(z.Z, {
									fontSize: "14px",
									children: p(o.tradeType === eT.YL.EXACT_INPUT ? "Minimum received" : "Maximum sold")
								}), (0, l.jsx)(e8.s, {
									text: p("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
									ml: "4px"
								})]
							}), (0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(z.Z, {
									fontSize: "14px",
									children: o.tradeType === eT.YL.EXACT_INPUT ? null !== (r = null === (n = a[Z.gN.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4)) && void 0 !== r ? r : "-" : null !== (i = null === (t = a[Z.gN.INPUT]) || void 0 === t ? void 0 : t.toSignificant(4)) && void 0 !== i ? i : "-"
								}), (0, l.jsx)(z.Z, {
									fontSize: "14px",
									marginLeft: "4px",
									children: o.tradeType === eT.YL.EXACT_INPUT ? o.outputAmount.currency.symbol : o.inputAmount.currency.symbol
								})]
							})]
						})]
					}), (0, l.jsxs)(eD.BA, {
						children: [(0, l.jsx)(_.Z, {
							variant: "primary",
							onClick: u,
							disabled: d,
							mt: "12px",
							id: "confirm-swap-or-send",
							width: "100%",
							children: p(o.tradeType !== eT.YL.EXACT_OUTPUT || s ? "Confirm Swap" : "Swap Anyway")
						}), c ? (0, l.jsx)(ni.rn, {
							error: c
						}) : null]
					})]
				})
			}
			var tl = (0, b.memo)(function(e) {
					var n = e.trade,
						t = e.originalTrade,
						r = e.onAcceptChanges,
						i = e.allowedSlippage,
						o = e.onConfirm,
						a = e.recipient,
						s = e.currencyBalances,
						u = e.isStable,
						c = (0, b.useMemo)(function() {
							return Boolean(n && t && (n.tradeType !== t.tradeType || !n.inputAmount.currency.equals(t.inputAmount.currency) || !n.inputAmount.equalTo(t.inputAmount) || !n.outputAmount.currency.equals(t.outputAmount.currency) || !n.outputAmount.equalTo(t.outputAmount)))
						}, [t, n]),
						d = (0, b.useMemo)(function() {
							return (0, nt.b5)(n, i)
						}, [n, i]),
						p = (0, b.useMemo)(function() {
							if ((null == n ? void 0 : n.tradeType) !== eT.YL.EXACT_OUTPUT) return null;
							var e = !!(s && s[Z.gN.INPUT]),
								t = e && s[Z.gN.INPUT].currency.isNative,
								r = e ? t ? (0, eP.i)(s[Z.gN.INPUT]) : s[Z.gN.INPUT] : null;
							return !!r && !!d && !!d[Z.gN.INPUT] && (r.greaterThan(d[Z.gN.INPUT]) || r.equalTo(d[Z.gN.INPUT]))
						}, [s, n, d]),
						m = (0, b.useCallback)(function() {
							return n ? (0, l.jsx)(u ? ta : to, {
								trade: n,
								allowedSlippage: i,
								slippageAdjustedAmounts: d,
								isEnoughInputBalance: p,
								recipient: a,
								showAcceptChanges: c,
								onAcceptChanges: r
							}) : null
						}, [i, r, a, c, n, d, p, u]),
						h = (0, b.useCallback)(function() {
							return n ? (0, l.jsx)(u ? tc : tt, {
								onConfirm: o,
								trade: n,
								disabledConfirm: c,
								slippageAdjustedAmounts: d,
								isEnoughInputBalance: p
							}) : null
						}, [o, c, n, p, d, u]);
					return (0, l.jsx)(n2.pM, {
						topContent: m,
						bottomContent: h
					})
				}),
				td = function(e) {
					var n = e.children,
						t = e.handleDismiss,
						r = (0, h.$G)().t;
					return (0, l.jsx)(T.ZP, {
						title: r("Confirm Swap"),
						headerBackground: "gradientCardHeader",
						onDismiss: t,
						children: n
					})
				},
				tp = function(e) {
					var n = e.onDismiss,
						t = e.message,
						r = e.openSettingModal,
						i = null == t ? void 0 : t.includes("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance."),
						o = (0, b.useCallback)(function() {
							null == n || n(), i && r && r()
						}, [i, n, r]),
						a = (0, h.$G)().t;
					return i ? (0, l.jsx)(n2.ht, {
						message: (0, l.jsxs)(l.Fragment, {
							children: [(0, l.jsxs)(z.Z, {
								mb: "16px",
								children: [a("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your"), " ", (0, l.jsx)(z.Z, {
									bold: !0,
									display: "inline",
									style: {
										cursor: "pointer"
									},
									onClick: o,
									children: (0, l.jsx)("u", {
										children: a("slippage tolerance.")
									})
								})]
							}), (0, l.jsx)(n1.Z, {
								href: "https://docs.pancakeswap.finance/products/pancakeswap-exchange/trade-guide",
								style: {
									width: "100%",
									justifyContent: "center"
								},
								children: a("What are the potential issues with the token?")
							})]
						})
					}) : (0, l.jsx)(n2.ht, {
						message: t,
						onDismiss: n
					})
				},
				tm = (0, b.memo)(function(e) {
					var n = e.trade,
						t = e.originalTrade,
						r = e.currencyBalances,
						i = e.onAcceptChanges,
						o = e.allowedSlippage,
						a = e.onConfirm,
						s = e.onDismiss,
						u = e.customOnDismiss,
						c = e.recipient,
						d = e.swapErrorMessage,
						p = e.attemptingTxn,
						m = e.txHash,
						h = e.openSettingModal,
						x = e.isStable,
						f = (0, H.g)().chainId,
						g = (0, b.useCallback)(function() {
							u && u(), null == s || s()
						}, [u, s]),
						y = (0, b.useCallback)(function() {
							return d ? (0, l.jsx)(tp, {
								openSettingModal: h,
								onDismiss: s,
								message: d
							}) : (0, l.jsx)(tl, {
								isStable: x,
								trade: n,
								currencyBalances: r,
								originalTrade: t,
								onAcceptChanges: i,
								allowedSlippage: o,
								onConfirm: a,
								recipient: c
							})
						}, [x, n, t, i, o, a, c, d, s, h, r]);
					return f ? (0, l.jsx)(td, {
						handleDismiss: g,
						children: p ? (0, l.jsx)(n7, {
							inputAmount: null == n ? void 0 : n.inputAmount,
							outputAmount: null == n ? void 0 : n.outputAmount
						}) : m ? (0, l.jsx)(n2.rD, {
							chainId: f,
							hash: m,
							onDismiss: g,
							currencyToAdd: null == n ? void 0 : n.outputAmount.currency
						}) : y()
					}) : null
				});

			function th() {
				var e = (0, U.Z)(["\n  width: 50%;\n"]);
				return th = function() {
					return e
				}, e
			}

			function tx() {
				var e = (0, U.Z)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"]);
				return tx = function() {
					return e
				}, e
			}

			function tf() {
				var e = (0, U.Z)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]);
				return tf = function() {
					return e
				}, e
			}

			function tg() {
				var e = (0, U.Z)(["\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(\n    90deg,\n    ", "\n      0%,\n    ", "\n      80%\n  );\n  opacity: 0.6;\n"]);
				return tg = function() {
					return e
				}, e
			}
			var ty = (0, F.ZP)(eD.m0).withConfig({
					componentId: "sc-b6a41b3e-0"
				})(th()),
				tT = F.ZP.div.withConfig({
					componentId: "sc-b6a41b3e-1"
				})(tx(), function(e) {
					var n = e.theme,
						t = e.confirmed;
					return e.disabled ? n.colors.backgroundDisabled : t ? n.colors.success : n.colors.primary
				}),
				tj = F.ZP.div.withConfig({
					componentId: "sc-b6a41b3e-2"
				})(tf()),
				tb = F.ZP.div.withConfig({
					componentId: "sc-b6a41b3e-3"
				})(tg(), function(e) {
					var n = e.theme,
						t = e.prevConfirmed;
					return e.disabled ? n.colors.backgroundDisabled : t ? n.colors.success : n.colors.primary
				}, function(e) {
					var n = e.theme,
						t = e.prevConfirmed;
					return e.disabled ? n.colors.backgroundDisabled : t ? n.colors.primary : n.colors.backgroundDisabled
				});

			function tv(e) {
				var n = e.steps,
					t = e.disabled,
					r = void 0 !== t && t,
					i = (0, e4.Z)(e, ["steps", "disabled"]);
				return (0, l.jsx)(eN.Tz, (0, e6.Z)((0, e5.Z)({
					justify: "center"
				}, i), {
					children: (0, l.jsxs)(ty, {
						children: [n.map(function(e, t) {
							return (0, l.jsxs)(tj, {
								children: [(0, l.jsx)(tT, {
									confirmed: e,
									disabled: r || !n[t - 1] && 0 !== t,
									children: e ? "✓" : t + 1
								}), (0, l.jsx)(tb, {
									prevConfirmed: e,
									disabled: r
								})]
							}, t)
						}), (0, l.jsx)(tT, {
							disabled: r || !n[n.length - 1],
							children: n.length + 1
						})]
					})
				}))
			}

			function tC(e, n) {
				if (!e.lessThan(nr.EV)) {
					var t = "confirm";
					return window.prompt(n('This swap has a price impact of at least %amount%%. Please type the word "%word%" to continue with this swap.', {
						amount: nr.EV.toFixed(0),
						word: t
					})) === t
				}
				return !!e.lessThan(nr.Uf) || window.confirm(n("This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.", {
					amount: nr.Uf.toFixed(0)
				}))
			}
			var tA = (0, nQ.h)(nQ.Z);

			function tw(e) {
				var n, t, r = e.swapIsUnsupported,
					i = e.account,
					o = e.showWrap,
					a = e.wrapInputError,
					u = e.onWrap,
					c = e.wrapType,
					d = e.approval,
					p = e.approveCallback,
					x = e.approvalSubmitted,
					f = e.currencies,
					g = e.isExpertMode,
					y = e.trade,
					T = e.swapInputError,
					j = e.currencyBalances,
					v = e.recipient,
					C = e.allowedSlippage,
					A = e.parsedIndepentFieldAmount,
					w = e.onUserInput,
					S = (0, h.$G)().t,
					I = (0, m.Z)((0, eW.RO)(), 1)[0],
					P = (0, nt.U7)(y).priceImpactWithoutFee,
					U = (0, n0.R)(y, C, v),
					E = (0, nJ.o)(y, C, v, U),
					k = E.callback,
					N = E.error,
					D = (0, m.Z)((0, b.useState)({
						tradeToConfirm: void 0,
						attemptingTxn: !1,
						swapErrorMessage: void 0,
						txHash: void 0
					}), 2),
					L = D[0],
					F = L.tradeToConfirm,
					O = L.swapErrorMessage,
					M = L.attemptingTxn,
					B = L.txHash,
					X = D[1],
					Y = (0, b.useCallback)(function() {
						(!P || tC(P, S)) && k && (X({
							attemptingTxn: !0,
							tradeToConfirm: F,
							swapErrorMessage: void 0,
							txHash: void 0
						}), k().then(function(e) {
							X({
								attemptingTxn: !1,
								tradeToConfirm: F,
								swapErrorMessage: void 0,
								txHash: e
							})
						}).catch(function(e) {
							X({
								attemptingTxn: !1,
								tradeToConfirm: F,
								swapErrorMessage: e.message,
								txHash: void 0
							})
						}))
					}, [P, k, F, S, X]),
					R = (0, b.useCallback)(function() {
						X({
							tradeToConfirm: y,
							swapErrorMessage: O,
							txHash: B,
							attemptingTxn: M
						})
					}, [M, O, y, B, X]),
					W = (0, b.useCallback)(function() {
						X({
							tradeToConfirm: F,
							attemptingTxn: M,
							swapErrorMessage: O,
							txHash: B
						}), B && w(Z.gN.INPUT, "")
					}, [M, w, O, F, B, X]),
					G = (0, m.Z)((0, b.useState)(!1), 2),
					H = G[0],
					V = G[1],
					$ = (0, m.Z)((0, nS.Z)((0, l.jsx)(tA, {
						customOnDismiss: function() {
							return V(!0)
						},
						mode: n_.a.SWAP_LIQUIDITY
					})), 1)[0],
					q = (0, m.Z)((0, nS.Z)((0, l.jsx)(tm, {
						trade: y,
						originalTrade: F,
						currencyBalances: j,
						onAcceptChanges: R,
						attemptingTxn: M,
						txHash: B,
						recipient: v,
						allowedSlippage: C,
						onConfirm: Y,
						swapErrorMessage: O,
						customOnDismiss: W,
						openSettingModal: $
					}), !0, !0, "confirmSwapModal"), 1)[0],
					K = (0, b.useCallback)(function() {
						g ? Y() : (X({
							tradeToConfirm: y,
							attemptingTxn: !1,
							swapErrorMessage: void 0,
							txHash: void 0
						}), q())
					}, [g, Y, q, y]);
				(0, b.useEffect)(function() {
					H && (V(!1), X(function(e) {
						return (0, e6.Z)((0, e5.Z)({}, e), {
							swapErrorMessage: void 0
						})
					}), q())
				}, [H, q, X]);
				var Q = (0, nt.oX)(P);
				if (r) return (0, l.jsx)(_.Z, {
					width: "100%",
					disabled: !0,
					children: S("Unsupported Asset")
				});
				if (!i) return (0, l.jsx)(nq.Z, {
					width: "100%"
				});
				if (o) return (0, l.jsx)(n$.A, {
					width: "100%",
					disabled: Boolean(a),
					onClick: u,
					children: null != a ? a : c === s.WRAP ? "Wrap" : c === s.UNWRAP ? "Unwrap" : null
				});
				var J = !(null == y ? void 0 : y.route),
					ee = Boolean(f[Z.gN.INPUT] && f[Z.gN.OUTPUT] && (null == A ? void 0 : A.greaterThan(nr.iV)));
				if (J && ee) return (0, l.jsxs)(nV.h2, {
					style: {
						textAlign: "center",
						padding: "0.75rem"
					},
					children: [(0, l.jsx)(z.Z, {
						color: "textSubtle",
						children: S("Insufficient liquidity for this trade.")
					}), I && (0, l.jsx)(z.Z, {
						color: "textSubtle",
						children: S("Try enabling multi-hop trades.")
					})]
				});
				var en = !T && (d === eF.UK.NOT_APPROVED || d === eF.UK.PENDING || x && d === eF.UK.APPROVED) && !(Q > 3 && !g),
					et = !T;
				return en ? (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)(eD.m0, {
						children: [(0, l.jsx)(n$.A, {
							variant: d === eF.UK.APPROVED ? "success" : "primary",
							onClick: p,
							disabled: d !== eF.UK.NOT_APPROVED || x,
							width: "48%",
							children: d === eF.UK.PENDING ? (0, l.jsxs)(eD.BA, {
								gap: "6px",
								justify: "center",
								children: [S("Enabling"), " ", (0, l.jsx)(nK.Z, {
									stroke: "white"
								})]
							}) : x && d === eF.UK.APPROVED ? S("Enabled") : S("Enable %asset%", {
								asset: null !== (t = null === (n = f[Z.gN.INPUT]) || void 0 === n ? void 0 : n.symbol) && void 0 !== t ? t : ""
							})
						}), (0, l.jsx)(n$.A, {
							variant: et && Q > 2 ? "danger" : "primary",
							onClick: function() {
								K()
							},
							width: "48%",
							id: "swap-button",
							disabled: !et || d !== eF.UK.APPROVED || Q > 3 && !g,
							children: Q > 3 && !g ? S("Price Impact High") : Q > 2 ? S("Swap Anyway") : S("Swap")
						})]
					}), (0, l.jsx)(eN.ZP, {
						style: {
							marginTop: "1rem"
						},
						children: (0, l.jsx)(tv, {
							steps: [d === eF.UK.APPROVED]
						})
					}), g && O ? (0, l.jsx)(ni.rn, {
						error: O
					}) : null]
				}) : (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsx)(n$.A, {
						variant: et && Q > 2 && !N ? "danger" : "primary",
						onClick: function() {
							K()
						},
						id: "swap-button",
						width: "100%",
						disabled: !et || Q > 3 && !g || !!N,
						children: T || (Q > 3 && !g ? S("Price Impact Too High") : Q > 2 ? S("Swap Anyway") : S("Swap"))
					}), g && O ? (0, l.jsx)(ni.rn, {
						error: O
					}) : null]
				})
			}
			var tZ = t(49857),
				tS = function() {
					var e = (0, m.Z)((0, b.useState)(!1), 2),
						n = e[0],
						t = e[1],
						r = (0, b.useCallback)(function() {
							n || t(!0)
						}, [n]),
						i = (0, tZ.kY)().mutate,
						o = (0, H.g)().chainId;
					return (0, b.useEffect)(function() {
						n && (i(["blockNumberFetcher", o]), setTimeout(function() {
							return t(!1)
						}, 500))
					}, [i, n, o]), {
						refreshBlockNumber: r,
						isLoading: n
					}
				},
				tI = t(5632),
				tP = t(59593),
				tU = {
					pokemoney: new eT.Z$(eT.a_.BSC, "0x32ff5b4C3B1744F0344D96fA2f87799Ed2805749", 18, "PMY", "Pokemoney Coin", ""),
					free: new eT.Z$(eT.a_.BSC, "0x880BCe9321c79cAc1D290De6d31DDE722C606165", 8, "FREE", "Freedom Protocol Token", ""),
					safemoon: new eT.Z$(eT.a_.BSC, "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3", 9, "SAFEMOON", "Safemoon Token", "https://safemoon.net/"),
					gala: new eT.Z$(eT.a_.BSC, "0x7dDEE176F665cD201F93eEDE625770E2fD911990", 18, "GALA", "pTokens GALA", "https://games.gala.com/")
				},
				tE = tP.d.bondly,
				tk = tP.d.itam,
				tN = tP.d.ccar,
				tD = tP.d.bttold,
				tL = tP.d.abnbc,
				tF = tU.pokemoney,
				tO = tU.free,
				tM = {
					safemoon: tU.safemoon,
					bondly: tE,
					itam: tk,
					ccar: tN,
					bttold: tD,
					pokemoney: tF,
					free: tO,
					gala: tU.gala,
					abnbc: tL
				},
				t_ = Object.values(tM),
				tB = t(50696),
				tz = t(38544),
				tX = t(87014),
				tY = t(84252),
				tR = function() {
					var e = (0, h.$G)().t;
					return (0, l.jsx)(l.Fragment, {
						children: (0, l.jsxs)(z.Z, {
							children: [e("SAFEMOON has been migrated to"), " ", (0, l.jsx)(eH.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://bscscan.com/address/0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
								children: e("a new contract address.")
							}), " ", e("Trading on the old address may result in the complete loss of your assets. For more information please refer to"), " ", (0, l.jsxs)(eH.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://twitter.com/safemoon/status/1477770592031887360",
								children: [e("Safemoon's announcement"), "."]
							})]
						})
					})
				},
				tW = function() {
					var e = (0, h.$G)().t;
					return (0, l.jsx)(l.Fragment, {
						children: (0, l.jsxs)(z.Z, {
							children: [e("ITAM has been rebranded as ITAM CUBE."), " ", (0, l.jsx)(eH.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://itam.network/swap",
								children: e("Please proceed to ITAM bridge to conduct a one-way swap of your ITAM tokens.")
							}), " ", e("All transfers of the old ITAM token will be disabled after the swap.")]
						})
					})
				},
				tG = function() {
					var e = (0, h.$G)().t;
					return (0, l.jsx)(z.Z, {
						children: e("Warning: BONDLY has been compromised. Please remove liquidity until further notice.")
					})
				},
				tH = function(e) {
					var n = e.handleContinueClick,
						t = (0, h.$G)().t,
						r = (0, m.Z)((0, b.useState)(!1), 2),
						i = r[0],
						o = r[1];
					return (0, l.jsx)(l.Fragment, {
						children: (0, l.jsxs)(f.Z, {
							justifyContent: "space-between",
							children: [(0, l.jsx)("label", {
								htmlFor: "acknowledgement",
								children: (0, l.jsxs)(f.Z, {
									alignItems: "center",
									children: [(0, l.jsx)(ev.Z, {
										id: "acknowledgement",
										name: "confirmed",
										type: "checkbox",
										checked: i,
										onChange: function() {
											return o(!i)
										},
										scale: "sm"
									}), (0, l.jsx)(z.Z, {
										ml: "10px",
										style: {
											userSelect: "none"
										},
										children: t("I understand")
									})]
								})
							}), (0, l.jsx)(_.Z, {
								disabled: !i,
								onClick: n,
								children: t("Continue")
							})]
						})
					})
				},
				tV = function() {
					var e = (0, h.$G)().t;
					return (0, l.jsx)(l.Fragment, {
						children: (0, l.jsxs)(z.Z, {
							children: [e("Crypto Cars (CCAR) has been migrated to"), " ", (0, l.jsx)(eH.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://bscscan.com/token/0x322e5015Cc464Ada7f99dE7131CE494dE1834396",
								children: e("a new contract address.")
							}), " ", e("Trading on the old address may result in the complete loss of your assets. For more information please refer to"), " ", (0, l.jsx)(eH.Z, {
								style: {
									display: "inline"
								},
								external: !0,
								href: "https://t.me/Crypto_Cars_Official/465037",
								children: e("the announcement.")
							})]
						})
					})
				},
				t$ = function() {
					var e = (0, h.$G)().t;
					return (0, l.jsxs)(l.Fragment, {
						children: [(0, l.jsx)(z.Z, {
							children: e("Please note that this is the old BTT token, which has been swapped to the new BTT tokens in the following ratio:")
						}), (0, l.jsx)(z.Z, {
							children: "1 BTT (OLD) = 1,000 BTT (NEW)"
						}), (0, l.jsxs)(z.Z, {
							mb: "8px",
							children: [e("Trade the new BTT token"), " ", (0, l.jsx)(eH.Z, {
								style: {
									display: "inline"
								},
								href: "https://pancakeswap.finance/swap?outputCurrency=0x352Cb5E19b12FC216548a2677bD0fce83BaE434B",
								children: e("here")
							})]
						}), (0, l.jsx)(n1.Z, {
							href: "https://medium.com/@BitTorrent/tutorial-how-to-swap-bttold-to-btt-453264d7142",
							children: e("For more details on the swap, please refer here.")
						})]
					})
				},
				tq = function() {
					var e = (0, h.$G)().t;
					return (0, l.jsx)(l.Fragment, {
						children: (0, l.jsx)(z.Z, {
							children: e("Suspicious rugpull token")
						})
					})
				},
				tK = function() {
					var e = (0, h.$G)().t;
					return (0, l.jsx)(l.Fragment, {
						children: (0, l.jsx)(z.Z, {
							children: e("Risk Warning: This token is subject to high price risk. Please do your own research before trading this token. Please also note that as of 24 June 2022 there is also a reflection fee for every transfer of FREE ranging from 2.5 to 5% per trade/transfer.")
						})
					})
				},
				tQ = function() {
					var e = (0, h.$G)().t;
					return (0, l.jsxs)(l.Fragment, {
						children: [(0, l.jsx)(z.Z, {
							children: e("Warning: The pGALA token pool is not a valid token trading pair - please stop buying.")
						}), (0, l.jsx)(n1.Z, {
							href: "https://twitter.com/pNetworkDeFi/status/1588266897061031936",
							children: e("For more info, please see pGALA’s twitter.")
						})]
					})
				},
				tJ = function() {
					var e = (0, h.$G)().t;
					return (0, l.jsxs)(l.Fragment, {
						children: [(0, l.jsx)(z.Z, {
							children: e("Warning: aBNB token from Ankr has been exploited. Please proceed with caution. We do not recommend users to trade the token.")
						}), (0, l.jsx)(n1.Z, {
							href: "https://twitter.com/ankr/status/1598503332477280256",
							children: e("Learn More")
						})]
					})
				};

			function t0() {
				var e = (0, U.Z)(["\n  max-width: 440px;\n"]);
				return t0 = function() {
					return e
				}, e
			}

			function t1() {
				var e = (0, U.Z)(["\n  align-items: flex-start;\n  justify-content: flex-start;\n"]);
				return t1 = function() {
					return e
				}, e
			}
			var t2 = (0, F.ZP)(tz.F0).withConfig({
					componentId: "sc-d2344526-0"
				})(t0()),
				t9 = (0, F.ZP)(eb.Z).withConfig({
					componentId: "sc-d2344526-1"
				})(t1()),
				t5 = function(e) {
					var n, t = e.swapCurrency,
						r = e.onDismiss,
						i = (0, h.$G)().t,
						o = (0, tY.ZP)().theme,
						a = (n = {}, (0, p.Z)(n, tM.safemoon.address, {
							symbol: tM.safemoon.symbol,
							component: (0, l.jsx)(tR, {})
						}), (0, p.Z)(n, tM.bondly.address, {
							symbol: tM.bondly.symbol,
							component: (0, l.jsx)(tG, {})
						}), (0, p.Z)(n, tM.itam.address, {
							symbol: tM.itam.symbol,
							component: (0, l.jsx)(tW, {})
						}), (0, p.Z)(n, tM.ccar.address, {
							symbol: tM.ccar.symbol,
							component: (0, l.jsx)(tV, {})
						}), (0, p.Z)(n, tM.bttold.address, {
							symbol: tM.bttold.symbol,
							component: (0, l.jsx)(t$, {})
						}), (0, p.Z)(n, tM.pokemoney.address, {
							symbol: tM.pokemoney.symbol,
							component: (0, l.jsx)(tq, {})
						}), (0, p.Z)(n, tM.free.address, {
							symbol: tM.free.symbol,
							component: (0, l.jsx)(tK, {})
						}), (0, p.Z)(n, tM.gala.address, {
							symbol: tM.gala.symbol,
							component: (0, l.jsx)(tQ, {})
						}), (0, p.Z)(n, tM.abnbc.address, {
							symbol: tM.abnbc.symbol,
							component: (0, l.jsx)(tJ, {})
						}), n)[t.address];
					return (0, l.jsxs)(t2, {
						$minWidth: "280px",
						children: [(0, l.jsx)(tz.xB, {
							background: o.colors.gradientCardHeader,
							children: (0, l.jsx)(tX.Z, {
								p: "12px 24px",
								children: i("Notice for trading %symbol%", {
									symbol: a.symbol
								})
							})
						}), (0, l.jsxs)(tz.fe, {
							p: "24px",
							children: [(0, l.jsx)(t9, {
								variant: "warning",
								mb: "24px",
								children: (0, l.jsx)(W.ZP, {
									children: a.component
								})
							}), (0, l.jsx)(tH, {
								handleContinueClick: r
							})]
						})]
					})
				},
				t6 = t(57535),
				t4 = t(95867),
				t3 = t(61898),
				t7 = JSON.parse('[{"inputs":[{"internalType":"address","name":"_WETHAddress","type":"address"},{"internalType":"address","name":"_pancakeswapV2","type":"address"},{"internalType":"address","name":"_stableswapFactory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApproveCalledOnETH","type":"error"},{"inputs":[],"name":"ETHTransferFailed","type":"error"},{"inputs":[],"name":"ForceApproveFailed","type":"error"},{"inputs":[],"name":"FromIsNotSender","type":"error"},{"inputs":[],"name":"InsufficientBalance","type":"error"},{"inputs":[],"name":"NotEnoughValue","type":"error"},{"inputs":[],"name":"SafeTransferFailed","type":"error"},{"inputs":[],"name":"SafeTransferFromFailed","type":"error"},{"inputs":[],"name":"ToIsNotThis","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"factory","type":"address"}],"name":"NewStableSwapFactory","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"srcTokenAddr","type":"address"},{"indexed":false,"internalType":"address","name":"dstTokenAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"srcAmount","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"srcTokenAddr","type":"address"},{"indexed":false,"internalType":"address","name":"dstTokenAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"srcAmount","type":"uint256"}],"name":"SwapMulti","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeswapV2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"setStableSwapFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stableswapFactory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"srcToken","type":"address"},{"internalType":"contract IERC20","name":"dstToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"enum PancakeSwapSmartRouter.FLAG","name":"flag","type":"uint8"}],"name":"swap","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IERC20[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"enum PancakeSwapSmartRouter.FLAG[]","name":"flags","type":"uint8[]"}],"name":"swapMulti","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"contract IWETH02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]'),
				t8 = (u = {}, (0, p.Z)(u, eT.a_.ETHEREUM, ""), (0, p.Z)(u, eT.a_.RINKEBY, ""), (0, p.Z)(u, eT.a_.GOERLI, ""), (0, p.Z)(u, eT.a_.BSC, "0x2f22e47CA7C5e07F77785f616cEeE80c5E84127C"), (0, p.Z)(u, eT.a_.BSC_TESTNET, "0xCF457465fC0E98a50Bc3E1b3DDAAF1373622f059"), (0, p.Z)(u, eT.a_.ARBITRUM, ""), u);

			function re(e) {
				var n = e ? nr.yC.subtract(e.route.pairs.reduce(function(e, n) {
						return e.multiply((0, na.yO)(n) ? nr.yC.subtract(n.fee) : nr.Zw)
					}, nr.yC)) : void 0,
					t = e && n ? na.ho.priceImpact(e).subtract(n) : void 0;
				return {
					priceImpactWithoutFee: t ? new eT.gG(null == t ? void 0 : t.numerator, null == t ? void 0 : t.denominator) : void 0,
					realizedLPFee: n && e && eT.ih.fromRawAmount(e.inputAmount.currency, n.multiply(e.inputAmount.quotient).quotient)
				}
			}

			function rn(e, n) {
				var t, r = (0, nt.P4)(n);
				return t = {}, (0, p.Z)(t, Z.gN.INPUT, e && na.ho.maximumAmountIn(e, r)), (0, p.Z)(t, Z.gN.OUTPUT, e && na.ho.minimumAmountOut(e, r)), t
			}
			var rt = (0, O.getAddress)("0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE");

			function rr(e) {
				return "0x".concat(e.quotient.toString(16))
			}
			var ri = t(50930),
				ro = t(98772),
				ra = t(67831),
				rs = t(76837);

			function ru() {
				var e = (0, U.Z)(["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
				return ru = function() {
					return e
				}, e
			}(i = c || (c = {}))[i.INVALID = 0] = "INVALID", i[i.LOADING = 1] = "LOADING", i[i.VALID = 2] = "VALID";
			var rc = (0, F.ZP)(eN.Tz).withConfig({
				componentId: "sc-85c9785d-0"
			})(ru(), function(e) {
				return e.theme.radii.default
			}, function(e) {
				return e.theme.colors.cardBorder
			}, function(e) {
				return e.theme.colors.background
			});

			function rl(e) {
				var n, t, r, i, o = e.trade,
					a = e.slippageAdjustedAmounts,
					s = e.isEnoughInputBalance,
					u = e.onConfirm,
					c = e.swapErrorMessage,
					d = e.disabledConfirm,
					p = (0, h.$G)().t,
					x = (0, m.Z)((0, b.useState)(!1), 2),
					f = x[0],
					g = x[1],
					y = (0, b.useMemo)(function() {
						return re(o)
					}, [o]),
					T = y.priceImpactWithoutFee,
					j = y.realizedLPFee,
					v = (0, nt.oX)(T),
					C = "".concat((100 * nn.om).toFixed(2), "%"),
					A = "".concat((100 * nn.BY).toFixed(2), "%"),
					w = "".concat((100 * nn.hT).toFixed(4), "%"),
					S = "".concat((100 * nn.xy).toFixed(4), "%");
				return (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)(rc, {
						children: [(0, l.jsxs)(eD.m0, {
							align: "center",
							children: [(0, l.jsx)(z.Z, {
								fontSize: "14px",
								children: p("Price")
							}), (0, l.jsxs)(z.Z, {
								fontSize: "14px",
								style: {
									justifyContent: "center",
									alignItems: "center",
									display: "flex",
									textAlign: "right",
									paddingLeft: "10px"
								},
								children: [o ? f ? "".concat(na.ho.executionPrice(o).invert().toSignificant(6), " ").concat(o.inputAmount.currency.symbol, " / ").concat(o.outputAmount.currency.symbol) : "".concat(na.ho.executionPrice(o).toSignificant(6), " ").concat(o.outputAmount.currency.symbol, " / ").concat(o.inputAmount.currency.symbol) : "", (0, l.jsx)(ni.k0, {
									onClick: function() {
										return g(!f)
									},
									children: (0, l.jsx)(n8.Z, {
										width: "14px"
									})
								})]
							})]
						}), (0, l.jsxs)(eD.m0, {
							children: [(0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(z.Z, {
									fontSize: "14px",
									children: p(o.tradeType === eT.YL.EXACT_INPUT ? "Minimum received" : "Maximum sold")
								}), (0, l.jsx)(e8.s, {
									text: p("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
									ml: "4px"
								})]
							}), (0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(z.Z, {
									fontSize: "14px",
									children: o.tradeType === eT.YL.EXACT_INPUT ? null !== (r = null === (n = a[Z.gN.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4)) && void 0 !== r ? r : "-" : null !== (i = null === (t = a[Z.gN.INPUT]) || void 0 === t ? void 0 : t.toSignificant(4)) && void 0 !== i ? i : "-"
								}), (0, l.jsx)(z.Z, {
									fontSize: "14px",
									marginLeft: "4px",
									children: o.tradeType === eT.YL.EXACT_INPUT ? o.outputAmount.currency.symbol : o.inputAmount.currency.symbol
								})]
							})]
						}), (0, l.jsxs)(eD.m0, {
							children: [(0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(z.Z, {
									fontSize: "14px",
									children: p("Price Impact")
								}), (0, l.jsx)(e8.s, {
									text: p("The difference between the market price and your price due to trade size."),
									ml: "4px"
								})]
							}), (0, l.jsx)(no, {
								priceImpact: T
							})]
						}), (0, l.jsxs)(eD.m0, {
							children: [(0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(z.Z, {
									fontSize: "14px",
									children: p("Liquidity Provider Fee")
								}), (0, l.jsx)(e8.s, {
									text: (0, l.jsxs)(l.Fragment, {
										children: [(0, l.jsx)(z.Z, {
											mb: "12px",
											children: p("For each non-stableswap trade, a %amount% fee is paid", {
												amount: C
											})
										}), (0, l.jsxs)(z.Z, {
											children: ["- ", p("%amount% to LP token holders", {
												amount: A
											})]
										}), (0, l.jsxs)(z.Z, {
											children: ["- ", p("%amount% to the Treasury", {
												amount: w
											})]
										}), (0, l.jsxs)(z.Z, {
											children: ["- ", p("%amount% towards Alien buyback and burn", {
												amount: S
											})]
										}), (0, l.jsxs)(z.Z, {
											mt: "12px",
											children: [p("For each stableswap trade, refer to the fee table"), (0, l.jsx)(eH.Z, {
												style: {
													display: "inline"
												},
												ml: "4px",
												external: !0,
												href: "https://docs.pancakeswap.finance/products/stableswap#stableswap-fees",
												children: p("here.")
											})]
										})]
									}),
									ml: "4px"
								})]
							}), (0, l.jsx)(z.Z, {
								fontSize: "14px",
								children: j ? "".concat(null == j ? void 0 : j.toSignificant(6), " ").concat(o.inputAmount.currency.symbol) : "-"
							})]
						})]
					}), (0, l.jsxs)(eD.BA, {
						children: [(0, l.jsx)(_.Z, {
							variant: v > 2 ? "danger" : "primary",
							onClick: u,
							disabled: d,
							mt: "12px",
							id: "confirm-swap-or-send",
							width: "100%",
							children: p(v > 2 || o.tradeType === eT.YL.EXACT_OUTPUT && !s ? "Swap Anyway" : "Confirm Swap")
						}), c ? (0, l.jsx)(ni.rn, {
							error: c
						}) : null]
					})]
				})
			}

			function rd(e) {
				var n, t, r = e.inputAmount,
					i = e.outputAmount,
					o = e.tradeType,
					a = e.priceImpactWithoutFee,
					s = e.slippageAdjustedAmounts,
					u = e.isEnoughInputBalance,
					c = e.recipient,
					d = e.showAcceptChanges,
					p = e.onAcceptChanges,
					x = e.allowedSlippage,
					f = (0, h.$G)().t,
					g = (0, nt.oX)(a),
					y = d && o === eT.YL.EXACT_OUTPUT && u ? "primary" : o !== eT.YL.EXACT_OUTPUT || u ? "text" : "failure",
					T = o === eT.YL.EXACT_INPUT ? null === (n = s[Z.gN.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(6) : null === (t = s[Z.gN.INPUT]) || void 0 === t ? void 0 : t.toSignificant(6),
					j = o === eT.YL.EXACT_INPUT ? i.currency.symbol : r.currency.symbol,
					b = f(o === eT.YL.EXACT_INPUT ? "Output is estimated. You will receive at least or the transaction will revert." : "Input is estimated. You will sell at most or the transaction will revert."),
					v = (0, m.Z)(b.split("".concat(T, " ").concat(j)), 2),
					C = v[0],
					A = v[1],
					w = c ? (0, ti.Z)(c) : "",
					S = f("Output will be sent to %recipient%", {
						recipient: w
					}),
					I = (0, m.Z)(S.split(w), 2),
					P = I[0],
					U = I[1];
				return (0, l.jsxs)(eN.Tz, {
					gap: "md",
					children: [(0, l.jsxs)(eD.m0, {
						align: "flex-end",
						children: [(0, l.jsxs)(eD.DA, {
							gap: "4px",
							children: [(0, l.jsx)(nu.Xw, {
								currency: r.currency,
								size: "24px",
								style: {
									marginRight: "12px"
								}
							}), (0, l.jsx)(ni.Ld, {
								fontSize: "24px",
								color: y,
								children: r.toSignificant(6)
							})]
						}), (0, l.jsx)(eD.DA, {
							gap: "0px",
							children: (0, l.jsx)(z.Z, {
								fontSize: "24px",
								ml: "10px",
								children: r.currency.symbol
							})
						})]
					}), (0, l.jsx)(eD.DA, {
						children: (0, l.jsx)(eC.Z, {
							width: "16px",
							ml: "4px"
						})
					}), (0, l.jsxs)(eD.m0, {
						align: "flex-end",
						children: [(0, l.jsxs)(eD.DA, {
							gap: "4px",
							children: [(0, l.jsx)(nu.Xw, {
								currency: i.currency,
								size: "24px"
							}), (0, l.jsx)(ni.Ld, {
								fontSize: "24px",
								color: g > 2 ? "failure" : d && o === eT.YL.EXACT_INPUT ? "primary" : "text",
								children: i.toSignificant(6)
							})]
						}), (0, l.jsx)(eD.DA, {
							children: (0, l.jsx)(z.Z, {
								fontSize: "24px",
								ml: "10px",
								children: i.currency.symbol
							})
						})]
					}), d ? (0, l.jsx)(ni.ly, {
						justify: "flex-start",
						gap: "0px",
						children: (0, l.jsxs)(eD.m0, {
							children: [(0, l.jsxs)(eD.DA, {
								children: [(0, l.jsx)(tr.Z, {
									mr: "8px"
								}), (0, l.jsxs)(z.Z, {
									bold: !0,
									children: [" ", f("Price Updated")]
								})]
							}), (0, l.jsx)(_.Z, {
								onClick: p,
								children: f("Accept")
							})]
						})
					}) : null, (0, l.jsxs)(eN.Tz, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "24px 0 0 0px"
						},
						children: [(0, l.jsxs)(eD.DA, {
							style: {
								width: "100%"
							},
							children: [(0, l.jsx)(z.Z, {
								color: "secondary",
								bold: !0,
								textTransform: "uppercase",
								children: f("Slippage Tolerance")
							}), (0, l.jsx)(z.Z, {
								bold: !0,
								color: "primary",
								ml: "auto",
								textAlign: "end",
								children: "".concat(x / 100, "%")
							})]
						}), o === eT.YL.EXACT_OUTPUT && !u && (0, l.jsx)(z.Z, {
							small: !0,
							color: "failure",
							textAlign: "left",
							style: {
								width: "100%"
							},
							children: f("Insufficient input token balance. Your transaction may fail.")
						}), (0, l.jsxs)(z.Z, {
							small: !0,
							color: "textSubtle",
							textAlign: "left",
							style: {
								width: "100%"
							},
							children: [C, A]
						})]
					}), null !== c ? (0, l.jsx)(eN.Tz, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "12px 0 0 0px"
						},
						children: (0, l.jsxs)(z.Z, {
							color: "textSubtle",
							children: [P, (0, l.jsx)("b", {
								title: c,
								children: w
							}), U]
						})
					}) : null]
				})
			}
			var rp = (0, b.memo)(function(e) {
					var n = e.trade,
						t = e.originalTrade,
						r = e.onAcceptChanges,
						i = e.allowedSlippage,
						o = e.onConfirm,
						a = e.recipient,
						s = e.currencyBalances,
						u = (0, b.useMemo)(function() {
							return Boolean(n && t && (n.tradeType !== t.tradeType || !n.inputAmount.currency.equals(t.inputAmount.currency) || !n.inputAmount.equalTo(t.inputAmount) || !n.outputAmount.currency.equals(t.outputAmount.currency) || !n.outputAmount.equalTo(t.outputAmount)))
						}, [t, n]),
						c = (0, b.useMemo)(function() {
							return rn(n, i)
						}, [n, i]),
						d = (0, b.useMemo)(function() {
							return re(n)
						}, [n]).priceImpactWithoutFee,
						p = (0, b.useMemo)(function() {
							if ((null == n ? void 0 : n.tradeType) !== eT.YL.EXACT_OUTPUT) return null;
							var e = !!(s && s[Z.gN.INPUT]),
								t = e && s[Z.gN.INPUT].currency.isNative,
								r = e ? t ? (0, eP.i)(s[Z.gN.INPUT]) : s[Z.gN.INPUT] : null;
							return !!r && !!c && !!c[Z.gN.INPUT] && (r.greaterThan(c[Z.gN.INPUT]) || r.equalTo(c[Z.gN.INPUT]))
						}, [s, n, c]),
						m = (0, b.useCallback)(function() {
							return n ? (0, l.jsx)(rd, {
								inputAmount: n.inputAmount,
								outputAmount: n.outputAmount,
								tradeType: n.tradeType,
								priceImpactWithoutFee: d,
								allowedSlippage: i,
								slippageAdjustedAmounts: c,
								isEnoughInputBalance: p,
								recipient: a,
								showAcceptChanges: u,
								onAcceptChanges: r
							}) : null
						}, [d, i, r, a, u, n, c, p]),
						h = (0, b.useCallback)(function() {
							return n ? (0, l.jsx)(rl, {
								onConfirm: o,
								trade: n,
								disabledConfirm: u,
								slippageAdjustedAmounts: c,
								isEnoughInputBalance: p
							}) : null
						}, [o, u, n, p, c]);
					return (0, l.jsx)(n2.pM, {
						topContent: m,
						bottomContent: h
					})
				}),
				rm = function(e) {
					var n = e.onDismiss,
						t = e.message,
						r = e.openSettingModal,
						i = null == t ? void 0 : t.includes("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance."),
						o = (0, b.useCallback)(function() {
							null == n || n(), i && r && r()
						}, [i, n, r]),
						a = (0, h.$G)().t;
					return i ? (0, l.jsx)(n2.ht, {
						message: (0, l.jsxs)(l.Fragment, {
							children: [(0, l.jsxs)(z.Z, {
								mb: "16px",
								children: [a("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your"), " ", (0, l.jsx)(z.Z, {
									bold: !0,
									display: "inline",
									style: {
										cursor: "pointer"
									},
									onClick: o,
									children: (0, l.jsx)("u", {
										children: a("slippage tolerance.")
									})
								})]
							}), (0, l.jsx)(n1.Z, {
								href: "https://docs.pancakeswap.finance/products/pancakeswap-exchange/trade-guide",
								style: {
									width: "100%",
									justifyContent: "center"
								},
								children: a("What are the potential issues with the token?")
							})]
						})
					}) : (0, l.jsx)(n2.ht, {
						message: t,
						onDismiss: n
					})
				},
				rh = (0, b.memo)(function(e) {
					var n = e.trade,
						t = e.originalTrade,
						r = e.currencyBalances,
						i = e.onAcceptChanges,
						o = e.allowedSlippage,
						a = e.onConfirm,
						s = e.onDismiss,
						u = e.customOnDismiss,
						c = e.recipient,
						d = e.swapErrorMessage,
						p = e.attemptingTxn,
						m = e.txHash,
						h = e.openSettingModal,
						x = (0, H.g)().chainId,
						f = (0, b.useCallback)(function() {
							u && u(), null == s || s()
						}, [u, s]),
						g = (0, b.useCallback)(function() {
							return d ? (0, l.jsx)(rm, {
								openSettingModal: h,
								onDismiss: s,
								message: d
							}) : (0, l.jsx)(rp, {
								trade: n,
								currencyBalances: r,
								originalTrade: t,
								onAcceptChanges: i,
								allowedSlippage: o,
								onConfirm: a,
								recipient: c
							})
						}, [n, t, i, o, a, c, d, s, h, r]);
					return x ? (0, l.jsx)(td, {
						handleDismiss: f,
						children: p ? (0, l.jsx)(n7, {
							inputAmount: n.inputAmount,
							outputAmount: n.outputAmount
						}) : m ? (0, l.jsx)(n2.rD, {
							chainId: x,
							hash: m,
							onDismiss: f,
							currencyToAdd: null == n ? void 0 : n.outputAmount.currency
						}) : g()
					}) : null
				}),
				rx = (0, nQ.h)(nQ.Z);

			function rf(e) {
				var n, t, r = e.swapIsUnsupported,
					i = e.account,
					o = e.showWrap,
					a = e.wrapInputError,
					u = e.onWrap,
					d = e.wrapType,
					p = e.approval,
					x = e.approveCallback,
					f = e.approvalSubmitted,
					g = e.currencies,
					y = e.isExpertMode,
					T = e.trade,
					j = e.swapInputError,
					v = e.currencyBalances,
					C = e.recipient,
					A = e.allowedSlippage,
					w = e.parsedIndepentFieldAmount,
					S = e.onUserInput,
					I = (0, h.$G)().t,
					P = (0, m.Z)((0, eW.RO)(), 1)[0],
					U = re(T).priceImpactWithoutFee,
					E = function(e) {
						var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6.gv,
							r = arguments.length > 2 ? arguments[2] : void 0,
							i = (0, eZ.Z)(),
							o = i.account,
							a = i.chainId,
							s = null === r ? o : r,
							u = (0, t4.Z)(),
							c = (n = (0, H.g)().chainId, (0, eX.cq)(t8[n], t7, !0));
						return (0, b.useMemo)(function() {
							if (!e || !s || !o || !a || !u || !c) return [];
							var n, r, i, l, d, p, m, h, x, f, g = [];
							return e.tradeType === eT.YL.EXACT_INPUT && g.push((n = {
								feeOnTransfer: !0,
								allowedSlippage: new eT.gG(eT.QA.BigInt(t), nr.PM),
								recipient: s,
								deadline: u.toNumber()
							}, d = e.inputAmount.currency.isNative, p = e.outputAmount.currency.isNative, (0, t3.Z)(!(d && p), "ETHER_IN_OUT"), (0, t3.Z)(!("ttl" in n) || n.ttl > 0, "TTL"), m = rr(na.ho.maximumAmountIn(e, n.allowedSlippage)), h = rr(na.ho.minimumAmountOut(e, n.allowedSlippage)), x = e.route.path.map(function(n, t) {
								return 0 === t && e.inputAmount.currency.isNative || t === e.route.path.length - 1 && e.outputAmount.currency.isNative ? rt : n.isToken ? n.address : rt
							}), f = e.route.pairs.map(function(e) {
								return (0, na.yO)(e) ? "0x0" : "0x1"
							}), 2 === x.length ? (r = "swap", i = [x[0], x[1], m, h, f[0]], l = d ? m : "0x0") : (r = "swapMulti", i = [x, m, h, f], l = d ? m : "0x0"), {
								methodName: r,
								args: i,
								value: l
							})), g.map(function(e) {
								return {
									parameters: e,
									contract: c
								}
							})
						}, [o, t, a, c, u, s, e])
					}(T, A, C),
					k = function(e) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t6.gv,
							t = arguments.length > 2 ? arguments[2] : void 0,
							r = arguments.length > 3 ? arguments[3] : void 0,
							i = (0, eZ.Z)(),
							o = i.account,
							a = i.chainId,
							s = (0, eW.Fh)(),
							u = (0, h.$G)().t,
							l = (0, eB.h7)(),
							d = null === t ? o : t;
						return (0, b.useMemo)(function() {
							var i;
							return e && o && a ? d ? {
								state: c.VALID,
								callback: (i = (0, eO.Z)(function() {
									var i, c, p, m, h, x, f, g, y, T;
									return (0, eM.__generator)(this, function(j) {
										switch (j.label) {
											case 0:
												return [4, Promise.all(r.map(function(e) {
													var n, t = e.parameters,
														r = t.methodName,
														i = t.args,
														o = t.value,
														a = e.contract,
														s = !o || (0, ro.Z)(o) ? {} : {
															value: o
														};
													return (n = a.estimateGas)[r].apply(n, (0, ri.Z)(i).concat([s])).then(function(n) {
														return {
															call: e,
															gasEstimate: n
														}
													}).catch(function(n) {
														var t;
														return console.error("Gas estimate failed, trying eth_call to extract error", e), (t = a.callStatic)[r].apply(t, (0, ri.Z)(i).concat([s])).then(function(t) {
															return console.error("Unexpected successful call after failed estimate gas", e, n, t), {
																call: e,
																error: u("Unexpected issue with estimating the gas. Please try again.")
															}
														}).catch(function(n) {
															return console.error("Call threw error", e, n), {
																call: e,
																error: (0, rs.e)(n, u)
															}
														})
													})
												}))];
											case 1:
												if (!(c = (i = j.sent()).find(function(e, n, t) {
														return "gasEstimate" in e && (n === t.length - 1 || "gasEstimate" in t[n + 1])
													}))) {
													if ((p = i.filter(function(e) {
															return "error" in e
														})).length > 0) throw Error(p[p.length - 1].error);
													throw Error(u("Unexpected error. Could not estimate gas for the swap."))
												}
												return h = (m = c.call).contract, f = (x = m.parameters).methodName, g = x.args, y = x.value, T = c.gasEstimate, [2, h[f].apply(h, (0, ri.Z)(g).concat([(0, e5.Z)({
													gasLimit: (0, eV.yC)(T),
													gasPrice: s
												}, y && !(0, ro.Z)(y) ? {
													value: y,
													from: o
												} : {
													from: o
												})])).then(function(r) {
													var i = e.inputAmount.currency.symbol,
														s = e.outputAmount.currency.symbol,
														u = (0, nt.P4)(n),
														c = e.tradeType === eT.YL.EXACT_INPUT ? e.inputAmount.toSignificant(3) : na.ho.maximumAmountIn(e, u).toSignificant(3),
														p = e.tradeType === eT.YL.EXACT_OUTPUT ? e.outputAmount.toSignificant(3) : na.ho.minimumAmountOut(e, u).toSignificant(3),
														m = "Swap ".concat(e.tradeType === eT.YL.EXACT_OUTPUT ? "max." : "", " ").concat(c, " ").concat(i, " for ").concat(e.tradeType === eT.YL.EXACT_INPUT ? "min." : "", " ").concat(p, " ").concat(s),
														h = t && (0, eV.UJ)(t) ? (0, ti.Z)(t) : t;
													return l(r, {
														summary: d === o ? m : "".concat(m, " to ").concat(h),
														translatableSummary: {
															text: e.tradeType === eT.YL.EXACT_OUTPUT ? d === o ? "Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol%" : "Swap max. %inputAmount% %inputSymbol% for %outputAmount% %outputSymbol% to %recipientAddress%" : d === o ? "Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol%" : "Swap %inputAmount% %inputSymbol% for min. %outputAmount% %outputSymbol% to %recipientAddress%",
															data: (0, e5.Z)({
																inputAmount: c,
																inputSymbol: i,
																outputAmount: p,
																outputSymbol: s
															}, d !== o && {
																recipientAddress: h
															})
														},
														type: "swap"
													}), (0, ra.M)({
														chainId: a,
														inputAmount: c,
														outputAmount: p,
														input: e.inputAmount.currency,
														output: e.outputAmount.currency
													}), (0, ra.u)({
														account: o,
														chainId: a,
														hash: r.hash
													}), r.hash
												}).catch(function(e) {
													if ((null == e ? void 0 : e.code) === 4001) throw Error("Transaction rejected.");
													throw console.error("Swap failed", e, f, g, y), Error(u("Swap failed: %message%", {
														message: (0, rs.e)(e, u)
													}))
												})]
										}
									})
								}), function() {
									return i.apply(this, arguments)
								}),
								error: null
							} : null !== t ? {
								state: c.INVALID,
								callback: null,
								error: "Invalid recipient"
							} : {
								state: c.LOADING,
								callback: null,
								error: null
							} : {
								state: c.INVALID,
								callback: null,
								error: "Missing dependencies"
							}
						}, [e, o, a, d, t, r, s, u, l, n])
					}(T, A, C, E),
					N = k.callback,
					D = k.error,
					L = (0, m.Z)((0, b.useState)({
						tradeToConfirm: void 0,
						attemptingTxn: !1,
						swapErrorMessage: void 0,
						txHash: void 0
					}), 2),
					F = L[0],
					O = F.tradeToConfirm,
					M = F.swapErrorMessage,
					B = F.attemptingTxn,
					X = F.txHash,
					Y = L[1],
					R = (0, b.useCallback)(function() {
						(!U || tC(U, I)) && N && (Y({
							attemptingTxn: !0,
							tradeToConfirm: O,
							swapErrorMessage: void 0,
							txHash: void 0
						}), N().then(function(e) {
							Y({
								attemptingTxn: !1,
								tradeToConfirm: O,
								swapErrorMessage: void 0,
								txHash: e
							})
						}).catch(function(e) {
							Y({
								attemptingTxn: !1,
								tradeToConfirm: O,
								swapErrorMessage: e.message,
								txHash: void 0
							})
						}))
					}, [U, N, O, I, Y]),
					W = (0, b.useCallback)(function() {
						Y({
							tradeToConfirm: T,
							swapErrorMessage: M,
							txHash: X,
							attemptingTxn: B
						})
					}, [B, M, T, X, Y]),
					G = (0, b.useCallback)(function() {
						Y({
							tradeToConfirm: O,
							attemptingTxn: B,
							swapErrorMessage: M,
							txHash: X
						}), X && S(Z.gN.INPUT, "")
					}, [B, S, M, O, X, Y]),
					V = (0, m.Z)((0, b.useState)(!1), 2),
					$ = V[0],
					q = V[1],
					K = (0, m.Z)((0, nS.Z)((0, l.jsx)(rx, {
						customOnDismiss: function() {
							return q(!0)
						},
						mode: n_.a.SWAP_LIQUIDITY
					})), 1)[0],
					Q = (0, m.Z)((0, nS.Z)((0, l.jsx)(rh, {
						trade: T,
						originalTrade: O,
						currencyBalances: v,
						onAcceptChanges: W,
						attemptingTxn: B,
						txHash: X,
						recipient: C,
						allowedSlippage: A,
						onConfirm: R,
						swapErrorMessage: M,
						customOnDismiss: G,
						openSettingModal: K
					}), !0, !0, "confirmSwapModal"), 1)[0],
					J = (0, b.useCallback)(function() {
						y ? R() : (Y({
							tradeToConfirm: T,
							attemptingTxn: !1,
							swapErrorMessage: void 0,
							txHash: void 0
						}), Q())
					}, [y, R, Q, T]);
				(0, b.useEffect)(function() {
					$ && (q(!1), Y(function(e) {
						return (0, e6.Z)((0, e5.Z)({}, e), {
							swapErrorMessage: void 0
						})
					}), Q())
				}, [$, Q, Y]);
				var ee = (0, nt.oX)(U);
				if (r) return (0, l.jsx)(_.Z, {
					width: "100%",
					disabled: !0,
					children: I("Unsupported Asset")
				});
				if (!i) return (0, l.jsx)(nq.Z, {
					width: "100%"
				});
				if (o) return (0, l.jsx)(n$.A, {
					width: "100%",
					disabled: Boolean(a),
					onClick: u,
					children: null != a ? a : d === s.WRAP ? "Wrap" : d === s.UNWRAP ? "Unwrap" : null
				});
				var en = !(null == T ? void 0 : T.route),
					et = Boolean(g[Z.gN.INPUT] && g[Z.gN.OUTPUT] && (null == w ? void 0 : w.greaterThan(nr.iV)));
				if (en && et) return (0, l.jsxs)(nV.h2, {
					style: {
						textAlign: "center",
						padding: "0.75rem"
					},
					children: [(0, l.jsx)(z.Z, {
						color: "textSubtle",
						children: I("Insufficient liquidity for this trade.")
					}), P && (0, l.jsx)(z.Z, {
						color: "textSubtle",
						children: I("Try enabling multi-hop trades.")
					})]
				});
				var er = !j && (p === eF.UK.NOT_APPROVED || p === eF.UK.PENDING || f && p === eF.UK.APPROVED) && !(ee > 3 && !y),
					ei = !j,
					eo = p === eF.UK.APPROVED;
				return er ? (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)(eD.m0, {
						children: [(0, l.jsx)(n$.A, {
							variant: p === eF.UK.APPROVED ? "success" : "primary",
							onClick: x,
							disabled: p !== eF.UK.NOT_APPROVED || f,
							width: "48%",
							children: p === eF.UK.PENDING ? (0, l.jsxs)(eD.BA, {
								gap: "6px",
								justify: "center",
								children: [I("Enabling"), " ", (0, l.jsx)(nK.Z, {
									stroke: "white"
								})]
							}) : f && eo ? I("Enabled") : I("Enable %asset%", {
								asset: null !== (t = null === (n = g[Z.gN.INPUT]) || void 0 === n ? void 0 : n.symbol) && void 0 !== t ? t : ""
							})
						}), (0, l.jsx)(n$.A, {
							variant: ei && ee > 2 ? "danger" : "primary",
							onClick: function() {
								J()
							},
							width: "48%",
							id: "swap-button",
							disabled: !ei || !eo || ee > 3 && !y,
							children: ee > 3 && !y ? I("Price Impact High") : ee > 2 ? I("Swap Anyway") : I("Swap")
						})]
					}), (0, l.jsx)(eN.ZP, {
						style: {
							marginTop: "1rem"
						},
						children: (0, l.jsx)(tv, {
							steps: [p === eF.UK.APPROVED]
						})
					}), y && M ? (0, l.jsx)(ni.rn, {
						error: M
					}) : null]
				}) : (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsx)(n$.A, {
						variant: ei && ee > 2 && !D ? "danger" : "primary",
						onClick: function() {
							J()
						},
						id: "swap-button",
						width: "100%",
						disabled: !ei || ee > 3 && !y || !!D || !eo,
						children: j || (ee > 3 && !y ? I("Price Impact Too High") : ee > 2 ? I("Swap Anyway") : I("Swap"))
					}), y && M ? (0, l.jsx)(ni.rn, {
						error: M
					}) : null]
				})
			}
			var rg = t(9270),
				ry = t(13776),
				rT = t(42195),
				rj = {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				rb = (0, O.getAddress)("0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE");

			function rv(e, n) {
				return function(t, r, i) {
					var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
						a = o.maxHops,
						s = void 0 === a ? 3 : a,
						u = (0, ew.YD)(null == t ? void 0 : t.currency, r),
						c = (0, b.useDeferredValue)(null == t ? void 0 : t.quotient.toString());
					return (0, tZ.ZP)(t ? [e, "swap", i, t.currency.chainId, t.currency.symbol, r.symbol, c, s, u] : null, function() {
						return n({
							amount: t,
							currency: r,
							tradeType: i,
							allCommonPairs: u,
							trader: "",
							maxHops: s
						})
					}, {
						use: [rT.XS]
					}).data
				}
			}

			function rC(e) {
				return function(n, t, r) {
					var i, o = e === eT.YL.EXACT_INPUT ? n.currency : t,
						a = e === eT.YL.EXACT_INPUT ? t : n.currency,
						s = n.quotient.toString();
					return i = {
						networkId: o.chainId,
						baseToken: o.isToken ? o.address : rb,
						baseTokenName: null == o ? void 0 : o.name,
						baseTokenAmount: e === eT.YL.EXACT_INPUT ? s : void 0,
						baseTokenNumDecimals: null == o ? void 0 : o.decimals,
						quoteToken: a.isToken ? a.address : rb,
						quoteTokenAmount: e === eT.YL.EXACT_OUTPUT ? s : void 0,
						quoteTokenName: null == a ? void 0 : a.name,
						quoteTokenNumDecimals: null == a ? void 0 : a.decimals,
						trader: r
					}, fetch("/smartRouter", {
						method: "POST",
						headers: rj,
						body: JSON.stringify(i)
					}).then(function(e) {
						return e.json()
					})
				}
			}
			var rA = rC(eT.YL.EXACT_INPUT),
				rw = rC(eT.YL.EXACT_OUTPUT),
				rZ = rv("tradeFromChain", (o = (0, eO.Z)(function(e) {
					var n, t, r, i, o;
					return (0, eM.__generator)(this, function(a) {
						return n = e.amount, t = e.currency, r = e.tradeType, i = e.allCommonPairs, o = e.maxHops, [2, (r === eT.YL.EXACT_INPUT ? na.ZS : na.MV)(n, t, {
							provider: d.Ap,
							allCommonPairs: i,
							maxHops: o
						})]
					})
				}), function(e) {
					return o.apply(this, arguments)
				}));
			rv("tradeFromApi", (a = (0, eO.Z)(function(e) {
				var n, t, r, i, o, a, s;
				return (0, eM.__generator)(this, function(u) {
					switch (u.label) {
						case 0:
							return n = e.amount, t = e.currency, r = e.tradeType, i = e.trader, [4, (r === eT.YL.EXACT_INPUT ? rA : rw)(n, t, i)];
						case 1:
							if (!(o = u.sent())) return [2, null];
							return a = (0, ry.iG)(o.route.input), s = (0, ry.iG)(o.route.output), [2, {
								tradeType: o.tradeType,
								route: (0, e6.Z)((0, e5.Z)({}, o.route), {
									input: a,
									output: s,
									pairs: o.route.pairs.map(function(e) {
										var n = (0, ry.iG)(e.token0),
											t = (0, ry.iG)(e.token1),
											r = eT.ih.fromRawAmount(n, e.reserve0),
											i = eT.ih.fromRawAmount(t, e.reserve1),
											o = new eT.sO(r, i);
										return e.stableSwapAddress ? (0, na.Ez)(o, e.stableSwapAddress) : o
									}),
									path: o.route.path.map(function(e) {
										return (0, ry.iG)(e)
									})
								}),
								inputAmount: eT.ih.fromRawAmount(a, o.inputAmount),
								outputAmount: eT.ih.fromRawAmount(s, o.outputAmount)
							}]
					}
				})
			}), function(e) {
				return a.apply(this, arguments)
			}));
			var rS = ["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"],
				rI = function(e) {
					var n = e.trade,
						t = e.v2Trade;
					return !!(n && t && n.inputAmount.currency.equals(t.inputAmount.currency) && n.outputAmount.currency.equals(t.outputAmount.currency) && (n.tradeType !== t.tradeType || n.inputAmount.equalTo(t.inputAmount)) && function(e, n) {
						if (e.length !== n.length) return !1;
						for (var t = 0; t < e.length; t += 1)
							if (!e[t].equals(n[t])) return !1;
						return !0
					}(n.route.path, t.route.path)) && n.route.routeType !== na.Yt.V2 && n.outputAmount.greaterThan(t.outputAmount)
				};

			function rP() {
				var e, n, t, r, i, o, a, u, c, d, x, g, y, T, j, C, A, I, P, U, E, k, D, L, F, O, M, X, Y, R, G, H, V, $, q, K, Q, J, ee, en, et, er, ei, eo, ea, es, eu, ec, el, ed, ep, em, eh, ex, ef, eg, ey, eH, e$, eq, eK, eQ, eJ, e0, e1, e2, e5, e6, e4, e3, e7, e8, ne, nn, no, ns, nu, nc, nl = (0, b.useContext)(nB).isAccessTokenSupported,
					nd = (0, h.$G)().t,
					np = tS(),
					nm = np.refreshBlockNumber,
					nh = np.isLoading,
					nx = (Y = (0, tI.useRouter)(), R = (0, S.jj)(), H = (G = (0, eZ.Z)()).chainId, V = G.isWrongNetwork, q = ($ = (0, m.Z)((0, b.useState)(null), 2))[0], K = $[1], J = (Q = [(0, w.U8)(null == R ? void 0 : R.inputCurrencyId), (0, w.U8)(null == R ? void 0 : R.outputCurrencyId)])[0], ee = Q[1], en = (0, b.useMemo)(function() {
						return null !== (X = [J, ee].filter(function(e) {
							return null == e ? void 0 : e.isToken
						})) && void 0 !== X ? X : []
					}, [J, ee]), et = (0, w.e_)(), er = !V && en ? en.filter(function(e) {
						return !(e.address in et) && e.chainId === H
					}) : [], ei = (0, m.Z)((0, nS.Z)((0, l.jsx)(t5, {
						swapCurrency: q
					}), !1), 1)[0], eo = (0, m.Z)((0, nS.Z)((0, l.jsx)(tB.Z, {
						tokens: er,
						onCancel: function() {
							return Y.push("/swap")
						}
					})), 1)[0], (0, b.useEffect)(function() {
						q && ei()
					}, [q]), ea = (0, b.useCallback)(function(e) {
						t_.some(function(n) {
							return n.equals(e)
						}) ? K(e) : K(null)
					}, []), (0, b.useEffect)(function() {
						er.length > 0 && eo()
					}, [er.length]), ea),
					nf = (0, v.Dv)(N.HW),
					ng = (0, eZ.Z)(),
					ny = ng.account,
					nT = ng.chainId,
					nj = (0, m.Z)((0, eW.DG)(), 1)[0],
					nb = (0, m.Z)((0, eW.$2)(), 1)[0],
					nv = (0, m.Z)((0, b.useState)(function() {
						return !1
					}), 2),
					nC = nv[0],
					nA = nv[1],
					nZ = (0, S.dU)(),
					nI = nZ.independentField,
					nP = nZ.typedValue,
					nU = nZ.recipient,
					nE = nZ[Z.gN.INPUT].currencyId,
					nk = nZ[Z.gN.OUTPUT].currencyId,
					nN = (0, w.U8)(nE),
					nD = (0, w.U8)(nk),
					nL = (0, b.useMemo)(function() {
						var e;
						return e = {}, (0, p.Z)(e, Z.gN.INPUT, null != nN ? nN : void 0), (0, p.Z)(e, Z.gN.OUTPUT, null != nD ? nD : void 0), e
					}, [nN, nD]),
					nF = (0, m.Z)((0, eI.y)(), 1)[0],
					nO = (0, S.SM)(nI, nP, nN, nD, nU),
					nM = nO.v2Trade,
					n_ = nO.inputError,
					nz = (e = nI, n = nP, t = nN, r = nD, i = nU, d = (0, rg.Ge)().account, x = (0, h.$G)().t, g = (0, m.Z)((0, eW.RO)(), 1)[0], y = null !== (o = null === i ? d : (0, eV.UJ)(i) || null) && void 0 !== o ? o : null, T = (0, ez.K5)(null != d ? d : void 0, [null != t ? t : void 0, null != r ? r : void 0]), C = (j = e === Z.gN.INPUT) ? t : r, A = (0, e_.Z)(n, null != C ? C : void 0), I = j ? eT.YL.EXACT_INPUT : eT.YL.EXACT_OUTPUT, P = rZ(A, j ? r : t, I, {
						maxHops: g ? 1 : 3
					}), U = (a = {}, (0, p.Z)(a, Z.gN.INPUT, T[0]), (0, p.Z)(a, Z.gN.OUTPUT, T[1]), a), E = (u = {}, (0, p.Z)(u, Z.gN.INPUT, null != t ? t : void 0), (0, p.Z)(u, Z.gN.OUTPUT, null != r ? r : void 0), u), d || (c = x("Connect Wallet")), A || (c = null != c ? c : x("Enter an amount")), E[Z.gN.INPUT] && E[Z.gN.OUTPUT] || (c = null != c ? c : x("Select a token")), k = (0, eV.UJ)(y), y && k ? (-1 !== rS.indexOf(k) || P && (P.route.path.some(function(e) {
						return e.isToken && e.address === k
					}) || P.route.pairs.some(function(e) {
						var n;
						return (null == e ? void 0 : e.stableSwapAddress) === k || (null == e ? void 0 : null === (n = e.liquidityToken) || void 0 === n ? void 0 : n.address) === k
					}))) && (c = null != c ? c : x("Invalid recipient")) : c = null != c ? c : x("Enter a recipient"), D = (0, m.Z)((0, eW.$2)(), 1)[0], L = P && D && rn(P, D), O = (F = [U[Z.gN.INPUT], L ? L[Z.gN.INPUT] : null])[0], M = F[1], O && M && O.lessThan(M) && (c = x("Insufficient %symbol% balance", {
						symbol: M.currency.symbol
					})), {
						trade: P,
						currencies: E,
						currencyBalances: U,
						parsedAmount: A,
						inputError: c
					}),
					nX = nz.trade,
					nY = nz.currencyBalances,
					nR = nz.parsedAmount,
					nW = nz.inputError,
					nG = rI({
						trade: nX,
						v2Trade: nM
					}),
					nV = (eu = (es = {
						trade: nX,
						v2Trade: nM,
						useSmartRouter: (nC || nF) && nG,
						allowedSlippage: nb,
						chainId: nT,
						swapInputError: n_,
						stableSwapInputError: nW
					}).trade, ec = es.v2Trade, ed = void 0 === (el = es.useSmartRouter) || el, em = void 0 === (ep = es.allowedSlippage) ? 0 : ep, eh = es.chainId, ex = es.swapInputError, ef = es.stableSwapInputError, (0, b.useMemo)(function() {
						if (!eu && !ec) return null;
						var e = !(ed && eu) || (null == eu ? void 0 : eu.route.routeType) === na.Yt.V2;
						if (e) {
							if (ec) {
								var n = (0, nt.U7)(ec),
									t = n.priceImpactWithoutFee,
									r = n.realizedLPFee;
								return {
									tradeType: ec.tradeType,
									fallbackV2: e,
									route: ec.route,
									inputAmount: ec.inputAmount,
									outputAmount: ec.outputAmount,
									slippageAdjustedAmounts: (0, nt.b5)(ec, em),
									executionPrice: ec.executionPrice,
									routerAddress: nr.bR[eh],
									priceImpactWithoutFee: t,
									realizedLPFee: r,
									inputError: ex
								}
							}
							return null
						}
						var i = re(eu),
							o = i.priceImpactWithoutFee,
							a = i.realizedLPFee;
						return {
							tradeType: eu.tradeType,
							fallbackV2: e,
							route: eu.route,
							inputAmount: eu.inputAmount,
							outputAmount: eu.outputAmount,
							slippageAdjustedAmounts: rn(eu, em),
							executionPrice: na.ho.executionPrice(eu),
							routerAddress: t8[eh],
							priceImpactWithoutFee: o,
							realizedLPFee: a,
							inputError: ef
						}
					}, [ed, eu, ec, em, eh, ef, ex])),
					n$ = (eg = nL[Z.gN.INPUT], ey = nL[Z.gN.OUTPUT], eH = (0, h.$G)().t, eq = (e$ = (0, eZ.Z)()).chainId, eK = e$.account, eQ = (0, eY.d)().callWithGasPrice, eJ = (0, eX.vR)(), e0 = (0, ez._h)(null != eK ? eK : void 0, eg), e1 = (0, b.useMemo)(function() {
						return (0, e_.Z)(nP, eg)
					}, [eg, nP]), e2 = (0, eB.h7)(), (0, b.useMemo)(function() {
						if (!eJ || !eq || !eg || !ey) return eR;
						var e, n, t = e1 && e0 && !e0.lessThan(e1);
						return (null == eg ? void 0 : eg.isNative) && (null === (e = eT.FX[eq]) || void 0 === e ? void 0 : e.equals(ey)) ? {
							wrapType: s.WRAP,
							execute: t && e1 ? (0, eO.Z)(function() {
								var e, n, t, r;
								return (0, eM.__generator)(this, function(i) {
									switch (i.label) {
										case 0:
											return i.trys.push([0, 2, , 3]), [4, eQ(eJ, "deposit", void 0, {
												value: "0x".concat(e1.quotient.toString(16))
											})];
										case 1:
											return e = i.sent(), n = e1.toSignificant(6), t = eg.symbol, r = eT.FX[eq].symbol, e2(e, {
												summary: "Wrap ".concat(n, " ").concat(t, " to ").concat(r),
												translatableSummary: {
													text: "Wrap %amount% %native% to %wrap%",
													data: {
														amount: n,
														native: t,
														wrap: r
													}
												},
												type: "wrap"
											}), [3, 3];
										case 2:
											return console.error("Could not deposit", i.sent()), [3, 3];
										case 3:
											return [2]
									}
								})
							}) : void 0,
							inputError: t ? void 0 : eH("Insufficient %symbol% balance", {
								symbol: eg.symbol
							})
						} : (null === (n = eT.FX[eq]) || void 0 === n ? void 0 : n.equals(eg)) && (null == ey ? void 0 : ey.isNative) ? {
							wrapType: s.UNWRAP,
							execute: t && e1 ? (0, eO.Z)(function() {
								var e, n, t, r;
								return (0, eM.__generator)(this, function(i) {
									switch (i.label) {
										case 0:
											return i.trys.push([0, 2, , 3]), [4, eQ(eJ, "withdraw", ["0x".concat(e1.quotient.toString(16))])];
										case 1:
											return e = i.sent(), n = e1.toSignificant(6), t = eT.FX[eq].symbol, r = ey.symbol, e2(e, {
												summary: "Unwrap ".concat(n, " ").concat(t, " to ").concat(r),
												translatableSummary: {
													text: "Unwrap %amount% %wrap% to %native%",
													data: {
														amount: n,
														wrap: t,
														native: r
													}
												}
											}), [3, 3];
										case 2:
											return console.error("Could not withdraw", i.sent()), [3, 3];
										case 3:
											return [2]
									}
								})
							}) : void 0,
							inputError: t ? void 0 : eH("Insufficient %symbol% balance", {
								symbol: eg.symbol
							})
						} : eR
					}, [eJ, eq, eg, ey, eH, e1, e0, e2, eQ])),
					nq = n$.wrapType,
					nK = n$.execute,
					nQ = n$.inputError,
					nJ = nq !== s.NOT_APPLICABLE,
					n0 = nJ ? (nn = {}, (0, p.Z)(nn, Z.gN.INPUT, nR), (0, p.Z)(nn, Z.gN.OUTPUT, nR), nn) : (no = {}, (0, p.Z)(no, Z.gN.INPUT, nI === Z.gN.INPUT ? nR : null == nV ? void 0 : nV.inputAmount), (0, p.Z)(no, Z.gN.OUTPUT, nI === Z.gN.OUTPUT ? nR : null == nV ? void 0 : nV.outputAmount), no),
					n1 = (0, eS._)(),
					n2 = n1.onSwitchTokens,
					n9 = n1.onCurrencySelection,
					n5 = n1.onUserInput,
					n6 = n1.onChangeRecipient,
					n4 = nI === Z.gN.INPUT ? Z.gN.OUTPUT : Z.gN.INPUT,
					n3 = (0, b.useCallback)(function(e) {
						n5(Z.gN.INPUT, e)
					}, [n5]),
					n7 = (0, b.useCallback)(function(e) {
						n5(Z.gN.OUTPUT, e)
					}, [n5]),
					n8 = (nc = {}, (0, p.Z)(nc, nI, nP), (0, p.Z)(nc, n4, nJ ? null !== (ns = null === (e5 = n0[nI]) || void 0 === e5 ? void 0 : e5.toExact()) && void 0 !== ns ? ns : "" : null !== (nu = null === (e6 = n0[n4]) || void 0 === e6 ? void 0 : e6.toSignificant(6)) && void 0 !== nu ? nu : ""), nc),
					te = null == nV ? void 0 : nV.slippageAdjustedAmounts[Z.gN.INPUT],
					tn = (0, m.Z)((0, eF.qL)(te, null == nV ? void 0 : nV.routerAddress), 2),
					tt = tn[0],
					tr = tn[1],
					ti = (0, m.Z)((0, b.useState)(!1), 2),
					to = ti[0],
					ta = ti[1];
				(0, b.useEffect)(function() {
					tt === eF.UK.PENDING && ta(!0)
				}, [tt, to]);
				var ts = (0, eP.i)(nY[Z.gN.INPUT]),
					tu = Boolean(ts && (null === (e4 = n0[Z.gN.INPUT]) || void 0 === e4 ? void 0 : e4.equalTo(ts))),
					tc = (0, b.useCallback)(function(e) {
						ta(!1), n9(Z.gN.INPUT, e), nx(e);
						var n = (0, eG.H)(e);
						n === nk && (0, eE.Z)("outputCurrency", nE), (0, eE.Z)("inputCurrency", n)
					}, [nE, nk, n9, nx]),
					tl = (0, b.useCallback)(function() {
						ts && n5(Z.gN.INPUT, ts.toExact())
					}, [ts, n5]),
					td = (0, b.useCallback)(function(e) {
						n9(Z.gN.OUTPUT, e), nx(e);
						var n = (0, eG.H)(e);
						n === nE && (0, eE.Z)("inputCurrency", nk), (0, eE.Z)("outputCurrency", n)
					}, [nE, nk, n9, nx]),
					tp = (0, b.useCallback)(function(e) {
						ts && n5(Z.gN.INPUT, ts.multiply(new eT.gG(e, 100)).toExact())
					}, [ts, n5]),
					tm = (0, ew.mP)(null == nL ? void 0 : nL.INPUT, null == nL ? void 0 : nL.OUTPUT),
					th = Boolean(nR),
					tx = (0, b.useCallback)(function() {
						th && nm()
					}, [th, nm]),
					tf = !!nV && !nV.fallbackV2;
				(0, b.useEffect)(function() {
					tf && nI === Z.gN.OUTPUT && nM && n5(Z.gN.INPUT, nM.inputAmount.toSignificant(6))
				}, [tf, nI, n5, nM]), (0, b.useEffect)(function() {
					ta(!1)
				}, [tf]);
				var tg = (0, b.useCallback)(function() {
						return nA(!nC)
					}, [nC]),
					ty = nj && !nJ && !tf;
				return (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsx)(nH, {
						title: nd("Swap Slinky"),
						subtitle: nd("Swap Slinky in an instant"),
						hasAmount: th,
						onRefreshPrice: tx
					}), (0, l.jsxs)(ni.im, {
						id: "swap-page",
						style: {
							minHeight: "412px",
            background: "linear-gradient(to bottom, #333333, #666666)", // Dark to light grey gradient
            boxShadow: "inset 0 0 10px #999999", // Inner shadow for depth effect
            borderRadius: "0px", // Rounded corners
            border: "1px solid #999999", // Border for separation
            padding: "20px" // Add padding for inner content
						},
						children: [(0, l.jsxs)(eN.Tz, {
							gap: "sm",
							children: [(0, l.jsx)(ek.Z, {
								label: nd(nI === Z.gN.OUTPUT && !nJ && nV ? "From (estimated)" : "From"),
								value: n8[Z.gN.INPUT],
								showMaxButton: !tu,
								showQuickInputButton: !0,
								currency: nL[Z.gN.INPUT],
								onUserInput: n3,
								onPercentInput: tp,
								onMax: tl,
								onCurrencySelect: tc,
								otherCurrency: nL[Z.gN.OUTPUT],
								id: "swap-currency-input",
								showCommonBases: !0,
								showBUSD: !!(null === (e3 = nf[nT]) || void 0 === e3 ? void 0 : e3[nE]) || nE === (null === (e7 = eT.B5[nT]) || void 0 === e7 ? void 0 : e7.symbol),
								commonBasesType: eL.L0.SWAP_LIMITORDER
							}), (0, l.jsx)(eN.Tz, {
								justify: "space-between",
								children: (0, l.jsxs)(eD.BA, {
									justify: nj ? "space-between" : "center",
									style: {
										padding: "0 1rem"
									},
									children: [(0, l.jsx)(ej.H.SwitchButton, {
										onClick: function() {
											ta(!1), n2(), (0, eE.Z)("inputCurrency", nk), (0, eE.Z)("outputCurrency", nE)
										}
									}), ty && null === nU ? (0, l.jsx)(_.Z, {
										variant: "text",
										id: "add-recipient-button",
										onClick: function() {
											return n6("")
										},
										children: nd("+ Add a send (optional)")
									}) : null]
								})
							}), (0, l.jsx)(ek.Z, {
								value: n8[Z.gN.OUTPUT],
								onUserInput: n7,
								label: nd(nI === Z.gN.INPUT && !nJ && nV ? "To (estimated)" : "To"),
								showMaxButton: !1,
								currency: nL[Z.gN.OUTPUT],
								onCurrencySelect: td,
								otherCurrency: nL[Z.gN.INPUT],
								id: "swap-currency-output",
								showCommonBases: !0,
								disabled: tf,
								showBUSD: !!(null === (e8 = nf[nT]) || void 0 === e8 ? void 0 : e8[nk]) || nk === (null === (ne = eT.B5[nT]) || void 0 === ne ? void 0 : ne.symbol),
								commonBasesType: eL.L0.SWAP_LIMITORDER
							}), nl && (0, l.jsx)(W.ZP, {
								children: (0, l.jsx)(eU.Z, {
									inputCurrency: nL[Z.gN.INPUT],
									outputCurrency: nL[Z.gN.OUTPUT]
								})
							}), nG && !nF && (0, l.jsxs)(eN.Tz, {
								children: [nC && (0, l.jsx)(eb.Z, {
									variant: "warning",
									mb: "8px",
									children: (0, l.jsx)(eb.Y, {
										children: nd("This route includes StableSwap and can’t edit output")
									})
								}), (0, l.jsxs)(f.Z, {
									alignItems: "center",
									onClick: tg,
									children: [(0, l.jsx)(ev.Z, {
										scale: "sm",
										name: "allowUseSmartRouter",
										type: "checkbox",
										checked: nC,
										onChange: tg
									}), (0, l.jsx)(z.Z, {
										ml: "8px",
										style: {
											userSelect: "none"
										},
										children: nd("Use StableSwap for better fees")
									})]
								})]
							}), ty && null !== nU ? (0, l.jsxs)(l.Fragment, {
								children: [(0, l.jsxs)(eD.BA, {
									justify: "space-between",
									style: {
										padding: "0 1rem"
									},
									children: [(0, l.jsx)(ni.nR, {
										clickable: !1,
										children: (0, l.jsx)(eC.Z, {
											width: "16px"
										})
									}), (0, l.jsx)(_.Z, {
										variant: "text",
										id: "remove-recipient-button",
										onClick: function() {
											return n6(null)
										},
										children: nd("- Remove send")
									})]
								}), (0, l.jsx)(e9, {
									id: "recipient",
									value: nU,
									onChange: n6
								})]
							}) : null, nJ ? null : (0, l.jsx)(ej.H.Info, {
								price: Boolean(nV) && (0, l.jsxs)(l.Fragment, {
									children: [(0, l.jsx)(ej.H.InfoLabel, {
										children: nd("Price")
									}), nh ? (0, l.jsx)(B.Z, {
										width: "100%",
										ml: "8px",
										height: "24px"
									}) : (0, l.jsx)(ej.H.TradePrice, {
										price: null == nV ? void 0 : nV.executionPrice
									})]
								}),
								allowedSlippage: nb
							})]
						}), (0, l.jsx)(W.ZP, {
							mt: "0.25rem",
							children: (null == nV ? void 0 : nV.fallbackV2) ? (0, l.jsx)(tw, {
								swapIsUnsupported: tm,
								account: ny,
								showWrap: nJ,
								wrapInputError: nQ,
								onWrap: nK,
								wrapType: nq,
								parsedIndepentFieldAmount: n0[nI],
								approval: tt,
								approveCallback: tr,
								approvalSubmitted: to,
								currencies: nL,
								isExpertMode: nj,
								trade: nM,
								swapInputError: nV.inputError,
								currencyBalances: nY,
								recipient: nU,
								allowedSlippage: nb,
								onUserInput: n5
							}) : (0, l.jsx)(rf, {
								swapIsUnsupported: tm,
								account: ny,
								showWrap: nJ,
								wrapInputError: nQ,
								onWrap: nK,
								wrapType: nq,
								parsedIndepentFieldAmount: n0[nI],
								approval: tt,
								approveCallback: tr,
								approvalSubmitted: to,
								currencies: nL,
								isExpertMode: nj,
								trade: nX,
								swapInputError: n_,
								currencyBalances: nY,
								recipient: nU,
								allowedSlippage: nb,
								onUserInput: n5
							})
						})]
					}), tm ? (0, l.jsx)(eA.Z, {
						currencies: [nL.INPUT, nL.OUTPUT]
					}) : nV && (0, l.jsx)(nw, {
						hasStablePair: tf,
						pairs: nV.route.pairs,
						path: nV.route.path,
						priceImpactWithoutFee: nV.priceImpactWithoutFee,
						realizedLPFee: nV.realizedLPFee,
						slippageAdjustedAmounts: nV.slippageAdjustedAmounts,
						inputAmount: nV.inputAmount,
						outputAmount: nV.outputAmount,
						tradeType: nV.tradeType
					})]
				})
			}

			function rU() {
				var e = (0, U.Z)(["\n  flex-shrink: 0;\n  height: fit-content;\n  padding: 0 24px;\n\n  ", " {\n    padding: 0 40px;\n  }\n\n  ", " {\n    ", ";\n  }\n"]);
				return rU = function() {
					return e
				}, e
			}

			function rE() {
				var e = (0, U.Z)(["\n  width: 428px;\n"]);
				return rE = function() {
					return e
				}, e
			}
			var rk = (0, F.ZP)(f.Z).withConfig({
					componentId: "sc-ef5ecb2-0"
				})(rU(), function(e) {
					return e.theme.mediaQueries.lg
				}, function(e) {
					return e.theme.mediaQueries.xxl
				}, function(e) {
					return e.$isChartExpanded ? "padding: 0 120px" : "padding: 0 40px"
				}),
				rN = (0, F.ZP)(W.ZP).withConfig({
					componentId: "sc-ef5ecb2-1"
				})(rE());

			function rD() {
				var e, n = (0, x.Z)().isMobile,
					t = (0, b.useContext)(nB),
					r = t.isChartExpanded,
					i = t.isChartDisplayed,
					o = t.setIsChartDisplayed,
					a = t.setIsChartExpanded,
					s = t.isChartSupported,
					u = (0, m.Z)(A(), 2),
					c = u[0],
					d = u[1],
					v = (0, h.$G)().t,
					C = (0, S.dU)(),
					U = C[Z.gN.INPUT].currencyId,
					E = C[Z.gN.OUTPUT].currencyId,
					k = (0, w.U8)(U),
					N = (0, w.U8)(E),
					D = (e = {}, (0, p.Z)(e, Z.gN.INPUT, null != k ? k : void 0), (0, p.Z)(e, Z.gN.OUTPUT, null != N ? N : void 0), e),
					L = (0, S.yF)(U, k, E, N);
				return (0, l.jsx)(I.Z, {
					removePadding: r,
					hideFooterOnDesktop: r,
					children: (0, l.jsxs)(f.Z, {
						style: {
							backgroundColor: "#000000"
						},
						width: ["428px", "100%"],
						height: "100%",
						justifyContent: "center",
						position: "relative",
						alignItems: "flex-start",
						children: [!n && s && (0, l.jsx)(P.Z, {
							inputCurrencyId: U,
							inputCurrency: D[Z.gN.INPUT],
							outputCurrencyId: E,
							outputCurrency: D[Z.gN.OUTPUT],
							isChartExpanded: r,
							setIsChartExpanded: a,
							isChartDisplayed: i,
							currentSwapPrice: L
						}), s && (0, l.jsx)(g.Z, {
							content: (0, l.jsx)(P.Z, {
								inputCurrencyId: U,
								inputCurrency: D[Z.gN.INPUT],
								outputCurrencyId: E,
								outputCurrency: D[Z.gN.OUTPUT],
								isChartExpanded: r,
								setIsChartExpanded: a,
								isChartDisplayed: i,
								currentSwapPrice: L,
								isMobile: !0
							}),
							isOpen: i,
							setIsOpen: o
						}), !n && c && s && (0, l.jsx)(ey, {}), (0, l.jsx)(y.k, {
							isOpen: n && c && s,
							onDismiss: function() {
								return d(!1)
							},
							children: (0, l.jsx)(T.ZP, {
								style: {
									padding: 0
								},
								title: v("Top Token"),
								onDismiss: function() {
									return d(!1)
								},
								bodyPadding: "0px",
								children: (0, l.jsx)(ey, {})
							})
						}), (0, l.jsx)(f.Z, {
							flexDirection: "column",
							children: (0, l.jsx)(rk, {
								$isChartExpanded: r,
								children: (0, l.jsx)(rN, {
									mt: r ? "24px" : "0",
									children: (0, l.jsx)(j.j, {
										children: (0, l.jsx)(rP, {})
									})
								})
							})
						})]
					})
				})
			}
			var rL = function() {
				return (0, l.jsx)(nR, {
					children: (0, l.jsx)(rD, {})
				})
			};
			rL.chains = d.vo;
			var rF = rL
		},
		67831: function(e, n, t) {
			"use strict";
			t.d(n, {
				M: function() {
					return o
				},
				u: function() {
					return i
				}
			});
			var r = t(42029),
				i = function(e) {
					var n = e.account,
						t = e.hash,
						r = e.chainId;
					fetch("/api/_log/".concat(n, "/").concat(r, "/").concat(t))
				},
				o = function(e) {
					var n = e.input,
						t = e.output,
						i = e.inputAmount,
						o = e.outputAmount,
						a = e.chainId;
					try {
						r.cM.info("Swap", {
							inputAddress: n.isToken ? n.address.toLowerCase() : n.symbol,
							outputAddress: t.isToken ? t.address.toLowerCase() : t.symbol,
							inputAmount: i,
							outputAmount: o,
							chainId: a
						})
					} catch (s) {}
				}
		},
		25374: function(e, n, t) {
			"use strict";
			var r = t(70865),
				i = t(96670),
				o = t(26297),
				a = t(52322),
				s = t(24826);
			n.Z = function(e) {
				var n = e.value,
					t = (0, o.Z)(e, ["value"]);
				if (!n || Number.isNaN(n)) return (0, a.jsx)(s.Z, (0, i.Z)((0, r.Z)({}, t), {
					children: "-"
				}));
				var u = n < 0;
				return (0, a.jsxs)(s.Z, (0, i.Z)((0, r.Z)({}, t), {
					color: u ? "failure" : "success",
					children: [u ? "↓" : "↑", Math.abs(n).toFixed(2), "%"]
				}))
			}
		},
		17147: function(e, n, t) {
			"use strict";
			var r = t(70865),
				i = t(96670),
				o = t(52322);
			t(2784);
			var a = t(39017);
			n.Z = function(e) {
				return (0, o.jsx)(a.Z, (0, i.Z)((0, r.Z)({
					viewBox: "0 0 16 16"
				}, e), {
					children: (0, o.jsx)("path", {
						d: "M11.3933 3.03997C10.9266 2.35331 10.3933 1.71331 9.79329 1.13997C9.55996 0.913306 9.16663 1.12664 9.23329 1.44664C9.35996 2.07331 9.49329 2.89997 9.49329 3.63997C9.49329 5.01331 8.59329 6.12664 7.21996 6.12664C6.19329 6.12664 5.35329 5.50664 4.98663 4.61997C4.91996 4.48664 4.89329 4.40664 4.85329 4.25997C4.77996 3.97997 4.41329 3.89331 4.25329 4.13997C4.13329 4.31997 4.01996 4.49997 3.91329 4.69331C3.11996 6.05331 2.66663 7.63997 2.66663 9.33331C2.66663 12.28 5.05329 14.6666 7.99996 14.6666C10.9466 14.6666 13.3333 12.28 13.3333 9.33331C13.3333 7.00664 12.6133 4.84664 11.3933 3.03997ZM7.80663 12.6666C6.61996 12.6666 5.65996 11.7333 5.65996 10.5733C5.65996 9.49331 6.35996 8.73331 7.53329 8.49331C8.51329 8.29331 9.51996 7.87331 10.22 7.21331C10.4066 7.03997 10.7133 7.11997 10.7666 7.36664C10.92 8.04664 11 8.75331 11 9.46664C11.0066 11.2333 9.57329 12.6666 7.80663 12.6666Z"
					})
				}))
			}
		},
		83712: function(e, n, t) {
			"use strict";
			var r = t(70865),
				i = t(96670),
				o = t(52322);
			t(2784);
			var a = t(39017);
			n.Z = function(e) {
				return (0, o.jsxs)(a.Z, (0, i.Z)((0, r.Z)({
					viewBox: "0 0 24 24"
				}, e), {
					children: [(0, o.jsx)("path", {
						d: "M22.5 2l-20 20",
						stroke: "currentColor",
						strokeWidth: 2,
						strokeLinecap: "round"
					}), (0, o.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M7.66 20.372A7.966 7.966 0 0012.5 22c4.42 0 8-3.58 8-8 0-1.935-.332-3.793-.94-5.527l-2.851 2.851c.192.935.291 1.902.291 2.876.01 2.65-2.14 4.8-4.79 4.8a3.253 3.253 0 01-2.268-.909L7.66 20.372zM17.099 3.87a17.38 17.38 0 00-1.908-2.16c-.35-.34-.94-.02-.84.46.19.94.39 2.18.39 3.29 0 .292-.027.576-.08.848l2.438-2.438zM11.81 9.16c-.155.02-.315.031-.48.031-1.54 0-2.8-.93-3.35-2.26-.1-.2-.14-.32-.2-.54-.11-.42-.66-.55-.9-.18-.18.27-.35.54-.51.83A13.772 13.772 0 004.5 14c0 .752.104 1.48.298 2.17L11.81 9.16z"
					})]
				}))
			}
		},
		3098: function(e, n, t) {
			"use strict";
			var r = t(70865),
				i = t(96670),
				o = t(52322);
			t(2784);
			var a = t(39017);
			n.Z = function(e) {
				return (0, o.jsx)(a.Z, (0, i.Z)((0, r.Z)({
					viewBox: "0 0 24 24"
				}, e), {
					children: (0, o.jsx)("path", {
						d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z"
					})
				}))
			}
		},
		95919: function(e, n, t) {
			"use strict";
			var r = t(70865),
				i = t(96670),
				o = t(52322);
			t(2784);
			var a = t(39017);
			n.Z = function(e) {
				return (0, o.jsxs)(a.Z, (0, i.Z)((0, r.Z)({
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), {
					children: [(0, o.jsx)("path", {
						d: "M8.65 3.35002L5.86 6.14002C5.54 6.45002 5.76 6.99002 6.21 6.99002H8V13C8 13.55 8.45 14 9 14C9.55 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35 3.35002C9.16 3.16002 8.84 3.16002 8.65 3.35002Z"
					}), (0, o.jsx)("path", {
						d: "M16 11V17.01H17.8C18.24 17.01 18.47 17.55 18.15 17.86L15.36 20.64C15.16 20.83 14.85 20.83 14.65 20.64L11.86 17.86C11.54 17.55 11.76 17.01 12.21 17.01H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11Z"
					})]
				}))
			}
		},
		98772: function(e, n, t) {
			"use strict";

			function r(e) {
				return /^0x0*$/.test(e)
			}
			t.d(n, {
				Z: function() {
					return r
				}
			})
		}
	},
	function(e) {
		e.O(0, [1246, 2983, 4273, 2029, 5816, 6135, 9663, 7559, 4025, 8056, 6578, 3312, 51, 2499, 2796, 9774, 2888, 179], function() {
			return e(e.s = 68994)
		}), _N_E = e.O()
	}
]);
//# sourceMappingURL=swap-c10d3c39d73d65d4.js.map
