# navigation tabbar

[Getting Started with React Navigation, the Navigation Solution for React Native
](https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4)

[React Navigation](https://reactnavigation.org/docs/navigators/tab)

核心API
1. StackNavigator(RouteConfigs, StackNavigatorConfig)
2. TabNavigator(RouteConfigs, TabNavigatorConfig)



## stackNavigation配置
[StackNavigator](https://reactnavigation.org/docs/stack-navigator.html#navigationoptions-used-by-stacknavigator)
### StackNavigator(RouteConfigs, StackNavigatorConfig(navigationOptions,other));

{
  path:{
    path:componet;
    navigationOptions{
      title,
      headertitle
    }

    {// other configures
      model:

    }
  }
}

## TabNavigator
TabNavigator(RouteConfigs, TabNavigatorConfig(tabBarOptions, other))




## routerConfig:
> The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route

```
StackNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Profile: {

    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: ProfileScreen,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    path: 'people/:name',
    // The action and route params are extracted from the path.

    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    }),
  },

  ...MyOtherRoutes,
});

```



## StackNavigatorConfig || TabNavigatorConfig

1. Options for the router:
Visual options:
2.



##  Screen Navigation Options
two place you can define it
1.  on current screen(priority )
2.  on navigator




## exapmle
```

const ModalNavigator = StackNavigator(
 {
   Main: { screen: Main },
   Login: { screen: Login },
 },
 {
   headerMode: 'none',
   mode: 'modal',
   navigationOptions: {
     gesturesEnabled: false,
   },
   transitionConfig: () => ({
     transitionSpec: {
       duration: 300,
       easing: Easing.out(Easing.poly(4)),
       timing: Animated.timing,
     },
     screenInterpolator: sceneProps => {
       const { layout, position, scene } = sceneProps;
       const { index } = scene;

       const height = layout.initHeight;
       const translateY = position.interpolate({
         inputRange: [index - 1, index, index + 1],
         outputRange: [height, 0, 0],
       });

       const opacity = position.interpolate({
         inputRange: [index - 1, index - 0.99, index],
         outputRange: [0, 1, 1],
       });

       return { opacity, transform: [{ translateY }] };
     },
   }),
 }
);



```
