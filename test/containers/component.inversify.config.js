import { Container } from 'inversify';
import { AndroidScreen } from '../modules/android.screen';
import { CommonScreen } from '../modules/common.screen';
import { IOSScreen } from '../modules/ios.screen';
import { COMPONENT_TYPE } from './component.symbol';

export const commoncontainer = new Container();

commoncontainer.bind < CommonScreen > COMPONENT_TYPE.CommonScreen
    .to(driver.isIOS ? IOSScreen : AndroidScreen)