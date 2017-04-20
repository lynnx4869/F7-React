import 'framework7';

import '../node_modules/framework7/dist/css/framework7.ios.min.css';
import '../node_modules/framework7/dist/css/framework7.ios.colors.min.css';

window.CaiTuo = {
    $$: Framework7.$
};

window.CaiTuo.F7 = new Framework7();

const mainView = CaiTuo.F7.addView('.view-main', {
    dynamicNavbar: true
});