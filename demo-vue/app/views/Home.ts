import { setDebug, TWEEN } from 'nativescript-tween';
import { device, screen } from 'tns-core-modules/platform';
setDebug(true);
export default {
    name: 'Home',
    template: `
    <Page>
      <ActionBar title="Tween Demo">
      </ActionBar>
      <StackLayout>
        <Button text="start" @tap="startTween"/>
        <AbsoluteLayout backgroundColor="red" width="30" height="30" :translateX="xOffset" horizontalAlignment="left"></AbsoluteLayout>

        <Button text="start2" @tap="startTween2"/>
        <StackLayout id="green" backgroundColor="green" width="100%" height="80">
            <StackLayout id="yellow" orientation="horizontal" horizontalAlignment="center" backgroundColor="yellow">
                <AbsoluteLayout width="74" height="74" verticalAlignment="center" id="brown"  backgroundColor="brown">
                    <Button text="1" borderRadius="35" backgroundColor="red" width="100%" height="100%" id="btn1"/>
                </AbsoluteLayout>
                <AbsoluteLayout ref="btnHolder" width="0" height="0" verticalAlignment="center" id="blue"  backgroundColor="blue">
                    <Button ref="btn" text="2" borderRadius="35" backgroundColor="red"  originX="0" originY="0"  width="74" height="74" id="btn2"/>
                </AbsoluteLayout>
            </StackLayout>
        </StackLayout>
      </StackLayout>

      

    </Page>
    `,
    data() {
        return {
            xOffset: 0,
            test2On: false
        };
    },
    mounted() {},
    methods: {
        startTween() {
            let startTime;
            new TWEEN.Tween({ value: 0 })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ value: 100 }, 1000)
                .onStart(() => {
                    startTime = Date.now();
                    console.log('onStart', Date.now());
                })
                .onComplete(() => {
                    console.log('onComplete', Date.now() - startTime);
                })
                .onUpdate(obj => {
                    this.xOffset = (obj.value / 100) * (screen.mainScreen.widthDIPs - 30);
                    // console.log('onUpdate', obj.value, this.xOffset, Date.now() - startTime);
                })
                .start();
        },
        startTween2() {
            this.test2On = !this.test2On;
            let startTime;
            new TWEEN.Tween({ value: this.test2On ? 0 : 1 })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ value: this.test2On ? 1 : 0 }, 1000)
                .onStart(() => {
                    startTime = Date.now();
                    console.log('onStart', Date.now());
                })
                .onComplete(() => {
                    console.log('onComplete', Date.now() - startTime);
                })
                .onUpdate(obj => {
                    const btn = this.$refs.btn && this.$refs.btn.nativeView;
                    const btnHolder = this.$refs.btnHolder && this.$refs.btnHolder.nativeView;
                    if (btn && btnHolder) {
                        btn.style.scaleX = btn.style.scaleY = obj.value;
                        btnHolder.style.width = btnHolder.style.height = obj.value * 74;
                    }
                    // console.log('onUpdate', obj.value, this.xOffset, Date.now() - startTime);
                })
                .start();
        }
    }
};
