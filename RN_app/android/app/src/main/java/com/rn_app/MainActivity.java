package com.rn_app;

import com.facebook.react.ReactActivity;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RN_app";
    }
    protected List<ReactPackage> getPackages() {
		return Arrays.<ReactPackage>asList(
		  new MainReactPackage()
		, new VectorIconsPackage()
		);
	}
//	@Override
//	protected ReactActivityDelegate createReactActivityDelegate() {
//		return new ReactActivityDelegate(this, getMainComponentName()) {
//		 protected ReactRootView createRootView() {
//		  return new RNGestureHandlerEnabledRootView(MainActivity.this);
//		  }
//		};
//	  }
}
