
# 1주차
## Props
Most components can be customized when they are created, with different parameters. 
These creation parameters are called props.

For example, 
one basic React Native component is the Image.
 When you create an image, you can use a prop named source to control what image it shows.
 
Your own components can also use props. 
This lets you make a single component that is used in many different places in your app, 
with slightly different properties in each place. 
Just refer to this.props in your render function. 

## State 

There are two types of data that control a component: props and state. 
props are set by the parent and they are fixed throughout the lifetime of a component. 
For data that is going to change, we have to use state.

In general, you should initialize state in the constructor, and then call setState when you want to change it.
