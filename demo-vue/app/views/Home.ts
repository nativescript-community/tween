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
      </StackLayout>
    </Page>
    `,
    data() {
        return {
            xOffset: 0
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
        }
    }
};
