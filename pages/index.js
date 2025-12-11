(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    7291: function(n, t, e) {
        "use strict";
        e.r(t),
        e.d(t, {
            default: function() {
                return Q
            }
        });
        var i, o, r, s, a, c, l, d, h = e(5021), f = e(5052), p = e(9496), x = e(9675), g = e(2712), m = e(4637), u = function() {
            return (0,
            m.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "#fff",
                children: (0,
                m.jsx)("path", {
                    d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z"
                })
            })
        }, w = function() {
            return (0,
            m.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "28",
                width: "28",
                viewBox: "0 0 24 24",
                strokeWidth: "2",
                stroke: "currentColor",
                fill: "none",
                strokeLinejoin: "round",
                style: {
                    marginTop: "1px"
                },
                children: (0,
                m.jsx)("path", {
                    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                })
            })
        }, v = function() {
            return (0,
            m.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: (0,
                m.jsx)("path", {
                    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                })
            })
        }, j = function() {
            return (0,
            m.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                fill: "none",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [(0,
                m.jsx)("path", {
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                }), (0,
                m.jsx)("polyline", {
                    points: "22,6 12,13 2,6"
                })]
            })
        }, y = function() {
            return (0,
            m.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "29",
                height: "29",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                fill: "none",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [(0,
                m.jsx)("path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                }), (0,
                m.jsx)("rect", {
                    x: "2",
                    y: "9",
                    width: "4",
                    height: "12"
                }), (0,
                m.jsx)("circle", {
                    cx: "4",
                    cy: "4",
                    r: "2"
                })]
            })
        }, k = e(4125), b = e(1242);
        function Z() {
            var n, t = (0,
            b.qP)("705665813994012695").data;
            return t && t.spotify ? (0,
            m.jsxs)(B, {
                initial: {
                    opacity: 0,
                    y: -50
                },
                animate: {
                    opacity: 1,
                    y: -100
                },
                transition: {
                    duration: 1.25,
                    easing: [0, .5, .28, .99]
                },
                children: [(0,
                m.jsx)(M, {
                    children: "Listening to Spotify"
                }), (0,
                m.jsxs)(T, {
                    children: [(0,
                    m.jsx)(F, {
                        src: null !== (n = t.spotify.album_art_url) && void 0 !== n ? n : void 0
                    }), (0,
                    m.jsx)(I, {
                        src: "/assets/spotify-logo.svg"
                    }), (0,
                    m.jsxs)(O, {
                        children: [(0,
                        m.jsx)(W, {
                            href: "https://open.spotify.com/track/".concat(t.spotify.track_id),
                            target: "_blank",
                            children: t.spotify.song
                        }), (0,
                        m.jsx)(D, {
                            children: t.spotify.artist
                        })]
                    })]
                })]
            }) : (0,
            m.jsx)(m.Fragment, {})
        }
        var C, E, P, _, z, L, S, A, N, B = (0,
        x.ZP)(g.E.div)(i || (i = (0,
        h.Z)(["\n    font-family: Karla, sans-serif;\n    width: 20rem;\n    height: 7rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: start;\n\n    position: absolute;\n    left: auto;\n    top: 93%;\n\n    @media (max-height: 600px) {\n        display: none;\n    }\n"]))), M = (0,
        x.ZP)(g.E.p)(o || (o = (0,
        h.Z)(["\n    font-weight: 600;\n    color: #e6e6e6;\n    font-size: 1.1rem;\n    margin: 0 0 0.75rem 0;\n"]))), T = (0,
        x.ZP)(g.E.div)(r || (r = (0,
        h.Z)(["\n    width: 100%;\n    height: 6rem;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: start;\n"]))), F = (0,
        x.ZP)(g.E.img)(s || (s = (0,
        h.Z)(["\n    width: 5rem;\n    height: 5rem;\n    border-radius: 0.75rem;\n    margin-right: 1rem;\n    pointer-events: none;\n"]))), I = (0,
        x.ZP)(g.E.img)(a || (a = (0,
        h.Z)(["\n    position: absolute;\n    bottom: -5px;\n    left: 60px;\n    width: 1.75rem;\n    height: 1.75rem;\n    border-radius: 50%;\n    background-color: #000;\n    border: 2px solid #000;\n    pointer-events: none;\n"]))), O = (0,
        x.ZP)(g.E.div)(c || (c = (0,
        h.Z)(["\n    width: auto;\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n"]))), W = (0,
        x.ZP)(g.E.a)(l || (l = (0,
        h.Z)(["\n    font-weight: 500;\n    color: #e1eafd;\n    font-size: 1.15rem;\n    margin: 0.15rem 0;\n\n    &:hover {\n        text-decoration: underline;\n    }\n"]))), D = (0,
        x.ZP)(g.E.p)(d || (d = (0,
        h.Z)(["\n    font-weight: 400;\n    color: #cad2e0;\n    font-size: 1.05rem;\n    margin: 0.15rem 0;\n"]))), V = x.ZP.div(C || (C = (0,
        h.Z)(['\n    position: fixed;\n    inset: 0;\n    margin: 0;\n    height: 100vh;\n    font-size: 16px;\n    font-family: "Inter", sans-serif;\n    color: #fff;\n']))), X = (0,
        x.ZP)(g.E.img)(E || (E = (0,
        h.Z)(["\n    z-index: 0;\n    position: fixed;\n    top: -5rem;\n    right: 0;\n    object-fit: cover;\n\n    width: 100vw;\n    height: auto;\n    min-height: 70rem;\n    filter: grayscale(45%);\n    pointer-events: none;\n"]))), q = (0,
        x.ZP)(g.E.div)(P || (P = (0,
        h.Z)(["\n    z-index: 1;\n    position: fixed;\n    top: 50%;\n    left: 0;\n    transform: translate(0, -50%);\n    width: 20%;\n    min-width: 25rem;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.9);\n    overflow: hidden;\n    box-shadow: 0px 0px 100px 150px rgba(0, 0, 0, 0.9);\n\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    justify-content: center;\n    padding-left: 4rem;\n\n    & > * {\n        margin-bottom: 25px;\n    }\n"]))), H = (0,
        x.ZP)(g.E.div)(_ || (_ = (0,
        h.Z)(["\n    font-size: 2rem;\n    font-weight: 600;\n"]))), K = (0,
        x.ZP)(g.E.div)(z || (z = (0,
        h.Z)(["\n    font-size: 1.4rem;\n    font-weight: 400;\n    margin-top: -20px;\n    color: #7b8290;\n"]))), U = (0,
        x.ZP)(g.E.a)(L || (L = (0,
        h.Z)(["\n    color: ", ';\n    text-decoration: none;\n    transition: color 0.15s ease-in-out;\n    position: relative;\n\n    &:hover {\n        color: #fff;\n    }\n\n    &:before {\n        content: "";\n        position: absolute;\n        width: 0;\n        height: 2px;\n        bottom: -1px;\n        left: 0;\n        background-color: #fff;\n        visibility: hidden;\n        transition: all 0.3s ease-in-out;\n    }\n\n    &:hover:before {\n        visibility: visible;\n        width: 100%;\n    }\n'])), (function(n) {
            return n.color
        }
        )), Y = (0,
        x.ZP)(g.E.a)(S || (S = (0,
        h.Z)(["\n    color: ", ";\n    text-decoration: none;\n    transition: color 0.15s ease-in-out;\n    position: relative;\n\n    &:hover {\n        color: #fff;\n    }\n"])), (function(n) {
            return n.color
        }
        )), G = (0,
        x.ZP)(g.E.div)(A || (A = (0,
        h.Z)(["\n    font-size: 1.25rem;\n    font-weight: 300;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: start;\n    height: 1.25rem;\n    padding: 2px 0;\n\n    & > * {\n        margin-right: 15px;\n    }\n"]))), J = (0,
        x.ZP)(g.E.div)(N || (N = (0,
        h.Z)(["\n    display: flex;\n    flex-direction: row;\n\n    height: auto;\n    width: 100%;\n    color: #ddd;\n\n    & > * {\n        margin-right: 15px;\n    }\n"]))), Q = function() {
            var n = {
                init: {
                    opacity: 0,
                    x: 25
                },
                load: {
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: .5,
                        ease: "easeInOut"
                    }
                }
            }
              , t = {
                init: {
                    opacity: 0,
                    y: 10
                },
                load: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .5,
                        ease: "easeInOut"
                    }
                }
            }
              , e = (0,
            p.useState)("00:00:00 p.m.")
              , i = e[0]
              , o = e[1]
              , r = (0,
            p.useState)({
                spotify: null
            })
              , s = (0,
            f.Z)(r, 2)
              , a = (s[0],
            s[1]);
            function c() {
                var n = (new Date).toLocaleString("en-US", {
                    timeZone: "America/New_York"
                });
                o(n.toLowerCase().slice(-11, -1) + ".m."),
                setTimeout(c, 1e3)
            }
            return (0,
            p.useEffect)((function() {
                c()
            }
            ), []),
            (0,
            p.useEffect)((function() {
                fetch("/api/fetchPresence").then((function(n) {
                    return console.log(n),
                    n.json()
                }
                )).then((function(n) {
                    return a(n.data)
                }
                ))
            }
            ), []),
            (0,
            m.jsxs)(m.Fragment, {
                children: [(0,
                m.jsxs)(k.default, {
                    children: [(0,
                    m.jsx)("meta", {
                        charSet: "utf-8"
                    }), (0,
                    m.jsx)("title", {
                        children: "Conrad Crawford"
                    }), (0,
                    m.jsx)("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }), (0,
                    m.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width,initial-scale=1"
                    }), (0,
                    m.jsx)("meta", {
                        name: "theme-color",
                        content: "#000000"
                    }), (0,
                    m.jsx)("meta", {
                        name: "keywords",
                        content: "cnrad, Conrad Crawford, Conrad, Crawford, web developer, github, typescript"
                    }), (0,
                    m.jsx)("meta", {
                        name: "description",
                        content: "Conrad Crawford - Full-stack TypeScript Developer."
                    }), (0,
                    m.jsx)("meta", {
                        name: "author",
                        content: "Conrad Crawford"
                    }), (0,
                    m.jsx)("link", {
                        rel: "apple-touch-icon",
                        href: "/apple-touch-icon.png"
                    }), (0,
                    m.jsx)("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }), (0,
                    m.jsx)("noscript", {
                        children: (0,
                        m.jsx)("style", {
                            children: "* {opacity: 1 !important;}"
                        })
                    })]
                }), (0,
                m.jsx)("link", {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com"
                }), (0,
                m.jsx)("link", {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com"
                }), (0,
                m.jsx)("link", {
                    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap",
                    rel: "stylesheet"
                }), (0,
                m.jsxs)(V, {
                    children: [(0,
                    m.jsxs)(q, {
                        initial: "init",
                        animate: "load",
                        variants: {
                            init: {
                                opacity: 1
                            },
                            load: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: .1
                                }
                            }
                        },
                        children: [(0,
                        m.jsx)(H, {
                            variants: n,
                            children: "Conrad Crawford"
                        }), (0,
                        m.jsxs)(K, {
                            variants: n,
                            children: ["Fullstack web", " ", (0,
                            m.jsx)(U, {
                                color: "#949eb3",
                                href: "https://github.com/cnrad",
                                children: "developer"
                            }), "."]
                        }), (0,
                        m.jsxs)(G, {
                            variants: n,
                            children: [(0,
                            m.jsx)(u, {}), i]
                        }), (0,
                        m.jsxs)(J, {
                            initial: "init",
                            animate: "load",
                            variants: {
                                init: {
                                    opacity: 1
                                },
                                load: {
                                    opacity: 1,
                                    transition: {
                                        delayChildren: .5,
                                        staggerChildren: .1
                                    }
                                }
                            },
                            children: [(0,
                            m.jsx)(Y, {
                                variants: t,
                                color: "#ccc",
                                target: "_blank",
                                href: "mailto:hello@cnrad.dev",
                                children: (0,
                                m.jsx)(j, {})
                            }), (0,
                            m.jsx)(Y, {
                                variants: t,
                                color: "#ccc",
                                target: "_blank",
                                href: "https://twitter.com/notcnrad",
                                children: (0,
                                m.jsx)(v, {})
                            }), (0,
                            m.jsx)(Y, {
                                variants: t,
                                color: "#ccc",
                                target: "_blank",
                                href: "https://github.com/cnrad",
                                children: (0,
                                m.jsx)(w, {})
                            }), (0,
                            m.jsx)(Y, {
                                variants: t,
                                color: "#ccc",
                                target: "_blank",
                                href: "https://linkedin.com/in/cnrad",
                                children: (0,
                                m.jsx)(y, {})
                            })]
                        }), (0,
                        m.jsx)(Z, {})]
                    }), (0,
                    m.jsx)(X, {
                        src: "/assets/background.jpg",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: .25,
                            easing: [0, 1, .5, 1]
                        }
                    })]
                })]
            })
        }
    },
    2310: function(n, t, e) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return e(7291)
        }
        ])
    }
}, function(n) {
    n.O(0, [863, 888, 179], (function() {
        return t = 2310,
        n(n.s = t);
        var t
    }
    ));
    var t = n.O();
    _N_E = t
}
]);
