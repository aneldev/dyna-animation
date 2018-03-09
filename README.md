# About

## complete and simple animation "engine"

It is simple!!!

- The `dyna-animation` is switching the classes in only two states, `on` and `off`.
- Your css implementation is performing animation with keyframes.

With keyframes you have the full control of animation, so you have unlimited states.

Ideally you don't need the `dyna-animation` but this makes the switch from the props easier.

What `dyna-animation` offers also is a bunch of animation mixins. Since are implemented in less can is clean and more comprehensive to alter them or create your own based on them.

At the end... `dyna-animation` is not an engine but a nice technology mixer.

# Use cases

## in a list, how to remove an item with animation

You don't need any engine or any super tool to do this.

- pass to `dyna-animation` component (where is the wrapper of your listed item) the proper `props.animations.show: false`.
- after a timeout, remove the item from you array

All the above updates will be done through the state! So your app is totally clean.

Ideally the update the state will be done with this code:

```

class MyAwesomeLister extends React.Component {

	// ...

	getItemsShowingItem(id, show){
	}
	
	getItemsHidingItem(id, show){
		// update the item with this id to be shown or not
		// this show prop is passed to dyna-animation wrapper of the item
		return this.state.items.map(item => { 
			if (item.id === id} item.show = show;
			return item; 
		}); 
	}
	
	getItemsRemovingItem(id){
		// remove from the list the item with this id
		return this.state.items.filter(item => item.id !== id); 
	}

	showItem(id){
		this.setState({
			items: this.getItemsShowingItem(id, false) 	// start the animation to hide it
		});
		setTimeout(()=>{
			this.setState({
				items: this.getItemsRemovingItem(id),	// at the end, remove it from the list
			})
		}, 300); // 300ms is the duration of the hide animation, this comes from the css implementation
	}

	hideItem(id){	
		this.setState({
			items: this.getItemsHidinfItem(id, false) 	// start the animation to hide it
		});
		setTimeout(()=>{
			this.setState({
				items: this.getItemsRemovingItem(id),	// at the end, remove it from the list
			})
		}, 300); // 300ms is the duration of the hide animation, this comes from the css implementation
	}
	
	render(){
		const {items} = this.state;
		return (
			<div>
				{items.map(item=>(
					<DynaAnimation animations={{show: item.show}}>
						<MyItem data={item} />
					</DynaAnimation>
				))}
			</div>
		)
	}
	
	// ...

}

```

In the above code, we remove the item from the state, when the animation is completed. At this time, the item should be not visible in the screen. Techically, the height of the item should become 0, this is css job of course.

To be more correct, the `setState` should be called in the callback (2nd argument) of the `setState`. For the sake of simplicity I left it like this.

