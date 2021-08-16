Notes for React Native
https://reactnative.dev/docs/environment-setup

It takes too long to download
some global installations and some local ones

view is like div, but we cannot use div
text is like p
check core components and native components section in link

style flex:1 means fullscreen
flex:0.5 means half a page
styles are inside create objects
advantage is that it will check human mistakes for example spelling, if it was in the element immediately then it would not detect spelling mistakes
all style keys are in camel case
styles inside the element need extra curly braces

often on a phone screen the "notch" is in the way
SafeAreaView instead of View will resolve that issue

for images we need require
console.log(require(path to image)) will print out the position of the image in the folder (not the index)

touchableOpacity color on touch
touchablehighlight background highlight on touch
magicTap like double tap

<Button title="Click me" style={{backgroundColor:grey}} onPress={()=>console.log("button")} color="blue" >

alert windows are prestyled by iOS/adnroid
limited styling is possible (see button alert example by Hadi)

can't design the keyboard that appears

view does not have scrolling
need to use ScrollView

config folder contains js files with styling
kind of like a mixin
jsut export the object, then import it into your component to use the config styles like a regular object

CLI stands for command-line interface just wanted you to get it right
but we use EXPO, which stands for export?, to create mobile apps because
