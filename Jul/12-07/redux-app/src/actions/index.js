// step 1
const increment = (){
    return {
        type:"INCREMENT"
    };
};
const decrement = (){
    return {
        type:"DECREMENT"
    };
};
const changeName = (){
    return {
        type:"CHANGE_NAME"
    };
};

export {increment, decrement, changeName};