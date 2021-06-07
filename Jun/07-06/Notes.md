on useEffect >>

useEffect triggers a function dependent on its dependency
useEffect(() => {
console.log(
"This is useEffect. It will get triggered with every change of the dependency."
);
}, [DEPENDENCIES]);

// useEffect runs with every render >>
// useEffect(() => {
// console.log(
// "This is useEffect. It will get triggered with every render because no dependencies."
// );
// });

// useEffect runs only once >>
// useEffect(() => {
// console.log(
// "This is useEffect. It will get triggered only once after loading page because dependency array is empty."
// );
// }, []);

// useEffect runs with every change of either states count or log >>
// useEffect(() => {
// console.log(
// "This is useEffect. It will get triggered with every change of the states count and log because dependency array has count and log."
// );
// }, [count, log]);

// Stop useEffect from running on every render << use empty dependency array [] or define dependency [count] or [log] or [count, log], (if dependency is defined useEffect will run whenever the dependency changes)
// Only Run Once, on Mount << empty dependency array []
// Run useEffect on State Change << dependency is dependent on state [count] or [log] or [count, log]
// Run useEffect When a Prop Changes << send a state from parent to child, in child receive prop and import useEffect and make useEffect dependent on those props

// from App.js:
// we don't need to import useState, if we send setState through the parent to our file
// but useState has to be imported every time we want to set a state on something

Check this >>

dci@dci-HP-Laptop-15-db1xxx:~/apps/fbw48/Jun/07-06/use-effect$ git add . && git commit -m "import react, useState"
On branch main
Your branch is ahead of 'origin/main' by 5 commits.
(use "git push" to publish your local commits)

Changes not staged for commit:
(use "git add/rm <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
(commit or discard the untracked or modified content in submodules)
modified: ../../01-06/deploy-react/Notes.text
modified: ../../../May/04-05-21/currency exchanger/index.js
modified: ../../../May/06-05-21/fetch/scripts/index.js
deleted: ../../../May/26-05-21/README-Vivi.md
modified: ../../../May/26-05-21/classnames/src/Form.js
modified: ../../../May/26-05-21/classnames/src/index.js
modified: ../../../May/27-05-21/use-state/src/App.js
modified: ../../../May/27-05-21/use-state/src/components/Footer.js
modified: ../../../May/27-05-21/use-state/src/components/List.js
modified: ../../../assignments/periodic-table (modified content)
modified: ../../../passwordGen (new commits, untracked content)

Untracked files:
(use "git add <file>..." to include in what will be committed)
../../../May/26-05-21/README-Vivi.txt
../../../May/26-05-21/classnames/src/components/Clicker.js
../../../May/27-05-21/README-Vivi.text
../../../May/31-05-21/Notes-Vivi.text
../../../May/date calculator/
../../../assignments/time-apps-VivianeBusch-Wallace/
../../../node_modules/
../../../package-lock.json

no changes added to commit (use "git add" and/or "git commit -a")
