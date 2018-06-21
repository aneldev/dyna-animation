# About

Dyna animations are a set of `less mixins` and `react component` to perform animations.

More animation react components will come to this repo.

Are written in Typescript and runs everywhere.

Version stable.

# Demo

`npm start`

# Less Mixins

[General adnimation less mixins](https://github.com/aneldev/dyna-animation/blob/master/dyna-animation-mixins.less)

# DynaAnimation

This is the core component.

It is very simple. You pass an object at `animations` prop and it applies its boolean properties as a class names.

Actually you can do animations without this component, but this simplifies and standardize the class naming convention for animatios.

This use
```
    <DynaAnimation
      className="my-container"
      animations={{
      	show: true,
      }}
    >
      <div className="play-box">My awesome contenet</div>
    </DynaAnimation>
```
...creates this class:
```
dyna-animation my-container animation-show-on
```
When the value is `true` applies `on` and when it is `false` applied `off`.

[DynaAnimation example](https://github.com/aneldev/dyna-animation/blob/master/dev/showcase/simple-one-element-animation.tsx)

[DynaAnimation example, needed css](https://github.com/aneldev/dyna-animation/blob/master/dev/showcase/simple-one-element-animation.less)

# `DynaAnimation3dFlip` - Dyna Animation 3d Flip

This container flips the content vertically or horizontally like 3d card.

Also is adjusts the `width` and `height` automatically during the animations so this is ideal for listed items!

The `width` and `height` of the content is defined in the `props` of the react component **and not in css**. This happens because JS also wants to know the the `width` and `height` in advance. In order to have only one point we define the `width` and `height` we define it in the props of `DynaAnimation3dFlip`.

The `children` you will pass (only one child is supported) should occupy all the given space from the `DynaAnimation3dFlip`.

## Props

- `className`: string - optional, is not needed really, use it only for position or margins etc
- `show`: boolean - nothing much to say about this, it shows the content or not with animations
- `width`* and `height`* - as described above
- `duration`: EAnimationDuration - The duration of the animation, possible values are `MS50` (for 50ms), `MS100`, `MS250`, `MS500`, `MS750` and `S1`; are you Typescript fun? these values are available from `EAnimationDuration` enum
- `perspective`: number - this the css perspective, it is different according the `width` _or_ `height`, the ideal is to be the same with the width, _play around with it_
- `direction`: EOrientation - use `HORIZONTAL` or `VERTICAL` and if you white in Typescipt there are enums and you can use the `EOrientation.HORIZONTAL` or the `EOrientation.VERTICAL` respectively.
- `children`*: JSX.Element - Only one child is supported, this child should occupy the whole given area (this means `width: 100%` and `height: 100%` or something similar).

* _required_

## CSSTransition support (v1)

`DynaAnimation3dFlip` supports the [CSSTransition v1](https://github.com/reactjs/react-transition-group/tree/v1-stable).

Just drop the items into the `CSSTransition` and set the `transitionName="animation-show"`. 

## Example:

```
    <DynaAnimation3dFlip
      show={true}
      perspective={400}
      width={400}
      height={150}
    >
      <div className="my-flip-3d-item">content</div>
    </DynaAnimation3dFlip>
```

[DynaAnimation3dFlip example](https://github.com/aneldev/dyna-animation/blob/master/dev/showcase/flip-3d-item-show-hide.tsx)

[DynaAnimation3dFlip example, needed css](https://github.com/aneldev/dyna-animation/blob/master/dev/showcase/flip-3d-item-show-hide.less)

## DynaAnimation3dFlip

The background transparent space jumps on enter.

This is caused from th js height definition that cannot be overridden from the css.

To solve there is need to use the `TransitionGroup` and control the height from js only through it's events.

# DynaAnimationVerticalContainer

This is the simplest animation component of this package. 

It animates the vertically to show or hide it's content.

The problem in css is that you can't animate with `height: auto`. 

Use this container the handle the visibility through the `show` prop.

Each time the container needs to show or hide the content, it calculates the height of the children.

If the content of the children is modified and the height is changed this is detected and applied instantly. This is done due to prop `autoRefresh: true`.
 
Alternative you can turn it to false and call the `refresh()` method to refresh the new height according the children height.

## Example

```   
    <DynaAnimationVerticalContainer
      show={true}
      showDuration={200}
      hideDuration={100}
    >
      <div className="vertical-container-content">
        <h1>Dear user</h1>
        <h3>I am the content</h3>
        <p>For real!</p>
      </div>
    </DynaAnimationVerticalContainer>
```

## Props

```
    IDynaAnimationVerticalContainerProps {
      className?: string;
      show: boolean;
      showDuration?: number;  // in ms
      hideDuration?: number;  // in ms
      children: any;
    }
```