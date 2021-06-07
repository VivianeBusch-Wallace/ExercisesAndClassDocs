on useEffect:

Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update.
Instead of thinking in terms of “mounting” and “updating” like with using classes, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

useEffect(() => {
document.title = `You clicked ${count} times`;
});
When React renders our component, it will remember the effect we used, and then run our effect after updating the DOM. This happens for every render, including the first one.

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

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do.

Why is useEffect called inside a component? Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope.

Unlike componentDidMount or componentDidUpdate, effects scheduled with useEffect don’t block the browser from updating the screen. This makes your app feel more responsive.

The majority of effects don’t need to happen synchronously.

Some effects require a cleanup. For example, we might want to set up a subscription to some external data source. In that case, it is important to clean up so that we don’t introduce a memory leak!

You might be thinking that we’d need a separate effect to perform the cleanup. But code for adding and removing a subscription is so tightly related that useEffect is designed to keep it together. If your effect returns a function, React will run it when it is time to clean up.
useEffect(() => {
function handleStatusChange(status) {
setIsOnline(status.isOnline);
}
ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
// Specify how to clean up after this effect:
return function cleanup() {
ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
};
});
Why did we return a function from our effect? This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!
an anonymous cleanup function would also work

// from App.js:
// we don't need to import useState, if we send setState through the parent to our file
// but useState has to be imported every time we want to set a state on something

React performs the cleanup when the component unmounts. React also cleans up effects from the previous render before running the effects next time.

.
.
.
.

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
