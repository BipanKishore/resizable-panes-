
Github pages

npm install --save gh-pages

Added to package JSON
  "homepage": "<https://BipanKishore.github.io/resizable-panes>",
    "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",

bugs list (04.05.2024)

2 panes with min-max=> when i hide min max pane (p0) then pane (p1) shows in red color only but when i hide p1 and show (p0) this thing happen not with p0 pane.
3 panes with min-max => i do p2 hide and p0 in full strength strached but p1 dosent hide.
when i minimize pane 1 it does not change color
after hide p0 and p1 p2 should be in center.
4.(p0 and p1 show and p2 hide) after full size of p0 then p1 doesn't change his color.
5.(p0 and p2 show and p1 hide) after full size of p0 color not change in red and  p2 doesn't change his color.

1. 4panes with min max => (p1 hide and others are shown)  p0 full size color not change nor p2 pane color change.
