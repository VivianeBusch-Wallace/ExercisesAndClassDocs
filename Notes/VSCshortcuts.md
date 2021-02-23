General:
create a new file --> strg + n
save the file (if file is new, will ask where to save and what to name it; if nodemon is running, it will reload nodemon's console output)--> strg + s
copy --> select word/area, strg + c
paste --> put cursor in position, strg + v
cut out --> select area or put cursor in line, strg + x OR to cut whole line just put cursor, strg + x
find --> strg + f, type in search word OR shift + F3
navigate foudn words --> shift + F3
select all words from find --> alt + enter, edit word
replace one word with another --> strg + h, type in search word and replacement
close find/replace --> escape
replace all same words with ... --> select, strg + d + d (times how many of the same word you want to change, make sure all are selected), write replacement word

select all --> strg + a

Quotes:
to double quote a word --> select a word, shift + 2/"

select:
select letter by letter from cursor --> put cursor where needed, hold: shift while: arrow left/arrow right
select whole word --> double click word OR strg + d (once)
select current line --> put cursor, strg + l
select line by line from current cursor position --> shift + arrow up/down

Brackets:
squared brackets --> select, alt gr + 8/(/[
round brackets --> select, shift + 8/(/[

Comment:
single comment line(s) --> put cursor, strg + shift + 7///{ OR strg + k + c
single uncomment line(s) --> put cursor, strg + shift + 7///{ OR strg + k + u
block comment/uncomment --> select area, strg + shift + a

Lines:
delete a line (deletes line where cursor is) --> strg + shift + k
got line ... --> strg + g, type line number

Move Cursor:
put cursor at beginning of line --> (numlock off), (on numpad:) 7/pos1 OR (in upper right corner of keyboard) pos1
put cursor at end of line --> (numlock off), (on numpad:) 1/ende OR (in upper right corner of keyboard) ende
jump cursor to end of word and of next word --> strg + arrow right
jump cursor to beginning of word and of next word --> strg + arrow left
point out all same words --> put cursor in word (this is not selecting, it just highlights their positions)

Scroll:
scroll up line by line --> strg + arrow up
scroll down line by line --> strg + arrow down
scroll up by view window/page --> (numlock off), (on numpad:) 9/bild↑ OR (in upper right corner of keyboard) Bild↑
scroll down by view window/page --> (numlock off), (on numpad:) 3/bild↓ OR (in upper right corner of keyboard) Bild↓

insert new line below (for example when cursor is in the middle of a text line, but you don't want to put the text into next line) --> strg + enter
insert new line above (for example when cursor is in the middle of a text line, but you don't want to put the text into next line) (does not work in .md file) --> strg + shift + enter

Editor:
close current editor/close split screen --> strg + w
reopen closed editor --> strg + shift + t
open next editor/move between opened editors --> strg + tab
open previous editor/move between opened editors --> strg + shift + tab

Other tricks:

HTML shortcuts:

comment (does not work inside text tags or as attribute)--> c + enter

HTML abbreviations
Sometimes you can spend longer learning to type out shortcuts than if you just manually typed the code. I personally don't find Emmet abbreviations a time saver for writing CSS, but some of the HTML abbreviations I find useful include:

Nested elements
The shortcut nav>ul>li creates:

<nav>
  <ul>
    <li></li>
  </ul>
</nav>
Multiple elements
The shortcut li*5 creates:
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
Tags with text
The shortcut a{Click Me} creates:
<a href="">Click Me</a>
Elements with multiple classes
The shortcut div.first-class.second-class creates:
<div class="first-class second-class"></div>
Elements with IDs
The shortcut div#main creates:
<div id="main"></div>

Other useful stuff: https://dev.to/hannahgooding/vs-code-shortcuts-and-tricks-that-i-wish-i-knew-sooner-3mcj
