<template>
    <Page >
        <ActionBar>
            <Label text="Vue.js Demo"/>
        </ActionBar>

        <GridLayout rows="auto, *">
            <StackLayout backgroundColor="#eeeeee" padding="10" borderBottomWidth="2" borderColor="#e3e3e3">
                <GridLayout columns="*, *" margin="10 0">
                    <Button col="0" text="Select Property" @tap="selectProperty" />
                    <StackLayout col="1" verticalAlignment="center">
                        <Label text="Selected Property:" fontWeight="bold" />
                        <Label :text="properties[selectedProperty]['name']" />
                    </StackLayout>
                </GridLayout>
                <GridLayout columns="*, *" margin="10 0">
                    <Button col="0" text="Select Easing" @tap="selectEasing" />
                    <StackLayout col="1" verticalAlignment="center">
                        <Label text="Selected Easing:" fontWeight="bold" />
                        <Label :text="easings[selectedEasing]['name']" />
                    </StackLayout>
                </GridLayout>
                <Button :text="startAnimationBtnText" @tap="startTween" :isEnabled="!isBusy" />
            </StackLayout>
            <AbsoluteLayout row="1" ref="box" class="box" horizontalAlignment="center" verticalAlignment="center"></AbsoluteLayout>
        </GridLayout>

    </Page>
</template>

<script lang="typescript">
  import { setDebug, TWEEN } from '@nativescript-community/tween';
import { action } from '@nativescript/core';

  export default {
    data() {
        return {
            properties: [
                {"name": "width", "minimum": 50, "maximum": 300},
                {"name": "height", "minimum": 50, "maximum": 300},
                {"name": "rotate", "minimum": 0, "maximum": 360},
                {"name": "scaleX", "minimum": 1, "maximum": 5},
                {"name": "scaleY", "minimum": 1, "maximum": 5},
                {"name": "translateX", "minimum": 0, "maximum": 100},
                {"name": "translateY", "minimum": 0, "maximum": 100},
                {"name": "opacity", "minimum": 1, "maximum": 0},
            ],
            easings: [
                { "name": "Linear", "in": TWEEN.Easing.Linear.None, "out": TWEEN.Easing.Linear.None },
                { "name": "Quadratic", "in": TWEEN.Easing.Quadratic.In, "out": TWEEN.Easing.Quadratic.Out },
                { "name": "Cubic", "in": TWEEN.Easing.Cubic.In, "out": TWEEN.Easing.Cubic.Out },
                { "name": "Quartic", "in": TWEEN.Easing.Quartic.In, "out": TWEEN.Easing.Quartic.Out },
                { "name": "Quintic", "in": TWEEN.Easing.Quintic.In, "out": TWEEN.Easing.Quintic.Out },
                { "name": "Sinusoidal", "in": TWEEN.Easing.Sinusoidal.In, "out": TWEEN.Easing.Sinusoidal.Out },
                { "name": "Exponential", "in": TWEEN.Easing.Exponential.In, "out": TWEEN.Easing.Exponential.Out },
                { "name": "Circular", "in": TWEEN.Easing.Circular.In, "out": TWEEN.Easing.Circular.Out },
                { "name": "Elastic", "in": TWEEN.Easing.Elastic.In, "out": TWEEN.Easing.Elastic.Out },
                { "name": "Back", "in": TWEEN.Easing.Back.In, "out": TWEEN.Easing.Back.Out },
                { "name": "Bounce", "in": TWEEN.Easing.Bounce.In, "out": TWEEN.Easing.Bounce.Out }
            ],
            animationDuration: 500,
            selectedProperty: 0,
            selectedEasing: 1,
            state: false,
            isBusy: false,
            startAnimationBtnText: "Start Animation"
        }
    },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
    methods: {
        selectProperty() {
            const propertyNames = this.properties.map(({name}) => name);

            action({
                message: "Select Propety",
                cancelButtonText: "Cancel",
                actions: propertyNames
            }).then(async result => {
                if (result != "Cancel"){
                    const newSelection = this.properties.findIndex( ({ name }) => name === result );
                    if (this.selectedProperty != newSelection) {
                        await this.reset();
                        this.selectedProperty = newSelection;
                    }
                }
            });
        },
        selectEasing() {
            const easingsNames = this.easings.map(({name}) => name);

            action({
                message: "Select Easing",
                cancelButtonText: "Cancel",
                actions: easingsNames
            }).then(async result => {
                if (result != "Cancel"){
                    const newSelection = this.easings.findIndex( ({ name }) => name === result );
                    if (this.selectedEasing != newSelection) {
                        this.selectedEasing = newSelection;
                    }
                }
            });
        },
        startTween() {
            this.state = !this.state;
            new TWEEN.Tween({ value: this.sizeToPercent(this.$refs.box.nativeView[this.properties[this.selectedProperty]["name"]], this.properties[this.selectedProperty]["minimum"], this.properties[this.selectedProperty]["maximum"]) })
                .easing(this.state ? this.easings[this.selectedEasing]["out"] : this.easings[this.selectedEasing]["in"] )
                .to({ value: this.state ? 1 : 0 }, this.animationDuration)
                .onStart(() => {
                })
                .onComplete(() => {
                })
                .onUpdate(obj => {
                    const newValue = this.percentToSize(obj.value, this.properties[this.selectedProperty]["minimum"], this.properties[this.selectedProperty]["maximum"]);
                    const box = this.$refs.box.nativeView;
                    box[this.properties[this.selectedProperty]["name"]] = newValue;
                })
                .start();
        },
        async reset() {
            if (this.state) {
                this.startAnimationBtnText = "Resetting..."
                this.isBusy = true;
                this.startTween();
                await new Promise(r => setTimeout(r, this.animationDuration * 2));
                this.isBusy = false;
                this.startAnimationBtnText = "Start Animation";
            }
        },
        sizeToPercent(value, min, max) {
            return (value-min)/(max-min);
        },
        percentToSize(percent, min, max) {
            return (percent * (max-min)) + min;
        }
    }
  };
</script>

<style scoped lang="scss">
    ActionBar {
        background-color: #42b883;
        color: white;
    }

    Button {
        background-color: #42b883;
        color: white;
        border-radius: 5;
        height: 40;
    }

    Label {
        font-size: 15;
    }

    .box {
        width: 50;
        height: 50;
        border-radius: 10;
        background-color: #42b883;
    }
</style>
