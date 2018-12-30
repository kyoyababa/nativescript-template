// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);

import * as application from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
declare var android: any;

if (platform.isAndroid && platform.device.sdkVersion >= "21") {
  application.android.on(application.AndroidApplication.activityStartedEvent, function() {
    let window = application.android.startActivity.getWindow();
    let decorView = window.getDecorView();
    decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
  });
}
